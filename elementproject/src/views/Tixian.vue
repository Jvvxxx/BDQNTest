<template>
  <div id="Service">
    <p class="serP">
      <span>I</span> 商户提现
    </p>
    <div class="daDiv">
      <el-row>
        <el-col :span="24">
          <div class="edu">
            <p>
              当前账户余额：
              <span class="eduspan">￥188</span>
            </p>
            <p>
              冻结余额：
              <span class="eduspan">
                ￥0
                <span class="orderspan">[包含订单完成后1天内的冻结贷款、提现审核中的冻结提现款]</span>
              </span>
            </p>
            <p>
              可提现余额：
              <span class="eduspan">￥188</span>
            </p>
            <p>
              提现银行名称：
              <span class="eduspan">中国建设银行</span>
            </p>
            <p>
              提现银行账户：
              <span class="eduspan">6221 0000 0000 0000 0000</span>
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="17">
          <label class="jelb" for="inputone">提现金额：</label>
          <el-input v-model="input" id="inputone" placeholder="请输入银行账户名称"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="17">
          <label class="jelb" for="inputone">图形校验码：</label>
          <el-input v-model="input" id="inputone" placeholder="图形校验码"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="17">
          <label class="jelb" for="inputone">短信验证码：</label>
          <el-input v-model="input" id="inputone" placeholder="短信验证码">
          </el-input>
        </el-col>
        <el-col :span="4">
<el-button style="background: #FF8800;margin-top: 20px;margin-left:-470px" type="primary" size="small ">发送验证码</el-button>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="24">
              <el-button style="background: #FF8800;margin-top: 20px;" type="primary" size="small ">提交申请</el-button>
          </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
</style>
<style scoped>
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
.orderspan {
  font-weight: bold;
  color: #515a97;
  margin-left: 10px;
}
.eduspan {
  color: #ff8800;
  line-height: 25px;
}
.jelb {
  position: relative;
  top: 28px;
  font-size: 13px;
  font-weight: bold;
}
</style>
<style>
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 32px;
  line-height: 32px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 18%;
  margin-left: 80px;
}
</style>

