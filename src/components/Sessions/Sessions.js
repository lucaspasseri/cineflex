import Bottom from '../Bottom/Bottom';
import './Sessions.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Showtimes from '../Showtimes/Showtimes';
import { useParams } from 'react-router-dom';


export default function Sessions(props){
    const { setPageState } = props;
    setPageState("Sessions");
    const [listSessions, setListSessions] = useState([]);
    const [dataFooter, setDataFooter] = useState([]);
    const { idFilm } = useParams();
    
    useEffect(() => {
        
		const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilm}/showtimes`);

		request.then(response => {
			setListSessions(response.data.days);
            dataFooter.push(response.data.posterURL);
            dataFooter.push(response.data.title);
            setDataFooter([...dataFooter]);

		});
	}, []);

    const listComponentized = listSessions.map(item=> {
        return  <div className="card-sessoes">
                    <div className="dia">{item.weekday} - {item.date}</div>
                    <Showtimes key={item.id} showtimes={item.showtimes}/>
                </div>              
     });
    return(
        <div className="sessoes">
            <div className="titulo">Selecione o horário</div>
            <div className="lista-sessoes">
                {listComponentized.length===0? "Carregando..." : listComponentized} 
            </div>
            <Bottom type="sessions" dataFooter={dataFooter}/>
        </div>
    );
}