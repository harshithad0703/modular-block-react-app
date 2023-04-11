import React from "react";
import Fetch from "../Fetch";

const Home = () => {
    const { homePage } = Fetch();
    return (
        <div id="home">
            {homePage[0] && homePage[0].map((h) => {
                return (
                    <div key={h.uid} className="main">
                        <h1 className="headings_hi">{h.wish}</h1>
                        <h1 className="headings1">{h.title}</h1> <br></br>
                    </div>
                )
            })}
        </div>
    )
}
export default Home;