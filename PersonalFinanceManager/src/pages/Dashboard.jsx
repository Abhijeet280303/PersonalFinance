import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
        <h4 className="text-center">Finance Manager</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard">🏠 Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">💰 Transactions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">📊 Budget</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">👤 Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/login">🚪 Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main Dashboard Content */}
      <div className="container-fluid p-4">
        <h2>Dashboard</h2>

        {/* Overview Cards */}
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow p-3 text-center">
              <h5>Income</h5>
              <h3 className="text-success">$5,000</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-3 text-center">
              <h5>Expenses</h5>
              <h3 className="text-danger">$2,500</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-3 text-center">
              <h5>Balance</h5>
              <h3 className="text-primary">$2,500</h3>
            </div>
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="mt-4">
          <h4>Recent Transactions</h4>
          <table className="table table-striped mt-2">
            <thead className="table-dark">
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-02-20</td>
                <td>Salary</td>
                <td className="text-success">+$3,000</td>
                <td>✅ Completed</td>
              </tr>
              <tr>
                <td>2025-02-18</td>
                <td>Groceries</td>
                <td className="text-danger">-$120</td>
                <td>✅ Completed</td>
              </tr>
              <tr>
                <td>2025-02-15</td>
                <td>Electricity Bill</td>
                <td className="text-danger">-$80</td>
                <td>✅ Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
