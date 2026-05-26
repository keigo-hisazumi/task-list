(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function al(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ae={},es=[],Zt=()=>{},Rd=()=>!1,oa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),cl=n=>n.startsWith("onUpdate:"),ze=Object.assign,ll=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},k_=Object.prototype.hasOwnProperty,Ee=(n,e)=>k_.call(n,e),se=Array.isArray,ts=n=>aa(n)==="[object Map]",Pd=n=>aa(n)==="[object Set]",ce=n=>typeof n=="function",Me=n=>typeof n=="string",ar=n=>typeof n=="symbol",Re=n=>n!==null&&typeof n=="object",Cd=n=>(Re(n)||ce(n))&&ce(n.then)&&ce(n.catch),Vd=Object.prototype.toString,aa=n=>Vd.call(n),D_=n=>aa(n).slice(8,-1),kd=n=>aa(n)==="[object Object]",ul=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zs=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},N_=/-\w/g,Yn=ca(n=>n.replace(N_,e=>e.slice(1).toUpperCase())),O_=/\B([A-Z])/g,cr=ca(n=>n.replace(O_,"-$1").toLowerCase()),Dd=ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ja=ca(n=>n?`on${Dd(n)}`:""),Hn=(n,e)=>!Object.is(n,e),po=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Nd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},hl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},x_=n=>{const e=Me(n)?Number(n):NaN;return isNaN(e)?n:e};let ch;const la=()=>ch||(ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ns(n){if(se(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Me(r)?U_(r):ns(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Me(n)||Re(n))return n}const M_=/;(?![^(]*\))/g,L_=/:([^]+)/,F_=/\/\*[^]*?\*\//g;function U_(n){const e={};return n.replace(F_,"").split(M_).forEach(t=>{if(t){const r=t.split(L_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ua(n){let e="";if(Me(n))e=n;else if(se(n))for(let t=0;t<n.length;t++){const r=ua(n[t]);r&&(e+=r+" ")}else if(Re(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const B_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$_=al(B_);function Od(n){return!!n||n===""}const xd=n=>!!(n&&n.__v_isRef===!0),Xt=n=>Me(n)?n:n==null?"":se(n)||Re(n)&&(n.toString===Vd||!ce(n.toString))?xd(n)?Xt(n.value):JSON.stringify(n,Md,2):String(n),Md=(n,e)=>xd(e)?Md(n,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ya(r,i)+" =>"]=s,t),{})}:Pd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ya(t))}:ar(e)?Ya(e):Re(e)&&!se(e)&&!kd(e)?String(e):e,Ya=(n,e="")=>{var t;return ar(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class j_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=_t;try{return _t=this,e()}finally{_t=t}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function q_(){return _t}let be;const Xa=new WeakSet;class Ld{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xa.has(this)&&(Xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ud(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lh(this),Bd(this);const e=be,t=Ut;be=this,Ut=!0;try{return this.fn()}finally{$d(this),be=e,Ut=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pl(e);this.deps=this.depsTail=void 0,lh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tc(this)&&this.run()}get dirty(){return Tc(this)}}let Fd=0,ei,ti;function Ud(n,e=!1){if(n.flags|=8,e){n.next=ti,ti=n;return}n.next=ei,ei=n}function fl(){Fd++}function dl(){if(--Fd>0)return;if(ti){let e=ti;for(ti=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ei;){let e=ei;for(ei=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Bd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $d(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),pl(r),H_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Tc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function jd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===hi)||(n.globalVersion=hi,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Tc(n))))return;n.flags|=2;const e=n.dep,t=be,r=Ut;be=n,Ut=!0;try{Bd(n);const s=n.fn(n._value);(e.version===0||Hn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{be=t,Ut=r,$d(n),n.flags&=-3}}function pl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)pl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function H_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ut=!0;const qd=[];function In(){qd.push(Ut),Ut=!1}function wn(){const n=qd.pop();Ut=n===void 0?!0:n}function lh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=be;be=void 0;try{e()}finally{be=t}}}let hi=0;class W_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!be||!Ut||be===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==be)t=this.activeLink=new W_(be,this),be.deps?(t.prevDep=be.depsTail,be.depsTail.nextDep=t,be.depsTail=t):be.deps=be.depsTail=t,Hd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=be.depsTail,t.nextDep=void 0,be.depsTail.nextDep=t,be.depsTail=t,be.deps===t&&(be.deps=r)}return t}trigger(e){this.version++,hi++,this.notify(e)}notify(e){fl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{dl()}}}function Hd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Hd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ic=new WeakMap,Rr=Symbol(""),wc=Symbol(""),fi=Symbol("");function it(n,e,t){if(Ut&&be){let r=Ic.get(n);r||Ic.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new gl),s.map=r,s.key=t),s.track()}}function mn(n,e,t,r,s,i){const a=Ic.get(n);if(!a){hi++;return}const c=l=>{l&&l.trigger()};if(fl(),e==="clear")a.forEach(c);else{const l=se(n),h=l&&ul(t);if(l&&t==="length"){const f=Number(r);a.forEach((p,E)=>{(E==="length"||E===fi||!ar(E)&&E>=f)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(fi)),e){case"add":l?h&&c(a.get("length")):(c(a.get(Rr)),ts(n)&&c(a.get(wc)));break;case"delete":l||(c(a.get(Rr)),ts(n)&&c(a.get(wc)));break;case"set":ts(n)&&c(a.get(Rr));break}}dl()}function Hr(n){const e=ye(n);return e===n?e:(it(e,"iterate",fi),Dt(n)?e:e.map(Je))}function ha(n){return it(n=ye(n),"iterate",fi),n}const K_={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,Je)},concat(...n){return Hr(this).concat(...n.map(e=>se(e)?Hr(e):e))},entries(){return Za(this,"entries",n=>(n[1]=Je(n[1]),n))},every(n,e){return hn(this,"every",n,e,void 0,arguments)},filter(n,e){return hn(this,"filter",n,e,t=>t.map(Je),arguments)},find(n,e){return hn(this,"find",n,e,Je,arguments)},findIndex(n,e){return hn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return hn(this,"findLast",n,e,Je,arguments)},findLastIndex(n,e){return hn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return hn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ec(this,"includes",n)},indexOf(...n){return ec(this,"indexOf",n)},join(n){return Hr(this).join(n)},lastIndexOf(...n){return ec(this,"lastIndexOf",n)},map(n,e){return hn(this,"map",n,e,void 0,arguments)},pop(){return $s(this,"pop")},push(...n){return $s(this,"push",n)},reduce(n,...e){return uh(this,"reduce",n,e)},reduceRight(n,...e){return uh(this,"reduceRight",n,e)},shift(){return $s(this,"shift")},some(n,e){return hn(this,"some",n,e,void 0,arguments)},splice(...n){return $s(this,"splice",n)},toReversed(){return Hr(this).toReversed()},toSorted(n){return Hr(this).toSorted(n)},toSpliced(...n){return Hr(this).toSpliced(...n)},unshift(...n){return $s(this,"unshift",n)},values(){return Za(this,"values",Je)}};function Za(n,e,t){const r=ha(n),s=r[e]();return r!==n&&!Dt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const z_=Array.prototype;function hn(n,e,t,r,s,i){const a=ha(n),c=a!==n&&!Dt(n),l=a[e];if(l!==z_[e]){const p=l.apply(n,i);return c?Je(p):p}let h=t;a!==n&&(c?h=function(p,E){return t.call(this,Je(p),E,n)}:t.length>2&&(h=function(p,E){return t.call(this,p,E,n)}));const f=l.call(a,h,r);return c&&s?s(f):f}function uh(n,e,t,r){const s=ha(n);let i=t;return s!==n&&(Dt(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,Je(c),l,n)}),s[e](i,...r)}function ec(n,e,t){const r=ye(n);it(r,"iterate",fi);const s=r[e](...t);return(s===-1||s===!1)&&El(t[0])?(t[0]=ye(t[0]),r[e](...t)):s}function $s(n,e,t=[]){In(),fl();const r=ye(n)[e].apply(n,t);return dl(),wn(),r}const G_=al("__proto__,__v_isRef,__isVue"),Wd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ar));function Q_(n){ar(n)||(n=String(n));const e=ye(this);return it(e,"has",n),e.hasOwnProperty(n)}class Kd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?iy:Jd:i?Qd:Gd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let l;if(a&&(l=K_[t]))return l;if(t==="hasOwnProperty")return Q_}const c=Reflect.get(e,t,at(e)?e:r);if((ar(t)?Wd.has(t):G_(t))||(s||it(e,"get",t),i))return c;if(at(c)){const l=a&&ul(t)?c:c.value;return s&&Re(l)?bc(l):l}return Re(c)?s?bc(c):_l(c):c}}class zd extends Kd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=Xn(i);if(!Dt(r)&&!Xn(r)&&(i=ye(i),r=ye(r)),!se(e)&&at(i)&&!at(r))return l||(i.value=r),!0}const a=se(e)&&ul(t)?Number(t)<e.length:Ee(e,t),c=Reflect.set(e,t,r,at(e)?e:s);return e===ye(s)&&(a?Hn(r,i)&&mn(e,"set",t,r):mn(e,"add",t,r)),c}deleteProperty(e,t){const r=Ee(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&mn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!ar(t)||!Wd.has(t))&&it(e,"has",t),r}ownKeys(e){return it(e,"iterate",se(e)?"length":Rr),Reflect.ownKeys(e)}}class J_ extends Kd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Y_=new zd,X_=new J_,Z_=new zd(!0);const Ac=n=>n,no=n=>Reflect.getPrototypeOf(n);function ey(n,e,t){return function(...r){const s=this.__v_raw,i=ye(s),a=ts(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),f=t?Ac:e?Vo:Je;return!e&&it(i,"iterate",l?wc:Rr),{next(){const{value:p,done:E}=h.next();return E?{value:p,done:E}:{value:c?[f(p[0]),f(p[1])]:f(p),done:E}},[Symbol.iterator](){return this}}}}function ro(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ty(n,e){const t={get(s){const i=this.__v_raw,a=ye(i),c=ye(s);n||(Hn(s,c)&&it(a,"get",s),it(a,"get",c));const{has:l}=no(a),h=e?Ac:n?Vo:Je;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&it(ye(s),"iterate",Rr),s.size},has(s){const i=this.__v_raw,a=ye(i),c=ye(s);return n||(Hn(s,c)&&it(a,"has",s),it(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ye(c),h=e?Ac:n?Vo:Je;return!n&&it(l,"iterate",Rr),c.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return ze(t,n?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){!e&&!Dt(s)&&!Xn(s)&&(s=ye(s));const i=ye(this);return no(i).has.call(i,s)||(i.add(s),mn(i,"add",s,s)),this},set(s,i){!e&&!Dt(i)&&!Xn(i)&&(i=ye(i));const a=ye(this),{has:c,get:l}=no(a);let h=c.call(a,s);h||(s=ye(s),h=c.call(a,s));const f=l.call(a,s);return a.set(s,i),h?Hn(i,f)&&mn(a,"set",s,i):mn(a,"add",s,i),this},delete(s){const i=ye(this),{has:a,get:c}=no(i);let l=a.call(i,s);l||(s=ye(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&mn(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,a=s.clear();return i&&mn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ey(s,n,e)}),t}function ml(n,e){const t=ty(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ee(t,s)&&s in r?t:r,s,i)}const ny={get:ml(!1,!1)},ry={get:ml(!1,!0)},sy={get:ml(!0,!1)};const Gd=new WeakMap,Qd=new WeakMap,Jd=new WeakMap,iy=new WeakMap;function oy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ay(n){return n.__v_skip||!Object.isExtensible(n)?0:oy(D_(n))}function _l(n){return Xn(n)?n:yl(n,!1,Y_,ny,Gd)}function cy(n){return yl(n,!1,Z_,ry,Qd)}function bc(n){return yl(n,!0,X_,sy,Jd)}function yl(n,e,t,r,s){if(!Re(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=ay(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function rs(n){return Xn(n)?rs(n.__v_raw):!!(n&&n.__v_isReactive)}function Xn(n){return!!(n&&n.__v_isReadonly)}function Dt(n){return!!(n&&n.__v_isShallow)}function El(n){return n?!!n.__v_raw:!1}function ye(n){const e=n&&n.__v_raw;return e?ye(e):n}function ly(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&Nd(n,"__v_skip",!0),n}const Je=n=>Re(n)?_l(n):n,Vo=n=>Re(n)?bc(n):n;function at(n){return n?n.__v_isRef===!0:!1}function De(n){return uy(n,!1)}function uy(n,e){return at(n)?n:new hy(n,e)}class hy{constructor(e,t){this.dep=new gl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ye(e),this._value=t?e:Je(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Dt(e)||Xn(e);e=r?e:ye(e),Hn(e,t)&&(this._rawValue=e,this._value=r?e:Je(e),this.dep.trigger())}}function fy(n){return at(n)?n.value:n}const dy={get:(n,e,t)=>e==="__v_raw"?n:fy(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return at(s)&&!at(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Yd(n){return rs(n)?n:new Proxy(n,dy)}class py{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new gl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Ud(this,!0),!0}get value(){const e=this.dep.track();return jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gy(n,e,t=!1){let r,s;return ce(n)?r=n:(r=n.get,s=n.set),new py(r,s,t)}const so={},ko=new WeakMap;let wr;function my(n,e=!1,t=wr){if(t){let r=ko.get(t);r||ko.set(t,r=[]),r.push(n)}}function _y(n,e,t=Ae){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=W=>s?W:Dt(W)||s===!1||s===0?_n(W,1):_n(W);let f,p,E,S,D=!1,U=!1;if(at(n)?(p=()=>n.value,D=Dt(n)):rs(n)?(p=()=>h(n),D=!0):se(n)?(U=!0,D=n.some(W=>rs(W)||Dt(W)),p=()=>n.map(W=>{if(at(W))return W.value;if(rs(W))return h(W);if(ce(W))return l?l(W,2):W()})):ce(n)?e?p=l?()=>l(n,2):n:p=()=>{if(E){In();try{E()}finally{wn()}}const W=wr;wr=f;try{return l?l(n,3,[S]):n(S)}finally{wr=W}}:p=Zt,e&&s){const W=p,ee=s===!0?1/0:s;p=()=>_n(W(),ee)}const $=q_(),z=()=>{f.stop(),$&&$.active&&ll($.effects,f)};if(i&&e){const W=e;e=(...ee)=>{W(...ee),z()}}let G=U?new Array(n.length).fill(so):so;const J=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const ee=f.run();if(s||D||(U?ee.some((ie,A)=>Hn(ie,G[A])):Hn(ee,G))){E&&E();const ie=wr;wr=f;try{const A=[ee,G===so?void 0:U&&G[0]===so?[]:G,S];G=ee,l?l(e,3,A):e(...A)}finally{wr=ie}}}else f.run()};return c&&c(J),f=new Ld(p),f.scheduler=a?()=>a(J,!1):J,S=W=>my(W,!1,f),E=f.onStop=()=>{const W=ko.get(f);if(W){if(l)l(W,4);else for(const ee of W)ee();ko.delete(f)}},e?r?J(!0):G=f.run():a?a(J.bind(null,!0),!0):f.run(),z.pause=f.pause.bind(f),z.resume=f.resume.bind(f),z.stop=z,z}function _n(n,e=1/0,t){if(e<=0||!Re(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,at(n))_n(n.value,e,t);else if(se(n))for(let r=0;r<n.length;r++)_n(n[r],e,t);else if(Pd(n)||ts(n))n.forEach(r=>{_n(r,e,t)});else if(kd(n)){for(const r in n)_n(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&_n(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ci(n,e,t,r){try{return r?n(...r):n()}catch(s){fa(s,e,t)}}function jt(n,e,t,r){if(ce(n)){const s=Ci(n,e,t,r);return s&&Cd(s)&&s.catch(i=>{fa(i,e,t)}),s}if(se(n)){const s=[];for(let i=0;i<n.length;i++)s.push(jt(n[i],e,t,r));return s}}function fa(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](n,l,h)===!1)return}c=c.parent}if(i){In(),Ci(i,null,10,[n,l,h]),wn();return}}yy(n,t,s,r,a)}function yy(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const ft=[];let Qt=-1;const ss=[];let Fn=null,Kr=0;const Xd=Promise.resolve();let Do=null;function Sc(n){const e=Do||Xd;return n?e.then(this?n.bind(this):n):e}function Ey(n){let e=Qt+1,t=ft.length;for(;e<t;){const r=e+t>>>1,s=ft[r],i=di(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function vl(n){if(!(n.flags&1)){const e=di(n),t=ft[ft.length-1];!t||!(n.flags&2)&&e>=di(t)?ft.push(n):ft.splice(Ey(e),0,n),n.flags|=1,Zd()}}function Zd(){Do||(Do=Xd.then(tp))}function vy(n){se(n)?ss.push(...n):Fn&&n.id===-1?Fn.splice(Kr+1,0,n):n.flags&1||(ss.push(n),n.flags|=1),Zd()}function hh(n,e,t=Qt+1){for(;t<ft.length;t++){const r=ft[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;ft.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ep(n){if(ss.length){const e=[...new Set(ss)].sort((t,r)=>di(t)-di(r));if(ss.length=0,Fn){Fn.push(...e);return}for(Fn=e,Kr=0;Kr<Fn.length;Kr++){const t=Fn[Kr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Fn=null,Kr=0}}const di=n=>n.id==null?n.flags&2?-1:1/0:n.id;function tp(n){try{for(Qt=0;Qt<ft.length;Qt++){const e=ft[Qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qt<ft.length;Qt++){const e=ft[Qt];e&&(e.flags&=-2)}Qt=-1,ft.length=0,ep(),Do=null,(ft.length||ss.length)&&tp()}}let kt=null,np=null;function No(n){const e=kt;return kt=n,np=n&&n.type.__scopeId||null,e}function Hs(n,e=kt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Lo(-1);const i=No(e);let a;try{a=n(...s)}finally{No(i),r._d&&Lo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Oo(n,e){if(kt===null)return n;const t=_a(kt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ae]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&_n(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function Er(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(In(),jt(l,t,8,[n.el,c,n,e]),wn())}}const Ty=Symbol("_vte"),rp=n=>n.__isTeleport,gn=Symbol("_leaveCb"),io=Symbol("_enterCb");function Iy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tl(()=>{n.isMounted=!0}),fp(()=>{n.isUnmounting=!0}),n}const Pt=[Function,Array],sp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},ip=n=>{const e=n.subTree;return e.component?ip(e.component):e},wy={name:"BaseTransition",props:sp,setup(n,{slots:e}){const t=Np(),r=Iy();return()=>{const s=e.default&&cp(e.default(),!0);if(!s||!s.length)return;const i=op(s),a=ye(n),{mode:c}=a;if(r.isLeaving)return tc(i);const l=fh(i);if(!l)return tc(i);let h=Rc(l,a,r,t,p=>h=p);l.type!==dt&&pi(l,h);let f=t.subTree&&fh(t.subTree);if(f&&f.type!==dt&&!br(f,l)&&ip(t).type!==dt){let p=Rc(f,a,r,t);if(pi(f,p),c==="out-in"&&l.type!==dt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,f=void 0},tc(i);c==="in-out"&&l.type!==dt?p.delayLeave=(E,S,D)=>{const U=ap(r,f);U[String(f.key)]=f,E[gn]=()=>{S(),E[gn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{D(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function op(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==dt){e=t;break}}return e}const Ay=wy;function ap(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Rc(n,e,t,r,s){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:E,onLeave:S,onAfterLeave:D,onLeaveCancelled:U,onBeforeAppear:$,onAppear:z,onAfterAppear:G,onAppearCancelled:J}=e,W=String(n.key),ee=ap(t,n),ie=(m,w)=>{m&&jt(m,r,9,w)},A=(m,w)=>{const I=w[1];ie(m,w),se(m)?m.every(T=>T.length<=1)&&I():m.length<=1&&I()},_={mode:a,persisted:c,beforeEnter(m){let w=l;if(!t.isMounted)if(i)w=$||l;else return;m[gn]&&m[gn](!0);const I=ee[W];I&&br(n,I)&&I.el[gn]&&I.el[gn](),ie(w,[m])},enter(m){let w=h,I=f,T=p;if(!t.isMounted)if(i)w=z||h,I=G||f,T=J||p;else return;let y=!1;const ue=m[io]=Ne=>{y||(y=!0,Ne?ie(T,[m]):ie(I,[m]),_.delayedLeave&&_.delayedLeave(),m[io]=void 0)};w?A(w,[m,ue]):ue()},leave(m,w){const I=String(n.key);if(m[io]&&m[io](!0),t.isUnmounting)return w();ie(E,[m]);let T=!1;const y=m[gn]=ue=>{T||(T=!0,w(),ue?ie(U,[m]):ie(D,[m]),m[gn]=void 0,ee[I]===n&&delete ee[I])};ee[I]=n,S?A(S,[m,y]):y()},clone(m){const w=Rc(m,e,t,r,s);return s&&s(w),w}};return _}function tc(n){if(da(n))return n=Zn(n),n.children=null,n}function fh(n){if(!da(n))return rp(n.type)&&n.children?op(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ce(t.default))return t.default()}}function pi(n,e){n.shapeFlag&6&&n.component?(n.transition=e,pi(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function cp(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let a=n[i];const c=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===Lt?(a.patchFlag&128&&s++,r=r.concat(cp(a.children,e,c))):(e||a.type!==dt)&&r.push(c!=null?Zn(a,{key:c}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function lp(n,e){return ce(n)?ze({name:n.name},e,{setup:n}):n}function up(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const xo=new WeakMap;function ni(n,e,t,r,s=!1){if(se(n)){n.forEach((D,U)=>ni(D,e&&(se(e)?e[U]:e),t,r,s));return}if(ri(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ni(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?_a(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,f=c.refs===Ae?c.refs={}:c.refs,p=c.setupState,E=ye(p),S=p===Ae?Rd:D=>Ee(E,D);if(h!=null&&h!==l){if(dh(e),Me(h))f[h]=null,S(h)&&(p[h]=null);else if(at(h)){h.value=null;const D=e;D.k&&(f[D.k]=null)}}if(ce(l))Ci(l,c,12,[a,f]);else{const D=Me(l),U=at(l);if(D||U){const $=()=>{if(n.f){const z=D?S(l)?p[l]:f[l]:l.value;if(s)se(z)&&ll(z,i);else if(se(z))z.includes(i)||z.push(i);else if(D)f[l]=[i],S(l)&&(p[l]=f[l]);else{const G=[i];l.value=G,n.k&&(f[n.k]=G)}}else D?(f[l]=a,S(l)&&(p[l]=a)):U&&(l.value=a,n.k&&(f[n.k]=a))};if(a){const z=()=>{$(),xo.delete(n)};z.id=-1,xo.set(n,z),wt(z,t)}else dh(n),$()}}}function dh(n){const e=xo.get(n);e&&(e.flags|=8,xo.delete(n))}la().requestIdleCallback;la().cancelIdleCallback;const ri=n=>!!n.type.__asyncLoader,da=n=>n.type.__isKeepAlive;function by(n,e){hp(n,"a",e)}function Sy(n,e){hp(n,"da",e)}function hp(n,e,t=pt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(pa(e,r,t),t){let s=t.parent;for(;s&&s.parent;)da(s.parent.vnode)&&Ry(r,e,t,s),s=s.parent}}function Ry(n,e,t,r){const s=pa(e,n,r,!0);Il(()=>{ll(r[e],s)},t)}function pa(n,e,t=pt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{In();const c=Vi(t),l=jt(e,t,n,a);return c(),wn(),l});return r?s.unshift(i):s.push(i),i}}const Pn=n=>(e,t=pt)=>{(!mi||n==="sp")&&pa(n,(...r)=>e(...r),t)},Py=Pn("bm"),Tl=Pn("m"),Cy=Pn("bu"),Vy=Pn("u"),fp=Pn("bum"),Il=Pn("um"),ky=Pn("sp"),Dy=Pn("rtg"),Ny=Pn("rtc");function Oy(n,e=pt){pa("ec",n,e)}const xy=Symbol.for("v-ndc");function My(n,e,t,r){let s;const i=t,a=se(n);if(a||Me(n)){const c=a&&rs(n);let l=!1,h=!1;c&&(l=!Dt(n),h=Xn(n),n=ha(n)),s=new Array(n.length);for(let f=0,p=n.length;f<p;f++)s[f]=e(l?h?Vo(Je(n[f])):Je(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Re(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(n[f],f,l,i)}}else s=[];return s}const Pc=n=>n?Op(n)?_a(n):Pc(n.parent):null,si=ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pc(n.parent),$root:n=>Pc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>pp(n),$forceUpdate:n=>n.f||(n.f=()=>{vl(n.update)}),$nextTick:n=>n.n||(n.n=Sc.bind(n.proxy)),$watch:n=>sE.bind(n)}),nc=(n,e)=>n!==Ae&&!n.__isScriptSetup&&Ee(n,e),Ly={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;let h;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(nc(r,e))return a[e]=1,r[e];if(s!==Ae&&Ee(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&Ee(h,e))return a[e]=3,i[e];if(t!==Ae&&Ee(t,e))return a[e]=4,t[e];Cc&&(a[e]=0)}}const f=si[e];let p,E;if(f)return e==="$attrs"&&it(n.attrs,"get",""),f(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==Ae&&Ee(t,e))return a[e]=4,t[e];if(E=l.config.globalProperties,Ee(E,e))return E[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return nc(s,e)?(s[e]=t,!0):r!==Ae&&Ee(r,e)?(r[e]=t,!0):Ee(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i,type:a}},c){let l,h;return!!(t[c]||n!==Ae&&c[0]!=="$"&&Ee(n,c)||nc(e,c)||(l=i[0])&&Ee(l,c)||Ee(r,c)||Ee(si,c)||Ee(s.config.globalProperties,c)||(h=a.__cssModules)&&h[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ee(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ph(n){return se(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Cc=!0;function Fy(n){const e=pp(n),t=n.proxy,r=n.ctx;Cc=!1,e.beforeCreate&&gh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:E,beforeUpdate:S,updated:D,activated:U,deactivated:$,beforeDestroy:z,beforeUnmount:G,destroyed:J,unmounted:W,render:ee,renderTracked:ie,renderTriggered:A,errorCaptured:_,serverPrefetch:m,expose:w,inheritAttrs:I,components:T,directives:y,filters:ue}=e;if(h&&Uy(h,r,null),a)for(const Ie in a){const ge=a[Ie];ce(ge)&&(r[Ie]=ge.bind(t))}if(s){const Ie=s.call(t,t);Re(Ie)&&(n.data=_l(Ie))}if(Cc=!0,i)for(const Ie in i){const ge=i[Ie],gt=ce(ge)?ge.bind(t,t):ce(ge.get)?ge.get.bind(t,t):Zt,cn=!ce(ge)&&ce(ge.set)?ge.set.bind(t):Zt,St=zr({get:gt,set:cn});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>St.value,set:lt=>St.value=lt})}if(c)for(const Ie in c)dp(c[Ie],r,t,Ie);if(l){const Ie=ce(l)?l.call(t):l;Reflect.ownKeys(Ie).forEach(ge=>{Wy(ge,Ie[ge])})}f&&gh(f,n,"c");function ke(Ie,ge){se(ge)?ge.forEach(gt=>Ie(gt.bind(t))):ge&&Ie(ge.bind(t))}if(ke(Py,p),ke(Tl,E),ke(Cy,S),ke(Vy,D),ke(by,U),ke(Sy,$),ke(Oy,_),ke(Ny,ie),ke(Dy,A),ke(fp,G),ke(Il,W),ke(ky,m),se(w))if(w.length){const Ie=n.exposed||(n.exposed={});w.forEach(ge=>{Object.defineProperty(Ie,ge,{get:()=>t[ge],set:gt=>t[ge]=gt,enumerable:!0})})}else n.exposed||(n.exposed={});ee&&n.render===Zt&&(n.render=ee),I!=null&&(n.inheritAttrs=I),T&&(n.components=T),y&&(n.directives=y),m&&up(n)}function Uy(n,e,t=Zt){se(n)&&(n=Vc(n));for(const r in n){const s=n[r];let i;Re(s)?"default"in s?i=go(s.from||r,s.default,!0):i=go(s.from||r):i=go(s),at(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function gh(n,e,t){jt(se(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function dp(n,e,t,r){let s=r.includes(".")?Rp(t,r):()=>t[r];if(Me(n)){const i=e[n];ce(i)&&mo(s,i)}else if(ce(n))mo(s,n.bind(t));else if(Re(n))if(se(n))n.forEach(i=>dp(i,e,t,r));else{const i=ce(n.handler)?n.handler.bind(t):e[n.handler];ce(i)&&mo(s,i,n)}}function pp(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>Mo(l,h,a,!0)),Mo(l,e,a)),Re(e)&&i.set(e,l),l}function Mo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Mo(n,i,t,!0),s&&s.forEach(a=>Mo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=By[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const By={data:mh,props:_h,emits:_h,methods:Ws,computed:Ws,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Ws,directives:Ws,watch:jy,provide:mh,inject:$y};function mh(n,e){return e?n?function(){return ze(ce(n)?n.call(this,this):n,ce(e)?e.call(this,this):e)}:e:n}function $y(n,e){return Ws(Vc(n),Vc(e))}function Vc(n){if(se(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ht(n,e){return n?[...new Set([].concat(n,e))]:e}function Ws(n,e){return n?ze(Object.create(null),n,e):e}function _h(n,e){return n?se(n)&&se(e)?[...new Set([...n,...e])]:ze(Object.create(null),ph(n),ph(e??{})):e}function jy(n,e){if(!n)return e;if(!e)return n;const t=ze(Object.create(null),n);for(const r in e)t[r]=ht(n[r],e[r]);return t}function gp(){return{app:null,config:{isNativeTag:Rd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qy=0;function Hy(n,e){return function(r,s=null){ce(r)||(r=ze({},r)),s!=null&&!Re(s)&&(s=null);const i=gp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:qy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:SE,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&ce(f.install)?(a.add(f),f.install(h,...p)):ce(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,E){if(!l){const S=h._ceVNode||Xe(r,s);return S.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),n(S,f,E),l=!0,h._container=f,f.__vue_app__=h,_a(S.component)}},onUnmount(f){c.push(f)},unmount(){l&&(jt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=is;is=h;try{return f()}finally{is=p}}};return h}}let is=null;function Wy(n,e){if(pt){let t=pt.provides;const r=pt.parent&&pt.parent.provides;r===t&&(t=pt.provides=Object.create(r)),t[n]=e}}function go(n,e,t=!1){const r=Np();if(r||is){let s=is?is._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ce(e)?e.call(r&&r.proxy):e}}const mp={},_p=()=>Object.create(mp),yp=n=>Object.getPrototypeOf(n)===mp;function Ky(n,e,t,r=!1){const s={},i=_p();n.propsDefaults=Object.create(null),Ep(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:cy(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function zy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=ye(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let E=f[p];if(ga(n.emitsOptions,E))continue;const S=e[E];if(l)if(Ee(i,E))S!==i[E]&&(i[E]=S,h=!0);else{const D=Yn(E);s[D]=kc(l,c,D,S,n,!1)}else S!==i[E]&&(i[E]=S,h=!0)}}}else{Ep(n,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Ee(e,p)&&((f=cr(p))===p||!Ee(e,f)))&&(l?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=kc(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&mn(n.attrs,"set","")}function Ep(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(Zs(l))continue;const h=e[l];let f;s&&Ee(s,f=Yn(l))?!i||!i.includes(f)?t[f]=h:(c||(c={}))[f]=h:ga(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ye(t),h=c||Ae;for(let f=0;f<i.length;f++){const p=i[f];t[p]=kc(s,l,p,h[p],n,!Ee(h,p))}}return a}function kc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Ee(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ce(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=Vi(s);r=h[t]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===cr(t))&&(r=!0))}return r}const Gy=new WeakMap;function vp(n,e,t=!1){const r=t?Gy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!ce(n)){const f=p=>{l=!0;const[E,S]=vp(p,e,!0);ze(a,E),S&&c.push(...S)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!l)return Re(n)&&r.set(n,es),es;if(se(i))for(let f=0;f<i.length;f++){const p=Yn(i[f]);yh(p)&&(a[p]=Ae)}else if(i)for(const f in i){const p=Yn(f);if(yh(p)){const E=i[f],S=a[p]=se(E)||ce(E)?{type:E}:ze({},E),D=S.type;let U=!1,$=!0;if(se(D))for(let z=0;z<D.length;++z){const G=D[z],J=ce(G)&&G.name;if(J==="Boolean"){U=!0;break}else J==="String"&&($=!1)}else U=ce(D)&&D.name==="Boolean";S[0]=U,S[1]=$,(U||Ee(S,"default"))&&c.push(p)}}const h=[a,c];return Re(n)&&r.set(n,h),h}function yh(n){return n[0]!=="$"&&!Zs(n)}const wl=n=>n==="_"||n==="_ctx"||n==="$stable",Al=n=>se(n)?n.map(Yt):[Yt(n)],Qy=(n,e,t)=>{if(e._n)return e;const r=Hs((...s)=>Al(e(...s)),t);return r._c=!1,r},Tp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(wl(s))continue;const i=n[s];if(ce(i))e[s]=Qy(s,i,r);else if(i!=null){const a=Al(i);e[s]=()=>a}}},Ip=(n,e)=>{const t=Al(e);n.slots.default=()=>t},wp=(n,e,t)=>{for(const r in e)(t||!wl(r))&&(n[r]=e[r])},Jy=(n,e,t)=>{const r=n.slots=_p();if(n.vnode.shapeFlag&32){const s=e._;s?(wp(r,e,t),t&&Nd(r,"_",s,!0)):Tp(e,r)}else e&&Ip(n,e)},Yy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ae;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:wp(s,e,t):(i=!e.$stable,Tp(e,s)),a=e}else e&&(Ip(n,e),a={default:1});if(i)for(const c in s)!wl(c)&&a[c]==null&&delete s[c]},wt=fE;function Xy(n){return Zy(n)}function Zy(n,e){const t=la();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:E,setScopeId:S=Zt,insertStaticContent:D}=n,U=(v,b,V,B=null,M=null,L=null,k=void 0,P=null,O=!!b.dynamicChildren)=>{if(v===b)return;v&&!br(v,b)&&(B=Wt(v),lt(v,M,L,!0),v=null),b.patchFlag===-2&&(O=!1,b.dynamicChildren=null);const{type:F,ref:X,shapeFlag:q}=b;switch(F){case ma:$(v,b,V,B);break;case dt:z(v,b,V,B);break;case sc:v==null&&G(b,V,B,k);break;case Lt:T(v,b,V,B,M,L,k,P,O);break;default:q&1?ee(v,b,V,B,M,L,k,P,O):q&6?y(v,b,V,B,M,L,k,P,O):(q&64||q&128)&&F.process(v,b,V,B,M,L,k,P,O,xt)}X!=null&&M?ni(X,v&&v.ref,L,b||v,!b):X==null&&v&&v.ref!=null&&ni(v.ref,null,L,v,!0)},$=(v,b,V,B)=>{if(v==null)r(b.el=c(b.children),V,B);else{const M=b.el=v.el;b.children!==v.children&&h(M,b.children)}},z=(v,b,V,B)=>{v==null?r(b.el=l(b.children||""),V,B):b.el=v.el},G=(v,b,V,B)=>{[v.el,v.anchor]=D(v.children,b,V,B,v.el,v.anchor)},J=({el:v,anchor:b},V,B)=>{let M;for(;v&&v!==b;)M=E(v),r(v,V,B),v=M;r(b,V,B)},W=({el:v,anchor:b})=>{let V;for(;v&&v!==b;)V=E(v),s(v),v=V;s(b)},ee=(v,b,V,B,M,L,k,P,O)=>{if(b.type==="svg"?k="svg":b.type==="math"&&(k="mathml"),v==null)ie(b,V,B,M,L,k,P,O);else{const F=v.el&&v.el._isVueCE?v.el:null;try{F&&F._beginPatch(),m(v,b,M,L,k,P,O)}finally{F&&F._endPatch()}}},ie=(v,b,V,B,M,L,k,P)=>{let O,F;const{props:X,shapeFlag:q,transition:Z,dirs:te}=v;if(O=v.el=a(v.type,L,X&&X.is,X),q&8?f(O,v.children):q&16&&_(v.children,O,null,B,M,rc(v,L),k,P),te&&Er(v,null,B,"created"),A(O,v,v.scopeId,k,B),X){for(const Te in X)Te!=="value"&&!Zs(Te)&&i(O,Te,null,X[Te],L,B);"value"in X&&i(O,"value",null,X.value,L),(F=X.onVnodeBeforeMount)&&Gt(F,B,v)}te&&Er(v,null,B,"beforeMount");const he=eE(M,Z);he&&Z.beforeEnter(O),r(O,b,V),((F=X&&X.onVnodeMounted)||he||te)&&wt(()=>{F&&Gt(F,B,v),he&&Z.enter(O),te&&Er(v,null,B,"mounted")},M)},A=(v,b,V,B,M)=>{if(V&&S(v,V),B)for(let L=0;L<B.length;L++)S(v,B[L]);if(M){let L=M.subTree;if(b===L||Cp(L.type)&&(L.ssContent===b||L.ssFallback===b)){const k=M.vnode;A(v,k,k.scopeId,k.slotScopeIds,M.parent)}}},_=(v,b,V,B,M,L,k,P,O=0)=>{for(let F=O;F<v.length;F++){const X=v[F]=P?Un(v[F]):Yt(v[F]);U(null,X,b,V,B,M,L,k,P)}},m=(v,b,V,B,M,L,k)=>{const P=b.el=v.el;let{patchFlag:O,dynamicChildren:F,dirs:X}=b;O|=v.patchFlag&16;const q=v.props||Ae,Z=b.props||Ae;let te;if(V&&vr(V,!1),(te=Z.onVnodeBeforeUpdate)&&Gt(te,V,b,v),X&&Er(b,v,V,"beforeUpdate"),V&&vr(V,!0),(q.innerHTML&&Z.innerHTML==null||q.textContent&&Z.textContent==null)&&f(P,""),F?w(v.dynamicChildren,F,P,V,B,rc(b,M),L):k||ge(v,b,P,null,V,B,rc(b,M),L,!1),O>0){if(O&16)I(P,q,Z,V,M);else if(O&2&&q.class!==Z.class&&i(P,"class",null,Z.class,M),O&4&&i(P,"style",q.style,Z.style,M),O&8){const he=b.dynamicProps;for(let Te=0;Te<he.length;Te++){const _e=he[Te],et=q[_e],tt=Z[_e];(tt!==et||_e==="value")&&i(P,_e,et,tt,M,V)}}O&1&&v.children!==b.children&&f(P,b.children)}else!k&&F==null&&I(P,q,Z,V,M);((te=Z.onVnodeUpdated)||X)&&wt(()=>{te&&Gt(te,V,b,v),X&&Er(b,v,V,"updated")},B)},w=(v,b,V,B,M,L,k)=>{for(let P=0;P<b.length;P++){const O=v[P],F=b[P],X=O.el&&(O.type===Lt||!br(O,F)||O.shapeFlag&198)?p(O.el):V;U(O,F,X,null,B,M,L,k,!0)}},I=(v,b,V,B,M)=>{if(b!==V){if(b!==Ae)for(const L in b)!Zs(L)&&!(L in V)&&i(v,L,b[L],null,M,B);for(const L in V){if(Zs(L))continue;const k=V[L],P=b[L];k!==P&&L!=="value"&&i(v,L,P,k,M,B)}"value"in V&&i(v,"value",b.value,V.value,M)}},T=(v,b,V,B,M,L,k,P,O)=>{const F=b.el=v?v.el:c(""),X=b.anchor=v?v.anchor:c("");let{patchFlag:q,dynamicChildren:Z,slotScopeIds:te}=b;te&&(P=P?P.concat(te):te),v==null?(r(F,V,B),r(X,V,B),_(b.children||[],V,X,M,L,k,P,O)):q>0&&q&64&&Z&&v.dynamicChildren?(w(v.dynamicChildren,Z,V,M,L,k,P),(b.key!=null||M&&b===M.subTree)&&Ap(v,b,!0)):ge(v,b,V,X,M,L,k,P,O)},y=(v,b,V,B,M,L,k,P,O)=>{b.slotScopeIds=P,v==null?b.shapeFlag&512?M.ctx.activate(b,V,B,k,O):ue(b,V,B,M,L,k,O):Ne(v,b,O)},ue=(v,b,V,B,M,L,k)=>{const P=v.component=EE(v,B,M);if(da(v)&&(P.ctx.renderer=xt),vE(P,!1,k),P.asyncDep){if(M&&M.registerDep(P,ke,k),!v.el){const O=P.subTree=Xe(dt);z(null,O,b,V),v.placeholder=O.el}}else ke(P,v,b,V,M,L,k)},Ne=(v,b,V)=>{const B=b.component=v.component;if(uE(v,b,V))if(B.asyncDep&&!B.asyncResolved){Ie(B,b,V);return}else B.next=b,B.update();else b.el=v.el,B.vnode=b},ke=(v,b,V,B,M,L,k)=>{const P=()=>{if(v.isMounted){let{next:q,bu:Z,u:te,parent:he,vnode:Te}=v;{const Tt=bp(v);if(Tt){q&&(q.el=Te.el,Ie(v,q,k)),Tt.asyncDep.then(()=>{v.isUnmounted||P()});return}}let _e=q,et;vr(v,!1),q?(q.el=Te.el,Ie(v,q,k)):q=Te,Z&&po(Z),(et=q.props&&q.props.onVnodeBeforeUpdate)&&Gt(et,he,q,Te),vr(v,!0);const tt=vh(v),vt=v.subTree;v.subTree=tt,U(vt,tt,p(vt.el),Wt(vt),v,M,L),q.el=tt.el,_e===null&&hE(v,tt.el),te&&wt(te,M),(et=q.props&&q.props.onVnodeUpdated)&&wt(()=>Gt(et,he,q,Te),M)}else{let q;const{el:Z,props:te}=b,{bm:he,m:Te,parent:_e,root:et,type:tt}=v,vt=ri(b);vr(v,!1),he&&po(he),!vt&&(q=te&&te.onVnodeBeforeMount)&&Gt(q,_e,b),vr(v,!0);{et.ce&&et.ce._def.shadowRoot!==!1&&et.ce._injectChildStyle(tt);const Tt=v.subTree=vh(v);U(null,Tt,V,B,v,M,L),b.el=Tt.el}if(Te&&wt(Te,M),!vt&&(q=te&&te.onVnodeMounted)){const Tt=b;wt(()=>Gt(q,_e,Tt),M)}(b.shapeFlag&256||_e&&ri(_e.vnode)&&_e.vnode.shapeFlag&256)&&v.a&&wt(v.a,M),v.isMounted=!0,b=V=B=null}};v.scope.on();const O=v.effect=new Ld(P);v.scope.off();const F=v.update=O.run.bind(O),X=v.job=O.runIfDirty.bind(O);X.i=v,X.id=v.uid,O.scheduler=()=>vl(X),vr(v,!0),F()},Ie=(v,b,V)=>{b.component=v;const B=v.vnode.props;v.vnode=b,v.next=null,zy(v,b.props,B,V),Yy(v,b.children,V),In(),hh(v),wn()},ge=(v,b,V,B,M,L,k,P,O=!1)=>{const F=v&&v.children,X=v?v.shapeFlag:0,q=b.children,{patchFlag:Z,shapeFlag:te}=b;if(Z>0){if(Z&128){cn(F,q,V,B,M,L,k,P,O);return}else if(Z&256){gt(F,q,V,B,M,L,k,P,O);return}}te&8?(X&16&&Ot(F,M,L),q!==F&&f(V,q)):X&16?te&16?cn(F,q,V,B,M,L,k,P,O):Ot(F,M,L,!0):(X&8&&f(V,""),te&16&&_(q,V,B,M,L,k,P,O))},gt=(v,b,V,B,M,L,k,P,O)=>{v=v||es,b=b||es;const F=v.length,X=b.length,q=Math.min(F,X);let Z;for(Z=0;Z<q;Z++){const te=b[Z]=O?Un(b[Z]):Yt(b[Z]);U(v[Z],te,V,null,M,L,k,P,O)}F>X?Ot(v,M,L,!0,!1,q):_(b,V,B,M,L,k,P,O,q)},cn=(v,b,V,B,M,L,k,P,O)=>{let F=0;const X=b.length;let q=v.length-1,Z=X-1;for(;F<=q&&F<=Z;){const te=v[F],he=b[F]=O?Un(b[F]):Yt(b[F]);if(br(te,he))U(te,he,V,null,M,L,k,P,O);else break;F++}for(;F<=q&&F<=Z;){const te=v[q],he=b[Z]=O?Un(b[Z]):Yt(b[Z]);if(br(te,he))U(te,he,V,null,M,L,k,P,O);else break;q--,Z--}if(F>q){if(F<=Z){const te=Z+1,he=te<X?b[te].el:B;for(;F<=Z;)U(null,b[F]=O?Un(b[F]):Yt(b[F]),V,he,M,L,k,P,O),F++}}else if(F>Z)for(;F<=q;)lt(v[F],M,L,!0),F++;else{const te=F,he=F,Te=new Map;for(F=he;F<=Z;F++){const Ge=b[F]=O?Un(b[F]):Yt(b[F]);Ge.key!=null&&Te.set(Ge.key,F)}let _e,et=0;const tt=Z-he+1;let vt=!1,Tt=0;const Mt=new Array(tt);for(F=0;F<tt;F++)Mt[F]=0;for(F=te;F<=q;F++){const Ge=v[F];if(et>=tt){lt(Ge,M,L,!0);continue}let He;if(Ge.key!=null)He=Te.get(Ge.key);else for(_e=he;_e<=Z;_e++)if(Mt[_e-he]===0&&br(Ge,b[_e])){He=_e;break}He===void 0?lt(Ge,M,L,!0):(Mt[He-he]=F+1,He>=Tt?Tt=He:vt=!0,U(Ge,b[He],V,null,M,L,k,P,O),et++)}const Br=vt?tE(Mt):es;for(_e=Br.length-1,F=tt-1;F>=0;F--){const Ge=he+F,He=b[Ge],Ss=b[Ge+1],pr=Ge+1<X?Ss.el||Ss.placeholder:B;Mt[F]===0?U(null,He,V,pr,M,L,k,P,O):vt&&(_e<0||F!==Br[_e]?St(He,V,pr,2):_e--)}}},St=(v,b,V,B,M=null)=>{const{el:L,type:k,transition:P,children:O,shapeFlag:F}=v;if(F&6){St(v.component.subTree,b,V,B);return}if(F&128){v.suspense.move(b,V,B);return}if(F&64){k.move(v,b,V,xt);return}if(k===Lt){r(L,b,V);for(let q=0;q<O.length;q++)St(O[q],b,V,B);r(v.anchor,b,V);return}if(k===sc){J(v,b,V);return}if(B!==2&&F&1&&P)if(B===0)P.beforeEnter(L),r(L,b,V),wt(()=>P.enter(L),M);else{const{leave:q,delayLeave:Z,afterLeave:te}=P,he=()=>{v.ctx.isUnmounted?s(L):r(L,b,V)},Te=()=>{L._isLeaving&&L[gn](!0),q(L,()=>{he(),te&&te()})};Z?Z(L,he,Te):Te()}else r(L,b,V)},lt=(v,b,V,B=!1,M=!1)=>{const{type:L,props:k,ref:P,children:O,dynamicChildren:F,shapeFlag:X,patchFlag:q,dirs:Z,cacheIndex:te}=v;if(q===-2&&(M=!1),P!=null&&(In(),ni(P,null,V,v,!0),wn()),te!=null&&(b.renderCache[te]=void 0),X&256){b.ctx.deactivate(v);return}const he=X&1&&Z,Te=!ri(v);let _e;if(Te&&(_e=k&&k.onVnodeBeforeUnmount)&&Gt(_e,b,v),X&6)dr(v.component,V,B);else{if(X&128){v.suspense.unmount(V,B);return}he&&Er(v,null,b,"beforeUnmount"),X&64?v.type.remove(v,b,V,xt,B):F&&!F.hasOnce&&(L!==Lt||q>0&&q&64)?Ot(F,b,V,!1,!0):(L===Lt&&q&384||!M&&X&16)&&Ot(O,b,V),B&&Nt(v)}(Te&&(_e=k&&k.onVnodeUnmounted)||he)&&wt(()=>{_e&&Gt(_e,b,v),he&&Er(v,null,b,"unmounted")},V)},Nt=v=>{const{type:b,el:V,anchor:B,transition:M}=v;if(b===Lt){ln(V,B);return}if(b===sc){W(v);return}const L=()=>{s(V),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(v.shapeFlag&1&&M&&!M.persisted){const{leave:k,delayLeave:P}=M,O=()=>k(V,L);P?P(v.el,L,O):O()}else L()},ln=(v,b)=>{let V;for(;v!==b;)V=E(v),s(v),v=V;s(b)},dr=(v,b,V)=>{const{bum:B,scope:M,job:L,subTree:k,um:P,m:O,a:F}=v;Eh(O),Eh(F),B&&po(B),M.stop(),L&&(L.flags|=8,lt(k,v,b,V)),P&&wt(P,b),wt(()=>{v.isUnmounted=!0},b)},Ot=(v,b,V,B=!1,M=!1,L=0)=>{for(let k=L;k<v.length;k++)lt(v[k],b,V,B,M)},Wt=v=>{if(v.shapeFlag&6)return Wt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const b=E(v.anchor||v.el),V=b&&b[Ty];return V?E(V):b};let un=!1;const Rt=(v,b,V)=>{v==null?b._vnode&&lt(b._vnode,null,null,!0):U(b._vnode||null,v,b,null,null,null,V),b._vnode=v,un||(un=!0,hh(),ep(),un=!1)},xt={p:U,um:lt,m:St,r:Nt,mt:ue,mc:_,pc:ge,pbc:w,n:Wt,o:n};return{render:Rt,hydrate:void 0,createApp:Hy(Rt)}}function rc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function vr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function eE(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ap(n,e,t=!1){const r=n.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Un(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Ap(a,c)),c.type===ma&&c.patchFlag!==-1&&(c.el=a.el),c.type===dt&&!c.el&&(c.el=a.el)}}function tE(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function bp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bp(e)}function Eh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const nE=Symbol.for("v-scx"),rE=()=>go(nE);function mo(n,e,t){return Sp(n,e,t)}function Sp(n,e,t=Ae){const{immediate:r,deep:s,flush:i,once:a}=t,c=ze({},t),l=e&&r||!e&&i!=="post";let h;if(mi){if(i==="sync"){const S=rE();h=S.__watcherHandles||(S.__watcherHandles=[])}else if(!l){const S=()=>{};return S.stop=Zt,S.resume=Zt,S.pause=Zt,S}}const f=pt;c.call=(S,D,U)=>jt(S,f,D,U);let p=!1;i==="post"?c.scheduler=S=>{wt(S,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(S,D)=>{D?S():vl(S)}),c.augmentJob=S=>{e&&(S.flags|=4),p&&(S.flags|=2,f&&(S.id=f.uid,S.i=f))};const E=_y(n,e,c);return mi&&(h?h.push(E):l&&E()),E}function sE(n,e,t){const r=this.proxy,s=Me(n)?n.includes(".")?Rp(r,n):()=>r[n]:n.bind(r,r);let i;ce(e)?i=e:(i=e.handler,t=e);const a=Vi(this),c=Sp(s,i.bind(r),t);return a(),c}function Rp(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const iE=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Yn(e)}Modifiers`]||n[`${cr(e)}Modifiers`];function oE(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ae;let s=t;const i=e.startsWith("update:"),a=i&&iE(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Me(f)?f.trim():f)),a.number&&(s=t.map(hl)));let c,l=r[c=Ja(e)]||r[c=Ja(Yn(e))];!l&&i&&(l=r[c=Ja(cr(e))]),l&&jt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,jt(h,n,6,s)}}const aE=new WeakMap;function Pp(n,e,t=!1){const r=t?aE:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!ce(n)){const l=h=>{const f=Pp(h,e,!0);f&&(c=!0,ze(a,f))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Re(n)&&r.set(n,null),null):(se(i)?i.forEach(l=>a[l]=null):ze(a,i),Re(n)&&r.set(n,a),a)}function ga(n,e){return!n||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(n,e[0].toLowerCase()+e.slice(1))||Ee(n,cr(e))||Ee(n,e))}function vh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:p,data:E,setupState:S,ctx:D,inheritAttrs:U}=n,$=No(n);let z,G;try{if(t.shapeFlag&4){const W=s||r,ee=W;z=Yt(h.call(ee,W,f,p,S,E,D)),G=c}else{const W=e;z=Yt(W.length>1?W(p,{attrs:c,slots:a,emit:l}):W(p,null)),G=e.props?c:cE(c)}}catch(W){ii.length=0,fa(W,n,1),z=Xe(dt)}let J=z;if(G&&U!==!1){const W=Object.keys(G),{shapeFlag:ee}=J;W.length&&ee&7&&(i&&W.some(cl)&&(G=lE(G,i)),J=Zn(J,G,!1,!0))}return t.dirs&&(J=Zn(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(t.dirs):t.dirs),t.transition&&pi(J,t.transition),z=J,No($),z}const cE=n=>{let e;for(const t in n)(t==="class"||t==="style"||oa(t))&&((e||(e={}))[t]=n[t]);return e},lE=(n,e)=>{const t={};for(const r in n)(!cl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function uE(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Th(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const E=f[p];if(a[E]!==r[E]&&!ga(h,E))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Th(r,a,h):!0:!!a;return!1}function Th(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!ga(t,i))return!0}return!1}function hE({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Cp=n=>n.__isSuspense;function fE(n,e){e&&e.pendingBranch?se(n)?e.effects.push(...n):e.effects.push(n):vy(n)}const Lt=Symbol.for("v-fgt"),ma=Symbol.for("v-txt"),dt=Symbol.for("v-cmt"),sc=Symbol.for("v-stc"),ii=[];let At=null;function rt(n=!1){ii.push(At=n?null:[])}function dE(){ii.pop(),At=ii[ii.length-1]||null}let gi=1;function Lo(n,e=!1){gi+=n,n<0&&At&&e&&(At.hasOnce=!0)}function Vp(n){return n.dynamicChildren=gi>0?At||es:null,dE(),gi>0&&At&&At.push(n),n}function mt(n,e,t,r,s,i){return Vp(Q(n,e,t,r,s,i,!0))}function kp(n,e,t,r,s){return Vp(Xe(n,e,t,r,s,!0))}function Fo(n){return n?n.__v_isVNode===!0:!1}function br(n,e){return n.type===e.type&&n.key===e.key}const Dp=({key:n})=>n??null,_o=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||at(n)||ce(n)?{i:kt,r:n,k:e,f:!!t}:n:null);function Q(n,e=null,t=null,r=0,s=null,i=n===Lt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Dp(e),ref:e&&_o(e),scopeId:np,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return c?(Sl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=Me(t)?8:16),gi>0&&!a&&At&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&At.push(l),l}const Xe=pE;function pE(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===xy)&&(n=dt),Fo(n)){const c=Zn(n,e,!0);return t&&Sl(c,t),gi>0&&!i&&At&&(c.shapeFlag&6?At[At.indexOf(n)]=c:At.push(c)),c.patchFlag=-2,c}if(AE(n)&&(n=n.__vccOpts),e){e=gE(e);let{class:c,style:l}=e;c&&!Me(c)&&(e.class=ua(c)),Re(l)&&(El(l)&&!se(l)&&(l=ze({},l)),e.style=ns(l))}const a=Me(n)?1:Cp(n)?128:rp(n)?64:Re(n)?4:ce(n)?2:0;return Q(n,e,t,r,s,a,i,!0)}function gE(n){return n?El(n)||yp(n)?ze({},n):n:null}function Zn(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?mE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Dp(h),ref:e&&e.ref?t&&i?se(i)?i.concat(_o(e)):[i,_o(e)]:_o(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Lt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zn(n.ssContent),ssFallback:n.ssFallback&&Zn(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&pi(f,l.clone(f)),f}function bl(n=" ",e=0){return Xe(ma,null,n,e)}function dn(n="",e=!1){return e?(rt(),kp(dt,null,n)):Xe(dt,null,n)}function Yt(n){return n==null||typeof n=="boolean"?Xe(dt):se(n)?Xe(Lt,null,n.slice()):Fo(n)?Un(n):Xe(ma,null,String(n))}function Un(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zn(n)}function Sl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(se(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!yp(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:kt},t=32):(e=String(e),r&64?(t=16,e=[bl(e)]):t=8);n.children=e,n.shapeFlag|=t}function mE(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ua([e.class,r.class]));else if(s==="style")e.style=ns([e.style,r.style]);else if(oa(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Gt(n,e,t,r=null){jt(n,e,7,[t,r])}const _E=gp();let yE=0;function EE(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||_E,i={uid:yE++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vp(r,s),emitsOptions:Pp(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=oE.bind(null,i),n.ce&&n.ce(i),i}let pt=null;const Np=()=>pt||kt;let Uo,Dc;{const n=la(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Uo=e("__VUE_INSTANCE_SETTERS__",t=>pt=t),Dc=e("__VUE_SSR_SETTERS__",t=>mi=t)}const Vi=n=>{const e=pt;return Uo(n),n.scope.on(),()=>{n.scope.off(),Uo(e)}},Ih=()=>{pt&&pt.scope.off(),Uo(null)};function Op(n){return n.vnode.shapeFlag&4}let mi=!1;function vE(n,e=!1,t=!1){e&&Dc(e);const{props:r,children:s}=n.vnode,i=Op(n);Ky(n,r,i,e),Jy(n,s,t||e);const a=i?TE(n,e):void 0;return e&&Dc(!1),a}function TE(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ly);const{setup:r}=t;if(r){In();const s=n.setupContext=r.length>1?wE(n):null,i=Vi(n),a=Ci(r,n,0,[n.props,s]),c=Cd(a);if(wn(),i(),(c||n.sp)&&!ri(n)&&up(n),c){if(a.then(Ih,Ih),e)return a.then(l=>{wh(n,l)}).catch(l=>{fa(l,n,0)});n.asyncDep=a}else wh(n,a)}else xp(n)}function wh(n,e,t){ce(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Re(e)&&(n.setupState=Yd(e)),xp(n)}function xp(n,e,t){const r=n.type;n.render||(n.render=r.render||Zt);{const s=Vi(n);In();try{Fy(n)}finally{wn(),s()}}}const IE={get(n,e){return it(n,"get",""),n[e]}};function wE(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,IE),slots:n.slots,emit:n.emit,expose:e}}function _a(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Yd(ly(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in si)return si[t](n)},has(e,t){return t in e||t in si}})):n.proxy}function AE(n){return ce(n)&&"__vccOpts"in n}const zr=(n,e)=>gy(n,e,mi);function bE(n,e,t){try{Lo(-1);const r=arguments.length;return r===2?Re(e)&&!se(e)?Fo(e)?Xe(n,null,[e]):Xe(n,e):Xe(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Fo(t)&&(t=[t]),Xe(n,e,t))}finally{Lo(1)}}const SE="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nc;const Ah=typeof window<"u"&&window.trustedTypes;if(Ah)try{Nc=Ah.createPolicy("vue",{createHTML:n=>n})}catch{}const Mp=Nc?n=>Nc.createHTML(n):n=>n,RE="http://www.w3.org/2000/svg",PE="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,bh=pn&&pn.createElement("template"),CE={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?pn.createElementNS(RE,n):e==="mathml"?pn.createElementNS(PE,n):t?pn.createElement(n,{is:t}):pn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>pn.createTextNode(n),createComment:n=>pn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{bh.innerHTML=Mp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=bh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Mn="transition",js="animation",_i=Symbol("_vtc"),Lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},VE=ze({},sp,Lp),kE=n=>(n.displayName="Transition",n.props=VE,n),oo=kE((n,{slots:e})=>bE(Ay,DE(n),e)),Tr=(n,e=[])=>{se(n)?n.forEach(t=>t(...e)):n&&n(...e)},Sh=n=>n?se(n)?n.some(e=>e.length>1):n.length>1:!1;function DE(n){const e={};for(const T in n)T in Lp||(e[T]=n[T]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:h=a,appearToClass:f=c,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:E=`${t}-leave-active`,leaveToClass:S=`${t}-leave-to`}=n,D=NE(s),U=D&&D[0],$=D&&D[1],{onBeforeEnter:z,onEnter:G,onEnterCancelled:J,onLeave:W,onLeaveCancelled:ee,onBeforeAppear:ie=z,onAppear:A=G,onAppearCancelled:_=J}=e,m=(T,y,ue,Ne)=>{T._enterCancelled=Ne,Ir(T,y?f:c),Ir(T,y?h:a),ue&&ue()},w=(T,y)=>{T._isLeaving=!1,Ir(T,p),Ir(T,S),Ir(T,E),y&&y()},I=T=>(y,ue)=>{const Ne=T?A:G,ke=()=>m(y,T,ue);Tr(Ne,[y,ke]),Rh(()=>{Ir(y,T?l:i),fn(y,T?f:c),Sh(Ne)||Ph(y,r,U,ke)})};return ze(e,{onBeforeEnter(T){Tr(z,[T]),fn(T,i),fn(T,a)},onBeforeAppear(T){Tr(ie,[T]),fn(T,l),fn(T,h)},onEnter:I(!1),onAppear:I(!0),onLeave(T,y){T._isLeaving=!0;const ue=()=>w(T,y);fn(T,p),T._enterCancelled?(fn(T,E),kh(T)):(kh(T),fn(T,E)),Rh(()=>{T._isLeaving&&(Ir(T,p),fn(T,S),Sh(W)||Ph(T,r,$,ue))}),Tr(W,[T,ue])},onEnterCancelled(T){m(T,!1,void 0,!0),Tr(J,[T])},onAppearCancelled(T){m(T,!0,void 0,!0),Tr(_,[T])},onLeaveCancelled(T){w(T),Tr(ee,[T])}})}function NE(n){if(n==null)return null;if(Re(n))return[ic(n.enter),ic(n.leave)];{const e=ic(n);return[e,e]}}function ic(n){return x_(n)}function fn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[_i]||(n[_i]=new Set)).add(e)}function Ir(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[_i];t&&(t.delete(e),t.size||(n[_i]=void 0))}function Rh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let OE=0;function Ph(n,e,t,r){const s=n._endId=++OE,i=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:a,timeout:c,propCount:l}=xE(n,e);if(!a)return r();const h=a+"end";let f=0;const p=()=>{n.removeEventListener(h,E),i()},E=S=>{S.target===n&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),n.addEventListener(h,E)}function xE(n,e){const t=window.getComputedStyle(n),r=D=>(t[D]||"").split(", "),s=r(`${Mn}Delay`),i=r(`${Mn}Duration`),a=Ch(s,i),c=r(`${js}Delay`),l=r(`${js}Duration`),h=Ch(c,l);let f=null,p=0,E=0;e===Mn?a>0&&(f=Mn,p=a,E=i.length):e===js?h>0&&(f=js,p=h,E=l.length):(p=Math.max(a,h),f=p>0?a>h?Mn:js:null,E=f?f===Mn?i.length:l.length:0);const S=f===Mn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Mn}Property`).toString());return{type:f,timeout:p,propCount:E,hasTransform:S}}function Ch(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>Vh(t)+Vh(n[r])))}function Vh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function kh(n){return(n?n.ownerDocument:document).body.offsetHeight}function ME(n,e,t){const r=n[_i];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Dh=Symbol("_vod"),LE=Symbol("_vsh"),FE=Symbol(""),UE=/(?:^|;)\s*display\s*:/;function BE(n,e,t){const r=n.style,s=Me(t);let i=!1;if(t&&!s){if(e)if(Me(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&yo(r,c,"")}else for(const a in e)t[a]==null&&yo(r,a,"");for(const a in t)a==="display"&&(i=!0),yo(r,a,t[a])}else if(s){if(e!==t){const a=r[FE];a&&(t+=";"+a),r.cssText=t,i=UE.test(t)}}else e&&n.removeAttribute("style");Dh in n&&(n[Dh]=i?r.display:"",n[LE]&&(r.display="none"))}const Nh=/\s*!important$/;function yo(n,e,t){if(se(t))t.forEach(r=>yo(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=$E(n,e);Nh.test(t)?n.setProperty(cr(r),t.replace(Nh,""),"important"):n[r]=t}}const Oh=["Webkit","Moz","ms"],oc={};function $E(n,e){const t=oc[e];if(t)return t;let r=Yn(e);if(r!=="filter"&&r in n)return oc[e]=r;r=Dd(r);for(let s=0;s<Oh.length;s++){const i=Oh[s]+r;if(i in n)return oc[e]=i}return e}const xh="http://www.w3.org/1999/xlink";function Mh(n,e,t,r,s,i=$_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(xh,e.slice(6,e.length)):n.setAttributeNS(xh,e,t):t==null||i&&!Od(t)?n.removeAttribute(e):n.setAttribute(e,i?"":ar(t)?String(t):t)}function Lh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Mp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Od(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Gr(n,e,t,r){n.addEventListener(e,t,r)}function jE(n,e,t,r){n.removeEventListener(e,t,r)}const Fh=Symbol("_vei");function qE(n,e,t,r,s=null){const i=n[Fh]||(n[Fh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=HE(e);if(r){const h=i[e]=zE(r,s);Gr(n,c,h,l)}else a&&(jE(n,c,a,l),i[e]=void 0)}}const Uh=/(?:Once|Passive|Capture)$/;function HE(n){let e;if(Uh.test(n)){e={};let r;for(;r=n.match(Uh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):cr(n.slice(2)),e]}let ac=0;const WE=Promise.resolve(),KE=()=>ac||(WE.then(()=>ac=0),ac=Date.now());function zE(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;jt(GE(r,t.value),e,5,[r])};return t.value=n,t.attached=KE(),t}function GE(n,e){if(se(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,QE=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?ME(n,r,a):e==="style"?BE(n,t,r):oa(e)?cl(e)||qE(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JE(n,e,r,a))?(Lh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mh(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Me(r))?Lh(n,Yn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Mh(n,e,r,a))};function JE(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Bh(e)&&ce(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bh(e)&&Me(t)?!1:e in n}const $h=n=>{const e=n.props["onUpdate:modelValue"]||!1;return se(e)?t=>po(e,t):e};function YE(n){n.target.composing=!0}function jh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cc=Symbol("_assign");function qh(n,e,t){return e&&(n=n.trim()),t&&(n=hl(n)),n}const Bo={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[cc]=$h(s);const i=r||s.props&&s.props.type==="number";Gr(n,e?"change":"input",a=>{a.target.composing||n[cc](qh(n.value,t,i))}),(t||i)&&Gr(n,"change",()=>{n.value=qh(n.value,t,i)}),e||(Gr(n,"compositionstart",YE),Gr(n,"compositionend",jh),Gr(n,"change",jh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[cc]=$h(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?hl(n.value):n.value,l=e??"";c!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},XE=["ctrl","shift","alt","meta"],ZE={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>XE.some(t=>n[`${t}Key`]&&!e.includes(t))},Eo=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=ZE[e[a]];if(c&&c(s,e))return}return n(s,...i)})},ev={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Hh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=cr(s.key);if(e.some(a=>a===i||ev[a]===i))return n(s)})},tv=ze({patchProp:QE},CE);let Wh;function nv(){return Wh||(Wh=Xy(tv))}const rv=(...n)=>{const e=nv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=iv(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,sv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function sv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function iv(n){return Me(n)?document.querySelector(n):n}const ov=()=>{};var Kh={};/**
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
 */const Fp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},av=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,S=h&63;l||(S=64,a||(E=64)),r.push(t[f],t[p],t[E],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):av(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new cv;const E=i<<2|c>>4;if(r.push(E),h!==64){const S=c<<4&240|h>>2;if(r.push(S),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lv=function(n){const e=Fp(n);return Up.encodeByteArray(e,!0)},$o=function(n){return lv(n).replace(/\./g,"")},Bp=function(n){try{return Up.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hv=()=>uv().__FIREBASE_DEFAULTS__,fv=()=>{if(typeof process>"u"||typeof Kh>"u")return;const n=Kh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bp(n[1]);return e&&JSON.parse(e)},ya=()=>{try{return ov()||hv()||fv()||dv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$p=n=>{var e,t;return(t=(e=ya())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},pv=n=>{const e=$p(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},jp=()=>{var n;return(n=ya())==null?void 0:n.config},qp=n=>{var e;return(e=ya())==null?void 0:e[`_${n}`]};/**
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
 */class gv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function mv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[$o(JSON.stringify(t)),$o(JSON.stringify(a)),""].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _v(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function yv(){var e;const n=(e=ya())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ev(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iv(){const n=ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wv(){return!yv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Av(){try{return typeof indexedDB=="object"}catch{return!1}}function bv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Sv="FirebaseError";class Cn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Sv,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Rv(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Cn(s,c,r)}}function Rv(n,e){return n.replace(Pv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pv=/\{\$([^}]+)}/g;function Cv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(zh(i)&&zh(a)){if(!Vr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function zh(n){return n!==null&&typeof n=="object"}/**
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
 */function Di(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Vv(n,e){const t=new kv(n,e);return t.subscribe.bind(t)}class kv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Dv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=lc),s.error===void 0&&(s.error=lc),s.complete===void 0&&(s.complete=lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lc(){}/**
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
 */function qe(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Ni(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hp(n){return(await fetch(n,{credentials:"include"})).ok}class kr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class Nv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new gv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xv(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ov(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ov(n){return n===Ar?void 0:n}function xv(n){return n.instantiationMode==="EAGER"}/**
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
 */class Mv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Nv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(pe||(pe={}));const Lv={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Fv=pe.INFO,Uv={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Bv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Uv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rl{constructor(e){this.name=e,this._logLevel=Fv,this._logHandler=Bv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const $v=(n,e)=>e.some(t=>n instanceof t);let Gh,Qh;function jv(){return Gh||(Gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qv(){return Qh||(Qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wp=new WeakMap,Oc=new WeakMap,Kp=new WeakMap,uc=new WeakMap,Pl=new WeakMap;function Hv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Wn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wp.set(t,n)}).catch(()=>{}),Pl.set(e,n),e}function Wv(n){if(Oc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Oc.set(n,e)}let xc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Kv(n){xc=n(xc)}function zv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hc(this),e,...t);return Kp.set(r,e.sort?e.sort():[e]),Wn(r)}:qv().includes(n)?function(...e){return n.apply(hc(this),e),Wn(Wp.get(this))}:function(...e){return Wn(n.apply(hc(this),e))}}function Gv(n){return typeof n=="function"?zv(n):(n instanceof IDBTransaction&&Wv(n),$v(n,jv())?new Proxy(n,xc):n)}function Wn(n){if(n instanceof IDBRequest)return Hv(n);if(uc.has(n))return uc.get(n);const e=Gv(n);return e!==n&&(uc.set(n,e),Pl.set(e,n)),e}const hc=n=>Pl.get(n);function Qv(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Wn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Wn(a.result),l.oldVersion,l.newVersion,Wn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Jv=["get","getKey","getAll","getAllKeys","count"],Yv=["put","add","delete","clear"],fc=new Map;function Jh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Yv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jv.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return fc.set(e,i),i}Kv(n=>({...n,get:(e,t,r)=>Jh(e,t)||n.get(e,t,r),has:(e,t)=>!!Jh(e,t)||n.has(e,t)}));/**
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
 */class Xv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Zv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Zv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",Yh="0.14.12";/**
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
 */const An=new Rl("@firebase/app"),eT="@firebase/app-compat",tT="@firebase/analytics-compat",nT="@firebase/analytics",rT="@firebase/app-check-compat",sT="@firebase/app-check",iT="@firebase/auth",oT="@firebase/auth-compat",aT="@firebase/database",cT="@firebase/data-connect",lT="@firebase/database-compat",uT="@firebase/functions",hT="@firebase/functions-compat",fT="@firebase/installations",dT="@firebase/installations-compat",pT="@firebase/messaging",gT="@firebase/messaging-compat",mT="@firebase/performance",_T="@firebase/performance-compat",yT="@firebase/remote-config",ET="@firebase/remote-config-compat",vT="@firebase/storage",TT="@firebase/storage-compat",IT="@firebase/firestore",wT="@firebase/ai",AT="@firebase/firestore-compat",bT="firebase",ST="12.13.0";/**
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
 */const Lc="[DEFAULT]",RT={[Mc]:"fire-core",[eT]:"fire-core-compat",[nT]:"fire-analytics",[tT]:"fire-analytics-compat",[sT]:"fire-app-check",[rT]:"fire-app-check-compat",[iT]:"fire-auth",[oT]:"fire-auth-compat",[aT]:"fire-rtdb",[cT]:"fire-data-connect",[lT]:"fire-rtdb-compat",[uT]:"fire-fn",[hT]:"fire-fn-compat",[fT]:"fire-iid",[dT]:"fire-iid-compat",[pT]:"fire-fcm",[gT]:"fire-fcm-compat",[mT]:"fire-perf",[_T]:"fire-perf-compat",[yT]:"fire-rc",[ET]:"fire-rc-compat",[vT]:"fire-gcs",[TT]:"fire-gcs-compat",[IT]:"fire-fst",[AT]:"fire-fst-compat",[wT]:"fire-vertex","fire-js":"fire-js",[bT]:"fire-js-all"};/**
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
 */const jo=new Map,PT=new Map,Fc=new Map;function Xh(n,e){try{n.container.addComponent(e)}catch(t){An.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fs(n){const e=n.name;if(Fc.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,n);for(const t of jo.values())Xh(t,n);for(const t of PT.values())Xh(t,n);return!0}function Cl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ct(n){return n==null?!1:n.settings!==void 0}/**
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
 */const CT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new ki("app","Firebase",CT);/**
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
 */class VT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Es=ST;function zp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Lc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(t||(t=jp()),!t)throw Kn.create("no-options");const i=jo.get(s);if(i){if(Vr(t,i.options)&&Vr(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const a=new Mv(s);for(const l of Fc.values())a.addComponent(l);const c=new VT(t,r,a);return jo.set(s,c),c}function Gp(n=Lc){const e=jo.get(n);if(!e&&n===Lc&&jp())return zp();if(!e)throw Kn.create("no-app",{appName:n});return e}function zn(n,e,t){let r=RT[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}fs(new kr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kT="firebase-heartbeat-database",DT=1,yi="firebase-heartbeat-store";let dc=null;function Qp(){return dc||(dc=Qv(kT,DT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(yi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kn.create("idb-open",{originalErrorMessage:n.message})})),dc}async function NT(n){try{const t=(await Qp()).transaction(yi),r=await t.objectStore(yi).get(Jp(n));return await t.done,r}catch(e){if(e instanceof Cn)An.warn(e.message);else{const t=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(t.message)}}}async function Zh(n,e){try{const r=(await Qp()).transaction(yi,"readwrite");await r.objectStore(yi).put(e,Jp(n)),await r.done}catch(t){if(t instanceof Cn)An.warn(t.message);else{const r=Kn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});An.warn(r.message)}}}function Jp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const OT=1024,xT=30;class MT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new FT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ef();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>xT){const a=UT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ef(),{heartbeatsToSend:r,unsentEntries:s}=LT(this._heartbeatsCache.heartbeats),i=$o(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return An.warn(t),""}}}function ef(){return new Date().toISOString().substring(0,10)}function LT(n,e=OT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),tf(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),tf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class FT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Av()?bv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await NT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tf(n){return $o(JSON.stringify({version:2,heartbeats:n})).length}function UT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function BT(n){fs(new kr("platform-logger",e=>new Xv(e),"PRIVATE")),fs(new kr("heartbeat",e=>new MT(e),"PRIVATE")),zn(Mc,Yh,n),zn(Mc,Yh,"esm2020"),zn("fire-js","")}BT("");function Yp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $T=Yp,Xp=new ki("auth","Firebase",Yp());/**
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
 */const qo=new Rl("@firebase/auth");function jT(n,...e){qo.logLevel<=pe.WARN&&qo.warn(`Auth (${Es}): ${n}`,...e)}function vo(n,...e){qo.logLevel<=pe.ERROR&&qo.error(`Auth (${Es}): ${n}`,...e)}/**
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
 */function qt(n,...e){throw Vl(n,...e)}function en(n,...e){return Vl(n,...e)}function Zp(n,e,t){const r={...$T(),[e]:t};return new ki("auth","Firebase",r).create(e,{appName:n.name})}function Tn(n){return Zp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Xp.create(n,...e)}function ne(n,e,...t){if(!n)throw Vl(e,...t)}function yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vo(e),new Error(e)}function bn(n,e){n||yn(e)}/**
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
 */function Uc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function qT(){return nf()==="http:"||nf()==="https:"}function nf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function HT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qT()||vv()||"connection"in navigator)?navigator.onLine:!0}function WT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Oi{constructor(e,t){this.shortDelay=e,this.longDelay=t,bn(t>e,"Short delay should be less than long delay!"),this.isMobile=_v()||Tv()}get(){return HT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kl(n,e){bn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class eg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],GT=new Oi(3e4,6e4);function lr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ur(n,e,t,r,s={}){return tg(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Di({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return Ev()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Ni(n.emulatorConfig.host)&&(h.credentials="include"),eg.fetch()(await ng(n,n.config.apiHost,t,c),h)})}async function tg(n,e,t){n._canInitEmulator=!1;const r={...KT,...e};try{const s=new JT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ao(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ao(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ao(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zp(n,f,h);qt(n,f)}}catch(s){if(s instanceof Cn)throw s;qt(n,"network-request-failed",{message:String(s)})}}async function xi(n,e,t,r,s={}){const i=await ur(n,e,t,r,s);return"mfaPendingCredential"in i&&qt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ng(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?kl(n.config,s):`${n.config.apiScheme}://${s}`;return zT.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function QT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),GT.get())})}}function ao(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=en(n,e,r);return s.customData._tokenResponse=t,s}function rf(n){return n!==void 0&&n.enterprise!==void 0}class YT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return QT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XT(n,e){return ur(n,"GET","/v2/recaptchaConfig",lr(n,e))}/**
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
 */async function ZT(n,e){return ur(n,"POST","/v1/accounts:delete",e)}async function Ho(n,e){return ur(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function oi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eI(n,e=!1){const t=qe(n),r=await t.getIdToken(e),s=Dl(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oi(pc(s.auth_time)),issuedAtTime:oi(pc(s.iat)),expirationTime:oi(pc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pc(n){return Number(n)*1e3}function Dl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bp(t);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sf(n){const e=Dl(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ei(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Cn&&tI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function tI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class nI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wo(n){var p;const e=n.auth,t=await n.getIdToken(),r=await Ei(n,Ho(e,{idToken:t}));ne(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?rg(s.providerUserInfo):[],a=sI(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function rI(n){const e=qe(n);await Wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function iI(n,e){const t=await tg(n,{},async()=>{const r=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ng(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Ni(n.emulatorConfig.host)&&(l.credentials="include"),eg.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function oI(n,e){return ur(n,"POST","/v2/accounts:revokeToken",lr(n,e))}/**
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
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=sf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await iI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new os;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Ln(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ft{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new nI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eI(this,e)}reload(){return rI(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await Ei(this,ZT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:E,isAnonymous:S,providerData:D,stsTokenManager:U}=t;ne(p&&U,e,"internal-error");const $=os.fromJSON(this.name,U);ne(typeof p=="string",e,"internal-error"),Ln(r,e.name),Ln(s,e.name),ne(typeof E=="boolean",e,"internal-error"),ne(typeof S=="boolean",e,"internal-error"),Ln(i,e.name),Ln(a,e.name),Ln(c,e.name),Ln(l,e.name),Ln(h,e.name),Ln(f,e.name);const z=new Ft({uid:p,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:$,createdAt:h,lastLoginAt:f});return D&&Array.isArray(D)&&(z.providerData=D.map(G=>({...G}))),l&&(z._redirectEventId=l),z}static async _fromIdTokenResponse(e,t,r=!1){const s=new os;s.updateFromServerResponse(t);const i=new Ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?rg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new os;c.updateFromIdToken(r);const l=new Ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const of=new Map;function En(n){bn(n instanceof Function,"Expected a class definition");let e=of.get(n);return e?(bn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,of.set(n,e),e)}/**
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
 */class sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sg.type="NONE";const af=sg;/**
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
 */function To(n,e,t){return`firebase:${n}:${e}:${t}`}class as{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=To(this.userKey,s.apiKey,i),this.fullPersistenceKey=To("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ho(this.auth,{idToken:e}).catch(()=>{});return t?Ft._fromGetAccountInfoResponse(this.auth,t,e):null}return Ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new as(En(af),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||En(af);const a=To(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const E=await Ho(e,{idToken:f}).catch(()=>{});if(!E)break;p=await Ft._fromGetAccountInfoResponse(e,E,f)}else p=Ft._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new as(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new as(i,e,r))}}/**
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
 */function cf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ig(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ug(e))return"Blackberry";if(hg(e))return"Webos";if(og(e))return"Safari";if((e.includes("chrome/")||ag(e))&&!e.includes("edge/"))return"Chrome";if(lg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ig(n=ct()){return/firefox\//i.test(n)}function og(n=ct()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ag(n=ct()){return/crios\//i.test(n)}function cg(n=ct()){return/iemobile/i.test(n)}function lg(n=ct()){return/android/i.test(n)}function ug(n=ct()){return/blackberry/i.test(n)}function hg(n=ct()){return/webos/i.test(n)}function Nl(n=ct()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function aI(n=ct()){var e;return Nl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function cI(){return Iv()&&document.documentMode===10}function fg(n=ct()){return Nl(n)||lg(n)||hg(n)||ug(n)||/windows phone/i.test(n)||cg(n)}/**
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
 */function dg(n,e=[]){let t;switch(n){case"Browser":t=cf(ct());break;case"Worker":t=`${cf(ct())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Es}/${r}`}/**
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
 */class lI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function uI(n,e={}){return ur(n,"GET","/v2/passwordPolicy",lr(n,e))}/**
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
 */const hI=6;class fI{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??hI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class dI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lf(this),this.idTokenSubscription=new lf(this),this.beforeStateQueue=new lI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=En(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ho(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ct(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(Tn(this));const t=e?qe(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uI(this),t=new fI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await oI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&En(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[En(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&jT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Mr(n){return qe(n)}class lf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vv(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ea={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pI(n){Ea=n}function pg(n){return Ea.loadJS(n)}function gI(){return Ea.recaptchaEnterpriseScript}function mI(){return Ea.gapiScript}function _I(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class yI{constructor(){this.enterprise=new EI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class EI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vI="recaptcha-enterprise",gg="NO_RECAPTCHA";class TI{constructor(e){this.type=vI,this.auth=Mr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{XT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new YT(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;rf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(gg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yI().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&rf(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gI();l.length!==0&&(l+=c),pg(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function uf(n,e,t,r=!1,s=!1){const i=new TI(n);let a;if(s)a=gg;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $c(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await uf(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await uf(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function II(n,e){const t=Cl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Vr(i,e??{}))return s;qt(s,"already-initialized")}return t.initialize({options:e})}function wI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(En);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AI(n,e,t){const r=Mr(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mg(e),{host:a,port:c}=bI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Vr(h,r.config.emulator)&&Vr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ni(a)?Hp(`${i}//${a}${l}`):SI()}function mg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bI(n){const e=mg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:hf(a)}}}function hf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function SI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ol{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,t){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function RI(n,e){return ur(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function PI(n,e){return xi(n,"POST","/v1/accounts:signInWithPassword",lr(n,e))}/**
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
 */async function CI(n,e){return xi(n,"POST","/v1/accounts:signInWithEmailLink",lr(n,e))}async function VI(n,e){return xi(n,"POST","/v1/accounts:signInWithEmailLink",lr(n,e))}/**
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
 */class vi extends Ol{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new vi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new vi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,t,"signInWithPassword",PI);case"emailLink":return CI(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,r,"signUpPassword",RI);case"emailLink":return VI(e,{idToken:t,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function cs(n,e){return xi(n,"POST","/v1/accounts:signInWithIdp",lr(n,e))}/**
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
 */const kI="http://localhost";class Dr extends Ol{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Dr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return cs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,cs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cs(e,t)}buildRequest(){const e={requestUri:kI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Di(t)}return e}}/**
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
 */function DI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NI(n){const e=Ks(zs(n)).link,t=e?Ks(zs(e)).deep_link_id:null,r=Ks(zs(n)).deep_link_id;return(r?Ks(zs(r)).link:null)||r||t||e||n}class xl{constructor(e){const t=Ks(zs(e)),r=t.apiKey??null,s=t.oobCode??null,i=DI(t.mode??null);ne(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=NI(e);try{return new xl(t)}catch{return null}}}/**
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
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,t){return vi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=xl.parseLink(t);return ne(r,"argument-error"),vi._fromEmailAndCode(e,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _g{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends _g{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bn extends Mi{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class $n extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Dr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $n.credential(t,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class jn extends Mi{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
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
 */class qn extends Mi{constructor(){super("twitter.com")}static credential(e,t){return Dr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qn.credential(t,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */async function OI(n,e){return xi(n,"POST","/v1/accounts:signUp",lr(n,e))}/**
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
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ft._fromIdTokenResponse(e,r,s),a=ff(r);return new Nr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ff(r);return new Nr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ff(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ko extends Cn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ko(e,t,r,s)}}function yg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(n,i,e,r):i})}async function xI(n,e,t=!1){const r=await Ei(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Nr._forOperation(n,"link",r)}/**
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
 */async function MI(n,e,t=!1){const{auth:r}=n;if(Ct(r.app))return Promise.reject(Tn(r));const s="reauthenticate";try{const i=await Ei(n,yg(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=Dl(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),Nr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
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
 */async function Eg(n,e,t=!1){if(Ct(n.app))return Promise.reject(Tn(n));const r="signIn",s=await yg(n,r,e),i=await Nr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function LI(n,e){return Eg(Mr(n),e)}/**
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
 */async function vg(n){const e=Mr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FI(n,e,t){if(Ct(n.app))return Promise.reject(Tn(n));const r=Mr(n),a=await $c(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vg(n),l}),c=await Nr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function UI(n,e,t){return Ct(n.app)?Promise.reject(Tn(n)):LI(qe(n),vs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vg(n),r})}function BI(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function $I(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}function jI(n,e,t,r){return qe(n).onAuthStateChanged(e,t,r)}function qI(n){return qe(n).signOut()}const zo="__sak";/**
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
 */class Tg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HI=1e3,WI=10;class Ig extends Tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);cI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,WI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ig.type="LOCAL";const KI=Ig;/**
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
 */class wg extends Tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wg.type="SESSION";const Ag=wg;/**
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
 */function zI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await zI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
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
 */function Ml(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class GI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Ml("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const E=p;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function tn(){return window}function QI(n){tn().location.href=n}/**
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
 */function bg(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function JI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function XI(){return bg()?self:null}/**
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
 */const Sg="firebaseLocalStorageDb",ZI=1,Go="firebaseLocalStorage",Rg="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ta(n,e){return n.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function ew(){const n=indexedDB.deleteDatabase(Sg);return new Li(n).toPromise()}function jc(){const n=indexedDB.open(Sg,ZI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Go,{keyPath:Rg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await ew(),e(await jc()))})})}async function df(n,e,t){const r=Ta(n,!0).put({[Rg]:e,value:t});return new Li(r).toPromise()}async function tw(n,e){const t=Ta(n,!1).get(e),r=await new Li(t).toPromise();return r===void 0?null:r.value}function pf(n,e){const t=Ta(n,!0).delete(e);return new Li(t).toPromise()}const nw=800,rw=3;class Pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>rw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(XI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await JI(),!this.activeServiceWorker)return;this.sender=new GI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await df(e,zo,"1"),await pf(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>df(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>tw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ta(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pg.type="LOCAL";const sw=Pg;new Oi(3e4,6e4);/**
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
 */function iw(n,e){return e?En(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ll extends Ol{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ow(n){return Eg(n.auth,new Ll(n),n.bypassAuthState)}function aw(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),MI(t,new Ll(n),n.bypassAuthState)}async function cw(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),xI(t,new Ll(n),n.bypassAuthState)}/**
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
 */class Cg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ow;case"linkViaPopup":case"linkViaRedirect":return cw;case"reauthViaPopup":case"reauthViaRedirect":return aw;default:qt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lw=new Oi(2e3,1e4);class Zr extends Cg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lw.get())};e()}}Zr.currentPopupAction=null;/**
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
 */const uw="pendingRedirect",Io=new Map;class hw extends Cg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Io.get(this.auth._key());if(!e){try{const r=await fw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Io.set(this.auth._key(),e)}return this.bypassAuthState||Io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fw(n,e){const t=gw(e),r=pw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function dw(n,e){Io.set(n._key(),e)}function pw(n){return En(n._redirectPersistence)}function gw(n){return To(uw,n.config.apiKey,n.name)}async function mw(n,e,t=!1){if(Ct(n.app))return Promise.reject(Tn(n));const r=Mr(n),s=iw(r,e),a=await new hw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const _w=10*60*1e3;class yw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ew(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Vg(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(en(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_w&&this.cachedEventUids.clear(),this.cachedEventUids.has(gf(e))}saveEventToCache(e){this.cachedEventUids.add(gf(e)),this.lastProcessedEventTime=Date.now()}}function gf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ew(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vg(n);default:return!1}}/**
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
 */async function vw(n,e={}){return ur(n,"GET","/v1/projects",e)}/**
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
 */const Tw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iw=/^https?/;async function ww(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vw(n);for(const t of e)try{if(Aw(t))return}catch{}qt(n,"unauthorized-domain")}function Aw(n){const e=Uc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Iw.test(t))return!1;if(Tw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const bw=new Oi(3e4,6e4);function mf(){const n=tn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sw(n){return new Promise((e,t)=>{var s,i,a;function r(){mf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mf(),t(en(n,"network-request-failed"))},timeout:bw.get()})}if((i=(s=tn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=tn().gapi)!=null&&a.load)r();else{const c=_I("iframefcb");return tn()[c]=()=>{gapi.load?r():t(en(n,"network-request-failed"))},pg(`${mI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw wo=null,e})}let wo=null;function Rw(n){return wo=wo||Sw(n),wo}/**
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
 */const Pw=new Oi(5e3,15e3),Cw="__/auth/iframe",Vw="emulator/auth/iframe",kw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nw(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?kl(e,Vw):`https://${n.config.authDomain}/${Cw}`,r={apiKey:e.apiKey,appName:n.name,v:Es},s=Dw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Di(r).slice(1)}`}async function Ow(n){const e=await Rw(n),t=tn().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:Nw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=en(n,"network-request-failed"),c=tn().setTimeout(()=>{i(a)},Pw.get());function l(){tn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const xw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mw=500,Lw=600,Fw="_blank",Uw="http://localhost";class _f{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bw(n,e,t,r=Mw,s=Lw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...xw,width:r.toString(),height:s.toString(),top:i,left:a},h=ct().toLowerCase();t&&(c=ag(h)?Fw:t),ig(h)&&(e=e||Uw,l.scrollbars="yes");const f=Object.entries(l).reduce((E,[S,D])=>`${E}${S}=${D},`,"");if(aI(h)&&c!=="_self")return $w(e||"",c),new _f(null);const p=window.open(e||"",c,f);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new _f(p)}function $w(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const jw="__/auth/handler",qw="emulator/auth/handler",Hw=encodeURIComponent("fac");async function yf(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Es,eventId:s};if(e instanceof _g){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Cv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Mi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${Hw}=${encodeURIComponent(l)}`:"";return`${Ww(n)}?${Di(c).slice(1)}${h}`}function Ww({config:n}){return n.emulator?kl(n,qw):`https://${n.authDomain}/${jw}`}/**
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
 */const gc="webStorageSupport";class Kw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ag,this._completeRedirectFn=mw,this._overrideRedirectResult=dw}async _openPopup(e,t,r,s){var a;bn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await yf(e,t,r,Uc(),s);return Bw(e,i,Ml())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await yf(e,t,r,Uc(),s);return QI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ow(e),r=new yw(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gc,{type:gc},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[gc];i!==void 0&&t(!!i),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ww(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fg()||og()||Nl()}}const zw=Kw;var Ef="@firebase/auth",vf="1.13.1";/**
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
 */class Gw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jw(n){fs(new kr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dg(n)},h=new dI(r,s,i,l);return wI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),fs(new kr("auth-internal",e=>{const t=Mr(e.getProvider("auth").getImmediate());return(r=>new Gw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Ef,vf,Qw(n)),zn(Ef,vf,"esm2020")}/**
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
 */const Yw=5*60,Xw=qp("authIdTokenMaxAge")||Yw;let Tf=null;const Zw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Xw)return;const s=t==null?void 0:t.token;Tf!==s&&(Tf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eA(n=Gp()){const e=Cl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=II(n,{popupRedirectResolver:zw,persistence:[sw,KI,Ag]}),r=qp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Zw(i.toString());$I(t,a,()=>a(t.currentUser)),BI(t,c=>a(c))}}const s=$p("auth");return s&&AI(t,`http://${s}`),t}function tA(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}pI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",tA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jw("Browser");var If=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gn,kg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function m(){}m.prototype=_.prototype,A.F=_.prototype,A.prototype=new m,A.prototype.constructor=A,A.D=function(w,I,T){for(var y=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)y[ue-2]=arguments[ue];return _.prototype[I].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,m){m||(m=0);const w=Array(16);if(typeof _=="string")for(var I=0;I<16;++I)w[I]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(I=0;I<16;++I)w[I]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=A.g[0],m=A.g[1],I=A.g[2];let T=A.g[3],y;y=_+(T^m&(I^T))+w[0]+3614090360&4294967295,_=m+(y<<7&4294967295|y>>>25),y=T+(I^_&(m^I))+w[1]+3905402710&4294967295,T=_+(y<<12&4294967295|y>>>20),y=I+(m^T&(_^m))+w[2]+606105819&4294967295,I=T+(y<<17&4294967295|y>>>15),y=m+(_^I&(T^_))+w[3]+3250441966&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(T^m&(I^T))+w[4]+4118548399&4294967295,_=m+(y<<7&4294967295|y>>>25),y=T+(I^_&(m^I))+w[5]+1200080426&4294967295,T=_+(y<<12&4294967295|y>>>20),y=I+(m^T&(_^m))+w[6]+2821735955&4294967295,I=T+(y<<17&4294967295|y>>>15),y=m+(_^I&(T^_))+w[7]+4249261313&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(T^m&(I^T))+w[8]+1770035416&4294967295,_=m+(y<<7&4294967295|y>>>25),y=T+(I^_&(m^I))+w[9]+2336552879&4294967295,T=_+(y<<12&4294967295|y>>>20),y=I+(m^T&(_^m))+w[10]+4294925233&4294967295,I=T+(y<<17&4294967295|y>>>15),y=m+(_^I&(T^_))+w[11]+2304563134&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(T^m&(I^T))+w[12]+1804603682&4294967295,_=m+(y<<7&4294967295|y>>>25),y=T+(I^_&(m^I))+w[13]+4254626195&4294967295,T=_+(y<<12&4294967295|y>>>20),y=I+(m^T&(_^m))+w[14]+2792965006&4294967295,I=T+(y<<17&4294967295|y>>>15),y=m+(_^I&(T^_))+w[15]+1236535329&4294967295,m=I+(y<<22&4294967295|y>>>10),y=_+(I^T&(m^I))+w[1]+4129170786&4294967295,_=m+(y<<5&4294967295|y>>>27),y=T+(m^I&(_^m))+w[6]+3225465664&4294967295,T=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(T^_))+w[11]+643717713&4294967295,I=T+(y<<14&4294967295|y>>>18),y=m+(T^_&(I^T))+w[0]+3921069994&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(I^T&(m^I))+w[5]+3593408605&4294967295,_=m+(y<<5&4294967295|y>>>27),y=T+(m^I&(_^m))+w[10]+38016083&4294967295,T=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(T^_))+w[15]+3634488961&4294967295,I=T+(y<<14&4294967295|y>>>18),y=m+(T^_&(I^T))+w[4]+3889429448&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(I^T&(m^I))+w[9]+568446438&4294967295,_=m+(y<<5&4294967295|y>>>27),y=T+(m^I&(_^m))+w[14]+3275163606&4294967295,T=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(T^_))+w[3]+4107603335&4294967295,I=T+(y<<14&4294967295|y>>>18),y=m+(T^_&(I^T))+w[8]+1163531501&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(I^T&(m^I))+w[13]+2850285829&4294967295,_=m+(y<<5&4294967295|y>>>27),y=T+(m^I&(_^m))+w[2]+4243563512&4294967295,T=_+(y<<9&4294967295|y>>>23),y=I+(_^m&(T^_))+w[7]+1735328473&4294967295,I=T+(y<<14&4294967295|y>>>18),y=m+(T^_&(I^T))+w[12]+2368359562&4294967295,m=I+(y<<20&4294967295|y>>>12),y=_+(m^I^T)+w[5]+4294588738&4294967295,_=m+(y<<4&4294967295|y>>>28),y=T+(_^m^I)+w[8]+2272392833&4294967295,T=_+(y<<11&4294967295|y>>>21),y=I+(T^_^m)+w[11]+1839030562&4294967295,I=T+(y<<16&4294967295|y>>>16),y=m+(I^T^_)+w[14]+4259657740&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(m^I^T)+w[1]+2763975236&4294967295,_=m+(y<<4&4294967295|y>>>28),y=T+(_^m^I)+w[4]+1272893353&4294967295,T=_+(y<<11&4294967295|y>>>21),y=I+(T^_^m)+w[7]+4139469664&4294967295,I=T+(y<<16&4294967295|y>>>16),y=m+(I^T^_)+w[10]+3200236656&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(m^I^T)+w[13]+681279174&4294967295,_=m+(y<<4&4294967295|y>>>28),y=T+(_^m^I)+w[0]+3936430074&4294967295,T=_+(y<<11&4294967295|y>>>21),y=I+(T^_^m)+w[3]+3572445317&4294967295,I=T+(y<<16&4294967295|y>>>16),y=m+(I^T^_)+w[6]+76029189&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(m^I^T)+w[9]+3654602809&4294967295,_=m+(y<<4&4294967295|y>>>28),y=T+(_^m^I)+w[12]+3873151461&4294967295,T=_+(y<<11&4294967295|y>>>21),y=I+(T^_^m)+w[15]+530742520&4294967295,I=T+(y<<16&4294967295|y>>>16),y=m+(I^T^_)+w[2]+3299628645&4294967295,m=I+(y<<23&4294967295|y>>>9),y=_+(I^(m|~T))+w[0]+4096336452&4294967295,_=m+(y<<6&4294967295|y>>>26),y=T+(m^(_|~I))+w[7]+1126891415&4294967295,T=_+(y<<10&4294967295|y>>>22),y=I+(_^(T|~m))+w[14]+2878612391&4294967295,I=T+(y<<15&4294967295|y>>>17),y=m+(T^(I|~_))+w[5]+4237533241&4294967295,m=I+(y<<21&4294967295|y>>>11),y=_+(I^(m|~T))+w[12]+1700485571&4294967295,_=m+(y<<6&4294967295|y>>>26),y=T+(m^(_|~I))+w[3]+2399980690&4294967295,T=_+(y<<10&4294967295|y>>>22),y=I+(_^(T|~m))+w[10]+4293915773&4294967295,I=T+(y<<15&4294967295|y>>>17),y=m+(T^(I|~_))+w[1]+2240044497&4294967295,m=I+(y<<21&4294967295|y>>>11),y=_+(I^(m|~T))+w[8]+1873313359&4294967295,_=m+(y<<6&4294967295|y>>>26),y=T+(m^(_|~I))+w[15]+4264355552&4294967295,T=_+(y<<10&4294967295|y>>>22),y=I+(_^(T|~m))+w[6]+2734768916&4294967295,I=T+(y<<15&4294967295|y>>>17),y=m+(T^(I|~_))+w[13]+1309151649&4294967295,m=I+(y<<21&4294967295|y>>>11),y=_+(I^(m|~T))+w[4]+4149444226&4294967295,_=m+(y<<6&4294967295|y>>>26),y=T+(m^(_|~I))+w[11]+3174756917&4294967295,T=_+(y<<10&4294967295|y>>>22),y=I+(_^(T|~m))+w[2]+718787259&4294967295,I=T+(y<<15&4294967295|y>>>17),y=m+(T^(I|~_))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+T&4294967295}r.prototype.v=function(A,_){_===void 0&&(_=A.length);const m=_-this.blockSize,w=this.C;let I=this.h,T=0;for(;T<_;){if(I==0)for(;T<=m;)s(this,A,T),T+=this.blockSize;if(typeof A=="string"){for(;T<_;)if(w[I++]=A.charCodeAt(T++),I==this.blockSize){s(this,w),I=0;break}}else for(;T<_;)if(w[I++]=A[T++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=_},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;_=this.o*8;for(var m=A.length-8;m<A.length;++m)A[m]=_&255,_/=256;for(this.v(A),A=Array(16),_=0,m=0;m<4;++m)for(let w=0;w<32;w+=8)A[_++]=this.g[m]>>>w&255;return A};function i(A,_){var m=c;return Object.prototype.hasOwnProperty.call(m,A)?m[A]:m[A]=_(A)}function a(A,_){this.h=_;const m=[];let w=!0;for(let I=A.length-1;I>=0;I--){const T=A[I]|0;w&&T==_||(m[I]=T,w=!1)}this.g=m}var c={};function l(A){return-128<=A&&A<128?i(A,function(_){return new a([_|0],_<0?-1:0)}):new a([A|0],A<0?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return $(h(-A));const _=[];let m=1;for(let w=0;A>=m;w++)_[w]=A/m|0,m*=4294967296;return new a(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return $(f(A.substring(1),_));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=h(Math.pow(_,8));let w=p;for(let T=0;T<A.length;T+=8){var I=Math.min(8,A.length-T);const y=parseInt(A.substring(T,T+I),_);I<8?(I=h(Math.pow(_,I)),w=w.j(I).add(h(y))):(w=w.j(m),w=w.add(h(y)))}return w}var p=l(0),E=l(1),S=l(16777216);n=a.prototype,n.m=function(){if(U(this))return-$(this).m();let A=0,_=1;for(let m=0;m<this.g.length;m++){const w=this.i(m);A+=(w>=0?w:4294967296+w)*_,_*=4294967296}return A},n.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(D(this))return"0";if(U(this))return"-"+$(this).toString(A);const _=h(Math.pow(A,6));var m=this;let w="";for(;;){const I=W(m,_).g;m=z(m,I.j(_));let T=((m.g.length>0?m.g[0]:m.h)>>>0).toString(A);if(m=I,D(m))return T+w;for(;T.length<6;)T="0"+T;w=T+w}},n.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function D(A){if(A.h!=0)return!1;for(let _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function U(A){return A.h==-1}n.l=function(A){return A=z(this,A),U(A)?-1:D(A)?0:1};function $(A){const _=A.g.length,m=[];for(let w=0;w<_;w++)m[w]=~A.g[w];return new a(m,~A.h).add(E)}n.abs=function(){return U(this)?$(this):this},n.add=function(A){const _=Math.max(this.g.length,A.g.length),m=[];let w=0;for(let I=0;I<=_;I++){let T=w+(this.i(I)&65535)+(A.i(I)&65535),y=(T>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);w=y>>>16,T&=65535,y&=65535,m[I]=y<<16|T}return new a(m,m[m.length-1]&-2147483648?-1:0)};function z(A,_){return A.add($(_))}n.j=function(A){if(D(this)||D(A))return p;if(U(this))return U(A)?$(this).j($(A)):$($(this).j(A));if(U(A))return $(this.j($(A)));if(this.l(S)<0&&A.l(S)<0)return h(this.m()*A.m());const _=this.g.length+A.g.length,m=[];for(var w=0;w<2*_;w++)m[w]=0;for(w=0;w<this.g.length;w++)for(let I=0;I<A.g.length;I++){const T=this.i(w)>>>16,y=this.i(w)&65535,ue=A.i(I)>>>16,Ne=A.i(I)&65535;m[2*w+2*I]+=y*Ne,G(m,2*w+2*I),m[2*w+2*I+1]+=T*Ne,G(m,2*w+2*I+1),m[2*w+2*I+1]+=y*ue,G(m,2*w+2*I+1),m[2*w+2*I+2]+=T*ue,G(m,2*w+2*I+2)}for(A=0;A<_;A++)m[A]=m[2*A+1]<<16|m[2*A];for(A=_;A<2*_;A++)m[A]=0;return new a(m,0)};function G(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function J(A,_){this.g=A,this.h=_}function W(A,_){if(D(_))throw Error("division by zero");if(D(A))return new J(p,p);if(U(A))return _=W($(A),_),new J($(_.g),$(_.h));if(U(_))return _=W(A,$(_)),new J($(_.g),_.h);if(A.g.length>30){if(U(A)||U(_))throw Error("slowDivide_ only works with positive integers.");for(var m=E,w=_;w.l(A)<=0;)m=ee(m),w=ee(w);var I=ie(m,1),T=ie(w,1);for(w=ie(w,2),m=ie(m,2);!D(w);){var y=T.add(w);y.l(A)<=0&&(I=I.add(m),T=y),w=ie(w,1),m=ie(m,1)}return _=z(A,I.j(_)),new J(I,_)}for(I=p;A.l(_)>=0;){for(m=Math.max(1,Math.floor(A.m()/_.m())),w=Math.ceil(Math.log(m)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),T=h(m),y=T.j(_);U(y)||y.l(A)>0;)m-=w,T=h(m),y=T.j(_);D(T)&&(T=E),I=I.add(T),A=z(A,y)}return new J(I,A)}n.B=function(A){return W(this,A).h},n.and=function(A){const _=Math.max(this.g.length,A.g.length),m=[];for(let w=0;w<_;w++)m[w]=this.i(w)&A.i(w);return new a(m,this.h&A.h)},n.or=function(A){const _=Math.max(this.g.length,A.g.length),m=[];for(let w=0;w<_;w++)m[w]=this.i(w)|A.i(w);return new a(m,this.h|A.h)},n.xor=function(A){const _=Math.max(this.g.length,A.g.length),m=[];for(let w=0;w<_;w++)m[w]=this.i(w)^A.i(w);return new a(m,this.h^A.h)};function ee(A){const _=A.g.length+1,m=[];for(let w=0;w<_;w++)m[w]=A.i(w)<<1|A.i(w-1)>>>31;return new a(m,A.h)}function ie(A,_){const m=_>>5;_%=32;const w=A.g.length-m,I=[];for(let T=0;T<w;T++)I[T]=_>0?A.i(T+m)>>>_|A.i(T+m+1)<<32-_:A.i(T+m);return new a(I,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,kg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Gn=a}).apply(typeof If<"u"?If:typeof self<"u"?self:typeof window<"u"?window:{});var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dg,Gs,Ng,Ao,qc,Og,xg,Mg;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof co=="object"&&co];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in d))break e;d=d[R]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=l,h.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(g,R,C){for(var j=Array(arguments.length-2),le=2;le<arguments.length;le++)j[le-2]=arguments[le];return u.prototype[R].apply(g,j)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const u=o.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function D(o,u){for(let g=1;g<arguments.length;g++){const R=arguments[g];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=o.length||0;const C=R.length||0;o.length=d+C;for(let j=0;j<C;j++)o[d+j]=R[j]}else o.push(R)}}class U{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){a.setTimeout(()=>{throw o},0)}function z(){var o=A;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,d){const g=J.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var J=new U(()=>new W,o=>o.reset());class W{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,ie=!1,A=new G,_=()=>{const o=Promise.resolve(void 0);ee=()=>{o.then(m)}};function m(){for(var o;o=z();){try{o.h.call(o.g)}catch(d){$(d)}var u=J;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ie=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function ue(o,u){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(ue,I),ue.prototype.init=function(o,u){const d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ne="closure_listenable_"+(Math.random()*1e6|0),ke=0;function Ie(o,u,d,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=R,this.key=++ke,this.da=this.fa=!1}function ge(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function gt(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function cn(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function St(o){const u={};for(const d in o)u[d]=o[d];return u}const lt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nt(o,u){let d,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(d in g)o[d]=g[d];for(let C=0;C<lt.length;C++)d=lt[C],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function ln(o){this.src=o,this.g={},this.h=0}ln.prototype.add=function(o,u,d,g,R){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const j=Ot(o,u,g,R);return j>-1?(u=o[j],d||(u.fa=!1)):(u=new Ie(u,this.src,C,!!g,R),u.fa=d,o.push(u)),u};function dr(o,u){const d=u.type;if(d in o.g){var g=o.g[d],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=R>=0)&&Array.prototype.splice.call(g,R,1),C&&(ge(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ot(o,u,d,g){for(let R=0;R<o.length;++R){const C=o[R];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==g)return R}return-1}var Wt="closure_lm_"+(Math.random()*1e6|0),un={};function Rt(o,u,d,g,R){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Rt(o,u[C],d,g,R);return null}return d=k(d),o&&o[Ne]?o.J(u,d,c(g)?!!g.capture:!1,R):xt(o,u,d,!1,g,R)}function xt(o,u,d,g,R,C){if(!u)throw Error("Invalid event type");const j=c(R)?!!R.capture:!!R;let le=M(o);if(le||(o[Wt]=le=new ln(o)),d=le.add(u,d,g,j,C),d.proxy)return d;if(g=Wi(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)T||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(V(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Wi(){function o(d){return u.call(o.src,o.listener,d)}const u=B;return o}function v(o,u,d,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)v(o,u[C],d,g,R);else g=c(g)?!!g.capture:!!g,d=k(d),o&&o[Ne]?(o=o.i,C=String(u).toString(),C in o.g&&(u=o.g[C],d=Ot(u,d,g,R),d>-1&&(ge(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[C],o.h--)))):o&&(o=M(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ot(u,d,g,R)),(d=o>-1?u[o]:null)&&b(d))}function b(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Ne])dr(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(V(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=M(u))?(dr(d,o),d.h==0&&(d.src=null,u[Wt]=null)):ge(o)}}}function V(o){return o in un?un[o]:un[o]="on"+o}function B(o,u){if(o.da)o=!0;else{u=new ue(u,this);const d=o.listener,g=o.ha||o.src;o.fa&&b(o),o=d.call(g,u)}return o}function M(o){return o=o[Wt],o instanceof ln?o:null}var L="__closure_events_fn_"+(Math.random()*1e9>>>0);function k(o){return typeof o=="function"?o:(o[L]||(o[L]=function(u){return o.handleEvent(u)}),o[L])}function P(){w.call(this),this.i=new ln(this),this.M=this,this.G=null}p(P,w),P.prototype[Ne]=!0,P.prototype.removeEventListener=function(o,u,d,g){v(this,o,u,d,g)};function O(o,u){var d,g=o.G;if(g)for(d=[];g;g=g.G)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new I(u,o);else if(u instanceof I)u.target=u.target||o;else{var R=u;u=new I(g,o),Nt(u,R)}R=!0;let C,j;if(d)for(j=d.length-1;j>=0;j--)C=u.g=d[j],R=F(C,g,!0,u)&&R;if(C=u.g=o,R=F(C,g,!0,u)&&R,R=F(C,g,!1,u)&&R,d)for(j=0;j<d.length;j++)C=u.g=d[j],R=F(C,g,!1,u)&&R}P.prototype.N=function(){if(P.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let g=0;g<d.length;g++)ge(d[g]);delete o.g[u],o.h--}}this.G=null},P.prototype.J=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},P.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function F(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let C=0;C<u.length;++C){const j=u[C];if(j&&!j.da&&j.capture==d){const le=j.listener,$e=j.ha||j.src;j.fa&&dr(o.i,j),R=le.call($e,g)!==!1&&R}}return R&&!g.defaultPrevented}function X(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function q(o){o.g=X(()=>{o.g=null,o.i&&(o.i=!1,q(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Z extends w{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:q(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function te(o){w.call(this),this.h=o,this.g={}}p(te,w);var he=[];function Te(o){gt(o.g,function(u,d){this.g.hasOwnProperty(d)&&b(u)},o),o.g={}}te.prototype.N=function(){te.Z.N.call(this),Te(this)},te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _e=a.JSON.stringify,et=a.JSON.parse,tt=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function vt(){}function Tt(){}var Mt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Br(){I.call(this,"d")}p(Br,I);function Ge(){I.call(this,"c")}p(Ge,I);var He={},Ss=null;function pr(){return Ss=Ss||new P}He.Ia="serverreachability";function vu(o){I.call(this,He.Ia,o)}p(vu,I);function Rs(o){const u=pr();O(u,new vu(u))}He.STAT_EVENT="statevent";function Tu(o,u){I.call(this,He.STAT_EVENT,o),this.stat=u}p(Tu,I);function ut(o){const u=pr();O(u,new Tu(u,o))}He.Ja="timingevent";function Iu(o,u){I.call(this,He.Ja,o),this.size=u}p(Iu,I);function Ps(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function Cs(){this.g=!0}Cs.prototype.ua=function(){this.g=!1};function l_(o,u,d,g,R,C){o.info(function(){if(o.g)if(C){var j="",le=C.split("&");for(let we=0;we<le.length;we++){var $e=le[we].split("=");if($e.length>1){const We=$e[0];$e=$e[1];const zt=We.split("_");j=zt.length>=2&&zt[1]=="type"?j+(We+"="+$e+"&"):j+(We+"=redacted&")}}}else j=null;else j=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+d+`
`+j})}function u_(o,u,d,g,R,C,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+d+`
`+C+" "+j})}function $r(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+f_(o,d)+(g?" "+g:"")})}function h_(o,u){o.info(function(){return"TIMEOUT: "+u})}Cs.prototype.info=function(){};function f_(o,u){if(!o.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var d=C[o];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return _e(C)}catch{return u}}var Ki={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},wu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Au;function Ma(){}p(Ma,vt),Ma.prototype.g=function(){return new XMLHttpRequest},Au=new Ma;function Vs(o){return encodeURIComponent(String(o))}function d_(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Vn(o,u,d,g){this.j=o,this.i=u,this.l=d,this.S=g||1,this.V=new te(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bu}function bu(){this.i=null,this.g="",this.h=!1}var Su={},La={};function Fa(o,u,d){o.M=1,o.A=Gi(Kt(u)),o.u=d,o.R=!0,Ru(o,null)}function Ru(o,u){o.F=Date.now(),zi(o),o.B=Kt(o.A);var d=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Bu(d.i,"t",g),o.C=0,d=o.j.L,o.h=new bu,o.g=sh(o.j,d?u:null,!o.u),o.P>0&&(o.O=new Z(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,g=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(he[0]=R.toString()),R=he);for(let C=0;C<R.length;C++){const j=Rt(d,R[C],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.J?St(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Rs(),l_(o.i,o.v,o.B,o.l,o.S,o.u)}Vn.prototype.ba=function(o){o=o.target;const u=this.O;u&&Nn(o)==3?u.j():this.Y(o)},Vn.prototype.Y=function(o){try{if(o==this.g)e:{const le=Nn(this.g),$e=this.g.ya(),we=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||zu(this.g)))){this.K||le!=4||$e==7||($e==8||we<=0?Rs(3):Rs(2)),Ua(this);var u=this.g.ca();this.X=u;var d=p_(this);if(this.o=u==200,u_(this.i,this.v,this.B,this.l,this.S,le,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var C=g;break t}}C=null}if(o=C)$r(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ba(this,o);else{this.o=!1,this.m=3,ut(12),gr(this),ks(this);break e}}if(this.R){o=!0;let We;for(;!this.K&&this.C<d.length;)if(We=g_(this,d),We==La){le==4&&(this.m=4,ut(14),o=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(We==Su){this.m=4,ut(15),$r(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else $r(this.i,this.l,We,null),Ba(this,We);if(Pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||d.length!=0||this.h.h||(this.m=1,ut(16),o=!1),this.o=this.o&&o,!o)$r(this.i,this.l,d,"[Invalid Chunked Response]"),gr(this),ks(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ga(j),j.P=!0,ut(11))}}else $r(this.i,this.l,d,null),Ba(this,d);le==4&&gr(this),this.o&&!this.K&&(le==4?eh(this.j,this):(this.o=!1,zi(this)))}else C_(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),gr(this),ks(this)}}}catch{}finally{}};function p_(o){if(!Pu(o))return o.g.la();const u=zu(o.g);if(u==="")return"";let d="";const g=u.length,R=Nn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return gr(o),ks(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<g;C++)o.h.h=!0,d+=o.h.i.decode(u[C],{stream:!(R&&C==g-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function Pu(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function g_(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?La:(d=Number(u.substring(d,g)),isNaN(d)?Su:(g+=1,g+d>u.length?La:(u=u.slice(g,g+d),o.C=g+d,u)))}Vn.prototype.cancel=function(){this.K=!0,gr(this)};function zi(o){o.T=Date.now()+o.H,Cu(o,o.H)}function Cu(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Ps(h(o.aa,o),u)}function Ua(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Vn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(h_(this.i,this.B),this.M!=2&&(Rs(),ut(17)),gr(this),this.m=2,ks(this)):Cu(this,this.T-o)};function ks(o){o.j.I==0||o.K||eh(o.j,o)}function gr(o){Ua(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Te(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Ba(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||$a(d.h,o))){if(!o.L&&$a(d.h,o)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Zi(d),Yi(d);else break e;za(d),ut(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ps(h(d.Va,d),6e3));Du(d.h)<=1&&d.ta&&(d.ta=void 0)}else _r(d,11)}else if((o.L||d.g==o)&&Zi(d),!y(u))for(R=d.Ba.g.parse(u),u=0;u<R.length;u++){let we=R[u];const We=we[0];if(!(We<=d.K))if(d.K=We,we=we[1],d.I==2)if(we[0]=="c"){d.M=we[1],d.ba=we[2];const zt=we[3];zt!=null&&(d.ka=zt,d.j.info("VER="+d.ka));const yr=we[4];yr!=null&&(d.za=yr,d.j.info("SVER="+d.za));const On=we[5];On!=null&&typeof On=="number"&&On>0&&(g=1.5*On,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const xn=o.g;if(xn){const to=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(to){var C=g.h;C.g||to.indexOf("spdy")==-1&&to.indexOf("quic")==-1&&to.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ja(C,C.h),C.h=null))}if(g.G){const Qa=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qa&&(g.wa=Qa,Pe(g.J,g.G,Qa))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var j=o;if(g.na=rh(g,g.L?g.ba:null,g.W),j.L){Nu(g.h,j);var le=j,$e=g.O;$e&&(le.H=$e),le.D&&(Ua(le),zi(le)),g.g=j}else Xu(g);d.i.length>0&&Xi(d)}else we[0]!="stop"&&we[0]!="close"||_r(d,7);else d.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?_r(d,7):Ka(d):we[0]!="noop"&&d.l&&d.l.qa(we),d.A=0)}}Rs(4)}catch{}}var m_=class{constructor(o,u){this.g=o,this.map=u}};function Vu(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ku(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Du(o){return o.h?1:o.g?o.g.size:0}function $a(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ja(o,u){o.g?o.g.add(u):o.h=u}function Nu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Vu.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ou(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return S(o.i)}var xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function __(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const g=o[d].indexOf("=");let R,C=null;g>=0?(R=o[d].substring(0,g),C=o[d].substring(g+1)):R=o[d],u(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function kn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof kn?(this.l=o.l,Ds(this,o.j),this.o=o.o,this.g=o.g,Ns(this,o.u),this.h=o.h,qa(this,$u(o.i)),this.m=o.m):o&&(u=String(o).match(xu))?(this.l=!1,Ds(this,u[1]||"",!0),this.o=Os(u[2]||""),this.g=Os(u[3]||"",!0),Ns(this,u[4]),this.h=Os(u[5]||"",!0),qa(this,u[6]||"",!0),this.m=Os(u[7]||"")):(this.l=!1,this.i=new Ms(null,this.l))}kn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(xs(u,Mu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(xs(u,Mu,!0),"@"),o.push(Vs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(xs(d,d.charAt(0)=="/"?v_:E_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",xs(d,I_)),o.join("")},kn.prototype.resolve=function(o){const u=Kt(this);let d=!!o.j;d?Ds(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var g=o.h;if(d)Ns(u,o.u);else if(d=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=u.h.lastIndexOf("/");R!=-1&&(g=u.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const C=[];for(let j=0;j<R.length;){const le=R[j++];le=="."?g&&j==R.length&&C.push(""):le==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&j==R.length&&C.push("")):(C.push(le),g=!0)}g=C.join("/")}else g=R}return d?u.h=g:d=o.i.toString()!=="",d?qa(u,$u(o.i)):d=!!o.m,d&&(u.m=o.m),u};function Kt(o){return new kn(o)}function Ds(o,u,d){o.j=d?Os(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ns(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function qa(o,u,d){u instanceof Ms?(o.i=u,w_(o.i,o.l)):(d||(u=xs(u,T_)),o.i=new Ms(u,o.l))}function Pe(o,u,d){o.i.set(u,d)}function Gi(o){return Pe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Os(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function xs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,y_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function y_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Mu=/[#\/\?@]/g,E_=/[#\?:]/g,v_=/[#\?]/g,T_=/[#\?@]/g,I_=/#/g;function Ms(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function mr(o){o.g||(o.g=new Map,o.h=0,o.i&&__(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ms.prototype,n.add=function(o,u){mr(this),this.i=null,o=jr(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Lu(o,u){mr(o),u=jr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Fu(o,u){return mr(o),u=jr(o,u),o.g.has(u)}n.forEach=function(o,u){mr(this),this.g.forEach(function(d,g){d.forEach(function(R){o.call(u,R,g,this)},this)},this)};function Uu(o,u){mr(o);let d=[];if(typeof u=="string")Fu(o,u)&&(d=d.concat(o.g.get(jr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return mr(this),this.i=null,o=jr(this,o),Fu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Uu(this,o),o.length>0?String(o[0]):u):u};function Bu(o,u,d){Lu(o,u),d.length>0&&(o.i=null,o.g.set(jr(o,u),S(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const R=Vs(d);d=Uu(this,d);for(let C=0;C<d.length;C++){let j=R;d[C]!==""&&(j+="="+Vs(d[C])),o.push(j)}}return this.i=o.join("&")};function $u(o){const u=new Ms;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function jr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function w_(o,u){u&&!o.j&&(mr(o),o.i=null,o.g.forEach(function(d,g){const R=g.toLowerCase();g!=R&&(Lu(this,g),Bu(this,R,d))},o)),o.j=u}function A_(o,u){const d=new Cs;if(a.Image){const g=new Image;g.onload=f(Dn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f(Dn,d,"TestLoadImage: error",!1,u,g),g.onabort=f(Dn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f(Dn,d,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function b_(o,u){const d=new Cs,g=new AbortController,R=setTimeout(()=>{g.abort(),Dn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?Dn(d,"TestPingServer: ok",!0,u):Dn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Dn(d,"TestPingServer: error",!1,u)})}function Dn(o,u,d,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(d)}catch{}}function S_(){this.g=new tt}function Ha(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Ha,vt),Ha.prototype.g=function(){return new Qi(this.i,this.h)};function Qi(o,u){P.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Qi,P),n=Qi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Fs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ju(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function ju(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ls(this):Fs(this),this.readyState==3&&ju(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ls(this))},n.Na=function(o){this.g&&(this.response=o,Ls(this))},n.ga=function(){this.g&&Ls(this)};function Ls(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Fs(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Fs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function qu(o){let u="";return gt(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Wa(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=qu(d),typeof o=="string"?d!=null&&Vs(d):Pe(o,u,d))}function Oe(o){P.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Oe,P);var R_=/^https?$/i,P_=["POST","PUT"];n=Oe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Au.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Hu(this,C);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)d.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())d.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(P_,u,void 0)>=0)||g||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of d)this.g.setRequestHeader(C,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){Hu(this,C)}};function Hu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Wu(o),Ji(o)}function Wu(o){o.A||(o.A=!0,O(o,"complete"),O(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,O(this,"complete"),O(this,"abort"),Ji(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ji(this,!0)),Oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ku(this):this.Xa())},n.Xa=function(){Ku(this)};function Ku(o){if(o.h&&typeof i<"u"){if(o.v&&Nn(o)==4)setTimeout(o.Ca.bind(o),0);else if(O(o,"readystatechange"),Nn(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=C===0){let j=String(o.D).match(xu)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),g=!R_.test(j?j.toLowerCase():"")}d=g}if(d)O(o,"complete"),O(o,"success");else{o.o=6;try{var R=Nn(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",Wu(o)}}finally{Ji(o)}}}}function Ji(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||O(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Nn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Nn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),et(u)}};function zu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function C_(o){const u={};o=(o.g&&Nn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(y(o[g]))continue;var d=d_(o[g]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[R]||[];u[R]=C,C.push(d)}cn(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Gu(o){this.za=0,this.i=[],this.j=new Cs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Us("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Us("baseRetryDelayMs",5e3,o),this.Za=Us("retryDelaySeedMs",1e4,o),this.Ta=Us("forwardChannelMaxRetries",2,o),this.va=Us("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Vu(o&&o.concurrentRequestLimit),this.Ba=new S_,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Gu.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,g){ut(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=rh(this,null,this.W),Xi(this)};function Ka(o){if(Qu(o),o.I==3){var u=o.V++,d=Kt(o.J);if(Pe(d,"SID",o.M),Pe(d,"RID",u),Pe(d,"TYPE","terminate"),Bs(o,d),u=new Vn(o,o.j,u),u.M=2,u.A=Gi(Kt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=sh(u.j,null),u.g.ea(u.A)),u.F=Date.now(),zi(u)}nh(o)}function Yi(o){o.g&&(Ga(o),o.g.cancel(),o.g=null)}function Qu(o){Yi(o),o.v&&(a.clearTimeout(o.v),o.v=null),Zi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Xi(o){if(!ku(o.h)&&!o.m){o.m=!0;var u=o.Ea;ee||_(),ie||(ee(),ie=!0),A.add(u,o),o.D=0}}function V_(o,u){return Du(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Ps(h(o.Ea,o,u),th(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new Vn(this,this.j,o);let C=this.o;if(this.U&&(C?(C=St(C),Nt(C,this.U)):C=this.U),this.u!==null||this.R||(R.J=C,C=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Yu(this,R,u),d=Kt(this.J),Pe(d,"RID",o),Pe(d,"CVER",22),this.G&&Pe(d,"X-HTTP-Session-Id",this.G),Bs(this,d),C&&(this.R?u="headers="+Vs(qu(C))+"&"+u:this.u&&Wa(d,this.u,C)),ja(this.h,R),this.Ra&&Pe(d,"TYPE","init"),this.S?(Pe(d,"$req",u),Pe(d,"SID","null"),R.U=!0,Fa(R,d,null)):Fa(R,d,u),this.I=2}}else this.I==3&&(o?Ju(this,o):this.i.length==0||ku(this.h)||Ju(this))};function Ju(o,u){var d;u?d=u.l:d=o.V++;const g=Kt(o.J);Pe(g,"SID",o.M),Pe(g,"RID",d),Pe(g,"AID",o.K),Bs(o,g),o.u&&o.o&&Wa(g,o.u,o.o),d=new Vn(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Yu(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ja(o.h,d),Fa(d,g,u)}function Bs(o,u){o.H&&gt(o.H,function(d,g){Pe(u,g,d)}),o.l&&gt({},function(d,g){Pe(u,g,d)})}function Yu(o,u,d){d=Math.min(o.i.length,d);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var R=o.i;let le=-1;for(;;){const $e=["count="+d];le==-1?d>0?(le=R[0].g,$e.push("ofs="+le)):le=0:$e.push("ofs="+le);let we=!0;for(let We=0;We<d;We++){var C=R[We].g;const zt=R[We].map;if(C-=le,C<0)le=Math.max(0,R[We].g-100),we=!1;else try{C="req"+C+"_"||"";try{var j=zt instanceof Map?zt:Object.entries(zt);for(const[yr,On]of j){let xn=On;c(On)&&(xn=_e(On)),$e.push(C+yr+"="+encodeURIComponent(xn))}}catch(yr){throw $e.push(C+"type="+encodeURIComponent("_badmap")),yr}}catch{g&&g(zt)}}if(we){j=$e.join("&");break e}}j=void 0}return o=o.i.splice(0,d),u.G=o,j}function Xu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;ee||_(),ie||(ee(),ie=!0),A.add(u,o),o.A=0}}function za(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Ps(h(o.Da,o),th(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Zu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Ps(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),Yi(this),Zu(this))};function Ga(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Zu(o){o.g=new Vn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Kt(o.na);Pe(u,"RID","rpc"),Pe(u,"SID",o.M),Pe(u,"AID",o.K),Pe(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Pe(u,"TO",o.ia),Pe(u,"TYPE","xmlhttp"),Bs(o,u),o.u&&o.o&&Wa(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Gi(Kt(u)),d.u=null,d.R=!0,Ru(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Yi(this),za(this),ut(19))};function Zi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function eh(o,u){var d=null;if(o.g==u){Zi(o),Ga(o),o.g=null;var g=2}else if($a(o.h,u))d=u.G,Nu(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var R=o.D;g=pr(),O(g,new Iu(g,d)),Xi(o)}else Xu(o);else if(R=u.m,R==3||R==0&&u.X>0||!(g==1&&V_(o,u)||g==2&&za(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),R){case 1:_r(o,5);break;case 4:_r(o,10);break;case 3:_r(o,6);break;default:_r(o,2)}}}function th(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function _r(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),g=o.Ua;const R=!g;g=new kn(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ds(g,"https"),Gi(g),R?A_(g.toString(),d):b_(g.toString(),d)}else ut(2);o.I=0,o.l&&o.l.pa(u),nh(o),Qu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function nh(o){if(o.I=0,o.ja=[],o.l){const u=Ou(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ja,u),D(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function rh(o,u,d){var g=d instanceof kn?Kt(d):new kn(d);if(g.g!="")u&&(g.g=u+"."+g.g),Ns(g,g.u);else{var R=a.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const C=new kn(null);g&&Ds(C,g),u&&(C.g=u),R&&Ns(C,R),d&&(C.h=d),g=C}return d=o.G,u=o.wa,d&&u&&Pe(g,d,u),Pe(g,"VER",o.ka),Bs(o,g),g}function sh(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Oe(new Ha({ab:d})):new Oe(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ih(){}n=ih.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function eo(){}eo.prototype.g=function(o,u){return new It(o,u)};function It(o,u){P.call(this),this.g=new Gu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!y(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new qr(this)}p(It,P),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Ka(this.g)},It.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=_e(o),o=d);u.i.push(new m_(u.Ya++,o)),u.I==3&&Xi(u)},It.prototype.N=function(){this.g.l=null,delete this.j,Ka(this.g),delete this.g,It.Z.N.call(this)};function oh(o){Br.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(oh,Br);function ah(){Ge.call(this),this.status=1}p(ah,Ge);function qr(o){this.g=o}p(qr,ih),qr.prototype.ra=function(){O(this.g,"a")},qr.prototype.qa=function(o){O(this.g,new oh(o))},qr.prototype.pa=function(o){O(this.g,new ah)},qr.prototype.oa=function(){O(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Mg=function(){return new eo},xg=function(){return pr()},Og=He,qc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ki.NO_ERROR=0,Ki.TIMEOUT=8,Ki.HTTP_ERROR=6,Ao=Ki,wu.COMPLETE="complete",Ng=wu,Tt.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",P.prototype.listen=P.prototype.J,Gs=Tt,Oe.prototype.listenOnce=Oe.prototype.K,Oe.prototype.getLastError=Oe.prototype.Ha,Oe.prototype.getLastErrorCode=Oe.prototype.ya,Oe.prototype.getStatus=Oe.prototype.ca,Oe.prototype.getResponseJson=Oe.prototype.La,Oe.prototype.getResponseText=Oe.prototype.la,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Fa,Dg=Oe}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let Ts="12.13.0";function nA(n){Ts=n}/**
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
 */const Or=new Rl("@firebase/firestore");function Qr(){return Or.logLevel}function H(n,...e){if(Or.logLevel<=pe.DEBUG){const t=e.map(Fl);Or.debug(`Firestore (${Ts}): ${n}`,...t)}}function Sn(n,...e){if(Or.logLevel<=pe.ERROR){const t=e.map(Fl);Or.error(`Firestore (${Ts}): ${n}`,...t)}}function xr(n,...e){if(Or.logLevel<=pe.WARN){const t=e.map(Fl);Or.warn(`Firestore (${Ts}): ${n}`,...t)}}function Fl(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function re(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Lg(n,r,t)}function Lg(n,e,t){let r=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Sn(r),new Error(r)}function ve(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Lg(e,s,r)}function ae(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Cn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Fg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(st.UNAUTHENTICATED))}shutdown(){}}class sA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iA{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new Fg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class oA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class aA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new oA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ve(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new wf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ve(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new wf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ul{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=lA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function Hc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return mc(s)===mc(i)?fe(s,i):mc(s)?1:-1}return fe(n.length,e.length)}const uA=55296,hA=57343;function mc(n){const e=n.charCodeAt(0);return e>=uA&&e<=hA}function ds(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Af="__name__";class Jt{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&re(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Jt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return fe(e.length,t.length)}static compareSegments(e,t){const r=Jt.isNumericId(e),s=Jt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Jt.extractNumericId(e).compare(Jt.extractNumericId(t)):Hc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gn.fromString(e.substring(4,e.length-2))}}class Se extends Jt{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Se(t)}static emptyPath(){return new Se([])}}const fA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Jt{construct(e,t,r){return new Ye(e,t,r)}static isValidIdentifier(e){return fA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Af}static keyField(){return new Ye([Af])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new K(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(t)}static emptyPath(){return new Ye([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Se.fromString(e))}static fromName(e){return new Y(Se.fromString(e).popFirst(5))}static empty(){return new Y(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Se(e.slice()))}}/**
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
 */function Ug(n,e,t){if(!t)throw new K(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dA(n,e,t,r){if(e===!0&&r===!0)throw new K(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bf(n){if(!Y.isDocumentKey(n))throw new K(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sf(n){if(Y.isDocumentKey(n))throw new K(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ia(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re(12329,{type:typeof n})}function Qn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ia(n);throw new K(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ue(n,e){const t={typeString:n};return e&&(t.value=e),t}function Fi(n,e){if(!Bg(n))throw new K(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new K(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const Rf=-62135596800,Pf=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Pf);return new Ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rf)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pf}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fi(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Ue("string",Ce._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
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
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ce(0,0))}static max(){return new oe(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ti=-1;function pA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new er(s,Y.empty(),e)}function gA(n){return new er(n.readTime,n.key,Ti)}class er{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new er(oe.min(),Y.empty(),Ti)}static max(){return new er(oe.max(),Y.empty(),Ti)}}function mA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
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
 */const _A="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Is(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==_A)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(s=>s?x.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new x((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new x((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function EA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ws(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}wa.ce=-1;/**
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
 */const Bl=-1;function Aa(n){return n==null}function Qo(n){return n===0&&1/n==-1/0}function vA(n){return typeof n=="number"&&Number.isInteger(n)&&!Qo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const $g="";function TA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Cf(e)),e=IA(n.get(t),e);return Cf(e)}function IA(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case $g:t+="";break;default:t+=i}}return t}function Cf(n){return n+$g+""}/**
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
 */function Vf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ve{constructor(e,t){this.comparator=e,this.root=t||Qe.EMPTY}insert(e,t){return new Ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Qe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kf(this.data.getIterator())}getIteratorFrom(e){return new kf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new je(this.comparator);return t.data=e,t}}class kf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new bt([])}unionWith(e){let t=new je(Ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new bt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class qg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qg("Invalid base64 string: "+i):i}}(e);return new Ze(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const wA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(n){if(ve(!!n,39018),typeof n=="string"){let e=0;const t=wA.exec(n);if(ve(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(n.seconds),nanos:xe(n.nanos)}}function xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nr(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */const Hg="server_timestamp",Wg="__type__",Kg="__previous_value__",zg="__local_write_time__";function $l(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Wg])==null?void 0:r.stringValue)===Hg}function ba(n){const e=n.mapValue.fields[Kg];return $l(e)?ba(e):e}function Ii(n){const e=tr(n.mapValue.fields[zg].timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class AA{constructor(e,t,r,s,i,a,c,l,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Jo="(default)";class wi{constructor(e,t){this.projectId=e,this.database=t||Jo}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database===Jo}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}function bA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new K(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(n.options.projectId,e)}/**
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
 */const Gg="__type__",SA="__max__",uo={mapValue:{}},Qg="__vector__",Yo="value";function rr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$l(n)?4:PA(n)?9007199254740991:RA(n)?10:11:re(28295,{value:n})}function on(n,e){if(n===e)return!0;const t=rr(n);if(t!==rr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ii(n).isEqual(Ii(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=tr(s.timestampValue),c=tr(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return nr(s.bytesValue).isEqual(nr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=xe(s.doubleValue),c=xe(i.doubleValue);return a===c?Qo(a)===Qo(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return ds(n.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Vf(a)!==Vf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!on(a[l],c[l])))return!1;return!0}(n,e);default:return re(52216,{left:n})}}function Ai(n,e){return(n.values||[]).find(t=>on(t,e))!==void 0}function ps(n,e){if(n===e)return 0;const t=rr(n),r=rr(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=xe(i.integerValue||i.doubleValue),l=xe(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Df(n.timestampValue,e.timestampValue);case 4:return Df(Ii(n),Ii(e));case 5:return Hc(n.stringValue,e.stringValue);case 6:return function(i,a){const c=nr(i),l=nr(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=fe(c[h],l[h]);if(f!==0)return f}return fe(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=fe(xe(i.latitude),xe(a.latitude));return c!==0?c:fe(xe(i.longitude),xe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Nf(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,S,D,U;const c=i.fields||{},l=a.fields||{},h=(E=c[Yo])==null?void 0:E.arrayValue,f=(S=l[Yo])==null?void 0:S.arrayValue,p=fe(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((U=f==null?void 0:f.values)==null?void 0:U.length)||0);return p!==0?p:Nf(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===uo.mapValue&&a===uo.mapValue)return 0;if(i===uo.mapValue)return 1;if(a===uo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const E=Hc(l[p],f[p]);if(E!==0)return E;const S=ps(c[l[p]],h[f[p]]);if(S!==0)return S}return fe(l.length,f.length)}(n.mapValue,e.mapValue);default:throw re(23264,{he:t})}}function Df(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=tr(n),r=tr(e),s=fe(t.seconds,r.seconds);return s!==0?s:fe(t.nanos,r.nanos)}function Nf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ps(t[s],r[s]);if(i)return i}return fe(t.length,r.length)}function gs(n){return Wc(n)}function Wc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=tr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return nr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Wc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Wc(t.fields[a])}`;return s+"}"}(n.mapValue):re(61005,{value:n})}function bo(n){switch(rr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ba(n);return e?16+bo(e):16;case 5:return 2*n.stringValue.length;case 6:return nr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+bo(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return hr(r.fields,(i,a)=>{s+=i.length+bo(a)}),s}(n.mapValue);default:throw re(13486,{value:n})}}function Of(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Kc(n){return!!n&&"integerValue"in n}function jl(n){return!!n&&"arrayValue"in n}function xf(n){return!!n&&"nullValue"in n}function Mf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function So(n){return!!n&&"mapValue"in n}function RA(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Gg])==null?void 0:r.stringValue)===Qg}function ai(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return hr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ai(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ai(n.arrayValue.values[t]);return e}return{...n}}function PA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===SA}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!So(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(t)}setAll(e){let t=Ye.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ai(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());So(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];So(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){hr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(ai(this.value))}}function Jg(n){const e=[];return hr(n.fields,(t,r)=>{const s=new Ye([t]);if(So(r)){const i=Jg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new bt(e)}/**
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
 */class ot{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ot(e,0,oe.min(),oe.min(),oe.min(),Et.empty(),0)}static newFoundDocument(e,t,r,s){return new ot(e,1,t,oe.min(),r,s,0)}static newNoDocument(e,t){return new ot(e,2,t,oe.min(),oe.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,oe.min(),oe.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xo{constructor(e,t){this.position=e,this.inclusive=t}}function Lf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),t.key):r=ps(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ff(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!on(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class bi{constructor(e,t="asc"){this.field=e,this.dir=t}}function CA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Yg{}class Fe extends Yg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new kA(e,t,r):t==="array-contains"?new OA(e,r):t==="in"?new xA(e,r):t==="not-in"?new MA(e,r):t==="array-contains-any"?new LA(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new DA(e,r):new NA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ps(t,this.value)):t!==null&&rr(this.value)===rr(t)&&this.matchesComparison(ps(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends Yg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ht(e,t)}matches(e){return Xg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xg(n){return n.op==="and"}function Zg(n){return VA(n)&&Xg(n)}function VA(n){for(const e of n.filters)if(e instanceof Ht)return!1;return!0}function zc(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+gs(n.value);if(Zg(n))return n.filters.map(e=>zc(e)).join(",");{const e=n.filters.map(t=>zc(t)).join(",");return`${n.op}(${e})`}}function em(n,e){return n instanceof Fe?function(r,s){return s instanceof Fe&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(n,e):n instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&em(a,s.filters[c]),!0):!1}(n,e):void re(19439)}function tm(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${gs(t.value)}`}(n):n instanceof Ht?function(t){return t.op.toString()+" {"+t.getFilters().map(tm).join(" ,")+"}"}(n):"Filter"}class kA extends Fe{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class DA extends Fe{constructor(e,t){super(e,"in",t),this.keys=nm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class NA extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=nm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class OA extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jl(t)&&Ai(t.arrayValue,this.value)}}class xA extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ai(this.value.arrayValue,t)}}class MA extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ai(this.value.arrayValue,t)}}class LA extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ai(this.value.arrayValue,r))}}/**
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
 */class FA{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Uf(n,e=null,t=[],r=[],s=null,i=null,a=null){return new FA(n,e,t,r,s,i,a)}function ql(n){const e=ae(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>zc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Aa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>gs(r)).join(",")),e.Te=t}return e.Te}function Hl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!em(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ff(n.startAt,e.startAt)&&Ff(n.endAt,e.endAt)}function Gc(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class As{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function UA(n,e,t,r,s,i,a,c){return new As(n,e,t,r,s,i,a,c)}function Wl(n){return new As(n)}function Bf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function BA(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function rm(n){return n.collectionGroup!==null}function ci(n){const e=ae(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new je(Ye.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new bi(i,r))}),t.has(Ye.keyField().canonicalString())||e.Ie.push(new bi(Ye.keyField(),r))}return e.Ie}function nn(n){const e=ae(n);return e.Ee||(e.Ee=$A(e,ci(n))),e.Ee}function $A(n,e){if(n.limitType==="F")return Uf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bi(s.field,i)});const t=n.endAt?new Xo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xo(n.startAt.position,n.startAt.inclusive):null;return Uf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Qc(n,e){const t=n.filters.concat([e]);return new As(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function jA(n,e){const t=n.explicitOrderBy.concat([e]);return new As(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Jc(n,e,t){return new As(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sa(n,e){return Hl(nn(n),nn(e))&&n.limitType===e.limitType}function sm(n){return`${ql(nn(n))}|lt:${n.limitType}`}function Jr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>tm(s)).join(", ")}]`),Aa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>gs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>gs(s)).join(",")),`Target(${r})`}(nn(n))}; limitType=${n.limitType})`}function Ra(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=Lf(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,ci(r),s)||r.endAt&&!function(a,c,l){const h=Lf(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,ci(r),s))}(n,e)}function qA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function im(n){return(e,t)=>{let r=!1;for(const s of ci(n)){const i=HA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HA(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ps(l,h):re(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:n.dir})}}/**
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
 */class Lr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jg(this.inner)}size(){return this.innerSize}}/**
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
 */const WA=new Ve(Y.comparator);function Rn(){return WA}const om=new Ve(Y.comparator);function Qs(...n){let e=om;for(const t of n)e=e.insert(t.key,t);return e}function am(n){let e=om;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Sr(){return li()}function cm(){return li()}function li(){return new Lr(n=>n.toString(),(n,e)=>n.isEqual(e))}const KA=new Ve(Y.comparator),zA=new je(Y.comparator);function de(...n){let e=zA;for(const t of n)e=e.add(t);return e}const GA=new je(fe);function QA(){return GA}/**
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
 */function Kl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qo(e)?"-0":e}}function lm(n){return{integerValue:""+n}}function JA(n,e){return vA(e)?lm(e):Kl(n,e)}/**
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
 */class Pa{constructor(){this._=void 0}}function YA(n,e,t){return n instanceof Si?function(s,i){const a={fields:{[Wg]:{stringValue:Hg},[zg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$l(i)&&(i=ba(i)),i&&(a.fields[Kg]=i),{mapValue:a}}(t,e):n instanceof Ri?hm(n,e):n instanceof Pi?fm(n,e):function(s,i){const a=um(s,i),c=$f(a)+$f(s.Ae);return Kc(a)&&Kc(s.Ae)?lm(c):Kl(s.serializer,c)}(n,e)}function XA(n,e,t){return n instanceof Ri?hm(n,e):n instanceof Pi?fm(n,e):t}function um(n,e){return n instanceof Zo?function(r){return Kc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Si extends Pa{}class Ri extends Pa{constructor(e){super(),this.elements=e}}function hm(n,e){const t=dm(e);for(const r of n.elements)t.some(s=>on(s,r))||t.push(r);return{arrayValue:{values:t}}}class Pi extends Pa{constructor(e){super(),this.elements=e}}function fm(n,e){let t=dm(e);for(const r of n.elements)t=t.filter(s=>!on(s,r));return{arrayValue:{values:t}}}class Zo extends Pa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $f(n){return xe(n.integerValue||n.doubleValue)}function dm(n){return jl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class ZA{constructor(e,t){this.field=e,this.transform=t}}function eb(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Pi&&s instanceof Pi?ds(r.elements,s.elements,on):r instanceof Zo&&s instanceof Zo?on(r.Ae,s.Ae):r instanceof Si&&s instanceof Si}(n.transform,e.transform)}class tb{constructor(e,t){this.version=e,this.transformResults=t}}class Bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ca{}function pm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zl(n.key,Bt.none()):new Ui(n.key,n.data,Bt.none());{const t=n.data,r=Et.empty();let s=new je(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new fr(n.key,r,new bt(s.toArray()),Bt.none())}}function nb(n,e,t){n instanceof Ui?function(s,i,a){const c=s.value.clone(),l=qf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof fr?function(s,i,a){if(!Ro(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=qf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(gm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ui(n,e,t,r){return n instanceof Ui?function(i,a,c,l){if(!Ro(i.precondition,a))return c;const h=i.value.clone(),f=Hf(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof fr?function(i,a,c,l){if(!Ro(i.precondition,a))return c;const h=Hf(i.fieldTransforms,l,a),f=a.data;return f.setAll(gm(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,c){return Ro(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function rb(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=um(r.transform,s||null);i!=null&&(t===null&&(t=Et.empty()),t.set(r.field,i))}return t||null}function jf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ds(r,s,(i,a)=>eb(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ui extends Ca{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fr extends Ca{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function qf(n,e,t){const r=new Map;ve(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,XA(a,c,t[s]))}return r}function Hf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,YA(i,a,e))}return r}class zl extends Ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sb extends Ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ib{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ui(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ui(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=pm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),de())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(t,r)=>jf(t,r))&&ds(this.baseMutations,e.baseMutations,(t,r)=>jf(t,r))}}class Gl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return KA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Gl(e,t,r,s)}}/**
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
 */class ob{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ab{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Le,me;function cb(n){switch(n){case N.OK:return re(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return re(15467,{code:n})}}function mm(n){if(n===void 0)return Sn("GRPC error has no .code"),N.UNKNOWN;switch(n){case Le.OK:return N.OK;case Le.CANCELLED:return N.CANCELLED;case Le.UNKNOWN:return N.UNKNOWN;case Le.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Le.INTERNAL:return N.INTERNAL;case Le.UNAVAILABLE:return N.UNAVAILABLE;case Le.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Le.NOT_FOUND:return N.NOT_FOUND;case Le.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Le.ABORTED:return N.ABORTED;case Le.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Le.DATA_LOSS:return N.DATA_LOSS;default:return re(39323,{code:n})}}(me=Le||(Le={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function lb(){return new TextEncoder}/**
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
 */const ub=new Gn([4294967295,4294967295],0);function Wf(n){const e=lb().encode(n),t=new kg;return t.update(e),new Uint8Array(t.digest())}function Kf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gn([t,r],0),new Gn([s,i],0)]}class Ql{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Js(`Invalid padding: ${t}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Js(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Gn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Gn.fromNumber(r)));return s.compare(ub)===1&&(s=new Gn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Wf(e),[r,s]=Kf(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ql(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Wf(e),[r,s]=Kf(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Bi(oe.min(),s,new Ve(fe),Rn(),de())}}class $i{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $i(r,t,de(),de(),de())}}/**
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
 */class Po{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class _m{constructor(e,t){this.targetId=e,this.Ce=t}}class ym{constructor(e,t,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class zf{constructor(){this.ve=0,this.Fe=Gf(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),t=de(),r=de();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:re(38017,{changeType:i})}}),new $i(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=Gf()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Rn(),this.Je=ho(),this.He=ho(),this.Ze=new Ve(fe)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Gc(i))if(r===0){const a=new Y(i.path);this.et(t,a,ot.newNoDocument(a,oe.min()))}else ve(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=nr(r).toUint8Array()}catch(l){if(l instanceof qg)return xr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ql(a,s,i)}catch(l){return xr(l instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Gc(c.target)){const l=new Y(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ot.newNoDocument(l,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let r=de();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Bi(e,t,this.Ze,this.je,r);return this.je=Rn(),this.Je=ho(),this.He=ho(),this.Ze=new Ve(fe),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new zf,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new je(fe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new je(fe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new zf),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ho(){return new Ve(Y.comparator)}function Gf(){return new Ve(Y.comparator)}const fb={asc:"ASCENDING",desc:"DESCENDING"},db={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pb={and:"AND",or:"OR"};class gb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yc(n,e){return n.useProto3Json||Aa(e)?e:{value:e}}function ea(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Em(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mb(n,e){return ea(n,e.toTimestamp())}function rn(n){return ve(!!n,49232),oe.fromTimestamp(function(t){const r=tr(t);return new Ce(r.seconds,r.nanos)}(n))}function Jl(n,e){return Xc(n,e).canonicalString()}function Xc(n,e){const t=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vm(n){const e=Se.fromString(n);return ve(bm(e),10190,{key:e.toString()}),e}function Zc(n,e){return Jl(n.databaseId,e.path)}function _c(n,e){const t=vm(e);if(t.get(1)!==n.databaseId.projectId)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Im(t))}function Tm(n,e){return Jl(n.databaseId,e)}function _b(n){const e=vm(n);return e.length===4?Se.emptyPath():Im(e)}function el(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Im(n){return ve(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Qf(n,e,t){return{name:Zc(n,e),fields:t.value.mapValue.fields}}function yb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ve(f===void 0||typeof f=="string",58123),Ze.fromBase64String(f||"")):(ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ze.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?N.UNKNOWN:mm(h.code);return new K(f,h.message||"")}(a);t=new ym(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_c(n,r.document.name),i=rn(r.document.updateTime),a=r.document.createTime?rn(r.document.createTime):oe.min(),c=new Et({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Po(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_c(n,r.document),i=r.readTime?rn(r.readTime):oe.min(),a=ot.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Po([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_c(n,r.document),i=r.removedTargetIds||[];t=new Po([],i,s,null)}else{if(!("filter"in e))return re(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ab(s,i),c=r.targetId;t=new _m(c,a)}}return t}function Eb(n,e){let t;if(e instanceof Ui)t={update:Qf(n,e.key,e.value)};else if(e instanceof zl)t={delete:Zc(n,e.key)};else if(e instanceof fr)t={update:Qf(n,e.key,e.data),updateMask:Pb(e.fieldMask)};else{if(!(e instanceof sb))return re(16599,{dt:e.type});t={verify:Zc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Si)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ri)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Pi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zo)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw re(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:mb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re(27497)}(n,e.precondition)),t}function vb(n,e){return n&&n.length>0?(ve(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?rn(s.updateTime):rn(i);return a.isEqual(oe.min())&&(a=rn(i)),new tb(a,s.transformResults||[])}(t,e))):[]}function Tb(n,e){return{documents:[Tm(n,e.path)]}}function Ib(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Tm(n,s);const i=function(h){if(h.length!==0)return Am(Ht.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(E){return{field:Yr(E.field),direction:bb(E.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Yc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function wb(n){let e=_b(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ve(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const E=wm(p);return E instanceof Ht&&Zg(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(E=>function(D){return new bi(Xr(D.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(p){let E;return E=typeof p=="object"?p.value:p,Aa(E)?null:E}(t.limit));let l=null;t.startAt&&(l=function(p){const E=!!p.before,S=p.values||[];return new Xo(S,E)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const E=!p.before,S=p.values||[];return new Xo(S,E)}(t.endAt)),UA(e,s,a,i,c,"F",l,h)}function Ab(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xr(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xr(t.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(t.unaryFilter.field);return Fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xr(t.unaryFilter.field);return Fe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(Xr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ht.create(t.compositeFilter.filters.map(r=>wm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(t.compositeFilter.op))}(n):re(30097,{filter:n})}function bb(n){return fb[n]}function Sb(n){return db[n]}function Rb(n){return pb[n]}function Yr(n){return{fieldPath:n.canonicalString()}}function Xr(n){return Ye.fromServerFormat(n.fieldPath)}function Am(n){return n instanceof Fe?function(t){if(t.op==="=="){if(Mf(t.value))return{unaryFilter:{field:Yr(t.field),op:"IS_NAN"}};if(xf(t.value))return{unaryFilter:{field:Yr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mf(t.value))return{unaryFilter:{field:Yr(t.field),op:"IS_NOT_NAN"}};if(xf(t.value))return{unaryFilter:{field:Yr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(t.field),op:Sb(t.op),value:t.value}}}(n):n instanceof Ht?function(t){const r=t.getFilters().map(s=>Am(s));return r.length===1?r[0]:{compositeFilter:{op:Rb(t.op),filters:r}}}(n):re(54877,{filter:n})}function Pb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Sm(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class vn{constructor(e,t,r,s,i=oe.min(),a=oe.min(),c=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Cb{constructor(e){this.yt=e}}function Vb(n){const e=wb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jc(e,e.limit,"L"):e}/**
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
 */class kb{constructor(){this.bn=new Db}addToCollectionParentIndex(e,t){return this.bn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(er.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(er.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class Db{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new je(Se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new je(Se.comparator)).toArray()}}/**
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
 */const Jf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rm=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(Rm,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
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
 */class sr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new sr(0)}static ar(){return new sr(-1)}}/**
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
 */const Yf="LruGarbageCollector",Nb=1048576;function Xf([n,e],[t,r]){const s=fe(n,t);return s===0?fe(e,r):s}class Ob{constructor(e){this.Pr=e,this.buffer=new je(Xf),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Xf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Yf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ws(t)?H(Yf,"Ignoring IndexedDB error during garbage collection: ",t):await Is(t)}await this.Ar(3e5)})}}class Mb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return x.resolve(wa.ce);const r=new Ob(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Jf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jf):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Qr()<=pe.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Lb(n,e){return new Mb(n,e)}/**
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
 */class Fb{constructor(){this.changes=new Lr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ub{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Bb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ui(r.mutation,s,bt.empty(),Ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,t,r=de()){const s=Sr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Qs();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Sr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,de()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Rn();const a=li(),c=function(){return li()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof fr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ui(f.mutation,h,f.mutation.getFieldMask(),Ce.now())):a.set(h.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>c.set(h,new Ub(f,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=li();let s=new Ve((a,c)=>a-c),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||bt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||de()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=cm();f.forEach(E=>{if(!i.has(E)){const S=pm(t.get(E),r.get(E));S!==null&&p.set(E,S),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return BA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):x.resolve(Sr());let c=Ti,l=i;return a.next(h=>x.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{l=l.insert(f,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,de())).next(f=>({batchId:c,changes:am(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let s=Qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Qs();return this.indexManager.getCollectionParents(e,i).next(c=>x.forEach(c,l=>{const h=function(p,E){return new As(E,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,E)=>{a=a.insert(p,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ot.newInvalidDocument(f)))});let c=Qs();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ui(f.mutation,h,bt.empty(),Ce.now()),Ra(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class $b{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return x.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:Vb(s.bundledQuery),readTime:rn(s.readTime)}}(t)),x.resolve()}}/**
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
 */class jb{constructor(){this.overlays=new Ve(Y.comparator),this.Lr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Sr();return x.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const s=Sr(),i=t.length+1,a=new Y(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ve((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Sr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return x.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ob(t,r));let i=this.Lr.get(t);i===void 0&&(i=de(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class qb{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
 */class Yl{constructor(){this.kr=new je(Ke.Kr),this.qr=new je(Ke.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ke(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ke(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new Y(new Se([])),r=new Ke(t,e),s=new Ke(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new Y(new Se([])),r=new Ke(t,e),s=new Ke(t,e+1);let i=de();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ke(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return Y.comparator(e.key,t.key)||fe(e.Jr,t.Jr)}static Ur(e,t){return fe(e.Jr,t.Jr)||Y.comparator(e.key,t.key)}}/**
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
 */class Hb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new je(Ke.Kr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ib(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Hr=this.Hr.add(new Ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Bl:this.Yn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ke(t,0),s=new Ke(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const c=this.Zr(a.Jr);i.push(c)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new je(fe);return t.forEach(s=>{const i=new Ke(s,0),a=new Ke(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],c=>{r=r.add(c.Jr)})}),x.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new Ke(new Y(i),0);let c=new je(fe);return this.Hr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Jr)),!0)},a),x.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ve(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return x.forEach(t.mutations,s=>{const i=new Ke(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new Ke(t,0),s=this.Hr.firstAfterOrEqual(r);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Wb{constructor(e){this.ti=e,this.docs=function(){return new Ve(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let r=Rn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Rn();const a=t.path,c=new Y(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||mA(gA(f),r)<=0||(s.has(f.key)||Ra(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,t,r,s){re(9500)}ni(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Kb(this)}getSize(e){return x.resolve(this.size)}}class Kb extends Fb{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class zb{constructor(e){this.persistence=e,this.ri=new Lr(t=>ql(t),Hl),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.ii=0,this.si=new Yl,this.targetCount=0,this.oi=sr._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),x.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new sr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.lr(t),x.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.si.containsKey(t))}}/**
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
 */class Pm{constructor(e,t){this._i={},this.overlays={},this.ai=new wa(0),this.ui=!1,this.ui=!0,this.ci=new qb,this.referenceDelegate=e(this),this.li=new zb(this),this.indexManager=new kb,this.remoteDocumentCache=function(s){return new Wb(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Cb(t),this.Pi=new $b(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new Hb(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){H("MemoryPersistence","Starting transaction:",e);const s=new Gb(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return x.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class Gb extends yA{constructor(e){super(),this.currentSequenceNumber=e}}class Xl{constructor(e){this.persistence=e,this.Ri=new Yl,this.Ai=null}static Vi(e){return new Xl(e)}get di(){if(this.Ai)return this.Ai;throw re(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,r=>{const s=Y.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,oe.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return x.or([()=>x.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ta{constructor(e,t){this.persistence=e,this.fi=new Lr(r=>TA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Lb(this,t)}static Vi(e,t){return new ta(e,t)}Ti(){}Ii(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return x.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?x.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,oe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bo(e.data.value)),t}wr(e,t,r){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Zl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=de(),s=de();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zl(e,t.fromCache,r,s)}}/**
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
 */class Qb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Jb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return wv()?8:EA(ct())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Qb;return this.ys(e,t,a).next(c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Qr()<=pe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Jr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Qr()<=pe.DEBUG&&H("QueryEngine","Query:",Jr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Qr()<=pe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Jr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(t))):x.resolve())}gs(e,t){if(Bf(t))return x.resolve(null);let r=nn(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Jc(t,null,"F"),r=nn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=de(...i);return this.fs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ss(t,c);return this.bs(t,h,a,l.readTime)?this.gs(e,Jc(t,null,"F")):this.Ds(e,h,t,l)}))})))}ps(e,t,r,s){return Bf(t)||s.isEqual(oe.min())?x.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?x.resolve(null):(Qr()<=pe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jr(t)),this.Ds(e,a,t,pA(s,Ti)).next(c=>c))})}Ss(e,t){let r=new je(im(e));return t.forEach((s,i)=>{Ra(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Qr()<=pe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Jr(t)),this.fs.getDocumentsMatchingQuery(e,t,er.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const eu="LocalStore",Yb=3e8;class Xb{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Ve(fe),this.Fs=new Lr(i=>ql(i),Hl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Zb(n,e,t,r){return new Xb(n,e,t,r)}async function Cm(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=de();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:c}))})})}function eS(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,E=p.keys();let S=x.resolve();return E.forEach(D=>{S=S.next(()=>f.getEntry(l,D)).next(U=>{const $=h.docVersions.get(D);ve($!==null,48541),U.version.compareTo($)<0&&(p.applyToRemoteDocument(U,h),U.isValidDocument()&&(U.setReadTime(h.commitVersion),f.addEntry(U)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=de();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Vm(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function tS(n,e){const t=ae(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach((f,p)=>{const E=s.get(p);if(!E)return;c.push(t.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,f.addedDocuments,p)));let S=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(Ze.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(p,S),function(U,$,z){return U.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=Yb?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(E,S,f)&&c.push(t.li.updateTargetData(i,S))});let l=Rn(),h=de();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(nS(i,a,e.documentUpdates).next(f=>{l=f.Bs,h=f.Ls})),!r.isEqual(oe.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return x.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.vs=s,i))}function nS(n,e,t){let r=de(),s=de();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Rn();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):H(eu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Bs:a,Ls:s}})}function rS(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Bl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sS(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new vn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function tl(n,e,t){const r=ae(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ws(a))throw a;H(eu,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Zf(n,e,t){const r=ae(n);let s=oe.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const p=ae(l),E=p.Fs.get(f);return E!==void 0?x.resolve(p.vs.get(E)):p.li.getTargetData(h,f)}(r,a,nn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:oe.min(),t?i:de())).next(c=>(iS(r,qA(e),c),{documents:c,ks:i})))}function iS(n,e,t){let r=n.Ms.get(e)||oe.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class ed{constructor(){this.activeTargetIds=QA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oS{constructor(){this.vo=new ed,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ed,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aS{Mo(e){}shutdown(){}}/**
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
 */const td="ConnectivityMonitor";class nd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(td,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(td,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fo=null;function nl(){return fo===null?fo=function(){return 268435456+Math.round(2147483648*Math.random())}():fo++,"0x"+fo.toString(16)}/**
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
 */const yc="RestConnection",cS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class lS{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Jo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=nl(),c=this.Qo(e,t.toUriEncodedString());H(yc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),f=Ni(h);return this.zo(e,c,l,r,f).then(p=>(H(yc,`Received RPC '${e}' ${a}: `,p),p),p=>{throw xr(yc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=cS[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class uS{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const nt="WebChannelConnection",qs=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class ls extends lS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ls.c_){const e=xg();qs(e,Og.STAT_EVENT,t=>{t.stat===qc.PROXY?H(nt,"STAT_EVENT: detected buffering proxy"):t.stat===qc.NOPROXY&&H(nt,"STAT_EVENT: detected no buffering proxy")}),ls.c_=!0}}zo(e,t,r,s,i){const a=nl();return new Promise((c,l)=>{const h=new Dg;h.setWithCredentials(!0),h.listenOnce(Ng.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ao.NO_ERROR:const p=h.getResponseJson();H(nt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Ao.TIMEOUT:H(nt,`RPC '${e}' ${a} timed out`),l(new K(N.DEADLINE_EXCEEDED,"Request time out"));break;case Ao.HTTP_ERROR:const E=h.getStatus();if(H(nt,`RPC '${e}' ${a} failed with status:`,E,"response text:",h.getResponseText()),E>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S==null?void 0:S.error;if(D&&D.status&&D.message){const U=function(z){const G=z.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(G)>=0?G:N.UNKNOWN}(D.status);l(new K(U,D.message))}else l(new K(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new K(N.UNAVAILABLE,"Connection failed."));break;default:re(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(nt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);H(nt,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=nl(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");H(nt,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=a.createWebChannel(h,c);this.I_(f);let p=!1,E=!1;const S=new uS({Jo:D=>{E?H(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(p||(H(nt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),H(nt,`RPC '${e}' stream ${s} sending:`,D),f.send(D))},Ho:()=>f.close()});return qs(f,Gs.EventType.OPEN,()=>{E||(H(nt,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),qs(f,Gs.EventType.CLOSE,()=>{E||(E=!0,H(nt,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.E_(f))}),qs(f,Gs.EventType.ERROR,D=>{E||(E=!0,xr(nt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),S.o_(new K(N.UNAVAILABLE,"The operation could not be completed")))}),qs(f,Gs.EventType.MESSAGE,D=>{var U;if(!E){const $=D.data[0];ve(!!$,16349);const z=$,G=(z==null?void 0:z.error)||((U=z[0])==null?void 0:U.error);if(G){H(nt,`RPC '${e}' stream ${s} received error:`,G);const J=G.status;let W=function(A){const _=Le[A];if(_!==void 0)return mm(_)}(J),ee=G.message;J==="NOT_FOUND"&&ee.includes("database")&&ee.includes("does not exist")&&ee.includes(this.databaseId.database)&&xr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),W===void 0&&(W=N.INTERNAL,ee="Unknown error status: "+J+" with message "+G.message),E=!0,S.o_(new K(W,ee)),f.close()}else H(nt,`RPC '${e}' stream ${s} received:`,$),S.__($)}}),ls.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Mg()}}/**
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
 */function hS(n){return new ls(n)}function Ec(){return typeof document<"u"?document:null}/**
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
 */function Va(n){return new gb(n,!0)}/**
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
 */ls.c_=!1;class km{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const rd="PersistentStream";class Dm{constructor(e,t,r,s,i,a,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new km(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Sn(t.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new K(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(rd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(H(rd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fS extends Dm{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=yb(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?oe.min():a.readTime?rn(a.readTime):oe.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=el(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=Gc(l)?{documents:Tb(i,l)}:{query:Ib(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Em(i,a.resumeToken);const h=Yc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(oe.min())>0){c.readTime=ea(i,a.snapshotVersion.toTimestamp());const h=Yc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Ab(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=el(this.serializer),t.removeTarget=e,this.K_(t)}}class dS extends Dm{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=vb(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=el(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Eb(this.serializer,r))};this.K_(t)}}/**
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
 */class pS{}class gS extends pS{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Xc(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(N.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.jo(e,Xc(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(N.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function mS(n,e,t,r){return new gS(n,e,t,r)}class _S{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Sn(t),this.aa=!1):H("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const an="RemoteStore";class yS{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new sr(1e3),this.Va=new sr(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{Fr(this)&&(H(an,"Restarting streams for network reachability change."),await async function(l){const h=ae(l);h.da.add(4),await ji(h),h.ga.set("Unknown"),h.da.delete(4),await ka(h)}(this))})}),this.ga=new _S(r,s)}}async function ka(n){if(Fr(n))for(const e of n.ma)await e(!0)}async function ji(n){for(const e of n.ma)await e(!1)}function rl(n,e){return n.Ea.get(e)||void 0}function Nm(n,e){const t=ae(n),r=rl(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=function(c,l){const h=rl(c,l);h!==void 0&&c.Ra.delete(h);const f=function(E,S){return S%2!=0?E.Va.next():E.Aa.next()}(c,l);return c.Ea.set(l,f),c.Ra.set(f,l),f}(t,e.targetId);H(an,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new vn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),su(t)?ru(t):bs(t).O_()&&nu(t,i)}function tu(n,e){const t=ae(n),r=bs(t),s=rl(t,e);H(an,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&Om(t,s),t.Ia.size===0&&(r.O_()?r.L_():Fr(t)&&t.ga.set("Unknown"))}function nu(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void H(an,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}bs(n).Z_(e)}function Om(n,e){n.pa.$e(e),bs(n).X_(e)}function ru(n){n.pa=new hb({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):de()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),bs(n).start(),n.ga.ua()}function su(n){return Fr(n)&&!bs(n).x_()&&n.Ia.size>0}function Fr(n){return ae(n).da.size===0}function xm(n){n.pa=void 0}async function ES(n){n.ga.set("Online")}async function vS(n){n.Ia.forEach((e,t)=>{nu(n,e)})}async function TS(n,e){xm(n),su(n)?(n.ga.ha(e),ru(n)):n.ga.set("Unknown")}async function IS(n,e,t){if(n.ga.set("Online"),e instanceof ym&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds){if(s.Ia.has(c)){const l=s.Ra.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.Ra.delete(c)),s.Ia.delete(c)}s.pa.removeTarget(c)}}(n,e)}catch(r){H(an,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await na(n,r)}else if(e instanceof Po?n.pa.Xe(e):e instanceof _m?n.pa.st(e):n.pa.tt(e),!t.isEqual(oe.min()))try{const r=await Vm(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.pa.Tt(a);c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(f);p&&i.Ia.set(f,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(Ze.EMPTY_BYTE_STRING,p.snapshotVersion)),Om(i,h);const E=new vn(p.target,h,f,p.sequenceNumber);nu(i,E)});const l=function(f,p){const E=new Map;p.targetChanges.forEach((D,U)=>{const $=f.Ra.get(U);$!==void 0&&E.set($,D)});let S=new Ve(fe);return p.targetMismatches.forEach((D,U)=>{const $=f.Ra.get(D);$!==void 0&&(S=S.insert($,U))}),new Bi(p.snapshotVersion,E,S,p.documentUpdates,p.resolvedLimboDocuments)}(i,c);return i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){H(an,"Failed to raise snapshot:",r),await na(n,r)}}async function na(n,e,t){if(!ws(e))throw e;n.da.add(1),await ji(n),n.ga.set("Offline"),t||(t=()=>Vm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H(an,"Retrying IndexedDB access"),await t(),n.da.delete(1),await ka(n)})}function Mm(n,e){return e().catch(t=>na(n,t,e))}async function Da(n){const e=ae(n),t=ir(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bl;for(;wS(e);)try{const s=await rS(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,AS(e,s)}catch(s){await na(e,s)}Lm(e)&&Fm(e)}function wS(n){return Fr(n)&&n.Ta.length<10}function AS(n,e){n.Ta.push(e);const t=ir(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Lm(n){return Fr(n)&&!ir(n).x_()&&n.Ta.length>0}function Fm(n){ir(n).start()}async function bS(n){ir(n).ra()}async function SS(n){const e=ir(n);for(const t of n.Ta)e.ea(t.mutations)}async function RS(n,e,t){const r=n.Ta.shift(),s=Gl.from(r,e,t);await Mm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Da(n)}async function PS(n,e){e&&ir(n).Y_&&await async function(r,s){if(function(a){return cb(a)&&a!==N.ABORTED}(s.code)){const i=r.Ta.shift();ir(r).B_(),await Mm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Da(r)}}(n,e),Lm(n)&&Fm(n)}async function sd(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),H(an,"RemoteStore received new credentials");const r=Fr(t);t.da.add(3),await ji(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await ka(t)}async function CS(n,e){const t=ae(n);e?(t.da.delete(2),await ka(t)):e||(t.da.add(2),await ji(t),t.ga.set("Unknown"))}function bs(n){return n.ya||(n.ya=function(t,r,s){const i=ae(t);return i.sa(),new fS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:ES.bind(null,n),Yo:vS.bind(null,n),t_:TS.bind(null,n),H_:IS.bind(null,n)}),n.ma.push(async e=>{e?(n.ya.B_(),su(n)?ru(n):n.ga.set("Unknown")):(await n.ya.stop(),xm(n))})),n.ya}function ir(n){return n.wa||(n.wa=function(t,r,s){const i=ae(t);return i.sa(),new dS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bS.bind(null,n),t_:PS.bind(null,n),ta:SS.bind(null,n),na:RS.bind(null,n)}),n.ma.push(async e=>{e?(n.wa.B_(),await Da(n)):(await n.wa.stop(),n.Ta.length>0&&(H(an,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
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
 */class iu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new iu(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ou(n,e){if(Sn("AsyncQueue",`${e}: ${n}`),ws(n))return new K(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class us{static emptySet(e){return new us(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=Qs(),this.sortedSet=new Ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class id{constructor(){this.Sa=new Ve(Y.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):re(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal((t,r)=>{e.push(r)}),e}}class ms{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ms(e,t,us.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class VS{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class kS{constructor(){this.queries=od(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=ae(t),i=s.queries;s.queries=od(),i.forEach((a,c)=>{for(const l of c.va)l.onError(r)})})(this,new K(N.ABORTED,"Firestore shutting down"))}}function od(){return new Lr(n=>sm(n),Sa)}async function DS(n,e){const t=ae(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new VS,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ou(a,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&au(t)}async function NS(n,e){const t=ae(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function OS(n,e){const t=ae(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.va)c.Na(s)&&(r=!0);a.Ca=s}}r&&au(t)}function xS(n,e,t){const r=ae(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function au(n){n.xa.forEach(e=>{e.next()})}var sl,ad;(ad=sl||(sl={})).Ba="default",ad.Cache="cache";class MS{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==sl.Cache}}/**
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
 */class Um{constructor(e){this.key=e}}class Bm{constructor(e){this.key=e}}class LS{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=de(),this.mutatedKeys=de(),this.iu=im(e),this.su=new us(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new id,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const E=s.get(f),S=Ra(this.query,p)?p:null,D=!!E&&this.mutatedKeys.has(E.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let $=!1;E&&S?E.data.isEqual(S.data)?D!==U&&(r.track({type:3,doc:S}),$=!0):this.uu(E,S)||(r.track({type:2,doc:S}),$=!0,(l&&this.iu(S,l)>0||h&&this.iu(S,h)<0)&&(c=!0)):!E&&S?(r.track({type:0,doc:S}),$=!0):E&&!S&&(r.track({type:1,doc:E}),$=!0,(l||h)&&(c=!0)),$&&(S?(a=a.add(S),i=U?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:a,au:r,bs:c,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((f,p)=>function(S,D){const U=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Vt:$})}};return U(S)-U(D)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),s=s??!1;const c=t&&!s?this.lu():[],l=this.ru.size===0&&this.current&&!s?1:0,h=l!==this.nu;return this.nu=l,a.length!==0||h?{snapshot:new ms(this.query,e.su,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new id,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=de(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const t=[];return e.forEach(r=>{this.ru.has(r)||t.push(new Bm(r))}),this.ru.forEach(r=>{e.has(r)||t.push(new Um(r))}),t}Tu(e){this.tu=e.ks,this.ru=de();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return ms.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const cu="SyncEngine";class FS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class US{constructor(e){this.key=e,this.Eu=!1}}class BS{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new Lr(c=>sm(c),Sa),this.Vu=new Map,this.du=new Set,this.mu=new Ve(Y.comparator),this.fu=new Map,this.gu=new Yl,this.pu={},this.yu=new Map,this.wu=sr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function $S(n,e,t=!0){const r=Km(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await $m(r,e,t,!0),s}async function jS(n,e){const t=Km(n);await $m(t,e,!0,!1)}async function $m(n,e,t,r){const s=await sS(n.localStore,nn(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await qS(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Nm(n.remoteStore,s),c}async function qS(n,e,t,r,s){n.bu=(p,E,S)=>async function(U,$,z,G){let J=$.view._u(z);J.bs&&(J=await Zf(U.localStore,$.query,!1).then(({documents:A})=>$.view._u(A,J)));const W=G&&G.targetChanges.get($.targetId),ee=G&&G.targetMismatches.get($.targetId)!=null,ie=$.view.applyChanges(J,U.isPrimaryClient,W,ee);return ld(U,$.targetId,ie.hu),ie.snapshot}(n,p,E,S);const i=await Zf(n.localStore,e,!0),a=new LS(e,i.ks),c=a._u(i.documents),l=$i.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);ld(n,t,h.hu);const f=new FS(e,t,a);return n.Au.set(e,f),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),h.snapshot}async function HS(n,e,t){const r=ae(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(a=>!Sa(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&tu(r.remoteStore,s.targetId),il(r,s.targetId)}).catch(Is)):(il(r,s.targetId),await tl(r.localStore,s.targetId,!0))}async function WS(n,e){const t=ae(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),tu(t.remoteStore,r.targetId))}async function KS(n,e,t){const r=ZS(n);try{const s=await function(a,c){const l=ae(a),h=Ce.now(),f=c.reduce((S,D)=>S.add(D.key),de());let p,E;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Rn(),U=de();return l.xs.getEntries(S,f).next($=>{D=$,D.forEach((z,G)=>{G.isValidDocument()||(U=U.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,D)).next($=>{p=$;const z=[];for(const G of c){const J=rb(G,p.get(G.key).overlayedDocument);J!=null&&z.push(new fr(G.key,J,Jg(J.value.mapValue),Bt.exists(!0)))}return l.mutationQueue.addMutationBatch(S,h,z,c)}).next($=>{E=$;const z=$.applyToLocalDocumentSet(p,U);return l.documentOverlayCache.saveOverlays(S,$.batchId,z)})}).then(()=>({batchId:E.batchId,changes:am(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.pu[a.currentUser.toKey()];h||(h=new Ve(fe)),h=h.insert(c,l),a.pu[a.currentUser.toKey()]=h}(r,s.batchId,t),await qi(r,s.changes),await Da(r.remoteStore)}catch(s){const i=ou(s,"Failed to persist write");t.reject(i)}}async function jm(n,e){const t=ae(n);try{const r=await tS(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.fu.get(i);a&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?ve(a.Eu,14607):s.removedDocuments.size>0&&(ve(a.Eu,42227),a.Eu=!1))}),await qi(t,r,e)}catch(r){await Is(r)}}function cd(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach((i,a)=>{const c=a.view.Oa(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=ae(a);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const E of p.va)E.Oa(c)&&(h=!0)}),h&&au(l)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zS(n,e,t){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let a=new Ve(Y.comparator);a=a.insert(i,ot.newNoDocument(i,oe.min()));const c=de().add(i),l=new Bi(oe.min(),new Map,new Ve(fe),a,c);await jm(r,l),r.mu=r.mu.remove(i),r.fu.delete(e),lu(r)}else await tl(r.localStore,e,!1).then(()=>il(r,e,t)).catch(Is)}async function GS(n,e){const t=ae(n),r=e.batch.batchId;try{const s=await eS(t.localStore,e);Hm(t,r,null),qm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qi(t,s)}catch(s){await Is(s)}}async function QS(n,e,t){const r=ae(n);try{const s=await function(a,c){const l=ae(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(ve(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Hm(r,e,t),qm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qi(r,s)}catch(s){await Is(s)}}function qm(n,e){(n.yu.get(e)||[]).forEach(t=>{t.resolve()}),n.yu.delete(e)}function Hm(n,e,t){const r=ae(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function il(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach(r=>{n.gu.containsKey(r)||Wm(n,r)})}function Wm(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(tu(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),lu(n))}function ld(n,e,t){for(const r of t)r instanceof Um?(n.gu.addReference(r.key,e),JS(n,r)):r instanceof Bm?(H(cu,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||Wm(n,r.key)):re(19791,{Cu:r})}function JS(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(H(cu,"New document in limbo: "+t),n.du.add(r),lu(n))}function lu(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new Y(Se.fromString(e)),r=n.wu.next();n.fu.set(r,new US(t)),n.mu=n.mu.insert(t,r),Nm(n.remoteStore,new vn(nn(Wl(t.path)),r,"TargetPurposeLimboResolution",wa.ce))}}async function qi(n,e,t){const r=ae(n),s=[],i=[],a=[];r.Au.isEmpty()||(r.Au.forEach((c,l)=>{a.push(r.bu(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Zl.Es(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ru.H_(s),await async function(l,h){const f=ae(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(h,E=>x.forEach(E.Ts,S=>f.persistence.referenceDelegate.addReference(p,E.targetId,S)).next(()=>x.forEach(E.Is,S=>f.persistence.referenceDelegate.removeReference(p,E.targetId,S)))))}catch(p){if(!ws(p))throw p;H(eu,"Failed to update sequence numbers: "+p)}for(const p of h){const E=p.targetId;if(!p.fromCache){const S=f.vs.get(E),D=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(D);f.vs=f.vs.insert(E,U)}}}(r.localStore,i))}async function YS(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){H(cu,"User change. New user:",e.toKey());const r=await Cm(t.localStore,e);t.currentUser=e,function(i,a){i.yu.forEach(c=>{c.forEach(l=>{l.reject(new K(N.CANCELLED,a))})}),i.yu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(t,r.Ns)}}function XS(n,e){const t=ae(n),r=t.fu.get(e);if(r&&r.Eu)return de().add(r.key);{let s=de();const i=t.Vu.get(e);if(!i)return s;for(const a of i){const c=t.Au.get(a);s=s.unionWith(c.view.ou)}return s}}function Km(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zS.bind(null,e),e.Ru.H_=OS.bind(null,e.eventManager),e.Ru.Du=xS.bind(null,e.eventManager),e}function ZS(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QS.bind(null,e),e}class ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Va(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return Zb(this.persistence,new Jb,e.initialUser,this.serializer)}xu(e){return new Pm(Xl.Vi,this.serializer)}Mu(e){return new oS}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ra.provider={build:()=>new ra};class eR extends ra{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){ve(this.persistence.referenceDelegate instanceof ta,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xb(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Pm(r=>ta.Vi(r,t),this.serializer)}}class ol{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YS.bind(null,this.syncEngine),await CS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kS}()}createDatastore(e){const t=Va(e.databaseInfo.databaseId),r=hS(e.databaseInfo);return mS(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new yS(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>cd(this.syncEngine,t,0),function(){return nd.v()?new nd:new aS}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,f){const p=new BS(s,i,a,c,l,h);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ae(s);H(an,"RemoteStore shutting down."),i.da.add(5),await ji(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ol.provider={build:()=>new ol};/**
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
 */class tR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const or="FirestoreClient";class nR{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=Ul.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{H(or,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H(or,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ou(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vc(n,e){n.asyncQueue.verifyOperationInProgress(),H(or,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Cm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ud(n,e){n.asyncQueue.verifyOperationInProgress();const t=await rR(n);H(or,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>sd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>sd(e.remoteStore,s)),n._onlineComponents=e}async function rR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(or,"Using user provided OfflineComponentProvider");try{await vc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;xr("Error using user provided cache. Falling back to memory cache: "+t),await vc(n,new ra)}}else H(or,"Using default OfflineComponentProvider"),await vc(n,new eR(void 0));return n._offlineComponents}async function zm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(or,"Using user provided OnlineComponentProvider"),await ud(n,n._uninitializedComponentsProvider._online)):(H(or,"Using default OnlineComponentProvider"),await ud(n,new ol))),n._onlineComponents}function sR(n){return zm(n).then(e=>e.syncEngine)}async function hd(n){const e=await zm(n),t=e.eventManager;return t.onListen=$S.bind(null,e.syncEngine),t.onUnlisten=HS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=WS.bind(null,e.syncEngine),t}function iR(n,e,t,r){const s=new tR(r),i=new MS(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>DS(await hd(n),i)),()=>{s.Ku(),n.asyncQueue.enqueueAndForget(async()=>NS(await hd(n),i))}}function oR(n,e){const t=new Pr;return n.asyncQueue.enqueueAndForget(async()=>KS(await sR(n),e,t)),t.promise}/**
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
 */function Gm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const aR="ComponentProvider",fd=new Map;function cR(n,e,t,r,s){return new AA(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Gm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Qm="firestore.googleapis.com",dd=!0;class pd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qm,this.ssl=dd}else this.host=e.host,this.ssl=e.ssl??dd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nb)throw new K(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gm(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Na{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rA;switch(r.type){case"firstParty":return new aA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fd.get(t);r&&(H(aR,"Removing Datastore"),fd.delete(t),r.terminate())}(this),Promise.resolve()}}function lR(n,e,t,r={}){var h;n=Qn(n,Na);const s=Ni(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&Hp(`https://${c}`),i.host!==Qm&&i.host!==c&&xr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Vr(l,a)&&(n._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=st.MOCK_USER;else{f=mv(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new K(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new st(E)}n._authCredentials=new sA(new Fg(f,p))}}/**
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
 */class Ur{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class Be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}toJSON(){return{type:Be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Fi(t,Be._jsonSchema))return new Be(e,r||null,new Y(Se.fromString(t.referencePath)))}}Be._jsonSchemaVersion="firestore/documentReference/1.0",Be._jsonSchema={type:Ue("string",Be._jsonSchemaVersion),referencePath:Ue("string")};class Jn extends Ur{constructor(e,t,r){super(e,t,Wl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new Y(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function gd(n,e,...t){if(n=qe(n),Ug("collection","path",e),n instanceof Na){const r=Se.fromString(e,...t);return Sf(r),new Jn(n,null,r)}{if(!(n instanceof Be||n instanceof Jn))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Sf(r),new Jn(n.firestore,null,r)}}function Ys(n,e,...t){if(n=qe(n),arguments.length===1&&(e=Ul.newId()),Ug("doc","path",e),n instanceof Na){const r=Se.fromString(e,...t);return bf(r),new Be(n,null,new Y(r))}{if(!(n instanceof Be||n instanceof Jn))throw new K(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return bf(r),new Be(n.firestore,n instanceof Jn?n.converter:null,new Y(r))}}/**
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
 */const md="AsyncQueue";class _d{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new km(this,"async_queue_retry"),this.lc=()=>{const r=Ec();r&&H(md,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=Ec();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Ec();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const t=new Pr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ws(e))throw e;H(md,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const t=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Sn("INTERNAL UNHANDLED ERROR: ",yd(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=iu.createAndSchedule(this,e,t,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&re(47125,{Rc:yd(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function yd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _s extends Na{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new _d,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _d(e),this._firestoreClient=void 0,await e}}}function uR(n,e){const t=typeof n=="object"?n:Gp(),r=typeof n=="string"?n:Jo,s=Cl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pv("firestore");i&&lR(s,...i)}return s}function Jm(n){if(n._terminated)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hR(n),n._firestoreClient}function hR(n){var r,s,i,a;const e=n._freezeSettings(),t=cR(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new nR(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(Ze.fromBase64String(e))}catch(t){throw new K(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vt(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fi(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:Ue("string",Vt._jsonSchemaVersion),bytes:Ue("string")};/**
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
 */class uu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Oa{constructor(e){this._methodName=e}}/**
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
 */class sn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(Fi(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:Ue("string",sn._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
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
 */class $t{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fi(e,$t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new $t(e.vectorValues);throw new K(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$t._jsonSchemaVersion="firestore/vectorValue/1.0",$t._jsonSchema={type:Ue("string",$t._jsonSchemaVersion),vectorValues:Ue("object")};/**
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
 */const fR=/^__.*__$/;class dR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ui(e,this.data,t,this.fieldTransforms)}}class Ym{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new fr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{dataSource:n})}}class hu{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new hu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return sa(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Xm(this.dataSource)&&fR.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class pR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Va(e)}V(e,t,r,s=!1){return new hu({dataSource:e,methodName:t,targetDoc:r,path:Ye.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fu(n){const e=n._freezeSettings(),t=Va(n._databaseId);return new pR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gR(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);pu("Data must be an object, but it was:",a,r);const c=Zm(r,a);let l,h;if(i.merge)l=new bt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const E=ys(e,p,t);if(!a.contains(E))throw new K(N.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);n_(f,E)||f.push(E)}l=new bt(f),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new dR(new Et(c),l,h)}class xa extends Oa{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xa}}class du extends Oa{_toFieldTransform(e){return new ZA(e.path,new Si)}isEqual(e){return e instanceof du}}function mR(n,e,t,r){const s=n.V(1,e,t);pu("Data must be an object, but it was:",s,r);const i=[],a=Et.empty();hr(r,(l,h)=>{const f=t_(e,l,t);h=qe(h);const p=s.Sc(f);if(h instanceof xa)i.push(f);else{const E=Hi(h,p);E!=null&&(i.push(f),a.set(f,E))}});const c=new bt(i);return new Ym(a,c,s.fieldTransforms)}function _R(n,e,t,r,s,i){const a=n.V(1,e,t),c=[ys(e,r,t)],l=[s];if(i.length%2!=0)throw new K(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(ys(e,i[E])),l.push(i[E+1]);const h=[],f=Et.empty();for(let E=c.length-1;E>=0;--E)if(!n_(h,c[E])){const S=c[E];let D=l[E];D=qe(D);const U=a.Sc(S);if(D instanceof xa)h.push(S);else{const $=Hi(D,U);$!=null&&(h.push(S),f.set(S,$))}}const p=new bt(h);return new Ym(f,p,a.fieldTransforms)}function yR(n,e,t,r=!1){return Hi(t,n.V(r?4:3,e))}function Hi(n,e){if(e_(n=qe(n)))return pu("Unsupported field value:",e,n),Zm(n,e);if(n instanceof Oa)return function(r,s){if(!Xm(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Hi(c,s.bc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:ea(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ea(s.serializer,i)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:Em(s.serializer,r._byteString)};if(r instanceof Be){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $t)return function(a,c){const l=a instanceof $t?a.toArray():a;return{mapValue:{fields:{[Gg]:{stringValue:Qg},[Yo]:{arrayValue:{values:l.map(f=>{if(typeof f!="number")throw c.Dc("VectorValues must only contain numeric values.");return Kl(c.serializer,f)})}}}}}}(r,s);if(Sm(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Ia(r)}`)}(n,e)}function Zm(n,e){const t={};return jg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(n,(r,s)=>{const i=Hi(s,e.yc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function e_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof sn||n instanceof Vt||n instanceof Be||n instanceof Oa||n instanceof $t||Sm(n))}function pu(n,e,t){if(!e_(t)||!Bg(t)){const r=Ia(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function ys(n,e,t){if((e=qe(e))instanceof uu)return e._internalPath;if(typeof e=="string")return t_(n,e);throw sa("Field path arguments must be of type string or ",n,!1,void 0,t)}const ER=new RegExp("[~\\*/\\[\\]]");function t_(n,e,t){if(e.search(ER)>=0)throw sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new uu(...e.split("."))._internalPath}catch{throw sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sa(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new K(N.INVALID_ARGUMENT,c+n+l)}function n_(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class vR{convertValue(e,t="none"){switch(rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return hr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Yo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>xe(a.doubleValue));return new $t(t)}convertGeoPoint(e){return new sn(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ba(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ii(e));default:return null}}convertTimestamp(e){const t=tr(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);ve(bm(r),9688,{name:e});const s=new wi(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(t)||Sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class r_ extends vR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,t)}}function TR(){return new du("serverTimestamp")}const Ed="@firebase/firestore",vd="4.14.1";/**
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
 */function Td(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class s_{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ys("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class IR extends s_{data(){return super.data()}}/**
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
 */function wR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gu{}class i_ extends gu{}function AR(n,e,...t){let r=[];e instanceof gu&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof _u).length,c=i.filter(l=>l instanceof mu).length;if(a>1||a>0&&c>0)throw new K(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class mu extends i_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new mu(e,t,r)}_apply(e){const t=this._parse(e);return o_(e._query,t),new Ur(e.firestore,e.converter,Qc(e._query,t))}_parse(e){const t=fu(e.firestore);return function(i,a,c,l,h,f,p){let E;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){wd(p,f);const D=[];for(const U of p)D.push(Id(l,i,U));E={arrayValue:{values:D}}}else E=Id(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||wd(p,f),E=yR(c,a,p,f==="in"||f==="not-in");return Fe.create(h,f,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class _u extends gu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _u(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ht.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)o_(a,l),a=Qc(a,l)}(e._query,t),new Ur(e.firestore,e.converter,Qc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yu extends i_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new yu(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new K(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bi(i,a)}(e._query,this._field,this._direction);return new Ur(e.firestore,e.converter,jA(e._query,t))}}function bR(n,e="asc"){const t=e,r=ys("orderBy",n);return yu._create(r,t)}function Id(n,e,t){if(typeof(t=qe(t))=="string"){if(t==="")throw new K(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rm(e)&&t.indexOf("/")!==-1)throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Se.fromString(t));if(!Y.isDocumentKey(r))throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Of(n,new Y(r))}if(t instanceof Be)return Of(n,t._key);throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(t)}.`)}function wd(n,e){if(!Array.isArray(n)||n.length===0)throw new K(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function o_(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new K(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function SR(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Xs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cr extends s_{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ys("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cr._jsonSchema={type:Ue("string",Cr._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class Co extends Cr{data(e={}){return super.data(e)}}class hs{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Co(this._firestore,this._userDataWriter,r.key,r,new Xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Co(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Co(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:RR(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ul.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function RR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:n})}}/**
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
 */hs._jsonSchemaVersion="firestore/querySnapshot/1.0",hs._jsonSchema={type:Ue("string",hs._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};function Ad(n,e,t,...r){n=Qn(n,Be);const s=Qn(n.firestore,_s),i=fu(s);let a;return a=typeof(e=qe(e))=="string"||e instanceof uu?_R(i,"updateDoc",n._key,e,t,r):mR(i,"updateDoc",n._key,e),Eu(s,[a.toMutation(n._key,Bt.exists(!0))])}function bd(n){return Eu(Qn(n.firestore,_s),[new zl(n._key,Bt.none())])}function PR(n,e){const t=Qn(n.firestore,_s),r=Ys(n),s=SR(n.converter,e),i=fu(n.firestore);return Eu(t,[gR(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function CR(n,...e){var h,f,p;n=qe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Td(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Td(e[r])){const E=e[r];e[r]=(h=E.next)==null?void 0:h.bind(E),e[r+1]=(f=E.error)==null?void 0:f.bind(E),e[r+2]=(p=E.complete)==null?void 0:p.bind(E)}let i,a,c;if(n instanceof Be)a=Qn(n.firestore,_s),c=Wl(n._key.path),i={next:E=>{e[r]&&e[r](VR(a,n,E))},error:e[r+1],complete:e[r+2]};else{const E=Qn(n,Ur);a=Qn(E.firestore,_s),c=E._query;const S=new r_(a);i={next:D=>{e[r]&&e[r](new hs(a,S,E,D))},error:e[r+1],complete:e[r+2]},wR(n._query)}const l=Jm(a);return iR(l,c,s,i)}function Eu(n,e){const t=Jm(n);return oR(t,e)}function VR(n,e,t){const r=t.docs.get(e._key),s=new r_(n);return new Cr(n,s,e._key,r,new Xs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){nA(Es),fs(new kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new _s(new iA(r.getProvider("auth-internal")),new cA(a,r.getProvider("app-check-internal")),bA(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),zn(Ed,vd,e),zn(Ed,vd,"esm2020")})();var kR="firebase",DR="12.13.0";/**
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
 */zn(kR,DR,"app");const NR={apiKey:"AIzaSyAWJiDPnggMGmFl3LA6dp1ImaeEoa9oLJk",authDomain:"task-list-76460.firebaseapp.com",projectId:"task-list-76460",storageBucket:"task-list-76460.firebasestorage.app",messagingSenderId:"357470215566",appId:"1:357470215566:web:37e6f0cb3e31275fd998df"},a_=zp(NR),ia=eA(a_),Wr=uR(a_),OR={class:"login-page"},xR={class:"login-card"},MR={class:"form-title"},LR={class:"form-group"},FR={class:"form-group"},UR={key:0,class:"error-message"},BR=["disabled"],$R={key:0,class:"loading-spinner"},jR=lp({__name:"AuthForm",setup(n){const e=De(""),t=De(""),r=De(!0),s=De(""),i=De(!1);function a(){r.value=!r.value,s.value=""}const c=async()=>{s.value="",i.value=!0;try{r.value?await UI(ia,e.value,t.value):await FI(ia,e.value,t.value)}catch(h){const f=h.code??"";s.value=l(f)}finally{i.value=!1}},l=h=>({"auth/user-not-found":"メールアドレスまたはパスワードが正しくありません","auth/wrong-password":"メールアドレスまたはパスワードが正しくありません","auth/invalid-credential":"メールアドレスまたはパスワードが正しくありません","auth/email-already-in-use":"このメールアドレスはすでに使用されています","auth/weak-password":"パスワードは6文字以上にしてください","auth/invalid-email":"メールアドレスの形式が正しくありません","auth/too-many-requests":"しばらくしてから再度お試しください"})[h]??"エラーが発生しました。もう一度お試しください";return(h,f)=>(rt(),mt("div",OR,[Q("div",xR,[f[4]||(f[4]=Q("h1",{class:"app-title"},"Todoリスト",-1)),Q("h2",MR,Xt(r.value?"ログイン":"新規登録"),1),Q("form",{onSubmit:Eo(c,["prevent"]),class:"login-form"},[Q("div",LR,[f[2]||(f[2]=Q("label",{for:"email"},"メールアドレス",-1)),Oo(Q("input",{id:"email","onUpdate:modelValue":f[0]||(f[0]=p=>e.value=p),type:"email",placeholder:"example@email.com",required:"",autocomplete:"email"},null,512),[[Bo,e.value]])]),Q("div",FR,[f[3]||(f[3]=Q("label",{for:"password"},"パスワード",-1)),Oo(Q("input",{id:"password","onUpdate:modelValue":f[1]||(f[1]=p=>t.value=p),type:"password",placeholder:"6文字以上",required:"",autocomplete:"current-password",minlength:"6"},null,512),[[Bo,t.value]])]),s.value?(rt(),mt("p",UR,Xt(s.value),1)):dn("",!0),Q("button",{type:"submit",class:"btn-submit",disabled:i.value},[i.value?(rt(),mt("span",$R)):dn("",!0),bl(" "+Xt(r.value?"ログイン":"登録する"),1)],8,BR)],32),Q("button",{onClick:a,class:"btn-toggle"},Xt(r.value?"アカウントをお持ちでない方はこちら":"すでにアカウントをお持ちの方はこちら"),1)])]))}}),c_=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},qR=c_(jR,[["__scopeId","data-v-bd65bb23"]]),HR={key:0,class:"loading-screen"},WR={key:2,class:"todo-app"},KR={class:"sticky-top"},zR={class:"app-header"},GR=["aria-expanded"],QR={key:0,class:"menu-dropdown"},JR={class:"menu-account"},YR={class:"menu-account-email"},XR={class:"progress-section"},ZR={class:"progress-labels"},eP={class:"progress-labels-left"},tP=["title"],nP={class:"progress-bar-track"},rP={key:0,class:"notification-banner"},sP={class:"todo-list"},iP=["onClick"],oP=["checked","onChange"],aP={class:"todo-text"},cP={key:0,class:"empty-message"},lP={class:"add-panel-actions"},uP=["disabled"],hP={class:"add-panel-actions edit-panel-actions"},fP=["disabled"],Sd=100,dP=lp({__name:"App",setup(n){const e=De(null),t=De(!0),r=De([]),s=De(!1),i=k=>`todos_cache_${k}`,a=k=>{try{const P=localStorage.getItem(i(k));return P?JSON.parse(P):[]}catch{return[]}},c=(k,P)=>{try{localStorage.setItem(i(k),JSON.stringify(P))}catch{}},l=De(""),h=De(!1),f=De("unsupported"),p=De(0),E=De(!1),S=De(!1);let D=0;const U=zr(()=>S.value?{transform:"translateY(100%)"}:E.value?{transform:`translateY(${p.value}px)`,transition:"none"}:p.value>0?{transform:`translateY(${p.value}px)`}:{}),$=k=>{D=k.touches[0].clientY,p.value=0,E.value=!0},z=k=>{if(!E.value)return;const P=k.touches[0].clientY-D;p.value=Math.max(0,P)},G=()=>{p.value>Sd?(E.value=!1,S.value=!0,setTimeout(()=>{S.value=!1,p.value=0,M()},300)):(E.value=!1,Sc(()=>{p.value=0}))},J=De(!1),W=De(null),ee=De(""),ie=De(0),A=De(!1),_=De(!1);let m=0;const w=zr(()=>_.value?{transform:"translateY(100%)"}:A.value?{transform:`translateY(${ie.value}px)`,transition:"none"}:ie.value>0?{transform:`translateY(${ie.value}px)`}:{}),I=k=>{m=k.touches[0].clientY,ie.value=0,A.value=!0},T=k=>{if(!A.value)return;const P=k.touches[0].clientY-m;ie.value=Math.max(0,P)},y=()=>{ie.value>Sd?(A.value=!1,_.value=!0,setTimeout(()=>{_.value=!1,ie.value=0,Nt()},300)):(A.value=!1,Sc(()=>{ie.value=0}))};let ue=null;const Ne=zr(()=>r.value.filter(k=>k.completed).length),ke=zr(()=>r.value.filter(k=>!k.completed).length),Ie=zr(()=>r.value.length===0?0:Math.round(Ne.value/r.value.length*100)),ge=k=>{"setAppBadge"in navigator&&(k>0?navigator.setAppBadge(k):navigator.clearAppBadge())};mo(ke,ge,{immediate:!0});const gt=k=>{const P=a(k);P.length>0&&(r.value=P),s.value=!0;const O=gd(Wr,"users",k,"todos"),F=AR(O,bR("createdAt","asc"));ue=CR(F,X=>{r.value=X.docs.map(q=>({id:q.id,text:q.data().text,completed:q.data().completed})),s.value=!1,c(k,r.value)})},cn=async()=>{if(!e.value||l.value.trim()==="")return;const k=l.value.trim();M(),await PR(gd(Wr,"users",e.value.uid,"todos"),{text:k,completed:!1,createdAt:TR()})},St=async k=>{e.value&&await bd(Ys(Wr,"users",e.value.uid,"todos",k))},lt=k=>{W.value=k,ee.value=k.text,ie.value=0,A.value=!1,_.value=!1,J.value=!0},Nt=()=>{J.value=!1,W.value=null,ee.value="",ie.value=0,A.value=!1},ln=async()=>{if(!e.value||!W.value||ee.value.trim()==="")return;const k=W.value.id,P=ee.value.trim();Nt(),await Ad(Ys(Wr,"users",e.value.uid,"todos",k),{text:P})},dr=async()=>{if(!e.value||!W.value)return;const k=W.value.id;Nt(),await St(k)},Ot=async()=>{if(!e.value)return;const k=r.value.filter(P=>P.completed);await Promise.all(k.map(P=>bd(Ys(Wr,"users",e.value.uid,"todos",P.id))))},Wt=async k=>{if(!e.value)return;const P=r.value.find(O=>O.id===k);P&&await Ad(Ys(Wr,"users",e.value.uid,"todos",k),{completed:!P.completed})},un=async()=>{Rt.value=!1,await qI(ia)},Rt=De(!1),xt=De(null),Wi=()=>{Rt.value=!Rt.value},v=()=>{Rt.value=!1},b=k=>{xt.value&&!xt.value.contains(k.target)&&v()},V=async()=>{if("Notification"in window)if(Notification.permission==="default"){const k=await Notification.requestPermission();f.value=k,k==="granted"&&ge(ke.value)}else f.value=Notification.permission},B=()=>{h.value=!0,l.value="",p.value=0,E.value=!1,S.value=!1},M=()=>{h.value=!1,l.value="",p.value=0,E.value=!1};let L=null;return Tl(()=>{document.addEventListener("click",b),"Notification"in window&&(f.value=Notification.permission),L=jI(ia,k=>{e.value=k,t.value=!1,ue&&(ue(),ue=null,r.value=[],s.value=!1),k&&(gt(k.uid),V())})}),Il(()=>{document.removeEventListener("click",b),L==null||L(),ue==null||ue(),"clearAppBadge"in navigator&&navigator.clearAppBadge()}),(k,P)=>t.value?(rt(),mt("div",HR,[...P[4]||(P[4]=[Q("div",{class:"loading-spinner"},null,-1)])])):e.value?(rt(),mt("div",WR,[Q("div",KR,[Q("header",zR,[P[8]||(P[8]=Q("h1",null,"Todoリスト",-1)),Q("div",{class:"hamburger-menu",ref_key:"menuRef",ref:xt},[Q("button",{class:"hamburger-btn",onClick:Wi,"aria-label":"メニューを開く","aria-expanded":Rt.value},[...P[5]||(P[5]=[Q("span",{class:"hamburger-line"},null,-1),Q("span",{class:"hamburger-line"},null,-1),Q("span",{class:"hamburger-line"},null,-1)])],8,GR),Xe(oo,{name:"menu-fade"},{default:Hs(()=>[Rt.value?(rt(),mt("div",QR,[Q("div",JR,[Q("span",YR,Xt(e.value.email),1)]),P[7]||(P[7]=Q("div",{class:"menu-divider"},null,-1)),Q("button",{class:"menu-logout-btn",onClick:un},[...P[6]||(P[6]=[Q("svg",{class:"menu-logout-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Q("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),Q("polyline",{points:"16 17 21 12 16 7"}),Q("line",{x1:"21",y1:"12",x2:"9",y2:"12"})],-1),bl(" ログアウト ",-1)])])])):dn("",!0)]),_:1})],512)]),Q("div",XR,[Q("div",ZR,[Q("div",eP,[Ne.value>0?(rt(),mt("button",{key:0,class:"delete-completed-btn",onClick:Ot,title:`チェック済み ${Ne.value} 件を削除`},"完了済みを削除",8,tP)):dn("",!0),Q("span",null,"進捗 "+Xt(Ie.value)+"%",1)]),Q("span",null,Xt(Ne.value)+" / "+Xt(r.value.length)+" 完了",1)]),Q("div",nP,[Q("div",{class:"progress-bar-fill",style:ns({width:Ie.value+"%"})},null,4)])]),f.value==="denied"?(rt(),mt("div",rP," バッジを表示するには、設定 › Safari › 通知 で許可してください ")):dn("",!0)]),Q("div",sP,[(rt(!0),mt(Lt,null,My(r.value,O=>(rt(),mt("div",{key:O.id,class:ua(["todo-item",{completed:O.completed}]),onClick:F=>lt(O)},[Q("span",{onClick:P[0]||(P[0]=Eo(()=>{},["stop"]))},[Q("input",{type:"checkbox",checked:O.completed,onChange:F=>Wt(O.id)},null,40,oP)]),Q("span",aP,Xt(O.text),1)],10,iP))),128)),r.value.length===0&&!s.value?(rt(),mt("p",cP," タスクがありません。＋ボタンで追加してください。 ")):dn("",!0)]),Q("button",{class:"fab",onClick:B,"aria-label":"タスクを追加"},[...P[9]||(P[9]=[Q("span",{class:"fab-icon"},"＋",-1)])]),Xe(oo,{name:"fade"},{default:Hs(()=>[(h.value||J.value)&&!S.value&&!_.value?(rt(),mt("div",{key:0,class:"overlay",onClick:P[1]||(P[1]=O=>h.value?M():Nt())})):dn("",!0)]),_:1}),Xe(oo,{name:S.value?"":"slide-up"},{default:Hs(()=>[h.value?(rt(),mt("div",{key:0,class:"add-panel",style:ns(U.value),onTouchstart:$,onTouchmove:Eo(z,["prevent"]),onTouchend:G},[P[11]||(P[11]=Q("div",{class:"add-panel-handle"},null,-1)),Q("div",{class:"add-panel-header"},[Q("button",{class:"close-btn",onClick:M,"aria-label":"閉じる"},"✕"),P[10]||(P[10]=Q("h2",{class:"add-panel-title"},"タスクを追加",-1))]),Oo(Q("input",{"onUpdate:modelValue":P[2]||(P[2]=O=>l.value=O),type:"text",class:"add-panel-input",placeholder:"新しいタスクを入力...",onKeyup:Hh(cn,["enter"]),autofocus:""},null,544),[[Bo,l.value]]),Q("div",lP,[Q("button",{class:"add-btn",onClick:cn,disabled:l.value.trim()===""},"追加",8,uP)])],36)):dn("",!0)]),_:1},8,["name"]),Xe(oo,{name:_.value?"":"slide-up"},{default:Hs(()=>[J.value?(rt(),mt("div",{key:0,class:"add-panel",style:ns(w.value),onTouchstart:I,onTouchmove:Eo(T,["prevent"]),onTouchend:y},[P[13]||(P[13]=Q("div",{class:"add-panel-handle"},null,-1)),Q("div",{class:"add-panel-header"},[Q("button",{class:"close-btn",onClick:Nt,"aria-label":"閉じる"},"✕"),P[12]||(P[12]=Q("h2",{class:"add-panel-title"},"タスクを編集",-1))]),Oo(Q("input",{"onUpdate:modelValue":P[3]||(P[3]=O=>ee.value=O),type:"text",class:"add-panel-input",placeholder:"タスクを入力...",onKeyup:Hh(ln,["enter"]),autofocus:""},null,544),[[Bo,ee.value]]),Q("div",hP,[Q("button",{class:"delete-btn edit-delete-btn",onClick:dr},"削除"),Q("button",{class:"add-btn",onClick:ln,disabled:ee.value.trim()===""},"保存",8,fP)])],36)):dn("",!0)]),_:1},8,["name"])])):(rt(),kp(qR,{key:1}))}}),pP=c_(dP,[["__scopeId","data-v-d18bd0e7"]]);rv(pP).mount("#app");
