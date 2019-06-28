import React, {Component} from  'react'
import { Route, BrowserRouter} from "react-router-dom";
import Register from "./user/Register";
import Login from "./user/Login";
import Home from "./home/Home";
import UploadPage from "./upload/Upload";

class Router extends Component {
    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Route exact path = "/" component = {Home}/>
                        <Route exact path = "/user/register" component = {Register}/>
                        <Route exact path = "/user/login" component = {Login}/>
                        <Route exact path = "/upload" component = {UploadPage}/>
                    </div>
                </BrowserRouter>
        );
    }
}

export default Router