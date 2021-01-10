import {React, useState} from 'react';

import objetos from './objetos.json'
import {Content, Button} from './style.js'

import {
    makeStyles,
    Divider,
    TextField,
    InputAdornment,
    Grid,
  } from "@material-ui/core";

const InputRegistros = () => {

    const [lista] = useState (objetos);

    const meses = Array.from(Array(12), (_, i) => i+1)

    return(
        <Content>
            <Grid container spacing={4}>
                <Grid item xs={5}>
                <TextField
                    style={{width:"100%"}}
                    size="small"
                    id="outlined-number"
                    label= "Função"
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
                    {lista.funcoes.map(l => (
                        <option>{l.nome}</option>
                    ))}
                </TextField>
                </Grid>

                <Grid item xs={2}>
                <TextField
                    size="small"
                    style={{width:"100%"}}
                    id="outlined-number"
                    label= "Mês"
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
                    {meses.map(l => (
                        <option>{l}</option>
                    ))}
                </TextField>
                </Grid>

                <Grid item xs={3}>
                <TextField
                    size="small"
                    style={{width:"100%"}}
                    id="outlined-number"
                    label= "Ano"
                    select
                    InputLabelProps={{
                    shrink: true,
                    }}
                    SelectProps={{
                    native: true,
                    }}
                    variant="outlined"
                    required
                    defaultValue= {new Date().getFullYear()}
                >
                    {lista.anos.map(l => (
                        <option>{l.ano}</option>
                    ))}
                </TextField>
                </Grid>

                <Grid item xs={2}>
                    <Button size="small" style={{fontSize:"1rem"}}>Buscar</Button>
                </Grid>

            </Grid>
        </Content>
    )
}
export default InputRegistros;