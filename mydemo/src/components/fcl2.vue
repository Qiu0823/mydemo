<template>
  <div class="container">
    <div class="fcl21" @click="link(3)">
      <oneCell :device="fcl21"></oneCell>
    </div>
    <div class="fcl22" @click="link(7)">
      <oneCell :device="fcl22"></oneCell>
    </div>
    <div class="fcl23" @click="link(17)">
      <oneCell :device="fcl23"></oneCell>
    </div>
    <div class="fcl24" @click="link(17)">
      <oneCell :device="fcl24"></oneCell>
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
      fcl21: {
        title: "3#收口机",
        status: "nomal",
      },
      fcl22: {
        title: "3#车丝机",
        status: "nomal",
      },
      fcl23: {
        title: "3#修扣黑皮扣",
        status: "nomal",
      },
      fcl24: {
        title: "3#吹水黑皮扣",
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
  /* border: red 1px solid; */
}
.fcl21 {
  height: 10%;
  margin-top: 7%;
	cursor:pointer;
}
.fcl22 {
  height: 10%;
  margin-top: 15%;
	cursor:pointer;
}
.fcl23 {
  height: 10%;
	cursor:pointer;
}
.fcl24 {
  height: 10%;
	cursor:pointer;
}
</style>