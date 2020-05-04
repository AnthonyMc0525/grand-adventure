import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {BlackMage} from './blm.mjs';
import {Dragoon} from './drg.mjs';
import {WhiteMage} from './whm.mjs';
import black from './assets/blackMage.png';
import blackpixel from './assets/blackMagePixelArt.png';
import whitepixel from './assets/whiteMagePixelArt.png';
import drgpixel from './assets/dragoonPixelArt.png';
import white from './assets/whiteMage.png';
import dragon from './assets/dragoon.png';
import goblin from './assets/enemy.png';
import bahamut from './assets/bahamut.png';
import background from './assets/background.png';



//<button id="start" onClick={props.nextPage}>Next</button>
function Start(){
  return (
    <div>
      <p>Long ago in the land you call home, peace was a normal thing. The people of the land went about their days flourishing in the riches in the land and with friends and family.</p>

      <p>Then, out of no where a great roar that would be heared all around the world was released; and released it was. For it was a sign of the catastrophy that was about to insue.</p>


      <p>Before the people were prepared, a great dragon flew across the land, bringing nothing but fire and destruction.</p>
      <Link to="Intro1">Next</Link>

    </div>
  );
}

function Intro1(){
  return (
    <div>
      <p>With the dragon raveging the land, the people were lost and afraid.</p>  
      <p>None could contest the might of the dragon. Untill the day that a man that nobody knew showed up.</p>  
      <p>He was an older man dressed in a white robe and walked with a staff that had a stone on the top.</p>  
      <p>On the day that the people now celebrate, the man conjured magic that no one had ever seen. Magic of great power and had its own sense of strength to it. He used this magic to create a spheric cage that would hold the dragon for an eternity.</p>
      <Link to="Intro2">Next</Link>
    </div>
  )
}

function Intro2(){
  return (
    <div>
      <p>The man who called himself an "arch-mage" told the people magic of this caliber has a price. He would die in the next 3 days when the spell was complete. He also told the people that the dragon had a name. "Bahamut" he said. He was a being known as an Eikon. False gods of amazing power.</p>
      <p>He warned the people that there are more Eikons than the one he had stopped, although this one was the strongest of them all.</p>
      <p>He told the people to train even in times of peace so that if an Eikon where to come to these lands then they would be ready.</p>
      <p>And in 3 days just as he had said, he passed away. But, he did leave hope. His staff, he said was a relic could absorb mana from the area and conjured into very powerful effects.</p>
      <p>he handed this to the leader of the village and told him to start a "Guild" and to keep the staff safe.</p>
      <Link to="Beginning">Next</Link>
    </div>
  )
}


function Beginning({setName, ...props}){
  
  return(
    <div>
      <p>Many centuries after what the people have named "The Great Sundering" and Guilds have spread across the land. Many have powerful warriors, some act as merchant guilds, and others became crafting guilds. There are lots of famous guilds, but none as famous as your's.</p>
      <p>It is a nice day out. There are no clouds in the sky, the weather is just right, you can even smell the local flowers as you open the doors to your guild hall and look up, seeing the sign that shows the name of your guild. "Primal Raid".</p>
      <p>Uknown Person: "Hey, um..."</p>
      
      <input type='text' placeholder="What is your name" onChange={e => setName(e.target.value)} />
      <Link to="Introductions">Next</Link>
    </div>

  )
}

function Introductions({ name }){
  return(
    <div>
      <p>Uknown Person: "...{name}, yes yes of course. The guild Master needs to speak with you ASAP, so you should go see him. He is in the guild hall."</p> 
      <p>You: "Well, guess i can't keep the old man waiting. Wonder what I've done this time. What's your name again. I don't think you ever told me."</p>
      <p>Titania: "It's Titania. I'm new around here. Nice to meet you." She then walks towards the guild hall</p>
      <Link to="GuildHall">Next</Link>
    </div>

  )
}

function GuildHall({ name }){
  return(
    <div>
      <p>You open the grand double doors that lead into the guild hall. As you do and as you expected you see the guild master, but what you dont expect is the other members besides yourself of the power 9 along with him.</p>
      <p>The power nine is a group of 9 powerful warriors. Highly skilled in each one of their crafts</p>
      <p>You: "Hey gramps, what's with the little pow wow we got going on here?"</p>
      <p>Guild Master: "I was just talking with your fellow comrads about how troublsome you have become."</p>
      <p>You: "Aww come on gramps, I haven't been that bad." As you say that you get a smug smile on your face.</p>
      <p>Guild Master: "That's not what these guys say." you can see that the guild master has that same smile on his face.</p>
      <p>Guild Master: "{name}, come over here with the rest of us so I don't have to shout."</p>
      <Link to="Meeting">Next</Link>
    </div>
  )
}

