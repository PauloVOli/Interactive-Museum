export function setupInfoPanel() {
  const panel = document.getElementById('infoPanel');
  const title = document.getElementById('infoTitle');
  const desc = document.getElementById('infoDescription');
  const video = document.getElementById('infoVideo');
  const closeBtn = document.getElementById('closePanel');

  function open(data) {
    title.innerText = data.title;
    desc.innerText = data.description;
    video.src = data.video;
    panel.classList.add('visible');
  }

  function close() {
    panel.classList.remove('visible');
    video.pause();
  }

  closeBtn.addEventListener('click', close);

  return { open };
}
