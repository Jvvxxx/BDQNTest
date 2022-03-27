<template>
  <div>
    <div class="top">
      <router-link to="/page">
        <img class="logoimg" src="@/assets/img/logo.png" alt />
      </router-link>
      <span class="pingtaispan">O2O城市系统商户管理平台</span>
      <ul class="rightul">
        <li>商户资料管理</li>
        <li>{{ $store.getters.getUser.name }}</li>
        <li title="消息中心">
          <i class="el-icon-message-solid"></i>
        </li>
        <li title="系统首页">
          <i class="el-icon-s-home"></i>
        </li>
        <li @click="open" title="退出登录">
          <i class="el-icon-switch-button"></i>
        </li>
      </ul>
    </div>
    <el-row>
      <el-col :span="5">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#FAFAFA"
          text-color="#333333"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span>验证管理</span>
            </template>
<el-menu-item-group>
    <router-link to="/page/yanzheng">
        <el-menu-item index="1-1">验证消费券</el-menu-item>
    </router-link>
    <el-menu-item index="1-2">验证优惠券</el-menu-item>
    <el-menu-item index="1-3">验证活动报名</el-menu-item>
</el-menu-item-group>
</el-submenu>
<el-submenu index="2">
    <template slot="title" style="padding-left: 20px; color: #FF8800; background-color: rgb(250, 250, 250);">
              <i class="el-icon-folder"></i>
              <span>订单管理</span>
            </template>
    <el-menu-item-group>
        <router-link to="/page/fworder1">
            <el-menu-item index="1-1">团购订单列表</el-menu-item>
        </router-link>
        <router-link to="/page/fworder2">
            <el-menu-item index="1-2">商品订单列表</el-menu-item>
        </router-link>
        <router-link to="/page/fwgl">
            <el-menu-item index="1-3">优惠券领取记录</el-menu-item>
        </router-link>
        <router-link to="/page/mendian">
            <el-menu-item index="1-4">活动报名</el-menu-item>
        </router-link>
        <router-link to="/page/cuidan">
            <el-menu-item index="1-5">到店付</el-menu-item>
        </router-link>
        <router-link to="/page/fworder2">
            <el-menu-item index="1-6">预售订单</el-menu-item>
        </router-link>
    </el-menu-item-group>
</el-submenu>

<el-submenu index="3">
    <template slot="title">
              <i class="el-icon-folder"></i>
              <span>评论管理</span>
            </template>
    <el-menu-item-group>
        <router-link to="/page/fworder2">
            <el-menu-item index="1-1">消费评论</el-menu-item>
        </router-link>
        <el-menu-item index="1-2">优惠券评论</el-menu-item>
        <el-menu-item index="1-3">活动评论</el-menu-item>
        <el-menu-item index="1-4">门店评论</el-menu-item>
    </el-menu-item-group>
</el-submenu>
<el-submenu index="4">
    <template slot="title">
              <i class="el-icon-folder"></i>
              <span>项目管理</span>
            </template>
    <el-menu-item-group>
        <router-link to="/page/mendian">
            <el-menu-item index="1-1">团购</el-menu-item>
        </router-link>
        <el-menu-item index="1-2">商品</el-menu-item>
        <el-menu-item index="1-3">优惠券</el-menu-item>
        <el-menu-item index="1-4">活动</el-menu-item>
    </el-menu-item-group>
</el-submenu>
<el-submenu index="5">
    <template slot="title">
              <i class="el-icon-folder"></i>
              <span>财务管理</span>
            </template>
    <el-menu-item-group>
        <router-link to="/page/caiwu">
            <el-menu-item index="1-1">财务报表</el-menu-item>
        </router-link>
        <router-link to="/page/tixian">
            <el-menu-item index="1-2">商户提现</el-menu-item>
        </router-link>
        <router-link to="/page/bank">
            <el-menu-item index="1-3">银行账户</el-menu-item>
        </router-link>
        <router-link to="/page/kaipiao">
            <el-menu-item index="1-4">开票设置</el-menu-item>
        </router-link>
    </el-menu-item-group>
</el-submenu>
<el-submenu index="6">
    <template slot="title">
              <i class="el-icon-folder"></i>
              <span>门店管理</span>
            </template>
    <el-menu-item-group>
        <router-link to="/page/mendian">
            <el-menu-item index="1-1">门店列表</el-menu-item>
        </router-link>
        <router-link to="/page/waimaiyd">
            <el-menu-item index="1-2">外卖预定设置</el-menu-item>
        </router-link>
        <router-link to="/page/shangmensz">
            <el-menu-item index="1-3">上门服务设置</el-menu-item>
        </router-link>
        <router-link to="/page/peisong">
            <el-menu-item index="1-4">配送设置</el-menu-item>
        </router-link>
    </el-menu-item-group>
