var world = new CANNON.World();
world.gravity.set(0, 0, 0); // m/s²

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xffffff);
renderer.localClippingEnabled = true;



var listener = new THREE.AudioListener();

var audio = new THREE.Audio(listener);



var mediaElement = new Audio('assets/tangana.mp3');
mediaElement.loop = true;
mediaElement.play();

audio.setMediaElementSource(mediaElement);

let analyser = new THREE.AudioAnalyser(audio, 128);



function CustomSinCurve(func) {
    THREE.CurvePath.call(this);

    let closedSpline = new THREE.CatmullRomCurve3(func());
    this.add(closedSpline)

    this.scale = 1;
}

CustomSinCurve.prototype = Object.create(THREE.CurvePath.prototype);
CustomSinCurve.prototype.constructor = CustomSinCurve;

let shapes = {
    "a": () => {
        let a = [];
        for (let t = 0; t <= 1; t = t + 0.01) {
            var tx = t * 3.4 - 1.5;
            var ty = Math.cos(1.2 * Math.PI * t);
            var tz = 0;
            a.push(new THREE.Vector3(tx, ty, tz).multiplyScalar(10))
        }
        return a;
    },
    "b": () => {
        let r = 2.3;
        let a = [];
        for (let t = 0; t <= 1; t = t + 0.01) {
            var tx = r * Math.sin(2 * Math.PI * (t * 5));
            var ty = (t * 13) - 14;
            var tz = r * Math.cos(2 * Math.PI * (t * 5));
            a.push(new THREE.Vector3(tx, ty, tz))
        }

        let b = a[a.length - 1]
        let c = a[0]

        a.unshift(new THREE.Vector3(c.x - 5, c.y, c.z));
        a.push(new THREE.Vector3(b.x + 7, b.y, b.z))
        return a;
    },
    "c": () => {
        let r = 2.3;
        let a = [];
        for (let t = 0; t <= 1; t = t + 0.01) {
            var tx = r * Math.sin(2 * Math.PI * (t * 10));
            var ty = (t * 23) - 14;
            var tz = r * Math.cos(2 * Math.PI * (t * 10));
            a.push(new THREE.Vector3(tx, ty, tz))
        }

        let b = a[a.length - 1]
        let c = a[0]

        a.unshift(new THREE.Vector3(c.x - 10, c.y, c.z));
        a.push(new THREE.Vector3(b.x + 7, b.y, b.z))
        return a;
    },
    "d": () => {
        let r = 2.3;
        let a = [];
        for (let t = 0; t <= 1; t = t + 0.01) {
            var tx = r * Math.sin(2 * Math.PI * (t * 2));
            var ty = (t * 7) - 14;
            var tz = r * Math.cos(2 * Math.PI * (t * 2));
            a.push(new THREE.Vector3(tx, ty, tz))
        }

        let b = a[a.length - 1]
        let c = a[0]

        a.unshift(new THREE.Vector3(c.x - 10, c.y, c.z));
        a.push(new THREE.Vector3(b.x + 7, b.y, b.z))
        return a;
    },
    "e": () => {
        let a = [];
        for (let t = 0; t <= 1; t = t + 0.01) {
            var tx = t * 3.4 - 1.5;
            var ty = Math.cos(1.1 * Math.PI * t);
            var tz = 0;
            a.push(new THREE.Vector3(tx, ty, tz).multiplyScalar(10))
        }
        return a;
    },
}



// CustomSinCurve.prototype.getPoint = shapes.c;

var light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 1, 1).normalize();
scene.add(light);

light = new THREE.AmbientLight(0x0c0c0c);
scene.add(light);



var path = new CustomSinCurve(shapes.c);
var geometry = new THREE.TubeGeometry(path, 380, 1, 8, false);
geometry.computeFlatVertexNormals();
var material = new THREE.MeshPhongMaterial({ color: 0xe9a66a, specular: 0x555555, shininess: 30 });
var mesh = new THREE.Mesh(geometry, material);
mesh.material.side = THREE.DoubleSide;
mesh.rotation.y = 14.2;
mesh.position.z = -12;
scene.add(mesh);



path = new CustomSinCurve(shapes.a);
geometry = new THREE.TubeGeometry(path, 380, 1, 8, false);
geometry.computeFlatVertexNormals();
material = new THREE.MeshPhongMaterial({ color: 0xfffa90, specular: 0x555555, shininess: 30 });
mesh = new THREE.Mesh(geometry, material);
mesh.material.side = THREE.DoubleSide;
mesh.position.y = -9;
mesh.position.x = 9;
mesh.position.z = -30;
mesh.rotation.y = 5;
scene.add(mesh);


path = new CustomSinCurve(shapes.a);
geometry = new THREE.TubeGeometry(path, 380, 1, 8, false);
geometry.computeFlatVertexNormals();
material = new THREE.MeshPhongMaterial({ color: 0xb077ba, specular: 0x555555, shininess: 30 });
mesh = new THREE.Mesh(geometry, material);
mesh.material.side = THREE.DoubleSide;
mesh.position.x = 11.2;
mesh.position.y = -9;
mesh.position.z = -30;
mesh.rotation.y = 5;
scene.add(mesh);

