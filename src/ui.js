export function setupInfoPanel() {
  const panel = document.getElementById('infoPanel');
  const title = document.getElementById('infoTitle');
  const desc = document.getElementById('infoDescription');
  const video = document.getElementById('infoVideo');
  const img = document.getElementById('infoImage');
  const closeBtn = document.getElementById('closePanel');

  // Função para abrir o painel
  function open(data) {
    title.innerText = data.title;
    desc.innerText = data.description;

    // Decide o tipo de mídia
    if (data.type === 'video' && data.video) {
      video.src = data.video;
      video.style.display = 'block';
      video.muted = false; // necessário para autoplay
      video.play().catch(() => {}); // evita erro de autoplay
      img.style.display = 'none';
    } else {
      if (data.texture) {
        img.src = data.texture;
        img.style.display = 'block';
      }
      video.pause();
      video.style.display = 'none';
    }

    panel.classList.add('visible');
  }

  // Função para fechar o painel
  function close() {
    panel.classList.remove('visible');
    video.pause();
  }

  closeBtn.addEventListener('click', close);

  return { open };
}

