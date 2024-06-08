import React from "react";
import "../css/user.css"
import img from "../assets/images/ProfilePicture.png"
import img1 from "../assets/images/ProfilePicture (1).png"
import img2 from "../assets/images/ProfilePicture (2).png"
import img3 from "../assets/images/ProfilePicture (3).png"
import img4 from "../assets/images/ProfilePicture (4).png"



export const User = () => {
    return(
        <div className="user-div">
           <div className="header">
            <nav class="navbar">
        < div class="container-fluid">
        <div className="names">
            <a class="navbar-brand name-net" href="#">NETFLIX</a>
            </div>
           </div>
           </nav>
           <div className="parent-div">
                <div className="pro-div">
                <h6 className="text-center">Kim Izliyor</h6>
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-3 col-sm-4 col-4 m-2">
            <img src={img} width={"100px"} alt="Murat" />
            <h6 className="text-center mt-3">Murat</h6>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-4 m-2">
            <img src={img1} width={"100px"} alt="Umut" />
            <h6 className="text-center mt-3">Umut</h6>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-4 m-2">
            <img src={img2} width={"100px"} alt="Kemal" />
            <h6 className="text-center mt-3">Kemal</h6>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-4 m-2">
            <img src={img3} width={"100px"} alt="Cocuk" />
            <h6 className="text-center mt-3">Cocuk</h6>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-4 m-2">
            <img src={img4} width={"100px"} alt="Add Profile" />
            <h6 className="text-center mt-3 add">Add profile</h6>
          </div>
                    </div>
                    {/* <div className="button-profile mt-5">
                    <button className="btn btn-primary mt-4">Click Me</button>
                    </div> */}
                </div>
                </div>
            </div>
        </div>
    )
}