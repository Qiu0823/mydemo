<template>
	<div id="data-view">
		<dv-full-screen-container>
			<!--      <div class="main-header">
        <div class="mh-middle">设备故障诊断系统</div>
      </div> -->
			<top-header></top-header>
			<router-link to="/">
				<img src="../assets/img/home.png" class="img1" />
			</router-link>

			<dv-border-box-1 class="main-container">
				<div class="left-container">
					<dv-border-box-3 class="left-chart-container">
						<device-info style="width: 85%;margin:30px auto"></device-info>
					</dv-border-box-3>
				</div>


				<div class="right-main-container">
					<div class="rmc-top-container">
						<dv-border-box-3 class="rmctc-left-container">
							<div class="rmctc-left-table1">
								<div style="width: 100%;height: 25px;text-align: center;">待处理故障</div>
								<el-table :data="pendingError" :row-style="TableRowStyle"
									:header-cell-style="{'background-color':'#003B51','color':'white','text-align':'center'}"
									height="320" style="width: 100%;height: 100%;" class="customer-no-border-table">
									<el-table-column prop="fault" label="故障名称" align="center">
									</el-table-column>
									<el-table-column label="故障原因" width="180">
										<template slot-scope="scope">
											<p v-for="(item,i) in pendingError[scope.$index].reasonVOList" v-bind:key="i">{{i+1}}: {{item.reason}}</p>
										</template>
									</el-table-column>
									<el-table-column prop="faultType" align="center" label="故障级别">
									</el-table-column>
									<el-table-column prop="occurTime" align="center" label="故障发生时间">
									</el-table-column>
									<el-table-column align="center" label="操作">
										<template slot-scope="scope">
										<el-button @click="showDialog3" type="text" size="small">查看电机信息</el-button>
										<br />
										<el-button @click="showDialog4(scope.row,scope.$index)" type="text" size="small">查看措施</el-button>
										<br />
										<el-button @click="showDialog6" type="text" size="small">查看历史故障</el-button>
										</template>
									</el-table-column>
								</el-table>
							</div>
							<div class="rmctc-left-table2">
								<div style="width: 100%;height: 25px;text-align: center;">已处理故障</div>

								<el-table :data="handledError" :row-style="TableRowStyle"
									:header-cell-style="{'background-color':'#003B51','color':'white','text-align':'center'}"
									height="320" style="width: 100%;height: 100%;" class="customer-no-border-table">
									<el-table-column prop="fault" label="故障名称" align="center">
									</el-table-column>
									
									<el-table-column label="故障原因" width="180">
										<template slot-scope="scope">
										<p v-for="(item,i) in handledError[scope.$index].reasonVOList" v-bind:key="i" >{{i+1}}: {{item.reason}}</p>
										</template>
									</el-table-column>
									<el-table-column prop="faultType" align="center" label="故障措施">
										<template slot-scope="scope">
										<p v-for="(item,i) in handledError[scope.$index].reasonVOList" v-bind:key="i" >
											<span v-for="(item1,j) in item.measuresVOList" v-bind:key="j">{{item1.measures}}</span>
										</p>
										</template>
									</el-table-column>
									<el-table-column prop="remark" align="center" label="备注">
									</el-table-column>
									<el-table-column prop="faultType" align="center" label="故障级别">
									</el-table-column>
									<el-table-column prop="occurTime" align="center" label="故障发生时间">
									</el-table-column>
									<el-table-column prop="solveTime" align="center" label="故障处理时间">
									</el-table-column>
									<el-table-column align="center" label="操作">
										<el-button @click="showDialog5" type="text" size="small">处理结果
										</el-button>
									</el-table-column>
								</el-table>
							</div>

						</dv-border-box-3>
					</div>

					<dv-border-box-4 class="rmc-bottom-container">
						   <Bottom-Charts />
					</dv-border-box-4>
				</div>
			</dv-border-box-1>

		</dv-full-screen-container>
		
<!-- 		添加故障原因与措施dialog -->		
		<el-dialog title="添加故障原因与措施" :visible.sync="centerDialogVisible" width="30%" center>
			<div style="width: 70%;margin: auto;">
				<span>故障名称:</span>
				<el-input :disabled="true" style="width: 250px;margin-left: 20px;" v-model="input" placeholder="请输入内容">
				</el-input>
			</div>
			<div style="width: 70%;margin: auto;margin-top: 10px!important;">
				<span>原因:</span>
				<el-input style="width: 250px;margin-left: 47px;" type="textarea" autosize placeholder="请输入故障原因"
					v-model="textarea1"></el-input>
			</div>

			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="submit">提交</el-button>
			</span>
		</el-dialog>



