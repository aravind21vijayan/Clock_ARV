"use strict"

setInterval(short_time,1000);

function short_time(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let curr_time = hour + ':' + min + ':' +  sec ;
    document.getElementById('time').innerHTML = curr_time;

}