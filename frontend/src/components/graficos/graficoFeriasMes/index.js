import {React, useEffect, useState, useCallback } from "react";
import {Line} from 'react-chartjs-2'
import api from "../../../services/api";

const GraficoFeriasMes = () => {

    const [ferias, setFerias] = useState([]);
    const[dados, setDados] = useState([])

    const GetTodasFerias = async() =>{
        const esteAno = new Date().getFullYear()
        try {
            const response = await api.get(`ferias/ano/${esteAno}`);
            const datas = response.data.map(d => d.dataInicio.substring(5,7))
            setFerias(datas)
            console.log(datas)
        } catch (error) {
        console.log("getFerias: ", error);
        }
    }

    const gerarDados = () => {
        let arrayMeses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let f of ferias) {
                arrayMeses[parseInt(f -1)] = arrayMeses[parseInt(f -1)]+1
            }
        setDados(arrayMeses)
        console.log(dados)
    }

    useEffect(() =>{
        GetTodasFerias();
    },[])
    
    useEffect(() =>{
        gerarDados();
    },[ferias])

    const state = {

        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [
            {
                label: "Exemplo",
                data: dados,
                bordeWidth: 6,
                borderColor: 'rgba(77, 166, 253, 0.85)',
                backgroundColor: 'transparent',
                fill: false
            }
        ]
    }
    return(
        <Line
            height={500}
            data={state}
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
    )
}
export default GraficoFeriasMes;