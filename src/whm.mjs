//import Math;

export class WhiteMage{
	constructor(MAXHP=1576, STR=64, INT=110, MAXMP=1444, DEF=85, MagDEF=90, RES=["blizzard","thunder"], shell=false){
		this.MAXHP = MAXHP;
		this.HP = MAXHP;
		this.STR = STR;
		this.INT = INT;
		this.MAXMP = MAXMP;
		this.MP = MAXMP;
		this.DEF = DEF;
		this.MagDEF = MagDEF;
		this.RES = RES;
		this.shell = shell;
		this.description = "A powerful and respected job. Responsible for keeping there party members alive and kicking. A White Mage is always a welcomed member in any group.";
    this.img = "assets/whiteMage.png";
    this.sprite = './assets/whiteMagePixelArt.png';
    this.name = "White Mage";
    this.pname = "Minfilia";
    this.moves = ['curaga', 'full life', 'holy', 'shell']
	}

	curaga(target){ //make this an aoe skill
		target.HP -= (107 - target.MagDEF)*Math.floor(Math.random()*(((this.INT+99)/8 + this.INT)));
		this.MP -= 22;
	}

	full_life(target){
		if (target.HP === 0){
			target.HP = target.MAXHP;
			this.MP -= 24;
		}
	}

	holy(target){
		target.HP -= (113 - target.MagDEF)*Math.floor(Math.random()*(((this.INT+99)/8 + this.INT)));
		this.MP -= 36;
	}

	shell(target){
		target.shell = true;
		this.MP -= 6;
	}
}

