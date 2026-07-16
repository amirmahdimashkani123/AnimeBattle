let playerHP = 100;
let enemyHP = 100;

function attack() {

    let playerDamage = Math.floor(Math.random() * 20) + 1;
    enemyHP -= playerDamage;

    document.getElementById("enemyHP").textContent = enemyHP;
    document.getElementById("enemyBar").style.width = enemyHP + "%";


    if (enemyHP <= 0) {
        alert("You Win! 🎉");
        return;
    }


    setTimeout(() => {

        let enemyDamage = Math.floor(Math.random() * 15) + 1;
        playerHP -= enemyDamage;

        document.getElementById("playerHP").textContent = playerHP;

        alert("Enemy hit you: " + enemyDamage);

        if (playerHP <= 0) {
            alert("You Lose 💀");
        }

    }, 500);
}
