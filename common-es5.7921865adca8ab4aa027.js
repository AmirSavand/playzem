function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{P3Ni:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("SiX8"),i=n("8Y7J"),a=n("H+bZ"),o=function(){var e=function(){function e(t){_classCallCheck(this,e),this.api=t}return _createClass(e,[{key:"like",value:function(e,t){return this.api.like.create({kind:e,like:t})}},{key:"unlike",value:function(e){return this.api.like.delete(e)}},{key:"getLikes",value:function(e){return this.api.like.list({user:e.like,kind:e.kind.toString(),like:e.like.toString()})}},{key:"likeUser",value:function(e){return this.like(r.a.USER,e.toString())}},{key:"likeParty",value:function(e){return this.like(r.a.PARTY,e)}},{key:"likeCategory",value:function(e){return this.like(r.a.CATEGORY,e.toString())}},{key:"likeSong",value:function(e){return this.like(r.a.SONG,e.toString())}}]),e}();return e.ngInjectableDef=i.Qb({factory:function(){return new e(i.Rb(a.a))},token:e,providedIn:"root"}),e}()},SiX8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e[e.USER=1]="USER",e[e.PARTY=2]="PARTY",e[e.CATEGORY=3]="CATEGORY",e[e.SONG=4]="SONG",e}({})},z3RD:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){var e=function(){function e(t){_classCallCheck(this,e),this.name=t}return _createClass(e,[{key:"isCached",value:function(){return Boolean(localStorage.getItem(this.storageKey))}},{key:"clear",value:function(){localStorage.removeItem(this.storageKey)}},{key:"storageKey",get:function(){return e.STORAGE_KEY_PREFIX+this.name}},{key:"data",set:function(t){try{localStorage.setItem(this.storageKey,JSON.stringify(t))}catch(n){e.clear()}},get:function(){if(this.isCached())return JSON.parse(localStorage.getItem(this.storageKey))}}],[{key:"clear",value:function(){for(var t=0,n=0,r=Object.keys(localStorage);n<r.length;n++){var i=r[n];0===i.indexOf(e.STORAGE_KEY_PREFIX)&&(localStorage.removeItem(i),t++)}return t}}]),e}();return e.STORAGE_KEY_PREFIX="cache-",e}()}}]);