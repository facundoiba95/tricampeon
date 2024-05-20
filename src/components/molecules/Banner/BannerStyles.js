import styled, { keyframes } from 'styled-components';

// Función para generar un color aleatorio en formato hexadecimal
const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

setInterval(() => {
  randomColor()
}, 500)

// Estilos del componente de banner
export const BannerContainerStyles = styled.div`
  width: 100%;
  height: 4rem;
  background-color: yellow;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lato';

  h1 {
    font-size: 2rem;
    font-weight: 900;
    cursor: pointer;
    text-transform: uppercase;
    animation: changeColor 500ms alternate-reverse infinite; // Aplica la animación CSS
  }

  h1:hover {
    color: gray;
  }

  @keyframes changeColor {
    0% { color: black; }
    50% { color: ${randomColor()}; }
    100% { color: ${randomColor()}; }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;