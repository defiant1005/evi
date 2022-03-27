<template>
  <div class="wrap__container">
    <div class="container">
      <div class="home__body">
        <el-input
            placeholder="Как тебя зовут?"
            :input-style="main_input"
            v-model="input_home"
            clearable>
        </el-input>
<!--        <div style="margin: 20px 0;"></div>-->
        <div class="main__btn" @click="goMain" v-if="input_home">Перейти на сайт Эвелинки</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";

export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      input_home: '',
      main_input: {
        width: '300px',
        height: '50px'
      }
    }
  },
  methods:{
    goMain() {
      if (this.input_home !== '') {
        this.cookies.set("user_name", JSON.stringify(this.input_home), 31536000000);
        this.$router.push({
          name:'evelina',
          params: {
            user: this.input_home
          }
        })
      } else {
        this.$message.error('Введи свои имя, пенек...');
      }
    }
  },
  mounted() {
    let user_name = JSON.parse(this.cookies.get("user_name"));
    if (user_name) {
      this.$router.push({
        name:'evelina',
      })
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
.home__body {
  position: relative;
}
.main__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 150ms ease-in-out;

  position: absolute;
  top: 70px;
}

</style>