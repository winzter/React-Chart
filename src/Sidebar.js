import { Component } from "react";
import {Link} from "react-router-dom"
import './Sidebar.css';
class Sidebar extends Component{
    render(){
        return(
            <div className="Con">
                <nav>
                    <Link to="/" className="home" >Home</Link>
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/chart" className="chart" >Chart</Link>
                </nav>
            </div>
        )
    }
}
export default Sidebar;