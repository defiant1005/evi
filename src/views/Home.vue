<template>
  <div class="wrap__container">
    <div class="container">
      <div class="main__btn" @click="goMain">Перейти на сайт Эвелинки</div>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    goMain() {
      this.$router.push('/evelina')
    }
  }
}
</script>

<style scoped>
.wrap__container {
  width: 100%;
  height: 100vh;
  background: pink;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.main__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  background: rgba(94, 39, 189, 0.4);
  border-radius: 5px;
  box-shadow: 8px 5px 5px #a014c0;
  cursor: pointer;
  color: #c03920;
  font-size: 16px;
}
.main__btn:hover {
  width: 320px;
  height: 55px;
}
.main__btn:active {
}
</style>