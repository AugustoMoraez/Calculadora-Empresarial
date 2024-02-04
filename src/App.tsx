import { Container,Banner,Title} from "./AppStyle";
import { ModalHome } from "./components/Modal";


const App = () => {
  return (
    <Container>
      <ModalHome/>
      <Banner/>
      <Title>Escolha uma ferramenta :</Title>
    </Container>    
  )
}

export default App;
