import "./App.css";
import { useEffect, useState } from "react";
const WildernessFinder = require("./img/WildernessFinder.gif");
const pokemern = require("./img/pokemern.gif");
const explore = require("./img/explore.gif");
const resume = require("./img/BlakeHunterResume2022.pdf");

function App() {
    const [top, setTop] = useState(0);
    const [bg, setBg] = useState(false);

    window.addEventListener("scroll", () => {
        const topBorder = document
            .getElementById("navbar-container")
            .getBoundingClientRect().top;
        setTop(topBorder);
        const fixTheNav = () => {
            document.getElementById("navbar").classList.add("fixed");
            document.getElementById("AboutMe").classList.add("navFix");
        };
        const removeTheNav = () => {
            document.getElementById("navbar").classList.remove("fixed");
            document.getElementById("AboutMe").classList.remove("navFix");
        };
        topBorder >= 0 ? removeTheNav() : fixTheNav();
    });

    const buttonClick = (e) => {
        e.preventDefault();
        if (!bg) {
            document.getElementById("root").classList.add("background");
            document
                .getElementById("navbar")
                .classList.add("easterColorChange");
            document.getElementById("navbar").classList.remove("navbar-light");
            document.getElementById("navbar").classList.add("navbar-dark");
            document
                .getElementById("social-part")
                .classList.add("faColorChange");
            document
                .getElementById("social-part1")
                .classList.add("faColorChange");
            document
                .getElementById("social-part2")
                .classList.add("faColorChange");
            setBg(true);
        } else {
            document.getElementById("root").classList.remove("background");
            document
                .getElementById("navbar")
                .classList.remove("easterColorChange");
            document.getElementById("navbar").classList.add("navbar-light");
            document.getElementById("navbar").classList.remove("navbar-dark");
            document
                .getElementById("social-part")
                .classList.remove("faColorChange");
            document
                .getElementById("social-part1")
                .classList.remove("faColorChange");
            document
                .getElementById("social-part2")
                .classList.remove("faColorChange");
            setBg(false);
        }
    };
    return (
        <>
            <div className="mainPage">
                <section id="homePageView">
                    <div className="subHeaderName h2 mb-3">Blake Hunter</div>
                    <div className="subheaderText">
                        <div className="mb-2">
                            Software Engineer with full stack experience in
                            Python, Javascript (Node.js, React), and C#.
                        </div>
                        <div className="pl-2">
                            Dedicated to learning and mastering new
                            technologies, with a current focus on React
                        </div>
                    </div>
                </section>
                <section id="navbar-container">
                    <div className="navSplit">
                        <nav
                            class="navbar navbar-expand-lg navbar-light "
                            id="navbar"
                        >
                            <a
                                class="logo"
                                type="submit"
                                onClick={(e) => buttonClick(e)}
                            >
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
                                                <a class="nav-link" href="#">
                                                    Home
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    href="#AboutMe"
                                                >
                                                    My Story
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    href="#languages"
                                                >
                                                    Languages
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    href="#work"
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
                                                class="fa fa-github "
                                                aria-hidden="true"
                                                id="social-part"
                                            ></i>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/blake-hunter-55369161/"
                                            target="_blank"
                                        >
                                            <i
                                                class="fa fa-linkedin "
                                                aria-hidden="true"
                                                id="social-part1"
                                            ></i>
                                        </a>
                                        <a href="mailto:<nowiki>bhunter87@gmail.com">
                                            <i
                                                class="fa fa-envelope"
                                                aria-hidden="true"
                                                id="social-part2"
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
                        <div className=" mainColLeft">My Story:</div>
                        <div className=" mainColRight aboutBox">
                            Hey! I'm Blake! Before venturing into the world of
                            software engineering, I spent nearly 20 years
                            working in the trades, from building houses to
                            running a handyman company, I've a little of about
                            everything. In all that time, I learned a few key
                            takeaways about myself, most notably, the I'm
                            absolutly in love problem-solving! That love and a
                            desire to change the direction of my life lead me to
                            myfreecodecamp where I completed a couple modules
                            and, after seeing that I had a mind for it and got a
                            small glimpse of the possibilities, I took a leap
                            and signed up for a coding bootcamp.
                            <br />
                            <br />
                            While a number of my class struggled through the
                            process, I found myself becoming obsessed with the
                            new tools and what I could do with them, leading me
                            to range far outside of the typical bootcamp course
                            work and into things like web scraping and
                            socket.io. Why am I rambling, you may be asking? To
                            hopefully express that I am a seasoned creator,
                            thinker, and problem solver who's just been handed a
                            shiny new set of tools, and in desperate need of a
                            solid team to help guide him through the process of
                            becoming a Software Engineer!
                        </div>
                    </div>
                </section>
                <section className="body" id="languages">
                    <div className="infoBoxes">
                        <div className=" mainColLeft colAdjust">Languages:</div>
                        <div className="  mainColRight ">
                            Full-Stack development experience with C#,
                            Javascript, and Python
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
                    <div className="work infoBoxes" id="work">
                        <div className=" colAdjust mainColLeft">
                            Recent Work:
                        </div>
                        <div className=" mainColRight">
                            <div className="mb-5">
                                <strong>Wilderness Finder</strong>{" "}
                                React/C#/MySql
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
            </div>
        </>
    );
}

export default App;
