/* FULLSCREEN MODE */
var elem = document.getElementById("fullscreen");

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

// DARK MODE
  function darkmode() {
    if( $( "body" ).hasClass( "darkmode__enabled" )) {
      $( "body" ).removeClass( "darkmode__enabled" );
      $( ".settings" ).removeClass( "darkmode__enabled" );
      $( ".main_cont" ).removeClass( "darkmode__enabled__two" );
      $( ".focus_main_cont" ).removeClass( "darkmode__enabled__two" );
      $( ".focus" ).removeClass( "darkmode__enabled__two" );
      $( ".cont_font" ).removeClass( "darkmode__enabled__two" );
      $( ".timer_font" ).removeClass( "darkmode__enabled__two" );
      $( ".timer_cont" ).removeClass( "darkmode__enabled__two" );
      $( ".main_timer" ).removeClass( "darkmode__enabled__two" );
      $( "li" ).removeClass( "darkmode__enabled" );
    } else {
      $( "body" ).addClass( "darkmode__enabled" );
      $( ".settings" ).addClass( "darkmode__enabled" );
      $( ".main_cont" ).addClass( "darkmode__enabled__two" );
      $( ".focus_main_cont" ).addClass( "darkmode__enabled__two" );
      $( ".focus" ).addClass( "darkmode__enabled__two" );
      $( ".cont_font" ).addClass( "darkmode__enabled__two" );
      $( ".timer_font" ).addClass( "darkmode__enabled__two" );
      $( ".timer_cont" ).addClass( "darkmode__enabled__two" );
      $( ".main_timer" ).addClass( "darkmode__enabled__two" );
      $( "li" ).addClass( "darkmode__enabled" );
    }
  }