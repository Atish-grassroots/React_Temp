import React, { useState } from 'react';
import '../src/assets/css/style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const serverResponse = {
      profile: 1, // This could be 1 for Agent or 2 for Admin, based on actual authentication
    };

    if (serverResponse.profile === 1) {
      console.log('Logged in as Agent');
      // Redirect to Agent dashboard or perform actions for Agent
    } else if (serverResponse.profile === 2) {
      console.log('Logged in as Admin');
      // Redirect to Admin dashboard or perform actions for Admin
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your username & password to login</p>
                    </div>
                    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" className="form-control" id="yourUsername" required value={username} onChange={(e) => setUsername(e.target.value)} />
                          <div className="invalid-feedback">Please enter your username.</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="yourPassword" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value={rememberMe} id="rememberMe" onChange={(e) => setRememberMe(e.target.checked)} />
                          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;