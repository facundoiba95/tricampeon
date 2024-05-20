import styled from "styled-components";

export const ChatSectionContainerStyles = styled.section`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F643733340497311783%2F&psig=AOvVaw0llBAjQBlXlshsSFt5g_2B&ust=1714602907702000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKi_1-r_6oUDFQAAAAAdAAAAABAJ');

h3 {
    padding: 10px;
    text-align: center;
}

b {
    font-family: "Orbitron";
    color: yellow;
}

@media (max-width: 850px) {
    padding:5px;
    margin-top: 4rem;
    height: 400px;
}
`