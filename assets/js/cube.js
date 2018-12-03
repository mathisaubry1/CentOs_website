var canvas_size = document.getElementById("container").offsetHeight;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, canvas_size/canvas_size, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

renderer.setSize( canvas_size, canvas_size );
renderer.setClearColor(0xffffff, 1);
document.getElementById('container').appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 2, 2, 2 );
var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
};

animate();