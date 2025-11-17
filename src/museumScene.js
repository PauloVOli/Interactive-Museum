import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export async function loadMuseumScene(renderer, camera, controls, scene) {
  const loader = new GLTFLoader();

  try {
    const gltf = await loader.loadAsync('/assets/models/art_gallery/scene.gltf');
    const museum = gltf.scene;
    scene.add(museum);

    // Ajusta posição da câmera
    camera.position.set(0, 1.5, 2.4);

  } catch (err) {
    console.error('Erro ao carregar modelo:', err);
  }
}
