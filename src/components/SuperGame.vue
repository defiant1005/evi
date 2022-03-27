<template>
<div class="supergame__container">
  <div class="supergame__title">Играем в игру "Самое большое число". Пиши любое число:</div>
  <el-input-number v-model="num" :min="1" :max="10"/>
  <el-button type="primary" round @click="submit" class="supergame__btn">Отправить</el-button>
  <div v-if="myNum">{{'Мое число ' + myNum + '. Я победил'}}</div>
</div>
</template>

<script>

export default {

  data() {
    return {
      num: 0,
      myNum: null,
    }
  },
  methods: {
    submit() {
      if(+this.num !== NaN) {
        this.myNum = +this.num + 1
      } else {
        alert('Введи нормальное число')
      }
    }
  },
}
</script>

<style scoped>
.supergame__container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.supergame__title {
  font-size: 16px;
  margin-bottom: 20px;
}
.supergame__btn {
  margin: 20px 0;
}
</style>