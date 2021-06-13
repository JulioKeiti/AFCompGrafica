class cube {
    cube = null

    constructor(scene, position, rotation) {
        var cubeMat = new BABYLON.StandardMaterial("cube", scene);
        cubeMat.ambientTexture = new BABYLON.Texture("/textures/text 2.jpg", scene);

        this.cube = BABYLON.MeshBuilder.CreateCylinder("cube", { height: 10, diameter: 10, diameterTop: 0 });
        this.cube.material = cubeMat;
        this.cube.position = position;
        this.cube.rotation = rotation;
        this.cube.physicsImpostor = new BABYLON.PhysicsImpostor(this.cube, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0, restitution: 1 }, scene);

    }

    getcube() {
        return this.cube;
    }
}