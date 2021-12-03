//selectors
const holes=document.querySelectorAll('.hole');
const scoreboard=document.querySelector('.score');
const moles=document.querySelectorAll('.mole');
//variables
let lastHole;
let timeup=  false;
let score=0;
//random time generator
function RandomTime(min,max)
{
    return Math.round(Math.random()*max);
}
//random hole
function RandomHoles(holes)
{
    const idx=math.floor(Math.random()*holes.length)
    const hole=holes[idx];
    if(hole== lastHole)
    {
        console.log("You hit the same hole");
        return randomHole(holes);

    }
    lastHole=hole;
    return hole;

}
//peep
function  peep()
{
    const time=randomTime(200,1000);
    const hole =randomHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classlist.remove('up');
        if(!timeUp) peep();
        
    },time);
    
}
//start game
//
function startgame()
{
    scoreboard.textContent;
    timeUp=false;
    score=0;
    peep();
    setTimeout(()=>timeUp=true),10000);

}
//bonk
function bonk(e)
{
    if(!e.isTrusted)return;
    score++;
    this.parentNode.classList.remove('up');
    scoreboard.textContent=score;
}
