import './Success.css'
import { Link } from "react-router-dom";

export default function Success(props){
    const { request, setRequest, setPageState } = props;
    setPageState("Success");
    return(
        <div className="success">
            <div className="titulo titulo-sucesso">Pedido feito <br></br> com sucesso!</div>
            <div className="pedido-feito">
                <div className="filme-sessao">
                    <div>Filme e sessão</div>
                    <div>
                        <div className="subtitulos">{request[0]}</div>
                        <div className="subtitulos">{request[1]} {request[2]}</div>
                    </div>
                </div>
                <div className="ingressos">
                    <div>Ingressos</div>
                    <div className="subtitulos">
                        {request.length===0||request[3]===undefined?"carregando...":request[3].map(item=><div>Assento {item}</div>)}
                    </div>
                </div>
                <div className="comprador-dados">
                    <div>Comprador</div>
                    <div>
                        <div className="subtitulos">Nome: {request[4]}</div>
                        <div className="subtitulos">CPF: {request[5]}</div>
                    </div>
                </div>
            </div>
            <div className="botao-container">
                <Link to="/"><button onClick={()=>setRequest([])} className="botao-assentos">Voltar para a Home</button></Link>
            </div>
        </div>
    );
}