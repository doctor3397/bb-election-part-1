$(function(){

  //GET AJAX Request
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method:'GET'

  }).done(function(data){
    console.log(data);

      for (var i=0; i < data.candidates.length; i++){

        $('<h3>').html(data.candidates[i].id).appendTo('#candidates');
        $('<li>').html(data.candidates[i].name).appendTo('#candidates');
        $('<li id="voteCount">').html(data.candidates[i].votes).appendTo('#candidates');

        $('#candidates').append(
        //   '<h3> Cadidate: ' + data.candidates[i].id + '</h3>' +
        //   '<li>' + data.candidates[i].name + '</li><br>' +
        //   '<li>' + data.candidates[i].votes + '</li>'
        //  id
        // '<form method="POST" action="https://bb-election-api.herokuapp.com/vote">' +
        //   '<input type="hidden" name="id" value="'+ data.candidates[i].id+'">' +
        //   '<input type="submit" value="Vote"></form>'
        //  name
        '<form method="POST" action="https://bb-election-api.herokuapp.com/vote">' +
          '<input type="hidden" name="name" value="'+ data.candidates[i].name+'">' +
          '<input id="vote" type="submit" value="Vote"></form>'

        );
      }

    //POST AJAX Request
    $("#vote").on('click', function (event){
      event.preventDefault();

      var formData = $(this).parent().serialize();
      //debugger;
      $.ajax({
        url: 'https://bb-election-api.herokuapp.com/vote',
        data: formData,
        method:'POST'

      }).done(function(data){
        console.log(data)
      });
    });

  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log('Ajax Request Failed');
    console.log(jqXHR);
  }).always(function(){
    console.log('Ajax Request Sent');
  });

});
