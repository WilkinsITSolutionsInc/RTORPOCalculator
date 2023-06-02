webpackJsonp([0],[,function(t,e,a){a(17);var s=a(0)(a(7),a(32),"data-v-4414a7f0",null);t.exports=s.exports},,function(t,e,a){a(16);var s=a(0)(a(5),a(31),null,null);t.exports=s.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(25),i=a.n(s);e.default={name:"app",components:{Calculator:i.a},data:function(){return{recoveryTimeObjective:173520,rtoInputs:{recoveryTimeObjective:84,recoveryPointObjective:84}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(28),i=a.n(s),r=a(27),n=a.n(r),l=a(1),o=a.n(l),d=a(26),u=a.n(d),C=a(29),c=a.n(C);e.default={name:"calculator",components:{RangeSlider:i.a,InputTime:n.a,InputNumber:o.a,InputSwitch:u.a,Results:c.a},data:function(){return{recoveryTimeObjective:84,recoveryPointObjective:84,dataDisrupted:250,timeBetweenBackups:46080,timeInitiateBackup:46080,affectedEmployees:50,averageWage:100,overheadCost:100,businessLost:1e3,recoverySpeed:716800}},methods:{updateValue:function(t,e){this[t]=Number(e)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"input-number",props:["model","label","value","min","max"],data:function(){return{}},methods:{updateValue:function(t){this.$emit("update-value",this.model,t.target.value)},decrease:function(t){var e=this.value-1;e>=this.min?this.$emit("update-value",this.model,e):"minutes"===this.model?this.$emit("hit-minute-min"):this.$emit("update-value",this.model,this.min)},increase:function(t){var e=this.value+1;e<=this.max?this.$emit("update-value",this.model,e):"minutes"===this.model?this.$emit("hit-minute-max"):this.$emit("update-value",this.model,this.min)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"input-switch",props:["model","nameOne","nameTwo","labelOne","labelTwo","valueOne","valueTwo"],data:function(){return{optionTwo:!1}},methods:{updateValue:function(t){this.optionTwo=!this.optionTwo,this.optionTwo?this.$emit("update-value",this.model,this.valueTwo):this.$emit("update-value",this.model,this.valueOne)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),i=a.n(s);e.default={name:"time-input",components:{InputNumber:i.a},props:["model","value"],data:function(){return{hours:12,minutes:48}},methods:{updateValue:function(t,e){this[t]=Number(e);var a=60*this.minutes+60*this.hours*60;this.$emit("update-value",this.model,a)},hitMinuteMax:function(t){this.minutes=0,this.hours=this.hours+1;var e=60*this.minutes+60*this.hours*60;this.$emit("update-value",this.model,e)},hitMinuteMin:function(t){this.minutes=59,this.hours=this.hours-1;var e=60*this.minutes+60*this.hours*60;this.$emit("update-value",this.model,e)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"range-slider",props:{model:{default:null,type:String},min:{default:"1",type:String},max:{default:"1000",type:String},step:{default:"1",type:String},value:{default:500,type:Number},isDollar:{default:!1,type:Boolean}},data:function(){return{currentValue:null}},computed:{gradientFill:function(){return this.currentValue?(100-this.currentValue/this.max*100).toFixed(2):(100-this.value/this.max*100).toFixed(2)},toolTip:function(){if(this.currentValue){return(this.currentValue>1e3?-14:-7)-this.currentValue/this.max*1*37}return-7-this.value/this.max*1*37}},methods:{updateValue:function(t){this.currentValue=t.target.value,this.$emit("update-value",this.model,t.target.value)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"results",props:["recoveryTimeObjective","recoveryPointObjective","dataDisrupted","timeBetweenBackups","timeInitiateBackup","affectedEmployees","averageWage","overheadCost","businessLost","recoverySpeed"],filters:{currency:function(t){return t?(t=t.toString(),"$"+t.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")):""},timeFormat:function(t){return t=Math.floor(t),Math.floor(t/86400)+" DAYS "+Math.floor(t/3600)%24+" HRS "+Math.floor(t/60)%60+" MINS "}},computed:{hourlyRevenueCost:function(){return this.affectedEmployees*this.averageWage+this.overheadCost+this.businessLost},estimatedDowntime:function(){return 8388608*this.dataDisrupted/this.recoverySpeed+this.timeInitiateBackup},totalCost:function(){return this.affectedEmployees*this.averageWage+this.overheadCost+this.businessLost}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(4),i=a(3),r=a.n(i);s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:r.a}})},,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjYzcHgiIGhlaWdodD0iNDNweCIgdmlld0JveD0iMCAwIDYzIDQzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjY0IiB5PSIwIiB3aWR0aD0iNTUiIGhlaWdodD0iMzUiIHJ4PSIxNy41Ij48L3JlY3Q+CiAgICAgICAgPGZpbHRlciB4PSItMTIuNyUiIHk9Ii0xNC4zJSIgd2lkdGg9IjEyNS41JSIgaGVpZ2h0PSIxNDAuMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0yIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMC4xNjQ3MDU4ODIgICAwIDAgMCAwIDAuMjI3NDUwOTggIDAgMCAwIDAuNDQyMDAwNjc5IDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk1Ny4wMDAwMDAsIC0xNjg5LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iUmVjb3ZlcnktUHJvY2Vzcy0mYW1wOy1EYXRhLVN0b3JhZ2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA5NTEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iVG9nZ2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OTcuMDAwMDAwLCA3NDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS0xMCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMSIgZmlsdGVyPSJ1cmwoI2ZpbHRlci0yKSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI0JFREJFNCIgeD0iODEiIHk9IjkiIHdpZHRoPSIzIiBoZWlnaHQ9IjE3IiByeD0iMS41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI0JFREJFNCIgeD0iODkiIHk9IjkiIHdpZHRoPSIzIiBoZWlnaHQ9IjE3IiByeD0iMS41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI0JFREJFNCIgeD0iOTciIHk9IjkiIHdpZHRoPSIzIiBoZWlnaHQ9IjE3IiByeD0iMS41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},function(t,e,a){a(15);var s=a(0)(a(6),a(30),"data-v-05586cd5",null);t.exports=s.exports},function(t,e,a){a(18);var s=a(0)(a(8),a(33),"data-v-46c1965b",null);t.exports=s.exports},function(t,e,a){a(20);var s=a(0)(a(9),a(35),"data-v-548dd598",null);t.exports=s.exports},function(t,e,a){a(19);var s=a(0)(a(10),a(34),"data-v-4bb3a73b",null);t.exports=s.exports},function(t,e,a){a(21);var s=a(0)(a(11),a(36),"data-v-9a22759a",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"section-padding blue-lt"},[a("div",{staticClass:"wrap"},[t._m(0),t._v(" "),a("div",{staticClass:"grid-5"},[a("p",[t._v("How many hours can your business go without accessing its critical systems or servers?")]),t._v(" "),a("range-slider",{attrs:{model:"recoveryTimeObjective",max:"168",value:t.recoveryTimeObjective},on:{"update-value":t.updateValue}})],1),t._v(" "),a("div",{staticClass:"grid-5 grid-offset-2"},[a("p",[t._v("How many hours of production time on those servers are you willing to lose?")]),t._v(" "),a("range-slider",{attrs:{model:"recoveryPointObjective",value:t.recoveryPointObjective,max:"168"},on:{"update-value":t.updateValue}})],1)])]),t._v(" "),a("section",{staticClass:"section-padding blue-dk"},[a("div",{staticClass:"wrap"},[t._m(1),t._v(" "),a("div",{staticClass:"grid-5 justify-content"},[a("p",[t._v("How many gigabytes of data are on your critical business systems? Critical systems are the systems essential to your business operations.")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"grid-7"},[a("input-number",{attrs:{min:"0",max:"9999",value:t.dataDisrupted,label:"GB",model:"dataDisrupted"},on:{"update-value":t.updateValue},model:{value:t.dataDisrupted,callback:function(e){t.dataDisrupted=t._n(e)},expression:"dataDisrupted"}})],1)])]),t._v(" "),a("div",{staticClass:"grid-5 grid-offset-2 justify-content"},[a("p",[t._v("How often do you currently back up these systems, e.g. what is the time between each backup? ")]),t._v(" "),a("input-time",{attrs:{value:t.timeBetweenBackups,model:"timeBetweenBackups"},on:{"update-value":t.updateValue}})],1),t._v(" "),a("div",{staticClass:"grid-5 margin-top__lg"},[a("p",[t._v("How long does it take to initiate your recovery process? This is the amount of time that it will take you to prepare the systems for a recovery or restore.")]),t._v(" "),a("input-time",{attrs:{value:t.timeInitiateBackup,model:"timeInitiateBackup"},on:{"update-value":t.updateValue}})],1),t._v(" "),a("div",{staticClass:"grid-5 grid-offset-2 margin-top__lg"},[a("p",[t._v("Are you recovering data from a local network, or the cloud? This affects the speed at which the data can be recovered.")]),t._v(" "),a("input-switch",{attrs:{model:"recoverySpeed",nameOne:"local",nameTwo:"cloud",labelOne:"Local",labelTwo:"Cloud",valueOne:"716800",valueTwo:"30720"},on:{"update-value":t.updateValue}})],1)])]),t._v(" "),a("section",{staticClass:"section-padding blue-lt"},[a("div",{staticClass:"wrap"},[t._m(2),t._v(" "),a("div",{staticClass:"grid-5 justify-content"},[a("p",[t._v("How many employees would be affected if your critical systems failed?")]),t._v(" "),a("range-slider",{attrs:{model:"affectedEmployees",value:t.affectedEmployees,max:"1000"},on:{"update-value":t.updateValue}})],1),t._v(" "),a("div",{staticClass:"grid-5 grid-offset-2 justify-content"},[a("p",[t._v("What is the revenue generated per hour by these employees?")]),t._v(" "),a("range-slider",{attrs:{model:"businessLost",min:"0",value:t.businessLost,max:"10000",isDollar:!0},on:{"update-value":t.updateValue}})],1),t._v(" "),a("div",{staticClass:"grid-5 margin-top__lg justify-content"},[a("p",[t._v("What is the average hourly wage of an employee using one of your critical systems?")]),t._v(" "),a("range-slider",{attrs:{model:"averageWage",value:t.averageWage,max:"500",isDollar:!0},on:{"update-value":t.updateValue}})],1),t._v(" "),a("div",{staticClass:"grid-5 grid-offset-2 margin-top__lg justify-content"},[a("p",[t._v("What is the average hourly overhead cost of an employee using a critical system?")]),t._v(" "),a("range-slider",{attrs:{model:"overheadCost",value:t.overheadCost,min:"0",max:"500",isDollar:!0},on:{"update-value":t.updateValue}})],1)])]),t._v(" "),a("results",{attrs:{recoveryTimeObjective:t.recoveryTimeObjective,recoveryPointObjective:t.recoveryPointObjective,dataDisrupted:t.dataDisrupted,timeBetweenBackups:t.timeBetweenBackups,timeInitiateBackup:t.timeInitiateBackup,affectedEmployees:t.affectedEmployees,averageWage:t.averageWage,overheadCost:t.overheadCost,businessLost:t.businessLost,recoverySpeed:t.recoverySpeed}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-12"},[a("h2",[t._v("Set Your Recovery Objectives")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-12"},[a("h2",[t._v("Recovery Process & Data Storage")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-12"},[a("h2",[t._v("Downtime & Recovery Costs")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),a("calculator")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero"},[a("div",{staticClass:"wrap grid-center"},[a("div",{staticClass:"grid-8 grid-offset-2 text-center"},[a("h1",[t._v("RECOVERY TIME CALCULATOR")]),t._v(" "),a("p",[t._v("Evaluate your Recovery Time and Recovery Point Objectives")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"number-input"},[a("div",{staticClass:"input-button decrease",on:{click:t.decrease}},[t._v("−")]),a("input",{attrs:{type:"number",name:t.model,min:t.min,max:t.max},domProps:{value:t.value},on:{input:t.updateValue}}),a("div",{staticClass:"input-button increase",on:{click:t.increase}},[t._v("+")])]),t._v(" "),a("label",{attrs:{for:t.model}},[t._v(t._s(t.label))])])},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"switch"},[s("input",{staticClass:"switch-input",attrs:{type:"checkbox"},on:{change:function(e){e.stopPropagation(),t.updateValue(e)}}}),t._v(" "),s("span",{staticClass:"label",class:{active:!t.optionTwo}},[t._v(t._s(t.labelOne))]),t._v(" "),s("div",{staticClass:"switch-icon"},[s("img",{class:{right:t.optionTwo},attrs:{src:a(24)}})]),t._v(" "),s("span",{staticClass:"label",class:{active:t.optionTwo}},[t._v(t._s(t.labelTwo))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"range-slider"},[a("div",{staticClass:"fill"}),t._v(" "),a("div",{staticClass:"empty",style:{width:t.gradientFill+"%"}}),t._v(" "),a("input",{staticClass:"slider-input",attrs:{type:"range",min:t.min,max:t.max,step:t.step},domProps:{value:t.value},on:{input:t.updateValue}}),t._v(" "),a("div",{staticClass:"marker"},[a("div",{staticClass:"min marker-label"},[t._v(t._s(t.isDollar?"$":null)+t._s(t.min))]),t._v(" "),a("div",{staticClass:"middle marker-label"},[t._v(t._s(t.isDollar?"$":null)+t._s(t.max/2))]),t._v(" "),a("div",{staticClass:"max marker-label"},[t._v(t._s(t.isDollar?"$":null)+t._s(t.max))])]),t._v(" "),a("div",{ref:"rangeTooltip",staticClass:"range-value",style:{left:100-t.gradientFill+"%",marginLeft:t.toolTip+"px"}},[t._v(t._s(t.isDollar?"$":null)+t._s(t.value))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"grid-6"},[a("input-number",{attrs:{min:"0",max:"120",value:t.hours,model:"hours",label:"Hours"},on:{"update-value":t.updateValue},model:{value:t.hours,callback:function(e){t.hours=t._n(e)},expression:"hours"}})],1),t._v(" "),a("div",{staticClass:"grid-6"},[a("input-number",{attrs:{min:"0",max:"59",value:t.minutes,model:"minutes",label:"Minutes"},on:{"update-value":t.updateValue,"hit-minute-max":t.hitMinuteMax,"hit-minute-min":t.hitMinuteMin},model:{value:t.minutes,callback:function(e){t.minutes=t._n(e)},expression:"minutes"}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section-padding results blue-dk"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"grid-4"},[a("h2",[t._v("Calculate your recovery cost")]),t._v(" "),a("div",{staticClass:"total-cost"},[t._v(t._s(t._f("currency")(Math.floor(t.hourlyRevenueCost*(t.estimatedDowntime/3600)))))]),t._v(" "),a("div",{staticClass:"total-cost-label"},[t._v("TOTAL COST TO BUSINESS")])]),t._v(" "),a("div",{staticClass:"grid-4 grid-offset-1"},[a("h3",[t._v("Recovery Process")]),t._v(" "),a("div",{staticClass:"data-group"},[a("svg",{attrs:{width:"22px",height:"17px",viewBox:"0 0 22 17",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v("Created with Sketch.")]),t._v(" "),a("defs"),t._v(" "),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"Artboard",transform:"translate(-847.000000, -2892.000000)","fill-rule":"nonzero",fill:"#07F0D7"}},[a("g",{attrs:{id:"Final-Calc",transform:"translate(0.000000, 2612.000000)"}},[a("g",{attrs:{id:"Recovery-Process",transform:"translate(845.000000, 212.000000)"}},[a("path",{attrs:{d:"M6.125,85 L19.875,85 C22.153375,85 24,83.2093333 24,81 L2,81 C2,83.2093333 3.846625,85 6.125,85 Z M20,82 L21,82 L21,83 L20,83 L20,82 Z M22.625,68 L3.375,68 L2,79 L24,79 L22.625,68 Z",id:"Shape"}})])])])])]),t._v(" "),a("div",{staticClass:"data"},[t._v(t._s(t.dataDisrupted)+" GB")]),t._v(" "),a("div",{staticClass:"data-label"},[t._v("Critical Systems Data")])]),t._v(" "),a("div",{staticClass:"data-group"},[a("svg",{attrs:{width:"22px",height:"22px",viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v("Created with Sketch.")]),t._v(" "),a("defs"),t._v(" "),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"Artboard",transform:"translate(-845.000000, -3009.000000)","fill-rule":"nonzero",fill:"#07F0D7"}},[a("g",{attrs:{id:"Final-Calc",transform:"translate(0.000000, 2612.000000)"}},[a("g",{attrs:{id:"Recovery-Process",transform:"translate(845.000000, 212.000000)"}},[a("path",{attrs:{d:"M11,185 C12.4946667,185 13.9203333,185.290333 15.277,185.871 C16.6336667,186.451667 17.803,187.233 18.785,188.215 C19.767,189.197 20.5483333,190.366333 21.129,191.723 C21.7096667,193.079667 22,194.505333 22,196 C22,197.494667 21.7096667,198.920333 21.129,200.277 C20.5483333,201.633667 19.767,202.803 18.785,203.785 C17.803,204.767 16.6336667,205.548333 15.277,206.129 C13.9203333,206.709667 12.4946667,207 11,207 C9.50533333,207 8.07966667,206.709667 6.723,206.129 C5.36633333,205.548333 4.197,204.767 3.215,203.785 C2.233,202.803 1.45166667,201.633667 0.871,200.277 C0.290333333,198.920333 5.32907052e-15,197.494667 0,196 C-5.32907052e-15,194.505333 0.290333333,193.079667 0.871,191.723 C1.45166667,190.366333 2.233,189.197 3.215,188.215 C4.197,187.233 5.36633333,186.451667 6.723,185.871 C8.07966667,185.290333 9.50533333,185 11,185 Z M11,187 C9.78133333,187 8.616,187.238333 7.504,187.715 C6.392,188.191667 5.435,188.831 4.633,189.633 C3.831,190.435 3.19166667,191.392 2.715,192.504 C2.23833333,193.616 2,194.781333 2,196 C2,197.218667 2.23833333,198.384 2.715,199.496 C3.19166667,200.608 3.831,201.565 4.633,202.367 C5.435,203.169 6.392,203.808333 7.504,204.285 C8.616,204.761667 9.78133333,205 11,205 C12.2186667,205 13.384,204.761667 14.496,204.285 C15.608,203.808333 16.565,203.169 17.367,202.367 C18.169,201.565 18.8083333,200.608 19.285,199.496 C19.7616667,198.384 20,197.218667 20,196 C20,194.781333 19.7616667,193.616 19.285,192.504 C18.8083333,191.392 18.169,190.435 17.367,189.633 C16.565,188.831 15.608,188.191667 14.496,187.715 C13.384,187.238333 12.2186667,187 11,187 L11,187 Z M11,189 C11.276,189 11.5116667,189.097667 11.707,189.293 C11.9023333,189.488333 12,189.724 12,190 L12,195.586 L14.711,198.289 C14.9036667,198.481667 15,198.718667 15,199 C15,199.281333 14.9036667,199.518333 14.711,199.711 C14.5183333,199.903667 14.2813333,200 14,200 C13.7186667,200 13.4816667,199.903667 13.289,199.711 L10.289,196.711 C10.0963333,196.518333 10,196.281333 10,196 L10,190 C10,189.724 10.0976667,189.488333 10.293,189.293 C10.4883333,189.097667 10.724,189 11,189 Z",id:"Shape"}})])])])])]),t._v(" "),a("div",{staticClass:"data"},[t._v(t._s(t._f("timeFormat")(t.timeBetweenBackups)))]),t._v(" "),a("div",{staticClass:"data-label"},[t._v("Time between backups")])]),t._v(" "),a("div",{staticClass:"data-group"},[a("svg",{attrs:{width:"22px",height:"22px",viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v("Created with Sketch.")]),t._v(" "),a("defs"),t._v(" "),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"Artboard",transform:"translate(-845.000000, -3009.000000)","fill-rule":"nonzero",fill:"#07F0D7"}},[a("g",{attrs:{id:"Final-Calc",transform:"translate(0.000000, 2612.000000)"}},[a("g",{attrs:{id:"Recovery-Process",transform:"translate(845.000000, 212.000000)"}},[a("path",{attrs:{d:"M11,185 C12.4946667,185 13.9203333,185.290333 15.277,185.871 C16.6336667,186.451667 17.803,187.233 18.785,188.215 C19.767,189.197 20.5483333,190.366333 21.129,191.723 C21.7096667,193.079667 22,194.505333 22,196 C22,197.494667 21.7096667,198.920333 21.129,200.277 C20.5483333,201.633667 19.767,202.803 18.785,203.785 C17.803,204.767 16.6336667,205.548333 15.277,206.129 C13.9203333,206.709667 12.4946667,207 11,207 C9.50533333,207 8.07966667,206.709667 6.723,206.129 C5.36633333,205.548333 4.197,204.767 3.215,203.785 C2.233,202.803 1.45166667,201.633667 0.871,200.277 C0.290333333,198.920333 5.32907052e-15,197.494667 0,196 C-5.32907052e-15,194.505333 0.290333333,193.079667 0.871,191.723 C1.45166667,190.366333 2.233,189.197 3.215,188.215 C4.197,187.233 5.36633333,186.451667 6.723,185.871 C8.07966667,185.290333 9.50533333,185 11,185 Z M11,187 C9.78133333,187 8.616,187.238333 7.504,187.715 C6.392,188.191667 5.435,188.831 4.633,189.633 C3.831,190.435 3.19166667,191.392 2.715,192.504 C2.23833333,193.616 2,194.781333 2,196 C2,197.218667 2.23833333,198.384 2.715,199.496 C3.19166667,200.608 3.831,201.565 4.633,202.367 C5.435,203.169 6.392,203.808333 7.504,204.285 C8.616,204.761667 9.78133333,205 11,205 C12.2186667,205 13.384,204.761667 14.496,204.285 C15.608,203.808333 16.565,203.169 17.367,202.367 C18.169,201.565 18.8083333,200.608 19.285,199.496 C19.7616667,198.384 20,197.218667 20,196 C20,194.781333 19.7616667,193.616 19.285,192.504 C18.8083333,191.392 18.169,190.435 17.367,189.633 C16.565,188.831 15.608,188.191667 14.496,187.715 C13.384,187.238333 12.2186667,187 11,187 L11,187 Z M11,189 C11.276,189 11.5116667,189.097667 11.707,189.293 C11.9023333,189.488333 12,189.724 12,190 L12,195.586 L14.711,198.289 C14.9036667,198.481667 15,198.718667 15,199 C15,199.281333 14.9036667,199.518333 14.711,199.711 C14.5183333,199.903667 14.2813333,200 14,200 C13.7186667,200 13.4816667,199.903667 13.289,199.711 L10.289,196.711 C10.0963333,196.518333 10,196.281333 10,196 L10,190 C10,189.724 10.0976667,189.488333 10.293,189.293 C10.4883333,189.097667 10.724,189 11,189 Z",id:"Shape"}})])])])])]),t._v(" "),a("div",{staticClass:"data"},[t._v(t._s(t._f("timeFormat")(t.timeInitiateBackup)))]),t._v(" "),a("div",{staticClass:"data-label"},[t._v("Recovery Process Initiation")])]),t._v(" "),a("div",{staticClass:"data-group"},[a("svg",{attrs:{width:"22px",height:"22px",viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v("Created with Sketch.")]),t._v(" "),a("defs"),t._v(" "),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"Artboard",transform:"translate(-845.000000, -3009.000000)","fill-rule":"nonzero",fill:"#07F0D7"}},[a("g",{attrs:{id:"Final-Calc",transform:"translate(0.000000, 2612.000000)"}},[a("g",{attrs:{id:"Recovery-Process",transform:"translate(845.000000, 212.000000)"}},[a("path",{attrs:{d:"M11,185 C12.4946667,185 13.9203333,185.290333 15.277,185.871 C16.6336667,186.451667 17.803,187.233 18.785,188.215 C19.767,189.197 20.5483333,190.366333 21.129,191.723 C21.7096667,193.079667 22,194.505333 22,196 C22,197.494667 21.7096667,198.920333 21.129,200.277 C20.5483333,201.633667 19.767,202.803 18.785,203.785 C17.803,204.767 16.6336667,205.548333 15.277,206.129 C13.9203333,206.709667 12.4946667,207 11,207 C9.50533333,207 8.07966667,206.709667 6.723,206.129 C5.36633333,205.548333 4.197,204.767 3.215,203.785 C2.233,202.803 1.45166667,201.633667 0.871,200.277 C0.290333333,198.920333 5.32907052e-15,197.494667 0,196 C-5.32907052e-15,194.505333 0.290333333,193.079667 0.871,191.723 C1.45166667,190.366333 2.233,189.197 3.215,188.215 C4.197,187.233 5.36633333,186.451667 6.723,185.871 C8.07966667,185.290333 9.50533333,185 11,185 Z M11,187 C9.78133333,187 8.616,187.238333 7.504,187.715 C6.392,188.191667 5.435,188.831 4.633,189.633 C3.831,190.435 3.19166667,191.392 2.715,192.504 C2.23833333,193.616 2,194.781333 2,196 C2,197.218667 2.23833333,198.384 2.715,199.496 C3.19166667,200.608 3.831,201.565 4.633,202.367 C5.435,203.169 6.392,203.808333 7.504,204.285 C8.616,204.761667 9.78133333,205 11,205 C12.2186667,205 13.384,204.761667 14.496,204.285 C15.608,203.808333 16.565,203.169 17.367,202.367 C18.169,201.565 18.8083333,200.608 19.285,199.496 C19.7616667,198.384 20,197.218667 20,196 C20,194.781333 19.7616667,193.616 19.285,192.504 C18.8083333,191.392 18.169,190.435 17.367,189.633 C16.565,188.831 15.608,188.191667 14.496,187.715 C13.384,187.238333 12.2186667,187 11,187 L11,187 Z M11,189 C11.276,189 11.5116667,189.097667 11.707,189.293 C11.9023333,189.488333 12,189.724 12,190 L12,195.586 L14.711,198.289 C14.9036667,198.481667 15,198.718667 15,199 C15,199.281333 14.9036667,199.518333 14.711,199.711 C14.5183333,199.903667 14.2813333,200 14,200 C13.7186667,200 13.4816667,199.903667 13.289,199.711 L10.289,196.711 C10.0963333,196.518333 10,196.281333 10,196 L10,190 C10,189.724 10.0976667,189.488333 10.293,189.293 C10.4883333,189.097667 10.724,189 11,189 Z",id:"Shape"}})])])])])]),t._v(" "),a("div",{staticClass:"data"},[t._v(t._s(t._f("timeFormat")(t.estimatedDowntime)))]),t._v(" "),a("div",{staticClass:"data-label"},[t._v("Estimated Downtime")])])]),t._v(" "),a("div",{staticClass:"grid-3"},[a("h3",[t._v("Downtime Costs")]),t._v(" "),a("div",{staticClass:"data-group"},[a("svg",{attrs:{width:"17px",height:"17px",viewBox:"0 0 17 17",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v("Created with Sketch.")]),t._v(" "),a("defs"),t._v(" "),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"Artboard",transform:"translate(-1178.000000, -2895.000000)","fill-rule":"nonzero",fill:"#07F0D7"}},[a("g",{attrs:{id:"Final-Calc",transform:"translate(0.000000, 2612.000000)"}},[a("g",{attrs:{id:"Downtime-Costs",transform:"translate(1175.000000, 212.000000)"}},[a("path",{attrs:{d:"M11.015,81.031 C13.687,81.031 19.031,82.344 19.031,85.015 L19.031,87.031 L3,87.031 L3,85.015 C3,82.343 8.344,81.031 11.016,81.031 L11.015,81.031 Z M11.015,79.015 C8.812,79.015 7.031,77.234 7.031,75.031 C7.031,72.828 8.812,71 11.015,71 C13.218,71 14.999,72.828 14.999,75.031 C14.999,77.234 13.218,79.015 11.015,79.015 Z",id:"Shape"}})])])])])]),t._v(" "),a("div",{staticClass:"data"},[t._v(t._s(t.affectedEmployees))]),t._v(" "),a("div",{staticClass:"data-label"},[t._v("Employees Affected")])]),t._v(" "),a("div",{staticClass:"data-group"},[a("svg",{attrs:{width:"22px",height:"22px",viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v("Created with Sketch.")]),t._v(" "),a("defs"),t._v(" "),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"Artboard",transform:"translate(-1175.000000, -3009.000000)",fill:"#07F0D7"}},[a("g",{attrs:{id:"Final-Calc",transform:"translate(0.000000, 2612.000000)"}},[a("g",{attrs:{id:"Downtime-Costs",transform:"translate(1175.000000, 212.000000)"}},[a("path",{attrs:{d:"M11,185 C12.4946667,185 13.9203333,185.290333 15.277,185.871 C16.6336667,186.451667 17.803,187.233 18.785,188.215 C19.767,189.197 20.5483333,190.366333 21.129,191.723 C21.7096667,193.079667 22,194.505333 22,196 C22,197.494667 21.7096667,198.920333 21.129,200.277 C20.5483333,201.633667 19.767,202.803 18.785,203.785 C17.803,204.767 16.6336667,205.548333 15.277,206.129 C13.9203333,206.709667 12.4946667,207 11,207 C9.50533333,207 8.07966667,206.709667 6.723,206.129 C5.36633333,205.548333 4.197,204.767 3.215,203.785 C2.233,202.803 1.45166667,201.633667 0.871,200.277 C0.290333333,198.920333 5.32907052e-15,197.494667 0,196 C-5.32907052e-15,194.505333 0.290333333,193.079667 0.871,191.723 C1.45166667,190.366333 2.233,189.197 3.215,188.215 C4.197,187.233 5.36633333,186.451667 6.723,185.871 C8.07966667,185.290333 9.50533333,185 11,185 Z M11,187 C9.78133333,187 8.616,187.238333 7.504,187.715 C6.392,188.191667 5.435,188.831 4.633,189.633 C3.831,190.435 3.19166667,191.392 2.715,192.504 C2.23833333,193.616 2,194.781333 2,196 C2,197.218667 2.23833333,198.384 2.715,199.496 C3.19166667,200.608 3.831,201.565 4.633,202.367 C5.435,203.169 6.392,203.808333 7.504,204.285 C8.616,204.761667 9.78133333,205 11,205 C12.2186667,205 13.384,204.761667 14.496,204.285 C15.608,203.808333 16.565,203.169 17.367,202.367 C18.169,201.565 18.8083333,200.608 19.285,199.496 C19.7616667,198.384 20,197.218667 20,196 C20,194.781333 19.7616667,193.616 19.285,192.504 C18.8083333,191.392 18.169,190.435 17.367,189.633 C16.565,188.831 15.608,188.191667 14.496,187.715 C13.384,187.238333 12.2186667,187 11,187 L11,187 Z",id:"Shape","fill-rule":"nonzero"}}),t._v(" "),a("text",{attrs:{id:"$","font-family":"DattoDINExp-Bold, Datto DIN Exp","font-size":"16","font-style":"expanded","font-weight":"bold"}},[a("tspan",{attrs:{x:"7",y:"202"}},[t._v("$")])])])])])])]),t._v(" "),a("div",{staticClass:"data"},[t._v(t._s(t._f("currency")(t.averageWage)))]),t._v(" "),a("div",{staticClass:"data-label"},[t._v("Average Employee Wage")])]),t._v(" "),a("div",{staticClass:"data-group"},[a("svg",{attrs:{width:"22px",height:"22px",viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v("Created with Sketch.")]),t._v(" "),a("defs"),t._v(" "),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"Artboard",transform:"translate(-1175.000000, -3009.000000)",fill:"#07F0D7"}},[a("g",{attrs:{id:"Final-Calc",transform:"translate(0.000000, 2612.000000)"}},[a("g",{attrs:{id:"Downtime-Costs",transform:"translate(1175.000000, 212.000000)"}},[a("path",{attrs:{d:"M11,185 C12.4946667,185 13.9203333,185.290333 15.277,185.871 C16.6336667,186.451667 17.803,187.233 18.785,188.215 C19.767,189.197 20.5483333,190.366333 21.129,191.723 C21.7096667,193.079667 22,194.505333 22,196 C22,197.494667 21.7096667,198.920333 21.129,200.277 C20.5483333,201.633667 19.767,202.803 18.785,203.785 C17.803,204.767 16.6336667,205.548333 15.277,206.129 C13.9203333,206.709667 12.4946667,207 11,207 C9.50533333,207 8.07966667,206.709667 6.723,206.129 C5.36633333,205.548333 4.197,204.767 3.215,203.785 C2.233,202.803 1.45166667,201.633667 0.871,200.277 C0.290333333,198.920333 5.32907052e-15,197.494667 0,196 C-5.32907052e-15,194.505333 0.290333333,193.079667 0.871,191.723 C1.45166667,190.366333 2.233,189.197 3.215,188.215 C4.197,187.233 5.36633333,186.451667 6.723,185.871 C8.07966667,185.290333 9.50533333,185 11,185 Z M11,187 C9.78133333,187 8.616,187.238333 7.504,187.715 C6.392,188.191667 5.435,188.831 4.633,189.633 C3.831,190.435 3.19166667,191.392 2.715,192.504 C2.23833333,193.616 2,194.781333 2,196 C2,197.218667 2.23833333,198.384 2.715,199.496 C3.19166667,200.608 3.831,201.565 4.633,202.367 C5.435,203.169 6.392,203.808333 7.504,204.285 C8.616,204.761667 9.78133333,205 11,205 C12.2186667,205 13.384,204.761667 14.496,204.285 C15.608,203.808333 16.565,203.169 17.367,202.367 C18.169,201.565 18.8083333,200.608 19.285,199.496 C19.7616667,198.384 20,197.218667 20,196 C20,194.781333 19.7616667,193.616 19.285,192.504 C18.8083333,191.392 18.169,190.435 17.367,189.633 C16.565,188.831 15.608,188.191667 14.496,187.715 C13.384,187.238333 12.2186667,187 11,187 L11,187 Z",id:"Shape","fill-rule":"nonzero"}}),t._v(" "),a("text",{attrs:{id:"$","font-family":"DattoDINExp-Bold, Datto DIN Exp","font-size":"16","font-style":"expanded","font-weight":"bold"}},[a("tspan",{attrs:{x:"7",y:"202"}},[t._v("$")])])])])])])]),t._v(" "),a("div",{staticClass:"data"},[t._v(t._s(t._f("currency")(t.overheadCost)))]),t._v(" "),a("div",{staticClass:"data-label"},[t._v("Average Employee Overhead Cost")])]),t._v(" "),a("div",{staticClass:"data-group"},[a("svg",{attrs:{width:"22px",height:"22px",viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v("Created with Sketch.")]),t._v(" "),a("defs"),t._v(" "),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"Artboard",transform:"translate(-1175.000000, -3009.000000)",fill:"#07F0D7"}},[a("g",{attrs:{id:"Final-Calc",transform:"translate(0.000000, 2612.000000)"}},[a("g",{attrs:{id:"Downtime-Costs",transform:"translate(1175.000000, 212.000000)"}},[a("path",{attrs:{d:"M11,185 C12.4946667,185 13.9203333,185.290333 15.277,185.871 C16.6336667,186.451667 17.803,187.233 18.785,188.215 C19.767,189.197 20.5483333,190.366333 21.129,191.723 C21.7096667,193.079667 22,194.505333 22,196 C22,197.494667 21.7096667,198.920333 21.129,200.277 C20.5483333,201.633667 19.767,202.803 18.785,203.785 C17.803,204.767 16.6336667,205.548333 15.277,206.129 C13.9203333,206.709667 12.4946667,207 11,207 C9.50533333,207 8.07966667,206.709667 6.723,206.129 C5.36633333,205.548333 4.197,204.767 3.215,203.785 C2.233,202.803 1.45166667,201.633667 0.871,200.277 C0.290333333,198.920333 5.32907052e-15,197.494667 0,196 C-5.32907052e-15,194.505333 0.290333333,193.079667 0.871,191.723 C1.45166667,190.366333 2.233,189.197 3.215,188.215 C4.197,187.233 5.36633333,186.451667 6.723,185.871 C8.07966667,185.290333 9.50533333,185 11,185 Z M11,187 C9.78133333,187 8.616,187.238333 7.504,187.715 C6.392,188.191667 5.435,188.831 4.633,189.633 C3.831,190.435 3.19166667,191.392 2.715,192.504 C2.23833333,193.616 2,194.781333 2,196 C2,197.218667 2.23833333,198.384 2.715,199.496 C3.19166667,200.608 3.831,201.565 4.633,202.367 C5.435,203.169 6.392,203.808333 7.504,204.285 C8.616,204.761667 9.78133333,205 11,205 C12.2186667,205 13.384,204.761667 14.496,204.285 C15.608,203.808333 16.565,203.169 17.367,202.367 C18.169,201.565 18.8083333,200.608 19.285,199.496 C19.7616667,198.384 20,197.218667 20,196 C20,194.781333 19.7616667,193.616 19.285,192.504 C18.8083333,191.392 18.169,190.435 17.367,189.633 C16.565,188.831 15.608,188.191667 14.496,187.715 C13.384,187.238333 12.2186667,187 11,187 L11,187 Z",id:"Shape","fill-rule":"nonzero"}}),t._v(" "),a("text",{attrs:{id:"$","font-family":"DattoDINExp-Bold, Datto DIN Exp","font-size":"16","font-style":"expanded","font-weight":"bold"}},[a("tspan",{attrs:{x:"7",y:"202"}},[t._v("$")])])])])])])]),t._v(" "),a("div",{staticClass:"data"},[t._v(t._s(t._f("currency")(t.hourlyRevenueCost)))]),t._v(" "),a("div",{staticClass:"data-label"},[t._v("Hourly Revenue Cost")])])])])])},staticRenderFns:[]}}],[12]);
//# sourceMappingURL=app.fdb6a67eab26a524a0f8.js.map