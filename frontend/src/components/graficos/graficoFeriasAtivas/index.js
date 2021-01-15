import React,{useEffect, useState, useCallback } from "react";
import api from "../../../routes/index";

const GraficoFeriasAtivas = ({listaAtivos}) => {

    return(
        <div>
            <h3 style={{textAlign:"center", fontSize:20, color:'#666666'}}>Férias Ativas neste mês</h3>
            <h2 style={{textAlign:"center", fontSize:30, color:'#666666'}}>{listaAtivos.length}</h2>
        </div>
    )
}
export default GraficoFeriasAtivas;