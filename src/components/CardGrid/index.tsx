import { Link } from "react-router-dom"
import { Card } from "./style"
import { TiArrowForward } from "react-icons/ti"


export type dataType = {
    route:string,
    title:string,
    desc:string
}

export const CardItem = (prop:dataType) => {
    return(
        <Card>
            <h2>{prop.title}</h2>
            <p>{prop.desc}</p>
            <Link to={prop.route}><TiArrowForward/>Iniciar</Link>
        </Card>
    )
}