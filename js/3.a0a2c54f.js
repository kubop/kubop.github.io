(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0578":function(a,t,e){},1186:function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-dialog",{ref:"dialog",on:{hide:a.onDialogHide}},[e("q-card",{staticClass:"q-dialog-plugin",attrs:{id:"advancedSettingsCard"}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[a._v(a._s(a.algorithmName))])]),e("q-card-section",{staticStyle:{color:"red"},style:a.willBeReplaced?"display: block":"display: none"},[e("q-icon",{staticClass:"q-mr-xs",attrs:{name:"error_outline"}}),e("span",[a._v("Old visualization will be "),e("b",[a._v("replaced")]),a._v(" by the new one")])],1),e("q-card-section",{staticClass:"q-pt-none"},[e("div",[e("q-item",[e("q-item-section",[e("q-item-label",[a._v("Number of elements (N): "+a._s(a.numberOfItems))]),e("q-slider",{attrs:{min:a.minNumberOfElements,max:a.maxNumberOfElements,color:"teal"},on:{change:a.checkValueOfK},model:{value:a.numberOfItems,callback:function(t){a.numberOfItems=t},expression:"numberOfItems"}})],1)],1),e("q-item",[e("q-item-section",[e("q-item-label",[a._v("K-th largest (K): "+a._s(a.valueOfK))]),e("q-slider",{attrs:{min:1,max:a.numberOfItems,color:"deep-orange"},model:{value:a.valueOfK,callback:function(t){a.valueOfK=t},expression:"valueOfK"}})],1)],1)],1)]),e("q-separator",{attrs:{inset:""}}),e("q-card-section",[e("q-item",[e("q-item-section",[e("q-select",{attrs:{label:"Initial condition",options:a.optionsArrayType,"emit-value":"",filled:"","map-options":""},model:{value:a.arrayType,callback:function(t){a.arrayType=t},expression:"arrayType"}})],1)],1),2===this.arrayType?e("q-item",[e("q-item-section",[e("q-select",{attrs:{label:"Sorted",options:a.optionsSortedArrayType,"emit-value":"",filled:"","map-options":""},model:{value:a.arrayTypeSorted,callback:function(t){a.arrayTypeSorted=t},expression:"arrayTypeSorted"}})],1)],1):a._e(),3===this.arrayType?e("q-item",[e("q-item-section",[e("q-input",{ref:"input",staticClass:"full-width",attrs:{filled:"",label:"Comma-separated element values",hint:"Elements must be in the range "+this.minElementValue+" to "+this.maxElementValue+". Example: "+this.generateExampleValues,error:a.customData_error,"error-message":a.customData_error_message,rules:[function(a){return!!a||"Enter element values. Example: 14,35,8,50,3"}]},model:{value:a.customData_input,callback:function(t){a.customData_input=t},expression:"customData_input"}})],1)],1):a._e(),"Quicksort"===this.algorithmName||"Quickselect"===this.algorithmName?e("q-item",[e("q-item-section",[e("q-select",{attrs:{label:"Partition type",options:a.optionsPartitionType,"emit-value":"",filled:"","map-options":""},model:{value:a.partitionType,callback:function(t){a.partitionType=t},expression:"partitionType"}})],1)],1):a._e()],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{attrs:{color:"standart","text-color":"black",label:"cancel"},on:{click:a.onCancelClick}}),e("q-btn",{attrs:{color:"primary",label:"confirm"},on:{click:a.onOKClick}})],1)],1)],1)},n=[],i={data(){return{minNumberOfElements:1,maxNumberOfElements:25,minElementValue:1,maxElementValue:50,optionsArrayType:[{label:"Random",value:1},{label:"Sorted",value:2},{label:"Custom",value:3},{label:"Best case",value:4},{label:"Worst case",value:5}],optionsSortedArrayType:[{label:"Ascending ↑",value:1},{label:"Descending ↓",value:2}],optionsPartitionType:[{label:"Lomuto's partition",value:1},{label:"Hoare's partition",value:2}],numberOfItems:15,valueOfK:3,arrayType:1,arrayTypeSorted:1,partitionType:1,customData:null,customData_input:[],customData_error:!1,customData_error_message:""}},mounted(){"Median of medians"===this.algorithmName?(this.maxNumberOfElements=125,this.maxElementValue=250):"Counting sort"===this.algorithmName&&(this.maxElementValue=25)},props:{algorithmName:String,willBeReplaced:Boolean},methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){if(3===this.arrayType){if(!this.customData_input.length)return this.setErrorMessage("Can NOT be empty");const t=this.customData_input.split(","),e=this.numberOfItems;if(e>t.length)return this.setErrorMessage(`The number of elements must match with N, add ${e-t.length} elements or change the value of N to ${t.length}`);if(e<t.length)return this.setErrorMessage(`The number of elements must match with N, delete ${t.length-e} elements or change the value of N to ${t.length}`);for(var a=0;a<t.length;a++){if(!this.isNumber(+t[a]))return this.setErrorMessage(`Element "${t[a]}" is not a number`);if(t[a]<this.minElementValue||t[a]>this.maxElementValue)return this.setErrorMessage(`Element "${t[a]}" must be in the range ${this.minElementValue} to ${this.maxElementValue}`)}this.customData=t.map((a=>+a))}this.$emit("ok",this.sendData),this.hide()},onCancelClick(){this.hide()},setErrorMessage(a){this.customData_error=!0,this.customData_error_message=a},checkValueOfK(a){this.valueOfK>a&&(this.valueOfK=a)},isNumber(a){return"number"===typeof a&&!isNaN(a)}},computed:{sendData:{get(){return{n:this.numberOfItems,k:this.valueOfK,arrayType:this.arrayType,arrayTypeSorted:this.arrayTypeSorted,customData:this.customData,partitionType:this.partitionType}}},generateExampleValues:{get(){let a=`${this.minElementValue}`;for(let t=0;t<3;t++)a+=`,${Math.floor(Math.random()*this.maxElementValue)+this.minElementValue}`;return a}}}},l=i,r=(e("481f"),e("2877")),o=e("24e8"),d=e("f09f"),c=e("a370"),h=e("0016"),u=e("66e5"),v=e("4074"),m=e("0170"),p=e("c1d0"),f=e("eb85"),y=e("ddd8"),C=e("27f9"),g=e("4b7e"),b=e("9c40"),S=e("eebe"),x=e.n(S),q=Object(r["a"])(l,s,n,!1,null,"9d262182",null);t["a"]=q.exports;x()(q,"components",{QDialog:o["a"],QCard:d["a"],QCardSection:c["a"],QIcon:h["a"],QItem:u["a"],QItemSection:v["a"],QItemLabel:m["a"],QSlider:p["a"],QSeparator:f["a"],QSelect:y["a"],QInput:C["a"],QCardActions:g["a"],QBtn:b["a"]})},"18ab":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"q-pa-sm"},[e("div",{staticClass:"flex flex-center buttons controls"},[e("q-btn",{staticClass:"q-ma-sm",attrs:{icon:"skip_previous",round:""},on:{click:a.drawFirstState}},[e("q-tooltip",{attrs:{"content-class":"bg-accent"}},[a._v("BEGINNING")])],1),e("q-btn",{staticClass:"q-ma-sm",attrs:{round:""},on:{click:a.drawPreviousState}},[e("q-icon",{staticClass:"rotate-270",attrs:{name:"eject"}}),e("q-tooltip",{attrs:{"content-class":"bg-accent"}},[a._v("-1")])],1),a.visualizationStarted?a._e():e("q-btn",{staticClass:"q-ma-sm",attrs:{icon:"play_arrow",round:""},on:{click:a.startVisualization}},[e("q-tooltip",{attrs:{"content-class":"bg-accent"}},[a._v("START")])],1),a.visualizationStarted?e("q-btn",{staticClass:"q-ma-sm",attrs:{icon:"pause",round:""},on:{click:a.pauseVisualization}},[e("q-tooltip",{attrs:{"content-class":"bg-accent"}},[a._v("PAUSE")])],1):a._e(),e("q-btn",{staticClass:"q-ma-sm",attrs:{round:""},on:{click:a.drawNextState}},[e("q-icon",{staticClass:"rotate-90",attrs:{name:"eject"}}),e("q-tooltip",{attrs:{"content-class":"bg-accent"}},[a._v("+1")])],1),e("q-btn",{staticClass:"q-ma-sm",attrs:{icon:"skip_next",round:""},on:{click:a.drawLastState}},[e("q-tooltip",{attrs:{"content-class":"bg-accent"}},[a._v("END")])],1),e("q-item",{attrs:{id:"speedSlider"}},[e("q-item-label",[a._v("Speed: "+a._s(a.valueOfSpeedSlider/100+"x"))]),e("q-item-section",[e("q-slider",{staticStyle:{"min-width":"200px"},attrs:{min:20,max:300,step:20,snap:"",color:"deep-orange"},on:{change:a.onSpeedSliderChange},model:{value:a.valueOfSpeedSlider,callback:function(t){a.valueOfSpeedSlider=t},expression:"valueOfSpeedSlider"}})],1)],1),e("div",{staticClass:"colorLegend q-ma-sm"},[e("div",{staticClass:"colorLegendElement"},[e("div",{staticClass:"colorLegendColor",style:a.color("medians")}),e("div",{staticClass:"colorLegendName"},[a._v("Medians")])]),e("div",{staticClass:"colorLegendElement"},[e("div",{staticClass:"colorLegendColor",style:a.color("mm")}),e("div",{staticClass:"colorLegendName"},[a._v("Median of medians")])]),e("div",{staticClass:"colorLegendElement"},[e("div",{staticClass:"colorLegendColor",style:a.color("discarded")}),e("div",{staticClass:"colorLegendName"},[a._v("Discarded")])])])],1),e("div",{staticClass:"visualizations column full-width q-mt-sm flex flex-center"},[a._l(a.canvases,(function(t,s){return e("div",{key:t.id,staticClass:"full-width q-mb-sm",style:a.backgroundColor(t.states.length)},[e("div",{staticClass:"canvas flex flex-center",staticStyle:{position:"relative"},attrs:{id:t.id}},[a._l(t.states[a.stateId>=t.states.length?t.states.length-1:a.stateId].mainCanvas,(function(s,n){return e("div",{key:n,staticClass:"defaultBar bar",staticStyle:{display:"inline","align-self":"flex-end"},style:a.mainCanvasBar(s.display,t.width)&&a.stateId>=t.states.length-1&&n===t.n-t.k?"outline: 2px solid black":""},[e("span",{staticClass:"barValue",style:a.spanMainCanvas(s)},[a._v(a._s(s.value))])])})),e("div",{style:a.displayPartitionLine(t,t.states[a.stateId].mainCanvas,t.width)})],2),e("div",{staticClass:"canvas flex flex-center",staticStyle:{position:"relative"},style:a.displayCanvas(t.states[a.stateId].secondaryCanvas[0].display),attrs:{id:t.idSecondary}},[a._l(t.states[a.stateId>=t.states.length?t.states.length-1:a.stateId].secondaryCanvas,(function(t,s){return e("div",{key:s,staticClass:"defaultBar bar barSecondary",staticStyle:{display:"inline","align-self":"flex-end"},style:a.display(t.display)},[e("span",{staticClass:"barValue",staticStyle:{width:"35px"},style:t.value>0&&t.color!==a.colorDiscarded?"display: block":"display: none"},[a._v(a._s(t.value))])])})),e("div",{style:a.displayPartitionLine(t,t.states[a.stateId].secondaryCanvas,-1)}),e("div",{staticClass:"canvasValueOfK"},[e("div",[a._v("n = "+a._s(t.states[a.stateId].n[1]))]),e("div",[a._v("k = "+a._s(t.states[a.stateId].k[1]))])])],2),e("div",{staticClass:"canvas flex flex-center",staticStyle:{position:"relative"},style:a.displayCanvas(t.states[a.stateId].thirdCanvas[0].display),attrs:{id:t.idThird}},[a._l(t.states[a.stateId>=t.states.length?t.states.length-1:a.stateId].thirdCanvas,(function(t,s){return e("div",{key:s,staticClass:"defaultBar bar barSecondary",staticStyle:{display:"inline","align-self":"flex-end"},style:a.display(t.display)},[e("span",{staticClass:"barValue",staticStyle:{width:"35px"},style:t.value>0&&t.color!==a.colorDiscarded?"display: block":"display: none"},[a._v(a._s(t.value))])])})),e("div",{style:a.displayPartitionLine(t,t.states[a.stateId].thirdCanvas,-1)}),e("div",{staticClass:"canvasValueOfK"},[e("div",[a._v("n = "+a._s(t.states[a.stateId].n[2]))]),e("div",[a._v("k = "+a._s(t.states[a.stateId].k[2]))])])],2),e("q-btn",{staticClass:"canvasRemove",staticStyle:{top:"100px"},attrs:{icon:"clear",color:"negative",size:"sm",round:""},on:{click:function(t){return a.removeCanvas(s)}}}),e("div",{staticClass:"canvasValueOfK",staticStyle:{top:"105px"}},[e("div",[a._v("n = "+a._s(t.states[a.stateId].n[0]))]),e("div",[a._v("k = "+a._s(t.states[a.stateId].k[0]))])])],1)})),e("div",{staticClass:"q-py-md flex flex-center column addNewButton"},[e("q-btn",{attrs:{icon:"add",label:"Add new",color:"primary",size:"lg",stack:""},on:{click:a.addVisualization}})],1)],2)])},n=[],i=(e("ddb0"),e("4e82"),e("1186")),l={data(){return{canvasIdHelper:1,stateId:0,canvases:[],valueOfSpeedSlider:100,intervalBetweenStates:350,visualizationStarted:!1,interval:{},colorMedians:"#ef8183",colorMM:"green",colorDiscarded:"#3d3d3d"}},mounted(){},methods:{removeCanvas(a){this.canvases.splice(a,1),this.visualizationStarted=!1;let t=0;this.canvases.forEach((a=>{a.states.length-1>t&&(t=a.states.length-1)})),this.stateId>t&&(this.stateId=t)},generateStates(a){if(a.elements=[],a.states=[],1===a.arrayType)for(let l=0;l<a.n;l++)a.elements.push(Math.floor(250*Math.random())+1);else if(2===a.arrayType||4===a.arrayType||5===a.arrayType){if(2===a.arrayType&&1===a.arrayTypeSorted||5===a.arrayType)for(let l=1;l<=a.n;l++)a.elements.push(l);else if(2===a.arrayType&&2===a.arrayTypeSorted||4===a.arrayType)for(let l=a.n;l>=1;l--)a.elements.push(l)}else 3===a.arrayType&&(a.elements=a.customData);let t={mainCanvas:[],secondaryCanvas:[],thirdCanvas:[]};t.n=[a.n,0,0],t.k=[a.k,0,0],a.displaySecondaryCanvas=0,a.displayThirdCanvas=0;for(let l=0;l<a.elements.length;l++)t.mainCanvas.push({value:a.elements[l],color:"#dfdfdf",display:"inline"});for(let l=0;l<a.elements.length/5;l++)t.secondaryCanvas.push({value:0,color:"#dfdfdf",display:"none"});for(let l=0;l<a.elements.length/25;l++)t.thirdCanvas.push({value:0,color:"#dfdfdf",display:"none"});a.states.push(t);const e=this,s=function(a,t,e){const s=a[t];a[t]=a[e],a[e]=s},n=function(t,n,i,l,r){let o;for(let s=n;s<=i;s++)if(t[s]===l){o=e.duplicateState(a.states[a.states.length-1]),0===r?o.mainCanvas[s].color="green":1===r?o.secondaryCanvas[s].color="green":2===r&&(o.thirdCanvas[s].color="green"),a.states.push(o);break}if(0===r&&"none"!==o.secondaryCanvas[0].display){o=e.duplicateState(a.states[a.states.length-1]);for(let a=0;a<o.secondaryCanvas.length;a++)o.secondaryCanvas[a].display="none",o.secondaryCanvas[a].color="#dfdfdf";a.states.push(o)}else if(1===r&&"none"!==o.thirdCanvas[0].display){o=e.duplicateState(a.states[a.states.length-1]);for(let a=0;a<o.thirdCanvas.length;a++)o.thirdCanvas[a].display="none",o.thirdCanvas[a].color="#dfdfdf";a.states.push(o)}for(let h=n;h<i;h++)if(t[h]===l){if(s(t,h,i),o=e.duplicateState(a.states[a.states.length-1]),0===r){const a=o.mainCanvas[h];o.mainCanvas[h]=o.mainCanvas[i],o.mainCanvas[i]=a}else if(1===r){const a=o.secondaryCanvas[h];o.secondaryCanvas[h]=o.secondaryCanvas[i],o.secondaryCanvas[i]=a}else if(2===r){const a=o.thirdCanvas[h];o.thirdCanvas[h]=o.thirdCanvas[i],o.thirdCanvas[i]=a}a.states.push(o);break}o=e.duplicateState(a.states[a.states.length-1]);const d=t[i];let c=n;for(let a=n;a<i;a++)if(t[a]<=d){if(s(t,c,a),0===r){const t=o.mainCanvas[c];o.mainCanvas[c]=o.mainCanvas[a],o.mainCanvas[a]=t}else if(1===r){const t=o.secondaryCanvas[c];o.secondaryCanvas[c]=o.secondaryCanvas[a],o.secondaryCanvas[a]=t}else if(2===r){const t=o.thirdCanvas[c];o.thirdCanvas[c]=o.thirdCanvas[a],o.thirdCanvas[a]=t}c++}if(a.states.push(o),s(t,c,i),o=e.duplicateState(a.states[a.states.length-1]),0===r){const a=o.mainCanvas[c];o.mainCanvas[c]=o.mainCanvas[i],o.mainCanvas[i]=a}else if(1===r){const a=o.secondaryCanvas[c];o.secondaryCanvas[c]=o.secondaryCanvas[i],o.secondaryCanvas[i]=a}else if(2===r){const a=o.thirdCanvas[c];o.thirdCanvas[c]=o.thirdCanvas[i],o.thirdCanvas[i]=a}return a.states.push(o),c},i=function(t,s,l,r,o){const d=l-s+1;let c;if(a.states.length>1){if(c=e.duplicateState(a.states[a.states.length-1]),c.n[o]=d,c.k[o]=d-r+1,1===o){if(c.secondaryCanvas.length>t.length)for(let a=t.length;a<c.secondaryCanvas.length;a++)c.secondaryCanvas[a].display="none"}else if(2===o&&c.thirdCanvas.length>t.length)for(let a=t.length;a<c.thirdCanvas.length;a++)c.thirdCanvas[a].display="none";for(let a=0;a<t.length;a++)1===o?(c.secondaryCanvas[a].value=t[a],c.secondaryCanvas[a].display="inline"):2===o&&(c.thirdCanvas[a].value=t[a],c.thirdCanvas[a].display="inline");a.states.push(c)}if(r>0&&r<=d){const h=[];let u=0;while(u<Math.floor(d/5)){c=e.duplicateState(a.states[a.states.length-1]);const n=[];for(let a=s+5*u;a<s+5*(u+1);a++)n.push(t[a]),0===o?c.mainCanvas[a].color="#a5a5a5":1===o?c.secondaryCanvas[a].color="#a5a5a5":2===o&&(c.thirdCanvas[a].color="#a5a5a5");a.states.push(c);const i=e.medianIndex(n);h.push(t[s+5*u+i]),c=e.duplicateState(a.states[a.states.length-1]),0===o?c.mainCanvas[s+5*u+i].color=e.colorMedians:1===o?c.secondaryCanvas[s+5*u+i].color=e.colorMedians:2===o&&(c.thirdCanvas[s+5*u+i].color=e.colorMedians),a.states.push(c),c=e.duplicateState(a.states[a.states.length-1]);for(let a=s+5*u;a<s+5*(u+1);a++)0===o?"#a5a5a5"===c.mainCanvas[a].color&&(c.mainCanvas[a].color="#dfdfdf"):1===o?"#a5a5a5"===c.secondaryCanvas[a].color&&(c.secondaryCanvas[a].color="#dfdfdf"):2===o&&"#a5a5a5"===c.thirdCanvas[a].color&&(c.thirdCanvas[a].color="#dfdfdf");a.states.push(c),u++}if(5*u<d){c=e.duplicateState(a.states[a.states.length-1]);const n=[];for(let a=s+5*u;a<s+5*u+d%5;a++)n.push(t[a]),0===o?c.mainCanvas[a].color="#a5a5a5":1===o?c.secondaryCanvas[a].color="#a5a5a5":2===o&&(c.thirdCanvas[a].color="#a5a5a5");a.states.push(c);const i=e.medianIndex(n);h.push(t[s+5*u+i]),c=e.duplicateState(a.states[a.states.length-1]),0===o?c.mainCanvas[s+5*u+i].color=e.colorMedians:1===o?c.secondaryCanvas[s+5*u+i].color=e.colorMedians:2===o&&(c.thirdCanvas[s+5*u+i].color=e.colorMedians),a.states.push(c),c=e.duplicateState(a.states[a.states.length-1]);for(let a=s+5*u;a<s+5*u+d%5;a++)0===o?"#a5a5a5"===c.mainCanvas[a].color&&(c.mainCanvas[a].color="#dfdfdf"):1===o?"#a5a5a5"===c.secondaryCanvas[a].color&&(c.secondaryCanvas[a].color="#dfdfdf"):2===o&&"#a5a5a5"===c.thirdCanvas[a].color&&(c.thirdCanvas[a].color="#dfdfdf");a.states.push(c),u++}const v=1===u?h[u-1]:i(h,0,u-1,Math.ceil(u/2),o+1),m=n(t,s,l,v,o);if(m-s===r-1)return t[m];if(m-s>r-1){c=e.duplicateState(a.states[a.states.length-1]);for(let a=m;a<=l;a++)0===o?c.mainCanvas[a].color=e.colorDiscarded:1===o?c.secondaryCanvas[a].color=e.colorDiscarded:2===o&&(c.thirdCanvas[a].color=e.colorDiscarded);for(let a=s;a<m;a++)0===o?c.mainCanvas[a].color="#dfdfdf":1===o?c.secondaryCanvas[a].color="#dfdfdf":2===o&&(c.thirdCanvas[a].color="#dfdfdf");return a.states.push(c),i(t,s,m-1,r,o)}c=e.duplicateState(a.states[a.states.length-1]);for(let a=0;a<=m;a++)0===o?c.mainCanvas[a].color=e.colorDiscarded:1===o?c.secondaryCanvas[a].color=e.colorDiscarded:2===o&&(c.thirdCanvas[a].color=e.colorDiscarded);for(let a=m+1;a<=l;a++)0===o?c.mainCanvas[a].color="#dfdfdf":1===o?c.secondaryCanvas[a].color="#dfdfdf":2===o&&(c.thirdCanvas[a].color="#dfdfdf");return a.states.push(c),i(t,m+1,l,r-m+s-1,o)}};i([...a.elements],0,a.n-1,a.n-a.k+1,0),t=e.duplicateState(a.states[a.states.length-1]),t.n[0]=a.n,t.k[0]=a.k;for(let l=0;l<a.n;l++)t.mainCanvas[l].color="#dfdfdf",l===a.n-a.k&&(t.mainCanvas[l].color="#86ef81");return a.states.push(t),a},duplicateState(a){const t={},e=[],s=[],n=[];for(let i=0;i<a.mainCanvas.length;i++)e.push({value:a.mainCanvas[i].value,color:a.mainCanvas[i].color,display:a.mainCanvas[i].display});for(let i=0;i<a.secondaryCanvas.length;i++)s.push({value:a.secondaryCanvas[i].value,color:a.secondaryCanvas[i].color,display:a.secondaryCanvas[i].display});for(let i=0;i<a.thirdCanvas.length;i++)n.push({value:a.thirdCanvas[i].value,color:a.thirdCanvas[i].color,display:a.thirdCanvas[i].display});return t.mainCanvas=e,t.secondaryCanvas=s,t.thirdCanvas=n,t.k=[...a.k],t.n=[...a.n],t},medianIndex(a){const t=[...a];a.sort(((a,t)=>a-t));const e=Math.floor(a.length/2);return a.length%2?t.indexOf(a[e]):t.indexOf(a[e-1])},drawState(a){const t=this;this.canvases.forEach(((e,s)=>{let n=a;n>=e.states.length&&(n=e.states.length-1);const i=e.states[n],l=this.$el;let r=-1,o=9999,d=l.querySelector(".visualizations").querySelector(`#${e.id}`).querySelectorAll(".bar");d.forEach(((a,s)=>{a.style.background=i.mainCanvas[s].color;const l=230/e.maxValue*i.mainCanvas[s].value;a.style.height=`${l}px`;const d=a.querySelector("span");d.style.bottom=l<21?`${l}px`:"0px",a.style.margin=`0 ${e.margin}px`,-1===r&&i.mainCanvas[s].color!==t.colorDiscarded&&(r=s),r>-1&&i.mainCanvas[s].color===t.colorDiscarded&&(o=s),r>=0&&n!==e.states.length-1&&s<o&&(s-r+1)%5===0&&(a.style.margin=`0 ${5*(e.margin+2)}px 0 ${e.margin}px`)})),r=-1,o=9999,d=l.querySelector(".visualizations").querySelector(`#${e.idSecondary}`).querySelectorAll(".bar"),d.forEach(((a,s)=>{a.style.background=i.secondaryCanvas[s].color;const n=230/e.maxValue*i.secondaryCanvas[s].value;a.style.height=`${n}px`;const l=a.querySelector("span");l.style.bottom=n<21?`${n}px`:"0px",a.style.margin=`0 ${e.margin}px`,-1===r&&i.secondaryCanvas[s].color!==t.colorDiscarded&&(r=s),r>-1&&i.secondaryCanvas[s].color===t.colorDiscarded&&(o=s),r>=0&&s<o&&(s-r+1)%5===0&&(a.style.margin=`0 ${5*(e.margin+2)}px 0 ${e.margin}px`)})),d=l.querySelector(".visualizations").querySelector(`#${e.idThird}`).querySelectorAll(".bar"),d.forEach(((a,t)=>{a.style.background=i.thirdCanvas[t].color;const s=230/e.maxValue*i.thirdCanvas[t].value;a.style.height=`${s}px`;const n=a.querySelector("span");n.style.bottom=s<21?`${s}px`:"0px"}))}))},addVisualization(){this.$q.dialog({component:i["a"],cancel:!0,parent:this,algorithmName:"Median of medians",willBeReplaced:this.canvases.length>0}).onOk((a=>{this.stateId=0,a.id=`canvas${this.canvasIdHelper}`,a.idSecondary=`canvas${this.canvasIdHelper}secondary`,a.idThird=`canvas${this.canvasIdHelper}third`,a.width=Math.min(40,Math.floor(.6*this.$q.screen.width/a.n)),a.margin=2,a.width<=6?a.margin=0:a.width<=15&&(a.margin=1),a=this.generateStates(a),a.maxValue=Math.max(...a.elements),this.removeCanvas(0),this.canvases.push(a),setTimeout((()=>{this.drawState(this.stateId)}),0)})).onCancel((()=>{console.log("Cancel")}))},startVisualization(){!1===this.visualizationStarted&&this.canvases.length>0&&(this.visualizationStarted=!0,this.drawNextState())},pauseVisualization(){this.visualizationStarted=!1},drawFirstState(){this.drawState(this.stateId=0)},drawLastState(){let a=0;this.canvases.forEach((t=>{t.states.length-1>a&&(a=t.states.length-1)})),this.stateId=a,this.drawState(this.stateId)},drawNextState(){let a=0;this.canvases.forEach((t=>{t.states.length-1>a&&(a=t.states.length-1)})),++this.stateId>=a&&(this.stateId=a,this.visualizationStarted=!1),this.drawState(this.stateId),this.visualizationStarted&&setTimeout(this.drawNextState,this.intervalBetweenStates)},drawPreviousState(){this.stateId>0&&this.drawState(--this.stateId)},onSpeedSliderChange(){this.intervalBetweenStates=1/this.valueOfSpeedSlider*100*350},backgroundColor(a){return this.stateId+1>=a?"background: linear-gradient(90deg, rgba(33,171,14,0.25) 0%, rgba(255,255,255,1) 4%, rgba(255,255,255,0) 96%, rgba(33,171,14,0.25) 100%);":"background: white"},color(a){return"medians"===a?`background: ${this.colorMedians}`:"mm"===a?`background: ${this.colorMM}`:"discarded"===a?`background: ${this.colorDiscarded}`:void 0},display(a){return`display: ${a};`},mainCanvasBar(a,t){return`display: ${a}; width: ${t}px`},spanMainCanvas(a){if(this.canvases[0])return this.canvases[0].width>=29&&a.color!==this.colorDiscarded?`display: block; width: ${this.canvases[0].width}px; max-width: 40px;`:"display: none"},displayPartitionLine(a,t,e){const s=t.filter((a=>"none"!==a.display)).length;let n=!1,i=0;for(let f=0;f<s;f++)if("green"===t[f].color){i=230/a.maxValue*t[f].value,n=!0;break}if(!n||this.stateId===a.states.length-1)return"display: none";let l="position: absolute; border-top: 1px solid black;",r=0;for(let f=0;f<s;f++)t[f].color!==this.colorDiscarded&&r++;let o=0;for(let f=0;f<s;f++){if(t[f].color!==this.colorDiscarded)break;o++}let d=0;for(let f=s-1;f>=0;f--){if(t[f].color!==this.colorDiscarded)break;d++}if(-1===e){e=35;const a=this.$q.screen.width;a<=900?e=20:a<=1400?e=22:a<=1600&&(e=32)}const c=Math.floor(r/5),h=2*r-c,u=5*(a.margin+2),v=a.margin,m=r*e+c*u+h*v;l+=`width: ${m}px;`,l+=`bottom: ${i}px;`;const p=(document.body.scrollWidth-16-m)/2+o*(e/2+v)-d*(e/2+v);return l+=`left: ${p}px;`,l},displayCanvas(a){return"none"!==a?"display: flex":"display: none"}},computed:{}},r=l,o=(e("e1a5"),e("2877")),d=e("9989"),c=e("9c40"),h=e("05c0"),u=e("0016"),v=e("66e5"),m=e("0170"),p=e("4074"),f=e("c1d0"),y=e("eebe"),C=e.n(y),g=Object(o["a"])(r,s,n,!1,null,"6631c9e7",null);t["default"]=g.exports;C()(g,"components",{QPage:d["a"],QBtn:c["a"],QTooltip:h["a"],QIcon:u["a"],QItem:v["a"],QItemLabel:m["a"],QItemSection:p["a"],QSlider:f["a"]})},"481f":function(a,t,e){"use strict";e("0578")},e1a5:function(a,t,e){"use strict";e("ffe3")},ffe3:function(a,t,e){}}]);