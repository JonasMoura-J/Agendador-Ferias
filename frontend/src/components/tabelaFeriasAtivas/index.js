import {React, useState} from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TablePagination,
  TableHead,
  makeStyles,
  Paper
} from '@material-ui/core';

import {Container} from './style';
import Inputs from '../inputsTabelaRegistroFerias'

const TabelaFeriasAtivas = () => {

  const styles = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return( 
    <>
      <Inputs/>
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
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    users.map(user => {
                      return (
                        <>
                          <TableRow hover key={user.id}>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell style={{ display: "flex", justifyContent: "flex-end" }}>
                            </TableCell>
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
              count={users.length}
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