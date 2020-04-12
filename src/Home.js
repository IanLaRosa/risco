import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

const Home = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['segunda','terca','quarta','quinta','sexta'],
            datasets: [
                {
                    label: 'energia',
                    data: [123, 3, 32, 10, 22],
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
    },[])
    return(
        <div className="App">
            <h1>Lorem</h1>
            <div>
                <Line data={chartData}/>
            </div>
        </div>
    )

}

export default Home;