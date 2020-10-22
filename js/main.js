var isMobile = $(window).width() > 1000? false: true;







$(document).ready(function(){

    

    $("#utm").val(window.location.search.replace( '?', ''));





  if (isMobile){

    var video1 = '<video preload="auto" controls="controls" id="video_1" poster="img/bg.jpg"><source src="video1m.mp4" type="video/mp4"></video>';

    var video2 = '<video preload="auto" id="video_2" poster="img/bg.jpg"><source src="video2m.mp4" type="video/mp4"></video>';

    var video3 = '<video preload="auto" id="video_3" poster="img/bg.jpg"><source src="video3m.mp4" type="video/mp4"></video>';

    var video4 = '<video preload="auto" id="video_4" poster="img/bg.jpg"><source src="video4m.mp4" type="video/mp4"></video>';

    var video5 = '<video preload="auto" id="video_5" poster="img/bg.jpg"><source src="video5m.mp4" type="video/mp4"></video>';

    var video6 = '<video preload="auto" id="video_6" poster="img/bg.jpg"><source src="video6.mp4" type="video/mp4"></video>';

    $('#video_1,#video_2,#video_3,#video_4,#video_5,#video_6').remove();

    $('#video-bg').append(video1+video2+video3+video4+video5+video6);

  }else{



  }





//video__actions

  $(".action__video a.play").on('click', function(e) {

    e.preventDefault();

    $("#"+$(this).attr('data-video')).get(0).play();

  });



  $(".action__video a.pause").on('click', function(e) {

    e.preventDefault();

    $("#"+$(this).attr('data-video')).get(0).pause();

  });





  $(".action__video a.volume").on('click', function(e) {

    e.preventDefault();

    if ($(this).hasClass('muted')){

      $(this).removeClass('muted');

      $("#"+$(this).attr('data-video')).get(0).volume = 1.0;

    }else{

      $(this).addClass('muted');

      $("#"+$(this).attr('data-video')).get(0).volume = 0.0;

    }

  });



//video__actions



  $('.i_phone').mask('9(999)999-99-99');





  $(".step.step_0 a").on('click', function(e) {

    e.preventDefault();

    $(".step").hide();

    $(".step.step_1").fadeIn();

    if (!isMobile) $("#video_1").get(0).play();

  });







  $(".play__video__mobile").on('click', function(e) {

    e.preventDefault();

    if ($(this).hasClass('pla')){

      $(this).removeClass('pla');

      $("#"+$(this).attr('data-video')).get(0).pause();

    }else{

      $(this).addClass('pla');

      $("#"+$(this).attr('data-video')).get(0).play();

    }

  });





  $("a.btn-start").on('click', function(e) {

    e.preventDefault();

    $(".step").hide();

    $(".step."+$(this).attr('data-step')).fadeIn();

  });
























  $(".quest").on('click', function(e) {

    var video__number = parseInt($(this).attr('data-video'));

    var video__number__last = video__number - 1;



    if ($(this).val()=='true'){

      $(".step").hide();

      $(".step."+$(this).attr('data-step')).fadeIn();

      // $("#video_1,#video_2,#video_3,#video_4,#video_5,#video_6").hide();

      // $("#video_"+video__number).show();

      // $("#video_"+video__number__last).get(0).pause();

      if (!isMobile){

        // $("#video_"+video__number).get(0).play();

      }else{

        // $(".play__video__mobile").hide();

        // $(".play__video__mobile[data-video=video_"+video__number+"]").show();

      }

    }else{

      $('label[for='+$(this).attr('id')+']').addClass('err');

    }

  });





  $(".label-ch").on('click', function(e) {

    var dd = $(this);

    setTimeout(function () {

      dd.append('<u>Ответ неверный. Пробуй еще раз</u>');

    }, 1000);

  });







      $('input[type="radio"] + label').html(function(index, html) {

        return html.replace(/\S/g, '<i>$&</i>');

      });





  var wow = new WOW( {

      mobile:    false

    });

  wow.init();



});





function ErrorAnswer(){

  $(this).html('asd');

}





function closeModal(){

    $.fancybox.close(true);

}





function sendForm(form_id,res_div) {

    var msg = $('#'+form_id).serialize();

    var name = $("#form__name1").val();
    var phone = $("#form__phone1").val();
    var email = $("#form__email1").val();

    var message = "Какое налогообложение должно быть у фирмы? - "+arr_ans[0]+"<br>В каком регионе должна быть зарегистрирована фирма? - "+arr_ans[1]+"<br>Какой годовой оборот должен быть у фирмы? - "+arr_ans[2]+"<br>Какой вид деятельности должен быть у фирмы? - "+arr_ans[3]+"<br>Дата регистрации компании - "+arr_ans[4];

    $.ajax({

      type: 'POST',

      url: 'send.php',

      data: {name:name,phone:phone,email:email, message: message},

      success: function(data){
        console.log(data);

        $('.form form').hide();

        $('.thanks').fadeIn();

        jQuery("#"+form_id).trigger("reset");





        $('.data__step p').hide();

        $('.data__step').addClass('top__top');

      },

      error:  function(xhr, str){

        $('.form form').hide();

        $('.thanks').fadeIn();

        jQuery("#"+form_id).trigger("reset");



        $('.data__step p').hide();

        $('.data__step').addClass('top__top');

      }

    });

}

let arr_ans = new Array();

function answer (id) {
  if (id != 'txt') {
    arr_ans.push(id);
  } else {
    var txt = $('#txt_inp').val();
    arr_ans.push(txt);
  }

}


// $("#send_ajax").click(function () {
//     var name = $("#form__name1").val();
//     var phone = $("#form__phone1").val();
//     var email = $("#form__email1").val();

//     if(name.lenght > 0 && phone.lenght > 0 && email.lenght > 0) {
//         console.log('ajax');
//     }

// });


