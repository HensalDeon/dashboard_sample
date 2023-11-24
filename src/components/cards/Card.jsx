import "./Card.scss";
import rArrow from "../../assets/img/icon-rightLenArrow.svg";
import profile from "../../assets/img/icon-profile.svg";
import upload from "../../assets/img/icon-storage.svg";
import email from "../../assets/img/icon-email.svg";
import tick from "../../assets/img/icon-tick.svg";
import { datas, planDatas } from "../../constants";
const Card = () => {
    return (
        <>
            <div className="cards">
                {datas.map((data, index) => (
                    <div key={index} className="card">
                        <h1>{data.plan}</h1>
                        <span className="strike">{data.rate}</span>
                        <span style={{ fontSize: "25px" }}>{data.monthly}</span>
                        <button style={{ background: `${data.color}` }}>
                            Get Started <img src={rArrow} alt="arrow" />
                        </button>
                        <hr />
                        <span style={{ fontSize: "12px" }}>What you&#39;ll get :</span>
                        <div className="card-bottom">
                            <div>
                                <img src={profile} alt="profile" />
                                <span>Upto {data.users} Users</span>
                            </div>
                            <div>
                                <img src={upload} alt="profile" />
                                <span>Upto {data.storage}gb Storage</span>
                            </div>
                            <div>
                                <img src={email} alt="profile" />
                                <span>{data.support}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="plan-card">
                {planDatas.map((data, index) => (
                    <div key={index} className="side">
                        <div className="contents">
                            <button className="top-btn" style={{ background: `${data?.color}` }}>
                                Free Forever
                            </button>
                            <div>
                                <h1>Free Starter</h1>
                                <span style={{ width: "inherit", flex: "wrap", fontSize: "12px" }}>{data?.desc}</span>
                            </div>
                            <button style={{ background: `${data?.color}` }}>
                                {data?.btn} <img src={rArrow} alt="arrow" />
                            </button>
                        </div>
                        <div className="card-bottom">
                            <div>
                                <img src={profile} alt="profile" />
                                <span>Upto {data.users} Users</span>
                            </div>
                            {data?.storage && (
                                <div>
                                    <img src={upload} alt="profile" />
                                    <span>Upto {data?.storage}gb Storage</span>
                                </div>
                            )}
                            {data?.support && (
                                <div>
                                    <img src={email} alt="profile" />
                                    <span>{data?.support}</span>
                                </div>
                            )}
                            <div>
                                <img src={tick} alt="profile" />
                                <span style={{ width: "inherit", flex: "wrap" }}>{data.tick}</span>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className="side">
                    <div className="card-bottom">
                        <div>
                            <img src={profile} alt="profile" />
                            <span>Upto 8 Users</span>
                        </div>
                        <div>
                            <img src={tick} alt="profile" />
                            <span>Customisation of all other features</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Card;
