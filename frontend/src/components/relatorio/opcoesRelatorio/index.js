import React, {useState, useEffect, useCallback} from 'react';
import {TextField, Grid} from '@material-ui/core';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import TableChartIcon from '@material-ui/icons/TableChart';

import {Content, Button} from "./style";
import generatePDF from "../funcaoGerar";
import api from '../../../services/api';

import objetos from '../../../json/objetos.json'

const OpcoesRelatorios = () => {

    const[tickets, setTickets] = useState([]);
    const [mes, setMes] = useState(new Date().getMonth()+1);
    const [ano, setAno] = useState(new Date().getFullYear());

    const meses = Array.from(Array(12), (_, i) => i+1)
    const [lista] = useState(objetos);
    
    const getAllTickets = useCallback(async () => {
      try {
        const response = await api.get(`ferias/${mes}/${ano}`);
        setTickets(response.data);
      } catch (err) {
        console.log("error");
      }
    },[mes, ano]);

    useEffect(() => {
      getAllTickets();
    }, [mes, ano]);

  return (
    <Content>
      <Grid container spacing={4}>
          <Grid item xs={12}>
              <h3>Gerar no período de: </h3>
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{width:"30%"}}
              id="outlined-number"
              select
              label="Mes"
              InputLabelProps={{
                  shrink: true,
              }}
              SelectProps={{
                  native: true,
              }}
              variant="outlined"
              defaultValue={new Date().getMonth()}
              onChange = {e => setMes(e.target.value)}
              >
              {meses.map(l => (
                <option key={l}>{l}</option>
              ))}
            </TextField> 
          </Grid>

          <Grid item xs={6}>
            <TextField
              style={{width:"30%"}}
              id="outlined"
              select
              label="Ano"
              InputLabelProps={{
                  shrink: true,
              }}
              SelectProps={{
                  native: true,
              }}
              variant="outlined"
              defaultValue={new Date().getFullYear()}
              onChange = {e => setAno(e.target.value)}
              >
              {lista.anos.map(l => (
                <option key={l.id}>{l.ano}</option>
              ))}
            </TextField> 
          </Grid>

          <Grid item xs={6}>
              <Button style={{backgroundColor:"#c74c4a", width:"100%"}} onClick={() => generatePDF(tickets)}>Gerar PDF <PictureAsPdfIcon fontSize = 'small'/></Button>
          </Grid>

          <Grid item xs={6}>
              <Button style={{backgroundColor:"#1f6f45", width:"100%"}}>Gerar xls <TableChartIcon fontSize = 'small'/></Button>
          </Grid>
        </Grid>
    </Content>
  );
}
export default OpcoesRelatorios;
