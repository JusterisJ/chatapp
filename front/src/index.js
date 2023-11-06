import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider} from "./components/context/UserContext";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import RegistrationLogin from "./components/registrationLogin/RegistrationLogin";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";
import Users from "./components/Users";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
          <BrowserRouter>
          <Routes>

                  <Route element={<App />}>

                      <Route exact path="/main" element={<MainPage />} />
                      <Route exact path="/" element={<RegistrationLogin />} />
                      <Route exact path="/posts" element={<Posts/>}/>
                      <Route exact path="/newPost" element={<NewPost/>}/>
                      <Route exact path="/users" element={<Users/>}/>
                  </Route>



          </Routes>
          </BrowserRouter>
      </UserProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
