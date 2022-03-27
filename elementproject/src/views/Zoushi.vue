<template>
  <div id="Service">
    <p class="serP">
      <span>I</span> 服务管理
    </p>
    <div class="daDiv">
      <ul>
        <router-link to="/page/caiwu" tag="li">财务概况</router-link>
        <router-link to="/page/zoushi" tag="li">销售走势</router-link>
        <router-link to="/page/caiwumingxi" tag="li">财务明细</router-link>
        <li id="on"></li>
      </ul>
      <el-row class="jiq">
        <el-col :span="3">
          <el-dropdown>
            <span style="color='#000000'" class="el-dropdown-link">
              2018年
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>2015年</el-dropdown-item>
              <el-dropdown-item>2016年</el-dropdown-item>
              <el-dropdown-item>2017年</el-dropdown-item>
              <el-dropdown-item>2018年</el-dropdown-item>
              <el-dropdown-item>2019年</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="3" class="qcv">
          <el-button type="primary" size="small ">查 询</el-button>
        </el-col>
      </el-row>
      <div>
          <img class="zoushiimg" src="@/assets/img/zoushi.png" alt="">
      </div>
    </div>
  </div>
</template>

<style>
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
.el-table .cell {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding-right: 10px;
  display: flex;
  text-align: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown {
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;
  margin-top: 9px;
}
.zoushiimg{
    width: 100%;
    margin-top: 40px;
}
</style>
<style scoped>
.el-button--primary {
  background: #ff8800;
  border: 1px solid #ff8800;
}
.jiq {
  margin-top: 20px;
  border: 1px solid #e4e4e4;
  padding: 5px;
}
.qcv {
  margin-top: 3px;
}
.daDiv ul::after {
  content: "";
  display: block;
  clear: both;
}
.daDiv ul {
  display: flex;
  border-bottom: 2px solid #ff8800;
}
.daDiv ul li:hover {
  opacity: 0.9;
}
.daDiv ul li:nth-of-type(2) {
  background: #ff8800;
  color: #fff;
}
.daDiv ul li:nth-of-type(4) {
  background: #ff8800;
  color: #fff;
}

.daDiv ul li {
  flex: 1;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  background: #f2f2f2;
  font-size: 14px;
  padding: 10px 5px;
  text-align: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-right: 8px;
  float: left;
}
body #on {
  flex: 6;
  background: #fff;
  border: none;
  padding: 0;
  text-align: center;
}
body #on p {
  margin-top: 5px;
  float: right;
  width: 80px;
  background: #ff8800;
  padding: 7px;
  border-radius: 5px;
  color: #fff;
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
#Service {
  background: #f2f2f2;
  overflow: scroll;
  width: 100%;
}
.edu {
  border: 1px solid #e4e4e4;
  margin-top: 5px;
  padding: 10px 5px;
  background: #fefbef;
}
.edu p {
  font-weight: bold;
}
.eduspan {
  color: #ff8800;
  line-height: 25px;
}
</style>

<script>
export default {
  name: "Service",
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
      idd: "",
      tableData: [
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        },
        {
          date: "1001",
          name: "美甲",
          address: "永久有效",
          name3: "26",
          name4: "0",
          name5: "标准服务"
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  }
};
</script>