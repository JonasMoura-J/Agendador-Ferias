import React from "react";
import {
  makeStyles,
  Divider,
  TextField,
  InputAdornment,
  Grid,
} from "@material-ui/core";

import { Content, Button, ContainerGrid } from "./style";

import SearchIcon from "@material-ui/icons/Search";

export default function LayoutTextFields() {
  return (
    <>
      
      <div>
        <TextField
          id="input-with-icon-textfield"
          label="Login do coleborador"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

      </div>
      <ContainerGrid>

          <TextField
            label="Login"
            id="outlined"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

        <div>
          <TextField
            label="Email"
            id="outlined"
            type="email"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Nome"
            id="outlined-margin-none"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </ContainerGrid>
      <div>
        <TextField
          id="outlined-number"
          label="Dias"
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
          id="outlined-date"
          label="Início das Férias"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="outlined-date"
          label="Fim das Férias"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>

      <Button>Finalizar</Button>
    </>

    // <Grid container spacing={3}>
    //   <Grid item xs={12} style={{display:"flex", justifyContent:"center"}}>
    //     <TextField
    //       id="input-with-icon-textfield"
    //       label= "Login do coleborador"
    //       variant="outlined"
    //       InputProps={{
    //         startAdornment: (
    //           <InputAdornment position="start">
    //             <SearchIcon />
    //           </InputAdornment>
    //         ),
    //       }}
    //     />
    //   </Grid>
    //   <Divider />

    //   <Grid item xs={6} style={{display:"flex", justifyContent:"center"}}>
    //     <TextField
    //       label="Login"
    //       id="outlined"
    //       variant="outlined"
    //       InputLabelProps={{
    //         shrink: true,
    //       }}
    //     />
    //   </Grid>

    //   <Grid item xs={5} style={{display:"flex", justifyContent:"center"}}>
    //     <TextField
    //       label="Email"
    //       id="outlined"
    //       fullWidth
    //       type = "email"
    //       variant="outlined"
    //       InputLabelProps={{
    //         shrink: true,
    //       }}
    //     />
    //   </Grid>

    //   <Grid item xs={3} style={{display:"flex", justifyContent:"center"}}>
    //     <TextField
    //       label="Nome"
    //       id="outlined-margin-none"
    //       variant="outlined"
    //       InputLabelProps={{
    //         shrink: true,
    //       }}
    //     />
    //   </Grid>
    //   <Grid item xs={3} style={{display:"flex", justifyContent:"center"}}>
    //     <TextField
    //       id="outlined-number"
    //       label= "Dias"
    //       select
    //       InputLabelProps={{
    //         shrink: true,
    //       }}
    //       SelectProps={{
    //         native: true,
    //       }}
    //       variant="outlined"
    //     >
    //       <option>15</option>
    //       <option>30</option>
    //     </TextField>
    //   </Grid>
    //   <Grid item xs={3} style={{display:"flex", justifyContent:"center"}}>
    //     <TextField
    //     id="outlined-date"
    //     label="Início das Férias"
    //     type="date"
    //     InputLabelProps={{
    //       shrink: true,
    //     }}
    //     variant="outlined"
    //     />
    //   </Grid>
    //   <Grid item xs={3}>
    //     <TextField
    //       id="outlined-date"
    //       label="Fim das Férias"
    //       type="date"
    //       InputLabelProps={{
    //         shrink: true,
    //       }}
    //       variant="outlined"
    //     />
    //   </Grid>

    //   <Grid item xs={4} style={{display:"flex", justifyContent:"center"}}>
    //     <Button>Finalizar</Button>
    //   </Grid>
    // </Grid>
  );
}
