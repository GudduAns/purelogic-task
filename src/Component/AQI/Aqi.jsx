import React from 'react'
import './style.scss'
import Air from '../../assests/icons/WeatherIcon.svg'
import Air2 from '../../assests/icons/air2.svg'
import Sun from '../../assests/icons/sun.svg'
import Locate from '../../assests/icons/current-location-svgrepo-com.svg'
import Heart from '../../assests/icons/heart.svg'
import Share from '../../assests/icons/share.svg'
import Circle from '../../assests/icons/new-circel.svg'
import Boy from '../../assests/icons/good-boy.svg'
import Sun2 from '../../assests/icons/sun2.svg'
import Nevigate from '../../assests/icons/nevigate.svg'
import WaterDrop from '../../assests/icons/water-drop.svg'
import UVIcon from '../../assests/icons/uv-sun.svg'
const Aqi = () => {
    return (
        <div className="body container">
            <div className="top">
                <span className="weatherButton">
                    <img
                        src={Air}
                        alt="wind"
                    />
                    AQI
                </span>
                <span className="weather">
                    <img
                        src={Sun}
                        alt="sun"
                    />{" "}
                    Weather
                </span>
            </div>
            <div className="second">
                <div className="cityInfo">
                    <span className='wind'>
                        <img
                            src={Air2}
                            alt="wind"
                            style={{ marginRight: 5 }}
                        />
                        Air Quality in
                    </span>
                    <span className='city' style={{}}>
                        Paschim Vihar, New delhi, India
                    </span>
                    <span
                        style={{
                            fontWeight: 600,
                            fontSize: 12,
                            lineHeight: "20px",
                            color: "rgb(103, 117, 128)",
                            opacity: " 0.65"
                        }}
                    >
                        Nearest monitor is 0.8 km far{" "}
                    </span>
                </div>
                <span className="locate">
                    <img
                        src={Locate}
                        alt="location"
                    />{" "}
                    Locate me
                </span>
                <div className="share">
                    <img
                        src={Heart}
                        alt="heart"
                    />
                    <span>20.6k</span>
                    <img
                        src={Share}
                        alt="shareIcon"
                    />
                </div>
            </div>
            <div className="third-section">
                <div>
                    <div className="third-section-1">
                        <div className="img-wrapper">
                            <div className="img-wrap">
                                <img
                                    src={Circle}
                                    alt="aqi"
                                />
                                <span className="liveAqi">40</span>

                            </div>
                        </div>
                        <div className="live">
                            <div className='live-wrap'>
                                <div className="circle1 blinking-element" />
                                <p>
                                    Live AQI
                                </p>
                            </div>
                            <p
                                className='poor-text'
                            >
                                Good
                            </p>
                            <div className='lastupdate-wrap'>
                                <span >
                                    Last Update:
                                </span>
                                <span>
                                    2 hr ago
                                </span>
                            </div>
                        </div>
                        {/* <div className="border-line-wrap"> */}
                        <div className="border-line"></div>
                        {/* </div> */}
                        <p
                            className="condition"
                        >
                            You can go outside without fear and enjoy the day
                        </p>
                        <div className="boy-img-wrap">
                            <img
                                src={Boy}
                                alt="boy"
                            />
                        </div>
                    </div>
                    <div className="indicator-body" style={{ display: "flex", gap: 1 }}>
                        <div id={1} style={{ display: "flex", flexDirection: "column" }}>
                            <span
                                className="arrow-down"
                                style={{ display: "block", alignSelf: "center" }}
                            />
                            <p
                                style={{
                                    margin: 0,
                                    textAlign: "center",
                                    fontWeight: 700,
                                    fontSize: 10,
                                    lineHeight: "14px",
                                    color: "rgb(103, 117, 128)"
                                }}
                            >
                                Good
                            </p>
                            <div
                                className="indicator"
                                style={{ background: "rgb(61, 190, 52)" }}
                            />
                        </div>
                        <div id={2} style={{ display: "flex", flexDirection: "column" }}>
                            <p
                                style={{
                                    margin: 0,
                                    textAlign: "center",
                                    fontWeight: 700,
                                    fontSize: 10,
                                    lineHeight: "14px",
                                    color: "rgb(103, 117, 128)"
                                }}
                            >
                                Moderate
                            </p>
                            <div
                                className="indicator"
                                style={{ background: "rgb(240, 228, 49)" }}
                            />
                        </div>
                        <div id={3} style={{ display: "flex", flexDirection: "column" }}>

                            <p
                                style={{
                                    margin: 0,
                                    textAlign: "center",
                                    fontWeight: 700,
                                    fontSize: 10,
                                    lineHeight: "14px",
                                    color: "rgb(103, 117, 128)"
                                }}
                            >
                                Poor
                            </p>
                            <div
                                className="indicator"
                                style={{ background: "rgb(231, 88, 53)" }}
                            />
                        </div>
                        <div id={4} style={{ display: "flex", flexDirection: "column" }}>
                            <p
                                style={{
                                    margin: 0,
                                    textAlign: "center",
                                    fontWeight: 700,
                                    fontSize: 10,
                                    lineHeight: "14px",
                                    color: "rgb(103, 117, 128)"
                                }}
                            >
                                Unhealthy
                            </p>
                            <div
                                className="indicator"
                                style={{ background: "rgb(234, 81, 159)" }}
                            />
                        </div>
                        <div id={5} style={{ display: "flex", flexDirection: "column" }}>
                            <p
                                style={{
                                    margin: 0,
                                    textAlign: "center",
                                    fontWeight: 700,
                                    fontSize: 10,
                                    lineHeight: "14px",
                                    color: "rgb(103, 117, 128)"
                                }}
                            >
                                Severe
                            </p>
                            <div
                                className="indicator"
                                style={{ background: "rgb(188, 79, 204)" }}
                            />
                        </div>
                        <div id={6} style={{ display: "flex", flexDirection: "column" }}>
                            <p
                                style={{
                                    margin: 0,
                                    textAlign: "center",
                                    fontWeight: 700,
                                    fontSize: 10,
                                    lineHeight: "14px",
                                    color: "rgb(103, 117, 128)"
                                }}
                            >
                                Hazardous
                            </p>
                            <div
                                className="indicator"
                                style={{ background: "rgb(201, 32, 51)" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="liveTemp">
                    <div className="liveTempContainer">
                        <div style={{ display: "flex", gap: 10, marginRight: 30 }}>
                            <img
                                className="sunIcon"
                                src={Sun2}
                                alt="Sun"
                            />
                            <div>
                                <span className="liveTempData"> 28.7 ° </span>
                                <span className="liveTempCelsius"> C</span>
                                <p className="liveTempCelsius">Mostly sunny</p>
                                <img
                                    src={Nevigate}
                                    alt="max wind"
                                    style={{ paddingRight: 8 }}
                                />
                                <span className="liveTempWindDirectionText">9 km/hr</span>
                            </div>
                        </div>
                        <div style={{ display: "inline-grid" }}>
                            <div className="upBetween" />
                            <div className="downBetween" />
                        </div>
                        <div className="liveTempRightContainer">
                            <div className="liveTempRainPercentageContainer">
                                <img src={WaterDrop} alt="drop-icon" style={{ height: 22 }} />
                                <p className="liveTempRainPercentage">70 %</p>
                            </div>
                            <span className="liveSunContainer">
                                <img
                                    src={UVIcon}
                                    alt="SunUvIcon"
                                    style={{ height: 22 }}
                                />
                                <span className="liveTempRainPercentage">43</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Aqi
