import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

const Home = () => {
    const [chartData, setChartData] = useState({})
    const [chartBData, setChartBData] = useState({})
    const [dados, setDados] = useState({})
    const [eixox, setEixox] = useState({})

    useEffect(() =>{
        fetch("http://localhost:5000/iluminatti").then(response => response.json().then(data => {setDados(data)}))
    },[])

    useEffect(() =>{
        fetch("http://localhost:5000/time").then(response => response.json().then(data => {setEixox(data)}))
    },[])

    const chart = () => {
        setChartData({
            labels: eixox,
            datasets: [
                {
                    label: 'energia',
                    data: dados,
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