import React, { useState, useEffect, Component } from 'react'
import { Line } from 'react-chartjs-2'

const Home = () => {
    const [chartData, setChartData] = useState({})
    const [chartBData, setChartBData] = useState({})
    const [dados, setDados] = useState({})
    const [eixox, setEixox] = useState({})
    const chart = () => {
        setChartData({
            labels: eixox.time,
            datasets: [
                {
                    label: 'energia',
                    data: dados.ilmunicacao,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    const chartB = () => {
        setChartBData({
            labels: ['b','b','b','b'],
            datasets: [
                {
                    label: 'rede',
                    data: [123, 3, 32, 10],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        fetch("http://127.0.0.1:5000/iluminatti" ,{ mode: 'no-cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}).then(response => response.json().then(data => {setDados(data)}))
        fetch("http://127.0.0.1:5000/time", { mode: 'no-cors' , headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}).then(response => response.json().then(data => {setEixox(data)}))
        chart()
        chartB()
    },[])
    return(
        <div className="App">
            <h1>Lorem</h1>
            <div style={{height: "600px", width:"800px"}}>
                <Line data={chartData} options={{
                    responsive: true
                }}/>
            </div>
            <h1>Lorem2</h1>
            <div style={{height: "600px", width:"800px"}}>
                <Line data={chartBData} options={{
                    responsive: true
                }}/>
            </div>
        </div>
    )

}

export default Home;