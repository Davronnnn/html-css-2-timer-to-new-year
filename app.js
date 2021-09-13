const daysH=document.getElementById('days');
const hoursH=document.getElementById('hours');
const minutesH=document.getElementById('minutes');
const secundsH=document.getElementById('secunds');

const newYear='1 Jan 2022';

function timer(){
    const currentDate=new Date();
    const newerYear=new Date(newYear);
   
    const totalSeconds=(newerYear-currentDate)/1000;
    
    const days=Math.floor(totalSeconds/86400);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60

    daysH.innerHtml=days;
    hoursH.innerHtml=formatter(hours);
    minutesH.innerHtml=formatter(minutes);
    secundsH.innerHtml=formatter(secunds);
    console.log(days,hours,minutes,seconds)
    console.log(daysH.innerHTML=days)
    console.log(hoursH.innerHTML=hours)
    console.log(minutesH.innerHTML=minutes)
    console.log(secundsH.innerHTML=seconds)
    
}

function formatter(x) {
    return x<10? `0${x}`: x;
}

timer();
setInterval(timer,1000);
