import styled from "styled-components";

export const ContainerDefaultStyle = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
font-family:'Red Hat Display';
gap:10px;
background-color:${props => props.isFeed ? '#80808010' : 'none'};

.titleSeason{
    font-weight:100;
}

.titleFeed{
    font-family:'Red Hat Display';
    font-size:1.2rem;
    text-align:center;
    padding-top:20px;
}
.tricampeonTitle{
    font-family:'Orbitron';
    color:yellow;
}

.titleReccomendChannels {
    background-color: red;
}
`

export const ContainerLogoLeagueStyles = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background: rgb(51,52,54);
background: radial-gradient(circle, rgba(51,52,54,1) 7%, rgba(20,22,26,1) 52%);

.imgLeague{
    width:180px;
    height:180px;
    object-fit:contain;
    padding:10px;
}
`