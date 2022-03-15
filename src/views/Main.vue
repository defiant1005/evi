<template>
  <div class="main__wrapper">
    <div class="main__container">
      <div class="balda__form">
        <h2 class="balda__title">Проверка на балду:</h2>
        <input v-model="baldaValue" placeholder="Введи свое имя" class="balda__input"/>
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
    }
  },
  methods: {
    baldaChecked() {
      if (this.baldaValue === 'Эвелина' ||this.baldaValue === 'Эвелинка' ||this.baldaValue === 'Эви' ||this.baldaValue === 'Ринат' ||this.baldaValue === 'Рен') {
        this.baldaRezult = `${this.baldaValue}, ты не балда. Ура!`
      } else {
        this.baldaRezult = `Ну ты балда, ${this.baldaValue}`
      }
    }
  },
}
</script>

<style scoped>
.main__wrapper {
  width: 100%;
  height: 100vh;
  background: pink;
}
.main__container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.balda__form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
</style>