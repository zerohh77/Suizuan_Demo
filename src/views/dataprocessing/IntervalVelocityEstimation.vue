<template>
  <div class="dashboard-editor-container">
    <el-row style="margin-bottom: 8px">
      <ToolBar />
    </el-row>
    <el-row gutter="10" style="margin-bottom: 8px">
      <el-col :span="6">
        <WorkFlow />
      </el-col>
      <el-col :span="18">
        <Plotshow_dp1 />
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 0px">
      <Console />
    </el-row>

  </div>
</template>

<script>

import WorkFlow from '@/views/datamanage/components/WorkFlow'
import Console from '@/views/datamanage/components/Console'
import ToolBar from '@/views/datamanage/components/ToolBar'
import Plotshow_dp1 from '@/views/dataprocessing/components/plotshow_dp1'

export default {
  name: 'DashboardAdmin',
  components: {
    ToolBar,
    Console,
    WorkFlow,
    Plotshow_dp1
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 8px;
  background-color: rgb(230,230,230);
  position: relative;
}
</style>
