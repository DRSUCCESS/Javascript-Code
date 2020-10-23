// create player object
let player; //make it available everywhere as a global scope

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack : function () {
 
        // who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        // Player attacks!
    let playerAttack = function () {
        let calcBaseDamage;
        if (player.mana > 0) {
            calcBaseDamage = player.strength * player.mana / 1000;
        } else {
            calcBaseDamage = player.strength * player.agility / 1000;
        }
        alert("Player attacks, mana:" + player.mana + " calcBaseDamage:" + calcBaseDamage);
        let offsetDamage = Math.floor(Math.random() * Math.floor(2));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        // Number of hits, make at least one time because result might be 0 sometimes
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;

    }
    
        // Enemy attacks!
    let enemyAttack = function () {
        let calcBaseDamage;
        if (enemy.mana > 0) {
            calcBaseDamage = enemy.strength * player.mana / 1000;
        } else {
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
        }
        alert("Player attacks, mana:" + player.mana + " calcBaseDamage:" + calcBaseDamage);

        let offsetDamage = Math.floor(Math.random() * Math.floor(2));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        // Number of hits, make at least one time because result might be 0 sometimes
        let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
    
    // Get player/enemy health to change later
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    // Initiate attacks!
    if(getPlayerSpeed >= getEnemySpeed) {
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit " + playerAttackValues[0]+ " damage " +playerAttackValues[1]+ " times");
        if(enemy.health <=0) {
            alert("You win! Refresh browser to play again");
            getPlayerHealth.innerHTML = 'Health: ' + player.health; 
            getEnemyHealth.innerHTML = 'Health: 0'; //make enemy health 0 even when its health is -
        }   else    {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health; 
            // Enemy attacks
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hits " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times");
            if (player.health <= 0) {
                alert("You loose! Refresh browser to play again");
                getPlayerHealth.innerHTML = 'Health: 0'; //make player health 0 even when its health is -
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            }   else{
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }
            
        }
    }


        // Initiate attacks!
        else if(getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hits " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times");
            if (player.health <= 0) {
                alert("You loose! Refresh browser to play again");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0'; //make enemy health 0 even when its health is -
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                // Player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times");
                if (enemy.health <= 0) {
                    alert("You win! Refresh browser to play again");
                    getEnemyHealth.innerHTML = 'Health: 0'; //make player health 0 even when its health is -
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }

            }
        }
}
}
