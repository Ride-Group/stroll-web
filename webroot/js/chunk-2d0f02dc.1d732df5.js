(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f02dc"],{"9aec":function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("j-form-container",{attrs:{disabled:e.formDisabled}},[l("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[l("a-row",[l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"外卖ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"waimaiId"}},[l("a-input",{attrs:{placeholder:"请输入外卖ID"},model:{value:e.model.waimaiId,callback:function(a){e.$set(e.model,"waimaiId",a)},expression:"model.waimaiId"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"区域编码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"regionCode"}},[l("a-input",{attrs:{placeholder:"请输入区域编码"},model:{value:e.model.regionCode,callback:function(a){e.$set(e.model,"regionCode",a)},expression:"model.regionCode"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"用户",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"createBy"}},[l("a-input",{attrs:{placeholder:"请输入用户"},model:{value:e.model.createBy,callback:function(a){e.$set(e.model,"createBy",a)},expression:"model.createBy"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"进入方式",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"type"}},[l("j-dict-select-tag",{attrs:{type:"list",dictCode:"bbs_user_waimai_type",placeholder:"请选择进入方式"},model:{value:e.model.type,callback:function(a){e.$set(e.model,"type",a)},expression:"model.type"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"创建时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"createTime"}},[l("j-date",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择创建时间","show-time":!0,"date-format":"YYYY-MM-DD HH:mm:ss"},model:{value:e.model.createTime,callback:function(a){e.$set(e.model,"createTime",a)},expression:"model.createTime"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"使用状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"useStatus"}},[l("j-dict-select-tag",{attrs:{type:"list",dictCode:"bbs_user_waimai_use_status",placeholder:"请选择使用状态1"},model:{value:e.model.useStatus,callback:function(a){e.$set(e.model,"useStatus",a)},expression:"model.useStatus"}})],1)],1)],1)],1)],1)],1)},o=[],s=l("0fea"),r=(l("ca00"),{name:"BbsWaimaiUserForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/bbs/bbsWaimaiUser/add",edit:"/bbs/bbsWaimaiUser/edit",queryById:"/bbs/bbsWaimaiUser/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,a=this;this.$refs.form.validate((function(l){if(l){a.confirmLoading=!0;var t="",o="";e.model.id?(t+=e.url.edit,o="put"):(t+=e.url.add,o="post"),Object(s["h"])(t,e.model,o).then((function(e){e.success?(a.$message.success(e.message),a.$emit("ok")):a.$message.warning(e.message)})).finally((function(){a.confirmLoading=!1}))}}))}}}),i=r,d=l("cba8"),m=Object(d["a"])(i,t,o,!1,null,null,null);a["default"]=m.exports}}]);