(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22ce74"],{f4e5:function(e,a,l){"use strict";l.r(a);var o=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("j-form-container",{attrs:{disabled:e.formDisabled}},[l("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[l("a-row",[l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"内容",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"content"}},[l("a-input",{attrs:{placeholder:"请输入内容",disabled:""},model:{value:e.model.content,callback:function(a){e.$set(e.model,"content",a)},expression:"model.content"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"点赞总数",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"praiseCount"}},[l("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入点赞总数",disabled:""},model:{value:e.model.praiseCount,callback:function(a){e.$set(e.model,"praiseCount",a)},expression:"model.praiseCount"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"区域编码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"regionCode"}},[l("a-input",{attrs:{placeholder:"请输入区域编码",disabled:""},model:{value:e.model.regionCode,callback:function(a){e.$set(e.model,"regionCode",a)},expression:"model.regionCode"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"创建人",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"createBy"}},[l("a-input",{attrs:{placeholder:"请输入创建人",disabled:""},model:{value:e.model.createBy,callback:function(a){e.$set(e.model,"createBy",a)},expression:"model.createBy"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"举报次数",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"informCount"}},[l("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入举报次数",disabled:""},model:{value:e.model.informCount,callback:function(a){e.$set(e.model,"informCount",a)},expression:"model.informCount"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"创建时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"createTime"}},[l("j-date",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择创建时间","show-time":!0,"date-format":"YYYY-MM-DD HH:mm:ss",disabled:""},model:{value:e.model.createTime,callback:function(a){e.$set(e.model,"createTime",a)},expression:"model.createTime"}})],1)],1)],1)],1)],1)],1)},t=[],r=l("0fea"),s=(l("ca00"),{name:"BbsMessageBoardForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/bbs/bbsMessageBoard/add",edit:"/bbs/bbsMessageBoard/edit",queryById:"/bbs/bbsMessageBoard/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,a=this;this.$refs.form.validate((function(l){if(l){a.confirmLoading=!0;var o="",t="";e.model.id?(o+=e.url.edit,t="put"):(o+=e.url.add,t="post"),Object(r["h"])(o,e.model,t).then((function(e){e.success?(a.$message.success(e.message),a.$emit("ok")):a.$message.warning(e.message)})).finally((function(){a.confirmLoading=!1}))}}))}}}),n=s,i=l("cba8"),d=Object(i["a"])(n,o,t,!1,null,null,null);a["default"]=d.exports}}]);