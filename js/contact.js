$(document).ready(function () {
    
    var $form = $(".nl-form");
    var $mail = $(".mail-text");
    var $social = $(".contact-social");

    var contactTl = new TimelineLite();
    contactTl.fromTo($form, 1, {
                  x: -70,
                  opacity: 0
                }, {
                  x : 0,
                  opacity: 1,
                  ease: Sine.easeOut
                })
              .fromTo($mail, 1, {
                  x: -70,
                  opacity: 0
                }, {
                  x : 0,
                  opacity: 1,
                  ease: Sine.easeOut
                })
              .fromTo($social, 1, {
                  x: -70,
                  opacity: 0
                }, {
                  x : 0,
                  opacity: 1,
                  ease: Sine.easeOut
              });

    var $inputs = $('.expanding');

    
    function resizeForText(text) {
        var $this = $(this);
        if (!text.trim()) {
            text = $this.attr('placeholder').trim();
        }
        var $span = $this.parent().find('span');
        $span.text(text);
        var $inputSize = $span.width();
        $this.css("width", $inputSize);
    }

    $inputs.find('input').keypress(function (e) {
        if (e.which && e.charCode) {
            var c = String.fromCharCode(e.keyCode | e.charCode);
            var $this = $(this);
            resizeForText.call($this, $this.val() + c);
        }
    });

    // Backspace event only fires for keyup
    $inputs.find('input').keyup(function (e) { 
        if (e.keyCode === 8 || e.keyCode === 46) {
            resizeForText.call($(this), $(this).val());
        }
    });

    $inputs.find('input').each(function () {
        var $this = $(this);
        resizeForText.call($this, $this.val())
    });

  $("#compute_option").html($('#to_be_resized option:selected').text()); 
  $("#to_be_resized").width($("#compute_select").width()); 
  
  $('#to_be_resized').change(function(){
    $("#compute_option").html($('#to_be_resized option:selected').text()); 
    $(this).width($("#compute_select").width());  
  });

  $("#compute_option2").html($('#to_be_resized2 option:selected').text()); 
  $("#to_be_resized2").width($("#compute_select2").width()); 
  
  $('#to_be_resized2').change(function(){
    $("#compute_option2").html($('#to_be_resized2 option:selected').text()); 
    $(this).width($("#compute_select2").width());  
  });

  


});