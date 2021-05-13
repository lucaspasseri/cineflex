import './Success.css'
import { Link } from "react-router-dom";

export default function Success(props){
    const {request} = props;
    console.log(request, request[3]);
    return(
        <>
            <div className="titulo titulo-sucesso">Pedido feito <br></br> com sucesso!</div>
            <div className="pedido-feito">
                <div className="filme-sessao">
                    <div>Filme e sessão</div>
                    <div>{request[0]}</div>
                    <div>{request[1]} {request[2]}</div>
                </div>
                <div className="ingressos">
                    <div>Ingressos</div>
                    <div>{}
                        {request.length===0||request[3]===undefined?"carregando...":request[3].map(item=><div>Assentos {item}</div>)}
                    </div>
                </div>
                <div className="comprador-dados">
                    <div>Comprador</div>
                    <div>{request[4]}</div>
                    <div>{request[5]}</div>
                </div>
            </div>
            <div className="botao-container">
                <Link to="/"><button className="botao-assentos">Voltar para a Home</button></Link>
            </div>
        </>
    );
}