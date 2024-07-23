import styled from 'styled-components';

export const EventSelectedSectionStyles = styled.section`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContainerChatAndVideoStyles = styled.section`
width: 100%;
height: auto;
display: grid;
justify-content: start;
align-items: start;
grid-template-columns: 1fr minmax(300px, 450px);
background: rgb(32,34,36);
background: radial-gradient(circle, rgba(32,34,36,1) 6%, rgba(20,22,26,1) 84%);
gap: 10px;
padding: 10px;

h2 {
    text-align: center;
}


@media (max-width: 850px) {
    grid-template-columns: 1fr;
    padding:0px;
}
`
