import Bottom from '../Bottom/Bottom';
import './Seats.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
export default function Seats(props){
    const { request, setRequest } = props;
    const [listaAssentos, setListaAssentos] = useState([]);
    const [dadosRodape, setDadosRodape] = useState([]);
    const { idSessao } = useParams();
    const [inputNome, setInputNome] = useState("");
    const [inputCPF, setInputCPF] = useState("");

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
            dadosRodape.push(resposta.data.movie.posterURL);
            dadosRodape.push(resposta.data.movie.title);
            dadosRodape.push(resposta.data.day.weekday);
            dadosRodape.push(resposta.data.name);
            request.push(resposta.data.movie.title);
            request.push(resposta.data.day.date);
            request.push(resposta.data.name);
            setDadosRodape([...dadosRodape]);
			setListaAssentos(novoArray);
		});
	}, []);

    function selecionarAssento(id, isAvailable,selected){
        if(isAvailable){
            if(!selected){
                listaAssentos.forEach(item =>{
                    if(item.id === id){
                        item.selected = true;
                    }
                });
            }else {
                listaAssentos.forEach(item =>{
                    if(item.id === id){
                        item.selected = false;
                    } 
                });
            }
        }
        setListaAssentos([...listaAssentos]);
    }

    function reservarAssentos(){
        const listaAssentosSelecionados = listaAssentos.filter(item => item.selected===true);
        const idsAssentosSelecionados =listaAssentosSelecionados.map(item => item.id);
        const nomesAssentosSelecionados =listaAssentosSelecionados.map(item => item.name);
        const objReservarAssentos = { ids: idsAssentosSelecionados,
                                        name: inputNome,
                                        cpf: inputCPF
                                    };
        const requisicaoPost = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many", objReservarAssentos);
        requisicaoPost.then(resposta=>{
            request.push(nomesAssentosSelecionados);
            request.push(inputNome);
            request.push(inputCPF);
            setRequest([...request]);

        });
        requisicaoPost.catch(erro => alert(erro.response.data));
    }

    const listaComponentizada = listaAssentos.map(item=> {
        return <div onClick={() => item.isAvailable? selecionarAssento(item.id,item.isAvailable, item.selected):alert("Esse assento não esta disponível.")} key={item.id} className={!item.isAvailable?"assento indisponivel":(item.selected?"assento selecionado": "assento disponivel")}>{item.name}</div>
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
                <input onChange={e => setInputNome(e.target.value)} value={inputNome} placeholder="Digite seu nome..."></input>
                <div className="titulo-comprador">CPF do comprador:</div>
                <input onChange={e => setInputCPF(e.target.value)} value={inputCPF} placeholder="Digite seu CPF..."></input>
            </div>
            <Link to="/sucesso"><div onClick={reservarAssentos} className="botao-container"><button className="botao-assentos">Reservar assento(s)</button></div></Link>
            <Bottom tipo="seats" dadosRodape={dadosRodape}/>
        </>
    );
}

