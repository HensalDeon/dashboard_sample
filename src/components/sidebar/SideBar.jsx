import { useEffect } from "react";
import { motion } from "framer-motion";
import ai from "../../assets/img/ai-logo.png";
import rArrow from "../../assets/img/icon-rightArrow.svg";
import "./SideBar.scss";

export default function SideBar() {
    const toggleSidebar = () => document.body.classList.toggle("open");
    useEffect(() => {
        const SideBar = document.querySelector(".sidebar");
        SideBar.classList.add("initial");
        setTimeout(() => {
            SideBar.classList.remove("initial");
        }, 100);
    }, []);

    return (
        <motion.aside className="sidebar">
            <div className="sidebar-inner">
                <header className="sidebar-header">
                    <span type="button" className="sidebar-burger" onClick={toggleSidebar}></span>
                    <div className="sidebar-profile">
                        <img src={ai} className="profile" />
                        <p>
                            Ram Mohan <img src={rArrow} alt="right-arrow" />{" "}
                        </p>
                        <span>rammohan2@gmail.com</span>
                    </div>
                </header>
                <nav className="sidebar-nav">
                    <button type="button">
                        <a className="material-symbols-outlined" to={"../home"}>
                            <img style={{ width: "2rem" }} src={ai} alt="home"></img>
                        </a>
                        <span>Dashboard</span>
                    </button>
                    <button type="button">
                        <a className="material-symbols-outlined" to={"/chat"}>
                            <img style={{ width: "2rem" }} src={ai} alt="chat" />
                        </a>
                        <span style={{ animationDelay: "0.1s" }}>Perks</span>
                    </button>
                    <button type="button">
                        <a className="material-symbols-outlined" to={"/explore"}>
                            <img style={{ width: "2rem" }} src={ai} alt="explore" />
                        </a>
                        <span style={{ animationDelay: "0.1s" }}>Addons</span>
                    </button>
                    <button type="button">
                        <a className="material-symbols-outlined" to={"/saved"}>
                            <img style={{ width: "2rem" }} src={ai} alt="saved" />
                        </a>
                        <span style={{ animationDelay: "0.3s" }}>FAQ</span>
                    </button>
                    <button type="button">
                        <a className="material-symbols-outlined" to={`/`}>
                            <img style={{ width: "2rem" }} src={ai} alt="profile" />
                        </a>
                        <span style={{ animationDelay: "0.5s" }}>Support</span>
                    </button>
                </nav>
                <footer className="sidebar-footer">
                    <button type="button">
                        <span>Logout</span>
                    </button>
                </footer>
            </div>
        </motion.aside>
    );
}
