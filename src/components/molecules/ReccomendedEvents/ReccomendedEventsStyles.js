import styled from "styled-components";

export const CardReccomendedEventsStyles = styled.div`
width: 100%;
max-width:350px;
height: 100%;
border-radius: 10px;
cursor: pointer;
transition: all 0.1s ease-in-out;
background: rgb(51,52,54);
background: linear-gradient(180deg, rgba(51,52,54,1) 6%, rgba(20,22,26,1) 84%);
font-family: 'Red Hat Display';
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

.competition {
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    padding: 8px;
    border-radius: 10px;
    position: relative;
    font-weight:400;

    img {
        width: 30px;
        height: 30px;
    }

    .onlive {
        width: 70px;
        height: 20px;
        object-fit: cover;
        background-color: transparent;
        border-radius:10px;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    small {
        position: absolute;
        right: 5px;
        font-weight: 700;
    }

    b {
        font-size: 0.9rem;
        font-weight:500;
    }
}

.containerTeams {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    padding-left: 10px;
    position: relative;
}

.homeTeam, .awayTeam {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 300;

    img {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }

    .scoreNumber {
        position: absolute;
        right: 20px;
    }


}
&:hover {
    background-color: #80808001;
}


@media (max-width: 480px) {
    .competition {
        .onlive {
           background-color: transparent;
        }
        small {
           position: relative;
           right: 5px;
           font-weight: 700;
           right: 0;
           width: 60px;
           word-wrap: break-wo;
        }
    }
}
`