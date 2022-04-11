//Spaceship's PreFabs
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene,x,y, texture, frame);
        scene.add.existing(this);                         // Add to Existing Scene
        this.points = pointValue;                         // Store PointValue
        this.moveSpeed = game.settings.spaceshipSpeed;    // Movement in Pixels per Frame
    }

    update() {
        //Move Spaceship Left
        this.x -= this.moveSpeed;
        //Wrap Around From left edge to right edge
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }

    reset() {
        this.x = game.config.width;
    }
}