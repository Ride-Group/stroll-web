(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53bd81fb","chunk-2d225d96"],{7350:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:e.title,width:e.width,placement:"right",closable:!1,destroyOnClose:"",visible:e.visible},on:{close:e.close}},[a("bbs-feed-back-form",{ref:"realForm",attrs:{disabled:e.disableSubmit,normal:""},on:{ok:e.submitCallback}}),a("div",{staticClass:"drawer-footer"},[a("a-button",{staticStyle:{"margin-bottom":"0"},on:{click:e.handleCancel}},[e._v("关闭")]),e.disableSubmit?e._e():a("a-button",{staticStyle:{"margin-bottom":"0"},attrs:{type:"primary"},on:{click:e.handleOk}},[e._v("提交")])],1)],1)},o=[],s=a("e5c3"),i={name:"BbsFeedBackModal",components:{BbsFeedBackForm:s["default"]},data:function(){return{title:"操作",width:896,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},handleCancel:function(){this.close()}}},r=i,d=(a("c74a"),a("cba8")),n=Object(d["a"])(r,l,o,!1,null,"1de3766b",null);t["default"]=n.exports},"9fa1":function(e,t,a){},c74a:function(e,t,a){"use strict";a("9fa1")},e5c3:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("j-form-container",{attrs:{disabled:e.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"用户",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"createBy"}},[a("a-input",{attrs:{placeholder:"请输入用户",disabled:""},model:{value:e.model.createBy,callback:function(t){e.$set(e.model,"createBy",t)},expression:"model.createBy"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"反馈内容",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"content"}},[a("a-textarea",{attrs:{rows:"4",placeholder:"请输入反馈内容",disabled:""},model:{value:e.model.content,callback:function(t){e.$set(e.model,"content",t)},expression:"model.content"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"处理进度",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"disposeStatus"}},[a("j-dict-select-tag",{attrs:{type:"list",dictCode:"bbs_feedback_status",placeholder:"请选择处理进度"},model:{value:e.model.disposeStatus,callback:function(t){e.$set(e.model,"disposeStatus",t)},expression:"model.disposeStatus"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"处理结果",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"disposeResult"}},[a("a-input",{attrs:{placeholder:"请输入处理结果"},model:{value:e.model.disposeResult,callback:function(t){e.$set(e.model,"disposeResult",t)},expression:"model.disposeResult"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"处理人",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"disposeUsername"}},[a("a-input",{attrs:{placeholder:"请输入处理人",disabled:""},model:{value:e.model.disposeUsername,callback:function(t){e.$set(e.model,"disposeUsername",t)},expression:"model.disposeUsername"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"处理历史",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"disposeHistory"}},[a("a-input",{attrs:{placeholder:"请输入处理历史",disabled:""},model:{value:e.model.disposeHistory,callback:function(t){e.$set(e.model,"disposeHistory",t)},expression:"model.disposeHistory"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"联系方式",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"userContact"}},[a("a-input",{attrs:{placeholder:"请输入联系方式",disabled:""},model:{value:e.model.userContact,callback:function(t){e.$set(e.model,"userContact",t)},expression:"model.userContact"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"处理时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"disposeDate"}},[a("j-date",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择处理时间","show-time":!0,"date-format":"YYYY-MM-DD HH:mm:ss",disabled:""},model:{value:e.model.disposeDate,callback:function(t){e.$set(e.model,"disposeDate",t)},expression:"model.disposeDate"}})],1)],1)],1)],1)],1)],1)},o=[],s=a("0fea"),i=(a("ca00"),{name:"BbsFeedBackForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/bbs/bbsFeedBack/add",edit:"/bbs/bbsFeedBack/edit",queryById:"/bbs/bbsFeedBack/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(a){t.confirmLoading=!0;var l="",o="";e.model.id?(l+=e.url.edit,o="put"):(l+=e.url.add,o="post"),Object(s["h"])(l,e.model,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))}}}),r=i,d=a("cba8"),n=Object(d["a"])(r,l,o,!1,null,null,null);t["default"]=n.exports}}]);