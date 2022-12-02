$("#sendMail").on ("click", function(){
    var names =$("#name").val().trim();
    var phone =$("#phone").val().trim();
})

if (names=="") {
    $("#errorMess"),text ("Введіть ім'я");
    return false;
} else  if (phone=="") {
    $("#errorMess"),text ("Введіть телефон");
    return false;
}

$ ("#errorMess"),text ("");


$.ajax({
  URL:'ajax/mail.php', 
  type: 'post',
  cache: false,
  data: {'name': names, 'phone': phone },
  dataType: 'html'
  beforeSend: function(){
    $("#sendMail").prop("disabled",true);
  },
  success: function(data){
    if(!data)
    alert ("Були помилки, повідомлення не відправлено!");
    else  
    $ ("#mainForm"). trigger ("reset");
    $("#sendMail").prop("disabled",false);
 }


});
