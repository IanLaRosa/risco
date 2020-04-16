import React, { useState, useEffect, Component } from 'react'
import { Line } from 'react-chartjs-2'

const Home = () => {
    const [chartData, setChartData] = useState({})
    const [chartBData, setChartBData] = useState({})
    const [dados, setDados] = useState({})
    const [eixox, setEixox] = useState({})
    const chart = () => {
        setChartData({
            labels: eixox.times,
            datasets: [
                {
                    label: 'Energia [Watts]',
                    data: dados.reads,
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
            labels: [],
            datasets: [
                {
                    label: 'Energia [Watts]',
                    data: [],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        fetch("http://127.0.0.1:5000/readings").then(response => response.json().then(data => {setDados(data)}))
        fetch("http://127.0.0.1:5000/time").then(response => response.json().then(data => {setEixox(data)}))
        chart()
        chartB()
    },[])

    console.log(dados.reads)
    console.log(eixox.times)
    return(
        <div className="App">
            <h1>Consumo iluminação da cabine no vôo</h1>
            <div style={{height: "600px", width:"800px"}}>
                {Object.keys(eixox.times).length && Object.keys(dados.reads).length &&
                    <Line data={chartData} options={{
                        responsive: true
                    }}/>
                }
            </div>
            <h1>Consumo ar condicionado da cabine no vôo</h1>
            <div style={{height: "600px", width:"800px"}}>
                {Object.keys(eixox.times).length && Object.keys(dados.reads).length &&
                    <Line data={chartBData} options={{
                        responsive: true
                    }}/>
                }
            </div>
        </div>
    )

}

export default Home;
