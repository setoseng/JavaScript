
function Card (point,suit){
  this.point = point;
  this.suit = suit;
}
Card.prototype.getImgUrl = function(){
  if(this.point===1){
    return ("images/ace_of_"+myCard.suit+".png");
  }
  else if (this.point===11) {
      return ("images/jack_of_"+myCard.suit+".png");
  }
  else if (this.point===12) {
      return ("images/queen_of_"+myCard.suit+".png");
  }
  else if (this.point===13) {
      return ("images/king_of_"+myCard.suit+".png");
  }

  return ("images/"+myCard.point+"_of_"+myCard.suit+".png");

}

function Deck(){
  this.deck = [];
  for (var x=1;x<=13;x++){
    this.push(new Card(x,'spades'));
    deck.push(new Card(x,'clubs'));
    deck.push({new Card(x,'diamonds'));
    deck.push(new Card(x,'hearts'));
  }
}
Deck.prototype.draw = function(){
  return deck.pop();
}

function Hand(){
  this.hand = [];
}
Hand.prototype.addCard = function(card){
  this.hand.push(card);
}
