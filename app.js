let bar = document.getElementById("bar");
let secondhand = document.getElementById("secondhand");
let minutehand = document.getElementById("minutehand");
let hourhand = document.getElementById("hourhand");
var barelement = [];
let i = 1;
for (i; i <= 60; i++) {
  barelement.push(`<span style="--n:${i} "><p></p></span>`);
}
bar.insertAdjacentHTML("afterbegin", barelement.join(""));

function displayTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hourhand.style.transform = `rotate(${hRotation}deg)`;
  minutehand.style.transform = `rotate(${mRotation}deg)`;
  secondhand.style.transform = `rotate(${sRotation}deg)`;
}
displayTime();
setInterval(displayTime, 1000);
