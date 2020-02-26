<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isactive">
      <slot name="item-icon"></slot>
      <slot name="item-name"></slot>
    </div>
    <div v-else :style="activeStyle">
      <slot name="item-icon"></slot>
      <slot name="item-name"></slot>
    </div>
    <!-- <i class="el-icon-s-home"></i><br><span>首页</span> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  props: {
      path: String,
      activeColor: {
        type: String,
        default:'red'
      }
    },
    computed: {
      isactive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isactive ? {color:this.activeColor} : {}
      }
    },
  methods: {
    itemClick() {
     this.$router.push(this.path)
    }
  }
}
</script>
<style  scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    
   
  }
  .tab-bar-item span {
    font-size: 12px;
  }
   .tab-bar-item i {
    font-size: 20px;
    margin-top: 3px;
    /* vertical-align: middle; */
   
  }
  .active {
    color: deeppink;
    /* background: rgba(197, 174, 174, 0.5) */
  }
</style>