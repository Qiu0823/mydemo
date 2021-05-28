<template>
  <div class="container">
    <div class="fcr21">
      <oneCell :device="fcr21"></oneCell>
    </div>
    <div class="fcr22">
      <oneCell :device="fcr22"></oneCell>
    </div>
    <div class="fcr23">
      <oneCell :device="fcr23"></oneCell>
    </div>
    <div class="fcr24">
      <oneCell :device="fcr24"></oneCell>
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
      fcr21: {
        title: "1#收口机",
        status: "nomal",
      },
      fcr22: {
        title: "1#车丝机",
        status: "nomal",
      },
      fcr23: {
        title: "1#修扣黑皮扣",
        status: "nomal",
      },
      fcr24: {
        title: "1#吹水黑皮扣",
        status: "nomal",
      },
    };
  },
};
</script>

<style scoped="scoped">
div {
  width: 100%;
  height: 100%;
}
.fcr21 {
  height: 10%;
  margin-top: 7%;
}
.fcr22 {
  height: 10%;
  margin-top: 15%;
}
.fcr23 {
  height: 10%;
}
.fcr24 {
  height: 10%;
}
</style>