<!-- 		查看故障原因与措施dialog -->
		<el-dialog title="查看故障原因与措施" :visible.sync="centerDialogVisible1" width="30%" center>
			<el-table ref="multipleTable" :data="tableData1" tooltip-effect="dark" style="width: 100%">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column type="index" width="50">
				</el-table-column>
				<el-table-column prop="measure" label="措施">
				</el-table-column>
			</el-table>
			<div style="width: 100%;">
				<el-button style="margin-left: 50%;transform: translateX(-50%);margin-top: 15px;" @click="addmeasure">
					新增措施</el-button>
			</div>
		</el-dialog>
		
		

<!-- 		新增措施dialog -->
		<el-dialog title="新增措施" :visible.sync="centerDialogVisible2" width="30%" center>
			<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea3">
			</el-input>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="confirmAddMeasure">确 定</el-button>
			</span>
		</el-dialog>



<!-- 		查看电机信息dialog -->
		<el-dialog title="电机信息" :visible.sync="centerDialogVisible3" width="30%" center>
			<div class="" style="width:100%;display:flex;justify-content: space-between;">
				<div style="width:50%;text-align: center;">
					<table width="100%" border="1">
						<tr>
							<td class="black_title">电机名称</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">电机位号</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">电气室</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">柜号</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">器件代号</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">电机开关箱</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">IP地址</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">变频器型号</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">操作台</td>
						</tr>
					</table>
				</div>
				<div style="width:50%;text-align: center">
					<table width="100%" border="1" class="tb2">
						<tr>
							<td class="black_title">液压泵电机</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">表头1</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">表头2</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">表头3</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">表头4</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">表头5</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">表头6</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">表头7</td>
						</tr>
						<tr>
							<td class="left_title bottom_border">表头8</td>
						</tr>
					</table>
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="centerDialogVisible3=false">确 定</el-button>
			</span>
		</el-dialog>


		<el-dialog title="查看措施" :visible.sync="centerDialogVisible4" width="30%" center>
			<el-tabs type="border-card" v-model="tabpanIndex">
			  <el-tab-pane :name="i+1"  v-for="(item,i) in frmMessage.reasonVOList" v-bind:key="i" :label="i+1">
					<div style="width: 70%;margin: auto;">
						<span>故障名称:</span>
						<el-input :disabled="true" style="width: 250px;margin-left: 20px;" v-model="frmMessage.fault" placeholder="请输入内容">
						</el-input>
					</div>
					<div style="width: 70%;margin: auto;">
						<span>故障原因:</span>
						<el-input :disabled="true" :value="item.reason" style="width: 250px;margin-left: 20px;"
							placeholder="请输入内容">
						</el-input>
					</div>
					<div style="width: 70%;margin: auto;">
						<span>故障措施：</span>
						<el-table ref="multipleTable" :data="item.measuresVOList" style="width: 100%">
							<el-table-column prop="measures">
							</el-table-column>
						</el-table>
					</div>
					<span slot="footer" class="dialog-footer">
						<el-button type="primary" @click="confirmAddMeasure">确 定</el-button>
					</span>
				</el-tab-pane>
			</el-tabs>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="centerDialogVisible4=false">确 定</el-button>
			</span>
		</el-dialog>

