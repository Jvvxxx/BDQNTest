<template>
  <div id="Servu">
    <p class="serP">
      <span>I</span> 对账单
      <el-button type="info" size="mini" plain>信息按钮</el-button>
    </p>
    <div class="daDiv">
      <div class="oqm">
        <p>
          销售金额：
          <span>￥2000</span>未确认
          <span>￥750</span>已完成
          <span>￥1200</span>退款/取消订单
          <span>￥50</span>
        </p>
        <p>注：以上数据统计的是所有订单销售金额，商户最终结算费用以每个订单的结算价为准，货到付款/到店支付不产生结算价</p>
      </div>
      <div class="oqm">
        <p>
          已结算
          <span>￥0</span>待结算
          <span>￥1900</span>已结算佣金
          <span>￥100</span>
          <el-button size="mini">结算</el-button>
        </p>
      </div>
      <div class="oqm">
        <p>
          <el-form ref="form" label-width="80px" size="mini">
            <el-form-item label="活动时间">
              <el-col :span="3">
                <el-date-picker type="date" placeholder="选择日期" size="mini" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="1" style="text-align: center">-</el-col>
              <el-col :span="3">
                <el-time-picker placeholder="选择时间" size="mini" style="width: 100%;"></el-time-picker>
              </el-col>
              <el-col :span="4" :offset="3">
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
              <el-col :span="10">
                <el-button size="mini">查询</el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </p>
      </div>
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="门店" ></el-table-column>
          <el-table-column prop="name" label="订单号" ></el-table-column>
          <el-table-column prop="name2" label="订单金额" ></el-table-column>
          <el-table-column prop="name3" label="在线支付" ></el-table-column>
          <el-table-column prop="name4" label="活动补贴" ></el-table-column>
          <el-table-column prop="name5" label="代金券" ></el-table-column>
          <el-table-column prop="name6" label="佣金" ></el-table-column>
          <el-table-column prop="name7" label="结算价" ></el-table-column>
          <el-table-column prop="name8" label="创建时间" ></el-table-column>
        </el-table>
      </template>
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
            currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
        }, {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "￥15",
          name5: "￥0",
          name6: "-￥5",
          name7: "￥10",
          name8: "2018-12-12"
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
 .el-table th.is-leaf{
        font-weight: normal;
        background: #F2F2F2;
        text-align: center;
        border: 1px solid #EBEEF5;
    }
    .el-table td{
           text-align: center;
            border: 1px solid #EBEEF5;
        font-size: 12px;
    }
</style>
<style scoped>
.oqm p::after {
  content: "";
  display: block;
  clear: both;
}
.oqm p .el-button {
  background: #ff8800;
  border: 1px solid #ff8800;
  float: right;
  color: #fff;
}
.oqm span {
  color: #ff8800;
  margin-right: 40px;
}
.oqm p {
  margin: 10px 0;
  font-size: 12px;
  color: black;
}
.oqm {
  margin-bottom: 10px;
  background: #fefbef;
  padding: 10px;
  border: 1px solid #e4e4e4;
}
.daDiv {
  margin: 20px 30px;
  padding: 10px 55px;
  background: #fff;
}
.serP .el-button {
  float: right;
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