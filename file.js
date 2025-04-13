// ⏰ Live Clock
setInterval(() => {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
  }, 1000);
  
  // 🧭 Show selected tab
  function showTab(tabId) {
    document.querySelectorAll(".feature").forEach(div => {
      div.style.display = div.id === tabId ? "block" : "none";
    });
  }
  
  // 🔔 Alarm
  let alarmTimeout;
  function setAlarm() {
    const input = document.getElementById("alarmTime").value;
    if (!input) return;
  
    const [hours, minutes] = input.split(":");
    const now = new Date();
    const alarmTime = new Date(now);
    alarmTime.setHours(hours, minutes, 0, 0);
  
    if (alarmTime <= now) alarmTime.setDate(now.getDate() + 1);
  
    const timeDiff = alarmTime - now;
  
    clearTimeout(alarmTimeout);
    alarmTimeout = setTimeout(() => alert("🔔 Alarm ringing!"), timeDiff);
  
    document.getElementById("alarmStatus").textContent = `Alarm set for ${input}`;
  }
  
  // ⏳ Timer
  let timerInterval;
  function startTimer() {
    let minutes = parseInt(document.getElementById("timerMinutes").value);
    if (!minutes) return;
  
    let totalSeconds = minutes * 60;
    const display = document.getElementById("timerDisplay");
  
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      let m = Math.floor(totalSeconds / 60);
      let s = totalSeconds % 60;
      display.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      if (--totalSeconds < 0) {
        clearInterval(timerInterval);
        alert("⏰ Time's up!");
      }
    }, 1000);
  }
  
  // ⏱️ Stopwatch
  let stopwatchTime = 0, stopwatchInterval;
  
  function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      const h = Math.floor(stopwatchTime / 3600);
      const m = Math.floor((stopwatchTime % 3600) / 60);
      const s = stopwatchTime % 60;
      document.getElementById("stopwatchDisplay").textContent =
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }, 1000);
  }
  
  function stopStopwatch() {
    clearInterval(stopwatchInterval);
  }
  
  function resetStopwatch() {
    stopwatchTime = 0;
    document.getElementById("stopwatchDisplay").textContent = "00:00:00";
  }
  