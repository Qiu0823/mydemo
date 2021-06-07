<template>
  <div class="device-info-con areaBorderStyle">
      <div class="device-info-title">
          <h3>设备信息</h3>
          <div>设备名称：1#RGV小车</div>
          <div>设备厂家：上海西重所</div>
      </div>
      <div class="device-status">
        <h3>设备状态</h3>
        <div class="device-status-itemList">
            <div class="dsi-item" v-for="(item,index) in itemList" :key="index">
                <div class="text">{{item}}</div>
                <div class="LEDbtn greenBtn"></div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            itemList:[
                '小车心跳','操作台紧停','操作台本地','操作台远程','操作台手动','操作台自动','充电机伸缩机构','操作台与充电机','充电机检测到小车','小车有料','小车完全停止'
            ]
        }
    },
}
</script>

<style lang='less' scoped>
    .device-info-con{
        // border: 1px solid red;
        height: 40vw;
        display: flex;
        flex-direction: column;
        .device-info-title{
        // border: 1px solid green;
            height: 20%;
            width: 100%;
            padding-left: 1vw;
            h3,div{
                text-align: left;
            }
            div{
                margin-left: 1vw;
                font-size: 20px;
                margin-bottom: 1vw;
            }
            margin-bottom: 2vw;
        }
        .device-status{
            height: 67%;
            padding-left: 1vw;
            box-sizing: border-box;
            h3{
                text-align: left;
            }
        }
        .device-status-itemList{
            width: 100%;
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-around;
            padding-left: 2vh;
            .dsi-item{
                display: flex;
                .text{
                    width: 8vw;
                    text-align: left;
                }
            }
        }
    }
</style>