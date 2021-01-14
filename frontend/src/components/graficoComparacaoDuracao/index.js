import React, { useEffect, useState, useCallback } from "react";
import api from "../../services/api";
import {Bar, Line, Pie} from 'react-chartjs-2'

const GraficoComparacaoDuracao = () => {

    const [dados, setDados] = useState([]);

    const state = {
        labels: ['30 dias', '15 dias'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#536dfe',
                    '#e41a1c',

                ],
                hoverBackgroundColor: [
                    '#2849fe',
                    '#c21618',

                ],
                data: dados
            }
        ]
    }

    const GetFeriasPorDuracao = async() =>{
        try {
            const response30 = await api.get(`ferias/${30}`);
            const response15 = await api.get(`ferias/${15}`);

            setDados([1, 6])

            console.log(dados)
            } catch (error) {
            console.log("getColaboradores: ", error);
        }
    }
    useEffect(() => {
        GetFeriasPorDuracao()
    },[])

    return (
        <Pie
            data={state}
            options={{
                title: {
                    display: true,
                    text: 'Duração das férias',
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'top'
                },
                maintainAspectRatio: false

            }}
        />

    )
    
}
export default GraficoComparacaoDuracao;