<template>
  <div class="line-container" v-if="lineNum==1">
    <div class="top">
      <div style="width:15vh">
      <one-cell :device="dv1" ></one-cell>
      </div>
      <div style="margin-left:400px;width:15vh" >
      <one-cell :device="dv2"></one-cell>
      </div>
    </div>
    <div class="center">
    <dv-decoration-6 style="width:70vw;height:10px;" />
    </div>
  </div>
  <div class="line-container" v-else-if="lineNum==2">
     <div class="top">
      <div style="width:15vh">
      <one-cell :device="dv5" ></one-cell>
      </div>
      <div style="margin-left:400px;width:15vh" >
      <one-cell :device="dv6"></one-cell>
      </div>
    </div>
    <div class="center">
    <dv-decoration-6 style="width:70vw;height:10px;" />
    </div>
  </div>
  <div class="line-container" v-else-if="lineNum==3">
      <div class="top last">
      <div style="width:15vh">
      <one-cell :device="dv8" ></one-cell>
      </div>
      <div style="margin-left:200px;width:15vh" >
      <one-cell :device="dv9"></one-cell>
      </div>
    </div>
    <div class="center last">
    <dv-decoration-6 style="width:40vw;height:10px;" />
    </div>
  </div>
</template>

<script>
import oneCell from "./oneCell";
export default {
  components: {
    oneCell,
  },
  props:['lineNum'],
  data() {
    return {
      dv1: {
        title: "3#桁架",
        status: "nomal",
      },
       dv2: {
        title: "1#桁架",
        status: "nomal",
      },
       dv3: {
        title: "1#RGV",
        status: "nomal",
      },
       dv4: {
        title: "2#RGV",
        status: "nomal",
      },
       dv5: {
        title: "4#桁架",
        status: "nomal",
      },
       dv6: {
        title: "2#桁架",
        status: "nomal",
      },
       dv7: {
        title: "3#RGV",
        status: "nomal",
      },
       dv8: {
        title: "6#桁架",
        status: "nomal",
      },
       dv9: {
        title: "7#桁架",
        status: "nomal",
      },
        dv10: {
        title: "5#桁架",
        status: "nomal",
      },
    };
  },
};
</script>

<style lang='less' scoped>
.line-container {
  width: 100%;
  height: 80%;
  position: relative;
  margin-left: 5vh;
  margin-left: 20vh;
    // border: 1px solid red;

  ::after{
     content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
  }
  .top {
    // border: 1px solid red;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 8vw;
    position: absolute;
    right: 6vh;
    top: 1vh;
    font-size: 16px;
    &.last{
        position: absolute;
      left: -2vw;
      top: 0;
      // border: 1px solid red;
       .line-text{
      position: absolute;
      left: 10vw;
      top: 0;
    }
    }
    .line-text{
      position: absolute;
      left: -30vw;
      top: 0;
    }
  }
  .bottom{
    height: 100%;
     display: flex;
    justify-content: space-between;
    margin-left: 55vw;
  }
  .center-top{
    height: 100%;
    position: absolute;
    left: -3vw;
    top: 1.5vh;
  }
  .center{
    height: 100%;
    position: absolute;
    left: -25vw;
    top: 1vh;
  }
   .center{
     &.last{
        height: 100%;
    position: absolute;
    left: -15vw;
    top: 1vh;
     }
  }
}
.line-container{
  height: 100%;
  &.lineCon3{
    height: 100%;
    .center{
      height: 100%;
        position: absolute;
        left: -29.5vw;
        top: 2vh;
        .top{
          top: -2vh;
          width: 100%;
          position: absolute;
          left: 60vh;
        }
    }
    .bottom{
      height: 100%;
         height: 100%;
     display: flex;
    justify-content: space-between;
    margin-left: 55vw;
    }
  }
}
</style>