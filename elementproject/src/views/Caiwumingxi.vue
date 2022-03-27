<template>
  <div id="Service">
    <p class="serP">
      <span>I</span> 财务报表
    </p>
    <div class="daDiv">
      <ul>
        <router-link to="/page/caiwu" tag="li">财务概况</router-link>
        <router-link to="/page/zoushi" tag="li">销售走势</router-link>
        <router-link to="/page/caiwumingxi" tag="li">财务明细</router-link>
      </ul>
      <div class="page-out">
        <div class="page-inner">
          <div class="container" style="padding: 10px 20px">
            <Row style="margin-top: 35px ;padding: 25px 0;border-bottom: 1px solid #dedede">
              <Row style>
                <i-col span="3" offset="1">
                  <Select v-model="forms.type" placeholder="项目主管部门">
                    <Option value="1">某某子公司</Option>
                    <Option value="2">某某子公司</Option>
                    <Option value="3">某某子公司</Option>
                  </Select>
                </i-col>
                <i-col span="3" offset="1">
                  <Select v-model="forms.bumen" placeholder="项目级别">
                    <Option value="1">资金类</Option>
                    <Option value="2">科技类</Option>
                    <Option value="3">荣誉类</Option>
                  </Select>
                </i-col>

                <i-col span="3" offset="1">
                  <Select v-model="forms.leibie" placeholder="主管科室">
                    <Option value="1">资金类</Option>
                    <Option value="2">科技类</Option>
                    <Option value="3">荣誉类</Option>
                  </Select>
                </i-col>

                <i-col span="3" offset="1">
                  <Select v-model="forms.keshi" placeholder="项目下沉公司">
                    <Option value="1">资金类</Option>
                    <Option value="2">科技类</Option>
                    <Option value="3">荣誉类</Option>
                  </Select>
                </i-col>

                <i-col span="3" offset="1">
                  <Select v-model="forms.xiags" placeholder="项目下沉公司">
                    <Option value="1">资金类</Option>
                    <Option value="2">科技类</Option>
                    <Option value="3">荣誉类</Option>
                  </Select>
                </i-col>
              </Row>

              <Row style="margin-top: 35px">
                <i-col span="3" offset="1">
                  <DatePicker type="date" placeholder="请输入日期范围" v-model="forms.date"></DatePicker>
                </i-col>

                <i-col span="3" offset="1">
                  <i-input type="text" placeholder="模糊搜索" v-model="forms.search"></i-input>
                </i-col>
                <i-col span="1" style="text-align: left;display: flex">
                  <Button icon="ios-search" type="primary" style="margin-left: 15px">搜索</Button>
                  <Button type="error">批量删除</Button>
                  <Button style="margin-left: 10px">通过</Button>
                  <Button style="margin-left: 10px">驳回</Button>
                  <Button style="margin-left: 10px">提交</Button>
                  <Button style="margin-left: 10px">导出</Button>
                </i-col>
              </Row>
            </Row>
            <Row>
              <i-col span="24" style="padding: 20px 0">
                <Button style="margin-left: 15px">导出</Button>
              </i-col>
            </Row>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
          title: "序号",
          key: "index",
          width: 80,
          align: "center",
          render: (h, params) => {
            return h("div", {}, params.index + 1);
          }
        },
        {
          title: "申报时间",
          key: "a1",
          align: "center",
          width: 200
        },
        {
          title: "状态",
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
          title: "项目名称",
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
          title: "项目主管部门",
          align: "center",
          key: "a5",
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
                "详细"
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
                "公告"
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
                "编辑"
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
                "删除"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          a1: "2020-08-08",
          a2: "待提交",
          a3: "某某某公司大数据建设",
          a4: "资金类",
          a5: "发改",
          a6: "省级",
          a7: "科室一",
          a8: "某某子公司一",
          a9: "隔壁老王",
          a10: "5000万"
        },
        {
          a1: "2020-08-08",
          a2: "待验收",
          a3: "某某公司的科技项目",
          a4: "科技类",
          a5: "科技",
          a6: "国家",
          a7: "科室二",
          a8: "某某子公司二",
          a9: "隔壁老张",
          a10: "5000万"
        },
        {
          a1: "2020-08-08",
          a2: "已归档",
          a3: "某某荣誉项目",
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
.daDiv ul li:nth-of-type(4) {
  background: #ff8800;
  color: #fff;
}

.daDiv ul li {
  flex: 0.1;
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
</style>