<template>
  <div class="scon">
    <div class="container areaBorderStyle">
      <div class="area-name">测量区</div>
      <div class="doorOne">
        <!-- <img src="@/assets/img/door.png" alt="" /> -->
            <i class="iconfont icon-mendoor13"></i>
      </div>
      <div class="detect1">
        <div class="detect1-top">
          <oneCell :device="dec1"></oneCell>
        </div>
        <div class="detect1-bottom">
          <oneCell :device="dec2"></oneCell>
        </div>
      </div>
      <div class="detect2" @click="link(33)">
        <div class="detect2-onecell" v-for="item in decArr" :key="item.id">
          <span class="dv-title">{{ item.title }}</span>
          <div class="LEDbtn greenBtn"></div>
        </div>
      </div>
    </div>
    <div class="chufei">抽检台架</div>
		<div class="load1">
			<span class="iconfont icon-lu1"></span>
		</div>
    <div class="house">
      <div class="house-top">2#电气室</div>
      <div class="house-bottom">集控室</div>
    </div>
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
      dec1: {
        title: "测量点前步进梁",
        status: "nomal",
      },
      dec2: {
        title: "测量点步进梁",
        status: "nomal",
      },
      decArr: [
        {
          title: "接箍预热",
          status: "nomal",
          id: "01",
        },
        {
          title: "接箍涂漆",
          status: "nomal",
          id: "02",
        },
        {
          title: "接箍烘干",
          status: "nomal",
          id: "03",
        },
        {
          title: "色环",
          status: "nomal",
          id: "04",
        },
        {
          title: "测长称重",
          status: "nomal",
          id: "05",
        },
        {
          title: "针刻印",
          status: "nomal",
          id: "06",
        },
        {
          title: "管体喷标",
          status: "nomal",
          id: "07",
        },
        {
          title: "接箍喷印",
          status: "nomal",
          id: "08",
        },
      ],
    };
  },
	methods:{
		link(id){
			this.$emit('linkDetail',id)
		}
	}
};
</script>

<style scoped="scoped" lang='less'>
.scon {
  width: 100%;
  height: 100%;
  // display: flex;
}
.container {
  width: 40%;
  height: 100%;
  float: left;
  display: flex;
  margin-left: 16vh;
  position: relative;
  .doorOne {
    position: absolute;
    bottom: -3vh;
    right: -3vh;
    width: 2vw;
    height: 1.5vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .area-name {
    color: #2155ad;
  }
  // flex: 1.5;
}
.house {
  float: left;
  width: 40%;
  height: 83%;
  // background-color: tomato;
  position: relative;
  top: -15vh;
  left: 16vh;
  display: flex;
  flex-direction: column;
  .house-top {
    height: 30%;
    // background-color: thistle;
    border: 1px solid royalblue;
    border-bottom-color: transparent;
    text-align: center;
    line-height: 3vh;
  }
  .house-bottom {
    height: 70%;
    // background-color: rgb(223, 15, 223);
    text-align: center;
    line-height: 8vh;
    border: 1px solid royalblue;
  }
}
.detect1 {
  // margin-top: 10vh;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .detect1-top {
    height: 55%;
    border: 1px solid #203456;
    box-sizing: border-box;
    padding-top: 3vh;
    text-align: center;
  }
  .detect1-bottom {
    height: 45%;
    border: 1px solid #203456;
    box-sizing: border-box;
    padding-top: 3vh;
    text-align: center;
  }
}
.detect2 {
	cursor:pointer;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 12px !important;
  justify-content: space-between;
  .detect2-onecell {
    box-sizing: border-box;
    border-bottom: 1px solid #203456;
    display: flex;
    .LEDbtn {
      width: 13px !important;
      height: 13px !important;
    }
    .dv-title {
      width: 40%;
      text-align: right;
      // border: 1px solid red;
      padding-right: 2vh;
      padding-left: 4vh;
    }
  }
  div {
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
}
.detect11 div {
  width: 60%;
  height: 50%;
}
.load1{
	display: inline-block;
	position: relative;
	top: 3vh;
	left: 14vh;
	transform: scaleX(20);
	width: 30%;
		.iconfont{
			font-size: 36px;
			color: grey;
		}
}
.chufei {
  // flex: 1;
  border: 1px solid #203456;
  width: 30%;
  // height: 25%;
  height: 30%;
  float: right;
  text-align: center;
  padding-top: 20h;
  line-height: 4vh;
  box-sizing: border-box;
  position: relative;
  top: 12vh;
  left: -5vw;
}
</style>
