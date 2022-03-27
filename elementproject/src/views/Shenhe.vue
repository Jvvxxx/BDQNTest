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
        <li id="on">
          <p>新增服务</p>
        </li>
      </ul>
      <template>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
          <el-table-column ><img src="../assets/img/yanzheng.png" alt=""></el-table-column>
          <el-table-column label="服务详情">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="服务类型"></el-table-column>
          <el-table-column prop="address" label="提交时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name3" label="审核类型"></el-table-column>
          <el-table-column prop="name4" label="未审核"></el-table-column>
          <el-table-column label="操作">
          </el-table-column>
        </el-table> 
      </template>
    </div>
  </div>
</template>

<style>
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
.daDiv ul li:nth-of-type(3) {
  background: #ff8800;
  color: #fff;
}
.daDiv ul li:nth-of-type(4),.daDiv ul li:nth-of-type(5) {
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
  background: #fff;
  padding: 10px 5px;
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
  name: "Service3",

  data() {
    return {
      
    }
  }

};
</script>