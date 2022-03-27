<template>
  <div id="Service">
    <p class="serP">
      <span>I</span> 服务管理
    </p>
    <div class="daDiv">
      <ul>
        <router-link to="/page/fwgl" tag="li">出售中</router-link>
        <router-link to="/page/xiajia" tag="li">已下架</router-link>
        <router-link to="/page/shenhe" tag="li">审核记录</router-link>
        <li>批量下架</li>
        <li id="on">
          <p>新增服务</p>
        </li>
      </ul>
      <el-row class="jiq">
        <el-col :span="3">
          <el-input v-model="idd" placeholder="请输入服务名称/ID" size="small" />
        </el-col>
        <el-col :span="2" class="qcv">
          <el-button type="primary" size="small ">查 询</el-button>
        </el-col>
      </el-row>
      <template>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
          <el-table-column type="selection"></el-table-column>
          <el-table-column label="服务ID">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="服务名称"></el-table-column>
          <el-table-column prop="address" label="上架时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name3" label="售价"></el-table-column>
          <el-table-column prop="name4" label="销量"></el-table-column>
          <el-table-column prop="name5" label="服务类型"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope>
              <el-button size="mini" class="bj">编 辑</el-button>
              <el-button size="mini" type="danger" class="shanchu" :plain="true" @click="open">删 除</el-button>
            </template>
          </el-table-column>
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
</style>
<style scoped>
.el-button--primary {
  background: #ff8800;
  border: 1px solid #ff8800;
}
.jiq {
  margin-top: 20px;
}
.qcv {
  margin-left: 15px;
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
.daDiv ul li:nth-of-type(1) {
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
      },
      open() {
          this.$message('删除成功！');
        },
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
        ]
      };
    }
  
};
</script>