$(function() {
  // フォーム内に入力が無かった場合、エラーメッセージを表示
  $('.required').on('keyup', function() {
    let empty_error = false;
    let value = $(this).val();

    if( value === '' ) {
      empty_error = true;
    }

    if( empty_error ){
      if( $(this).parent().next('div.account-page_error').length || $(this).parent().next('div.account-page_match-error').length){
        $(this).parent().next('div.account-page_error').remove();
        $(this).parent().css('margin-bottom', '30px');
      }
      $(this).parent().after('<div class="account-page_error">入力してください</div>');
      $(this).parent().css('margin-bottom', '10px');
    }else{
      $(this).parent().next('div.account-page_error').remove();
      $(this).parent().css('margin-bottom', '30px');
    }
  });

  // フォーム内に入力が無かった場合とフォーム内の入力が指定のものでなかった場合のエラーメッセージを表示
  $('.invalid_data').on('keyup', function() {
    let empty_error = false;
    let input_error = false;
    let value = $(this).val();
    let account_page_error_remove = $(this).parent().next('div.account-page_error').remove();
    let account_page_match_error_remove = $(this).parent().next('div.account-page_match-error').remove();

    // 入力が無い場合、エラー
    if( value === '' ) {
      empty_error = true;
    }

    if( this.id == 'user_email' ){
      // emailに@とドメインを含む
      if( !value.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i) ){
        input_error = true;
      }
    } else if( $(this).attr('class').indexOf('valid_password') != -1 ){
      // 半角アルファベットと数値で8文字以上
      if( !value.match(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i) ){
        input_error = true;
      }
    }

    if( empty_error ){
      if( $(this).parent().next('div.account-page_error').length || $(this).parent().next('div.account-page_match-error').length ){
        account_page_error_remove;
        account_page_match_error_remove;
        $(this).parent().css('margin-bottom', '30px');
      }
      $(this).parent().after('<div class="account-page_error">入力してください</div>');
      $(this).parent().css('margin-bottom', '10px');
    } else {
      if( input_error ) {
        if( $(this).parent().next('div.account-page_error').length || $(this).parent().next('div.account-page_match-error').length ) {
          account_page_error_remove;
          account_page_match_error_remove;
          $(this).parent().css('margin-bottom', '30px');
        }
        $(this).parent().after('<div class="account-page_error">入力不正です</div>');
        $(this).parent().css('margin-bottom', '10px');
      }else{
        account_page_error_remove;
        account_page_match_error_remove;
        $(this).parent().css('margin-bottom', '30px');

        if( this.id == 'user_email' ){
          $(".matcher").each(function(i, o){
            if( $(o).val() === $("#user_email").val()){
              if( $(this).parent().next('div.account-page_match-error').length || $(this).parent().next('div.account-page_error').length ) {
                account_page_error_remove;
                account_page_match_error_remove;
                $(this).parent().css('margin-bottom', '30px');
              }
              $(this).parent().after('<div class="account-page_match-error">既に登録されたメールアドレスです</div>');
              $(this).parent().css('margin-bottom', '10px');
            }else{
              account_page_error_remove;
              account_page_match_error_remove;
              $(this).parent().css('margin-bottom', '30px');
            }
          });
        } else if( $(this).attr('class').indexOf('valid_password_matcher') != -1 ){
          let password = $('#check_password_confirmation').val();
          let password_confirmation = $('#check_password').val();

          if( password != password_confirmation){
            if( $(this).parent().next('div.account-page_match-error').length || $(this).parent().next('div.account-page_error').length ){
              account_page_error_remove;
              account_page_match_error_remove;
              $(this).parent().css('margin-bottom', '30px');
            }
            $(this).parent().after('<div class="account-page_match-error">入力値が一致しません</div>');
            $(this).parent().css('margin-bottom', '10px');
          }else{
            account_page_error_remove;
            account_page_match_error_remove;
            $(this).parent().css('margin-bottom', '30px');
          }
        }
      }
    }
  });

  //始めにjQueryで送信ボタンを無効化する
  $('.user_create_btn').prop("disabled", true);
  $('.user_create_btn').css('background-color', '#ccc');
  $('.user_create_btn').css('border-color', '#ccc');

  $('.required,.invalid_data').on('keyup', function() {

      let flag = true;

      $('.required,.invalid_data').each(function(e) {
        if ($('.required,.invalid_data').eq(e).val() === "") {
          flag = false;
        }
      });

      let error = $('.account-page').find('div.account-page_error').length + $('.account-page').find('div.account-page_match-error').length;

      if ( flag && error == 0 ) {
          //送信ボタンを復活
          $('.user_create_btn').prop("disabled", false);
          $('.user_create_btn').css('background-color', '#38aef0');
          $('.user_create_btn').css('border-color', '#38aef0');
      }
      else {
          //送信ボタンを閉じる
          $('.user_create_btn').prop("disabled", true);
          $('.user_create_btn').css('background-color', '#ccc');
          $('.user_create_btn').css('border-color', '#ccc');
      }
  });
});
