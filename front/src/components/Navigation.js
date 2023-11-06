import React from 'react';
import {useGlobalUserContext, UserContext} from "./context/UserContext";
import swal from "sweetalert";
import {Link, useNavigate} from "react-router-dom";
import "./navigation.css"


export default function Navigation() {
    let navigate = useNavigate()
    const { signOut, userData } = useGlobalUserContext(UserContext);
    return (
        <div className="navigation">
            <button>Profile</button>
            <button>Messages</button>
            <Link to={"/posts"}><button>Posts</button></Link>
            <Link to={"/users"}><button>Users</button></Link>
            <button
                onClick={() => {
                    swal({
                        title: "Ar tikrai atsijungti?",
                        icon: "warning",
                        buttons: ["Atšaukti", "Gerai"],
                    }).then((isConfirm) => {
                        if (isConfirm) {
                            signOut();
                            navigate("/");
                        }
                    });
                    //signOut();
                    // navigate("/");
                }}
                className={`navigation-button custom-export`}
            >

                <p>Atsijungti</p>
            </button>
        </div>
    );
}
