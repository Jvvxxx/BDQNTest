<template>
  <div id="Service">
    <p class="serP">
      <span>I</span> 满免运费
    </p>
    <div class="daDiv">
      <div class="mian">
        <p>
          满免运费：
          <el-switch active-color="#FF8800"  inactive-color="#CCCCCC"></el-switch>
        </p>
        <p>温馨提示：若开启满免运费，则当订单中的商品金额大于设定值时，免除运费</p>
      </div>
        <div class="mian">
        <p>满免方式：订单金额满 <el-input size="mini" ></el-input> 元，免运费【只能填写数字】</p>
      </div>
      <el-button class="ca" type="warning"  size="small " :plain="true" @click="open">保 存</el-button>
    </div>
  </div>
</template>

<style >
.el-button--warning{
    border: #ff8800 1px solid;
    background: #ff8800;
    margin: 20px 0 20px 0;
}
.el-input{
    width: 5%;
}
.mian p {
  margin: 5px 0;
}
.mian {
  margin: 15px 0;
  padding: 8px;
  font-size: 12px;
  border: 1px solid #e4e4e4;
  background: #f2f2f2;
}
.daDiv {
  margin: 20px 30px;
  padding: 10px 55px;
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
    height: 100vh;
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
        value: true
    };
  },
  methods:{
open() {
        this.$message('保存成功！');
      },
  }
};
</script>