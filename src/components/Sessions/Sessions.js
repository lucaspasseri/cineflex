import Bottom from '../Bottom/Bottom';
import './Sessions.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Showtimes from '../Showtimes/Showtimes';
import { useParams } from 'react-router-dom';

export default function Sessions(){
    const [listaSessoes, setListaSessoes] = useState([]);
    const [dadosRodape, setDadosRodape] = useState([]);
    const { idFilme } = useParams();
    useEffect(() => {
        
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`);

		requisicao.then(resposta => {
			setListaSessoes(resposta.data.days);
            dadosRodape.push(resposta.data.posterURL);
            dadosRodape.push(resposta.data.title);
            setDadosRodape([...dadosRodape]);

		});
	}, []);

    console.log(listaSessoes);

    const listaComponentizada = listaSessoes.map(item=> {
        return  <div className="card-sessoes">
                    <div className="dia">{item.weekday} - {item.date}</div>
                    <Showtimes key={item.id} showtimes={item.showtimes}/>
                </div>              
     });
    return(
        <>
            <div className="titulo">Selecione o horário</div>
            <div className="lista-sessoes">
                {listaComponentizada.length===0? "Carregando..." : listaComponentizada} 
            </div>
            <Bottom tipo="sessions" dadosRodape={dadosRodape}/>
        </>
    );
}