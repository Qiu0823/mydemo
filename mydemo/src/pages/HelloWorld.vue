<template>
  <dv-full-screen-container v-title data-title="宝钢钢管7号线智能诊断系统">
    <div class="main-header">
      <top-header />
    </div>
    <div class="data-view">
      <div class="my-nav">
        <sidebar-nav />
      </div>
      <div class="topDeviceArea">
        <div class="tda-left">
          <div class="table-info">
            <div class="table-one" style="font-size: 12px">产线信息</div>
            <div class="table-two">
              <div style="margin-right: 1vw">时间：</div>
              <div style="margin-right: 1vw">合同号：</div>
              <div>班次：</div>
            </div>
            <div class="table-three">
              <div style="margin-right: 1vw">规格：</div>
              <div style="margin-right: 1vw">钢级：</div>
              <div>厚度：</div>
            </div>
          </div>
        </div>
        <div class="tda-right">
          <!-- 上料区 -->
          <div class="shagnLiaoArea arrowBottom1">
            <area-one-com :deviceListName="deviceList1Name"/>
          </div>
        </div>
      </div>
      <div class="lineDevice">
        <line-device :lineNum="1"></line-device>
        <div class="carCom">
          <roll-car :carNum="1" :left="1200"></roll-car>
        </div>
      </div>
      <div class="second-container">
        <!-- 返修区 -->
        <div class="second-container-left areaBorderStyle">
          <area-one-com :deviceListName="deviceList9Name" />
        </div>
        <!-- 车丝区 -->
        <div class="second-container-right areaBorderStyle">
          <div class="doorOne">
            <!-- <img src="@/assets/img/door.png" alt="" /> -->
            <i class="iconfont icon-mendoor13"></i>
          </div>
          <div class="doorTwo">
            <!-- <img src="@/assets/img/door.png" alt="" /> -->
            <i class="iconfont icon-mendoor13"></i>
          </div>
          <div class="area-name">车丝区域</div>
          <div class="scr-left">
            <fcl1 @linkDetail="linkDetail" style="width: 27%"></fcl1>
            <fc @linkDetail="linkDetail" style="width: 45%"></fc>
            <fcl2 @linkDetail="linkDetail" style="width: 28%">></fcl2>
          </div>
          <div class="scr-right">
            <fcr1 @linkDetail="linkDetail" style="width: 27%"></fcr1>
            <fc1 @linkDetail="linkDetail" style="width: 46%"></fc1>
            <fcr2 @linkDetail="linkDetail" style="width: 28%"></fcr2>
          </div>
        </div>
      </div>
      <div class="lineDevice">
        <line-device :lineNum="2"></line-device>
        <div class="carCom">
          <roll-car :carNum="2" :left="1200"></roll-car>
        </div>
      </div>
      <div class="third-container">
        <div class="third-container-left">
          <ScrollBar></ScrollBar>
        </div>
        <!-- 管拧区 -->
        <div class="third-container-right areaBorderStyle arrowBottom3">
          <div class="area-name">管拧区域</div>
					<div class="square" @click="linkDetail(29)" >分钢仪</div>
          <div class="tcr-left">
            <gnleft @linkDetail="linkDetail"></gnleft>
          </div>
          <div class="tcr-center">
            <gncenter @linkDetail="linkDetail"></gncenter>
          </div>
          <div class="tcr-right">
            <gnright @linkDetail="linkDetail"></gnright>
          </div>
        </div>
      </div>
      <div class="area-com-container">
        <div class="area-bottom">
          <areabottom @linkDetail="linkDetail"></areabottom>
        </div>
      </div>
      <div class="detect">
        <detect @linkDetail="linkDetail"></detect>
      </div>
      <div class="lineDevice" style="margin-left: 28vh">
        <line-device :lineNum="3"></line-device>
        <div class="carCom last">
          <roll-car :carNum="3" :left="400"></roll-car>
        </div>
      </div>
      <!-- 打包区 -->
      <div class="bagBotDeviceArea areaBorderStyle">
        <!-- <area-one-com :deviceListName="deviceList8Name"> </area-one-com> -->
        <div class="da-container">
          <div class="square">出废区</div>
          <div class="area-name">打包区</div>
          <div class="da-container-left">成型区</div>
          <div class="da-container-center" @click="linkDetail(34)">
            <div class="dv-title">打捆机</div>
            <div
              class="LEDbtn greenBtn"
              style="position: relative; right: -20vh; top: -2vh"
            ></div>
          </div>
          <div class="da-container-right">成捆移送</div>
        </div>
      </div>
    </div>
    <div class="tableCon">
      <div class="fir-container">
      </div>
      <div class="sec-container"></div>
    </div>
  </dv-full-screen-container>
