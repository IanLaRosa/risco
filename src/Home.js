import React, { useState, useEffect, Component } from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js'
import classes from "./LineGraph.module.css"
let myLineChart;

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;

class LineGraph extends Component {
    chartRef = React.createRef();
    

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, labels } = this.props;
        

        console.log(this.props)
        console.log(labels)
        console.log(data)

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Sales",
                        data: data,
                        borderColor: "#6610f2"
                    }
                ],

                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],

                        xAxes: [{
                            ticks: {
                                type: 'linear'
                            }
                        }]
                    }
                }
            }
        });
    }

    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

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

    function ToggleButtonGroupControlled() {
        const [col, setCol] = useState({});
        const handleChange = (val) => setCol(val);
        return (
          <ToggleButtonGroup type="checkbox" value={col} onChange={handleChange}>
            <ToggleButton value={"total"}>Total</ToggleButton>
            <ToggleButton value={"iluminacao"}>Iluminação</ToggleButton>
            <ToggleButton value={"servidor"}>Wi-Fi</ToggleButton>
            <ToggleButton value={"ar_conds"}>Ar Cond.</ToggleButton>
            <ToggleButton value={"bancadas"}>Computadores</ToggleButton>
          </ToggleButtonGroup>
        );
    }

    useEffect(() => {
        // fetch("http://127.0.0.1:5000/readings").then(response => response.json().then(data => {setDados(data)}))
        // fetch("http://127.0.0.1:5000/time").then(response => response.json().then(data => {setEixox(data)}))
        fetch("https://sheltered-island-28868.herokuapp.com/readings",{method: 'post', body: JSON.stringify({column: col})}).then(response => response.json().then(data => {setDados(data)}))
        fetch("https://sheltered-island-28868.herokuapp.com/time").then(response => response.json(col).then(data => {setEixox(data)}))
        chart()
        chartB()
    },[])
    console.log(dados)
    console.log(eixox)
    return(
        <div className="App">
            <h1>Consumo de eletricidade da cabine no vôo</h1>
            <div style={{height: "600px", width:"800px"}}>
                <LineGraph data={dados.reads} labels={eixox.times}/>
            </div>
            <ToggleButtonGroupControlled />
        </div>
    )

}

export default Home;