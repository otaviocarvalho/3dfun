var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1500);

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth *0.9 , window.innerHeight * 0.9);
document.body.appendChild( renderer.domElement );

var material = new THREE.MeshPhongMaterial( { color: 0xB22222, flatShading: true } );
var textMesh = null;
var group = null;

var loader = new THREE.FontLoader();

loader.load('node_modules/three/examples/fonts/droid/droid_sans_regular.typeface.json', function (font) {

  var text = new THREE.TextGeometry('Ágil não manda e-mail', {
    font: font,
    size: 70,
    height: 20,
    curveSegments: 12,
    bevelEnabled: false
  })
  textMesh = new THREE.Mesh(text, material);

  text.computeBoundingBox();
  var centerOffset = -0.5 * ( text.boundingBox.max.x - text.boundingBox.min.x );

  textMesh.position.x = centerOffset;

  group = new THREE.Group();
  group.add(textMesh);
  group.position.y = 100;

  scene.add(group);

  var dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
  dirLight.position.set( 0, 0, 1 ).normalize();
  scene.add( dirLight );
  var pointLight = new THREE.PointLight( 0xffffff, 1.5 );
  pointLight.position.set( 0, 100, 90 );
  scene.add( pointLight );

  animate();

});

camera.position.set( 0, 400, 700 );
var lala = 0;

var animate = function () {
  requestAnimationFrame( animate );
  console.log( lala++);

  var cameraTarget = new THREE.Vector3( 0, 150, 0 );
  camera.lookAt(cameraTarget);
  group.rotation.y += 0.01;

  renderer.render( scene, camera );
};


