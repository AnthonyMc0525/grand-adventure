//import 'Math';


export class BlackMage{
	constructor(MAXHP=1243, STR=50, INT=120, MAXMP=1647, DEF=60, MagDEF = 100, RES=["fire","blizzard","thunder"], shell=false){
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
		this.description = "An absolute master of all things destruction and magic. Capable of casting some of the most powerful black magic spells in existance.";
    this.img = "assets/blackMage.png";
    this.sprite = './assets/blackMagePixelArt.png';
    this.name = "Black Mage";
    this.pname = "Mira";
    this.moves = ['firaga', 'blizzaga', 'thundaga', 'flare']
	}
	firaga(target){
    let modifier = 0;
    const fire = target.RES.includes('fire');
    const fimmune = target.Immune.includes('fire');
    		if(fire){
    	modifier = 1;
    } else if(!fire){
    	modifier = .5;				
    } else if(fimmune){
    	modifier = 0;
    }
    target.HP -= (72 - target.MagDEF) *(modifier)*Math.floor(Math.random()*(((this.INT+99)/8 + this.INT)));
    this.MP -=24;
	}
	blizzaga(target){
    const blizzard = target.RES.includes('blizzard');
    const bimmune = target.Immune.includes('blizzard');
    let modifier = 0;
    if(blizzard){
      modifier = 1;
		} else if(!blizzard){
			modifier = .5;				
		} else if(bimmune){
			modifier = 0;
		}
		target.HP -= (72 - target.MagDEF) *(modifier)*Math.floor(Math.random()*(((this.INT+99)/8 + this.INT)));
		this.MP -=24;
	}
	thundaga(target){
    const thunder = target.RES.includes('thunder');
    const timmune = target.Immune.includes('thunder');
    let modifier = 0;
		if(thunder){
			modifier = 1;
		} else if(!thunder){
			modifier = .5;				
		} else if(timmune){
			modifier = 0;
		}
		target.HP -= (72 - target.MagDEF) *(modifier)*Math.floor(Math.random()*(((this.INT+99)/8 + this.INT)));
		this.MP -=24;
	}
	flare(target){ //make this an aoe skill
		target.HP -= (119 - target.MagDEF)*Math.floor(Math.random()*(((this.INT+99)/8 + this.INT)));
		this.MP -=40;
	}
}

