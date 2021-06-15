
// (function ($) {
//     "use strict";

//     /*==================================================================
//     [ Focus Contact2 ]*/
//     $('.input100').each(function(){
//         $(this).on('blur', function(){
//             if($(this).val().trim() != "") {
//                 $(this).addClass('has-val');
//             }
//             else {
//                 $(this).removeClass('has-val');
//             }
//         })    
//     })

//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });


//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });

//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }
    

// })(jQuery);



bar = document.querySelector('.bars')
time = document.querySelector('.times')
bars = document.querySelector('.fa-bars')
times = document.querySelector('.fa-times')
nav = document.querySelector('nav .navlinks')


bars.addEventListener("click", function() {
    nav.style.display = 'block';
    bar.style.display = 'none';
    time.style.display = 'block'
});


times.addEventListener("click", function() {
    nav.style.display = 'none';
    bar.style.display = 'block';
    time.style.display = 'none'
});