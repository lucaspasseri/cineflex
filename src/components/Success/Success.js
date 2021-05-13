import './Success.css'
import { Link } from "react-router-dom";

export default function Success(){
    return(
        <>
            <div className="titulo titulo-sucesso">Pedido feito <br></br> com sucesso!</div>
            <div className="pedido-feito">
                <div className="filme-sessao">Filme e sessão</div>
                <div className="ingressos">Ingressos</div>
                <div className="comprador-dados">Comprador</div>
            </div>
            <div className="botao-container">
                <Link to="/"><button className="botao-assentos">Voltar para a Home</button></Link>
            </div>
        </>
    );
}