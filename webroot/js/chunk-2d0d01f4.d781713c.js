(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d01f4"],{6741:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-skeleton",{attrs:{active:"",loading:t.loading,paragraph:{rows:17}}},[a("a-card",{attrs:{bordered:!1}},[a("a-alert",{attrs:{type:"info",showIcon:!0}},[a("div",{attrs:{slot:"message"},slot:"message"},[t._v("\n        上次更新时间："+t._s(this.time)+"\n        "),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:t.handleClickUpdate}},[t._v("立即更新")])],1)]),a("a-table",{staticStyle:{"margin-top":"20px"},attrs:{rowKey:"id",size:"middle",columns:t.columns,dataSource:t.dataSource,pagination:!1,loading:t.tableLoading},scopedSlots:t._u([{key:"param",fn:function(e,o){return[a("a-tag",{attrs:{color:t.textInfo[o.param].color}},[t._v(t._s(e))])]}},{key:"text",fn:function(e,a){return[t._v("\n        "+t._s(t.textInfo[a.param].text)+"\n      ")]}},{key:"value",fn:function(e,a){return[t._v("\n        "+t._s(e)+" "+t._s(t.textInfo[a.param].unit)+"\n      ")]}}])})],1)],1)},c=[],r=a("f19b"),m=a.n(r),n=a("0fea");m.a.locale("zh-cn");var s={data:function(){return{time:"",loading:!0,tableLoading:!0,columns:[{title:"参数",width:"30%",dataIndex:"param",scopedSlots:{customRender:"param"}},{title:"描述",width:"40%",dataIndex:"text",scopedSlots:{customRender:"text"}},{title:"当前值",width:"30%",dataIndex:"value",scopedSlots:{customRender:"value"}}],dataSource:[],textInfo:{"jvm.memory.max":{color:"purple",text:"JVM 最大内存",unit:"MB"},"jvm.memory.committed":{color:"purple",text:"JVM 可用内存",unit:"MB"},"jvm.memory.used":{color:"purple",text:"JVM 已用内存",unit:"MB"},"jvm.buffer.memory.used":{color:"cyan",text:"JVM 缓冲区已用内存",unit:"MB"},"jvm.buffer.count":{color:"cyan",text:"当前缓冲区数量",unit:"个"},"jvm.threads.daemon":{color:"green",text:"JVM 守护线程数量",unit:"个"},"jvm.threads.live":{color:"green",text:"JVM 当前活跃线程数量",unit:"个"},"jvm.threads.peak":{color:"green",text:"JVM 峰值线程数量",unit:"个"},"jvm.classes.loaded":{color:"orange",text:"JVM 已加载 Class 数量",unit:"个"},"jvm.classes.unloaded":{color:"orange",text:"JVM 未加载 Class 数量",unit:"个"},"jvm.gc.memory.allocated":{color:"pink",text:"GC 时, 年轻代分配的内存空间",unit:"MB"},"jvm.gc.memory.promoted":{color:"pink",text:"GC 时, 老年代分配的内存空间",unit:"MB"},"jvm.gc.max.data.size":{color:"pink",text:"GC 时, 老年代的最大内存空间",unit:"MB"},"jvm.gc.live.data.size":{color:"pink",text:"FullGC 时, 老年代的内存空间",unit:"MB"},"jvm.gc.pause.count":{color:"blue",text:"系统启动以来GC 次数",unit:"次"},"jvm.gc.pause.totalTime":{color:"blue",text:"系统启动以来GC 总耗时",unit:"秒"}},moreInfo:{"jvm.gc.pause":[".count",".totalTime"]}}},mounted:function(){this.loadTomcatInfo()},methods:{handleClickUpdate:function(){this.loadTomcatInfo()},loadTomcatInfo:function(){var t=this;this.tableLoading=!0,this.time=m()().format("YYYY年MM月DD日 HH时mm分ss秒"),Promise.all([Object(n["c"])("actuator/metrics/jvm.memory.max"),Object(n["c"])("actuator/metrics/jvm.memory.committed"),Object(n["c"])("actuator/metrics/jvm.memory.used"),Object(n["c"])("actuator/metrics/jvm.buffer.memory.used"),Object(n["c"])("actuator/metrics/jvm.buffer.count"),Object(n["c"])("actuator/metrics/jvm.threads.daemon"),Object(n["c"])("actuator/metrics/jvm.threads.live"),Object(n["c"])("actuator/metrics/jvm.threads.peak"),Object(n["c"])("actuator/metrics/jvm.classes.loaded"),Object(n["c"])("actuator/metrics/jvm.classes.unloaded"),Object(n["c"])("actuator/metrics/jvm.gc.memory.allocated"),Object(n["c"])("actuator/metrics/jvm.gc.memory.promoted"),Object(n["c"])("actuator/metrics/jvm.gc.max.data.size"),Object(n["c"])("actuator/metrics/jvm.gc.live.data.size"),Object(n["c"])("actuator/metrics/jvm.gc.pause")]).then((function(e){var a=[];e.forEach((function(e,o){var c=t.moreInfo[e.name];c instanceof Array||(c=[""]),c.forEach((function(c,r){var m=e.name+c,n=e.measurements[r].value;"jvm.memory.max"!==m&&"jvm.memory.committed"!==m&&"jvm.memory.used"!==m&&"jvm.buffer.memory.used"!==m&&"jvm.gc.memory.allocated"!==m&&"jvm.gc.memory.promoted"!==m&&"jvm.gc.max.data.size"!==m&&"jvm.gc.live.data.size"!==m||(n=t.convert(n,Number)),a.push({id:m+o,param:m,text:"false value",value:n})}))})),t.dataSource=a})).catch((function(e){t.$message.error("获取JVM信息失败")})).finally((function(){t.loading=!1,t.tableLoading=!1}))},convert:function(t,e){return e===Number?Number(t/1048576).toFixed(3):e===Date?m()(1e3*t).format("YYYY-MM-DD HH:mm:ss"):t}}},i=s,u=a("cba8"),l=Object(u["a"])(i,o,c,!1,null,null,null);e["default"]=l.exports}}]);