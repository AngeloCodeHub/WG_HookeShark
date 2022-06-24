
class MainGame extends Phaser.Scene {
    constructor() {
        super();
        this.PositionCoord = [190, 420, 230]
        // console.log(this.originCoord.length)

    };
    preload() {
        this.load.baseURL = "./assets/"

        this.load.image("BG_Roll", "BG_roll.png");
        this.load.image("BG_Normal", "BG_01.png");
        this.load.image("BG_Logo", "BG_logo.png");
        this.load.image("BG_UI", "1920UI配置001.png");

        this.load.path = "RollElement/"
        this.load.image("crab",["ocean_crab_ae_0000.png","ocean_shark_wild_ae_00008.png"])
        // for (let i = 0; i < 11; i++) {
        //     if (i < 10) {
        //         this.load.image("crab0" + i, "ocean_crab_ae_000" + i + ".png")
        //     } else {
        //         this.load.image("crab" + i, "ocean_crab_ae_00" + i + ".png")
        //     }
        // };

    };
    create() {
        this.add.image(540, 960, "BG_Normal")
        this.add.image(540, 990, "BG_Roll")
        this.add.image(540, 190, "BG_Logo")
        this.add.image(540, 1915, "BG_UI").setOrigin(0.5, 1)

        this.add.image(this.PositionCoord[0], this.PositionCoord[1] + this.PositionCoord[2] * 0, "crab")
        // this.add.image(this.PositionCoord[0], this.PositionCoord[1] + this.PositionCoord[2] * 1, "crab01")
        // this.add.image(this.PositionCoord[0], this.PositionCoord[1] + this.PositionCoord[2] * 2, "crab02")
        // this.add.image(this.PositionCoord[0], this.PositionCoord[1] + this.PositionCoord[2] * 3, "crab03")
        // this.add.image(this.PositionCoord[0], this.PositionCoord[1] + this.PositionCoord[2] * 4, "crab04")
        // this.add.image(this.PositionCoord[0], this.PositionCoord[1] + this.PositionCoord[2] * 5, "crab05")
        

    };
    update() { };
};


let config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 1920,
    // physics: {
    //     default: 'arcade',
    //     arcade: { gravity: { y: 0 } },
    // },
    // disableContextMenu: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.center
    },
    scene: [MainGame]
};
let game = new Phaser.Game(config);

