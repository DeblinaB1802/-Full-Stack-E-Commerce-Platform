import { Link } from "react-router-dom"
import "./LoginPage.css"

const SignUpPage = () => {
  return (
    <div className="login-container my-5">
<div className="login-card shadow">
    
    <h2 className="login-title">Create an account.</h2>
    <p className="login-subtitle">Become a valued member at Shoppit!</p>
    <form>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input className="form-control" id="username" placeholder="Enter your username" required />
        </div>


        <div className="mb-3">
            <label htmlFor="firstname" className="form-label">firstname</label>
            <input type="firstname" className="form-control" id="firstname" placeholder="Enter your firstname" required />
        </div>

        <div className="mb-3">
            <label htmlFor="lastname" className="form-label">lastname</label>
            <input type="lastname" className="form-control" id="lastname" placeholder="Enter your lastname" required />
        </div>

        

        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
        </div>

        <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm_password" placeholder="Confirm your password" required />
        </div>
       
        <button type="submit" className="btn btn-primary w-100">Create account</button>
    </form>
    <div className="login-footer">
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
    </div>
</div>
</div>
  )
}

export default SignUpPage
