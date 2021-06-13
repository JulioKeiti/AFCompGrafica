class Plataforma {
    plataform = null

    constructor(scene, position, rotation, h, w, d) {
        var plataformMat = new BABYLON.StandardMaterial("plataform", scene);
        plataformMat.ambientTexture = new BABYLON.Texture("/textures/1.jpg", scene);

        this.plataform = BABYLON.MeshBuilder.CreateBox("box", { height: h, width: w, depth: d });
        this.plataform.material = plataformMat;
        this.plataform.position = position;
        this.plataform.rotation = rotation;
        this.plataform.physicsImpostor = new BABYLON.PhysicsImpostor(this.plataform, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 1 }, scene);
    }

    getPlataform() {
        return this.plataform;
    }

    animatePlat(position, animPos, animType, initPos, finalPos) {
        var wheelPivotParent = new BABYLON.TransformNode("wheelPivotParent");
        wheelPivotParent.position = position;
        this.plataform.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("marbleTowerWheelRot", wheelPivotParent, animType, 20, 60, initPos, finalPos, 1)
    }

}