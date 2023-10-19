import React from "react";
import './style.css'
import Logo from '../../../assests/icons/aqi-logo.svg.svg'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img
                        src={Logo}
                        alt="logo"
                    />
                </div>
                <div className="nav-elements">
                    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                        <span style={{
                            "marginTop": "30px",
                            "marginBottom": "4px"
                        }}>Home</span>
                        <span className="pointer"></span>
                    </div>
                    <span>Ranking</span>
                    <span>Monitors</span>
                    <span>
                        Resources
                        <span className="downArrow"></span>
                    </span>
                </div>
                <span className="language">
                    <span className="globeImage"></span>
                    Eng
                    <span className="downArrow"></span>
                </span>
                <span className="seperate"></span>
                <span className="loginButton">Login</span>
            </div>
        </>
    );
};

export default Header;
