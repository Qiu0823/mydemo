<template>
  <div class="container">
    <div class="car">
      <div class="chassis">
         <img src="@/assets/img/car.png" alt="">
      </div>
        <!-- <div class="chassis" v-if="carNum==2">
         <img src="@/assets/img/car2.jpg" alt="">
      </div>
        <div class="chassis" v-if="carNum==3">
         <img src="@/assets/img/car3.jpg" alt="">
      </div> -->
      <!-- <div class="backtire tire">
        <div class="hr"></div>
        <div class="vr"></div>
      </div> -->
      <!-- <div class="fronttire tire">
        <div class="hr"></div>
        <div class="vr"></div>
      </div> -->
    </div>
    <!-- <div id="grass"></div> -->
  </div>
</template>

<script>
import $ from 'jquery' 
export default {
   props:['carNum','left'],
   created() {
      
   },
   mounted(){
      var that = this;
      $(function(){  
         var rot=0;  
         var prefix=$('.tire').css('-o-transform')?'-o-transform':($('.tire').css('-ms-transform')?'-ms-transform':($('.tire').css('-moz-transform')?'-moz-transform':($('.tire').css('-webkit-transform')?'-webkit-transform':'transform')));  
  
         var origin={       /*设置我们的起始点*/  
         left:Number(that.left)
         };  
         console.log(that.left);
         var animation={        /*该动画由jQuery执行*/  
         left:0     /*设置我们将移动到的最终位置*/  
     };  
         var rotate=function(){ /*该方法将被旋转的轮子调用*/  
         rot-=2;  
         $('.tire').css(prefix,'rotate('+rot+'deg)');  
     };  
  
         var options={      /*将要被jQuery使用的参数*/  
         easing:'linear',   /*指定速度，此处只是线性，即为匀速*/  
         duration:10000,    /*指定动画持续时间*/  
         complete:function(){  
            $('.car').css(origin).animate(animation,options);  
         },  
         step:rotate  
     };  
  
         options.complete();  
      }); 
   }
};
</script>

<style lang='less' scoped>
body {
  padding: 0;
  margin: 0;
  .container {
    position: relative;
    width: 100%;
    height: 80px;
    overflow: hidden; /*这个很重要*/
   //  border: 1px solid red;
    .car {
      position: absolute; /*汽车在容器中采用绝对定位*/
      width: 30px;
      height: 1px; /*汽车的总高度，包括轮胎和底盘*/
      z-index: 1; /*让汽车在背景的上方*/
      top: 0px; /*距顶端的距离(y轴)*/
      left: 50px; /*距左侧的距离(x轴)*/
        .chassis  
     {  
        position:absolute;  
        width:150px;   //w:40,h:13
        height:60px;  
      //   background:#FF9900;  
      //   border: 2px solid #FF6600;  
      // border: 1px solid red;
      // background-image: url('~@/assets/img/car.jpg');
      img{
         width: 50%;
         height: 50%;
      }
     } 
        .tire  
     {  
        z-index:1;          /*同上，轮胎也应置于背景的上方*/  
        position:absolute;  
        bottom:-45px;  
        border-radius:6px;     /*圆半径*/  
        height:8px;       /* 2*radius=height */  
        width:8px;        /* 2*radius=width */  
        border:1px solid #424103;  
        background-color: rgb(230, 190, 11);
      //   -o-transform:rotate(0deg);  /*旋转(单位：度)*/  
      //   -ms-transform:rotate(0deg);  
      //   -webkit-transform:rotate(0deg);  
      //   -moz-transform:rotate(0deg);  
     } 
          .fronttire  
     {  
        right:-12px;     /*设置右边的轮胎距离边缘的距离为20*/  
     }  
  
     .backtire  
     {  
        left:20px;      /*设置左边的轮胎距离边缘的距离为20*/  
     }  
   
    }
  }
       .hr,.vr  
     {  
        position:absolute;  
        background:#3300FF;  
     }  
  
     .hr  
     {  
      //   height:1px;  
        width:100%;     /*水平线*/  
        left:0;  
        top:60px;  
     }  
  
     .vr  
     {  
      //   width:1px;  
        height:100%;    /*垂直线*/  
        left:60px;  
        top:0;  
     } 
}
</style>