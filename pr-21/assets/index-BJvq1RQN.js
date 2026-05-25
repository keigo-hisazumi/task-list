(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function al(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const be={},ts=[],en=()=>{},bd=()=>!1,ia=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),cl=n=>n.startsWith("onUpdate:"),Ye=Object.assign,ll=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},D_=Object.prototype.hasOwnProperty,Te=(n,e)=>D_.call(n,e),re=Array.isArray,ns=n=>oa(n)==="[object Map]",Rd=n=>oa(n)==="[object Set]",le=n=>typeof n=="function",Me=n=>typeof n=="string",or=n=>typeof n=="symbol",Ce=n=>n!==null&&typeof n=="object",Pd=n=>(Ce(n)||le(n))&&le(n.then)&&le(n.catch),Cd=Object.prototype.toString,oa=n=>Cd.call(n),k_=n=>oa(n).slice(8,-1),Vd=n=>oa(n)==="[object Object]",ul=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zs=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},N_=/-\w/g,Jn=aa(n=>n.replace(N_,e=>e.slice(1).toUpperCase())),O_=/\B([A-Z])/g,ar=aa(n=>n.replace(O_,"-$1").toLowerCase()),Dd=aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qa=aa(n=>n?`on${Dd(n)}`:""),qn=(n,e)=>!Object.is(n,e),ho=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},kd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},hl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},x_=n=>{const e=Me(n)?Number(n):NaN;return isNaN(e)?n:e};let ah;const ca=()=>ah||(ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rs(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Me(r)?U_(r):rs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Me(n)||Ce(n))return n}const M_=/;(?![^(]*\))/g,L_=/:([^]+)/,F_=/\/\*[^]*?\*\//g;function U_(n){const e={};return n.replace(F_,"").split(M_).forEach(t=>{if(t){const r=t.split(L_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function la(n){let e="";if(Me(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=la(n[t]);r&&(e+=r+" ")}else if(Ce(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const B_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$_=al(B_);function Nd(n){return!!n||n===""}const Od=n=>!!(n&&n.__v_isRef===!0),Bt=n=>Me(n)?n:n==null?"":re(n)||Ce(n)&&(n.toString===Cd||!le(n.toString))?Od(n)?Bt(n.value):JSON.stringify(n,xd,2):String(n),xd=(n,e)=>Od(e)?xd(n,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ja(r,i)+" =>"]=s,t),{})}:Rd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ja(t))}:or(e)?Ja(e):Ce(e)&&!re(e)&&!Vd(e)?String(e):e,Ja=(n,e="")=>{var t;return or(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class j_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Et;try{return Et=this,e()}finally{Et=t}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){this._on>0&&--this._on===0&&(Et=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function q_(){return Et}let Re;const Ya=new WeakSet;class Md{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&Et.active&&Et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ya.has(this)&&(Ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ch(this),Ud(this);const e=Re,t=jt;Re=this,jt=!0;try{return this.fn()}finally{Bd(this),Re=e,jt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pl(e);this.deps=this.depsTail=void 0,ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tc(this)&&this.run()}get dirty(){return Tc(this)}}let Ld=0,ei,ti;function Fd(n,e=!1){if(n.flags|=8,e){n.next=ti,ti=n;return}n.next=ei,ei=n}function fl(){Ld++}function dl(){if(--Ld>0)return;if(ti){let e=ti;for(ti=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ei;){let e=ei;for(ei=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Ud(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),pl(r),H_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Tc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($d(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function $d(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===hi)||(n.globalVersion=hi,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Tc(n))))return;n.flags|=2;const e=n.dep,t=Re,r=jt;Re=n,jt=!0;try{Ud(n);const s=n.fn(n._value);(e.version===0||qn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=t,jt=r,Bd(n),n.flags&=-3}}function pl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)pl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function H_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let jt=!0;const jd=[];function vn(){jd.push(jt),jt=!1}function Tn(){const n=jd.pop();jt=n===void 0?!0:n}function ch(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Re;Re=void 0;try{e()}finally{Re=t}}}let hi=0;class W_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!jt||Re===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Re)t=this.activeLink=new W_(Re,this),Re.deps?(t.prevDep=Re.depsTail,Re.depsTail.nextDep=t,Re.depsTail=t):Re.deps=Re.depsTail=t,qd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Re.depsTail,t.nextDep=void 0,Re.depsTail.nextDep=t,Re.depsTail=t,Re.deps===t&&(Re.deps=r)}return t}trigger(e){this.version++,hi++,this.notify(e)}notify(e){fl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{dl()}}}function qd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)qd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ic=new WeakMap,Pr=Symbol(""),wc=Symbol(""),fi=Symbol("");function at(n,e,t){if(jt&&Re){let r=Ic.get(n);r||Ic.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new gl),s.map=r,s.key=t),s.track()}}function pn(n,e,t,r,s,i){const a=Ic.get(n);if(!a){hi++;return}const c=l=>{l&&l.trigger()};if(fl(),e==="clear")a.forEach(c);else{const l=re(n),h=l&&ul(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,E)=>{(E==="length"||E===fi||!or(E)&&E>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(fi)),e){case"add":l?h&&c(a.get("length")):(c(a.get(Pr)),ns(n)&&c(a.get(wc)));break;case"delete":l||(c(a.get(Pr)),ns(n)&&c(a.get(wc)));break;case"set":ns(n)&&c(a.get(Pr));break}}dl()}function Wr(n){const e=ve(n);return e===n?e:(at(e,"iterate",fi),Mt(n)?e:e.map(et))}function ua(n){return at(n=ve(n),"iterate",fi),n}const K_={__proto__:null,[Symbol.iterator](){return Xa(this,Symbol.iterator,et)},concat(...n){return Wr(this).concat(...n.map(e=>re(e)?Wr(e):e))},entries(){return Xa(this,"entries",n=>(n[1]=et(n[1]),n))},every(n,e){return un(this,"every",n,e,void 0,arguments)},filter(n,e){return un(this,"filter",n,e,t=>t.map(et),arguments)},find(n,e){return un(this,"find",n,e,et,arguments)},findIndex(n,e){return un(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return un(this,"findLast",n,e,et,arguments)},findLastIndex(n,e){return un(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return un(this,"forEach",n,e,void 0,arguments)},includes(...n){return Za(this,"includes",n)},indexOf(...n){return Za(this,"indexOf",n)},join(n){return Wr(this).join(n)},lastIndexOf(...n){return Za(this,"lastIndexOf",n)},map(n,e){return un(this,"map",n,e,void 0,arguments)},pop(){return js(this,"pop")},push(...n){return js(this,"push",n)},reduce(n,...e){return lh(this,"reduce",n,e)},reduceRight(n,...e){return lh(this,"reduceRight",n,e)},shift(){return js(this,"shift")},some(n,e){return un(this,"some",n,e,void 0,arguments)},splice(...n){return js(this,"splice",n)},toReversed(){return Wr(this).toReversed()},toSorted(n){return Wr(this).toSorted(n)},toSpliced(...n){return Wr(this).toSpliced(...n)},unshift(...n){return js(this,"unshift",n)},values(){return Xa(this,"values",et)}};function Xa(n,e,t){const r=ua(n),s=r[e]();return r!==n&&!Mt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const z_=Array.prototype;function un(n,e,t,r,s,i){const a=ua(n),c=a!==n&&!Mt(n),l=a[e];if(l!==z_[e]){const p=l.apply(n,i);return c?et(p):p}let h=t;a!==n&&(c?h=function(p,E){return t.call(this,et(p),E,n)}:t.length>2&&(h=function(p,E){return t.call(this,p,E,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function lh(n,e,t,r){const s=ua(n);let i=t;return s!==n&&(Mt(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,et(c),l,n)}),s[e](i,...r)}function Za(n,e,t){const r=ve(n);at(r,"iterate",fi);const s=r[e](...t);return(s===-1||s===!1)&&El(t[0])?(t[0]=ve(t[0]),r[e](...t)):s}function js(n,e,t=[]){vn(),fl();const r=ve(n)[e].apply(n,t);return dl(),Tn(),r}const G_=al("__proto__,__v_isRef,__isVue"),Hd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(or));function Q_(n){or(n)||(n=String(n));const e=ve(this);return at(e,"has",n),e.hasOwnProperty(n)}class Wd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?iy:Qd:i?Gd:zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=K_[t]))return l;if(t==="hasOwnProperty")return Q_}const c=Reflect.get(e,t,ut(e)?e:r);if((or(t)?Hd.has(t):G_(t))||(s||at(e,"get",t),i))return c;if(ut(c)){const l=a&&ul(t)?c:c.value;return s&&Ce(l)?Sc(l):l}return Ce(c)?s?Sc(c):_l(c):c}}class Kd extends Wd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=Yn(i);if(!Mt(r)&&!Yn(r)&&(i=ve(i),r=ve(r)),!re(e)&&ut(i)&&!ut(r))return l||(i.value=r),!0}const a=re(e)&&ul(t)?Number(t)<e.length:Te(e,t),c=Reflect.set(e,t,r,ut(e)?e:s);return e===ve(s)&&(a?qn(r,i)&&pn(e,"set",t,r):pn(e,"add",t,r)),c}deleteProperty(e,t){const r=Te(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&pn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!or(t)||!Hd.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",re(e)?"length":Pr),Reflect.ownKeys(e)}}class J_ extends Wd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Y_=new Kd,X_=new J_,Z_=new Kd(!0);const Ac=n=>n,to=n=>Reflect.getPrototypeOf(n);function ey(n,e,t){return function(...r){const s=this.__v_raw,i=ve(s),a=ns(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?Ac:e?Co:et;return!e&&at(i,"iterate",l?wc:Pr),{next(){const{value:p,done:E}=h.next();return E?{value:p,done:E}:{value:c?[d(p[0]),d(p[1])]:d(p),done:E}},[Symbol.iterator](){return this}}}}function no(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ty(n,e){const t={get(s){const i=this.__v_raw,a=ve(i),c=ve(s);n||(qn(s,c)&&at(a,"get",s),at(a,"get",c));const{has:l}=to(a),h=e?Ac:n?Co:et;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(ve(s),"iterate",Pr),s.size},has(s){const i=this.__v_raw,a=ve(i),c=ve(s);return n||(qn(s,c)&&at(a,"has",s),at(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ve(c),h=e?Ac:n?Co:et;return!n&&at(l,"iterate",Pr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Ye(t,n?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){!e&&!Mt(s)&&!Yn(s)&&(s=ve(s));const i=ve(this);return to(i).has.call(i,s)||(i.add(s),pn(i,"add",s,s)),this},set(s,i){!e&&!Mt(i)&&!Yn(i)&&(i=ve(i));const a=ve(this),{has:c,get:l}=to(a);let h=c.call(a,s);h||(s=ve(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?qn(i,d)&&pn(a,"set",s,i):pn(a,"add",s,i),this},delete(s){const i=ve(this),{has:a,get:c}=to(i);let l=a.call(i,s);l||(s=ve(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&pn(i,"delete",s,void 0),h},clear(){const s=ve(this),i=s.size!==0,a=s.clear();return i&&pn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ey(s,n,e)}),t}function ml(n,e){const t=ty(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Te(t,s)&&s in r?t:r,s,i)}const ny={get:ml(!1,!1)},ry={get:ml(!1,!0)},sy={get:ml(!0,!1)};const zd=new WeakMap,Gd=new WeakMap,Qd=new WeakMap,iy=new WeakMap;function oy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ay(n){return n.__v_skip||!Object.isExtensible(n)?0:oy(k_(n))}function _l(n){return Yn(n)?n:yl(n,!1,Y_,ny,zd)}function cy(n){return yl(n,!1,Z_,ry,Gd)}function Sc(n){return yl(n,!0,X_,sy,Qd)}function yl(n,e,t,r,s){if(!Ce(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=ay(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function ss(n){return Yn(n)?ss(n.__v_raw):!!(n&&n.__v_isReactive)}function Yn(n){return!!(n&&n.__v_isReadonly)}function Mt(n){return!!(n&&n.__v_isShallow)}function El(n){return n?!!n.__v_raw:!1}function ve(n){const e=n&&n.__v_raw;return e?ve(e):n}function ly(n){return!Te(n,"__v_skip")&&Object.isExtensible(n)&&kd(n,"__v_skip",!0),n}const et=n=>Ce(n)?_l(n):n,Co=n=>Ce(n)?Sc(n):n;function ut(n){return n?n.__v_isRef===!0:!1}function Fe(n){return uy(n,!1)}function uy(n,e){return ut(n)?n:new hy(n,e)}class hy{constructor(e,t){this.dep=new gl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ve(e),this._value=t?e:et(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Mt(e)||Yn(e);e=r?e:ve(e),qn(e,t)&&(this._rawValue=e,this._value=r?e:et(e),this.dep.trigger())}}function fy(n){return ut(n)?n.value:n}const dy={get:(n,e,t)=>e==="__v_raw"?n:fy(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ut(s)&&!ut(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Jd(n){return ss(n)?n:new Proxy(n,dy)}class py{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new gl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Fd(this,!0),!0}get value(){const e=this.dep.track();return $d(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gy(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new py(r,s,t)}const ro={},Vo=new WeakMap;let wr;function my(n,e=!1,t=wr){if(t){let r=Vo.get(t);r||Vo.set(t,r=[]),r.push(n)}}function _y(n,e,t=be){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=z=>s?z:Mt(z)||s===!1||s===0?gn(z,1):gn(z);let d,p,E,b,V=!1,N=!1;if(ut(n)?(p=()=>n.value,V=Mt(n)):ss(n)?(p=()=>h(n),V=!0):re(n)?(N=!0,V=n.some(z=>ss(z)||Mt(z)),p=()=>n.map(z=>{if(ut(z))return z.value;if(ss(z))return h(z);if(le(z))return l?l(z,2):z()})):le(n)?e?p=l?()=>l(n,2):n:p=()=>{if(E){vn();try{E()}finally{Tn()}}const z=wr;wr=d;try{return l?l(n,3,[b]):n(b)}finally{wr=z}}:p=en,e&&s){const z=p,se=s===!0?1/0:s;p=()=>gn(z(),se)}const F=q_(),q=()=>{d.stop(),F&&F.active&&ll(F.effects,d)};if(i&&e){const z=e;e=(...se)=>{z(...se),q()}}let W=N?new Array(n.length).fill(ro):ro;const Q=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const se=d.run();if(s||V||(N?se.some((he,A)=>qn(he,W[A])):qn(se,W))){E&&E();const he=wr;wr=d;try{const A=[se,W===ro?void 0:N&&W[0]===ro?[]:W,b];W=se,l?l(e,3,A):e(...A)}finally{wr=he}}}else d.run()};return c&&c(Q),d=new Md(p),d.scheduler=a?()=>a(Q,!1):Q,b=z=>my(z,!1,d),E=d.onStop=()=>{const z=Vo.get(d);if(z){if(l)l(z,4);else for(const se of z)se();Vo.delete(d)}},e?r?Q(!0):W=d.run():a?a(Q.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function gn(n,e=1/0,t){if(e<=0||!Ce(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,ut(n))gn(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)gn(n[r],e,t);else if(Rd(n)||ns(n))n.forEach(r=>{gn(r,e,t)});else if(Vd(n)){for(const r in n)gn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&gn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ci(n,e,t,r){try{return r?n(...r):n()}catch(s){ha(s,e,t)}}function Wt(n,e,t,r){if(le(n)){const s=Ci(n,e,t,r);return s&&Pd(s)&&s.catch(i=>{ha(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Wt(n[i],e,t,r));return s}}function ha(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){vn(),Ci(i,null,10,[n,l,h]),Tn();return}}yy(n,t,s,r,a)}function yy(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const gt=[];let Yt=-1;const is=[];let Ln=null,zr=0;const Yd=Promise.resolve();let Do=null;function bc(n){const e=Do||Yd;return n?e.then(this?n.bind(this):n):e}function Ey(n){let e=Yt+1,t=gt.length;for(;e<t;){const r=e+t>>>1,s=gt[r],i=di(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function vl(n){if(!(n.flags&1)){const e=di(n),t=gt[gt.length-1];!t||!(n.flags&2)&&e>=di(t)?gt.push(n):gt.splice(Ey(e),0,n),n.flags|=1,Xd()}}function Xd(){Do||(Do=Yd.then(ep))}function vy(n){re(n)?is.push(...n):Ln&&n.id===-1?Ln.splice(zr+1,0,n):n.flags&1||(is.push(n),n.flags|=1),Xd()}function uh(n,e,t=Yt+1){for(;t<gt.length;t++){const r=gt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;gt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Zd(n){if(is.length){const e=[...new Set(is)].sort((t,r)=>di(t)-di(r));if(is.length=0,Ln){Ln.push(...e);return}for(Ln=e,zr=0;zr<Ln.length;zr++){const t=Ln[zr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ln=null,zr=0}}const di=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ep(n){try{for(Yt=0;Yt<gt.length;Yt++){const e=gt[Yt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yt<gt.length;Yt++){const e=gt[Yt];e&&(e.flags&=-2)}Yt=-1,gt.length=0,Zd(),Do=null,(gt.length||is.length)&&ep()}}let xt=null,tp=null;function ko(n){const e=xt;return xt=n,tp=n&&n.type.__scopeId||null,e}function fo(n,e=xt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Mo(-1);const i=ko(e);let a;try{a=n(...s)}finally{ko(i),r._d&&Mo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function No(n,e){if(xt===null)return n;const t=ma(xt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=be]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&gn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function Er(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(vn(),Wt(l,t,8,[n.el,c,n,e]),Tn())}}const Ty=Symbol("_vte"),np=n=>n.__isTeleport,dn=Symbol("_leaveCb"),so=Symbol("_enterCb");function Iy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tl(()=>{n.isMounted=!0}),hp(()=>{n.isUnmounting=!0}),n}const Dt=[Function,Array],rp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},sp=n=>{const e=n.subTree;return e.component?sp(e.component):e},wy={name:"BaseTransition",props:rp,setup(n,{slots:e}){const t=Np(),r=Iy();return()=>{const s=e.default&&ap(e.default(),!0);if(!s||!s.length)return;const i=ip(s),a=ve(n),{mode:c}=a;if(r.isLeaving)return ec(i);const l=hh(i);if(!l)return ec(i);let h=Rc(l,a,r,t,p=>h=p);l.type!==mt&&pi(l,h);let d=t.subTree&&hh(t.subTree);if(d&&d.type!==mt&&!br(d,l)&&sp(t).type!==mt){let p=Rc(d,a,r,t);if(pi(d,p),c==="out-in"&&l.type!==mt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,d=void 0},ec(i);c==="in-out"&&l.type!==mt?p.delayLeave=(E,b,V)=>{const N=op(r,d);N[String(d.key)]=d,E[dn]=()=>{b(),E[dn]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{V(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function ip(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==mt){e=t;break}}return e}const Ay=wy;function op(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Rc(n,e,t,r,s){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:E,onLeave:b,onAfterLeave:V,onLeaveCancelled:N,onBeforeAppear:F,onAppear:q,onAfterAppear:W,onAppearCancelled:Q}=e,z=String(n.key),se=op(t,n),he=(m,w)=>{m&&Wt(m,r,9,w)},A=(m,w)=>{const I=w[1];he(m,w),re(m)?m.every(T=>T.length<=1)&&I():m.length<=1&&I()},y={mode:a,persisted:c,beforeEnter(m){let w=l;if(!t.isMounted)if(i)w=F||l;else return;m[dn]&&m[dn](!0);const I=se[z];I&&br(n,I)&&I.el[dn]&&I.el[dn](),he(w,[m])},enter(m){let w=h,I=d,T=p;if(!t.isMounted)if(i)w=q||h,I=W||d,T=Q||p;else return;let _=!1;const me=m[so]=je=>{_||(_=!0,je?he(T,[m]):he(I,[m]),y.delayedLeave&&y.delayedLeave(),m[so]=void 0)};w?A(w,[m,me]):me()},leave(m,w){const I=String(n.key);if(m[so]&&m[so](!0),t.isUnmounting)return w();he(E,[m]);let T=!1;const _=m[dn]=me=>{T||(T=!0,w(),me?he(N,[m]):he(V,[m]),m[dn]=void 0,se[I]===n&&delete se[I])};se[I]=n,b?A(b,[m,_]):_()},clone(m){const w=Rc(m,e,t,r,s);return s&&s(w),w}};return y}function ec(n){if(fa(n))return n=Xn(n),n.children=null,n}function hh(n){if(!fa(n))return np(n.type)&&n.children?ip(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&le(t.default))return t.default()}}function pi(n,e){n.shapeFlag&6&&n.component?(n.transition=e,pi(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ap(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let a=n[i];const c=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===Ut?(a.patchFlag&128&&s++,r=r.concat(ap(a.children,e,c))):(e||a.type!==mt)&&r.push(c!=null?Xn(a,{key:c}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function cp(n,e){return le(n)?Ye({name:n.name},e,{setup:n}):n}function lp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Oo=new WeakMap;function ni(n,e,t,r,s=!1){if(re(n)){n.forEach((V,N)=>ni(V,e&&(re(e)?e[N]:e),t,r,s));return}if(ri(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ni(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ma(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===be?c.refs={}:c.refs,p=c.setupState,E=ve(p),b=p===be?bd:V=>Te(E,V);if(h!=null&&h!==l){if(fh(e),Me(h))d[h]=null,b(h)&&(p[h]=null);else if(ut(h)){h.value=null;const V=e;V.k&&(d[V.k]=null)}}if(le(l))Ci(l,c,12,[a,d]);else{const V=Me(l),N=ut(l);if(V||N){const F=()=>{if(n.f){const q=V?b(l)?p[l]:d[l]:l.value;if(s)re(q)&&ll(q,i);else if(re(q))q.includes(i)||q.push(i);else if(V)d[l]=[i],b(l)&&(p[l]=d[l]);else{const W=[i];l.value=W,n.k&&(d[n.k]=W)}}else V?(d[l]=a,b(l)&&(p[l]=a)):N&&(l.value=a,n.k&&(d[n.k]=a))};if(a){const q=()=>{F(),Oo.delete(n)};q.id=-1,Oo.set(n,q),bt(q,t)}else fh(n),F()}}}function fh(n){const e=Oo.get(n);e&&(e.flags|=8,Oo.delete(n))}ca().requestIdleCallback;ca().cancelIdleCallback;const ri=n=>!!n.type.__asyncLoader,fa=n=>n.type.__isKeepAlive;function Sy(n,e){up(n,"a",e)}function by(n,e){up(n,"da",e)}function up(n,e,t=_t){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(da(e,r,t),t){let s=t.parent;for(;s&&s.parent;)fa(s.parent.vnode)&&Ry(r,e,t,s),s=s.parent}}function Ry(n,e,t,r){const s=da(e,n,r,!0);Il(()=>{ll(r[e],s)},t)}function da(n,e,t=_t,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{vn();const c=Vi(t),l=Wt(e,t,n,a);return c(),Tn(),l});return r?s.unshift(i):s.push(i),i}}const bn=n=>(e,t=_t)=>{(!mi||n==="sp")&&da(n,(...r)=>e(...r),t)},Py=bn("bm"),Tl=bn("m"),Cy=bn("bu"),Vy=bn("u"),hp=bn("bum"),Il=bn("um"),Dy=bn("sp"),ky=bn("rtg"),Ny=bn("rtc");function Oy(n,e=_t){da("ec",n,e)}const xy=Symbol.for("v-ndc");function My(n,e,t,r){let s;const i=t,a=re(n);if(a||Me(n)){const c=a&&ss(n);let l=!1,h=!1;c&&(l=!Mt(n),h=Yn(n),n=ua(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?Co(et(n[d])):et(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}const Pc=n=>n?Op(n)?ma(n):Pc(n.parent):null,si=Ye(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pc(n.parent),$root:n=>Pc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>dp(n),$forceUpdate:n=>n.f||(n.f=()=>{vl(n.update)}),$nextTick:n=>n.n||(n.n=bc.bind(n.proxy)),$watch:n=>sE.bind(n)}),tc=(n,e)=>n!==be&&!n.__isScriptSetup&&Te(n,e),Ly={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;let h;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(tc(r,e))return a[e]=1,r[e];if(s!==be&&Te(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&Te(h,e))return a[e]=3,i[e];if(t!==be&&Te(t,e))return a[e]=4,t[e];Cc&&(a[e]=0)}}const d=si[e];let p,E;if(d)return e==="$attrs"&&at(n.attrs,"get",""),d(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==be&&Te(t,e))return a[e]=4,t[e];if(E=l.config.globalProperties,Te(E,e))return E[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return tc(s,e)?(s[e]=t,!0):r!==be&&Te(r,e)?(r[e]=t,!0):Te(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i,type:a}},c){let l,h;return!!(t[c]||n!==be&&c[0]!=="$"&&Te(n,c)||tc(e,c)||(l=i[0])&&Te(l,c)||Te(r,c)||Te(si,c)||Te(s.config.globalProperties,c)||(h=a.__cssModules)&&h[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Te(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function dh(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Cc=!0;function Fy(n){const e=dp(n),t=n.proxy,r=n.ctx;Cc=!1,e.beforeCreate&&ph(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:E,beforeUpdate:b,updated:V,activated:N,deactivated:F,beforeDestroy:q,beforeUnmount:W,destroyed:Q,unmounted:z,render:se,renderTracked:he,renderTriggered:A,errorCaptured:y,serverPrefetch:m,expose:w,inheritAttrs:I,components:T,directives:_,filters:me}=e;if(h&&Uy(h,r,null),a)for(const Ae in a){const ye=a[Ae];le(ye)&&(r[Ae]=ye.bind(t))}if(s){const Ae=s.call(t,t);Ce(Ae)&&(n.data=_l(Ae))}if(Cc=!0,i)for(const Ae in i){const ye=i[Ae],Ke=le(ye)?ye.bind(t,t):le(ye.get)?ye.get.bind(t,t):en,ln=!le(ye)&&le(ye.set)?ye.set.bind(t):en,Ct=Gr({get:Ke,set:ln});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:ft=>Ct.value=ft})}if(c)for(const Ae in c)fp(c[Ae],r,t,Ae);if(l){const Ae=le(l)?l.call(t):l;Reflect.ownKeys(Ae).forEach(ye=>{Wy(ye,Ae[ye])})}d&&ph(d,n,"c");function Ne(Ae,ye){re(ye)?ye.forEach(Ke=>Ae(Ke.bind(t))):ye&&Ae(ye.bind(t))}if(Ne(Py,p),Ne(Tl,E),Ne(Cy,b),Ne(Vy,V),Ne(Sy,N),Ne(by,F),Ne(Oy,y),Ne(Ny,he),Ne(ky,A),Ne(hp,W),Ne(Il,z),Ne(Dy,m),re(w))if(w.length){const Ae=n.exposed||(n.exposed={});w.forEach(ye=>{Object.defineProperty(Ae,ye,{get:()=>t[ye],set:Ke=>t[ye]=Ke,enumerable:!0})})}else n.exposed||(n.exposed={});se&&n.render===en&&(n.render=se),I!=null&&(n.inheritAttrs=I),T&&(n.components=T),_&&(n.directives=_),m&&lp(n)}function Uy(n,e,t=en){re(n)&&(n=Vc(n));for(const r in n){const s=n[r];let i;Ce(s)?"default"in s?i=po(s.from||r,s.default,!0):i=po(s.from||r):i=po(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ph(n,e,t){Wt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function fp(n,e,t,r){let s=r.includes(".")?bp(t,r):()=>t[r];if(Me(n)){const i=e[n];le(i)&&go(s,i)}else if(le(n))go(s,n.bind(t));else if(Ce(n))if(re(n))n.forEach(i=>fp(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&go(s,i,n)}}function dp(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>xo(l,h,a,!0)),xo(l,e,a)),Ce(e)&&i.set(e,l),l}function xo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&xo(n,i,t,!0),s&&s.forEach(a=>xo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=By[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const By={data:gh,props:mh,emits:mh,methods:Ws,computed:Ws,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Ws,directives:Ws,watch:jy,provide:gh,inject:$y};function gh(n,e){return e?n?function(){return Ye(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function $y(n,e){return Ws(Vc(n),Vc(e))}function Vc(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ws(n,e){return n?Ye(Object.create(null),n,e):e}function mh(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:Ye(Object.create(null),dh(n),dh(e??{})):e}function jy(n,e){if(!n)return e;if(!e)return n;const t=Ye(Object.create(null),n);for(const r in e)t[r]=pt(n[r],e[r]);return t}function pp(){return{app:null,config:{isNativeTag:bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qy=0;function Hy(n,e){return function(r,s=null){le(r)||(r=Ye({},r)),s!=null&&!Ce(s)&&(s=null);const i=pp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:qy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bE,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,E){if(!l){const b=h._ceVNode||lt(r,s);return b.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),n(b,d,E),l=!0,h._container=d,d.__vue_app__=h,ma(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Wt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=os;os=h;try{return d()}finally{os=p}}};return h}}let os=null;function Wy(n,e){if(_t){let t=_t.provides;const r=_t.parent&&_t.parent.provides;r===t&&(t=_t.provides=Object.create(r)),t[n]=e}}function po(n,e,t=!1){const r=Np();if(r||os){let s=os?os._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}const gp={},mp=()=>Object.create(gp),_p=n=>Object.getPrototypeOf(n)===gp;function Ky(n,e,t,r=!1){const s={},i=mp();n.propsDefaults=Object.create(null),yp(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:cy(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function zy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=ve(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let E=d[p];if(pa(n.emitsOptions,E))continue;const b=e[E];if(l)if(Te(i,E))b!==i[E]&&(i[E]=b,h=!0);else{const V=Jn(E);s[V]=Dc(l,c,V,b,n,!1)}else b!==i[E]&&(i[E]=b,h=!0)}}}else{yp(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Te(e,p)&&((d=ar(p))===p||!Te(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=Dc(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Te(e,p))&&(delete i[p],h=!0)}h&&pn(n.attrs,"set","")}function yp(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(Zs(l))continue;const h=e[l];let d;s&&Te(s,d=Jn(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:pa(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ve(t),h=c||be;for(let d=0;d<i.length;d++){const p=i[d];t[p]=Dc(s,l,p,h[p],n,!Te(h,p))}}return a}function Dc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=Vi(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===ar(t))&&(r=!0))}return r}const Gy=new WeakMap;function Ep(n,e,t=!1){const r=t?Gy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!le(n)){const d=p=>{l=!0;const[E,b]=Ep(p,e,!0);Ye(a,E),b&&c.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Ce(n)&&r.set(n,ts),ts;if(re(i))for(let d=0;d<i.length;d++){const p=Jn(i[d]);_h(p)&&(a[p]=be)}else if(i)for(const d in i){const p=Jn(d);if(_h(p)){const E=i[d],b=a[p]=re(E)||le(E)?{type:E}:Ye({},E),V=b.type;let N=!1,F=!0;if(re(V))for(let q=0;q<V.length;++q){const W=V[q],Q=le(W)&&W.name;if(Q==="Boolean"){N=!0;break}else Q==="String"&&(F=!1)}else N=le(V)&&V.name==="Boolean";b[0]=N,b[1]=F,(N||Te(b,"default"))&&c.push(p)}}const h=[a,c];return Ce(n)&&r.set(n,h),h}function _h(n){return n[0]!=="$"&&!Zs(n)}const wl=n=>n==="_"||n==="_ctx"||n==="$stable",Al=n=>re(n)?n.map(Zt):[Zt(n)],Qy=(n,e,t)=>{if(e._n)return e;const r=fo((...s)=>Al(e(...s)),t);return r._c=!1,r},vp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(wl(s))continue;const i=n[s];if(le(i))e[s]=Qy(s,i,r);else if(i!=null){const a=Al(i);e[s]=()=>a}}},Tp=(n,e)=>{const t=Al(e);n.slots.default=()=>t},Ip=(n,e,t)=>{for(const r in e)(t||!wl(r))&&(n[r]=e[r])},Jy=(n,e,t)=>{const r=n.slots=mp();if(n.vnode.shapeFlag&32){const s=e._;s?(Ip(r,e,t),t&&kd(r,"_",s,!0)):vp(e,r)}else e&&Tp(n,e)},Yy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=be;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Ip(s,e,t):(i=!e.$stable,vp(e,s)),a=e}else e&&(Tp(n,e),a={default:1});if(i)for(const c in s)!wl(c)&&a[c]==null&&delete s[c]},bt=fE;function Xy(n){return Zy(n)}function Zy(n,e){const t=ca();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:E,setScopeId:b=en,insertStaticContent:V}=n,N=(v,S,C,B=null,O=null,x=null,j=void 0,U=null,L=!!S.dynamicChildren)=>{if(v===S)return;v&&!br(v,S)&&(B=It(v),ft(v,O,x,!0),v=null),S.patchFlag===-2&&(L=!1,S.dynamicChildren=null);const{type:M,ref:X,shapeFlag:H}=S;switch(M){case ga:F(v,S,C,B);break;case mt:q(v,S,C,B);break;case rc:v==null&&W(S,C,B,j);break;case Ut:T(v,S,C,B,O,x,j,U,L);break;default:H&1?se(v,S,C,B,O,x,j,U,L):H&6?_(v,S,C,B,O,x,j,U,L):(H&64||H&128)&&M.process(v,S,C,B,O,x,j,U,L,oe)}X!=null&&O?ni(X,v&&v.ref,x,S||v,!S):X==null&&v&&v.ref!=null&&ni(v.ref,null,x,v,!0)},F=(v,S,C,B)=>{if(v==null)r(S.el=c(S.children),C,B);else{const O=S.el=v.el;S.children!==v.children&&h(O,S.children)}},q=(v,S,C,B)=>{v==null?r(S.el=l(S.children||""),C,B):S.el=v.el},W=(v,S,C,B)=>{[v.el,v.anchor]=V(v.children,S,C,B,v.el,v.anchor)},Q=({el:v,anchor:S},C,B)=>{let O;for(;v&&v!==S;)O=E(v),r(v,C,B),v=O;r(S,C,B)},z=({el:v,anchor:S})=>{let C;for(;v&&v!==S;)C=E(v),s(v),v=C;s(S)},se=(v,S,C,B,O,x,j,U,L)=>{if(S.type==="svg"?j="svg":S.type==="math"&&(j="mathml"),v==null)he(S,C,B,O,x,j,U,L);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),m(v,S,O,x,j,U,L)}finally{M&&M._endPatch()}}},he=(v,S,C,B,O,x,j,U)=>{let L,M;const{props:X,shapeFlag:H,transition:Y,dirs:Z}=v;if(L=v.el=a(v.type,x,X&&X.is,X),H&8?d(L,v.children):H&16&&y(v.children,L,null,B,O,nc(v,x),j,U),Z&&Er(v,null,B,"created"),A(L,v,v.scopeId,j,B),X){for(const we in X)we!=="value"&&!Zs(we)&&i(L,we,null,X[we],x,B);"value"in X&&i(L,"value",null,X.value,x),(M=X.onVnodeBeforeMount)&&Jt(M,B,v)}Z&&Er(v,null,B,"beforeMount");const fe=eE(O,Y);fe&&Y.beforeEnter(L),r(L,S,C),((M=X&&X.onVnodeMounted)||fe||Z)&&bt(()=>{M&&Jt(M,B,v),fe&&Y.enter(L),Z&&Er(v,null,B,"mounted")},O)},A=(v,S,C,B,O)=>{if(C&&b(v,C),B)for(let x=0;x<B.length;x++)b(v,B[x]);if(O){let x=O.subTree;if(S===x||Pp(x.type)&&(x.ssContent===S||x.ssFallback===S)){const j=O.vnode;A(v,j,j.scopeId,j.slotScopeIds,O.parent)}}},y=(v,S,C,B,O,x,j,U,L=0)=>{for(let M=L;M<v.length;M++){const X=v[M]=U?Fn(v[M]):Zt(v[M]);N(null,X,S,C,B,O,x,j,U)}},m=(v,S,C,B,O,x,j)=>{const U=S.el=v.el;let{patchFlag:L,dynamicChildren:M,dirs:X}=S;L|=v.patchFlag&16;const H=v.props||be,Y=S.props||be;let Z;if(C&&vr(C,!1),(Z=Y.onVnodeBeforeUpdate)&&Jt(Z,C,S,v),X&&Er(S,v,C,"beforeUpdate"),C&&vr(C,!0),(H.innerHTML&&Y.innerHTML==null||H.textContent&&Y.textContent==null)&&d(U,""),M?w(v.dynamicChildren,M,U,C,B,nc(S,O),x):j||ye(v,S,U,null,C,B,nc(S,O),x,!1),L>0){if(L&16)I(U,H,Y,C,O);else if(L&2&&H.class!==Y.class&&i(U,"class",null,Y.class,O),L&4&&i(U,"style",H.style,Y.style,O),L&8){const fe=S.dynamicProps;for(let we=0;we<fe.length;we++){const Ee=fe[we],rt=H[Ee],st=Y[Ee];(st!==rt||Ee==="value")&&i(U,Ee,rt,st,O,C)}}L&1&&v.children!==S.children&&d(U,S.children)}else!j&&M==null&&I(U,H,Y,C,O);((Z=Y.onVnodeUpdated)||X)&&bt(()=>{Z&&Jt(Z,C,S,v),X&&Er(S,v,C,"updated")},B)},w=(v,S,C,B,O,x,j)=>{for(let U=0;U<S.length;U++){const L=v[U],M=S[U],X=L.el&&(L.type===Ut||!br(L,M)||L.shapeFlag&198)?p(L.el):C;N(L,M,X,null,B,O,x,j,!0)}},I=(v,S,C,B,O)=>{if(S!==C){if(S!==be)for(const x in S)!Zs(x)&&!(x in C)&&i(v,x,S[x],null,O,B);for(const x in C){if(Zs(x))continue;const j=C[x],U=S[x];j!==U&&x!=="value"&&i(v,x,U,j,O,B)}"value"in C&&i(v,"value",S.value,C.value,O)}},T=(v,S,C,B,O,x,j,U,L)=>{const M=S.el=v?v.el:c(""),X=S.anchor=v?v.anchor:c("");let{patchFlag:H,dynamicChildren:Y,slotScopeIds:Z}=S;Z&&(U=U?U.concat(Z):Z),v==null?(r(M,C,B),r(X,C,B),y(S.children||[],C,X,O,x,j,U,L)):H>0&&H&64&&Y&&v.dynamicChildren?(w(v.dynamicChildren,Y,C,O,x,j,U),(S.key!=null||O&&S===O.subTree)&&wp(v,S,!0)):ye(v,S,C,X,O,x,j,U,L)},_=(v,S,C,B,O,x,j,U,L)=>{S.slotScopeIds=U,v==null?S.shapeFlag&512?O.ctx.activate(S,C,B,j,L):me(S,C,B,O,x,j,L):je(v,S,L)},me=(v,S,C,B,O,x,j)=>{const U=v.component=EE(v,B,O);if(fa(v)&&(U.ctx.renderer=oe),vE(U,!1,j),U.asyncDep){if(O&&O.registerDep(U,Ne,j),!v.el){const L=U.subTree=lt(mt);q(null,L,S,C),v.placeholder=L.el}}else Ne(U,v,S,C,O,x,j)},je=(v,S,C)=>{const B=S.component=v.component;if(uE(v,S,C))if(B.asyncDep&&!B.asyncResolved){Ae(B,S,C);return}else B.next=S,B.update();else S.el=v.el,B.vnode=S},Ne=(v,S,C,B,O,x,j)=>{const U=()=>{if(v.isMounted){let{next:H,bu:Y,u:Z,parent:fe,vnode:we}=v;{const At=Ap(v);if(At){H&&(H.el=we.el,Ae(v,H,j)),At.asyncDep.then(()=>{v.isUnmounted||U()});return}}let Ee=H,rt;vr(v,!1),H?(H.el=we.el,Ae(v,H,j)):H=we,Y&&ho(Y),(rt=H.props&&H.props.onVnodeBeforeUpdate)&&Jt(rt,fe,H,we),vr(v,!0);const st=Eh(v),wt=v.subTree;v.subTree=st,N(wt,st,p(wt.el),It(wt),v,O,x),H.el=st.el,Ee===null&&hE(v,st.el),Z&&bt(Z,O),(rt=H.props&&H.props.onVnodeUpdated)&&bt(()=>Jt(rt,fe,H,we),O)}else{let H;const{el:Y,props:Z}=S,{bm:fe,m:we,parent:Ee,root:rt,type:st}=v,wt=ri(S);vr(v,!1),fe&&ho(fe),!wt&&(H=Z&&Z.onVnodeBeforeMount)&&Jt(H,Ee,S),vr(v,!0);{rt.ce&&rt.ce._def.shadowRoot!==!1&&rt.ce._injectChildStyle(st);const At=v.subTree=Eh(v);N(null,At,C,B,v,O,x),S.el=At.el}if(we&&bt(we,O),!wt&&(H=Z&&Z.onVnodeMounted)){const At=S;bt(()=>Jt(H,Ee,At),O)}(S.shapeFlag&256||Ee&&ri(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&v.a&&bt(v.a,O),v.isMounted=!0,S=C=B=null}};v.scope.on();const L=v.effect=new Md(U);v.scope.off();const M=v.update=L.run.bind(L),X=v.job=L.runIfDirty.bind(L);X.i=v,X.id=v.uid,L.scheduler=()=>vl(X),vr(v,!0),M()},Ae=(v,S,C)=>{S.component=v;const B=v.vnode.props;v.vnode=S,v.next=null,zy(v,S.props,B,C),Yy(v,S.children,C),vn(),uh(v),Tn()},ye=(v,S,C,B,O,x,j,U,L=!1)=>{const M=v&&v.children,X=v?v.shapeFlag:0,H=S.children,{patchFlag:Y,shapeFlag:Z}=S;if(Y>0){if(Y&128){ln(M,H,C,B,O,x,j,U,L);return}else if(Y&256){Ke(M,H,C,B,O,x,j,U,L);return}}Z&8?(X&16&&Lt(M,O,x),H!==M&&d(C,H)):X&16?Z&16?ln(M,H,C,B,O,x,j,U,L):Lt(M,O,x,!0):(X&8&&d(C,""),Z&16&&y(H,C,B,O,x,j,U,L))},Ke=(v,S,C,B,O,x,j,U,L)=>{v=v||ts,S=S||ts;const M=v.length,X=S.length,H=Math.min(M,X);let Y;for(Y=0;Y<H;Y++){const Z=S[Y]=L?Fn(S[Y]):Zt(S[Y]);N(v[Y],Z,C,null,O,x,j,U,L)}M>X?Lt(v,O,x,!0,!1,H):y(S,C,B,O,x,j,U,L,H)},ln=(v,S,C,B,O,x,j,U,L)=>{let M=0;const X=S.length;let H=v.length-1,Y=X-1;for(;M<=H&&M<=Y;){const Z=v[M],fe=S[M]=L?Fn(S[M]):Zt(S[M]);if(br(Z,fe))N(Z,fe,C,null,O,x,j,U,L);else break;M++}for(;M<=H&&M<=Y;){const Z=v[H],fe=S[Y]=L?Fn(S[Y]):Zt(S[Y]);if(br(Z,fe))N(Z,fe,C,null,O,x,j,U,L);else break;H--,Y--}if(M>H){if(M<=Y){const Z=Y+1,fe=Z<X?S[Z].el:B;for(;M<=Y;)N(null,S[M]=L?Fn(S[M]):Zt(S[M]),C,fe,O,x,j,U,L),M++}}else if(M>Y)for(;M<=H;)ft(v[M],O,x,!0),M++;else{const Z=M,fe=M,we=new Map;for(M=fe;M<=Y;M++){const Xe=S[M]=L?Fn(S[M]):Zt(S[M]);Xe.key!=null&&we.set(Xe.key,M)}let Ee,rt=0;const st=Y-fe+1;let wt=!1,At=0;const Ft=new Array(st);for(M=0;M<st;M++)Ft[M]=0;for(M=Z;M<=H;M++){const Xe=v[M];if(rt>=st){ft(Xe,O,x,!0);continue}let Ge;if(Xe.key!=null)Ge=we.get(Xe.key);else for(Ee=fe;Ee<=Y;Ee++)if(Ft[Ee-fe]===0&&br(Xe,S[Ee])){Ge=Ee;break}Ge===void 0?ft(Xe,O,x,!0):(Ft[Ge-fe]=M+1,Ge>=At?At=Ge:wt=!0,N(Xe,S[Ge],C,null,O,x,j,U,L),rt++)}const $r=wt?tE(Ft):ts;for(Ee=$r.length-1,M=st-1;M>=0;M--){const Xe=fe+M,Ge=S[Xe],Rs=S[Xe+1],pr=Xe+1<X?Rs.el||Rs.placeholder:B;Ft[M]===0?N(null,Ge,C,pr,O,x,j,U,L):wt&&(Ee<0||M!==$r[Ee]?Ct(Ge,C,pr,2):Ee--)}}},Ct=(v,S,C,B,O=null)=>{const{el:x,type:j,transition:U,children:L,shapeFlag:M}=v;if(M&6){Ct(v.component.subTree,S,C,B);return}if(M&128){v.suspense.move(S,C,B);return}if(M&64){j.move(v,S,C,oe);return}if(j===Ut){r(x,S,C);for(let H=0;H<L.length;H++)Ct(L[H],S,C,B);r(v.anchor,S,C);return}if(j===rc){Q(v,S,C);return}if(B!==2&&M&1&&U)if(B===0)U.beforeEnter(x),r(x,S,C),bt(()=>U.enter(x),O);else{const{leave:H,delayLeave:Y,afterLeave:Z}=U,fe=()=>{v.ctx.isUnmounted?s(x):r(x,S,C)},we=()=>{x._isLeaving&&x[dn](!0),H(x,()=>{fe(),Z&&Z()})};Y?Y(x,fe,we):we()}else r(x,S,C)},ft=(v,S,C,B=!1,O=!1)=>{const{type:x,props:j,ref:U,children:L,dynamicChildren:M,shapeFlag:X,patchFlag:H,dirs:Y,cacheIndex:Z}=v;if(H===-2&&(O=!1),U!=null&&(vn(),ni(U,null,C,v,!0),Tn()),Z!=null&&(S.renderCache[Z]=void 0),X&256){S.ctx.deactivate(v);return}const fe=X&1&&Y,we=!ri(v);let Ee;if(we&&(Ee=j&&j.onVnodeBeforeUnmount)&&Jt(Ee,S,v),X&6)dr(v.component,C,B);else{if(X&128){v.suspense.unmount(C,B);return}fe&&Er(v,null,S,"beforeUnmount"),X&64?v.type.remove(v,S,C,oe,B):M&&!M.hasOnce&&(x!==Ut||H>0&&H&64)?Lt(M,S,C,!1,!0):(x===Ut&&H&384||!O&&X&16)&&Lt(L,S,C),B&&fr(v)}(we&&(Ee=j&&j.onVnodeUnmounted)||fe)&&bt(()=>{Ee&&Jt(Ee,S,v),fe&&Er(v,null,S,"unmounted")},C)},fr=v=>{const{type:S,el:C,anchor:B,transition:O}=v;if(S===Ut){Pn(C,B);return}if(S===rc){z(v);return}const x=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:j,delayLeave:U}=O,L=()=>j(C,x);U?U(v.el,x,L):L()}else x()},Pn=(v,S)=>{let C;for(;v!==S;)C=E(v),s(v),v=C;s(S)},dr=(v,S,C)=>{const{bum:B,scope:O,job:x,subTree:j,um:U,m:L,a:M}=v;yh(L),yh(M),B&&ho(B),O.stop(),x&&(x.flags|=8,ft(j,v,S,C)),U&&bt(U,S),bt(()=>{v.isUnmounted=!0},S)},Lt=(v,S,C,B=!1,O=!1,x=0)=>{for(let j=x;j<v.length;j++)ft(v[j],S,C,B,O)},It=v=>{if(v.shapeFlag&6)return It(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const S=E(v.anchor||v.el),C=S&&S[Ty];return C?E(C):S};let Vt=!1;const ie=(v,S,C)=>{v==null?S._vnode&&ft(S._vnode,null,null,!0):N(S._vnode||null,v,S,null,null,null,C),S._vnode=v,Vt||(Vt=!0,uh(),Zd(),Vt=!1)},oe={p:N,um:ft,m:Ct,r:fr,mt:me,mc:y,pc:ye,pbc:w,n:It,o:n};return{render:ie,hydrate:void 0,createApp:Hy(ie)}}function nc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function vr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function eE(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function wp(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Fn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&wp(a,c)),c.type===ga&&c.patchFlag!==-1&&(c.el=a.el),c.type===mt&&!c.el&&(c.el=a.el)}}function tE(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Ap(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ap(e)}function yh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const nE=Symbol.for("v-scx"),rE=()=>po(nE);function go(n,e,t){return Sp(n,e,t)}function Sp(n,e,t=be){const{immediate:r,deep:s,flush:i,once:a}=t,c=Ye({},t),l=e&&r||!e&&i!=="post";let h;if(mi){if(i==="sync"){const b=rE();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=en,b.resume=en,b.pause=en,b}}const d=_t;c.call=(b,V,N)=>Wt(b,d,V,N);let p=!1;i==="post"?c.scheduler=b=>{bt(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,V)=>{V?b():vl(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const E=_y(n,e,c);return mi&&(h?h.push(E):l&&E()),E}function sE(n,e,t){const r=this.proxy,s=Me(n)?n.includes(".")?bp(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=Vi(this),c=Sp(s,i.bind(r),t);return a(),c}function bp(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const iE=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Jn(e)}Modifiers`]||n[`${ar(e)}Modifiers`];function oE(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||be;let s=t;const i=e.startsWith("update:"),a=i&&iE(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Me(d)?d.trim():d)),a.number&&(s=t.map(hl)));let c,l=r[c=Qa(e)]||r[c=Qa(Jn(e))];!l&&i&&(l=r[c=Qa(ar(e))]),l&&Wt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Wt(h,n,6,s)}}const aE=new WeakMap;function Rp(n,e,t=!1){const r=t?aE:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!le(n)){const l=h=>{const d=Rp(h,e,!0);d&&(c=!0,Ye(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Ce(n)&&r.set(n,null),null):(re(i)?i.forEach(l=>a[l]=null):Ye(a,i),Ce(n)&&r.set(n,a),a)}function pa(n,e){return!n||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(n,e[0].toLowerCase()+e.slice(1))||Te(n,ar(e))||Te(n,e))}function Eh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:E,setupState:b,ctx:V,inheritAttrs:N}=n,F=ko(n);let q,W;try{if(t.shapeFlag&4){const z=s||r,se=z;q=Zt(h.call(se,z,d,p,b,E,V)),W=c}else{const z=e;q=Zt(z.length>1?z(p,{attrs:c,slots:a,emit:l}):z(p,null)),W=e.props?c:cE(c)}}catch(z){ii.length=0,ha(z,n,1),q=lt(mt)}let Q=q;if(W&&N!==!1){const z=Object.keys(W),{shapeFlag:se}=Q;z.length&&se&7&&(i&&z.some(cl)&&(W=lE(W,i)),Q=Xn(Q,W,!1,!0))}return t.dirs&&(Q=Xn(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&pi(Q,t.transition),q=Q,ko(F),q}const cE=n=>{let e;for(const t in n)(t==="class"||t==="style"||ia(t))&&((e||(e={}))[t]=n[t]);return e},lE=(n,e)=>{const t={};for(const r in n)(!cl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function uE(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?vh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const E=d[p];if(a[E]!==r[E]&&!pa(h,E))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?vh(r,a,h):!0:!!a;return!1}function vh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!pa(t,i))return!0}return!1}function hE({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Pp=n=>n.__isSuspense;function fE(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):vy(n)}const Ut=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),rc=Symbol.for("v-stc"),ii=[];let Rt=null;function yt(n=!1){ii.push(Rt=n?null:[])}function dE(){ii.pop(),Rt=ii[ii.length-1]||null}let gi=1;function Mo(n,e=!1){gi+=n,n<0&&Rt&&e&&(Rt.hasOnce=!0)}function Cp(n){return n.dynamicChildren=gi>0?Rt||ts:null,dE(),gi>0&&Rt&&Rt.push(n),n}function kt(n,e,t,r,s,i){return Cp(ee(n,e,t,r,s,i,!0))}function Vp(n,e,t,r,s){return Cp(lt(n,e,t,r,s,!0))}function Lo(n){return n?n.__v_isVNode===!0:!1}function br(n,e){return n.type===e.type&&n.key===e.key}const Dp=({key:n})=>n??null,mo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||ut(n)||le(n)?{i:xt,r:n,k:e,f:!!t}:n:null);function ee(n,e=null,t=null,r=0,s=null,i=n===Ut?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Dp(e),ref:e&&mo(e),scopeId:tp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xt};return c?(Sl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=Me(t)?8:16),gi>0&&!a&&Rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rt.push(l),l}const lt=pE;function pE(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===xy)&&(n=mt),Lo(n)){const c=Xn(n,e,!0);return t&&Sl(c,t),gi>0&&!i&&Rt&&(c.shapeFlag&6?Rt[Rt.indexOf(n)]=c:Rt.push(c)),c.patchFlag=-2,c}if(AE(n)&&(n=n.__vccOpts),e){e=gE(e);let{class:c,style:l}=e;c&&!Me(c)&&(e.class=la(c)),Ce(l)&&(El(l)&&!re(l)&&(l=Ye({},l)),e.style=rs(l))}const a=Me(n)?1:Pp(n)?128:np(n)?64:Ce(n)?4:le(n)?2:0;return ee(n,e,t,r,s,a,i,!0)}function gE(n){return n?El(n)||_p(n)?Ye({},n):n:null}function Xn(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?mE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Dp(h),ref:e&&e.ref?t&&i?re(i)?i.concat(mo(e)):[i,mo(e)]:mo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ut?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xn(n.ssContent),ssFallback:n.ssFallback&&Xn(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&pi(d,l.clone(d)),d}function kp(n=" ",e=0){return lt(ga,null,n,e)}function Ar(n="",e=!1){return e?(yt(),Vp(mt,null,n)):lt(mt,null,n)}function Zt(n){return n==null||typeof n=="boolean"?lt(mt):re(n)?lt(Ut,null,n.slice()):Lo(n)?Fn(n):lt(ga,null,String(n))}function Fn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xn(n)}function Sl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!_p(e)?e._ctx=xt:s===3&&xt&&(xt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:xt},t=32):(e=String(e),r&64?(t=16,e=[kp(e)]):t=8);n.children=e,n.shapeFlag|=t}function mE(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=la([e.class,r.class]));else if(s==="style")e.style=rs([e.style,r.style]);else if(ia(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Jt(n,e,t,r=null){Wt(n,e,7,[t,r])}const _E=pp();let yE=0;function EE(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||_E,i={uid:yE++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ep(r,s),emitsOptions:Rp(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=oE.bind(null,i),n.ce&&n.ce(i),i}let _t=null;const Np=()=>_t||xt;let Fo,kc;{const n=ca(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Fo=e("__VUE_INSTANCE_SETTERS__",t=>_t=t),kc=e("__VUE_SSR_SETTERS__",t=>mi=t)}const Vi=n=>{const e=_t;return Fo(n),n.scope.on(),()=>{n.scope.off(),Fo(e)}},Th=()=>{_t&&_t.scope.off(),Fo(null)};function Op(n){return n.vnode.shapeFlag&4}let mi=!1;function vE(n,e=!1,t=!1){e&&kc(e);const{props:r,children:s}=n.vnode,i=Op(n);Ky(n,r,i,e),Jy(n,s,t||e);const a=i?TE(n,e):void 0;return e&&kc(!1),a}function TE(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ly);const{setup:r}=t;if(r){vn();const s=n.setupContext=r.length>1?wE(n):null,i=Vi(n),a=Ci(r,n,0,[n.props,s]),c=Pd(a);if(Tn(),i(),(c||n.sp)&&!ri(n)&&lp(n),c){if(a.then(Th,Th),e)return a.then(l=>{Ih(n,l)}).catch(l=>{ha(l,n,0)});n.asyncDep=a}else Ih(n,a)}else xp(n)}function Ih(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ce(e)&&(n.setupState=Jd(e)),xp(n)}function xp(n,e,t){const r=n.type;n.render||(n.render=r.render||en);{const s=Vi(n);vn();try{Fy(n)}finally{Tn(),s()}}}const IE={get(n,e){return at(n,"get",""),n[e]}};function wE(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,IE),slots:n.slots,emit:n.emit,expose:e}}function ma(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Jd(ly(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in si)return si[t](n)},has(e,t){return t in e||t in si}})):n.proxy}function AE(n){return le(n)&&"__vccOpts"in n}const Gr=(n,e)=>gy(n,e,mi);function SE(n,e,t){try{Mo(-1);const r=arguments.length;return r===2?Ce(e)&&!re(e)?Lo(e)?lt(n,null,[e]):lt(n,e):lt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Lo(t)&&(t=[t]),lt(n,e,t))}finally{Mo(1)}}const bE="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nc;const wh=typeof window<"u"&&window.trustedTypes;if(wh)try{Nc=wh.createPolicy("vue",{createHTML:n=>n})}catch{}const Mp=Nc?n=>Nc.createHTML(n):n=>n,RE="http://www.w3.org/2000/svg",PE="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,Ah=fn&&fn.createElement("template"),CE={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?fn.createElementNS(RE,n):e==="mathml"?fn.createElementNS(PE,n):t?fn.createElement(n,{is:t}):fn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>fn.createTextNode(n),createComment:n=>fn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Ah.innerHTML=Mp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=Ah.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},xn="transition",qs="animation",_i=Symbol("_vtc"),Lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},VE=Ye({},rp,Lp),DE=n=>(n.displayName="Transition",n.props=VE,n),sc=DE((n,{slots:e})=>SE(Ay,kE(n),e)),Tr=(n,e=[])=>{re(n)?n.forEach(t=>t(...e)):n&&n(...e)},Sh=n=>n?re(n)?n.some(e=>e.length>1):n.length>1:!1;function kE(n){const e={};for(const T in n)T in Lp||(e[T]=n[T]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:h=a,appearToClass:d=c,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:E=`${t}-leave-active`,leaveToClass:b=`${t}-leave-to`}=n,V=NE(s),N=V&&V[0],F=V&&V[1],{onBeforeEnter:q,onEnter:W,onEnterCancelled:Q,onLeave:z,onLeaveCancelled:se,onBeforeAppear:he=q,onAppear:A=W,onAppearCancelled:y=Q}=e,m=(T,_,me,je)=>{T._enterCancelled=je,Ir(T,_?d:c),Ir(T,_?h:a),me&&me()},w=(T,_)=>{T._isLeaving=!1,Ir(T,p),Ir(T,b),Ir(T,E),_&&_()},I=T=>(_,me)=>{const je=T?A:W,Ne=()=>m(_,T,me);Tr(je,[_,Ne]),bh(()=>{Ir(_,T?l:i),hn(_,T?d:c),Sh(je)||Rh(_,r,N,Ne)})};return Ye(e,{onBeforeEnter(T){Tr(q,[T]),hn(T,i),hn(T,a)},onBeforeAppear(T){Tr(he,[T]),hn(T,l),hn(T,h)},onEnter:I(!1),onAppear:I(!0),onLeave(T,_){T._isLeaving=!0;const me=()=>w(T,_);hn(T,p),T._enterCancelled?(hn(T,E),Vh(T)):(Vh(T),hn(T,E)),bh(()=>{T._isLeaving&&(Ir(T,p),hn(T,b),Sh(z)||Rh(T,r,F,me))}),Tr(z,[T,me])},onEnterCancelled(T){m(T,!1,void 0,!0),Tr(Q,[T])},onAppearCancelled(T){m(T,!0,void 0,!0),Tr(y,[T])},onLeaveCancelled(T){w(T),Tr(se,[T])}})}function NE(n){if(n==null)return null;if(Ce(n))return[ic(n.enter),ic(n.leave)];{const e=ic(n);return[e,e]}}function ic(n){return x_(n)}function hn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[_i]||(n[_i]=new Set)).add(e)}function Ir(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[_i];t&&(t.delete(e),t.size||(n[_i]=void 0))}function bh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let OE=0;function Rh(n,e,t,r){const s=n._endId=++OE,i=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:a,timeout:c,propCount:l}=xE(n,e);if(!a)return r();const h=a+"end";let d=0;const p=()=>{n.removeEventListener(h,E),i()},E=b=>{b.target===n&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),n.addEventListener(h,E)}function xE(n,e){const t=window.getComputedStyle(n),r=V=>(t[V]||"").split(", "),s=r(`${xn}Delay`),i=r(`${xn}Duration`),a=Ph(s,i),c=r(`${qs}Delay`),l=r(`${qs}Duration`),h=Ph(c,l);let d=null,p=0,E=0;e===xn?a>0&&(d=xn,p=a,E=i.length):e===qs?h>0&&(d=qs,p=h,E=l.length):(p=Math.max(a,h),d=p>0?a>h?xn:qs:null,E=d?d===xn?i.length:l.length:0);const b=d===xn&&/\b(?:transform|all)(?:,|$)/.test(r(`${xn}Property`).toString());return{type:d,timeout:p,propCount:E,hasTransform:b}}function Ph(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>Ch(t)+Ch(n[r])))}function Ch(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Vh(n){return(n?n.ownerDocument:document).body.offsetHeight}function ME(n,e,t){const r=n[_i];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Dh=Symbol("_vod"),LE=Symbol("_vsh"),FE=Symbol(""),UE=/(?:^|;)\s*display\s*:/;function BE(n,e,t){const r=n.style,s=Me(t);let i=!1;if(t&&!s){if(e)if(Me(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&_o(r,c,"")}else for(const a in e)t[a]==null&&_o(r,a,"");for(const a in t)a==="display"&&(i=!0),_o(r,a,t[a])}else if(s){if(e!==t){const a=r[FE];a&&(t+=";"+a),r.cssText=t,i=UE.test(t)}}else e&&n.removeAttribute("style");Dh in n&&(n[Dh]=i?r.display:"",n[LE]&&(r.display="none"))}const kh=/\s*!important$/;function _o(n,e,t){if(re(t))t.forEach(r=>_o(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=$E(n,e);kh.test(t)?n.setProperty(ar(r),t.replace(kh,""),"important"):n[r]=t}}const Nh=["Webkit","Moz","ms"],oc={};function $E(n,e){const t=oc[e];if(t)return t;let r=Jn(e);if(r!=="filter"&&r in n)return oc[e]=r;r=Dd(r);for(let s=0;s<Nh.length;s++){const i=Nh[s]+r;if(i in n)return oc[e]=i}return e}const Oh="http://www.w3.org/1999/xlink";function xh(n,e,t,r,s,i=$_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Oh,e.slice(6,e.length)):n.setAttributeNS(Oh,e,t):t==null||i&&!Nd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":or(t)?String(t):t)}function Mh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Mp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Nd(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Qr(n,e,t,r){n.addEventListener(e,t,r)}function jE(n,e,t,r){n.removeEventListener(e,t,r)}const Lh=Symbol("_vei");function qE(n,e,t,r,s=null){const i=n[Lh]||(n[Lh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=HE(e);if(r){const h=i[e]=zE(r,s);Qr(n,c,h,l)}else a&&(jE(n,c,a,l),i[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function HE(n){let e;if(Fh.test(n)){e={};let r;for(;r=n.match(Fh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ar(n.slice(2)),e]}let ac=0;const WE=Promise.resolve(),KE=()=>ac||(WE.then(()=>ac=0),ac=Date.now());function zE(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Wt(GE(r,t.value),e,5,[r])};return t.value=n,t.attached=KE(),t}function GE(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Uh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,QE=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?ME(n,r,a):e==="style"?BE(n,t,r):ia(e)?cl(e)||qE(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JE(n,e,r,a))?(Mh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xh(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Me(r))?Mh(n,Jn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),xh(n,e,r,a))};function JE(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uh(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uh(e)&&Me(t)?!1:e in n}const Bh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>ho(e,t):e};function YE(n){n.target.composing=!0}function $h(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cc=Symbol("_assign");function jh(n,e,t){return e&&(n=n.trim()),t&&(n=hl(n)),n}const Uo={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[cc]=Bh(s);const i=r||s.props&&s.props.type==="number";Qr(n,e?"change":"input",a=>{a.target.composing||n[cc](jh(n.value,t,i))}),(t||i)&&Qr(n,"change",()=>{n.value=jh(n.value,t,i)}),e||(Qr(n,"compositionstart",YE),Qr(n,"compositionend",$h),Qr(n,"change",$h))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[cc]=Bh(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?hl(n.value):n.value,l=e??"";c!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},XE=["ctrl","shift","alt","meta"],ZE={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>XE.some(t=>n[`${t}Key`]&&!e.includes(t))},yo=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=ZE[e[a]];if(c&&c(s,e))return}return n(s,...i)})},ev={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=ar(s.key);if(e.some(a=>a===i||ev[a]===i))return n(s)})},tv=Ye({patchProp:QE},CE);let Hh;function nv(){return Hh||(Hh=Xy(tv))}const rv=(...n)=>{const e=nv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=iv(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,sv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function sv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function iv(n){return Me(n)?document.querySelector(n):n}const ov=()=>{};var Wh={};/**
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
 */const Fp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},av=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(E=64)),r.push(t[d],t[p],t[E],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):av(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new cv;const E=i<<2|c>>4;if(r.push(E),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lv=function(n){const e=Fp(n);return Up.encodeByteArray(e,!0)},Bo=function(n){return lv(n).replace(/\./g,"")},Bp=function(n){try{return Up.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const hv=()=>uv().__FIREBASE_DEFAULTS__,fv=()=>{if(typeof process>"u"||typeof Wh>"u")return;const n=Wh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bp(n[1]);return e&&JSON.parse(e)},_a=()=>{try{return ov()||hv()||fv()||dv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$p=n=>{var e,t;return(t=(e=_a())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},pv=n=>{const e=$p(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},jp=()=>{var n;return(n=_a())==null?void 0:n.config},qp=n=>{var e;return(e=_a())==null?void 0:e[`_${n}`]};/**
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
 */function mv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Bo(JSON.stringify(t)),Bo(JSON.stringify(a)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _v(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function yv(){var e;const n=(e=_a())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ev(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iv(){const n=ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wv(){return!yv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Av(){try{return typeof indexedDB=="object"}catch{return!1}}function Sv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const bv="FirebaseError";class Rn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=bv,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Rv(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Rn(s,c,r)}}function Rv(n,e){return n.replace(Pv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pv=/\{\$([^}]+)}/g;function Cv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Kh(i)&&Kh(a)){if(!Dr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Kh(n){return n!==null&&typeof n=="object"}/**
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
 */function ki(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Vv(n,e){const t=new Dv(n,e);return t.subscribe.bind(t)}class Dv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");kv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=lc),s.error===void 0&&(s.error=lc),s.complete===void 0&&(s.complete=lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lc(){}/**
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
 */function We(n){return n&&n._delegate?n._delegate:n}/**
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
 */const Sr="[DEFAULT]";/**
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
 */class Nv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new gv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xv(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ov(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ov(n){return n===Sr?void 0:n}function xv(n){return n.instantiationMode==="EAGER"}/**
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
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const Lv={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Fv=ge.INFO,Uv={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Bv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Uv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=Fv,this._logHandler=Bv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const $v=(n,e)=>e.some(t=>n instanceof t);let zh,Gh;function jv(){return zh||(zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qv(){return Gh||(Gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wp=new WeakMap,Oc=new WeakMap,Kp=new WeakMap,uc=new WeakMap,Rl=new WeakMap;function Hv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Hn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wp.set(t,n)}).catch(()=>{}),Rl.set(e,n),e}function Wv(n){if(Oc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Oc.set(n,e)}let xc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Kv(n){xc=n(xc)}function zv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hc(this),e,...t);return Kp.set(r,e.sort?e.sort():[e]),Hn(r)}:qv().includes(n)?function(...e){return n.apply(hc(this),e),Hn(Wp.get(this))}:function(...e){return Hn(n.apply(hc(this),e))}}function Gv(n){return typeof n=="function"?zv(n):(n instanceof IDBTransaction&&Wv(n),$v(n,jv())?new Proxy(n,xc):n)}function Hn(n){if(n instanceof IDBRequest)return Hv(n);if(uc.has(n))return uc.get(n);const e=Gv(n);return e!==n&&(uc.set(n,e),Rl.set(e,n)),e}const hc=n=>Rl.get(n);function Qv(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Hn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Hn(a.result),l.oldVersion,l.newVersion,Hn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Jv=["get","getKey","getAll","getAllKeys","count"],Yv=["put","add","delete","clear"],fc=new Map;function Qh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Yv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jv.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return fc.set(e,i),i}Kv(n=>({...n,get:(e,t,r)=>Qh(e,t)||n.get(e,t,r),has:(e,t)=>!!Qh(e,t)||n.has(e,t)}));/**
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
 */class Xv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Zv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Zv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",Jh="0.14.12";/**
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
 */const In=new bl("@firebase/app"),eT="@firebase/app-compat",tT="@firebase/analytics-compat",nT="@firebase/analytics",rT="@firebase/app-check-compat",sT="@firebase/app-check",iT="@firebase/auth",oT="@firebase/auth-compat",aT="@firebase/database",cT="@firebase/data-connect",lT="@firebase/database-compat",uT="@firebase/functions",hT="@firebase/functions-compat",fT="@firebase/installations",dT="@firebase/installations-compat",pT="@firebase/messaging",gT="@firebase/messaging-compat",mT="@firebase/performance",_T="@firebase/performance-compat",yT="@firebase/remote-config",ET="@firebase/remote-config-compat",vT="@firebase/storage",TT="@firebase/storage-compat",IT="@firebase/firestore",wT="@firebase/ai",AT="@firebase/firestore-compat",ST="firebase",bT="12.13.0";/**
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
 */const Lc="[DEFAULT]",RT={[Mc]:"fire-core",[eT]:"fire-core-compat",[nT]:"fire-analytics",[tT]:"fire-analytics-compat",[sT]:"fire-app-check",[rT]:"fire-app-check-compat",[iT]:"fire-auth",[oT]:"fire-auth-compat",[aT]:"fire-rtdb",[cT]:"fire-data-connect",[lT]:"fire-rtdb-compat",[uT]:"fire-fn",[hT]:"fire-fn-compat",[fT]:"fire-iid",[dT]:"fire-iid-compat",[pT]:"fire-fcm",[gT]:"fire-fcm-compat",[mT]:"fire-perf",[_T]:"fire-perf-compat",[yT]:"fire-rc",[ET]:"fire-rc-compat",[vT]:"fire-gcs",[TT]:"fire-gcs-compat",[IT]:"fire-fst",[AT]:"fire-fst-compat",[wT]:"fire-vertex","fire-js":"fire-js",[ST]:"fire-js-all"};/**
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
 */const $o=new Map,PT=new Map,Fc=new Map;function Yh(n,e){try{n.container.addComponent(e)}catch(t){In.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ds(n){const e=n.name;if(Fc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,n);for(const t of $o.values())Yh(t,n);for(const t of PT.values())Yh(t,n);return!0}function Pl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Nt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const CT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Di("app","Firebase",CT);/**
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
 */class VT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=bT;function zp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Lc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(t||(t=jp()),!t)throw Wn.create("no-options");const i=$o.get(s);if(i){if(Dr(t,i.options)&&Dr(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const a=new Mv(s);for(const l of Fc.values())a.addComponent(l);const c=new VT(t,r,a);return $o.set(s,c),c}function Gp(n=Lc){const e=$o.get(n);if(!e&&n===Lc&&jp())return zp();if(!e)throw Wn.create("no-app",{appName:n});return e}function Kn(n,e,t){let r=RT[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(a.join(" "));return}ds(new kr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const DT="firebase-heartbeat-database",kT=1,yi="firebase-heartbeat-store";let dc=null;function Qp(){return dc||(dc=Qv(DT,kT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(yi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wn.create("idb-open",{originalErrorMessage:n.message})})),dc}async function NT(n){try{const t=(await Qp()).transaction(yi),r=await t.objectStore(yi).get(Jp(n));return await t.done,r}catch(e){if(e instanceof Rn)In.warn(e.message);else{const t=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(t.message)}}}async function Xh(n,e){try{const r=(await Qp()).transaction(yi,"readwrite");await r.objectStore(yi).put(e,Jp(n)),await r.done}catch(t){if(t instanceof Rn)In.warn(t.message);else{const r=Wn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});In.warn(r.message)}}}function Jp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const OT=1024,xT=30;class MT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new FT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>xT){const a=UT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zh(),{heartbeatsToSend:r,unsentEntries:s}=LT(this._heartbeatsCache.heartbeats),i=Bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return In.warn(t),""}}}function Zh(){return new Date().toISOString().substring(0,10)}function LT(n,e=OT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ef(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ef(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class FT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Av()?Sv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await NT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ef(n){return Bo(JSON.stringify({version:2,heartbeats:n})).length}function UT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function BT(n){ds(new kr("platform-logger",e=>new Xv(e),"PRIVATE")),ds(new kr("heartbeat",e=>new MT(e),"PRIVATE")),Kn(Mc,Jh,n),Kn(Mc,Jh,"esm2020"),Kn("fire-js","")}BT("");function Yp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $T=Yp,Xp=new Di("auth","Firebase",Yp());/**
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
 */const jo=new bl("@firebase/auth");function jT(n,...e){jo.logLevel<=ge.WARN&&jo.warn(`Auth (${vs}): ${n}`,...e)}function Eo(n,...e){jo.logLevel<=ge.ERROR&&jo.error(`Auth (${vs}): ${n}`,...e)}/**
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
 */function Kt(n,...e){throw Cl(n,...e)}function tn(n,...e){return Cl(n,...e)}function Zp(n,e,t){const r={...$T(),[e]:t};return new Di("auth","Firebase",r).create(e,{appName:n.name})}function En(n){return Zp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Xp.create(n,...e)}function te(n,e,...t){if(!n)throw Cl(e,...t)}function mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Eo(e),new Error(e)}function wn(n,e){n||mn(e)}/**
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
 */function Uc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function qT(){return tf()==="http:"||tf()==="https:"}function tf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */class Oi{constructor(e,t){this.shortDelay=e,this.longDelay=t,wn(t>e,"Short delay should be less than long delay!"),this.isMobile=_v()||Tv()}get(){return HT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vl(n,e){wn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class eg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],GT=new Oi(3e4,6e4);function cr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function lr(n,e,t,r,s={}){return tg(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ki({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return Ev()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Ni(n.emulatorConfig.host)&&(h.credentials="include"),eg.fetch()(await ng(n,n.config.apiHost,t,c),h)})}async function tg(n,e,t){n._canInitEmulator=!1;const r={...KT,...e};try{const s=new JT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw io(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw io(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw io(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zp(n,d,h);Kt(n,d)}}catch(s){if(s instanceof Rn)throw s;Kt(n,"network-request-failed",{message:String(s)})}}async function xi(n,e,t,r,s={}){const i=await lr(n,e,t,r,s);return"mfaPendingCredential"in i&&Kt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ng(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Vl(n.config,s):`${n.config.apiScheme}://${s}`;return zT.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function QT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),GT.get())})}}function io(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=tn(n,e,r);return s.customData._tokenResponse=t,s}function nf(n){return n!==void 0&&n.enterprise!==void 0}class YT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return QT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XT(n,e){return lr(n,"GET","/v2/recaptchaConfig",cr(n,e))}/**
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
 */async function ZT(n,e){return lr(n,"POST","/v1/accounts:delete",e)}async function qo(n,e){return lr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function oi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eI(n,e=!1){const t=We(n),r=await t.getIdToken(e),s=Dl(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oi(pc(s.auth_time)),issuedAtTime:oi(pc(s.iat)),expirationTime:oi(pc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pc(n){return Number(n)*1e3}function Dl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bp(t);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rf(n){const e=Dl(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ei(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rn&&tI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function tI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */async function Ho(n){var p;const e=n.auth,t=await n.getIdToken(),r=await Ei(n,qo(e,{idToken:t}));te(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?rg(s.providerUserInfo):[],a=sI(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function rI(n){const e=We(n);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function iI(n,e){const t=await tg(n,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ng(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Ni(n.emulatorConfig.host)&&(l.credentials="include"),eg.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function oI(n,e){return lr(n,"POST","/v2/accounts:revokeToken",cr(n,e))}/**
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
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=rf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await iI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new as;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Mn(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new nI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eI(this,e)}reload(){return rI(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await Ei(this,ZT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:E,isAnonymous:b,providerData:V,stsTokenManager:N}=t;te(p&&N,e,"internal-error");const F=as.fromJSON(this.name,N);te(typeof p=="string",e,"internal-error"),Mn(r,e.name),Mn(s,e.name),te(typeof E=="boolean",e,"internal-error"),te(typeof b=="boolean",e,"internal-error"),Mn(i,e.name),Mn(a,e.name),Mn(c,e.name),Mn(l,e.name),Mn(h,e.name),Mn(d,e.name);const q=new $t({uid:p,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:F,createdAt:h,lastLoginAt:d});return V&&Array.isArray(V)&&(q.providerData=V.map(W=>({...W}))),l&&(q._redirectEventId=l),q}static async _fromIdTokenResponse(e,t,r=!1){const s=new as;s.updateFromServerResponse(t);const i=new $t({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?rg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new as;c.updateFromIdToken(r);const l=new $t({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const sf=new Map;function _n(n){wn(n instanceof Function,"Expected a class definition");let e=sf.get(n);return e?(wn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sf.set(n,e),e)}/**
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
 */class sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sg.type="NONE";const of=sg;/**
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
 */function vo(n,e,t){return`firebase:${n}:${e}:${t}`}class cs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=vo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qo(this.auth,{idToken:e}).catch(()=>{});return t?$t._fromGetAccountInfoResponse(this.auth,t,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cs(_n(of),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_n(of);const a=vo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const E=await qo(e,{idToken:d}).catch(()=>{});if(!E)break;p=await $t._fromGetAccountInfoResponse(e,E,d)}else p=$t._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new cs(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new cs(i,e,r))}}/**
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
 */function af(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ig(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ug(e))return"Blackberry";if(hg(e))return"Webos";if(og(e))return"Safari";if((e.includes("chrome/")||ag(e))&&!e.includes("edge/"))return"Chrome";if(lg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ig(n=ht()){return/firefox\//i.test(n)}function og(n=ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ag(n=ht()){return/crios\//i.test(n)}function cg(n=ht()){return/iemobile/i.test(n)}function lg(n=ht()){return/android/i.test(n)}function ug(n=ht()){return/blackberry/i.test(n)}function hg(n=ht()){return/webos/i.test(n)}function kl(n=ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function aI(n=ht()){var e;return kl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function cI(){return Iv()&&document.documentMode===10}function fg(n=ht()){return kl(n)||lg(n)||hg(n)||ug(n)||/windows phone/i.test(n)||cg(n)}/**
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
 */function dg(n,e=[]){let t;switch(n){case"Browser":t=af(ht());break;case"Worker":t=`${af(ht())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vs}/${r}`}/**
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
 */async function uI(n,e={}){return lr(n,"GET","/v2/passwordPolicy",cr(n,e))}/**
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
 */class dI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cf(this),this.idTokenSubscription=new cf(this),this.beforeStateQueue=new lI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qo(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Nt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(En(this));const t=e?We(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uI(this),t=new fI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await oI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&jT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Lr(n){return We(n)}class cf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vv(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pI(n){ya=n}function pg(n){return ya.loadJS(n)}function gI(){return ya.recaptchaEnterpriseScript}function mI(){return ya.gapiScript}function _I(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class yI{constructor(){this.enterprise=new EI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class EI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vI="recaptcha-enterprise",gg="NO_RECAPTCHA";class TI{constructor(e){this.type=vI,this.auth=Lr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{XT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new YT(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;nf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(gg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yI().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&nf(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gI();l.length!==0&&(l+=c),pg(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function lf(n,e,t,r=!1,s=!1){const i=new TI(n);let a;if(s)a=gg;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $c(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await lf(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await lf(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function II(n,e){const t=Pl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Dr(i,e??{}))return s;Kt(s,"already-initialized")}return t.initialize({options:e})}function wI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AI(n,e,t){const r=Lr(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mg(e),{host:a,port:c}=SI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Dr(h,r.config.emulator)&&Dr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ni(a)?Hp(`${i}//${a}${l}`):bI()}function mg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function SI(n){const e=mg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:uf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:uf(a)}}}function uf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function bI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Nl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function RI(n,e){return lr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function PI(n,e){return xi(n,"POST","/v1/accounts:signInWithPassword",cr(n,e))}/**
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
 */async function CI(n,e){return xi(n,"POST","/v1/accounts:signInWithEmailLink",cr(n,e))}async function VI(n,e){return xi(n,"POST","/v1/accounts:signInWithEmailLink",cr(n,e))}/**
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
 */class vi extends Nl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new vi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new vi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,t,"signInWithPassword",PI);case"emailLink":return CI(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,r,"signUpPassword",RI);case"emailLink":return VI(e,{idToken:t,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ls(n,e){return xi(n,"POST","/v1/accounts:signInWithIdp",cr(n,e))}/**
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
 */const DI="http://localhost";class Nr extends Nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Nr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ls(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ls(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ls(e,t)}buildRequest(){const e={requestUri:DI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ki(t)}return e}}/**
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
 */function kI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NI(n){const e=Ks(zs(n)).link,t=e?Ks(zs(e)).deep_link_id:null,r=Ks(zs(n)).deep_link_id;return(r?Ks(zs(r)).link:null)||r||t||e||n}class Ol{constructor(e){const t=Ks(zs(e)),r=t.apiKey??null,s=t.oobCode??null,i=kI(t.mode??null);te(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=NI(e);try{return new Ol(t)}catch{return null}}}/**
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
 */class Ts{constructor(){this.providerId=Ts.PROVIDER_ID}static credential(e,t){return vi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ol.parseLink(t);return te(r,"argument-error"),vi._fromEmailAndCode(e,r.code,r.tenantId)}}Ts.PROVIDER_ID="password";Ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Un extends Mi{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class $n extends Mi{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class jn extends Mi{constructor(){super("twitter.com")}static credential(e,t){return Nr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jn.credential(t,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */async function OI(n,e){return xi(n,"POST","/v1/accounts:signUp",cr(n,e))}/**
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
 */class Or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),a=hf(r);return new Or({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=hf(r);return new Or({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function hf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Wo extends Rn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Wo(e,t,r,s)}}function yg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wo._fromErrorAndOperation(n,i,e,r):i})}async function xI(n,e,t=!1){const r=await Ei(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Or._forOperation(n,"link",r)}/**
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
 */async function MI(n,e,t=!1){const{auth:r}=n;if(Nt(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await Ei(n,yg(r,s,e,n),t);te(i.idToken,r,"internal-error");const a=Dl(i.idToken);te(a,r,"internal-error");const{sub:c}=a;return te(n.uid===c,r,"user-mismatch"),Or._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
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
 */async function Eg(n,e,t=!1){if(Nt(n.app))return Promise.reject(En(n));const r="signIn",s=await yg(n,r,e),i=await Or._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function LI(n,e){return Eg(Lr(n),e)}/**
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
 */async function vg(n){const e=Lr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FI(n,e,t){if(Nt(n.app))return Promise.reject(En(n));const r=Lr(n),a=await $c(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vg(n),l}),c=await Or._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function UI(n,e,t){return Nt(n.app)?Promise.reject(En(n)):LI(We(n),Ts.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vg(n),r})}function BI(n,e,t,r){return We(n).onIdTokenChanged(e,t,r)}function $I(n,e,t){return We(n).beforeAuthStateChanged(e,t)}function jI(n,e,t,r){return We(n).onAuthStateChanged(e,t,r)}function qI(n){return We(n).signOut()}const Ko="__sak";/**
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
 */class Tg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */class Ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ea(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await zI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ea.receivers=[];/**
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
 */function xl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class GI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=xl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const E=p;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function nn(){return window}function QI(n){nn().location.href=n}/**
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
 */function Sg(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function JI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function XI(){return Sg()?self:null}/**
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
 */const bg="firebaseLocalStorageDb",ZI=1,zo="firebaseLocalStorage",Rg="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function va(n,e){return n.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function ew(){const n=indexedDB.deleteDatabase(bg);return new Li(n).toPromise()}function jc(){const n=indexedDB.open(bg,ZI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(zo,{keyPath:Rg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(zo)?e(r):(r.close(),await ew(),e(await jc()))})})}async function ff(n,e,t){const r=va(n,!0).put({[Rg]:e,value:t});return new Li(r).toPromise()}async function tw(n,e){const t=va(n,!1).get(e),r=await new Li(t).toPromise();return r===void 0?null:r.value}function df(n,e){const t=va(n,!0).delete(e);return new Li(t).toPromise()}const nw=800,rw=3;class Pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>rw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(XI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await JI(),!this.activeServiceWorker)return;this.sender=new GI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await ff(e,Ko,"1"),await df(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ff(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>tw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>df(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=va(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pg.type="LOCAL";const sw=Pg;new Oi(3e4,6e4);/**
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
 */function iw(n,e){return e?_n(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ml extends Nl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ls(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ow(n){return Eg(n.auth,new Ml(n),n.bypassAuthState)}function aw(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),MI(t,new Ml(n),n.bypassAuthState)}async function cw(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),xI(t,new Ml(n),n.bypassAuthState)}/**
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
 */class Cg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ow;case"linkViaPopup":case"linkViaRedirect":return cw;case"reauthViaPopup":case"reauthViaRedirect":return aw;default:Kt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lw=new Oi(2e3,1e4);class es extends Cg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lw.get())};e()}}es.currentPopupAction=null;/**
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
 */const uw="pendingRedirect",To=new Map;class hw extends Cg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await fw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fw(n,e){const t=gw(e),r=pw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function dw(n,e){To.set(n._key(),e)}function pw(n){return _n(n._redirectPersistence)}function gw(n){return vo(uw,n.config.apiKey,n.name)}async function mw(n,e,t=!1){if(Nt(n.app))return Promise.reject(En(n));const r=Lr(n),s=iw(r,e),a=await new hw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const _w=10*60*1e3;class yw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ew(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Vg(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(tn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_w&&this.cachedEventUids.clear(),this.cachedEventUids.has(pf(e))}saveEventToCache(e){this.cachedEventUids.add(pf(e)),this.lastProcessedEventTime=Date.now()}}function pf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ew(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vg(n);default:return!1}}/**
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
 */async function vw(n,e={}){return lr(n,"GET","/v1/projects",e)}/**
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
 */const Tw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iw=/^https?/;async function ww(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vw(n);for(const t of e)try{if(Aw(t))return}catch{}Kt(n,"unauthorized-domain")}function Aw(n){const e=Uc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Iw.test(t))return!1;if(Tw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Sw=new Oi(3e4,6e4);function gf(){const n=nn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function bw(n){return new Promise((e,t)=>{var s,i,a;function r(){gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gf(),t(tn(n,"network-request-failed"))},timeout:Sw.get()})}if((i=(s=nn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=nn().gapi)!=null&&a.load)r();else{const c=_I("iframefcb");return nn()[c]=()=>{gapi.load?r():t(tn(n,"network-request-failed"))},pg(`${mI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Io=null,e})}let Io=null;function Rw(n){return Io=Io||bw(n),Io}/**
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
 */const Pw=new Oi(5e3,15e3),Cw="__/auth/iframe",Vw="emulator/auth/iframe",Dw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nw(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vl(e,Vw):`https://${n.config.authDomain}/${Cw}`,r={apiKey:e.apiKey,appName:n.name,v:vs},s=kw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ki(r).slice(1)}`}async function Ow(n){const e=await Rw(n),t=nn().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:Nw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=tn(n,"network-request-failed"),c=nn().setTimeout(()=>{i(a)},Pw.get());function l(){nn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const xw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mw=500,Lw=600,Fw="_blank",Uw="http://localhost";class mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bw(n,e,t,r=Mw,s=Lw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...xw,width:r.toString(),height:s.toString(),top:i,left:a},h=ht().toLowerCase();t&&(c=ag(h)?Fw:t),ig(h)&&(e=e||Uw,l.scrollbars="yes");const d=Object.entries(l).reduce((E,[b,V])=>`${E}${b}=${V},`,"");if(aI(h)&&c!=="_self")return $w(e||"",c),new mf(null);const p=window.open(e||"",c,d);te(p,n,"popup-blocked");try{p.focus()}catch{}return new mf(p)}function $w(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const jw="__/auth/handler",qw="emulator/auth/handler",Hw=encodeURIComponent("fac");async function _f(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:vs,eventId:s};if(e instanceof _g){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Cv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Mi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${Hw}=${encodeURIComponent(l)}`:"";return`${Ww(n)}?${ki(c).slice(1)}${h}`}function Ww({config:n}){return n.emulator?Vl(n,qw):`https://${n.authDomain}/${jw}`}/**
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
 */const gc="webStorageSupport";class Kw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ag,this._completeRedirectFn=mw,this._overrideRedirectResult=dw}async _openPopup(e,t,r,s){var a;wn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await _f(e,t,r,Uc(),s);return Bw(e,i,xl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await _f(e,t,r,Uc(),s);return QI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ow(e),r=new yw(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gc,{type:gc},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[gc];i!==void 0&&t(!!i),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ww(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fg()||og()||kl()}}const zw=Kw;var yf="@firebase/auth",Ef="1.13.1";/**
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
 */class Gw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jw(n){ds(new kr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dg(n)},h=new dI(r,s,i,l);return wI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ds(new kr("auth-internal",e=>{const t=Lr(e.getProvider("auth").getImmediate());return(r=>new Gw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(yf,Ef,Qw(n)),Kn(yf,Ef,"esm2020")}/**
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
 */const Yw=5*60,Xw=qp("authIdTokenMaxAge")||Yw;let vf=null;const Zw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Xw)return;const s=t==null?void 0:t.token;vf!==s&&(vf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eA(n=Gp()){const e=Pl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=II(n,{popupRedirectResolver:zw,persistence:[sw,KI,Ag]}),r=qp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Zw(i.toString());$I(t,a,()=>a(t.currentUser)),BI(t,c=>a(c))}}const s=$p("auth");return s&&AI(t,`http://${s}`),t}function tA(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}pI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",tA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jw("Browser");var Tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,Dg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function m(){}m.prototype=y.prototype,A.F=y.prototype,A.prototype=new m,A.prototype.constructor=A,A.D=function(w,I,T){for(var _=Array(arguments.length-2),me=2;me<arguments.length;me++)_[me-2]=arguments[me];return y.prototype[I].apply(w,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,m){m||(m=0);const w=Array(16);if(typeof y=="string")for(var I=0;I<16;++I)w[I]=y.charCodeAt(m++)|y.charCodeAt(m++)<<8|y.charCodeAt(m++)<<16|y.charCodeAt(m++)<<24;else for(I=0;I<16;++I)w[I]=y[m++]|y[m++]<<8|y[m++]<<16|y[m++]<<24;y=A.g[0],m=A.g[1],I=A.g[2];let T=A.g[3],_;_=y+(T^m&(I^T))+w[0]+3614090360&4294967295,y=m+(_<<7&4294967295|_>>>25),_=T+(I^y&(m^I))+w[1]+3905402710&4294967295,T=y+(_<<12&4294967295|_>>>20),_=I+(m^T&(y^m))+w[2]+606105819&4294967295,I=T+(_<<17&4294967295|_>>>15),_=m+(y^I&(T^y))+w[3]+3250441966&4294967295,m=I+(_<<22&4294967295|_>>>10),_=y+(T^m&(I^T))+w[4]+4118548399&4294967295,y=m+(_<<7&4294967295|_>>>25),_=T+(I^y&(m^I))+w[5]+1200080426&4294967295,T=y+(_<<12&4294967295|_>>>20),_=I+(m^T&(y^m))+w[6]+2821735955&4294967295,I=T+(_<<17&4294967295|_>>>15),_=m+(y^I&(T^y))+w[7]+4249261313&4294967295,m=I+(_<<22&4294967295|_>>>10),_=y+(T^m&(I^T))+w[8]+1770035416&4294967295,y=m+(_<<7&4294967295|_>>>25),_=T+(I^y&(m^I))+w[9]+2336552879&4294967295,T=y+(_<<12&4294967295|_>>>20),_=I+(m^T&(y^m))+w[10]+4294925233&4294967295,I=T+(_<<17&4294967295|_>>>15),_=m+(y^I&(T^y))+w[11]+2304563134&4294967295,m=I+(_<<22&4294967295|_>>>10),_=y+(T^m&(I^T))+w[12]+1804603682&4294967295,y=m+(_<<7&4294967295|_>>>25),_=T+(I^y&(m^I))+w[13]+4254626195&4294967295,T=y+(_<<12&4294967295|_>>>20),_=I+(m^T&(y^m))+w[14]+2792965006&4294967295,I=T+(_<<17&4294967295|_>>>15),_=m+(y^I&(T^y))+w[15]+1236535329&4294967295,m=I+(_<<22&4294967295|_>>>10),_=y+(I^T&(m^I))+w[1]+4129170786&4294967295,y=m+(_<<5&4294967295|_>>>27),_=T+(m^I&(y^m))+w[6]+3225465664&4294967295,T=y+(_<<9&4294967295|_>>>23),_=I+(y^m&(T^y))+w[11]+643717713&4294967295,I=T+(_<<14&4294967295|_>>>18),_=m+(T^y&(I^T))+w[0]+3921069994&4294967295,m=I+(_<<20&4294967295|_>>>12),_=y+(I^T&(m^I))+w[5]+3593408605&4294967295,y=m+(_<<5&4294967295|_>>>27),_=T+(m^I&(y^m))+w[10]+38016083&4294967295,T=y+(_<<9&4294967295|_>>>23),_=I+(y^m&(T^y))+w[15]+3634488961&4294967295,I=T+(_<<14&4294967295|_>>>18),_=m+(T^y&(I^T))+w[4]+3889429448&4294967295,m=I+(_<<20&4294967295|_>>>12),_=y+(I^T&(m^I))+w[9]+568446438&4294967295,y=m+(_<<5&4294967295|_>>>27),_=T+(m^I&(y^m))+w[14]+3275163606&4294967295,T=y+(_<<9&4294967295|_>>>23),_=I+(y^m&(T^y))+w[3]+4107603335&4294967295,I=T+(_<<14&4294967295|_>>>18),_=m+(T^y&(I^T))+w[8]+1163531501&4294967295,m=I+(_<<20&4294967295|_>>>12),_=y+(I^T&(m^I))+w[13]+2850285829&4294967295,y=m+(_<<5&4294967295|_>>>27),_=T+(m^I&(y^m))+w[2]+4243563512&4294967295,T=y+(_<<9&4294967295|_>>>23),_=I+(y^m&(T^y))+w[7]+1735328473&4294967295,I=T+(_<<14&4294967295|_>>>18),_=m+(T^y&(I^T))+w[12]+2368359562&4294967295,m=I+(_<<20&4294967295|_>>>12),_=y+(m^I^T)+w[5]+4294588738&4294967295,y=m+(_<<4&4294967295|_>>>28),_=T+(y^m^I)+w[8]+2272392833&4294967295,T=y+(_<<11&4294967295|_>>>21),_=I+(T^y^m)+w[11]+1839030562&4294967295,I=T+(_<<16&4294967295|_>>>16),_=m+(I^T^y)+w[14]+4259657740&4294967295,m=I+(_<<23&4294967295|_>>>9),_=y+(m^I^T)+w[1]+2763975236&4294967295,y=m+(_<<4&4294967295|_>>>28),_=T+(y^m^I)+w[4]+1272893353&4294967295,T=y+(_<<11&4294967295|_>>>21),_=I+(T^y^m)+w[7]+4139469664&4294967295,I=T+(_<<16&4294967295|_>>>16),_=m+(I^T^y)+w[10]+3200236656&4294967295,m=I+(_<<23&4294967295|_>>>9),_=y+(m^I^T)+w[13]+681279174&4294967295,y=m+(_<<4&4294967295|_>>>28),_=T+(y^m^I)+w[0]+3936430074&4294967295,T=y+(_<<11&4294967295|_>>>21),_=I+(T^y^m)+w[3]+3572445317&4294967295,I=T+(_<<16&4294967295|_>>>16),_=m+(I^T^y)+w[6]+76029189&4294967295,m=I+(_<<23&4294967295|_>>>9),_=y+(m^I^T)+w[9]+3654602809&4294967295,y=m+(_<<4&4294967295|_>>>28),_=T+(y^m^I)+w[12]+3873151461&4294967295,T=y+(_<<11&4294967295|_>>>21),_=I+(T^y^m)+w[15]+530742520&4294967295,I=T+(_<<16&4294967295|_>>>16),_=m+(I^T^y)+w[2]+3299628645&4294967295,m=I+(_<<23&4294967295|_>>>9),_=y+(I^(m|~T))+w[0]+4096336452&4294967295,y=m+(_<<6&4294967295|_>>>26),_=T+(m^(y|~I))+w[7]+1126891415&4294967295,T=y+(_<<10&4294967295|_>>>22),_=I+(y^(T|~m))+w[14]+2878612391&4294967295,I=T+(_<<15&4294967295|_>>>17),_=m+(T^(I|~y))+w[5]+4237533241&4294967295,m=I+(_<<21&4294967295|_>>>11),_=y+(I^(m|~T))+w[12]+1700485571&4294967295,y=m+(_<<6&4294967295|_>>>26),_=T+(m^(y|~I))+w[3]+2399980690&4294967295,T=y+(_<<10&4294967295|_>>>22),_=I+(y^(T|~m))+w[10]+4293915773&4294967295,I=T+(_<<15&4294967295|_>>>17),_=m+(T^(I|~y))+w[1]+2240044497&4294967295,m=I+(_<<21&4294967295|_>>>11),_=y+(I^(m|~T))+w[8]+1873313359&4294967295,y=m+(_<<6&4294967295|_>>>26),_=T+(m^(y|~I))+w[15]+4264355552&4294967295,T=y+(_<<10&4294967295|_>>>22),_=I+(y^(T|~m))+w[6]+2734768916&4294967295,I=T+(_<<15&4294967295|_>>>17),_=m+(T^(I|~y))+w[13]+1309151649&4294967295,m=I+(_<<21&4294967295|_>>>11),_=y+(I^(m|~T))+w[4]+4149444226&4294967295,y=m+(_<<6&4294967295|_>>>26),_=T+(m^(y|~I))+w[11]+3174756917&4294967295,T=y+(_<<10&4294967295|_>>>22),_=I+(y^(T|~m))+w[2]+718787259&4294967295,I=T+(_<<15&4294967295|_>>>17),_=m+(T^(I|~y))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+T&4294967295}r.prototype.v=function(A,y){y===void 0&&(y=A.length);const m=y-this.blockSize,w=this.C;let I=this.h,T=0;for(;T<y;){if(I==0)for(;T<=m;)s(this,A,T),T+=this.blockSize;if(typeof A=="string"){for(;T<y;)if(w[I++]=A.charCodeAt(T++),I==this.blockSize){s(this,w),I=0;break}}else for(;T<y;)if(w[I++]=A[T++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=y},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;y=this.o*8;for(var m=A.length-8;m<A.length;++m)A[m]=y&255,y/=256;for(this.v(A),A=Array(16),y=0,m=0;m<4;++m)for(let w=0;w<32;w+=8)A[y++]=this.g[m]>>>w&255;return A};function i(A,y){var m=c;return Object.prototype.hasOwnProperty.call(m,A)?m[A]:m[A]=y(A)}function a(A,y){this.h=y;const m=[];let w=!0;for(let I=A.length-1;I>=0;I--){const T=A[I]|0;w&&T==y||(m[I]=T,w=!1)}this.g=m}var c={};function l(A){return-128<=A&&A<128?i(A,function(y){return new a([y|0],y<0?-1:0)}):new a([A|0],A<0?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return F(h(-A));const y=[];let m=1;for(let w=0;A>=m;w++)y[w]=A/m|0,m*=4294967296;return new a(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return F(d(A.substring(1),y));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=h(Math.pow(y,8));let w=p;for(let T=0;T<A.length;T+=8){var I=Math.min(8,A.length-T);const _=parseInt(A.substring(T,T+I),y);I<8?(I=h(Math.pow(y,I)),w=w.j(I).add(h(_))):(w=w.j(m),w=w.add(h(_)))}return w}var p=l(0),E=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(N(this))return-F(this).m();let A=0,y=1;for(let m=0;m<this.g.length;m++){const w=this.i(m);A+=(w>=0?w:4294967296+w)*y,y*=4294967296}return A},n.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(V(this))return"0";if(N(this))return"-"+F(this).toString(A);const y=h(Math.pow(A,6));var m=this;let w="";for(;;){const I=z(m,y).g;m=q(m,I.j(y));let T=((m.g.length>0?m.g[0]:m.h)>>>0).toString(A);if(m=I,V(m))return T+w;for(;T.length<6;)T="0"+T;w=T+w}},n.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function V(A){if(A.h!=0)return!1;for(let y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function N(A){return A.h==-1}n.l=function(A){return A=q(this,A),N(A)?-1:V(A)?0:1};function F(A){const y=A.g.length,m=[];for(let w=0;w<y;w++)m[w]=~A.g[w];return new a(m,~A.h).add(E)}n.abs=function(){return N(this)?F(this):this},n.add=function(A){const y=Math.max(this.g.length,A.g.length),m=[];let w=0;for(let I=0;I<=y;I++){let T=w+(this.i(I)&65535)+(A.i(I)&65535),_=(T>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);w=_>>>16,T&=65535,_&=65535,m[I]=_<<16|T}return new a(m,m[m.length-1]&-2147483648?-1:0)};function q(A,y){return A.add(F(y))}n.j=function(A){if(V(this)||V(A))return p;if(N(this))return N(A)?F(this).j(F(A)):F(F(this).j(A));if(N(A))return F(this.j(F(A)));if(this.l(b)<0&&A.l(b)<0)return h(this.m()*A.m());const y=this.g.length+A.g.length,m=[];for(var w=0;w<2*y;w++)m[w]=0;for(w=0;w<this.g.length;w++)for(let I=0;I<A.g.length;I++){const T=this.i(w)>>>16,_=this.i(w)&65535,me=A.i(I)>>>16,je=A.i(I)&65535;m[2*w+2*I]+=_*je,W(m,2*w+2*I),m[2*w+2*I+1]+=T*je,W(m,2*w+2*I+1),m[2*w+2*I+1]+=_*me,W(m,2*w+2*I+1),m[2*w+2*I+2]+=T*me,W(m,2*w+2*I+2)}for(A=0;A<y;A++)m[A]=m[2*A+1]<<16|m[2*A];for(A=y;A<2*y;A++)m[A]=0;return new a(m,0)};function W(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function Q(A,y){this.g=A,this.h=y}function z(A,y){if(V(y))throw Error("division by zero");if(V(A))return new Q(p,p);if(N(A))return y=z(F(A),y),new Q(F(y.g),F(y.h));if(N(y))return y=z(A,F(y)),new Q(F(y.g),y.h);if(A.g.length>30){if(N(A)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var m=E,w=y;w.l(A)<=0;)m=se(m),w=se(w);var I=he(m,1),T=he(w,1);for(w=he(w,2),m=he(m,2);!V(w);){var _=T.add(w);_.l(A)<=0&&(I=I.add(m),T=_),w=he(w,1),m=he(m,1)}return y=q(A,I.j(y)),new Q(I,y)}for(I=p;A.l(y)>=0;){for(m=Math.max(1,Math.floor(A.m()/y.m())),w=Math.ceil(Math.log(m)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),T=h(m),_=T.j(y);N(_)||_.l(A)>0;)m-=w,T=h(m),_=T.j(y);V(T)&&(T=E),I=I.add(T),A=q(A,_)}return new Q(I,A)}n.B=function(A){return z(this,A).h},n.and=function(A){const y=Math.max(this.g.length,A.g.length),m=[];for(let w=0;w<y;w++)m[w]=this.i(w)&A.i(w);return new a(m,this.h&A.h)},n.or=function(A){const y=Math.max(this.g.length,A.g.length),m=[];for(let w=0;w<y;w++)m[w]=this.i(w)|A.i(w);return new a(m,this.h|A.h)},n.xor=function(A){const y=Math.max(this.g.length,A.g.length),m=[];for(let w=0;w<y;w++)m[w]=this.i(w)^A.i(w);return new a(m,this.h^A.h)};function se(A){const y=A.g.length+1,m=[];for(let w=0;w<y;w++)m[w]=A.i(w)<<1|A.i(w-1)>>>31;return new a(m,A.h)}function he(A,y){const m=y>>5;y%=32;const w=A.g.length-m,I=[];for(let T=0;T<w;T++)I[T]=y>0?A.i(T+m)>>>y|A.i(T+m+1)<<32-y:A.i(T+m);return new a(I,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Dg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,zn=a}).apply(typeof Tf<"u"?Tf:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kg,Gs,Ng,wo,qc,Og,xg,Mg;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=l,h.apply(null,arguments)}function d(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,R,P){for(var $=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)$[ue-2]=arguments[ue];return u.prototype[R].apply(g,$)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function V(o,u){for(let g=1;g<arguments.length;g++){const R=arguments[g];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=o.length||0;const P=R.length||0;o.length=f+P;for(let $=0;$<P;$++)o[f+$]=R[$]}else o.push(R)}}class N{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){a.setTimeout(()=>{throw o},0)}function q(){var o=A;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class W{constructor(){this.h=this.g=null}add(u,f){const g=Q.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Q=new N(()=>new z,o=>o.reset());class z{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let se,he=!1,A=new W,y=()=>{const o=Promise.resolve(void 0);se=()=>{o.then(m)}};function m(){for(var o;o=q();){try{o.h.call(o.g)}catch(f){F(f)}var u=Q;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}he=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function me(o,u){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(me,I),me.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var je="closure_listenable_"+(Math.random()*1e6|0),Ne=0;function Ae(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++Ne,this.da=this.fa=!1}function ye(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ke(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function ln(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function Ct(o){const u={};for(const f in o)u[f]=o[f];return u}const ft="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fr(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let P=0;P<ft.length;P++)f=ft[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function Pn(o){this.src=o,this.g={},this.h=0}Pn.prototype.add=function(o,u,f,g,R){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const $=Lt(o,u,g,R);return $>-1?(u=o[$],f||(u.fa=!1)):(u=new Ae(u,this.src,P,!!g,R),u.fa=f,o.push(u)),u};function dr(o,u){const f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),P;(P=R>=0)&&Array.prototype.splice.call(g,R,1),P&&(ye(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Lt(o,u,f,g){for(let R=0;R<o.length;++R){const P=o[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return R}return-1}var It="closure_lm_"+(Math.random()*1e6|0),Vt={};function ie(o,u,f,g,R){if(Array.isArray(u)){for(let P=0;P<u.length;P++)ie(o,u[P],f,g,R);return null}return f=j(f),o&&o[je]?o.J(u,f,c(g)?!!g.capture:!1,R):oe(o,u,f,!1,g,R)}function oe(o,u,f,g,R,P){if(!u)throw Error("Invalid event type");const $=c(R)?!!R.capture:!!R;let ue=O(o);if(ue||(o[It]=ue=new Pn(o)),f=ue.add(u,f,g,$,P),f.proxy)return f;if(g=ze(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)T||(R=$),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(C(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ze(){function o(f){return u.call(o.src,o.listener,f)}const u=B;return o}function v(o,u,f,g,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)v(o,u[P],f,g,R);else g=c(g)?!!g.capture:!!g,f=j(f),o&&o[je]?(o=o.i,P=String(u).toString(),P in o.g&&(u=o.g[P],f=Lt(u,f,g,R),f>-1&&(ye(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[P],o.h--)))):o&&(o=O(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Lt(u,f,g,R)),(f=o>-1?u[o]:null)&&S(f))}function S(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[je])dr(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(C(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=O(u))?(dr(f,o),f.h==0&&(f.src=null,u[It]=null)):ye(o)}}}function C(o){return o in Vt?Vt[o]:Vt[o]="on"+o}function B(o,u){if(o.da)o=!0;else{u=new me(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&S(o),o=f.call(g,u)}return o}function O(o){return o=o[It],o instanceof Pn?o:null}var x="__closure_events_fn_"+(Math.random()*1e9>>>0);function j(o){return typeof o=="function"?o:(o[x]||(o[x]=function(u){return o.handleEvent(u)}),o[x])}function U(){w.call(this),this.i=new Pn(this),this.M=this,this.G=null}p(U,w),U.prototype[je]=!0,U.prototype.removeEventListener=function(o,u,f,g){v(this,o,u,f,g)};function L(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new I(u,o);else if(u instanceof I)u.target=u.target||o;else{var R=u;u=new I(g,o),fr(u,R)}R=!0;let P,$;if(f)for($=f.length-1;$>=0;$--)P=u.g=f[$],R=M(P,g,!0,u)&&R;if(P=u.g=o,R=M(P,g,!0,u)&&R,R=M(P,g,!1,u)&&R,f)for($=0;$<f.length;$++)P=u.g=f[$],R=M(P,g,!1,u)&&R}U.prototype.N=function(){if(U.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)ye(f[g]);delete o.g[u],o.h--}}this.G=null},U.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},U.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function M(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let P=0;P<u.length;++P){const $=u[P];if($&&!$.da&&$.capture==f){const ue=$.listener,qe=$.ha||$.src;$.fa&&dr(o.i,$),R=ue.call(qe,g)!==!1&&R}}return R&&!g.defaultPrevented}function X(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function H(o){o.g=X(()=>{o.g=null,o.i&&(o.i=!1,H(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Y extends w{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:H(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(o){w.call(this),this.h=o,this.g={}}p(Z,w);var fe=[];function we(o){Ke(o.g,function(u,f){this.g.hasOwnProperty(f)&&S(u)},o),o.g={}}Z.prototype.N=function(){Z.Z.N.call(this),we(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ee=a.JSON.stringify,rt=a.JSON.parse,st=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function wt(){}function At(){}var Ft={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $r(){I.call(this,"d")}p($r,I);function Xe(){I.call(this,"c")}p(Xe,I);var Ge={},Rs=null;function pr(){return Rs=Rs||new U}Ge.Ia="serverreachability";function Eu(o){I.call(this,Ge.Ia,o)}p(Eu,I);function Ps(o){const u=pr();L(u,new Eu(u))}Ge.STAT_EVENT="statevent";function vu(o,u){I.call(this,Ge.STAT_EVENT,o),this.stat=u}p(vu,I);function dt(o){const u=pr();L(u,new vu(u,o))}Ge.Ja="timingevent";function Tu(o,u){I.call(this,Ge.Ja,o),this.size=u}p(Tu,I);function Cs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function Vs(){this.g=!0}Vs.prototype.ua=function(){this.g=!1};function l_(o,u,f,g,R,P){o.info(function(){if(o.g)if(P){var $="",ue=P.split("&");for(let Se=0;Se<ue.length;Se++){var qe=ue[Se].split("=");if(qe.length>1){const Qe=qe[0];qe=qe[1];const Qt=Qe.split("_");$=Qt.length>=2&&Qt[1]=="type"?$+(Qe+"="+qe+"&"):$+(Qe+"=redacted&")}}}else $=null;else $=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+$})}function u_(o,u,f,g,R,P,$){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+$})}function jr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+f_(o,f)+(g?" "+g:"")})}function h_(o,u){o.info(function(){return"TIMEOUT: "+u})}Vs.prototype.info=function(){};function f_(o,u){if(!o.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var f=P[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let $=1;$<g.length;$++)g[$]=""}}}}return Ee(P)}catch{return u}}var Wi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Iu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},wu;function xa(){}p(xa,wt),xa.prototype.g=function(){return new XMLHttpRequest},wu=new xa;function Ds(o){return encodeURIComponent(String(o))}function d_(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function Cn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Au}function Au(){this.i=null,this.g="",this.h=!1}var Su={},Ma={};function La(o,u,f){o.M=1,o.A=zi(Gt(u)),o.u=f,o.R=!0,bu(o,null)}function bu(o,u){o.F=Date.now(),Ki(o),o.B=Gt(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Uu(f.i,"t",g),o.C=0,f=o.j.L,o.h=new Au,o.g=rh(o.j,f?u:null,!o.u),o.P>0&&(o.O=new Y(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(fe[0]=R.toString()),R=fe);for(let P=0;P<R.length;P++){const $=ie(f,R[P],g||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=o.J?Ct(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Ps(),l_(o.i,o.v,o.B,o.l,o.S,o.u)}Cn.prototype.ba=function(o){o=o.target;const u=this.O;u&&kn(o)==3?u.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const ue=kn(this.g),qe=this.g.ya(),Se=this.g.ca();if(!(ue<3)&&(ue!=3||this.g&&(this.h.h||this.g.la()||Ku(this.g)))){this.K||ue!=4||qe==7||(qe==8||Se<=0?Ps(3):Ps(2)),Fa(this);var u=this.g.ca();this.X=u;var f=p_(this);if(this.o=u==200,u_(this.i,this.v,this.B,this.l,this.S,ue,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var P=g;break t}}P=null}if(o=P)jr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ua(this,o);else{this.o=!1,this.m=3,dt(12),gr(this),ks(this);break e}}if(this.R){o=!0;let Qe;for(;!this.K&&this.C<f.length;)if(Qe=g_(this,f),Qe==Ma){ue==4&&(this.m=4,dt(14),o=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==Su){this.m=4,dt(15),jr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else jr(this.i,this.l,Qe,null),Ua(this,Qe);if(Ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ue!=4||f.length!=0||this.h.h||(this.m=1,dt(16),o=!1),this.o=this.o&&o,!o)jr(this.i,this.l,f,"[Invalid Chunked Response]"),gr(this),ks(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),za($),$.P=!0,dt(11))}}else jr(this.i,this.l,f,null),Ua(this,f);ue==4&&gr(this),this.o&&!this.K&&(ue==4?Zu(this.j,this):(this.o=!1,Ki(this)))}else C_(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,dt(12)):(this.m=0,dt(13)),gr(this),ks(this)}}}catch{}finally{}};function p_(o){if(!Ru(o))return o.g.la();const u=Ku(o.g);if(u==="")return"";let f="";const g=u.length,R=kn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return gr(o),ks(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<g;P++)o.h.h=!0,f+=o.h.i.decode(u[P],{stream:!(R&&P==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function Ru(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function g_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Ma:(f=Number(u.substring(f,g)),isNaN(f)?Su:(g+=1,g+f>u.length?Ma:(u=u.slice(g,g+f),o.C=g+f,u)))}Cn.prototype.cancel=function(){this.K=!0,gr(this)};function Ki(o){o.T=Date.now()+o.H,Pu(o,o.H)}function Pu(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Cs(h(o.aa,o),u)}function Fa(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Cn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(h_(this.i,this.B),this.M!=2&&(Ps(),dt(17)),gr(this),this.m=2,ks(this)):Pu(this,this.T-o)};function ks(o){o.j.I==0||o.K||Zu(o.j,o)}function gr(o){Fa(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,we(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Ua(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||Ba(f.h,o))){if(!o.L&&Ba(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Xi(f),Ji(f);else break e;Ka(f),dt(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Cs(h(f.Va,f),6e3));Du(f.h)<=1&&f.ta&&(f.ta=void 0)}else _r(f,11)}else if((o.L||f.g==o)&&Xi(f),!_(u))for(R=f.Ba.g.parse(u),u=0;u<R.length;u++){let Se=R[u];const Qe=Se[0];if(!(Qe<=f.K))if(f.K=Qe,Se=Se[1],f.I==2)if(Se[0]=="c"){f.M=Se[1],f.ba=Se[2];const Qt=Se[3];Qt!=null&&(f.ka=Qt,f.j.info("VER="+f.ka));const yr=Se[4];yr!=null&&(f.za=yr,f.j.info("SVER="+f.za));const Nn=Se[5];Nn!=null&&typeof Nn=="number"&&Nn>0&&(g=1.5*Nn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const On=o.g;if(On){const eo=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var P=g.h;P.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&($a(P,P.h),P.h=null))}if(g.G){const Ga=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;Ga&&(g.wa=Ga,Ve(g.J,g.G,Ga))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var $=o;if(g.na=nh(g,g.L?g.ba:null,g.W),$.L){ku(g.h,$);var ue=$,qe=g.O;qe&&(ue.H=qe),ue.D&&(Fa(ue),Ki(ue)),g.g=$}else Yu(g);f.i.length>0&&Yi(f)}else Se[0]!="stop"&&Se[0]!="close"||_r(f,7);else f.I==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?_r(f,7):Wa(f):Se[0]!="noop"&&f.l&&f.l.qa(Se),f.A=0)}}Ps(4)}catch{}}var m_=class{constructor(o,u){this.g=o,this.map=u}};function Cu(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Du(o){return o.h?1:o.g?o.g.size:0}function Ba(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function $a(o,u){o.g?o.g.add(u):o.h=u}function ku(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Cu.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Nu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return b(o.i)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function __(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let R,P=null;g>=0?(R=o[f].substring(0,g),P=o[f].substring(g+1)):R=o[f],u(R,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Vn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Vn?(this.l=o.l,Ns(this,o.j),this.o=o.o,this.g=o.g,Os(this,o.u),this.h=o.h,ja(this,Bu(o.i)),this.m=o.m):o&&(u=String(o).match(Ou))?(this.l=!1,Ns(this,u[1]||"",!0),this.o=xs(u[2]||""),this.g=xs(u[3]||"",!0),Os(this,u[4]),this.h=xs(u[5]||"",!0),ja(this,u[6]||"",!0),this.m=xs(u[7]||"")):(this.l=!1,this.i=new Ls(null,this.l))}Vn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Ms(u,xu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ms(u,xu,!0),"@"),o.push(Ds(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ms(f,f.charAt(0)=="/"?v_:E_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ms(f,I_)),o.join("")},Vn.prototype.resolve=function(o){const u=Gt(this);let f=!!o.j;f?Ns(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)Os(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=u.h.lastIndexOf("/");R!=-1&&(g=u.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const P=[];for(let $=0;$<R.length;){const ue=R[$++];ue=="."?g&&$==R.length&&P.push(""):ue==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&$==R.length&&P.push("")):(P.push(ue),g=!0)}g=P.join("/")}else g=R}return f?u.h=g:f=o.i.toString()!=="",f?ja(u,Bu(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Gt(o){return new Vn(o)}function Ns(o,u,f){o.j=f?xs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Os(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function ja(o,u,f){u instanceof Ls?(o.i=u,w_(o.i,o.l)):(f||(u=Ms(u,T_)),o.i=new Ls(u,o.l))}function Ve(o,u,f){o.i.set(u,f)}function zi(o){return Ve(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function xs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ms(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,y_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function y_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var xu=/[#\/\?@]/g,E_=/[#\?:]/g,v_=/[#\?]/g,T_=/[#\?@]/g,I_=/#/g;function Ls(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function mr(o){o.g||(o.g=new Map,o.h=0,o.i&&__(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Ls.prototype,n.add=function(o,u){mr(this),this.i=null,o=qr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Mu(o,u){mr(o),u=qr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Lu(o,u){return mr(o),u=qr(o,u),o.g.has(u)}n.forEach=function(o,u){mr(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)};function Fu(o,u){mr(o);let f=[];if(typeof u=="string")Lu(o,u)&&(f=f.concat(o.g.get(qr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}n.set=function(o,u){return mr(this),this.i=null,o=qr(this,o),Lu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Fu(this,o),o.length>0?String(o[0]):u):u};function Uu(o,u,f){Mu(o,u),f.length>0&&(o.i=null,o.g.set(qr(o,u),b(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const R=Ds(f);f=Fu(this,f);for(let P=0;P<f.length;P++){let $=R;f[P]!==""&&($+="="+Ds(f[P])),o.push($)}}return this.i=o.join("&")};function Bu(o){const u=new Ls;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function qr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function w_(o,u){u&&!o.j&&(mr(o),o.i=null,o.g.forEach(function(f,g){const R=g.toLowerCase();g!=R&&(Mu(this,g),Uu(this,R,f))},o)),o.j=u}function A_(o,u){const f=new Vs;if(a.Image){const g=new Image;g.onload=d(Dn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=d(Dn,f,"TestLoadImage: error",!1,u,g),g.onabort=d(Dn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=d(Dn,f,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function S_(o,u){const f=new Vs,g=new AbortController,R=setTimeout(()=>{g.abort(),Dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?Dn(f,"TestPingServer: ok",!0,u):Dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Dn(f,"TestPingServer: error",!1,u)})}function Dn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function b_(){this.g=new st}function qa(o){this.i=o.Sb||null,this.h=o.ab||!1}p(qa,wt),qa.prototype.g=function(){return new Gi(this.i,this.h)};function Gi(o,u){U.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Gi,U),n=Gi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Us(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$u(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function $u(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Fs(this):Us(this),this.readyState==3&&$u(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Fs(this))},n.Na=function(o){this.g&&(this.response=o,Fs(this))},n.ga=function(){this.g&&Fs(this)};function Fs(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Us(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Us(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ju(o){let u="";return Ke(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ha(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ju(f),typeof o=="string"?f!=null&&Ds(f):Ve(o,u,f))}function Oe(o){U.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Oe,U);var R_=/^https?$/i,P_=["POST","PUT"];n=Oe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wu.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){qu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(P_,u,void 0)>=0)||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,$]of f)this.g.setRequestHeader(P,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){qu(this,P)}};function qu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Hu(o),Qi(o)}function Hu(o){o.A||(o.A=!0,L(o,"complete"),L(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,L(this,"complete"),L(this,"abort"),Qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),Oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Wu(this):this.Xa())},n.Xa=function(){Wu(this)};function Wu(o){if(o.h&&typeof i<"u"){if(o.v&&kn(o)==4)setTimeout(o.Ca.bind(o),0);else if(L(o,"readystatechange"),kn(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=P===0){let $=String(o.D).match(Ou)[1]||null;!$&&a.self&&a.self.location&&($=a.self.location.protocol.slice(0,-1)),g=!R_.test($?$.toLowerCase():"")}f=g}if(f)L(o,"complete"),L(o,"success");else{o.o=6;try{var R=kn(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",Hu(o)}}finally{Qi(o)}}}}function Qi(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||L(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function kn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return kn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),rt(u)}};function Ku(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function C_(o){const u={};o=(o.g&&kn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(_(o[g]))continue;var f=d_(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}ln(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function zu(o){this.za=0,this.i=[],this.j=new Vs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bs("baseRetryDelayMs",5e3,o),this.Za=Bs("retryDelaySeedMs",1e4,o),this.Ta=Bs("forwardChannelMaxRetries",2,o),this.va=Bs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Cu(o&&o.concurrentRequestLimit),this.Ba=new b_,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=zu.prototype,n.ka=8,n.I=1,n.connect=function(o,u,f,g){dt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=nh(this,null,this.W),Yi(this)};function Wa(o){if(Gu(o),o.I==3){var u=o.V++,f=Gt(o.J);if(Ve(f,"SID",o.M),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),$s(o,f),u=new Cn(o,o.j,u),u.M=2,u.A=zi(Gt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=rh(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ki(u)}th(o)}function Ji(o){o.g&&(za(o),o.g.cancel(),o.g=null)}function Gu(o){Ji(o),o.v&&(a.clearTimeout(o.v),o.v=null),Xi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Yi(o){if(!Vu(o.h)&&!o.m){o.m=!0;var u=o.Ea;se||y(),he||(se(),he=!0),A.add(u,o),o.D=0}}function V_(o,u){return Du(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Cs(h(o.Ea,o,u),eh(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new Cn(this,this.j,o);let P=this.o;if(this.U&&(P?(P=Ct(P),fr(P,this.U)):P=this.U),this.u!==null||this.R||(R.J=P,P=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ju(this,R,u),f=Gt(this.J),Ve(f,"RID",o),Ve(f,"CVER",22),this.G&&Ve(f,"X-HTTP-Session-Id",this.G),$s(this,f),P&&(this.R?u="headers="+Ds(ju(P))+"&"+u:this.u&&Ha(f,this.u,P)),$a(this.h,R),this.Ra&&Ve(f,"TYPE","init"),this.S?(Ve(f,"$req",u),Ve(f,"SID","null"),R.U=!0,La(R,f,null)):La(R,f,u),this.I=2}}else this.I==3&&(o?Qu(this,o):this.i.length==0||Vu(this.h)||Qu(this))};function Qu(o,u){var f;u?f=u.l:f=o.V++;const g=Gt(o.J);Ve(g,"SID",o.M),Ve(g,"RID",f),Ve(g,"AID",o.K),$s(o,g),o.u&&o.o&&Ha(g,o.u,o.o),f=new Cn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Ju(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),$a(o.h,f),La(f,g,u)}function $s(o,u){o.H&&Ke(o.H,function(f,g){Ve(u,g,f)}),o.l&&Ke({},function(f,g){Ve(u,g,f)})}function Ju(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var R=o.i;let ue=-1;for(;;){const qe=["count="+f];ue==-1?f>0?(ue=R[0].g,qe.push("ofs="+ue)):ue=0:qe.push("ofs="+ue);let Se=!0;for(let Qe=0;Qe<f;Qe++){var P=R[Qe].g;const Qt=R[Qe].map;if(P-=ue,P<0)ue=Math.max(0,R[Qe].g-100),Se=!1;else try{P="req"+P+"_"||"";try{var $=Qt instanceof Map?Qt:Object.entries(Qt);for(const[yr,Nn]of $){let On=Nn;c(Nn)&&(On=Ee(Nn)),qe.push(P+yr+"="+encodeURIComponent(On))}}catch(yr){throw qe.push(P+"type="+encodeURIComponent("_badmap")),yr}}catch{g&&g(Qt)}}if(Se){$=qe.join("&");break e}}$=void 0}return o=o.i.splice(0,f),u.G=o,$}function Yu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;se||y(),he||(se(),he=!0),A.add(u,o),o.A=0}}function Ka(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Cs(h(o.Da,o),eh(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Xu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Cs(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,dt(10),Ji(this),Xu(this))};function za(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Xu(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Gt(o.na);Ve(u,"RID","rpc"),Ve(u,"SID",o.M),Ve(u,"AID",o.K),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ve(u,"TO",o.ia),Ve(u,"TYPE","xmlhttp"),$s(o,u),o.u&&o.o&&Ha(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=zi(Gt(u)),f.u=null,f.R=!0,bu(f,o)}n.Va=function(){this.C!=null&&(this.C=null,Ji(this),Ka(this),dt(19))};function Xi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Zu(o,u){var f=null;if(o.g==u){Xi(o),za(o),o.g=null;var g=2}else if(Ba(o.h,u))f=u.G,ku(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var R=o.D;g=pr(),L(g,new Tu(g,f)),Yi(o)}else Yu(o);else if(R=u.m,R==3||R==0&&u.X>0||!(g==1&&V_(o,u)||g==2&&Ka(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),R){case 1:_r(o,5);break;case 4:_r(o,10);break;case 3:_r(o,6);break;default:_r(o,2)}}}function eh(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function _r(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const R=!g;g=new Vn(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ns(g,"https"),zi(g),R?A_(g.toString(),f):S_(g.toString(),f)}else dt(2);o.I=0,o.l&&o.l.pa(u),th(o),Gu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function th(o){if(o.I=0,o.ja=[],o.l){const u=Nu(o.h);(u.length!=0||o.i.length!=0)&&(V(o.ja,u),V(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function nh(o,u,f){var g=f instanceof Vn?Gt(f):new Vn(f);if(g.g!="")u&&(g.g=u+"."+g.g),Os(g,g.u);else{var R=a.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const P=new Vn(null);g&&Ns(P,g),u&&(P.g=u),R&&Os(P,R),f&&(P.h=f),g=P}return f=o.G,u=o.wa,f&&u&&Ve(g,f,u),Ve(g,"VER",o.ka),$s(o,g),g}function rh(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Oe(new qa({ab:f})):new Oe(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}n=sh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Zi(){}Zi.prototype.g=function(o,u){return new St(o,u)};function St(o,u){U.call(this),this.g=new zu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!_(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Hr(this)}p(St,U),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Wa(this.g)},St.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=Ee(o),o=f);u.i.push(new m_(u.Ya++,o)),u.I==3&&Yi(u)},St.prototype.N=function(){this.g.l=null,delete this.j,Wa(this.g),delete this.g,St.Z.N.call(this)};function ih(o){$r.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(ih,$r);function oh(){Xe.call(this),this.status=1}p(oh,Xe);function Hr(o){this.g=o}p(Hr,sh),Hr.prototype.ra=function(){L(this.g,"a")},Hr.prototype.qa=function(o){L(this.g,new ih(o))},Hr.prototype.pa=function(o){L(this.g,new oh)},Hr.prototype.oa=function(){L(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Mg=function(){return new Zi},xg=function(){return pr()},Og=Ge,qc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,wo=Wi,Iu.COMPLETE="complete",Ng=Iu,At.EventType=Ft,Ft.OPEN="a",Ft.CLOSE="b",Ft.ERROR="c",Ft.MESSAGE="d",U.prototype.listen=U.prototype.J,Gs=At,Oe.prototype.listenOnce=Oe.prototype.K,Oe.prototype.getLastError=Oe.prototype.Ha,Oe.prototype.getLastErrorCode=Oe.prototype.ya,Oe.prototype.getStatus=Oe.prototype.ca,Oe.prototype.getResponseJson=Oe.prototype.La,Oe.prototype.getResponseText=Oe.prototype.la,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Fa,kg=Oe}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let Is="12.13.0";function nA(n){Is=n}/**
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
 */const xr=new bl("@firebase/firestore");function Jr(){return xr.logLevel}function K(n,...e){if(xr.logLevel<=ge.DEBUG){const t=e.map(Ll);xr.debug(`Firestore (${Is}): ${n}`,...t)}}function An(n,...e){if(xr.logLevel<=ge.ERROR){const t=e.map(Ll);xr.error(`Firestore (${Is}): ${n}`,...t)}}function Mr(n,...e){if(xr.logLevel<=ge.WARN){const t=e.map(Ll);xr.warn(`Firestore (${Is}): ${n}`,...t)}}function Ll(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ne(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Lg(n,r,t)}function Lg(n,e,t){let r=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw An(r),new Error(r)}function Ie(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Lg(e,s,r)}function ce(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Fg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ot.UNAUTHENTICATED))}shutdown(){}}class sA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iA{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new Fg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class oA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class aA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new oA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class If{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new If(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new If(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Fl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=lA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function Hc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return mc(s)===mc(i)?de(s,i):mc(s)?1:-1}return de(n.length,e.length)}const uA=55296,hA=57343;function mc(n){const e=n.charCodeAt(0);return e>=uA&&e<=hA}function ps(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const wf="__name__";class Xt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ne(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ne(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Xt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return de(e.length,t.length)}static compareSegments(e,t){const r=Xt.isNumericId(e),s=Xt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Xt.extractNumericId(e).compare(Xt.extractNumericId(t)):Hc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zn.fromString(e.substring(4,e.length-2))}}class Pe extends Xt{construct(e,t,r){return new Pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Pe(t)}static emptyPath(){return new Pe([])}}const fA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Xt{construct(e,t,r){return new tt(e,t,r)}static isValidIdentifier(e){return fA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wf}static keyField(){return new tt([wf])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new G(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new G(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(t)}static emptyPath(){return new tt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Pe.fromString(e))}static fromName(e){return new J(Pe.fromString(e).popFirst(5))}static empty(){return new J(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Pe(e.slice()))}}/**
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
 */function Ug(n,e,t){if(!t)throw new G(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dA(n,e,t,r){if(e===!0&&r===!0)throw new G(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Af(n){if(!J.isDocumentKey(n))throw new G(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sf(n){if(J.isDocumentKey(n))throw new G(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ta(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne(12329,{type:typeof n})}function Gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ta(n);throw new G(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Be(n,e){const t={typeString:n};return e&&(t.value=e),t}function Fi(n,e){if(!Bg(n))throw new G(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new G(D.INVALID_ARGUMENT,t);return!0}/**
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
 */const bf=-62135596800,Rf=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Rf);return new De(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bf)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rf}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:De._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fi(e,De._jsonSchema))return new De(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}De._jsonSchemaVersion="firestore/timestamp/1.0",De._jsonSchema={type:Be("string",De._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
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
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new De(0,0))}static max(){return new ae(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ti=-1;function pA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new De(t+1,0):new De(t,r));return new Zn(s,J.empty(),e)}function gA(n){return new Zn(n.readTime,n.key,Ti)}class Zn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Zn(ae.min(),J.empty(),Ti)}static max(){return new Zn(ae.max(),J.empty(),Ti)}}function mA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=J.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
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
 */async function ws(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==_A)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(d=>{a[h]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function EA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function As(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ia{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ia.ce=-1;/**
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
 */const Ul=-1;function wa(n){return n==null}function Go(n){return n===0&&1/n==-1/0}function vA(n){return typeof n=="number"&&Number.isInteger(n)&&!Go(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const $g="";function TA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pf(e)),e=IA(n.get(t),e);return Pf(e)}function IA(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case $g:t+="";break;default:t+=i}}return t}function Pf(n){return n+$g+""}/**
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
 */function Cf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ur(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ke{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ze(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vf(this.data.getIterator())}getIteratorFrom(e){return new Vf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new He(this.comparator);return t.data=e,t}}class Vf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Pt([])}unionWith(e){let t=new He(tt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Pt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qg("Invalid base64 string: "+i):i}}(e);return new nt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const wA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(n){if(Ie(!!n,39018),typeof n=="string"){let e=0;const t=wA.exec(n);if(Ie(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(n.seconds),nanos:xe(n.nanos)}}function xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function tr(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
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
 */const Hg="server_timestamp",Wg="__type__",Kg="__previous_value__",zg="__local_write_time__";function Bl(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Wg])==null?void 0:r.stringValue)===Hg}function Aa(n){const e=n.mapValue.fields[Kg];return Bl(e)?Aa(e):e}function Ii(n){const e=er(n.mapValue.fields[zg].timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class AA{constructor(e,t,r,s,i,a,c,l,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const Qo="(default)";class wi{constructor(e,t){this.projectId=e,this.database=t||Qo}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database===Qo}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}function SA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new G(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(n.options.projectId,e)}/**
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
 */const Gg="__type__",bA="__max__",co={mapValue:{}},Qg="__vector__",Jo="value";function nr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bl(n)?4:PA(n)?9007199254740991:RA(n)?10:11:ne(28295,{value:n})}function an(n,e){if(n===e)return!0;const t=nr(n);if(t!==nr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ii(n).isEqual(Ii(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=er(s.timestampValue),c=er(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return tr(s.bytesValue).isEqual(tr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=xe(s.doubleValue),c=xe(i.doubleValue);return a===c?Go(a)===Go(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return ps(n.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Cf(a)!==Cf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!an(a[l],c[l])))return!1;return!0}(n,e);default:return ne(52216,{left:n})}}function Ai(n,e){return(n.values||[]).find(t=>an(t,e))!==void 0}function gs(n,e){if(n===e)return 0;const t=nr(n),r=nr(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=xe(i.integerValue||i.doubleValue),l=xe(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Df(n.timestampValue,e.timestampValue);case 4:return Df(Ii(n),Ii(e));case 5:return Hc(n.stringValue,e.stringValue);case 6:return function(i,a){const c=tr(i),l=tr(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=de(c[h],l[h]);if(d!==0)return d}return de(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=de(xe(i.latitude),xe(a.latitude));return c!==0?c:de(xe(i.longitude),xe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return kf(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,b,V,N;const c=i.fields||{},l=a.fields||{},h=(E=c[Jo])==null?void 0:E.arrayValue,d=(b=l[Jo])==null?void 0:b.arrayValue,p=de(((V=h==null?void 0:h.values)==null?void 0:V.length)||0,((N=d==null?void 0:d.values)==null?void 0:N.length)||0);return p!==0?p:kf(h,d)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===co.mapValue&&a===co.mapValue)return 0;if(i===co.mapValue)return 1;if(a===co.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const E=Hc(l[p],d[p]);if(E!==0)return E;const b=gs(c[l[p]],h[d[p]]);if(b!==0)return b}return de(l.length,d.length)}(n.mapValue,e.mapValue);default:throw ne(23264,{he:t})}}function Df(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=er(n),r=er(e),s=de(t.seconds,r.seconds);return s!==0?s:de(t.nanos,r.nanos)}function kf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=gs(t[s],r[s]);if(i)return i}return de(t.length,r.length)}function ms(n){return Wc(n)}function Wc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=er(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return tr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return J.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Wc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Wc(t.fields[a])}`;return s+"}"}(n.mapValue):ne(61005,{value:n})}function Ao(n){switch(nr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Aa(n);return e?16+Ao(e):16;case 5:return 2*n.stringValue.length;case 6:return tr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ao(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ur(r.fields,(i,a)=>{s+=i.length+Ao(a)}),s}(n.mapValue);default:throw ne(13486,{value:n})}}function Nf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Kc(n){return!!n&&"integerValue"in n}function $l(n){return!!n&&"arrayValue"in n}function Of(n){return!!n&&"nullValue"in n}function xf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function So(n){return!!n&&"mapValue"in n}function RA(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Gg])==null?void 0:r.stringValue)===Qg}function ai(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ur(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ai(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ai(n.arrayValue.values[t]);return e}return{...n}}function PA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===bA}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!So(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(t)}setAll(e){let t=tt.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ai(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());So(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];So(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ur(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(ai(this.value))}}function Jg(n){const e=[];return ur(n.fields,(t,r)=>{const s=new tt([t]);if(So(r)){const i=Jg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Pt(e)}/**
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
 */class ct{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,ae.min(),ae.min(),ae.min(),Tt.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,ae.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,ae.min(),ae.min(),Tt.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,ae.min(),ae.min(),Tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yo{constructor(e,t){this.position=e,this.inclusive=t}}function Mf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),t.key):r=gs(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!an(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Si{constructor(e,t="asc"){this.field=e,this.dir=t}}function CA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Yg{}class Ue extends Yg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new DA(e,t,r):t==="array-contains"?new OA(e,r):t==="in"?new xA(e,r):t==="not-in"?new MA(e,r):t==="array-contains-any"?new LA(e,r):new Ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new kA(e,r):new NA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(gs(t,this.value)):t!==null&&nr(this.value)===nr(t)&&this.matchesComparison(gs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends Yg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new zt(e,t)}matches(e){return Xg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xg(n){return n.op==="and"}function Zg(n){return VA(n)&&Xg(n)}function VA(n){for(const e of n.filters)if(e instanceof zt)return!1;return!0}function zc(n){if(n instanceof Ue)return n.field.canonicalString()+n.op.toString()+ms(n.value);if(Zg(n))return n.filters.map(e=>zc(e)).join(",");{const e=n.filters.map(t=>zc(t)).join(",");return`${n.op}(${e})`}}function em(n,e){return n instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&an(r.value,s.value)}(n,e):n instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&em(a,s.filters[c]),!0):!1}(n,e):void ne(19439)}function tm(n){return n instanceof Ue?function(t){return`${t.field.canonicalString()} ${t.op} ${ms(t.value)}`}(n):n instanceof zt?function(t){return t.op.toString()+" {"+t.getFilters().map(tm).join(" ,")+"}"}(n):"Filter"}class DA extends Ue{constructor(e,t,r){super(e,t,r),this.key=J.fromName(r.referenceValue)}matches(e){const t=J.comparator(e.key,this.key);return this.matchesComparison(t)}}class kA extends Ue{constructor(e,t){super(e,"in",t),this.keys=nm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class NA extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=nm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>J.fromName(r.referenceValue))}class OA extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $l(t)&&Ai(t.arrayValue,this.value)}}class xA extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ai(this.value.arrayValue,t)}}class MA extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ai(this.value.arrayValue,t)}}class LA extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$l(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ai(this.value.arrayValue,r))}}/**
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
 */class FA{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Ff(n,e=null,t=[],r=[],s=null,i=null,a=null){return new FA(n,e,t,r,s,i,a)}function jl(n){const e=ce(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>zc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ms(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ms(r)).join(",")),e.Te=t}return e.Te}function ql(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!em(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Lf(n.startAt,e.startAt)&&Lf(n.endAt,e.endAt)}function Gc(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ss{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function UA(n,e,t,r,s,i,a,c){return new Ss(n,e,t,r,s,i,a,c)}function Hl(n){return new Ss(n)}function Uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function BA(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function rm(n){return n.collectionGroup!==null}function ci(n){const e=ce(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new He(tt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Si(i,r))}),t.has(tt.keyField().canonicalString())||e.Ie.push(new Si(tt.keyField(),r))}return e.Ie}function rn(n){const e=ce(n);return e.Ee||(e.Ee=$A(e,ci(n))),e.Ee}function $A(n,e){if(n.limitType==="F")return Ff(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Si(s.field,i)});const t=n.endAt?new Yo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yo(n.startAt.position,n.startAt.inclusive):null;return Ff(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Qc(n,e){const t=n.filters.concat([e]);return new Ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function jA(n,e){const t=n.explicitOrderBy.concat([e]);return new Ss(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Jc(n,e,t){return new Ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sa(n,e){return ql(rn(n),rn(e))&&n.limitType===e.limitType}function sm(n){return`${jl(rn(n))}|lt:${n.limitType}`}function Yr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>tm(s)).join(", ")}]`),wa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ms(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ms(s)).join(",")),`Target(${r})`}(rn(n))}; limitType=${n.limitType})`}function ba(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=Mf(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,ci(r),s)||r.endAt&&!function(a,c,l){const h=Mf(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,ci(r),s))}(n,e)}function qA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function im(n){return(e,t)=>{let r=!1;for(const s of ci(n)){const i=HA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HA(n,e,t){const r=n.field.isKeyField()?J.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?gs(l,h):ne(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:n.dir})}}/**
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
 */class Fr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jg(this.inner)}size(){return this.innerSize}}/**
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
 */const WA=new ke(J.comparator);function Sn(){return WA}const om=new ke(J.comparator);function Qs(...n){let e=om;for(const t of n)e=e.insert(t.key,t);return e}function am(n){let e=om;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rr(){return li()}function cm(){return li()}function li(){return new Fr(n=>n.toString(),(n,e)=>n.isEqual(e))}const KA=new ke(J.comparator),zA=new He(J.comparator);function pe(...n){let e=zA;for(const t of n)e=e.add(t);return e}const GA=new He(de);function QA(){return GA}/**
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
 */function Wl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function lm(n){return{integerValue:""+n}}function JA(n,e){return vA(e)?lm(e):Wl(n,e)}/**
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
 */class Ra{constructor(){this._=void 0}}function YA(n,e,t){return n instanceof bi?function(s,i){const a={fields:{[Wg]:{stringValue:Hg},[zg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bl(i)&&(i=Aa(i)),i&&(a.fields[Kg]=i),{mapValue:a}}(t,e):n instanceof Ri?hm(n,e):n instanceof Pi?fm(n,e):function(s,i){const a=um(s,i),c=Bf(a)+Bf(s.Ae);return Kc(a)&&Kc(s.Ae)?lm(c):Wl(s.serializer,c)}(n,e)}function XA(n,e,t){return n instanceof Ri?hm(n,e):n instanceof Pi?fm(n,e):t}function um(n,e){return n instanceof Xo?function(r){return Kc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class bi extends Ra{}class Ri extends Ra{constructor(e){super(),this.elements=e}}function hm(n,e){const t=dm(e);for(const r of n.elements)t.some(s=>an(s,r))||t.push(r);return{arrayValue:{values:t}}}class Pi extends Ra{constructor(e){super(),this.elements=e}}function fm(n,e){let t=dm(e);for(const r of n.elements)t=t.filter(s=>!an(s,r));return{arrayValue:{values:t}}}class Xo extends Ra{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Bf(n){return xe(n.integerValue||n.doubleValue)}function dm(n){return $l(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class ZA{constructor(e,t){this.field=e,this.transform=t}}function eS(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Pi&&s instanceof Pi?ps(r.elements,s.elements,an):r instanceof Xo&&s instanceof Xo?an(r.Ae,s.Ae):r instanceof bi&&s instanceof bi}(n.transform,e.transform)}class tS{constructor(e,t){this.version=e,this.transformResults=t}}class qt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Pa{}function pm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Kl(n.key,qt.none()):new Ui(n.key,n.data,qt.none());{const t=n.data,r=Tt.empty();let s=new He(tt.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new hr(n.key,r,new Pt(s.toArray()),qt.none())}}function nS(n,e,t){n instanceof Ui?function(s,i,a){const c=s.value.clone(),l=jf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof hr?function(s,i,a){if(!bo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=jf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(gm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ui(n,e,t,r){return n instanceof Ui?function(i,a,c,l){if(!bo(i.precondition,a))return c;const h=i.value.clone(),d=qf(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof hr?function(i,a,c,l){if(!bo(i.precondition,a))return c;const h=qf(i.fieldTransforms,l,a),d=a.data;return d.setAll(gm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,c){return bo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function rS(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=um(r.transform,s||null);i!=null&&(t===null&&(t=Tt.empty()),t.set(r.field,i))}return t||null}function $f(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ps(r,s,(i,a)=>eS(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ui extends Pa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hr extends Pa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function jf(n,e,t){const r=new Map;Ie(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,XA(a,c,t[s]))}return r}function qf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,YA(i,a,e))}return r}class Kl extends Pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sS extends Pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iS{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nS(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ui(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ui(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=pm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(t,r)=>$f(t,r))&&ps(this.baseMutations,e.baseMutations,(t,r)=>$f(t,r))}}class zl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ie(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return KA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new zl(e,t,r,s)}}/**
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
 */class oS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Le,_e;function cS(n){switch(n){case D.OK:return ne(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ne(15467,{code:n})}}function mm(n){if(n===void 0)return An("GRPC error has no .code"),D.UNKNOWN;switch(n){case Le.OK:return D.OK;case Le.CANCELLED:return D.CANCELLED;case Le.UNKNOWN:return D.UNKNOWN;case Le.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Le.INTERNAL:return D.INTERNAL;case Le.UNAVAILABLE:return D.UNAVAILABLE;case Le.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Le.NOT_FOUND:return D.NOT_FOUND;case Le.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Le.ABORTED:return D.ABORTED;case Le.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Le.DATA_LOSS:return D.DATA_LOSS;default:return ne(39323,{code:n})}}(_e=Le||(Le={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function lS(){return new TextEncoder}/**
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
 */const uS=new zn([4294967295,4294967295],0);function Hf(n){const e=lS().encode(n),t=new Dg;return t.update(e),new Uint8Array(t.digest())}function Wf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zn([t,r],0),new zn([s,i],0)]}class Gl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Js(`Invalid padding: ${t}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Js(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=zn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(zn.fromNumber(r)));return s.compare(uS)===1&&(s=new zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Hf(e),[r,s]=Wf(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Gl(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Hf(e),[r,s]=Wf(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Bi(ae.min(),s,new ke(de),Sn(),pe())}}class $i{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $i(r,t,pe(),pe(),pe())}}/**
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
 */class Ro{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class _m{constructor(e,t){this.targetId=e,this.Ce=t}}class ym{constructor(e,t,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Kf{constructor(){this.ve=0,this.Fe=zf(),this.Me=nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=pe(),t=pe(),r=pe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ne(38017,{changeType:i})}}),new $i(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=zf()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Sn(),this.Je=lo(),this.He=lo(),this.Ze=new ke(de)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ne(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Gc(i))if(r===0){const a=new J(i.path);this.et(t,a,ct.newNoDocument(a,ae.min()))}else Ie(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=tr(r).toUint8Array()}catch(l){if(l instanceof qg)return Mr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Gl(a,s,i)}catch(l){return Mr(l instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Gc(c.target)){const l=new J(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ct.newNoDocument(l,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let r=pe();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Bi(e,t,this.Ze,this.je,r);return this.je=Sn(),this.Je=lo(),this.He=lo(),this.Ze=new ke(de),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Kf,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new He(de),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new He(de),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||K("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kf),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function lo(){return new ke(J.comparator)}function zf(){return new ke(J.comparator)}const fS={asc:"ASCENDING",desc:"DESCENDING"},dS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pS={and:"AND",or:"OR"};class gS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yc(n,e){return n.useProto3Json||wa(e)?e:{value:e}}function Zo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Em(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mS(n,e){return Zo(n,e.toTimestamp())}function sn(n){return Ie(!!n,49232),ae.fromTimestamp(function(t){const r=er(t);return new De(r.seconds,r.nanos)}(n))}function Ql(n,e){return Xc(n,e).canonicalString()}function Xc(n,e){const t=function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vm(n){const e=Pe.fromString(n);return Ie(Sm(e),10190,{key:e.toString()}),e}function Zc(n,e){return Ql(n.databaseId,e.path)}function _c(n,e){const t=vm(e);if(t.get(1)!==n.databaseId.projectId)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new J(Im(t))}function Tm(n,e){return Ql(n.databaseId,e)}function _S(n){const e=vm(n);return e.length===4?Pe.emptyPath():Im(e)}function el(n){return new Pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Im(n){return Ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Gf(n,e,t){return{name:Zc(n,e),fields:t.value.mapValue.fields}}function yS(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ie(d===void 0||typeof d=="string",58123),nt.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),nt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const d=h.code===void 0?D.UNKNOWN:mm(h.code);return new G(d,h.message||"")}(a);t=new ym(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_c(n,r.document.name),i=sn(r.document.updateTime),a=r.document.createTime?sn(r.document.createTime):ae.min(),c=new Tt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new Ro(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_c(n,r.document),i=r.readTime?sn(r.readTime):ae.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ro([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_c(n,r.document),i=r.removedTargetIds||[];t=new Ro([],i,s,null)}else{if(!("filter"in e))return ne(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new aS(s,i),c=r.targetId;t=new _m(c,a)}}return t}function ES(n,e){let t;if(e instanceof Ui)t={update:Gf(n,e.key,e.value)};else if(e instanceof Kl)t={delete:Zc(n,e.key)};else if(e instanceof hr)t={update:Gf(n,e.key,e.data),updateMask:PS(e.fieldMask)};else{if(!(e instanceof sS))return ne(16599,{dt:e.type});t={verify:Zc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof bi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ri)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Pi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xo)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ne(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:mS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)}(n,e.precondition)),t}function vS(n,e){return n&&n.length>0?(Ie(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?sn(s.updateTime):sn(i);return a.isEqual(ae.min())&&(a=sn(i)),new tS(a,s.transformResults||[])}(t,e))):[]}function TS(n,e){return{documents:[Tm(n,e.path)]}}function IS(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Tm(n,s);const i=function(h){if(h.length!==0)return Am(zt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(E){return{field:Xr(E.field),direction:SS(E.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Yc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function wS(n){let e=_S(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const E=wm(p);return E instanceof zt&&Zg(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(E=>function(V){return new Si(Zr(V.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(p){let E;return E=typeof p=="object"?p.value:p,wa(E)?null:E}(t.limit));let l=null;t.startAt&&(l=function(p){const E=!!p.before,b=p.values||[];return new Yo(b,E)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const E=!p.before,b=p.values||[];return new Yo(b,E)}(t.endAt)),UA(e,s,a,i,c,"F",l,h)}function AS(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Zr(t.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zr(t.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zr(t.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Zr(t.unaryFilter.field);return Ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ue.create(Zr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return zt.create(t.compositeFilter.filters.map(r=>wm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne(1026)}}(t.compositeFilter.op))}(n):ne(30097,{filter:n})}function SS(n){return fS[n]}function bS(n){return dS[n]}function RS(n){return pS[n]}function Xr(n){return{fieldPath:n.canonicalString()}}function Zr(n){return tt.fromServerFormat(n.fieldPath)}function Am(n){return n instanceof Ue?function(t){if(t.op==="=="){if(xf(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NAN"}};if(Of(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xf(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NOT_NAN"}};if(Of(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(t.field),op:bS(t.op),value:t.value}}}(n):n instanceof zt?function(t){const r=t.getFilters().map(s=>Am(s));return r.length===1?r[0]:{compositeFilter:{op:RS(t.op),filters:r}}}(n):ne(54877,{filter:n})}function PS(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Sm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function bm(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class yn{constructor(e,t,r,s,i=ae.min(),a=ae.min(),c=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class CS{constructor(e){this.yt=e}}function VS(n){const e=wS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jc(e,e.limit,"L"):e}/**
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
 */class DS{constructor(){this.bn=new kS}addToCollectionParentIndex(e,t){return this.bn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Zn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class kS{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new He(Pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Pe.comparator)).toArray()}}/**
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
 */const Qf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rm=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Rm,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
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
 */class rr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new rr(0)}static ar(){return new rr(-1)}}/**
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
 */const Jf="LruGarbageCollector",NS=1048576;function Yf([n,e],[t,r]){const s=de(n,t);return s===0?de(e,r):s}class OS{constructor(e){this.Pr=e,this.buffer=new He(Yf),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Yf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xS{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(Jf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){As(t)?K(Jf,"Ignoring IndexedDB error during garbage collection: ",t):await ws(t)}await this.Ar(3e5)})}}class MS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Ia.ce);const r=new OS(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Qf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qf):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Jr()<=ge.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function LS(n,e){return new MS(n,e)}/**
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
 */class FS{constructor(){this.changes=new Fr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class US{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class BS{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ui(r.mutation,s,Pt.empty(),De.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=pe()){const s=Rr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Qs();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Rr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,pe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Sn();const a=li(),c=function(){return li()}();return t.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof hr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ui(d.mutation,h,d.mutation.getFieldMask(),De.now())):a.set(h.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>c.set(h,new US(d,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=li();let s=new ke((a,c)=>a-c),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||Pt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||pe()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=cm();d.forEach(E=>{if(!i.has(E)){const b=pm(t.get(E),r.get(E));b!==null&&p.set(E,b),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return BA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Rr());let c=Ti,l=i;return a.next(h=>k.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(e,d).next(E=>{l=l.insert(d,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,pe())).next(d=>({batchId:c,changes:am(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new J(t)).next(r=>{let s=Qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Qs();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,l=>{const h=function(p,E){return new Ss(E,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,E)=>{a=a.insert(p,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))});let c=Qs();return a.forEach((l,h)=>{const d=i.get(l);d!==void 0&&ui(d.mutation,h,Pt.empty(),De.now()),ba(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class $S{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return k.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:VS(s.bundledQuery),readTime:sn(s.readTime)}}(t)),k.resolve()}}/**
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
 */class jS{constructor(){this.overlays=new ke(J.comparator),this.Lr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rr();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Rr(),i=t.length+1,a=new J(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ke((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Rr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=Rr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return k.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new oS(t,r));let i=this.Lr.get(t);i===void 0&&(i=pe(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class qS{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class Jl{constructor(){this.kr=new He(Je.Kr),this.qr=new He(Je.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Je(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Je(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new J(new Pe([])),r=new Je(t,e),s=new Je(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new J(new Pe([])),r=new Je(t,e),s=new Je(t,e+1);let i=pe();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Je(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return J.comparator(e.key,t.key)||de(e.Jr,t.Jr)}static Ur(e,t){return de(e.Jr,t.Jr)||J.comparator(e.key,t.key)}}/**
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
 */class HS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new He(Je.Kr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new iS(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Hr=this.Hr.add(new Je(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Ul:this.Yn-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Je(t,0),s=new Je(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const c=this.Zr(a.Jr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new He(de);return t.forEach(s=>{const i=new Je(s,0),a=new Je(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],c=>{r=r.add(c.Jr)})}),k.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new Je(new J(i),0);let c=new He(de);return this.Hr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Jr)),!0)},a),k.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ie(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return k.forEach(t.mutations,s=>{const i=new Je(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new Je(t,0),s=this.Hr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class WS{constructor(e){this.ti=e,this.docs=function(){return new ke(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=Sn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Sn();const a=t.path,c=new J(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||mA(gA(d),r)<=0||(s.has(d.key)||ba(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ne(9500)}ni(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new KS(this)}getSize(e){return k.resolve(this.size)}}class KS extends FS{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class zS{constructor(e){this.persistence=e,this.ri=new Fr(t=>jl(t),ql),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.ii=0,this.si=new Jl,this.targetCount=0,this.oi=rr._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),k.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new rr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.lr(t),k.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.si.containsKey(t))}}/**
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
 */class Pm{constructor(e,t){this._i={},this.overlays={},this.ai=new Ia(0),this.ui=!1,this.ui=!0,this.ci=new qS,this.referenceDelegate=e(this),this.li=new zS(this),this.indexManager=new DS,this.remoteDocumentCache=function(s){return new WS(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new CS(t),this.Pi=new $S(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new HS(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);const s=new GS(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return k.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class GS extends yA{constructor(e){super(),this.currentSequenceNumber=e}}class Yl{constructor(e){this.persistence=e,this.Ri=new Jl,this.Ai=null}static Vi(e){return new Yl(e)}get di(){if(this.Ai)return this.Ai;throw ne(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.di,r=>{const s=J.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,ae.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ea{constructor(e,t){this.persistence=e,this.fi=new Fr(r=>TA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=LS(this,t)}static Vi(e,t){return new ea(e,t)}Ti(){}Ii(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return k.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,ae.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ao(e.data.value)),t}wr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Xl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=pe(),s=pe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Xl(e,t.fromCache,r,s)}}/**
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
 */class QS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class JS{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return wv()?8:EA(ht())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new QS;return this.ys(e,t,a).next(c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Jr()<=ge.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Yr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(Jr()<=ge.DEBUG&&K("QueryEngine","Query:",Yr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Jr()<=ge.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Yr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(t))):k.resolve())}gs(e,t){if(Uf(t))return k.resolve(null);let r=rn(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Jc(t,null,"F"),r=rn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=pe(...i);return this.fs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ss(t,c);return this.bs(t,h,a,l.readTime)?this.gs(e,Jc(t,null,"F")):this.Ds(e,h,t,l)}))})))}ps(e,t,r,s){return Uf(t)||s.isEqual(ae.min())?k.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?k.resolve(null):(Jr()<=ge.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yr(t)),this.Ds(e,a,t,pA(s,Ti)).next(c=>c))})}Ss(e,t){let r=new He(im(e));return t.forEach((s,i)=>{ba(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Jr()<=ge.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Yr(t)),this.fs.getDocumentsMatchingQuery(e,t,Zn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Zl="LocalStore",YS=3e8;class XS{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ke(de),this.Fs=new Fr(i=>jl(i),ql),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BS(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function ZS(n,e,t,r){return new XS(n,e,t,r)}async function Cm(n,e){const t=ce(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=pe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:c}))})})}function eb(n,e){const t=ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,E=p.keys();let b=k.resolve();return E.forEach(V=>{b=b.next(()=>d.getEntry(l,V)).next(N=>{const F=h.docVersions.get(V);Ie(F!==null,48541),N.version.compareTo(F)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=pe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Vm(n){const e=ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function tb(n,e){const t=ce(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach((d,p)=>{const E=s.get(p);if(!E)return;c.push(t.li.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,d.addedDocuments,p)));let b=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(nt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),function(N,F,q){return N.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=YS?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(E,b,d)&&c.push(t.li.updateTargetData(i,b))});let l=Sn(),h=pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(nb(i,a,e.documentUpdates).next(d=>{l=d.Bs,h=d.Ls})),!r.isEqual(ae.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.vs=s,i))}function nb(n,e,t){let r=pe(),s=pe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Sn();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):K(Zl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Bs:a,Ls:s}})}function rb(n,e){const t=ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ul),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sb(n,e){const t=ce(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new yn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function tl(n,e,t){const r=ce(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!As(a))throw a;K(Zl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Xf(n,e,t){const r=ce(n);let s=ae.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,d){const p=ce(l),E=p.Fs.get(d);return E!==void 0?k.resolve(p.vs.get(E)):p.li.getTargetData(h,d)}(r,a,rn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:ae.min(),t?i:pe())).next(c=>(ib(r,qA(e),c),{documents:c,ks:i})))}function ib(n,e,t){let r=n.Ms.get(e)||ae.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class Zf{constructor(){this.activeTargetIds=QA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ob{constructor(){this.vo=new Zf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Zf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ab{Mo(e){}shutdown(){}}/**
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
 */const ed="ConnectivityMonitor";class td{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(ed,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(ed,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uo=null;function nl(){return uo===null?uo=function(){return 268435456+Math.round(2147483648*Math.random())}():uo++,"0x"+uo.toString(16)}/**
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
 */const yc="RestConnection",cb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class lb{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Qo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=nl(),c=this.Qo(e,t.toUriEncodedString());K(yc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),d=Ni(h);return this.zo(e,c,l,r,d).then(p=>(K(yc,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Mr(yc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Is}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=cb[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class ub{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const it="WebChannelConnection",Hs=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class us extends lb{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!us.c_){const e=xg();Hs(e,Og.STAT_EVENT,t=>{t.stat===qc.PROXY?K(it,"STAT_EVENT: detected buffering proxy"):t.stat===qc.NOPROXY&&K(it,"STAT_EVENT: detected no buffering proxy")}),us.c_=!0}}zo(e,t,r,s,i){const a=nl();return new Promise((c,l)=>{const h=new kg;h.setWithCredentials(!0),h.listenOnce(Ng.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case wo.NO_ERROR:const p=h.getResponseJson();K(it,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case wo.TIMEOUT:K(it,`RPC '${e}' ${a} timed out`),l(new G(D.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const E=h.getStatus();if(K(it,`RPC '${e}' ${a} failed with status:`,E,"response text:",h.getResponseText()),E>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const N=function(q){const W=q.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(W)>=0?W:D.UNKNOWN}(V.status);l(new G(N,V.message))}else l(new G(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new G(D.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{K(it,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);K(it,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)})}T_(e,t,r){const s=nl(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");K(it,`Creating RPC '${e}' stream ${s}: ${h}`,c);const d=a.createWebChannel(h,c);this.I_(d);let p=!1,E=!1;const b=new ub({Jo:V=>{E?K(it,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(p||(K(it,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),K(it,`RPC '${e}' stream ${s} sending:`,V),d.send(V))},Ho:()=>d.close()});return Hs(d,Gs.EventType.OPEN,()=>{E||(K(it,`RPC '${e}' stream ${s} transport opened.`),b.i_())}),Hs(d,Gs.EventType.CLOSE,()=>{E||(E=!0,K(it,`RPC '${e}' stream ${s} transport closed`),b.o_(),this.E_(d))}),Hs(d,Gs.EventType.ERROR,V=>{E||(E=!0,Mr(it,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),b.o_(new G(D.UNAVAILABLE,"The operation could not be completed")))}),Hs(d,Gs.EventType.MESSAGE,V=>{var N;if(!E){const F=V.data[0];Ie(!!F,16349);const q=F,W=(q==null?void 0:q.error)||((N=q[0])==null?void 0:N.error);if(W){K(it,`RPC '${e}' stream ${s} received error:`,W);const Q=W.status;let z=function(A){const y=Le[A];if(y!==void 0)return mm(y)}(Q),se=W.message;Q==="NOT_FOUND"&&se.includes("database")&&se.includes("does not exist")&&se.includes(this.databaseId.database)&&Mr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),z===void 0&&(z=D.INTERNAL,se="Unknown error status: "+Q+" with message "+W.message),E=!0,b.o_(new G(z,se)),d.close()}else K(it,`RPC '${e}' stream ${s} received:`,F),b.__(F)}}),us.u_(),setTimeout(()=>{b.s_()},0),b}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Mg()}}/**
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
 */function hb(n){return new us(n)}function Ec(){return typeof document<"u"?document:null}/**
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
 */function Ca(n){return new gS(n,!0)}/**
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
 */us.c_=!1;class Dm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const nd="PersistentStream";class km{constructor(e,t,r,s,i,a,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Dm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(An(t.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new G(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(nd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(K(nd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fb extends km{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=yS(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ae.min():a.readTime?sn(a.readTime):ae.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=el(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=Gc(l)?{documents:TS(i,l)}:{query:IS(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Em(i,a.resumeToken);const h=Yc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ae.min())>0){c.readTime=Zo(i,a.snapshotVersion.toTimestamp());const h=Yc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=AS(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=el(this.serializer),t.removeTarget=e,this.K_(t)}}class db extends km{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=vS(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=el(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ES(this.serializer,r))};this.K_(t)}}/**
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
 */class pb{}class gb extends pb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Xc(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(D.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.jo(e,Xc(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(D.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function mb(n,e,t,r){return new gb(n,e,t,r)}class _b{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(An(t),this.aa=!1):K("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const cn="RemoteStore";class yb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new rr(1e3),this.Va=new rr(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{Ur(this)&&(K(cn,"Restarting streams for network reachability change."),await async function(l){const h=ce(l);h.da.add(4),await ji(h),h.ga.set("Unknown"),h.da.delete(4),await Va(h)}(this))})}),this.ga=new _b(r,s)}}async function Va(n){if(Ur(n))for(const e of n.ma)await e(!0)}async function ji(n){for(const e of n.ma)await e(!1)}function rl(n,e){return n.Ea.get(e)||void 0}function Nm(n,e){const t=ce(n),r=rl(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=function(c,l){const h=rl(c,l);h!==void 0&&c.Ra.delete(h);const d=function(E,b){return b%2!=0?E.Va.next():E.Aa.next()}(c,l);return c.Ea.set(l,d),c.Ra.set(d,l),d}(t,e.targetId);K(cn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new yn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),ru(t)?nu(t):bs(t).O_()&&tu(t,i)}function eu(n,e){const t=ce(n),r=bs(t),s=rl(t,e);K(cn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&Om(t,s),t.Ia.size===0&&(r.O_()?r.L_():Ur(t)&&t.ga.set("Unknown"))}function tu(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void K(cn,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}bs(n).Z_(e)}function Om(n,e){n.pa.$e(e),bs(n).X_(e)}function nu(n){n.pa=new hS({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):pe()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),bs(n).start(),n.ga.ua()}function ru(n){return Ur(n)&&!bs(n).x_()&&n.Ia.size>0}function Ur(n){return ce(n).da.size===0}function xm(n){n.pa=void 0}async function Eb(n){n.ga.set("Online")}async function vb(n){n.Ia.forEach((e,t)=>{tu(n,e)})}async function Tb(n,e){xm(n),ru(n)?(n.ga.ha(e),nu(n)):n.ga.set("Unknown")}async function Ib(n,e,t){if(n.ga.set("Online"),e instanceof ym&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds){if(s.Ia.has(c)){const l=s.Ra.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.Ra.delete(c)),s.Ia.delete(c)}s.pa.removeTarget(c)}}(n,e)}catch(r){K(cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(n,r)}else if(e instanceof Ro?n.pa.Xe(e):e instanceof _m?n.pa.st(e):n.pa.tt(e),!t.isEqual(ae.min()))try{const r=await Vm(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.pa.Tt(a);c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(nt.EMPTY_BYTE_STRING,p.snapshotVersion)),Om(i,h);const E=new yn(p.target,h,d,p.sequenceNumber);tu(i,E)});const l=function(d,p){const E=new Map;p.targetChanges.forEach((V,N)=>{const F=d.Ra.get(N);F!==void 0&&E.set(F,V)});let b=new ke(de);return p.targetMismatches.forEach((V,N)=>{const F=d.Ra.get(V);F!==void 0&&(b=b.insert(F,N))}),new Bi(p.snapshotVersion,E,b,p.documentUpdates,p.resolvedLimboDocuments)}(i,c);return i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){K(cn,"Failed to raise snapshot:",r),await ta(n,r)}}async function ta(n,e,t){if(!As(e))throw e;n.da.add(1),await ji(n),n.ga.set("Offline"),t||(t=()=>Vm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K(cn,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Va(n)})}function Mm(n,e){return e().catch(t=>ta(n,t,e))}async function Da(n){const e=ce(n),t=sr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ul;for(;wb(e);)try{const s=await rb(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Ab(e,s)}catch(s){await ta(e,s)}Lm(e)&&Fm(e)}function wb(n){return Ur(n)&&n.Ta.length<10}function Ab(n,e){n.Ta.push(e);const t=sr(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Lm(n){return Ur(n)&&!sr(n).x_()&&n.Ta.length>0}function Fm(n){sr(n).start()}async function Sb(n){sr(n).ra()}async function bb(n){const e=sr(n);for(const t of n.Ta)e.ea(t.mutations)}async function Rb(n,e,t){const r=n.Ta.shift(),s=zl.from(r,e,t);await Mm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Da(n)}async function Pb(n,e){e&&sr(n).Y_&&await async function(r,s){if(function(a){return cS(a)&&a!==D.ABORTED}(s.code)){const i=r.Ta.shift();sr(r).B_(),await Mm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Da(r)}}(n,e),Lm(n)&&Fm(n)}async function rd(n,e){const t=ce(n);t.asyncQueue.verifyOperationInProgress(),K(cn,"RemoteStore received new credentials");const r=Ur(t);t.da.add(3),await ji(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Va(t)}async function Cb(n,e){const t=ce(n);e?(t.da.delete(2),await Va(t)):e||(t.da.add(2),await ji(t),t.ga.set("Unknown"))}function bs(n){return n.ya||(n.ya=function(t,r,s){const i=ce(t);return i.sa(),new fb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:Eb.bind(null,n),Yo:vb.bind(null,n),t_:Tb.bind(null,n),H_:Ib.bind(null,n)}),n.ma.push(async e=>{e?(n.ya.B_(),ru(n)?nu(n):n.ga.set("Unknown")):(await n.ya.stop(),xm(n))})),n.ya}function sr(n){return n.wa||(n.wa=function(t,r,s){const i=ce(t);return i.sa(),new db(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Sb.bind(null,n),t_:Pb.bind(null,n),ta:bb.bind(null,n),na:Rb.bind(null,n)}),n.ma.push(async e=>{e?(n.wa.B_(),await Da(n)):(await n.wa.stop(),n.Ta.length>0&&(K(cn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
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
 */class su{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new su(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(n,e){if(An("AsyncQueue",`${e}: ${n}`),As(n))return new G(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class hs{static emptySet(e){return new hs(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||J.comparator(t.key,r.key):(t,r)=>J.comparator(t.key,r.key),this.keyedMap=Qs(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class sd{constructor(){this.Sa=new ke(J.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):ne(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal((t,r)=>{e.push(r)}),e}}class _s{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new _s(e,t,hs.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Vb{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class Db{constructor(){this.queries=id(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=ce(t),i=s.queries;s.queries=id(),i.forEach((a,c)=>{for(const l of c.va)l.onError(r)})})(this,new G(D.ABORTED,"Firestore shutting down"))}}function id(){return new Fr(n=>sm(n),Sa)}async function kb(n,e){const t=ce(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new Vb,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=iu(a,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&ou(t)}async function Nb(n,e){const t=ce(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ob(n,e){const t=ce(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.va)c.Na(s)&&(r=!0);a.Ca=s}}r&&ou(t)}function xb(n,e,t){const r=ce(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function ou(n){n.xa.forEach(e=>{e.next()})}var sl,od;(od=sl||(sl={})).Ba="default",od.Cache="cache";class Mb{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==sl.Cache}}/**
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
 */class Um{constructor(e){this.key=e}}class Bm{constructor(e){this.key=e}}class Lb{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=pe(),this.mutatedKeys=pe(),this.iu=im(e),this.su=new hs(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new sd,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const E=s.get(d),b=ba(this.query,p)?p:null,V=!!E&&this.mutatedKeys.has(E.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let F=!1;E&&b?E.data.isEqual(b.data)?V!==N&&(r.track({type:3,doc:b}),F=!0):this.uu(E,b)||(r.track({type:2,doc:b}),F=!0,(l&&this.iu(b,l)>0||h&&this.iu(b,h)<0)&&(c=!0)):!E&&b?(r.track({type:0,doc:b}),F=!0):E&&!b&&(r.track({type:1,doc:E}),F=!0,(l||h)&&(c=!0)),F&&(b?(a=a.add(b),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{su:a,au:r,bs:c,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((d,p)=>function(b,V){const N=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{Vt:F})}};return N(b)-N(V)}(d.type,p.type)||this.iu(d.doc,p.doc)),this.cu(r),s=s??!1;const c=t&&!s?this.lu():[],l=this.ru.size===0&&this.current&&!s?1:0,h=l!==this.nu;return this.nu=l,a.length!==0||h?{snapshot:new _s(this.query,e.su,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new sd,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=pe(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const t=[];return e.forEach(r=>{this.ru.has(r)||t.push(new Bm(r))}),this.ru.forEach(r=>{e.has(r)||t.push(new Um(r))}),t}Tu(e){this.tu=e.ks,this.ru=pe();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return _s.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const au="SyncEngine";class Fb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ub{constructor(e){this.key=e,this.Eu=!1}}class Bb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new Fr(c=>sm(c),Sa),this.Vu=new Map,this.du=new Set,this.mu=new ke(J.comparator),this.fu=new Map,this.gu=new Jl,this.pu={},this.yu=new Map,this.wu=rr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function $b(n,e,t=!0){const r=Km(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await $m(r,e,t,!0),s}async function jb(n,e){const t=Km(n);await $m(t,e,!0,!1)}async function $m(n,e,t,r){const s=await sb(n.localStore,rn(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await qb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Nm(n.remoteStore,s),c}async function qb(n,e,t,r,s){n.bu=(p,E,b)=>async function(N,F,q,W){let Q=F.view._u(q);Q.bs&&(Q=await Xf(N.localStore,F.query,!1).then(({documents:A})=>F.view._u(A,Q)));const z=W&&W.targetChanges.get(F.targetId),se=W&&W.targetMismatches.get(F.targetId)!=null,he=F.view.applyChanges(Q,N.isPrimaryClient,z,se);return cd(N,F.targetId,he.hu),he.snapshot}(n,p,E,b);const i=await Xf(n.localStore,e,!0),a=new Lb(e,i.ks),c=a._u(i.documents),l=$i.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);cd(n,t,h.hu);const d=new Fb(e,t,a);return n.Au.set(e,d),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),h.snapshot}async function Hb(n,e,t){const r=ce(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(a=>!Sa(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&eu(r.remoteStore,s.targetId),il(r,s.targetId)}).catch(ws)):(il(r,s.targetId),await tl(r.localStore,s.targetId,!0))}async function Wb(n,e){const t=ce(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),eu(t.remoteStore,r.targetId))}async function Kb(n,e,t){const r=Zb(n);try{const s=await function(a,c){const l=ce(a),h=De.now(),d=c.reduce((b,V)=>b.add(V.key),pe());let p,E;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=Sn(),N=pe();return l.xs.getEntries(b,d).next(F=>{V=F,V.forEach((q,W)=>{W.isValidDocument()||(N=N.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,V)).next(F=>{p=F;const q=[];for(const W of c){const Q=rS(W,p.get(W.key).overlayedDocument);Q!=null&&q.push(new hr(W.key,Q,Jg(Q.value.mapValue),qt.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,q,c)}).next(F=>{E=F;const q=F.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(b,F.batchId,q)})}).then(()=>({batchId:E.batchId,changes:am(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.pu[a.currentUser.toKey()];h||(h=new ke(de)),h=h.insert(c,l),a.pu[a.currentUser.toKey()]=h}(r,s.batchId,t),await qi(r,s.changes),await Da(r.remoteStore)}catch(s){const i=iu(s,"Failed to persist write");t.reject(i)}}async function jm(n,e){const t=ce(n);try{const r=await tb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.fu.get(i);a&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?Ie(a.Eu,14607):s.removedDocuments.size>0&&(Ie(a.Eu,42227),a.Eu=!1))}),await qi(t,r,e)}catch(r){await ws(r)}}function ad(n,e,t){const r=ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach((i,a)=>{const c=a.view.Oa(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=ce(a);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const E of p.va)E.Oa(c)&&(h=!0)}),h&&ou(l)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zb(n,e,t){const r=ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let a=new ke(J.comparator);a=a.insert(i,ct.newNoDocument(i,ae.min()));const c=pe().add(i),l=new Bi(ae.min(),new Map,new ke(de),a,c);await jm(r,l),r.mu=r.mu.remove(i),r.fu.delete(e),cu(r)}else await tl(r.localStore,e,!1).then(()=>il(r,e,t)).catch(ws)}async function Gb(n,e){const t=ce(n),r=e.batch.batchId;try{const s=await eb(t.localStore,e);Hm(t,r,null),qm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qi(t,s)}catch(s){await ws(s)}}async function Qb(n,e,t){const r=ce(n);try{const s=await function(a,c){const l=ce(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ie(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);Hm(r,e,t),qm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qi(r,s)}catch(s){await ws(s)}}function qm(n,e){(n.yu.get(e)||[]).forEach(t=>{t.resolve()}),n.yu.delete(e)}function Hm(n,e,t){const r=ce(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function il(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach(r=>{n.gu.containsKey(r)||Wm(n,r)})}function Wm(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(eu(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),cu(n))}function cd(n,e,t){for(const r of t)r instanceof Um?(n.gu.addReference(r.key,e),Jb(n,r)):r instanceof Bm?(K(au,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||Wm(n,r.key)):ne(19791,{Cu:r})}function Jb(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(K(au,"New document in limbo: "+t),n.du.add(r),cu(n))}function cu(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new J(Pe.fromString(e)),r=n.wu.next();n.fu.set(r,new Ub(t)),n.mu=n.mu.insert(t,r),Nm(n.remoteStore,new yn(rn(Hl(t.path)),r,"TargetPurposeLimboResolution",Ia.ce))}}async function qi(n,e,t){const r=ce(n),s=[],i=[],a=[];r.Au.isEmpty()||(r.Au.forEach((c,l)=>{a.push(r.bu(l,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Xl.Es(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ru.H_(s),await async function(l,h){const d=ce(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(h,E=>k.forEach(E.Ts,b=>d.persistence.referenceDelegate.addReference(p,E.targetId,b)).next(()=>k.forEach(E.Is,b=>d.persistence.referenceDelegate.removeReference(p,E.targetId,b)))))}catch(p){if(!As(p))throw p;K(Zl,"Failed to update sequence numbers: "+p)}for(const p of h){const E=p.targetId;if(!p.fromCache){const b=d.vs.get(E),V=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(V);d.vs=d.vs.insert(E,N)}}}(r.localStore,i))}async function Yb(n,e){const t=ce(n);if(!t.currentUser.isEqual(e)){K(au,"User change. New user:",e.toKey());const r=await Cm(t.localStore,e);t.currentUser=e,function(i,a){i.yu.forEach(c=>{c.forEach(l=>{l.reject(new G(D.CANCELLED,a))})}),i.yu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(t,r.Ns)}}function Xb(n,e){const t=ce(n),r=t.fu.get(e);if(r&&r.Eu)return pe().add(r.key);{let s=pe();const i=t.Vu.get(e);if(!i)return s;for(const a of i){const c=t.Au.get(a);s=s.unionWith(c.view.ou)}return s}}function Km(n){const e=ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zb.bind(null,e),e.Ru.H_=Ob.bind(null,e.eventManager),e.Ru.Du=xb.bind(null,e.eventManager),e}function Zb(n){const e=ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qb.bind(null,e),e}class na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ca(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return ZS(this.persistence,new JS,e.initialUser,this.serializer)}xu(e){return new Pm(Yl.Vi,this.serializer)}Mu(e){return new ob}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}na.provider={build:()=>new na};class eR extends na{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){Ie(this.persistence.referenceDelegate instanceof ea,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xS(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Pm(r=>ea.Vi(r,t),this.serializer)}}class ol{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ad(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yb.bind(null,this.syncEngine),await Cb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Db}()}createDatastore(e){const t=Ca(e.databaseInfo.databaseId),r=hb(e.databaseInfo);return mb(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new yb(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ad(this.syncEngine,t,0),function(){return td.v()?new td:new ab}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,d){const p=new Bb(s,i,a,c,l,h);return d&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ce(s);K(cn,"RemoteStore shutting down."),i.da.add(5),await ji(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ol.provider={build:()=>new ol};/**
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
 */class tR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ir="FirestoreClient";class nR{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=Fl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{K(ir,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(K(ir,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=iu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vc(n,e){n.asyncQueue.verifyOperationInProgress(),K(ir,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Cm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ld(n,e){n.asyncQueue.verifyOperationInProgress();const t=await rR(n);K(ir,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>rd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>rd(e.remoteStore,s)),n._onlineComponents=e}async function rR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(ir,"Using user provided OfflineComponentProvider");try{await vc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Mr("Error using user provided cache. Falling back to memory cache: "+t),await vc(n,new na)}}else K(ir,"Using default OfflineComponentProvider"),await vc(n,new eR(void 0));return n._offlineComponents}async function zm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(ir,"Using user provided OnlineComponentProvider"),await ld(n,n._uninitializedComponentsProvider._online)):(K(ir,"Using default OnlineComponentProvider"),await ld(n,new ol))),n._onlineComponents}function sR(n){return zm(n).then(e=>e.syncEngine)}async function ud(n){const e=await zm(n),t=e.eventManager;return t.onListen=$b.bind(null,e.syncEngine),t.onUnlisten=Hb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Wb.bind(null,e.syncEngine),t}function iR(n,e,t,r){const s=new tR(r),i=new Mb(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>kb(await ud(n),i)),()=>{s.Ku(),n.asyncQueue.enqueueAndForget(async()=>Nb(await ud(n),i))}}function oR(n,e){const t=new Cr;return n.asyncQueue.enqueueAndForget(async()=>Kb(await sR(n),e,t)),t.promise}/**
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
 */const aR="ComponentProvider",hd=new Map;function cR(n,e,t,r,s){return new AA(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Gm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Qm="firestore.googleapis.com",fd=!0;class dd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qm,this.ssl=fd}else this.host=e.host,this.ssl=e.ssl??fd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NS)throw new G(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gm(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ka{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rA;switch(r.type){case"firstParty":return new aA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hd.get(t);r&&(K(aR,"Removing Datastore"),hd.delete(t),r.terminate())}(this),Promise.resolve()}}function lR(n,e,t,r={}){var h;n=Gn(n,ka);const s=Ni(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&Hp(`https://${c}`),i.host!==Qm&&i.host!==c&&Mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Dr(l,a)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=mv(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new G(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(E)}n._authCredentials=new sA(new Fg(d,p))}}/**
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
 */class Br{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class $e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Fi(t,$e._jsonSchema))return new $e(e,r||null,new J(Pe.fromString(t.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:Be("string",$e._jsonSchemaVersion),referencePath:Be("string")};class Qn extends Br{constructor(e,t,r){super(e,t,Hl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new J(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function pd(n,e,...t){if(n=We(n),Ug("collection","path",e),n instanceof ka){const r=Pe.fromString(e,...t);return Sf(r),new Qn(n,null,r)}{if(!(n instanceof $e||n instanceof Qn))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return Sf(r),new Qn(n.firestore,null,r)}}function Ys(n,e,...t){if(n=We(n),arguments.length===1&&(e=Fl.newId()),Ug("doc","path",e),n instanceof ka){const r=Pe.fromString(e,...t);return Af(r),new $e(n,null,new J(r))}{if(!(n instanceof $e||n instanceof Qn))throw new G(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return Af(r),new $e(n.firestore,n instanceof Qn?n.converter:null,new J(r))}}/**
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
 */const gd="AsyncQueue";class md{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Dm(this,"async_queue_retry"),this.lc=()=>{const r=Ec();r&&K(gd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=Ec();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Ec();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const t=new Cr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!As(e))throw e;K(gd,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const t=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,An("INTERNAL UNHANDLED ERROR: ",_d(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=su.createAndSchedule(this,e,t,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&ne(47125,{Rc:_d(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function _d(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ys extends ka{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new md,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new md(e),this._firestoreClient=void 0,await e}}}function uR(n,e){const t=typeof n=="object"?n:Gp(),r=typeof n=="string"?n:Qo,s=Pl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pv("firestore");i&&lR(s,...i)}return s}function Jm(n){if(n._terminated)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hR(n),n._firestoreClient}function hR(n){var r,s,i,a;const e=n._freezeSettings(),t=cR(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new nR(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(nt.fromBase64String(e))}catch(t){throw new G(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ot(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fi(e,Ot._jsonSchema))return Ot.fromBase64String(e.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:Be("string",Ot._jsonSchemaVersion),bytes:Be("string")};/**
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
 */class lu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Na{constructor(e){this._methodName=e}}/**
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
 */class on{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(Fi(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:Be("string",on._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
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
 */class Ht{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fi(e,Ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ht(e.vectorValues);throw new G(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:Be("string",Ht._jsonSchemaVersion),vectorValues:Be("object")};/**
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
 */const fR=/^__.*__$/;class dR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ui(e,this.data,t,this.fieldTransforms)}}class Ym{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new hr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{dataSource:n})}}class uu{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new uu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return ra(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Xm(this.dataSource)&&fR.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class pR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ca(e)}V(e,t,r,s=!1){return new uu({dataSource:e,methodName:t,targetDoc:r,path:tt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hu(n){const e=n._freezeSettings(),t=Ca(n._databaseId);return new pR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gR(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);du("Data must be an object, but it was:",a,r);const c=Zm(r,a);let l,h;if(i.merge)l=new Pt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const E=Es(e,p,t);if(!a.contains(E))throw new G(D.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);n_(d,E)||d.push(E)}l=new Pt(d),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new dR(new Tt(c),l,h)}class Oa extends Na{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oa}}class fu extends Na{_toFieldTransform(e){return new ZA(e.path,new bi)}isEqual(e){return e instanceof fu}}function mR(n,e,t,r){const s=n.V(1,e,t);du("Data must be an object, but it was:",s,r);const i=[],a=Tt.empty();ur(r,(l,h)=>{const d=t_(e,l,t);h=We(h);const p=s.Sc(d);if(h instanceof Oa)i.push(d);else{const E=Hi(h,p);E!=null&&(i.push(d),a.set(d,E))}});const c=new Pt(i);return new Ym(a,c,s.fieldTransforms)}function _R(n,e,t,r,s,i){const a=n.V(1,e,t),c=[Es(e,r,t)],l=[s];if(i.length%2!=0)throw new G(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(Es(e,i[E])),l.push(i[E+1]);const h=[],d=Tt.empty();for(let E=c.length-1;E>=0;--E)if(!n_(h,c[E])){const b=c[E];let V=l[E];V=We(V);const N=a.Sc(b);if(V instanceof Oa)h.push(b);else{const F=Hi(V,N);F!=null&&(h.push(b),d.set(b,F))}}const p=new Pt(h);return new Ym(d,p,a.fieldTransforms)}function yR(n,e,t,r=!1){return Hi(t,n.V(r?4:3,e))}function Hi(n,e){if(e_(n=We(n)))return du("Unsupported field value:",e,n),Zm(n,e);if(n instanceof Na)return function(r,s){if(!Xm(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Hi(c,s.bc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:Zo(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zo(s.serializer,i)}}if(r instanceof on)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:Em(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ql(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ht)return function(a,c){const l=a instanceof Ht?a.toArray():a;return{mapValue:{fields:{[Gg]:{stringValue:Qg},[Jo]:{arrayValue:{values:l.map(d=>{if(typeof d!="number")throw c.Dc("VectorValues must only contain numeric values.");return Wl(c.serializer,d)})}}}}}}(r,s);if(bm(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Ta(r)}`)}(n,e)}function Zm(n,e){const t={};return jg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(n,(r,s)=>{const i=Hi(s,e.yc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function e_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof De||n instanceof on||n instanceof Ot||n instanceof $e||n instanceof Na||n instanceof Ht||bm(n))}function du(n,e,t){if(!e_(t)||!Bg(t)){const r=Ta(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function Es(n,e,t){if((e=We(e))instanceof lu)return e._internalPath;if(typeof e=="string")return t_(n,e);throw ra("Field path arguments must be of type string or ",n,!1,void 0,t)}const ER=new RegExp("[~\\*/\\[\\]]");function t_(n,e,t){if(e.search(ER)>=0)throw ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new lu(...e.split("."))._internalPath}catch{throw ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ra(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new G(D.INVALID_ARGUMENT,c+n+l)}function n_(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class vR{convertValue(e,t="none"){switch(nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ur(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Jo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>xe(a.doubleValue));return new Ht(t)}convertGeoPoint(e){return new on(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Aa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ii(e));default:return null}}convertTimestamp(e){const t=er(e);return new De(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Pe.fromString(e);Ie(Sm(r),9688,{name:e});const s=new wi(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(t)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class r_ extends vR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}function TR(){return new fu("serverTimestamp")}const yd="@firebase/firestore",Ed="4.14.1";/**
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
 */function vd(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class s_{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Es("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class IR extends s_{data(){return super.data()}}/**
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
 */function wR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pu{}class i_ extends pu{}function AR(n,e,...t){let r=[];e instanceof pu&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof mu).length,c=i.filter(l=>l instanceof gu).length;if(a>1||a>0&&c>0)throw new G(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class gu extends i_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new gu(e,t,r)}_apply(e){const t=this._parse(e);return o_(e._query,t),new Br(e.firestore,e.converter,Qc(e._query,t))}_parse(e){const t=hu(e.firestore);return function(i,a,c,l,h,d,p){let E;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Id(p,d);const V=[];for(const N of p)V.push(Td(l,i,N));E={arrayValue:{values:V}}}else E=Td(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Id(p,d),E=yR(c,a,p,d==="in"||d==="not-in");return Ue.create(h,d,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class mu extends pu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:zt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)o_(a,l),a=Qc(a,l)}(e._query,t),new Br(e.firestore,e.converter,Qc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _u extends i_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _u(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new G(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Si(i,a)}(e._query,this._field,this._direction);return new Br(e.firestore,e.converter,jA(e._query,t))}}function SR(n,e="asc"){const t=e,r=Es("orderBy",n);return _u._create(r,t)}function Td(n,e,t){if(typeof(t=We(t))=="string"){if(t==="")throw new G(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rm(e)&&t.indexOf("/")!==-1)throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Pe.fromString(t));if(!J.isDocumentKey(r))throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nf(n,new J(r))}if(t instanceof $e)return Nf(n,t._key);throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ta(t)}.`)}function Id(n,e){if(!Array.isArray(n)||n.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function o_(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new G(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function bR(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Xs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vr extends s_{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Es("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Vr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Vr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vr._jsonSchema={type:Be("string",Vr._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class Po extends Vr{data(e={}){return super.data(e)}}class fs{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Po(this._firestore,this._userDataWriter,r.key,r,new Xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:RR(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function RR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:n})}}/**
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
 */fs._jsonSchemaVersion="firestore/querySnapshot/1.0",fs._jsonSchema={type:Be("string",fs._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};function wd(n,e,t,...r){n=Gn(n,$e);const s=Gn(n.firestore,ys),i=hu(s);let a;return a=typeof(e=We(e))=="string"||e instanceof lu?_R(i,"updateDoc",n._key,e,t,r):mR(i,"updateDoc",n._key,e),yu(s,[a.toMutation(n._key,qt.exists(!0))])}function Ad(n){return yu(Gn(n.firestore,ys),[new Kl(n._key,qt.none())])}function PR(n,e){const t=Gn(n.firestore,ys),r=Ys(n),s=bR(n.converter,e),i=hu(n.firestore);return yu(t,[gR(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function CR(n,...e){var h,d,p;n=We(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||vd(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(vd(e[r])){const E=e[r];e[r]=(h=E.next)==null?void 0:h.bind(E),e[r+1]=(d=E.error)==null?void 0:d.bind(E),e[r+2]=(p=E.complete)==null?void 0:p.bind(E)}let i,a,c;if(n instanceof $e)a=Gn(n.firestore,ys),c=Hl(n._key.path),i={next:E=>{e[r]&&e[r](VR(a,n,E))},error:e[r+1],complete:e[r+2]};else{const E=Gn(n,Br);a=Gn(E.firestore,ys),c=E._query;const b=new r_(a);i={next:V=>{e[r]&&e[r](new fs(a,b,E,V))},error:e[r+1],complete:e[r+2]},wR(n._query)}const l=Jm(a);return iR(l,c,s,i)}function yu(n,e){const t=Jm(n);return oR(t,e)}function VR(n,e,t){const r=t.docs.get(e._key),s=new r_(n);return new Vr(n,s,e._key,r,new Xs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){nA(vs),ds(new kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new ys(new iA(r.getProvider("auth-internal")),new cA(a,r.getProvider("app-check-internal")),SA(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Kn(yd,Ed,e),Kn(yd,Ed,"esm2020")})();var DR="firebase",kR="12.13.0";/**
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
 */Kn(DR,kR,"app");const NR={apiKey:"AIzaSyAWJiDPnggMGmFl3LA6dp1ImaeEoa9oLJk",authDomain:"task-list-76460.firebaseapp.com",projectId:"task-list-76460",storageBucket:"task-list-76460.firebasestorage.app",messagingSenderId:"357470215566",appId:"1:357470215566:web:37e6f0cb3e31275fd998df"},a_=zp(NR),sa=eA(a_),Kr=uR(a_),OR={class:"auth-container"},xR={class:"auth-card"},MR={class:"form-group"},LR={class:"form-group"},FR={key:0,class:"error-message"},UR=["disabled"],BR={class:"toggle-text"},$R=cp({__name:"AuthForm",setup(n){const e=Fe(""),t=Fe(""),r=Fe(!0),s=Fe(""),i=Fe(!1),a=async()=>{if(!(!e.value||!t.value)){i.value=!0,s.value="";try{r.value?await UI(sa,e.value,t.value):await FI(sa,e.value,t.value)}catch(l){const h=l.code??"";s.value=c(h)}finally{i.value=!1}}},c=l=>({"auth/user-not-found":"メールアドレスが見つかりません","auth/wrong-password":"パスワードが正しくありません","auth/invalid-credential":"メールアドレスまたはパスワードが正しくありません","auth/email-already-in-use":"このメールアドレスは既に使用されています","auth/weak-password":"パスワードは6文字以上にしてください","auth/invalid-email":"メールアドレスの形式が正しくありません","auth/too-many-requests":"ログイン試行が多すぎます。しばらく後に再試行してください"})[l]??"エラーが発生しました。再試行してください";return(l,h)=>(yt(),kt("div",OR,[ee("div",xR,[h[5]||(h[5]=ee("h1",null,"📝 Todoリスト",-1)),ee("h2",null,Bt(r.value?"ログイン":"アカウント作成"),1),ee("form",{onSubmit:yo(a,["prevent"])},[ee("div",MR,[h[3]||(h[3]=ee("label",{for:"email"},"メールアドレス",-1)),No(ee("input",{id:"email","onUpdate:modelValue":h[0]||(h[0]=d=>e.value=d),type:"email",placeholder:"example@email.com",required:"",autocomplete:"email"},null,512),[[Uo,e.value]])]),ee("div",LR,[h[4]||(h[4]=ee("label",{for:"password"},"パスワード",-1)),No(ee("input",{id:"password","onUpdate:modelValue":h[1]||(h[1]=d=>t.value=d),type:"password",placeholder:"6文字以上",required:"",autocomplete:"current-password"},null,512),[[Uo,t.value]])]),s.value?(yt(),kt("p",FR,Bt(s.value),1)):Ar("",!0),ee("button",{type:"submit",disabled:i.value,class:"submit-btn"},Bt(i.value?"処理中...":r.value?"ログイン":"登録"),9,UR)],32),ee("p",BR,[kp(Bt(r.value?"アカウントをお持ちでない方は":"すでにアカウントをお持ちの方は")+" ",1),ee("button",{class:"link-btn",onClick:h[2]||(h[2]=d=>{r.value=!r.value,s.value=""})},Bt(r.value?"新規登録":"ログイン"),1)])])]))}}),c_=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},jR=c_($R,[["__scopeId","data-v-304ef8ac"]]),qR={key:0,class:"loading-screen"},HR={key:2,class:"todo-app"},WR={class:"sticky-top"},KR={class:"app-header"},zR={class:"user-info"},GR={class:"user-email"},QR={class:"progress-section"},JR={class:"progress-labels"},YR={class:"progress-labels-left"},XR=["title"],ZR={class:"progress-bar-track"},eP={key:0,class:"notification-banner"},tP={class:"todo-list"},nP=["onClick"],rP=["checked","onChange"],sP={class:"todo-text"},iP={key:0,class:"empty-message"},oP={class:"add-panel-actions"},aP=["disabled"],cP={class:"add-panel-actions edit-panel-actions"},lP=["disabled"],Sd=100,uP=cp({__name:"App",setup(n){const e=Fe(null),t=Fe(!0),r=Fe([]),s=Fe(""),i=Fe(!1),a=Fe("unsupported"),c=Fe(0),l=Fe(!1),h=Fe(!1);let d=0;const p=Gr(()=>h.value?{transform:"translateY(100%)"}:l.value?{transform:`translateY(${c.value}px)`,transition:"none"}:c.value>0?{transform:`translateY(${c.value}px)`}:{}),E=ie=>{d=ie.touches[0].clientY,c.value=0,l.value=!0},b=ie=>{if(!l.value)return;const oe=ie.touches[0].clientY-d;c.value=Math.max(0,oe)},V=()=>{c.value>Sd?(l.value=!1,h.value=!0,setTimeout(()=>{h.value=!1,c.value=0,It()},300)):(l.value=!1,bc(()=>{c.value=0}))},N=Fe(!1),F=Fe(null),q=Fe(""),W=Fe(0),Q=Fe(!1),z=Fe(!1);let se=0;const he=Gr(()=>z.value?{transform:"translateY(100%)"}:Q.value?{transform:`translateY(${W.value}px)`,transition:"none"}:W.value>0?{transform:`translateY(${W.value}px)`}:{}),A=ie=>{se=ie.touches[0].clientY,W.value=0,Q.value=!0},y=ie=>{if(!Q.value)return;const oe=ie.touches[0].clientY-se;W.value=Math.max(0,oe)},m=()=>{W.value>Sd?(Q.value=!1,z.value=!0,setTimeout(()=>{z.value=!1,W.value=0,Ke()},300)):(Q.value=!1,bc(()=>{W.value=0}))};let w=null;const I=Gr(()=>r.value.filter(ie=>ie.completed).length),T=Gr(()=>r.value.filter(ie=>!ie.completed).length),_=Gr(()=>r.value.length===0?0:Math.round(I.value/r.value.length*100)),me=ie=>{"setAppBadge"in navigator&&(ie>0?navigator.setAppBadge(ie):navigator.clearAppBadge())};go(T,me,{immediate:!0});const je=ie=>{const oe=pd(Kr,"users",ie,"todos"),ze=AR(oe,SR("createdAt","asc"));w=CR(ze,v=>{r.value=v.docs.map(S=>({id:S.id,text:S.data().text,completed:S.data().completed}))})},Ne=async()=>{if(!e.value||s.value.trim()==="")return;const ie=s.value.trim();It(),await PR(pd(Kr,"users",e.value.uid,"todos"),{text:ie,completed:!1,createdAt:TR()})},Ae=async ie=>{e.value&&await Ad(Ys(Kr,"users",e.value.uid,"todos",ie))},ye=ie=>{F.value=ie,q.value=ie.text,W.value=0,Q.value=!1,z.value=!1,N.value=!0},Ke=()=>{N.value=!1,F.value=null,q.value="",W.value=0,Q.value=!1},ln=async()=>{if(!e.value||!F.value||q.value.trim()==="")return;const ie=F.value.id,oe=q.value.trim();Ke(),await wd(Ys(Kr,"users",e.value.uid,"todos",ie),{text:oe})},Ct=async()=>{if(!e.value||!F.value)return;const ie=F.value.id;Ke(),await Ae(ie)},ft=async()=>{if(!e.value)return;const ie=r.value.filter(oe=>oe.completed);await Promise.all(ie.map(oe=>Ad(Ys(Kr,"users",e.value.uid,"todos",oe.id))))},fr=async ie=>{if(!e.value)return;const oe=r.value.find(ze=>ze.id===ie);oe&&await wd(Ys(Kr,"users",e.value.uid,"todos",ie),{completed:!oe.completed})},Pn=async()=>{await qI(sa)},dr=async()=>{if("Notification"in window)if(Notification.permission==="default"){const ie=await Notification.requestPermission();a.value=ie,ie==="granted"&&me(T.value)}else a.value=Notification.permission},Lt=()=>{i.value=!0,s.value="",c.value=0,l.value=!1,h.value=!1},It=()=>{i.value=!1,s.value="",c.value=0,l.value=!1};let Vt=null;return Tl(()=>{"Notification"in window&&(a.value=Notification.permission),Vt=jI(sa,ie=>{e.value=ie,t.value=!1,w&&(w(),w=null,r.value=[]),ie&&(je(ie.uid),dr())})}),Il(()=>{Vt==null||Vt(),w==null||w(),"clearAppBadge"in navigator&&navigator.clearAppBadge()}),(ie,oe)=>t.value?(yt(),kt("div",qR,[...oe[4]||(oe[4]=[ee("p",null,"読み込み中...",-1)])])):e.value?(yt(),kt("div",HR,[ee("div",WR,[ee("header",KR,[oe[5]||(oe[5]=ee("h1",null,"Todoリスト",-1)),ee("div",zR,[ee("span",GR,Bt(e.value.email),1),ee("button",{class:"logout-btn",onClick:Pn},"ログアウト")])]),ee("div",QR,[ee("div",JR,[ee("div",YR,[I.value>0?(yt(),kt("button",{key:0,class:"delete-completed-btn",onClick:ft,title:`チェック済み ${I.value} 件を削除`},"完了済みを削除",8,XR)):Ar("",!0),ee("span",null,"進捗 "+Bt(_.value)+"%",1)]),ee("span",null,Bt(I.value)+" / "+Bt(r.value.length)+" 完了",1)]),ee("div",ZR,[ee("div",{class:"progress-bar-fill",style:rs({width:_.value+"%"})},null,4)])]),a.value==="denied"?(yt(),kt("div",eP," バッジを表示するには、設定 › Safari › 通知 で許可してください ")):Ar("",!0)]),ee("div",tP,[(yt(!0),kt(Ut,null,My(r.value,ze=>(yt(),kt("div",{key:ze.id,class:la(["todo-item",{completed:ze.completed}]),onClick:v=>ye(ze)},[ee("span",{onClick:oe[0]||(oe[0]=yo(()=>{},["stop"]))},[ee("input",{type:"checkbox",checked:ze.completed,onChange:v=>fr(ze.id)},null,40,rP)]),ee("span",sP,Bt(ze.text),1)],10,nP))),128)),r.value.length===0?(yt(),kt("p",iP," タスクがありません。＋ボタンで追加してください。 ")):Ar("",!0)]),ee("button",{class:"fab",onClick:Lt,"aria-label":"タスクを追加"},[...oe[6]||(oe[6]=[ee("span",{class:"fab-icon"},"＋",-1)])]),lt(sc,{name:"fade"},{default:fo(()=>[(i.value||N.value)&&!h.value&&!z.value?(yt(),kt("div",{key:0,class:"overlay",onClick:oe[1]||(oe[1]=ze=>i.value?It():Ke())})):Ar("",!0)]),_:1}),lt(sc,{name:h.value?"":"slide-up"},{default:fo(()=>[i.value?(yt(),kt("div",{key:0,class:"add-panel",style:rs(p.value),onTouchstart:E,onTouchmove:yo(b,["prevent"]),onTouchend:V},[oe[8]||(oe[8]=ee("div",{class:"add-panel-handle"},null,-1)),ee("div",{class:"add-panel-header"},[ee("button",{class:"close-btn",onClick:It,"aria-label":"閉じる"},"✕"),oe[7]||(oe[7]=ee("h2",{class:"add-panel-title"},"タスクを追加",-1))]),No(ee("input",{"onUpdate:modelValue":oe[2]||(oe[2]=ze=>s.value=ze),type:"text",class:"add-panel-input",placeholder:"新しいタスクを入力...",onKeyup:qh(Ne,["enter"]),autofocus:""},null,544),[[Uo,s.value]]),ee("div",oP,[ee("button",{class:"add-btn",onClick:Ne,disabled:s.value.trim()===""},"追加",8,aP)])],36)):Ar("",!0)]),_:1},8,["name"]),lt(sc,{name:z.value?"":"slide-up"},{default:fo(()=>[N.value?(yt(),kt("div",{key:0,class:"add-panel",style:rs(he.value),onTouchstart:A,onTouchmove:yo(y,["prevent"]),onTouchend:m},[oe[10]||(oe[10]=ee("div",{class:"add-panel-handle"},null,-1)),ee("div",{class:"add-panel-header"},[ee("button",{class:"close-btn",onClick:Ke,"aria-label":"閉じる"},"✕"),oe[9]||(oe[9]=ee("h2",{class:"add-panel-title"},"タスクを編集",-1))]),No(ee("input",{"onUpdate:modelValue":oe[3]||(oe[3]=ze=>q.value=ze),type:"text",class:"add-panel-input",placeholder:"タスクを入力...",onKeyup:qh(ln,["enter"]),autofocus:""},null,544),[[Uo,q.value]]),ee("div",cP,[ee("button",{class:"delete-btn edit-delete-btn",onClick:Ct},"削除"),ee("button",{class:"add-btn",onClick:ln,disabled:q.value.trim()===""},"保存",8,lP)])],36)):Ar("",!0)]),_:1},8,["name"])])):(yt(),Vp(jR,{key:1}))}}),hP=c_(uP,[["__scopeId","data-v-99eb5b5c"]]);rv(hP).mount("#app");
