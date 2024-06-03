function ChangeToRed(){
    let box=document.getElementById("box");
    box.style.backgroundColor="Red";
}

function ChangeToBlue(){
    let box=document.getElementById("box");
    box.style.backgroundColor="Blue";
}

function DarkMode(){
    let body=document.body;
    let box=document.getElementById("box");

    body.style.backgroundColor = "Black";
    box.style.backgroundColor = "White";
}

function LightMode(){
    let body=document.body;
    let box=document.getElementById("box");

    body.style.backgroundColor = "White";
    box.style.backgroundColor = "Black";
}

function transition(){
    let box=document.getElementById("box");
    box.style.transition="10s";
}