// const bets = useSelector(state => state.apiBets.bet);
// const params = useParams();
// const isLoading = useSelector(state => state.apiMatches.isLoading);
// const isLoadingBets = useSelector ( state => state.apiBets.isLoading );
// const matchSelectedToBet = useSelector(state => state.apiMatches.searchMatch);
// const selectLeague = useSelector(state => state.apiMatches);
// const betHitsSelected = useSelector(state => state.apiBets.dataBet);
 
 // const status = {
    //   'TIMED': 'Pendiente',
    //   'IN_PLAY' : 'LIVE',
    //   'FINISHED' : 'FINISHED',
    //   'PAUSED' : 'PAUSED',
    //   'FT' : 'FINISHED',
    //   'NS' : '',
    //   '1H' : 'LIVE',
    //   '2H' : 'LIVE',
    // }

// const renderStateWinner = (betHit) => {
//     return  betHitsSelected.foundBetRequest_BDD == undefined
//       ? <small style={{color:'yellowgreen'}}><b>Acertaste!</b></small>
//       : <small style={{color:'orange'}}><b>No acertaste</b></small>
//       ? betHit == true
//       ? <small style={{color:'yellowgreen'}}><b>Acertaste!</b></small>
//       : <small style={{color:'orange'}}><b>No acertaste</b></small>    
//       : ''    
    
//   }

//   const renderWinner = ( searchBetted,idMatch,betHit ) => {
//     if (searchBetted[0] && searchBetted[0].id === idMatch) {
//       localStorage.setItem('searchBetted', JSON.stringify(searchBetted));
//       return renderStateWinner(betHit)
//     } else if( searchBetted[0] && searchBetted[0].fixture.id === idMatch ){
//       localStorage.setItem('searchBettedArg', JSON.stringify(searchBetted));
//       return renderStateWinner(betHit)
//      }
//   }
      
    
//     const renderBets = () => {
//       const betItems = []; // crear un array vacío

//       for (let i = 0; i < bets.length; i++) {
//         const currentBet = bets[i];
//         const idBet = currentBet._id;
//         const checked = currentBet.checked;
//         const betHit = currentBet.betHit;

//         currentBet.match.forEach(match => {
//           const dateNow = new Date().toISOString();
//           if(selectLeague == undefined){
//             return;
//           }

//           const idLeagueBetted = match.competition == undefined ? match.league.id : match.competition.id;
//           const { hour, date } = match;
//           const teamHome = match.homeTeam === undefined ? match.teams.home.name : match.homeTeam.name;
//           const teamAway = match.awayTeam === undefined ? match.teams.away.name : match.awayTeam.name;
//           const league = match.competition === undefined ? match.league.name : match.competition.name
//           const imgHome = match.homeTeam ? match.homeTeam.crest : match.teams.home.logo;
//           const imgAway = match.awayTeam ? match.awayTeam.crest : match.teams.away.logo;
//           const progress = match.utcDate == undefined ? dateNow < match.fixture.date ? 'Pendiente' : 'Finalizado' : dateNow < match.utcDate ? 'Pendiente' : 'Finalizado';
//           const idMatch = match.id == undefined ? match.fixture.id : match.id; 
//           const bettedFor = currentBet.winner == 'AWAY_TEAM' ? teamAway : currentBet.winner == 'HOME_TEAM' ? teamHome : currentBet.winner == 'DRAW' ? 'Empate' : '';
//           const isPending = match.utcDate == undefined ? dateNow < match.fixture.date : dateNow < match.utcDate;
//           // agregar el objeto renderizado al array
          
//           const leagueSelected = selectLeague[idLeagueBetted == 128 ? 'ligaArgentina' : 'content'];
//           const content = leagueSelected
//           const newArray = leagueSelected.newArray;
//           const searchBetted = newArray ? newArray.filter(match => match.fixture.id == idMatch) : 
//                                           content ? content.filter(match => match.id == idMatch) : [];
//           betItems.push(
//             <li className='itemListBets' key={idBet}>
//               <span className='infoMatch'>
//                 <p className='teamInfo'><b>Campeonato: </b>{league}</p>
//                 <span className='teams'>
//                   <p className='teamHome'>
//                     <img src={imgHome} alt="" />
//                     {teamHome}
//                   </p>
//                   <p className='vs'>vs</p>
//                   <p className='teamAway'>
//                     <img src={imgAway} alt="" />
//                     {teamAway}
//                   </p>
//                 </span>
//                 <p className='teamInfo'><b>Hora: </b>{hour}</p>
//                 <p className='teamInfo'><b>Fecha: </b>{date}</p>
//                 <p><b>Estado: </b>{progress}</p>
//                 <p><b>Apostaste por: </b>{bettedFor}</p>
//                 {
//                  isPending
//                  ? <></>
//                  : checked == true
//                  ? <>
//                      {
//                      betHit
//                      ? <small style={{color:'yellowgreen'}}><b>Acertaste!</b></small>
//                      : <small style={{color:'orange'}}><b>No acertaste</b></small>
//                      }  
//                    </>
//                  :
//                  <>
//                      {
//                      isLoading ?
//                       'Loading ...' : renderWinner( searchBetted,idMatch,betHit )}
//                      <Button title={'Ver resultado'} handleFunction={() => getWinnerMatch( idLeagueBetted, idBet, searchBetted )} />
//                    </>
//                 }
//               </span>
//             </li>
//           );
//         });
//       }

//       return betItems; // devolver el array con todos los objetos renderizados
      
//     }

//     const getWinnerMatch = async (idLeague,idBet) => {
//       if(idLeague == 128){
//          await dispatch(fetchMatchesArgentina());
//          await dispatch(checkBet({idBet}));
//          await dispatch(getBets(_id));
//       } else if(idLeague != 128){
//         await dispatch(fetchAllMatches(idLeague)); 
//         await dispatch(checkBet({idBet}));
//         await dispatch(getBets(_id));
//     }
//   }