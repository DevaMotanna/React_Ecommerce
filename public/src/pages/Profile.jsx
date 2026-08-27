import Container from "../components/common/Container";
import Button from "../components/ui/Button";
import useAuth from "../hook/useAuth";

const Profile = () => {
  const { currentUser, accessToken, refreshToken, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <Container>
        <div className="max-w-3xl mx-auto rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Profile
          </h1>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-950 p-5">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Name
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {currentUser?.name}
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 dark:bg-gray-950 p-5">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Role
              </p>
              <p className="font-semibold capitalize text-gray-900 dark:text-white">
                {currentUser?.role}
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 dark:bg-gray-950 p-5 md:col-span-2">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Email
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {currentUser?.email}
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-4">
              <h2 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                Mock Access Token
              </h2>
              <p className="break-all text-sm text-blue-800 dark:text-blue-200">
                {accessToken}
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 dark:bg-purple-900/20 p-4">
              <h2 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                Mock Refresh Token
              </h2>
              <p className="break-all text-sm text-purple-800 dark:text-purple-200">
                {refreshToken}
              </p>
            </div>
          </div>

          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
