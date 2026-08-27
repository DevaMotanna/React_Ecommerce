import Container from "../components/common/Container";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <Container>
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            This page is accessible only to users with the admin role.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-950 p-5">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Orders
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                128
              </h2>
            </div>

            <div className="rounded-2xl bg-gray-50 dark:bg-gray-950 p-5">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Products
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                42
              </h2>
            </div>

            <div className="rounded-2xl bg-gray-50 dark:bg-gray-950 p-5">
              <p className="text-sm text-gray-500 dark:text-gray-400">Users</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                16
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminDashboard;
