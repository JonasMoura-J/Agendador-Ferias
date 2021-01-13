import React, { useState, useCallBack, useEffect } from "react";
import {
  makeStyles,
  Divider,
  TextField,
  InputAdornment,
  Grid,
} from "@material-ui/core";

import emailjs from 'emailjs-com';
import api from '../../services/api';

import {Content, Button} from "./style.js";
import '../../index.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchIcon from "@material-ui/icons/Search";

export default function LayoutTextFields() {

  const[login, setLogin] = useState("");
  const[email, setEmail] = useState("");
  const[dias, setDias] = useState();
  const[inicio, setInicio] = useState("");
  const[fim, setFim] = useState("");

  const[colaboradores, setColaboradores] = useState([])
  const[dadosColaborador, setDadosColaborador] = useState({})

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_0n31h1k', e.target, 'user_6Wf2CL2KUCH1pl77JfkY7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

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
      sendEmail()
      
    } catch (error) {
      alert('Erro ao registrar férias!', 'error')
    }
  }

  const GetColaboradores = async() =>{
    try {
      const response = await api.get("colaboradores");
      setColaboradores(response.data)
    } catch (error) {
      console.log("getColaboradores: ", error);
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

  useEffect(() => {
    GetColaboradores()
  },[])

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
            name="nome"
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
            name="email"
            style={{width:"100%"}}
            label="Email"
            id="outlined"
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
        
        <Grid item xs={2}>
          <TextField
            name="dias"
            style={{width:"100%"}}
            id="outlined-number"
            label= "Dias"
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

        <Grid item xs={5}>
          <TextField
          name="inicio"
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

        <Grid item xs={5}>
          <TextField
            name="fim"
            style={{width:"100%"}}
            id="outlined-date"
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
