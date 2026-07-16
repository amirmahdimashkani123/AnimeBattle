let playerHP = 100;
let enemyHP = 100;

function attack() {
    let damage = Math.floor(Math.random() * 20) + 1;

    enemyHP -= damage;

    if (enemyHP < 0) {
        enemyHP = 0;
    }

    document.getElementById("enemyHP").innerHTML = enemyHP;

    document.getElementById("enemyBar").style.width = enemyHP + "%";

    if (enemyHP === 0) {
        alert("You Win! 🎉");
    }
}
