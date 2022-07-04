//Scene
const scene = new THREE.Scene()

// Creating the cube
const geometry = new THREE.BoxGeometry(1,1,1) //cube dimensions of 1,1,1
//Creating material
const material = new THREE.MeshBasicMaterial({ color:0xff0000 })
//creatin mesh with
const mesh = new THREE.Mesh(geometry, material)
//add mesh to scene
scene.add(mesh)

//sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera (Lot of types, perspective, orthagrapic etc..)
const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height ) 
// needed parameters for camera - 1.FOV 2.Aspect Ratio (Render view size, usually fill viewport)
scene.add(camera)

//moving objects/camera - XYZ coordinate movement, position, rotation and scale (Three.js, forward/backward is Z axis, Y is up)
camera.position.z = 3

//Renderer (Takes scene and draws it on a Canvas or WEBGL)
const canvas = document.querySelector('.webgl') //fetching html variable
console.log(canvas)
const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height) //renderer setting canvas size in html

renderer.render(scene, camera) //provide a scene and camera in parameter

//moving objects 