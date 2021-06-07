<template>
  <div class="area-container">
    <div v-if="deviceListName == '上料区域'" class="shangliao">
      <div class="shangliao-left">
				<div style="flex: 1;cursor:pointer;" @click="linkDetail(10)">
					<one-cell :device="shang01"></one-cell>
				</div>
				<div style="flex: 1;cursor:pointer;" @click="linkDetail(11)">
					 <one-cell :device="shang02"></one-cell>
				</div>
      </div>
      <div class="shangliao-center">1#电气室</div>
      <div class="shangliao-right areaBorderStyle">
        <div class="area-name">{{ deviceListName }}</div>
        <div class="shaoliao-right-left" style="cursor:pointer;" @click="linkDetail(35)">
          <one-cell :device="shang03"></one-cell>
        </div>
        <div class="shangliao-right-center">
          <one-cell :device="shang04"></one-cell>
          <one-cell :device="shang05"></one-cell>
        </div>
        <div class="shangliao-right-right"  @click="linkDetail(36)">
          <one-cell :device="shang06"></one-cell>
        </div>
      </div>
    </div>
    <template v-else-if="deviceListName == '返修区域'">

      <div class="area-name">{{ deviceListName }}</div>
      <div class="returnFix">
				<div class="load2">
					<span class="iconfont icon-lu"></span>
					<span class="iconfont icon-lu"></span>
					<span class="iconfont icon-lu"></span>
					<span class="iconfont icon-lu"></span>
					<span class="iconfont icon-lu"></span>
					<span class="iconfont icon-lu"></span>
					<span class="iconfont icon-lu"></span>
					<span class="iconfont icon-lu"></span>
				</div>
        <div class="square">
          返修台架
        </div>
        <div class="doorOne">
          <!-- <img src="@/assets/img/door.png" alt=""> -->
            <i class="iconfont icon-mendoor13"></i>
        </div>
        <div class="doorTwo">
          <!-- <img src="@/assets/img/door.png" alt=""> -->
            <i class="iconfont icon-mendoor13"></i>
        </div>
        <div class="returnFix-top" @click="linkDetail(20)">
          <one-cell :device="returnFix01"></one-cell>
        </div>
        <div class="returnFix-center" @click="linkDetail(19)">
          <one-cell :device="returnFix02"></one-cell>
        </div>
        <div class="returnFix-bottom">
          <one-cell :device="returnFix03"></one-cell>
        </div>
        <div class="lineFive">
       <dv-decoration-6 style="width:13vw;height:10px;" />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import oneCell from "./oneCell";
export default {
  components: {
    oneCell,
  },
  data() {
    return {
      dvv:{
        title:'成型区',
        status: "nomal",
      },
      shang01: {
        title: "乳化液",
        status: "nomal",
      },
      shang02: {
        title: "液压油",
        status: "nomal",
      },
      shang03: {
        title: "1#喷码机",
        status: "nomal",
      },
      shang04: {
        title: "上料辊式链",
        status: "nomal",
      },
      shang05: {
        title: "喷码步进梁",
        status: "nomal",
      },
      shang06: {
        title: "2#喷码机",
        status: "nomal",
      },
      returnFix01: {
        title: "2#带锯",
        status: "nomal",
      },
      returnFix02: {
        title: "1#带锯",
        status: "nomal",
      },
      returnFix03: {
        title: "5#桁架",
        status: "nomal",
      },
      dv: {
        title: "打捆机",
        status: "nomal",
      },
    };
  },
	methods:{
		linkDetail(id){
			this.$router.push({
				path:'/index',
				query:{'id':id}
			})
		},
	},
  props: ["deviceListName"],
};
</script>
<style scoped lang='less'>
.area-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
  height: 100%;
  ::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .shangliao {
    width: 100%;
    height: 100%;
    display: flex;
    .shangliao-left {
      width: 28%;
      height: 40%;
      box-sizing: border-box;
      display: flex;
      margin-top: 2vh;
    }
    .shangliao-center{
      width: 27%;
      height: 100%;
      text-align: center;
      line-height: 5vh;
      border: 1px solid royalblue;
      margin-right: 1.5vh;
    }
    .shangliao-right {
      width:43%;
      height: 100%;
      display: flex;
      position: relative;
      .area-name{
        text-align: right;
        position: absolute;
        right: 0;
      }
      .shangliao-right-right {
				cursor:pointer;
        margin-top: 1vw;
      }
      div {
        flex: 1;
      }
      .shangliao-right-center {
        height: 100%;
        display: flex;
        flex-direction: column;
        border-left: 1px solid #203456;
        border-right: 1px solid #203456;
        div {
          border-bottom: 1px solid #203456;
        }
      }
    }
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 90%;
    margin-left: 4vw;
    justify-content: space-around;
    .fc-left {
      flex: 1;
      .dv-title {
        position: relative;
        top: 115px;
        left: -40px;
      }
      .dv-b {
        position: relative;
        top: 93px;
        right: -133px;
      }
    }
    .fc-right {
      flex: 4;
      div {
        flex: 1;
      }
    }
  }
  .item {
    width: 15vw;
    height: 40%;
    padding-top: 0.5vh;
    padding-bottom: 1vh;
    box-sizing: border-box;
    border: 1px solid #203456;

    .item-bottom {
      display: flex;
      margin-top: 1vh;
    }
  }
  .area-name {
    color: #5c7cbb;
    position: absolute;
    left: 0;
    top: 0;
  }
	.load2{
		width: 3vh;
		height: 100%;
		display: inline-block;
		position: relative;
		right: -22.5vh;
		top:-2vh;

		.iconfont{
			font-size: 16px;
			display: inline-block;
			color: grey;
			transform: scaleY(3)translateY(50%);
		}
	}
  .returnFix {
    padding-top: 2vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
    .doorOne{
      position: absolute;
      right: 15px;
      top: -1vh;
      width: 2vw;
      height: 1.5vw;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .doorTwo{
      position: absolute;
      right: 15px;
      bottom: .5vh;
      width: 2vw;
      height: 1.5vw;
       img{
        width: 100%;
        height: 100%;
      }
    }
    .square{
      width: 99%;
      height: 3vh;
      border: 1px solid #203456;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -3vh;
      line-height: 3vh;
    }
    .returnFix-top{
        width: 100%;
      position: absolute;
      right: 0;
      top: 4vh;
			cursor:pointer;
    
    }
      .returnFix-center{
        width: 100%;
          position: absolute;
          top: 8vh;
          left: -11vh;
          width: 100%;
					cursor:pointer;
    }
      .returnFix-bottom{
        width: 100%;
        position: absolute;
        bottom: 4vh;
        right: 0;
        width: 100%;
    }
    .lineFive{
      position: absolute;
      bottom: 3vh;
      left: 0vh;
    }
    ::after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
}
</style>