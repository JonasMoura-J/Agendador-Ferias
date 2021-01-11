import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Grid} from '@material-ui/core';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import TableChartIcon from '@material-ui/icons/TableChart';

import {Content, Button} from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const OpcoesRelatorios = () => {
  const classes = useStyles();

  return (
    <Content>
      <Grid container spacing={4}>
          <Grid item xs={12}>
              <h3>Gerar relatório dos ultimos dias</h3>
          </Grid>

          <Grid item xs={12}>
            <TextField
              style={{width:"20%"}}
              id="outlined-number"
              select
              InputLabelProps={{
                  shrink: true,
              }}
              SelectProps={{
                  native: true,
              }}
              variant="outlined"
              size="small"
              >
              <option>15</option>
              <option>30</option>
            </TextField> 
          </Grid>

          <Grid item xs={6}>
              <Button style={{backgroundColor:"#c74c4a", width:"100%"}}>Gerar PDF <PictureAsPdfIcon fontSize = 'small'/></Button>
          </Grid>

          <Grid item xs={6}>
              <Button style={{backgroundColor:"#1f6f45", width:"100%"}}>Gerar xls <TableChartIcon fontSize = 'small'/></Button>
          </Grid>

        </Grid>
    </Content>
  );
}
export default OpcoesRelatorios;
