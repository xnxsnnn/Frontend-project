var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');

button1.addEventListener('click', () => {
    if(button1.classList.contains('liked') )
    {
        button1.classList.remove('liked');
    }
    else {
        button1.classList.add('liked');
    }
});

button2.addEventListener('click', () => {
    if(button2.classList.contains('liked') )
    {
        button2.classList.remove('liked');
    }
    else {
        button2.classList.add('liked');
    }
});

button3.addEventListener('click', () => {
    if(button3.classList.contains('liked') )
    {
        button3.classList.remove('liked');
    }
    else {
        button3.classList.add('liked');
    }
});

button4.addEventListener('click', () => {
    if(button4.classList.contains('liked') )
    {
        button4.classList.remove('liked');
    }
    else {
        button4.classList.add('liked');
    }
});