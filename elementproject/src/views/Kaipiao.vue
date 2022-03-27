<template>
  <div id="Service">
    <p class="serP">
      <span>I</span> 开票设置
    </p>
    <div class="daDiv">
      <template>
          开票设置
        <el-radio v-model="radio" label="1">不支持发票</el-radio>
        <el-radio v-model="radio" label="2">开具普通发票</el-radio>
      </template><br>
      <el-button  type="primary" size="small ">保 存</el-button>
    </div>
  </div>
</template>
    </div>
  </div>
</template>

<style>
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
.el-radio {
    color: #606266;
    cursor: pointer;
    margin-right: 30px;
    margin-left: 16px;
}
.el-button--primary:focus, .el-button--primary:hover {
    background: #FF8800;
    border-color: #FF8800;
    color: #FFF;
}
[type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: button;
    margin-top: 15px;
    margin-left: 10px;
    background: #FF8800;
    border: none;
}
</style>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>