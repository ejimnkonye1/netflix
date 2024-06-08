import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
import "../css/login.css"



export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [showPassword, setshowpassword] = useState(false)

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value);
    setEmailTouched(true);
    setEmailValid(value.includes("@"));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value
    setPassword(value);
    setPasswordTouched(true);
    setPasswordValid(value.length >= 7)


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true)
    setPasswordValid(value.length >= 7)
    setEmailValid(email.includes("@")); // Simple email validation check
    

    if (emailValid && passwordValid) {
      // Handle form submission
      console.log("Form submitted with email:", email, password);
    }
  };
const togglePasswordVisibility = () => {
  setshowpassword(!showPassword)
}
  const SignCode = () => {
  navigate('/mobile')

  }
    return(
        <div className="container">
            <div className="backgroud-img">
            <div className="header">
            <nav class="navbar">
        < div class="container-fluid">
            <a class="navbar-brand netflix-name" href="#">NETFLIX</a>
           </div>
           </nav>
                
            </div>
           
 
<div className="main-div">
            <div className="black-container">
            <form className="m-5" onSubmit={handleSubmit}>
  <header className="sign">Sign in</header>
  <div class="form-floating mb-3 mt-4">
  <input type="email" 
  class={`form-control ${emailTouched && (emailValid? "is-valid" : "is-invalid")}`}
  id="floatingInput"
  onChange={handleEmailChange}
  placeholder="name@example.com" />
  <label for="floatingInput">Email address</label>
  <div className="valid-feedback">Looks good!</div>
  <div className="invalid-feedback">Please provide a valid email.</div>
</div>
<div className="form-floating mt-4 mb-2 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${passwordTouched && (passwordValid ? "is-valid" : "is-invalid")}`}
                  id="floatingPassword"
                  onChange={handlePasswordChange}
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Your password must be more than 7 characters.</div>
                <span
                  className="position-absolute top-50 down-50 end-0  translate-middle-y me-5"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>



 


  <div className="login-button mt-4">
    <button className="btn btn-danger">Sign in</button>

  </div>
 <div>
    <p className="text-center text-light mt-3">OR</p>
 </div>
 <div className="sign-button">
    <button className="btn btn-light" onClick={SignCode}>Use a Sign-in code</button>

  </div>
  <div className="forget text-center mt-4 ">
    <a href="#" className="frgt">Forget password</a>
  </div>
  <div class="form-check mt-3">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label text-light" for="defaultCheck1">
    Remember me
  </label>
</div>
<div className="d-flex ">
    <p className=" new-cl m-1">New to Netflix?
    </p><a href="#" className="text-light m-1 sign-link ">Sign up now.</a>
</div>
<div>
    <p className="learn">This page is protected by Google reCAPTCHA
         to<br /> ensure you're not a bot
  <a href="#" className="learn-a">  Learn more.</a> </p>
</div>
</form>


            </div>
            </div>
          
            <footer class=" py-5 footer  text-lg-start">
 
 <div class="container small-top py-5">
    <div className="footer-head"> 
    <a href="">Question? Contact us</a>
    </div>
  
   <div class="row  small-row">
    
     <div class="col-lg-3 col-md-6 mb-4 mb-md-0 col-6 ">
  

       <ul class="list-unstyled mb-0">
         <li>
           <a href="#!" class="text-body">FAQ</a>
         </li>
         <li className="mt-3">
           <a href="#!" class="text-body ">Cookie Preferences</a>
         </li>
       </ul>
     </div>
   
     <div class="col-lg-3 col-md-6 mb-4 mb-md-0 col-6 ">
    

       <ul class="list-unstyled">
         <li>
           <a href="#!" class="text-body">Help center</a>
         </li>
         <li className="mt-3">
           <a href="#!" class="text-body ">Corporate information</a>
         </li>
       </ul>
     </div>
   
     <div class="col-lg-3 col-md-6 mb-4 mb-md-0 col-6">
   

       <ul class="list-unstyled mb-0">
         <li>
           <a href="#!" class="text-body">Terms of use</a>
         </li>
         
       </ul>
     </div>
    
     <div class="col-lg-3 col-md-6 mb-4 mb-md-0 col-6">
   

       <ul class="list-unstyled">
         <li>
           <a href="#!" class="text-body">Privcay</a>
         </li>
      
       </ul>
     </div>
   
   </div>
  
 </div>





</footer>
            </div>


        </div>
        
    )
}