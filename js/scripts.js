$(document).ready(function(){
  var userHeight = parseInt(prompt("How tall are you in Inches?"));

  if (userHeight < 36) {
    $('.tooSmall').show();
  } else if (36 <= userHeight <= 44) {
    $('.').show();
  }else if (44 < userHeight <= 46){
    $('.').show();
    $('.').show();
  }
}else if (46 < userHeight <= 48){
    $('.').show();
    $('.').show();
    $('.').show();
  }
}else if (48 < userHeight <= 81){
    $('.').show();
    $('.').show();
    $('.').show();
    $('.').show();
  }
} else if (userHeight > 81) {
  $('#tooTall').show();
})
