"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[1253],{"./projects/canopy/src/lib/variant/docs/variant.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,standardVariant:()=>standardVariant});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/canopy/src/lib/button/button.module.ts"),_card__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/card/card.module.ts"),_grid__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./projects/canopy/src/lib/grid/grid.module.ts"),_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts"),_icon__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./projects/canopy/src/lib/icon/icon.module.ts"),_shadow__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./projects/canopy/src/lib/shadow/shadow.module.ts"),_spacing__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.module.ts"),_variant_module__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/variant/variant.module.ts");const variants=["generic","info","success","warning","error"];let LgVariantStoryComponent=class LgVariantStoryComponent{constructor(registry){this.registry=registry,this.registry.registerIcons(_icon__WEBPACK_IMPORTED_MODULE_1__.lgIconsArray)}};LgVariantStoryComponent.ctorParameters=()=>[{type:_icon__WEBPACK_IMPORTED_MODULE_2__.v}],LgVariantStoryComponent.propDecorators={variant:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}]},LgVariantStoryComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"lg-variant-story",template:'\n    <lg-card lgShadow [lgVariant]="variant" lgPaddingLeft="lg" lgPaddingRight="lg">\n      <lg-card-content>\n        <p><strong>The variant directive</strong></p>\n        <p>\n          This card has the <strong>{{ variant }}</strong> variant applied. Here is some\n          <a href="#">link text</a>.\n        </p>\n        <button lg-button variant="secondary-dark">Outline primary button</button>\n        <br />\n        <a href="#" lg-button variant="secondary-dark" lgMarginBottom="none">\n          Outline primary link styled as button\n        </a>\n      </lg-card-content>\n    </lg-card>\n    <lg-card lgShadow>\n      <lg-card-content>\n        This card doesn\'t use the varaint directive. Here is some\n        <a href="#">link text</a>.\n      </lg-card-content>\n    </lg-card>\n  '})],LgVariantStoryComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Helpers/Directives/Variant/Examples",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[LgVariantStoryComponent],imports:[_variant_module__WEBPACK_IMPORTED_MODULE_5__.K,_card__WEBPACK_IMPORTED_MODULE_6__.E,_button__WEBPACK_IMPORTED_MODULE_7__.h,_spacing__WEBPACK_IMPORTED_MODULE_8__.B,_grid__WEBPACK_IMPORTED_MODULE_9__.i,_icon__WEBPACK_IMPORTED_MODULE_10__.r,_shadow__WEBPACK_IMPORTED_MODULE_11__.q]})],argTypes:{variant:{options:variants,description:"The variant to apply to the component.",table:{type:{summary:variants}},control:{type:"select"}}}},standardVariant=(args=>({props:args,template:'\n<lg-variant-story [variant]="variant"></lg-variant-story>\n'})).bind({});standardVariant.storyName="Variant",standardVariant.args={variant:"success"},standardVariant.parameters={docs:{source:{code:'\n<lg-card lgVariant="success">\n  <lg-card-content>\n    <p>\n      This card has the <strong>success</strong> variant applied. Here is some\n      <a href="#">link text</a>.\n    </p>\n    <button lg-button variant="secondary-dark" lgMarginBottom="none">Outline primary button</button>\n  </lg-card-content>\n</lg-card>\n'}}}},"./projects/canopy/src/lib/grid/grid.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>LgGridModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgGridColDirective=class LgGridColDirective{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement}set lgCol(columns){this.lgColClass=this.toggleColumnClass(`lg-col-xs-${columns}`,this.lgColClass)}set lgColSm(columns){this.lgColSmClass=this.toggleColumnClass(`lg-col-sm-${columns}`,this.lgColSmClass)}set lgColMd(columns){this.lgColMdClass=this.toggleColumnClass(`lg-col-md-${columns}`,this.lgColMdClass)}set lgColLg(columns){this.lgColLgClass=this.toggleColumnClass(`lg-col-lg-${columns}`,this.lgColLgClass)}set lgColOffset(columns){this.lgColOffsetClass=this.toggleColumnClass(`lg-col-xs-offset-${columns}`,this.lgColOffsetClass)}set lgColSmOffset(columns){this.lgColSmOffsetClass=this.toggleColumnClass(`lg-col-sm-offset-${columns}`,this.lgColSmOffsetClass)}set lgColMdOffset(columns){this.lgColMdOffsetClass=this.toggleColumnClass(`lg-col-md-offset-${columns}`,this.lgColMdOffsetClass)}set lgColLgOffset(columns){this.lgColLgOffsetClass=this.toggleColumnClass(`lg-col-lg-offset-${columns}`,this.lgColLgOffsetClass)}toggleColumnClass(newClass,oldClass){return oldClass&&this.renderer.removeClass(this.hostElement.nativeElement,oldClass),this.renderer.addClass(this.hostElement.nativeElement,newClass),newClass}};LgGridColDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgGridColDirective.propDecorators={lgCol:[{type:core.Input}],lgColSm:[{type:core.Input}],lgColMd:[{type:core.Input}],lgColLg:[{type:core.Input}],lgColOffset:[{type:core.Input}],lgColSmOffset:[{type:core.Input}],lgColMdOffset:[{type:core.Input}],lgColLgOffset:[{type:core.Input}]},LgGridColDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgCol],[lgColSm],[lgColMd],[lgColLg]"})],LgGridColDirective);let LgGridContainerDirective=class LgGridContainerDirective{constructor(){this.class=!0}};LgGridContainerDirective.propDecorators={class:[{type:core.HostBinding,args:["class.lg-container"]}]},LgGridContainerDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgContainer]"})],LgGridContainerDirective);let LgGridRowDirective=class LgGridRowDirective{constructor(){this.class=!0}};LgGridRowDirective.propDecorators={class:[{type:core.HostBinding,args:["class.lg-row"]}]},LgGridRowDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgRow]"})],LgGridRowDirective);let LgGridModule=class LgGridModule{};LgGridModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgGridContainerDirective,LgGridColDirective,LgGridRowDirective],exports:[LgGridContainerDirective,LgGridColDirective,LgGridRowDirective]})],LgGridModule)},"./projects/canopy/src/lib/shadow/shadow.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>LgShadowDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgShadowDirective=class LgShadowDirective{constructor(){this.class=!0}};LgShadowDirective.propDecorators={class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-shadow"]}]},LgShadowDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgShadow]"})],LgShadowDirective)},"./projects/canopy/src/lib/shadow/shadow.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>LgShadowModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_shadow_directive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/shadow/shadow.directive.ts");let LgShadowModule=class LgShadowModule{};LgShadowModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({declarations:[_shadow_directive__WEBPACK_IMPORTED_MODULE_2__.Z],exports:[_shadow_directive__WEBPACK_IMPORTED_MODULE_2__.Z]})],LgShadowModule)},"./projects/canopy/src/lib/spacing/padding/padding.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>LgPaddingModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),spacing_service=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgPaddingDirective=class LgPaddingDirective{constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.paddingTopClasses=[],this.paddingRightClasses=[],this.paddingBottomClasses=[],this.paddingLeftClasses=[],this.paddingClasses=[]}set lgPaddingTop(padding){this.paddingTopClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-top"),this.paddingTopClasses)}set lgPaddingRight(padding){this.paddingRightClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-right"),this.paddingRightClasses)}set lgPaddingBottom(padding){this.paddingBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-bottom"),this.paddingBottomClasses)}set lgPaddingLeft(padding){this.paddingLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-left"),this.paddingLeftClasses)}set lgPaddingHorizontal(padding){this.lgPaddingLeft=padding,this.lgPaddingRight=padding}set lgPaddingVertical(padding){this.lgPaddingTop=padding,this.lgPaddingBottom=padding}set lgPadding(padding){this.paddingClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding"),this.paddingClasses)}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}};LgPaddingDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef},{type:spacing_service.i}],LgPaddingDirective.propDecorators={lgPaddingTop:[{type:core.Input}],lgPaddingRight:[{type:core.Input}],lgPaddingBottom:[{type:core.Input}],lgPaddingLeft:[{type:core.Input}],lgPaddingHorizontal:[{type:core.Input}],lgPaddingVertical:[{type:core.Input}],lgPadding:[{type:core.Input}]},LgPaddingDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"\n    [lgPadding],\n    [lgPaddingVertical],\n    [lgPaddingHorizontal],\n    [lgPaddingTop],\n    [lgPaddingRight],\n    [lgPaddingBottom],\n    [lgPaddingLeft]\n  "})],LgPaddingDirective);let LgPaddingModule=class LgPaddingModule{};LgPaddingModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgPaddingDirective],exports:[LgPaddingDirective]})],LgPaddingModule)},"./projects/canopy/src/lib/spacing/row-gap/row-gap.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>LgRowGapModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LgRowGapDirective=class LgRowGapDirective{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.classPrefix="lg-row-gap--",this.defaultGap="sm",this.lgRowGapClass=`${this.classPrefix}${this.defaultGap}`}set lgRowGap(gap){const newClass=`${this.classPrefix}${gap||this.defaultGap}`;this.lgRowGapClass=this.toggleClass(newClass,this.lgRowGapClass)}toggleClass(newClass,oldClass){return this.renderer.removeClass(this.hostElement.nativeElement,oldClass),this.renderer.addClass(this.hostElement.nativeElement,newClass),newClass}};LgRowGapDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgRowGapDirective.propDecorators={lgRowGap:[{type:core.Input}]},LgRowGapDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgRowGap]"})],LgRowGapDirective);let LgRowGapModule=class LgRowGapModule{};LgRowGapModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[LgRowGapDirective],imports:[common.CommonModule],exports:[LgRowGapDirective]})],LgRowGapModule)},"./projects/canopy/src/lib/spacing/spacing.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>LgSpacingModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_margin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/spacing/margin/margin.module.ts"),_padding__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/spacing/padding/padding.module.ts"),_row_gap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/spacing/row-gap/row-gap.module.ts");let LgSpacingModule=class LgSpacingModule{};LgSpacingModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_margin__WEBPACK_IMPORTED_MODULE_3__.c,_padding__WEBPACK_IMPORTED_MODULE_4__.X,_row_gap__WEBPACK_IMPORTED_MODULE_5__.x],exports:[_margin__WEBPACK_IMPORTED_MODULE_3__.c,_padding__WEBPACK_IMPORTED_MODULE_4__.X,_row_gap__WEBPACK_IMPORTED_MODULE_5__.x]})],LgSpacingModule)},"./projects/canopy/src/lib/variant/variant.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>LgVariantModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgVariantDirective=class LgVariantDirective{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement}set lgVariant(variant){this.variantClass=this.toggleClass(`lg-variant--${variant}`,this.variantClass)}toggleClass(newClass,oldClass){return oldClass&&this.renderer.removeClass(this.hostElement.nativeElement,oldClass),this.renderer.addClass(this.hostElement.nativeElement,newClass),newClass}};LgVariantDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgVariantDirective.propDecorators={lgVariant:[{type:core.Input}]},LgVariantDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgVariant]"})],LgVariantDirective);let LgVariantModule=class LgVariantModule{};LgVariantModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgVariantDirective],exports:[LgVariantDirective]})],LgVariantModule)},"./node_modules/rxjs/dist/esm5/internal/observable/interval.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>interval});var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),_timer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function interval(period,scheduler){return void 0===period&&(period=0),void 0===scheduler&&(scheduler=_scheduler_async__WEBPACK_IMPORTED_MODULE_0__.z),period<0&&(period=0),(0,_timer__WEBPACK_IMPORTED_MODULE_1__.H)(period,period,scheduler)}},"./node_modules/rxjs/dist/esm5/internal/observable/timer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>timer});var Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),isScheduler=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js");function timer(dueTime,intervalOrScheduler,scheduler){void 0===dueTime&&(dueTime=0),void 0===scheduler&&(scheduler=scheduler_async.P);var intervalDuration=-1;return null!=intervalOrScheduler&&((0,isScheduler.K)(intervalOrScheduler)?scheduler=intervalOrScheduler:intervalDuration=intervalOrScheduler),new Observable.y((function(subscriber){var due=function isValidDate(value){return value instanceof Date&&!isNaN(value)}(dueTime)?+dueTime-scheduler.now():dueTime;due<0&&(due=0);var n=0;return scheduler.schedule((function(){subscriber.closed||(subscriber.next(n++),0<=intervalDuration?this.schedule(void 0,intervalDuration):subscriber.complete())}),due)}))}},"./node_modules/rxjs/dist/esm5/internal/scheduler/async.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>async_async,z:()=>asyncScheduler});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),Action=function(_super){function Action(scheduler,work){return _super.call(this)||this}return(0,tslib_es6.ZT)(Action,_super),Action.prototype.schedule=function(state,delay){return void 0===delay&&(delay=0),this},Action}(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js").w0),intervalProvider={setInterval:function(handler,timeout){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];var delegate=intervalProvider.delegate;return(null==delegate?void 0:delegate.setInterval)?delegate.setInterval.apply(delegate,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args))):setInterval.apply(void 0,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args)))},clearInterval:function(handle){var delegate=intervalProvider.delegate;return((null==delegate?void 0:delegate.clearInterval)||clearInterval)(handle)},delegate:void 0},arrRemove=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"),AsyncAction=function(_super){function AsyncAction(scheduler,work){var _this=_super.call(this,scheduler,work)||this;return _this.scheduler=scheduler,_this.work=work,_this.pending=!1,_this}return(0,tslib_es6.ZT)(AsyncAction,_super),AsyncAction.prototype.schedule=function(state,delay){var _a;if(void 0===delay&&(delay=0),this.closed)return this;this.state=state;var id=this.id,scheduler=this.scheduler;return null!=id&&(this.id=this.recycleAsyncId(scheduler,id,delay)),this.pending=!0,this.delay=delay,this.id=null!==(_a=this.id)&&void 0!==_a?_a:this.requestAsyncId(scheduler,this.id,delay),this},AsyncAction.prototype.requestAsyncId=function(scheduler,_id,delay){return void 0===delay&&(delay=0),intervalProvider.setInterval(scheduler.flush.bind(scheduler,this),delay)},AsyncAction.prototype.recycleAsyncId=function(_scheduler,id,delay){if(void 0===delay&&(delay=0),null!=delay&&this.delay===delay&&!1===this.pending)return id;null!=id&&intervalProvider.clearInterval(id)},AsyncAction.prototype.execute=function(state,delay){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var error=this._execute(state,delay);if(error)return error;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},AsyncAction.prototype._execute=function(state,_delay){var errorValue,errored=!1;try{this.work(state)}catch(e){errored=!0,errorValue=e||new Error("Scheduled action threw falsy error")}if(errored)return this.unsubscribe(),errorValue},AsyncAction.prototype.unsubscribe=function(){if(!this.closed){var id=this.id,scheduler=this.scheduler,actions=scheduler.actions;this.work=this.state=this.scheduler=null,this.pending=!1,(0,arrRemove.P)(actions,this),null!=id&&(this.id=this.recycleAsyncId(scheduler,id,null)),this.delay=null,_super.prototype.unsubscribe.call(this)}},AsyncAction}(Action),dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0},Scheduler=function(){function Scheduler(schedulerActionCtor,now){void 0===now&&(now=Scheduler.now),this.schedulerActionCtor=schedulerActionCtor,this.now=now}return Scheduler.prototype.schedule=function(work,delay,state){return void 0===delay&&(delay=0),new this.schedulerActionCtor(this,work).schedule(state,delay)},Scheduler.now=dateTimestampProvider.now,Scheduler}(),asyncScheduler=new(function(_super){function AsyncScheduler(SchedulerAction,now){void 0===now&&(now=Scheduler.now);var _this=_super.call(this,SchedulerAction,now)||this;return _this.actions=[],_this._active=!1,_this}return(0,tslib_es6.ZT)(AsyncScheduler,_super),AsyncScheduler.prototype.flush=function(action){var actions=this.actions;if(this._active)actions.push(action);else{var error;this._active=!0;do{if(error=action.execute(action.state,action.delay))break}while(action=actions.shift());if(this._active=!1,error){for(;action=actions.shift();)action.unsubscribe();throw error}}},AsyncScheduler}(Scheduler))(AsyncAction),async_async=asyncScheduler}}]);