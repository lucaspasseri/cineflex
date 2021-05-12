import './Sessions.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Showtimes from '../Showtimes/Showtimes';

export default function Sessions(){
    const [listaSessoes, setListaSessoes] = useState([]);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/10/showtimes");

		requisicao.then(resposta => {
			setListaSessoes(resposta.data.days);
		});
	}, []);

    console.log(listaSessoes);

    const listaComponentizada = listaSessoes.map((item,i)=> {
        return  <>
                    <div className="card-sessoes">
                        <div className="dia">{item.weekday} - {item.date}</div>
                        <Showtimes showtimes={item.showtimes}/>
                    </div>
                </>
     });
    return(
        <>
            <div className="titulo">Selecione o horário</div>
            <div className="lista-sessoes">
                {listaComponentizada.length===0? "Carregando..." : listaComponentizada} 
            </div>
        </>
    );
}