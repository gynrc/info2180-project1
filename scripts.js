/* Add your JavaScript to this file */
window.onload = function () {
    
    let message = document.querySelector('.message');
    let email = document.getElementById('email');
    
    addEventListener('submit', (validation) => {
        validation.preventDefault();
        if (!email.value == '') 
        {
            message.innerHTML = 'Thank you! Your email address ' + email.value + ' has been added to our mailing list!';
            message.style.color = '#377b93';
        } else {
            message.innerHTML = 'Please enter a valid email address.';
            message.style.color = '#e0493b';
        }
    });
}
