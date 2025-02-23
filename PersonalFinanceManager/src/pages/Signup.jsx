import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Create a password" />
          </div>

          <button className="btn btn-success w-100">Sign Up</button>
        </form>

        <div className="text-center mt-3">
          <small>Already have an account? <Link to="/login">Login</Link></small>
        </div>
      </div>
    </div>
  );
}

export default Signup;
 