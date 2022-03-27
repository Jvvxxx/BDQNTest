<template>
  <div id="Service">
    <p class="serP">
      <span>I</span> 门店列表
    </p>
    <div class="daDiv">
      <ul>
        <router-link to="/page/mendian" tag="li">已上线</router-link>
        <router-link to="/page/yixiaxian" tag="li">已下线</router-link>
        <router-link to="/page/shjilu" tag="li">审核记录</router-link>
        <router-link to="/page/shzhong" tag="li">审核记录</router-link>
        <li id="on"></li>
      </ul>
      <el-row class="jiq">
        <el-col :span="3">
          <el-input v-model="idd" placeholder="请输入服务名称/ID" size="small" />
        </el-col>
        <el-col :span="2" class="qcv">
          <el-button type="primary" size="small ">查 询</el-button>
        </el-col>
      </el-row>

      <Row>
        <i-col span="24">
          <Table border :columns="columns1" :data="data1"></Table>

          <div style="margin-top: 20px;height: 80px">
            <Page :total="100" show-sizer show-elevator />
          </div>
        </i-col>
      </Row>
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
.daDiv ul li:nth-of-type(2) {
  background: #ff8800;
  color: #fff;
}
/* .daDiv ul li:nth-of-type(4) {
  background: #ff8800;
  color: #fff;
} */

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
    }
  },

  name: "Summary",
  data() {
    return {
      switch1: false,
      columns1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "编号",
          key: "index",
          width: 80,
          align: "center",
          render: (h, params) => {
            return h("div", {}, params.index + 1);
          }
        },
        {
          title: "门店名称",
          key: "a1",
          align: "center",
          width: 200
        },
        {
          title: "所在城市",
          align: "center",
          key: "a2",
          width: 100,
          render: (h, param) => {
            return h(
              "div",
              {
                style: {
                  color: "rgb(255,152,0)"
                }
              },
              param.row.a2
            );
          }
        },
        {
          title: "行业分类",
          align: "center",
          key: "a3",
          width: 100
        },
        {
          title: "项目类别",
          align: "center",
          key: "a4",
          width: 100
        },

        {
          title: "操作",
          key: "uses",
          align: "center",
          width: 280,
          render: h => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  style: {
                    marginLeft: "20px"
                  }
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "warning",
                    size: "small"
                  },
                  style: {
                    marginLeft: "20px"
                  }
                },
                "更新"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginLeft: "20px"
                  }
                },
                "上架"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  style: {
                    marginLeft: "20px"
                  }
                },
                "预览"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          a1: "花生米科技公司总部",
          a2: "广州",
          a3: "生活服务",
          a4: "资金类",
          a5: "发改",
          a6: "省级",
          a7: "科室一",
          a8: "某某子公司一",
          a9: "隔壁老王",
          a10: "5000万"
        },
        {
          a1: "花生米科技公司总部",
          a2: "广州",
          a3: "美容服务",
          a4: "科技类",
          a5: "科技",
          a6: "国家",
          a7: "科室二",
          a8: "某某子公司二",
          a9: "隔壁老张",
          a10: "5000万"
        },
        {
           a1: "花生米科技公司总部",
          a2: "广州",
          a3: "餐饮美食",
          a4: "荣誉类",
          a5: "工信",
          a6: "国家",
          a7: "科室三",
          a8: "某某子公司三",
          a9: "小胖",
          a10: "5000万"
        }
      ],
      forms: {
        bumen: "",
        jibie: "",
        keshi: "",
        xiags: "",
        type: "",
        date: "",
        search: ""
      }
    };
  }
};
</script>