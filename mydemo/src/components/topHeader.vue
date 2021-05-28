<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">宝钢钢管7号线智能诊断系统</div>
      <img src="@/assets/img/logo.png" alt="">
    <!-- <div class="userMane">
      <el-dropdown>
        <span class="el-dropdown-link">
          用户管理<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户注册</el-dropdown-item>
          <el-dropdown-item>密码修改</el-dropdown-item>
          <el-dropdown-item>权限管理</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
          <el-dropdown-item disabled>登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style lang="less">

#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  img{
  width: 180px!important;
  height: 50px!important;
  position:absolute;
  right: 1vh;
  top: 7vh;
  display: block;
}
  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }

  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 60px;
  }

  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    color: #fff;
  }
  .userMane {
    width: 90px;
    position: absolute;
    right: 1vw;
    top: 6vh;
    color: #fff;
    border: 1px solid #666;
    border-radius: 5px;
    padding: 2px;
     .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  }
}
</style>
