
$(document).ready(function(){
  $('#start-truefalse').click(function(){
    $('.startcontainer').html('');

    $.ajax({
      url: `https://opentdb.com/api.php?amount=25&category=15&difficulty=medium&type=boolean`,
      method: 'GET',
      datatype: 'json'
    })
    .done(function(response){
      console.log(response);
      questionsShow(response);
    })
    .fail(function(error){
      console.log('Error');
    })

    var correct = 0;
    var incorrect = 0;
    function questionsShow(info){
      var info = info.results;
      console.log(info);
      for(var i in info) {
        var questions = info[i].question;
        var correct_answer = info[i].correct_answer;
        var incorrect_answers = info[i].incorrect_answers[0];
        $('.questionsContainer').append(`<div class="row"><div class="col-xs-12"><h3>${questions}</h3></div></div>`);
        $('.questionsContainer').append(`<div class="row"><div class="col-xs-12"id="question"><li><button class="btn btn-primary alternative" value="${correct_answer}">${correct_answer}</li><li><button class="btn btn-primary alternative" value="${incorrect_answers}">${incorrect_answers}</li></div></div>`);
      }

    }
  })
})