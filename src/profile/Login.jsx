import React from "react"
import { useNavigate } from "react-router-dom"
import "../css/login.css"


export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailTouched(true);
    setEmailValid(e.target.checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailTouched(true);
    setEmailValid(email.includes("@")); // Simple email validation check

    if (emailValid) {
      // Handle form submission
      console.log("Form submitted with email:", email);
    }
  };

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
            <form className="m-5">
  <header className="sign">Sign in</header>
  <div class="form-floating mb-3 mt-4">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mt-4 mb-2">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
  <label for="floatingPassword">Password</label>
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