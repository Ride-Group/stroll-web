(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16f75077","chunk-adad6476","chunk-2d0e5ed8"],{"3b43":function(e,t,a){"use strict";a("c870")},"6eb7":function(e,t,a){},"90f8":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:10,lg:11,md:12,sm:24}},[a("a-form-item",{attrs:{label:"创建日期"}},[a("j-date",{staticClass:"query-group-cust",attrs:{"show-time":!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择开始时间"},model:{value:e.queryParam.createTime_begin,callback:function(t){e.$set(e.queryParam,"createTime_begin",t)},expression:"queryParam.createTime_begin"}}),a("span",{staticClass:"query-group-split-cust"}),a("j-date",{staticClass:"query-group-cust",attrs:{"show-time":!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择结束时间"},model:{value:e.queryParam.createTime_end,callback:function(t){e.$set(e.queryParam,"createTime_end",t)},expression:"queryParam.createTime_end"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"举报类型"}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择举报类型",dictCode:"bbs_inform_type"},model:{value:e.queryParam.type,callback:function(t){e.$set(e.queryParam,"type",t)},expression:"queryParam.type"}})],1)],1),e.toggleSearchStatus?[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"处理结果"}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择处理结果",dictCode:"bbs_inform_result_type"},model:{value:e.queryParam.resultType,callback:function(t){e.$set(e.queryParam,"resultType",t)},expression:"queryParam.resultType"}})],1)],1)]:e._e(),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("举报列表")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("j-super-query",{ref:"superQueryModal",attrs:{fieldList:e.superFieldList},on:{handleSuperQuery:e.handleSuperQuery}}),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",scroll:{x:!0},bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"htmlSlot",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?a("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:""}}):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无图片")])]}},{key:"fileSlot",fn:function(t){return[t?a("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(a){return e.downloadFile(t)}}},[e._v("\n          下载\n        ")]):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无文件")])]}},{key:"action",fn:function(t,l){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(l)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handleDetail(l)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(l.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("bbs-inform-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},r=[],o=(a("6eb7"),a("ac0d")),s=a("b65a"),n=a("9dc6"),i=(a("89f2"),{name:"BbsInformList",mixins:[s["a"],o["b"]],components:{BbsInformModal:n["default"]},data:function(){return{description:"举报列表管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"创建日期",align:"center",sorter:!0,dataIndex:"createTime"},{title:"举报类型",align:"center",sorter:!0,dataIndex:"type_dictText"},{title:"举报用户昵称",align:"center",sorter:!0,dataIndex:"informUsernameRealname"},{title:"被举报用户昵称",align:"center",sorter:!0,dataIndex:"beInformUsernameRealname"},{title:"处理结果",align:"center",sorter:!0,dataIndex:"resultType_dictText"},{title:"处理意见",align:"center",sorter:!0,dataIndex:"resultSuggestion"},{title:"贴子内容",align:"center",sorter:!0,dataIndex:"topicContent"},{title:"评论内容",align:"center",sorter:!0,dataIndex:"replyContent"},{title:"留言内容",align:"center",sorter:!0,dataIndex:"messageContent"},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/bbs/bbsInform/wise/back/list",delete:"/bbs/bbsInform/delete",deleteBatch:"/bbs/bbsInform/deleteBatch",exportXlsUrl:"/bbs/bbsInform/exportXls",importExcelUrl:"bbs/bbsInform/importExcel"},dictOptions:{},superFieldList:[]}},created:function(){this.getSuperFieldList()},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},getSuperFieldList:function(){var e=[];e.push({type:"datetime",value:"createTime",text:"创建日期"}),e.push({type:"int",value:"type",text:"举报类型",dictCode:"bbs_inform_type"}),e.push({type:"string",value:"informUsernameRealname",text:"举报用户昵称",dictCode:""}),e.push({type:"string",value:"beInformUsernameRealname",text:"被举报用户昵称",dictCode:""}),e.push({type:"int",value:"resultType",text:"处理结果",dictCode:"bbs_inform_result_type"}),e.push({type:"string",value:"resultSuggestion",text:"处理意见",dictCode:""}),e.push({type:"string",value:"topicId",text:"贴子ID",dictCode:""}),e.push({type:"string",value:"topicContent",text:"贴子内容",dictCode:""}),e.push({type:"string",value:"replyId",text:"评论ID",dictCode:""}),e.push({type:"string",value:"replyContent",text:"评论内容",dictCode:""}),e.push({type:"string",value:"messageId",text:"留言ID",dictCode:""}),e.push({type:"string",value:"messageContent",text:"留言内容",dictCode:""}),e.push({type:"string",value:"regionCode",text:"区域编码",dictCode:""}),e.push({type:"string",value:"regionName",text:"区域名称",dictCode:""}),e.push({type:"string",value:"classCode",text:"版块编码",dictCode:""}),e.push({type:"string",value:"className",text:"版块名称",dictCode:""}),this.superFieldList=e}}}),d=i,c=(a("3b43"),a("cba8")),m=Object(c["a"])(d,l,r,!1,null,"2b37d482",null);t["default"]=m.exports},9726:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("j-form-container",{attrs:{disabled:e.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"创建日期",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"createTime"}},[a("j-date",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择创建日期","show-time":!0,"date-format":"YYYY-MM-DD HH:mm:ss",disabled:""},model:{value:e.model.createTime,callback:function(t){e.$set(e.model,"createTime",t)},expression:"model.createTime"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"举报类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"type"}},[a("j-dict-select-tag",{attrs:{type:"list",dictCode:"bbs_inform_type",placeholder:"请选择举报类型",disabled:""},model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"举报用户名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"informUsername"}},[a("a-input",{attrs:{placeholder:"请输入举报用户名",disabled:""},model:{value:e.model.informUsername,callback:function(t){e.$set(e.model,"informUsername",t)},expression:"model.informUsername"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"被举报用户名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"beInformUsername"}},[a("a-input",{attrs:{placeholder:"请输入被举报用户名",disabled:""},model:{value:e.model.beInformUsername,callback:function(t){e.$set(e.model,"beInformUsername",t)},expression:"model.beInformUsername"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"处理结果",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"resultType"}},[a("j-dict-select-tag",{attrs:{type:"list",dictCode:"bbs_inform_result_type",placeholder:"请选择处理结果"},model:{value:e.model.resultType,callback:function(t){e.$set(e.model,"resultType",t)},expression:"model.resultType"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"处理意见",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"resultSuggestion"}},[a("a-input",{attrs:{placeholder:"请输入处理意见"},model:{value:e.model.resultSuggestion,callback:function(t){e.$set(e.model,"resultSuggestion",t)},expression:"model.resultSuggestion"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"贴子ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"topicId"}},[a("a-input",{attrs:{placeholder:"请输入贴子ID",disabled:""},model:{value:e.model.topicId,callback:function(t){e.$set(e.model,"topicId",t)},expression:"model.topicId"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"评论ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"replyId"}},[a("a-input",{attrs:{placeholder:"请输入评论ID",disabled:""},model:{value:e.model.replyId,callback:function(t){e.$set(e.model,"replyId",t)},expression:"model.replyId"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"留言ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"messageId"}},[a("a-input",{attrs:{placeholder:"请输入留言ID",disabled:""},model:{value:e.model.messageId,callback:function(t){e.$set(e.model,"messageId",t)},expression:"model.messageId"}})],1)],1)],1)],1)],1)],1)},r=[],o=a("0fea"),s=(a("ca00"),{name:"BbsInformForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{type:[{required:!0,message:"请输入举报类型!"}],informUsername:[{required:!0,message:"请输入举报用户名!"}],beInformUsername:[{required:!0,message:"请输入被举报用户名!"}]},url:{add:"/bbs/bbsInform/add",edit:"/bbs/bbsInform/edit",queryById:"/bbs/bbsInform/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(a){t.confirmLoading=!0;var l="",r="";e.model.id?(l+=e.url.edit,r="put"):(l+=e.url.add,r="post"),Object(o["h"])(l,e.model,r).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))}}}),n=s,i=a("cba8"),d=Object(i["a"])(n,l,r,!1,null,null,null);t["default"]=d.exports},"9dc6":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("bbs-inform-form",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},r=[],o=a("9726"),s={name:"BbsInformModal",components:{BbsInformForm:o["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},n=s,i=a("cba8"),d=Object(i["a"])(n,l,r,!1,null,null,null);t["default"]=d.exports},c870:function(e,t,a){}}]);