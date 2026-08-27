export const generateMockToken = (payload, expiresInMinutes) => {
  const expiresAt = Date.now() + expiresInMinutes * 60 * 1000;

  return btoa(
    JSON.stringify({
      ...payload,
      expiresAt,
    }),
  );
};

export const decodeMockToken = (token) => {
  try {
    return JSON.parse(atob(token));
  } catch (error) {
    return null;
  }
};

export const isTokenExpired = (token) => {
  try {
    const decoded = decodeMockToken(token);
    if (!decoded?.expiresAt) return true;
    return Date.now() > decoded.expiresAt;
  } catch (error) {
    return null;
  }
};
