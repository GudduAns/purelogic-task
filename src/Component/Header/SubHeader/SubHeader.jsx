import React from "react";
import "./style.scss";
const SubHeader = () => {
    return (
        <div className="subHeader">
            <div className="city">
                <span >
                    Rohini Sector 5 :
                </span>
                <span >
                    104
                </span>
                <span>AQI</span>
            </div>
            <span>
                <span className="between"></span>
            </span>
            <div className="city">
                <span >
                    Rohini Sector 7 :
                </span>
                <span >
                    93
                </span>
                <span>AQI</span>
            </div>
            <span>
                <span className="between"></span>
            </span>
            <div className="city">
                <span >
                    Saraswati Marg :
                </span>
                <span >
                    105
                </span>
                <span>AQI</span>
            </div>
            <span>
                <span className="between"></span>
            </span>
            <div className="city">
                <span >Deepali :</span>
                <span >
                    93
                </span>
                <span>AQI</span>
            </div>
            <span>
                <span className="between"></span>
            </span>
            <div className="city">
                <span >
                    Rohini Sector 10 :
                </span>
                <span >
                    103
                </span>
                <span>AQI</span>
            </div>
            <span></span>
        </div>
    );
};

export default SubHeader;