function Meeting(){
  return(
    <div>
      <p>You sit at a big round table with the other power 9 and the Guild Master.</p>
      <p>Guild Master: he waves at the Titania to close the door and leave.
"I have called you all here today because there is something I need you all to do."
You can tell he is serious because he has lowered his voice so that no one else can hear.</p>
      <p>Guild Master: "The ephemeral cage holding the Eikon Bahamut is being weakened by some powerful mages. I shouldn't have to tell you why this has warented urgency or why we must speek of this in private."</p>
      <p>The man just to your right is dressed in armor that resembles a dragon. he is the 7th power 9. Estinian, the Dragoon.</p>
      <p>Estinian: "I assume that you would like all of us to go take care of it?"</p>
      <p>Guild Master: "Yes. There are a powerful group of unknown mages preparing a ritual to break Bahamut out of his cage. You all are the best chance that this world has to keep Bahamut from breaking free."</p>
      <p>There is a women sitting right across the table from you. she has black hair that is being covered by the hood of her outfit. She is wearing the typical healers gown. She is the most powerful healer in the realm. Minfilia, the White Mage.</p>
      <p>Minfilia: Taps her head in thought
"So we just have to disrupt the ritual long enough for their aether to thin down. They shouldn't be able to do anything without sufficiant aether."</p>
      <p>You: "How many of them are there?"</p>
      <p>Guild Master: "There are 3 groups of 5. all spread around a circle around the cage. You all will have to take out all 3 groups before the ritual is complete."
</p>
      <p>You: "What if we can't?"</p>
      <p>Everyone becomes deep in thought at the possibility that Bahamut would once again be free and reeking havoc once again.
after some thought...</p>
      <Link to="FinalPlan">Next</Link>
    </div>
  )
}

function FinalPlan({ name }){
  return(
    <div>
      <p>The Guild Master stands up and turns around. He looks up at the staff of the Arch-Mage and takes it down. He turns back around and looks right at you.</p>
      <p>Guild Master: "If you cannot stop the ritual in time, then you all will have to do what the Arch-Mage himself could not do. Banish him from this realm."
</p>
      <p>He looks around at the you and the others.</p>
      <p>Guild Master: "Since the Arch-Mage, no one has weilded it, but if it comes down to the wire, you're gonna need all the help you can get. {name}, I put the Arch-Mage's final gift in your hands. Accept this gift and let it give you the strength that you need."
</p>
      <p>You stand up and face him, look down at the staff and then look back at him. He nods to you as if he knows exactly what you are thinking.</p>
      <p>Guild Master: "Take it. Your fellow companions have all agreed that you should be the one to have it."</p>
      <p>You glance over at the rest of your comrads and see that they are all nodding in agreement.</p>
      <p>You look back at the Guild Master. He lifts his hands slightly. As he does you take the staff and feel a great surge of aether flow from the staff to you.</p>
      <p>You start to notice the staff almost changing somehow.</p>
      <p>Grand Master: "Do not worry, it will change based on the weapon it deems will suite you the best. You will feel a change and emerge stronger than before."</p>
      <Link to="ClassSelect">Choose Class</Link>
    </div>
  )
}

function ClassSelect(props){
  return(
    <div id="classes">
      <Blm {...props}/>
      <Whm {...props}/>
      <Drg {...props}/>
      <Link id="to-aquired" to="JobAquired">Next</Link>
    </div>
  )
}

function Blm({playerClass, ...props}){
  const blm = new BlackMage();
  return(
    <div id='blm-left'>
      <h2>Black Mage</h2>
      <img src={black} id="blmclass" alt="black mage art"/>
      <p id="blmdes">{blm.description}</p>
      <button class="choose-class" id="blackMage" onClick={() => playerClass(blm)}>Choose Black Mage</button>
    </div>
  )
}

function Whm({playerClass, ...props}){
  const whm = new WhiteMage();
  return(
    <div id='whm-mid'>
      <h2>White Mage</h2>
      <img src={white} id="whmclass" alt="white mage art"/>
      <p id="whmdes">{whm.description}</p>
      <button class="choose-class" id="whiteMage" onClick={() => playerClass(whm)}>Choose White Mage</button>
    </div>
  )

}

function Drg({playerClass, ...props}){
  const drg = new Dragoon();
  return(
    <div id='drg-right'>
      <h2>Dragoon</h2>
      <img src={dragon} id="drgclass" alt="dragoon art"/>
      <p id="drgdes">{drg.description}</p>
      <button class="choose-class" id="dragoon" onClick= {() => playerClass(drg)}>Choose Dragoon</button>
    </div>
  )

}

