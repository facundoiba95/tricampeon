import styled from "styled-components";

export const ChannelListStyles = styled.ul`
width: 100%;
max-width: 900px;
height: 100%;
display: grid;
grid-template-columns: minMax(300px, 400px) minMax(300px, 400px) minMax(300px, 400px);
align-items: center;
justify-content: center;
gap: 20px;

@media (max-width: 850px) {
    grid-template-columns: minMax(300px, 400px) minMax(300px, 400px);
}



@media (max-width: 420px) {
    gap:5px;
    grid-template-columns: 1fr 1fr;
    zoom: 80%;
}

@media screen {
    zoom: 75%;
}
`

export const ChannelItemStyles = styled.li`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
padding: 10px;
cursor: pointer;
border-radius: 5px;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
img {
    width: 180px;
    height: 100px;
    border-radius: 5px;
    object-fit: contain;
}

:hover {
    background-color: #80808020;
}
`