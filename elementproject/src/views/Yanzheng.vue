<template>
  <div class="home">
    <div class="aj">
      <el-row>
        <el-col :span="24">
          <p class="aj2">
            <span class="aj1">I</span>
            <span class="aj3">验证消费券</span>
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="bb">
      <template>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="消费劵验证" name="first">
            <p class="bb1">选择门店</p>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
              style="margin-left:-100px;"
            >
              <el-form-item prop="region">
                <el-select v-model="ruleForm.region" placeholder="花生米科技公司总部">
                  <el-option label="花生米科技公司总部" value="shanghai"></el-option>
                  <el-option label="花生米科技公司（越秀店）" value="beijing"></el-option>
                  <el-option label="花生米科技公司（天河店）" value="beijing"></el-option>
                  <el-option label="花生米科技公司（黄埔店）" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <p class="bb2">请先验证消费劵，再接待</p>
              <el-form-item prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入消费劵 [123456]"></el-input>
                <el-button type="warning" style="margin-left:20px;">验证消费劵</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="消费劵批量验证" name="second">
            <p class="bb1">选择门店</p>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
              style="margin-left:-100px;"
            >
              <el-form-item prop="region">
                <el-select v-model="ruleForm.region" placeholder="花生米科技公司总部">
                  <el-option label="花生米科技公司总部" value="shanghai"></el-option>
                  <el-option label="花生米科技公司（越秀店）" value="beijing"></el-option>
                  <el-option label="花生米科技公司（天河店）" value="beijing"></el-option>
                  <el-option label="花生米科技公司（黄埔店）" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <p>请先验证消费劵，再接待</p>
            <div class="ff1">
              <el-input v-model="input" placeholder="123456"></el-input>
              <sapn
                class="el-icon-success"
                style="float:right;background-color:white;width:100%;display: contents;padding: 0 131px;height:25px;margin-right:700px;color:gray;font-size:13px;"
              >消费券输入正确</sapn>
            </div>
            <div class="ff1">
              <el-input v-model="input" placeholder="333333"></el-input>
              <sapn
                class="el-icon-success"
                style="float:right;background-color:white;width:100%;display: contents;padding: 0 131px;height:25px;margin-right:700px;color:gray;font-size:13px;"
              >没有消费券数据</sapn>
            </div>
            <div class="ff1">
              <el-input v-model="input" placeholder="444444"></el-input>
              <sapn
                class="el-icon-success"
                style="float:right;background-color:white;width:100%;display: contents;padding: 0 131px;height:25px;margin-right:700px;color:gray;font-size:13px;"
              >该券已于2018-12-12-12 12:12:12:12过期</sapn>
            </div>
            <div class="ff1">
              <el-input v-model="input" placeholder="222222"></el-input>
              <sapn
                class="el-icon-success"
               style="float:right;background-color:white;width:100%;display: contents;padding: 0 131px;height:25px;margin-right:700px;color:gray;font-size:13px;"
              >该券已于2018-12-12-12 12:12:12:12使用过</sapn>
            </div>
            <div class="ff1">
              <el-input v-model="input" placeholder="111111"></el-input>
              <sapn
                class="el-icon-success"
                style="float:right;background-color:white;width:100%;display: contents;padding: 0 131px;height:25px;margin-right:700px;color:gray;font-size:13px;"
              >验证码格式错误</sapn>
            </div>
            <el-row style="margin-top:20px;">
              <el-button type="warning">保存</el-button>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="超级验证" name="third">
            <p class="bb1">选择门店</p>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
              style="margin-left:-100px;"
            >
              <el-form-item prop="region">
                <el-select v-model="ruleForm.region" placeholder="花生米科技公司总部">
                  <el-option label="花生米科技公司总部" value="shanghai"></el-option>
                  <el-option label="花生米科技公司（越秀店）" value="beijing"></el-option>
                  <el-option label="花生米科技公司（天河店）" value="beijing"></el-option>
                  <el-option label="花生米科技公司（黄埔店）" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <p class="bb2">请先验证消费劵，再接待</p>
              <el-form-item prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入消费劵 [123456]"></el-input>
                <el-button type="warning" style="margin-left:20px;">验证消费劵</el-button>
              </el-form-item>
            </el-form>
            <div class="tt">
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <h3 class="pu">温馨提示</h3>
                    <p>超级验证，输入其中一个消费券可以查询出该订单下所有可用消费券；</p>
                    <p>根据输入的张数随机抽取你要使用的消费券，但必须是同一款商品；</p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>
   

<script>
export default {
  data() {
    return {
      activeName: "first",
      ruleForm: {
        name: "",
        region: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
.aj {
  background-color: #f2f2f2;
  height: 30px;
  margin: 0;
}
.aj1 {
  color: orange;
  font-weight: bold;
}
.aj2 {
  margin-top: 3px;
  padding-left: 30px;
}
.aj3 {
  padding-left: 10px;
}
.bb {
  background-color: #f2f2f2;
  margin: 10px 50px;
  height: 665px;
}
/* .bb1{
  margin-left:20px;
} */
.el-tab-pane {
  margin-left: 20px !important;
}
.el-input__inner {
  margin-left: -100px;
}
.bb1 {
  margin-top: -3px;
  padding-left: 5px;
}
.bb2 {
  padding-left: 105px;
}
.el-input {
  width: 220px;
}
.tt {
  background: #fefbef;
  height: 130px;
  width: 1350px;
  margin: 10px 5px;
}
.pu {
  margin-left: 20px;
  margin-top: 2px;
}
.bg-purple-dark > p {
  font-size: 13px;
  color: gray;
  padding-left: 30px;
}
.ff1[data-v-94d5c4f8] {
    margin-top: 10px;
    width: 100%;
    display: flex;
}
.home {
  overflow: scroll;
  width: 100%;
}
</style>
<style>
.el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    width: 33vh;
}
.el-icon-success{
    width: 660px;
}
</style>