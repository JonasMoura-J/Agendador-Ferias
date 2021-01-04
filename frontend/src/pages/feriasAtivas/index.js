import Drawer from '../../Components/Drawer'
import { Container, Content } from './style'
import TabelaFeriasAtivas from '../../components/TabelaFeriasAtivas'

const FeriasAtivas = () => {

    return (
        <Container>
            <Drawer />
            <Content>
                <h1>Auditoria</h1>
                <TabelaFeriasAtivas/>
            </Content>
        </Container>
    )
}
export default FeriasAtivas;
