import React from 'react'
import './style.scss'
import { MapContainer, TileLayer } from "react-leaflet";
import SearchIcon from '../../assests/icons/SearchIcon.svg'
import logo from '../../assests/icons/aqi-logo.svg.svg'
const position = [51.505, -0.09];
const index = () => {
    return (
        <div className="location-container">
            <MapContainer center={position} zoom={2} maxZoom={20}>
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

            </MapContainer>
            <div className="mapItems">
                <div className="searchBar">
                    <img
                        src={SearchIcon}
                        alt="Search Icon"
                    />
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Search Location"
                    />
                </div>
                <div className="mapExpand">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: "30.116px", height: "14.651px", marginLeft: 18 }}
                    />
                    <span style={{ marginLeft: 6 }}>Map</span>
                    <span className="dotedBox"></span>
                </div>
            </div>
        </div>

    )
}

export default index
