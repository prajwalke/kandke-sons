import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold">Admin Panel</h2>
      <ul className="mt-6 space-y-4">
        <li>
          <Link to="/dashboard" className="hover:text-gray-300">
            📊 Dashboard
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-gray-300">
            🛒 Products
          </Link>
        </li>
        <li>
          <Link to="/orders" className="hover:text-gray-300">
            📦 Orders
          </Link>
        </li>
        <li>
          <Link to="/users" className="hover:text-gray-300">
            👤 Users
          </Link>
        </li>
        <li>
          <Link to="/reports" className="hover:text-gray-300">
            📑 Reports
          </Link>
        </li>
        <li>
          <button className="text-red-500">🚪 Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
