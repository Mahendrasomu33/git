document.getElementById('btn1').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    if (formContainer.classList.contains('hide')) {
        formContainer.classList.remove('hide');
    } else {
        formContainer.classList.add('hide');
    }
});
