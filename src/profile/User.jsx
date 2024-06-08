import React from "react";
import "../css/user.css"
import img from "../assets/images/ProfileCard.png"
import img1 from "../assets/images/ProfileCard (1).png"
import img2 from "../assets/images/ProfileCard (2).png"
import img3 from "../assets/images/ProfileCard (3).png"
import img4 from "../assets/images/ProfileCard (4).png"



export const User = () => {
    return(
        <div className="">
           <div className="header">
            <nav class="navbar">
        < div class="container-fluid">
            <a class="navbar-brand name-net" href="#">NETFLIX</a>
           </div>
           </nav>
           <div className="parent-div">
                <div className="pro-div">
                    <h6 className="text-center">Kim Izliyor</h6>
                    <div className="row">
                        <div className="col-md-2 m-2 ">
                            <img src={img} width={"100px"} />
                            <h5 className="text-center">Murat</h5>
                        </div>
                        <div className="col-md-2  m-2">
                            <img src={img1} width={"100px"} />
                            <h5 className="text-center">Umut</h5>
                        </div>
                        <div className="col-md-2 m-2">
                            <img src={img2} width={"100px"} />
                            <h5 className="text-center">Kemal</h5>
                        </div>
                        <div className="col-md-2 m-2">
                            <img src={img3} width={"100px"} />
                            <h5 className="text-center">Cocuk</h5>
                        </div>
                        <div className="col-md-2 m-2">
                            <img src={img4} width={"100px"} />
                            <h5 className="text-center add">Add profile</h5>
                        </div>
                    </div>
                    <div className="button-profile mt-5">
                    <button className="btn btn-primary mt-4">Click Me</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}