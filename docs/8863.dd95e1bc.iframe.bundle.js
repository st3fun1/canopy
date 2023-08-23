/*! For license information please see 8863.dd95e1bc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[8863],{"./node_modules/@angular/router/fesm2020/testing.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z_:()=>RouterTestingModule});var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");function normalizeQueryParams(params){return params&&"?"!==params[0]?"?"+params:params}class SpyLocation{constructor(){this.urlChanges=[],this._history=[new LocationState("","",null)],this._historyIndex=0,this._subject=new core.EventEmitter,this._baseHref="",this._locationStrategy=null,this._urlChangeListeners=[],this._urlChangeSubscription=null}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}setInitialPath(url){this._history[this._historyIndex].path=url}setBaseHref(url){this._baseHref=url}path(){return this._history[this._historyIndex].path}getState(){return this._history[this._historyIndex].state}isCurrentPathEqualTo(path,query=""){const givenPath=path.endsWith("/")?path.substring(0,path.length-1):path;return(this.path().endsWith("/")?this.path().substring(0,this.path().length-1):this.path())==givenPath+(query.length>0?"?"+query:"")}simulateUrlPop(pathname){this._subject.emit({url:pathname,pop:!0,type:"popstate"})}simulateHashChange(pathname){const path=this.prepareExternalUrl(pathname);this.pushHistory(path,"",null),this.urlChanges.push("hash: "+pathname),this._subject.emit({url:pathname,pop:!0,type:"popstate"}),this._subject.emit({url:pathname,pop:!0,type:"hashchange"})}prepareExternalUrl(url){return url.length>0&&!url.startsWith("/")&&(url="/"+url),this._baseHref+url}go(path,query="",state=null){path=this.prepareExternalUrl(path),this.pushHistory(path,query,state);const locationState=this._history[this._historyIndex-1];if(locationState.path==path&&locationState.query==query)return;const url=path+(query.length>0?"?"+query:"");this.urlChanges.push(url),this._notifyUrlChangeListeners(path+normalizeQueryParams(query),state)}replaceState(path,query="",state=null){path=this.prepareExternalUrl(path);const history=this._history[this._historyIndex];if(history.path==path&&history.query==query)return;history.path=path,history.query=query,history.state=state;const url=path+(query.length>0?"?"+query:"");this.urlChanges.push("replace: "+url),this._notifyUrlChangeListeners(path+normalizeQueryParams(query),state)}forward(){this._historyIndex<this._history.length-1&&(this._historyIndex++,this._subject.emit({url:this.path(),state:this.getState(),pop:!0,type:"popstate"}))}back(){this._historyIndex>0&&(this._historyIndex--,this._subject.emit({url:this.path(),state:this.getState(),pop:!0,type:"popstate"}))}historyGo(relativePosition=0){const nextPageIndex=this._historyIndex+relativePosition;nextPageIndex>=0&&nextPageIndex<this._history.length&&(this._historyIndex=nextPageIndex,this._subject.emit({url:this.path(),state:this.getState(),pop:!0,type:"popstate"}))}onUrlChange(fn){return this._urlChangeListeners.push(fn),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe((v=>{this._notifyUrlChangeListeners(v.url,v.state)}))),()=>{const fnIndex=this._urlChangeListeners.indexOf(fn);this._urlChangeListeners.splice(fnIndex,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(url="",state){this._urlChangeListeners.forEach((fn=>fn(url,state)))}subscribe(onNext,onThrow,onReturn){return this._subject.subscribe({next:onNext,error:onThrow,complete:onReturn})}normalize(url){return null}pushHistory(path,query,state){this._historyIndex>0&&this._history.splice(this._historyIndex+1),this._history.push(new LocationState(path,query,state)),this._historyIndex=this._history.length-1}}SpyLocation.ɵfac=function SpyLocation_Factory(t){return new(t||SpyLocation)},SpyLocation.ɵprov=core["ɵɵdefineInjectable"]({token:SpyLocation,factory:SpyLocation.ɵfac}),("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](SpyLocation,[{type:core.Injectable}],null,null);class LocationState{constructor(path,query,state){this.path=path,this.query=query,this.state=state}}class MockLocationStrategy extends common.LocationStrategy{constructor(){super(),this.internalBaseHref="/",this.internalPath="/",this.internalTitle="",this.urlChanges=[],this._subject=new core.EventEmitter,this.stateChanges=[]}simulatePopState(url){this.internalPath=url,this._subject.emit(new _MockPopStateEvent(this.path()))}path(includeHash=!1){return this.internalPath}prepareExternalUrl(internal){return internal.startsWith("/")&&this.internalBaseHref.endsWith("/")?this.internalBaseHref+internal.substring(1):this.internalBaseHref+internal}pushState(ctx,title,path,query){this.stateChanges.push(ctx),this.internalTitle=title;const url=path+(query.length>0?"?"+query:"");this.internalPath=url;const externalUrl=this.prepareExternalUrl(url);this.urlChanges.push(externalUrl)}replaceState(ctx,title,path,query){this.stateChanges[(this.stateChanges.length||1)-1]=ctx,this.internalTitle=title;const url=path+(query.length>0?"?"+query:"");this.internalPath=url;const externalUrl=this.prepareExternalUrl(url);this.urlChanges.push("replace: "+externalUrl)}onPopState(fn){this._subject.subscribe({next:fn})}getBaseHref(){return this.internalBaseHref}back(){if(this.urlChanges.length>0){this.urlChanges.pop(),this.stateChanges.pop();const nextUrl=this.urlChanges.length>0?this.urlChanges[this.urlChanges.length-1]:"";this.simulatePopState(nextUrl)}}forward(){throw"not implemented"}getState(){return this.stateChanges[(this.stateChanges.length||1)-1]}}MockLocationStrategy.ɵfac=function MockLocationStrategy_Factory(t){return new(t||MockLocationStrategy)},MockLocationStrategy.ɵprov=core["ɵɵdefineInjectable"]({token:MockLocationStrategy,factory:MockLocationStrategy.ɵfac}),("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](MockLocationStrategy,[{type:core.Injectable}],(function(){return[]}),null);class _MockPopStateEvent{constructor(newUrl){this.newUrl=newUrl,this.pop=!0,this.type="popstate"}}const urlParse=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;function parseUrl(urlStr,baseHref){let serverBase,parsedUrl;/^((http[s]?|ftp):\/\/)/.test(urlStr)||(serverBase="http://empty.com/");try{parsedUrl=new URL(urlStr,serverBase)}catch(e){const result=urlParse.exec(serverBase||""+urlStr);if(!result)throw new Error(`Invalid URL: ${urlStr} with base: ${baseHref}`);const hostSplit=result[4].split(":");parsedUrl={protocol:result[1],hostname:hostSplit[0],port:hostSplit[1]||"",pathname:result[5],search:result[6],hash:result[8]}}return parsedUrl.pathname&&0===parsedUrl.pathname.indexOf(baseHref)&&(parsedUrl.pathname=parsedUrl.pathname.substring(baseHref.length)),{hostname:!serverBase&&parsedUrl.hostname||"",protocol:!serverBase&&parsedUrl.protocol||"",port:!serverBase&&parsedUrl.port||"",pathname:parsedUrl.pathname||"/",search:parsedUrl.search||"",hash:parsedUrl.hash||""}}const MOCK_PLATFORM_LOCATION_CONFIG=new core.InjectionToken("MOCK_PLATFORM_LOCATION_CONFIG");class MockPlatformLocation{constructor(config){if(this.baseHref="",this.hashUpdate=new Subject.x,this.urlChangeIndex=0,this.urlChanges=[{hostname:"",protocol:"",port:"",pathname:"/",search:"",hash:"",state:null}],config){this.baseHref=config.appBaseHref||"";const parsedChanges=this.parseChanges(null,config.startUrl||"http://_empty_/",this.baseHref);this.urlChanges[0]={...parsedChanges}}}get hostname(){return this.urlChanges[this.urlChangeIndex].hostname}get protocol(){return this.urlChanges[this.urlChangeIndex].protocol}get port(){return this.urlChanges[this.urlChangeIndex].port}get pathname(){return this.urlChanges[this.urlChangeIndex].pathname}get search(){return this.urlChanges[this.urlChangeIndex].search}get hash(){return this.urlChanges[this.urlChangeIndex].hash}get state(){return this.urlChanges[this.urlChangeIndex].state}getBaseHrefFromDOM(){return this.baseHref}onPopState(fn){return()=>{}}onHashChange(fn){const subscription=this.hashUpdate.subscribe(fn);return()=>subscription.unsubscribe()}get href(){let url=`${this.protocol}//${this.hostname}${this.port?":"+this.port:""}`;return url+=`${"/"===this.pathname?"":this.pathname}${this.search}${this.hash}`,url}get url(){return`${this.pathname}${this.search}${this.hash}`}parseChanges(state,url,baseHref=""){return state=JSON.parse(JSON.stringify(state)),{...parseUrl(url,baseHref),state}}replaceState(state,title,newUrl){const{pathname,search,state:parsedState,hash}=this.parseChanges(state,newUrl);this.urlChanges[this.urlChangeIndex]={...this.urlChanges[this.urlChangeIndex],pathname,search,hash,state:parsedState}}pushState(state,title,newUrl){const{pathname,search,state:parsedState,hash}=this.parseChanges(state,newUrl);this.urlChangeIndex>0&&this.urlChanges.splice(this.urlChangeIndex+1),this.urlChanges.push({...this.urlChanges[this.urlChangeIndex],pathname,search,hash,state:parsedState}),this.urlChangeIndex=this.urlChanges.length-1}forward(){const oldUrl=this.url,oldHash=this.hash;this.urlChangeIndex<this.urlChanges.length&&this.urlChangeIndex++,this.scheduleHashUpdate(oldHash,oldUrl)}back(){const oldUrl=this.url,oldHash=this.hash;this.urlChangeIndex>0&&this.urlChangeIndex--,this.scheduleHashUpdate(oldHash,oldUrl)}historyGo(relativePosition=0){const oldUrl=this.url,oldHash=this.hash,nextPageIndex=this.urlChangeIndex+relativePosition;nextPageIndex>=0&&nextPageIndex<this.urlChanges.length&&(this.urlChangeIndex=nextPageIndex),this.scheduleHashUpdate(oldHash,oldUrl)}getState(){return this.state}scheduleHashUpdate(oldHash,oldUrl){oldHash!==this.hash&&function scheduleMicroTask(cb){Promise.resolve().then(cb)}((()=>this.hashUpdate.next({type:"hashchange",state:null,oldUrl,newUrl:this.url})))}}MockPlatformLocation.ɵfac=function MockPlatformLocation_Factory(t){return new(t||MockPlatformLocation)(core["ɵɵinject"](MOCK_PLATFORM_LOCATION_CONFIG,8))},MockPlatformLocation.ɵprov=core["ɵɵdefineInjectable"]({token:MockPlatformLocation,factory:MockPlatformLocation.ɵfac}),("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](MockPlatformLocation,[{type:core.Injectable}],(function(){return[{type:void 0,decorators:[{type:core.Inject,args:[MOCK_PLATFORM_LOCATION_CONFIG]},{type:core.Optional}]}]}),null);var fesm2020_router=__webpack_require__("./node_modules/@angular/router/fesm2020/router.mjs");const EXTRA_ROUTER_TESTING_PROVIDERS=[];function setupTestingRouterInternal(urlSerializer,contexts,location,compiler,injector,routes,titleStrategy,opts,urlHandlingStrategy,routeReuseStrategy){return function setupTestingRouter(urlSerializer,contexts,location,compiler,injector,routes,opts,urlHandlingStrategy,routeReuseStrategy,titleStrategy){const router=new fesm2020_router.F0(null,urlSerializer,contexts,location,injector,compiler,(0,fesm2020_router.kZ)(routes));opts&&(!function isUrlHandlingStrategy(opts){return"shouldProcessUrl"in opts}(opts)?(0,fesm2020_router.Hw)(opts,router):router.urlHandlingStrategy=opts);urlHandlingStrategy&&(router.urlHandlingStrategy=urlHandlingStrategy);routeReuseStrategy&&(router.routeReuseStrategy=routeReuseStrategy);return router.titleStrategy=titleStrategy,router}(urlSerializer,contexts,location,compiler,injector,routes,opts,urlHandlingStrategy,routeReuseStrategy,titleStrategy)}class RouterTestingModule{static withRoutes(routes,config){return{ngModule:RouterTestingModule,providers:[(0,fesm2020_router.co)(routes),{provide:fesm2020_router.cx,useValue:config||{}}]}}}RouterTestingModule.ɵfac=function RouterTestingModule_Factory(t){return new(t||RouterTestingModule)},RouterTestingModule.ɵmod=core["ɵɵdefineNgModule"]({type:RouterTestingModule,exports:[fesm2020_router.Bz]}),RouterTestingModule.ɵinj=core["ɵɵdefineInjector"]({providers:[fesm2020_router.Kx,EXTRA_ROUTER_TESTING_PROVIDERS,{provide:common.Location,useClass:SpyLocation},{provide:common.LocationStrategy,useClass:MockLocationStrategy},{provide:fesm2020_router.F0,useFactory:setupTestingRouterInternal,deps:[fesm2020_router.Hx,fesm2020_router.y6,common.Location,core.Compiler,core.Injector,fesm2020_router.Z6,fesm2020_router.eV,fesm2020_router.cx,[fesm2020_router.oI,new core.Optional],[fesm2020_router.wN,new core.Optional]]},(0,fesm2020_router.HJ)(fesm2020_router.GZ).ɵproviders,(0,fesm2020_router.co)([])],imports:[fesm2020_router.Bz]}),("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](RouterTestingModule,[{type:core.NgModule,args:[{exports:[fesm2020_router.Bz],providers:[fesm2020_router.Kx,EXTRA_ROUTER_TESTING_PROVIDERS,{provide:common.Location,useClass:SpyLocation},{provide:common.LocationStrategy,useClass:MockLocationStrategy},{provide:fesm2020_router.F0,useFactory:setupTestingRouterInternal,deps:[fesm2020_router.Hx,fesm2020_router.y6,common.Location,core.Compiler,core.Injector,fesm2020_router.Z6,fesm2020_router.eV,fesm2020_router.cx,[fesm2020_router.oI,new core.Optional],[fesm2020_router.wN,new core.Optional]]},(0,fesm2020_router.HJ)(fesm2020_router.GZ).ɵproviders,(0,fesm2020_router.co)([])]}]}],null,null)},"./node_modules/rxjs/dist/esm5/internal/observable/interval.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>interval});var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),_timer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function interval(period,scheduler){return void 0===period&&(period=0),void 0===scheduler&&(scheduler=_scheduler_async__WEBPACK_IMPORTED_MODULE_0__.z),period<0&&(period=0),(0,_timer__WEBPACK_IMPORTED_MODULE_1__.H)(period,period,scheduler)}},"./node_modules/rxjs/dist/esm5/internal/observable/timer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>timer});var Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),isScheduler=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js");function timer(dueTime,intervalOrScheduler,scheduler){void 0===dueTime&&(dueTime=0),void 0===scheduler&&(scheduler=scheduler_async.P);var intervalDuration=-1;return null!=intervalOrScheduler&&((0,isScheduler.K)(intervalOrScheduler)?scheduler=intervalOrScheduler:intervalDuration=intervalOrScheduler),new Observable.y((function(subscriber){var due=function isValidDate(value){return value instanceof Date&&!isNaN(value)}(dueTime)?+dueTime-scheduler.now():dueTime;due<0&&(due=0);var n=0;return scheduler.schedule((function(){subscriber.closed||(subscriber.next(n++),0<=intervalDuration?this.schedule(void 0,intervalDuration):subscriber.complete())}),due)}))}},"./node_modules/rxjs/dist/esm5/internal/scheduler/async.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>async_async,z:()=>asyncScheduler});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),Action=function(_super){function Action(scheduler,work){return _super.call(this)||this}return(0,tslib_es6.ZT)(Action,_super),Action.prototype.schedule=function(state,delay){return void 0===delay&&(delay=0),this},Action}(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js").w0),intervalProvider={setInterval:function(handler,timeout){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];var delegate=intervalProvider.delegate;return(null==delegate?void 0:delegate.setInterval)?delegate.setInterval.apply(delegate,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args))):setInterval.apply(void 0,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args)))},clearInterval:function(handle){var delegate=intervalProvider.delegate;return((null==delegate?void 0:delegate.clearInterval)||clearInterval)(handle)},delegate:void 0},arrRemove=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"),AsyncAction=function(_super){function AsyncAction(scheduler,work){var _this=_super.call(this,scheduler,work)||this;return _this.scheduler=scheduler,_this.work=work,_this.pending=!1,_this}return(0,tslib_es6.ZT)(AsyncAction,_super),AsyncAction.prototype.schedule=function(state,delay){var _a;if(void 0===delay&&(delay=0),this.closed)return this;this.state=state;var id=this.id,scheduler=this.scheduler;return null!=id&&(this.id=this.recycleAsyncId(scheduler,id,delay)),this.pending=!0,this.delay=delay,this.id=null!==(_a=this.id)&&void 0!==_a?_a:this.requestAsyncId(scheduler,this.id,delay),this},AsyncAction.prototype.requestAsyncId=function(scheduler,_id,delay){return void 0===delay&&(delay=0),intervalProvider.setInterval(scheduler.flush.bind(scheduler,this),delay)},AsyncAction.prototype.recycleAsyncId=function(_scheduler,id,delay){if(void 0===delay&&(delay=0),null!=delay&&this.delay===delay&&!1===this.pending)return id;null!=id&&intervalProvider.clearInterval(id)},AsyncAction.prototype.execute=function(state,delay){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var error=this._execute(state,delay);if(error)return error;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},AsyncAction.prototype._execute=function(state,_delay){var errorValue,errored=!1;try{this.work(state)}catch(e){errored=!0,errorValue=e||new Error("Scheduled action threw falsy error")}if(errored)return this.unsubscribe(),errorValue},AsyncAction.prototype.unsubscribe=function(){if(!this.closed){var id=this.id,scheduler=this.scheduler,actions=scheduler.actions;this.work=this.state=this.scheduler=null,this.pending=!1,(0,arrRemove.P)(actions,this),null!=id&&(this.id=this.recycleAsyncId(scheduler,id,null)),this.delay=null,_super.prototype.unsubscribe.call(this)}},AsyncAction}(Action),dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0},Scheduler=function(){function Scheduler(schedulerActionCtor,now){void 0===now&&(now=Scheduler.now),this.schedulerActionCtor=schedulerActionCtor,this.now=now}return Scheduler.prototype.schedule=function(work,delay,state){return void 0===delay&&(delay=0),new this.schedulerActionCtor(this,work).schedule(state,delay)},Scheduler.now=dateTimestampProvider.now,Scheduler}(),asyncScheduler=new(function(_super){function AsyncScheduler(SchedulerAction,now){void 0===now&&(now=Scheduler.now);var _this=_super.call(this,SchedulerAction,now)||this;return _this.actions=[],_this._active=!1,_this}return(0,tslib_es6.ZT)(AsyncScheduler,_super),AsyncScheduler.prototype.flush=function(action){var actions=this.actions;if(this._active)actions.push(action);else{var error;this._active=!0;do{if(error=action.execute(action.state,action.delay))break}while(action=actions.shift());if(this._active=!1,error){for(;action=actions.shift();)action.unsubscribe();throw error}}},AsyncScheduler}(Scheduler))(AsyncAction),async_async=asyncScheduler}}]);