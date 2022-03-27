<template>
  <div class="evelina__container">
    <div>Приветствую,
      <span class="evelina__container-name">{{$attrs.user_name}}</span>.
    </div>
    <div>Ты попал на сайт Эвелины.</div>
    <div>Здесь ты можешь попробовать поиграть в различные мини-игры.</div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.evelina__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 18px;
}
.evelina__container-name {
  font-weight: 600;
}
</style>