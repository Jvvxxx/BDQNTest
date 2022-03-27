<template>
  <div id="Servu">
    <p class="serP">
      <span>I</span> 配送模板
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
        <el-table ref="multipleTable" tooltip-effect="dark" style="width: 100%">
          <el-table-column label="模板名称"></el-table-column>
          <el-table-column label="计价方式"></el-table-column>
          <el-table-column label="配送地区" show-overflow-tooltip></el-table-column>
          <el-table-column label="起步数量"></el-table-column>
          <el-table-column label="起步价（元）"></el-table-column>
          <el-table-column label="递增数量"></el-table-column>
          <el-table-column label="操作"></el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1"
    };
  }
};
</script>
<style >
.block {
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
.wqe {
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