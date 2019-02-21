$(document).ready(function(){
  debugger;
  $('#reaper').hide();
  $('#mercy').hide();
  $('#moira').hide();
  $('#dva').hide();

  $('.overwatch-form form').submit(function(){
    var userName = $('input#name').val();
    var userColor = $('input:radio[name=color]:checked').val();
    var userHug = $('#range').val();

    event.preventDefault();

    if (userColor === 'pink') {
      $('#dva').show();
    } else if (userColor === 'yellow') {
      $('#mercy').show();
    } else if (userColor === 'purple') {
      $('#moira').show();
    } else if (userColor === 'black') {
      $('#reaper').show();
    }
  });
});