function JobAquired({ player, ...props }){
  if(player.name === "Black Mage"){
    return(
      <div>
        <p>As you emerge from the staffs choosing, you notice that the staff takes on a slightly different appearance than it had before.</p>
        <p>You a look around and you notice that there is fire swirling around your staff. With just a thought, you extinguish the flames. You look at the empty space where the flames were in amazement.</p>
        <p>Guild Master: "Well well. It seems you have been best deemed a {player.name}"</p>
        <Link to="SettingOut">Next</Link>
      </div>
    )
  }
  if(player.name ==="Dragoon"){
    return(
      <div>
        <p>As you emerge from the staffs choosing, you notice that the staff takes on a slightly different appearance than it had before.</p>
        <p>You take a better look at what once was the staff. You notice it is a long, slender lance with what looks like a dragons wing just under the blade at the tip of the lance.</p>
        <p>Guild Master: "Well well. It seems you have been best deemed a {player.name}"</p>
        <Link to="SettingOut">Next</Link>
      </div>
    )
  }
  if(player.name === "White Mage"){
    return(
      <div>
        <p>As you emerge from the staffs choosing, you notice that the staff takes on a slightly different appearance than it had before.</p>
        <p>You take a better look at once was the old staff and are amazed as you now see a slender staff with a slendder red cloth comming from the top. At the very top of the staff looks like horns that curve in with a gem in the middle of the horns</p>
        <p>Guild Master: "Well well. It seems you have been best deemed a {player.name}"</p>
        <Link to="SettingOut">Next</Link>
      </div>
    )
  }
}

function SettingOut({ name, player, partner1, partner1Class, partner2, partner2Class, ...props }){
  let blm = "Black Mage";
  let whm = "White Mage";
  let drg = "Dragoon";
  let pclass = player.name;
  let jobs = [blm, whm, drg];
  for (let i = 0; i < 3; i++){
    if(pclass === jobs[i]){
      jobs.splice(i, 1);
    }
  }
  for (let i = 0; i < 2; i++){
    if(jobs[i] === "Black Mage"){
      jobs[i] = new BlackMage();
    }
    else if(jobs[i] === "White Mage"){
      jobs[i] = new WhiteMage();
    }
    if(jobs[i] === "Dragoon"){
      jobs[i] = new Dragoon();
    }
  }
  // Estinian and Minfilia
  //  if(player.name === "Black Mage"){
  // partner1Class(new WhiteMage());
  // partner2Class(new Dragoon());
   return(
     <div>
       <p>Guild Master: "Now that the staff has molded itself to you, you are ready to set out."</p>
       <p>You: "Well, now that we are done with the light show, what are our plans?"</p>
       <p>Guild Master: "There will be three groups of three. Each group of you will take a group of the spell weavers that are trying to free bahamut"</p>
       <p>Guild Master: "{name}, you Estinian and Minfilia will be one of the groups. Your group will take the group closest to us. After you take care of them, head towards bahamuts cage in case the other groups can not make it to there targets in time."</p>
       <p>You: "Sounds like a plan to me." You turn towards where Estinian and Minfilia are.</p>
       <p>You: "Well then, you two ready to go?"</p>
       <p>Estinian and Minfilia: "Yup."</p>
       <p>You: "Alright, then lets go."</p>
       <Link to="Chatting" onClick={() => {partner1Class(jobs[0]); partner2Class(jobs[1])}}>Next</Link>
     </div>
   )
  }

function Chatting({ partner1, partner2, ...props }){
  return(
    <div>
      <p>You have embarked on your trip towards your group of spellweaver ritualists.</p>
      <p>Your trip has been pretty smooth. No interuption have happened. The sky is clear and blue and there is a soft breeze that feels just right.</p>
      <p>You: "Man, it has been a long time since I was on an adventure with you guys."</p>
      <p>{partner1.pname}: "That's cause the only time we see you is the short time you are at the guild picking jobs from the board."</p>
      <p>{partner2.pname}: "Yea, it's not like you stick around the guild very long. You kind of just come and go."</p>
      <p>You: "Yea, I guess you're right about that. Still, going on this assignment with you guys brings back memories of when we first came to the guild and would do low class jobs together. Those were the days."</p>
      <p>{partner1.pname}: "Yea, those were some good times."</p>
      <p>{partner2.pname}: "Hey, are those the guys we are looking for?"</p>
      <p>Off in the distance towards the direction {partner2.pname} mentioned you see three people dressed in robes around a circle. You take a look up to notice that the cage of Bahamut can be seen from here, and it seems that energy is moving from the circle to the cage.</p>
      <p>You: "It seems as though they are in the middle of their ritual. We need to stop them. Lets go."</p>
      <p>And with that, the three of you run to interupt the ritual by defeating the spell weavers.</p>
      <Link to="FirstBattle">Next</Link>
    </div>
  )
}


