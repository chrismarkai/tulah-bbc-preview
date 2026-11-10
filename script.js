const play = document.getElementById('play-film');
play.addEventListener('click', () => {
 const frame = document.createElement('iframe');
 frame.title = 'tulåh — BBC StoryWorks film';
 frame.src = 'https://www.youtube-nocookie.com/embed/u6vULxOXA64?autoplay=1&rel=0';
 frame.allow = 'autoplay; encrypted-media; picture-in-picture';
 frame.allowFullscreen = true;
 play.parentElement.replaceChildren(frame);
 frame.focus();
});
const dialog = document.getElementById('wa-dialog');
document.getElementById('whatsapp').addEventListener('click', () => dialog.showModal());
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if(event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); }});
