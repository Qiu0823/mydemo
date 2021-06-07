<template>
  <div class="container">
    <div class="gnl1">
      <oneCell :device="gnl1"></oneCell>
    </div>
    <div class="gnl2" @click="link(21)">
      <oneCell :device="gnl2" ></oneCell>
    </div>
			<div class="gnl3" @click="link(23)">
			  <oneCell :device="gnl3"></oneCell>
			</div>
    <div class="gnl5">
      <oneCell :device="gnl5"></oneCell>
    </div>
    <div class="gnl4" @click="link(25)">
      <oneCell :device="gnl4"></oneCell>
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
      gnl1: {
        title: "1#通径机",
        status: "nomal",
      },
      gnl2: {
        title: "1#抛丸机",
        status: "nomal",
      },
      gnl3: {
        title: "1#三角标",
        status: "nomal",
      },
      gnl4: {
        title: "外保拧接",
        status: "nomal",
      },
      gnl5: {
        title: "涂油拧接",
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

<style scoped="scoped">
div {
  width: 100%;
  height: 100%;
}
.gnl1 {
  height: 10%;
	cursor:pointer;
}
.gnl2 {
  height: 10%;
	cursor:pointer;
}
.gnl3 {
  height: 10%;
  margin-top: 10%;
	cursor:pointer;
}
.gnl4 {
  height: 10%;
	cursor:pointer;
}
.gnl5 {
  height: 10%;
	cursor:pointer;
}
</style>
