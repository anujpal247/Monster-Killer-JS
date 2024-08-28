const attackValue = 10;
const strongAttackValue = 16;
const monsterAttackValue = 14;

let choosenMaxLife = 100;
let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;

adjustHealthBars(choosenMaxLife);

function attackMonsetr(mode) {
  let maxDamage;
  if (mode === "attack") {
    maxDamage = attackValue;
  } else if (mode === "strong_attack") {
    maxDamage = strongAttackValue;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
  }
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw!");
  }
}

function attackHandler() {
  attackMonsetr("attack");
}

function strongAttackHandler() {
  attackMonsetr("strong_attack");
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
