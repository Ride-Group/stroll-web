(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e8d552a","chunk-d56e5dda"],{"30a3":function(e,t,a){},"444c":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,l){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(l)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(l)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(l.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("sysDepart-modal",{ref:"sysDepartModal",on:{ok:e.modalFormOk}})],1)},o=[],r=a("c1af"),n=a("4ec3"),s=a("0fea"),i=[{title:"机构名称",dataIndex:"departName"},{title:"机构类型",align:"center",dataIndex:"orgType"},{title:"机构编码",dataIndex:"orgCode"},{title:"手机号",dataIndex:"mobile"},{title:"传真",dataIndex:"fax"},{title:"地址",dataIndex:"address"},{title:"排序",align:"center",dataIndex:"departOrder"},{title:"操作",align:"center",dataIndex:"action",scopedSlots:{customRender:"action"}}],d={name:"DepartList2",components:{SysDepartModal:r["default"]},data:function(){return{description:"jeecg 生成SysDepart代码管理页面",queryParam:{},factories:"",dataSource:[],columns:i,isorter:{column:"createTime",order:"desc"},loading:!1,selectedRowKeys:[],selectedRows:[],url:{list:"/sys/sysDepart/list",delete:"/sys/sysDepart/delete",deleteBatch:"/sys/sysDepart/deleteBatch"}}},created:function(){this.loadData()},methods:{loadData:function(){var e=this;this.dataSource=[],Object(n["D"])().then((function(t){t.success&&(e.dataSource=t.result)}))},getQueryField:function(){for(var e="id,",t=0;t<this.columns.length;t++)e+=","+this.columns[t].dataIndex;return e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},handleDelete:function(e){var t=this;Object(s["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},handleDetail:function(e){this.$refs.sysDepartModal.edit(e),this.$refs.sysDepartModal.title="详情",this.$refs.sysDepartModal.disableSubmit=!0},batchDel:function(){if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){Object(s["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)}))}})}},handleEdit:function(e){this.$refs.sysDepartModal.edit(e),this.$refs.sysDepartModal.title="编辑"},handleAdd:function(){this.$refs.sysDepartModal.add(),this.$refs.sysDepartModal.title="新增"},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.loadData()},modalFormOk:function(){this.loadData()}}},c=d,u=(a("6b65"),a("cba8")),m=Object(u["a"])(c,l,o,!1,null,"3f65c8a4",null);t["default"]=m.exports},"6b65":function(e,t,a){"use strict";a("30a3")},"85ee":function(e,t,a){(function(t){var a=1/0,l=9007199254740991,o="[object Arguments]",r="[object Function]",n="[object GeneratorFunction]",s="[object Symbol]",i="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,c=i||d||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function m(e,t){var a=-1,l=e?e.length:0,o=Array(l);while(++a<l)o[a]=t(e[a],a,e);return o}function p(e,t){var a=-1,l=t.length,o=e.length;while(++a<l)e[o+a]=t[a];return e}var f=Object.prototype,h=f.hasOwnProperty,b=f.toString,g=c.Symbol,y=f.propertyIsEnumerable,v=g?g.isConcatSpreadable:void 0,w=Math.max;function C(e,t,a,l,o){var r=-1,n=e.length;a||(a=S),o||(o=[]);while(++r<n){var s=e[r];t>0&&a(s)?t>1?C(s,t-1,a,l,o):p(o,s):l||(o[o.length]=s)}return o}function D(e,t){return e=Object(e),x(e,t,(function(t,a){return a in e}))}function x(e,t,a){var l=-1,o=t.length,r={};while(++l<o){var n=t[l],s=e[n];a(s,n)&&(r[n]=s)}return r}function k(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,l=-1,o=w(a.length-t,0),r=Array(o);while(++l<o)r[l]=a[t+l];l=-1;var n=Array(t+1);while(++l<t)n[l]=a[l];return n[t]=r,u(e,this,n)}}function S(e){return j(e)||O(e)||!!(v&&e&&e[v])}function $(e){if("string"==typeof e||A(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function O(e){return R(e)&&h.call(e,"callee")&&(!y.call(e,"callee")||b.call(e)==o)}var j=Array.isArray;function _(e){return null!=e&&T(e.length)&&!I(e)}function R(e){return K(e)&&_(e)}function I(e){var t=M(e)?b.call(e):"";return t==r||t==n}function T(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=l}function M(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function K(e){return!!e&&"object"==typeof e}function A(e){return"symbol"==typeof e||K(e)&&b.call(e)==s}var F=k((function(e,t){return null==e?{}:D(e,m(C(t,1),$))}));e.exports=F}).call(this,a("2409"))},c1af:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,ok:!1,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称",prop:"departName",hidden:!1,hasFeedback:""}},[a("a-input",{attrs:{id:"departName",placeholder:"请输入机构/部门名称"},model:{value:e.model.departName,callback:function(t){e.$set(e.model,"departName",t)},expression:"model.departName"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,hidden:e.seen,label:"上级部门",hasFeedback:""}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,placeholder:"请选择上级部门",disabled:e.condition},model:{value:e.model.parentId,callback:function(t){e.$set(e.model,"parentId",t)},expression:"model.parentId"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构类型"}},[e.seen?[a("a-radio-group",{attrs:{placeholder:"请选择机构类型"},model:{value:e.model.orgCategory,callback:function(t){e.$set(e.model,"orgCategory",t)},expression:"model.orgCategory"}},[a("a-radio",{attrs:{value:"1"}},[e._v("\n              公司\n            ")])],1)]:[a("a-radio-group",{attrs:{placeholder:"请选择机构类型"},model:{value:e.model.orgCategory,callback:function(t){e.$set(e.model,"orgCategory",t)},expression:"model.orgCategory"}},[a("a-radio",{attrs:{value:"2"}},[e._v("\n              部门\n            ")]),a("a-radio",{attrs:{value:"3"}},[e._v("\n              岗位\n            ")])],1)]],2),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"mobile",label:"电话"}},[a("a-input",{attrs:{placeholder:"请输入电话"},model:{value:e.model.mobile,callback:function(t){e.$set(e.model,"mobile",t)},expression:"model.mobile"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"传真"}},[a("a-input",{attrs:{placeholder:"请输入传真"},model:{value:e.model.fax,callback:function(t){e.$set(e.model,"fax",t)},expression:"model.fax"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[a("a-input",{attrs:{placeholder:"请输入地址"},model:{value:e.model.address,callback:function(t){e.$set(e.model,"address",t)},expression:"model.address"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[a("a-input-number",{model:{value:e.model.departOrder,callback:function(t){e.$set(e.model,"departOrder",t)},expression:"model.departOrder"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{attrs:{placeholder:"请输入备注"},model:{value:e.model.memo,callback:function(t){e.$set(e.model,"memo",t)},expression:"model.memo"}})],1)],1)],1)],1)},o=[],r=a("0fea"),n=a("4ec3"),s=(a("85ee"),a("1f31")),i={name:"SysDepartModal",components:{ATextarea:s["a"]},data:function(){return{departTree:[],orgTypeData:[],phoneWarning:"",departName:"",title:"操作",seen:!1,visible:!1,condition:!0,disableSubmit:!1,model:{departOrder:0,orgCategory:"1"},menuhidden:!1,menuusing:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{departName:[{required:!0,message:"请输入机构/部门名称!"}],orgCode:[{required:!0,message:"请输入机构编码!"}],mobile:[{validator:this.validateMobile}],orgCategory:[{required:!0,message:"请输入机构类型!"}]},url:{add:"/sys/sysDepart/add"},dictDisabled:!0}},created:function(){},methods:{loadTreeData:function(){var e=this;Object(n["G"])().then((function(t){if(t.success){e.departTree=[];for(var a=0;a<t.result.length;a++){var l=t.result[a];e.departTree.push(l)}}}))},add:function(e){e?(this.seen=!1,this.dictDisabled=!1):(this.seen=!0,this.dictDisabled=!0),this.edit(e)},edit:function(e){this.visible=!0,this.loadTreeData(),this.model.parentId=null!=e?e.toString():null,this.seen?this.model.orgCategory="1":this.model.orgCategory="2"},close:function(){this.$emit("close"),this.disableSubmit=!1,this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;t.confirmLoading=!0,Object(r["h"])(e.url.add,e.model,"post").then((function(e){e.success?(t.$message.success(e.message),t.loadTreeData(),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()},validateMobile:function(e,t,a){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?a():a("您的手机号码格式不正确!")}}},d=i,c=a("cba8"),u=Object(c["a"])(d,l,o,!1,null,"5c7664df",null);t["default"]=u.exports}}]);