import {React, useEffect, useState, useCallback } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2'
import api from "../../../services/api";

const GraficoFeriasMes = () => {

    const[chartData, setChartData] = useState({});
    const [ferias, setFerias] = useState([]);
    const[dados, setDados] = useState([])
    const[meses, setMeses] = useState([])


    const GetTodasFerias = async() =>{
        const esteAno = new Date().getFullYear()
        try {
            const response = await api.get(`ferias/ano/${esteAno}`);
            const datas = response.data.map(d => d.dataInicio.substring(6,7))
            setFerias(datas)
        } catch (error) {
        console.log("getFerias: ", error);
        }
    }

    const gerarDados = () => {
        var arrayMeses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for (let f of ferias) {
            switch (f) {
                case 1:
                    arrayMeses[0].push(arrayMeses[0]+1)
                    break;
                case 2:
                    arrayMeses[1].push(arrayMeses[1]+1)
                    break;
                case 3:
                    arrayMeses[2].push(arrayMeses[2]+1)
                    break;
                case 4:
                    arrayMeses[3].push(arrayMeses[3]+1)
                    break;
                case 5:
                    arrayMeses[4].push(arrayMeses[4]+1)
                    break;
                case 6:
                    arrayMeses[5].push(arrayMeses[5]+1)
                    break;
                case 7:
                    arrayMeses[6].push(arrayMeses[6]+1)
                    break;
                case 8:
                    arrayMeses[7].push(arrayMeses[7]+1)
                    break;
                case 9:
                    arrayMeses[8].push(arrayMeses[8]+1)
                    break;
                case 10:
                    arrayMeses[9].push(arrayMeses[9]+1)
                    break;
                case 11:
                    arrayMeses[10].push(arrayMeses[10]+1)
                    break;
                case 12:
                    arrayMeses[11].push(arrayMeses[11]+1)
                    break;
                default:
                    break;
            }
        }
        setMeses(arrayMeses)
        console.log("meses",meses)
    }

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
        GetTodasFerias();
    },[])

    useEffect(() =>{
        gerarDados();
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
                    text: 'Registros por mês',
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