import "./App.css";
import { useEffect, useState } from "react";

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

    return (
        <>
            <section id="homePageView">
                <div className="subHeaderName h2 mb-3">Blake Hunter</div>
                <div className="subheaderText pb-3">
                    <div className="mb-2">
                        <span className="firstLetter">S</span>oftware Engineer
                        with full stack experience in Python, Javascript
                        (Node.js, React), and C#.
                    </div>
                    <div className="pl-2">
                        <span className="firstLetter">D</span>edicated to
                        learning and mastering new technologies, with a current
                        focus on React
                    </div>
                </div>
            </section>
            <section id="navbar-container">
                <nav class="navbar navbar-expand-lg" id="navbar">
                    <a class="logo" href="#">
                        BH
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    Home <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#AboutMe">
                                    About Me
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#languages">
                                    Languages
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#work">
                                    Recent Work
                                </a>
                            </li>
                        </ul>
                        <div class="social-part">
                            <i
                                class="fa fa-github text-dark"
                                aria-hidden="true"
                            ></i>
                            <i
                                class="fa fa-linkedin text-dark"
                                aria-hidden="true"
                            ></i>
                            <i
                                class="fa fa-envelope text-dark"
                                aria-hidden="true"
                            ></i>
                        </div>
                    </div>
                </nav>
            </section>

            <div className="mainPage  mt-lg-5">
                <section className="container body" id="AboutMe">
                    <div className="infoBoxes">
                        <div className="col-lg-3 col-sm-12 mainColLeft">
                            About:
                        </div>
                        <div className="col-lg-6 col-sm-12 mainColRight mt-5">
                            Hello! My name is Blake and problem-solving is my
                            passion. I've always been fairly handy, and for many
                            years that expressed itself in a rich career in the
                            trades, eventually leading to my starting a small
                            commercial handyman/IT company.
                            <br />
                            <br />
                            While I enjoy working with my hands, a whole new
                            world was opened to me after completing a Full-Stack
                            bootcamp with Coding Dojo, and all of my focus is
                            currently on exploring the depths and possibilities
                            in Softeware Engineering.
                        </div>
                    </div>
                </section>
                <section className="container body" id="languages">
                    <div className="infoBoxes">
                        <div className="col-lg-3 col-sm-12 mainColLeft mr-5">
                            Languages:
                        </div>
                        <div className="col-lg-6 col-sm-12 mainColRight mt-5">
                            Full-Stack development experience with Python,
                            Javascript, and C#
                            <br />
                            <br />
                            React
                            <br /> Express.js
                            <br /> Node.js
                            <br /> Ajax
                            <br /> MongoDB
                            <br /> ASP.NET Core
                            <br />
                            Flask
                            <br /> MySql
                            <br /> CSS3
                            <br /> HTML5
                            <br /> Socket.io
                            <br /> Axios
                        </div>
                    </div>
                </section>
                <section className="container body" id="work">
                    <div className="work">
                        <div className="col-lg-3 col-sm-12 mainColLeft">
                            Recent Work:
                        </div>
                        <div className="col-lg-6 col-sm-12 mainColRight mt-5">
                            <div className="mb-5">
                                <strong>Wilderness Finder</strong>{" "}
                                React/C#/MySql
                                <br />
                                <br />
                                <a href="https://github.com/bhunter87">
                                    <img src="WildernessFinder.gif" alt="" />
                                </a>
                            </div>
                            <div className="mb-5">
                                <strong>Pokemern</strong> MongoDB/Express/Node
                                js./React
                                <br />
                                <br />
                                <a href="https://github.com/bhunter87">
                                    <img src="Pokemern.gif" alt="" />
                                </a>
                            </div>
                            <div className="mb-5">
                                <strong>Explore America API</strong> C# DotNet6
                                <br />
                                <br />
                                <a href="https://github.com/bhunter87">
                                    <video src="api.webm" alt="" />
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
