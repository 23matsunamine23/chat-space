$(document).on('turbolinks:load',function(){


  function buildHTML(user){
    var html = `<div class="chat-group-user clearfix">
                 <p class="chat-group-user__name">${user.name}</p>
                 <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
      return html;
  }
  $('#user-search-field').on('keyup', function(e){
    e.preventDefault();
    var input = $(this).val();
    $.ajax({
      url: '/users',
      type: 'GET',
      data:  { keyword: input } ,
      dataType: 'json'
    })

    .done(function(datas){
      $('#user-search-result').empty();
      datas.forEach(function(data){
        var html = buildHTML(data);
        $('#user-search-result').append(html);
      });

      if (input.length === 0){
        $('#user-search-result').empty();
      }
   });
  });
});