</template>

<script>
import TopHeader from "@/components/topHeader";
import AreaOneCom from "@/components/AreaOneCom";
import lineDevice from "@/components/lineDevice";
import RollCar from "@/components/rollCar";
import fc from "@/components/fc";
import fcl1 from "@/components/fcl1";
import fcr1 from "@/components/fcr1";
import fcl2 from "@/components/fcl2";
import fcr2 from "@/components/fcr2";
import gnleft from "@/components/gnleft";
import gncenter from "@/components/gncenter";
import gnright from "@/components/gnright";
import areabottom from "@/components/areabottom";
import detect from "@/components/detect";
import fc1 from "@/components/fc1";
import ScrollBar from "@/components/scrollBar";
import SidebarNav from "@/components/sidebarNav";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      showSideNav: false,
      timer: null,
      deviceList1Name: "上料区域",
      deviceList8Name: "打包区域",
      deviceList9Name: "返修区域",
      deviceList1: [
        {
          title: "1#收口机",
          status: "nomal",
        },
        {
          title: "2#收口机",
          status: "nomal",
        },
      ],
    };
  },
  methods: {
		//点击跳转传参
		linkDetail(id){
			this.$router.push({
				path:'/index',
				query:{'id':id}
			})
		},
    showSideNavMeth() {
      this.showSideNav = !this.showSideNav;
    },
  },
  components: {
    TopHeader,
    lineDevice,
    RollCar,
    fcl1,
    fcl2,
    fcr1,
    fcr2,
    fc,
    gnleft,
    gncenter,
    gnright,
    fc1,
    ScrollBar,
    // ScrollBar,
    AreaOneCom,
    SidebarNav,
    areabottom,
    detect,
    // oneCell
  },
  mounted() {
    //   clearInterval(this.timer)
    //   this.timer = setInterval(()=>{
    //   this.$router.push({
    //    path:'/detail'
    //  })
    // },1000*120)
  },
  beforeDestroy() {
    // clearInterval(this.timer)
  },
};
</script>

