(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{1186:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{ref:"dialog",on:{hide:e.onDialogHide}},[a("q-card",{staticClass:"q-dialog-plugin",attrs:{id:"advancedSettingsCard"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v(e._s(e.algorithmName))])]),a("q-card-section",{staticStyle:{color:"red"},style:e.willBeReplaced?"display: block":"display: none"},[a("q-icon",{staticClass:"q-mr-xs",attrs:{name:"error_outline"}}),a("span",[e._v("Old visualization will be "),a("b",[e._v("replaced")]),e._v(" by the new one")])],1),a("q-card-section",{staticClass:"q-pt-none"},[a("div",[a("q-item",[a("q-item-section",[a("q-item-label",[e._v("Number of elements (N): "+e._s(e.numberOfItems))]),a("q-slider",{attrs:{min:e.minNumberOfElements,max:e.maxNumberOfElements,color:"teal"},on:{change:e.checkValueOfK},model:{value:e.numberOfItems,callback:function(t){e.numberOfItems=t},expression:"numberOfItems"}})],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",[e._v("K-th largest (K): "+e._s(e.valueOfK))]),a("q-slider",{attrs:{min:1,max:e.numberOfItems,color:"deep-orange"},model:{value:e.valueOfK,callback:function(t){e.valueOfK=t},expression:"valueOfK"}})],1)],1)],1)]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("q-item",[a("q-item-section",[a("q-select",{attrs:{label:"Initial condition",options:e.optionsArrayType,"emit-value":"",filled:"","map-options":""},model:{value:e.arrayType,callback:function(t){e.arrayType=t},expression:"arrayType"}})],1)],1),2===this.arrayType?a("q-item",[a("q-item-section",[a("q-select",{attrs:{label:"Sorted",options:e.optionsSortedArrayType,"emit-value":"",filled:"","map-options":""},model:{value:e.arrayTypeSorted,callback:function(t){e.arrayTypeSorted=t},expression:"arrayTypeSorted"}})],1)],1):e._e(),3===this.arrayType?a("q-item",[a("q-item-section",[a("q-input",{ref:"input",staticClass:"full-width",attrs:{filled:"",label:"Comma-separated element values",hint:"Elements must be in the range "+this.minElementValue+" to "+this.maxElementValue+". Example: "+this.generateExampleValues,error:e.customData_error,"error-message":e.customData_error_message,rules:[function(e){return!!e||"Enter element values. Example: 14,35,8,50,3"}]},model:{value:e.customData_input,callback:function(t){e.customData_input=t},expression:"customData_input"}})],1)],1):e._e()],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{color:"standart","text-color":"black",label:"cancel"},on:{click:e.onCancelClick}}),a("q-btn",{attrs:{color:"primary",label:"confirm"},on:{click:e.onOKClick}})],1)],1)],1)},n=[],i={data(){return{minNumberOfElements:1,maxNumberOfElements:25,minElementValue:1,maxElementValue:50,optionsArrayType:[{label:"Random",value:1},{label:"Sorted",value:2},{label:"Custom",value:3},{label:"Best case",value:4},{label:"Worst case",value:5}],optionsSortedArrayType:[{label:"Ascending ↑",value:1},{label:"Descending ↓",value:2}],numberOfItems:15,valueOfK:3,arrayType:1,arrayTypeSorted:1,customData:null,customData_input:[],customData_error:!1,customData_error_message:""}},mounted(){"Median of medians"===this.algorithmName?(this.maxNumberOfElements=125,this.maxElementValue=250):"Counting sort"===this.algorithmName&&(this.maxElementValue=25)},props:{algorithmName:String,willBeReplaced:Boolean},methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){if(3===this.arrayType){if(!this.customData_input.length)return this.setErrorMessage("Can NOT be empty");const t=this.customData_input.split(","),a=this.numberOfItems;if(a>t.length)return this.setErrorMessage(`The number of elements must match with N, add ${a-t.length} elements or change the value of N to ${t.length}`);if(a<t.length)return this.setErrorMessage(`The number of elements must match with N, delete ${t.length-a} elements or change the value of N to ${t.length}`);for(var e=0;e<t.length;e++){if(!this.isNumber(+t[e]))return this.setErrorMessage(`Element "${t[e]}" is not a number`);if(t[e]<this.minElementValue||t[e]>this.maxElementValue)return this.setErrorMessage(`Element "${t[e]}" must be in the range ${this.minElementValue} to ${this.maxElementValue}`)}this.customData=t.map((e=>+e))}this.$emit("ok",this.sendData),this.hide()},onCancelClick(){this.hide()},setErrorMessage(e){this.customData_error=!0,this.customData_error_message=e},checkValueOfK(e){this.valueOfK>e&&(this.valueOfK=e)},isNumber(e){return"number"===typeof e&&!isNaN(e)}},computed:{sendData:{get(){return{n:this.numberOfItems,k:this.valueOfK,arrayType:this.arrayType,arrayTypeSorted:this.arrayTypeSorted,customData:this.customData}}},generateExampleValues:{get(){let e=`${this.minElementValue}`;for(let t=0;t<3;t++)e+=`,${Math.floor(Math.random()*this.maxElementValue)+this.minElementValue}`;return e}}}},l=i,r=(a("7a9c"),a("2877")),o=a("24e8"),c=a("f09f"),d=a("a370"),u=a("0016"),m=a("66e5"),h=a("4074"),v=a("0170"),p=a("c1d0"),f=a("eb85"),y=a("ddd8"),g=a("27f9"),S=a("4b7e"),b=a("9c40"),C=a("eebe"),x=a.n(C),q=Object(r["a"])(l,s,n,!1,null,"5c618b32",null);t["a"]=q.exports;x()(q,"components",{QDialog:o["a"],QCard:c["a"],QCardSection:d["a"],QIcon:u["a"],QItem:m["a"],QItemSection:h["a"],QItemLabel:v["a"],QSlider:p["a"],QSeparator:f["a"],QSelect:y["a"],QInput:g["a"],QCardActions:S["a"],QBtn:b["a"]})},"3d1a":function(e,t,a){"use strict";a("926c")},"7a9c":function(e,t,a){"use strict";a("a0dc")},"926c":function(e,t,a){},a0dc:function(e,t,a){},b742:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-sm"},[a("div",{staticClass:"flex flex-center buttons controls"},[a("q-btn",{staticClass:"q-ma-sm",attrs:{icon:"skip_previous",round:""},on:{click:e.drawFirstState}},[a("q-tooltip",{attrs:{"content-class":"bg-accent"}},[e._v("BEGINNING")])],1),a("q-btn",{staticClass:"q-ma-sm",attrs:{round:""},on:{click:e.drawPreviousState}},[a("q-icon",{staticClass:"rotate-270",attrs:{name:"eject"}}),a("q-tooltip",{attrs:{"content-class":"bg-accent"}},[e._v("-1")])],1),e.visualizationStarted?e._e():a("q-btn",{staticClass:"q-ma-sm",attrs:{icon:"play_arrow",round:""},on:{click:e.startVisualization}},[a("q-tooltip",{attrs:{"content-class":"bg-accent"}},[e._v("START")])],1),e.visualizationStarted?a("q-btn",{staticClass:"q-ma-sm",attrs:{icon:"pause",round:""},on:{click:e.pauseVisualization}},[a("q-tooltip",{attrs:{"content-class":"bg-accent"}},[e._v("PAUSE")])],1):e._e(),a("q-btn",{staticClass:"q-ma-sm",attrs:{round:""},on:{click:e.drawNextState}},[a("q-icon",{staticClass:"rotate-90",attrs:{name:"eject"}}),a("q-tooltip",{attrs:{"content-class":"bg-accent"}},[e._v("+1")])],1),a("q-btn",{staticClass:"q-ma-sm",attrs:{icon:"skip_next",round:""},on:{click:e.drawLastState}},[a("q-tooltip",{attrs:{"content-class":"bg-accent"}},[e._v("END")])],1),a("q-item",{attrs:{id:"speedSlider"}},[a("q-item-label",[e._v("Speed: "+e._s(e.valueOfSpeedSlider/100+"x"))]),a("q-item-section",[a("q-slider",{staticStyle:{"min-width":"200px"},attrs:{min:20,max:300,step:20,snap:"",color:"deep-orange"},on:{change:e.onSpeedSliderChange},model:{value:e.valueOfSpeedSlider,callback:function(t){e.valueOfSpeedSlider=t},expression:"valueOfSpeedSlider"}})],1)],1)],1),a("div",{staticClass:"flex flex-center",style:e.canvases.length>0?"display: flex":"display: none"},[a("div",{staticClass:"text-h6 helperRow"},[e._v("MAIN ARRAY")]),a("div",{staticClass:"text-h6 helperRow"},[e._v("HISTOGRAM")])]),a("div",{staticClass:"visualizations column full-width q-mt-sm flex flex-center"},[e._l(e.canvases,(function(t,s){return a("div",{key:t.id,staticClass:"canvas q-mb-sm",style:e.backgroundColor(t.states.length)},[a("div",{staticClass:"canvasSVGCountinSort flex flex-center",attrs:{id:t.id}},e._l(t.states[e.stateId>=t.states.length?t.states.length-1:e.stateId].mainCanvas,(function(t,s){return a("div",{key:s,staticClass:"defaultBarCountingSort",staticStyle:{display:"inline","align-self":"flex-end"}},[a("span",{staticClass:"barValue"},[e._v(e._s(t.value))])])})),0),a("div",{staticClass:"secondaryCanvas flex flex-center",style:e.stateId+1>=t.secondaryStartIndex?"visibility: visible":"visibility: hidden",attrs:{id:t.idSecondary}},[e._l(t.states[e.stateId>=t.states.length?t.states.length-1:e.stateId].secondaryCanvas,(function(s,n){return a("div",{key:n,staticClass:"defaultBarCountingSort",staticStyle:{display:"inline","align-self":"flex-end","margin-bottom":"25px"}},[a("span",{staticClass:"secondaryCanvasIndexing",style:e.spanHelperStyle(s,t.states.length,t.kthMax)},[e._v("\n            "+e._s(s.text)+"\n          ")])])})),a("div",{staticClass:"secondaryCanvasAxis",style:"width: "+(22*t.range+2*t.range*4+8)+"px"},e._l(t.maxValueSecondaryCanvas,(function(s){return a("div",{key:s,staticClass:"dashedLine",style:"bottom: "+(195/t.maxValueSecondaryCanvas*s-2)+"px"},[a("span",{staticClass:"dashedLineSpan",style:e.axisYSpan(s,t)},[e._v(e._s(s))])])})),0)],2),a("q-btn",{staticClass:"canvasRemove",attrs:{icon:"clear",color:"negative",size:"sm",round:""},on:{click:function(t){return e.removeCanvas(s)}}}),a("div",{staticClass:"canvasValueOfK"},[a("div",[e._v("k = "+e._s(t.k))]),a("div",{style:e.stateId+1>=t.displayValueOfP?"visibility: visible":"visibility: hidden"},[e._v("p = "+e._s(t.states[e.stateId>=t.states.length?t.states.length-1:e.stateId].p))])])],1)})),a("div",{staticClass:"q-py-md flex flex-center column addNewButton"},[a("q-btn",{attrs:{icon:"add",label:"Add new",color:"primary",size:"lg",stack:""},on:{click:e.addVisualization}})],1)],2)])},n=[],i=(a("ddb0"),a("1186")),l={data(){return{canvasIdHelper:1,stateId:0,canvases:[],valueOfSpeedSlider:100,intervalBetweenStates:350,visualizationStarted:!1,interval:{}}},methods:{removeCanvas(e){this.canvases.splice(e,1),this.visualizationStarted=!1;let t=0;this.canvases.forEach((e=>{e.states.length-1>t&&(t=e.states.length-1)})),this.stateId>t&&(this.stateId=t)},generateStates(e){if(e.elements=[],e.states=[],e.kthMax=-1,1===e.arrayType)for(let l=0;l<e.n;l++)e.elements.push(Math.floor(25*Math.random())+1);else if(2===e.arrayType){if(1===e.arrayTypeSorted)for(let l=1;l<=e.n;l++)e.elements.push(l);else if(2===e.arrayTypeSorted)for(let l=e.n;l>=1;l--)e.elements.push(l)}else if(3===e.arrayType)e.elements=e.customData;else if(4===e.arrayType){const t=Math.floor(25*Math.random())+1;for(let a=0;a<e.n;a++)e.elements.push(t)}else if(5===e.arrayType){for(let t=0;t<e.n-e.k+1;t++)e.elements.push(1);for(let t=e.n-e.k+1;t<e.n;t++)e.elements.push(25);for(let t=e.elements.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1)),s=e.elements[t];e.elements[t]=e.elements[a],e.elements[a]=s}}e.maxValue=Math.max(...e.elements),e.minValue=Math.min(...e.elements),e.range=e.maxValue-e.minValue+1;const t=new Array(25).fill(0);for(let l=0;l<e.elements.length;l++)t[e.elements[l]-1]++;e.maxValueSecondaryCanvas=Math.max(...t);let a={mainCanvas:[],secondaryCanvas:[],p:0};for(let l=0;l<e.elements.length;l++)a.mainCanvas.push({value:e.elements[l],color:"#DFDFDF"});for(let l=e.minValue;l<=e.maxValue;l++)a.secondaryCanvas.push({value:0,color:"#DFDFDF",text:l});e.states.push(a),a=this.duplicateState(a),a.mainCanvas[0].color="#ef8183",e.states.push(a);let s=0,n=0;for(let l=1;l<e.n;l++)a=this.duplicateState(a),l-1!==n&&l-1!==s&&(a.mainCanvas[l-1].color="#DFDFDF"),a.mainCanvas[l].color="#777",e.states.push(a),a.mainCanvas[l].value>a.mainCanvas[s].value&&(a=this.duplicateState(a),a.mainCanvas[l].color="#ef8183",s!==n&&(a.mainCanvas[s].color="#DFDFDF"),s=l,e.states.push(a)),a.mainCanvas[l].value<a.mainCanvas[n].value&&(a=this.duplicateState(a),a.mainCanvas[l].color="#ef8183",s!==n&&(a.mainCanvas[n].color="#DFDFDF"),n=l,e.states.push(a));a=this.duplicateState(a),e.n-1!==s&&e.n-1!==n&&(a.mainCanvas[e.n-1].color="#DFDFDF"),e.states.push(a),e.secondaryStartIndex=e.states.length;for(let l=0;l<e.n;l++)0!==l&&(a=this.duplicateState(a)),a.mainCanvas[l].color="#777",e.states.push(a),a=this.duplicateState(a),a.secondaryCanvas[a.mainCanvas[l].value-e.minValue].value++,e.states.push(a),a=this.duplicateState(a),a.mainCanvas[l].color=l!==n&&l!==s?"#DFDFDF":"#ef8183";a=this.duplicateState(a),e.n-1!==s&&e.n-1!==n&&(a.mainCanvas[e.n-1].color="#DFDFDF"),e.states.push(a),e.displayValueOfP=e.states.length;let i=0;for(let l=e.range-1;l>=0;l--)if(a=this.duplicateState(a),a.secondaryCanvas[l].color="#777",i+=a.secondaryCanvas[l].value,a.p=i,console.log(i),e.states.push(a),i>=e.k){console.log(`KTH MAX FOUND: ${a.secondaryCanvas[l].text}`),e.kthMax=a.secondaryCanvas[l].text;break}return e},duplicateState(e){const t={},a=[],s=[];for(let n=0;n<e.mainCanvas.length;n++)a.push({value:e.mainCanvas[n].value,color:e.mainCanvas[n].color});for(let n=0;n<e.secondaryCanvas.length;n++)s.push({value:e.secondaryCanvas[n].value,color:e.secondaryCanvas[n].color,text:e.secondaryCanvas[n].text});return t.mainCanvas=a,t.secondaryCanvas=s,t.p=e.p,t},drawState(e){this.canvases.forEach(((t,a)=>{let s=e;s>=t.states.length&&(s=t.states.length-1);const n=t.states[s],i=this.$el;let l=i.querySelector(".visualizations").querySelector(`#${t.id}`).querySelectorAll("div");l.forEach(((e,a)=>{e.style.background=n.mainCanvas[a].color;const s=215/t.maxValue*n.mainCanvas[a].value;e.style.height=`${s}px`;const i=e.querySelector("span");i.style.bottom=s<21?`${s}px`:"0px"})),e+1>=t.secondaryStartIndex&&(l=i.querySelector(".visualizations").querySelector(`#${t.idSecondary}`).querySelectorAll("div.defaultBarCountingSort"),l.forEach(((e,a)=>{e.style.background=n.secondaryCanvas[a].color;const s=195/t.maxValueSecondaryCanvas*n.secondaryCanvas[a].value;e.style.height=`${s}px`})))}))},addVisualization(){this.$q.dialog({component:i["a"],cancel:!0,parent:this,algorithmName:"Counting sort"}).onOk((e=>{this.stateId=0,e=this.generateStates(e),this.canvasIdHelper++,e.id=`canvas${this.canvasIdHelper}`,e.idSecondary=`canvas${this.canvasIdHelper}secondary`,this.canvases.push(e),setTimeout((()=>{this.drawState(this.stateId)}),0)})).onCancel((()=>{console.log("Cancel")}))},startVisualization(){!1===this.visualizationStarted&&this.canvases.length>0&&(this.visualizationStarted=!0,this.drawNextState())},pauseVisualization(){this.visualizationStarted=!1},drawFirstState(){this.drawState(this.stateId=0)},drawLastState(){let e=0;this.canvases.forEach((t=>{t.states.length-1>e&&(e=t.states.length-1)})),this.stateId=e,this.drawState(this.stateId)},drawNextState(){let e=0;this.canvases.forEach((t=>{t.states.length-1>e&&(e=t.states.length-1)})),++this.stateId>=e&&(this.stateId=e,this.visualizationStarted=!1),this.drawState(this.stateId),this.visualizationStarted&&setTimeout(this.drawNextState,this.intervalBetweenStates)},drawPreviousState(){this.stateId>0&&this.drawState(--this.stateId)},onSpeedSliderChange(){this.intervalBetweenStates=1/this.valueOfSpeedSlider*100*350},backgroundColor(e){return this.stateId+1>=e?"background: linear-gradient(90deg, rgba(33,171,14,0.25) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 95%, rgba(33,171,14,0.25) 100%);":"background: white"},spanHelperStyle(e,t,a){let s="";return"#777"===e.color&&(s+="font-weight: bold;"),this.stateId+1>=t&&e.text===a&&(s+="outline: 3px solid green"),s},axisYSpan(e,t){let a="";if(this.stateId+1>=t.secondaryStartIndex){const s=195/t.maxValueSecondaryCanvas-2;s<8?a+=(e-1)%3===0?"visibility: visible;":"visibility: hidden;":s<15&&(a+=e%2!==0?"visibility: visible;":"visibility: hidden;"),a+=e>=10?"left: -20px;":"left: -15px;"}return a}},computed:{}},r=l,o=(a("3d1a"),a("2877")),c=a("9989"),d=a("9c40"),u=a("05c0"),m=a("0016"),h=a("66e5"),v=a("0170"),p=a("4074"),f=a("c1d0"),y=a("eebe"),g=a.n(y),S=Object(o["a"])(r,s,n,!1,null,"46ede9f6",null);t["default"]=S.exports;g()(S,"components",{QPage:c["a"],QBtn:d["a"],QTooltip:u["a"],QIcon:m["a"],QItem:h["a"],QItemLabel:v["a"],QItemSection:p["a"],QSlider:f["a"]})}}]);