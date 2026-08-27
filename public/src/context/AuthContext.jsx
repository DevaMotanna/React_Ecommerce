import { createContext, useContext, useEffect, useMemo, useState } from "react";
import users from "../data/users.json";
import {
  loadFromStorage,
  saveToStorage,
  removeFromStorage,
} from "../utils/storage";
import {
  generateMockToken,
  decodeMockToken,
  isTokenExpired,
} from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() =>
    loadFromStorage("currentUser", null),
  );
  const [accessToken, setAccessToken] = useState(() =>
    loadFromStorage("accessToken", null),
  );
  const [refreshToken, setRefreshToken] = useState(() =>
    loadFromStorage("refreshToken", null),
  );

  const login = ({ email, password }) => {
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!matchedUser) {
      return { success: false, message: "Invalid email or password" };
    }

    const access = generateMockToken(
      {
        id: matchedUser.id,
        email: matchedUser.email,
        role: matchedUser.role,
        type: "access",
      },
      15,
    );

    const refresh = generateMockToken(
      {
        id: matchedUser.id,
        email: matchedUser.email,
        role: matchedUser.role,
        type: "refresh",
      },
      60 * 24 * 7,
    );

    setCurrentUser(matchedUser);
    setAccessToken(access);
    setRefreshToken(refresh);

    return { success: true, user: matchedUser };
  };

  const logout = () => {
    setCurrentUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    removeFromStorage("currentUser");
    removeFromStorage("accessToken");
    removeFromStorage("refreshToken");
  };

  const refreshAccessToken = () => {
    if (!refreshToken || isTokenExpired(refreshToken)) {
      logout();
      return false;
    }

    const decoded = decodeMockToken(refreshToken);

    const newAccessToken = generateMockToken(
      {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
        type: "access",
      },
      15,
    );

    setAccessToken(newAccessToken);
    return true;
  };

  useEffect(() => {
    saveToStorage("currentUser", currentUser);
  }, [currentUser]);

  useEffect(() => {
    saveToStorage("accessToken", accessToken);
  }, [accessToken]);

  useEffect(() => {
    saveToStorage("refreshToken", refreshToken);
  }, [refreshToken]);

  useEffect(() => {
    if (accessToken && isTokenExpired(accessToken)) {
      refreshAccessToken();
    }
  }, []);

  const value = useMemo(
    () => ({
      currentUser,
      accessToken,
      refreshToken,
      isAuthenticated:
        !!currentUser && !!accessToken && !isTokenExpired(accessToken),
      login,
      logout,
      refreshAccessToken,
    }),
    [currentUser, accessToken, refreshToken],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
