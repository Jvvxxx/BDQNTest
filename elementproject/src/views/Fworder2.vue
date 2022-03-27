<template>
  <div id="Servu">
    <p class="serP">
      <span>I</span> 团购订单列表
    </p>
    <div class="daDiv">
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <el-form ref="form" label-width="80px" size="mini">
              <el-form-item label="活动时间">
                <el-col :span="10">
                  <el-date-picker type="date" placeholder="选择日期" size="mini" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="10">
                  <el-time-picker placeholder="选择时间" size="mini" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入订单号或手机号" size="mini"></el-input>
          </div>
        </el-col>
        <el-col :span="4    " :offset="1">
          <el-dropdown :hide-on-click="false" size="mini">
            <span class="el-dropdown-link">
              全部
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <el-button type="primary" size="mini ">查 询</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <span>订单管理:</span>
            <template>
              <el-radio v-model="radio" label="1" size="mini ">全部</el-radio>
              <el-radio v-model="radio" label="2" size="mini ">待接单</el-radio>
              <el-radio v-model="radio" label="3" size="mini ">服务中</el-radio>
              <el-radio v-model="radio" label="4" size="mini ">代付尾款</el-radio>
              <el-radio v-model="radio" label="5" size="mini ">待评价</el-radio>
              <el-radio v-model="radio" label="6" size="mini ">已完成</el-radio>
              <el-radio v-model="radio" label="7" size="mini ">已取消</el-radio>
            </template>
          </div>
        </el-col>
      </el-row>
      <template>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
          <el-table-column>
              愉悦与项目:1888888888<br>
              客户信息:十月大神 180000<br>
              服务地址:广东省广州市越秀
          </el-table-column>
          <el-table-column label="详情">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="服务门店"></el-table-column>
          <el-table-column prop="address" label="服务时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name3" label="订单结算总额"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope>
                <p class="wqe">取消接单</p>
              <el-button size="mini" type="danger" class="shanchu">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000"
          ></el-pagination>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      radio: "1",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          date: "预约项目:华为mate20电池",
          name: "门店名称:花生科技公司总",
          address: "2018-12-12 12:00:00",
          name3: "￥ 18",
        },{
          date: "预约项目:华为mate20电池",
          name: "门店名称:花生科技公司总",
          address: "2018-12-12 12:00:00",
          name3: "￥ 18",
        },{
          date: "预约项目:华为mate20电池",
          name: "门店名称:花生科技公司总",
          address: "2018-12-12 12:00:00",
          name3: "￥ 18",
        },{
          date: "预约项目:华为mate20电池",
          name: "门店名称:花生科技公司总",
          address: "2018-12-12 12:00:00",
          name3: "￥ 18",
        },{
          date: "预约项目:华为mate20电池",
          name: "门店名称:花生科技公司总",
          address: "2018-12-12 12:00:00",
          name3: "￥ 18",
        },{
          date: "预约项目:华为mate20电池",
          name: "门店名称:花生科技公司总",
          address: "2018-12-12 12:00:00",
          name3: "￥ 18",
        },{
          date: "预约项目:华为mate20电池",
          name: "门店名称:花生科技公司总",
          address: "2018-12-12 12:00:00",
          name3: "￥ 18",
        },{
          date: "预约项目:华为mate20电池",
          name: "门店名称:花生科技公司总",
          address: "2018-12-12 12:00:00",
          name3: "￥ 18",
        },{
          date: "预约项目:华为mate20电池",
          name: "门店名称:花生科技公司总",
          address: "2018-12-12 12:00:00",
          name3: "￥ 18",
        },{
          date: "预约项目:华为mate20电池",
          name: "门店名称:花生科技公司总",
          address: "2018-12-12 12:00:00",
          name3: "￥ 18",
        }
      ]
    };
  }
};
</script>
<style >

.block{
    text-align: center;
}
.bj {
  border: 1px solid #0a82f8;
  background: #0a82f8;
  color: #fff;
}
.shanchu {
  border: 1px solid #00be7f;
  background: #00be7f;
}
.el-table--fit {
  margin-top: 10px;
  border: 1px solid #e4e4e4;
}
tbody .cell {
  font-size: 12px;
}
.cell {
  text-align: center;
}
.el-table th.is-leaf {
  background: #f2f2f2;
}
.is-leaf {
  font-weight: normal;
  color: black;
}
.el-radio__label {
  margin-left: 3px;
  font-size: 12px;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #ff8800;
  background: #ff8800;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #ff8800;
}
.el-icon-arrow-down:before {
  margin-left: 88px;
  content: "\E6DF";
}
</style>
<style scoped>
.wqe{
    color: #ff8800;
}
.grid-content > span {
  margin-right: 40px;
  padding-left: 20px;
}
.grid-content {
  font-size: 12px;
  color: #666666;
}
.el-button--primary {
  background: #ff8800;
  border: 1px solid #ff8800;
}
.daDiv {
  margin: 20px 30px;
   padding: 10px 5px;
  background: #fff;
}
.serP {
  font-size: 16px;
  color: #666666;
  padding: 10px;
  background: #fff;
}
.serP span {
  color: #ff8800;
  font-weight: bold;
  font-size: 18px;
}
#Servu {
  background: #f2f2f2;
  overflow: scroll;
  width: 100%;
}
</style>