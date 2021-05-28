<template>
<div class="container">
	<!-- <div class="fcl1">
		<oneCell :device='fcl1'></oneCell>
	</div>
	<div class="fcl2">
		<oneCell :device='fcl2'></oneCell>
	</div>
	<div class="fcl3">
		<oneCell :device='fcl3'></oneCell>
	</div>
	<div class="fcl4">
		<oneCell :device='fcl4'></oneCell>
	</div>
	<div class="fcl5">
		<oneCell :device='fcl5'></oneCell>
	</div> -->
	<div class="detect2">
        <div class="detect2-onecell" v-for="item in decArr" :key="item.id">
        <span class="dv-title">{{item.title}}</span>
        <div class="LEDbtn greenBtn"></div>
        </div>         
      </div>
</div>
</template>

<script>
// import oneCell from "./oneCell";
export default{
	components: {
	//   oneCell,
	},
	data(){
		return{
		  decArr:[{
        title: "1#收口步进梁",
        status: "nomal",
        id:'01'
      },
       {
        title: "2#收口步进梁",
        status: "nomal",
        id:'02'
      },
       {
        title: "1#车丝步进梁",
        status: "nomal",
        id:'03'
      },
       {
        title: "1#车丝后步进梁",
        status: "nomal",
        id:'04'
      },
       {
        title: "1#车丝检验步进梁",
        status: "nomal",
        id:'05'
      },
       {
        title: "2#车丝步进梁",
        status: "nomal",
        id:'06'
      },
       {
        title: "2#车丝后步进梁",
        status: "nomal",
        id:'07'
      },
       {
        title: "2#车丝检验步进梁",
        status: "nomal",
        id:'08'
      },],
			fcl1:{
				title:'步进梁',
				status:'nomal'
			},
			fcl2:{
				title:'1#车丝后步进梁',
				status:'nomal'
			},
			fcl3:{
				title:'1#车丝检验步进梁',
				status:'nomal'
			},
			fcl4:{
				title:'2#车丝后步进梁',
				status:'nomal'
			},
			fcl5:{
				title:'2#车丝检验步进梁',
				status:'nomal'
			}
		}
	}
}

</script>

<style scoped="scoped" lang='less'>
	.container{
		border-left: 1px solid #203456;
		border-right: 1px solid #203456;
		display: flex;
		flex-direction: column;
	}
	div{
		width: 100%;
		height: 100%;
		padding-top: 0.5vh;
		border-bottom: 1px solid #203456;
	}
	.detect2 {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 12px!important;
  justify-content: space-between;
  .detect2-onecell{
    box-sizing: border-box;
    border-bottom: 1px solid #203456;
    display: flex;
    .LEDbtn{
      width: 13px!important;
      height: 13px!important;
    }
    .dv-title{
      width: 40%;
      text-align: right;
      padding-right: 2vh;
      padding-left: 4vh;
    }
  }
  div{
	  padding: 0;
	  margin: 0;
	  font-size: 12px;
  }
}
	.fcl1{
		height: 17%;
	}
	.fcl2{
		height: 19%;
	}
	.fcl3{
		height: 19%;
	}
	.fcl4{
		height: 19%;
	}
	.fcl5{
		height: 19%;
		border-bottom: none;
	}
</style>
