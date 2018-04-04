console.log("I'm in!");



var userText = $('#magicalInput').val();
var code1 = $('.box:first-child .code');
var code2 = $('.box:nth-child(2) .code');
var code3 = $('.box:nth-child(3) .code');
var code4 = $('.box:nth-child(4) .code');
var code5 = $('.box:nth-child(5) .code');
var code6 = $('.box:nth-child(6)  .code');
var code7 = $('.box:nth-child(7) .code');
var code8 = $('.box:nth-child(8) .code');
var code9 = $('.box:nth-child(9) .code');
var code10 = $('.box:nth-child(10) .code');
var code11 = $('.box:nth-child(11) .code');
var code12 = $('.box:nth-child(12) .code');

$('#magicalInput').change(function() {
  code1.html($(this).val()).css({color: "blue", fontWeight: '700'});
  code2.html($(this).val()).css({color: "red", fontSize: "1.5em"});
  code3.html($(this).val()).css({backgroundColor: "#124", color: "#9c9"});
  code4.html($(this).val()).css("textAlign", "left");
  code5.html($(this).val()).css({fontSize: "1.4em", fontFamily: "Lobster"});
  code6.html($(this).val()).css({border:"2px dashed #900"});
  code7.html($(this).val()).css("textTransform","uppercase");
  code8.html($(this).val()+", earthling");
  code9.html($(this).val()).css("fontStyle","italic");
  code10.html("'"+($(this).val()) +"'"+ " is " + $(this).val().length+ " characters.") ;
  code11.html("'"+$(this).val().split("").reverse().join("")+"' is backwards for '" +$(this).val()+"'");
  code12.html($(this).val()).css({transform: 'rotate(180deg)' });
  
});

