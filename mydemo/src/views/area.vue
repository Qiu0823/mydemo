<template>
  <dv-full-screen-container>
    <div class="area-container">
      <div class="area-title">
        <dv-decoration-6 style="width: 300px; height: 30px" />
        <dv-decoration-11 style="width: 20vw; height: 6vh">
          钢管厂设备监控与诊断
        </dv-decoration-11>
        <dv-decoration-6 style="width: 300px; height: 30px" />
      </div>
      <!-- <div class="area-nav">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
      </el-tabs>
    </div> -->
      <div class="left-top-table">
        <div class="device-info">
          <div class="di-text">设备诊断表</div>
          <div class="di-table">
            <dv-scroll-board
              :config="config"
              style="width: 15vw; height: 15vh"
            />
          </div>
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
export default {
  name: "Area",
  data() {
    return {
      config: {
        data: [
          ["", "设备名", "故障数"],
          ["机械手", "行2列2", "行2列3"],
          ["收口机", "行3列2", "行3列3"],
          ["运管小车", "行4列2", "行4列3"],
        ],
        oddRowBGC: "#1f334f",
        evenRowBGC: "#1f334f",
      },
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less">
.area-nav {
  border: 1px solid red;
  color: #fff;
  font-size: 28px;
}
.area-title {
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}
.left-top-table {
  margin-top: 20px;
  padding-left: 10px;
  width: 15vw;
  height: 15vh;
  color: #fff;
  font-weight: bold;
  .di-table {
    position: relative;
    margin-top: 5px;
    width: 15vw;
    height: 12vh;
  }
  .di-table::before {
    content: "";
    width: 40px;
    height: 20px;
    border: 1px solid yellow;
    position: absolute;
    left: -1px;
    top: -1px;
  }
  .di-table::after {
    content: "";
    width: 40px;
    height: 20px;
    border: 1px solid yellow;
    position: absolute;
    right: -1px;
    bottom: -1px;
    border-left: transparent;
    border-top: transparent;
  }
}
</style>
