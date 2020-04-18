import React, { useState, useEffect, Component } from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js'
import classes from "./LineGraph.module.css"
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
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
        const { data, labels, titulo } = this.props;
        
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
                    title:{
                        display: true,
                        text: titulo
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Watts [W]'
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
    const [dados, setDados] = useState({})
    const [eixox, setEixox] = useState({})
    const [gtitle, setGtitle] = useState({})
    const [col, setCol] = useState("total");
    const handleChange1 = () => {
        console.log("total")
        //setCol("total")
        setGtitle("Total")
        fetch("https://sheltered-island-28868.herokuapp.com/readings",
            {
            method: 'post', 
            body: JSON.stringify("total"),
            headers: { 'Content-type':'application/json'}
            }
            ).then(response => response.json().then(data => {setDados(data)}))
    
        fetch("https://sheltered-island-28868.herokuapp.com/time").then(response => response.json(col).then(data => {setEixox(data)}))
    };

    const handleChange2 = () => {
        console.log("iluminacao")
        //setCol("iluminacao")
        setGtitle("Iluminação")
        fetch("https://sheltered-island-28868.herokuapp.com/readings",
            {
            method: 'post', 
            body: JSON.stringify("iluminacao"),
            headers: { 'Content-type':'application/json'}
            }
            ).then(response => response.json().then(data => {setDados(data)}))
    
        fetch("https://sheltered-island-28868.herokuapp.com/time").then(response => response.json(col).then(data => {setEixox(data)}))
    };

    const handleChange3 = () => {
        console.log("servidor")
        //setCol("servidor")
        setGtitle("Wi-Fi")
        fetch("https://sheltered-island-28868.herokuapp.com/readings",
            {
            method: 'post', 
            body: JSON.stringify("servidor"),
            headers: { 'Content-type':'application/json'}
            }
            ).then(response => response.json().then(data => {setDados(data)}))
    
        fetch("https://sheltered-island-28868.herokuapp.com/time").then(response => response.json(col).then(data => {setEixox(data)}))
    };

    const handleChange4 = () => {
        console.log("rede")
        //setCol("rede")
        setGtitle("Computadores")
        fetch("https://sheltered-island-28868.herokuapp.com/readings",
            {
            method: 'post', 
            body: JSON.stringify("rede"),
            headers: { 'Content-type':'application/json'}
            }
            ).then(response => response.json().then(data => {setDados(data)}))
    
        fetch("https://sheltered-island-28868.herokuapp.com/time").then(response => response.json(col).then(data => {setEixox(data)}))
    };

    const handleChange5 = () => {
        console.log("ar_cond")
        //setCol("ar_cond")
        setGtitle("Ar Cond.")
        fetch("https://sheltered-island-28868.herokuapp.com/readings",
            {
            method: 'post', 
            body: JSON.stringify("ar_cond"),
            headers: { 'Content-type':'application/json'}
            }
            ).then(response => response.json().then(data => {setDados(data)}))
    
        fetch("https://sheltered-island-28868.herokuapp.com/time").then(response => response.json(col).then(data => {setEixox(data)}))
    };

    const handleChange6 = () => {
        console.log("bancadas")
        //setCol("bancadas")
        setGtitle("Outros")
        fetch("https://sheltered-island-28868.herokuapp.com/readings",
            {
            method: 'post', 
            body: JSON.stringify("bancadas"),
            headers: { 'Content-type':'application/json'}
            }
            ).then(response => response.json().then(data => {setDados(data)}))
    
        fetch("https://sheltered-island-28868.herokuapp.com/time").then(response => response.json(col).then(data => {setEixox(data)}))
    };

    function ToggleButtonGroupControlled() {
        
        return (
          <ButtonGroup>
            <Button variant="dark" onClick={handleChange1}>Total</Button>
            <Button variant="dark" onClick={handleChange2}>Iluminação</Button>
            <Button variant="dark" onClick={handleChange3}>Wi-Fi</Button>
            <Button variant="dark" onClick={handleChange4}>Computadores</Button>
            <Button variant="dark" onClick={handleChange5}>Ar Cond.</Button>
            <Button variant="dark" onClick={handleChange6}>Outros</Button>
          </ButtonGroup>
        );
    }

    // useEffect(() => {
    //     // fetch("http://127.0.0.1:5000/readings").then(response => response.json().then(data => {setDados(data)}))
    //     // fetch("http://127.0.0.1:5000/time").then(response => response.json().then(data => {setEixox(data)}))

    //     fetch("https://sheltered-island-28868.herokuapp.com/readings",
    //     {
    //     method: 'post', 
    //     body: JSON.stringify({column: col}),
    //     headers: { 'Content-type':'application/json'}
    //     }
    //     ).then(response => response.json().then(data => {setDados(data)}))

    //     fetch("https://sheltered-island-28868.herokuapp.com/time").then(response => response.json(col).then(data => {setEixox(data)}))
    // },[])
    //console.log(dados)
    //console.log(eixox)
    return(
        <div className="App">
            <h1>Consumo de eletricidade da cabine no vôo</h1>
            <ToggleButtonGroupControlled />
            <div style={{height: "600px", width:"800px"}}>
                <LineGraph data={dados.reads} labels={eixox.times} titulo={gtitle}/>
            </div>
        </div>
    )

}

export default Home;