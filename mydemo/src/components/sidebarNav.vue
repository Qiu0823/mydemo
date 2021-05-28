<template>
  <div class="sidebar-nav">
    <el-tree
      :data="data"
      node-key="id"
      accordion
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "上料区域",
          id: "1",
          children: [
            {
              label: "1#喷码机",
              id:'2'
            },
            {
              label: "2#喷码机",
              id:'3'
            },
          ],
        },
        {
          label: "车丝区域",
          id:'4',
          children: [
            {
              label: "1#收口机",
              id:'5'
            },
            {
              label: "1#车丝机",
              id:'6'
            },
            {
              label: "1#黑皮扣",
              id:'7'
            },
            {
              label: "2#收口机",
              id:'8'
            },
            {
              label: "2#车丝机",
              id:'9'
            },
            {
              label: "2#黑皮扣",
              id:'10'
            },
            {
              label: "3#收口机",
              id:'11'
            },
            {
              label: "3#车丝机",
              id:'12'
            },
            {
              label: "3#黑皮扣",
              id:'13'
            },
             {
              label: "4#收口机",
              id:'14'
            },
            {
              label: "4#车丝机",
              id:'15'
            },
            {
              label: "4#黑皮扣",
              id:'16'
            },
          ],
        },
        {
          label: "管拧区域",
          id:'17',
          children: [
            {
              label: "1#通径机",
              id:'18'
            },
            {
              label: "1#抛丸机",
              id:'19'
            },
            {
              label: "1#三角标",
              id:'20'
            },
            {
              label: "外保拧接",
              id:'21'
            },
            {
              label: "2#抛丸机",
              id:'22'
            },
             {
              label: "2#三角标",
              id:'23'
            },
             {
              label: "接箍上下料",
              id:'24'
            },
             {
              label: "管拧机",
              id:'25'
            },
               {
              label: "2#通径机",
              id:'26'
            },
               {
              label: "内保拧接",
              id:'27'
            },
          ],
        },
        {
          label: "返修区域",
          id:'28',
          children: [
            {
              label: "1#带锯",
              id:'29'
            },
            {
              label: "2#带锯",
              id:'30'
            },
            {
              label: "5#桁架",
              id:'31'
            },
          ],
        },
        {
          label: "涂层区域",
          id:'32',
          children: [
            {
              label: "涂层",
              id:'33'
            },
          ],
        },
        {
          label: "退磁区域",
          id:'36',
          children: [
            {
              label: "退磁",
              id:'37'
            },
          ],
        },
         {
          label: "烘干区域",
          id:'36',
          children: [
            {
              label: "斯惠顿",
            },
             {
              label: "烘干节距链",
            },
              {
              label: "烘干机",
            },
          ],
        },
        {
          label: "测量区域",
          children: [
            {
              label: "烘接箍",
            },
            {
              label: "喷化",
            },
            {
              label: "烘干",
            },
            {
              label: "喷色环",
            },
            {
              label: "称重",
            },
            {
              label: "测长",
            },
             {
              label: "针刻印",
            },
             {
              label: "管体喷标",
            },
             {
              label: "接箍喷印",
            },
          ],
        },
        {
          label:'打包区域',
          children:[
            {
              label:'打捆机'
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      if (data.label && !data.children) {
        console.log(data.label);
        this.$router.push({
          path: `/index`,
          query: {
            name: data.label,
          },
        });
      }
      // this.$router
      // this.$router.push({ path: '/detail' || '/', query: data.label })
    },
  },
};
</script>
<style lang='less'>
.sidebar-nav {
  .el-tree {
    background-color: rgb(4, 55, 90);
    color: #fff;
    font-size: 32px;
    .el-tree-node__content {
      height: 65px;
    }
    .el-tree-node__content:hover {
    background-color: rgb(7, 42, 65);
      font-weight: bold;
      color: white;
      color: #fff;
    }
    .el-tree-node:focus > .el-tree-node__content {
     background-color: rgb(7, 42, 65);
    }
  }
}
</style>