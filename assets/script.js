document.addEventListener('DOMContentLoaded', function(){
  const cards = document.querySelectorAll('.card');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.style.opacity=1; en.target.style.transform='none'; }});
  }, {threshold:0.15});
  cards.forEach(c=>io.observe(c));
  document.querySelectorAll('[data-href]').forEach(b=>b.addEventListener('click', function(){ const url=this.getAttribute('data-href'); if(url) window.open(url,'_blank','noopener'); }));
});