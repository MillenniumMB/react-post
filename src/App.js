import './App.css';
import TasksWindow from "./ListTask/Posts";
import {BrowserRouter, Redirect, Route, Routes} from "react-router-dom";
import Navigation from "./Component/Navigation/Navigation";
import MyRoute from "./Route/MyRoute";

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <MyRoute/>
        </BrowserRouter>
);
}

export default App;
