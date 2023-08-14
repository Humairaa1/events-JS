console.log('Hlw everyone , today we learn about Events')

// for option 2
function makeBlue(){
    document.body.style.backgroundColor='red';
}

// for option 3
const orangeButton = document.getElementById('makeOrange');
orangeButton.onclick = orange;

function orange(){
    document.body.style.backgroundColor='orange';
}

// for option 3 another which is basically not use
const yellowButton = document.getElementById('makeYellow');
yellowButton.onclick = function yellow(){
    document.body.style.backgroundColor='yellow';
}

// for option 4
const oliveButton = document.getElementById('makeOlive');
oliveButton.addEventListener('click',olive);

function olive(){
    document.body.style.backgroundColor='olive';
}

// for option 4 another 
const tomatoButton = document.getElementById('makeTomato');
tomatoButton.addEventListener('click',function(){
    document.body.style.backgroundColor = 'tomato';
})

// for option 4 another and important 
document.getElementById('makeSkyBlue').addEventListener('click',function(){
    document.body.style.backgroundColor = 'skyBlue';
})