<!-- 处理结果dialog -->
		<el-dialog :visible.sync="centerDialogVisible5" width="40%" center>
			<div style="width: 100%;margin: auto;">
				<span>故障名称:</span>
				<el-input :disabled="true" type="text" style="width: 75%;margin-left: 20px;" v-model="input" placeholder="请输入内容">
					</el-input>
			</div>
			<div style="width: 100%;margin: auto;display: flex;margin-top: 15px;">
				<div style="flex: 1;">选择故障原因：</div>
					<div style="flex: 1;">
						<el-checkbox-group v-model="checkList1">
						  <el-checkbox label="电机过载"></el-checkbox>
						</el-checkbox-group>
					</div>
					<div style="flex: 1;">
						<el-checkbox-group v-model="checkList1">
						  <el-checkbox label="油位异常"></el-checkbox>
						</el-checkbox-group>
					</div>
					<div style="flex: 1;">
						<el-checkbox-group v-model="checkList1">
						  <el-checkbox label="油温异常"></el-checkbox>
						</el-checkbox-group>
					</div>
			</div>
			
			<div style="width: 100%;margin: auto;display: flex;margin-top: 15px;">
				<div style="flex: 1;line-height: 70px;">选择故障措施：</div>
					<div style="flex: 1;">
						<el-checkbox-group v-model="checkList1">
						  <el-checkbox label="电机保护开关"></el-checkbox>
						  <el-checkbox label="电机检查"></el-checkbox>
						  <el-checkbox label="液压泵检查"></el-checkbox>
							<el-checkbox label="电缆检查"></el-checkbox>
						</el-checkbox-group>
					</div>
					<div style="flex: 1;">
						<el-checkbox-group v-model="checkList1">
						  <el-checkbox label="检查油位"></el-checkbox>
						</el-checkbox-group>
					</div>
					<div style="flex: 1;">
						<el-checkbox-group v-model="checkList1">
						  <el-checkbox label="检查油温"></el-checkbox>
						</el-checkbox-group>
					</div>
			</div>
			<div style="width: 100%;margin: auto;margin-top: 15px;" class="clearfix">
				<div style="float: left; line-height: 40px;">备注：</div>
				<el-input type="textarea" v-model="resultNote"  style="width: 75%;;margin-left: 35px; float: left;" :rows="2" placeholder="请输入内容">
				</el-input>
			</div>
			<div style="width: 100%;margin: auto;">
				<el-button style="margin: auto;display: block;margin-top: 15px;position: relative;left: -80px;" type="primary"  @click="centerDialogVisible5=false;">提交处理结果</el-button>
			</div>
		</el-dialog>
		
		
		<!-- 查看历史故障dialog -->
		<el-dialog :visible.sync="centerDialogVisible6" width="40%" center>
			  <el-table
			    :data="historyData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="reason"
			      label="故障原因"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="measure"
			      label="处理措施"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="note"
			      label="备注">
			    </el-table-column>
					<el-table-column
					  prop="time"
					  label="故障处理时间">
					</el-table-column>
			  </el-table>
				<div style="margin-top: 20px;">故障统计:</div>
				<div style="width: 100%;border: 1px gray solid;height: 100px;"></div>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="centerDialogVisible6 = false;">确定</el-button>
			</span>
		</el-dialog>

	</div>
</template>

