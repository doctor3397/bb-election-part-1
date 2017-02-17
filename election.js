$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method:'GET'

  }).done(function(data){
    console.log(data);

    for (var i=0; i < data.candidates.length; i++){

      // $('<h3>').html(data.candidates[i].id).appendTo('#candidates');
      // $('<li>').html(data.candidates[i].name).appendTo('#candidates');
      // $('<li>').html(ata.candidates[i].votes).appendTo('#candidates');

      $('#candidates').append(
        '<h3> Cadidate: ' + data.candidates[i].id + '</h3>' +
        '<li>' + data.candidates[i].name + '</li><br>' +
        '<li>' + data.candidates[i].votes + '</li>'
      );
    }

  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log('Ajax Request Failed');
    console.log(jqXHR);
  }).always(function(){
    console.log('Ajax Request Sent');
  });

});
