console.log("Hi, main.js has successfully been loaded into the page.");

$(document).ready(function() {

  $( "#target" ).click(function() {
    alert( "Hey Macarena" );
  });

  // $( "#partial" ).load( "about.html #target" );  

})