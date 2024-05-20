import styled from "styled-components";

export const CardEventScheduleContainerStyle = styled.div`
width: 100%;
height: 100%;
display: flex;
gap: 5px;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
padding: 10px;
background: rgb(32,34,36);
background: radial-gradient(circle, rgba(32,34,36,1) 6%, rgba(20,22,26,1) 84%);

img {
    width: 100%;
    height: 350px;
    object-fit: contain;
}

.logoTricampeon {
    display: flex;
    justify-content : center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 350px;

    h2 {
        font-family: "Orbitron";
        color: yellow;
    }
}
`