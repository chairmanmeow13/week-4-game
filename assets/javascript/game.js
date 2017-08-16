$(document).ready(function() {

var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

var userTotal= 0; 
var wins= 0;
var losses = 0;
var random;

  	$('#numberWins').html(wins);
	$('#numberLosses').html(losses);

$("#random-button").on("click", function() {
      random = Math.floor(Math.random() * 101+19);
      $("#randomNumber").html(random);
    });

function reset(){
      random=Math.floor(Math.random()*101+19);
      console.log(random);
      
      $('#randomNumber').text(random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      
      $('#finalTotal').text(userTotal);
};


function winner(){
	  alert("You won!");
  	  wins++; 
      $('#numberWins').text(wins);
  		reset();
}

function loser(){
		alert ("You lose!");
  		losses++;
  		$('#numberLosses').text(losses);
  		reset()
}


$('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);

    $('#finalTotal').text(userTotal); 
    console.log(random);
	if (userTotal == random){
	  winner();
	}
	else if ( userTotal > random){
	  loser();
	}   
 }) 

  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == random){
          winner();
        }
        else if ( userTotal > random){
          loser();
        } 
  })  

  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
          if (userTotal == random){
          winner();
        }
        else if ( userTotal > random){
          loser();
        } 
  })  

  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == random){
          winner();
        }
        else if ( userTotal > random){
          loser();
        }
  });   

});
