new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isGameRunning: false,
    turns: [],
  },
  computed: {},
  watch: {},
  methods: {
    startGame: function() {
      this.isGameRunning = true
      this.resetGame()
    },
    resetGame: function() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.turns = []
    },
    attack: function() {
      const damage = this.calcDamage(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster for ${damage}.`,
      })
      if (this.checkWin()) return

      this.monsterAttack()
    },
    specialAttack: function() {
      const damage = this.calcDamage(10, 20)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster hard for ${damage}.`,
      })
      if (this.checkWin()) return

      this.monsterAttack()
    },
    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }
      this.turns.unshift({
        isPlayer: true,
        text: `Player heals for 10.`,
        isHeal: true,
      })
      return this.monsterAttack()
    },
    giveUp: function() {
      this.isGameRunning = false
      this.resetGame()
    },
    monsterAttack: function() {
      const damage = this.calcDamage(5, 12)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits Player for ${damage}.`,
      })
      return this.checkWin()
    },
    calcDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max), min)
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New game?')) {
          return this.startGame()
        }
        this.isGameRunning = false
        return true
      } else if(this.playerHealth <= 0) {
        if (confirm('You lost! New game?')) {
          return this.startGame()
        }
        this.isGameRunning = false
        return true
      }
      return false
    },
  },
})