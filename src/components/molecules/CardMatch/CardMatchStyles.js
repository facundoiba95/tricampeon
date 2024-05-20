import styled from "styled-components";

export const CardContainerStyle = styled.div`
width:100%;
max-width:700px;
min-width:350px;
height:120px;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
font-family:'Red Hat Display';
cursor: pointer;
animation: ${props => props.status == 'LIVE' ? 'gradient 5s ease infinite' : 'none'};
transition: all 0.3s ease-in-out;
background: ${props => props.status == 'LIVE' ? 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)' : 'none'};
background-size: 400% 400%;
/* border-bottom: ${props => props.status !== "LIVE" ? "1px solid #80808050" : "none"}; */
border-bottom-left-radius: ${props => props.status !== "LIVE" ? "0px" : ""};
border-bottom-right-radius: ${props => props.status !== "LIVE" ? "0px" : ""};
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);


.containerTeam{
    display:flex;
    gap:20px;
}


.containerTeam img {
    width:50px;
    height:50px;
    object-fit:contain;
    border-radius:none;
}

.dateMatch{
 position:absolute;
 width:80px;
 left:10px;
 font-size:0.8rem;
 text-align:center;
 font-weight:100;
 top: 50%;
 transform: translate(0, -50%);

 .imgLive {
    background-color: transparent;
    border-radius:10px;
    width: 70px;
    height: 25px;
    object-fit: cover;
 }
}

.teamsMatchHome{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    text-align:left;
    gap:20px;
    width:150px;
    font-weight: 500;
    position: relative;
}

.teamsMatchAway{
    display:flex;
    flex-direction:row-reverse;
    justify-content:flex-start;
    align-items:center;
    text-align:right;
    gap:20px;
    width:150px;
    font-weight: 500;
    position: relative;
}

.crownHomeTeam {
    color: yellow;
    font-size: 1.5rem;
    position: absolute;
    top: -28px;
    left: 13px;
}

.crownAwayTeam {
    color: yellow;
    font-size: 1.5rem;
    position: absolute;
    top: -28px;
    right: 13px;
}

.containerBets{
    position:absolute;
    right:0;
    top:5px;
    padding-right:15px;
}

.status{
    width:100px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;

    .drawIcon {
        font-size: 1.7rem;
        position: absolute;
        top: -25px;
        color: #FFFFFF99;
    }

    span{
        display:flex;
        justify-content: center;
        align-items: center;
        gap:10px;
        font-weight:900;
        font-size: 1.2rem;
    }
}

.progress {
    background-color: ${props => props.status == 'FINISHED' ? 'purple' : props.status == 'PAUSED' ? 'orange' : props.status == 'FIXTURE' ? '#1976D2' : 'none'};
    color: white;
    text-align:center;
    font-size:0.8rem;
    font-weight: 500;
    margin-top:0.5rem;
}
.goBet{
    background-color:${props => props.isBet == 'Apostar' ? 'yellow' : ''};
    position:absolute;
    bottom:10px;
    width:auto;
    padding:2px;
    border-radius:3px;
    right:20px;
    color:black;
    font-weight:600;
}

.iconTv {
    position: absolute;
    right: 20px;
    font-size: 1.5rem;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@media (max-width:850px) {
    height:170px;
    width:95%;
    
    .dateMatch{
        left:50%;
        top: 50%;
        transform: translate(-50%, 30%);

        .imgLive {
            margin-top: 5px;
            width: 70px;
            height: 25px;
        }
    }

    .containerTeam{
      gap:10px;
    }

    .teamsMatchHome, .teamsMatchAway{
        flex-direction:column;
        justify-content:flex-end;
        align-items:center;
        text-align:center;
        gap:10px;
        width:120px;
    }

    .nameTeam{
        text-align:center;
        width:120px;
        white-space: break-spaces;
    }

    .goBet{
        transform: translate(-50%);
        left:50%;
        width:80px;
        text-align:center;
    }

    .crownHomeTeam {
        left: 48px;
    }

    .crownAwayTeam {
        right: 48px;
    }
}

@media (max-width: 480px) {
    .teamsMatchAway, .teamsMatchHome{
        width: 100px;
    }
    .crownHomeTeam {
        left: 40px;
    }

    .crownAwayTeam {
        right: 40px;
    }

    .iconTv {
        top: 10px;
    }
}

@media (max-width: 360px) {
    transform: scale(0.8);
}
`