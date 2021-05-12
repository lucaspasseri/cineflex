import { Link } from "react-router-dom";

export default function Showtimes(props){
    const { showtimes } = props;
    const listaComponentizada = showtimes.map(item=>{
        return <Link to={"/sessao/"+item.id}><button key={item.id} className="botao-sessoes">{item.name}</button></Link>
    });
    return(
        <div className="horarios">
            {listaComponentizada}
        </div> 
    );
}