//if (queue.includes(value)) removeFromQueue(value)
//function FirstBattle({name, player, partner1, partner2, ...props}){
//  const [queue, setQueue] = useState([])
//  const [enemy1, setEnemy1] = useState(new SpellCaster(goblin))
//  const [enemy2, setEnemy2] = useState(new SpellCaster(goblin))
//  const [enemy3, setEnemy3] = useState(new SpellCaster(goblin))
//  const [team, changeTeam] = useState([player, partner1, partner2])
//  const [enemies, changeEnemies] = useState([enemy1, enemy2, enemy3])
//  let currentPlayerI = 0;
  //  const clearQueue = () => setQueue([])
//  const addToQueue = (value) => setQueue([ value ])
//  const removeFromQueue = (value) => setQueue(queue.filter(v => v !== value))
//  const handleClick = (value) => {
//    addToQueue(value)
//  }
//  const queueClickHandler = (value) => () => {
//    handleClick(value);
//  }
//  const useAction = (target) => {
    //use the current party members move from the queue on the target given by the click
    //to get action, get the name in the queue then match it with a name in the current players moves.
//    let action = queue[0];
    //target will be determined by which name is clicked by the player
    //call removeFromQueue so that the next attack can be put in
    //after move has been used, change currentPlayerI to currentPlayerI++ unless it is at 2, then set it to 0
//  }
  // in here, the placeholders are going to be replaces with the attacks, spells, and abilities of the party member you are currently on
//  return(
//    <React.Fragment>
//      <ol id="instructions"> Instructions
//        <li>Click the move you want to use.</li>
//        <li>Click the enemy name in the box to attack them.</li>
//      </ol>
//      <div className="battle-background">
//        <div id="battle-visual">
//          <img src={background} alt="battle background" id="background-img"/>
//          <img src={blackpixel} alt="black mage sprite" id="black-mage-battle-img"/>
//          <img src={whitepixel} alt="white mage sprite" id="white-mage-battle-img"/>
//          <img src={drgpixel} alt="dragoon sprite" id="dragoon-battle-img"/>
//          <img src={enemy1.sprite} alt="enemy sprite" id="enemy1-img"/>
//          <img src={enemy2.sprite} alt="enemy sprite" id="enemy2-img"/>
//          <img src={enemy3.sprite} alt="enemy sprite" id="enemy3-img"/>
//        </div>
//      </div>
//      <div id="menu">
//        <div id="actions">
//          <ul id="commands">
//            <li onClick={queueClickHandler(team[currentPlayerI].moves[0])} id={team[currentPlayerI].moves[0]}>{team[currentPlayerI].moves[0]}</li>
//            <li onClick={queueClickHandler(team[currentPlayerI].moves[1])} id={team[currentPlayerI].moves[1]}>{team[currentPlayerI].moves[1]}</li>
//            <li onClick={queueClickHandler(team[currentPlayerI].moves[2])} id={team[currentPlayerI].moves[2]}>{team[currentPlayerI].moves[2]}</li>
//            <li onClick={queueClickHandler(team[currentPlayerI].moves[3])} id={team[currentPlayerI].moves[3]}>{team[currentPlayerI].moves[3]}</li>
//          </ul>
//        </div>
//        <div id="targets">
//          <ul id="subcommands">
//            <li>Spell Caster 1</li> 
//            <li>Spell Caster 2</li> 
//            <li>Spell Caster 3</li> 
//          </ul> 
//        </div>
//        <div className="team-stats">
//          <table>
//            <tbody>
//              <tr>
//                <td>Name</td>
//                <td>HP</td>
//                <td>MP/TP</td>
//              </tr>
//              <tr>
//                <td>{name}</td>
//                <td>{player.HP}</td>
//                <td>{player.MP}</td>
//              </tr>
//              <tr>
//                <td>{partner1.pname}</td>
//                <td>{partner1.HP}</td>
//                <td>{partner1.MP}</td>
//              </tr>
//              <tr>
//                <td>{partner2.pname}</td>
//                <td>{partner2.HP}</td>
//                <td>{partner2.MP}</td>
//              </tr>
//            </tbody>
//          </table>
//        </div>
//      </div>
//    </React.Fragment>
//  )
//}

