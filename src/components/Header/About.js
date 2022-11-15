import React from "react";
import './About.css';
import ashish from '../images/ashish.jpg';
 const About = () => {
    return ( 
        <div className="content-main">
            <h1>
                 EduLearn
            </h1>
            <p>
            EduLearn is an educational technology  offering a communication, collaboration, and coaching platform for many schools and teachers.
            <br/>Designed by students of Software Technology Domain
            <br/>Centurion University 
            </p>

            <div className="team-mate">
                <div className="board">
                    <div className="card1">
                    <img src="..." class="card-img-top" alt="..."/>
                        <h5>Ajay Gupta</h5>
                        <div className="pra">
                            <p>Software Technology</p>
                            <p style={{align:'center'}}>
                                <a className="button" href="/#">Read More</a>
                            </p>
                        </div>
                    </div>

                    <div className="card1">
                    <img src="..." class="card-img-top" alt="..."/>
                        <h5>Md Faizan</h5>
                        <div className="pra">
                            <p>Software Technology</p>
                            <p style={{align: 'center'}}>
                                <a className="button" href="/#">Read More</a>
                            </p>
                        </div>
                    </div>

                    <div className="card1">
                    <img src="" class="card-img-top" alt="..."/>
                        <h5>Ashish Kumar Sahoo</h5>
                        <div className="pra">
                            <p>Software Technology</p>
                            <p style={{align: 'center'}}>
                                <a className="button" href="/#">Read More</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="board">
                    <div className="card1">
                    <img src="..." class="card-img-top" alt="..."/>
                        <h5>Bhagabat SS Mohapatra</h5>
                        <div className="pra">
                            <p>Software Technology</p>
                            <p style={{align:'center'}}>
                                <a className="button" href="/#">Read More</a>
                            </p>
                        </div>
                    </div>

                    <div className="card1">
                    <img src="..." class="card-img-top" alt="..."/>
                        <h5>Nishant Biswal</h5>
                        <div className="pra">
                            <p>Software Technology</p>
                            <p style={{align: 'center'}}>
                                <a className="button" href="/#">Read More</a>
                            </p>
                        </div>
                    </div>

                    <div className="card1">
                    <img src="..." class="card-img-top" alt="..."/>
                        <h5>Rohit Sahoo</h5>
                        <div className="pra">
                            <p>Software Technology</p>
                            <p style={{align: 'center'}}>
                                <a className="button" href="/#">Read More</a>
                            </p>
                        </div>
                    </div>
                </div>



            </div>

        </div>
     );
 }
  
 export default About;