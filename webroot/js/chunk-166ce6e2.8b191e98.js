(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-166ce6e2","chunk-3a81294c","chunk-2d229a09","chunk-2d23019d"],{"0d4b":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:12}},[a("a-form-item",{attrs:{label:"账号"}},[a("j-input",{attrs:{placeholder:"输入账号模糊查询"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"性别"}},[a("a-select",{attrs:{placeholder:"请选择性别"},model:{value:e.queryParam.sex,callback:function(t){e.$set(e.queryParam,"sex",t)},expression:"queryParam.sex"}},[a("a-select-option",{attrs:{value:""}},[e._v("请选择")]),a("a-select-option",{attrs:{value:"1"}},[e._v("男")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女")])],1)],1)],1),e.toggleSearchStatus?[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"真实名字"}},[a("a-input",{attrs:{placeholder:"请输入真实名字"},model:{value:e.queryParam.realname,callback:function(t){e.$set(e.queryParam,"realname",t)},expression:"queryParam.realname"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"手机号码"}},[a("a-input",{attrs:{placeholder:"请输入手机号码查询"},model:{value:e.queryParam.phone,callback:function(t){e.$set(e.queryParam,"phone",t)},expression:"queryParam.phone"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"用户状态"}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.queryParam.status,callback:function(t){e.$set(e.queryParam,"status",t)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:""}},[e._v("请选择")]),a("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),a("a-select-option",{attrs:{value:"2"}},[e._v("冻结")])],1)],1)],1)]:e._e(),a("a-col",{attrs:{md:6,sm:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"border-top":"5px"}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("添加用户")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("用户信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("a-button",{attrs:{type:"primary",icon:"hdd"},on:{click:function(t){e.recycleBinVisible=!0}}},[e._v("回收站")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},on:{click:e.handleMenuClick},slot:"overlay"},[a("a-menu-item",{key:"1"},[a("a-icon",{attrs:{type:"delete"},on:{click:e.batchDel}}),e._v("\n          删除\n        ")],1),a("a-menu-item",{key:"2"},[a("a-icon",{attrs:{type:"lock"},on:{click:function(t){return e.batchFrozen("2")}}}),e._v("\n          冻结\n        ")],1),a("a-menu-item",{key:"3"},[a("a-icon",{attrs:{type:"unlock"},on:{click:function(t){return e.batchFrozen("1")}}}),e._v("\n          解冻\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("\n        批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e(),a("j-super-query",{attrs:{fieldList:e.superQueryFieldList},on:{handleSuperQuery:e.handleSuperQuery}})],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v("已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项  \n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{bordered:"",size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"avatarslot",fn:function(t,l,s){return[a("div",{staticClass:"anty-img-wrap"},[a("a-avatar",{attrs:{shape:"square",src:e.getAvatarView(l.avatar),icon:"user"}})],1)]}},{key:"action",fn:function(t,l){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(l)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(l)}}},[e._v("详情")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleChangePassword(l.username)}}},[e._v("密码")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(l.id)}}},[a("a",[e._v("删除")])])],1),1==l.status?a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定冻结吗?"},on:{confirm:function(){return e.handleFrozen(l.id,2,l.username)}}},[a("a",[e._v("冻结")])])],1):e._e(),2==l.status?a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定解冻吗?"},on:{confirm:function(){return e.handleFrozen(l.id,1,l.username)}}},[a("a",[e._v("解冻")])])],1):e._e()],1)],1)],1)}}])})],1),a("user-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("password-modal",{ref:"passwordmodal",on:{ok:e.passwordModalOk}}),a("user-recycle-bin-modal",{attrs:{visible:e.recycleBinVisible},on:{"update:visible":function(t){e.recycleBinVisible=t},ok:e.modalFormOk}})],1)},s=[],r=a("418f"),o=a("ddf9"),n=a("0fea"),i=a("4ec3"),c=a("b65a"),d=a("4349"),u=a("eb9c"),m=a("8c6e"),p={name:"UserList",mixins:[c["a"]],components:{UserModal:r["default"],PasswordModal:o["default"],JInput:d["default"],UserRecycleBinModal:u["default"],JSuperQuery:m["default"]},data:function(){return{description:"这是用户管理页面",queryParam:{},recycleBinVisible:!1,columns:[{title:"用户账号",align:"center",dataIndex:"username",width:120,sorter:!0},{title:"用户姓名",align:"center",width:100,dataIndex:"realname"},{title:"头像",align:"center",width:120,dataIndex:"avatar",scopedSlots:{customRender:"avatarslot"}},{title:"性别",align:"center",width:80,dataIndex:"sex_dictText",sorter:!0},{title:"生日",align:"center",width:100,dataIndex:"birthday"},{title:"手机号码",align:"center",width:100,dataIndex:"phone"},{title:"部门",align:"center",width:180,dataIndex:"orgCodeTxt"},{title:"负责部门",align:"center",width:180,dataIndex:"departIds_dictText"},{title:"状态",align:"center",width:80,dataIndex:"status_dictText"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:170}],superQueryFieldList:[{type:"input",value:"username",text:"用户账号"},{type:"input",value:"realname",text:"用户姓名"},{type:"select",value:"sex",text:"性别",dictCode:"sex"}],url:{syncUser:"/act/process/extActProcess/doSyncUser",list:"/sys/user/list",delete:"/sys/user/delete",deleteBatch:"/sys/user/deleteBatch",exportXlsUrl:"/sys/user/exportXls",importExcelUrl:"sys/user/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{getAvatarView:function(e){return Object(n["d"])(e)},batchFrozen:function(e){if(this.selectedRowKeys.length<=0)return this.$message.warning("请选择一条记录！"),!1;var t="",a=this,l=!1;a.selectionRows.forEach((function(e){"admin"==e.username&&(l=!0)})),l?a.$message.warning("管理员账号不允许此操作,请重新选择！"):(a.selectedRowKeys.forEach((function(e){t+=e+","})),a.$confirm({title:"确认操作",content:"是否"+(1==e?"解冻":"冻结")+"选中账号?",onOk:function(){Object(i["s"])({ids:t,status:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)}))}}))},handleMenuClick:function(e){1==e.key?this.batchDel():2==e.key?this.batchFrozen(2):3==e.key&&this.batchFrozen(1)},handleFrozen:function(e,t,a){var l=this;"admin"!=a?Object(i["s"])({ids:e,status:t}).then((function(e){e.success?(l.$message.success(e.message),l.loadData()):l.$message.warning(e.message)})):l.$message.warning("管理员账号不允许此操作！")},handleChangePassword:function(e){this.$refs.passwordmodal.show(e)},passwordModalOk:function(){}}},h=p,f=(a("d9ae"),a("cba8")),b=Object(f["a"])(h,l,s,!1,null,"05a0757e",null);t["default"]=b.exports},"37ce":function(e,t,a){"use strict";a("aa0d")},"418f":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"100%",overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:e.drawerWidth,placement:"right",closable:!0,visible:e.visible},on:{close:e.handleCancel}},[a("template",{slot:"title"},[a("div",{staticStyle:{width:"100%"}},[a("span",[e._v(e._s(e.title))]),a("span",{staticStyle:{display:"inline-block",width:"calc(100% - 51px)","padding-right":"10px","text-align":"right"}},[a("a-button",{staticStyle:{height:"20px",width:"20px",border:"0px"},attrs:{icon:"appstore"},on:{click:e.toggleScreen}})],1)])]),a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{label:"用户账号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"username"}},[a("a-input",{attrs:{placeholder:"请输入用户账号",readOnly:!!e.model.id},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),e.model.id?e._e():[a("a-form-model-item",{attrs:{label:"登录密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"password"}},[a("a-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),a("a-form-model-item",{attrs:{label:"确认密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"confirmpassword"}},[a("a-input",{attrs:{type:"password",placeholder:"请重新输入登录密码"},on:{blur:e.handleConfirmBlur},model:{value:e.model.confirmpassword,callback:function(t){e.$set(e.model,"confirmpassword",t)},expression:"model.confirmpassword"}})],1)],a("a-form-model-item",{attrs:{label:"用户姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"realname"}},[a("a-input",{attrs:{placeholder:"请输入用户姓名"},model:{value:e.model.realname,callback:function(t){e.$set(e.model,"realname",t)},expression:"model.realname"}})],1),a("a-form-model-item",{attrs:{label:"工号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"workNo"}},[a("a-input",{attrs:{placeholder:"请输入工号"},model:{value:e.model.workNo,callback:function(t){e.$set(e.model,"workNo",t)},expression:"model.workNo"}})],1),a("a-form-model-item",{attrs:{label:"职务",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-select-position",{attrs:{placeholder:"请选择职务",multiple:!1},model:{value:e.model.post,callback:function(t){e.$set(e.model,"post",t)},expression:"model.post"}})],1),a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:!e.roleDisabled,expression:"!roleDisabled"}],attrs:{label:"角色分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-multi-select-tag",{attrs:{disabled:e.disableSubmit,options:e.rolesOptions,placeholder:"请选择角色"},model:{value:e.model.selectedroles,callback:function(t){e.$set(e.model,"selectedroles",t)},expression:"model.selectedroles"}})],1),a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:!e.departDisabled,expression:"!departDisabled"}],attrs:{label:"部门分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-select-depart",{attrs:{multi:!0,backDepart:!0},on:{back:e.backDepartInfo},model:{value:e.model.selecteddeparts,callback:function(t){e.$set(e.model,"selecteddeparts",t)},expression:"model.selecteddeparts"}})],1),a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:!e.departDisabled,expression:"!departDisabled"}],attrs:{label:"租户分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-multi-select-tag",{attrs:{disabled:e.disableSubmit,options:e.tenantsOptions,placeholder:"请选择租户"},model:{value:e.model.relTenantIds,callback:function(t){e.$set(e.model,"relTenantIds",t)},expression:"model.relTenantIds"}})],1),a("a-form-model-item",{attrs:{label:"身份",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{on:{change:e.identityChange},model:{value:e.model.userIdentity,callback:function(t){e.$set(e.model,"userIdentity",t)},expression:"model.userIdentity"}},[a("a-radio",{attrs:{value:1}},[e._v("普通用户")]),a("a-radio",{attrs:{value:2}},[e._v("上级")])],1)],1),1==e.departIdShow?a("a-form-model-item",{attrs:{label:"负责部门",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-multi-select-tag",{attrs:{disabled:e.disableSubmit,options:e.nextDepartOptions,placeholder:"请选择负责部门"},model:{value:e.model.departIds,callback:function(t){e.$set(e.model,"departIds",t)},expression:"model.departIds"}})],1):e._e(),a("a-form-model-item",{attrs:{label:"头像",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-image-upload",{staticClass:"avatar-uploader",attrs:{text:"上传"},model:{value:e.model.avatar,callback:function(t){e.$set(e.model,"avatar",t)},expression:"model.avatar"}})],1),a("a-form-model-item",{attrs:{label:"生日",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择生日",format:e.dateFormat,getCalendarContainer:function(e){return e.parentNode}},model:{value:e.model.birthday,callback:function(t){e.$set(e.model,"birthday",t)},expression:"model.birthday"}})],1),a("a-form-model-item",{attrs:{label:"性别",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{attrs:{placeholder:"请选择性别",getPopupContainer:function(e){return e.parentNode}},model:{value:e.model.sex,callback:function(t){e.$set(e.model,"sex",t)},expression:"model.sex"}},[a("a-select-option",{attrs:{value:1}},[e._v("男")]),a("a-select-option",{attrs:{value:2}},[e._v("女")])],1)],1),a("a-form-model-item",{attrs:{label:"邮箱",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"email"}},[a("a-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1),a("a-form-model-item",{attrs:{label:"手机号码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"phone"}},[a("a-input",{attrs:{placeholder:"请输入手机号码",disabled:e.isDisabledAuth("user:form:phone")},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),a("a-form-model-item",{attrs:{label:"座机",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"telephone"}},[a("a-input",{attrs:{placeholder:"请输入座机"},model:{value:e.model.telephone,callback:function(t){e.$set(e.model,"telephone",t)},expression:"model.telephone"}})],1),a("a-form-model-item",{attrs:{label:"工作流引擎",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择是否同步工作流引擎",type:"radio",dictCode:"activiti_sync"},model:{value:e.model.activitiSync,callback:function(t){e.$set(e.model,"activitiSync",t)},expression:"model.activitiSync"}})],1)],2)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.disableSubmit,expression:"!disableSubmit"}],staticClass:"drawer-bootom-button"},[a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.handleCancel}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.handleSubmit}},[e._v("提交")])],1)],2)},s=[],r=a("f19b"),o=a.n(r),n=a("430a"),i=a("9fb0"),c=a("0fea"),d=a("4ec3"),u=a("c82c"),m={name:"UserModal",components:{},data:function(){return{departDisabled:!1,roleDisabled:!1,modalWidth:800,drawerWidth:700,modaltoggleFlag:!0,confirmDirty:!1,userId:"",disableSubmit:!1,dateFormat:"YYYY-MM-DD",validatorRules:{username:[{required:!0,message:"请输入用户账号!"},{validator:this.validateUsername}],password:[{required:!0,pattern:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{8,}$/,message:"密码由8位数字、大小写字母和特殊符号组成!"},{validator:this.validateToNextPassword,trigger:"change"}],confirmpassword:[{required:!0,message:"请重新输入登录密码!"},{validator:this.compareToFirstPassword}],realname:[{required:!0,message:"请输入用户名称!"}],phone:[{validator:this.validatePhone}],email:[{validator:this.validateEmail}],roles:{},workNo:[{required:!0,message:"请输入工号"},{validator:this.validateWorkNo}],telephone:[{pattern:/^0\d{2,3}-[1-9]\d{6,7}$/,message:"请输入正确的座机号码"}]},departIdShow:!1,title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},uploadLoading:!1,confirmLoading:!1,headers:{},url:{fileUpload:window._CONFIG["domianURL"]+"/sys/common/upload",userWithDepart:"/sys/user/userDepartList",userId:"/sys/user/generateUserId",syncUserByUserName:"/act/process/extActProcess/doSyncUserByUserName",queryTenantList:"/sys/tenant/queryList"},tenantsOptions:[],rolesOptions:[],nextDepartOptions:[]}},created:function(){var e=n["default"].ls.get(i["a"]);this.headers={"X-Access-Token":e},this.initRoleList(),this.initTenantList()},computed:{uploadAction:function(){return this.url.fileUpload}},methods:{add:function(){this.refresh(),this.edit({activitiSync:"1",userIdentity:1})},edit:function(e){var t=this;t.visible=!0,this.resetScreenSize(),t.userId=e.id,t.model=Object.assign({},{selectedroles:"",selecteddeparts:""},e),2==this.model.userIdentity?this.departIdShow=!0:this.departIdShow=!1,e.hasOwnProperty("id")&&(t.getUserRoles(e.id),t.getUserDeparts(e.id))},isDisabledAuth:function(e){return Object(u["a"])(e)},toggleScreen:function(){this.modaltoggleFlag?this.modalWidth=window.innerWidth:this.modalWidth=800,this.modaltoggleFlag=!this.modaltoggleFlag},resetScreenSize:function(){var e=document.body.clientWidth;this.drawerWidth=e<500?e:700},initTenantList:function(){var e=this;Object(c["c"])(this.url.queryTenantList).then((function(t){t.success&&(e.tenantsOptions=t.result.map((function(e,t,a){var l={label:e.name,value:e.id+""};return l})))}))},initRoleList:function(){var e=this;Object(d["Q"])().then((function(t){t.success&&(e.rolesOptions=t.result.map((function(e,t,a){var l={label:e.roleName,value:e.id};return l})))}))},getUserRoles:function(e){var t=this;Object(d["P"])({userid:e}).then((function(e){e.success&&(t.model.selectedroles=e.result.join(","))}))},getUserDeparts:function(e){var t=this;Object(c["c"])(t.url.userWithDepart,{userId:e}).then((function(e){if(e.success){for(var a=[],l=[],s=0;s<e.result.length;s++)l.push(e.result[s].key),a.push({value:e.result[s].key,label:e.result[s].title});t.model.selecteddeparts=l.join(","),t.nextDepartOptions=a}}))},backDepartInfo:function(e){this.model.departIds=this.model.selecteddeparts,this.nextDepartOptions=e.map((function(e,t,a){var l={label:e.text,value:e.value+""};return l}))},refresh:function(){this.userId="",this.nextDepartOptions=[],this.departIdShow=!1},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1,this.nextDepartOptions=[],this.departIdShow=!1,this.$refs.form.resetFields()},moment:o.a,handleSubmit:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;var l;t.confirmLoading=!0,2!==e.model.userIdentity&&(e.model.departIds=""),e.model.id?l=Object(d["r"])(e.model):(e.model.id=e.userId,l=Object(d["e"])(e.model)),l.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()},validateToNextPassword:function(e,t,a){var l=this.model.confirmpassword;t&&l&&t!==l&&a("两次输入的密码不一样！"),t&&this.confirmDirty&&this.$refs.form.validateField(["confirmpassword"]),a()},compareToFirstPassword:function(e,t,a){t&&t!==this.model.password?a("两次输入的密码不一样！"):a()},validatePhone:function(e,t,a){if(t)if(new RegExp(/^1[3|4|5|7|8|9][0-9]\d{8}$/).test(t)){var l={tableName:"sys_user",fieldName:"phone",fieldVal:t,dataId:this.userId};Object(d["m"])(l).then((function(e){e.success?a():a("手机号已存在!")}))}else a("请输入正确格式的手机号码!");else a()},validateEmail:function(e,t,a){if(t)if(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(t)){var l={tableName:"sys_user",fieldName:"email",fieldVal:t,dataId:this.userId};Object(d["m"])(l).then((function(e){e.success?a():a("邮箱已存在!")}))}else a("请输入正确格式的邮箱!");else a()},validateUsername:function(e,t,a){var l={tableName:"sys_user",fieldName:"username",fieldVal:t,dataId:this.userId};Object(d["m"])(l).then((function(e){e.success?a():a("用户名已存在!")}))},validateWorkNo:function(e,t,a){var l={tableName:"sys_user",fieldName:"work_no",fieldVal:t,dataId:this.userId};Object(d["m"])(l).then((function(e){e.success?a():a("工号已存在!")}))},handleConfirmBlur:function(e){var t=e.target.value;this.confirmDirty=this.confirmDirty||!!t},beforeUpload:function(e){var t=e.type;if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1},identityChange:function(e){1===e.target.value?this.departIdShow=!1:this.departIdShow=!0}}},p=m,h=(a("37ce"),a("cba8")),f=Object(h["a"])(p,l,s,!1,null,"01ff4182",null);t["default"]=f.exports},"649b":function(e,t,a){},aa0d:function(e,t,a){},d9ae:function(e,t,a){"use strict";a("649b")},ddf9:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticStyle:{top:"20px"},attrs:{title:"重新设定密码",width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"用户账号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{}],expression:"[ 'username', {}]"}],attrs:{placeholder:"请输入用户账号",readOnly:!0}})],1),a("a-form-item",{attrs:{label:"登录密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",e.validatorRules.password],expression:"[ 'password', validatorRules.password]"}],attrs:{type:"password",placeholder:"请输入登录密码"}})],1),a("a-form-item",{attrs:{label:"确认密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirmpassword",e.validatorRules.confirmpassword],expression:"[ 'confirmpassword', validatorRules.confirmpassword]"}],attrs:{type:"password",placeholder:"请重新输入登录密码"},on:{blur:e.handleConfirmBlur}})],1)],1)],1)],1)},s=[],r=a("4ec3"),o={name:"PasswordModal",data:function(){return{visible:!1,confirmLoading:!1,confirmDirty:!1,validatorRules:{password:{rules:[{required:!0,pattern:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{8,}$/,message:"密码由8位数字、大小写字母和特殊符号组成!"},{validator:this.validateToNextPassword}]},confirmpassword:{rules:[{required:!0,message:"请重新输入登录密码!"},{validator:this.compareToFirstPassword}]}},model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},form:this.$form.createForm(this)}},created:function(){},methods:{show:function(e){var t=this;this.form.resetFields(),this.visible=!0,this.model.username=e,this.$nextTick((function(){t.form.setFieldsValue({username:e})}))},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1,this.selectedRole=[]},handleSubmit:function(){var e=this;this.form.validateFields((function(t,a){if(!t){e.confirmLoading=!0;var l=Object.assign(e.model,a);Object(r["g"])(l).then((function(t){t.success?(e.$message.success(t.message),e.$emit("ok")):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1,e.close()}))}}))},handleCancel:function(){this.close()},validateToNextPassword:function(e,t,a){var l=this.form,s=l.getFieldValue("confirmpassword");t&&s&&t!==s&&a("两次输入的密码不一样！"),t&&this.confirmDirty&&l.validateFields(["confirm"],{force:!0}),a()},compareToFirstPassword:function(e,t,a){var l=this.form;t&&t!==l.getFieldValue("password")?a("两次输入的密码不一样！"):a()},handleConfirmBlur:function(e){var t=e.target.value;this.confirmDirty=this.confirmDirty||!!t}}},n=o,i=a("cba8"),c=Object(i["a"])(n,l,s,!1,null,null,null);t["default"]=c.exports},eb9c:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{width:1e3,title:e.title,visible:e.innerVisible,cancelText:"关闭",okButtonProps:{style:{display:"none"}}},on:{cancel:e.handleCancel}},[a("a-alert",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"info",showIcon:""}},[a("template",{slot:"message"},[a("span",[e._v("已选择")]),a("a",{staticStyle:{"font-weight":"600",padding:"0 4px"}},[e._v(e._s(e.selectedRowKeys.length))]),a("span",[e._v("项")]),e.selectedRowKeys.length>0?[a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:e.handleClearSelection}},[e._v("清空选择")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:e.handleRevertBatch}},[e._v("批量还原")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:e.handleDeleteBatch}},[e._v("批量删除")])]:e._e()],2)],2),a("a-table",{ref:"table",attrs:{rowKey:"id",size:"middle",bordered:"",columns:e.columns,loading:e.loading,dataSource:e.dataSource,pagination:!1,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.handleTableSelectChange}},scopedSlots:e._u([{key:"avatarslot",fn:function(t,l,s){return[a("div",{staticClass:"anty-img-wrap"},[a("a-avatar",{attrs:{shape:"square",src:e.url.getAvatar(l.avatar),icon:"user"}})],1)]}},{key:"action",fn:function(t,l){return a("span",{},[a("a",{on:{click:function(t){return e.handleRevert([l.id])}}},[a("a-icon",{attrs:{type:"redo"}}),e._v(" 还原用户")],1),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.handleDelete([l.id])}}},[a("a-icon",{attrs:{type:"delete"}}),e._v(" 彻底删除")],1)],1)}}])})],1)},s=[],r=a("0fea");function o(e){var t=this;this.loading=!!e.loading,e.promise.then((function(t){if(!t.success||"function"!==typeof e.success)throw new Error(t.message);e.success(t)})).catch((function(e){t.$message.warning("查询已删除的用户失败："+(e.message||e))})).finally((function(){t.loading=!1}))}var n={name:"UserRecycleBinModal",props:{visible:{type:Boolean,default:!1}},data:function(){return{title:"用户回收站",loading:!1,innerVisible:!1,selectedRowKeys:[],dataSource:[],columns:[{title:"#",align:"center",key:"rowIndex",width:80,customRender:function(e,t,a){return a+1}},{title:"账号",align:"center",dataIndex:"username"},{title:"姓名",align:"center",dataIndex:"realname"},{title:"头像",align:"center",dataIndex:"avatar",scopedSlots:{customRender:"avatarslot"}},{title:"部门",align:"center",dataIndex:"orgCode"},{title:"操作",align:"center",dataIndex:"action",width:200,scopedSlots:{customRender:"action"}}],url:{getAvatar:function(e){return Object(r["d"])("".concat(e))},recycleBin:"/sys/user/recycleBin",putRecycleBin:"/sys/user/putRecycleBin",deleteRecycleBin:"/sys/user/deleteRecycleBin"}}},watch:{visible:{immediate:!0,handler:function(e){e&&this.loadData(),this.innerVisible=e}},innerVisible:function(e){this.$emit("update:visible",e)}},methods:{loadData:function(){var e=this;o.call(this,{loading:!0,promise:this.$http.get(this.url.recycleBin),success:function(t){return e.dataSource=t.result}})},handleOk:function(){this.loadData(),this.$emit("ok")},handleCancel:function(){this.innerVisible=!1},handleRevert:function(e){var t=this;this.$confirm({title:"恢复用户",content:"您确定要恢复这 ".concat(e.length," 个用户吗？"),centered:!0,onOk:function(){Object(r["j"])(t.url.putRecycleBin,{userIds:e.join(",")}).then((function(a){a.success&&(t.handleOk(),t.handleClearSelection(),t.$message.success("还原 ".concat(e.length," 个用户成功！")))}))}})},handleDelete:function(e){var t=this,a=this.$createElement;this.$confirm({title:"彻底删除用户",content:a("div",[a("p",["您确定要彻底删除这 ",e.length," 个用户吗？"]),a("p",{style:"color:red;"},["注意：彻底删除后将无法恢复，请谨慎操作！"])]),centered:!0,onOk:function(){var a=t;Object(r["a"])(a.url.deleteRecycleBin,{userIds:e.join(",")}).then((function(l){l.success?(t.loadData(),t.handleClearSelection(),t.$message.success("彻底删除 ".concat(e.length," 个用户成功！"))):a.$message.warning(l.message)}))}})},handleRevertBatch:function(){this.handleRevert(this.selectedRowKeys)},handleDeleteBatch:function(){this.handleDelete(this.selectedRowKeys)},handleClearSelection:function(){this.handleTableSelectChange([],[])},handleTableSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t}}},i=n,c=a("cba8"),d=Object(c["a"])(i,l,s,!1,null,"08b620db",null);t["default"]=d.exports}}]);