function FirstBattle ({name, player, partner1, partner2, ...props  }){
  let job = player.name;
  if(job === "Black Mage"){
    return(
      <div>
        <p>You: "There are three of them, just as we were told. {partner1.name}, you take the far one. {partner2.name}, you can take the one on the right. I'll take the middle one."</p>
        <p>{partner1.name}: "Sounds good to me."</p>
        <p>{partner2.name}: "No objections here."</p>
        <p>After the conformation of your party members, you all spring to life. Running towards your targets with practiced efficiency.</p>
        <p>Spell Weaver: "We have a problem."</p>
        <p>He points to you and your two comrads and with one swift motion hurls a fireball in your direction.</p>
        <p>You quickly dodge out of the way</p>
        <p>As {partner2.pname} jumps high into the air, you begin charging up your own retaliation</p>
        <p>BOOOOOM. A huge crash as all at once {partner2.pname} comes down with a mighty strike and you cast <span id='thunder'>Thundaga</span> on all three of the Spell Weavers.</p>
        <p>You: "Seems like that did the trick"</p>
        <Link to="MinorVictory">Next</Link>
      </div>
    )
  } else if(job === "White Mage"){
    return(
      <div>
        <p>You: "There are three of them, just as we were told. {partner1.name}, you take the far one. {partner2.name}, you can take the one on the right. I'll take the middle one."</p>
        <p>{partner1.name}: "Sounds good to me."</p>
        <p>{partner2.name}: "No objections here."</p>
        <p>After the conformation of your party members, you all spring to life. Running towards your targets with practiced efficiency.</p>
        <p>Spell Weaver: "We have a problem."</p>
        <p>He points to you and your two comrads and with one swift motion hurls a fireball in {partner1.pname}'s direction.</p>
        <p>{partner1.pname} quickly moves out of the way of the fireball.</p>
        <p>As {partner2.pname} jumps high into the air, you and {partner1.pname} begin readying spells of your own.</p>
        <p>BOOOOOM. A huge crash as all at once {partner2.pname} comes down with a mighty strike and you cast <span id="holy">Holy</span> and {partner1.pname} casts <span id="firaga">Firaga</span> in quick succession, ending the three Spell Weavers</p>
        <p>You: "That Seemed to do the trick."</p>
        <p></p>
        <Link to="MinorVictory">Next</Link>
      </div>
    )
  } else if(job === "Dragoon"){
    return(
      <div>
        <p>You: "There are three of them, just as we were told. {partner1.name}, you take the far one. {partner2.name}, you can take the one on the right. I'll take the middle one."</p>
        <p>{partner1.name}: "Sounds good to me."</p>
        <p>{partner2.name}: "No objections here."</p>
        <p>After the conformation of your party members, you all spring to life. Running towards your targets with practiced efficiency.</p>
        <p>Spell Weaver: "We have a problem."</p>
        <p>He points to you and your two comrads and with one swift motion hurls a fireball in your direction.</p>
        <p>You leap high into the air, and call forth the power hidden in your lance.</p>
        <p>An aura surrounds you giving you incredible strength.</p>
        <p>With this power you plunge yourself down towards your target.</p>
        <p><span id="boom">BOOOOOM!</span> You land with a violent crash and your spear through your target gone.</p>
        <p>You shake your spear to release the Spell Weaver and look to were the other Weavers should be.</p>
        <p>They have been obliterated with the spells of your companions.</p>
        <Link to="MinorVictory">Next</Link>
      </div>
    )
  }
}

function MinorVictory({ partner1, partner2, ...props }){
  return (
    <div>
      <p>You: "Well, that wasn't all that bad. I was honestly was expecting more from them, but oh well."</p>
      <p>{partner1.pname}: "This isn't over yet. This is but a small victory."</p>
      <p>You: "Yea yea I know."</p>
      <p>{partner2.pname}: "Let's keep moving. I would rather we assumed the worst and be ready for it."</p>
      <p>You: "You're as wise as ever I see. But you're right, let's keep moving."</p>
      <Link to="RoadToBahamut">Next</Link>
    </div>
  )
}

