document.getElementById('btn1').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    if (formContainer.classList.contains('hide')) {
        formContainer.classList.remove('hide');
    } else {
        formContainer.classList.add('hide');
    }
});

const btn21 = document.getElementById("btn2");

document.getElementById("btn2").addEventListener('click',function(){
    const one11 = document.getElementById("name1");
    const inp11 = document.getElementById("inp1");
    const nameone1 =document.getElementById("nameone");

    if(one11 ==inp11){
        nameone1.classList.remove('nameone')
    }
    else{
        nameone1.classList.add('nameone')
    }


})