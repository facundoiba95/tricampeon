import styled from "styled-components";


export const colores = [
    "#D8BFD880", // Lavanda
    "#BA55D380", // Orquídea oscura
    "#9370DB80", // Violeta medio
    "#7B68EE80", // Azul violeta
    "#6A5ACD80", // Azul pizarra medio
    "#483D8B80", // Azul pizarra oscuro
    "#ADD8E680", // Azul claro
    "#87CEEB80", // Azul cielo
    "#00BFFF80", // Azul real
    "#4682B480", // Azul acero
    "#FFFF0080"  // Amarillo
  ];

export const CardOptionalChannelStyles = styled.div`
/* width: 120px;
object-fit: contain;
height: 40px;
border: none;
background-color: white;
border-radius: 5px;
cursor: pointer;
transition: all 0.2s ease-in-out;

:hover {
    transform: scale(1.05);
} */
`

export const ListOptionalChannelStyles = styled.ul`
display: ${props => props.openList ? 'flex' : 'none'};
justify-content: flex-start;
align-items: center;
gap: 10px;
height: ${props => props.openList ? 'auto' : '0%'};
overflow: ${props => props.openList ? 'visible' : 'hidden'};
position: absolute;
width: 100%;

`

export const ItemOptionalChannelStyles = styled.li`
width: auto;
height: 25px;
border-radius: 5px;
display: flex;
background-color: #3F3874;
justify-content: center;
align-items: center;
font-weight: 600;
cursor: pointer;
text-align: center;

p {
    width: 80px;
}

:hover {
    background-color: #3F387480;
}
`