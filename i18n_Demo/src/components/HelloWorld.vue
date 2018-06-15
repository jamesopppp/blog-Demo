<template>
  <div class="hello">
    <p>{{ $t("home.hello") }}</p>
    <p>{{sayHello}}</p>
    <p>{{$t("home.der")}}</p>
    <div class="button" @click="toggleLanguage">{{ $t("home.changeLanguage") }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      userName: "James"
    };
  },
  created() {},
  computed: {
    sayHello() {
      return this.$t("home.hello") + "," + this.userName;
    }
  },
  methods: {
    toggleLanguage() {
      let that = this;
      let locale = that.$i18n.locale;
      if (locale === "zhCHS") {
        that.$i18n.locale = "en";
        window.localStorage.setItem("language", "en");
      } else {
        that.$i18n.locale = "zhCHS";
        window.localStorage.setItem("language", "zhCHS");
      }
      console.log(window.localStorage.getItem("language"));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 16px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button {
  user-select: none;
  width: 250px;
  margin: 30px auto 0 auto;
  line-height: 50px;
  border: 1px solid #469af5;
  height: 50px;
  color: #469af5;
  font-size: 14px;
  border-radius: 25px;
}
.button:hover {
  cursor: pointer;
  background-color: #469af5;
  border: 1px solid #469af5;
  color: #fff;
}
</style>
