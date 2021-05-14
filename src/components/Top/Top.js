import "./Top.css";
import { useHistory } from "react-router-dom";
export default function Top(props){
    const { pageState } = props;
    const showBackButton = (pageState !== "" && pageState !== "Home" );
    let history = useHistory();
    return(
        <>
            <div className="header">
                <div className="voltar-container">
                    {showBackButton?<button onClick={()=>history.goBack()} className="botao-sessoes">Voltar</button>:""}
                </div>
                <div className="titulo-header">CINEFLEX</div>
                <div className="filler"></div>
            </div>
            
        </>
    );
}