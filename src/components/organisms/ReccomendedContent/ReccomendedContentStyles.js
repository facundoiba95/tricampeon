import styled from "styled-components";

export const ReccomendChannelsContainerStyles = styled.div`
width: 100%;
height: 100%;
max-width: 900px;
display: grid;
grid-template-columns: ${props => props.dataLength ? 'minMax(300px, 400px) minMax(300px, 400px) minMax(300px, 400px)' : 'minMax(300px, 400px) minMax(300px, 400px)'};
gap: 30px;
justify-items: center;
font-family: "Red Hat Display";

@media (max-width: 850px) {
    gap: 15px;
    padding: 0 10px;
    grid-template-columns: ${props => props.containerChannel ? props.dataLength ? 'minMax(300px, 400px) minMax(300px, 400px) minMax(300px, 400px)' : '1fr 1fr' : '1fr 1fr' };
}

@media (max-width: 480px) {
    grid-template-columns: ${props => props.containerChannel ? props.dataLength ? 'minMax(300px, 400px) minMax(300px, 400px) minMax(300px, 400px)' : '1fr' : '1fr' };
}

@media (max-width: 400px) {
    zoom: 80%;
    gap: 5px;
}
`

export const TitleReccomendContentStyles = styled.h2`
font-weight: 500;
letter-spacing: 0px;
margin: 2rem auto;
font-family: "Red Hat Display";
text-align: center;
`