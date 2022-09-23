<template>
  <div>
    <div style="text-align: right; margin: 0">
      <el-button @click="toggleShopShow">close/open</el-button>
    </div>
    <div style="background-color: #FFFFCC;height: 562px;alignment: center;margin: auto" v-show="shopShow">
      PlotShow
      <div style="align-content: center;margin-left: 75px">
        <el-image style="width: 1100px;height: 500px;" :src="require('@/assets/images/demo1.jpg')"></el-image>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PlotshowDp1',
  data() {
    return {
      shopShow: true
    }
  },
  methods: {
    toggleShopShow() {
      this.shopShow = !this.shopShow
    }
  }
}
</script>

<style scoped>

</style>
