//import Math;

export class Dragoon{
	constructor(MAXHP=1984, STR=120, INT=52, MAXTP=1248, DEF=85, MagDEF=90, RES=["blizzard","thunder"], shell=false){
		this.MAXHP = MAXHP;
		this.HP = MAXHP;
		this.STR = STR;
		this.INT = INT;
		this.MAXMP = MAXTP;
		this.MP = MAXTP;
		this.DEF = DEF;
		this.MagDEF = MagDEF;
		this.RES = RES;
		this.shell = shell;
		this.dragon = false;
		this.description = "The go to job for fighting dragons. equipped with a spear and dragon like armor, they are well suited for the task.";
		this.img = "assets/dragoon.png";
    this.sprite = './assets/dragoonPixelArt.png';
    this.name = "Dragoon";
    this.pname = "Estinian";
    this.moves = ['dragon sight', 'stardiver', 'high jump', 'mirage dive']
	}

	dragon_sight(){
		this.dragon = true;
		this.MP -= 12;
	}

	stardiver(target){
		if(target.type === "dragon"){
			if(this.dragon === true){
				target.HP -= (250 - target.DEF)*Math.floor(Math.random()*(((this.STR+99)/8 + this.STR)));
			}
			target.HP -= (200 - target.DEF)*Math.floor(Math.random()*(((this.STR+99)/8 + this.STR)));
		} else{
			if (this.dragon === true){
				target.HP -= (150 - target.DEF)*Math.floor(Math.random()*(((this.STR+99)/8 + this.STR)));
			} else{
				target.HP -= (100 - target.DEF)*Math.floor(Math.random()*(((this.STR+99)/8 + this.STR)));
			}
		}
		this.MP -= 45;
	}

	high_jump(target){
		if(target.type === "dragon"){
			if(this.dragon === true){
				target.HP -= (200 - target.DEF)*Math.floor(Math.random()*(((this.STR+99)/8 + this.STR)));
			}
			target.HP -= (150 - target.DEF)*Math.floor(Math.random()*(((this.STR+99)/8 + this.STR)));
		} else{
			if (this.dragon === true){
				target.HP -= (100 - target.DEF)*Math.floor(Math.random()*(((this.STR+99)/8 + this.STR)));
			} else{
				target.HP -= (50 - target.DEF)*Math.floor(Math.random()*(((this.STR+99)/8 + this.STR)));
			}
		}
		this.MP = 35;
	}

	mirage_dive(target){ //make this an aoe skill
		if(this.dragon === true){
			target.HP -= (100 - target.DEF)*Math.floor(Math.random()*(((this.STR+99)/8 + this.STR)));
		} else {
			target.HP -= (50 - target.DEF)*Math.floor(Math.random()*(((this.STR+99)/8 + this.STR)));
		}
		this.MP -= 25
	}
}
