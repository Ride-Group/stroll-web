(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddfd0"],{8475:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{title:"无痕刷新示例",bordered:!1}},[a("div",{staticStyle:{"margin-bottom":"8px"}},[a("span",[t._v("启用数据变动特效：")]),a("a-switch",{model:{value:t.reloadEffect,callback:function(e){t.reloadEffect=e},expression:"reloadEffect"}})],1),a("j-vxe-table",{ref:"table",attrs:{"row-number":"","row-selection":"","keep-source":"","socket-reload":"","socket-key":"demo-socket-reload","reload-effect":t.reloadEffect,height:340,loading:t.loading,columns:t.columns,dataSource:t.dataSource},on:{"edit-closed":t.handleEditClosed}})],1)},n=[],i=a("0fea"),l=a("2475"),c={name:"SocketReload",data:function(){return{loading:!1,dataSource:[],columns:[{key:"num",title:"序号",width:"80px"},{key:"ship_name",title:"船名",width:"180px",type:l["b"].input},{key:"call",title:"呼叫",width:"80px",type:l["b"].input},{key:"len",title:"长",width:"80px",type:l["b"].input},{key:"ton",title:"吨",width:"120px",type:l["b"].input},{key:"payer",title:"付款方",width:"120px",type:l["b"].input},{key:"count",title:"数",width:"40px"},{key:"company",title:"公司",minWidth:"180px",type:l["b"].input},{key:"trend",title:"动向",width:"120px",type:l["b"].input}],url:{getData:"/mock/vxe/getData"},reloadEffect:!1}},created:function(){this.loadData()},methods:{loadData:function(){var t=this,e={pageNo:1,pageSize:200};this.loading=!0,Object(i["c"])(this.url.getData,e).then((function(e){e.success?t.dataSource=e.result.records:t.$error({title:"主表查询失败",content:e.message})})).finally((function(){t.loading=!1}))},handleEditClosed:function(t){var e=this,a=t.$table,o=t.row,n=t.column,i=n.property;o[i];a.isUpdateByRow(o,i)&&a.validate(o).then((function(t){if(!t){var l=e.$message.loading('正在保存"'.concat(n.title,'"'),0);setTimeout((function(){l(),e.$message.success('"'.concat(n.title,'"保存成功！')),a.reloadRow(o,null,i),e.$refs.table.socketSendUpdateRow(o)}),555)}}))}}},d=c,r=a("cba8"),s=Object(r["a"])(d,o,n,!1,null,"738330b2",null);e["default"]=s.exports}}]);