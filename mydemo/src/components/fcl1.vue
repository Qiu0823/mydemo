<template>
	<div class="container">
		<div class="fcl11" style="float:right">
			<oneCell :device='fcl11' ></oneCell>
		</div>
		<div class="fcl12">
			<oneCell :device='fcl12'></oneCell>
		</div>
		<div class="fcl13">
			<oneCell :device='fcl13'></oneCell>
		</div>
			<div class="fcl14">
			<oneCell :device='fcl14'></oneCell>
		</div>
			<div class="fcl15">
			<oneCell :device='fcl15'></oneCell>
		</div>
	</div>
	
</template>

<script>
	import oneCell from "./oneCell";
	export default{
		components: {
		  oneCell,
		},
		data(){
			return{
				fcl11:{
					title:'4#收口机',
					status:'nomal'
				},
				fcl12:{
					title:'4#车丝机',
					status:'nomal'
				},
				fcl13:{
					title:'4#吹水黑皮扣',
					status:'nomal'
				},
					fcl14:{
					title:'4#修扣黑皮扣',
					status:'nomal'
				},
					fcl15:{
					title:'铁屑收集',
					status:'nomal'
				},

		}
	}
	}
</script>

<style scoped="scoped">
	div{
		width: 100%;
		height: 100%;
		float: right;
		/* padding-left: 10%; */
	}
	.fcl11{
		height: 10%;
		margin-top: 19%;
		font-size: 12px!important;
	}
	.fcl12{
		height: 10%;
		margin-top: 50%;
	}
	.fcl13{
		height: 10%;
		/* margin-top: 8%; */
	}
	.fcl14{
		height: 10%;
		margin-bottom: 5%;
	}
	.fcl15{
		position: relative;
		top: 0.5vh;
	}
</style>
