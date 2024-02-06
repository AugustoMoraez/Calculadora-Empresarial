import { Container,Title,GridContainer } from "./style";
import { CardItem } from "../../components/CardGrid";
import { data } from "../../data/data";

export const Home = () => {
    return(
        <Container>
             <Title>O que deseja calcular?</Title>
             <GridContainer>
                {data.map((data,index)=>(
                    <CardItem 
                    key={index}
                    route={data.route}
                    title={data.title}
                    desc={data.desc}/>
                ))}
             </GridContainer>
        </Container>
    )
}