var end = new Date('04/29/2024 00:00 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function checkNum(timenum, lol)
{
    result = lol
    if (timenum == 1) {
       result = lol.substring(0, string.length-1)
    }
    return result
}

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "The birthday is over.\n\
        See you next year!";

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = '';
    if (hours > 0) {
        document.getElementById('countdown').innerHTML += hours + checkNum(hours, 'hours') + " ";
    } 
    if (minutes > 0) {
        document.getElementById('countdown').innerHTML += minutes +(minutes, 'minutes') + " ";
    } 
    if (seconds > 0) {
        document.getElementById('countdown').innerHTML += seconds + checkNum(seconds, 'seconds') + " ";
    }
}

timer = setInterval(showRemaining, 1000);