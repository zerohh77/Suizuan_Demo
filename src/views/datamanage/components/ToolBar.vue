<template>
  <div class="btn_layout">
    <label style="margin-left: 10px">  </label>
<!--    <el-button size="small" class="btnCss">开始</el-button>-->
    <el-button size="small" class="btnCss">运行</el-button>
    <el-button size="small" class="btnCss">终止</el-button>
    <el-button size="small" class="btnCss">...</el-button>
  </div>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style scoped>
.btn_layout{
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #c7c5c5;
  height: 50px
}
.btnCss{
  font-size: small;
}

</style>
