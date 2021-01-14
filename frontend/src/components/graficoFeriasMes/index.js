import React, { useEffect, useState } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2'

const GraficoFeriasMes = () => {

    const[chartData, setChartData] = useState({});

    const myLineChart = () => {
        setChartData({
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
                {
                    label: "Exemplo",
                    data: [5, 6, 5,5,4,65,4,78,2,58,1,3],
                    bordeWidth: 6,
                    borderColor: 'rgba(77, 166, 253, 0.85)',
                    backgroundColor: 'transparent',
                    fill: false
                }
            ]
        });
    }

    useEffect(() =>{
        myLineChart();
    },[])

    return(
        <div>
        <Line
            height={500}
            data={chartData}
            options={{
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                precision: 0,
                            },
                        },
                    ],
                },
                title: {
                    display: true,
                    text: `Cadastros dos ultimos dias`,
                    fontSize: 20
                },
                legend: {
                    display: false,
                    position: 'bottom'
                },
                maintainAspectRatio: false
            }}
        />
        </div>
    )
}
export default GraficoFeriasMes;