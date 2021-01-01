import React from "react";
import Drawer from "../../components/sideBar/Drawer";
import {Content, Container} from "./style";

const Relatorio = () => {
    return(
        <Container>
            <Drawer />
            <Content>
                <h1>Gerar Relatório</h1>

            </Content>
      </Container>
    );
}
export default Relatorio;