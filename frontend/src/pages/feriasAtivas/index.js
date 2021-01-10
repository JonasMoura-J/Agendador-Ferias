import React from "react";
import Drawer from "../../components/sideBar/Drawer";
import {Content, Container} from "./style";
import TabelaFeriasAtivas from "../../components/tabelaFeriasAtivas";


const FeriasAtivas = () => {

  return (
    <Container>
      <Drawer />
        <Content>
          <h1>Buscar registro de férias</h1>
          
          <TabelaFeriasAtivas/>
        </Content>
      </Container>
 
  );
}

export default FeriasAtivas;