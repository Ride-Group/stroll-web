(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21abe5"],{bd8e:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"任务名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.name",{rules:[{required:!0,message:"请输入任务名称",whitespace:!0}]}],expression:"[ 'task.name', {rules: [{ required: true, message: '请输入任务名称', whitespace: true}]} ]"}],attrs:{placeholder:"请输入任务名称"}})],1)],1),t("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[t("a-form-item",{attrs:{label:"任务描述"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.description",{rules:[{required:!0,message:"请输入任务描述",whitespace:!0}]}],expression:"[ 'task.description', {rules: [{ required: true, message: '请输入任务描述', whitespace: true}]} ]"}],attrs:{placeholder:"请输入任务描述"}})],1)],1),t("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[t("a-form-item",{attrs:{label:"执行人"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.executor",{rules:[{required:!0,message:"请选择执行人"}]}],expression:"[\n            'task.executor',\n            {rules: [{ required: true, message: '请选择执行人'}]}\n          ]"}],attrs:{placeholder:"请选择执行人"}},[t("a-select-option",{attrs:{value:"黄丽丽"}},[e._v("黄丽丽")]),t("a-select-option",{attrs:{value:"李大刀"}},[e._v("李大刀")])],1)],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"责任人"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.manager",{rules:[{required:!0,message:"请选择责任人"}]}],expression:"[\n            'task.manager',\n            {rules: [{ required: true, message: '请选择责任人'}]}\n          ]"}],attrs:{placeholder:"请选择责任人"}},[t("a-select-option",{attrs:{value:"王伟"}},[e._v("王伟")]),t("a-select-option",{attrs:{value:"李红军"}},[e._v("李红军")])],1)],1)],1),t("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[t("a-form-item",{attrs:{label:"提醒时间"}},[t("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.time",{rules:[{required:!0,message:"请选择提醒时间"}]}],expression:"[\n            'task.time',\n            {rules: [{ required: true, message: '请选择提醒时间'}]}\n          ]"}],staticStyle:{width:"100%"}})],1)],1),t("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[t("a-form-item",{attrs:{label:"任务类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.type",{rules:[{required:!0,message:"请选择任务类型"}]}],expression:"[ 'task.type', {rules: [{ required: true, message: '请选择任务类型'}]} ]"}],attrs:{placeholder:"请选择任务类型"}},[t("a-select-option",{attrs:{value:"定时执行"}},[e._v("定时执行")]),t("a-select-option",{attrs:{value:"周期执行"}},[e._v("周期执行")])],1)],1)],1)],1),e.showSubmit?t("a-form-item",[t("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},s=[],o={name:"TaskForm",props:{showSubmit:{type:Boolean,default:!1}},data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){var a=this;e.preventDefault(),this.form.validateFields((function(e,t){e||a.$notification["error"]({message:"Received values of form:",description:t})}))}}},l=o,i=t("cba8"),m=Object(i["a"])(l,r,s,!1,null,"067739de",null);a["default"]=m.exports}}]);