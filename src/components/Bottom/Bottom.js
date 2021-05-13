import "./Bottom.css";

export default function Bottom(props){
    const { tipo, dadosRodape} = props;

    const rodapeSessoes = <div className="rodape">
                        <div className="poster" style={{backgroundImage:`url(${dadosRodape[0]})`}}></div>
                        <div className="container-infos-filme">
                            <div className="dados-filme">{dadosRodape[1]}</div>
                        </div>
                    </div>;
    const rodapeAssento = <div className="rodape">
                                <div className="poster" style={{backgroundImage:`url(${dadosRodape[0]})`}}></div>
                                <div className="container-infos-filme">
                                    <div className="dados-filme">{dadosRodape[1]}</div>
                                    <div className="dados-filme">{dadosRodape[2]} - {dadosRodape[3]}</div>
                                </div>
                            </div>;
    return(
        <>
            {tipo==="sessions"?rodapeSessoes:rodapeAssento}
        </>
    );
}