function RoadToBahamut({ partner1, partner2, ...props }){
  return (
    <div>
      <p>And so the group kept moving ever closer to the place where Bahamut is.</p> 
      <p>The trip was rather uneventful. There was very little talk from the group as they were all nervous for what could happen if things went wrong with the operation.</p> 
      <p>Eventually, they make it to their destination. Looking up, the thing feared throughout the land floats in the air. The cage that holds the legendary Eikon, Bahamut.</p> 
      <p>{partner1.pname}: "Seeing this from up close makes me really appreciate just how powerful the arch-mage was."</p> 
      <p>You: "Yea, I know what you mean. This could get really scary if we fail."</p> 
      <p>{partner2.pname}: "Do you guys see that?"</p> 
      <p>{partner2.pname} points to a spot on the cage. It seems that there is a crack in the cage that seems to be getting bigger with each second.</p> 
      <p>You: "This is NOT good."</p> 
      <p>{partner1.pname}: "Shit, GET DOWN!"</p> 
      <p>As {partner1.pname} yells for you to get down, you drop to the ground and hear a loud BOOM as the cage breaks apart.</p> 
      <p>All the parts of the cage start to fizzle out as the seal was broken. You look up, with dread on your face, to see the very thing that you wish you would never have to see. Bahamut</p> 
      <Link to="MomentsBefore">Next</Link>
    </div>
  )
}

function MomentsBefore({ name, partner1, partner2, setDes, ...props }) {
  return(
    <div>
      <p>You, {partner1.pname}, {partner2.pname} all stand up. Fear has come over you as you look at the massive dragon that looms over you.</p>
      <p>{partner2.pname}: "Well, this is a problem. Seems We'll be taking the hard way out of this then. Hope you're ready {name}."</p>
      <p>You: "Of course. I was born ready."</p>
      <p>"I know that even though {partner2.pname} sounds and looks confident that it's fake. I have to stow this fear that I have or else the entire world might be doomed."</p>
      <p>{partner1.pname}: "Let's do this. If we don't succeed in this battle, the entire world is done for. Let's give him our all. Don't hold back."</p>
      <p>You: "Right on cue. Here he comes."</p>
      <p>Bahamut notices the three of you and flies towards you.</p>
      <h2>What will you do?</h2>
      <button onClick={() => setDes(1)}>Try to find cover from Bahamuts attack</button>
      <button onClick={() => setDes(2)}>Challenge his approach</button>
      <Link to="BahamutBattle">Next</Link>
    </div>
  )
}

