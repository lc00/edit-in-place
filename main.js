$(document).on('ready', function() {
  var input =   "<div class='container-input'>" +
                    "<textarea type=text class='inputBox'></textarea></input>" + 
                    "<div class='container-button'>" + 
                    "<button class='button save'>save</button>" + 
                    "<button class='button cancel'>x</button>" +
                    "</div>" +
                    "</div>"

	$('p').on('click', function(){
    
    var offset = $(this).offset();
    $(this).hide();

    $('.container-input').css({
       top: offset.top + "px",
     left: offset.left + "px"
    });

      

    $(this).closest('.container-second').append(input);
    $('.inputBox').select();
    $('.inputBox').val($(this).text());

    // $(this).setSelectionRange(0,0);
	})


 $(document).on('click', '.button', function(){
    $('p').text($('.inputBox').val());
    $('p').show();
    $('.container-input').remove();

 })




});






 // <input type="text" class="text-box"></input>
 //    <div class="container-second">
 //      <button class="save text">save</button>
 //      <button class="cancel text">x</button>
 //    </div>

    // $('p').on('mouseenter', function(){
    //  $(this).css('background-color', 'orange')
    //  $(this).css('cursor','pointer');
    // });

    // $('p').on('mouseleave', function(){
    //  $(this).css('background-color', 'white')
      
    // });