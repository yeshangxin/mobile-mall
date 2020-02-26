<template>
  <div id="tab-bar">
    <slot>
      <tabbar-item path="/home" activeColor="deeppink">
        <Icon type="ios-home" slot="item-icon"/><br>
        <div slot="item-name">首页</div>
      </tabbar-item>
    </slot>
    <slot>
      <tabbar-item path="/category" activeColor="deeppink">
        <Icon type="md-grid"  slot="item-icon"/><br>
        <div slot="item-name">分类</div>
      </tabbar-item>
    </slot>
    <slot>
      <tabbar-item path="/discover" activeColor="deeppink">
        <Icon type="md-disc"  slot="item-icon"/><br>
        <div slot="item-name">发现</div>
      </tabbar-item>
    </slot>
     <slot>
      <tabbar-item path="/cart" activeColor="deeppink">
        <Icon type="md-cart"  slot="item-icon"/><br>
        <div slot="item-name">购物车</div>
      </tabbar-item>
    </slot>
    <slot>
      <tabbar-item path="/profile" activeColor="deeppink">
        <Icon type="md-contact"  slot="item-icon"/><br>
        <div slot="item-name">我的</div>
      </tabbar-item>
    </slot>
  </div>
</template>

<script>
import TabbarItem from './TabbarItem'
export default {
  components: {
    TabbarItem
  }
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(255,255,255,.1)
  }
</style>
