import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import LangEn from './common/lang/en';
import LangZhCHS from './common/lang/zhCHS';

Vue.config.productionTip = false
Vue.use(VueI18n);

// const i18n = new VueI18n({   locale: 'zhCHS', // 语言标识   messages: {     en: {
//       home: {         hello: 'hello',         //...       }     }, zhCHS: {
//   home: {         hello: '你好',         //...       }     }   } }) const i18n
// = new VueI18n({   locale: 'zhCHS', // 语言标识   messages: { 'zhCHS': LangZhCHS,
// // 简体中文     'en': LangEn // 英文   }, })

function getLanguage() {
  let lang = window.localStorage.getItem('language');
  if (lang) {
    return lang; //如果本地已存在设置,就返回该语言
  } else {
    return 'zhCHS'; //没有该标识字段就设置默认语言
  }
}

const locale = getLanguage();

const i18n = new VueI18n({
  locale: locale, // 语言标识
  messages: {
    'zhCHS': require('./common/lang/zhCHS'), // 简体中文
    'en': require('./common/lang/en') // 英文
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})
