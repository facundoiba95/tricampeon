import styled from 'styled-components';

export const TitleEventContainerStyles = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
margin: 1rem 0;
position: relative;

.line {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 150px;
    border: 1px solid #80808080;
}

@media (max-width: 480px) {
    .line {
        display: none;
        opacity: 0;
        visibility: hidden;
    }
}
` 

export const TitleMatchContainerStyles = styled.section`
width: 100%;
max-width: 650px;
height: 200px;
display: flex;
justify-content: space-between;
text-transform: uppercase;
gap: 20px;


.dataEventSelected {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    height: 100%;
    width: 100%;
    padding-left: 50px;

    p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color: #FFFFFF99;
}

.iconStadium {
    font-size: 40px;
}

.iconCup {
    font-size: 40px;
    font-weight:900;
}
}

.containerTeams {
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 10px;
font-family: 'Lato';
padding: 5px 0 5px 20px;

img {
    width: 40px;
    height: 40px;
}

.homeTeam, .awayTeam {
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
}

.iconCrest {
    font-size:3.2rem;
}
}

@media (max-width: 480px) {
    height: 150px;
    padding: 10px;
    display: grid;
    justify-content: center;
    align-self: center;
    gap: 0px;

    .containerTeams {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 0;

        img {
            width: 30px;
            height: 30px;
        }

        h3 {
            font-size: 0.9rem;
        }
    }

    .homeTeam, .awayTeam {
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

    .dataEventSelected {
        border-top: 1px solid #80808050;
        width: 100%;
        flex-direction: row;
        padding:0;
        padding-top:0px;

        .iconStadium {
            width: 35px;
            height: 35px;
        }

        .iconCup {
            width: 30px;
            height: 30px;
        }

        p {
            width: 100%;
            height: 100%;
            font-size: 0.9rem;
            flex-direction:row;
            text-align: center;
            gap: 5px;
        }
        
        small {
            text-align: left;
        }
}
}


@media (max-width: 400px) {
    zoom: 85%;
}
`