function BahamutBattle({player, partner1, partner2, decision}) {
  let num = decision;
  let job = player.name;
  if(num === 1){
    if(job === "Black Mage" || job === "White Mage"){
      return (
        <div>
          <p>You look around for anything that might shield you and your group from Bahamut, but find nothing.</p>
          <p>Despair fills your mind as the reality of the situation hits you like a truck.</p>
          <p>But then, you feel a tug from the staff. It's almost as though it telling you to use it.</p>
          <p>You trust it. You use the staff to siphon the surrounding energy into it.</p>
          <p>Once you have all that you could gather, you release the energy in a dome around your party.</p>
          <p>Bahamut comes down fast. A ball of energy in his mouth as he approaches.</p>
          <p>Just as your barrier comes to life, Bahamut releases the energy in a huge stream.</p>
          <p>But the barrier holds its own against the onslaught.</p>
          <p>{partner2.pname}: "Let's do this!" He then lunges into the air, that familiar aura engolfing him.</p>
          <p>{partner1.pname}: "We'll hold him off. Gather as much energy as you can and hit him with everything you got."</p>
          <p>{partner1.pname} then hurls a Holy at Bahamut. It hits its mark, but doesn't seem to even make a scratch on him.</p>
          <p>You gather energy as fast as you possibly can. Taking energy from all around the world in order to gain enough.</p>
          <p>You: "IT'S DONE. GET OUT OF THE WAY!!"</p>
          <p>Both your partners get out of the way and with one push from the staff a blast with a size and furosity never seen before hits the dragon.</p>
          <p>He falls from the sky, roaring in defiance, but it's in vain.</p>
          <p>He hit the ground with such force that the entire world could feel it.</p>
          <Link to="Success">Next</Link>
        </div>
      )
    } else if(job === "Dragoon"){
      return (
        <div>
          <p>You look around for anything that might shield you and your group from Bahamut, but find nothing.</p>
          <p>Despair fills your mind as the reality of the situation hits you like a truck.</p>
          <p>But then, you feel a tug from the lance. It's almost as though it telling you to use it.</p>
          <p>You trust it. You use the lance to siphon the surrounding energy into it.</p>
          <p>Once you have all that you could gather, you release the energy in a dome around your party.</p>
          <p>Bahamut comes down fast. A ball of energy in his mouth as he approaches.</p>
          <p>Just as your barrier comes to life, Bahamut releases the energy in a huge stream.</p>
          <p>But the barrier holds its own against the onslaught.</p>
          <p>You: "You guys distract him long enough for me to gather energy."</p>
          <p>{partner1.pname}: "Will do. Gather as much energy as you can and hit him with everything you got."</p>
          <p>{partner1.pname} then hurls a Holy at Bahamut. It hits its mark, but doesn't seem to even make a scratch on him.</p>
          <p>{partner2.pname}: "You got it."</p>
          <p>{partner1.pname} then casts Flare on Bahamut. As with the holy, it hits its mark, but doesn't seem to even make a scratch on him.</p>
          <p>You gather energy as fast as you possibly can. Taking energy from all around the world in order to gain enough.</p>
          <p>You: "IT'S DONE. GET OUT OF THE WAY!!"</p>
          <p>Both your partners get out of the way and you jump at Bahamut and with one push from the lance a blast with a size and furosity never seen before hits the dragon.</p>
          <p>He falls from the sky, roaring in defiance, but it's in vain.</p>
          <p>He hit the ground with such force that the entire world could feel it.</p>
          <Link to="Success">Next</Link>
        </div>
      )

    }

  } else if(num === 2){
    if(job === "Black Mage" || job === "White Mage"){
      return (
        <div>
          <p>You: "Get back guys. I'm gonna hit him with everything I have before he can even strike."</p>
          <p>{partner1.pname}: "Will you have enough time?"</p>
          <p>You: "I hope."</p>
          <p>As you charge up Bahamut gets closer and closer, readying an attack of his own.</p>
          <p>{partner2.pname}: "I don't think your'e gonna make it."</p>
          <p>You: "Not with you distracting me I wont."</p>
          <p>Bahamut stops in the air just above you and releases the energy into a consentrated beam of energy towards your group.</p>
          <p>{partner2.pname}: "Do it NOW!"</p>
          <p>You: "Here goes nothing!"</p>
          <p>You release all the energy you have gathered all at once to try to contest the massive energy beam comming straight for you</p>
          <p>The attacks from both sides clash, neither one having a huge advantage over the other.</p>
          <p>But, as the clash looked like it would end in a draw, a small beam breaks out from Bahamut's attack breaks past the clash, and with incredible speed strikes down {partner2.pname}. the clash then fizzles out.</p>
          <p>You: "NOOOOOO!!"</p>
          <p>With a look of pure rage on your face and the staff in your hand glowing as if it reacts with your emotion, you point the staff towards Bahamut.</p>
          <p>Some kind of rune hovers over the end of the staff, and as the rune starts to glow, a massive beam is shot towards Bahamut.</p>
          <p>The beam hits Bahamut point blank. Bahamut roars in pain.</p>
          <p>When the beam disapears, Bahamut is no where to be seen.</p>
          <Link to="Success">Next</Link>
        </div>
      )

    } else if(job === "Dragoon"){
      return (
        <div>
          <p>You: "Get back guys. I'm gonna hit him with everything I have before he can even strike."</p>
          <p>{partner1.pname}: "Will you have enough time?"</p>
          <p>You: "I hope."</p>
          <p>As you charge up Bahamut gets closer and closer, readying an attack of his own.</p>
          <p>{partner2.pname}: "I don't think your'e gonna make it."</p>
          <p>You: "Not with you distracting me I wont."</p>
          <p>Bahamut stops in the air just above you and releases the energy into a consentrated beam of energy towards your group.</p>
          <p>{partner2.pname}: "Do it NOW!"</p>
          <p>You: "Here goes nothing!"</p>
          <p>You jump towards Bahamut and release all the energy you have gathered all at once to try to contest the massive energy beam comming straight for you</p>
          <p>The attacks from both sides clash, neither one having a huge advantage over the other.</p>
          <p>But, as the clash looked like it would end in a draw, a small beam breaks out from Bahamut's attack breaks past the clash, and with incredible speed strikes down {partner2.pname}. the clash then fizzles out.</p>
          <p>You: "NOOOOOO!!"</p>
          <p>With a look of pure rage on your face and the lance in your hand glowing as if it reacts with your emotion, you point the lance towards Bahamut.</p>
          <p>Some kind of rune hovers over the end of the lance, and as the rune starts to glow, a massive beam is shot towards bahamut.</p>
          <p>The beam Hits Bahamut point blank. Bahamut roars in pain.</p>
          <p>When the beam disapears, Bahamut is no where to be seen.</p>
          <Link to="Success">Next</Link>
        </div>
      )

    }

  }

}

