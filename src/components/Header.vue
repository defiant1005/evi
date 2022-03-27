<template>
<div class="main__header-container">
  <div class="name__container">
    <div class="name__container-img">
      <img src="@/assets/avatars/итачи.jpeg" class="avatar_img" v-if="user_name.toLowerCase().indexOf('рин')!==-1||user_name.toLowerCase().indexOf('рен')!==-1"/>
      <img src="@/assets/avatars/принцесса.jpeg" class="avatar_img" v-else-if="user_name.toLowerCase().indexOf('эви')!==-1||user_name.toLowerCase().indexOf('эве')!==-1"/>
      <img src="@/assets/avatars/балда.jpeg" class="avatar_img" v-else/>
    </div>
    <div class="name__container-name">{{user_name}}</div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    user_name: {
      required: true
    }
  },
}
</script>

<style scoped>
.main__header-container {
  height: 100px;
  width: 100%;
  position: absolute;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: end;
  align-items: center;
}
.name__container {
  margin-right: 50px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #0a13d3;
  display: flex;
  align-items: center;
}
.name__container-name {
  margin-left: 15px;
}
.avatar_img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>