(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ie={},Br=[],jt=()=>{},Gf=()=>!1,Lo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fc=n=>n.startsWith("onUpdate:"),rt=Object.assign,Uc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Gm=Object.prototype.hasOwnProperty,_e=(n,e)=>Gm.call(n,e),re=Array.isArray,jr=n=>Fo(n)==="[object Map]",Qf=n=>Fo(n)==="[object Set]",ie=n=>typeof n=="function",Me=n=>typeof n=="string",Gn=n=>typeof n=="symbol",Pe=n=>n!==null&&typeof n=="object",Jf=n=>(Pe(n)||ie(n))&&ie(n.then)&&ie(n.catch),Yf=Object.prototype.toString,Fo=n=>Yf.call(n),Qm=n=>Fo(n).slice(8,-1),Xf=n=>Fo(n)==="[object Object]",Bc=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Bs=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jm=/-\w/g,Fn=Uo(n=>n.replace(Jm,e=>e.slice(1).toUpperCase())),Ym=/\B([A-Z])/g,Qn=Uo(n=>n.replace(Ym,"-$1").toLowerCase()),Zf=Uo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sa=Uo(n=>n?`on${Zf(n)}`:""),Dn=(n,e)=>!Object.is(n,e),Ji=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ed=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},jc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Uu;const Bo=()=>Uu||(Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $c(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Me(r)?t_(r):$c(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Me(n)||Pe(n))return n}const Xm=/;(?![^(]*\))/g,Zm=/:([^]+)/,e_=/\/\*[^]*?\*\//g;function t_(n){const e={};return n.replace(e_,"").split(Xm).forEach(t=>{if(t){const r=t.split(Zm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function jo(n){let e="";if(Me(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=jo(n[t]);r&&(e+=r+" ")}else if(Pe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const n_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",r_=Lc(n_);function td(n){return!!n||n===""}const nd=n=>!!(n&&n.__v_isRef===!0),Rt=n=>Me(n)?n:n==null?"":re(n)||Pe(n)&&(n.toString===Yf||!ie(n.toString))?nd(n)?Rt(n.value):JSON.stringify(n,rd,2):String(n),rd=(n,e)=>nd(e)?rd(n,e.value):jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[ba(r,i)+" =>"]=s,t),{})}:Qf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ba(t))}:Gn(e)?ba(e):Pe(e)&&!re(e)&&!Xf(e)?String(e):e,ba=(n,e="")=>{var t;return Gn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lt;class s_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=lt,!e&&lt&&(this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=lt;try{return lt=this,e()}finally{lt=t}}}on(){++this._on===1&&(this.prevScope=lt,lt=this)}off(){this._on>0&&--this._on===0&&(lt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function i_(){return lt}let ve;const Pa=new WeakSet;class sd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,lt&&lt.active&&lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pa.has(this)&&(Pa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||od(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bu(this),ad(this);const e=ve,t=bt;ve=this,bt=!0;try{return this.fn()}finally{cd(this),ve=e,bt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wc(e);this.deps=this.depsTail=void 0,Bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ja(this)&&this.run()}get dirty(){return Ja(this)}}let id=0,js,$s;function od(n,e=!1){if(n.flags|=8,e){n.next=$s,$s=n;return}n.next=js,js=n}function qc(){id++}function Hc(){if(--id>0)return;if($s){let e=$s;for($s=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;js;){let e=js;for(js=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function ad(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Wc(r),o_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Ja(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ld(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Xs)||(n.globalVersion=Xs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ja(n))))return;n.flags|=2;const e=n.dep,t=ve,r=bt;ve=n,bt=!0;try{ad(n);const s=n.fn(n._value);(e.version===0||Dn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ve=t,bt=r,cd(n),n.flags&=-3}}function Wc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Wc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function o_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let bt=!0;const ud=[];function ln(){ud.push(bt),bt=!1}function un(){const n=ud.pop();bt=n===void 0?!0:n}function Bu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ve;ve=void 0;try{e()}finally{ve=t}}}let Xs=0;class a_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ve||!bt||ve===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ve)t=this.activeLink=new a_(ve,this),ve.deps?(t.prevDep=ve.depsTail,ve.depsTail.nextDep=t,ve.depsTail=t):ve.deps=ve.depsTail=t,hd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ve.depsTail,t.nextDep=void 0,ve.depsTail.nextDep=t,ve.depsTail=t,ve.deps===t&&(ve.deps=r)}return t}trigger(e){this.version++,Xs++,this.notify(e)}notify(e){qc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Hc()}}}function hd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)hd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ya=new WeakMap,dr=Symbol(""),Xa=Symbol(""),Zs=Symbol("");function et(n,e,t){if(bt&&ve){let r=Ya.get(n);r||Ya.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Kc),s.map=r,s.key=t),s.track()}}function en(n,e,t,r,s,i){const a=Ya.get(n);if(!a){Xs++;return}const c=l=>{l&&l.trigger()};if(qc(),e==="clear")a.forEach(c);else{const l=re(n),h=l&&Bc(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,_)=>{(_==="length"||_===Zs||!Gn(_)&&_>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(Zs)),e){case"add":l?h&&c(a.get("length")):(c(a.get(dr)),jr(n)&&c(a.get(Xa)));break;case"delete":l||(c(a.get(dr)),jr(n)&&c(a.get(Xa)));break;case"set":jr(n)&&c(a.get(dr));break}}Hc()}function kr(n){const e=me(n);return e===n?e:(et(e,"iterate",Zs),wt(n)?e:e.map(ze))}function $o(n){return et(n=me(n),"iterate",Zs),n}const c_={__proto__:null,[Symbol.iterator](){return Ca(this,Symbol.iterator,ze)},concat(...n){return kr(this).concat(...n.map(e=>re(e)?kr(e):e))},entries(){return Ca(this,"entries",n=>(n[1]=ze(n[1]),n))},every(n,e){return Yt(this,"every",n,e,void 0,arguments)},filter(n,e){return Yt(this,"filter",n,e,t=>t.map(ze),arguments)},find(n,e){return Yt(this,"find",n,e,ze,arguments)},findIndex(n,e){return Yt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Yt(this,"findLast",n,e,ze,arguments)},findLastIndex(n,e){return Yt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Yt(this,"forEach",n,e,void 0,arguments)},includes(...n){return Va(this,"includes",n)},indexOf(...n){return Va(this,"indexOf",n)},join(n){return kr(this).join(n)},lastIndexOf(...n){return Va(this,"lastIndexOf",n)},map(n,e){return Yt(this,"map",n,e,void 0,arguments)},pop(){return Vs(this,"pop")},push(...n){return Vs(this,"push",n)},reduce(n,...e){return ju(this,"reduce",n,e)},reduceRight(n,...e){return ju(this,"reduceRight",n,e)},shift(){return Vs(this,"shift")},some(n,e){return Yt(this,"some",n,e,void 0,arguments)},splice(...n){return Vs(this,"splice",n)},toReversed(){return kr(this).toReversed()},toSorted(n){return kr(this).toSorted(n)},toSpliced(...n){return kr(this).toSpliced(...n)},unshift(...n){return Vs(this,"unshift",n)},values(){return Ca(this,"values",ze)}};function Ca(n,e,t){const r=$o(n),s=r[e]();return r!==n&&!wt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const l_=Array.prototype;function Yt(n,e,t,r,s,i){const a=$o(n),c=a!==n&&!wt(n),l=a[e];if(l!==l_[e]){const p=l.apply(n,i);return c?ze(p):p}let h=t;a!==n&&(c?h=function(p,_){return t.call(this,ze(p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function ju(n,e,t,r){const s=$o(n);let i=t;return s!==n&&(wt(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,ze(c),l,n)}),s[e](i,...r)}function Va(n,e,t){const r=me(n);et(r,"iterate",Zs);const s=r[e](...t);return(s===-1||s===!1)&&Jc(t[0])?(t[0]=me(t[0]),r[e](...t)):s}function Vs(n,e,t=[]){ln(),qc();const r=me(n)[e].apply(n,t);return Hc(),un(),r}const u_=Lc("__proto__,__v_isRef,__isVue"),fd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Gn));function h_(n){Gn(n)||(n=String(n));const e=me(this);return et(e,"has",n),e.hasOwnProperty(n)}class dd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?I_:_d:i?md:gd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=c_[t]))return l;if(t==="hasOwnProperty")return h_}const c=Reflect.get(e,t,nt(e)?e:r);if((Gn(t)?fd.has(t):u_(t))||(s||et(e,"get",t),i))return c;if(nt(c)){const l=a&&Bc(t)?c:c.value;return s&&Pe(l)?ec(l):l}return Pe(c)?s?ec(c):Gc(c):c}}class pd extends dd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=Un(i);if(!wt(r)&&!Un(r)&&(i=me(i),r=me(r)),!re(e)&&nt(i)&&!nt(r))return l||(i.value=r),!0}const a=re(e)&&Bc(t)?Number(t)<e.length:_e(e,t),c=Reflect.set(e,t,r,nt(e)?e:s);return e===me(s)&&(a?Dn(r,i)&&en(e,"set",t,r):en(e,"add",t,r)),c}deleteProperty(e,t){const r=_e(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&en(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Gn(t)||!fd.has(t))&&et(e,"has",t),r}ownKeys(e){return et(e,"iterate",re(e)?"length":dr),Reflect.ownKeys(e)}}class f_ extends dd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const d_=new pd,p_=new f_,g_=new pd(!0);const Za=n=>n,Bi=n=>Reflect.getPrototypeOf(n);function m_(n,e,t){return function(...r){const s=this.__v_raw,i=me(s),a=jr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?Za:e?uo:ze;return!e&&et(i,"iterate",l?Xa:dr),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function ji(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function __(n,e){const t={get(s){const i=this.__v_raw,a=me(i),c=me(s);n||(Dn(s,c)&&et(a,"get",s),et(a,"get",c));const{has:l}=Bi(a),h=e?Za:n?uo:ze;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&et(me(s),"iterate",dr),s.size},has(s){const i=this.__v_raw,a=me(i),c=me(s);return n||(Dn(s,c)&&et(a,"has",s),et(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=me(c),h=e?Za:n?uo:ze;return!n&&et(l,"iterate",dr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return rt(t,n?{add:ji("add"),set:ji("set"),delete:ji("delete"),clear:ji("clear")}:{add(s){!e&&!wt(s)&&!Un(s)&&(s=me(s));const i=me(this);return Bi(i).has.call(i,s)||(i.add(s),en(i,"add",s,s)),this},set(s,i){!e&&!wt(i)&&!Un(i)&&(i=me(i));const a=me(this),{has:c,get:l}=Bi(a);let h=c.call(a,s);h||(s=me(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?Dn(i,d)&&en(a,"set",s,i):en(a,"add",s,i),this},delete(s){const i=me(this),{has:a,get:c}=Bi(i);let l=a.call(i,s);l||(s=me(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&en(i,"delete",s,void 0),h},clear(){const s=me(this),i=s.size!==0,a=s.clear();return i&&en(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=m_(s,n,e)}),t}function zc(n,e){const t=__(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(_e(t,s)&&s in r?t:r,s,i)}const y_={get:zc(!1,!1)},E_={get:zc(!1,!0)},T_={get:zc(!0,!1)};const gd=new WeakMap,md=new WeakMap,_d=new WeakMap,I_=new WeakMap;function v_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w_(n){return n.__v_skip||!Object.isExtensible(n)?0:v_(Qm(n))}function Gc(n){return Un(n)?n:Qc(n,!1,d_,y_,gd)}function A_(n){return Qc(n,!1,g_,E_,md)}function ec(n){return Qc(n,!0,p_,T_,_d)}function Qc(n,e,t,r,s){if(!Pe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=w_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function $r(n){return Un(n)?$r(n.__v_raw):!!(n&&n.__v_isReactive)}function Un(n){return!!(n&&n.__v_isReadonly)}function wt(n){return!!(n&&n.__v_isShallow)}function Jc(n){return n?!!n.__v_raw:!1}function me(n){const e=n&&n.__v_raw;return e?me(e):n}function R_(n){return!_e(n,"__v_skip")&&Object.isExtensible(n)&&ed(n,"__v_skip",!0),n}const ze=n=>Pe(n)?Gc(n):n,uo=n=>Pe(n)?ec(n):n;function nt(n){return n?n.__v_isRef===!0:!1}function tn(n){return S_(n,!1)}function S_(n,e){return nt(n)?n:new b_(n,e)}class b_{constructor(e,t){this.dep=new Kc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:me(e),this._value=t?e:ze(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||wt(e)||Un(e);e=r?e:me(e),Dn(e,t)&&(this._rawValue=e,this._value=r?e:ze(e),this.dep.trigger())}}function P_(n){return nt(n)?n.value:n}const C_={get:(n,e,t)=>e==="__v_raw"?n:P_(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return nt(s)&&!nt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function yd(n){return $r(n)?n:new Proxy(n,C_)}class V_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Kc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return od(this,!0),!0}get value(){const e=this.dep.track();return ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function D_(n,e,t=!1){let r,s;return ie(n)?r=n:(r=n.get,s=n.set),new V_(r,s,t)}const $i={},ho=new WeakMap;let lr;function k_(n,e=!1,t=lr){if(t){let r=ho.get(t);r||ho.set(t,r=[]),r.push(n)}}function N_(n,e,t=Ie){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=z=>s?z:wt(z)||s===!1||s===0?nn(z,1):nn(z);let d,p,_,R,V=!1,M=!1;if(nt(n)?(p=()=>n.value,V=wt(n)):$r(n)?(p=()=>h(n),V=!0):re(n)?(M=!0,V=n.some(z=>$r(z)||wt(z)),p=()=>n.map(z=>{if(nt(z))return z.value;if($r(z))return h(z);if(ie(z))return l?l(z,2):z()})):ie(n)?e?p=l?()=>l(n,2):n:p=()=>{if(_){ln();try{_()}finally{un()}}const z=lr;lr=d;try{return l?l(n,3,[R]):n(R)}finally{lr=z}}:p=jt,e&&s){const z=p,ue=s===!0?1/0:s;p=()=>nn(z(),ue)}const B=i_(),K=()=>{d.stop(),B&&B.active&&Uc(B.effects,d)};if(i&&e){const z=e;e=(...ue)=>{z(...ue),K()}}let G=M?new Array(n.length).fill($i):$i;const te=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ue=d.run();if(s||V||(M?ue.some((Ae,v)=>Dn(Ae,G[v])):Dn(ue,G))){_&&_();const Ae=lr;lr=d;try{const v=[ue,G===$i?void 0:M&&G[0]===$i?[]:G,R];G=ue,l?l(e,3,v):e(...v)}finally{lr=Ae}}}else d.run()};return c&&c(te),d=new sd(p),d.scheduler=a?()=>a(te,!1):te,R=z=>k_(z,!1,d),_=d.onStop=()=>{const z=ho.get(d);if(z){if(l)l(z,4);else for(const ue of z)ue();ho.delete(d)}},e?r?te(!0):G=d.run():a?a(te.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function nn(n,e=1/0,t){if(e<=0||!Pe(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,nt(n))nn(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)nn(n[r],e,t);else if(Qf(n)||jr(n))n.forEach(r=>{nn(r,e,t)});else if(Xf(n)){for(const r in n)nn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&nn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pi(n,e,t,r){try{return r?n(...r):n()}catch(s){qo(s,e,t)}}function zt(n,e,t,r){if(ie(n)){const s=pi(n,e,t,r);return s&&Jf(s)&&s.catch(i=>{qo(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(zt(n[i],e,t,r));return s}}function qo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){ln(),pi(i,null,10,[n,l,h]),un();return}}O_(n,t,s,r,a)}function O_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const at=[];let Lt=-1;const qr=[];let Rn=null,Nr=0;const Ed=Promise.resolve();let fo=null;function x_(n){const e=fo||Ed;return n?e.then(this?n.bind(this):n):e}function M_(n){let e=Lt+1,t=at.length;for(;e<t;){const r=e+t>>>1,s=at[r],i=ei(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Yc(n){if(!(n.flags&1)){const e=ei(n),t=at[at.length-1];!t||!(n.flags&2)&&e>=ei(t)?at.push(n):at.splice(M_(e),0,n),n.flags|=1,Td()}}function Td(){fo||(fo=Ed.then(vd))}function L_(n){re(n)?qr.push(...n):Rn&&n.id===-1?Rn.splice(Nr+1,0,n):n.flags&1||(qr.push(n),n.flags|=1),Td()}function $u(n,e,t=Lt+1){for(;t<at.length;t++){const r=at[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;at.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Id(n){if(qr.length){const e=[...new Set(qr)].sort((t,r)=>ei(t)-ei(r));if(qr.length=0,Rn){Rn.push(...e);return}for(Rn=e,Nr=0;Nr<Rn.length;Nr++){const t=Rn[Nr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Rn=null,Nr=0}}const ei=n=>n.id==null?n.flags&2?-1:1/0:n.id;function vd(n){try{for(Lt=0;Lt<at.length;Lt++){const e=at[Lt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Lt<at.length;Lt++){const e=at[Lt];e&&(e.flags&=-2)}Lt=-1,at.length=0,Id(),fo=null,(at.length||qr.length)&&vd()}}let vt=null,wd=null;function po(n){const e=vt;return vt=n,wd=n&&n.type.__scopeId||null,e}function F_(n,e=vt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Xu(-1);const i=po(e);let a;try{a=n(...s)}finally{po(i),r._d&&Xu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function tc(n,e){if(vt===null)return n;const t=zo(vt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ie]=e[s];i&&(ie(i)&&(i={mounted:i,updated:i}),i.deep&&nn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function ar(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(ln(),zt(l,t,8,[n.el,c,n,e]),un())}}const U_=Symbol("_vte"),B_=n=>n.__isTeleport,j_=Symbol("_leaveCb");function Xc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Xc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ad(n,e){return ie(n)?rt({name:n.name},e,{setup:n}):n}function Rd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const go=new WeakMap;function qs(n,e,t,r,s=!1){if(re(n)){n.forEach((V,M)=>qs(V,e&&(re(e)?e[M]:e),t,r,s));return}if(Hs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&qs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?zo(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===Ie?c.refs={}:c.refs,p=c.setupState,_=me(p),R=p===Ie?Gf:V=>_e(_,V);if(h!=null&&h!==l){if(qu(e),Me(h))d[h]=null,R(h)&&(p[h]=null);else if(nt(h)){h.value=null;const V=e;V.k&&(d[V.k]=null)}}if(ie(l))pi(l,c,12,[a,d]);else{const V=Me(l),M=nt(l);if(V||M){const B=()=>{if(n.f){const K=V?R(l)?p[l]:d[l]:l.value;if(s)re(K)&&Uc(K,i);else if(re(K))K.includes(i)||K.push(i);else if(V)d[l]=[i],R(l)&&(p[l]=d[l]);else{const G=[i];l.value=G,n.k&&(d[n.k]=G)}}else V?(d[l]=a,R(l)&&(p[l]=a)):M&&(l.value=a,n.k&&(d[n.k]=a))};if(a){const K=()=>{B(),go.delete(n)};K.id=-1,go.set(n,K),mt(K,t)}else qu(n),B()}}}function qu(n){const e=go.get(n);e&&(e.flags|=8,go.delete(n))}Bo().requestIdleCallback;Bo().cancelIdleCallback;const Hs=n=>!!n.type.__asyncLoader,Sd=n=>n.type.__isKeepAlive;function $_(n,e){bd(n,"a",e)}function q_(n,e){bd(n,"da",e)}function bd(n,e,t=ct){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ho(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Sd(s.parent.vnode)&&H_(r,e,t,s),s=s.parent}}function H_(n,e,t,r){const s=Ho(e,n,r,!0);Zc(()=>{Uc(r[e],s)},t)}function Ho(n,e,t=ct,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{ln();const c=gi(t),l=zt(e,t,n,a);return c(),un(),l});return r?s.unshift(i):s.push(i),i}}const gn=n=>(e,t=ct)=>{(!ni||n==="sp")&&Ho(n,(...r)=>e(...r),t)},W_=gn("bm"),Pd=gn("m"),K_=gn("bu"),z_=gn("u"),G_=gn("bum"),Zc=gn("um"),Q_=gn("sp"),J_=gn("rtg"),Y_=gn("rtc");function X_(n,e=ct){Ho("ec",n,e)}const Z_=Symbol.for("v-ndc");function ey(n,e,t,r){let s;const i=t,a=re(n);if(a||Me(n)){const c=a&&$r(n);let l=!1,h=!1;c&&(l=!wt(n),h=Un(n),n=$o(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?uo(ze(n[d])):ze(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Pe(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}const nc=n=>n?Xd(n)?zo(n):nc(n.parent):null,Ws=rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nc(n.parent),$root:n=>nc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Vd(n),$forceUpdate:n=>n.f||(n.f=()=>{Yc(n.update)}),$nextTick:n=>n.n||(n.n=x_.bind(n.proxy)),$watch:n=>vy.bind(n)}),Da=(n,e)=>n!==Ie&&!n.__isScriptSetup&&_e(n,e),ty={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;let h;if(e[0]!=="$"){const R=a[e];if(R!==void 0)switch(R){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Da(r,e))return a[e]=1,r[e];if(s!==Ie&&_e(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&_e(h,e))return a[e]=3,i[e];if(t!==Ie&&_e(t,e))return a[e]=4,t[e];rc&&(a[e]=0)}}const d=Ws[e];let p,_;if(d)return e==="$attrs"&&et(n.attrs,"get",""),d(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==Ie&&_e(t,e))return a[e]=4,t[e];if(_=l.config.globalProperties,_e(_,e))return _[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Da(s,e)?(s[e]=t,!0):r!==Ie&&_e(r,e)?(r[e]=t,!0):_e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i,type:a}},c){let l,h;return!!(t[c]||n!==Ie&&c[0]!=="$"&&_e(n,c)||Da(e,c)||(l=i[0])&&_e(l,c)||_e(r,c)||_e(Ws,c)||_e(s.config.globalProperties,c)||(h=a.__cssModules)&&h[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:_e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hu(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let rc=!0;function ny(n){const e=Vd(n),t=n.proxy,r=n.ctx;rc=!1,e.beforeCreate&&Wu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:R,updated:V,activated:M,deactivated:B,beforeDestroy:K,beforeUnmount:G,destroyed:te,unmounted:z,render:ue,renderTracked:Ae,renderTriggered:v,errorCaptured:m,serverPrefetch:T,expose:A,inheritAttrs:I,components:S,directives:E,filters:Be}=e;if(h&&ry(h,r,null),a)for(const Re in a){const ge=a[Re];ie(ge)&&(r[Re]=ge.bind(t))}if(s){const Re=s.call(t,t);Pe(Re)&&(n.data=Gc(Re))}if(rc=!0,i)for(const Re in i){const ge=i[Re],Et=ie(ge)?ge.bind(t,t):ie(ge.get)?ge.get.bind(t,t):jt,Sr=!ie(ge)&&ie(ge.set)?ge.set.bind(t):jt,Nt=Hy({get:Et,set:Sr});Object.defineProperty(r,Re,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:ft=>Nt.value=ft})}if(c)for(const Re in c)Cd(c[Re],r,t,Re);if(l){const Re=ie(l)?l.call(t):l;Reflect.ownKeys(Re).forEach(ge=>{ly(ge,Re[ge])})}d&&Wu(d,n,"c");function He(Re,ge){re(ge)?ge.forEach(Et=>Re(Et.bind(t))):ge&&Re(ge.bind(t))}if(He(W_,p),He(Pd,_),He(K_,R),He(z_,V),He($_,M),He(q_,B),He(X_,m),He(Y_,Ae),He(J_,v),He(G_,G),He(Zc,z),He(Q_,T),re(A))if(A.length){const Re=n.exposed||(n.exposed={});A.forEach(ge=>{Object.defineProperty(Re,ge,{get:()=>t[ge],set:Et=>t[ge]=Et,enumerable:!0})})}else n.exposed||(n.exposed={});ue&&n.render===jt&&(n.render=ue),I!=null&&(n.inheritAttrs=I),S&&(n.components=S),E&&(n.directives=E),T&&Rd(n)}function ry(n,e,t=jt){re(n)&&(n=sc(n));for(const r in n){const s=n[r];let i;Pe(s)?"default"in s?i=Yi(s.from||r,s.default,!0):i=Yi(s.from||r):i=Yi(s),nt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Wu(n,e,t){zt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cd(n,e,t,r){let s=r.includes(".")?qd(t,r):()=>t[r];if(Me(n)){const i=e[n];ie(i)&&Na(s,i)}else if(ie(n))Na(s,n.bind(t));else if(Pe(n))if(re(n))n.forEach(i=>Cd(i,e,t,r));else{const i=ie(n.handler)?n.handler.bind(t):e[n.handler];ie(i)&&Na(s,i,n)}}function Vd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>mo(l,h,a,!0)),mo(l,e,a)),Pe(e)&&i.set(e,l),l}function mo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&mo(n,i,t,!0),s&&s.forEach(a=>mo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=sy[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const sy={data:Ku,props:zu,emits:zu,methods:Ns,computed:Ns,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Ns,directives:Ns,watch:oy,provide:Ku,inject:iy};function Ku(n,e){return e?n?function(){return rt(ie(n)?n.call(this,this):n,ie(e)?e.call(this,this):e)}:e:n}function iy(n,e){return Ns(sc(n),sc(e))}function sc(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ot(n,e){return n?[...new Set([].concat(n,e))]:e}function Ns(n,e){return n?rt(Object.create(null),n,e):e}function zu(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:rt(Object.create(null),Hu(n),Hu(e??{})):e}function oy(n,e){if(!n)return e;if(!e)return n;const t=rt(Object.create(null),n);for(const r in e)t[r]=ot(n[r],e[r]);return t}function Dd(){return{app:null,config:{isNativeTag:Gf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ay=0;function cy(n,e){return function(r,s=null){ie(r)||(r=rt({},r)),s!=null&&!Pe(s)&&(s=null);const i=Dd(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:ay++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Wy,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ie(d.install)?(a.add(d),d.install(h,...p)):ie(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!l){const R=h._ceVNode||an(r,s);return R.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(R,d,_),l=!0,h._container=d,d.__vue_app__=h,zo(R.component)}},onUnmount(d){c.push(d)},unmount(){l&&(zt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Hr;Hr=h;try{return d()}finally{Hr=p}}};return h}}let Hr=null;function ly(n,e){if(ct){let t=ct.provides;const r=ct.parent&&ct.parent.provides;r===t&&(t=ct.provides=Object.create(r)),t[n]=e}}function Yi(n,e,t=!1){const r=Fy();if(r||Hr){let s=Hr?Hr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ie(e)?e.call(r&&r.proxy):e}}const kd={},Nd=()=>Object.create(kd),Od=n=>Object.getPrototypeOf(n)===kd;function uy(n,e,t,r=!1){const s={},i=Nd();n.propsDefaults=Object.create(null),xd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:A_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function hy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=me(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(Wo(n.emitsOptions,_))continue;const R=e[_];if(l)if(_e(i,_))R!==i[_]&&(i[_]=R,h=!0);else{const V=Fn(_);s[V]=ic(l,c,V,R,n,!1)}else R!==i[_]&&(i[_]=R,h=!0)}}}else{xd(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!_e(e,p)&&((d=Qn(p))===p||!_e(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=ic(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!_e(e,p))&&(delete i[p],h=!0)}h&&en(n.attrs,"set","")}function xd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(Bs(l))continue;const h=e[l];let d;s&&_e(s,d=Fn(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:Wo(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=me(t),h=c||Ie;for(let d=0;d<i.length;d++){const p=i[d];t[p]=ic(s,l,p,h[p],n,!_e(h,p))}}return a}function ic(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=_e(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ie(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=gi(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Qn(t))&&(r=!0))}return r}const fy=new WeakMap;function Md(n,e,t=!1){const r=t?fy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!ie(n)){const d=p=>{l=!0;const[_,R]=Md(p,e,!0);rt(a,_),R&&c.push(...R)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Pe(n)&&r.set(n,Br),Br;if(re(i))for(let d=0;d<i.length;d++){const p=Fn(i[d]);Gu(p)&&(a[p]=Ie)}else if(i)for(const d in i){const p=Fn(d);if(Gu(p)){const _=i[d],R=a[p]=re(_)||ie(_)?{type:_}:rt({},_),V=R.type;let M=!1,B=!0;if(re(V))for(let K=0;K<V.length;++K){const G=V[K],te=ie(G)&&G.name;if(te==="Boolean"){M=!0;break}else te==="String"&&(B=!1)}else M=ie(V)&&V.name==="Boolean";R[0]=M,R[1]=B,(M||_e(R,"default"))&&c.push(p)}}const h=[a,c];return Pe(n)&&r.set(n,h),h}function Gu(n){return n[0]!=="$"&&!Bs(n)}const el=n=>n==="_"||n==="_ctx"||n==="$stable",tl=n=>re(n)?n.map(Bt):[Bt(n)],dy=(n,e,t)=>{if(e._n)return e;const r=F_((...s)=>tl(e(...s)),t);return r._c=!1,r},Ld=(n,e,t)=>{const r=n._ctx;for(const s in n){if(el(s))continue;const i=n[s];if(ie(i))e[s]=dy(s,i,r);else if(i!=null){const a=tl(i);e[s]=()=>a}}},Fd=(n,e)=>{const t=tl(e);n.slots.default=()=>t},Ud=(n,e,t)=>{for(const r in e)(t||!el(r))&&(n[r]=e[r])},py=(n,e,t)=>{const r=n.slots=Nd();if(n.vnode.shapeFlag&32){const s=e._;s?(Ud(r,e,t),t&&ed(r,"_",s,!0)):Ld(e,r)}else e&&Fd(n,e)},gy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ie;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Ud(s,e,t):(i=!e.$stable,Ld(e,s)),a=e}else e&&(Fd(n,e),a={default:1});if(i)for(const c in s)!el(c)&&a[c]==null&&delete s[c]},mt=Vy;function my(n){return _y(n)}function _y(n,e){const t=Bo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:R=jt,insertStaticContent:V}=n,M=(y,w,C,U=null,N=null,O=null,$=void 0,F=null,L=!!w.dynamicChildren)=>{if(y===w)return;y&&!Ds(y,w)&&(U=_n(y),ft(y,N,O,!0),y=null),w.patchFlag===-2&&(L=!1,w.dynamicChildren=null);const{type:x,ref:Y,shapeFlag:q}=w;switch(x){case Ko:B(y,w,C,U);break;case Bn:K(y,w,C,U);break;case Oa:y==null&&G(w,C,U,$);break;case Ut:S(y,w,C,U,N,O,$,F,L);break;default:q&1?ue(y,w,C,U,N,O,$,F,L):q&6?E(y,w,C,U,N,O,$,F,L):(q&64||q&128)&&x.process(y,w,C,U,N,O,$,F,L,tr)}Y!=null&&N?qs(Y,y&&y.ref,O,w||y,!w):Y==null&&y&&y.ref!=null&&qs(y.ref,null,O,y,!0)},B=(y,w,C,U)=>{if(y==null)r(w.el=c(w.children),C,U);else{const N=w.el=y.el;w.children!==y.children&&h(N,w.children)}},K=(y,w,C,U)=>{y==null?r(w.el=l(w.children||""),C,U):w.el=y.el},G=(y,w,C,U)=>{[y.el,y.anchor]=V(y.children,w,C,U,y.el,y.anchor)},te=({el:y,anchor:w},C,U)=>{let N;for(;y&&y!==w;)N=_(y),r(y,C,U),y=N;r(w,C,U)},z=({el:y,anchor:w})=>{let C;for(;y&&y!==w;)C=_(y),s(y),y=C;s(w)},ue=(y,w,C,U,N,O,$,F,L)=>{if(w.type==="svg"?$="svg":w.type==="math"&&($="mathml"),y==null)Ae(w,C,U,N,O,$,F,L);else{const x=y.el&&y.el._isVueCE?y.el:null;try{x&&x._beginPatch(),T(y,w,N,O,$,F,L)}finally{x&&x._endPatch()}}},Ae=(y,w,C,U,N,O,$,F)=>{let L,x;const{props:Y,shapeFlag:q,transition:J,dirs:X}=y;if(L=y.el=a(y.type,O,Y&&Y.is,Y),q&8?d(L,y.children):q&16&&m(y.children,L,null,U,N,ka(y,O),$,F),X&&ar(y,null,U,"created"),v(L,y,y.scopeId,$,U),Y){for(const Ee in Y)Ee!=="value"&&!Bs(Ee)&&i(L,Ee,null,Y[Ee],O,U);"value"in Y&&i(L,"value",null,Y.value,O),(x=Y.onVnodeBeforeMount)&&Mt(x,U,y)}X&&ar(y,null,U,"beforeMount");const ae=yy(N,J);ae&&J.beforeEnter(L),r(L,w,C),((x=Y&&Y.onVnodeMounted)||ae||X)&&mt(()=>{x&&Mt(x,U,y),ae&&J.enter(L),X&&ar(y,null,U,"mounted")},N)},v=(y,w,C,U,N)=>{if(C&&R(y,C),U)for(let O=0;O<U.length;O++)R(y,U[O]);if(N){let O=N.subTree;if(w===O||Wd(O.type)&&(O.ssContent===w||O.ssFallback===w)){const $=N.vnode;v(y,$,$.scopeId,$.slotScopeIds,N.parent)}}},m=(y,w,C,U,N,O,$,F,L=0)=>{for(let x=L;x<y.length;x++){const Y=y[x]=F?Sn(y[x]):Bt(y[x]);M(null,Y,w,C,U,N,O,$,F)}},T=(y,w,C,U,N,O,$)=>{const F=w.el=y.el;let{patchFlag:L,dynamicChildren:x,dirs:Y}=w;L|=y.patchFlag&16;const q=y.props||Ie,J=w.props||Ie;let X;if(C&&cr(C,!1),(X=J.onVnodeBeforeUpdate)&&Mt(X,C,w,y),Y&&ar(w,y,C,"beforeUpdate"),C&&cr(C,!0),(q.innerHTML&&J.innerHTML==null||q.textContent&&J.textContent==null)&&d(F,""),x?A(y.dynamicChildren,x,F,C,U,ka(w,N),O):$||ge(y,w,F,null,C,U,ka(w,N),O,!1),L>0){if(L&16)I(F,q,J,C,N);else if(L&2&&q.class!==J.class&&i(F,"class",null,J.class,N),L&4&&i(F,"style",q.style,J.style,N),L&8){const ae=w.dynamicProps;for(let Ee=0;Ee<ae.length;Ee++){const de=ae[Ee],Je=q[de],Ye=J[de];(Ye!==Je||de==="value")&&i(F,de,Je,Ye,N,C)}}L&1&&y.children!==w.children&&d(F,w.children)}else!$&&x==null&&I(F,q,J,C,N);((X=J.onVnodeUpdated)||Y)&&mt(()=>{X&&Mt(X,C,w,y),Y&&ar(w,y,C,"updated")},U)},A=(y,w,C,U,N,O,$)=>{for(let F=0;F<w.length;F++){const L=y[F],x=w[F],Y=L.el&&(L.type===Ut||!Ds(L,x)||L.shapeFlag&198)?p(L.el):C;M(L,x,Y,null,U,N,O,$,!0)}},I=(y,w,C,U,N)=>{if(w!==C){if(w!==Ie)for(const O in w)!Bs(O)&&!(O in C)&&i(y,O,w[O],null,N,U);for(const O in C){if(Bs(O))continue;const $=C[O],F=w[O];$!==F&&O!=="value"&&i(y,O,F,$,N,U)}"value"in C&&i(y,"value",w.value,C.value,N)}},S=(y,w,C,U,N,O,$,F,L)=>{const x=w.el=y?y.el:c(""),Y=w.anchor=y?y.anchor:c("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:X}=w;X&&(F=F?F.concat(X):X),y==null?(r(x,C,U),r(Y,C,U),m(w.children||[],C,Y,N,O,$,F,L)):q>0&&q&64&&J&&y.dynamicChildren?(A(y.dynamicChildren,J,C,N,O,$,F),(w.key!=null||N&&w===N.subTree)&&Bd(y,w,!0)):ge(y,w,C,Y,N,O,$,F,L)},E=(y,w,C,U,N,O,$,F,L)=>{w.slotScopeIds=F,y==null?w.shapeFlag&512?N.ctx.activate(w,C,U,$,L):Be(w,C,U,N,O,$,L):kt(y,w,L)},Be=(y,w,C,U,N,O,$)=>{const F=y.component=Ly(y,U,N);if(Sd(y)&&(F.ctx.renderer=tr),Uy(F,!1,$),F.asyncDep){if(N&&N.registerDep(F,He,$),!y.el){const L=F.subTree=an(Bn);K(null,L,w,C),y.placeholder=L.el}}else He(F,y,w,C,N,O,$)},kt=(y,w,C)=>{const U=w.component=y.component;if(Py(y,w,C))if(U.asyncDep&&!U.asyncResolved){Re(U,w,C);return}else U.next=w,U.update();else w.el=y.el,U.vnode=w},He=(y,w,C,U,N,O,$)=>{const F=()=>{if(y.isMounted){let{next:q,bu:J,u:X,parent:ae,vnode:Ee}=y;{const pt=jd(y);if(pt){q&&(q.el=Ee.el,Re(y,q,$)),pt.asyncDep.then(()=>{y.isUnmounted||F()});return}}let de=q,Je;cr(y,!1),q?(q.el=Ee.el,Re(y,q,$)):q=Ee,J&&Ji(J),(Je=q.props&&q.props.onVnodeBeforeUpdate)&&Mt(Je,ae,q,Ee),cr(y,!0);const Ye=Ju(y),dt=y.subTree;y.subTree=Ye,M(dt,Ye,p(dt.el),_n(dt),y,N,O),q.el=Ye.el,de===null&&Cy(y,Ye.el),X&&mt(X,N),(Je=q.props&&q.props.onVnodeUpdated)&&mt(()=>Mt(Je,ae,q,Ee),N)}else{let q;const{el:J,props:X}=w,{bm:ae,m:Ee,parent:de,root:Je,type:Ye}=y,dt=Hs(w);cr(y,!1),ae&&Ji(ae),!dt&&(q=X&&X.onVnodeBeforeMount)&&Mt(q,de,w),cr(y,!0);{Je.ce&&Je.ce._def.shadowRoot!==!1&&Je.ce._injectChildStyle(Ye);const pt=y.subTree=Ju(y);M(null,pt,C,U,y,N,O),w.el=pt.el}if(Ee&&mt(Ee,N),!dt&&(q=X&&X.onVnodeMounted)){const pt=w;mt(()=>Mt(q,de,pt),N)}(w.shapeFlag&256||de&&Hs(de.vnode)&&de.vnode.shapeFlag&256)&&y.a&&mt(y.a,N),y.isMounted=!0,w=C=U=null}};y.scope.on();const L=y.effect=new sd(F);y.scope.off();const x=y.update=L.run.bind(L),Y=y.job=L.runIfDirty.bind(L);Y.i=y,Y.id=y.uid,L.scheduler=()=>Yc(Y),cr(y,!0),x()},Re=(y,w,C)=>{w.component=y;const U=y.vnode.props;y.vnode=w,y.next=null,hy(y,w.props,U,C),gy(y,w.children,C),ln(),$u(y),un()},ge=(y,w,C,U,N,O,$,F,L=!1)=>{const x=y&&y.children,Y=y?y.shapeFlag:0,q=w.children,{patchFlag:J,shapeFlag:X}=w;if(J>0){if(J&128){Sr(x,q,C,U,N,O,$,F,L);return}else if(J&256){Et(x,q,C,U,N,O,$,F,L);return}}X&8?(Y&16&&Jt(x,N,O),q!==x&&d(C,q)):Y&16?X&16?Sr(x,q,C,U,N,O,$,F,L):Jt(x,N,O,!0):(Y&8&&d(C,""),X&16&&m(q,C,U,N,O,$,F,L))},Et=(y,w,C,U,N,O,$,F,L)=>{y=y||Br,w=w||Br;const x=y.length,Y=w.length,q=Math.min(x,Y);let J;for(J=0;J<q;J++){const X=w[J]=L?Sn(w[J]):Bt(w[J]);M(y[J],X,C,null,N,O,$,F,L)}x>Y?Jt(y,N,O,!0,!1,q):m(w,C,U,N,O,$,F,L,q)},Sr=(y,w,C,U,N,O,$,F,L)=>{let x=0;const Y=w.length;let q=y.length-1,J=Y-1;for(;x<=q&&x<=J;){const X=y[x],ae=w[x]=L?Sn(w[x]):Bt(w[x]);if(Ds(X,ae))M(X,ae,C,null,N,O,$,F,L);else break;x++}for(;x<=q&&x<=J;){const X=y[q],ae=w[J]=L?Sn(w[J]):Bt(w[J]);if(Ds(X,ae))M(X,ae,C,null,N,O,$,F,L);else break;q--,J--}if(x>q){if(x<=J){const X=J+1,ae=X<Y?w[X].el:U;for(;x<=J;)M(null,w[x]=L?Sn(w[x]):Bt(w[x]),C,ae,N,O,$,F,L),x++}}else if(x>J)for(;x<=q;)ft(y[x],N,O,!0),x++;else{const X=x,ae=x,Ee=new Map;for(x=ae;x<=J;x++){const We=w[x]=L?Sn(w[x]):Bt(w[x]);We.key!=null&&Ee.set(We.key,x)}let de,Je=0;const Ye=J-ae+1;let dt=!1,pt=0;const At=new Array(Ye);for(x=0;x<Ye;x++)At[x]=0;for(x=X;x<=q;x++){const We=y[x];if(Je>=Ye){ft(We,N,O,!0);continue}let je;if(We.key!=null)je=Ee.get(We.key);else for(de=ae;de<=J;de++)if(At[de-ae]===0&&Ds(We,w[de])){je=de;break}je===void 0?ft(We,N,O,!0):(At[je-ae]=x+1,je>=pt?pt=je:dt=!0,M(We,w[je],C,null,N,O,$,F,L),Je++)}const Pr=dt?Ey(At):Br;for(de=Pr.length-1,x=Ye-1;x>=0;x--){const We=ae+x,je=w[We],gs=w[We+1],nr=We+1<Y?gs.el||gs.placeholder:U;At[x]===0?M(null,je,C,nr,N,O,$,F,L):dt&&(de<0||x!==Pr[de]?Nt(je,C,nr,2):de--)}}},Nt=(y,w,C,U,N=null)=>{const{el:O,type:$,transition:F,children:L,shapeFlag:x}=y;if(x&6){Nt(y.component.subTree,w,C,U);return}if(x&128){y.suspense.move(w,C,U);return}if(x&64){$.move(y,w,C,tr);return}if($===Ut){r(O,w,C);for(let q=0;q<L.length;q++)Nt(L[q],w,C,U);r(y.anchor,w,C);return}if($===Oa){te(y,w,C);return}if(U!==2&&x&1&&F)if(U===0)F.beforeEnter(O),r(O,w,C),mt(()=>F.enter(O),N);else{const{leave:q,delayLeave:J,afterLeave:X}=F,ae=()=>{y.ctx.isUnmounted?s(O):r(O,w,C)},Ee=()=>{O._isLeaving&&O[j_](!0),q(O,()=>{ae(),X&&X()})};J?J(O,ae,Ee):Ee()}else r(O,w,C)},ft=(y,w,C,U=!1,N=!1)=>{const{type:O,props:$,ref:F,children:L,dynamicChildren:x,shapeFlag:Y,patchFlag:q,dirs:J,cacheIndex:X}=y;if(q===-2&&(N=!1),F!=null&&(ln(),qs(F,null,C,y,!0),un()),X!=null&&(w.renderCache[X]=void 0),Y&256){w.ctx.deactivate(y);return}const ae=Y&1&&J,Ee=!Hs(y);let de;if(Ee&&(de=$&&$.onVnodeBeforeUnmount)&&Mt(de,w,y),Y&6)ds(y.component,C,U);else{if(Y&128){y.suspense.unmount(C,U);return}ae&&ar(y,null,w,"beforeUnmount"),Y&64?y.type.remove(y,w,C,tr,U):x&&!x.hasOnce&&(O!==Ut||q>0&&q&64)?Jt(x,w,C,!1,!0):(O===Ut&&q&384||!N&&Y&16)&&Jt(L,w,C),U&&fs(y)}(Ee&&(de=$&&$.onVnodeUnmounted)||ae)&&mt(()=>{de&&Mt(de,w,y),ae&&ar(y,null,w,"unmounted")},C)},fs=y=>{const{type:w,el:C,anchor:U,transition:N}=y;if(w===Ut){br(C,U);return}if(w===Oa){z(y);return}const O=()=>{s(C),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(y.shapeFlag&1&&N&&!N.persisted){const{leave:$,delayLeave:F}=N,L=()=>$(C,O);F?F(y.el,O,L):L()}else O()},br=(y,w)=>{let C;for(;y!==w;)C=_(y),s(y),y=C;s(w)},ds=(y,w,C)=>{const{bum:U,scope:N,job:O,subTree:$,um:F,m:L,a:x}=y;Qu(L),Qu(x),U&&Ji(U),N.stop(),O&&(O.flags|=8,ft($,y,w,C)),F&&mt(F,w),mt(()=>{y.isUnmounted=!0},w)},Jt=(y,w,C,U=!1,N=!1,O=0)=>{for(let $=O;$<y.length;$++)ft(y[$],w,C,U,N)},_n=y=>{if(y.shapeFlag&6)return _n(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=_(y.anchor||y.el),C=w&&w[U_];return C?_(C):w};let er=!1;const ps=(y,w,C)=>{y==null?w._vnode&&ft(w._vnode,null,null,!0):M(w._vnode||null,y,w,null,null,null,C),w._vnode=y,er||(er=!0,$u(),Id(),er=!1)},tr={p:M,um:ft,m:Nt,r:fs,mt:Be,mc:m,pc:ge,pbc:A,n:_n,o:n};return{render:ps,hydrate:void 0,createApp:cy(ps)}}function ka({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function cr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function yy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Bd(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Sn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Bd(a,c)),c.type===Ko&&c.patchFlag!==-1&&(c.el=a.el),c.type===Bn&&!c.el&&(c.el=a.el)}}function Ey(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function jd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jd(e)}function Qu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Ty=Symbol.for("v-scx"),Iy=()=>Yi(Ty);function Na(n,e,t){return $d(n,e,t)}function $d(n,e,t=Ie){const{immediate:r,deep:s,flush:i,once:a}=t,c=rt({},t),l=e&&r||!e&&i!=="post";let h;if(ni){if(i==="sync"){const R=Iy();h=R.__watcherHandles||(R.__watcherHandles=[])}else if(!l){const R=()=>{};return R.stop=jt,R.resume=jt,R.pause=jt,R}}const d=ct;c.call=(R,V,M)=>zt(R,d,V,M);let p=!1;i==="post"?c.scheduler=R=>{mt(R,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(R,V)=>{V?R():Yc(R)}),c.augmentJob=R=>{e&&(R.flags|=4),p&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const _=N_(n,e,c);return ni&&(h?h.push(_):l&&_()),_}function vy(n,e,t){const r=this.proxy,s=Me(n)?n.includes(".")?qd(r,n):()=>r[n]:n.bind(r,r);let i;ie(e)?i=e:(i=e.handler,t=e);const a=gi(this),c=$d(s,i.bind(r),t);return a(),c}function qd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const wy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Fn(e)}Modifiers`]||n[`${Qn(e)}Modifiers`];function Ay(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ie;let s=t;const i=e.startsWith("update:"),a=i&&wy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Me(d)?d.trim():d)),a.number&&(s=t.map(jc)));let c,l=r[c=Sa(e)]||r[c=Sa(Fn(e))];!l&&i&&(l=r[c=Sa(Qn(e))]),l&&zt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,zt(h,n,6,s)}}const Ry=new WeakMap;function Hd(n,e,t=!1){const r=t?Ry:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!ie(n)){const l=h=>{const d=Hd(h,e,!0);d&&(c=!0,rt(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Pe(n)&&r.set(n,null),null):(re(i)?i.forEach(l=>a[l]=null):rt(a,i),Pe(n)&&r.set(n,a),a)}function Wo(n,e){return!n||!Lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(n,e[0].toLowerCase()+e.slice(1))||_e(n,Qn(e))||_e(n,e))}function Ju(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:_,setupState:R,ctx:V,inheritAttrs:M}=n,B=po(n);let K,G;try{if(t.shapeFlag&4){const z=s||r,ue=z;K=Bt(h.call(ue,z,d,p,R,_,V)),G=c}else{const z=e;K=Bt(z.length>1?z(p,{attrs:c,slots:a,emit:l}):z(p,null)),G=e.props?c:Sy(c)}}catch(z){Ks.length=0,qo(z,n,1),K=an(Bn)}let te=K;if(G&&M!==!1){const z=Object.keys(G),{shapeFlag:ue}=te;z.length&&ue&7&&(i&&z.some(Fc)&&(G=by(G,i)),te=Yr(te,G,!1,!0))}return t.dirs&&(te=Yr(te,null,!1,!0),te.dirs=te.dirs?te.dirs.concat(t.dirs):t.dirs),t.transition&&Xc(te,t.transition),K=te,po(B),K}const Sy=n=>{let e;for(const t in n)(t==="class"||t==="style"||Lo(t))&&((e||(e={}))[t]=n[t]);return e},by=(n,e)=>{const t={};for(const r in n)(!Fc(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Py(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Yu(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(a[_]!==r[_]&&!Wo(h,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Yu(r,a,h):!0:!!a;return!1}function Yu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Wo(t,i))return!0}return!1}function Cy({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Wd=n=>n.__isSuspense;function Vy(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):L_(n)}const Ut=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),Bn=Symbol.for("v-cmt"),Oa=Symbol.for("v-stc"),Ks=[];let _t=null;function Zt(n=!1){Ks.push(_t=n?null:[])}function Dy(){Ks.pop(),_t=Ks[Ks.length-1]||null}let ti=1;function Xu(n,e=!1){ti+=n,n<0&&_t&&e&&(_t.hasOnce=!0)}function Kd(n){return n.dynamicChildren=ti>0?_t||Br:null,Dy(),ti>0&&_t&&_t.push(n),n}function hr(n,e,t,r,s,i){return Kd(pe(n,e,t,r,s,i,!0))}function zd(n,e,t,r,s){return Kd(an(n,e,t,r,s,!0))}function Gd(n){return n?n.__v_isVNode===!0:!1}function Ds(n,e){return n.type===e.type&&n.key===e.key}const Qd=({key:n})=>n??null,Xi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||nt(n)||ie(n)?{i:vt,r:n,k:e,f:!!t}:n:null);function pe(n,e=null,t=null,r=0,s=null,i=n===Ut?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Qd(e),ref:e&&Xi(e),scopeId:wd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vt};return c?(nl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=Me(t)?8:16),ti>0&&!a&&_t&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_t.push(l),l}const an=ky;function ky(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===Z_)&&(n=Bn),Gd(n)){const c=Yr(n,e,!0);return t&&nl(c,t),ti>0&&!i&&_t&&(c.shapeFlag&6?_t[_t.indexOf(n)]=c:_t.push(c)),c.patchFlag=-2,c}if(qy(n)&&(n=n.__vccOpts),e){e=Ny(e);let{class:c,style:l}=e;c&&!Me(c)&&(e.class=jo(c)),Pe(l)&&(Jc(l)&&!re(l)&&(l=rt({},l)),e.style=$c(l))}const a=Me(n)?1:Wd(n)?128:B_(n)?64:Pe(n)?4:ie(n)?2:0;return pe(n,e,t,r,s,a,i,!0)}function Ny(n){return n?Jc(n)||Od(n)?rt({},n):n:null}function Yr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?Oy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Qd(h),ref:e&&e.ref?t&&i?re(i)?i.concat(Xi(e)):[i,Xi(e)]:Xi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ut?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Yr(n.ssContent),ssFallback:n.ssFallback&&Yr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Xc(d,l.clone(d)),d}function Jd(n=" ",e=0){return an(Ko,null,n,e)}function Yd(n="",e=!1){return e?(Zt(),zd(Bn,null,n)):an(Bn,null,n)}function Bt(n){return n==null||typeof n=="boolean"?an(Bn):re(n)?an(Ut,null,n.slice()):Gd(n)?Sn(n):an(Ko,null,String(n))}function Sn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Yr(n)}function nl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Od(e)?e._ctx=vt:s===3&&vt&&(vt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:vt},t=32):(e=String(e),r&64?(t=16,e=[Jd(e)]):t=8);n.children=e,n.shapeFlag|=t}function Oy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=jo([e.class,r.class]));else if(s==="style")e.style=$c([e.style,r.style]);else if(Lo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Mt(n,e,t,r=null){zt(n,e,7,[t,r])}const xy=Dd();let My=0;function Ly(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||xy,i={uid:My++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new s_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Md(r,s),emitsOptions:Hd(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ay.bind(null,i),n.ce&&n.ce(i),i}let ct=null;const Fy=()=>ct||vt;let _o,oc;{const n=Bo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};_o=e("__VUE_INSTANCE_SETTERS__",t=>ct=t),oc=e("__VUE_SSR_SETTERS__",t=>ni=t)}const gi=n=>{const e=ct;return _o(n),n.scope.on(),()=>{n.scope.off(),_o(e)}},Zu=()=>{ct&&ct.scope.off(),_o(null)};function Xd(n){return n.vnode.shapeFlag&4}let ni=!1;function Uy(n,e=!1,t=!1){e&&oc(e);const{props:r,children:s}=n.vnode,i=Xd(n);uy(n,r,i,e),py(n,s,t||e);const a=i?By(n,e):void 0;return e&&oc(!1),a}function By(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ty);const{setup:r}=t;if(r){ln();const s=n.setupContext=r.length>1?$y(n):null,i=gi(n),a=pi(r,n,0,[n.props,s]),c=Jf(a);if(un(),i(),(c||n.sp)&&!Hs(n)&&Rd(n),c){if(a.then(Zu,Zu),e)return a.then(l=>{eh(n,l)}).catch(l=>{qo(l,n,0)});n.asyncDep=a}else eh(n,a)}else Zd(n)}function eh(n,e,t){ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Pe(e)&&(n.setupState=yd(e)),Zd(n)}function Zd(n,e,t){const r=n.type;n.render||(n.render=r.render||jt);{const s=gi(n);ln();try{ny(n)}finally{un(),s()}}}const jy={get(n,e){return et(n,"get",""),n[e]}};function $y(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,jy),slots:n.slots,emit:n.emit,expose:e}}function zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yd(R_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ws)return Ws[t](n)},has(e,t){return t in e||t in Ws}})):n.proxy}function qy(n){return ie(n)&&"__vccOpts"in n}const Hy=(n,e)=>D_(n,e,ni),Wy="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ac;const th=typeof window<"u"&&window.trustedTypes;if(th)try{ac=th.createPolicy("vue",{createHTML:n=>n})}catch{}const ep=ac?n=>ac.createHTML(n):n=>n,Ky="http://www.w3.org/2000/svg",zy="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,nh=Xt&&Xt.createElement("template"),Gy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Xt.createElementNS(Ky,n):e==="mathml"?Xt.createElementNS(zy,n):t?Xt.createElement(n,{is:t}):Xt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Xt.createTextNode(n),createComment:n=>Xt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Xt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{nh.innerHTML=ep(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=nh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Qy=Symbol("_vtc");function Jy(n,e,t){const r=n[Qy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const rh=Symbol("_vod"),Yy=Symbol("_vsh"),Xy=Symbol(""),Zy=/(?:^|;)\s*display\s*:/;function eE(n,e,t){const r=n.style,s=Me(t);let i=!1;if(t&&!s){if(e)if(Me(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&Zi(r,c,"")}else for(const a in e)t[a]==null&&Zi(r,a,"");for(const a in t)a==="display"&&(i=!0),Zi(r,a,t[a])}else if(s){if(e!==t){const a=r[Xy];a&&(t+=";"+a),r.cssText=t,i=Zy.test(t)}}else e&&n.removeAttribute("style");rh in n&&(n[rh]=i?r.display:"",n[Yy]&&(r.display="none"))}const sh=/\s*!important$/;function Zi(n,e,t){if(re(t))t.forEach(r=>Zi(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=tE(n,e);sh.test(t)?n.setProperty(Qn(r),t.replace(sh,""),"important"):n[r]=t}}const ih=["Webkit","Moz","ms"],xa={};function tE(n,e){const t=xa[e];if(t)return t;let r=Fn(e);if(r!=="filter"&&r in n)return xa[e]=r;r=Zf(r);for(let s=0;s<ih.length;s++){const i=ih[s]+r;if(i in n)return xa[e]=i}return e}const oh="http://www.w3.org/1999/xlink";function ah(n,e,t,r,s,i=r_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(oh,e.slice(6,e.length)):n.setAttributeNS(oh,e,t):t==null||i&&!td(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Gn(t)?String(t):t)}function ch(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ep(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=td(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Or(n,e,t,r){n.addEventListener(e,t,r)}function nE(n,e,t,r){n.removeEventListener(e,t,r)}const lh=Symbol("_vei");function rE(n,e,t,r,s=null){const i=n[lh]||(n[lh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=sE(e);if(r){const h=i[e]=aE(r,s);Or(n,c,h,l)}else a&&(nE(n,c,a,l),i[e]=void 0)}}const uh=/(?:Once|Passive|Capture)$/;function sE(n){let e;if(uh.test(n)){e={};let r;for(;r=n.match(uh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Qn(n.slice(2)),e]}let Ma=0;const iE=Promise.resolve(),oE=()=>Ma||(iE.then(()=>Ma=0),Ma=Date.now());function aE(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;zt(cE(r,t.value),e,5,[r])};return t.value=n,t.attached=oE(),t}function cE(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,lE=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Jy(n,r,a):e==="style"?eE(n,t,r):Lo(e)?Fc(e)||rE(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uE(n,e,r,a))?(ch(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ah(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Me(r))?ch(n,Fn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),ah(n,e,r,a))};function uE(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&hh(e)&&ie(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hh(e)&&Me(t)?!1:e in n}const fh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>Ji(e,t):e};function hE(n){n.target.composing=!0}function dh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const La=Symbol("_assign");function ph(n,e,t){return e&&(n=n.trim()),t&&(n=jc(n)),n}const cc={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[La]=fh(s);const i=r||s.props&&s.props.type==="number";Or(n,e?"change":"input",a=>{a.target.composing||n[La](ph(n.value,t,i))}),(t||i)&&Or(n,"change",()=>{n.value=ph(n.value,t,i)}),e||(Or(n,"compositionstart",hE),Or(n,"compositionend",dh),Or(n,"change",dh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[La]=fh(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?jc(n.value):n.value,l=e??"";c!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},fE=["ctrl","shift","alt","meta"],dE={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>fE.some(t=>n[`${t}Key`]&&!e.includes(t))},pE=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=dE[e[a]];if(c&&c(s,e))return}return n(s,...i)})},gE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},mE=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=Qn(s.key);if(e.some(a=>a===i||gE[a]===i))return n(s)})},_E=rt({patchProp:lE},Gy);let gh;function yE(){return gh||(gh=my(_E))}const EE=(...n)=>{const e=yE().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=IE(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,TE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function TE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function IE(n){return Me(n)?document.querySelector(n):n}const vE=()=>{};var mh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},wE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,R=h&63;l||(R=64,a||(_=64)),r.push(t[d],t[p],t[_],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(tp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new AE;const _=i<<2|c>>4;if(r.push(_),h!==64){const R=c<<4&240|h>>2;if(r.push(R),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class AE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RE=function(n){const e=tp(n);return np.encodeByteArray(e,!0)},yo=function(n){return RE(n).replace(/\./g,"")},rp=function(n){try{return np.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=()=>SE().__FIREBASE_DEFAULTS__,PE=()=>{if(typeof process>"u"||typeof mh>"u")return;const n=mh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},CE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&rp(n[1]);return e&&JSON.parse(e)},Go=()=>{try{return vE()||bE()||PE()||CE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sp=n=>{var e,t;return(t=(e=Go())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},VE=n=>{const e=sp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ip=()=>{var n;return(n=Go())==null?void 0:n.config},op=n=>{var e;return(e=Go())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[yo(JSON.stringify(t)),yo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function OE(){var e;const n=(e=Go())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ME(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function LE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FE(){const n=st();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function UE(){return!OE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BE(){try{return typeof indexedDB=="object"}catch{return!1}}function jE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="FirebaseError";class mn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$E,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?qE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new mn(s,c,r)}}function qE(n,e){return n.replace(HE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const HE=/\{\$([^}]+)}/g;function WE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(_h(i)&&_h(a)){if(!mr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function _h(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Os(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function KE(n,e){const t=new zE(n,e);return t.subscribe.bind(t)}class zE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");GE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Fa),s.error===void 0&&(s.error=Fa),s.complete===void 0&&(s.complete=Fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ap(n){return(await fetch(n,{credentials:"include"})).ok}class _r{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new DE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YE(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JE(n){return n===ur?void 0:n}function YE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new QE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const ZE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},eT=he.INFO,tT={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},nT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=tT[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rl{constructor(e){this.name=e,this._logLevel=eT,this._logHandler=nT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const rT=(n,e)=>e.some(t=>n instanceof t);let yh,Eh;function sT(){return yh||(yh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iT(){return Eh||(Eh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cp=new WeakMap,lc=new WeakMap,lp=new WeakMap,Ua=new WeakMap,sl=new WeakMap;function oT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(kn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&cp.set(t,n)}).catch(()=>{}),sl.set(e,n),e}function aT(n){if(lc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});lc.set(n,e)}let uc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return lc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return kn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cT(n){uc=n(uc)}function lT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ba(this),e,...t);return lp.set(r,e.sort?e.sort():[e]),kn(r)}:iT().includes(n)?function(...e){return n.apply(Ba(this),e),kn(cp.get(this))}:function(...e){return kn(n.apply(Ba(this),e))}}function uT(n){return typeof n=="function"?lT(n):(n instanceof IDBTransaction&&aT(n),rT(n,sT())?new Proxy(n,uc):n)}function kn(n){if(n instanceof IDBRequest)return oT(n);if(Ua.has(n))return Ua.get(n);const e=uT(n);return e!==n&&(Ua.set(n,e),sl.set(e,n)),e}const Ba=n=>sl.get(n);function hT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=kn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(kn(a.result),l.oldVersion,l.newVersion,kn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const fT=["get","getKey","getAll","getAllKeys","count"],dT=["put","add","delete","clear"],ja=new Map;function Th(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=dT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fT.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return ja.set(e,i),i}cT(n=>({...n,get:(e,t,r)=>Th(e,t)||n.get(e,t,r),has:(e,t)=>!!Th(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function gT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hc="@firebase/app",Ih="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new rl("@firebase/app"),mT="@firebase/app-compat",_T="@firebase/analytics-compat",yT="@firebase/analytics",ET="@firebase/app-check-compat",TT="@firebase/app-check",IT="@firebase/auth",vT="@firebase/auth-compat",wT="@firebase/database",AT="@firebase/data-connect",RT="@firebase/database-compat",ST="@firebase/functions",bT="@firebase/functions-compat",PT="@firebase/installations",CT="@firebase/installations-compat",VT="@firebase/messaging",DT="@firebase/messaging-compat",kT="@firebase/performance",NT="@firebase/performance-compat",OT="@firebase/remote-config",xT="@firebase/remote-config-compat",MT="@firebase/storage",LT="@firebase/storage-compat",FT="@firebase/firestore",UT="@firebase/ai",BT="@firebase/firestore-compat",jT="firebase",$T="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="[DEFAULT]",qT={[hc]:"fire-core",[mT]:"fire-core-compat",[yT]:"fire-analytics",[_T]:"fire-analytics-compat",[TT]:"fire-app-check",[ET]:"fire-app-check-compat",[IT]:"fire-auth",[vT]:"fire-auth-compat",[wT]:"fire-rtdb",[AT]:"fire-data-connect",[RT]:"fire-rtdb-compat",[ST]:"fire-fn",[bT]:"fire-fn-compat",[PT]:"fire-iid",[CT]:"fire-iid-compat",[VT]:"fire-fcm",[DT]:"fire-fcm-compat",[kT]:"fire-perf",[NT]:"fire-perf-compat",[OT]:"fire-rc",[xT]:"fire-rc-compat",[MT]:"fire-gcs",[LT]:"fire-gcs-compat",[FT]:"fire-fst",[BT]:"fire-fst-compat",[UT]:"fire-vertex","fire-js":"fire-js",[jT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Map,HT=new Map,dc=new Map;function vh(n,e){try{n.container.addComponent(e)}catch(t){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xr(n){const e=n.name;if(dc.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;dc.set(e,n);for(const t of Eo.values())vh(t,n);for(const t of HT.values())vh(t,n);return!0}function il(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new mi("app","Firebase",WT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=$T;function up(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:fc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Nn.create("bad-app-name",{appName:String(s)});if(t||(t=ip()),!t)throw Nn.create("no-options");const i=Eo.get(s);if(i){if(mr(t,i.options)&&mr(r,i.config))return i;throw Nn.create("duplicate-app",{appName:s})}const a=new XE(s);for(const l of dc.values())a.addComponent(l);const c=new KT(t,r,a);return Eo.set(s,c),c}function hp(n=fc){const e=Eo.get(n);if(!e&&n===fc&&ip())return up();if(!e)throw Nn.create("no-app",{appName:n});return e}function On(n,e,t){let r=qT[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Xr(new _r(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="firebase-heartbeat-database",GT=1,ri="firebase-heartbeat-store";let $a=null;function fp(){return $a||($a=hT(zT,GT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ri)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nn.create("idb-open",{originalErrorMessage:n.message})})),$a}async function QT(n){try{const t=(await fp()).transaction(ri),r=await t.objectStore(ri).get(dp(n));return await t.done,r}catch(e){if(e instanceof mn)hn.warn(e.message);else{const t=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(t.message)}}}async function wh(n,e){try{const r=(await fp()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,dp(n)),await r.done}catch(t){if(t instanceof mn)hn.warn(t.message);else{const r=Nn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});hn.warn(r.message)}}}function dp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=1024,YT=30;class XT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new eI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ah();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>YT){const a=tI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ah(),{heartbeatsToSend:r,unsentEntries:s}=ZT(this._heartbeatsCache.heartbeats),i=yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return hn.warn(t),""}}}function Ah(){return new Date().toISOString().substring(0,10)}function ZT(n,e=JT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Rh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Rh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class eI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BE()?jE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await QT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rh(n){return yo(JSON.stringify({version:2,heartbeats:n})).length}function tI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(n){Xr(new _r("platform-logger",e=>new pT(e),"PRIVATE")),Xr(new _r("heartbeat",e=>new XT(e),"PRIVATE")),On(hc,Ih,n),On(hc,Ih,"esm2020"),On("fire-js","")}nI("");function pp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rI=pp,gp=new mi("auth","Firebase",pp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new rl("@firebase/auth");function sI(n,...e){To.logLevel<=he.WARN&&To.warn(`Auth (${is}): ${n}`,...e)}function eo(n,...e){To.logLevel<=he.ERROR&&To.error(`Auth (${is}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,...e){throw ol(n,...e)}function $t(n,...e){return ol(n,...e)}function mp(n,e,t){const r={...rI(),[e]:t};return new mi("auth","Firebase",r).create(e,{appName:n.name})}function cn(n){return mp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ol(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return gp.create(n,...e)}function Z(n,e,...t){if(!n)throw ol(e,...t)}function rn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw eo(e),new Error(e)}function fn(n,e){n||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function iI(){return Sh()==="http:"||Sh()==="https:"}function Sh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iI()||ME()||"connection"in navigator)?navigator.onLine:!0}function aI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.shortDelay=e,this.longDelay=t,fn(t>e,"Short delay should be less than long delay!"),this.isMobile=NE()||LE()}get(){return oI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n,e){fn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uI=new Ei(3e4,6e4);function Jn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Yn(n,e,t,r,s={}){return yp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=_i({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return xE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&yi(n.emulatorConfig.host)&&(h.credentials="include"),_p.fetch()(await Ep(n,n.config.apiHost,t,c),h)})}async function yp(n,e,t){n._canInitEmulator=!1;const r={...cI,...e};try{const s=new fI(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw qi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw qi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw qi(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw mp(n,d,h);Vt(n,d)}}catch(s){if(s instanceof mn)throw s;Vt(n,"network-request-failed",{message:String(s)})}}async function Ti(n,e,t,r,s={}){const i=await Yn(n,e,t,r,s);return"mfaPendingCredential"in i&&Vt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ep(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?al(n.config,s):`${n.config.apiScheme}://${s}`;return lI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function hI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),uI.get())})}}function qi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=$t(n,e,r);return s.customData._tokenResponse=t,s}function bh(n){return n!==void 0&&n.enterprise!==void 0}class dI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function pI(n,e){return Yn(n,"GET","/v2/recaptchaConfig",Jn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(n,e){return Yn(n,"POST","/v1/accounts:delete",e)}async function Io(n,e){return Yn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mI(n,e=!1){const t=Ue(n),r=await t.getIdToken(e),s=cl(r);Z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zs(qa(s.auth_time)),issuedAtTime:zs(qa(s.iat)),expirationTime:zs(qa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qa(n){return Number(n)*1e3}function cl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=rp(t);return s?JSON.parse(s):(eo("Failed to decode base64 JWT payload"),null)}catch(s){return eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ph(n){const e=cl(n);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof mn&&_I(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _I({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(n){var p;const e=n.auth,t=await n.getIdToken(),r=await si(n,Io(e,{idToken:t}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Tp(s.providerUserInfo):[],a=TI(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function EI(n){const e=Ue(n);await vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tp(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(n,e){const t=await yp(n,{},async()=>{const r=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Ep(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&yi(n.emulatorConfig.host)&&(l.credentials="include"),_p.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function vI(n,e){return Yn(n,"POST","/v2/accounts:revokeToken",Jn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ph(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const t=Ph(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await II(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Wr;return r&&(Z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n,e){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class St{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new yI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await si(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mI(this,e)}reload(){return EI(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new St({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await si(this,gI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:_,isAnonymous:R,providerData:V,stsTokenManager:M}=t;Z(p&&M,e,"internal-error");const B=Wr.fromJSON(this.name,M);Z(typeof p=="string",e,"internal-error"),An(r,e.name),An(s,e.name),Z(typeof _=="boolean",e,"internal-error"),Z(typeof R=="boolean",e,"internal-error"),An(i,e.name),An(a,e.name),An(c,e.name),An(l,e.name),An(h,e.name),An(d,e.name);const K=new St({uid:p,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:B,createdAt:h,lastLoginAt:d});return V&&Array.isArray(V)&&(K.providerData=V.map(G=>({...G}))),l&&(K._redirectEventId=l),K}static async _fromIdTokenResponse(e,t,r=!1){const s=new Wr;s.updateFromServerResponse(t);const i=new St({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await vo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Wr;c.updateFromIdToken(r);const l=new St({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Map;function sn(n){fn(n instanceof Function,"Expected a class definition");let e=Ch.get(n);return e?(fn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ch.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ip.type="NONE";const Vh=Ip;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n,e,t){return`firebase:${n}:${e}:${t}`}class Kr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=to(this.userKey,s.apiKey,i),this.fullPersistenceKey=to("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Io(this.auth,{idToken:e}).catch(()=>{});return t?St._fromGetAccountInfoResponse(this.auth,t,e):null}return St._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Kr(sn(Vh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||sn(Vh);const a=to(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const _=await Io(e,{idToken:d}).catch(()=>{});if(!_)break;p=await St._fromGetAccountInfoResponse(e,_,d)}else p=St._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Kr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Kr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bp(e))return"Blackberry";if(Pp(e))return"Webos";if(wp(e))return"Safari";if((e.includes("chrome/")||Ap(e))&&!e.includes("edge/"))return"Chrome";if(Sp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vp(n=st()){return/firefox\//i.test(n)}function wp(n=st()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ap(n=st()){return/crios\//i.test(n)}function Rp(n=st()){return/iemobile/i.test(n)}function Sp(n=st()){return/android/i.test(n)}function bp(n=st()){return/blackberry/i.test(n)}function Pp(n=st()){return/webos/i.test(n)}function ll(n=st()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wI(n=st()){var e;return ll(n)&&!!((e=window.navigator)!=null&&e.standalone)}function AI(){return FE()&&document.documentMode===10}function Cp(n=st()){return ll(n)||Sp(n)||Pp(n)||bp(n)||/windows phone/i.test(n)||Rp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n,e=[]){let t;switch(n){case"Browser":t=Dh(st());break;case"Worker":t=`${Dh(st())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(n,e={}){return Yn(n,"GET","/v2/passwordPolicy",Jn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=6;class PI{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??bI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kh(this),this.idTokenSubscription=new kh(this),this.beforeStateQueue=new RI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=sn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Io(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(cn(this));const t=e?Ue(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SI(this),t=new PI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await vI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&sn(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[sn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&sI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function vr(n){return Ue(n)}class kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=KE(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VI(n){Qo=n}function Dp(n){return Qo.loadJS(n)}function DI(){return Qo.recaptchaEnterpriseScript}function kI(){return Qo.gapiScript}function NI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class OI{constructor(){this.enterprise=new xI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class xI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const MI="recaptcha-enterprise",kp="NO_RECAPTCHA";class LI{constructor(e){this.type=MI,this.auth=vr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{pI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new dI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;bh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(kp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new OI().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&bh(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=DI();l.length!==0&&(l+=c),Dp(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Nh(n,e,t,r=!1,s=!1){const i=new LI(n);let a;if(s)a=kp;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function mc(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Nh(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Nh(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(n,e){const t=il(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(mr(i,e??{}))return s;Vt(s,"already-initialized")}return t.initialize({options:e})}function UI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(sn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BI(n,e,t){const r=vr(n);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Np(e),{host:a,port:c}=jI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(mr(h,r.config.emulator)&&mr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,yi(a)?ap(`${i}//${a}${l}`):$I()}function Np(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function jI(n){const e=Np(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Oh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Oh(a)}}}function Oh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $I(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,t){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function qI(n,e){return Yn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(n,e){return Ti(n,"POST","/v1/accounts:signInWithPassword",Jn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(n,e){return Ti(n,"POST","/v1/accounts:signInWithEmailLink",Jn(n,e))}async function KI(n,e){return Ti(n,"POST","/v1/accounts:signInWithEmailLink",Jn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends ul{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ii(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ii(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mc(e,t,"signInWithPassword",HI);case"emailLink":return WI(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mc(e,r,"signUpPassword",qI);case"emailLink":return KI(e,{idToken:t,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(n,e){return Ti(n,"POST","/v1/accounts:signInWithIdp",Jn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="http://localhost";class yr extends ul{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new yr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return zr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zr(e,t)}buildRequest(){const e={requestUri:zI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_i(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QI(n){const e=Os(xs(n)).link,t=e?Os(xs(e)).deep_link_id:null,r=Os(xs(n)).deep_link_id;return(r?Os(xs(r)).link:null)||r||t||e||n}class hl{constructor(e){const t=Os(xs(e)),r=t.apiKey??null,s=t.oobCode??null,i=GI(t.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=QI(e);try{return new hl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,t){return ii._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=hl.parseLink(t);return Z(r,"argument-error"),ii._fromEmailAndCode(e,r.code,r.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Op{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ii{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Pn.credential(t,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ii{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ii{constructor(){super("twitter.com")}static credential(e,t){return yr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vn.credential(t,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(n,e){return Ti(n,"POST","/v1/accounts:signUp",Jn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await St._fromIdTokenResponse(e,r,s),a=xh(r);return new Er({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=xh(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function xh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends mn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new wo(e,t,r,s)}}function xp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wo._fromErrorAndOperation(n,i,e,r):i})}async function YI(n,e,t=!1){const r=await si(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Er._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(n,e,t=!1){const{auth:r}=n;if(Tt(r.app))return Promise.reject(cn(r));const s="reauthenticate";try{const i=await si(n,xp(r,s,e,n),t);Z(i.idToken,r,"internal-error");const a=cl(i.idToken);Z(a,r,"internal-error");const{sub:c}=a;return Z(n.uid===c,r,"user-mismatch"),Er._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mp(n,e,t=!1){if(Tt(n.app))return Promise.reject(cn(n));const r="signIn",s=await xp(n,r,e),i=await Er._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function ZI(n,e){return Mp(vr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(n){const e=vr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ev(n,e,t){if(Tt(n.app))return Promise.reject(cn(n));const r=vr(n),a=await mc(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Lp(n),l}),c=await Er._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function tv(n,e,t){return Tt(n.app)?Promise.reject(cn(n)):ZI(Ue(n),os.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lp(n),r})}function nv(n,e,t,r){return Ue(n).onIdTokenChanged(e,t,r)}function rv(n,e,t){return Ue(n).beforeAuthStateChanged(e,t)}function sv(n,e,t,r){return Ue(n).onAuthStateChanged(e,t,r)}function iv(n){return Ue(n).signOut()}const Ao="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ao,"1"),this.storage.removeItem(Ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=1e3,av=10;class Up extends Fp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);AI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,av):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ov)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Up.type="LOCAL";const cv=Up;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends Fp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Bp.type="SESSION";const jp=Bp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Jo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await lv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=fl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function hv(n){qt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function fv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function pv(){return $p()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="firebaseLocalStorageDb",gv=1,Ro="firebaseLocalStorage",Hp="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yo(n,e){return n.transaction([Ro],e?"readwrite":"readonly").objectStore(Ro)}function mv(){const n=indexedDB.deleteDatabase(qp);return new vi(n).toPromise()}function _c(){const n=indexedDB.open(qp,gv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ro,{keyPath:Hp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ro)?e(r):(r.close(),await mv(),e(await _c()))})})}async function Mh(n,e,t){const r=Yo(n,!0).put({[Hp]:e,value:t});return new vi(r).toPromise()}async function _v(n,e){const t=Yo(n,!1).get(e),r=await new vi(t).toPromise();return r===void 0?null:r.value}function Lh(n,e){const t=Yo(n,!0).delete(e);return new vi(t).toPromise()}const yv=800,Ev=3;class Wp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _c(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ev)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $p()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(pv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await fv(),!this.activeServiceWorker)return;this.sender=new uv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _c();return await Mh(e,Ao,"1"),await Lh(e,Ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_v(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Yo(s,!1).getAll();return new vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wp.type="LOCAL";const Tv=Wp;new Ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n,e){return e?sn(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends ul{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vv(n){return Mp(n.auth,new dl(n),n.bypassAuthState)}function wv(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),XI(t,new dl(n),n.bypassAuthState)}async function Av(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),YI(t,new dl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vv;case"linkViaPopup":case"linkViaRedirect":return Av;case"reauthViaPopup":case"reauthViaRedirect":return wv;default:Vt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new Ei(2e3,1e4);class Ur extends Kp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rv.get())};e()}}Ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="pendingRedirect",no=new Map;class bv extends Kp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const r=await Pv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pv(n,e){const t=Dv(e),r=Vv(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Cv(n,e){no.set(n._key(),e)}function Vv(n){return sn(n._redirectPersistence)}function Dv(n){return to(Sv,n.config.apiKey,n.name)}async function kv(n,e,t=!1){if(Tt(n.app))return Promise.reject(cn(n));const r=vr(n),s=Iv(r,e),a=await new bv(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=10*60*1e3;class Ov{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!zp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError($t(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fh(e))}saveEventToCache(e){this.cachedEventUids.add(Fh(e)),this.lastProcessedEventTime=Date.now()}}function Fh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(n,e={}){return Yn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fv=/^https?/;async function Uv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Mv(n);for(const t of e)try{if(Bv(t))return}catch{}Vt(n,"unauthorized-domain")}function Bv(n){const e=pc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Fv.test(t))return!1;if(Lv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new Ei(3e4,6e4);function Uh(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $v(n){return new Promise((e,t)=>{var s,i,a;function r(){Uh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uh(),t($t(n,"network-request-failed"))},timeout:jv.get()})}if((i=(s=qt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=qt().gapi)!=null&&a.load)r();else{const c=NI("iframefcb");return qt()[c]=()=>{gapi.load?r():t($t(n,"network-request-failed"))},Dp(`${kI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ro=null,e})}let ro=null;function qv(n){return ro=ro||$v(n),ro}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Ei(5e3,15e3),Wv="__/auth/iframe",Kv="emulator/auth/iframe",zv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qv(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?al(e,Kv):`https://${n.config.authDomain}/${Wv}`,r={apiKey:e.apiKey,appName:n.name,v:is},s=Gv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${_i(r).slice(1)}`}async function Jv(n){const e=await qv(n),t=qt().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:Qv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=$t(n,"network-request-failed"),c=qt().setTimeout(()=>{i(a)},Hv.get());function l(){qt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xv=500,Zv=600,ew="_blank",tw="http://localhost";class Bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nw(n,e,t,r=Xv,s=Zv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Yv,width:r.toString(),height:s.toString(),top:i,left:a},h=st().toLowerCase();t&&(c=Ap(h)?ew:t),vp(h)&&(e=e||tw,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[R,V])=>`${_}${R}=${V},`,"");if(wI(h)&&c!=="_self")return rw(e||"",c),new Bh(null);const p=window.open(e||"",c,d);Z(p,n,"popup-blocked");try{p.focus()}catch{}return new Bh(p)}function rw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="__/auth/handler",iw="emulator/auth/handler",ow=encodeURIComponent("fac");async function jh(n,e,t,r,s,i){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:is,eventId:s};if(e instanceof Op){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",WE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Ii){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${ow}=${encodeURIComponent(l)}`:"";return`${aw(n)}?${_i(c).slice(1)}${h}`}function aw({config:n}){return n.emulator?al(n,iw):`https://${n.authDomain}/${sw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="webStorageSupport";class cw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jp,this._completeRedirectFn=kv,this._overrideRedirectResult=Cv}async _openPopup(e,t,r,s){var a;fn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await jh(e,t,r,pc(),s);return nw(e,i,fl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await jh(e,t,r,pc(),s);return hv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Jv(e),r=new Ov(e);return t.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ha,{type:Ha},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Ha];i!==void 0&&t(!!i),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Uv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cp()||wp()||ll()}}const lw=cw;var $h="@firebase/auth",qh="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fw(n){Xr(new _r("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;Z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vp(n)},h=new CI(r,s,i,l);return UI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new _r("auth-internal",e=>{const t=vr(e.getProvider("auth").getImmediate());return(r=>new uw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),On($h,qh,hw(n)),On($h,qh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=5*60,pw=op("authIdTokenMaxAge")||dw;let Hh=null;const gw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>pw)return;const s=t==null?void 0:t.token;Hh!==s&&(Hh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mw(n=hp()){const e=il(n,"auth");if(e.isInitialized())return e.getImmediate();const t=FI(n,{popupRedirectResolver:lw,persistence:[Tv,cv,jp]}),r=op("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=gw(i.toString());rv(t,a,()=>a(t.currentUser)),nv(t,c=>a(c))}}const s=sp("auth");return s&&BI(t,`http://${s}`),t}function _w(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}VI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=$t("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",_w().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fw("Browser");var Wh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,Gp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function T(){}T.prototype=m.prototype,v.F=m.prototype,v.prototype=new T,v.prototype.constructor=v,v.D=function(A,I,S){for(var E=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)E[Be-2]=arguments[Be];return m.prototype[I].apply(A,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,T){T||(T=0);const A=Array(16);if(typeof m=="string")for(var I=0;I<16;++I)A[I]=m.charCodeAt(T++)|m.charCodeAt(T++)<<8|m.charCodeAt(T++)<<16|m.charCodeAt(T++)<<24;else for(I=0;I<16;++I)A[I]=m[T++]|m[T++]<<8|m[T++]<<16|m[T++]<<24;m=v.g[0],T=v.g[1],I=v.g[2];let S=v.g[3],E;E=m+(S^T&(I^S))+A[0]+3614090360&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(I^m&(T^I))+A[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=I+(T^S&(m^T))+A[2]+606105819&4294967295,I=S+(E<<17&4294967295|E>>>15),E=T+(m^I&(S^m))+A[3]+3250441966&4294967295,T=I+(E<<22&4294967295|E>>>10),E=m+(S^T&(I^S))+A[4]+4118548399&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(I^m&(T^I))+A[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=I+(T^S&(m^T))+A[6]+2821735955&4294967295,I=S+(E<<17&4294967295|E>>>15),E=T+(m^I&(S^m))+A[7]+4249261313&4294967295,T=I+(E<<22&4294967295|E>>>10),E=m+(S^T&(I^S))+A[8]+1770035416&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(I^m&(T^I))+A[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=I+(T^S&(m^T))+A[10]+4294925233&4294967295,I=S+(E<<17&4294967295|E>>>15),E=T+(m^I&(S^m))+A[11]+2304563134&4294967295,T=I+(E<<22&4294967295|E>>>10),E=m+(S^T&(I^S))+A[12]+1804603682&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(I^m&(T^I))+A[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=I+(T^S&(m^T))+A[14]+2792965006&4294967295,I=S+(E<<17&4294967295|E>>>15),E=T+(m^I&(S^m))+A[15]+1236535329&4294967295,T=I+(E<<22&4294967295|E>>>10),E=m+(I^S&(T^I))+A[1]+4129170786&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^I&(m^T))+A[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=I+(m^T&(S^m))+A[11]+643717713&4294967295,I=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(I^S))+A[0]+3921069994&4294967295,T=I+(E<<20&4294967295|E>>>12),E=m+(I^S&(T^I))+A[5]+3593408605&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^I&(m^T))+A[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=I+(m^T&(S^m))+A[15]+3634488961&4294967295,I=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(I^S))+A[4]+3889429448&4294967295,T=I+(E<<20&4294967295|E>>>12),E=m+(I^S&(T^I))+A[9]+568446438&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^I&(m^T))+A[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=I+(m^T&(S^m))+A[3]+4107603335&4294967295,I=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(I^S))+A[8]+1163531501&4294967295,T=I+(E<<20&4294967295|E>>>12),E=m+(I^S&(T^I))+A[13]+2850285829&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^I&(m^T))+A[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=I+(m^T&(S^m))+A[7]+1735328473&4294967295,I=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(I^S))+A[12]+2368359562&4294967295,T=I+(E<<20&4294967295|E>>>12),E=m+(T^I^S)+A[5]+4294588738&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^I)+A[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=I+(S^m^T)+A[11]+1839030562&4294967295,I=S+(E<<16&4294967295|E>>>16),E=T+(I^S^m)+A[14]+4259657740&4294967295,T=I+(E<<23&4294967295|E>>>9),E=m+(T^I^S)+A[1]+2763975236&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^I)+A[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=I+(S^m^T)+A[7]+4139469664&4294967295,I=S+(E<<16&4294967295|E>>>16),E=T+(I^S^m)+A[10]+3200236656&4294967295,T=I+(E<<23&4294967295|E>>>9),E=m+(T^I^S)+A[13]+681279174&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^I)+A[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=I+(S^m^T)+A[3]+3572445317&4294967295,I=S+(E<<16&4294967295|E>>>16),E=T+(I^S^m)+A[6]+76029189&4294967295,T=I+(E<<23&4294967295|E>>>9),E=m+(T^I^S)+A[9]+3654602809&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^I)+A[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=I+(S^m^T)+A[15]+530742520&4294967295,I=S+(E<<16&4294967295|E>>>16),E=T+(I^S^m)+A[2]+3299628645&4294967295,T=I+(E<<23&4294967295|E>>>9),E=m+(I^(T|~S))+A[0]+4096336452&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~I))+A[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=I+(m^(S|~T))+A[14]+2878612391&4294967295,I=S+(E<<15&4294967295|E>>>17),E=T+(S^(I|~m))+A[5]+4237533241&4294967295,T=I+(E<<21&4294967295|E>>>11),E=m+(I^(T|~S))+A[12]+1700485571&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~I))+A[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=I+(m^(S|~T))+A[10]+4293915773&4294967295,I=S+(E<<15&4294967295|E>>>17),E=T+(S^(I|~m))+A[1]+2240044497&4294967295,T=I+(E<<21&4294967295|E>>>11),E=m+(I^(T|~S))+A[8]+1873313359&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~I))+A[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=I+(m^(S|~T))+A[6]+2734768916&4294967295,I=S+(E<<15&4294967295|E>>>17),E=T+(S^(I|~m))+A[13]+1309151649&4294967295,T=I+(E<<21&4294967295|E>>>11),E=m+(I^(T|~S))+A[4]+4149444226&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~I))+A[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=I+(m^(S|~T))+A[2]+718787259&4294967295,I=S+(E<<15&4294967295|E>>>17),E=T+(S^(I|~m))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+S&4294967295}r.prototype.v=function(v,m){m===void 0&&(m=v.length);const T=m-this.blockSize,A=this.C;let I=this.h,S=0;for(;S<m;){if(I==0)for(;S<=T;)s(this,v,S),S+=this.blockSize;if(typeof v=="string"){for(;S<m;)if(A[I++]=v.charCodeAt(S++),I==this.blockSize){s(this,A),I=0;break}}else for(;S<m;)if(A[I++]=v[S++],I==this.blockSize){s(this,A),I=0;break}}this.h=I,this.o+=m},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;m=this.o*8;for(var T=v.length-8;T<v.length;++T)v[T]=m&255,m/=256;for(this.v(v),v=Array(16),m=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)v[m++]=this.g[T]>>>A&255;return v};function i(v,m){var T=c;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=m(v)}function a(v,m){this.h=m;const T=[];let A=!0;for(let I=v.length-1;I>=0;I--){const S=v[I]|0;A&&S==m||(T[I]=S,A=!1)}this.g=T}var c={};function l(v){return-128<=v&&v<128?i(v,function(m){return new a([m|0],m<0?-1:0)}):new a([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return B(h(-v));const m=[];let T=1;for(let A=0;v>=T;A++)m[A]=v/T|0,T*=4294967296;return new a(m,0)}function d(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return B(d(v.substring(1),m));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(m,8));let A=p;for(let S=0;S<v.length;S+=8){var I=Math.min(8,v.length-S);const E=parseInt(v.substring(S,S+I),m);I<8?(I=h(Math.pow(m,I)),A=A.j(I).add(h(E))):(A=A.j(T),A=A.add(h(E)))}return A}var p=l(0),_=l(1),R=l(16777216);n=a.prototype,n.m=function(){if(M(this))return-B(this).m();let v=0,m=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);v+=(A>=0?A:4294967296+A)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(M(this))return"-"+B(this).toString(v);const m=h(Math.pow(v,6));var T=this;let A="";for(;;){const I=z(T,m).g;T=K(T,I.j(m));let S=((T.g.length>0?T.g[0]:T.h)>>>0).toString(v);if(T=I,V(T))return S+A;for(;S.length<6;)S="0"+S;A=S+A}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(let m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function M(v){return v.h==-1}n.l=function(v){return v=K(this,v),M(v)?-1:V(v)?0:1};function B(v){const m=v.g.length,T=[];for(let A=0;A<m;A++)T[A]=~v.g[A];return new a(T,~v.h).add(_)}n.abs=function(){return M(this)?B(this):this},n.add=function(v){const m=Math.max(this.g.length,v.g.length),T=[];let A=0;for(let I=0;I<=m;I++){let S=A+(this.i(I)&65535)+(v.i(I)&65535),E=(S>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);A=E>>>16,S&=65535,E&=65535,T[I]=E<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function K(v,m){return v.add(B(m))}n.j=function(v){if(V(this)||V(v))return p;if(M(this))return M(v)?B(this).j(B(v)):B(B(this).j(v));if(M(v))return B(this.j(B(v)));if(this.l(R)<0&&v.l(R)<0)return h(this.m()*v.m());const m=this.g.length+v.g.length,T=[];for(var A=0;A<2*m;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let I=0;I<v.g.length;I++){const S=this.i(A)>>>16,E=this.i(A)&65535,Be=v.i(I)>>>16,kt=v.i(I)&65535;T[2*A+2*I]+=E*kt,G(T,2*A+2*I),T[2*A+2*I+1]+=S*kt,G(T,2*A+2*I+1),T[2*A+2*I+1]+=E*Be,G(T,2*A+2*I+1),T[2*A+2*I+2]+=S*Be,G(T,2*A+2*I+2)}for(v=0;v<m;v++)T[v]=T[2*v+1]<<16|T[2*v];for(v=m;v<2*m;v++)T[v]=0;return new a(T,0)};function G(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function te(v,m){this.g=v,this.h=m}function z(v,m){if(V(m))throw Error("division by zero");if(V(v))return new te(p,p);if(M(v))return m=z(B(v),m),new te(B(m.g),B(m.h));if(M(m))return m=z(v,B(m)),new te(B(m.g),m.h);if(v.g.length>30){if(M(v)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var T=_,A=m;A.l(v)<=0;)T=ue(T),A=ue(A);var I=Ae(T,1),S=Ae(A,1);for(A=Ae(A,2),T=Ae(T,2);!V(A);){var E=S.add(A);E.l(v)<=0&&(I=I.add(T),S=E),A=Ae(A,1),T=Ae(T,1)}return m=K(v,I.j(m)),new te(I,m)}for(I=p;v.l(m)>=0;){for(T=Math.max(1,Math.floor(v.m()/m.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),S=h(T),E=S.j(m);M(E)||E.l(v)>0;)T-=A,S=h(T),E=S.j(m);V(S)&&(S=_),I=I.add(S),v=K(v,E)}return new te(I,v)}n.B=function(v){return z(this,v).h},n.and=function(v){const m=Math.max(this.g.length,v.g.length),T=[];for(let A=0;A<m;A++)T[A]=this.i(A)&v.i(A);return new a(T,this.h&v.h)},n.or=function(v){const m=Math.max(this.g.length,v.g.length),T=[];for(let A=0;A<m;A++)T[A]=this.i(A)|v.i(A);return new a(T,this.h|v.h)},n.xor=function(v){const m=Math.max(this.g.length,v.g.length),T=[];for(let A=0;A<m;A++)T[A]=this.i(A)^v.i(A);return new a(T,this.h^v.h)};function ue(v){const m=v.g.length+1,T=[];for(let A=0;A<m;A++)T[A]=v.i(A)<<1|v.i(A-1)>>>31;return new a(T,v.h)}function Ae(v,m){const T=m>>5;m%=32;const A=v.g.length-T,I=[];for(let S=0;S<A;S++)I[S]=m>0?v.i(S+T)>>>m|v.i(S+T+1)<<32-m:v.i(S+T);return new a(I,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Gp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,xn=a}).apply(typeof Wh<"u"?Wh:typeof self<"u"?self:typeof window<"u"?window:{});var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qp,Ms,Jp,so,yc,Yp,Xp,Zp;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hi=="object"&&Hi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var b=o[g];if(!(b in f))break e;f=f[b]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=l,h.apply(null,arguments)}function d(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,b,P){for(var j=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)j[oe-2]=arguments[oe];return u.prototype[b].apply(g,j)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function V(o,u){for(let g=1;g<arguments.length;g++){const b=arguments[g];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=o.length||0;const P=b.length||0;o.length=f+P;for(let j=0;j<P;j++)o[f+j]=b[j]}else o.push(b)}}class M{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){a.setTimeout(()=>{throw o},0)}function K(){var o=v;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,f){const g=te.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var te=new M(()=>new z,o=>o.reset());class z{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,Ae=!1,v=new G,m=()=>{const o=Promise.resolve(void 0);ue=()=>{o.then(T)}};function T(){for(var o;o=K();){try{o.h.call(o.g)}catch(f){B(f)}var u=te;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}Ae=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o}();function E(o){return/^[\s\xa0]*$/.test(o)}function Be(o,u){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(Be,I),Be.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var kt="closure_listenable_"+(Math.random()*1e6|0),He=0;function Re(o,u,f,g,b){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=b,this.key=++He,this.da=this.fa=!1}function ge(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Et(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function Sr(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function Nt(o){const u={};for(const f in o)u[f]=o[f];return u}const ft="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fs(o,u){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)o[f]=g[f];for(let P=0;P<ft.length;P++)f=ft[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function br(o){this.src=o,this.g={},this.h=0}br.prototype.add=function(o,u,f,g,b){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const j=Jt(o,u,g,b);return j>-1?(u=o[j],f||(u.fa=!1)):(u=new Re(u,this.src,P,!!g,b),u.fa=f,o.push(u)),u};function ds(o,u){const f=u.type;if(f in o.g){var g=o.g[f],b=Array.prototype.indexOf.call(g,u,void 0),P;(P=b>=0)&&Array.prototype.splice.call(g,b,1),P&&(ge(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Jt(o,u,f,g){for(let b=0;b<o.length;++b){const P=o[b];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return b}return-1}var _n="closure_lm_"+(Math.random()*1e6|0),er={};function ps(o,u,f,g,b){if(Array.isArray(u)){for(let P=0;P<u.length;P++)ps(o,u[P],f,g,b);return null}return f=$(f),o&&o[kt]?o.J(u,f,c(g)?!!g.capture:!1,b):tr(o,u,f,!1,g,b)}function tr(o,u,f,g,b,P){if(!u)throw Error("Invalid event type");const j=c(b)?!!b.capture:!!b;let oe=N(o);if(oe||(o[_n]=oe=new br(o)),f=oe.add(u,f,g,j,P),f.proxy)return f;if(g=Jl(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)S||(b=j),b===void 0&&(b=!1),o.addEventListener(u.toString(),g,b);else if(o.attachEvent)o.attachEvent(C(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Jl(){function o(f){return u.call(o.src,o.listener,f)}const u=U;return o}function y(o,u,f,g,b){if(Array.isArray(u))for(var P=0;P<u.length;P++)y(o,u[P],f,g,b);else g=c(g)?!!g.capture:!!g,f=$(f),o&&o[kt]?(o=o.i,P=String(u).toString(),P in o.g&&(u=o.g[P],f=Jt(u,f,g,b),f>-1&&(ge(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[P],o.h--)))):o&&(o=N(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Jt(u,f,g,b)),(f=o>-1?u[o]:null)&&w(f))}function w(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[kt])ds(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(C(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=N(u))?(ds(f,o),f.h==0&&(f.src=null,u[_n]=null)):ge(o)}}}function C(o){return o in er?er[o]:er[o]="on"+o}function U(o,u){if(o.da)o=!0;else{u=new Be(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&w(o),o=f.call(g,u)}return o}function N(o){return o=o[_n],o instanceof br?o:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function $(o){return typeof o=="function"?o:(o[O]||(o[O]=function(u){return o.handleEvent(u)}),o[O])}function F(){A.call(this),this.i=new br(this),this.M=this,this.G=null}p(F,A),F.prototype[kt]=!0,F.prototype.removeEventListener=function(o,u,f,g){y(this,o,u,f,g)};function L(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new I(u,o);else if(u instanceof I)u.target=u.target||o;else{var b=u;u=new I(g,o),fs(u,b)}b=!0;let P,j;if(f)for(j=f.length-1;j>=0;j--)P=u.g=f[j],b=x(P,g,!0,u)&&b;if(P=u.g=o,b=x(P,g,!0,u)&&b,b=x(P,g,!1,u)&&b,f)for(j=0;j<f.length;j++)P=u.g=f[j],b=x(P,g,!1,u)&&b}F.prototype.N=function(){if(F.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)ge(f[g]);delete o.g[u],o.h--}}this.G=null},F.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},F.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function x(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let b=!0;for(let P=0;P<u.length;++P){const j=u[P];if(j&&!j.da&&j.capture==f){const oe=j.listener,Le=j.ha||j.src;j.fa&&ds(o.i,j),b=oe.call(Le,g)!==!1&&b}}return b&&!g.defaultPrevented}function Y(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function q(o){o.g=Y(()=>{o.g=null,o.i&&(o.i=!1,q(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class J extends A{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:q(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function X(o){A.call(this),this.h=o,this.g={}}p(X,A);var ae=[];function Ee(o){Et(o.g,function(u,f){this.g.hasOwnProperty(f)&&w(u)},o),o.g={}}X.prototype.N=function(){X.Z.N.call(this),Ee(this)},X.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var de=a.JSON.stringify,Je=a.JSON.parse,Ye=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function dt(){}function pt(){}var At={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Pr(){I.call(this,"d")}p(Pr,I);function We(){I.call(this,"c")}p(We,I);var je={},gs=null;function nr(){return gs=gs||new F}je.Ia="serverreachability";function Yl(o){I.call(this,je.Ia,o)}p(Yl,I);function ms(o){const u=nr();L(u,new Yl(u))}je.STAT_EVENT="statevent";function Xl(o,u){I.call(this,je.STAT_EVENT,o),this.stat=u}p(Xl,I);function it(o){const u=nr();L(u,new Xl(u,o))}je.Ja="timingevent";function Zl(o,u){I.call(this,je.Ja,o),this.size=u}p(Zl,I);function _s(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function ys(){this.g=!0}ys.prototype.ua=function(){this.g=!1};function Sm(o,u,f,g,b,P){o.info(function(){if(o.g)if(P){var j="",oe=P.split("&");for(let Te=0;Te<oe.length;Te++){var Le=oe[Te].split("=");if(Le.length>1){const $e=Le[0];Le=Le[1];const xt=$e.split("_");j=xt.length>=2&&xt[1]=="type"?j+($e+"="+Le+"&"):j+($e+"=redacted&")}}}else j=null;else j=P;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+u+`
`+f+`
`+j})}function bm(o,u,f,g,b,P,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+u+`
`+f+`
`+P+" "+j})}function Cr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Cm(o,f)+(g?" "+g:"")})}function Pm(o,u){o.info(function(){return"TIMEOUT: "+u})}ys.prototype.info=function(){};function Cm(o,u){if(!o.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var f=P[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var b=g[0];if(b!="noop"&&b!="stop"&&b!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return de(P)}catch{return u}}var Vi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},eu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tu;function fa(){}p(fa,dt),fa.prototype.g=function(){return new XMLHttpRequest},tu=new fa;function Es(o){return encodeURIComponent(String(o))}function Vm(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function yn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new X(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}var ru={},da={};function pa(o,u,f){o.M=1,o.A=ki(Ot(u)),o.u=f,o.R=!0,su(o,null)}function su(o,u){o.F=Date.now(),Di(o),o.B=Ot(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),_u(f.i,"t",g),o.C=0,f=o.j.L,o.h=new nu,o.g=xu(o.j,f?u:null,!o.u),o.P>0&&(o.O=new J(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(ae[0]=b.toString()),b=ae);for(let P=0;P<b.length;P++){const j=ps(f,b[P],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.J?Nt(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),ms(),Sm(o.i,o.v,o.B,o.l,o.S,o.u)}yn.prototype.ba=function(o){o=o.target;const u=this.O;u&&In(o)==3?u.j():this.Y(o)},yn.prototype.Y=function(o){try{if(o==this.g)e:{const oe=In(this.g),Le=this.g.ya(),Te=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Au(this.g)))){this.K||oe!=4||Le==7||(Le==8||Te<=0?ms(3):ms(2)),ga(this);var u=this.g.ca();this.X=u;var f=Dm(this);if(this.o=u==200,bm(this.i,this.v,this.B,this.l,this.S,oe,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,b=this.g;if((g=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var P=g;break t}}P=null}if(o=P)Cr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ma(this,o);else{this.o=!1,this.m=3,it(12),rr(this),Ts(this);break e}}if(this.R){o=!0;let $e;for(;!this.K&&this.C<f.length;)if($e=km(this,f),$e==da){oe==4&&(this.m=4,it(14),o=!1),Cr(this.i,this.l,null,"[Incomplete Response]");break}else if($e==ru){this.m=4,it(15),Cr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Cr(this.i,this.l,$e,null),ma(this,$e);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||f.length!=0||this.h.h||(this.m=1,it(16),o=!1),this.o=this.o&&o,!o)Cr(this.i,this.l,f,"[Invalid Chunked Response]"),rr(this),Ts(this);else if(f.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Aa(j),j.P=!0,it(11))}}else Cr(this.i,this.l,f,null),ma(this,f);oe==4&&rr(this),this.o&&!this.K&&(oe==4?Du(this.j,this):(this.o=!1,Di(this)))}else Km(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),rr(this),Ts(this)}}}catch{}finally{}};function Dm(o){if(!iu(o))return o.g.la();const u=Au(o.g);if(u==="")return"";let f="";const g=u.length,b=In(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return rr(o),Ts(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<g;P++)o.h.h=!0,f+=o.h.i.decode(u[P],{stream:!(b&&P==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function iu(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function km(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?da:(f=Number(u.substring(f,g)),isNaN(f)?ru:(g+=1,g+f>u.length?da:(u=u.slice(g,g+f),o.C=g+f,u)))}yn.prototype.cancel=function(){this.K=!0,rr(this)};function Di(o){o.T=Date.now()+o.H,ou(o,o.H)}function ou(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=_s(h(o.aa,o),u)}function ga(o){o.D&&(a.clearTimeout(o.D),o.D=null)}yn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Pm(this.i,this.B),this.M!=2&&(ms(),it(17)),rr(this),this.m=2,Ts(this)):ou(this,this.T-o)};function Ts(o){o.j.I==0||o.K||Du(o.j,o)}function rr(o){ga(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Ee(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function ma(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||_a(f.h,o))){if(!o.L&&_a(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Li(f),xi(f);else break e;wa(f),it(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=_s(h(f.Va,f),6e3));lu(f.h)<=1&&f.ta&&(f.ta=void 0)}else ir(f,11)}else if((o.L||f.g==o)&&Li(f),!E(u))for(b=f.Ba.g.parse(u),u=0;u<b.length;u++){let Te=b[u];const $e=Te[0];if(!($e<=f.K))if(f.K=$e,Te=Te[1],f.I==2)if(Te[0]=="c"){f.M=Te[1],f.ba=Te[2];const xt=Te[3];xt!=null&&(f.ka=xt,f.j.info("VER="+f.ka));const or=Te[4];or!=null&&(f.za=or,f.j.info("SVER="+f.za));const vn=Te[5];vn!=null&&typeof vn=="number"&&vn>0&&(g=1.5*vn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const wn=o.g;if(wn){const Ui=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var P=g.h;P.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ya(P,P.h),P.h=null))}if(g.G){const Ra=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ra&&(g.wa=Ra,Se(g.J,g.G,Ra))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var j=o;if(g.na=Ou(g,g.L?g.ba:null,g.W),j.L){uu(g.h,j);var oe=j,Le=g.O;Le&&(oe.H=Le),oe.D&&(ga(oe),Di(oe)),g.g=j}else Cu(g);f.i.length>0&&Mi(f)}else Te[0]!="stop"&&Te[0]!="close"||ir(f,7);else f.I==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?ir(f,7):va(f):Te[0]!="noop"&&f.l&&f.l.qa(Te),f.A=0)}}ms(4)}catch{}}var Nm=class{constructor(o,u){this.g=o,this.map=u}};function au(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function lu(o){return o.h?1:o.g?o.g.size:0}function _a(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ya(o,u){o.g?o.g.add(u):o.h=u}function uu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}au.prototype.cancel=function(){if(this.i=hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return R(o.i)}var fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Om(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let b,P=null;g>=0?(b=o[f].substring(0,g),P=o[f].substring(g+1)):b=o[f],u(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function En(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof En?(this.l=o.l,Is(this,o.j),this.o=o.o,this.g=o.g,vs(this,o.u),this.h=o.h,Ea(this,yu(o.i)),this.m=o.m):o&&(u=String(o).match(fu))?(this.l=!1,Is(this,u[1]||"",!0),this.o=ws(u[2]||""),this.g=ws(u[3]||"",!0),vs(this,u[4]),this.h=ws(u[5]||"",!0),Ea(this,u[6]||"",!0),this.m=ws(u[7]||"")):(this.l=!1,this.i=new Rs(null,this.l))}En.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(As(u,du,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(As(u,du,!0),"@"),o.push(Es(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(As(f,f.charAt(0)=="/"?Lm:Mm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",As(f,Um)),o.join("")},En.prototype.resolve=function(o){const u=Ot(this);let f=!!o.j;f?Is(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)vs(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var b=u.h.lastIndexOf("/");b!=-1&&(g=u.h.slice(0,b+1)+g)}if(b=g,b==".."||b==".")g="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){g=b.lastIndexOf("/",0)==0,b=b.split("/");const P=[];for(let j=0;j<b.length;){const oe=b[j++];oe=="."?g&&j==b.length&&P.push(""):oe==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&j==b.length&&P.push("")):(P.push(oe),g=!0)}g=P.join("/")}else g=b}return f?u.h=g:f=o.i.toString()!=="",f?Ea(u,yu(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Ot(o){return new En(o)}function Is(o,u,f){o.j=f?ws(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function vs(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Ea(o,u,f){u instanceof Rs?(o.i=u,Bm(o.i,o.l)):(f||(u=As(u,Fm)),o.i=new Rs(u,o.l))}function Se(o,u,f){o.i.set(u,f)}function ki(o){return Se(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ws(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function As(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,xm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var du=/[#\/\?@]/g,Mm=/[#\?:]/g,Lm=/[#\?]/g,Fm=/[#\?@]/g,Um=/#/g;function Rs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function sr(o){o.g||(o.g=new Map,o.h=0,o.i&&Om(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Rs.prototype,n.add=function(o,u){sr(this),this.i=null,o=Vr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function pu(o,u){sr(o),u=Vr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function gu(o,u){return sr(o),u=Vr(o,u),o.g.has(u)}n.forEach=function(o,u){sr(this),this.g.forEach(function(f,g){f.forEach(function(b){o.call(u,b,g,this)},this)},this)};function mu(o,u){sr(o);let f=[];if(typeof u=="string")gu(o,u)&&(f=f.concat(o.g.get(Vr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}n.set=function(o,u){return sr(this),this.i=null,o=Vr(this,o),gu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=mu(this,o),o.length>0?String(o[0]):u):u};function _u(o,u,f){pu(o,u),f.length>0&&(o.i=null,o.g.set(Vr(o,u),R(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const b=Es(f);f=mu(this,f);for(let P=0;P<f.length;P++){let j=b;f[P]!==""&&(j+="="+Es(f[P])),o.push(j)}}return this.i=o.join("&")};function yu(o){const u=new Rs;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Vr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Bm(o,u){u&&!o.j&&(sr(o),o.i=null,o.g.forEach(function(f,g){const b=g.toLowerCase();g!=b&&(pu(this,g),_u(this,b,f))},o)),o.j=u}function jm(o,u){const f=new ys;if(a.Image){const g=new Image;g.onload=d(Tn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=d(Tn,f,"TestLoadImage: error",!1,u,g),g.onabort=d(Tn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=d(Tn,f,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function $m(o,u){const f=new ys,g=new AbortController,b=setTimeout(()=>{g.abort(),Tn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(b),P.ok?Tn(f,"TestPingServer: ok",!0,u):Tn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),Tn(f,"TestPingServer: error",!1,u)})}function Tn(o,u,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function qm(){this.g=new Ye}function Ta(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Ta,dt),Ta.prototype.g=function(){return new Ni(this.i,this.h)};function Ni(o,u){F.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ni,F),n=Ni.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,bs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Eu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Eu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ss(this):bs(this),this.readyState==3&&Eu(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ss(this))},n.Na=function(o){this.g&&(this.response=o,Ss(this))},n.ga=function(){this.g&&Ss(this)};function Ss(o){o.readyState=4,o.l=null,o.j=null,o.B=null,bs(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function bs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Tu(o){let u="";return Et(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ia(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Tu(f),typeof o=="string"?f!=null&&Es(f):Se(o,u,f))}function Ve(o){F.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ve,F);var Hm=/^https?$/i,Wm=["POST","PUT"];n=Ve.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tu.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Iu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Wm,u,void 0)>=0)||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of f)this.g.setRequestHeader(P,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Iu(this,P)}};function Iu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,vu(o),Oi(o)}function vu(o){o.A||(o.A=!0,L(o,"complete"),L(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,L(this,"complete"),L(this,"abort"),Oi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oi(this,!0)),Ve.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?wu(this):this.Xa())},n.Xa=function(){wu(this)};function wu(o){if(o.h&&typeof i<"u"){if(o.v&&In(o)==4)setTimeout(o.Ca.bind(o),0);else if(L(o,"readystatechange"),In(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=P===0){let j=String(o.D).match(fu)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),g=!Hm.test(j?j.toLowerCase():"")}f=g}if(f)L(o,"complete"),L(o,"success");else{o.o=6;try{var b=In(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",vu(o)}}finally{Oi(o)}}}}function Oi(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||L(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function In(o){return o.g?o.g.readyState:0}n.ca=function(){try{return In(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Je(u)}};function Au(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Km(o){const u={};o=(o.g&&In(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(E(o[g]))continue;var f=Vm(o[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[b]||[];u[b]=P,P.push(f)}Sr(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Ru(o){this.za=0,this.i=[],this.j=new ys,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ps("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ps("baseRetryDelayMs",5e3,o),this.Za=Ps("retryDelaySeedMs",1e4,o),this.Ta=Ps("forwardChannelMaxRetries",2,o),this.va=Ps("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new au(o&&o.concurrentRequestLimit),this.Ba=new qm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ru.prototype,n.ka=8,n.I=1,n.connect=function(o,u,f,g){it(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Ou(this,null,this.W),Mi(this)};function va(o){if(Su(o),o.I==3){var u=o.V++,f=Ot(o.J);if(Se(f,"SID",o.M),Se(f,"RID",u),Se(f,"TYPE","terminate"),Cs(o,f),u=new yn(o,o.j,u),u.M=2,u.A=ki(Ot(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=xu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Di(u)}Nu(o)}function xi(o){o.g&&(Aa(o),o.g.cancel(),o.g=null)}function Su(o){xi(o),o.v&&(a.clearTimeout(o.v),o.v=null),Li(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Mi(o){if(!cu(o.h)&&!o.m){o.m=!0;var u=o.Ea;ue||m(),Ae||(ue(),Ae=!0),v.add(u,o),o.D=0}}function zm(o,u){return lu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=_s(h(o.Ea,o,u),ku(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new yn(this,this.j,o);let P=this.o;if(this.U&&(P?(P=Nt(P),fs(P,this.U)):P=this.U),this.u!==null||this.R||(b.J=P,P=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Pu(this,b,u),f=Ot(this.J),Se(f,"RID",o),Se(f,"CVER",22),this.G&&Se(f,"X-HTTP-Session-Id",this.G),Cs(this,f),P&&(this.R?u="headers="+Es(Tu(P))+"&"+u:this.u&&Ia(f,this.u,P)),ya(this.h,b),this.Ra&&Se(f,"TYPE","init"),this.S?(Se(f,"$req",u),Se(f,"SID","null"),b.U=!0,pa(b,f,null)):pa(b,f,u),this.I=2}}else this.I==3&&(o?bu(this,o):this.i.length==0||cu(this.h)||bu(this))};function bu(o,u){var f;u?f=u.l:f=o.V++;const g=Ot(o.J);Se(g,"SID",o.M),Se(g,"RID",f),Se(g,"AID",o.K),Cs(o,g),o.u&&o.o&&Ia(g,o.u,o.o),f=new yn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Pu(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ya(o.h,f),pa(f,g,u)}function Cs(o,u){o.H&&Et(o.H,function(f,g){Se(u,g,f)}),o.l&&Et({},function(f,g){Se(u,g,f)})}function Pu(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var b=o.i;let oe=-1;for(;;){const Le=["count="+f];oe==-1?f>0?(oe=b[0].g,Le.push("ofs="+oe)):oe=0:Le.push("ofs="+oe);let Te=!0;for(let $e=0;$e<f;$e++){var P=b[$e].g;const xt=b[$e].map;if(P-=oe,P<0)oe=Math.max(0,b[$e].g-100),Te=!1;else try{P="req"+P+"_"||"";try{var j=xt instanceof Map?xt:Object.entries(xt);for(const[or,vn]of j){let wn=vn;c(vn)&&(wn=de(vn)),Le.push(P+or+"="+encodeURIComponent(wn))}}catch(or){throw Le.push(P+"type="+encodeURIComponent("_badmap")),or}}catch{g&&g(xt)}}if(Te){j=Le.join("&");break e}}j=void 0}return o=o.i.splice(0,f),u.G=o,j}function Cu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;ue||m(),Ae||(ue(),Ae=!0),v.add(u,o),o.A=0}}function wa(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=_s(h(o.Da,o),ku(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Vu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=_s(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),xi(this),Vu(this))};function Aa(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Vu(o){o.g=new yn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Ot(o.na);Se(u,"RID","rpc"),Se(u,"SID",o.M),Se(u,"AID",o.K),Se(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Se(u,"TO",o.ia),Se(u,"TYPE","xmlhttp"),Cs(o,u),o.u&&o.o&&Ia(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=ki(Ot(u)),f.u=null,f.R=!0,su(f,o)}n.Va=function(){this.C!=null&&(this.C=null,xi(this),wa(this),it(19))};function Li(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Du(o,u){var f=null;if(o.g==u){Li(o),Aa(o),o.g=null;var g=2}else if(_a(o.h,u))f=u.G,uu(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var b=o.D;g=nr(),L(g,new Zl(g,f)),Mi(o)}else Cu(o);else if(b=u.m,b==3||b==0&&u.X>0||!(g==1&&zm(o,u)||g==2&&wa(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),b){case 1:ir(o,5);break;case 4:ir(o,10);break;case 3:ir(o,6);break;default:ir(o,2)}}}function ku(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function ir(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const b=!g;g=new En(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Is(g,"https"),ki(g),b?jm(g.toString(),f):$m(g.toString(),f)}else it(2);o.I=0,o.l&&o.l.pa(u),Nu(o),Su(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Nu(o){if(o.I=0,o.ja=[],o.l){const u=hu(o.h);(u.length!=0||o.i.length!=0)&&(V(o.ja,u),V(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function Ou(o,u,f){var g=f instanceof En?Ot(f):new En(f);if(g.g!="")u&&(g.g=u+"."+g.g),vs(g,g.u);else{var b=a.location;g=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;const P=new En(null);g&&Is(P,g),u&&(P.g=u),b&&vs(P,b),f&&(P.h=f),g=P}return f=o.G,u=o.wa,f&&u&&Se(g,f,u),Se(g,"VER",o.ka),Cs(o,g),g}function xu(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Ve(new Ta({ab:f})):new Ve(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}n=Mu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Fi(){}Fi.prototype.g=function(o,u){return new gt(o,u)};function gt(o,u){F.call(this),this.g=new Ru(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!E(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!E(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Dr(this)}p(gt,F),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){va(this.g)},gt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=de(o),o=f);u.i.push(new Nm(u.Ya++,o)),u.I==3&&Mi(u)},gt.prototype.N=function(){this.g.l=null,delete this.j,va(this.g),delete this.g,gt.Z.N.call(this)};function Lu(o){Pr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Lu,Pr);function Fu(){We.call(this),this.status=1}p(Fu,We);function Dr(o){this.g=o}p(Dr,Mu),Dr.prototype.ra=function(){L(this.g,"a")},Dr.prototype.qa=function(o){L(this.g,new Lu(o))},Dr.prototype.pa=function(o){L(this.g,new Fu)},Dr.prototype.oa=function(){L(this.g,"b")},Fi.prototype.createWebChannel=Fi.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Zp=function(){return new Fi},Xp=function(){return nr()},Yp=je,yc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,so=Vi,eu.COMPLETE="complete",Jp=eu,pt.EventType=At,At.OPEN="a",At.CLOSE="b",At.ERROR="c",At.MESSAGE="d",F.prototype.listen=F.prototype.J,Ms=pt,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,Qp=Ve}).apply(typeof Hi<"u"?Hi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as="12.13.0";function yw(n){as=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new rl("@firebase/firestore");function xr(){return Tr.logLevel}function H(n,...e){if(Tr.logLevel<=he.DEBUG){const t=e.map(pl);Tr.debug(`Firestore (${as}): ${n}`,...t)}}function dn(n,...e){if(Tr.logLevel<=he.ERROR){const t=e.map(pl);Tr.error(`Firestore (${as}): ${n}`,...t)}}function Ir(n,...e){if(Tr.logLevel<=he.WARN){const t=e.map(pl);Tr.warn(`Firestore (${as}): ${n}`,...t)}}function pl(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,eg(n,r,t)}function eg(n,e,t){let r=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw dn(r),new Error(r)}function ye(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||eg(e,s,r)}function se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends mn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ew{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ze.UNAUTHENTICATED))}shutdown(){}}class Tw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Iw{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new tg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class vw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ww{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new vw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Aw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Kh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Kh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Rw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function Ec(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Wa(s)===Wa(i)?ce(s,i):Wa(s)?1:-1}return ce(n.length,e.length)}const Sw=55296,bw=57343;function Wa(n){const e=n.charCodeAt(0);return e>=Sw&&e<=bw}function Zr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="__name__";class Ft{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ft.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ft?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ft.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ce(e.length,t.length)}static compareSegments(e,t){const r=Ft.isNumericId(e),s=Ft.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ft.extractNumericId(e).compare(Ft.extractNumericId(t)):Ec(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xn.fromString(e.substring(4,e.length-2))}}class we extends Ft{construct(e,t,r){return new we(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new we(t)}static emptyPath(){return new we([])}}const Pw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Ft{construct(e,t,r){return new Ge(e,t,r)}static isValidIdentifier(e){return Pw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zh}static keyField(){return new Ge([zh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new W(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(we.fromString(e))}static fromName(e){return new Q(we.fromString(e).popFirst(5))}static empty(){return new Q(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return we.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new we(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(n,e,t){if(!t)throw new W(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Cw(n,e,t,r){if(e===!0&&r===!0)throw new W(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gh(n){if(!Q.isDocumentKey(n))throw new W(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qh(n){if(Q.isDocumentKey(n))throw new W(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function rg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Xo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function Mn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xo(n);throw new W(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,e){const t={typeString:n};return e&&(t.value=e),t}function wi(n,e){if(!rg(n))throw new W(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new W(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=-62135596800,Yh=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Yh);return new be(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Jh)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yh}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wi(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:Oe("string",be._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new be(0,0))}static max(){return new ne(new be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=-1;function Vw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new be(t+1,0):new be(t,r));return new jn(s,Q.empty(),e)}function Dw(n){return new jn(n.readTime,n.key,oi)}class jn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new jn(ne.min(),Q.empty(),oi)}static max(){return new jn(ne.max(),Q.empty(),oi)}}function kw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ow{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Nw)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(d=>{a[h]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function xw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ls(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=-1;function ea(n){return n==null}function So(n){return n===0&&1/n==-1/0}function Mw(n){return typeof n=="number"&&Number.isInteger(n)&&!So(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="";function Lw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xh(e)),e=Fw(n.get(t),e);return Xh(e)}function Fw(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case sg:t+="";break;default:t+=i}}return t}function Xh(n){return n+sg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Xn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ig(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||Ke.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wi(this.root,e,this.comparator,!0)}}class Wi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ke(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ef(this.data.getIterator())}getIteratorFrom(e){return new ef(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Fe(this.comparator);return t.data=e,t}}class ef{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new yt([])}unionWith(e){let t=new Fe(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new yt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new og("Invalid base64 string: "+i):i}}(e);return new Qe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Uw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=Uw.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(n.seconds),nanos:De(n.nanos)}}function De(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qn(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="server_timestamp",cg="__type__",lg="__previous_value__",ug="__local_write_time__";function _l(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[cg])==null?void 0:r.stringValue)===ag}function ta(n){const e=n.mapValue.fields[lg];return _l(e)?ta(e):e}function ai(n){const e=$n(n.mapValue.fields[ug].timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,r,s,i,a,c,l,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const bo="(default)";class ci{constructor(e,t){this.projectId=e,this.database=t||bo}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database===bo}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}function jw(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new W(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="__type__",$w="__max__",Ki={mapValue:{}},fg="__vector__",Po="value";function Hn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_l(n)?4:Hw(n)?9007199254740991:qw(n)?10:11:ee(28295,{value:n})}function Gt(n,e){if(n===e)return!0;const t=Hn(n);if(t!==Hn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ai(n).isEqual(ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=$n(s.timestampValue),c=$n(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return qn(s.bytesValue).isEqual(qn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=De(s.doubleValue),c=De(i.doubleValue);return a===c?So(a)===So(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Zr(n.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Zh(a)!==Zh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Gt(a[l],c[l])))return!1;return!0}(n,e);default:return ee(52216,{left:n})}}function li(n,e){return(n.values||[]).find(t=>Gt(t,e))!==void 0}function es(n,e){if(n===e)return 0;const t=Hn(n),r=Hn(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=De(i.integerValue||i.doubleValue),l=De(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return tf(n.timestampValue,e.timestampValue);case 4:return tf(ai(n),ai(e));case 5:return Ec(n.stringValue,e.stringValue);case 6:return function(i,a){const c=qn(i),l=qn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ce(c[h],l[h]);if(d!==0)return d}return ce(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ce(De(i.latitude),De(a.latitude));return c!==0?c:ce(De(i.longitude),De(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return nf(n.arrayValue,e.arrayValue);case 10:return function(i,a){var _,R,V,M;const c=i.fields||{},l=a.fields||{},h=(_=c[Po])==null?void 0:_.arrayValue,d=(R=l[Po])==null?void 0:R.arrayValue,p=ce(((V=h==null?void 0:h.values)==null?void 0:V.length)||0,((M=d==null?void 0:d.values)==null?void 0:M.length)||0);return p!==0?p:nf(h,d)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ki.mapValue&&a===Ki.mapValue)return 0;if(i===Ki.mapValue)return 1;if(a===Ki.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const _=Ec(l[p],d[p]);if(_!==0)return _;const R=es(c[l[p]],h[d[p]]);if(R!==0)return R}return ce(l.length,d.length)}(n.mapValue,e.mapValue);default:throw ee(23264,{he:t})}}function tf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=$n(n),r=$n(e),s=ce(t.seconds,r.seconds);return s!==0?s:ce(t.nanos,r.nanos)}function nf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=es(t[s],r[s]);if(i)return i}return ce(t.length,r.length)}function ts(n){return Tc(n)}function Tc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=$n(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Tc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Tc(t.fields[a])}`;return s+"}"}(n.mapValue):ee(61005,{value:n})}function io(n){switch(Hn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ta(n);return e?16+io(e):16;case 5:return 2*n.stringValue.length;case 6:return qn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+io(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Xn(r.fields,(i,a)=>{s+=i.length+io(a)}),s}(n.mapValue);default:throw ee(13486,{value:n})}}function rf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ic(n){return!!n&&"integerValue"in n}function yl(n){return!!n&&"arrayValue"in n}function sf(n){return!!n&&"nullValue"in n}function of(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function oo(n){return!!n&&"mapValue"in n}function qw(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[hg])==null?void 0:r.stringValue)===fg}function Gs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Xn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Gs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gs(n.arrayValue.values[t]);return e}return{...n}}function Hw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$w}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!oo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(t)}setAll(e){let t=Ge.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Gs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());oo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];oo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Xn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ht(Gs(this.value))}}function dg(n){const e=[];return Xn(n.fields,(t,r)=>{const s=new Ge([t]);if(oo(r)){const i=dg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new tt(e,0,ne.min(),ne.min(),ne.min(),ht.empty(),0)}static newFoundDocument(e,t,r,s){return new tt(e,1,t,ne.min(),r,s,0)}static newNoDocument(e,t){return new tt(e,2,t,ne.min(),ne.min(),ht.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,ne.min(),ne.min(),ht.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){this.position=e,this.inclusive=t}}function af(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),t.key):r=es(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function cf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Gt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ww(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{}class Ne extends pg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new zw(e,t,r):t==="array-contains"?new Jw(e,r):t==="in"?new Yw(e,r):t==="not-in"?new Xw(e,r):t==="array-contains-any"?new Zw(e,r):new Ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Gw(e,r):new Qw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(es(t,this.value)):t!==null&&Hn(this.value)===Hn(t)&&this.matchesComparison(es(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends pg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Dt(e,t)}matches(e){return gg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gg(n){return n.op==="and"}function mg(n){return Kw(n)&&gg(n)}function Kw(n){for(const e of n.filters)if(e instanceof Dt)return!1;return!0}function vc(n){if(n instanceof Ne)return n.field.canonicalString()+n.op.toString()+ts(n.value);if(mg(n))return n.filters.map(e=>vc(e)).join(",");{const e=n.filters.map(t=>vc(t)).join(",");return`${n.op}(${e})`}}function _g(n,e){return n instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&Gt(r.value,s.value)}(n,e):n instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&_g(a,s.filters[c]),!0):!1}(n,e):void ee(19439)}function yg(n){return n instanceof Ne?function(t){return`${t.field.canonicalString()} ${t.op} ${ts(t.value)}`}(n):n instanceof Dt?function(t){return t.op.toString()+" {"+t.getFilters().map(yg).join(" ,")+"}"}(n):"Filter"}class zw extends Ne{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gw extends Ne{constructor(e,t){super(e,"in",t),this.keys=Eg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qw extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=Eg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Eg(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class Jw extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yl(t)&&li(t.arrayValue,this.value)}}class Yw extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&li(this.value.arrayValue,t)}}class Xw extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!li(this.value.arrayValue,t)}}class Zw extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>li(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function lf(n,e=null,t=[],r=[],s=null,i=null,a=null){return new eA(n,e,t,r,s,i,a)}function El(n){const e=se(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ea(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ts(r)).join(",")),e.Te=t}return e.Te}function Tl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ww(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!_g(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cf(n.startAt,e.startAt)&&cf(n.endAt,e.endAt)}function wc(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function tA(n,e,t,r,s,i,a,c){return new us(n,e,t,r,s,i,a,c)}function Il(n){return new us(n)}function uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nA(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Tg(n){return n.collectionGroup!==null}function Qs(n){const e=se(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Fe(Ge.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ui(i,r))}),t.has(Ge.keyField().canonicalString())||e.Ie.push(new ui(Ge.keyField(),r))}return e.Ie}function Ht(n){const e=se(n);return e.Ee||(e.Ee=rA(e,Qs(n))),e.Ee}function rA(n,e){if(n.limitType==="F")return lf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ui(s.field,i)});const t=n.endAt?new Co(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Co(n.startAt.position,n.startAt.inclusive):null;return lf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ac(n,e){const t=n.filters.concat([e]);return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function sA(n,e){const t=n.explicitOrderBy.concat([e]);return new us(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Rc(n,e,t){return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function na(n,e){return Tl(Ht(n),Ht(e))&&n.limitType===e.limitType}function Ig(n){return`${El(Ht(n))}|lt:${n.limitType}`}function Mr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>yg(s)).join(", ")}]`),ea(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ts(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ts(s)).join(",")),`Target(${r})`}(Ht(n))}; limitType=${n.limitType})`}function ra(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=af(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Qs(r),s)||r.endAt&&!function(a,c,l){const h=af(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Qs(r),s))}(n,e)}function iA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vg(n){return(e,t)=>{let r=!1;for(const s of Qs(n)){const i=oA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oA(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?es(l,h):ee(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ig(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new Ce(Q.comparator);function pn(){return aA}const wg=new Ce(Q.comparator);function Ls(...n){let e=wg;for(const t of n)e=e.insert(t.key,t);return e}function Ag(n){let e=wg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function fr(){return Js()}function Rg(){return Js()}function Js(){return new wr(n=>n.toString(),(n,e)=>n.isEqual(e))}const cA=new Ce(Q.comparator),lA=new Fe(Q.comparator);function le(...n){let e=lA;for(const t of n)e=e.add(t);return e}const uA=new Fe(ce);function hA(){return uA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:So(e)?"-0":e}}function Sg(n){return{integerValue:""+n}}function fA(n,e){return Mw(e)?Sg(e):vl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this._=void 0}}function dA(n,e,t){return n instanceof hi?function(s,i){const a={fields:{[cg]:{stringValue:ag},[ug]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_l(i)&&(i=ta(i)),i&&(a.fields[lg]=i),{mapValue:a}}(t,e):n instanceof fi?Pg(n,e):n instanceof di?Cg(n,e):function(s,i){const a=bg(s,i),c=hf(a)+hf(s.Ae);return Ic(a)&&Ic(s.Ae)?Sg(c):vl(s.serializer,c)}(n,e)}function pA(n,e,t){return n instanceof fi?Pg(n,e):n instanceof di?Cg(n,e):t}function bg(n,e){return n instanceof Vo?function(r){return Ic(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class hi extends sa{}class fi extends sa{constructor(e){super(),this.elements=e}}function Pg(n,e){const t=Vg(e);for(const r of n.elements)t.some(s=>Gt(s,r))||t.push(r);return{arrayValue:{values:t}}}class di extends sa{constructor(e){super(),this.elements=e}}function Cg(n,e){let t=Vg(e);for(const r of n.elements)t=t.filter(s=>!Gt(s,r));return{arrayValue:{values:t}}}class Vo extends sa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function hf(n){return De(n.integerValue||n.doubleValue)}function Vg(n){return yl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t){this.field=e,this.transform=t}}function mA(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof fi&&s instanceof fi||r instanceof di&&s instanceof di?Zr(r.elements,s.elements,Gt):r instanceof Vo&&s instanceof Vo?Gt(r.Ae,s.Ae):r instanceof hi&&s instanceof hi}(n.transform,e.transform)}class _A{constructor(e,t){this.version=e,this.transformResults=t}}class Pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ao(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ia{}function Dg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new wl(n.key,Pt.none()):new Ai(n.key,n.data,Pt.none());{const t=n.data,r=ht.empty();let s=new Fe(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Zn(n.key,r,new yt(s.toArray()),Pt.none())}}function yA(n,e,t){n instanceof Ai?function(s,i,a){const c=s.value.clone(),l=df(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Zn?function(s,i,a){if(!ao(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=df(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(kg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ys(n,e,t,r){return n instanceof Ai?function(i,a,c,l){if(!ao(i.precondition,a))return c;const h=i.value.clone(),d=pf(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Zn?function(i,a,c,l){if(!ao(i.precondition,a))return c;const h=pf(i.fieldTransforms,l,a),d=a.data;return d.setAll(kg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,c){return ao(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function EA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=bg(r.transform,s||null);i!=null&&(t===null&&(t=ht.empty()),t.set(r.field,i))}return t||null}function ff(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zr(r,s,(i,a)=>mA(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ai extends ia{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zn extends ia{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function df(n,e,t){const r=new Map;ye(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,pA(a,c,t[s]))}return r}function pf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,dA(i,a,e))}return r}class wl extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TA extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ys(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ys(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Rg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Dg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),le())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,(t,r)=>ff(t,r))&&Zr(this.baseMutations,e.baseMutations,(t,r)=>ff(t,r))}}class Al{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ye(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return cA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Al(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,fe;function AA(n){switch(n){case D.OK:return ee(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function Ng(n){if(n===void 0)return dn("GRPC error has no .code"),D.UNKNOWN;switch(n){case ke.OK:return D.OK;case ke.CANCELLED:return D.CANCELLED;case ke.UNKNOWN:return D.UNKNOWN;case ke.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ke.INTERNAL:return D.INTERNAL;case ke.UNAVAILABLE:return D.UNAVAILABLE;case ke.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ke.NOT_FOUND:return D.NOT_FOUND;case ke.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ke.ABORTED:return D.ABORTED;case ke.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ke.DATA_LOSS:return D.DATA_LOSS;default:return ee(39323,{code:n})}}(fe=ke||(ke={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new xn([4294967295,4294967295],0);function gf(n){const e=RA().encode(n),t=new Gp;return t.update(e),new Uint8Array(t.digest())}function mf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xn([t,r],0),new xn([s,i],0)]}class Rl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fs(`Invalid padding: ${t}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=xn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(xn.fromNumber(r)));return s.compare(SA)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=gf(e),[r,s]=mf(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Rl(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=gf(e),[r,s]=mf(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ri(ne.min(),s,new Ce(ce),pn(),le())}}class Si{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Si(r,t,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Og{constructor(e,t){this.targetId=e,this.Ce=t}}class xg{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class _f{constructor(){this.ve=0,this.Fe=yf(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),t=le(),r=le();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new Si(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=yf()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class bA{constructor(e){this.Ge=e,this.ze=new Map,this.je=pn(),this.Je=zi(),this.He=zi(),this.Ze=new Ce(ce)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(wc(i))if(r===0){const a=new Q(i.path);this.et(t,a,tt.newNoDocument(a,ne.min()))}else ye(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=qn(r).toUint8Array()}catch(l){if(l instanceof og)return Ir("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Rl(a,s,i)}catch(l){return Ir(l instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&wc(c.target)){const l=new Q(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,tt.newNoDocument(l,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let r=le();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Ri(e,t,this.Ze,this.je,r);return this.je=pn(),this.Je=zi(),this.He=zi(),this.Ze=new Ce(ce),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new _f,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Fe(ce),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Fe(ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _f),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function zi(){return new Ce(Q.comparator)}function yf(){return new Ce(Q.comparator)}const PA={asc:"ASCENDING",desc:"DESCENDING"},CA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VA={and:"AND",or:"OR"};class DA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sc(n,e){return n.useProto3Json||ea(e)?e:{value:e}}function Do(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function kA(n,e){return Do(n,e.toTimestamp())}function Wt(n){return ye(!!n,49232),ne.fromTimestamp(function(t){const r=$n(t);return new be(r.seconds,r.nanos)}(n))}function Sl(n,e){return bc(n,e).canonicalString()}function bc(n,e){const t=function(s){return new we(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Lg(n){const e=we.fromString(n);return ye($g(e),10190,{key:e.toString()}),e}function Pc(n,e){return Sl(n.databaseId,e.path)}function Ka(n,e){const t=Lg(e);if(t.get(1)!==n.databaseId.projectId)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(Ug(t))}function Fg(n,e){return Sl(n.databaseId,e)}function NA(n){const e=Lg(n);return e.length===4?we.emptyPath():Ug(e)}function Cc(n){return new we(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ug(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ef(n,e,t){return{name:Pc(n,e),fields:t.value.mapValue.fields}}function OA(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(ye(d===void 0||typeof d=="string",58123),Qe.fromBase64String(d||"")):(ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Qe.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const d=h.code===void 0?D.UNKNOWN:Ng(h.code);return new W(d,h.message||"")}(a);t=new xg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ka(n,r.document.name),i=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):ne.min(),c=new ht({mapValue:{fields:r.document.fields}}),l=tt.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new co(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ka(n,r.document),i=r.readTime?Wt(r.readTime):ne.min(),a=tt.newNoDocument(s,i),c=r.removedTargetIds||[];t=new co([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ka(n,r.document),i=r.removedTargetIds||[];t=new co([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new wA(s,i),c=r.targetId;t=new Og(c,a)}}return t}function xA(n,e){let t;if(e instanceof Ai)t={update:Ef(n,e.key,e.value)};else if(e instanceof wl)t={delete:Pc(n,e.key)};else if(e instanceof Zn)t={update:Ef(n,e.key,e.data),updateMask:HA(e.fieldMask)};else{if(!(e instanceof TA))return ee(16599,{dt:e.type});t={verify:Pc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof hi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof di)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Vo)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ee(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(n,e.precondition)),t}function MA(n,e){return n&&n.length>0?(ye(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Wt(s.updateTime):Wt(i);return a.isEqual(ne.min())&&(a=Wt(i)),new _A(a,s.transformResults||[])}(t,e))):[]}function LA(n,e){return{documents:[Fg(n,e.path)]}}function FA(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Fg(n,s);const i=function(h){if(h.length!==0)return jg(Dt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(_){return{field:Lr(_.field),direction:jA(_.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Sc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function UA(n){let e=NA(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ye(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const _=Bg(p);return _ instanceof Dt&&mg(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(_=>function(V){return new ui(Fr(V.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,ea(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(p){const _=!!p.before,R=p.values||[];return new Co(R,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,R=p.values||[];return new Co(R,_)}(t.endAt)),tA(e,s,a,i,c,"F",l,h)}function BA(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Fr(t.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(t.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(t.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fr(t.unaryFilter.field);return Ne.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ne.create(Fr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Dt.create(t.compositeFilter.filters.map(r=>Bg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(t.compositeFilter.op))}(n):ee(30097,{filter:n})}function jA(n){return PA[n]}function $A(n){return CA[n]}function qA(n){return VA[n]}function Lr(n){return{fieldPath:n.canonicalString()}}function Fr(n){return Ge.fromServerFormat(n.fieldPath)}function jg(n){return n instanceof Ne?function(t){if(t.op==="=="){if(of(t.value))return{unaryFilter:{field:Lr(t.field),op:"IS_NAN"}};if(sf(t.value))return{unaryFilter:{field:Lr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(of(t.value))return{unaryFilter:{field:Lr(t.field),op:"IS_NOT_NAN"}};if(sf(t.value))return{unaryFilter:{field:Lr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(t.field),op:$A(t.op),value:t.value}}}(n):n instanceof Dt?function(t){const r=t.getFilters().map(s=>jg(s));return r.length===1?r[0]:{compositeFilter:{op:qA(t.op),filters:r}}}(n):ee(54877,{filter:n})}function HA(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $g(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function qg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,r,s,i=ne.min(),a=ne.min(),c=Qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new on(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.yt=e}}function KA(n){const e=UA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.bn=new GA}addToCollectionParentIndex(e,t){return this.bn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(jn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class GA{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Fe(we.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hg=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(Hg,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Wn(0)}static ar(){return new Wn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="LruGarbageCollector",QA=1048576;function vf([n,e],[t,r]){const s=ce(n,t);return s===0?ce(e,r):s}class JA{constructor(e){this.Pr=e,this.buffer=new Fe(vf),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();vf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class YA{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(If,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ls(t)?H(If,"Ignoring IndexedDB error during garbage collection: ",t):await cs(t)}await this.Ar(3e5)})}}class XA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Zo.ce);const r=new JA(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Tf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tf):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),xr()<=he.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function ZA(n,e){return new XA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.changes=new wr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ys(r.mutation,s,yt.empty(),be.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,t,r=le()){const s=fr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ls();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=fr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,le()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=pn();const a=Js(),c=function(){return Js()}();return t.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Zn)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ys(d.mutation,h,d.mutation.getFieldMask(),be.now())):a.set(h.key,yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>c.set(h,new tR(d,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Js();let s=new Ce((a,c)=>a-c),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||yt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||le()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Rg();d.forEach(_=>{if(!i.has(_)){const R=Dg(t.get(_),r.get(_));R!==null&&p.set(_,R),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return nA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Tg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(fr());let c=oi,l=i;return a.next(h=>k.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(e,d).next(_=>{l=l.insert(d,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,le())).next(d=>({batchId:c,changes:Ag(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let s=Ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ls();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,l=>{const h=function(p,_){return new us(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,_)=>{a=a.insert(p,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,tt.newInvalidDocument(d)))});let c=Ls();return a.forEach((l,h)=>{const d=i.get(l);d!==void 0&&Ys(d.mutation,h,yt.empty(),be.now()),ra(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return k.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:KA(s.bundledQuery),readTime:Wt(s.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.overlays=new Ce(Q.comparator),this.Lr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=fr();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=fr(),i=t.length+1,a=new Q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ce((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=fr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return k.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new vA(t,r));let i=this.Lr.get(t);i===void 0&&(i=le(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.kr=new Fe(qe.Kr),this.qr=new Fe(qe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new qe(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new qe(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new Q(new we([])),r=new qe(t,e),s=new qe(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new Q(new we([])),r=new qe(t,e),s=new qe(t,e+1);let i=le();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new qe(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return Q.comparator(e.key,t.key)||ce(e.Jr,t.Jr)}static Ur(e,t){return ce(e.Jr,t.Jr)||Q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Fe(qe.Kr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new IA(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Hr=this.Hr.add(new qe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?ml:this.Yn-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new qe(t,0),s=new qe(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const c=this.Zr(a.Jr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Fe(ce);return t.forEach(s=>{const i=new qe(s,0),a=new qe(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],c=>{r=r.add(c.Jr)})}),k.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const a=new qe(new Q(i),0);let c=new Fe(ce);return this.Hr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Jr)),!0)},a),k.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ye(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return k.forEach(t.mutations,s=>{const i=new qe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new qe(t,0),s=this.Hr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.ti=e,this.docs=function(){return new Ce(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let r=pn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=pn();const a=t.path,c=new Q(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||kw(Dw(d),r)<=0||(s.has(d.key)||ra(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}ni(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new cR(this)}getSize(e){return k.resolve(this.size)}}class cR extends eR{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.persistence=e,this.ri=new wr(t=>El(t),Tl),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.ii=0,this.si=new bl,this.targetCount=0,this.oi=Wn._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),k.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Wn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.lr(t),k.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){this._i={},this.overlays={},this.ai=new Zo(0),this.ui=!1,this.ui=!0,this.ci=new iR,this.referenceDelegate=e(this),this.li=new lR(this),this.indexManager=new zA,this.remoteDocumentCache=function(s){return new aR(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new WA(t),this.Pi=new rR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new oR(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){H("MemoryPersistence","Starting transaction:",e);const s=new uR(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return k.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class uR extends Ow{constructor(e){super(),this.currentSequenceNumber=e}}class Pl{constructor(e){this.persistence=e,this.Ri=new bl,this.Ai=null}static Vi(e){return new Pl(e)}get di(){if(this.Ai)return this.Ai;throw ee(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.di,r=>{const s=Q.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,ne.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ko{constructor(e,t){this.persistence=e,this.fi=new wr(r=>Lw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ZA(this,t)}static Vi(e,t){return new ko(e,t)}Ti(){}Ii(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return k.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=io(e.data.value)),t}wr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=le(),s=le();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return UE()?8:xw(st())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new hR;return this.ys(e,t,a).next(c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(xr()<=he.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Mr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(xr()<=he.DEBUG&&H("QueryEngine","Query:",Mr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(xr()<=he.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Mr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(t))):k.resolve())}gs(e,t){if(uf(t))return k.resolve(null);let r=Ht(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Rc(t,null,"F"),r=Ht(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=le(...i);return this.fs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ss(t,c);return this.bs(t,h,a,l.readTime)?this.gs(e,Rc(t,null,"F")):this.Ds(e,h,t,l)}))})))}ps(e,t,r,s){return uf(t)||s.isEqual(ne.min())?k.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?k.resolve(null):(xr()<=he.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(t)),this.Ds(e,a,t,Vw(s,oi)).next(c=>c))})}Ss(e,t){let r=new Fe(vg(e));return t.forEach((s,i)=>{ra(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return xr()<=he.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Mr(t)),this.fs.getDocumentsMatchingQuery(e,t,jn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="LocalStore",dR=3e8;class pR{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Ce(ce),this.Fs=new wr(i=>El(i),Tl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function gR(n,e,t,r){return new pR(n,e,t,r)}async function Kg(n,e){const t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=le();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:c}))})})}function mR(n,e){const t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,_=p.keys();let R=k.resolve();return _.forEach(V=>{R=R.next(()=>d.getEntry(l,V)).next(M=>{const B=h.docVersions.get(V);ye(B!==null,48541),M.version.compareTo(B)<0&&(p.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),d.addEntry(M)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=le();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function zg(n){const e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function _R(n,e){const t=se(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach((d,p)=>{const _=s.get(p);if(!_)return;c.push(t.li.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,d.addedDocuments,p)));let R=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(Qe.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(p,R),function(M,B,K){return M.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=dR?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(_,R,d)&&c.push(t.li.updateTargetData(i,R))});let l=pn(),h=le();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(yR(i,a,e.documentUpdates).next(d=>{l=d.Bs,h=d.Ls})),!r.isEqual(ne.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.vs=s,i))}function yR(n,e,t){let r=le(),s=le();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=pn();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):H(Vl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Bs:a,Ls:s}})}function ER(n,e){const t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ml),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TR(n,e){const t=se(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new on(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function Vc(n,e,t){const r=se(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ls(a))throw a;H(Vl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function wf(n,e,t){const r=se(n);let s=ne.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,d){const p=se(l),_=p.Fs.get(d);return _!==void 0?k.resolve(p.vs.get(_)):p.li.getTargetData(h,d)}(r,a,Ht(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:ne.min(),t?i:le())).next(c=>(IR(r,iA(e),c),{documents:c,ks:i})))}function IR(n,e,t){let r=n.Ms.get(e)||ne.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class Af{constructor(){this.activeTargetIds=hA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vR{constructor(){this.vo=new Af,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Af,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="ConnectivityMonitor";class Sf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(Rf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(Rf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi=null;function Dc(){return Gi===null?Gi=function(){return 268435456+Math.round(2147483648*Math.random())}():Gi++,"0x"+Gi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="RestConnection",AR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class RR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===bo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Dc(),c=this.Qo(e,t.toUriEncodedString());H(za,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),d=yi(h);return this.zo(e,c,l,r,d).then(p=>(H(za,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Ir(za,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=AR[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection",ks=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Gr extends RR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Gr.c_){const e=Xp();ks(e,Yp.STAT_EVENT,t=>{t.stat===yc.PROXY?H(Xe,"STAT_EVENT: detected buffering proxy"):t.stat===yc.NOPROXY&&H(Xe,"STAT_EVENT: detected no buffering proxy")}),Gr.c_=!0}}zo(e,t,r,s,i){const a=Dc();return new Promise((c,l)=>{const h=new Qp;h.setWithCredentials(!0),h.listenOnce(Jp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case so.NO_ERROR:const p=h.getResponseJson();H(Xe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case so.TIMEOUT:H(Xe,`RPC '${e}' ${a} timed out`),l(new W(D.DEADLINE_EXCEEDED,"Request time out"));break;case so.HTTP_ERROR:const _=h.getStatus();if(H(Xe,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const M=function(K){const G=K.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(G)>=0?G:D.UNKNOWN}(V.status);l(new W(M,V.message))}else l(new W(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new W(D.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(Xe,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);H(Xe,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)})}T_(e,t,r){const s=Dc(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");H(Xe,`Creating RPC '${e}' stream ${s}: ${h}`,c);const d=a.createWebChannel(h,c);this.I_(d);let p=!1,_=!1;const R=new SR({Jo:V=>{_?H(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(p||(H(Xe,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),H(Xe,`RPC '${e}' stream ${s} sending:`,V),d.send(V))},Ho:()=>d.close()});return ks(d,Ms.EventType.OPEN,()=>{_||(H(Xe,`RPC '${e}' stream ${s} transport opened.`),R.i_())}),ks(d,Ms.EventType.CLOSE,()=>{_||(_=!0,H(Xe,`RPC '${e}' stream ${s} transport closed`),R.o_(),this.E_(d))}),ks(d,Ms.EventType.ERROR,V=>{_||(_=!0,Ir(Xe,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),R.o_(new W(D.UNAVAILABLE,"The operation could not be completed")))}),ks(d,Ms.EventType.MESSAGE,V=>{var M;if(!_){const B=V.data[0];ye(!!B,16349);const K=B,G=(K==null?void 0:K.error)||((M=K[0])==null?void 0:M.error);if(G){H(Xe,`RPC '${e}' stream ${s} received error:`,G);const te=G.status;let z=function(v){const m=ke[v];if(m!==void 0)return Ng(m)}(te),ue=G.message;te==="NOT_FOUND"&&ue.includes("database")&&ue.includes("does not exist")&&ue.includes(this.databaseId.database)&&Ir(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),z===void 0&&(z=D.INTERNAL,ue="Unknown error status: "+te+" with message "+G.message),_=!0,R.o_(new W(z,ue)),d.close()}else H(Xe,`RPC '${e}' stream ${s} received:`,B),R.__(B)}}),Gr.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Zp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(n){return new Gr(n)}function Ga(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){return new DA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gr.c_=!1;class Gg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="PersistentStream";class Qg{constructor(e,t,r,s,i,a,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(dn(t.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new W(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(bf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(H(bf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PR extends Qg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=OA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?Wt(a.readTime):ne.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Cc(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=wc(l)?{documents:LA(i,l)}:{query:FA(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Mg(i,a.resumeToken);const h=Sc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ne.min())>0){c.readTime=Do(i,a.snapshotVersion.toTimestamp());const h=Sc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=BA(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Cc(this.serializer),t.removeTarget=e,this.K_(t)}}class CR extends Qg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=MA(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Cc(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>xA(this.serializer,r))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{}class DR extends VR{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,bc(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(D.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.jo(e,bc(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(D.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function kR(n,e,t,r){return new DR(n,e,t,r)}class NR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(dn(t),this.aa=!1):H("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="RemoteStore";class OR{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Wn(1e3),this.Va=new Wn(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{Ar(this)&&(H(Qt,"Restarting streams for network reachability change."),await async function(l){const h=se(l);h.da.add(4),await bi(h),h.ga.set("Unknown"),h.da.delete(4),await aa(h)}(this))})}),this.ga=new NR(r,s)}}async function aa(n){if(Ar(n))for(const e of n.ma)await e(!0)}async function bi(n){for(const e of n.ma)await e(!1)}function kc(n,e){return n.Ea.get(e)||void 0}function Jg(n,e){const t=se(n),r=kc(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=function(c,l){const h=kc(c,l);h!==void 0&&c.Ra.delete(h);const d=function(_,R){return R%2!=0?_.Va.next():_.Aa.next()}(c,l);return c.Ea.set(l,d),c.Ra.set(d,l),d}(t,e.targetId);H(Qt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new on(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),Ol(t)?Nl(t):hs(t).O_()&&kl(t,i)}function Dl(n,e){const t=se(n),r=hs(t),s=kc(t,e);H(Qt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&Yg(t,s),t.Ia.size===0&&(r.O_()?r.L_():Ar(t)&&t.ga.set("Unknown"))}function kl(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void H(Qt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}hs(n).Z_(e)}function Yg(n,e){n.pa.$e(e),hs(n).X_(e)}function Nl(n){n.pa=new bA({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):le()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),hs(n).start(),n.ga.ua()}function Ol(n){return Ar(n)&&!hs(n).x_()&&n.Ia.size>0}function Ar(n){return se(n).da.size===0}function Xg(n){n.pa=void 0}async function xR(n){n.ga.set("Online")}async function MR(n){n.Ia.forEach((e,t)=>{kl(n,e)})}async function LR(n,e){Xg(n),Ol(n)?(n.ga.ha(e),Nl(n)):n.ga.set("Unknown")}async function FR(n,e,t){if(n.ga.set("Online"),e instanceof xg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds){if(s.Ia.has(c)){const l=s.Ra.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.Ra.delete(c)),s.Ia.delete(c)}s.pa.removeTarget(c)}}(n,e)}catch(r){H(Qt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await No(n,r)}else if(e instanceof co?n.pa.Xe(e):e instanceof Og?n.pa.st(e):n.pa.tt(e),!t.isEqual(ne.min()))try{const r=await zg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.pa.Tt(a);c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(Qe.EMPTY_BYTE_STRING,p.snapshotVersion)),Yg(i,h);const _=new on(p.target,h,d,p.sequenceNumber);kl(i,_)});const l=function(d,p){const _=new Map;p.targetChanges.forEach((V,M)=>{const B=d.Ra.get(M);B!==void 0&&_.set(B,V)});let R=new Ce(ce);return p.targetMismatches.forEach((V,M)=>{const B=d.Ra.get(V);B!==void 0&&(R=R.insert(B,M))}),new Ri(p.snapshotVersion,_,R,p.documentUpdates,p.resolvedLimboDocuments)}(i,c);return i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){H(Qt,"Failed to raise snapshot:",r),await No(n,r)}}async function No(n,e,t){if(!ls(e))throw e;n.da.add(1),await bi(n),n.ga.set("Offline"),t||(t=()=>zg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H(Qt,"Retrying IndexedDB access"),await t(),n.da.delete(1),await aa(n)})}function Zg(n,e){return e().catch(t=>No(n,t,e))}async function ca(n){const e=se(n),t=Kn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ml;for(;UR(e);)try{const s=await ER(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,BR(e,s)}catch(s){await No(e,s)}em(e)&&tm(e)}function UR(n){return Ar(n)&&n.Ta.length<10}function BR(n,e){n.Ta.push(e);const t=Kn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function em(n){return Ar(n)&&!Kn(n).x_()&&n.Ta.length>0}function tm(n){Kn(n).start()}async function jR(n){Kn(n).ra()}async function $R(n){const e=Kn(n);for(const t of n.Ta)e.ea(t.mutations)}async function qR(n,e,t){const r=n.Ta.shift(),s=Al.from(r,e,t);await Zg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ca(n)}async function HR(n,e){e&&Kn(n).Y_&&await async function(r,s){if(function(a){return AA(a)&&a!==D.ABORTED}(s.code)){const i=r.Ta.shift();Kn(r).B_(),await Zg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ca(r)}}(n,e),em(n)&&tm(n)}async function Pf(n,e){const t=se(n);t.asyncQueue.verifyOperationInProgress(),H(Qt,"RemoteStore received new credentials");const r=Ar(t);t.da.add(3),await bi(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await aa(t)}async function WR(n,e){const t=se(n);e?(t.da.delete(2),await aa(t)):e||(t.da.add(2),await bi(t),t.ga.set("Unknown"))}function hs(n){return n.ya||(n.ya=function(t,r,s){const i=se(t);return i.sa(),new PR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:xR.bind(null,n),Yo:MR.bind(null,n),t_:LR.bind(null,n),H_:FR.bind(null,n)}),n.ma.push(async e=>{e?(n.ya.B_(),Ol(n)?Nl(n):n.ga.set("Unknown")):(await n.ya.stop(),Xg(n))})),n.ya}function Kn(n){return n.wa||(n.wa=function(t,r,s){const i=se(t);return i.sa(),new CR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:jR.bind(null,n),t_:HR.bind(null,n),ta:$R.bind(null,n),na:qR.bind(null,n)}),n.ma.push(async e=>{e?(n.wa.B_(),await ca(n)):(await n.wa.stop(),n.Ta.length>0&&(H(Qt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new xl(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ml(n,e){if(dn("AsyncQueue",`${e}: ${n}`),ls(n))return new W(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{static emptySet(e){return new Qr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Ls(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.Sa=new Ce(Q.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):ee(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal((t,r)=>{e.push(r)}),e}}class ns{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ns(e,t,Qr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class zR{constructor(){this.queries=Vf(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=se(t),i=s.queries;s.queries=Vf(),i.forEach((a,c)=>{for(const l of c.va)l.onError(r)})})(this,new W(D.ABORTED,"Firestore shutting down"))}}function Vf(){return new wr(n=>Ig(n),na)}async function GR(n,e){const t=se(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new KR,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ml(a,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&Ll(t)}async function QR(n,e){const t=se(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function JR(n,e){const t=se(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.va)c.Na(s)&&(r=!0);a.Ca=s}}r&&Ll(t)}function YR(n,e,t){const r=se(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function Ll(n){n.xa.forEach(e=>{e.next()})}var Nc,Df;(Df=Nc||(Nc={})).Ba="default",Df.Cache="cache";class XR{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Nc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.key=e}}class rm{constructor(e){this.key=e}}class ZR{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=le(),this.mutatedKeys=le(),this.iu=vg(e),this.su=new Qr(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new Cf,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const _=s.get(d),R=ra(this.query,p)?p:null,V=!!_&&this.mutatedKeys.has(_.key),M=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let B=!1;_&&R?_.data.isEqual(R.data)?V!==M&&(r.track({type:3,doc:R}),B=!0):this.uu(_,R)||(r.track({type:2,doc:R}),B=!0,(l&&this.iu(R,l)>0||h&&this.iu(R,h)<0)&&(c=!0)):!_&&R?(r.track({type:0,doc:R}),B=!0):_&&!R&&(r.track({type:1,doc:_}),B=!0,(l||h)&&(c=!0)),B&&(R?(a=a.add(R),i=M?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{su:a,au:r,bs:c,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((d,p)=>function(R,V){const M=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Vt:B})}};return M(R)-M(V)}(d.type,p.type)||this.iu(d.doc,p.doc)),this.cu(r),s=s??!1;const c=t&&!s?this.lu():[],l=this.ru.size===0&&this.current&&!s?1:0,h=l!==this.nu;return this.nu=l,a.length!==0||h?{snapshot:new ns(this.query,e.su,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Cf,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=le(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const t=[];return e.forEach(r=>{this.ru.has(r)||t.push(new rm(r))}),this.ru.forEach(r=>{e.has(r)||t.push(new nm(r))}),t}Tu(e){this.tu=e.ks,this.ru=le();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return ns.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Fl="SyncEngine";class eS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class tS{constructor(e){this.key=e,this.Eu=!1}}class nS{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new wr(c=>Ig(c),na),this.Vu=new Map,this.du=new Set,this.mu=new Ce(Q.comparator),this.fu=new Map,this.gu=new bl,this.pu={},this.yu=new Map,this.wu=Wn.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function rS(n,e,t=!0){const r=lm(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await sm(r,e,t,!0),s}async function sS(n,e){const t=lm(n);await sm(t,e,!0,!1)}async function sm(n,e,t,r){const s=await TR(n.localStore,Ht(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await iS(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Jg(n.remoteStore,s),c}async function iS(n,e,t,r,s){n.bu=(p,_,R)=>async function(M,B,K,G){let te=B.view._u(K);te.bs&&(te=await wf(M.localStore,B.query,!1).then(({documents:v})=>B.view._u(v,te)));const z=G&&G.targetChanges.get(B.targetId),ue=G&&G.targetMismatches.get(B.targetId)!=null,Ae=B.view.applyChanges(te,M.isPrimaryClient,z,ue);return Nf(M,B.targetId,Ae.hu),Ae.snapshot}(n,p,_,R);const i=await wf(n.localStore,e,!0),a=new ZR(e,i.ks),c=a._u(i.documents),l=Si.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);Nf(n,t,h.hu);const d=new eS(e,t,a);return n.Au.set(e,d),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),h.snapshot}async function oS(n,e,t){const r=se(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(a=>!na(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Dl(r.remoteStore,s.targetId),Oc(r,s.targetId)}).catch(cs)):(Oc(r,s.targetId),await Vc(r.localStore,s.targetId,!0))}async function aS(n,e){const t=se(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Dl(t.remoteStore,r.targetId))}async function cS(n,e,t){const r=gS(n);try{const s=await function(a,c){const l=se(a),h=be.now(),d=c.reduce((R,V)=>R.add(V.key),le());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let V=pn(),M=le();return l.xs.getEntries(R,d).next(B=>{V=B,V.forEach((K,G)=>{G.isValidDocument()||(M=M.add(K))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,V)).next(B=>{p=B;const K=[];for(const G of c){const te=EA(G,p.get(G.key).overlayedDocument);te!=null&&K.push(new Zn(G.key,te,dg(te.value.mapValue),Pt.exists(!0)))}return l.mutationQueue.addMutationBatch(R,h,K,c)}).next(B=>{_=B;const K=B.applyToLocalDocumentSet(p,M);return l.documentOverlayCache.saveOverlays(R,B.batchId,K)})}).then(()=>({batchId:_.batchId,changes:Ag(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.pu[a.currentUser.toKey()];h||(h=new Ce(ce)),h=h.insert(c,l),a.pu[a.currentUser.toKey()]=h}(r,s.batchId,t),await Pi(r,s.changes),await ca(r.remoteStore)}catch(s){const i=Ml(s,"Failed to persist write");t.reject(i)}}async function im(n,e){const t=se(n);try{const r=await _R(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.fu.get(i);a&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?ye(a.Eu,14607):s.removedDocuments.size>0&&(ye(a.Eu,42227),a.Eu=!1))}),await Pi(t,r,e)}catch(r){await cs(r)}}function kf(n,e,t){const r=se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach((i,a)=>{const c=a.view.Oa(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=se(a);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const _ of p.va)_.Oa(c)&&(h=!0)}),h&&Ll(l)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lS(n,e,t){const r=se(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let a=new Ce(Q.comparator);a=a.insert(i,tt.newNoDocument(i,ne.min()));const c=le().add(i),l=new Ri(ne.min(),new Map,new Ce(ce),a,c);await im(r,l),r.mu=r.mu.remove(i),r.fu.delete(e),Ul(r)}else await Vc(r.localStore,e,!1).then(()=>Oc(r,e,t)).catch(cs)}async function uS(n,e){const t=se(n),r=e.batch.batchId;try{const s=await mR(t.localStore,e);am(t,r,null),om(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Pi(t,s)}catch(s){await cs(s)}}async function hS(n,e,t){const r=se(n);try{const s=await function(a,c){const l=se(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(ye(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);am(r,e,t),om(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Pi(r,s)}catch(s){await cs(s)}}function om(n,e){(n.yu.get(e)||[]).forEach(t=>{t.resolve()}),n.yu.delete(e)}function am(n,e,t){const r=se(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Oc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach(r=>{n.gu.containsKey(r)||cm(n,r)})}function cm(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(Dl(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),Ul(n))}function Nf(n,e,t){for(const r of t)r instanceof nm?(n.gu.addReference(r.key,e),fS(n,r)):r instanceof rm?(H(Fl,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||cm(n,r.key)):ee(19791,{Cu:r})}function fS(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(H(Fl,"New document in limbo: "+t),n.du.add(r),Ul(n))}function Ul(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new Q(we.fromString(e)),r=n.wu.next();n.fu.set(r,new tS(t)),n.mu=n.mu.insert(t,r),Jg(n.remoteStore,new on(Ht(Il(t.path)),r,"TargetPurposeLimboResolution",Zo.ce))}}async function Pi(n,e,t){const r=se(n),s=[],i=[],a=[];r.Au.isEmpty()||(r.Au.forEach((c,l)=>{a.push(r.bu(l,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Cl.Es(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ru.H_(s),await async function(l,h){const d=se(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(h,_=>k.forEach(_.Ts,R=>d.persistence.referenceDelegate.addReference(p,_.targetId,R)).next(()=>k.forEach(_.Is,R=>d.persistence.referenceDelegate.removeReference(p,_.targetId,R)))))}catch(p){if(!ls(p))throw p;H(Vl,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const R=d.vs.get(_),V=R.snapshotVersion,M=R.withLastLimboFreeSnapshotVersion(V);d.vs=d.vs.insert(_,M)}}}(r.localStore,i))}async function dS(n,e){const t=se(n);if(!t.currentUser.isEqual(e)){H(Fl,"User change. New user:",e.toKey());const r=await Kg(t.localStore,e);t.currentUser=e,function(i,a){i.yu.forEach(c=>{c.forEach(l=>{l.reject(new W(D.CANCELLED,a))})}),i.yu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pi(t,r.Ns)}}function pS(n,e){const t=se(n),r=t.fu.get(e);if(r&&r.Eu)return le().add(r.key);{let s=le();const i=t.Vu.get(e);if(!i)return s;for(const a of i){const c=t.Au.get(a);s=s.unionWith(c.view.ou)}return s}}function lm(n){const e=se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=im.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lS.bind(null,e),e.Ru.H_=JR.bind(null,e.eventManager),e.Ru.Du=YR.bind(null,e.eventManager),e}function gS(n){const e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hS.bind(null,e),e}class Oo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return gR(this.persistence,new fR,e.initialUser,this.serializer)}xu(e){return new Wg(Pl.Vi,this.serializer)}Mu(e){return new vR}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oo.provider={build:()=>new Oo};class mS extends Oo{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){ye(this.persistence.referenceDelegate instanceof ko,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new YA(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new Wg(r=>ko.Vi(r,t),this.serializer)}}class xc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dS.bind(null,this.syncEngine),await WR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zR}()}createDatastore(e){const t=oa(e.databaseInfo.databaseId),r=bR(e.databaseInfo);return kR(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new OR(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>kf(this.syncEngine,t,0),function(){return Sf.v()?new Sf:new wR}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,d){const p=new nS(s,i,a,c,l,h);return d&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=se(s);H(Qt,"RemoteStore shutting down."),i.da.add(5),await bi(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}xc.provider={build:()=>new xc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):dn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="FirestoreClient";class yS{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=gl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{H(zn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H(zn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ml(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qa(n,e){n.asyncQueue.verifyOperationInProgress(),H(zn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Kg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Of(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ES(n);H(zn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Pf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Pf(e.remoteStore,s)),n._onlineComponents=e}async function ES(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(zn,"Using user provided OfflineComponentProvider");try{await Qa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ir("Error using user provided cache. Falling back to memory cache: "+t),await Qa(n,new Oo)}}else H(zn,"Using default OfflineComponentProvider"),await Qa(n,new mS(void 0));return n._offlineComponents}async function um(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(zn,"Using user provided OnlineComponentProvider"),await Of(n,n._uninitializedComponentsProvider._online)):(H(zn,"Using default OnlineComponentProvider"),await Of(n,new xc))),n._onlineComponents}function TS(n){return um(n).then(e=>e.syncEngine)}async function xf(n){const e=await um(n),t=e.eventManager;return t.onListen=rS.bind(null,e.syncEngine),t.onUnlisten=oS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aS.bind(null,e.syncEngine),t}function IS(n,e,t,r){const s=new _S(r),i=new XR(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>GR(await xf(n),i)),()=>{s.Ku(),n.asyncQueue.enqueueAndForget(async()=>QR(await xf(n),i))}}function vS(n,e){const t=new pr;return n.asyncQueue.enqueueAndForget(async()=>cS(await TS(n),e,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="ComponentProvider",Mf=new Map;function AS(n,e,t,r,s){return new Bw(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,hm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="firestore.googleapis.com",Lf=!0;class Ff{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fm,this.ssl=Lf}else this.host=e.host,this.ssl=e.ssl??Lf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QA)throw new W(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Cw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hm(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class la{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ff({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ff(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ew;switch(r.type){case"firstParty":return new ww(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Mf.get(t);r&&(H(wS,"Removing Datastore"),Mf.delete(t),r.terminate())}(this),Promise.resolve()}}function RS(n,e,t,r={}){var h;n=Mn(n,la);const s=yi(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&ap(`https://${c}`),i.host!==fm&&i.host!==c&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!mr(l,a)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Ze.MOCK_USER;else{d=kE(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new W(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(_)}n._authCredentials=new Tw(new tg(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rr(this.firestore,e,this._query)}}class xe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(wi(t,xe._jsonSchema))return new xe(e,r||null,new Q(we.fromString(t.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:Oe("string",xe._jsonSchemaVersion),referencePath:Oe("string")};class Ln extends Rr{constructor(e,t,r){super(e,t,Il(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new Q(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function Uf(n,e,...t){if(n=Ue(n),ng("collection","path",e),n instanceof la){const r=we.fromString(e,...t);return Qh(r),new Ln(n,null,r)}{if(!(n instanceof xe||n instanceof Ln))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(we.fromString(e,...t));return Qh(r),new Ln(n.firestore,null,r)}}function Mc(n,e,...t){if(n=Ue(n),arguments.length===1&&(e=gl.newId()),ng("doc","path",e),n instanceof la){const r=we.fromString(e,...t);return Gh(r),new xe(n,null,new Q(r))}{if(!(n instanceof xe||n instanceof Ln))throw new W(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(we.fromString(e,...t));return Gh(r),new xe(n.firestore,n instanceof Ln?n.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="AsyncQueue";class jf{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Gg(this,"async_queue_retry"),this.lc=()=>{const r=Ga();r&&H(Bf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=Ga();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Ga();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const t=new pr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ls(e))throw e;H(Bf,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const t=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,dn("INTERNAL UNHANDLED ERROR: ",$f(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=xl.createAndSchedule(this,e,t,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&ee(47125,{Rc:$f(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function $f(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class rs extends la{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new jf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jf(e),this._firestoreClient=void 0,await e}}}function SS(n,e){const t=typeof n=="object"?n:hp(),r=typeof n=="string"?n:bo,s=il(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=VE("firestore");i&&RS(s,...i)}return s}function dm(n){if(n._terminated)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bS(n),n._firestoreClient}function bS(n){var r,s,i,a;const e=n._freezeSettings(),t=AS(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new yS(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this._byteString=e}static fromBase64String(e){try{return new It(Qe.fromBase64String(e))}catch(t){throw new W(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new It(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:It._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wi(e,It._jsonSchema))return It.fromBase64String(e.bytes)}}It._jsonSchemaVersion="firestore/bytes/1.0",It._jsonSchema={type:Oe("string",It._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kt._jsonSchemaVersion}}static fromJSON(e){if(wi(e,Kt._jsonSchema))return new Kt(e.latitude,e.longitude)}}Kt._jsonSchemaVersion="firestore/geoPoint/1.0",Kt._jsonSchema={type:Oe("string",Kt._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wi(e,Ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ct(e.vectorValues);throw new W(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ct._jsonSchemaVersion="firestore/vectorValue/1.0",Ct._jsonSchema={type:Oe("string",Ct._jsonSchemaVersion),vectorValues:Oe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=/^__.*__$/;class CS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Zn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ai(e,this.data,t,this.fieldTransforms)}}class pm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Zn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:n})}}class jl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new jl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return xo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(gm(this.dataSource)&&PS.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class VS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oa(e)}V(e,t,r,s=!1){return new jl({dataSource:e,methodName:t,targetDoc:r,path:Ge.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $l(n){const e=n._freezeSettings(),t=oa(n._databaseId);return new VS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function DS(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);Hl("Data must be an object, but it was:",a,r);const c=mm(r,a);let l,h;if(i.merge)l=new yt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=ss(e,p,t);if(!a.contains(_))throw new W(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Em(d,_)||d.push(_)}l=new yt(d),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new CS(new ht(c),l,h)}class ha extends ua{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ha}}class ql extends ua{_toFieldTransform(e){return new gA(e.path,new hi)}isEqual(e){return e instanceof ql}}function kS(n,e,t,r){const s=n.V(1,e,t);Hl("Data must be an object, but it was:",s,r);const i=[],a=ht.empty();Xn(r,(l,h)=>{const d=ym(e,l,t);h=Ue(h);const p=s.Sc(d);if(h instanceof ha)i.push(d);else{const _=Ci(h,p);_!=null&&(i.push(d),a.set(d,_))}});const c=new yt(i);return new pm(a,c,s.fieldTransforms)}function NS(n,e,t,r,s,i){const a=n.V(1,e,t),c=[ss(e,r,t)],l=[s];if(i.length%2!=0)throw new W(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(ss(e,i[_])),l.push(i[_+1]);const h=[],d=ht.empty();for(let _=c.length-1;_>=0;--_)if(!Em(h,c[_])){const R=c[_];let V=l[_];V=Ue(V);const M=a.Sc(R);if(V instanceof ha)h.push(R);else{const B=Ci(V,M);B!=null&&(h.push(R),d.set(R,B))}}const p=new yt(h);return new pm(d,p,a.fieldTransforms)}function OS(n,e,t,r=!1){return Ci(t,n.V(r?4:3,e))}function Ci(n,e){if(_m(n=Ue(n)))return Hl("Unsupported field value:",e,n),mm(n,e);if(n instanceof ua)return function(r,s){if(!gm(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Ci(c,s.bc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=be.fromDate(r);return{timestampValue:Do(s.serializer,i)}}if(r instanceof be){const i=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Do(s.serializer,i)}}if(r instanceof Kt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof It)return{bytesValue:Mg(s.serializer,r._byteString)};if(r instanceof xe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ct)return function(a,c){const l=a instanceof Ct?a.toArray():a;return{mapValue:{fields:{[hg]:{stringValue:fg},[Po]:{arrayValue:{values:l.map(d=>{if(typeof d!="number")throw c.Dc("VectorValues must only contain numeric values.");return vl(c.serializer,d)})}}}}}}(r,s);if(qg(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Xo(r)}`)}(n,e)}function mm(n,e){const t={};return ig(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xn(n,(r,s)=>{const i=Ci(s,e.yc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function _m(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof be||n instanceof Kt||n instanceof It||n instanceof xe||n instanceof ua||n instanceof Ct||qg(n))}function Hl(n,e,t){if(!_m(t)||!rg(t)){const r=Xo(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function ss(n,e,t){if((e=Ue(e))instanceof Bl)return e._internalPath;if(typeof e=="string")return ym(n,e);throw xo("Field path arguments must be of type string or ",n,!1,void 0,t)}const xS=new RegExp("[~\\*/\\[\\]]");function ym(n,e,t){if(e.search(xS)>=0)throw xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Bl(...e.split("."))._internalPath}catch{throw xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new W(D.INVALID_ARGUMENT,c+n+l)}function Em(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{convertValue(e,t="none"){switch(Hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Xn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Po].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>De(a.doubleValue));return new Ct(t)}convertGeoPoint(e){return new Kt(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ta(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const t=$n(e);return new be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=we.fromString(e);ye($g(r),9688,{name:e});const s=new ci(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm extends MS{constructor(e){super(),this.firestore=e}convertBytes(e){return new It(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,t)}}function LS(){return new ql("serverTimestamp")}const qf="@firebase/firestore",Hf="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ss("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class FS extends Im{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wl{}class vm extends Wl{}function BS(n,e,...t){let r=[];e instanceof Wl&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof zl).length,c=i.filter(l=>l instanceof Kl).length;if(a>1||a>0&&c>0)throw new W(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Kl extends vm{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Kl(e,t,r)}_apply(e){const t=this._parse(e);return wm(e._query,t),new Rr(e.firestore,e.converter,Ac(e._query,t))}_parse(e){const t=$l(e.firestore);return function(i,a,c,l,h,d,p){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){zf(p,d);const V=[];for(const M of p)V.push(Kf(l,i,M));_={arrayValue:{values:V}}}else _=Kf(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||zf(p,d),_=OS(c,a,p,d==="in"||d==="not-in");return Ne.create(h,d,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class zl extends Wl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new zl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Dt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)wm(a,l),a=Ac(a,l)}(e._query,t),new Rr(e.firestore,e.converter,Ac(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gl extends vm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Gl(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new W(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ui(i,a)}(e._query,this._field,this._direction);return new Rr(e.firestore,e.converter,sA(e._query,t))}}function jS(n,e="asc"){const t=e,r=ss("orderBy",n);return Gl._create(r,t)}function Kf(n,e,t){if(typeof(t=Ue(t))=="string"){if(t==="")throw new W(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tg(e)&&t.indexOf("/")!==-1)throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(we.fromString(t));if(!Q.isDocumentKey(r))throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rf(n,new Q(r))}if(t instanceof xe)return rf(n,t._key);throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xo(t)}.`)}function zf(n,e){if(!Array.isArray(n)||n.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wm(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function $S(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gr extends Im{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ss("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",gr._jsonSchema={type:Oe("string",gr._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class lo extends gr{data(e={}){return super.data(e)}}class Jr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new lo(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new lo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new lo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:qS(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Jr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jr._jsonSchemaVersion="firestore/querySnapshot/1.0",Jr._jsonSchema={type:Oe("string",Jr._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};function HS(n,e,t,...r){n=Mn(n,xe);const s=Mn(n.firestore,rs),i=$l(s);let a;return a=typeof(e=Ue(e))=="string"||e instanceof Bl?NS(i,"updateDoc",n._key,e,t,r):kS(i,"updateDoc",n._key,e),Ql(s,[a.toMutation(n._key,Pt.exists(!0))])}function WS(n){return Ql(Mn(n.firestore,rs),[new wl(n._key,Pt.none())])}function KS(n,e){const t=Mn(n.firestore,rs),r=Mc(n),s=$S(n.converter,e),i=$l(n.firestore);return Ql(t,[DS(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Pt.exists(!1))]).then(()=>r)}function zS(n,...e){var h,d,p;n=Ue(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Wf(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Wf(e[r])){const _=e[r];e[r]=(h=_.next)==null?void 0:h.bind(_),e[r+1]=(d=_.error)==null?void 0:d.bind(_),e[r+2]=(p=_.complete)==null?void 0:p.bind(_)}let i,a,c;if(n instanceof xe)a=Mn(n.firestore,rs),c=Il(n._key.path),i={next:_=>{e[r]&&e[r](GS(a,n,_))},error:e[r+1],complete:e[r+2]};else{const _=Mn(n,Rr);a=Mn(_.firestore,rs),c=_._query;const R=new Tm(a);i={next:V=>{e[r]&&e[r](new Jr(a,R,_,V))},error:e[r+1],complete:e[r+2]},US(n._query)}const l=dm(a);return IS(l,c,s,i)}function Ql(n,e){const t=dm(n);return vS(t,e)}function GS(n,e,t){const r=t.docs.get(e._key),s=new Tm(n);return new gr(n,s,e._key,r,new Us(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){yw(is),Xr(new _r("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new rs(new Iw(r.getProvider("auth-internal")),new Aw(a,r.getProvider("app-check-internal")),jw(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),On(qf,Hf,e),On(qf,Hf,"esm2020")})();var QS="firebase",JS="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(QS,JS,"app");const YS={apiKey:"AIzaSyAWJiDPnggMGmFl3LA6dp1ImaeEoa9oLJk",authDomain:"task-list-76460.firebaseapp.com",projectId:"task-list-76460",storageBucket:"task-list-76460.firebasestorage.app",messagingSenderId:"357470215566",appId:"1:357470215566:web:37e6f0cb3e31275fd998df"},Am=up(YS),Mo=mw(Am),Qi=SS(Am),XS={class:"auth-container"},ZS={class:"auth-card"},eb={class:"form-group"},tb={class:"form-group"},nb={key:0,class:"error-message"},rb=["disabled"],sb={class:"toggle-text"},ib=Ad({__name:"AuthForm",setup(n){const e=tn(""),t=tn(""),r=tn(!0),s=tn(""),i=tn(!1),a=async()=>{if(!(!e.value||!t.value)){i.value=!0,s.value="";try{r.value?await tv(Mo,e.value,t.value):await ev(Mo,e.value,t.value)}catch(l){const h=l.code??"";s.value=c(h)}finally{i.value=!1}}},c=l=>({"auth/user-not-found":"メールアドレスが見つかりません","auth/wrong-password":"パスワードが正しくありません","auth/invalid-credential":"メールアドレスまたはパスワードが正しくありません","auth/email-already-in-use":"このメールアドレスは既に使用されています","auth/weak-password":"パスワードは6文字以上にしてください","auth/invalid-email":"メールアドレスの形式が正しくありません","auth/too-many-requests":"ログイン試行が多すぎます。しばらく後に再試行してください"})[l]??"エラーが発生しました。再試行してください";return(l,h)=>(Zt(),hr("div",XS,[pe("div",ZS,[h[5]||(h[5]=pe("h1",null,"📝 Todoリスト",-1)),pe("h2",null,Rt(r.value?"ログイン":"アカウント作成"),1),pe("form",{onSubmit:pE(a,["prevent"])},[pe("div",eb,[h[3]||(h[3]=pe("label",{for:"email"},"メールアドレス",-1)),tc(pe("input",{id:"email","onUpdate:modelValue":h[0]||(h[0]=d=>e.value=d),type:"email",placeholder:"example@email.com",required:"",autocomplete:"email"},null,512),[[cc,e.value]])]),pe("div",tb,[h[4]||(h[4]=pe("label",{for:"password"},"パスワード",-1)),tc(pe("input",{id:"password","onUpdate:modelValue":h[1]||(h[1]=d=>t.value=d),type:"password",placeholder:"6文字以上",required:"",autocomplete:"current-password"},null,512),[[cc,t.value]])]),s.value?(Zt(),hr("p",nb,Rt(s.value),1)):Yd("",!0),pe("button",{type:"submit",disabled:i.value,class:"submit-btn"},Rt(i.value?"処理中...":r.value?"ログイン":"登録"),9,rb)],32),pe("p",sb,[Jd(Rt(r.value?"アカウントをお持ちでない方は":"すでにアカウントをお持ちの方は")+" ",1),pe("button",{class:"link-btn",onClick:h[2]||(h[2]=d=>{r.value=!r.value,s.value=""})},Rt(r.value?"新規登録":"ログイン"),1)])])]))}}),Rm=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},ob=Rm(ib,[["__scopeId","data-v-304ef8ac"]]),ab={key:0,class:"loading-screen"},cb={key:2,class:"todo-app"},lb={class:"app-header"},ub={class:"user-info"},hb={class:"user-email"},fb={class:"todo-input"},db={class:"todo-list"},pb=["checked","onChange"],gb={class:"todo-text"},mb=["onClick"],_b={key:0,class:"empty-message"},yb={class:"todo-stats"},Eb=Ad({__name:"App",setup(n){const e=tn(null),t=tn(!0),r=tn([]),s=tn("");let i=null;const a=_=>{const R=Uf(Qi,"users",_,"todos"),V=BS(R,jS("createdAt","asc"));i=zS(V,M=>{r.value=M.docs.map(B=>({id:B.id,text:B.data().text,completed:B.data().completed}))})},c=async()=>{!e.value||s.value.trim()===""||(await KS(Uf(Qi,"users",e.value.uid,"todos"),{text:s.value.trim(),completed:!1,createdAt:LS()}),s.value="")},l=async _=>{e.value&&await WS(Mc(Qi,"users",e.value.uid,"todos",_))},h=async _=>{if(!e.value)return;const R=r.value.find(V=>V.id===_);R&&await HS(Mc(Qi,"users",e.value.uid,"todos",_),{completed:!R.completed})},d=async()=>{await iv(Mo)};let p=null;return Pd(()=>{p=sv(Mo,_=>{e.value=_,t.value=!1,i&&(i(),i=null,r.value=[]),_&&a(_.uid)})}),Zc(()=>{p==null||p(),i==null||i()}),(_,R)=>t.value?(Zt(),hr("div",ab,[...R[1]||(R[1]=[pe("p",null,"読み込み中...",-1)])])):e.value?(Zt(),hr("div",cb,[pe("div",lb,[R[2]||(R[2]=pe("h1",null,"📝 Todoリスト",-1)),pe("div",ub,[pe("span",hb,Rt(e.value.email),1),pe("button",{class:"logout-btn",onClick:d},"ログアウト")])]),pe("div",fb,[tc(pe("input",{"onUpdate:modelValue":R[0]||(R[0]=V=>s.value=V),type:"text",placeholder:"新しいタスクを入力...",onKeyup:mE(c,["enter"])},null,544),[[cc,s.value]]),pe("button",{onClick:c},"追加")]),pe("div",db,[(Zt(!0),hr(Ut,null,ey(r.value,V=>(Zt(),hr("div",{key:V.id,class:jo(["todo-item",{completed:V.completed}])},[pe("input",{type:"checkbox",checked:V.completed,onChange:M=>h(V.id)},null,40,pb),pe("span",gb,Rt(V.text),1),pe("button",{class:"delete-btn",onClick:M=>l(V.id)},"削除",8,mb)],2))),128)),r.value.length===0?(Zt(),hr("p",_b," タスクがありません。新しいタスクを追加してください。 ")):Yd("",!0)]),pe("div",yb,[pe("p",null,"合計: "+Rt(r.value.length)+"件",1),pe("p",null,"完了: "+Rt(r.value.filter(V=>V.completed).length)+"件",1),pe("p",null,"未完了: "+Rt(r.value.filter(V=>!V.completed).length)+"件",1)])])):(Zt(),zd(ob,{key:1}))}}),Tb=Rm(Eb,[["__scopeId","data-v-e533eb16"]]);EE(Tb).mount("#app");
