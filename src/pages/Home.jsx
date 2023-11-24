import { useState } from "react";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import "./Home.scss";
import Card from "../components/cards/Card";
import add from "../assets/img/icon-add.svg";
import bell from "../assets/img/icon-bell.svg";
const Home = () => {
    const [activeSpan, setActiveSpan] = useState("monthly");

    const handleSpanClick = (spanType) => {
        setActiveSpan(spanType);
    };
    return (
        <>
            <Header />
            <div className="home">
                <SideBar />
                <section>
                    <img className="bell" src={bell} alt="" />
                    <h1 className="heading">Choose a plan that&#39;s just right for you!</h1>
                    <div className="time">
                        <div className="box">
                            <span
                                className={`time-span ${activeSpan === "monthly" ? "bg" : ""}`}
                                onClick={() => handleSpanClick("monthly")}
                            >
                                Monthly
                            </span>
                            <span
                                className={`time-span ${activeSpan === "annually" ? "bg" : ""}`}
                                onClick={() => handleSpanClick("annually")}
                            >
                                Annually &nbsp;
                                <sup>-10%</sup>
                            </span>
                        </div>
                    </div>
                    <div>
                        <Card />
                    </div>
                    <img className="add" src={add} alt="" />
                </section>
            </div>
        </>
    );
};

export default Home;
