import { Container,Title,GridContainer } from "./style";
import { CardItem } from "../../components/CardGrid";

export const Home = () => {
    return(
        <Container>
             <Title>Escolha uma ferramenta :</Title>
             <GridContainer>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
             </GridContainer>
        </Container>
    )
}