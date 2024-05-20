import styled from "styled-components";

export const FooterContainerStyle = styled.footer`
width:100%;
height:230px;
border-top:1px solid #80808080;
margin-top:4rem;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
padding:30px 0 10px 0;

.titleFooter{
    text-align:center;
    font-family:'Orbitron';
    color:yellow;
    cursor: pointer;
}
.redesContainer{
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 10px;
    font-family: "Red Hat Display";
    div {
        height: 50px;
        border: 1px solid #80808080;
    }
    span {
        display: flex;
        gap: 10px;
    }
}

.logoRedes{
    width:30px;
    height:30px;
}

.topPage {
    font-family: "Red Hat Display";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    right: 50px;
    cursor: pointer;

    .iconTopPage {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .topPage {
        right: 50%;
        transform: translate(50%, 100%);
    }
}
`