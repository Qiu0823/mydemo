<template>
  <div class="oneCell">
    <div class="dv-title">{{device.title}}</div>
    <div class="LEDbtn greenBtn"></div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:['device']
}
</script>
<style scoped lang='less'>
.oneCell {
  height: 100%;
  width: 100%;
    // width: 6vw;
    padding-right: 0;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  .dv-title{
      margin-right: 1vh;
      width: 70%;
      height: 2.5vh;
      box-sizing: border-box;
      z-index: 999;
      font-size: 14px;
      text-align: right;
  }
  :not(.div-title){
      // height: 2vh;
      line-height: 2.5vh;
  }

}
</style>