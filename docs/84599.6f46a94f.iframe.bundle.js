(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[84599],{"./projects/canopy/src/lib/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>LgButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./projects/canopy/src/lib/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon_component=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts"),margin_directive=__webpack_require__("./projects/canopy/src/lib/spacing/margin/margin.directive.ts"),spinner_component=__webpack_require__("./projects/canopy/src/lib/spinner/spinner.component.ts");let LgButtonComponent=class LgButtonComponent{set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-btn--${this.variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-btn--${variant}`),this._variant=variant}get variant(){return this._variant}get disabledAttr(){return this.loading||this.disabled?"":null}get loadingClass(){return this.loading}get fullWidthClass(){return this.fullWidth}get leftIconClass(){return"left"===this.iconPosition}get iconButtonClass(){return this.iconButton}get sizeClass(){return"sm"===this.size}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.class=!0,this.loading=!1,this.disabled=!1,this.fullWidth=!1,this.iconButton=!1,this.variant="primary-dark",this.iconPosition="right",this.size="md"}ngAfterViewInit(){if(2===this.icons.length){const icons=this.hostElement.nativeElement.getElementsByTagName("lg-icon");this.renderer.addClass(icons[0],"lg-margin__left--none"),this.renderer.addClass(icons[0],"lg-margin__right--xxs")}}static#_=this.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}];static#_2=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-btn"]}],icons:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>icon_component.A)),{descendants:!0}]}],variant:[{type:core.Input}],loading:[{type:core.Input}],disabledAttr:[{type:core.HostBinding,args:["attr.disabled"]}],disabled:[{type:core.Input}],loadingClass:[{type:core.HostBinding,args:["class.lg-btn--loading"]}],fullWidth:[{type:core.Input}],fullWidthClass:[{type:core.HostBinding,args:["class.lg-btn--block"]}],iconPosition:[{type:core.Input}],leftIconClass:[{type:core.HostBinding,args:["class.lg-btn--icon-left"]}],iconButton:[{type:core.Input}],iconButtonClass:[{type:core.HostBinding,args:["class.lg-btn--icon-only"]}],size:[{type:core.Input}],sizeClass:[{type:core.HostBinding,args:["class.lg-btn--sm"]}]}};LgButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[lg-button]",template:'<ng-template #standard>\n  <ng-content *ngIf="icons.length === 2" select="lg-icon[first]"></ng-content>\n\n  <span class="lg-btn__text">\n    <ng-content></ng-content>\n  </span>\n\n  <ng-container *ngFor="let icon of icons; let i = index">\n    <ng-content *ngIf="icons.length === 2" select="lg-icon[second]"></ng-content>\n    <ng-content *ngIf="icons.length === 1" select="lg-icon"></ng-content>\n  </ng-container>\n</ng-template>\n\n<ng-container *ngIf="loading; else standard">\n  <span class="lg-btn__hidden-content" aria-hidden="true">\n    <ng-container *ngTemplateOutlet="standard"></ng-container>\n  </span>\n\n  <lg-spinner class="lg-btn__spinner" [variant]="\'inherit\'" lgMargin="none" [size]="size">\n  </lg-spinner>\n</ng-container>\n',encapsulation:core.ViewEncapsulation.None,standalone:!0,imports:[common.NgIf,common.NgFor,common.NgTemplateOutlet,spinner_component.Q,margin_directive.X],styles:[button_componentngResource_default()]})],LgButtonComponent)},"./projects/canopy/src/lib/spacing/margin/margin.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LgMarginDirective});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_spacing_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgMarginDirective=class LgMarginDirective{set lgMarginTop(margin){this.marginTopClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-top"),this.marginTopClasses)}set lgMarginRight(margin){this.marginRightClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-right"),this.marginRightClasses)}set lgMarginBottom(margin){this.marginBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-bottom"),this.marginBottomClasses)}set lgMarginLeft(margin){this.marginLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-left"),this.marginLeftClasses)}set lgMarginHorizontal(margin){this.lgMarginLeft=margin,this.lgMarginRight=margin}set lgMarginVertical(margin){this.lgMarginTop=margin,this.lgMarginBottom=margin}set lgMargin(margin){this.marginClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin"),this.marginClasses)}constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.marginTopClasses=[],this.marginRightClasses=[],this.marginBottomClasses=[],this.marginLeftClasses=[],this.marginClasses=[]}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef},{type:_spacing_service__WEBPACK_IMPORTED_MODULE_1__.r}];static#_2=this.propDecorators={lgMarginTop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginRight:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginBottom:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginLeft:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginHorizontal:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginVertical:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMargin:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};LgMarginDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"\n    [lgMargin],\n    [lgMarginVertical],\n    [lgMarginHorizontal],\n    [lgMarginTop],\n    [lgMarginRight],\n    [lgMarginBottom],\n    [lgMarginLeft]\n  ",standalone:!0})],LgMarginDirective)},"./projects/canopy/src/lib/spacing/spacing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>SpacingService});var BreakpointValues,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");!function(BreakpointValues){BreakpointValues.xs="0",BreakpointValues.sm="20rem",BreakpointValues.md="48rem",BreakpointValues.lg="64rem",BreakpointValues.xl="80rem",BreakpointValues.xxl="90rem"}(BreakpointValues||(BreakpointValues={}));var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let DynamicStyleService=class DynamicStyleService{constructor(document){this.document=document,this.styleTag=null,this.selectors=[],this.mediaQueries={},this.addStyleTag()}addRules(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.filter((r=>!this.selectors.includes(r.selector))).map((r=>{this.selectors.push(r.selector),styleTagCache+=`.${r.selector}{${r.declaration}}`})),this.styleTag.innerHTML=styleTagCache}addRulesToMediaQuery(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.map((r=>{if(this.mediaQueries[r.breakpoint]||(styleTagCache+=this.createMediaQuery(r.breakpoint)),this.mediaQueries[r.breakpoint].includes(r.selector))return;this.mediaQueries[r.breakpoint].push(r.selector);const rule=`.${r.selector}{${r.declaration}}`;styleTagCache=this.insertRuleInsideMediaQuery(styleTagCache,r.breakpoint,rule,r.addAtStart)})),this.styleTag.innerHTML=styleTagCache}insertRuleInsideMediaQuery(cssString,breakpoint,rule,atStart=!1){const search=`@media(min-width:${breakpoint}){`;let index=cssString.indexOf(search);if(-1===index)return console.warn("Media query not found in string, cannot add rule."),cssString;if(index+=search.length,atStart)return cssString.substring(0,index)+`${rule}`+cssString.substring(index);let balance=0,pos=null;for(let i=index;i<cssString.length;i++){const char=cssString[i];if("{"===char?balance++:"}"===char&&balance--,-1===balance){pos=i;break}}return null===pos?(console.warn("Cannot add rule to media query in CSS string, invalid CSS string"),cssString):cssString.substring(0,pos)+`${rule}`+cssString.substring(pos)}addStyleTag(){this.styleTag=this.document.createElement("style"),this.styleTag.type="text/css",this.document.getElementsByTagName("head")[0].appendChild(this.styleTag)}createMediaQuery(breakpoint){if(!this.mediaQueries[breakpoint])return this.mediaQueries[breakpoint]=[],`@media(min-width:${breakpoint}){}`}static#_=this.ctorParameters=()=>[{type:Document,decorators:[{type:core.Inject,args:[common.DOCUMENT]}]}]};var SpacingValues;DynamicStyleService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],DynamicStyleService),function(SpacingValues){SpacingValues.none="0",SpacingValues.xxxs="0.25rem",SpacingValues.xxs="0.5rem",SpacingValues.xs="0.75rem",SpacingValues.sm="1rem",SpacingValues.md="1.5rem",SpacingValues.lg="2rem",SpacingValues.xl="2.5rem",SpacingValues.xxl="3rem",SpacingValues.xxxl="4.5rem",SpacingValues.xxxxl="9rem"}(SpacingValues||(SpacingValues={}));let SpacingService=class SpacingService{constructor(dynamicStyleService){this.dynamicStyleService=dynamicStyleService}createNewClasses(spacing,cssProperty){const newClasses=[],responsiveSpacingRules=[];if(!spacing)return[];if("object"==typeof spacing)Object.keys(spacing).forEach((key=>{const selector=`lg-${cssProperty.replace("-","__")}--${key}--${spacing[key]}`;responsiveSpacingRules.push({selector,declaration:`${cssProperty}:${SpacingValues[spacing[key]]}!important`,breakpoint:BreakpointValues[key]}),newClasses.push(selector)})),this.dynamicStyleService.addRulesToMediaQuery(responsiveSpacingRules);else{const selector=`lg-${cssProperty.replace("-","__")}--${spacing}`;this.dynamicStyleService.addRules([{selector,declaration:`${cssProperty}:${SpacingValues[spacing]}!important`}]),newClasses.push(selector)}return newClasses}static#_=this.ctorParameters=()=>[{type:DynamicStyleService}]};SpacingService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],SpacingService)},"./projects/canopy/src/lib/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>LgSpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var spinner_componentngResource=__webpack_require__("./projects/canopy/src/lib/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),interval=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/interval.js"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let LgSpinnerComponent=class LgSpinnerComponent{get sizeClass(){return"sm"===this.size}get extraSmallSizeClass(){return"xs"===this.size}get role(){return this.readScreenReaderAlert?"alert":null}get ariaLive(){return this.readScreenReaderAlert?"assertive":null}constructor(cdr){this.cdr=cdr,this.readScreenReaderAlert=!0,this.variant="dark",this.size="md",this.class=!0,(0,core.inject)(core.NgZone).runOutsideAngular((()=>{this.subscription=(0,interval.Y)(2500).subscribe((()=>{this.readScreenReaderAlert=!this.readScreenReaderAlert,this.cdr.markForCheck()}))}))}ngOnDestroy(){this.subscription?.unsubscribe()}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={variant:[{type:core.Input}],size:[{type:core.Input}],text:[{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-spinner"]}],sizeClass:[{type:core.HostBinding,args:["class.lg-spinner--sm"]}],extraSmallSizeClass:[{type:core.HostBinding,args:["class.lg-spinner--xs"]}],role:[{type:core.HostBinding,args:["attr.role"]}],ariaLive:[{type:core.HostBinding,args:["attr.aria-live"]}]}};LgSpinnerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-spinner",template:'<div\n  class="lg-spinner__ring"\n  [ngClass]="{\n    \'lg-spinner__ring--color\': variant === \'color\',\n    \'lg-spinner__ring--light\': variant === \'light\',\n    \'lg-spinner__ring--inherit\': variant === \'inherit\'\n  }"\n  aria-busy="true"\n></div>\n\n<p\n  *ngIf="text; else defaultText"\n  class="lg-spinner__content"\n  [ngClass]="{\n    \'lg-spinner__content--light\': variant === \'light\'\n  }"\n>\n  <span aria-hidden="true">{{ text }}</span>\n  <span class="lg-visually-hidden">{{ text }}</span>\n</p>\n\n<ng-template #defaultText>\n  <p class="lg-visually-hidden">Loading...</p>\n</ng-template>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[common.NgClass,common.NgIf],styles:[spinner_componentngResource_default()]})],LgSpinnerComponent)},"./projects/canopy/src/lib/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-btn {\n  appearance: none;\n  text-decoration: underline;\n  border-bottom: 0;\n  padding: 0;\n  display: flex;\n  position: relative;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--btn-border-radius);\n  font-size: var(--btn-font-size);\n  font-weight: var(--font-weight-medium);\n  cursor: pointer;\n  min-width: var(--btn-min-width);\n  line-height: var(--btn-line-height);\n  padding: var(--btn-vertical-padding) var(--btn-horizontal-padding);\n  text-align: center;\n  transition: background-color var(--animation-duration) var(--animation-fn);\n  margin-bottom: var(--component-margin);\n  text-decoration: none;\n}\n.lg-btn:hover {\n  border-bottom: 0;\n  box-shadow: none;\n  background-color: transparent;\n  color: inherit;\n}\n.lg-btn:active, .lg-btn:focus-visible, .lg-btn:focus-visible:hover {\n  background-color: transparent;\n  color: inherit;\n}\n.lg-btn:focus-visible, .lg-btn:focus-visible:hover {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-btn:focus-visible, .lg-btn:focus-visible:hover {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-btn:not(.lg-btn--loading):disabled {\n  background-color: var(--btn-disabled-bg-color);\n  border: var(--btn-disabled-border-color) solid var(--border-width);\n  color: var(--btn-disabled-color);\n  cursor: not-allowed;\n}\n.lg-btn__hidden-content {\n  display: flex;\n  position: relative;\n  visibility: hidden;\n}\n.lg-btn__spinner {\n  position: absolute;\n  inset: 0;\n}\n.lg-btn--sm {\n  padding: var(--btn-vertical-padding--sm) var(--btn-horizontal-padding--sm);\n}\n.lg-btn--sm.lg-btn--icon-only {\n  padding: var(--btn-icon-only-padding--sm);\n}\n.lg-btn--loading {\n  cursor: not-allowed;\n}\n.lg-btn .lg-icon {\n  margin-left: var(--space-xxs);\n}\n.lg-btn--icon-left {\n  flex-direction: row-reverse;\n}\n.lg-btn--icon-left .lg-icon {\n  margin-left: 0;\n  margin-right: var(--space-xxs);\n}\n@media (min-width: 48rem) {\n  .lg-btn {\n    display: inline-flex;\n    width: auto;\n  }\n  .lg-btn--block {\n    display: flex;\n    width: 100%;\n  }\n}\n.lg-btn--icon-only {\n  min-width: auto;\n  width: auto;\n  display: inline-flex;\n  padding: var(--btn-icon-only-padding);\n}\n.lg-btn--icon-only .lg-btn__text {\n  border: 0 !important;\n  clip: rect(0 0 0 0) !important;\n  height: auto !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 0.0625em !important;\n  white-space: nowrap !important;\n}\n.lg-btn--icon-only .lg-icon {\n  margin-left: 0;\n  margin-right: 0;\n  height: var(--space-md);\n  width: var(--space-md);\n}\n\n.lg-btn--link {\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n  min-width: initial;\n  border-radius: 0;\n  width: initial;\n  border-bottom: 0.125rem solid var(--link-color);\n  color: var(--link-color);\n  line-height: initial;\n  padding: 0 0.125rem;\n  text-decoration: none;\n}\n.lg-btn--link:hover, .lg-btn--link:hover:visited {\n  color: var(--link-hover-color);\n  border-bottom: 0;\n  box-shadow: inset 0 -0.063rem 0 0 var(--link-hover-color), 0 0.188rem 0 0 var(--link-hover-color);\n}\n.lg-btn--link:visited {\n  color: var(--link-visited-color);\n  border-color: var(--link-visited-color);\n}\n.lg-btn--link:active {\n  background-color: var(--link-active-bg-color);\n  border-bottom-color: var(--link-active-color);\n  color: var(--link-active-color);\n  outline: 0;\n}\n.lg-btn--link:focus-visible, .lg-btn--link:focus-visible:hover {\n  background-color: var(--link-focus-bg-color);\n  border-bottom: 0;\n  color: var(--link-focus-color);\n  outline: 0.063rem solid var(--link-focus-bg-color);\n  outline-offset: 0;\n}\n.lg-btn--link:focus-visible, .lg-btn--link:hover:focus-visible {\n  box-shadow: none;\n}\n.lg-btn--link:hover, .lg-btn--link:hover:visited, .lg-btn--link:focus-visible, .lg-btn--link:focus-visible:hover {\n  padding-bottom: 0.125rem;\n}\n\n.lg-btn-toggle--active > .lg-icon[name=chevron-down] {\n  transform: rotateX(180deg);\n}\n\n.lg-btn--primary-dark,\n.lg-btn--primary-dark:focus-visible:not(.lg-btn-toggle),\n.lg-btn--primary-dark:visited {\n  background-color: var(--btn-primary-dark-bg-color);\n  border: var(--btn-primary-dark-border-color) solid var(--border-width);\n  color: var(--btn-primary-dark-color);\n}\n.lg-btn--primary-dark:hover,\n.lg-btn--primary-dark:focus-visible:not(.lg-btn-toggle):hover,\n.lg-btn--primary-dark:visited:hover {\n  border: var(--btn-primary-dark-active-border-color) solid var(--border-width);\n}\n.lg-btn--primary-dark:not(:disabled):active:not(.lg-btn-toggle--active), .lg-btn--primary-dark:not(:disabled):active:hover:not(.lg-btn-toggle--active), .lg-btn--primary-dark:not(:disabled).lg-btn-toggle--active,\n.lg-btn--primary-dark:focus-visible:not(.lg-btn-toggle):not(:disabled):active:not(.lg-btn-toggle--active),\n.lg-btn--primary-dark:focus-visible:not(.lg-btn-toggle):not(:disabled):active:hover:not(.lg-btn-toggle--active),\n.lg-btn--primary-dark:focus-visible:not(.lg-btn-toggle):not(:disabled).lg-btn-toggle--active,\n.lg-btn--primary-dark:visited:not(:disabled):active:not(.lg-btn-toggle--active),\n.lg-btn--primary-dark:visited:not(:disabled):active:hover:not(.lg-btn-toggle--active),\n.lg-btn--primary-dark:visited:not(:disabled).lg-btn-toggle--active {\n  background-color: var(--btn-primary-dark-active-bg-color);\n  border: var(--btn-primary-dark-active-border-color) solid var(--border-width);\n  color: var(--btn-primary-dark-active-color);\n}\n.lg-btn--primary-dark:not(:disabled):hover,\n.lg-btn--primary-dark:focus-visible:not(.lg-btn-toggle):not(:disabled):hover,\n.lg-btn--primary-dark:visited:not(:disabled):hover {\n  background-color: var(--btn-primary-dark-hover-bg-color);\n  border: var(--btn-primary-dark-hover-border-color) solid var(--border-width);\n  color: var(--btn-primary-dark-hover-color);\n}\n\n.lg-btn--primary-dark:focus-visible {\n  border-color: transparent;\n}\n.lg-btn--primary-dark:focus-visible:not(:disabled):active, .lg-btn--primary-dark:focus-visible:not(:disabled):active:hover, .lg-btn--primary-dark:focus-visible:not(:disabled):hover {\n  border-color: transparent;\n}\n\n.lg-btn--primary-light,\n.lg-btn--primary-light:focus-visible:not(.lg-btn-toggle),\n.lg-btn--primary-light:visited {\n  background-color: var(--btn-primary-light-bg-color);\n  border: var(--btn-primary-light-border-color) solid var(--border-width);\n  color: var(--btn-primary-light-color);\n}\n.lg-btn--primary-light:hover,\n.lg-btn--primary-light:focus-visible:not(.lg-btn-toggle):hover,\n.lg-btn--primary-light:visited:hover {\n  border: var(--btn-primary-light-active-border-color) solid var(--border-width);\n}\n.lg-btn--primary-light:not(:disabled):active:not(.lg-btn-toggle--active), .lg-btn--primary-light:not(:disabled):active:hover:not(.lg-btn-toggle--active), .lg-btn--primary-light:not(:disabled).lg-btn-toggle--active,\n.lg-btn--primary-light:focus-visible:not(.lg-btn-toggle):not(:disabled):active:not(.lg-btn-toggle--active),\n.lg-btn--primary-light:focus-visible:not(.lg-btn-toggle):not(:disabled):active:hover:not(.lg-btn-toggle--active),\n.lg-btn--primary-light:focus-visible:not(.lg-btn-toggle):not(:disabled).lg-btn-toggle--active,\n.lg-btn--primary-light:visited:not(:disabled):active:not(.lg-btn-toggle--active),\n.lg-btn--primary-light:visited:not(:disabled):active:hover:not(.lg-btn-toggle--active),\n.lg-btn--primary-light:visited:not(:disabled).lg-btn-toggle--active {\n  background-color: var(--btn-primary-light-active-bg-color);\n  border: var(--btn-primary-light-active-border-color) solid var(--border-width);\n  color: var(--btn-primary-light-active-color);\n}\n.lg-btn--primary-light:not(:disabled):hover,\n.lg-btn--primary-light:focus-visible:not(.lg-btn-toggle):not(:disabled):hover,\n.lg-btn--primary-light:visited:not(:disabled):hover {\n  background-color: var(--btn-primary-light-hover-bg-color);\n  border: var(--btn-primary-light-hover-border-color) solid var(--border-width);\n  color: var(--btn-primary-light-hover-color);\n}\n\n.lg-btn--primary-light:focus-visible {\n  border-color: transparent;\n}\n.lg-btn--primary-light:focus-visible:not(:disabled):active, .lg-btn--primary-light:focus-visible:not(:disabled):active:hover, .lg-btn--primary-light:focus-visible:not(:disabled):hover {\n  border-color: transparent;\n}\n\n.lg-btn--secondary-dark,\n.lg-btn--secondary-dark:focus-visible:not(.lg-btn-toggle),\n.lg-btn--secondary-dark:visited {\n  background-color: var(--btn-secondary-dark-bg-color);\n  border: var(--btn-secondary-dark-border-color) solid var(--border-width);\n  color: var(--btn-secondary-dark-color);\n}\n.lg-btn--secondary-dark:hover,\n.lg-btn--secondary-dark:focus-visible:not(.lg-btn-toggle):hover,\n.lg-btn--secondary-dark:visited:hover {\n  border: var(--btn-secondary-dark-active-border-color) solid var(--border-width);\n}\n.lg-btn--secondary-dark:not(:disabled):active:not(.lg-btn-toggle--active), .lg-btn--secondary-dark:not(:disabled):active:hover:not(.lg-btn-toggle--active), .lg-btn--secondary-dark:not(:disabled).lg-btn-toggle--active,\n.lg-btn--secondary-dark:focus-visible:not(.lg-btn-toggle):not(:disabled):active:not(.lg-btn-toggle--active),\n.lg-btn--secondary-dark:focus-visible:not(.lg-btn-toggle):not(:disabled):active:hover:not(.lg-btn-toggle--active),\n.lg-btn--secondary-dark:focus-visible:not(.lg-btn-toggle):not(:disabled).lg-btn-toggle--active,\n.lg-btn--secondary-dark:visited:not(:disabled):active:not(.lg-btn-toggle--active),\n.lg-btn--secondary-dark:visited:not(:disabled):active:hover:not(.lg-btn-toggle--active),\n.lg-btn--secondary-dark:visited:not(:disabled).lg-btn-toggle--active {\n  background-color: var(--btn-secondary-dark-active-bg-color);\n  border: var(--btn-secondary-dark-active-border-color) solid var(--border-width);\n  color: var(--btn-secondary-dark-active-color);\n}\n.lg-btn--secondary-dark:not(:disabled):hover,\n.lg-btn--secondary-dark:focus-visible:not(.lg-btn-toggle):not(:disabled):hover,\n.lg-btn--secondary-dark:visited:not(:disabled):hover {\n  background-color: var(--btn-secondary-dark-hover-bg-color);\n  border: var(--btn-secondary-dark-hover-border-color) solid var(--border-width);\n  color: var(--btn-secondary-dark-hover-color);\n}\n\n.lg-btn--secondary-dark:focus-visible {\n  border-color: transparent;\n}\n.lg-btn--secondary-dark:focus-visible:not(:disabled):active, .lg-btn--secondary-dark:focus-visible:not(:disabled):active:hover, .lg-btn--secondary-dark:focus-visible:not(:disabled):hover {\n  border-color: transparent;\n}\n\n.lg-btn--secondary-light,\n.lg-btn--secondary-light:focus-visible:not(.lg-btn-toggle),\n.lg-btn--secondary-light:visited {\n  background-color: var(--btn-secondary-light-bg-color);\n  border: var(--btn-secondary-light-border-color) solid var(--border-width);\n  color: var(--btn-secondary-light-color);\n}\n.lg-btn--secondary-light:hover,\n.lg-btn--secondary-light:focus-visible:not(.lg-btn-toggle):hover,\n.lg-btn--secondary-light:visited:hover {\n  border: var(--btn-secondary-light-active-border-color) solid var(--border-width);\n}\n.lg-btn--secondary-light:not(:disabled):active:not(.lg-btn-toggle--active), .lg-btn--secondary-light:not(:disabled):active:hover:not(.lg-btn-toggle--active), .lg-btn--secondary-light:not(:disabled).lg-btn-toggle--active,\n.lg-btn--secondary-light:focus-visible:not(.lg-btn-toggle):not(:disabled):active:not(.lg-btn-toggle--active),\n.lg-btn--secondary-light:focus-visible:not(.lg-btn-toggle):not(:disabled):active:hover:not(.lg-btn-toggle--active),\n.lg-btn--secondary-light:focus-visible:not(.lg-btn-toggle):not(:disabled).lg-btn-toggle--active,\n.lg-btn--secondary-light:visited:not(:disabled):active:not(.lg-btn-toggle--active),\n.lg-btn--secondary-light:visited:not(:disabled):active:hover:not(.lg-btn-toggle--active),\n.lg-btn--secondary-light:visited:not(:disabled).lg-btn-toggle--active {\n  background-color: var(--btn-secondary-light-active-bg-color);\n  border: var(--btn-secondary-light-active-border-color) solid var(--border-width);\n  color: var(--btn-secondary-light-active-color);\n}\n.lg-btn--secondary-light:not(:disabled):hover,\n.lg-btn--secondary-light:focus-visible:not(.lg-btn-toggle):not(:disabled):hover,\n.lg-btn--secondary-light:visited:not(:disabled):hover {\n  background-color: var(--btn-secondary-light-hover-bg-color);\n  border: var(--btn-secondary-light-hover-border-color) solid var(--border-width);\n  color: var(--btn-secondary-light-hover-color);\n}\n\n.lg-btn--secondary-light:focus-visible {\n  border-color: transparent;\n}\n.lg-btn--secondary-light:focus-visible:not(:disabled):active, .lg-btn--secondary-light:focus-visible:not(:disabled):active:hover, .lg-btn--secondary-light:focus-visible:not(:disabled):hover {\n  border-color: transparent;\n}\n\n.lg-btn--add-on,\n.lg-btn--add-on:focus-visible:not(.lg-btn-toggle),\n.lg-btn--add-on:visited {\n  background-color: var(--btn-add-on-bg-color);\n  border: var(--btn-add-on-border-color) solid var(--border-width);\n  color: var(--btn-add-on-color);\n}\n.lg-btn--add-on:hover,\n.lg-btn--add-on:focus-visible:not(.lg-btn-toggle):hover,\n.lg-btn--add-on:visited:hover {\n  border: var(--btn-add-on-active-border-color) solid var(--border-width);\n}\n.lg-btn--add-on:not(:disabled):active:not(.lg-btn-toggle--active), .lg-btn--add-on:not(:disabled):active:hover:not(.lg-btn-toggle--active), .lg-btn--add-on:not(:disabled).lg-btn-toggle--active,\n.lg-btn--add-on:focus-visible:not(.lg-btn-toggle):not(:disabled):active:not(.lg-btn-toggle--active),\n.lg-btn--add-on:focus-visible:not(.lg-btn-toggle):not(:disabled):active:hover:not(.lg-btn-toggle--active),\n.lg-btn--add-on:focus-visible:not(.lg-btn-toggle):not(:disabled).lg-btn-toggle--active,\n.lg-btn--add-on:visited:not(:disabled):active:not(.lg-btn-toggle--active),\n.lg-btn--add-on:visited:not(:disabled):active:hover:not(.lg-btn-toggle--active),\n.lg-btn--add-on:visited:not(:disabled).lg-btn-toggle--active {\n  background-color: var(--btn-add-on-active-bg-color);\n  border: var(--btn-add-on-active-border-color) solid var(--border-width);\n  color: var(--btn-add-on-active-color);\n}\n.lg-btn--add-on:not(:disabled):hover,\n.lg-btn--add-on:focus-visible:not(.lg-btn-toggle):not(:disabled):hover,\n.lg-btn--add-on:visited:not(:disabled):hover {\n  background-color: var(--btn-add-on-hover-bg-color);\n  border: var(--btn-add-on-hover-border-color) solid var(--border-width);\n  color: var(--btn-add-on-hover-color);\n}\n\n.lg-btn--add-on:focus-visible {\n  border-color: transparent;\n}\n.lg-btn--add-on:focus-visible:not(:disabled):active, .lg-btn--add-on:focus-visible:not(:disabled):active:hover, .lg-btn--add-on:focus-visible:not(:disabled):hover {\n  border-color: transparent;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: var(--component-margin);\n}\n\n.lg-spinner__ring {\n  display: inline-block;\n  width: var(--spinner-diameter);\n  height: var(--spinner-diameter);\n  border: solid var(--spinner-border-width);\n  border-radius: 50%;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-top-color: var(--spinner-dark-color);\n  border-bottom-color: var(--spinner-dark-color);\n  animation: spin var(--spinner-rotation-speed) infinite linear;\n}\n.lg-spinner--sm .lg-spinner__ring {\n  width: var(--spinner-diameter--sm);\n  height: var(--spinner-diameter--sm);\n}\n.lg-spinner--xs .lg-spinner__ring {\n  width: var(--spinner-diameter--xs);\n  height: var(--spinner-diameter--xs);\n}\n\n.lg-spinner__ring--color {\n  border-top-color: var(--spinner-ring-top-color);\n  border-bottom-color: var(--spinner-ring-bottom-color);\n  border-left-color: var(--spinner-ring-left-color);\n  border-right-color: var(--spinner-ring-right-color);\n}\n\n.lg-spinner__ring--light {\n  border-top-color: var(--spinner-light-color);\n  border-bottom-color: var(--spinner-light-color);\n}\n\n.lg-spinner__ring--inherit {\n  border-top-color: inherit;\n  border-bottom-color: inherit;\n}\n\n.lg-spinner__content {\n  margin-top: var(--space-md);\n  text-align: center;\n}\n.lg-spinner__content--light {\n  color: var(--spinner-light-color);\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);