<script>
	import topHeader from '@/components/topHeader'
	import BottomCharts from '@/components/BottomCharts'
	import deviceInfo from '@/components/deviceInfo'
	import {pending,handled,frm} from '@/api/detail.js'
	// import {getnews} from '../../api/test.js'

	export default {
		name: 'DataView',
		components: {
			topHeader,
			BottomCharts,
			deviceInfo
		},
		data() {
			return {
				historyData:[
					{
						reason:'电机过载',
						measure:'电机检查',
						note:'',
						time:'2020-1-10 13:00:00'
					},
					{
						reason:'油温异常',
						measure:'检查油温',
						note:'',
						time:'2020-1-10 13:00:00'
					},
					{
						reason:'电机过载',
						measure:'电机检查',
						note:'',
						time:'2020-1-10 13:00:00'
					}
				],
				tableData: [{
					date: '充电机伸缩机构伺服故障',
					level: '重故障'
				}, {
					date: '充电机故障硬件故障',
					level: '轻故障'
				}, {
					date: '充电机故障温度过高保护',
					level: '轻故障'
				}, {
					date: '充电机通讯接收超时（5秒）',
					level: '重故障'
				}, {
					date: '小车电量严重不足',
					level: '重故障'
				}],
				tableData1: null,
				centerDialogVisible: false,
				centerDialogVisible1: false,
				centerDialogVisible2: false,
				centerDialogVisible3: false,
				centerDialogVisible4: false,
				centerDialogVisible5: false,
				centerDialogVisible6: false,
				input: '',
				textarea1: '',
				textarea2: '',
				textarea3: '',
				scout: null,
				reason: [
					['充电机伸缩机构堵转或卡死导致伺服电机报故障','dajdsads'],
					['充电机本身硬件错误'],
					['充电机故障输出电压错误'],
					['当充电机开始接收到一次PLC报文后5秒内没有收到下一条报文则报通讯故障'],
					['小车剩余电量不足30%时则报电量严重不足']
				], //保存原因			
				measures: [
					[
						['通过HMI上的伺服复位按钮来重启伸缩机构伺服电机']
					],
					[
						['重启操作柜', '联系设备供应商']
					],
					[
						['重启操作柜']
					],
					[
						['检查操作柜内的CAN发送模块是否亮红灯', '重启操作柜']
					],
					[
						['给小车更换备用电池']
					]
				],
				srowindex: 0, //保存每一行的index
				srowi: 0, //保存每一行的i
				checkList1: [],
				resultNote: '', //查看结果备注
				
				
				
				
				
				pendingError:'',//待处理故障信息
				handledError:'',//已处理故障信息
				frmMessage:'', //查询措施信息
				tabpanIndex: 1 //默认选中的tabpan
			}
		},
		methods: {
			//查询待处理故障
			async queryPendingError(id){
				let data ={
					deviceId:id
				}
				await pending(data).then(res =>{
					this.pendingError = res.data.result
				})
			},
			//查询已处理故障信息
			async queryHandledError(id){
				let data = {
					deviceId:id
				}
				await handled(data).then(res =>{
					this.handledError = res.data.result
					
				})
			},
			//查询措施信息
			async queryFrm(id){
				let data = {
					faultId:id
				}
				await frm(data).then(res =>{
					if(res.data.state === true){
						this.frmMessage = res.data.result[0]
						console.log(this.faultreason)
						console.log(this.frmMessage)
					}
				})
			},
			
			
			//显示查看历史故障
			showDialog6(){
				this.centerDialogVisible6 = true
			},
			//显示查看电机信息表
			showDialog3() {
				this.centerDialogVisible3 = true
			},
			//显示查看措施信息表
			showDialog4(row, index) {
				this.queryFrm(this.pendingError[index].faultId)
				this.tabpanIndex= 1
				this.centerDialogVisible4 = true
			},
			//显示处理结果的dialog
			showDialog5() {
				this.centerDialogVisible5 = true
			},
			//设置表格奇数行和偶数行的背景色
			TableRowStyle({
				row,
				rowIndex
			}) {
				let styleJson = {}
				if (rowIndex % 2 === 1) {
					styleJson = {
						'background-color': '#003B51',
						'color': 'white'
					}
				} else {
					styleJson = {
						'background-color': '#0A2732',
						'color': 'white'
					}
				}
				return styleJson
			},
			add(s, y, i) {
				this.scout = y
				this.input = s.date //故障名称
				this.errorreason = this.reason[this.scout][i]
			},

			//查看措施触发的事件
			look(index, i) {
				this.srowindex = index
				this.srowi = i
				let arr = []
				for (let e = 0; e < this.measures[index][i].length; e++) {
					let data = {
						measure: this.measures[index][i][e]
					}
					arr.push(data)
				}
				this.tableData1 = arr
				//this.centerDialogVisible1 = true
			},

			//新增原因触发的事件
			submit() {
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
			addmeasure() {
				this.centerDialogVisible2 = true
			},
			//点击确定新增按钮触发的事件
			confirmAddMeasure() {
				this.measures[this.srowindex][this.srowi].push(this.textarea3)
				this.textarea3 = ''
				this.centerDialogVisible2 = false
				let arr = []
				for (let e = 0; e < this.measures[this.srowindex][this.srowi].length; e++) {
					let data = {
						measure: this.measures[this.srowindex][this.srowi][e]
					}
					arr.push(data)
				}
				this.tableData1 = arr
			}
		},
	mounted() {
		// this.name  = this.$route.query.id
		// getnews(this.name).then(res =>{
		// 	console.log(res)
		// })
		this.queryPendingError(this.$route.query.id)
		this.queryHandledError(this.$route.query.id)
		// alert(this.pendingError)

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
			background-image: url('../assets/img/bg.png');
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
				color: rgb(1, 134, 187);

				a:visited {
					color: rgb(1, 134, 187);
				}
			}

			.mh-middle {
				font-size: 30px;
				margin: auto;
			}

			.mh-left,
			.mh-right {
				width: 450px;
			}
		}

		.main-container {
			height: calc(~"100% - 80px");
			display: flex;
			.border-box-content{
				display: flex;
			}
			.left-container{
				flex: 1;
				.left-chart-container {
					box-sizing: border-box;				
				}
			}
			.right-main-container {
				flex: 4;
				padding-left: 5px;
				box-sizing: border-box;

				.rmc-top-container {
					width: 100%;
					height: 75%;

					.rmctc-left-container {
						.border-box-content{
							display: flex;
							flex-direction: column;
						}
						.rmctc-left-table1 {
							margin: auto;
							width: 90%;
							flex: 1;
						}

						.rmctc-left-table2 {
							margin: auto;
							width: 90%;
							flex: 1;
						}
					}
				}
			}
		}
		
		.el-input.is-disabled .el-input__inner{
			text-align: center;
		}





		.rmc-bottom-container {
			height: 25%;
		}

		.rmctc-chart-1,
		.rmctc-chart-2 {
			height: 50%;
		}

		.el-table .cell {
			white-space: pre-line;
		}

		table {
			border-collapse: collapse;
		}

		.tb2 {
			border-left: 0px;
		}
		.clearfix::after{
			content: "";
			clear: both;
			display: block;
		}
		.img1{
			position: absolute;
			display: inline-block;
			width: 70px;
			height: 70px;
			top: 30px;
			left: 30px;
		}

	}
</style>
