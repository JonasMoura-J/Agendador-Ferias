import {React, useState, useCallback, useEffect} from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TablePagination,
  TableHead,
  makeStyles,
  Paper,
  Grid
} from '@material-ui/core';

import {Container, Button} from './style';

import api from '../../services/api';

const TabelaFeriasAtivas = ({feriasAtivas}) => {

  const styles = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [ferias, setferias] = useState([]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return( 
    <>
        <Container className={styles.root}>
          <Paper>
            <TableContainer className={styles.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Início da férias</TableCell>
                    <TableCell>Fim da férias</TableCell>
                    <TableCell>Duração</TableCell>
                    <TableCell>Login</TableCell>
                    <TableCell>Funcao</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {
                    feriasAtivas&&
                    feriasAtivas.map(ferias => {
                      return (
                        <>
                          <TableRow hover key={ferias.id}>
                            <TableCell>{ferias.id}</TableCell>
                            <TableCell>{ferias.dataInicio}</TableCell>
                            <TableCell>{ferias.dataFim}</TableCell>
                            <TableCell>{ferias.duracao}</TableCell>
                            <TableCell>{ferias.colaborador.login}</TableCell>
                            <TableCell>{ferias.colaborador.funcao}</TableCell>
                          </TableRow>
                        </>
                      );
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 20, 40]}
              component="div"
              count={ferias.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Container>
      </>
  );
}
export default TabelaFeriasAtivas;

const useStyles = makeStyles({
  root: {
    width: '64.3vw',
    margin: 'auto'
  },
  container: {
    maxHeight: '70vh',
  },
});