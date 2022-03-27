<template>
  <div class="main__wrapper">
    <div class="main__container">
      <div class="main__aside">
        <el-aside width="250">
          <el-menu
              :default-active="this.$route.path"
              :unique-opened="true"
              router
              class="main__aside-nav"
              background-color="#c31ed5"
              text-color="#fff"
              active-text-color="#ffd04b"
          >
            <el-menu-item index="/evelina" :route="{ name: 'evelina', params: this.$route.params }">
              <img src="@/assets/logo.svg" class="main__logo">
            </el-menu-item>
            <el-menu-item :route="{ name: 'balda', params: this.$route.params }">Тест на балду</el-menu-item>
            <el-menu-item :route="{ name: 'super-game', params: this.$route.params }">Супер игра</el-menu-item>
          </el-menu>
        </el-aside>
      </div>
      <div class="main__body">
        <Header :user_name="user_name"/>
        <router-view :user_name="user_name"/>
      </div>
    </div>
  </div>
</template>

<script>

import Balda from "@/components/Balda";
import {useCookies} from "vue3-cookies";
import Header from "@/components/Header";

export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      user_name: '',
    }
  },
  methods: {},
  components: {
    Balda,
    Header,
  },
  mounted() {
    let user_name_by_cookie = JSON.parse(this.cookies.get("user_name"));
    if (!user_name_by_cookie) {
      this.$router.push({
        name:'login',
      })
    } else {
      this.user_name = user_name_by_cookie
    }
  }
}
</script>

<style>
.main__wrapper {
  width: 100%;
  height: 100vh;
  background: pink;
}
.main__container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}
.main__aside {
  width: 250px;
  height: 100vh;
}
.main__aside-nav {
  height: 100vh;
  border: 0px solid #c31ed5 !important;
}
.main__body {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main__logo {
  width: 60px;
}
</style>