path = new CustomSinCurve(shapes.a);
geometry = new THREE.TubeGeometry(path, 380, 1, 8, false);
geometry.computeFlatVertexNormals();
material = new THREE.MeshPhongMaterial({ color: 0xa4ffaa, specular: 0x555555, shininess: 30 });
mesh = new THREE.Mesh(geometry, material);
mesh.material.side = THREE.DoubleSide;
mesh.position.x = 13.4;
mesh.position.y = -9;
mesh.position.z = -30;
mesh.rotation.y = 5;
scene.add(mesh);

path = new CustomSinCurve(shapes.a);
geometry = new THREE.TubeGeometry(path, 380, 1, 8, false);
geometry.computeFlatVertexNormals();
material = new THREE.MeshPhongMaterial({ color: 0xa6cbff, specular: 0x555555, shininess: 30 });
mesh = new THREE.Mesh(geometry, material);
mesh.material.side = THREE.DoubleSide;
mesh.position.x = 15.6;
mesh.position.y = -9;
mesh.position.z = -30;
mesh.rotation.y = 5;
scene.add(mesh);

path = new CustomSinCurve(shapes.a);
geometry = new THREE.TubeGeometry(path, 380, 1, 8, false);
geometry.computeFlatVertexNormals();
material = new THREE.MeshPhongMaterial({ color: 0xff9090, specular: 0x555555, shininess: 30 });
mesh = new THREE.Mesh(geometry, material);
mesh.material.side = THREE.DoubleSide;
mesh.position.x = 17.8;
mesh.position.y = -9;
mesh.position.z = -30;
mesh.rotation.y = 5;
scene.add(mesh);


path = new CustomSinCurve(shapes.b);
geometry = new THREE.TubeGeometry(path, 380, 1, 8, false);
geometry.computeFlatVertexNormals();
material = new THREE.MeshPhongMaterial({ color: 0x6effc4, specular: 0x555555, shininess: 30 });
mesh = new THREE.Mesh(geometry, material);
mesh.material.side = THREE.DoubleSide;
mesh.position.x = -13;
mesh.position.z = -6;
mesh.rotation.y = 14;
scene.add(mesh);

path = new CustomSinCurve(shapes.d);
geometry = new THREE.TubeGeometry(path, 380, 1, 8, false);
geometry.computeFlatVertexNormals();
material = new THREE.MeshPhongMaterial({
    color: 0xff6666, specular: 0x555555, shininess: 30
});
mesh = new THREE.Mesh(geometry, material);
mesh.material.side = THREE.DoubleSide;
mesh.position.x = -7;
mesh.position.z = -10;
mesh.rotation.y = 14.3;
scene.add(mesh);

path = new CustomSinCurve(shapes.e);
geometry = new THREE.TubeGeometry(path, 380, 1, 8, false);
geometry.computeFlatVertexNormals();
material = new THREE.MeshPhongMaterial({
    color: 0xff9090, specular: 0x555555, shininess: 30
});
mesh = new THREE.Mesh(geometry, material);
mesh.material.side = THREE.DoubleSide;
mesh.position.x = -17;
mesh.position.z = -13;
mesh.rotation.y = 4.8;
scene.add(mesh);

geometry = new THREE.SphereGeometry(7, 12, 6, 0, 2 * Math.PI, 0, 0.5 * Math.PI);
geometry.computeFlatVertexNormals();
var sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0xff6666, specular: 0x555555, shininess: 30
});
var sphere = new THREE.Mesh(geometry, sphereMaterial);
sphere.material.side = THREE.DoubleSide;
sphere.rotation.x = Math.PI;
sphere.position.x = -8;
sphere.position.z = -28;
sphere.position.y = -3.2;
scene.add(sphere);

geometry = new THREE.Geometry();
var v1 = new THREE.Vector3(-50, -50, -50);
var v2 = new THREE.Vector3(50, -50, -50);
var v3 = new THREE.Vector3(0, 25, -50);
var triangle = new THREE.Triangle(v1, v2, v3);
var normal = triangle.getNormal();
geometry.vertices.push(triangle.a);
geometry.vertices.push(triangle.b);
geometry.vertices.push(triangle.c);
geometry.faces.push(new THREE.Face3(0, 1, 2, normal));
let tri = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
    color: 0x3ABEFF, specular: 0x555555, shininess: 30
}));
tri.position.x = -9;
tri.position.y = 17;
scene.add(tri);

geometry = new THREE.Geometry();
v1 = new THREE.Vector3(-50, -50, -53);
v2 = new THREE.Vector3(50, -50, -53);
v3 = new THREE.Vector3(0, 25, -53);
triangle = new THREE.Triangle(v1, v2, v3);
normal = triangle.getNormal();
geometry.vertices.push(triangle.a);
geometry.vertices.push(triangle.b);
geometry.vertices.push(triangle.c);
geometry.faces.push(new THREE.Face3(0, 1, 2, normal));
let tri2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xAAAAAA }));
tri2.position.x = -9;
tri2.position.y = 17;
// scene.add(tri2);


camera.position.z = 30;


// Render Loop

var render = function () {
    let frec = analyser.getAverageFrequency();
    tri.scale.x = Math.max(0.6, 1 * (frec * 0.009));
    tri.scale.y = Math.max(0.6, 1 * (frec * 0.009));

    tri2.scale.x = Math.max(0.3, 1 * (frec * 0.1));
    tri2.scale.y = Math.max(0.3, 1 * (frec * 0.1));

    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

render();