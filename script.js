  // Փոխեք միջոցառման ամսաթիվը ձեր ուզած ամսաթվով։
  const eventDate = new Date("2026-11-24T14:00:00");
  const countdown = document.getElementById("countdown");
  const pad = n => String(n).padStart(2, "0");

  function updateCountdown() {
    const diff = eventDate.getTime() - Date.now();
    if (diff <= 0) {
      countdown.innerHTML = "<p>Այս գեղեցիկ օրը եկել է։</p>";
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    countdown.innerHTML = `
      <div class="count"><strong>${days}</strong><small>օր</small></div>
      <div class="count"><strong>${pad(hours)}</strong><small>ժամ</small></div>
      <div class="count"><strong>${pad(minutes)}</strong><small>րոպե</small></div>
      <div class="count"><strong>${pad(seconds)}</strong><small>վայրկյան</small></div>`;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  document.getElementById("rsvpForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const answer = document.getElementById("attendance").value;
    document.getElementById("notice").textContent =
      `Շնորհակալություն, ${name}! Ձեր պատասխանը՝ «${answer}»։ Ձևը ցուցադրական է, տվյալները դեռ չեն ուղարկվել։`;
  });
  

  function playMusic() {
    const audio = document.getElementById("myAudio")

    if(audio.pause){
      audio.play();
    }
    else{
      audio.pause();
    }

  }