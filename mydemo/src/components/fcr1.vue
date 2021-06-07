<template>
	<div class="container">
		<div class="fcr11" @click="link(2)">
			<oneCell :device='fcr11'></oneCell>
		</div>
		<div class="fcr12" @click="link(6)">
			<oneCell :device='fcr12'></oneCell>
		</div>
		<div class="fcr13"  @click="link(16)">
			<oneCell :device='fcr13'></oneCell>
		</div>
		<div class="fcr14" @click="link(16)">
			<oneCell :device='fcr14'></oneCell>
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
				fcr11:{
					title:'2#收口机',
					status:'nomal'
				},
				fcr12:{
					title:'2#车丝机',
					status:'nomal'
				},
				fcr13:{
					title:'2#吹水黑皮扣',
					status:'nomal'
				},
					fcr14:{
					title:'2#修扣黑皮扣',
					status:'nomal'
				},
		}
	},
	methods:{
		link(id){
			this.$emit('linkDetail',id)
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
	.fcr11{
			height: 10%;
		margin-top: 19%;
		cursor:pointer;
	}
	.fcr12{
		height: 10%;
		margin-top: 50%;
		cursor:pointer;
	}
	.fcr13{
		height: 10%;
		cursor:pointer;
	}
		.fcl14{
		height: 10%;
		margin-bottom: 5%;
		cursor:pointer;
	}
</style>
