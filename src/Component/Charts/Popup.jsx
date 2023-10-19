import React, { useRef, useEffect } from "react";
import './popStyle.scss'
import SearchIcon from '../../assests/icons/SearchIcon.svg'
import flag from '../../assests/icons/flag.svg'
const Popup = ({ setActivePop }) => {
    const ref = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setActivePop(false)
                console.log('outside')
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return (
        <div className="popup-main-wrapper">
            <div className="pop-wrap" ref={ref}>
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
                <div className="city-wrap">
                    <div className="main">

                        <div className="city-name-wrap">
                            <img src={flag} alt="" className='flag' />
                            <p className='city'>Rohini Sec 7</p>
                        </div>
                        <p className="rating">
                            14
                        </p>
                    </div>
                    <div className="main">

                        <div className="city-name-wrap">
                            <img src={flag} alt="" className='flag' />
                            <p className='city'>Rohini Sec 7</p>
                        </div>
                        <p className="rating">
                            14
                        </p>
                    </div>
                    <div className="main">

                        <div className="city-name-wrap">
                            <img src={flag} alt="" className='flag' />
                            <p className='city'>Rohini Sec 7</p>
                        </div>
                        <p className="rating">
                            14
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