function Success({decision, player, partner1, partner2}) {
  let pro = '';
  if(partner2.pname === "Estinian"){
    pro = "He";
  } else{
    pro = "She";
  }
  let num = decision;
  if(num === 1){
    return(
      <div>
        <p>{partner1.pname}: "Is it over?"</p>
        <p>You: "Yea... yea I think it is."</p>
        <p>You and your companions look as Bahamut starts to fizzle out of existance</p>
        <p>{partner2.pname}: "It's over. Good work today guys."</p>
        <p>You: "Yea good work. Now I get to go tell the old man about my good deeds and he'll finally lay off a bit."</p>
        <p>{partner1.pname}: "Maybe, so long as you don't create any problems after we get back, which I highly doubt."</p>
        <p>You: "What do you mean? I never cause problems. I just do my job. You guys just always point out the bad parts of my success."</p>
        <p>All three of you laugh as you say that and make your way back to the guild.</p>
        <p>Though it was rough and menacing, the group of adventures managed to overcome the challenges placed on them and in doing so, saved the world.</p>
        <p className="end">The End</p>
      </div>
    )
  } else if(num === 2){
    return(
      <div>
        <p>{partner2.pname}, {partner2.pname.toUpperCase()}!</p>
        <p>You run towards your downed friend. {pro} has a hole in his chest from where the beam hit him</p>
        <p>You get to him and you realize just how bad of a condition {pro.toLowerCase()} is in.</p>
        <p>{partner2.pname}: "You... you did it didn't you."</p>
        <p>You sniffle and wipe away a tear before you are able to answer him.</p>
        <p>You: "...Yes, it is done. We have defeated Bahamut."</p>
        <p>{partner2.pname}: "Good, good."</p>
        <p>You: "We'll get you home my friend. We will get you to people who can get you better."</p>
        <p>{partner2.pname}: "You know as well as I do that we would not make it in time to save me. I am glad to have been by your side all this time."</p>
        <p>You: "As I am glad to have been with you my friend. Pass now with honor of the highest order and know that you will never be forgotten."</p>
        <p>{partner2.pname}: "Take my weapon. Bring it back to the old man. Have him hang it up or something."</p>
        <p>With that, {pro.toLowerCase()} hands you his lance, and passes away.</p>
        <p>{partner1.pname}: "Guess we should head back to the guild. Wish we could bring him with, but there isn't a cart to wheel him there."</p>
        <p>You: "Yea, let's go"</p>
        <p>The two of you then make your way to the guild. You look back once, burning this moment into your memory.</p>
        <p className="end">The End</p>
      </div>
    )
  }
}

function App() {
  const [decision, setDes] = useState(0);
  const [name, setName] = useState('');
  const [player, setPlayers] = useState({});
  const [partner1, setPartner1] = useState({});
  const [partner2, setPartner2] = useState({});
  const setDecision = (value) => setDes(decision + value);
  const playerClass = (job) => setPlayers({
    ...job
  });
  const partner1Class = (job) => setPartner1({
    ...job
  });
  const partner2Class = (job) => setPartner2({
    ...job
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Start />
        </Route>

        <Route path="/Intro1" exact>
          <Intro1 />
        </Route>

        <Route path="/Intro2" exact>
          <Intro2 />
        </Route>

        <Route path="/Beginning" exact>
          <Beginning setName={setName} />
        </Route>

        <Route path="/Introductions" exact>
          <Introductions name={name} />
        </Route>

        <Route path="/GuildHall" exact>
          <GuildHall name={name} />
        </Route>

        <Route path="/Meeting" exact>
          <Meeting />
        </Route>

        <Route path="/FinalPlan" exact>
          <FinalPlan name={name} />
        </Route>

        <Route path="/ClassSelect" exact>
          <ClassSelect playerClass={playerClass}/>
        </Route>

        <Route path="/JobAquired" exact>
          <JobAquired player={player} />
        </Route>

        <Route path="/SettingOut" exact>
          <SettingOut name={name} player={player} partner1={partner1} partner2={partner2} partner1Class={partner1Class} partner2Class={partner2Class} />
        </Route>

        <Route path="/Chatting" exact>
          <Chatting partner1={partner1} partner2={partner2}/>
        </Route>

        <Route path="/FirstBattle" exact>
          <FirstBattle name={name} player={player} partner1={partner1} partner2={partner2}/>
        </Route>

        <Route path="/MinorVictory" exact>
          <MinorVictory partner1={partner1} partner2={partner2}/>
        </Route>

        <Route path="/RoadToBahamut" exact>
          <RoadToBahamut partner1={partner1} partner2={partner2}/>
        </Route>

        <Route path="/MomentsBefore" exact>
          <MomentsBefore name={name} partner1={partner1} partner2={partner2} setDes={setDes} />
        </Route>

        <Route path="/BahamutBattle" exact>
          <BahamutBattle player={player} partner1={partner1} partner2={partner2} decision={decision}/>
        </Route>

        <Route path="/Success" exact>
          <Success decision={decision} player={player} partner1={partner1} partner2={partner2} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
