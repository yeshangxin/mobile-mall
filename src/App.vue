<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/Tabbar/tabbar'
import {request} from './network/request'
export default {
  name: 'App',
  components:{
    TabBar,
  },
  created() {
    request({
      method:"post",
      url:"/topicList",
      data:{
        name
      } 
    }).then(res => {
      console.log(res.data)
    }).catch(err => {

    })
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>
