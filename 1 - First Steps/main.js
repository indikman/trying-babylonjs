var engine = new BABYLON.Engine(canvas);

var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.9, 0.9, 0.9);

var camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene
);

var light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene
);

var box = BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

var boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0.54, 0, 0.6);
box.material = boxMaterial;

//render loop
var t = 0;
var renderLoop = function () {
  scene.render();

  t -= 0.01;
  box.rotation.y = t * 2;
  box.scaling.x = Math.abs(Math.sin(t * 2)) + 0.5;
  box.scaling.y = Math.abs(Math.sin(t * 2)) + 0.5;
  box.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
};

engine.runRenderLoop(renderLoop);
