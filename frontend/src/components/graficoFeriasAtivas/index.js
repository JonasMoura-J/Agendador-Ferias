import React, { useEffect, useState } from "react";
import api from "../../services/api";

const GraficoFeriasAtivas = () => {

    const[lista, setLista] = useState([]);

    const GetRegistrosFerias = async() =>{
        const mesInicio = new Date().getMonth()+1;
        const mesFim = new Date().getMonth()+1;
        const anoAtual = new Date().getFullYear();
        try {
            const response = await api.get(`ferias/${mesInicio}/${mesFim}/${anoAtual}`);
            setLista(response.data)         
          
        } catch (error) {
          console.log("getColaboradores: ", error);
        }
    }

    useEffect(() => {
        GetRegistrosFerias()
    },[])

    return(
        <div>
            <h3 style={{textAlign:"center", fontSize:20, color:'#666666'}}>Férias Ativas neste mês</h3>
            <h2 style={{textAlign:"center", fontSize:30, color:'#666666'}}>{lista.length}</h2>
        </div>
    )
}
export default GraficoFeriasAtivas;