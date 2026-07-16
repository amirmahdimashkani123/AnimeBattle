let playerHP = 100;
let enemyHP = 100;

function attack() {
    // حمله بازیکن
    let playerDamage = Math.floor(Math.random() * 20) + 1;
    enemyHP -= playerDamage;

    if (enemyHP < 0) {
        enemyHP = 0;
    }

    document.getElementById("enemyHP").textContent = enemyHP;
    document.getElementById("enemyBar").style.width = enemyHP + "%";

    if (enemyHP === 0) {
        alert("You Win! 🎉");
        return;
    }

    // حمله دشمن
    setTimeout(function() {
        let enemyDamage = Math.floor(Math.random() * 15) + 1;
        playerHP -= enemyDamage;

        if (playerHP < 0) {
            playerHP = 0;
        }

        document.getElementById("playerHP").textContent = playerHP;

        alert("Enemy attacked! Damage: " + enemyDamage);

        if (playerHP === 0) {
            alert("You Lose! 💀");
        }

    }, 500);
}
