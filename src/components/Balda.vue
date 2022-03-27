<template>
  <div class="balda__container">
    <div class="balda__checked">
      <button @click="baldaEdit" class="balda__checked-btn">Пройти проверку на балду</button>
      <div v-if="is_balda_show" class="balda__rezult-main">{{balda()}}</div>
    </div>
    <div class="balda__form-container">
      <div class="balda__form">
        <h2 class="balda__title">Проверить на балду:</h2>
        <input v-model="baldaValue" placeholder="Введи имя человека" class="balda__input"/>
        <button @click="baldaChecked" class="balda__button">Проверить</button>
      </div>
      <div class="balda__rezult">{{baldaRezult}}</div>
    </div>
  </div>
</template>


<script>


export default {
  data() {
    return {
      baldaValue: '',
      baldaRezult: '',
      is_balda_show: false,
    }
  },
  methods: {
    baldaEdit() {
      this.is_balda_show = !this.is_balda_show
    },
    baldaChecked() {
      if (this.baldaValue === '') {
        this.baldaRezult = `Введи свое имя, балда...`
      } else if ((this.baldaValue.toLowerCase().indexOf('рин')!==-1)||(this.baldaValue.toLowerCase().indexOf('рен')!==-1)||(this.baldaValue.toLowerCase().indexOf('эве')!==-1)||(this.baldaValue.toLowerCase().indexOf('эви')!==-1)) {
        this.baldaRezult = `${this.baldaValue} не балда!`
      } else {
        this.baldaRezult = `${this.baldaValue} балда!`
      }
    },
    balda() {
      let user = this.$attrs.user_name
      if (user.toLowerCase().indexOf('рин')!==-1 ||user.toLowerCase().indexOf('рен')!==-1 || user.toLowerCase().indexOf('эве')!==-1 || user.toLowerCase().indexOf('эви')!==-1) {
        return `${user}, ты не балда! Ура!`
      } else {
        return `Ну ты балда, ${user}`
      }
    },
  },
}
</script>

<style scoped>
.balda__container {
  width: 700px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.balda__form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.balda__title {
  font-size: 20px;
  margin-bottom: 15px;
}
.balda__input {
  width: 200px;
  height: 50px;
  padding: 15px;
  font-size: 20px;
  margin-bottom: 20px;
}
.balda__button {
  margin-bottom: 20px;
  width: 200px;
  font-size: 16px;
  height: 50px;
  background: #c03920;
}
.balda__rezult {
  font-size: 20px;
}

.balda__checked {
  margin-bottom: 20px;
  position: relative;
}
.balda__checked-btn {
  width: 200px;
  height: 50px;
  background: #0a13d3;
  color: white;
  font-size: 16px;
}
.balda__rezult-main {
  position: absolute;
  left: 13px;
  margin-top: 30px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
