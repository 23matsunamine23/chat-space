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

    .done(function(users){
      $('#user-search-result').empty();
      users.forEach(function(user){
        var html = buildHTML(user);
        $('#user-search-result').append(html);
      });
      if (input.length === 0){
        $('#user-search-result').empty();
      }
     });
     .fail(function(){
        alert("ユーザー検索に失敗しました");
     });
  });

  $('.buttons-area').on('click', 'button', function() {
    $('.buttons-area').append('<button>複製されたボタン</button>');
});

















});