import React, { useState } from "react";  
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import PrivateRouter from './PrivateRouter';   
function AppRouter() {
  const [isAuth, setIsAuth] = useState(false)
  const AuthContainer = () => (   
    <div>
      <Navbar />
      <PrivateRouter isAuth={isAuth} exact path="/" component={Home} />
      <PrivateRouter isAuth={isAuth} path="/about" component={About} />
      <PrivateRouter isAuth={isAuth} path="/details" component={Details} />
    </div>
  );
  return (
    <BrowserRouter>
      <Switch>
      <Route         
          path="/login"
          exact
          component={() => <Login setIsAuth={setIsAuth} />}
        />
         <Route component={AuthContainer} />   
      </Switch>
    </BrowserRouter>
  );
}
export default AppRouter;