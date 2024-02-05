import { Link } from "react-router-dom"
import { Card } from "./style"
import { TiArrowForward } from "react-icons/ti"


export const CardItem = () => {
    return(
        <Card>
            <h2>Custo de Produção</h2>
            <p>Calcule quanto voce deve cobrar por um produto ou serviço.</p>
            <Link to={"/"}><TiArrowForward/>Iniciar</Link>
        </Card>
    )
}