import { Container,Banner} from "./AppStyle";
import { ModalHome } from "./components/Modal";
import { Route,Routes } from "react-router-dom";
import { Home } from "./Routes/Home";


const App = () => {
  return (
    <Container>
      <ModalHome/>
      <Banner/>
      <Routes>
        <Route path={"/"} element={<Home/>} />
      </Routes>
    </Container>    
  )
}

export default App;
