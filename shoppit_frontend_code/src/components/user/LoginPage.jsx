import { Link } from "react-router-dom"
import "./LoginPage.css"


const LoginPage = () => {


  return (
    <div className="login-container my-5">
<div className="login-card shadow">
    
    <h2 className="login-title">Welcome Back</h2>
    <p className="login-subtitle">Gain access to your account</p>
    <form>
        <div className="mb-3">
            <label htmlFor="username" className="form-label text-sm">Username</label>
            <input type="username" className="form-control" id="email" placeholder="Enter your username" required />
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
        </div>
       
        <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
    <div className="login-footer">
        <p>Do not have an account? <Link to="/signup">Sign up</Link></p>
    </div>
</div>
</div>

  )
}

export default LoginPage


