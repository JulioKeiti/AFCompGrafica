class Ballss {
    sphere = null;

    constructor(scene, height) {
        /*--Área da bola--*/
        var sphereMat = new BABYLON.StandardMaterial("ball", scene);
        sphereMat.ambientTexture = new BABYLON.Texture("/textures/ball 3.jpg", scene); // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
        this.sphere = BABYLON.Mesh.CreateSphere("sphere1", 12, 2, scene);
        this.sphere.position.y = height;
        this.sphere.position.x = 8;
        this.sphere.material = sphereMat;
        this.sphere.physicsImpostor = new BABYLON.PhysicsImpostor(this.sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9 }, scene);


    }

    getBall() {
        return this.sphere;
    }

    removeBall(count) {
        this.sphere.dispose();
        return count - 1;
    }
}