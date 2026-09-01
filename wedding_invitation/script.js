// ڕۆژی ئاهەنگ لێرە بگۆڕە
const eventDate = new Date('2026-09-10T16:00:00+03:00').getTime();

function updateCountdown(){
  const diff = eventDate - Date.now();
  if(diff <= 0){document.getElementById('countdown').innerHTML='<div style="grid-column:1/-1"><strong>💍</strong><span>ئاهەنگ دەستی پێکرد!</span></div>';return;}
  const d=Math.floor(diff/86400000), h=Math.floor(diff%86400000/3600000), m=Math.floor(diff%3600000/60000), s=Math.floor(diff%60000/1000);
  document.getElementById('days').textContent=String(d).padStart(2,'0');
  document.getElementById('hours').textContent=String(h).padStart(2,'0');
  document.getElementById('minutes').textContent=String(m).padStart(2,'0');
  document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown(); setInterval(updateCountdown,1000);

document.getElementById('shareBtn').addEventListener('click',async()=>{
  const data={title:'بانگهێشتنامەی ئاهەنگ',text:'ب خۆشی و شادمانیێ ڤە بانگهێشتنامەی ئاهەنگی مە ببینە.',url:location.href};
  if(navigator.share){try{await navigator.share(data)}catch(e){}}
  else{await navigator.clipboard.writeText(location.href);alert('لینک کۆپی کرا.');}
});

document.getElementById('calendarBtn').addEventListener('click',()=>{
  const start='20260910T130000Z', end='20260910T170000Z';
  const url='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent('ئاهەنگی شیرینی خواردن 💍')+'&dates='+start+'/'+end+'&details='+encodeURIComponent('بانگهێشتنامەی ئاهەنگ')+'&location='+encodeURIComponent('هۆڵی شادان، سلێمانی - گۆران');
  window.open(url,'_blank','noopener');
});
