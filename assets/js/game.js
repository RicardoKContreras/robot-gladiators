var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    //return is used to excute an action or variables parameters: (x,y)
    return value;
}

// function to set name
var getPlayerName = function() {
    var name = "";
  
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
      }
  
    console.log("Your robot's name is " + name);
    return name;
  };

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    }, // comma!
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }
    }, // comma!
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }
    }
  };

console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10,14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10,14)
    }
  ];

  var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
      }
  
    promptFight = promptFight.toLowerCase();
      // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        
        //return true if player wants to leave
        return true;
      }
    }
    return false;
  }


var fight = function(enemy) {

    // Repeat and execute as long as the enemy-robot is alive
    while (playerInfo.health > 0 && enemy.health > 0) {

     if (fightOrSkip()) {
         // if true, leave fight by breaking loop
         break;
     }


    //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
    //generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    // Log a resulting message to the console so we know that it worked
    console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

    //Check enemy's health
    if (enemy.health <= 0) {
        window.alert( enemy.name + " has died!");

        //award player money for winning
        playerInfo.money = playerInfo.money + 20;
        break;
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
    // generate random damage value based on enemy's attack power
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");


    //Check Player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        
        break;
    
    } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    
    }
    }
};


   
    

   

    // if no (false), ask question again by running fight() again
 

//function to start a new game
var startGame = function(){
    //reset player stats
    playerInfo.reset();

   
   

    var endGame = function(){
        // if player is still alive, player wins!
        if (playerInfo.health > 0){
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " . ");
        }
        else {
            window.alert("You've lost your robot in battle.");
        }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    
    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    }
    var shop = function() {
       //ask the player what they'd like to do
       var shopOptionPrompt = window.prompt(
           "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 1 for REFILL, 2 for UPGRADE, or 3 to LEAVE."
       );
       // parseInt turns strings into integers
          shopOptionPrompt = parseInt(shopOptionPrompt); 
        // use switch to carry out action
        switch (shopOptionPrompt) {
            case 1:
                playerInfo.refillHealth();
                break;
            
                case 2:
                
                playerInfo.upgradeAttack();
                break;

            case 3:
            
                window.alert("Leaving the store.");
                //do nothing, so function will end
                break;
            
            default:
                window.alert("You did not pick a valid option. Try again.");

                //call shop() again to force player to pick a valid option
                shop();
                break;
        }

    };


//for loop
for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        //Alert players that they are starting the round
       window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
       
   
       //pick new enemy to fight based on the index of the enemy.names array
    var pickedEnemyObj = enemyInfo[i];
      
    //reset enemy.health before starting new fight
    pickedEnemyObj.health = randomNumber(40,60);
       
       
   
       fight(pickedEnemyObj);

       // if we're not at the last enemy in the array
       if (playerInfo.health > 0 && i < enemyInfo.length -1) {
        
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        //if yes, take them to the store() function
        if (storeConfirm){
        
        shop();
       }
       }
   
    }
     else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
// start the game when the page loads
endGame();

};
startGame();

//function to end the entire game





// Game States
// * The number of the round
// * Game over

// "WIN" - Player robot has defeated all enemy-robots

//      * Fight all enemy-robots
//      * Defeat each enemy-robot

// "LOSE" - Player robot's health is zero or less

