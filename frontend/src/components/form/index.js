import React from "react";
import {
  makeStyles,
  Divider,
  TextField,
  InputAdornment,
  Grid,
} from "@material-ui/core";

import { Content, Button, ContainerGrid } from "./style.js";
import '../../index.css'

import SearchIcon from "@material-ui/icons/Search";

export default function LayoutTextFields() {
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
          />
        </Grid>

        <Grid item xs={12}>
          <Button style={{fontSize:"1rem"}}>Finalizar</Button>
        </Grid>
      </Grid>
    </Content>
  );
}
