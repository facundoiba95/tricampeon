import styled from "styled-components";

export const ContainerStyle = styled.section`
width:100%;
max-width:900px;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:15px;
margin:3rem auto;
font-family:'Red Hat Display';
background: rgb(32,34,36);
background: radial-gradient(circle, rgba(32,34,36,1) 6%, rgba(20,22,26,1) 84%);

.containerTitleLeague {
    display: flex;
    gap: 10px;
    padding-top:20px;

    img {
        width: 30px;
        height: 30px;
        object-fit: cover;
    }
}

h2 {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight:900;
    text-align: center;
}

@media (max-width: 380px) {
    .containerTitleLeague {
        justify-content: center;
        align-items: center;
        transform: scale(0.9);
    }
}
`