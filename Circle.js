class circle {
    circle = null

    constructor(scene, position, rotation, h, w, d) {
        var circleMat = new BABYLON.StandardMaterial("Sphere", scene);
        circleMat.ambientTexture = new BABYLON.Texture("/textures/text1.jpg", scene);

        this.circle = BABYLON.MeshBuilder.CreateSphere("Sphere", { diameter: 10 });
        this.circle.material = circleMat;
        this.circle.position = position;
        this.circle.rotation = rotation;
        this.circle.physicsImpostor = new BABYLON.PhysicsImpostor(this.circle, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 0, restitution: 1 }, scene);

    }

    getcircle() {
        return this.circle;
    }
}