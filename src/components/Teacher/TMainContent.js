import React from "react";
import './TMainContent.css'
const MainContent = () => {
    return ( 
        <div className="MainContent">
            <div className="Search">
            <input type="text" placeholder="Search..."></input>
            </div>
            <div className="post">
                <form className="p-text">
                    <textarea placeholder="what's in your mind today?"></textarea>
                </form>
                <footer className="itm">
                    <button className="btn">Post</button>
                    <ul>
                        <li>
                            <a href="#"><i class="fa fa-map-marker"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-camera"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-film"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-microphone"></i></a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
     );
}
 
export default MainContent;