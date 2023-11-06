import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage";
import RegistrationLogin from "./components/registrationLogin/RegistrationLogin";
import Navigation from "./components/Navigation";
import {Outlet} from "react-router-dom";
import {useGlobalUserContext, UserContext} from "./components/context/UserContext";


function App() {
    const { userData } = useGlobalUserContext(UserContext);
    let showNav = false
    console.log(showNav)
    if (userData !== undefined && userData.hasOwnProperty("email")) {
        showNav = true
    }
  return (
      <>  {showNav && (<Navigation/>)  }
          {/*<div className="row">*/}
          {/*    <div className="col-2 p-0 position-fixed">*/}
          {/*        <Navigation />*/}
          {/*    </div>*/}

              <div className="col-lg-10 offset-lg-2 log-md-10 offset-md-1 ">
                  <Outlet />
              </div>

      </>
  );
}

export default App;
