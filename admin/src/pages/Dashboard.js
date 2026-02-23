import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-xl">Total Products</h3>
            <p className="text-2xl font-bold">50</p>
          </div>
          <div className="bg-green-500 p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-xl">Total Orders</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-xl">Total Sales</h3>
            <p className="text-2xl font-bold">$5,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
