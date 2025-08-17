import styles from "./UserInfo.module.css"
import pic from "../../assets/profile_pic.jpg"

const UserInfo = () => {
  return (
    <div className="row mb-4">
    <div className={`col-md-3 py-3 card ${styles.textCenter}`}>
      <img
        src={pic}
        alt="User Profile"
        className={`img-fluid rounded-circle mb-3 mx-auto ${styles.profileImage}`}
      />
      <h4>John Doe</h4>
      <p className="text-muted">johndoe@gmail.com</p>
      <button className="btn  mt-2" style={{ backgroundColor: '#6050DC', color: 'white' }}>Edit Profile</button>
    </div>
    <div className="col-md-9">
      <div className="card">
        <div className="card-header" style={{ backgroundColor: '#6050DC', color: 'white' }}>
          <h5>Account Overview</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
            
              <p>
                <strong>Full Name:</strong> John Doe
              </p>
              <p>
                <strong>Email:</strong> johndoe@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 09098765432
              </p>
            </div>
            <div className="col-md-6">
            <p>
                <strong>Username:</strong> John
              </p>
              <p>
                <strong>City:</strong> Lagos
              </p>
              <p>
                <strong>Country:</strong> Lagos
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserInfo
