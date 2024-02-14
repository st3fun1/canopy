(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[349],{"./projects/canopy/src/lib/hide-at/docs/hide-at.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,hideAtStory:()=>hideAtStory});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_card__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/card/card.module.ts"),_separator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/separator/separator.module.ts"),_hide_at__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/hide-at/hide-at.directive.ts"),_hide_at__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/hide-at/hide-at.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Helpers/Directives/Hide at/Examples",component:_hide_at__WEBPACK_IMPORTED_MODULE_1__.Z,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_hide_at__WEBPACK_IMPORTED_MODULE_2__.O,_card__WEBPACK_IMPORTED_MODULE_3__.E,_separator__WEBPACK_IMPORTED_MODULE_4__.R]})],argTypes:{lgHideAt:{options:["sm","md","lg","xl","xxl"],description:"The name of the breakpoint applied.",table:{type:{summary:["sm","md","lg","xl","xxl"]}},control:{type:"select"}},responsiveUtilClass:{table:{disable:!0}},toggleClass:{table:{disable:!0}}}},directiveTemplate='\n<lg-card [lgHideAt]="lgHideAt">\n  <lg-card-content>\n    Now you see me...\n  </lg-card-content>\n</lg-card>\n',template=`\n<p><strong>Change viewport width to see the card appear at specified breakpoint</strong></p>\n<pre>lgHideAt="{{lgHideAt}}"</pre>\n<lg-separator></lg-separator>\n${directiveTemplate}\n`,hideAtStory=(args=>({props:args,template})).bind({});hideAtStory.storyName="Hide at",hideAtStory.args={lgHideAt:"md"},hideAtStory.parameters={docs:{source:{code:directiveTemplate}}}},"./projects/canopy/src/lib/hide-at/hide-at.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LgHideAtDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgHideAtDirective=((_class=class LgHideAtDirective{set lgHideAt(breakpoint){breakpoint&&(this.responsiveUtilClass=this.toggleClass(`lg-hide-at--${breakpoint}`,this.responsiveUtilClass))}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement}toggleClass(newClass,oldClass){return oldClass&&this.renderer.removeClass(this.hostElement.nativeElement,oldClass),this.renderer.addClass(this.hostElement.nativeElement,newClass),newClass}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class.propDecorators={lgHideAt:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);LgHideAtDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgHideAt]"})],LgHideAtDirective)},"./projects/canopy/src/lib/hide-at/hide-at.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>LgHideAtModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_hide_at_directive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/hide-at/hide-at.directive.ts");let LgHideAtModule=class LgHideAtModule{};LgHideAtModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_hide_at_directive__WEBPACK_IMPORTED_MODULE_3__.Z],exports:[_hide_at_directive__WEBPACK_IMPORTED_MODULE_3__.Z]})],LgHideAtModule)},"./projects/canopy/src/lib/separator/separator.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>LgSeparatorComponent});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_separator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/separator/separator.component.scss?ngResource"),_separator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_separator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgSeparatorComponent=((_class=class LgSeparatorComponent{set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-separator--${this.variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-separator--${variant}`),this._variant=variant}get variant(){return this._variant}get roleAttr(){return this.hasRole?"separator":null}get ariaHidden(){return!this.hasRole||null}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.class=!0,this.variant="solid"}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class.propDecorators={hasRole:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-separator"]}],roleAttr:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.role"]}],ariaHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.aria-hidden"]}]},_class);LgSeparatorComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"lg-separator",template:"",encapsulation:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,styles:[_separator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default()]})],LgSeparatorComponent)},"./projects/canopy/src/lib/separator/separator.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>LgSeparatorModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_separator_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/separator/separator.component.ts");let LgSeparatorModule=class LgSeparatorModule{};LgSeparatorModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_separator_component__WEBPACK_IMPORTED_MODULE_3__.r],exports:[_separator_component__WEBPACK_IMPORTED_MODULE_3__.r]})],LgSeparatorModule)},"./projects/canopy/src/lib/separator/separator.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-separator {\n  display: block;\n  margin: var(--space-lg) 0;\n}\n\n.lg-separator--solid {\n  border-top: solid var(--border-width) var(--separator-color);\n}\n\n.lg-separator--dotted {\n  border-top: dotted var(--separator-dotted-border-width) var(--color-charcoal);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);