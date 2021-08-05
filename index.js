const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

 let timerId = null;
 let isActive = false;

 refs.btnStart.addEventListener("click", start);
 refs.btnStop.addEventListener("click", stop);

 function start() {
     stop();
      refs.btnStart.removeEventListener("click", start);
   if (isActive) {
     return;
   }
   isActive = true;
   timerId = setInterval(() => {
     let i = randomIntegerFromInterval(0, colors.length - 1);
     refs.body.style.backgroundColor = colors[i];
   }, 1000);
 }

 function stop() {
      refs.btnStart.addEventListener("click", start);
   clearInterval(timerId);
   isActive = false;
 }