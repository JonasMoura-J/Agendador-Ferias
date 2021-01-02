import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    <form className={classes.root}>
      <div>
        <Content style = {{marginTop:"3vh"}}>
            <h3>Gerar relatório dos ultimos dias</h3>
            <TextField
                style = {{marginRight:"1.1vw"}}
                id="outlined-number"
                select
                InputLabelProps={{
                    shrink: true,
                }}
                SelectProps={{
                    native: true,
                }}
                variant="outlined"
                >
                <option>15</option>
                <option>30</option>
            </TextField>    
        </Content>
        <Content>
            <Button style={{backgroundColor:"#c74c4a"}}>Gerar PDF <PictureAsPdfIcon fontSize = 'small'/></Button>
            <Button style={{backgroundColor:"#1f6f45"}}>Gerar xls <TableChartIcon fontSize = 'small'/></Button>
        </Content>
      </div>
    </form>
  );
}
export default OpcoesRelatorios;
