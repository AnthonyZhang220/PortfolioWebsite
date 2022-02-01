import React from 'react';
import "./About.scss";

export default function About() {


    return (
        <div className='about' id="about">
            <div className="title-aboutme">
                <h2>
                    About Me
                </h2>
            </div>
            <div className="about-me">
                <div className="illustration">
                    <img src="assets/images/frontend-developer-illustration-concept-vector.jpg" alt="illustration avatar" />
                </div>
                <div className="summary">
                    <p>
                        About me description section.
                    </p>
                </div>
            </div>
            <div className="title-skills">
                <h2>Skills</h2>
            </div>
            <div className="technology">
                <div className='categories'>
                    <div className='frontend'>
                        <div className="category-name">
                            Front End
                            <div className="catogory-icon">
                                <i className="fas fa-code"></i>
                            </div>
                        </div>
                        <div className="tech-icons">
                            <i className="fab fa-html5"></i>
                            <div className="tech-name">
                                HTML5
                            </div>
                            <i className="fab fa-css3-alt"></i>
                            <div className="tech-name">
                                CSS3
                            </div>
                            <i className="fab fa-js-square"></i>
                            <div className="tech-name">
                                Javascript
                            </div>
                        </div>
                    </div>
                    <div className="backend">
                        <div className="category-name">
                            Back End
                            <div className="catogory-icon">
                                <i className="fas fa-server"></i>
                            </div>
                        </div>
                        <div className="tech-icons">
                            <i className="fab fa-node-js"></i>
                            <div className="tech-name">
                                Node.js
                            </div>
                        </div>
                    </div>
                    <div className="frameworks">
                        <div className="category-name">
                            Frameworks
                            <div className="catogory-icon">
                                <i className="fas fa-layer-group"></i>
                            </div>
                        </div>
                        <div className="tech-icons">
                            <i className="fab fa-react"></i>
                            <div className="tech-name">
                                React
                            </div>
                        </div>
                    </div>
                    <div className="tools">
                        <div className="category-name">
                            Tools
                            <div className="catogory-icon">
                                <i className="fas fa-tools"></i>
                            </div>
                        </div>
                        <div className="tech-icons">
                            <i className="fab fa-git-alt"></i>
                            <div className="tech-name">
                                Git
                            </div>
                        </div>
                    </div>
                    <div className="database">
                        <div className="category-name">
                            Database
                            <div className="catogory-icon">
                                <i className="fas fa-database"></i>
                            </div>
                        </div>
                        <div className="tech-icons">

                        </div>


                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
