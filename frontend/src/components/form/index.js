import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div>
        <Content>
          <TextField
            style = {{width: "20vw", marginRight:"1.1vw"}}
            label="Login"
            id="outlined"
            className={classes.textField}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            style = {{width: "35vw", marginLeft: 0}}
            label="Email"
            id="outlined"
            className={classes.textField}
            fullWidth
            type = "email"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Content>
        <Content style = {{marginTop:"3vh"}}>
          <TextField
            style = {{width: "21.7vw", marginRight:"1.1vw"}}
            label="Nome"
            id="outlined-margin-none"
            className={classes.textField}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            style = {{marginRight:"1.1vw"}}
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
          >
            <option>15</option>
            <option>30</option>
          </TextField>

          <TextField
          style = {{marginRight:"1vw"}}
          id="outlined-date"
          label="Início das Férias"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          />

        <TextField
          style = {{marginRight:"1vw"}}
          id="outlined-date"
          label="Fim das Férias"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </Content>
        <Button>Finalizar</Button>
      </div>
    </form>
  );
}