<style scoped lang='less'>
.data-view {
  color: #fff;
  width: 80%;
  height: 100%;
  overflow: visible;
  .da-container {
    display: flex;
    width: 100%;
    align-items: flex-start;
    height: 100%;
    position: relative;
    .square {
      width: 26%;
      height: 50%;
      left: 50%;
      transform: translateX(-40%);
      top: -4vh;
      position: absolute;
			z-index: 2;
      border: 1px solid #203456;

    }
    .da-container-left,
    .da-container-right {
      flex: 2;
      height: 100%;
      text-align: center;
      border-right: 1px solid #203456;
    }
    .da-container-center {
      flex: 1;
      height: 100%;
      border-right: 1px solid #203456;
    }
    .da-container-right {
      flex: 1;
      height: 100%;
      text-align: center;
    }
    .area-name {
      position: absolute;
      top: -1vh;
      color: #2155ad;
    }
  }
  .my-nav {
    width: 7vw;
    height: 70vh;
    position: absolute;
    left: 1.5vw;
    top: 9vh;
  }
  .my-top {
    position: relative;
    width: 50%;
    box-sizing: border-box;
    display: flex;
    height: 20%;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 3vh;
    margin-left: 15vw;
  }
  .topDeviceArea {
    width: 96%;
    height: 5%;
    display: flex;
    margin-left: 20vh;
    box-sizing: border-box;
    .tda-left {
      width: 25%;
      height: 100%;
      border: 1px solid #203456;
      display: flex;
      flex-direction: column;
      border: 1px solid #203456;
      .table-info {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: steelblue;
        background-color: rgb(6, 63, 110);
        box-sizing: border-box;
        color: #fff;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .table-one {
          background-color: cornflowerblue;
          width: 100%;
          font-size: 18px;
          font-weight: bold;
        }
        div {
          display: flex;
          justify-content: space-around;
        }
      }
    }
    .tda-right {
      height: 100%;
      width: 80%;
      box-sizing: border-box;
      padding-right: 4vw;
      .shagnLiaoArea {
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    }
  }
  .lineDevice {
    height: 3%;
    margin-bottom: 1vh;
  }
  .second-container {
    width: 90.6%;
    height: 18%;
    display: flex;
    margin-left: 20vh;
    .second-container-left {
      width: 20%;
      height: 100%;
      box-sizing: border-box;
    }
    .second-container-right {
      width: 82%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      position: relative;
      .doorOne {
        position: absolute;
        left: 28vw;
        bottom: -1.5vh;
        width: 2vw;
        height: 1.5vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .doorTwo {
        position: absolute;
        left: 28vw;
        top: -1vh;
        width: 2vw;
        height: 1.5vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .area-name {
        position: absolute;
        color: #2155ad;
      }
      .scr-left {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: space-between;
      }
      .scr-right {
        flex: 1;
        height: 100%;
        display: flex;
      }
    }
  }
  .third-container {
    height: 18%;
    width: 88%;
    margin-left: 25vh;
    .third-container-left {
      width: 57%;
      height: 100%;
      float: left;
      display: flex;
      .tcl-left {
        flex: 1;
        height: 100%;
      }
      .tcl-right {
        flex: 1;
      }
    }
    .third-container-right {
      float: left;
      width: 42%;
      height: 100%;
      display: flex;
      padding-top: 1vh;
      position: relative;
      .square {
        width: 2.5vw;
        height: 3vh;
        border: 1px solid #203456;
        position: absolute;
        right: 0;
        bottom: -3vh;
        line-height: 3vh;
				z-index: 2;
				cursor:pointer;
      }
      .area-name {
        position: absolute;
        color: #2155ad;
        bottom: 0;
      }
      .tcr-left {
        width: 28%;
      }
      .tcr-center {
        width: 44%;
        font-size: 12px !important;
      }
      .tcr-right {
        width: 28%;
      }
    }
  }
  .area-com-container {
    margin-top: 1vh;
    width: 100%;
    height: 17%;
    margin-left: 3.5vw;
    position: relative;
    // margin-bottom: 8vh;
    // float: right;
    // border: 1px solid #203456;
    ::after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    .area-bottom {
      height: 100%;
      width: 73%;
      float: right;
      // border: 1px solid #203456;
    }
  }
  .detect {
    width: 65%;
    height: 16%;
    margin-left: 28.5vh;
    position: relative;
    // border: 1px solid yellow;
  }
  .lineDevice {
    width: 90%;
    height: 3%;
    position: relative;
    .carCom {
      // border: 1px solid yellow;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 9vw;
      top: 0vh;
      &.last {
        width: 60%;
      }
    }
    .carcom3 {
      position: relative;
      top: -3vh;
    }
  }
  .lineDeviceContainer {
    width: 90%;
    height: 2%;
    position: relative;
    .carCom {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 9vw;
      top: 1vh;
      .carcom3 {
        position: relative;
        top: -3vh;
      }
    }
  }
  .bagBotDeviceArea {
    width: 73%;
    height: 5%;
    margin-left: 44vh;
    margin-right: 5vw;
    position: relative;
    // display: flex;
    box-sizing: border-box;
    // border: 1px solid #203455;
    .area-name {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
.tableCon {
  width: 17%;
  height: 100%;
  // border: 1px solid red;
  position: absolute;
  top: 0;
  right: 0;
  .fir-container {
    height: 25%;
    width: 100%;
    margin-top: 17vh;
  }
  .sec-container {
    height: 25%;
    width: 100%;
    margin-top: -3vh;
  }
}
</style>
