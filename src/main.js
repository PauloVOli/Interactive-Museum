import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { loadMuseumScene } from './museumScene.js';
import { createInteractiveFrames } from './interactiveFrames.js';
import { setupInfoPanel } from './ui.js';

const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

// === Luz ambiente ===
const light = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(light);

// === Câmera ===
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 1.6, 2.4); // altura média dos olhos

// === Controles de primeira pessoa ===
const controls = new PointerLockControls(camera, document.body);

document.body.addEventListener('click', () => {
  controls.lock(); // entra no modo "cursor travado"
});

// === Variáveis de movimento ===
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const moveSpeed = 2.5; // metros por segundo

const move = { forward: false, backward: false, left: false, right: false };

document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyW': move.forward = true; break;
    case 'KeyS': move.backward = true; break;
    case 'KeyA': move.left = true; break;
    case 'KeyD': move.right = true; break;
  }
});

document.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'KeyW': move.forward = false; break;
    case 'KeyS': move.backward = false; break;
    case 'KeyA': move.left = false; break;
    case 'KeyD': move.right = false; break;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyP') {
    console.log('📍 Camera position:', camera.position);
  }
});

// === Cena e quadros ===
await loadMuseumScene(renderer, camera, controls, scene);
const frames = createInteractiveFrames(scene);
const infoPanel = setupInfoPanel();

// === Raycaster (para interação com quadros) ===
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Interação por clique (quando o painel não está aberto)
window.addEventListener('click', (event) => {
  if (!controls.isLocked) return;

  raycaster.setFromCamera({ x: 0, y: 0 }, camera); // centro da visão
  const intersects = raycaster.intersectObjects(frames);

  if (intersects.length > 0) {
    const frame = intersects[0].object;
    const dist = camera.position.distanceTo(frame.position);
    if (dist < 2.0) infoPanel.open(frame.userData);
  }
});

// === Animação ===
let prevTime = performance.now();

function animate() {
  requestAnimationFrame(animate);

  const time = performance.now();
  const delta = (time - prevTime) / 1000; // segundos desde o último frame

  if (controls.isLocked) {
    direction.set(0, 0, 0);
    if (move.forward) direction.z += 1;
    if (move.backward) direction.z -= 1;
    if (move.left) direction.x -= 1;
    if (move.right) direction.x += 1;

    direction.normalize();

    // Atualiza velocidade e posição
    const moveDelta = moveSpeed * delta;
    controls.moveRight(direction.x * moveDelta);
    controls.moveForward(direction.z * moveDelta);
  }

  prevTime = time;

  renderer.render(scene, camera);
}
animate();

// === Resize ===
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});



