import React from "react";
import Drawer from "../../components/sideBar/Drawer";
import GraficoFeriasMes from "../../components/graficoFeriasMes";
import Paper from '@material-ui/core/Paper';
import {Content, Container} from "./style";
import GraficoFeriasAtivas from "../../components/graficoFeriasAtivas";
import { Grid } from "@material-ui/core";
import GraficoComparacaoDuracao from "../../components/graficoComparacaoDuracao";


const Dashboard = () => {

  const customStyles = {
    control: base => ({
        ...base,
        height: 35,
        minHeight: 35,
        width: 130,
    })
  };  

  return (
    <Container>
      <Drawer />
        <Content>
          <h1>Dashboard</h1>

            <div style={{ display: 'flex', width: '90%', flexWrap: 'wrap', flexDirection: 'row' }}>
                <Grid container spacing={4}>
                    <Grid item xs={8}>
                      <Paper style={{
                          marginBottom: 50,
                          padding: 10,
                          marginRight: 20,
                          flexGrow: 1,
                          flex: 3,
                          minWidth: 200,
                          minHeight: 150,

                      }}>
                        <GraficoFeriasMes/>
                      </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper style={{
                            position: 'relative',
                            marginBottom: 10,
                            padding: 20,
                            flex: 1,
                            flexGrow: 1,
                            minWidth: 100,
                            minHeight: 330
                        }}>
                          <GraficoComparacaoDuracao/>
                        </Paper>

                        <Paper style={{
                            position: 'relative',
                            marginBottom: 10,
                            padding: 20,
                            flex: 1,
                            flexGrow: 1,
                            minWidth: 100,
                            minHeight: 100
                        }}>
                          <GraficoFeriasAtivas/>
                          </Paper>
                    </Grid>
                </Grid>
            </div>
        </Content>
      </Container>
 
  );
};
export default Dashboard;
