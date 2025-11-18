import * as THREE from 'three';

export function createInteractiveFrames(scene) {
  const quadroGeo = new THREE.PlaneGeometry(2, 1.3);

  const loader = new THREE.TextureLoader();

  const quadrosData = [
    {
      position: new THREE.Vector3(-0.4, 1.75, -4.512305656020708), 
      texture: '/assets/textures/texto1/capaTexto1.jpg',
      title: 'A cidade que silencia os sentidos',
      description: '"Nossa casa veio deixando de ser um lar, no sentido de construir uma extensao de nossas emocoes e sentimentos. Veio se transformando numa maquina de morar."',
      video: '/videos/texto1/videoTexto1.mp4',
      type: 'video'
    },
    {
      position: new THREE.Vector3(4.57459428642441, 1.75, -0.355184376370867), 
      texture: '/assets/textures/commingSoon.jpg',
      title: 'Sombras e Luzes',
      description: 'Exploração de contrastes sutis e profundidade visual.',
      video: '/assets/videos/quadro2.mp4'
    },
    {
      position: new THREE.Vector3(0.31529714700594283, 1.75, 4.603430151315036),
      texture: '/assets/textures/texto3/Capa.jpg',
      title: 'Arte resistente',
      description: '"A arte resiste. Mesmo quando ninguem olha."',
      video: '/videos/texto3/videoCapaTexto3.mp4',
      type: 'video'
    },
    {
      position: new THREE.Vector3(-4.546923337111153, 1.75, 0.40270780044006416),
      texture: '/assets/textures/texto4/Capa.jpg',
      title: 'Povo elemento vivo',
      description: '"O povo e o elemento vivo, fecundo e fecundante da historia." (p.307).',
      video: '/videos/texto4/videoCapa.mp4',
      type: 'video'
    },
    {
      position: new THREE.Vector3(6.60764824655601, 1.75, -4.6217967968482975), 
      texture: '/assets/textures/commingSoon.jpg',
      title: 'Mulher Moderna',
      description: 'Representação da força e elegância da mulher contemporânea.',
      video: '/assets/videos/quadro5.mp4'
    },
    {
      position: new THREE.Vector3(8.04533573800242, 1.75, -0.8028411390293951), 
      texture: '/assets/textures/commingSoon.jpg',
      title: 'Cidade Abstrata',
      description: 'Uma interpretação artística da vida urbana moderna.',
      video: '/assets/videos/quadro6.mp4'
    },
    {
      position: new THREE.Vector3(7.2966278118290015, 1.75, 3.368357099744392),
      texture: '/assets/textures/commingSoon.jpg',
      title: 'Vida Moderna',
      description: 'Captura da essência da vida contemporânea em um mundo digital.',
      video: '/assets/videos/quadro7.mp4'
    },
    {
      position: new THREE.Vector3(4.722704299600744, 1.75, 6.518731652355776),
      texture: '/assets/textures/texto3/primeiroQuadro.jpg',
      title: 'Divorcio artista e massas',
      description: '"Na sociedade capitalista, o artista se divorcia necessariamente das massas, ja que nao pode descer ao nivel delas, nem estas querem ou podem elevar-se ao nivel da arte."',
      image: '/assets/textures/texto3/primeiroQuadro.jpg',
      type: 'image'
    },
    {
      position: new THREE.Vector3(0.8816037475317718, 1.75, 8.0558923284805),
      texture: '/assets/textures/texto3/segundoQuadro.jpg',
      title: 'Arte e oposicao',
      description: '"Entre saloes dourados e telas luminosas, a arte parece viver dois destinos opostos: ou e guardadada como privilegio de poucos, ou e transformada em mercadoria para consumo rapido."',
      image: '/assets/textures/texto3/segundoQuadro.jpg',
      type: 'image'
    },
    {
      position: new THREE.Vector3(-3.3770072411328225, 1.75, 7.348492979509604),
      texture: '/assets/textures/texto3/capaUltimoVideoTexto3.jpg',
      title: 'Natureza Tecnológica',
      description: 'Fusão entre elementos naturais e tecnologia moderna.',
      video: '/videos/texto3/videoUltimoQuadro.mp4',
      type: 'video'
    },
    {
      position: new THREE.Vector3(-6.550151429102025, 1.75, 4.555570125813835),
      texture: '/assets/textures/texto4/quadro1Texto4.jpg',
      title: 'Popular representa a substancia de um povo',
      description: '"Popular nao e a arte regionalista ou de costumes, mas aquela que expressa a substancia de um povo." (p.302/303).',
      video: '/videos/texto4/videoQuadro1.mp4',
      type: 'video'
    },
    {
      position: new THREE.Vector3(-8.061607374468098, 1.75, 0.8310796300857596),
      texture: '/assets/textures/texto4/quadroVideo2Texto4.png',
      title: 'Perfomance "corpo-bicho-terra"',
      description: '"Criada e escrita pelo artista indigena Ybypotyra Juerena Ante Kren, a perfomance corpo-bicho-terra e um ensaio autoetnografico encarnado, uma poetica que inscreve a presenca Guerem no territorio Baixo Sul da Bahia."',
      video: '/videos/texto4/videoQuadro2.mp4',
      type: 'video'
    },
    {
      position: new THREE.Vector3(-7.400919797579693, 1.75, -3.2485653797938095),
      texture: '/assets/textures/commingSoon.jpg',
      title: 'Paisagem Urbana Tecnológica',
      description: 'Uma visão futurista das cidades através da tecnologia.',
      video: '/videos/texto4/videoQuadro3.mp4',
      type: 'video'
    },
    {
      position: new THREE.Vector3(-4.647948626949344, 1.75, -6.605875379156501),
      texture: '/assets/textures/texto1/murosRuidos.jpg',
      title: 'Entre Muros e Ruídos',
      description: '"Entre muros e ruidos, o lar perdeu o aconchego. A casa virou maquina, a cidade, concreto. O humano que antes habitava o espaco, agora apenas o ocupa."',
      image: '/assets/textures/texto1/murosRuidos.jpg',
      type: 'image'
    },
    {
      position: new THREE.Vector3(-0.8098337264859249, 1.75, -8.014934976934324),
      texture: '/assets/textures/texto1/oCorpoQueEsqueceu.jpg',
      title: 'O corpo que esqueceu de sentir',
      description: 'Talvez seja preciso reaprender a ver, a cheirar, a tocar. Reeducuar os sentidos para reumanizar o mundo',
      image: '/assets/textures/texto1/oCorpoQueEsqueceu.jpg',
      type: 'image'
    },
    {
      position: new THREE.Vector3(3.1962105874934075, 1.75, -7.392358818979284),
      texture: '/assets/textures/texto1/conclusaoTexto1.JPG',
      title: 'Esperança!',
      description: 'Se a modernidade anestesiou o corpo e transformou a vida em função, ainda resta em nos um sopro de resistencia. O mesmo corpo que mecaniza gestos tambem pode despertar.',
      image: '/assets/textures/texto1/conclusaoTexto1.JPG',
      type: 'image'
    }
  ];

  const frames = [];

  for (const data of quadrosData) {
    const texture = loader.load(data.texture);
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const mesh = new THREE.Mesh(quadroGeo, material);
    mesh.position.copy(data.position);
    mesh.userData = data;
    mesh.lookAt(0,1.5,0);

    scene.add(mesh);
    frames.push(mesh);
  }

  return frames;
}
