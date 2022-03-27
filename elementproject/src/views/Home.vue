<template>
  <div>
    <div class="bigbox">
      <div class="top">
        <p class="pagehome">首页</p>
      </div>
      <div class="neirong">
          <h3 class="title">O2O城市系统商户管理平台部分交互指南</h3>
          <h4 class="titleh4">验证管理</h4>
          <p>验证消费券页面</p>
          <p>单张消费券验证：门店选择、“不输入、输入123456、输入其他”分别提交验证</p>
          <p>消费券批量验证：门店选择、提交验证</p>
          <p>超级验证：门店选择、“不输入、输入123456、输入其他”分别提交验证</p>
          <p>验证优惠券页面</p>
          <p>门店选择、“不输入、输入123456、输入其他”分别提交验证</p>
          <p>验证活动报名页面</p>
          <p>门店选择、“不输入、输入123456、输入其他”分别提交验证</p>
          <h4 class="order">订单管理</h4>
          <p>商品订单列表页面</p>
          <p>查看发票、待验证详情、待收货详情、待发货详情、待收货详情、已退款详情、待评价详情、已评价详情、退款处理、发货处理</p>
          <p>到店付页面</p>
          <p>订单详情</p>
          <p>预售订单</p>
          <p>查看发票、待付订金详情、待付尾款详情、待发货详情、待退款详情、待评价详情、发货处理、退款处理</p>
          <h4 class="order">评论管理</h4>
          <p>消费评论页面/优惠券评论页面/活动评论页面/门店评论页面</p>
          <p>回复、修改回复</p>
          <h4 class="order">项目管理</h4>
          <p>团购页面/新增团购子页面</p>
          <p>编辑、下架、上架、删除、状态切换</p>
          <p>商品分类、支持门店、基本信息、团购配置、库存价格、手机端描述</p>
          <p>优惠券页面/新增电子券子页面/新增实体券子页面</p>
          <p>编辑、删除、状态切换</p>
          <p>基本信息、使用规则、手机端描述</p>
          <p>活动页面/新增活动子页面</p>
          <p>编辑、下架、上架、删除、状态切换</p>
          <p>支持门店、基本信息、手机端描述</p>
          <h4 class="order">财务管理</h4>
          <p>财务报表页面</p>
          <p>财务概况、销售走势、财务明细切换</p>
          <p>商户提现页面/银行账户页面/开票设置页面</p>
          <p>提现金额、图形校验码、短信验证码、是否开票设置</p>
          <h4 class="order">门店管理</h4>
          <p>门店列表页面/新增门店子页面</p>
          <p>审核修改、资料更新、上架、下架、修改、状态切换</p>
          <p>分类、子分类、城市筛选、商圈、地图定位</p>
          <p>外卖预定页面/外卖设置子页面/预约项目设置子页面/外卖分类子页面/外卖商品子页面</p>
          <p>新增、修改、删除、查询、状态切换、排序</p>
          <p>上门服务设置页面/服务管理子页面/上门设置子页面</p>
          <p>新增、修改、删除、查询、状态切换、排序</p>
          <p>剩余的页面交互大家自己点击体验吧！</p>
          <img class="homeimg" src="@/assets/img/homeimg.png" alt="">
      </div>
    </div>
  </div>
</template>
<style scoped>
.bigbox {
  background: #f2f2f2;
  height: 100%;
  width: 1068px;
  overflow: scroll;
}
.top {
  background: #ffffff;
  padding: 10px 0;
  width: 100%;
}
.pagehome {
  border-left: 2px solid #ff8800;
  margin-left: 10px;
  padding-left: 10px;
}
.neirong {
  width: 95%;
  background: #ffffff;
  margin: 0 auto;
  padding: 20px 10px;
  margin-top: 10px;
}
.title{
    display: flex;
    justify-content: center;
}
.neirong p{
    font-size: 13px;
    color: #333333;
    line-height: 30px;
    width: 100%;
}
.neirong p:nth-of-type(5){
    margin-top: 20px;
}
.neirong p:nth-of-type(7){
    margin-top: 20px;
}
.order{
    margin-top: 20px;
}
.neirong p:nth-of-type(11){
    margin-top: 20px;
}
.neirong p:nth-of-type(13){
    margin-top: 20px;
}
.neirong p:nth-of-type(20){
    margin-top: 20px;
}
.neirong p:nth-of-type(23){
    margin-top: 20px;
}
.neirong p:nth-of-type(28){
    margin-top: 20px;
}
.neirong p:nth-of-type(33){
    margin-top: 20px;
}
.neirong p:nth-of-type(35){
    margin-top: 20px;
}
.neirong p:nth-of-type(37){
    margin-top: 20px;
}
.homeimg{
  width: 100%;
}
</style>