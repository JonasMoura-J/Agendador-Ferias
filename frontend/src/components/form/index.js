import React, { useState, useCallBack } from "react";
import {
  makeStyles,
  Divider,
  TextField,
  InputAdornment,
  Grid,
} from "@material-ui/core";

import Alert from '@material-ui/lab/Alert';

import api from '../../services/api';

import { Content, Button, ContainerGrid } from "./style.js";
import '../../index.css'

import SearchIcon from "@material-ui/icons/Search";

export default function LayoutTextFields() {

  const[login, setLogin] = useState("");
  const[email, setEmail] = useState("");
  const[dias, setDias] = useState();
  const[inicio, setInicio] = useState("");
  const[fim, setFim] = useState("");

  const CadastrarFerias = async() =>{
    const params = {
      login: login,
      duracao: dias,
      dataInicio: inicio,
      dataFim: fim
    }
    try {
      await api.post("ferias", params);
      
    } catch (error) {
      console.log("Erro no Cadastro");
    }
  }

  return (
    <Content>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            style={{width:"47%", marginBottom:"50px"}}
            id="input-with-icon-textfield"
            className="medium-input"
            label= "Login do coleborador"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
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
            onChange = {e => setLogin(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            style={{width:"100%"}}
            label="Nome"
            id="outlined-margin-none"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
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
            onChange = {e => setEmail(e.target.value)}
          />
        </Grid>
        
        <Grid item xs={2}>
          <TextField
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
    </Content>
  );
}
