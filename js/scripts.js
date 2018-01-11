$(document).ready(function() {

$('#triangle').submit(function(event) {
  var sideInput1 = parseInt($("#input1").val());
  var sideInput2 = parseInt($("#input2").val());
  var sideInput3 = parseInt($("#input3").val());

    debugger;
  if ((sideInput1 === 0) || (sideInput2 === 0) || (sideInput3 === 0)) {
    $("#result").text("This is not a triangle");
  } else if ((sideInput1 === sideInput2) && (sideInput2 === sideInput3)) {
    $("#triresult").show();
    $("#result").text("Equilateral");
  } else if (sideInput1 === sideInput2 || sideInput3 === sideInput1 || sideInput2 === sideInput3) {
    $("#triresult").show();
    $("#result").text("Isosceles");
  } else if (sideInput1 != sideInput2 != sideInput3) {
    $("#triresult").show();
    $("#result").text("Scalene");
  }

  event.preventDefault();



  });
});
