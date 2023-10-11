const numberHours= document.querySelector('.numbers-hrs');
const barSeconds= document.querySelector('.bar-seconds');
const numberElement =[];
const barsElement =[];

for(let i=1; i<=12; i++){
    numberElement.push( 
        `<span style="--index:${i};"><p>${i}</p></span>`
        );
}



numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));
for(let i=1; i<=60; i++){
    barsElement.push( 
        `<span style="--index:${i};"><p></p></span>`
        );
}
barSeconds.insertAdjacentHTML("afterbegin", barsElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime(){
    let date = new Date();
    let CurrentHours = date.getHours();
    let CurrentMinutes = date.getMinutes();
    let CurrentSeconds = date.getSeconds();
    
    handHours.style.transform =`rotate(${CurrentHours*30 + CurrentMinutes/ 2}deg)`;
    handMinutes.style.transform = `rotate(${CurrentMinutes *6}deg)`;
    handSeconds.style.transform = `rotate(${CurrentSeconds *6}deg)`;
}
getCurrentTime();
setInterval(getCurrentTime,1000);