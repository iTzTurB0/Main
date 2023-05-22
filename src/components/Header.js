import React from "react";

const Header = () => {
    return (
        <div className="header-wraper">
         <div className="main-info">
            <h1>web development and websites promotions</h1>
            <a href="#" className="btn-main-offer">contact me</a>
            <div className="info-about-me">
            <h2 className="title1">About me</h2>   
            <p className="info">Hello, my name is MAJDI, im 21 years old male, i live<br/>
            in tunisia sousse stare to be exact i started web developing<br/>
            5 months ago i learned it at Gomycode and now im trying to find a<br/>
            team to work with so i'll be happy if you contact me because that<br/> 
                                will change my career.</p>
                                <h2 className="title1">Skills</h2>   
                                <ul className="ski-lls">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Algorithm</li>
                                    <li>DOM</li>
                                    <li>ES6,Node and React</li>
                                </ul>
                                <h2 className="title1">Projects</h2>
                                <p className="info">i didnt work on a big projects because that requires a big team<br/>
                                but i working on a small projects by myself like: a multi portfolio,<br/>
                                Shooping card and full health web site called docplanner u can check it.</p>
            </div>
         </div>
        </div>
    )
    }

    export default Header