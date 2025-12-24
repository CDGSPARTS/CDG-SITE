(function(){
  const links = Array.from(document.querySelectorAll('.nav a'));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  function onScroll(){
    const y = window.scrollY + 110;
    let current = null;
    for(const s of sections){
      if(s.offsetTop <= y) current = s;
    }
    links.forEach(a => a.classList.remove('active'));
    if(current){
      const a = links.find(l => l.getAttribute('href') === '#'+current.id);
      if(a) a.classList.add('active');
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
