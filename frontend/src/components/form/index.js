import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';

import {Content} from "./style";

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
            style = {{width: "30ch"}}
            label="Login"
            id="outlined-margin-none"
            className={classes.textField}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            style = {{width: "60ch"}}
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
        <Content style = {{marginLeft:"0.5vw", marginTop:"3vh"}}>
          <TextField
            style = {{ marginRight:"1vw"}}
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
      </div>
    </form>
  );
}
