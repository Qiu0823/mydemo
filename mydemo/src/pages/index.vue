<template>
  <div id="data-view">
    <dv-full-screen-container>
<!--      <div class="main-header">
        <div class="mh-middle">设备故障诊断系统</div>
      </div> -->
			<top-header1></top-header1>


      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">

          <!-- <Left-Chart-1 />
          <Left-Chart-2 />
          <Left-Chart-3 /> -->
		  <device-info></device-info>

        </dv-border-box-3>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container">
							<el-table
								:data="tableData"
								:row-style="TableRowStyle"
								:header-cell-style="{'background-color':'#003B51','color':'white','text-align':'center'}"
								height="580"
								style="width: 100%;height: 100%;"
								class="customer-no-border-table">
								<el-table-column
									prop="date"
									label="故障名称"
									align="center"
									>
								</el-table-column>
								<el-table-column
									label="故障原因"
									width="180">
									<template slot-scope="scope">
									<p v-for="(item,i) in reason[scope.$index]" v-bind:key="i">{{item}}<el-button @click="look(scope.$index,i)" type="text" size="small">查看措施</el-button></p>
									</template>
								</el-table-column>
								<el-table-column
									prop="level"
									align="center"
									label="故障级别">
								</el-table-column>
								<el-table-column
									label="电机名称">
								</el-table-column>
								<el-table-column
									label="电机位号">
								</el-table-column>
								<el-table-column
									label="电气室">
								</el-table-column>
								<el-table-column
									label="柜号">
								</el-table-column>
								<el-table-column
									label="器件代号">
								</el-table-column>
								<el-table-column
									label="电机开关箱位号">
								</el-table-column>
								<el-table-column
									label="IP地址(掩码255.255.255.0)">
								</el-table-column>
								<el-table-column
									label="变频器型号">
								</el-table-column>
								<el-table-column
									label="操作台">
								</el-table-column>
								<el-table-column
									width="100"
									align="center"
									label="操作">
									<template slot-scope="scope">
											<el-button @click="add(scope.row,scope.$index)" type="text" size="small">新增原因</el-button>
									</template>
								</el-table-column>
								<el-table-column
									width="1"
									label="操作台">
								</el-table-column>
							</el-table>
            </dv-border-box-3>
          </div>

          <dv-border-box-4 class="rmc-bottom-container">

            <Bottom-Charts />

          </dv-border-box-4>
        </div>
      </dv-border-box-1>

    </dv-full-screen-container>
		<el-dialog
		  title="添加故障原因与措施"
		  :visible.sync="centerDialogVisible"
		  width="30%"
		  center>
			<div style="width: 70%;margin: auto;">
				<span>故障名称:</span><el-input :disabled="true" style="width: 250px;margin-left: 20px;" v-model="input" placeholder="请输入内容"></el-input>
			</div>
			<div style="width: 70%;margin: auto;margin-top: 10px!important;">
				<span>原因:</span><el-input style="width: 250px;margin-left: 47px;" type="textarea" autosize placeholder="请输入故障原因" v-model="textarea1"></el-input>
			</div>

		  <span slot="footer" class="dialog-footer">
		    <el-button type="primary" @click="submit">提交</el-button>
		  </span>
		</el-dialog>
		
		
		<el-dialog
		  title="查看故障原因与措施"
		  :visible.sync="centerDialogVisible1"
		  width="30%"
		  center>
				<el-table
				ref="multipleTable"
				:data="tableData1"
				tooltip-effect="dark"
				style="width: 100%"
				@selection-change="handleSelectionChange">
					<el-table-column
						type="selection"
						width="55">
					</el-table-column>
					<el-table-column
						type="index"
						width="50">
					</el-table-column>
					<el-table-column
					prop="measure"
						label="措施">      
					</el-table-column>
				</el-table>
				<div style="width: 100%;">
					<el-button style="margin-left: 50%;transform: translateX(-50%);margin-top: 15px;" @click="addmeasure">新增措施</el-button>
				</div>
		</el-dialog>
		
		
		<el-dialog
		  title="新增措施"
		  :visible.sync="centerDialogVisible2"
		  width="30%"
		  center>
			<el-input
			  type="textarea"
			  :rows="2"
			  placeholder="请输入内容"
			  v-model="textarea3">
			</el-input>
		  <span slot="footer" class="dialog-footer">
		    <el-button type="primary" @click="confirmAddMeasure">确 定</el-button>
		  </span>
		</el-dialog>
  </div>
</template>

<script>
// import LeftChart1 from '@/components/LeftChart1'
// import LeftChart2 from '@/components/LeftChart2'
// import LeftChart3 from '@/components/LeftChart3'
import topHeader1 from '@/components/topHeader1'
import deviceInfo from '@/sideBar/deviceInfo'


import BottomCharts from '@/components/BottomCharts'

