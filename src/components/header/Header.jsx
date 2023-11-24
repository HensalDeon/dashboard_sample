import logo from "../../assets/img/logo.png";
import ai from "../../assets/img/ai-logo.png";
import dArrow from "../../assets/img/icon-downArrow.svg";
import "./Header.scss"
const Header = () => {
    return (
        <main className="header">
            <div className="left-part">
                <img src={logo} alt="logo" />
            </div>
            <div className="right-part">
                <div className="logo-text">
                    <img src={ai} alt="ai" />
                    <b>XYZ Enterprises Pvt. Ltd</b>
                </div>
                <div className="down-arrow">
                    <img src={dArrow} alt="dArrow" />
                </div>
            </div>
        </main>
    );
};

export default Header;
