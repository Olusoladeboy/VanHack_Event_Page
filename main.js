console.log('Hey, I am here');
let applyNowSubmit = document.getElementById('applyNowSubmit');
let applyNowBody = document.getElementById('applyNowBody');

let name = document.getElementById('name');
let email = document.getElementById('email');

const emailValue = email.addEventListener('keypress', (e) => {
    if(email.value.length >= 10){
        $('#applyNowSubmit').removeAttr('disabled');
    }
})

// $("input[type='text'], textarea").on("keyup", function(){
//     console.log($(this).val())
//     if($(this).val().length > 1 && $("#email").val().length > 1){
//         $("input[type='submit']").removeAttr("disabled");
//     } else {
//         $("input[type='submit']").attr("disabled", "disabled");
//     }
// });




let successMsg = `<div class="alert alert-success" role="alert">
  Application Successful!!!
</div>
`

applyNowSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    applyNowBody.innerHTML = successMsg;
    setTimeout(() => {
        location.reload();
    }, 2000)


})
