<template>
  <div class="container">
    <div class="b1">
      <div class="dv-title">烘干区</div>
      <div class="b11">
        <one-cell :device="arb6"></one-cell>
      </div>
      <div class="dryMachine areaBorderStyle">
        <one-cell :device="arb7"></one-cell>
				<div @click="link(32)" style="cursor:pointer;">
					<one-cell :device="arb8" class="dry-two"></one-cell>
				</div>
      </div>
      <div class="b21">
        <one-cell :device="arb3"></one-cell>
        <div class="b21-bottom"></div>
      </div>
    </div>
    <div class="b2">
      <div class="b22 areaBorderStyle" @click="link(31)">
        <div class="dv-title">涂层区</div>
        <one-cell :device="arb4"></one-cell>
      </div>
      <div class="b23">
        <one-cell :device="arb2"></one-cell>
        <div class="b23-bottom"></div>
      </div>
      <div class="b24 areaBorderStyle" @click="link(30)">
        <div class="dv-title">退磁</div>
        <one-cell :device="arb5"></one-cell>
      </div>
      <div class="b25">
        <one-cell :device="arb1"></one-cell>
        <div class="b25-bottom">管拧出废台架</div>
      </div>
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
      arb1: {
        title: "涂油线纵向链1",
        status: "nomal",
      },
      arb2: {
        title: "涂油线纵向链2",
        status: "nomal",
      },
      arb3: {
        title: "涂油线纵向链3",
        status: "nomal",
      },
      arb4: {
        title: "涂层",
        status: "nomal",
      },
      arb5: {
        title: "退磁",
        status: "nomal",
      },
      arb6: {
        title: "斯惠顿",
        status: "nomal",
      },
      arb7: {
        title: "烘干节距链",
        status: "nomal",
      },
      arb8: {
        title: "烘干机",
        status: "nomal",
      },
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
.container {
  width: 100%;
  height: 100%;
  .b2 {
    width: 66.5vh;
    float: right;
    box-sizing: border-box;
    height: 53%;
  }
}
.b1 {
  width: 36.5vh;
  float: left;
  height: 80%;
  margin-top: 3.5vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  .dv-title {
    position: absolute;
    left: 0;
    top: 0;
    color: #1b5ccc;
  }
  // padding-left: 1vh;
}
.b11 {
  width: 90%;
  height: 20%;
}
.dryMachine {
  position: relative;
  height: 78%;
  padding-top: 2vh;
  .dry-two {
    position: absolute;
    top: 5vh;
    left: -16vh;
  }
}
.b12 {
  width: 90%;
  height: 100%;
  // border: #203456 1px solid;
  position: relative;
  top: -2vh;
  padding-top: 3vh;
  box-sizing: border-box;
}
.b13 {
  width: 90%;
  height: 100%;
}
.b21 {
  position: absolute;
  right: -4vh;
  top: -3.5vh;
  .b21-bottom {
    position: absolute;
    width: 18vh;
    height: 5vh;
    padding-top: 2vh;
    margin-top: 1vh;
  }
  .b21-bottom::before {
    content: "";
    position: absolute;
    left: -7vh;
    top: -16px;
    width: 100%;
    height: 1em;
    background: linear-gradient(
        135deg,
        transparent,
        transparent 45%,
        #6591e2,
        transparent 55%,
        transparent 100%
      ),
      linear-gradient(
        45deg,
        transparent,
        transparent 45%,
        #7964e0,
        transparent 55%,
        transparent 100%
      );
    background-size: 1em 1em;
    background-repeat: repeat-x, repeat-x;
  }
}
.b22 {
  width: 20%;
  height: 35%;
  float: left;
  padding-top: 3vh;
  position: relative;
	cursor:pointer;
  .dv-title {
    position: absolute;
    top: 0vh;
    color: #2155ad;
  }
}
.b23 {
  width: 26%;
  height: 20%;
  float: left;
  position: relative;
  .b23-bottom {
    position: absolute;
    width: 18vh;
    height: 5vh;
    padding-top: 2vh;
    margin-top: 1vh;
  }
  .b23-bottom::before {
    content: "";
    position: absolute;
    left: 0;
    top: -10px;
    width: 100%;
    height: 1em;
    background: linear-gradient(
        135deg,
        transparent,
        transparent 45%,
        #6591e2,
        transparent 55%,
        transparent 100%
      ),
      linear-gradient(
        45deg,
        transparent,
        transparent 45%,
        #7964e0,
        transparent 55%,
        transparent 100%
      );
    background-size: 1em 1em;
    background-repeat: repeat-x, repeat-x;
  }
}
.b24 {
  width: 20%;
  height: 35%;
  float: left;
  padding-top: 3vh;
  position: relative;
	cursor:pointer;
  .dv-title {
    position: absolute;
    top: 0vh;
    color: #2155ad;
  }
}
.b25 {
  width: 26%;
  height: 20%;
  float: left;
  position: relative;
  .b25-bottom {
    position: absolute;
    border: 1px solid #203456;
    width: 18vh;
    height: 5vh;
    padding-top: 2vh;
    margin-top: 1vh;
  }
  .b25-bottom::before {
    content: "";
    position: absolute;
    left: 0;
    top: -10px;
    width: 100%;
    height: 1em;
    background: linear-gradient(
        135deg,
        transparent,
        transparent 45%,
        #6591e2,
        transparent 55%,
        transparent 100%
      ),
      linear-gradient(
        45deg,
        transparent,
        transparent 45%,
        #7964e0,
        transparent 55%,
        transparent 100%
      );
    background-size: 1em 1em;
    background-repeat: repeat-x, repeat-x;
  }
}
.b26 {
  width: 30%;
  height: 20%;
  float: right;
  margin-top: 1vw;
}
</style>
