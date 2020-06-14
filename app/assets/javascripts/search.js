// $(function() {
//   function addBookInfo(result) {
//     let html = `
//       <div class="search-result-item">
//         <img alt="検索した本の画像" class="search-result-item__image" src="${result}">
//         <div class="search-result-item__title">
//           ${result}
//         </div>
//       </div>
//       `;
//       $(".book-search-result").append(html);
//     // return html;
//   }

//   function addNoBookInfo(){
//     let html = `
//       <div class="search-result-item">
//         <div class="search-result-item__no-book-info">
//           <p>対象の本が見つかりません</p>
//         </div>
//       </div>
//       `;
//       $(".book-search-result").append(html);
//     // return html;
//   }

//   $('.form-control').on('keyup', function(){
//     let input = $(".form-control").val();
//     $.ajax({
//       url: '/search',
//       type: "GET",
//       data: { keyword: input },
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     // });

//     .done(function(keywords){
//       $(".book-search-result").empty();
//       // console.log(keyword);

//     if (keywords.length !== 0) {
//       keywords.forEach(function(keyword) {
//         addBookInfo(keyword);
//       });
//     } else if (input.length == 0) {
//       return false;
//     } else {
//       addNoBookInfo();
//     }

//     // val('セットする値')
//     // $('.right-form__input__form__text').val('');
//     // $('#message_image').val('');
//   })
//   .fail(function() {
//     alert("通信エラーです。表示できません。");
//   });
//   // .always(() => {
//   //   $(".right-form__input__send-btn").removeAttr("disabled");
//   // })

//   // var reloadMessages = function() {
//   //   var last_message_id = $('.right-chat_space__chats:last').data("message-id");

//   //   $.ajax({
//   //     url: "api/messages",
//   //     type: 'get',
//   //     dataType: 'json',
//   //     data: {id: last_message_id}
//   //   })

//   //   .done(function(messages) {
//   //     console.log(messages);
//   //     if (messages.length !== 0) {
//   //     var insertHTML = '';
//   //       $.each(messages, function(i, message) {
//   //         insertHTML += buildHTML(message)
//   //       });
//   //     $('.right-chat_space').append(insertHTML);
//   //     $('.right-chat_space').animate({ scrollTop: $('.right-chat_space')[0].scrollHeight});
//   //     }
//   //   })
//   //   .fail(function() {
//   //     alert('error');
//   //   });
//   // };
//   // if (document.location.href.match(/\/groups\/\d+\/messages/)) {
//   //   setInterval(reloadMessages, 7000);
//   });
// });