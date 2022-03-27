<template>
  <div id="login">
    <div class="kuang">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark oq">020商城商家后台系统</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-input placeholder="请输入账号" v-model="user">
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-input placeholder="请输入密码" type="password" v-model="pwd">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-input placeholder="请输入验证码" class="nq" v-model="yan">
            <i slot="prefix" class="el-input__icon el-icon-menu"></i>
          </el-input>
          <img src="@/assets/img/yanzheng.png" alt class="qa" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-button type="primary" @click="submit()">登 录</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <p class="oi">免校验直接登录</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                yan: "",
                user: "",
                pwd: ""
            };
        },
        methods: {
            submit() {
                this.axios({
                    method: "post",
                    url: "http://122.112.253.28:8888/api/private/v1/login",
                    data: {
                        username: this.user,
                        password: this.pwd
                    }
                }).then(result => {
                    if (this.user == "") {
                        this.$message.error({
                            message: "用户名不能为空!",
                            type: "warning"
                        });
                    } else if (this.pwd == "") {
                        this.$message.error({
                            message: "密码不能为空!",
                            type: "warning"
                        });
                    } else if (this.yan == "") {
                        this.$message.error({
                            message: "验证码不能为空!",
                            type: "warning"
                        });
                    } else if (this.yan != "g83G") {
                        this.$message({
                            message: "验证码不一致!",
                            type: "warning"
                        });
                    } else {
                        if (result.data.meta.status == "200") {
                            sessionStorage.setItem("token", result.data.data.token);
                            this.$message({
                                message: "登录成功!",
                                type: "success"
                            });
                            this.$store.dispatch('asyncUpdataUser', {
                                name: this.user
                            })
                            this.$router.push('/page')
                        } else {
                            let aw = result.data.meta.msg;
                            this.$message.error({
                                message: "" + aw + "!",
                                type: "warning"
                            });
                        }
                    }
                });
            }
        }
    };
</script>
<style scoped>
    .oi {
        margin-top: 10px;
        font-size: 12px;
        color: #ff8800;
        text-align: right;
    }
    
    .el-button--primary {
        border: none;
        background: linear-gradient(to right, #ff8900, #ffb900);
    }
    
    .el-button {
        width: 100%;
    }
    
    .nq {
        width: 68%;
    }
    
    .el-input {
        margin: 15px 0;
    }
    
    .qa {
        width: 89px;
        margin-left: 10px;
        vertical-align: middle;
    }
    
    .oq {
        letter-spacing: 2px;
        text-align: center;
        color: #ff8800;
        font-weight: bold;
        font-size: 27px;
    }
    
    .kuang {
        position: absolute;
        right: 150px;
        top: 100px;
        padding: 35px 35px 3px 35px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        background: linear-gradient(to bottom, #fcd3ddd7, #ffe6e1de);
    }
    
    #login {
        position: relative;
        height: 100vh;
        background: url("../assets/img/loginlogo.png") no-repeat;
        background-position: 0 1px;
    }
</style>