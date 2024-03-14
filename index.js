// section 1 elements layout

/*const buttonPokemon = document.getElementsByClassName("button-pokemon");
const computerPokemon = document.getElementById("computer-pokemon");
const userPokemon = document.getElementById("user-pokemon");
*/
let pokemonAvailable = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];

// Function for section 1
function selectPokemon(pokemon) {
  document.getElementById("user-pokemon").textContent = pokemon;
  return selectPokemon;
}


let userPokemon = document.getElementById("user-pokemon");
let computerPokemon = document.getElementById("computer-pokemon");

document.getElementById("pikachu-select").addEventListener("click", function () {
  selectPokemon(" Pikachu");
});

document.getElementById("bulbasaur-select").addEventListener("click", function () {
  selectPokemon(" Bulbasaur");
});

document.getElementById("charmander-select").addEventListener("click", function () {
  selectPokemon(" Charmander");
});

document.getElementById("squirtle-select").addEventListener("click", function () {
  selectPokemon(" Squirtle");
  
});


// In here we are storing the information from the User pokemon so it can be called again when the pokemon battle happens. In here we are using localStorage as a way storing the information. Also the section after the localStorage.setItem.... we added the pointerEvents which causes the divs to be blocked/not being able to be clicked. 


const saveButton = document.getElementById('yourPokemon');
function savedPokemon (){
 const storedUserPokemon = document.getElementById('user-pokemon').textContent;
  localStorage.setItem('storedUserPokemon', storedUserPokemon);
  document.getElementById('pikachu-select').style.pointerEvents = 'none';
   document.getElementById('bulbasaur-select').style.pointerEvents = 'none';
   document.getElementById('charmander-select').style.pointerEvents = 'none';
   document.getElementById('squirtle-select').style.pointerEvents = 'none';
} 
//this is the event listener when you click the Accept?! will cause the call to the function savedPokemon above. 
saveButton.addEventListener('click', savedPokemon);

//This section is creating Randy's pokemon, which should be using randomisation of the avaiable pokemons, shown variable at the beginning. Then it should change the section about Your enemy randy chooses.... The If statement is showing the content in the HTML depending if the userPokemon is ... it does a Math.random where the variable pokemonAvailable will be checked through the array of pokemons and create a variable for randyspokemon. Finaly section is storing RandysPokemon into the localStorage under storedComputerPokemon


document.getElementById("finalSubmit").addEventListener("click", function () {
  document.getElementById("gym-leader").style.visibility = "visible";
  if (userPokemon.textContent === " Pikachu" || userPokemon.textContent === " Bulbasaur" || userPokemon.textContent === " Charmander" || userPokemon.textContent === " Squirtle") {
    let randysPokemon = pokemonAvailable[Math.floor(Math.random() * pokemonAvailable.length)];
    computerPokemon.textContent = randysPokemon;
     const storedComputerPokemon = document.getElementById('computer-pokemon').textContent;
    localStorage.setItem('storedComputerPokemon', storedComputerPokemon);
  }
});


/*When clicking on submit button, button should immediately disappear and prevent the user from selecting the pokemon again */

function submitDisappear(){
  let submit = document.getElementById("finalSubmit");
  if (submit.style.display === "none") {
    submit.style.display = "block";
  } else {
    submit.style.display = "none";
  }
}

//Countdown for the fight section. 
const numbers = document.getElementsByTagName("div");

let index = numbers.length - 1;
let vs = document.getElementById('VS');

//This is the click event for the countdown for the 3,2,1 Fight! and then later on it calls another function for showing the VS screen and lastly the Battle screen section.      
document.getElementById("finalSubmit").addEventListener("click", function showCountDown () {
  if (index >= 0) {
    numbers[index].style.visibility = "visible";
    index --;
    setTimeout(showCountDown, 200) 
    setTimeout(battleVs, 2000) 
    setTimeout(battleCommence, 2500) 
  }
});
//Function to show the VS screen. In here it is called the answer input from the user and also from the randomiser to get Randys pokemon. So using the localStorage done above using the Accept button. 
function battleVs(){
  const hero =  localStorage.getItem('storedUserPokemon');
  document.getElementById('hero').textContent = hero;
const enemy = localStorage.getItem('storedComputerPokemon');
 document.getElementById('enemy').textContent = enemy;
  vs.style.visibility= "visible";
 
}

//Beginning of the pokemon battle section T.T not finished. But it show 

let pikachu = {
  HP: 250,
  Attack: 5,
  Defenceh: 3,
};
let squirtle = {
  HP: 200,
  Attack: 2,
  Defence: 8,  
};
let charmander = {
  HP: 200,
  Attack: 6,
  Defence: 3,
 
};
let bulbasaur = {
  HP: 200,
  Attack: 8,
  Defence: 1,
 
};

//This section is the beginning of the battle scene. this is by setting up the setting

let battleScene = document.getElementById('battleScene'); 
let fightButton = document.getElementById('fightButton'); 
let defendButton =  document.getElementById('defend'); 
let HP = document.getElementById('HealthHero');
let HPE = document.getElementById('HealthEnemy');

//Makes changes to the css for creating the background battle ground
function battleCommence(){
  battleScene.style.visibility= 'visible';
  battleScene.style.backgroundColor= 'darkgray';
   fightButton.style.visibility= 'visible';
   defendButton.style.visibility= 'visible';
//This section is to show the pokemon who are going to battle inside the battle ground using the localStorage 
  const heroFight = localStorage.getItem('storedUserPokemon');
  document.getElementById('heroFight').textContent = heroFight;
  const enemyFight = localStorage.getItem('storedComputerPokemon');
  document.getElementById('enemyFight').textContent = enemyFight;

//In here is to call the HP health of the chosen pokemons to appear in the battle grounds
   if (heroFight  === 'Pikachu'){
    HP.textContent = pikachu.HP; 
  } else if (heroFight === 'Bulbasaur'){
    HP.textContent = bulbasaur.HP; 
  } else if (heroFight  === 'Charmander') {
    HP.textContent = charmander.HP; 
  } else {
    HP.textContent = squirtle.HP; 
  }
  
   if (enemyFight === 'Pikachu'){
    HPE.textContent = pikachu.HP; 
  } else if (enemyFight === 'Bulbasaur'){
    HPE.textContent = bulbasaur.HP; 
  } else if (enemyFight  === 'Charmander') {
    HPE.textContent = charmander.HP; 
  } else {
    HPE.textContent = squirtle.HP; 
  }
}

//The beginning code for the battle to start. This section does not work yet. 
 document.getElementById("fightButton").addEventListener("click", function battleBegins () {
    HPE.textContent - 2;
   
 });


document.getElementById("defend").addEventListener("click", function blockingAttacks () {
   
 });
