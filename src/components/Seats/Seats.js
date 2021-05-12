import './Seats.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
export default function Seats(){
    
    const [listaAssentos, setListaAssentos] = useState([]);
    const { idSessao } = useParams();
    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`);

		requisicao.then(resposta => {
            const novoArray = [];
            resposta.data.seats.forEach(element => {
                novoArray.push({id: element.id,
                                name: element.name,
                                isAvailable: element.isAvailable,
                                selected: false
                                });
            });
			setListaAssentos(novoArray);
		});
	}, []);

    console.log(listaAssentos);
    function selecionarAssento(id, isAvailable,selected){
        if(isAvailable){
            if(!selected){
                
            }
        }
    }

    const listaComponentizada = listaAssentos.map(item=> {
        return <div onClick={() => selecionarAssento(item.id,item.isAvailable, item.selected)} key={item.id} className={!item.isAvailable?"assento indisponivel":(item.selected?"assento selecionado": "assento disponivel")}>{item.name}</div>
    });

    return(
        <>
            <div className="titulo">Selecione o(s) assento(s)</div>
            <div className="grade-container">
                <div className="grade">
                    {listaComponentizada.length===0? "Carregando..." : listaComponentizada} 
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

