import './Home.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Home(){
    const [listaFilmes, setListaFilmes] = useState([]);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

		requisicao.then(resposta => {
			setListaFilmes(resposta.data);
		});
	}, []);

    console.log(listaFilmes);

    const listaComponentizada = listaFilmes.map((item,i)=> {
       return <Link to="/filme/37"><div className="cartaz" key={i} style={{backgroundImage:`url(${item.posterURL})`}}></div></Link>
    });
    return(
        <>
            <div className="titulo">Selecione o Filme</div>
            <div className="lista-filmes">
               {listaComponentizada.length===0? "Carregando..." : listaComponentizada}      
            </div>
        </>
    );
}