(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[5735],{"./projects/canopy/src/lib/progress-indicator/progress-bar/progress-bar.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>LgProgressBarComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var progress_bar_componentngResource=__webpack_require__("./projects/canopy/src/lib/progress-indicator/progress-bar/progress-bar.component.scss?ngResource"),progress_bar_componentngResource_default=__webpack_require__.n(progress_bar_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgProgressBarComponent=class LgProgressBarComponent{constructor(){this.max=0,this.value=0,this.isAriaLiveRegion=!1,this.ariaLabel="Progress bar",this.ariaLabelledBy=null}get progress(){if(this.max<=0)return 0;const rawPercentage=this.value/this.max*100;return Math.min(rawPercentage,100)}static#_=this.propDecorators={max:[{type:core.Input}],value:[{type:core.Input}],isAriaLiveRegion:[{type:core.Input}],ariaLabel:[{type:core.Input}],ariaLabelledBy:[{type:core.Input}]}};LgProgressBarComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-progress-bar",template:'<div\n  role="progressbar"\n  class="lg-progress-bar"\n  [attr.aria-label]="ariaLabel"\n  [attr.aria-labelledby]="ariaLabelledBy"\n  [attr.aria-valuemax]="max"\n  [attr.aria-valuemin]="value"\n  [attr.aria-valuenow]="value"\n  [attr.aria-live]="isAriaLiveRegion ? \'polite\' : \'off\'"\n>\n  <div class="lg-progress-bar__bar" [style.width.%]="progress"></div>\n</div>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[progress_bar_componentngResource_default()]})],LgProgressBarComponent)},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/canopy/src/lib/progress-indicator/docs/progress-bar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,progressBar:()=>progressBar});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Progress indicator/Examples",component:__webpack_require__("./projects/canopy/src/lib/progress-indicator/progress-bar/progress-bar.component.ts").B,argTypes:{max:{description:"The total count of steps in the progress bar.",table:{type:{summary:"number"},defaultValue:{summary:4}}},value:{description:"The current count of steps in the progress bar.",table:{type:{summary:"number"},defaultValue:{summary:1}}}}},template='\n  <lg-progress-bar [max]="max" [value]="value"></lg-progress-bar>\n',progressBar=(args=>({props:args,template})).bind({});progressBar.storyName="Progress bar",progressBar.args={max:4,value:1},progressBar.parameters={docs:{source:{code:template}}},progressBar.parameters={...progressBar.parameters,docs:{...progressBar.parameters?.docs,source:{originalSource:"(args: LgProgressBarComponent) => ({\n  props: args,\n  template\n})",...progressBar.parameters?.docs?.source}}};const __namedExportsOrder=["progressBar"]},"./projects/canopy/src/lib/progress-indicator/progress-bar/progress-bar.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-progress-bar {\n  background-color: #e3f2fd;\n  height: calc(var(--space-xxxs));\n  border-radius: var(--border-radius-sm);\n  width: 100%;\n}\n.lg-progress-bar__bar {\n  background-color: var(--color-super-blue);\n  border-radius: var(--border-radius-sm);\n  height: inherit;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);