import { Link } from "react-router-dom";

export default function Showtimes(props){
    const { showtimes } = props;
    const listComponentized = showtimes.map(item=>{
        return <Link to={"/assentos/"+item.id}><button key={item.id} className="botao-sessoes">{item.name}</button></Link>
    });
    return(
        <div className="horarios">
            {listComponentized}
        </div> 
    );
}