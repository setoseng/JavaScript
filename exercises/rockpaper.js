function rockPaperScissors(player1,player2){
  if(player1=='rock'&&player2=='scissors'){
    console.log('player 1');
  }
  else if(player1=='paper'&&player2=='rock'){
    console.log('player 1');
  }
  else if(player1=='scissors'&&player2=='paper'){
    console.log('player 1');
  }
  else if(player1==player2){
    console.log('draw');
  }
  else{
    console.log('player 2');
  }
}
rockPaperScissors('rock','scissors');
rockPaperScissors('rock','paper');
rockPaperScissors('paper','paper');
