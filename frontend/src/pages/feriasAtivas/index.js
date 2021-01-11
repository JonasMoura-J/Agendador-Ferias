import React, { useState } from "react";
import Drawer from "../../components/sideBar/Drawer";
import {Content, Container} from "./style";
import TabelaFeriasAtivas from "../../components/tabelaFeriasAtivas";
import Input from "../../components/inputsTabelaRegistroFerias";

const FeriasAtivas = () => {


  const[feriasAtivas, setFeriasAtivas] = useState();

  const getFeriasAtivas = (ferias) => {
    return setFeriasAtivas(ferias);
  }
  return (
    <Container>
      <Drawer />
        <Content>
          <h1>Buscar registro de férias</h1>
          <Input getFeriasAtivas={getFeriasAtivas}/>
          <TabelaFeriasAtivas feriasAtivas = {feriasAtivas}/>
        </Content>
      </Container>
 
  );
}

export default FeriasAtivas;