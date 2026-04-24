/* =========================
   SHARED EXERCISE TIMER
========================= */

const TIMER_DURATION_MS = 5000;

const exerciseTimer = {
  interval: null,
  remaining: TIMER_DURATION_MS,
  answeredWithinTime: true,
  stats: {
    correctWithinTime: 0,
    correctOutsideTime: 0
  }
};

function exerciseTimerStart(){
  clearInterval(exerciseTimer.interval);

  const bar = document.getElementById("exerciseTimerBar");
  if(!bar) return;

  exerciseTimer.remaining = TIMER_DURATION_MS;
  exerciseTimer.answeredWithinTime = true;
  bar.style.width = "100%";

  exerciseTimer.interval = setInterval(()=>{
    exerciseTimer.remaining -= 50;

    const percent =
      (exerciseTimer.remaining / TIMER_DURATION_MS) * 100;

    bar.style.width = percent + "%";

    if(exerciseTimer.remaining <= 0){
      exerciseTimer.answeredWithinTime = false;
      clearInterval(exerciseTimer.interval);
      bar.style.width = "0%";
    }
  },50);
}

function exerciseTimerStop(){
  clearInterval(exerciseTimer.interval);
}

