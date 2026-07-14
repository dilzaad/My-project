const quotes = [
  "Success starts with self-belief.",
  "Dream big, work hard, stay humble.",
  "Every day is a new opportunity.",
  "Small progress is still progress.",
  "Your only limit is your mindset.",
  "Stay focused and never give up.",
  "Hard work beats talent when talent doesn't work hard.",
  "Discipline is the key to success.",
  "Believe in yourself and keep moving forward.",
  "The best time to start is now.",
  "Failure is a lesson, not the end.",
  "Stay positive and trust the process.",
  "Consistency creates success.",
  "Make today count.",
  "Great things take time.",
  "Your future depends on what you do today.",
  "Never stop learning.",
  "Confidence comes from preparation.",
  "Turn your dreams into reality.",
  "Keep pushing your limits."
];
const button=document.querySelector('button');
const quote=document.querySelector('h1')
button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*20)
    quote.textContent=quotes[index];
})