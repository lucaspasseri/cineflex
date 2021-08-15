import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
        :hover {
            filter: brightness(1.3);
        }
    }

    .titulo {
		height: 160px;
		font-family: 'Roboto', sans-serif;
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: #293845;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 80px;
		font-weight: bold;

		@media screen and (max-width: 425px) {
			font-size: 20px;
		} 
	}

    .botao {
		width: 83px;
		height: 43px;
		background: #E8833A;
		border-radius: 3px;
		font-family: 'Roboto', sans-serif;
		font-size: 18px;
		line-height: 21px;
		letter-spacing: 0.02em;
		color: #FFFFFF;
		border: none;
		margin-right: 9px;
	}

    .assentos {
        width: 250px;
    }

    .selecionado {
        width: 25px;
        height: 25px;
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
        border-radius: 17px;
        margin: auto;
        margin-bottom: 5px;
    }
    .disponivel {
        width: 25px;
        height: 25px;
        border-radius: 17px;
        background: #C3CFD9;
        border: 1px solid #7B8B99;
        margin: auto;
        margin-bottom: 5px;
    }
    .indisponivel {
        width: 25px;
        height: 25px;
        border-radius: 17px;
        background: #FBE192;
        border: 1px solid #F7C52B;
        margin: auto;
        margin-bottom: 5px;
    }

    .assento {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto';
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;
        color: #000000
    }

    .titulo-comprador {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    input {
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 7px;
    }
    input::placeholder {
        font-family: 'Roboto',sans-serif;
        font-style: italic;
        font-size: 18px;
        line-height: 21px;
        color: #AFAFAF;
    }
    .dados-comprador {
        margin-left: 24px;
        margin-bottom: 57px;
    }

	.rodape {
		height: 117px;
		background-color: #c3cfd9;
		display: flex;
		align-items: center;
		position: fixed;
		width: 100vw;
		box-shadow: 0px -4px 5px 1px rgba(0,0,0,0.57);
		bottom: 0;
		left: 0;
	}
	.poster {
		background-size: cover;
		width: 64px;
		height: 89px;
		border: 8px solid #fff;
		margin-left: 10px;
	}

	.dados-filme {
		font-family: 'Roboto', sans-serif;
		font-size: 26px;
		line-height: 30px;
		display: flex;
		align-items: center;
		color: #293845;
	}
	.container-infos-filme{
		margin-left: 14px;
	}
`;

export default GlobalStyle;