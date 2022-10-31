/* Add your JavaScript to this file */
window.onload = function () {
    
    const subBtn = document.querySelector('.btn');
    var mailformat = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
    var message = document.querySelector('.message');
    var email = document.getElementById('email').value;
    var form = document.querySelectorAll('.form-group');
    subBtn.addEventListener('submit', validation);
    
    function validation() {
        if (email.test(mailformat)) 
        {
            message.innerHTML = 'Thank you! Your email address ' + email + ' has been added to our mailing list!';
            //message.style.visibility = "visible";
            message.style.color = '#00ff00';
        } else {
            message.innerHTML = 'Please enter a valid email address.';
            message.style.color = '##ff0000';
        }
        console.log("button clicked!");
      }

}
