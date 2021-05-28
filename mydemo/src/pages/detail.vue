<template>
<dv-full-screen-container>
	<topHeader></topHeader>
	<div class="textContain">
		<div class="deviceDetail">
			<div class="dvDetail">{{deviceName}}</div>
			<div class="dvDetail1">
				<div class="dvDetail11">
					<dv-border-box-4 class="rmc-bottom-container">
						<Bottom-Charts />			
					</dv-border-box-4>
				</div>
				<div class="dvDetail12">
					<dv-border-box-4 :reverse="true" class="rmc-bottom-container">
						<Bottom-Charts />			
					</dv-border-box-4>	
				</div>
			</div>
		</div>
		<div class="deviceText">
			<div style="width: 100%;height: 30px;text-align: center;font-size: 24px;">故障记录维护</div>
			<div class="dt1">
			 <el-table
					:data="tableData"
					:row-style="TableRowStyle"
					:header-cell-style="{'background-color':'#00BAFF','color':'white'}"
					height="350"
					style="width: 100%"
					class="customer-no-border-table">
					<el-table-column
						prop="date"
						label="故障名称"
						width="180">
					</el-table-column>
					<el-table-column
						prop="name"
						label="故障原因"
						width="180">
					</el-table-column>
					<el-table-column
						label="备注">
							<template slot-scope="scope">
								<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
								<el-button type="text" size="small">编辑</el-button>
							</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="dt2">
				<div style="width: 100%;height: 30px;text-align: center;font-size: 24px;">备注</div>
				 <el-table
				    :data="tableData1"
						:header-cell-style="{'background-color':'#00BAFF','color':'white'}"
						:row-style="TableRowStyle"
				    style="width: 100%"
						class="customer-no-border-table">
				    <el-table-column
				      prop="date"
				      label="序号"
							align="center"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="备注"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      label="修改">
							<el-button type="text" size="small">编辑</el-button>
				    </el-table-column>
				  </el-table>
			</div>
		</div>
	</div>


</dv-full-screen-container>
</template>

<script>
import topHeader from '@/components/topHeader'
import BottomCharts from '@/components/BottomCharts'
export default{
	data(){
		return{
		  deviceName:'',
		  timer:null,
		  tableData: [{
				date: '系统急停',
				name: '急停回路断路，检查线路',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '系统急停',
				name: '急停回路断路，检查线路',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '系统急停',
				name: '急停回路断路，检查线路',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '系统急停',
				name: '急停回路断路，检查线路',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '系统急停',
				name: '急停回路断路，检查线路',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '系统急停',
				name: '急停回路供电异常,检查急停回路电源',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '系统急停',
				name: '急停回路供电异常,检查急停回路电源',
				address: '上海市普陀区金沙江路 1518 弄'
			}],
			tableData1: [{
				date: '1',
				name: '急停回路供电异常,检查急停回路电源',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2',
				name: '急停回路供电异常,检查急停回路电源',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '3',
				name: '急停回路供电异常,检查急停回路电源',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '4',
				name: '急停回路供电异常,检查急停回路电源',
				address: '上海市普陀区金沙江路 1516 弄'
			}]
		}
	},
	mounted() {
		this.deviceName = this.$route.query.name;
    clearInterval(this.timer)
		this.timer = setInterval(()=>{
   this.$router.push({
     path:'/'
   })
  },1000*120)
	},
	beforeDestroy(){
		clearInterval(this.timer)
	},
	methods:{
		TableRowStyle({row,rowIndex}) {
			console.log(row)
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
			console.log(row, column, rowIndex, columnIndex)
			return{
				'background-color': '#0A2732'
			}
		}
	},
	components:{
		topHeader,
		BottomCharts
	}
}
</script>

<style>
	.textContain{
		width: 100%;
		height: 100%;
		top: 5rem;
		position: relative;
		border: red 1px solid;
		display: flex;
	}
	.deviceDetail{
		flex: 2;
		height:100%;
	}
	.dvDetail{
		float: left;
		width: 40%;
		height: 100%;
		/* background-color: #FF0000; */
		border: 1px solid red;
		box-sizing: border-box;
		color: #fff;
		font-size: 30px;
		padding-top: 1vw;
	}
	.dvDetail1{
		float: left;
		width: 60%;
		height: 100%;
	}
	.deviceText{
		flex: 1;
	}
	.rmc-bottom-container{
		display: inline-block;
		height: 50%;
	}
	.dvDetail11{
		width: 100%;
		height: 40%;
	}
	.dvDetail12{
		width: 100%;
		height: 60%;
	}
	.dv1{
		width: 100%;
		height: 50%;
	}
	.dt1{
		width: 100%;
		height: 35%;
	}
	.dt2{
		width: 100%;
		height: 50%;
	}
	/*去掉表格单元格边框*/
	.customer-no-border-table th{
	  border:none;
	}
	.customer-no-border-table td,.customer-no-border-table th.is-leaf {
	  border:none;
	}
	/*表格最外边框*/
	.customer-no-border-table .el-table--border, .el-table--group{
	  border: none;
	}
	/*头部边框*/
	.customer-no-border-table thead tr th.is-leaf{
	  border: 0px solid #EBEEF5;
	  border-right: none;
	}
	.customer-no-border-table thead tr th:nth-last-of-type(2){
	  border-right: 0px solid #EBEEF5;
	}
	/*表格最外层边框-底部边框*/
	.customer-no-border-table .el-table--border::after,.customer-no-border-table .el-table--group::after{
	  width: 0;
	}
	.customer-no-border-table::before{
	  width: 0;
	}
	.customer-no-border-table .el-table__fixed-right::before,.el-table__fixed::before{
	  width: 0;
	}
	.customer-no-border-table .el-table__header tr th{
	  background: #fff;
	  color: #333333 ;
	  padding: 3px ;
	  font-weight: 550 ;
	  height: 36px ;
	  border: 0px;
	  font-size: 15px;
	}
</style>
