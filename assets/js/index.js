$(function(){
  //génération d'un nombre aléatoire
  randomNumber = Math.floor(Math.random() * 100);
  //On génère une variable pour calculer le nombre de coups pour trouver le résultat
  tryCount = 0;
  $('#bouton').click(function(){
    userNumber = $('#nombreEntre').val();
    tryCount++;
    if(isNaN(userNumber) || userNumber>100 || userNumber<0 || userNumber == ''){
      message = 'Entrez un nombre entre 1 et 100';
    }else{
    if (randomNumber == userNumber){
      message = 'Bravo, vous avez trouve le nombre en ' + coups + ' coups !!!';
    }else if (userNumber > randomNumber){
      message = 'C\'est moins !';
    }else{
      message = 'C\'est plus !';
    }
  }
  alert(message);
});
});
