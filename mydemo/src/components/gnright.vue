<template>
	<div class="container">
		<div class="gnr1" @click="link(22)">
			<oneCell :device='gnr1'></oneCell>
		</div>
		<div class="gnr2" @click="link(24)">
			<oneCell :device='gnr2'></oneCell>
		</div>
		<div class="gnr3" @click="link(26)">
			<oneCell :device='gnr3'></oneCell>
		</div>
		<div class="gnr4" @click="link(27)">
			<oneCell :device='gnr4'></oneCell>
		</div>
		<div class="gnr5">
			<oneCell :device='gnr5'></oneCell>
		</div>
			<div class="gnr7">
			<oneCell :device='gnr7'></oneCell>
		</div>
		<div class="gnr6" @click="link(28)">
			<oneCell :device='gnr6'></oneCell>
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
				gnr1:{
					title:'2#抛丸机',
					status:'nomal'
				},
				gnr2:{
					title:'2#三角标',
					status:'nomal'
				},
				gnr3:{
					title:'接箍上下料',
					status:'nomal'
				},
				gnr4:{
					title:'管拧机',
					status:'nomal'
				},
				gnr5:{
					title:'2#通径机',
					status:'nomal'
				},
				gnr6:{
					title:'内保拧接',
					status:'nomal'
				},
					gnr7:{
					title:'涂油拧接',
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
		/* border: red 1px solid; */
	}
	.gnr1{
		height: 10%;
		margin-top: 15%;
		cursor:pointer;
	}
	.gnr2{
		height: 10%;
		margin-top: 10%;
		cursor:pointer;
	}
	.gnr3{
		height: 10%;
		margin-top: 5%;
		cursor:pointer;
	}
	.gnr4{
		margin-top: 5%;
		height: 10%;
		cursor:pointer;
	}
	.gnr5{
		height: 10%;
		cursor:pointer;
	}
	.gnr6{
		height: 10%;
		cursor:pointer;
	}
	.gnr7{
		height: 10%;
		cursor:pointer;
	}
</style>