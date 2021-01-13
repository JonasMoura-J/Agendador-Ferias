import React, {useState} from "react";
import {
  TextField,
  Grid,
} from "@material-ui/core";

import api from '../../services/api';

import {Content, Button} from "./style.js";
import '../../index.css'

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchIcon from "@material-ui/icons/Search";

export default function LayoutTextFields() {

  const[login, setLogin] = useState("");
  const[email, setEmail] = useState("");
  const[dias, setDias] = useState();
  const[inicio, setInicio] = useState("");
  const[fim, setFim] = useState("");

  const[dadosColaborador, setDadosColaborador] = useState({})

  const CadastrarFerias = async() =>{
    const params = {
      login: login,
      duracao: dias,
      dataInicio: inicio,
      dataFim: fim
    }
    try {
      await api.post("ferias", params);
      alert('Férias registrada com sucesso!', 'success')
      
    } catch (error) {
      alert('Erro ao registrar férias!', 'error')
    }
  }

  const GetColaborador = async() =>{
    try {
      const response = await api.get(`colaborador/${login}`);
      setDadosColaborador(response.data)
      setLogin(response.data.login)

    } catch (error) {
      console.log("getColaborador: ", error);
    }
  }

  const alert = (mensagem, tipo) => {
    toast(
        mensagem,
        {type: tipo}
    );
  }

  return (
    <Content>
      <Grid container spacing={5}>
        <Grid item xs={6}>
        <TextField
            style={{width:"100%", marginBottom:"50px"}}
            id="input-with-icon-textfield"
            className="medium-input"
            label= "Login do colaborador"
            onChange={e => setLogin(e.target.value)}
          />
          
        </Grid>

        <Grid item xs={2}>
          <Button style={{fontSize:"1rem"}} onClick={() => GetColaborador()}><SearchIcon /></Button>
        </Grid>

        <Grid item xs={6}>
          <TextField
            style={{width:"100%"}}
            label="Login"
            id="outlined"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            required
            value={dadosColaborador.login}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            style={{width:"100%"}}
            label="Nome"
            id="outlined-margin-none"
            variant="outlined"
            value={dadosColaborador.nome}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            style={{width:"100%"}}
            label="Email"
            id="outlined-email"
            fullWidth
            type = "email"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            required
            value={dadosColaborador.email}
            onChange = {e => setEmail(e.target.value)}
          />
        </Grid>
        
        <Grid item xs={4}>
          <TextField
            style={{width:"100%"}}
            id="outlined-number"
            label= "Duração"
            select
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            required
            onChange = {e => setDias(e.target.value)}
          >
            <option>15</option>
            <option>30</option>
          </TextField>
        </Grid>

        <Grid item xs={4}>
          <TextField
          style={{width:"100%"}}
          id="outlined-date"
          label="Início das Férias"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
          onChange = {e => setInicio(e.target.value)}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            style={{width:"100%"}}
            id="outlined-date-end"
            label="Fim das Férias"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            required
            onChange = {e => setFim(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button style={{fontSize:"1rem"}} onClick={CadastrarFerias}>Finalizar</Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </Content>
  );
}
