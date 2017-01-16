$(document).ready(function(){
  $('.nav li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
      var $target = $(this.hash);
    $target = $target.length && $target
    || $('[name=' + this.hash.slice(1) +']');
    if ($target.length) {
      var targetOffset = $target.offset().top;
      $('html,body')
      .animate({scrollTop: targetOffset}, 0);
      return false;
    }
  }
});
});

//==============  
(function(){
  var button = document.getElementById('cn-button'),
  wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
    var open = false;
    button.addEventListener('click', handler, false);

    function handler(){
      if(!open){
        this.innerHTML = "Cerrar";
        classie.add(wrapper, 'opened-nav');
      }
      else{
        this.innerHTML = "Ver";
        classie.remove(wrapper, 'opened-nav');
      }
      open = !open;
    }
    function closeWrapper(){
      classie.remove(wrapper, 'opened-nav');
    }
  })();

//==============  

$('.arriba').click(function(){
  $('body,html').animate({
    scrollTop: '0px'
  }, 1000)
})

$(window).scroll(function(){

  if ($(this).scrollTop() > 0){
    $('.arriba').slideDown(100);
  }else {
    $('.arriba').slideUp(100);
  }
});

//==============


$(document).ready(function(){
    $("#uno").click(function(){
        $(".habilidades").hide();
    });
    $("#dos").click(function(){
        $(".habilidades").show();
    });
});