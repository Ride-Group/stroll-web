(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6811ac61"],{"0663":function(o,e,t){"use strict";t.r(e);var i,n=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"wrapper"},[t("div",{directives:[{name:"show",rawName:"v-show",value:o.model,expression:"model"}],staticClass:"model"},[t("div",{staticClass:"model-show",on:{click:function(e){o.model=!1}}},[t("img",{attrs:{src:o.modelSrc,alt:""},on:{click:function(e){o.model=!1}}})])]),t("div",{staticClass:"content"},[t("div",{staticClass:"show-info"},[t("div",{staticClass:"test test1"},[t("vueCropper",{ref:"cropper",attrs:{img:o.option.img,outputSize:o.option.size,outputType:o.option.outputType,info:!0,full:o.option.full,canMove:o.option.canMove,canMoveBox:o.option.canMoveBox,fixedBox:o.option.fixedBox,original:o.option.original,autoCrop:o.option.autoCrop,autoCropWidth:o.option.autoCropWidth,autoCropHeight:o.option.autoCropHeight,centerBox:o.option.centerBox,high:o.option.high,infoTrue:o.option.infoTrue,maxImgSize:o.option.maxImgSize,enlarge:o.option.enlarge,mode:o.option.mode,limitMinSize:o.option.limitMinSize},on:{realTime:o.realTime,imgLoad:o.imgLoad,cropMoving:o.cropMoving}})],1),t("div",{staticClass:"test-button"},[t("button",{staticClass:"btn",on:{click:o.changeImg}},[o._v("changeImg")]),t("label",{staticClass:"btn",attrs:{for:"uploads"}},[o._v("upload")]),t("input",{ref:"uploadImg",staticStyle:{position:"absolute",clip:"rect(0 0 0 0)"},attrs:{type:"file",id:"uploads",accept:"image/png, image/jpeg, image/gif, image/jpg"},on:{change:function(e){return o.uploadImg(e,1)}}}),o.crap?t("button",{staticClass:"btn",on:{click:o.stopCrop}},[o._v("stop")]):t("button",{staticClass:"btn",on:{click:o.startCrop}},[o._v("start")]),t("button",{staticClass:"btn",on:{click:o.clearCrop}},[o._v("clear")]),t("button",{staticClass:"btn",on:{click:o.refreshCrop}},[o._v("refresh")]),t("button",{staticClass:"btn",on:{click:function(e){return o.changeScale(1)}}},[o._v("+")]),t("button",{staticClass:"btn",on:{click:function(e){return o.changeScale(-1)}}},[o._v("-")]),t("button",{staticClass:"btn",on:{click:o.rotateLeft}},[o._v("rotateLeft")]),t("button",{staticClass:"btn",on:{click:o.rotateRight}},[o._v("rotateRight")]),t("button",{staticClass:"btn",on:{click:function(e){return o.finish("base64")}}},[o._v("preview(base64)")]),t("button",{staticClass:"btn",on:{click:function(e){return o.finish("blob")}}},[o._v("preview(blob)")]),t("button",{staticClass:"btn",on:{click:function(){return o.option.img=""}}},[o._v("清除图片")]),t("a",{staticClass:"btn",on:{click:function(e){return o.down("base64")}}},[o._v("download(base64)")]),t("a",{staticClass:"btn",on:{click:function(e){return o.down("blob")}}},[o._v("download(blob)")]),t("a",{ref:"downloadDom",attrs:{href:o.downImg,download:"demo.png"}})]),t("div",{staticClass:"pre"},[t("section",{staticClass:"pre-item"},[t("p",[o._v("截图框大小")]),t("div",{staticClass:"show-preview",style:{width:o.previews.w+"px",height:o.previews.h+"px",overflow:"hidden",margin:"5px"}},[t("div",{style:o.previews.div},[t("img",{style:o.previews.img,attrs:{src:o.previews.url}})])])]),t("section",{staticClass:"pre-item"},[t("p",[o._v("中等大小")]),t("div",{style:o.previewStyle1},[t("div",{style:o.previews.div},[t("img",{style:o.previews.img,attrs:{src:o.previews.url}})])])]),t("section",{staticClass:"pre-item"},[t("p",[o._v("迷你大小")]),t("div",{style:o.previewStyle2},[t("div",{style:o.previews.div},[t("img",{style:o.previews.img,attrs:{src:o.previews.url}})])])]),t("section",{staticClass:"pre-item",attrs:{title:"zoom: (100 / previews.w)"}},[t("p",[o._v("固定为100宽度")]),t("div",{style:o.previewStyle3},[t("div",{style:o.previews.div},[t("img",{style:o.previews.img,attrs:{src:o.previews.url}})])])]),t("section",{staticClass:"pre-item",attrs:{title:"zoom: (100 / previews.h)"}},[t("p",[o._v("固定为100高度")]),t("div",{style:o.previewStyle4},[t("div",{style:o.previews.div},[t("img",{style:o.previews.img,attrs:{src:o.previews.url}})])])])]),t("div",{staticStyle:{display:"block",width:"100%"}},[t("label",{staticClass:"c-item"},[t("span",[o._v("图片默认渲染方式")]),t("select",{directives:[{name:"model",rawName:"v-model",value:o.option.mode,expression:"option.mode"}],on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(o){return o.selected})).map((function(o){var e="_value"in o?o._value:o.value;return e}));o.$set(o.option,"mode",e.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"contain"}},[o._v("contain")]),t("option",{attrs:{value:"cover"}},[o._v("cover")]),t("option",{attrs:{value:"400px auto"}},[o._v("400px auto")]),t("option",{attrs:{value:"auto 400px"}},[o._v("auto 400px")]),t("option",{attrs:{value:"50%"}},[o._v("50%")]),t("option",{attrs:{value:"auto 50%"}},[o._v("auto 50%")])]),t("section",[o._v("\n              类似css background属性设置  设置不符合规范不生效， 参照文档说明\n            ")])]),t("label",{staticClass:"c-item"},[t("span",[o._v("上传时图片最大大小(默认会压缩尺寸到这个大小)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.maxImgSize,expression:"option.maxImgSize"}],attrs:{type:"nubmer"},domProps:{value:o.option.maxImgSize},on:{input:function(e){e.target.composing||o.$set(o.option,"maxImgSize",e.target.value)}}})]),t("label",{staticClass:"c-item"},[t("span",[o._v("上传图片是否显示原始宽高 (针对大图 可以铺满)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.original,expression:"option.original"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.option.original)?o._i(o.option.original,null)>-1:o.option.original},on:{change:function(e){var t=o.option.original,i=e.target,n=!!i.checked;if(Array.isArray(t)){var a=null,r=o._i(t,a);i.checked?r<0&&o.$set(o.option,"original",t.concat([a])):r>-1&&o.$set(o.option,"original",t.slice(0,r).concat(t.slice(r+1)))}else o.$set(o.option,"original",n)}}}),t("span",[o._v("original: "+o._s(o.option.original))])]),t("label",{staticClass:"c-item"},[t("span",[o._v("是否根据dpr生成适合屏幕的高清图片")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.high,expression:"option.high"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.option.high)?o._i(o.option.high,null)>-1:o.option.high},on:{change:function(e){var t=o.option.high,i=e.target,n=!!i.checked;if(Array.isArray(t)){var a=null,r=o._i(t,a);i.checked?r<0&&o.$set(o.option,"high",t.concat([a])):r>-1&&o.$set(o.option,"high",t.slice(0,r).concat(t.slice(r+1)))}else o.$set(o.option,"high",n)}}}),t("span",[o._v("high: "+o._s(o.option.high))])]),t("label",{staticClass:"c-item"},[t("span",[o._v("是否输出原图比例的截图")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.full,expression:"option.full"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.option.full)?o._i(o.option.full,null)>-1:o.option.full},on:{change:function(e){var t=o.option.full,i=e.target,n=!!i.checked;if(Array.isArray(t)){var a=null,r=o._i(t,a);i.checked?r<0&&o.$set(o.option,"full",t.concat([a])):r>-1&&o.$set(o.option,"full",t.slice(0,r).concat(t.slice(r+1)))}else o.$set(o.option,"full",n)}}}),t("span",[o._v("full: "+o._s(o.option.full))])]),t("label",{staticClass:"c-item"},[t("span",[o._v("截图信息展示是否是真实的输出宽高")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.infoTrue,expression:"option.infoTrue"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.option.infoTrue)?o._i(o.option.infoTrue,null)>-1:o.option.infoTrue},on:{change:function(e){var t=o.option.infoTrue,i=e.target,n=!!i.checked;if(Array.isArray(t)){var a=null,r=o._i(t,a);i.checked?r<0&&o.$set(o.option,"infoTrue",t.concat([a])):r>-1&&o.$set(o.option,"infoTrue",t.slice(0,r).concat(t.slice(r+1)))}else o.$set(o.option,"infoTrue",n)}}}),t("span",[o._v("infoTrue: "+o._s(o.option.infoTrue))])]),t("label",{staticClass:"c-item"},[t("span",[o._v("能否拖动图片")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.canMove,expression:"option.canMove"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.option.canMove)?o._i(o.option.canMove,null)>-1:o.option.canMove},on:{change:function(e){var t=o.option.canMove,i=e.target,n=!!i.checked;if(Array.isArray(t)){var a=null,r=o._i(t,a);i.checked?r<0&&o.$set(o.option,"canMove",t.concat([a])):r>-1&&o.$set(o.option,"canMove",t.slice(0,r).concat(t.slice(r+1)))}else o.$set(o.option,"canMove",n)}}}),t("span",[o._v("canMove: "+o._s(o.option.canMove))])]),t("label",{staticClass:"c-item"},[t("span",[o._v("能否拖动截图框")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.canMoveBox,expression:"option.canMoveBox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.option.canMoveBox)?o._i(o.option.canMoveBox,null)>-1:o.option.canMoveBox},on:{change:function(e){var t=o.option.canMoveBox,i=e.target,n=!!i.checked;if(Array.isArray(t)){var a=null,r=o._i(t,a);i.checked?r<0&&o.$set(o.option,"canMoveBox",t.concat([a])):r>-1&&o.$set(o.option,"canMoveBox",t.slice(0,r).concat(t.slice(r+1)))}else o.$set(o.option,"canMoveBox",n)}}}),t("span",[o._v("canMoveBox: "+o._s(o.option.canMoveBox))])]),t("label",{staticClass:"c-item"},[t("span",[o._v("截图框固定大小")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.fixedBox,expression:"option.fixedBox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.option.fixedBox)?o._i(o.option.fixedBox,null)>-1:o.option.fixedBox},on:{change:function(e){var t=o.option.fixedBox,i=e.target,n=!!i.checked;if(Array.isArray(t)){var a=null,r=o._i(t,a);i.checked?r<0&&o.$set(o.option,"fixedBox",t.concat([a])):r>-1&&o.$set(o.option,"fixedBox",t.slice(0,r).concat(t.slice(r+1)))}else o.$set(o.option,"fixedBox",n)}}}),t("span",[o._v("fixedBox: "+o._s(o.option.fixedBox))])]),t("label",{staticClass:"c-item"},[t("span",[o._v("是否自动生成截图框")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.autoCrop,expression:"option.autoCrop"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.option.autoCrop)?o._i(o.option.autoCrop,null)>-1:o.option.autoCrop},on:{change:function(e){var t=o.option.autoCrop,i=e.target,n=!!i.checked;if(Array.isArray(t)){var a=null,r=o._i(t,a);i.checked?r<0&&o.$set(o.option,"autoCrop",t.concat([a])):r>-1&&o.$set(o.option,"autoCrop",t.slice(0,r).concat(t.slice(r+1)))}else o.$set(o.option,"autoCrop",n)}}}),t("span",[o._v("autoCrop: "+o._s(o.option.autoCrop))])]),t("label",{staticClass:"c-item"},[t("span",[o._v("自动生成截图框的宽高")]),t("span",[o._v("宽度:  ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.autoCropWidth,expression:"option.autoCropWidth"}],attrs:{type:"number"},domProps:{value:o.option.autoCropWidth},on:{input:function(e){e.target.composing||o.$set(o.option,"autoCropWidth",e.target.value)}}}),t("span",[o._v("高度:  ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.autoCropHeight,expression:"option.autoCropHeight"}],attrs:{type:"number"},domProps:{value:o.option.autoCropHeight},on:{input:function(e){e.target.composing||o.$set(o.option,"autoCropHeight",e.target.value)}}})]),t("label",{staticClass:"c-item"},[t("span",[o._v("截图框是否限制在图片里(只有在自动生成截图框时才能生效)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.centerBox,expression:"option.centerBox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.option.centerBox)?o._i(o.option.centerBox,null)>-1:o.option.centerBox},on:{change:function(e){var t=o.option.centerBox,i=e.target,n=!!i.checked;if(Array.isArray(t)){var a=null,r=o._i(t,a);i.checked?r<0&&o.$set(o.option,"centerBox",t.concat([a])):r>-1&&o.$set(o.option,"centerBox",t.slice(0,r).concat(t.slice(r+1)))}else o.$set(o.option,"centerBox",n)}}}),t("span",[o._v("centerBox: "+o._s(o.option.centerBox))])]),t("label",{staticClass:"c-item"},[t("span",[o._v("是否按照截图框比例输出 默认为1 ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.enlarge,expression:"option.enlarge"}],attrs:{type:"number"},domProps:{value:o.option.enlarge},on:{input:function(e){e.target.composing||o.$set(o.option,"enlarge",e.target.value)}}})]),t("p",[o._v("输出图片格式")]),t("label",{staticClass:"c-item"},[t("label",[o._v("jpg  "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.outputType,expression:"option.outputType"}],attrs:{type:"radio",name:"type",value:"jpeg"},domProps:{checked:o._q(o.option.outputType,"jpeg")},on:{change:function(e){return o.$set(o.option,"outputType","jpeg")}}})]),t("label",[o._v("png  "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.outputType,expression:"option.outputType"}],attrs:{type:"radio",name:"type",value:"png"},domProps:{checked:o._q(o.option.outputType,"png")},on:{change:function(e){return o.$set(o.option,"outputType","png")}}})]),t("label",[o._v("webp "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.option.outputType,expression:"option.outputType"}],attrs:{type:"radio",name:"type",value:"webp"},domProps:{checked:o._q(o.option.outputType,"webp")},on:{change:function(e){return o.$set(o.option,"outputType","webp")}}})])])])])])])},a=[],r=t("965d");function p(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function s(o){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},s(o)}var c=(i={name:"ImagCropper",components:{VueCropper:r["VueCropper"]},data:function(){return{model:!1,modelSrc:"",crap:!1,previews:{},lists:[{img:"https://avatars2.githubusercontent.com/u/15681693?s=460&v=4"},{img:"http://cdn.xyxiao.cn/Landscape_1.jpg"},{img:"http://cdn.xyxiao.cn/Landscape_2.jpg"},{img:"http://cdn.xyxiao.cn/Landscape_3.jpg"},{img:"http://cdn.xyxiao.cn/Landscape_4.jpg"},{img:"http://cdn.xyxiao.cn/Portrait_1.jpg"},{img:"http://cdn.xyxiao.cn/Portrait_2.jpg"}],option:{img:"",size:1,full:!1,outputType:"png",canMove:!0,fixedBox:!1,original:!1,canMoveBox:!0,autoCrop:!0,autoCropWidth:200,autoCropHeight:150,centerBox:!1,high:!1,cropData:{},enlarge:1,mode:"contain",maxImgSize:3e3,limitMinSize:[100,120]},example2:{img:"http://cdn.xyxiao.cn/Landscape_2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!0,autoCrop:!0,autoCropWidth:300,autoCropHeight:250,fixed:!0,infoTrue:!0,fixedNumber:[4,3]},example3:{img:"http://cdn.xyxiao.cn/Landscape_1.jpg",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},downImg:"#",previewStyle1:{},previewStyle2:{},previewStyle3:{},previewStyle4:{},code0:"",code1:"",code2:"",code3:"",preview3:""}},methods:{changeImg:function(){this.option.img=this.lists[~~(Math.random()*this.lists.length)].img},startCrop:function(){this.crap=!0,this.$refs.cropper.startCrop()},stopCrop:function(){this.crap=!1,this.$refs.cropper.stopCrop()},clearCrop:function(){this.$refs.cropper.clearCrop()},refreshCrop:function(){this.$refs.cropper.refresh()},changeScale:function(o){o=o||1,this.$refs.cropper.changeScale(o)},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},finish:function(o){var e=this;"blob"===o?this.$refs.cropper.getCropBlob((function(o){var t=window.URL.createObjectURL(o);e.model=!0,e.modelSrc=t})):this.$refs.cropper.getCropData((function(o){e.model=!0,e.modelSrc=o}))},realTime:function(o){var e=o,t=.5,i=.2;this.previewStyle1={width:e.w+"px",height:e.h+"px",overflow:"hidden",margin:"0",zoom:t},this.previewStyle2={width:e.w+"px",height:e.h+"px",overflow:"hidden",margin:"0",zoom:i},this.previewStyle3={width:e.w+"px",height:e.h+"px",overflow:"hidden",margin:"0",zoom:100/e.w},this.previewStyle4={width:e.w+"px",height:e.h+"px",overflow:"hidden",margin:"0",zoom:100/e.h},this.previews=o},finish2:function(o){var e=this;this.$refs.cropper2.getCropData((function(o){e.model=!0,e.modelSrc=o}))},finish3:function(o){var e=this;this.$refs.cropper3.getCropData((function(o){e.model=!0,e.modelSrc=o}))},down:function(o){var e=this;"blob"===o?this.$refs.cropper.getCropBlob((function(o){if(e.downImg=window.URL.createObjectURL(o),window.navigator.msSaveBlob){var t=new Blob([o]);window.navigator.msSaveBlob(t,"demo.png")}else e.$nextTick((function(){e.$refs.downloadDom.click()}))})):this.$refs.cropper.getCropData((function(o){if(e.downImg=o,window.navigator.msSaveBlob){var t=new Blob([o]);window.navigator.msSaveBlob(t,"demo.png")}else e.$nextTick((function(){e.$refs.downloadDom.click()}))}))},uploadImg:function(o,e){var t=this,i=o.target.files[0];if(!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(o.target.value))return alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种"),!1;var n=new FileReader;n.onload=function(o){var i;i="object"===s(o.target.result)?window.URL.createObjectURL(new Blob([o.target.result])):o.target.result,1===e?t.option.img=i:2===e&&(t.example2.img=i),t.$refs.uploadImg.value=""},n.readAsArrayBuffer(i)},imgLoad:function(o){},cropMoving:function(o){this.option.cropData=o}}},p(i,"components",{VueCropper:r["VueCropper"]}),p(i,"mounted",(function(){this.changeImg();var o=[].slice.call(document.querySelectorAll("pre code"));o.forEach((function(o,e){hljs.highlightBlock(o)}))})),i),l=c,u=(t("19a3"),t("cba8")),v=Object(u["a"])(l,n,a,!1,null,"2095ef4a",null);e["default"]=v.exports},"19a3":function(o,e,t){"use strict";t("7d08")},"7d08":function(o,e,t){}}]);