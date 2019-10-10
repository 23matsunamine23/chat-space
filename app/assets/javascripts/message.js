$(function(){
  function buildHTML(message){
    var html = `<div class="main__message__box">
                  <h2 class="main__message__name">
                    ${message.name}
                  </h2>
                  <p class="main__message__text">
                    ${message.content}
                  </p>
                  <p class="main__message__date">
                    ${message.date}
                  </p>
                </div>`
      return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main__message__box').append(html);
      $('#message_content').val('');
    })
    .fail(function(){
      alert('error');
    });
  });
});