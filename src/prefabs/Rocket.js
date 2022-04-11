//Rocket Details
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene,x,y,texture, frame);

        //add objects to existing scenes
        scene.add.existing(this);       // Add to Existing, DisplayList, UpdateList
        this.isFiring = false;          // Track Rocket's Firing Status
        this.moveSpeed = 2;             // Movement in Pixels per Frame
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add Rocket sfx
    }

    update() {
        // Left/Right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;
            }
            else if (keyRIGHT.isDown && this.x <= game.config.width -
            borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }
        // Fire Button
        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
            this.sfxRocket.play(); // Play SoundEffect
        }

        // If the Rocket is Fired, the missle moves up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }

        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding){
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }
    //Resets Rocket's Starting position
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}