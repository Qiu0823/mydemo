<template>
  <div class="scroll-bar">
    <dv-scroll-board :config="config" style="width: 22vw; height: 18vh" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        header: ['时间',"设备", "重故障"],
        data: [
          ["2021.05.26  16:21:00", "内保拧接", "机器人报警"],
          ["2021.05.22  13:00:12", "内保拧接", "涂油定量伺服报警"],
          ["2021.05.20  09:30:00", "内保拧接", "涂油行进伺服报警"],
          ["2021.05.19  17:11:45", "内保拧接", "涂油旋转伺服报警"],
          ["2021.05.07  13:25:00", "外保拧接", "系统急停"],
          ["2021.04.26  08:00:00", "外保拧接", "机器人错误报警"],
          ["2021.04.13  14:45:20", "接箍上料", "系统故障"],
          ["2021.04.11  03:20:00", "接箍上料", "安全光幕"],
          ["2021.03.24  23:00:00", "接箍上料", "3D相机错误"],
          // ["带锯", "液压泵故障"],
          // ["带锯", "断带保护"],
          // ["带锯", "远程站电磁阀报警"],
          // ["带锯", "远程站电源报警"],
          // ["带锯", "操作台电源报警"],
          // ["液压油", "油箱液位高位"],
          // ["液压油", "供油泵报警"],
        ],
        // index: true,
        columnWidth: [160,80, 200],
        align: ["center"],
        headerBGC: "#213454",
        oddRowBGC: "#266090",
        evenRowBGC: "#0096D6",
        rowNum: 5,
      },
    };
  },
};
</script>
<style scoped lang='less'>
.dv-scroll-board {
  height: 18.5vh !important;
  width: 28vw !important;
}
.scroll-bar {
  width: 100%;
  padding: 0 1vw;
  height: 100%;
  margin-left: 10.5vw;
  overflow: hidden;
  box-sizing: border-box;
}
</style>