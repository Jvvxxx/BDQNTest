<template>
  <div id="Servu">
 
    <div class="daDiv">
          <el-row :gutter="20">
        <el-col :span="8">
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
        <el-col :span="4" :offset="1">
          <div class="grid-content bg-purple">
            <el-button type="primary" size="mini ">查 询</el-button>
          </div>
        </el-col>
      </el-row>
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="门店" ></el-table-column>
          <el-table-column prop="name" label="订单号" ></el-table-column>
          <el-table-column prop="name2" label="订单金额" ></el-table-column>
          <el-table-column prop="name3" label="在线支付" ></el-table-column>
          <el-table-column prop="name4" label="配送地址" ></el-table-column>
          <el-table-column prop="name5" label="代金券" ></el-table-column>
          
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
.el-button--primary {
  background: #ff8800;
  border: 1px solid #ff8800;
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
          name4: "广州市越秀区东园横路1号",
          name5: "￥0",
        },    {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "广州市越秀区东园横路1号",
          name5: "￥0",
        },    {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "广州市越秀区东园横路1号",
          name5: "￥0",
        },    {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "广州市越秀区东园横路1号",
          name5: "￥0",
        },    {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "广州市越秀区东园横路1号",
          name5: "￥0",
        },    {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "广州市越秀区东园横路1号",
          name5: "￥0",
        },    {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "广州市越秀区东园横路1号",
          name5: "￥0",
        },    {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "广州市越秀区东园横路1号",
          name5: "￥0",
        },    {
          date: "花生米科技公司总部",
          name: "20181228030",
          name2: "￥15",
          name3: "￥0",
          name4: "广州市越秀区东园横路1号",
          name5: "￥0",
        },
      ]
    };
  }
};
</script>