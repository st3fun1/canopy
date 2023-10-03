(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({182:"form-stories",258:"filter-single-stories",265:"checkbox-stories",349:"hide-at-stories",700:"skeleton-stories",748:"hero-img-stories",765:"side-nav-stories",832:"mixins-stories-mdx",1001:"welcome-stories",1125:"forms-design-stories-mdx",1171:"icons-stories",1253:"variant-stories",1325:"input-stories",1510:"date-field-stories",1566:"radio-stories",1751:"heading-stories",1790:"developer-stories-mdx",1837:"blockquote-stories-mdx",2227:"blockquote-stories",2309:"button-group-stories",2332:"promotions-stories",2344:"tabs-stories",2442:"filter-multiple-stories",2478:"card-stories",2492:"pagination-stories",2581:"footer-stories",2652:"layout-grid-and-spacing-stories-mdx",2670:"shadow-stories",2956:"typography-stories-mdx",3169:"kebab-case-stories",3216:"orientation-stories",3386:"header-stories",3394:"primary-message-stories",3635:"checkbox-group-stories",3651:"select-stories",3974:"colours-stories-mdx",3979:"margin-stories",3995:"welcome-stories-mdx",4038:"camel-case-stories",4232:"focus-stories",4740:"filter-container-stories",5161:"button-stories",5225:"breadcrumb-stories",5591:"switch-stories",5700:"guide-stories-mdx",5732:"banner-stories",5817:"separator-stories",6102:"brand-icons-stories",6218:"page-stories",6346:"colours-stories",6459:"modal-stories",6512:"list-with-icons-stories",6796:"feature-toggle-stories",7192:"writing-stories-mdx",7254:"typography-stories",7319:"sort-code-stories",7545:"promo-card-stories",7560:"table-stories",7634:"grid-stories",7726:"utils-stories-mdx",7835:"padding-stories",7864:"data-point-stories",7889:"quick-action-stories",7925:"overview-stories-mdx",8090:"spinner-stories",8340:"tab-nav-bar-stories",8450:"details-stories",8666:"alert-stories",8701:"link-stories",9025:"show-at-stories",9299:"validation-stories",9464:"overview-stories",9552:"segment-stories",9622:"row-gap-stories",9707:"accordion-stories",9736:"hero-stories",9841:"link-menu-stories",9992:"sr-alert-message-stories"}[chunkId]||chunkId)+"."+{109:"0bd294ec",182:"60b60548",258:"3070ee96",265:"dbbd9ba3",349:"e847474f",450:"c3693823",489:"cccab3e3",700:"5931f061",748:"0cdf3bb7",765:"4e73c5ca",832:"6d0d8359",1e3:"e8ea0d4b",1001:"a72bda3b",1125:"25bda51d",1171:"d8fc77ab",1253:"7f72633c",1325:"412a0fd0",1510:"89af70d2",1566:"fff38b5d",1751:"42f80a10",1790:"ec32b6e3",1837:"c5e9b5ea",1986:"fa2a6a39",2171:"9100a3a1",2227:"af102e44",2309:"2f026232",2332:"ae4fc3fa",2344:"475b7e04",2442:"c3612216",2478:"14e91772",2492:"cd2dfd62",2581:"61fb371e",2585:"72d93a92",2652:"34f67c5b",2670:"b8164c1b",2880:"c26c70c1",2956:"7bc43bb8",3169:"e6876dd4",3216:"955604fd",3311:"1f135950",3386:"eaf1c6bc",3394:"3c7d1cc5",3635:"9f0cfac1",3651:"984a3ba3",3723:"4ee0bb3b",3774:"314c9c1c",3974:"ade9e35c",3979:"30febe16",3995:"2cda7935",4038:"a13c5a12",4232:"7f7b2c38",4283:"cc45106e",4740:"e8326d09",4919:"5a1e97a5",5069:"fbd3f78b",5103:"2c9dc7e4",5106:"4e4ad5c7",5161:"18cff7d4",5225:"292db7fa",5368:"5fa7545c",5496:"4f9fe82e",5591:"e5973321",5700:"ff20ed11",5732:"60c3ba93",5817:"263bb462",6102:"d777a0d5",6218:"31ff8954",6308:"ec923f3f",6346:"cf67039e",6371:"2270d339",6459:"dd0463c2",6512:"268d2eeb",6796:"d83efb1e",7100:"4565b9b5",7192:"96ec4f8f",7254:"60224c70",7319:"25d28120",7499:"4847e6e4",7545:"9d2a0e67",7560:"f5199699",7634:"13fd3eeb",7726:"58a8a5d8",7835:"7216b45d",7864:"0bf2e3f1",7889:"7214def0",7925:"dc31583d",8090:"1dd8c056",8340:"cc07ad32",8450:"01529cb6",8630:"1f593f77",8666:"0fa2c38e",8701:"e13a3e7b",9025:"2b2d864f",9075:"e23d5a80",9279:"2de027be",9299:"88f47235",9464:"79064ff8",9552:"98c66444",9568:"ffce341b",9622:"68229e7d",9707:"f6701182",9736:"eae594fa",9769:"ee6449ff",9841:"398aa447",9846:"3ebf71c1",9959:"f6e05d4c",9992:"67fcc8b3"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>{},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@legal-and-general/canopy:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@legal-and-general/canopy:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();