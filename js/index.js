//The code below was used from one of our class excersizes where the background of the web page changed based on a selected city.
// I am going to apply the same function for when the user chooses a different train line, they will get a different background.

var trainLines = ["NEC", "NJCL", "M&E", "RARITAN", "ATLANTIC", "MAIN", "MONT", "PASCACK"];
$(document).ready(function() {
  for(i=0;i<trainLines.length;i++) {
    $('#trainline-type').append('<option value="' + trainLines[i] + '">' + trainLines[i] + '</option>');
  }
  $('form').on('change', '#trainline-type',function(){
    var city = $('#trainline-type').val();
    if(trainLines == 'NEC') {
      $('body').attr('class','NEC');
    }
    else if (trainLines == 'NJCL') {
      $('body').attr('class','NJCL');
    }
    else if (trainLines == 'M&E') {
      $('body').attr('class','M&E');
    }
    else if (trainLines == 'RARITAN') {
      $('body').attr('class','RARITAN');
    }
    else if (trainLines == 'ATLANTIC') {
      $('body').attr('class','ATLANTIC');
    }
    else if (trainLines == 'MAIN') {
    $('body').attr('class','MAIN');
    }
    else if (trainLines == 'MONT') {
    $('body').attr('class','MONT');
    }
    else if (trainLines == 'PASCACK') {
    $('body').attr('class','PASCACK');
  });
});
