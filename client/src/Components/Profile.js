import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Profile() {
    const [userdata, setUserdata] = useState({});
    console.log("header  response", userdata)

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });

            setUserdata(response.data.user)

        } catch (error) {
            console.log("error", error)
        }
    }

    // logoout
    const logout = () => {
        window.open("http://localhost:6005/logout", "_self")
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <div>
            <ul>
                {
                    Object?.keys(userdata)?.length > 0 ? (
                        <>
                            <li style={{ color: "black", fontWeight: "bold" }}>{userdata?.displayName}</li>
                            <li>
                                <NavLink to="/dashboard">
                                    Dashboard
                                </NavLink>
                            </li>
                            <li onClick={logout}>Logout</li>
                            <li>
                                
                                    <img src={userdata?.image} style={{ width: "50px", borderRadius: "50%" }} alt="" />
                                
                            </li>
                        </>
                    ) : <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                }
            </ul>
            <div>
                <ul>
                    <div>Data :-  {userdata?.accType}</div>
                    <div>Data :-  {userdata?.bio}</div>
                    <div>Data :-  {userdata?.displayName}</div>
                    <div>Data :-  {userdata?.email}</div>
                    <div>Data :-  {userdata?.phone}</div>
                    <div>Data :-  {userdata?.password}</div>
                </ul>
            </div>
            <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25">
                                    <img src={userdata?.image} className="img-radius" alt="User-Profile-Image"/>
                                </div>
                                <h6 className="f-w-600">Hembo Tingor</h6>
                                <p>Web Designer</p>
                                <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className="text-muted f-w-400">98979989898</h6>
                                    </div>
                                </div>
                                <Link/>
                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Recent</p>
                                        <h6 className="text-muted f-w-400">Sam Disuja</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Most Viewed</p>
                                        <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                    </div>
                                </div>
                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            
        </div>
    )
}
