


function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hourHand = document.getElementById("hour");
  const minuteHand = document.getElementById("minute");
  const secondHand = document.getElementById("second");
  const hourDeg = hours * 30 + 0.5 * minutes;
  const minuteDeg = minutes * 6 + 0.1 * seconds;
  const secondDeg = seconds * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);

var queriedHour = 0;
var queriedMinute = 0;
var queriedsecond = 0;
var queriedContinent = "";
var queriedCapital = "";
var indianTime = null;

function HandleClick2(event) {
  event.preventDefault();
  queriedContinent2 = document.querySelector(".queried_continent2").value;
  queriedCapital2 = document.querySelector(".queried_capital2").value;
}
function HandleClick3(event) {
  event.preventDefault();
  queriedContinent3 = document.querySelector(".queried_continent3").value;
 queriedCapital3 = document.querySelector(".queried_capital3").value;
}
function HandleClick4(event) {
  event.preventDefault();
  queriedContinent4 = document.querySelector(".queried_continent4").value;
  queriedCapital4 = document.querySelector(".queried_capital4").value;
}

// document.getElementById("btn2").addEventListener("click", (e)=>{
// e.preventDefault()
// var queriedContinent2 = document.querySelector(".queried_continent2").value;
// var queriedCapital2 = document.querySelector(".queried_capital2").value;

// const startClock=(var1, var2)=>{
// indianTime = new Date().toLocaleTimeString("en-US", {
//     timeZone: `${var1}/${var2}`,
//     timestyle: "full",
//     hourCycle: "h24", 
//   });

//   queriedHour = indianTime.slice(0, 2);
//   queriedMinute = indianTime.slice(3, 5);
//   querieSecond = indianTime.slice(6, 8);

//   const hours = queriedHour % 12;
//   const minutes = queriedMinute;
//   const seconds = querieSecond;

//   const hourHand = document.getElementById("hour2");
//   const minuteHand = document.getElementById("minute2");
//   const secondHand = document.getElementById("second2");

//   const hourDeg = hours * 30 + 0.5 * minutes;
//   const minuteDeg = minutes * 6 + 0.1 * seconds;
//   const secondDeg = seconds * 6;

//   hourHand.style.transform = `rotate(${hourDeg}deg)`;
//   minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
//   secondHand.style.transform = `rotate(${secondDeg}deg)`;

//   console.log(indianTime)
//   console.log(queriedContinent2, queriedCapital2)
//   console.log( queriedHour, queriedMinute,querieSecond )
// }
// setInterval(startClock(queriedContinent2, queriedCapital2), 1000)
// })


function newClock2() {
  indianTime = new Date().toLocaleTimeString("en-US", {
    timeZone: `${queriedContinent2}/${queriedCapital2}`,
    timestyle: "full",
    hourCycle: "h24",
  });

  queriedHour = indianTime.slice(0, 2);
  queriedMinute = indianTime.slice(3, 5);
  querieSecond = indianTime.slice(6, 8);

  const hours = queriedHour % 12;
  const minutes = queriedMinute;
  const seconds = querieSecond;

  const hourHand = document.getElementById("hour2");
  const minuteHand = document.getElementById("minute2");
  const secondHand = document.getElementById("second2");

  const hourDeg = hours * 30 + 0.5 * minutes;
  const minuteDeg = minutes * 6 + 0.1 * seconds;
  const secondDeg = seconds * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(newClock2, 1000);

function newClock3() {
  indianTime = new Date().toLocaleTimeString("en-US", {
    timeZone: `${queriedContinent3}/${queriedCapital3}`,
    timestyle: "full",
    hourCycle: "h24",
  });

  queriedHour = indianTime.slice(0, 2);
  queriedMinute = indianTime.slice(3, 5);
  querieSecond = indianTime.slice(6, 8);

  const hours = queriedHour % 12;
  const minutes = queriedMinute;
  const seconds = querieSecond;

  const hourHand = document.getElementById("hour3");
  const minuteHand = document.getElementById("minute3");
  const secondHand = document.getElementById("second3");
  const hourDeg = hours * 30 + 0.5 * minutes;
  const minuteDeg = minutes * 6 + 0.1 * seconds;
  const secondDeg = seconds * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(newClock3, 1000);

function newClock4() {
  indianTime = new Date().toLocaleTimeString("en-US", {
    timeZone: `${queriedContinent4}/${queriedCapital4}`,
    timestyle: "full",
    hourCycle: "h24",
  });

  queriedHour = indianTime.slice(0, 2);
  queriedMinute = indianTime.slice(3, 5);
  querieSecond = indianTime.slice(6, 8);

  const hours = queriedHour % 12;
  const minutes = queriedMinute;
  const seconds = querieSecond;

  const hourHand = document.getElementById("hour4");
  const minuteHand = document.getElementById("minute4");
  const secondHand = document.getElementById("second4");

  const hourDeg = hours * 30 + 0.5 * minutes;
  const minuteDeg = minutes * 6 + 0.1 * seconds;
  const secondDeg = seconds * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(newClock4, 1000);

function RevealClock1() {
  document.getElementById("clock1").className = "";
  document.getElementById("hideicon1").className = "icon";
  document.getElementById("addicon1").classList.add("hide");
  document.getElementById("addicon2").classList.remove("hide");
}
function DeleteClock1() {
  document.getElementById("clock1").className = "hide";
  document.getElementById("addicon1").classList.add("hide");
  document.getElementById("addicon1").classList.remove("hide");
  document.getElementById("addicon2").classList.add("hide");
}

function RevealClock2() {
  document.getElementById("clock2").className = "";
  document.getElementById("hideicon2").className = "icon";
  document.getElementById("addicon2").classList.add("hide");
  document.getElementById("addicon3").classList.remove("hide");
}
function DeleteClock2() {
  document.getElementById("clock2").className = "hide";
  document.getElementById("addicon2").classList.add("hide");
  document.getElementById("addicon2").classList.remove("hide");
  document.getElementById("addicon3").classList.add("hide");
}
function RevealClock3(event) {
  document.getElementById("clock3").className = "";
  document.getElementById("hideicon3").className = "icon";
  document.getElementById("addicon3").classList.add("hide");
}
function DeleteClock3(event) {
  document.getElementById("clock3").className = "hide";
  document.getElementById("addicon3").classList.add("hide");
  document.getElementById("addicon3").classList.remove("hide");
}
