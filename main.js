import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { CSS2DRenderer } from 'three/examples/jsm/Addons.js';

//creating the scenes
const scene = new THREE.Scene();
const belowscene = new THREE.Scene();
//creating the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//first renderer set up
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xFFFFFF);
document.getElementById("3Dtarget").appendChild(renderer.domElement);
//second renderer set up
const cubeRenderer = new THREE.WebGLRenderer();
cubeRenderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(cubeRenderer.domElement);

//geometry
const geometry = new THREE.BoxGeometry(0.5,5,2);
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
//materials
const material = new THREE.MeshBasicMaterial({ color: 0x964333});
const cubeMaterial = new THREE.MeshBasicMaterial({color : 0xffffff})
//creating the cubes
const cube = new THREE.Mesh (geometry,material);
const cube2 = new THREE.Mesh(cubeGeometry,cubeMaterial);
scene.add(cube);
belowscene.add(cube2)

//camera settings
camera.position.z = 5;

//rendering and animating
function animate() {
    renderer.render(scene,camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cubeRenderer.render(belowscene,camera)
    cube2.rotation.y += 0.1
    cube2.rotation.x += 0.1
    cube2.rotation.z += 0.01
}

renderer.setAnimationLoop(animate);