export default {
  name: 'DataView',
  components: {
    // LeftChart1,
    // LeftChart2,
    // LeftChart3,
    BottomCharts,
		topHeader1,
		deviceInfo
  },
	data(){
		return{
		  tableData: [{
				date: '充电机伸缩机构伺服故障',
				name: '1：急停按钮被按下 <span>sss<span/>\n 2：急停回路断路 \n 3：急停回路供电异常',
				address: '1：检查急停按钮状态 \n2：检查线路\n 3：检查急停回路电源',
				level:'重故障',
				index:3
			}, {
				date: '充电机故障硬件故障',
				name: '1：上升油缸输出异常（Y201 Q3.0 1#阀台）\n 2：上限位信号异常 \n 3：液压不足',
				address: '1：检查输出信号、电磁阀工作状态 \n2：检查限位开关、线路、供电等\n 3：检查油压或油管',
				level:'轻故障',
				index:3
			}, {
				date: '充电机故障温度过高保护',
				name: '1：温度传感器异常（TT201 PIW100 1#油箱）\n 2：加热器HS101工作异常',
				address: '1：检查TT201温度计 \n2：检查加热器',
				level:'轻故障',
				index:2
			}, {
				date: '充电机通讯接收超时（5秒）',
				name: '1：急停按钮被按下\n 2：急停回路断路 \n 3：急停回路供电异常',
				address: '1：检查急停按钮状态 \n2：检查线路\n 3：检查急停回路电源',
				level:'重故障',
				index:3
			}, {
				date: '小车电量严重不足',
				name: '1：急停按钮被按下\n 2：急停回路断路 \n 3：急停回路供电异常',
				address: '1：检查急停按钮状态 \n2：检查线路\n 3：检查急停回路电源',
				level:'重故障',
				index:3
			}],
			tableData1: null,
			centerDialogVisible: false,
			centerDialogVisible1:false,
			centerDialogVisible2:false,
			input:'',
			textarea1:'',
			textarea2:'',
			textarea3:'',
			scout:null,
			reason:[['充电机伸缩机构堵转或卡死导致伺服电机报故障'],['充电机本身硬件错误'],['充电机故障输出电压错误'],['当充电机开始接收到一次PLC报文后5秒内没有收到下一条报文则报通讯故障'],['小车剩余电量不足30%时则报电量严重不足']],//保存原因			
			measures:[[['通过HMI上的伺服复位按钮来重启伸缩机构伺服电机']],[['重启操作柜','联系设备供应商']],[['重启操作柜']],[['检查操作柜内的CAN发送模块是否亮红灯','重启操作柜']],[['给小车更换备用电池']]],
			srowindex:0,//保存每一行的index
			srowi:0//保存每一行的i
		}
	},
	methods:{

		TableRowStyle({row,rowIndex}) {
			row
			let styleJson = {}
			if (rowIndex%2 === 1 ) {			
				styleJson = {
					'background-color': '#003B51',
					'color':'white'
				}
			}else{
			 styleJson = {
				'background-color': '#0A2732',
				'color':'white'
			}
			}
			return styleJson
		},
		headerRowStyle({row, column, rowIndex, columnIndex}){
			row, column, rowIndex, columnIndex
			return{
				'background-color': '#0A2732'
			}
		},
		add(s,y){			
			this.scout = y
			this.input = s.date
			this.centerDialogVisible = true
		},
		look(index,i){
			this.srowindex = index
			this.srowi = i
			let arr = []
			for(let e = 0;e < this.measures[index][i].length;e++){
				let data = {
					measure:this.measures[index][i][e]
				}
				arr.push(data)
			}
			this.tableData1 = arr
			this.centerDialogVisible1 = true
		},
		//新增原因触发的事件
		submit(){
			// this.scout.index +=1
			// this.scout.name = this.scout.name+ '\n' + this.scout.index +'：' + this.textarea1
			// this.scout.address = this.scout.address+ '\n' + this.scout.index +'：' +this.textarea2
			// this.input = ''
			// this.textarea1 = ''
			// this.textarea2 = ''
			// this.centerDialogVisible = false
			console.log(this.scout)
			this.reason[this.scout].push(this.textarea1)
			this.measures[this.scout].push([])
			this.textarea1 = ''
			this.centerDialogVisible = false
		},
		addmeasure(){
			this.centerDialogVisible2 = true
		},
		//点击确定新增按钮触发的事件
		confirmAddMeasure(){
			this.measures[this.srowindex][this.srowi].push(this.textarea3)
			this.textarea3 = ''
			this.centerDialogVisible2 = false
			let arr = []
			for(let e = 0;e < this.measures[this.srowindex][this.srowi].length;e++){
				let data = {
					measure:this.measures[this.srowindex][this.srowi][e]
				}
				arr.push(data)
			}
			this.tableData1 = arr
		}
	}
  }
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('~@/assets/img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 20px;
      color: rgb(1,134,187);

      a:visited {
        color: rgb(1,134,187);
      }
    }

    .mh-middle {
      font-size: 30px;
			margin: auto;
    }

    .mh-left, .mh-right {
      width: 450px;
    }
  }

  .main-container {
    height: calc(~"100% - 80px");

    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 65%;
    display: flex;
  }

  .rmctc-left-container {
    width: 100%;
  }

  .rmctc-right-container {
    width: 35%;
  }

  .rmc-bottom-container {
    height: 35%;
  }

  .rmctc-chart-1, .rmctc-chart-2 {
    height: 50%;
  }
	.el-table .cell{
		white-space: pre-line;
	}
	
.el-table--enable-row-hover .el-table__body tr:hover>td{
background-color: #203456 !important;
}

}
</style>
