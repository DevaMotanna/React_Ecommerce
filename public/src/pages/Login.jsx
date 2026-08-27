import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/ui/Button";
import useAuth from "../hook/useAuth";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/profile";

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const result = login(formData);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <Container>
        <div className="max-w-md mx-auto rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Mock Login
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Learn JWT auth flow with mock access and refresh tokens.
          </p>

          <div className="mb-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-4 text-sm text-blue-700 dark:text-blue-300">
            <p>
              <strong>Customer:</strong> customer@example.com / 123456
            </p>
            <p>
              <strong>Admin:</strong> admin@example.com / 123456
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="rounded-xl bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-600 dark:text-red-300">
                {error}
              </div>
            )}

            <Button className="w-full">Login</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
