$(function() {
  console.log('ready!');

  $('#btn').click(function() {
    var data = {
      msg: $('#msgInput').val(),
    }
    console.log('click', data.msg);

    $.post('/ajax/test', data, function(rsp) {
      console.log(rsp);

      $('#isOkDiv').html("" + rsp.isOk);
    });

  });

});