</el-submenu>
<el-submenu index="7">
    <template slot="title">
              <i class="el-icon-folder"></i>
              <span>账户管理</span>
            </template>
    <el-menu-item-group>
        <router-link to="/page/peisongmb">
            <el-menu-item index="1-1">配送模板</el-menu-item>
        </router-link>
        <router-link to="/page/zizhanghu">
            <el-menu-item index="1-2">子账户管理</el-menu-item>
        </router-link>
        <router-link to="/page/kuaidi">
            <el-menu-item index="1-3">快递列表</el-menu-item>
        </router-link>
        <router-link to="/page/weidian">
            <el-menu-item index="1-4">微店设置</el-menu-item>
        </router-link>
    </el-menu-item-group>
</el-submenu>
<el-submenu index="8">
    <template slot="title">
              <i class="el-icon-folder"></i>
              <span>营销管理</span>
            </template>
    <el-menu-item-group>
        <router-link to="/page/manmian">
            <el-menu-item index="1-1">满免运费</el-menu-item>
        </router-link>
        <el-menu-item index="1-2">商品预售</el-menu-item>
    </el-menu-item-group>
</el-submenu>
<el-submenu index="9">
    <template slot="title">
              <i class="el-icon-folder"></i>
              <span>外卖预定管理</span>
            </template>
    <el-menu-item-group>
        <router-link to="/page/fwgl">
            <el-menu-item index="1-1">外卖订单</el-menu-item>
        </router-link>
        <router-link to="/page/fworder">
            <el-menu-item index="1-2">预定订单</el-menu-item>
        </router-link>
        <router-link to="/page/yichang">
            <el-menu-item index="1-3">异常外卖订单</el-menu-item>
        </router-link>
        <router-link to="/page/duizhang">
            <el-menu-item index="1-4">对账单</el-menu-item>
        </router-link>
        <router-link to="/page/cuidan">
            <el-menu-item index="1-5">催单记录</el-menu-item>
        </router-link>
        <el-menu-item index="1-6">预定电子卷验证</el-menu-item>
    </el-menu-item-group>
</el-submenu>
<el-submenu index="10">
    <template slot="title">
              <i class="el-icon-folder"></i>
              <span>上门服务管理</span>
            </template>
    <el-menu-item-group>
        <router-link to="/page/fwgl">
            <el-menu-item index="1-1">服务管理</el-menu-item>
        </router-link>
        <router-link to="/page/fworder">
            <el-menu-item index="1-2">服务订单</el-menu-item>
        </router-link>
        <router-link to="/page/yichang">
            <el-menu-item index="1-3">异常服务订单</el-menu-item>
        </router-link>
    </el-menu-item-group>
</el-submenu>
</el-menu>
</el-col>
<el-col :span="19">
    <div class="rightdiv">
        <router-view></router-view>
    </div>
</el-col>
</el-row>
</div>
</template>
<script>
    export default {
        data() {
            return {
                defaultProps: {
                    children: "children",
                    label: "label"
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
            open() {
                this.$confirm("是否退出登录", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    })
                    .then(() => {
                        this.$message({
                            type: "success",
                            message: "注销成功!",
                        });
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消注销！"
                        });
                    });
            }
        }
    };
</script>
<style scoped>
    .top {
        background: #ff8800;
        padding: 10px 0;
    }
    
    .logoimg {
        width: 120px;
        margin-left: 20px;
    }
    
    .pingtaispan {
        color: #ffffff;
        font-size: 13px;
        position: relative;
        top: -12px;
        left: 10px;
    }
    
    .rightul {
        float: right;
        margin-right: 20px;
        margin-top: -10px;
    }
    
    .rightul li {
        color: #ffffff;
        display: inline-block;
        margin-left: 20px;
        text-align: center;
        height: 57px;
        line-height: 57px;
        font-size: 14px;
    }
    
    .rightul li:nth-of-type(1) {
        width: 100px;
    }
    
    .rightul li:nth-of-type(2) {
        width: 80px;
    }
    
    .rightul li:nth-of-type(3) {
        width: 40px;
    }
    
    .rightul li:nth-of-type(4) {
        width: 40px;
    }
    
    .rightul li:nth-of-type(5) {
        width: 40px;
    }
    
    .rightul li:hover {
        background: #ffa53f;
    }
    
    body .el-badge {
        background-color: #f56c6c;
        border-radius: 50%;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        width: 13px !important;
        height: 13px;
        line-height: 13px;
        text-align: center;
        white-space: nowrap;
        border: 1px solid #fff;
        margin-top: 14px !important;
    }
    
    .rightdiv {
        width: 100%;
        height: 91vh;
        display: flex;
    }
    
    .el-menu {
        height: 91vh;
        overflow: scroll;
    }
    
    .dian {
        margin-right: 10px;
        font-weight: bold;
    }
    
    .el-menu-item {
        color: #000000;
        text-decoration: none;
    }
</style>
<style>

</style>