import React from 'react'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import pieCircle from '../../assests/icons/pie-icon.svg'
import GraphChange1 from '../../assests/icons/graph-change.svg'
import graphChange2 from '../../assests/icons/graph-change2.svg'
import Arrow from '../../assests/icons/arrowdown2.svg'
import Line from '../../assests/icons/line2.svg'
import Bar from '../../assests/icons/bar2.svg'
import './style.scss'
import Popup from './Popup'
const MyChart = () => {
    const [series, setSeries] = useState([
        {
            name: "High - 2013",
            data: [28, 29, 33, 36, 32, 32, 33]
        }
    ],)
    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Average High & Low Temperature',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: 'Temperature'
            },
            min: 5,
            max: 40
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    },)
    const [chartType, setChartType] = useState("line")
    const [activePop, setActivePop] = useState(false)
    const openPop = () => {
        setActivePop(true)
    }
    return (
        <div className='container my-chart-wrapper'>
            <p className="heading-wrap">
                Historic Data
                <span className="loacted-area">
                    in Paschim Vihar
                </span>
            </p>
            <div className="action-wrap">
                <div className="row">
                    <button className="btn">
                        <img src={pieCircle} alt="" />
                        <span>Paschim Vihar</span>
                    </button>
                    <button className="btn">
                        <img src={pieCircle} alt="" />
                        <span>Add to Compare</span>
                    </button>
                    <button className="btn" onClick={openPop}>
                        <img src={pieCircle} alt="" />
                        <span>Add to Compare</span>
                    </button>
                </div>
                <div className="row"></div>
                <div className="row row2">
                    <div className={`${chartType === 'line' ? 'active' : ''} icons-wrap`} onClick={() => setChartType('line')}>
                        <span className='svg-icon'></span>
                    </div>
                    <div className={`${chartType === 'bar' ? 'active' : ''} icons-wrap`} onClick={() => setChartType('bar')}>
                        <span className='svg-icon bar-icon'></span>
                    </div>

                    <button className="btn">
                        <span>PM10 (μg/m3)</span>
                        <img src={Arrow} alt="" />
                    </button>

                    <button className="btn">
                        <span>24 hours</span>
                        <img src={Arrow} alt="" />
                    </button>
                </div>

            </div>
            <ReactApexChart
                options={options}
                series={series}
                type={chartType}
                height={350}
                key={chartType}
            />

            {activePop && <Popup setActivePop={setActivePop} />}
        </div >
    )
}

export default MyChart
