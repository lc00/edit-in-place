$(document).on('ready', function() {
    var input =   "<textarea type=text class='inputBox'></textarea></input>" +            
                    "<div class='container-button'>" + 
                    "<button class='button save'>save</button>" + 
                    "<button class='button cancel'>x</button>" +                    
                    "</div>" 
                   

	$('p').on('click', function(){
    
         $(this).hide();
         var height = $(this).height();
         var width = $(this).width();

        
        $(this).closest('.container').append(input);
        $('.inputBox').css({
            width: width * 0.8,
            height: height,
            margin: 0,
            padding: 0,
            'font-weight': "bold"
        });
        $('.inputBox').select();
        $('.inputBox').val($(this).text());

    // $(this).setSelectionRange(0,0);
	});


   $(document).on('click', '.button', function(){
      $('p').text($('.inputBox').val());
      $('.inputBox').remove();
      $('.container-button').remove();
      $('p').show();
      
    });




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