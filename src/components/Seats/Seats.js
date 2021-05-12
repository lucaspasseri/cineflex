import './Seats.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
export default function Seats(){
    
    const [listaAssentos, setListaAssentos] = useState([]);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/1/seats");

		requisicao.then(resposta => {
			setListaAssentos(resposta.data.seats);
		});
	}, []);

    console.log(listaAssentos);

    const listaComponentizada = listaAssentos.map((item,i)=> {
        return <div className={item.isAvailable?"assento disponivel":"assento indisponivel"}>{item.name}</div>
    });

    return(
        <>
            <div className="titulo">Selecione o(s) assento(s)</div>
            <div className="grade-container">
                <div className="grade">
                    {listaComponentizada}
                </div>
                <div className="legendas">
                    <div className="legenda"><div className="selecionado"></div><span>Selecionado</span></div>
                    <div className="legenda"><div className="disponivel"></div><span>Disponível</span></div>
                    <div className="legenda"><div className="indisponivel"></div><span>Indisponível</span></div>   
                </div>
            </div>
            <div className="dados-comprador">
                <div className="titulo-comprador">Nome do comprador:</div>
                <input placeholder="Digite seu nome..."></input>
                <div className="titulo-comprador">CPF do comprador:</div>
                <input placeholder="Digite seu CPF..."></input>
            </div>
            <Link to="/sucesso"><div className="botao-container"><button className="botao-assentos">Reservar assento(s)</button></div></Link>
        </>
    );
}

