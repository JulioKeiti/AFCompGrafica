class Plataformas {
    plataform = null

    constructor(scene, position, rotation, h, w, d) {
        var plataformMat = new BABYLON.StandardMaterial("plataform", scene);
        plataformMat.ambientTexture = new BABYLON.Texture("/textures/4.jpg", scene);

        this.plataform = BABYLON.MeshBuilder.CreateBox("box", { height: h, width: w, depth: d });
        this.plataform.material = plataformMat;
        this.plataform.position = position;
        this.plataform.rotation = rotation;
        this.plataform.physicsImpostor = new BABYLON.PhysicsImpostor(this.plataform, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 1 }, scene);

    }

    getPlataform() {
        return this.plataform;
    }
}