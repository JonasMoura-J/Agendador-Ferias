import React from "react";
import Drawer from "../../components/sideBar/Drawer";
import Form from "../../components/form"
import {Content, Container} from "./style";


const Acesso = () => {

  return (
    <Container>
      <Drawer />

        <Content>
          
          <h1>Registro de Férias</h1>
          
          <Form/>
        </Content>
      </Container>
 
  );
};

export default Acesso;