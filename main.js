// Global variables

let time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    goal = document.getElementById('goal');

let showAmPm = true;

// Show time function

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    let amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} 
    ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBackgrounPicture() {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        document.body.style.backgroundImage = "url('Img/Morning.jpeg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('Img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        document.body.style.backgroundImage = "url('Img/nighttime.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Your Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getGoal() {
    if (localStorage.getItem('goal') === null) {
        goal.textContent = '[Enter The Goal]';
    } else {
        goal.textContent = localStorage.getItem('goal');
    }
}

function setGoal(e) {
    if (e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('goal', e.target.innerText);
            goal.blur();
        }
    } else {
        localStorage.setItem('goal', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', setGoal);


showTime();
setBackgrounPicture();
getName();
getGoal();
