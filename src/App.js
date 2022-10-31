import "./App.css";
import { useEffect, useState } from "react";
const WildernessFinder = require("./img/WildernessFinder.gif");
const pokemern = require("./img/pokemern.gif");
const explore = require("./img/explore.gif");
const resume = require("./img/BlakeHunterResume2022.pdf");
function App() {
    const [top, setTop] = useState(0);

    window.addEventListener("scroll", () => {
        const topBorder = document
            .getElementById("navbar-container")
            .getBoundingClientRect().top;
        setTop(topBorder);
        topBorder >= 0
            ? document.getElementById("navbar").classList.remove("fixed")
            : document.getElementById("navbar").classList.add("fixed");
    });

    const buttonClick = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section id="homePageView">
                <div className="subHeaderName h2 mb-3">Blake Hunter</div>
                <div className="subheaderText">
                    <div className="mb-2">
                        Software Engineer with full stack experience in Python,
                        Javascript (Node.js, React), and C#.
                    </div>
                    <div className="pl-2">
                        Dedicated to learning and mastering new technologies,
                        with a current focus on React
                    </div>
                </div>
            </section>
            <section id="navbar-container">
                <div className="navSplit">
                    <nav
                        class="navbar navbar-expand-lg navbar-light "
                        id="navbar"
                    >
                        <a class="logo" onClick={(e) => buttonClick(e)}>
                            BH
                        </a>
                        <div className="btn-group dropdown">
                            <button
                                class="navbar-toggler mx-5"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarText"
                                aria-controls="navbarText"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon mr-5 "></span>
                            </button>

                            <div
                                class="collapse navbar-collapse"
                                id="navbarText"
                            >
                                <div>
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                href="#"
                                                data-bs-toggle="collapse"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                href="#AboutMe"
                                                data-bs-toggle="collapse"
                                            >
                                                About Me
                                            </a>
                                        </li>
                                        <li
                                            class="nav-item"
                                            data-bs-toggle="collapse"
                                        >
                                            <a
                                                class="nav-link"
                                                href="#languages"
                                                data-bs-toggle="collapse"
                                            >
                                                Languages
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                href="#work"
                                                data-bs-toggle="collapse"
                                            >
                                                Recent Work
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                href={resume}
                                                download
                                            >
                                                Download Resume
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="social-part">
                                    <a
                                        href="https://github.com/bhunter87"
                                        target="_blank"
                                    >
                                        <i
                                            class="fa fa-github text-dark"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/blake-hunter-55369161/"
                                        target="_blank"
                                    >
                                        <i
                                            class="fa fa-linkedin text-dark"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                    <a href="mailto:<nowiki>bhunter87@gmail.com">
                                        <i
                                            class="fa fa-envelope text-dark"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>

            {/* <div className="mainPage col"> */}
            <section className="body col" id="AboutMe">
                <div className="infoBoxes topInfo">
                    <div className=" mainColLeft">About:</div>
                    <div className=" mainColRight aboutBox">
                        Hello! My name is Blake and problem-solving is my
                        passion. I've always been fairly handy, and for many
                        years that expressed itself in a rich career in the
                        trades, eventually leading to my starting a small
                        commercial handyman/IT company.
                        <br />
                        <br />
                        While I enjoy working with my hands, a whole new world
                        was opened to me after completing a Full-Stack bootcamp
                        with Coding Dojo, and all of my focus is currently on
                        exploring the depths and possibilities in Software
                        Engineering.
                    </div>
                </div>
            </section>
            <section className="body" id="languages">
                <div className="infoBoxes">
                    <div className=" mainColLeft colAdjust">Languages:</div>
                    <div className="  mainColRight ">
                        Full-Stack development experience with C#, Javascript,
                        and Python
                        <hr />
                        <strong>Technologies</strong>
                        <div className="lastCol">
                            <ul>
                                <li>React </li>
                                <li>Node.js </li>
                                <li>Express </li>
                                <li>MongoDb </li>
                                <li>Ajax </li>
                            </ul>
                            <ul>
                                <li>MySql </li>
                                <li>CSS3 </li>
                                <li>HTML5 </li>
                                <li>Socket.io </li>
                                <li>Axios </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body" id="work">
                <div className="work infoBoxes">
                    <div className=" colAdjust mainColLeft">Recent Work:</div>
                    <div className=" mainColRight">
                        <div className="mb-5">
                            <strong>Wilderness Finder</strong> React/C#/MySql
                            <br />
                            <br />
                            <a href="https://github.com/bhunter87/wildernessfinder">
                                <img src={WildernessFinder} alt="" />
                            </a>
                        </div>
                        <div className="mb-5">
                            <strong>Pokemern</strong> MongoDB/Express/Node
                            js./React
                            <br />
                            <br />
                            <a href="https://github.com/bhunter87">
                                <img src={pokemern} alt="" />
                            </a>
                        </div>
                        <div className="mb-5">
                            <strong>Explore America API</strong> C# DotNet6
                            <br />
                            <br />
                            <a href="https://exploreamericaapi.web.app/">
                                <img src={explore} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* </div> */}
        </>
    );
}

export default App;
