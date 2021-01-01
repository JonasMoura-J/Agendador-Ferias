import React from "react";
import Drawer from "../components/sideBar/Drawer";
import Form from "../components/form"
import {Content, Container} from "./style";


const Acesso = () => {

  return (
    <Container>
      <Drawer />
        <Content>
          <h1 style={{margin: '20px auto 30px', color: '#888', fontWeight: "bold"}}>Acesso</h1>
          
          <Form/>
        </Content>
      </Container>
 
  );
};

export default Acesso;