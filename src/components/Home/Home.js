import './Home.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Home(props){
    const { setPageState } = props;
    setPageState("Home");
    const [listFilms, setListFilms] = useState([]);
    useEffect(() => {
		const request = 
            axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

		request.then(response => {
			setListFilms(response.data);
		});
	}, []);

    const listComponentized = listFilms.map(item=> {
        return <Link key={item.id} to={"sessoes/"+item.id}>
                    <div key={item.id} 
                        className="cartaz" 
                        style={{backgroundImage:`url(${item.posterURL})`}}>
                    </div>
                </Link>
    });
    return(
        <>
            <div className="titulo">Selecione o Filme</div>
            <div className="lista-filmes">
               {
                    listComponentized.length===0? "Carregando..." : listComponentized
               }     
            </div>
        </>
    );
}
