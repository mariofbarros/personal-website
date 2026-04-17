function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  const clockElement = document.getElementById('clock-time');
  if (clockElement) {
    clockElement.textContent = `${hours}:${minutes}`;
  }
}

// Inicia o relógio
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 1000);
});
