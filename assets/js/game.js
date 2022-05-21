var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {

    // Repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {

        // ask player if they want to skip or fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter `FIGHT` or `SKIP` to choose.");

         //if player choses to skip
      if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    
        //Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes(true), leave fight
        if (confirmSkip ) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
        
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break; 
            
        }
     }
    

    
    // if player choses to fight, then fight
    //if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {


    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert( enemyName + " has died!");

        //award player money for winning
        playerMoney = playerMoney + 20;
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");


    //Check Player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        
        break;
    
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    
    }
    }
};


   
    

   

    // if no (false), ask question again by running fight() again
 

//function to start a new game
var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    var endGame = function(){
        // if player is still alive, player wins!
        if (playerHealth > 0){
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " . ");
        }
        else {
            window.alert("You've lost your robot in battle.");
        }
    //ask player if they'd like to play again
    var playeAgainConfirm = window.confirm("Would you like to play again?");
    
    if (playeAgainConfirm) {
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
           "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
       );

        // use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL": //new case for capitilized answers
            case "refill" :
                if (playerMoney >= 7){
                window.alert("Refilling Player's health by 20 for 7 dollars.");

                //increas health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                }
                
                else {
                    window.alert("You don't have enough money peasant!");
                }
                break;
            
                case "UPGRADE":
                case "upgrade" :
                if (playerMoney >= 7){   
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                }

                else {
                    window.alert("You don't have enough money peasant!");
                }
                break;

            case "LEAVE":
            case "leave" :
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
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        //Alert players that they are starting the round
       window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
   
       //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
      
    //reset enemyHealth before starting new fight
    enemyHealth = 50;
       
       
   
       fight(pickedEnemyName);

       // if we're not at the last enemy in the array
       if (playerHealth > 0 && i < enemyNames.length -1) {
        
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

