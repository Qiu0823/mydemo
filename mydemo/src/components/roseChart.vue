<template>
  <div id="rose-chart">
    <div class="rose-chart-title">设备总贸</div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: 'RoseChart',
  data () {
    return {
      option: {}
    }
  },
  methods: {
    createData () {
      const { randomExtend } = this

      this.option = {
        series: [
          {
            type: 'pie',
            radius: '50%',
            roseSort: false,
            data: [
              // { name: '路基', value: randomExtend(40, 70) },
              { name: '故障设施', value: randomExtend(20, 30) },
              { name: '日常养护', value: randomExtend(10, 50) },
              { name: '防护措施', value: randomExtend(5, 20) },
              { name: '整改率', value: randomExtend(40, 50) },
              { name: '计日工', value: randomExtend(20, 35) },
            ],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              formatter: '{name} {percent}%',
              labelLineEndLength: 20,
              style: {
                fill: '#fff'
              },
              labelLineStyle: {
                stroke: '#fff'
              }
            },
            roseType: true
          }
        ],
        color: ['#da2f00', '#fa3600', '#ff4411', '#ff724c', '#541200', '#801b00', '#a02200', '#5d1400', '#b72700']
      }
    },
    randomExtend (minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      }
    }
  },
  mounted () {
    const { createData } = this

    createData()

    setInterval(createData, 30000)
  }
}
</script>

<style lang="less">
#rose-chart {
  width: 15vw;
  height: 20vh;
  text-align: center;
  // border: 1px solid yellow;
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  justify-content: center;
  // margin-left: 20px;

  .rose-chart-title {
    // justify-items: center;
    justify-content: center;
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .dv-charts-container {
    height: calc(~"100% - 50px");
    width: 100%;
    font-size: 30px;
  }
}
</style>
