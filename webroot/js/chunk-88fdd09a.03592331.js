(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88fdd09a","chunk-ee499092","chunk-b38315ba"],{4016:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{attrs:{title:e.title,width:1200,visible:e.visible,maskClosable:!1,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}}},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("bbs-region-form",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},o=[],r=a("66c7"),i={name:"BbsRegionModal",components:{BbsRegionForm:r["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.handleOk()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},s=i,n=a("cba8"),d=Object(n["a"])(s,l,o,!1,null,"491ba349",null);t["default"]=d.exports},"535e":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("7550"),o=a("e2e0"),r=a("0fea"),i={components:{JEditableTable:l["default"]},data:function(){return{title:"操作",visible:!1,confirmLoading:!1,model:{},labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}}}},methods:{getAllTable:function(){var e=this;if(!(this.refKeys instanceof Array))throw this.throwNotArray("refKeys");var t=this.refKeys.map((function(t){return Object(o["c"])(e,t)}));return Promise.all(t)},eachAllTable:function(e){this.getAllTable().then((function(t){t.forEach((function(t,a){"function"===typeof e&&e(t,a)}))}))},add:function(){var e=this;return new Promise((function(t){e.tableReset(),t()})).then((function(){var t=e.addDefaultRowNum;"number"!==typeof t&&(t=1),e.eachAllTable((function(e){e.add(t)})),"function"===typeof e.addAfter&&e.addAfter(e.model),e.edit(e.model)}))},edit:function(e){e&&"{}"!=JSON.stringify(e)&&e.id&&this.tableReset(),"function"===typeof this.editBefore&&this.editBefore(e),this.visible=!0,this.activeKey=this.refKeys[0],this.$refs.form.resetFields(),this.model=Object.assign({},e),"function"===typeof this.editAfter&&this.editAfter(this.model)},close:function(){this.visible=!1,this.$emit("close")},tableReset:function(){this.eachAllTable((function(e){e.clearRow()}))},requestSubTableData:function(e,t,a,l){a.loading=!0,Object(r["c"])(e,t).then((function(e){var t=e.result,o=[];t&&(Array.isArray(t)?o=t:Array.isArray(t.records)&&(o=t.records)),a.dataSource=o,"function"===typeof l&&l(e)})).finally((function(){a.loading=!1}))},request:function(e){var t=this,a=this.url.add,l="post";this.model.id&&(a=this.url.edit,l="put"),this.confirmLoading=!0,Object(r["h"])(a,e,l).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok"),t.close()):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))},handleChangeTabs:function(e){Object(o["c"])(this,e).then((function(e){e.resetScrollTop()}))},handleCancel:function(){this.close()},handleOk:function(){var e=this;this.getAllTable().then((function(t){return Object(o["d"])(e.$refs.form,e.model,t)})).then((function(t){return e.validateSubForm(t)})).then((function(t){if("function"!==typeof e.classifyIntoFormData)throw e.throwNotFunction("classifyIntoFormData");var a=e.classifyIntoFormData(t);return e.request(a)})).catch((function(t){t.error===o["b"]&&(e.activeKey=null==t.index?e.activeKey:t.paneKey?t.paneKey:e.refKeys[t.index])}))},validateSubForm:function(e){return new Promise((function(t){t(e)}))},throwNotFunction:function(e){return"".concat(e," 未定义或不是一个函数")},throwNotArray:function(e){return"".concat(e," 未定义或不是一个数组")}}}},"66c7":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("j-form-container",{attrs:{disabled:e.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"区域编码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"regionCode"}},[a("a-input",{attrs:{placeholder:"请输入区域编码"},model:{value:e.model.regionCode,callback:function(t){e.$set(e.model,"regionCode",t)},expression:"model.regionCode"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"全称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"fullName"}},[a("a-input",{attrs:{placeholder:"请输入全称"},model:{value:e.model.fullName,callback:function(t){e.$set(e.model,"fullName",t)},expression:"model.fullName"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"简称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"name"}},[a("a-input",{attrs:{placeholder:"请输入简称"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"经度",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"longitude"}},[a("a-input",{attrs:{placeholder:"请输入经度"},model:{value:e.model.longitude,callback:function(t){e.$set(e.model,"longitude",t)},expression:"model.longitude"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"纬度",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"latitude"}},[a("a-input",{attrs:{placeholder:"请输入纬度"},model:{value:e.model.latitude,callback:function(t){e.$set(e.model,"latitude",t)},expression:"model.latitude"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"地图展示名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"content"}},[a("a-input",{attrs:{placeholder:"请输入地图展示名"},model:{value:e.model.content,callback:function(t){e.$set(e.model,"content",t)},expression:"model.content"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"省份",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"province"}},[a("a-input",{attrs:{placeholder:"请输入省份"},model:{value:e.model.province,callback:function(t){e.$set(e.model,"province",t)},expression:"model.province"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"每日发布贴子数",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"dayPublishTopic"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入每日发布贴子数",disabled:""},model:{value:e.model.dayPublishTopic,callback:function(t){e.$set(e.model,"dayPublishTopic",t)},expression:"model.dayPublishTopic"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"每周发布贴子数",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"weekPublishTopic"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入每周发布贴子数",disabled:""},model:{value:e.model.weekPublishTopic,callback:function(t){e.$set(e.model,"weekPublishTopic",t)},expression:"model.weekPublishTopic"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"每日发布留言数",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"dayPublishMessage"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入每日发布留言数",disabled:""},model:{value:e.model.dayPublishMessage,callback:function(t){e.$set(e.model,"dayPublishMessage",t)},expression:"model.dayPublishMessage"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"每周发布留言数",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"weekPublishMessage"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入每周发布留言数",disabled:""},model:{value:e.model.weekPublishMessage,callback:function(t){e.$set(e.model,"weekPublishMessage",t)},expression:"model.weekPublishMessage"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"每日评论数",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"dayPublishReply"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入每日评论数",disabled:""},model:{value:e.model.dayPublishReply,callback:function(t){e.$set(e.model,"dayPublishReply",t)},expression:"model.dayPublishReply"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"每周评论数",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"weekPublishReply"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入每周评论数",disabled:""},model:{value:e.model.weekPublishReply,callback:function(t){e.$set(e.model,"weekPublishReply",t)},expression:"model.weekPublishReply"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"每日点赞数",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"dayPublishPraise"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入每日点赞数",disabled:""},model:{value:e.model.dayPublishPraise,callback:function(t){e.$set(e.model,"dayPublishPraise",t)},expression:"model.dayPublishPraise"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"每周点赞数",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"weekPublishPraise"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入每周点赞数",disabled:""},model:{value:e.model.weekPublishPraise,callback:function(t){e.$set(e.model,"weekPublishPraise",t)},expression:"model.weekPublishPraise"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"区域类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"regionType"}},[a("j-dict-select-tag",{attrs:{type:"list",dictCode:"bbs_region_type",placeholder:"请选择区域类型"},model:{value:e.model.regionType,callback:function(t){e.$set(e.model,"regionType",t)},expression:"model.regionType"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"缩放等级",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"scale"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入缩放等级"},model:{value:e.model.scale,callback:function(t){e.$set(e.model,"scale",t)},expression:"model.scale"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"范围半径",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"radius"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入范围半径"},model:{value:e.model.radius,callback:function(t){e.$set(e.model,"radius",t)},expression:"model.radius"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"区域等级",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"regionGrade"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入区域等级"},model:{value:e.model.regionGrade,callback:function(t){e.$set(e.model,"regionGrade",t)},expression:"model.regionGrade"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"公众号二维码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"officeAccountImage"}},[a("j-image-upload",{attrs:{isMultiple:"",number:1},model:{value:e.model.officeAccountImage,callback:function(t){e.$set(e.model,"officeAccountImage",t)},expression:"model.officeAccountImage"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"区域头像",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"regionImage"}},[a("j-image-upload",{attrs:{isMultiple:"",number:1},model:{value:e.model.regionImage,callback:function(t){e.$set(e.model,"regionImage",t)},expression:"model.regionImage"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"收款码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"payeeImage"}},[a("j-image-upload",{attrs:{isMultiple:"",number:1},model:{value:e.model.payeeImage,callback:function(t){e.$set(e.model,"payeeImage",t)},expression:"model.payeeImage"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"朋友圈二维码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"circleFriendsImage"}},[a("j-image-upload",{attrs:{isMultiple:"",number:1},model:{value:e.model.circleFriendsImage,callback:function(t){e.$set(e.model,"circleFriendsImage",t)},expression:"model.circleFriendsImage"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"regionStatus"}},[a("j-dict-select-tag",{attrs:{type:"list",dictCode:"bbs_region_region_status",placeholder:"请选择状态"},model:{value:e.model.regionStatus,callback:function(t){e.$set(e.model,"regionStatus",t)},expression:"model.regionStatus"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"区域关联部门ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"regionDepartId"}},[a("a-input",{attrs:{placeholder:"请输入区域关联部门ID"},model:{value:e.model.regionDepartId,callback:function(t){e.$set(e.model,"regionDepartId",t)},expression:"model.regionDepartId"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"小商店ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"miniStoreAppid"}},[a("a-input",{attrs:{placeholder:"请输入小商店ID"},model:{value:e.model.miniStoreAppid,callback:function(t){e.$set(e.model,"miniStoreAppid",t)},expression:"model.miniStoreAppid"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"私有区域",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"isPrivate"}},[a("j-dict-select-tag",{attrs:{type:"list",dictCode:"bbs_region_is_private",placeholder:"请选择私有区域"},model:{value:e.model.isPrivate,callback:function(t){e.$set(e.model,"isPrivate",t)},expression:"model.isPrivate"}})],1)],1)],1)],1)],1),a("a-tabs",{on:{change:e.handleChangeTabs},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[a("a-tab-pane",{key:e.refKeys[0],attrs:{tab:"版块",forceRender:!0}},[a("j-editable-table",{ref:e.refKeys[0],attrs:{loading:e.bbsClassTable.loading,columns:e.bbsClassTable.columns,dataSource:e.bbsClassTable.dataSource,maxHeight:300,disabled:e.formDisabled,rowNumber:!0,rowSelection:!0,actionButton:!0}})],1)],1)],1)},o=[],r=(a("0fea"),a("e2e0")),i=a("535e"),s=a("ca00");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={name:"BbsRegionForm",mixins:[i["a"]],components:{},data:function(){var e=this;return{labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16}},labelCol2:{xs:{span:24},sm:{span:3}},wrapperCol2:{xs:{span:24},sm:{span:20}},model:{province:"陕西省-",dayPublishTopic:2,weekPublishTopic:5,dayPublishMessage:5,weekPublishMessage:20,dayPublishReply:20,weekPublishReply:50,dayPublishPraise:100,weekPublishPraise:500,scale:13,radius:1e3,regionGrade:5},addDefaultRowNum:1,validatorRules:{regionCode:[{required:!0,message:"请输入区域编码!"},{validator:function(t,a,l){return Object(s["q"])("bbs_region","region_code",a,e.model.id,l)}}],fullName:[{required:!0,message:"请输入全称!"}],name:[{required:!0,message:"请输入简称!"}],longitude:[{required:!0,message:"请输入经度!"}],latitude:[{required:!0,message:"请输入纬度!"}],content:[{required:!0,message:"请输入地图展示名!"}],regionType:[{required:!0,message:"请输入区域类型!"}],scale:[{required:!0,message:"请输入缩放等级!"}],radius:[{required:!0,message:"请输入范围半径!"}]},refKeys:["bbsClass"],tableKeys:["bbsClass"],activeKey:"bbsClass",bbsClassTable:{loading:!1,dataSource:[],columns:[{title:"版块编码(不允许修改)",key:"classCode",type:r["a"].input,width:"200px",placeholder:"请输入${title}",defaultValue:"",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"版块名称",key:"className",type:r["a"].input,width:"200px",placeholder:"请输入${title}",defaultValue:"",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"版块排序",key:"classSort",type:r["a"].inputNumber,width:"200px",placeholder:"请输入${title}",defaultValue:"",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"版块贴子数量",key:"classTopicCount",type:r["a"].inputNumber,disabled:!0,width:"200px",placeholder:"请输入${title}",defaultValue:""}]},url:{add:"/bbs/bbsRegion/wise/back/add",edit:"/bbs/bbsRegion/edit",queryById:"/bbs/bbsRegion/queryById",bbsClass:{list:"/bbs/bbsRegion/queryBbsClassByMainId"}}}},props:{disabled:{type:Boolean,default:!1,required:!1}},computed:{formDisabled:function(){return this.disabled}},created:function(){},methods:{addBefore:function(){this.bbsClassTable.dataSource=[]},getAllTable:function(){var e=this,t=this.tableKeys.map((function(t){return Object(r["c"])(e,t)}));return Promise.all(t)},editAfter:function(){if(this.$nextTick((function(){})),this.model.id){var e={id:this.model.id};this.requestSubTableData(this.url.bbsClass.list,e,this.bbsClassTable)}},validateSubForm:function(e){var t=this;return new Promise((function(a,l){Promise.all([]).then((function(){a(e)})).catch((function(e){e.error===r["b"]&&(t.activeKey=null==e.index?t.activeKey:t.refKeys[e.index])}))}))},classifyIntoFormData:function(e){var t=Object.assign(this.model,e.formValue);return d(d({},t),{},{bbsClassList:e.tablesValue[0].values})},validateError:function(e){this.$message.error(e)}}},p=u,m=a("cba8"),b=Object(m["a"])(p,l,o,!1,null,"b77341fa",null);t["default"]=b.exports},"6eb7":function(e,t,a){},"96e4":function(e,t,a){},c581:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{directives:[{name:"has",rawName:"v-has",value:"region:query",expression:"'region:query'"}],staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"区域编码"}},[a("a-input",{attrs:{placeholder:"请输入区域编码"},model:{value:e.queryParam.regionCode,callback:function(t){e.$set(e.queryParam,"regionCode",t)},expression:"queryParam.regionCode"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"全称"}},[a("a-input",{attrs:{placeholder:"请输入全称"},model:{value:e.queryParam.fullName,callback:function(t){e.$set(e.queryParam,"fullName",t)},expression:"queryParam.fullName"}})],1)],1),e.toggleSearchStatus?[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"简称"}},[a("a-input",{attrs:{placeholder:"请输入简称"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"省份"}},[a("a-input",{attrs:{placeholder:"请输入省份"},model:{value:e.queryParam.province,callback:function(t){e.$set(e.queryParam,"province",t)},expression:"queryParam.province"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"区域类型"}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择区域类型",dictCode:"bbs_region_type"},model:{value:e.queryParam.regionType,callback:function(t){e.$set(e.queryParam,"regionType",t)},expression:"queryParam.regionType"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"缩放等级"}},[a("a-input",{attrs:{placeholder:"请输入缩放等级"},model:{value:e.queryParam.scale,callback:function(t){e.$set(e.queryParam,"scale",t)},expression:"queryParam.scale"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"范围半径"}},[a("a-input",{attrs:{placeholder:"请输入范围半径"},model:{value:e.queryParam.radius,callback:function(t){e.$set(e.queryParam,"radius",t)},expression:"queryParam.radius"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"区域等级"}},[a("a-input",{attrs:{placeholder:"请输入区域等级"},model:{value:e.queryParam.regionGrade,callback:function(t){e.$set(e.queryParam,"regionGrade",t)},expression:"queryParam.regionGrade"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"状态"}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择状态",dictCode:"bbs_region_region_status"},model:{value:e.queryParam.regionStatus,callback:function(t){e.$set(e.queryParam,"regionStatus",t)},expression:"queryParam.regionStatus"}})],1)],1)]:e._e(),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{directives:[{name:"has",rawName:"v-has",value:"region:add",expression:"'region:add'"}],attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{directives:[{name:"has",rawName:"v-has",value:"region:export",expression:"'region:export'"}],attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("地区")}}},[e._v("导出")]),a("a-upload",{directives:[{name:"has",rawName:"v-has",value:"region:import",expression:"'region:import'"}],attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("j-super-query",{directives:[{name:"has",rawName:"v-has",value:"region:expert",expression:"'region:expert'"}],ref:"superQueryModal",attrs:{fieldList:e.superFieldList},on:{handleSuperQuery:e.handleSuperQuery}}),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{directives:[{name:"has",rawName:"v-has",value:"region:delete",expression:"'region:delete'"}],key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{directives:[{name:"has",rawName:"v-has",value:"region:multiple",expression:"'region:multiple'"}],staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{directives:[{name:"has",rawName:"v-has",value:"region:expert",expression:"'region:expert'"}],staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",bordered:"",rowKey:"id",scroll:{x:!0},columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"htmlSlot",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?a("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:""}}):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无图片")])]}},{key:"fileSlot",fn:function(t){return[t?a("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(a){return e.downloadFile(t)}}},[e._v("\n          下载\n        ")]):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无文件")])]}},{key:"action",fn:function(t,l){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(l)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handleDetail(l)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(l.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("bbs-region-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},o=[],r=a("b65a"),i=a("4016"),s=(a("89f2"),a("6eb7"),{name:"BbsRegionList",mixins:[r["a"]],components:{BbsRegionModal:i["default"]},data:function(){return{description:"地区管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"区域编码",align:"center",sorter:!0,dataIndex:"regionCode"},{title:"全称",align:"center",sorter:!0,dataIndex:"fullName"},{title:"简称",align:"center",sorter:!0,dataIndex:"name"},{title:"经度",align:"center",sorter:!0,dataIndex:"longitude"},{title:"纬度",align:"center",sorter:!0,dataIndex:"latitude"},{title:"地图展示名",align:"center",dataIndex:"content"},{title:"省份",align:"center",sorter:!0,dataIndex:"province"},{title:"区域类型",align:"center",sorter:!0,dataIndex:"regionType_dictText"},{title:"缩放等级",align:"center",sorter:!0,dataIndex:"scale"},{title:"范围半径",align:"center",sorter:!0,dataIndex:"radius"},{title:"区域等级",align:"center",sorter:!0,dataIndex:"regionGrade"},{title:"公众号二维码",align:"center",dataIndex:"officeAccountImage",scopedSlots:{customRender:"imgSlot"}},{title:"区域头像",align:"center",dataIndex:"regionImage",scopedSlots:{customRender:"imgSlot"}},{title:"收款码",align:"center",dataIndex:"payeeImage",scopedSlots:{customRender:"imgSlot"}},{title:"朋友圈二维码",align:"center",dataIndex:"circleFriendsImage",scopedSlots:{customRender:"imgSlot"}},{title:"状态",align:"center",sorter:!0,dataIndex:"regionStatus_dictText"},{title:"区域关联部门ID",align:"center",dataIndex:"regionDepartId"},{title:"小商店ID",align:"center",dataIndex:"miniStoreAppid"},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/bbs/bbsRegion/wise/back/list",delete:"/bbs/bbsRegion/delete",deleteBatch:"/bbs/bbsRegion/deleteBatch",exportXlsUrl:"/bbs/bbsRegion/exportXls",importExcelUrl:"bbs/bbsRegion/importExcel"},dictOptions:{},superFieldList:[]}},created:function(){this.getSuperFieldList()},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},getSuperFieldList:function(){var e=[];e.push({type:"string",value:"regionCode",text:"区域编码",dictCode:""}),e.push({type:"string",value:"fullName",text:"全称",dictCode:""}),e.push({type:"string",value:"name",text:"简称",dictCode:""}),e.push({type:"string",value:"longitude",text:"经度",dictCode:""}),e.push({type:"string",value:"latitude",text:"纬度",dictCode:""}),e.push({type:"string",value:"content",text:"地图展示名",dictCode:""}),e.push({type:"string",value:"province",text:"省份",dictCode:""}),e.push({type:"int",value:"dayPublishTopic",text:"每日发布贴子数",dictCode:""}),e.push({type:"int",value:"weekPublishTopic",text:"每周发布贴子数",dictCode:""}),e.push({type:"int",value:"dayPublishMessage",text:"每日发布留言数",dictCode:""}),e.push({type:"int",value:"weekPublishMessage",text:"每周发布留言数",dictCode:""}),e.push({type:"int",value:"dayPublishReply",text:"每日评论数",dictCode:""}),e.push({type:"int",value:"weekPublishReply",text:"每周评论数",dictCode:""}),e.push({type:"int",value:"dayPublishPraise",text:"每日点赞数",dictCode:""}),e.push({type:"int",value:"weekPublishPraise",text:"每周点赞数",dictCode:""}),e.push({type:"int",value:"regionType",text:"区域类型",dictCode:"bbs_region_type"}),e.push({type:"int",value:"scale",text:"缩放等级",dictCode:""}),e.push({type:"int",value:"radius",text:"范围半径",dictCode:""}),e.push({type:"int",value:"regionGrade",text:"区域等级",dictCode:""}),e.push({type:"string",value:"officeAccountImage",text:"公众号二维码",dictCode:""}),e.push({type:"string",value:"regionImage",text:"区域头像",dictCode:""}),e.push({type:"string",value:"payeeImage",text:"收款码",dictCode:""}),e.push({type:"string",value:"circleFriendsImage",text:"朋友圈二维码",dictCode:""}),e.push({type:"int",value:"regionStatus",text:"状态",dictCode:"bbs_region_region_status"}),e.push({type:"string",value:"regionDepartId",text:"区域关联部门ID",dictCode:""}),e.push({type:"string",value:"miniStoreAppid",text:"小商店ID",dictCode:""}),e.push({type:"int",value:"isPrivate",text:"私有区域",dictCode:"bbs_region_is_private"}),this.superFieldList=e}}}),n=s,d=(a("f747"),a("cba8")),c=Object(d["a"])(n,l,o,!1,null,"96dbf916",null);t["default"]=c.exports},f747:function(e,t,a){"use strict";a("96e4")}}]);