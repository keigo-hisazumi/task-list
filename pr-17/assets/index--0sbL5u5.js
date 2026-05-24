(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function al(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const be={},es=[],Zt=()=>{},Sd=()=>!1,ia=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),cl=n=>n.startsWith("onUpdate:"),Je=Object.assign,ll=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},V_=Object.prototype.hasOwnProperty,Te=(n,e)=>V_.call(n,e),ne=Array.isArray,ts=n=>oa(n)==="[object Map]",bd=n=>oa(n)==="[object Set]",ae=n=>typeof n=="function",Le=n=>typeof n=="string",or=n=>typeof n=="symbol",Ce=n=>n!==null&&typeof n=="object",Rd=n=>(Ce(n)||ae(n))&&ae(n.then)&&ae(n.catch),Pd=Object.prototype.toString,oa=n=>Pd.call(n),D_=n=>oa(n).slice(8,-1),Cd=n=>oa(n)==="[object Object]",ul=n=>Le(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zs=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},k_=/-\w/g,Jn=aa(n=>n.replace(k_,e=>e.slice(1).toUpperCase())),N_=/\B([A-Z])/g,ar=aa(n=>n.replace(N_,"-$1").toLowerCase()),Vd=aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qa=aa(n=>n?`on${Vd(n)}`:""),qn=(n,e)=>!Object.is(n,e),ho=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Dd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},hl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},O_=n=>{const e=Le(n)?Number(n):NaN;return isNaN(e)?n:e};let ah;const ca=()=>ah||(ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ns(n){if(ne(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Le(r)?F_(r):ns(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(n)||Ce(n))return n}const x_=/;(?![^(]*\))/g,M_=/:([^]+)/,L_=/\/\*[^]*?\*\//g;function F_(n){const e={};return n.replace(L_,"").split(x_).forEach(t=>{if(t){const r=t.split(M_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function la(n){let e="";if(Le(n))e=n;else if(ne(n))for(let t=0;t<n.length;t++){const r=la(n[t]);r&&(e+=r+" ")}else if(Ce(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const U_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",B_=al(U_);function kd(n){return!!n||n===""}const Nd=n=>!!(n&&n.__v_isRef===!0),Ut=n=>Le(n)?n:n==null?"":ne(n)||Ce(n)&&(n.toString===Pd||!ae(n.toString))?Nd(n)?Ut(n.value):JSON.stringify(n,Od,2):String(n),Od=(n,e)=>Nd(e)?Od(n,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ja(r,i)+" =>"]=s,t),{})}:bd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ja(t))}:or(e)?Ja(e):Ce(e)&&!ne(e)&&!Cd(e)?String(e):e,Ja=(n,e="")=>{var t;return or(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class $_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Et;try{return Et=this,e()}finally{Et=t}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){this._on>0&&--this._on===0&&(Et=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function j_(){return Et}let Re;const Ya=new WeakSet;class xd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&Et.active&&Et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ya.has(this)&&(Ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ld(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ch(this),Fd(this);const e=Re,t=$t;Re=this,$t=!0;try{return this.fn()}finally{Ud(this),Re=e,$t=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pl(e);this.deps=this.depsTail=void 0,ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tc(this)&&this.run()}get dirty(){return Tc(this)}}let Md=0,ei,ti;function Ld(n,e=!1){if(n.flags|=8,e){n.next=ti,ti=n;return}n.next=ei,ei=n}function fl(){Md++}function dl(){if(--Md>0)return;if(ti){let e=ti;for(ti=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ei;){let e=ei;for(ei=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Fd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ud(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),pl(r),q_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Tc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===hi)||(n.globalVersion=hi,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Tc(n))))return;n.flags|=2;const e=n.dep,t=Re,r=$t;Re=n,$t=!0;try{Fd(n);const s=n.fn(n._value);(e.version===0||qn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=t,$t=r,Ud(n),n.flags&=-3}}function pl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)pl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function q_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let $t=!0;const $d=[];function vn(){$d.push($t),$t=!1}function Tn(){const n=$d.pop();$t=n===void 0?!0:n}function ch(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Re;Re=void 0;try{e()}finally{Re=t}}}let hi=0;class H_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!$t||Re===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Re)t=this.activeLink=new H_(Re,this),Re.deps?(t.prevDep=Re.depsTail,Re.depsTail.nextDep=t,Re.depsTail=t):Re.deps=Re.depsTail=t,jd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Re.depsTail,t.nextDep=void 0,Re.depsTail.nextDep=t,Re.depsTail=t,Re.deps===t&&(Re.deps=r)}return t}trigger(e){this.version++,hi++,this.notify(e)}notify(e){fl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{dl()}}}function jd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)jd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ic=new WeakMap,br=Symbol(""),wc=Symbol(""),fi=Symbol("");function at(n,e,t){if($t&&Re){let r=Ic.get(n);r||Ic.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new gl),s.map=r,s.key=t),s.track()}}function pn(n,e,t,r,s,i){const a=Ic.get(n);if(!a){hi++;return}const c=l=>{l&&l.trigger()};if(fl(),e==="clear")a.forEach(c);else{const l=ne(n),h=l&&ul(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,E)=>{(E==="length"||E===fi||!or(E)&&E>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(fi)),e){case"add":l?h&&c(a.get("length")):(c(a.get(br)),ts(n)&&c(a.get(wc)));break;case"delete":l||(c(a.get(br)),ts(n)&&c(a.get(wc)));break;case"set":ts(n)&&c(a.get(br));break}}dl()}function Hr(n){const e=ve(n);return e===n?e:(at(e,"iterate",fi),xt(n)?e:e.map(et))}function ua(n){return at(n=ve(n),"iterate",fi),n}const W_={__proto__:null,[Symbol.iterator](){return Xa(this,Symbol.iterator,et)},concat(...n){return Hr(this).concat(...n.map(e=>ne(e)?Hr(e):e))},entries(){return Xa(this,"entries",n=>(n[1]=et(n[1]),n))},every(n,e){return un(this,"every",n,e,void 0,arguments)},filter(n,e){return un(this,"filter",n,e,t=>t.map(et),arguments)},find(n,e){return un(this,"find",n,e,et,arguments)},findIndex(n,e){return un(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return un(this,"findLast",n,e,et,arguments)},findLastIndex(n,e){return un(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return un(this,"forEach",n,e,void 0,arguments)},includes(...n){return Za(this,"includes",n)},indexOf(...n){return Za(this,"indexOf",n)},join(n){return Hr(this).join(n)},lastIndexOf(...n){return Za(this,"lastIndexOf",n)},map(n,e){return un(this,"map",n,e,void 0,arguments)},pop(){return $s(this,"pop")},push(...n){return $s(this,"push",n)},reduce(n,...e){return lh(this,"reduce",n,e)},reduceRight(n,...e){return lh(this,"reduceRight",n,e)},shift(){return $s(this,"shift")},some(n,e){return un(this,"some",n,e,void 0,arguments)},splice(...n){return $s(this,"splice",n)},toReversed(){return Hr(this).toReversed()},toSorted(n){return Hr(this).toSorted(n)},toSpliced(...n){return Hr(this).toSpliced(...n)},unshift(...n){return $s(this,"unshift",n)},values(){return Xa(this,"values",et)}};function Xa(n,e,t){const r=ua(n),s=r[e]();return r!==n&&!xt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const K_=Array.prototype;function un(n,e,t,r,s,i){const a=ua(n),c=a!==n&&!xt(n),l=a[e];if(l!==K_[e]){const p=l.apply(n,i);return c?et(p):p}let h=t;a!==n&&(c?h=function(p,E){return t.call(this,et(p),E,n)}:t.length>2&&(h=function(p,E){return t.call(this,p,E,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function lh(n,e,t,r){const s=ua(n);let i=t;return s!==n&&(xt(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,et(c),l,n)}),s[e](i,...r)}function Za(n,e,t){const r=ve(n);at(r,"iterate",fi);const s=r[e](...t);return(s===-1||s===!1)&&El(t[0])?(t[0]=ve(t[0]),r[e](...t)):s}function $s(n,e,t=[]){vn(),fl();const r=ve(n)[e].apply(n,t);return dl(),Tn(),r}const z_=al("__proto__,__v_isRef,__isVue"),qd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(or));function G_(n){or(n)||(n=String(n));const e=ve(this);return at(e,"has",n),e.hasOwnProperty(n)}class Hd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?sy:Gd:i?zd:Kd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ne(e);if(!s){let l;if(a&&(l=W_[t]))return l;if(t==="hasOwnProperty")return G_}const c=Reflect.get(e,t,ut(e)?e:r);if((or(t)?qd.has(t):z_(t))||(s||at(e,"get",t),i))return c;if(ut(c)){const l=a&&ul(t)?c:c.value;return s&&Ce(l)?Sc(l):l}return Ce(c)?s?Sc(c):_l(c):c}}class Wd extends Hd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=Yn(i);if(!xt(r)&&!Yn(r)&&(i=ve(i),r=ve(r)),!ne(e)&&ut(i)&&!ut(r))return l||(i.value=r),!0}const a=ne(e)&&ul(t)?Number(t)<e.length:Te(e,t),c=Reflect.set(e,t,r,ut(e)?e:s);return e===ve(s)&&(a?qn(r,i)&&pn(e,"set",t,r):pn(e,"add",t,r)),c}deleteProperty(e,t){const r=Te(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&pn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!or(t)||!qd.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",ne(e)?"length":br),Reflect.ownKeys(e)}}class Q_ extends Hd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const J_=new Wd,Y_=new Q_,X_=new Wd(!0);const Ac=n=>n,to=n=>Reflect.getPrototypeOf(n);function Z_(n,e,t){return function(...r){const s=this.__v_raw,i=ve(s),a=ts(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?Ac:e?Co:et;return!e&&at(i,"iterate",l?wc:br),{next(){const{value:p,done:E}=h.next();return E?{value:p,done:E}:{value:c?[d(p[0]),d(p[1])]:d(p),done:E}},[Symbol.iterator](){return this}}}}function no(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ey(n,e){const t={get(s){const i=this.__v_raw,a=ve(i),c=ve(s);n||(qn(s,c)&&at(a,"get",s),at(a,"get",c));const{has:l}=to(a),h=e?Ac:n?Co:et;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(ve(s),"iterate",br),s.size},has(s){const i=this.__v_raw,a=ve(i),c=ve(s);return n||(qn(s,c)&&at(a,"has",s),at(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ve(c),h=e?Ac:n?Co:et;return!n&&at(l,"iterate",br),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Je(t,n?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){!e&&!xt(s)&&!Yn(s)&&(s=ve(s));const i=ve(this);return to(i).has.call(i,s)||(i.add(s),pn(i,"add",s,s)),this},set(s,i){!e&&!xt(i)&&!Yn(i)&&(i=ve(i));const a=ve(this),{has:c,get:l}=to(a);let h=c.call(a,s);h||(s=ve(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?qn(i,d)&&pn(a,"set",s,i):pn(a,"add",s,i),this},delete(s){const i=ve(this),{has:a,get:c}=to(i);let l=a.call(i,s);l||(s=ve(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&pn(i,"delete",s,void 0),h},clear(){const s=ve(this),i=s.size!==0,a=s.clear();return i&&pn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Z_(s,n,e)}),t}function ml(n,e){const t=ey(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Te(t,s)&&s in r?t:r,s,i)}const ty={get:ml(!1,!1)},ny={get:ml(!1,!0)},ry={get:ml(!0,!1)};const Kd=new WeakMap,zd=new WeakMap,Gd=new WeakMap,sy=new WeakMap;function iy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oy(n){return n.__v_skip||!Object.isExtensible(n)?0:iy(D_(n))}function _l(n){return Yn(n)?n:yl(n,!1,J_,ty,Kd)}function ay(n){return yl(n,!1,X_,ny,zd)}function Sc(n){return yl(n,!0,Y_,ry,Gd)}function yl(n,e,t,r,s){if(!Ce(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=oy(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function rs(n){return Yn(n)?rs(n.__v_raw):!!(n&&n.__v_isReactive)}function Yn(n){return!!(n&&n.__v_isReadonly)}function xt(n){return!!(n&&n.__v_isShallow)}function El(n){return n?!!n.__v_raw:!1}function ve(n){const e=n&&n.__v_raw;return e?ve(e):n}function cy(n){return!Te(n,"__v_skip")&&Object.isExtensible(n)&&Dd(n,"__v_skip",!0),n}const et=n=>Ce(n)?_l(n):n,Co=n=>Ce(n)?Sc(n):n;function ut(n){return n?n.__v_isRef===!0:!1}function Ue(n){return ly(n,!1)}function ly(n,e){return ut(n)?n:new uy(n,e)}class uy{constructor(e,t){this.dep=new gl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ve(e),this._value=t?e:et(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||xt(e)||Yn(e);e=r?e:ve(e),qn(e,t)&&(this._rawValue=e,this._value=r?e:et(e),this.dep.trigger())}}function hy(n){return ut(n)?n.value:n}const fy={get:(n,e,t)=>e==="__v_raw"?n:hy(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ut(s)&&!ut(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Qd(n){return rs(n)?n:new Proxy(n,fy)}class dy{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new gl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Ld(this,!0),!0}get value(){const e=this.dep.track();return Bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function py(n,e,t=!1){let r,s;return ae(n)?r=n:(r=n.get,s=n.set),new dy(r,s,t)}const ro={},Vo=new WeakMap;let Ir;function gy(n,e=!1,t=Ir){if(t){let r=Vo.get(t);r||Vo.set(t,r=[]),r.push(n)}}function my(n,e,t=be){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=G=>s?G:xt(G)||s===!1||s===0?gn(G,1):gn(G);let d,p,E,b,V=!1,N=!1;if(ut(n)?(p=()=>n.value,V=xt(n)):rs(n)?(p=()=>h(n),V=!0):ne(n)?(N=!0,V=n.some(G=>rs(G)||xt(G)),p=()=>n.map(G=>{if(ut(G))return G.value;if(rs(G))return h(G);if(ae(G))return l?l(G,2):G()})):ae(n)?e?p=l?()=>l(n,2):n:p=()=>{if(E){vn();try{E()}finally{Tn()}}const G=Ir;Ir=d;try{return l?l(n,3,[b]):n(b)}finally{Ir=G}}:p=Zt,e&&s){const G=p,se=s===!0?1/0:s;p=()=>gn(G(),se)}const B=j_(),q=()=>{d.stop(),B&&B.active&&ll(B.effects,d)};if(i&&e){const G=e;e=(...se)=>{G(...se),q()}}let K=N?new Array(n.length).fill(ro):ro;const Q=G=>{if(!(!(d.flags&1)||!d.dirty&&!G))if(e){const se=d.run();if(s||V||(N?se.some((he,A)=>qn(he,K[A])):qn(se,K))){E&&E();const he=Ir;Ir=d;try{const A=[se,K===ro?void 0:N&&K[0]===ro?[]:K,b];K=se,l?l(e,3,A):e(...A)}finally{Ir=he}}}else d.run()};return c&&c(Q),d=new xd(p),d.scheduler=a?()=>a(Q,!1):Q,b=G=>gy(G,!1,d),E=d.onStop=()=>{const G=Vo.get(d);if(G){if(l)l(G,4);else for(const se of G)se();Vo.delete(d)}},e?r?Q(!0):K=d.run():a?a(Q.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function gn(n,e=1/0,t){if(e<=0||!Ce(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,ut(n))gn(n.value,e,t);else if(ne(n))for(let r=0;r<n.length;r++)gn(n[r],e,t);else if(bd(n)||ts(n))n.forEach(r=>{gn(r,e,t)});else if(Cd(n)){for(const r in n)gn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&gn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ci(n,e,t,r){try{return r?n(...r):n()}catch(s){ha(s,e,t)}}function Ht(n,e,t,r){if(ae(n)){const s=Ci(n,e,t,r);return s&&Rd(s)&&s.catch(i=>{ha(i,e,t)}),s}if(ne(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Ht(n[i],e,t,r));return s}}function ha(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){vn(),Ci(i,null,10,[n,l,h]),Tn();return}}_y(n,t,s,r,a)}function _y(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const gt=[];let Jt=-1;const ss=[];let Ln=null,Wr=0;const Jd=Promise.resolve();let Do=null;function bc(n){const e=Do||Jd;return n?e.then(this?n.bind(this):n):e}function yy(n){let e=Jt+1,t=gt.length;for(;e<t;){const r=e+t>>>1,s=gt[r],i=di(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function vl(n){if(!(n.flags&1)){const e=di(n),t=gt[gt.length-1];!t||!(n.flags&2)&&e>=di(t)?gt.push(n):gt.splice(yy(e),0,n),n.flags|=1,Yd()}}function Yd(){Do||(Do=Jd.then(Zd))}function Ey(n){ne(n)?ss.push(...n):Ln&&n.id===-1?Ln.splice(Wr+1,0,n):n.flags&1||(ss.push(n),n.flags|=1),Yd()}function uh(n,e,t=Jt+1){for(;t<gt.length;t++){const r=gt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;gt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Xd(n){if(ss.length){const e=[...new Set(ss)].sort((t,r)=>di(t)-di(r));if(ss.length=0,Ln){Ln.push(...e);return}for(Ln=e,Wr=0;Wr<Ln.length;Wr++){const t=Ln[Wr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ln=null,Wr=0}}const di=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zd(n){try{for(Jt=0;Jt<gt.length;Jt++){const e=gt[Jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jt<gt.length;Jt++){const e=gt[Jt];e&&(e.flags&=-2)}Jt=-1,gt.length=0,Xd(),Do=null,(gt.length||ss.length)&&Zd()}}let Ot=null,ep=null;function ko(n){const e=Ot;return Ot=n,ep=n&&n.type.__scopeId||null,e}function fo(n,e=Ot,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Mo(-1);const i=ko(e);let a;try{a=n(...s)}finally{ko(i),r._d&&Mo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function No(n,e){if(Ot===null)return n;const t=ma(Ot),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=be]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&gn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function yr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(vn(),Ht(l,t,8,[n.el,c,n,e]),Tn())}}const vy=Symbol("_vte"),tp=n=>n.__isTeleport,dn=Symbol("_leaveCb"),so=Symbol("_enterCb");function Ty(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tl(()=>{n.isMounted=!0}),up(()=>{n.isUnmounting=!0}),n}const Dt=[Function,Array],np={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},rp=n=>{const e=n.subTree;return e.component?rp(e.component):e},Iy={name:"BaseTransition",props:np,setup(n,{slots:e}){const t=kp(),r=Ty();return()=>{const s=e.default&&op(e.default(),!0);if(!s||!s.length)return;const i=sp(s),a=ve(n),{mode:c}=a;if(r.isLeaving)return ec(i);const l=hh(i);if(!l)return ec(i);let h=Rc(l,a,r,t,p=>h=p);l.type!==mt&&pi(l,h);let d=t.subTree&&hh(t.subTree);if(d&&d.type!==mt&&!Ar(d,l)&&rp(t).type!==mt){let p=Rc(d,a,r,t);if(pi(d,p),c==="out-in"&&l.type!==mt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,d=void 0},ec(i);c==="in-out"&&l.type!==mt?p.delayLeave=(E,b,V)=>{const N=ip(r,d);N[String(d.key)]=d,E[dn]=()=>{b(),E[dn]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{V(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function sp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==mt){e=t;break}}return e}const wy=Iy;function ip(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Rc(n,e,t,r,s){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:E,onLeave:b,onAfterLeave:V,onLeaveCancelled:N,onBeforeAppear:B,onAppear:q,onAfterAppear:K,onAppearCancelled:Q}=e,G=String(n.key),se=ip(t,n),he=(m,w)=>{m&&Ht(m,r,9,w)},A=(m,w)=>{const I=w[1];he(m,w),ne(m)?m.every(T=>T.length<=1)&&I():m.length<=1&&I()},y={mode:a,persisted:c,beforeEnter(m){let w=l;if(!t.isMounted)if(i)w=B||l;else return;m[dn]&&m[dn](!0);const I=se[G];I&&Ar(n,I)&&I.el[dn]&&I.el[dn](),he(w,[m])},enter(m){let w=h,I=d,T=p;if(!t.isMounted)if(i)w=q||h,I=K||d,T=Q||p;else return;let _=!1;const me=m[so]=qe=>{_||(_=!0,qe?he(T,[m]):he(I,[m]),y.delayedLeave&&y.delayedLeave(),m[so]=void 0)};w?A(w,[m,me]):me()},leave(m,w){const I=String(n.key);if(m[so]&&m[so](!0),t.isUnmounting)return w();he(E,[m]);let T=!1;const _=m[dn]=me=>{T||(T=!0,w(),me?he(N,[m]):he(V,[m]),m[dn]=void 0,se[I]===n&&delete se[I])};se[I]=n,b?A(b,[m,_]):_()},clone(m){const w=Rc(m,e,t,r,s);return s&&s(w),w}};return y}function ec(n){if(fa(n))return n=Xn(n),n.children=null,n}function hh(n){if(!fa(n))return tp(n.type)&&n.children?sp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ae(t.default))return t.default()}}function pi(n,e){n.shapeFlag&6&&n.component?(n.transition=e,pi(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function op(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let a=n[i];const c=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===Ft?(a.patchFlag&128&&s++,r=r.concat(op(a.children,e,c))):(e||a.type!==mt)&&r.push(c!=null?Xn(a,{key:c}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ap(n,e){return ae(n)?Je({name:n.name},e,{setup:n}):n}function cp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Oo=new WeakMap;function ni(n,e,t,r,s=!1){if(ne(n)){n.forEach((V,N)=>ni(V,e&&(ne(e)?e[N]:e),t,r,s));return}if(ri(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ni(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ma(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===be?c.refs={}:c.refs,p=c.setupState,E=ve(p),b=p===be?Sd:V=>Te(E,V);if(h!=null&&h!==l){if(fh(e),Le(h))d[h]=null,b(h)&&(p[h]=null);else if(ut(h)){h.value=null;const V=e;V.k&&(d[V.k]=null)}}if(ae(l))Ci(l,c,12,[a,d]);else{const V=Le(l),N=ut(l);if(V||N){const B=()=>{if(n.f){const q=V?b(l)?p[l]:d[l]:l.value;if(s)ne(q)&&ll(q,i);else if(ne(q))q.includes(i)||q.push(i);else if(V)d[l]=[i],b(l)&&(p[l]=d[l]);else{const K=[i];l.value=K,n.k&&(d[n.k]=K)}}else V?(d[l]=a,b(l)&&(p[l]=a)):N&&(l.value=a,n.k&&(d[n.k]=a))};if(a){const q=()=>{B(),Oo.delete(n)};q.id=-1,Oo.set(n,q),St(q,t)}else fh(n),B()}}}function fh(n){const e=Oo.get(n);e&&(e.flags|=8,Oo.delete(n))}ca().requestIdleCallback;ca().cancelIdleCallback;const ri=n=>!!n.type.__asyncLoader,fa=n=>n.type.__isKeepAlive;function Ay(n,e){lp(n,"a",e)}function Sy(n,e){lp(n,"da",e)}function lp(n,e,t=_t){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(da(e,r,t),t){let s=t.parent;for(;s&&s.parent;)fa(s.parent.vnode)&&by(r,e,t,s),s=s.parent}}function by(n,e,t,r){const s=da(e,n,r,!0);Il(()=>{ll(r[e],s)},t)}function da(n,e,t=_t,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{vn();const c=Vi(t),l=Ht(e,t,n,a);return c(),Tn(),l});return r?s.unshift(i):s.push(i),i}}const bn=n=>(e,t=_t)=>{(!mi||n==="sp")&&da(n,(...r)=>e(...r),t)},Ry=bn("bm"),Tl=bn("m"),Py=bn("bu"),Cy=bn("u"),up=bn("bum"),Il=bn("um"),Vy=bn("sp"),Dy=bn("rtg"),ky=bn("rtc");function Ny(n,e=_t){da("ec",n,e)}const Oy=Symbol.for("v-ndc");function xy(n,e,t,r){let s;const i=t,a=ne(n);if(a||Le(n)){const c=a&&rs(n);let l=!1,h=!1;c&&(l=!xt(n),h=Yn(n),n=ua(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?Co(et(n[d])):et(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}const Pc=n=>n?Np(n)?ma(n):Pc(n.parent):null,si=Je(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pc(n.parent),$root:n=>Pc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fp(n),$forceUpdate:n=>n.f||(n.f=()=>{vl(n.update)}),$nextTick:n=>n.n||(n.n=bc.bind(n.proxy)),$watch:n=>rE.bind(n)}),tc=(n,e)=>n!==be&&!n.__isScriptSetup&&Te(n,e),My={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;let h;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(tc(r,e))return a[e]=1,r[e];if(s!==be&&Te(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&Te(h,e))return a[e]=3,i[e];if(t!==be&&Te(t,e))return a[e]=4,t[e];Cc&&(a[e]=0)}}const d=si[e];let p,E;if(d)return e==="$attrs"&&at(n.attrs,"get",""),d(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==be&&Te(t,e))return a[e]=4,t[e];if(E=l.config.globalProperties,Te(E,e))return E[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return tc(s,e)?(s[e]=t,!0):r!==be&&Te(r,e)?(r[e]=t,!0):Te(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i,type:a}},c){let l,h;return!!(t[c]||n!==be&&c[0]!=="$"&&Te(n,c)||tc(e,c)||(l=i[0])&&Te(l,c)||Te(r,c)||Te(si,c)||Te(s.config.globalProperties,c)||(h=a.__cssModules)&&h[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Te(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function dh(n){return ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Cc=!0;function Ly(n){const e=fp(n),t=n.proxy,r=n.ctx;Cc=!1,e.beforeCreate&&ph(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:E,beforeUpdate:b,updated:V,activated:N,deactivated:B,beforeDestroy:q,beforeUnmount:K,destroyed:Q,unmounted:G,render:se,renderTracked:he,renderTriggered:A,errorCaptured:y,serverPrefetch:m,expose:w,inheritAttrs:I,components:T,directives:_,filters:me}=e;if(h&&Fy(h,r,null),a)for(const Ae in a){const ye=a[Ae];ae(ye)&&(r[Ae]=ye.bind(t))}if(s){const Ae=s.call(t,t);Ce(Ae)&&(n.data=_l(Ae))}if(Cc=!0,i)for(const Ae in i){const ye=i[Ae],Ye=ae(ye)?ye.bind(t,t):ae(ye.get)?ye.get.bind(t,t):Zt,cn=!ae(ye)&&ae(ye.set)?ye.set.bind(t):Zt,Ct=zr({get:Ye,set:cn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:ft=>Ct.value=ft})}if(c)for(const Ae in c)hp(c[Ae],r,t,Ae);if(l){const Ae=ae(l)?l.call(t):l;Reflect.ownKeys(Ae).forEach(ye=>{Hy(ye,Ae[ye])})}d&&ph(d,n,"c");function Ne(Ae,ye){ne(ye)?ye.forEach(Ye=>Ae(Ye.bind(t))):ye&&Ae(ye.bind(t))}if(Ne(Ry,p),Ne(Tl,E),Ne(Py,b),Ne(Cy,V),Ne(Ay,N),Ne(Sy,B),Ne(Ny,y),Ne(ky,he),Ne(Dy,A),Ne(up,K),Ne(Il,G),Ne(Vy,m),ne(w))if(w.length){const Ae=n.exposed||(n.exposed={});w.forEach(ye=>{Object.defineProperty(Ae,ye,{get:()=>t[ye],set:Ye=>t[ye]=Ye,enumerable:!0})})}else n.exposed||(n.exposed={});se&&n.render===Zt&&(n.render=se),I!=null&&(n.inheritAttrs=I),T&&(n.components=T),_&&(n.directives=_),m&&cp(n)}function Fy(n,e,t=Zt){ne(n)&&(n=Vc(n));for(const r in n){const s=n[r];let i;Ce(s)?"default"in s?i=po(s.from||r,s.default,!0):i=po(s.from||r):i=po(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ph(n,e,t){Ht(ne(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function hp(n,e,t,r){let s=r.includes(".")?Sp(t,r):()=>t[r];if(Le(n)){const i=e[n];ae(i)&&go(s,i)}else if(ae(n))go(s,n.bind(t));else if(Ce(n))if(ne(n))n.forEach(i=>hp(i,e,t,r));else{const i=ae(n.handler)?n.handler.bind(t):e[n.handler];ae(i)&&go(s,i,n)}}function fp(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>xo(l,h,a,!0)),xo(l,e,a)),Ce(e)&&i.set(e,l),l}function xo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&xo(n,i,t,!0),s&&s.forEach(a=>xo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=Uy[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const Uy={data:gh,props:mh,emits:mh,methods:Ws,computed:Ws,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Ws,directives:Ws,watch:$y,provide:gh,inject:By};function gh(n,e){return e?n?function(){return Je(ae(n)?n.call(this,this):n,ae(e)?e.call(this,this):e)}:e:n}function By(n,e){return Ws(Vc(n),Vc(e))}function Vc(n){if(ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ws(n,e){return n?Je(Object.create(null),n,e):e}function mh(n,e){return n?ne(n)&&ne(e)?[...new Set([...n,...e])]:Je(Object.create(null),dh(n),dh(e??{})):e}function $y(n,e){if(!n)return e;if(!e)return n;const t=Je(Object.create(null),n);for(const r in e)t[r]=pt(n[r],e[r]);return t}function dp(){return{app:null,config:{isNativeTag:Sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jy=0;function qy(n,e){return function(r,s=null){ae(r)||(r=Je({},r)),s!=null&&!Ce(s)&&(s=null);const i=dp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:jy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:SE,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ae(d.install)?(a.add(d),d.install(h,...p)):ae(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,E){if(!l){const b=h._ceVNode||lt(r,s);return b.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),n(b,d,E),l=!0,h._container=d,d.__vue_app__=h,ma(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Ht(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=is;is=h;try{return d()}finally{is=p}}};return h}}let is=null;function Hy(n,e){if(_t){let t=_t.provides;const r=_t.parent&&_t.parent.provides;r===t&&(t=_t.provides=Object.create(r)),t[n]=e}}function po(n,e,t=!1){const r=kp();if(r||is){let s=is?is._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ae(e)?e.call(r&&r.proxy):e}}const pp={},gp=()=>Object.create(pp),mp=n=>Object.getPrototypeOf(n)===pp;function Wy(n,e,t,r=!1){const s={},i=gp();n.propsDefaults=Object.create(null),_p(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:ay(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Ky(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=ve(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let E=d[p];if(pa(n.emitsOptions,E))continue;const b=e[E];if(l)if(Te(i,E))b!==i[E]&&(i[E]=b,h=!0);else{const V=Jn(E);s[V]=Dc(l,c,V,b,n,!1)}else b!==i[E]&&(i[E]=b,h=!0)}}}else{_p(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Te(e,p)&&((d=ar(p))===p||!Te(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=Dc(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Te(e,p))&&(delete i[p],h=!0)}h&&pn(n.attrs,"set","")}function _p(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(Zs(l))continue;const h=e[l];let d;s&&Te(s,d=Jn(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:pa(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ve(t),h=c||be;for(let d=0;d<i.length;d++){const p=i[d];t[p]=Dc(s,l,p,h[p],n,!Te(h,p))}}return a}function Dc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ae(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=Vi(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===ar(t))&&(r=!0))}return r}const zy=new WeakMap;function yp(n,e,t=!1){const r=t?zy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!ae(n)){const d=p=>{l=!0;const[E,b]=yp(p,e,!0);Je(a,E),b&&c.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Ce(n)&&r.set(n,es),es;if(ne(i))for(let d=0;d<i.length;d++){const p=Jn(i[d]);_h(p)&&(a[p]=be)}else if(i)for(const d in i){const p=Jn(d);if(_h(p)){const E=i[d],b=a[p]=ne(E)||ae(E)?{type:E}:Je({},E),V=b.type;let N=!1,B=!0;if(ne(V))for(let q=0;q<V.length;++q){const K=V[q],Q=ae(K)&&K.name;if(Q==="Boolean"){N=!0;break}else Q==="String"&&(B=!1)}else N=ae(V)&&V.name==="Boolean";b[0]=N,b[1]=B,(N||Te(b,"default"))&&c.push(p)}}const h=[a,c];return Ce(n)&&r.set(n,h),h}function _h(n){return n[0]!=="$"&&!Zs(n)}const wl=n=>n==="_"||n==="_ctx"||n==="$stable",Al=n=>ne(n)?n.map(Xt):[Xt(n)],Gy=(n,e,t)=>{if(e._n)return e;const r=fo((...s)=>Al(e(...s)),t);return r._c=!1,r},Ep=(n,e,t)=>{const r=n._ctx;for(const s in n){if(wl(s))continue;const i=n[s];if(ae(i))e[s]=Gy(s,i,r);else if(i!=null){const a=Al(i);e[s]=()=>a}}},vp=(n,e)=>{const t=Al(e);n.slots.default=()=>t},Tp=(n,e,t)=>{for(const r in e)(t||!wl(r))&&(n[r]=e[r])},Qy=(n,e,t)=>{const r=n.slots=gp();if(n.vnode.shapeFlag&32){const s=e._;s?(Tp(r,e,t),t&&Dd(r,"_",s,!0)):Ep(e,r)}else e&&vp(n,e)},Jy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=be;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Tp(s,e,t):(i=!e.$stable,Ep(e,s)),a=e}else e&&(vp(n,e),a={default:1});if(i)for(const c in s)!wl(c)&&a[c]==null&&delete s[c]},St=hE;function Yy(n){return Xy(n)}function Xy(n,e){const t=ca();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:E,setScopeId:b=Zt,insertStaticContent:V}=n,N=(v,S,C,U=null,O=null,x=null,j=void 0,F=null,L=!!S.dynamicChildren)=>{if(v===S)return;v&&!Ar(v,S)&&(U=ce(v),ft(v,O,x,!0),v=null),S.patchFlag===-2&&(L=!1,S.dynamicChildren=null);const{type:M,ref:X,shapeFlag:H}=S;switch(M){case ga:B(v,S,C,U);break;case mt:q(v,S,C,U);break;case rc:v==null&&K(S,C,U,j);break;case Ft:T(v,S,C,U,O,x,j,F,L);break;default:H&1?se(v,S,C,U,O,x,j,F,L):H&6?_(v,S,C,U,O,x,j,F,L):(H&64||H&128)&&M.process(v,S,C,U,O,x,j,F,L,Vt)}X!=null&&O?ni(X,v&&v.ref,x,S||v,!S):X==null&&v&&v.ref!=null&&ni(v.ref,null,x,v,!0)},B=(v,S,C,U)=>{if(v==null)r(S.el=c(S.children),C,U);else{const O=S.el=v.el;S.children!==v.children&&h(O,S.children)}},q=(v,S,C,U)=>{v==null?r(S.el=l(S.children||""),C,U):S.el=v.el},K=(v,S,C,U)=>{[v.el,v.anchor]=V(v.children,S,C,U,v.el,v.anchor)},Q=({el:v,anchor:S},C,U)=>{let O;for(;v&&v!==S;)O=E(v),r(v,C,U),v=O;r(S,C,U)},G=({el:v,anchor:S})=>{let C;for(;v&&v!==S;)C=E(v),s(v),v=C;s(S)},se=(v,S,C,U,O,x,j,F,L)=>{if(S.type==="svg"?j="svg":S.type==="math"&&(j="mathml"),v==null)he(S,C,U,O,x,j,F,L);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),m(v,S,O,x,j,F,L)}finally{M&&M._endPatch()}}},he=(v,S,C,U,O,x,j,F)=>{let L,M;const{props:X,shapeFlag:H,transition:Y,dirs:Z}=v;if(L=v.el=a(v.type,x,X&&X.is,X),H&8?d(L,v.children):H&16&&y(v.children,L,null,U,O,nc(v,x),j,F),Z&&yr(v,null,U,"created"),A(L,v,v.scopeId,j,U),X){for(const we in X)we!=="value"&&!Zs(we)&&i(L,we,null,X[we],x,U);"value"in X&&i(L,"value",null,X.value,x),(M=X.onVnodeBeforeMount)&&Qt(M,U,v)}Z&&yr(v,null,U,"beforeMount");const fe=Zy(O,Y);fe&&Y.beforeEnter(L),r(L,S,C),((M=X&&X.onVnodeMounted)||fe||Z)&&St(()=>{M&&Qt(M,U,v),fe&&Y.enter(L),Z&&yr(v,null,U,"mounted")},O)},A=(v,S,C,U,O)=>{if(C&&b(v,C),U)for(let x=0;x<U.length;x++)b(v,U[x]);if(O){let x=O.subTree;if(S===x||Rp(x.type)&&(x.ssContent===S||x.ssFallback===S)){const j=O.vnode;A(v,j,j.scopeId,j.slotScopeIds,O.parent)}}},y=(v,S,C,U,O,x,j,F,L=0)=>{for(let M=L;M<v.length;M++){const X=v[M]=F?Fn(v[M]):Xt(v[M]);N(null,X,S,C,U,O,x,j,F)}},m=(v,S,C,U,O,x,j)=>{const F=S.el=v.el;let{patchFlag:L,dynamicChildren:M,dirs:X}=S;L|=v.patchFlag&16;const H=v.props||be,Y=S.props||be;let Z;if(C&&Er(C,!1),(Z=Y.onVnodeBeforeUpdate)&&Qt(Z,C,S,v),X&&yr(S,v,C,"beforeUpdate"),C&&Er(C,!0),(H.innerHTML&&Y.innerHTML==null||H.textContent&&Y.textContent==null)&&d(F,""),M?w(v.dynamicChildren,M,F,C,U,nc(S,O),x):j||ye(v,S,F,null,C,U,nc(S,O),x,!1),L>0){if(L&16)I(F,H,Y,C,O);else if(L&2&&H.class!==Y.class&&i(F,"class",null,Y.class,O),L&4&&i(F,"style",H.style,Y.style,O),L&8){const fe=S.dynamicProps;for(let we=0;we<fe.length;we++){const Ee=fe[we],rt=H[Ee],st=Y[Ee];(st!==rt||Ee==="value")&&i(F,Ee,rt,st,O,C)}}L&1&&v.children!==S.children&&d(F,S.children)}else!j&&M==null&&I(F,H,Y,C,O);((Z=Y.onVnodeUpdated)||X)&&St(()=>{Z&&Qt(Z,C,S,v),X&&yr(S,v,C,"updated")},U)},w=(v,S,C,U,O,x,j)=>{for(let F=0;F<S.length;F++){const L=v[F],M=S[F],X=L.el&&(L.type===Ft||!Ar(L,M)||L.shapeFlag&198)?p(L.el):C;N(L,M,X,null,U,O,x,j,!0)}},I=(v,S,C,U,O)=>{if(S!==C){if(S!==be)for(const x in S)!Zs(x)&&!(x in C)&&i(v,x,S[x],null,O,U);for(const x in C){if(Zs(x))continue;const j=C[x],F=S[x];j!==F&&x!=="value"&&i(v,x,F,j,O,U)}"value"in C&&i(v,"value",S.value,C.value,O)}},T=(v,S,C,U,O,x,j,F,L)=>{const M=S.el=v?v.el:c(""),X=S.anchor=v?v.anchor:c("");let{patchFlag:H,dynamicChildren:Y,slotScopeIds:Z}=S;Z&&(F=F?F.concat(Z):Z),v==null?(r(M,C,U),r(X,C,U),y(S.children||[],C,X,O,x,j,F,L)):H>0&&H&64&&Y&&v.dynamicChildren?(w(v.dynamicChildren,Y,C,O,x,j,F),(S.key!=null||O&&S===O.subTree)&&Ip(v,S,!0)):ye(v,S,C,X,O,x,j,F,L)},_=(v,S,C,U,O,x,j,F,L)=>{S.slotScopeIds=F,v==null?S.shapeFlag&512?O.ctx.activate(S,C,U,j,L):me(S,C,U,O,x,j,L):qe(v,S,L)},me=(v,S,C,U,O,x,j)=>{const F=v.component=yE(v,U,O);if(fa(v)&&(F.ctx.renderer=Vt),EE(F,!1,j),F.asyncDep){if(O&&O.registerDep(F,Ne,j),!v.el){const L=F.subTree=lt(mt);q(null,L,S,C),v.placeholder=L.el}}else Ne(F,v,S,C,O,x,j)},qe=(v,S,C)=>{const U=S.component=v.component;if(lE(v,S,C))if(U.asyncDep&&!U.asyncResolved){Ae(U,S,C);return}else U.next=S,U.update();else S.el=v.el,U.vnode=S},Ne=(v,S,C,U,O,x,j)=>{const F=()=>{if(v.isMounted){let{next:H,bu:Y,u:Z,parent:fe,vnode:we}=v;{const wt=wp(v);if(wt){H&&(H.el=we.el,Ae(v,H,j)),wt.asyncDep.then(()=>{v.isUnmounted||F()});return}}let Ee=H,rt;Er(v,!1),H?(H.el=we.el,Ae(v,H,j)):H=we,Y&&ho(Y),(rt=H.props&&H.props.onVnodeBeforeUpdate)&&Qt(rt,fe,H,we),Er(v,!0);const st=Eh(v),It=v.subTree;v.subTree=st,N(It,st,p(It.el),ce(It),v,O,x),H.el=st.el,Ee===null&&uE(v,st.el),Z&&St(Z,O),(rt=H.props&&H.props.onVnodeUpdated)&&St(()=>Qt(rt,fe,H,we),O)}else{let H;const{el:Y,props:Z}=S,{bm:fe,m:we,parent:Ee,root:rt,type:st}=v,It=ri(S);Er(v,!1),fe&&ho(fe),!It&&(H=Z&&Z.onVnodeBeforeMount)&&Qt(H,Ee,S),Er(v,!0);{rt.ce&&rt.ce._def.shadowRoot!==!1&&rt.ce._injectChildStyle(st);const wt=v.subTree=Eh(v);N(null,wt,C,U,v,O,x),S.el=wt.el}if(we&&St(we,O),!It&&(H=Z&&Z.onVnodeMounted)){const wt=S;St(()=>Qt(H,Ee,wt),O)}(S.shapeFlag&256||Ee&&ri(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&v.a&&St(v.a,O),v.isMounted=!0,S=C=U=null}};v.scope.on();const L=v.effect=new xd(F);v.scope.off();const M=v.update=L.run.bind(L),X=v.job=L.runIfDirty.bind(L);X.i=v,X.id=v.uid,L.scheduler=()=>vl(X),Er(v,!0),M()},Ae=(v,S,C)=>{S.component=v;const U=v.vnode.props;v.vnode=S,v.next=null,Ky(v,S.props,U,C),Jy(v,S.children,C),vn(),uh(v),Tn()},ye=(v,S,C,U,O,x,j,F,L=!1)=>{const M=v&&v.children,X=v?v.shapeFlag:0,H=S.children,{patchFlag:Y,shapeFlag:Z}=S;if(Y>0){if(Y&128){cn(M,H,C,U,O,x,j,F,L);return}else if(Y&256){Ye(M,H,C,U,O,x,j,F,L);return}}Z&8?(X&16&&yt(M,O,x),H!==M&&d(C,H)):X&16?Z&16?cn(M,H,C,U,O,x,j,F,L):yt(M,O,x,!0):(X&8&&d(C,""),Z&16&&y(H,C,U,O,x,j,F,L))},Ye=(v,S,C,U,O,x,j,F,L)=>{v=v||es,S=S||es;const M=v.length,X=S.length,H=Math.min(M,X);let Y;for(Y=0;Y<H;Y++){const Z=S[Y]=L?Fn(S[Y]):Xt(S[Y]);N(v[Y],Z,C,null,O,x,j,F,L)}M>X?yt(v,O,x,!0,!1,H):y(S,C,U,O,x,j,F,L,H)},cn=(v,S,C,U,O,x,j,F,L)=>{let M=0;const X=S.length;let H=v.length-1,Y=X-1;for(;M<=H&&M<=Y;){const Z=v[M],fe=S[M]=L?Fn(S[M]):Xt(S[M]);if(Ar(Z,fe))N(Z,fe,C,null,O,x,j,F,L);else break;M++}for(;M<=H&&M<=Y;){const Z=v[H],fe=S[Y]=L?Fn(S[Y]):Xt(S[Y]);if(Ar(Z,fe))N(Z,fe,C,null,O,x,j,F,L);else break;H--,Y--}if(M>H){if(M<=Y){const Z=Y+1,fe=Z<X?S[Z].el:U;for(;M<=Y;)N(null,S[M]=L?Fn(S[M]):Xt(S[M]),C,fe,O,x,j,F,L),M++}}else if(M>Y)for(;M<=H;)ft(v[M],O,x,!0),M++;else{const Z=M,fe=M,we=new Map;for(M=fe;M<=Y;M++){const Xe=S[M]=L?Fn(S[M]):Xt(S[M]);Xe.key!=null&&we.set(Xe.key,M)}let Ee,rt=0;const st=Y-fe+1;let It=!1,wt=0;const Mt=new Array(st);for(M=0;M<st;M++)Mt[M]=0;for(M=Z;M<=H;M++){const Xe=v[M];if(rt>=st){ft(Xe,O,x,!0);continue}let ze;if(Xe.key!=null)ze=we.get(Xe.key);else for(Ee=fe;Ee<=Y;Ee++)if(Mt[Ee-fe]===0&&Ar(Xe,S[Ee])){ze=Ee;break}ze===void 0?ft(Xe,O,x,!0):(Mt[ze-fe]=M+1,ze>=wt?wt=ze:It=!0,N(Xe,S[ze],C,null,O,x,j,F,L),rt++)}const Br=It?eE(Mt):es;for(Ee=Br.length-1,M=st-1;M>=0;M--){const Xe=fe+M,ze=S[Xe],bs=S[Xe+1],dr=Xe+1<X?bs.el||bs.placeholder:U;Mt[M]===0?N(null,ze,C,dr,O,x,j,F,L):It&&(Ee<0||M!==Br[Ee]?Ct(ze,C,dr,2):Ee--)}}},Ct=(v,S,C,U,O=null)=>{const{el:x,type:j,transition:F,children:L,shapeFlag:M}=v;if(M&6){Ct(v.component.subTree,S,C,U);return}if(M&128){v.suspense.move(S,C,U);return}if(M&64){j.move(v,S,C,Vt);return}if(j===Ft){r(x,S,C);for(let H=0;H<L.length;H++)Ct(L[H],S,C,U);r(v.anchor,S,C);return}if(j===rc){Q(v,S,C);return}if(U!==2&&M&1&&F)if(U===0)F.beforeEnter(x),r(x,S,C),St(()=>F.enter(x),O);else{const{leave:H,delayLeave:Y,afterLeave:Z}=F,fe=()=>{v.ctx.isUnmounted?s(x):r(x,S,C)},we=()=>{x._isLeaving&&x[dn](!0),H(x,()=>{fe(),Z&&Z()})};Y?Y(x,fe,we):we()}else r(x,S,C)},ft=(v,S,C,U=!1,O=!1)=>{const{type:x,props:j,ref:F,children:L,dynamicChildren:M,shapeFlag:X,patchFlag:H,dirs:Y,cacheIndex:Z}=v;if(H===-2&&(O=!1),F!=null&&(vn(),ni(F,null,C,v,!0),Tn()),Z!=null&&(S.renderCache[Z]=void 0),X&256){S.ctx.deactivate(v);return}const fe=X&1&&Y,we=!ri(v);let Ee;if(we&&(Ee=j&&j.onVnodeBeforeUnmount)&&Qt(Ee,S,v),X&6)ln(v.component,C,U);else{if(X&128){v.suspense.unmount(C,U);return}fe&&yr(v,null,S,"beforeUnmount"),X&64?v.type.remove(v,S,C,Vt,U):M&&!M.hasOnce&&(x!==Ft||H>0&&H&64)?yt(M,S,C,!1,!0):(x===Ft&&H&384||!O&&X&16)&&yt(L,S,C),U&&fr(v)}(we&&(Ee=j&&j.onVnodeUnmounted)||fe)&&St(()=>{Ee&&Qt(Ee,S,v),fe&&yr(v,null,S,"unmounted")},C)},fr=v=>{const{type:S,el:C,anchor:U,transition:O}=v;if(S===Ft){Pn(C,U);return}if(S===rc){G(v);return}const x=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:j,delayLeave:F}=O,L=()=>j(C,x);F?F(v.el,x,L):L()}else x()},Pn=(v,S)=>{let C;for(;v!==S;)C=E(v),s(v),v=C;s(S)},ln=(v,S,C)=>{const{bum:U,scope:O,job:x,subTree:j,um:F,m:L,a:M}=v;yh(L),yh(M),U&&ho(U),O.stop(),x&&(x.flags|=8,ft(j,v,S,C)),F&&St(F,S),St(()=>{v.isUnmounted=!0},S)},yt=(v,S,C,U=!1,O=!1,x=0)=>{for(let j=x;j<v.length;j++)ft(v[j],S,C,U,O)},ce=v=>{if(v.shapeFlag&6)return ce(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const S=E(v.anchor||v.el),C=S&&S[vy];return C?E(C):S};let ue=!1;const Oe=(v,S,C)=>{v==null?S._vnode&&ft(S._vnode,null,null,!0):N(S._vnode||null,v,S,null,null,null,C),S._vnode=v,ue||(ue=!0,uh(),Xd(),ue=!1)},Vt={p:N,um:ft,m:Ct,r:fr,mt:me,mc:y,pc:ye,pbc:w,n:ce,o:n};return{render:Oe,hydrate:void 0,createApp:qy(Oe)}}function nc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Er({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Zy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ip(n,e,t=!1){const r=n.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Fn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Ip(a,c)),c.type===ga&&c.patchFlag!==-1&&(c.el=a.el),c.type===mt&&!c.el&&(c.el=a.el)}}function eE(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function wp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wp(e)}function yh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const tE=Symbol.for("v-scx"),nE=()=>po(tE);function go(n,e,t){return Ap(n,e,t)}function Ap(n,e,t=be){const{immediate:r,deep:s,flush:i,once:a}=t,c=Je({},t),l=e&&r||!e&&i!=="post";let h;if(mi){if(i==="sync"){const b=nE();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Zt,b.resume=Zt,b.pause=Zt,b}}const d=_t;c.call=(b,V,N)=>Ht(b,d,V,N);let p=!1;i==="post"?c.scheduler=b=>{St(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,V)=>{V?b():vl(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const E=my(n,e,c);return mi&&(h?h.push(E):l&&E()),E}function rE(n,e,t){const r=this.proxy,s=Le(n)?n.includes(".")?Sp(r,n):()=>r[n]:n.bind(r,r);let i;ae(e)?i=e:(i=e.handler,t=e);const a=Vi(this),c=Ap(s,i.bind(r),t);return a(),c}function Sp(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const sE=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Jn(e)}Modifiers`]||n[`${ar(e)}Modifiers`];function iE(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||be;let s=t;const i=e.startsWith("update:"),a=i&&sE(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Le(d)?d.trim():d)),a.number&&(s=t.map(hl)));let c,l=r[c=Qa(e)]||r[c=Qa(Jn(e))];!l&&i&&(l=r[c=Qa(ar(e))]),l&&Ht(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Ht(h,n,6,s)}}const oE=new WeakMap;function bp(n,e,t=!1){const r=t?oE:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!ae(n)){const l=h=>{const d=bp(h,e,!0);d&&(c=!0,Je(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Ce(n)&&r.set(n,null),null):(ne(i)?i.forEach(l=>a[l]=null):Je(a,i),Ce(n)&&r.set(n,a),a)}function pa(n,e){return!n||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(n,e[0].toLowerCase()+e.slice(1))||Te(n,ar(e))||Te(n,e))}function Eh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:E,setupState:b,ctx:V,inheritAttrs:N}=n,B=ko(n);let q,K;try{if(t.shapeFlag&4){const G=s||r,se=G;q=Xt(h.call(se,G,d,p,b,E,V)),K=c}else{const G=e;q=Xt(G.length>1?G(p,{attrs:c,slots:a,emit:l}):G(p,null)),K=e.props?c:aE(c)}}catch(G){ii.length=0,ha(G,n,1),q=lt(mt)}let Q=q;if(K&&N!==!1){const G=Object.keys(K),{shapeFlag:se}=Q;G.length&&se&7&&(i&&G.some(cl)&&(K=cE(K,i)),Q=Xn(Q,K,!1,!0))}return t.dirs&&(Q=Xn(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&pi(Q,t.transition),q=Q,ko(B),q}const aE=n=>{let e;for(const t in n)(t==="class"||t==="style"||ia(t))&&((e||(e={}))[t]=n[t]);return e},cE=(n,e)=>{const t={};for(const r in n)(!cl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function lE(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?vh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const E=d[p];if(a[E]!==r[E]&&!pa(h,E))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?vh(r,a,h):!0:!!a;return!1}function vh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!pa(t,i))return!0}return!1}function uE({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Rp=n=>n.__isSuspense;function hE(n,e){e&&e.pendingBranch?ne(n)?e.effects.push(...n):e.effects.push(n):Ey(n)}const Ft=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),rc=Symbol.for("v-stc"),ii=[];let Rt=null;function bt(n=!1){ii.push(Rt=n?null:[])}function fE(){ii.pop(),Rt=ii[ii.length-1]||null}let gi=1;function Mo(n,e=!1){gi+=n,n<0&&Rt&&e&&(Rt.hasOnce=!0)}function Pp(n){return n.dynamicChildren=gi>0?Rt||es:null,fE(),gi>0&&Rt&&Rt.push(n),n}function Lt(n,e,t,r,s,i){return Pp(re(n,e,t,r,s,i,!0))}function Cp(n,e,t,r,s){return Pp(lt(n,e,t,r,s,!0))}function Lo(n){return n?n.__v_isVNode===!0:!1}function Ar(n,e){return n.type===e.type&&n.key===e.key}const Vp=({key:n})=>n??null,mo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Le(n)||ut(n)||ae(n)?{i:Ot,r:n,k:e,f:!!t}:n:null);function re(n,e=null,t=null,r=0,s=null,i=n===Ft?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Vp(e),ref:e&&mo(e),scopeId:ep,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return c?(Sl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=Le(t)?8:16),gi>0&&!a&&Rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rt.push(l),l}const lt=dE;function dE(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===Oy)&&(n=mt),Lo(n)){const c=Xn(n,e,!0);return t&&Sl(c,t),gi>0&&!i&&Rt&&(c.shapeFlag&6?Rt[Rt.indexOf(n)]=c:Rt.push(c)),c.patchFlag=-2,c}if(wE(n)&&(n=n.__vccOpts),e){e=pE(e);let{class:c,style:l}=e;c&&!Le(c)&&(e.class=la(c)),Ce(l)&&(El(l)&&!ne(l)&&(l=Je({},l)),e.style=ns(l))}const a=Le(n)?1:Rp(n)?128:tp(n)?64:Ce(n)?4:ae(n)?2:0;return re(n,e,t,r,s,a,i,!0)}function pE(n){return n?El(n)||mp(n)?Je({},n):n:null}function Xn(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?gE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Vp(h),ref:e&&e.ref?t&&i?ne(i)?i.concat(mo(e)):[i,mo(e)]:mo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ft?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xn(n.ssContent),ssFallback:n.ssFallback&&Xn(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&pi(d,l.clone(d)),d}function Dp(n=" ",e=0){return lt(ga,null,n,e)}function Kr(n="",e=!1){return e?(bt(),Cp(mt,null,n)):lt(mt,null,n)}function Xt(n){return n==null||typeof n=="boolean"?lt(mt):ne(n)?lt(Ft,null,n.slice()):Lo(n)?Fn(n):lt(ga,null,String(n))}function Fn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xn(n)}function Sl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ne(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!mp(e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Ot},t=32):(e=String(e),r&64?(t=16,e=[Dp(e)]):t=8);n.children=e,n.shapeFlag|=t}function gE(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=la([e.class,r.class]));else if(s==="style")e.style=ns([e.style,r.style]);else if(ia(s)){const i=e[s],a=r[s];a&&i!==a&&!(ne(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Qt(n,e,t,r=null){Ht(n,e,7,[t,r])}const mE=dp();let _E=0;function yE(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||mE,i={uid:_E++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yp(r,s),emitsOptions:bp(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=iE.bind(null,i),n.ce&&n.ce(i),i}let _t=null;const kp=()=>_t||Ot;let Fo,kc;{const n=ca(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Fo=e("__VUE_INSTANCE_SETTERS__",t=>_t=t),kc=e("__VUE_SSR_SETTERS__",t=>mi=t)}const Vi=n=>{const e=_t;return Fo(n),n.scope.on(),()=>{n.scope.off(),Fo(e)}},Th=()=>{_t&&_t.scope.off(),Fo(null)};function Np(n){return n.vnode.shapeFlag&4}let mi=!1;function EE(n,e=!1,t=!1){e&&kc(e);const{props:r,children:s}=n.vnode,i=Np(n);Wy(n,r,i,e),Qy(n,s,t||e);const a=i?vE(n,e):void 0;return e&&kc(!1),a}function vE(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,My);const{setup:r}=t;if(r){vn();const s=n.setupContext=r.length>1?IE(n):null,i=Vi(n),a=Ci(r,n,0,[n.props,s]),c=Rd(a);if(Tn(),i(),(c||n.sp)&&!ri(n)&&cp(n),c){if(a.then(Th,Th),e)return a.then(l=>{Ih(n,l)}).catch(l=>{ha(l,n,0)});n.asyncDep=a}else Ih(n,a)}else Op(n)}function Ih(n,e,t){ae(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ce(e)&&(n.setupState=Qd(e)),Op(n)}function Op(n,e,t){const r=n.type;n.render||(n.render=r.render||Zt);{const s=Vi(n);vn();try{Ly(n)}finally{Tn(),s()}}}const TE={get(n,e){return at(n,"get",""),n[e]}};function IE(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,TE),slots:n.slots,emit:n.emit,expose:e}}function ma(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Qd(cy(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in si)return si[t](n)},has(e,t){return t in e||t in si}})):n.proxy}function wE(n){return ae(n)&&"__vccOpts"in n}const zr=(n,e)=>py(n,e,mi);function AE(n,e,t){try{Mo(-1);const r=arguments.length;return r===2?Ce(e)&&!ne(e)?Lo(e)?lt(n,null,[e]):lt(n,e):lt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Lo(t)&&(t=[t]),lt(n,e,t))}finally{Mo(1)}}const SE="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nc;const wh=typeof window<"u"&&window.trustedTypes;if(wh)try{Nc=wh.createPolicy("vue",{createHTML:n=>n})}catch{}const xp=Nc?n=>Nc.createHTML(n):n=>n,bE="http://www.w3.org/2000/svg",RE="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,Ah=fn&&fn.createElement("template"),PE={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?fn.createElementNS(bE,n):e==="mathml"?fn.createElementNS(RE,n):t?fn.createElement(n,{is:t}):fn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>fn.createTextNode(n),createComment:n=>fn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Ah.innerHTML=xp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=Ah.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},xn="transition",js="animation",_i=Symbol("_vtc"),Mp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},CE=Je({},np,Mp),VE=n=>(n.displayName="Transition",n.props=CE,n),sc=VE((n,{slots:e})=>AE(wy,DE(n),e)),vr=(n,e=[])=>{ne(n)?n.forEach(t=>t(...e)):n&&n(...e)},Sh=n=>n?ne(n)?n.some(e=>e.length>1):n.length>1:!1;function DE(n){const e={};for(const T in n)T in Mp||(e[T]=n[T]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:h=a,appearToClass:d=c,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:E=`${t}-leave-active`,leaveToClass:b=`${t}-leave-to`}=n,V=kE(s),N=V&&V[0],B=V&&V[1],{onBeforeEnter:q,onEnter:K,onEnterCancelled:Q,onLeave:G,onLeaveCancelled:se,onBeforeAppear:he=q,onAppear:A=K,onAppearCancelled:y=Q}=e,m=(T,_,me,qe)=>{T._enterCancelled=qe,Tr(T,_?d:c),Tr(T,_?h:a),me&&me()},w=(T,_)=>{T._isLeaving=!1,Tr(T,p),Tr(T,b),Tr(T,E),_&&_()},I=T=>(_,me)=>{const qe=T?A:K,Ne=()=>m(_,T,me);vr(qe,[_,Ne]),bh(()=>{Tr(_,T?l:i),hn(_,T?d:c),Sh(qe)||Rh(_,r,N,Ne)})};return Je(e,{onBeforeEnter(T){vr(q,[T]),hn(T,i),hn(T,a)},onBeforeAppear(T){vr(he,[T]),hn(T,l),hn(T,h)},onEnter:I(!1),onAppear:I(!0),onLeave(T,_){T._isLeaving=!0;const me=()=>w(T,_);hn(T,p),T._enterCancelled?(hn(T,E),Vh(T)):(Vh(T),hn(T,E)),bh(()=>{T._isLeaving&&(Tr(T,p),hn(T,b),Sh(G)||Rh(T,r,B,me))}),vr(G,[T,me])},onEnterCancelled(T){m(T,!1,void 0,!0),vr(Q,[T])},onAppearCancelled(T){m(T,!0,void 0,!0),vr(y,[T])},onLeaveCancelled(T){w(T),vr(se,[T])}})}function kE(n){if(n==null)return null;if(Ce(n))return[ic(n.enter),ic(n.leave)];{const e=ic(n);return[e,e]}}function ic(n){return O_(n)}function hn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[_i]||(n[_i]=new Set)).add(e)}function Tr(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[_i];t&&(t.delete(e),t.size||(n[_i]=void 0))}function bh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let NE=0;function Rh(n,e,t,r){const s=n._endId=++NE,i=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:a,timeout:c,propCount:l}=OE(n,e);if(!a)return r();const h=a+"end";let d=0;const p=()=>{n.removeEventListener(h,E),i()},E=b=>{b.target===n&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),n.addEventListener(h,E)}function OE(n,e){const t=window.getComputedStyle(n),r=V=>(t[V]||"").split(", "),s=r(`${xn}Delay`),i=r(`${xn}Duration`),a=Ph(s,i),c=r(`${js}Delay`),l=r(`${js}Duration`),h=Ph(c,l);let d=null,p=0,E=0;e===xn?a>0&&(d=xn,p=a,E=i.length):e===js?h>0&&(d=js,p=h,E=l.length):(p=Math.max(a,h),d=p>0?a>h?xn:js:null,E=d?d===xn?i.length:l.length:0);const b=d===xn&&/\b(?:transform|all)(?:,|$)/.test(r(`${xn}Property`).toString());return{type:d,timeout:p,propCount:E,hasTransform:b}}function Ph(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>Ch(t)+Ch(n[r])))}function Ch(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Vh(n){return(n?n.ownerDocument:document).body.offsetHeight}function xE(n,e,t){const r=n[_i];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Dh=Symbol("_vod"),ME=Symbol("_vsh"),LE=Symbol(""),FE=/(?:^|;)\s*display\s*:/;function UE(n,e,t){const r=n.style,s=Le(t);let i=!1;if(t&&!s){if(e)if(Le(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&_o(r,c,"")}else for(const a in e)t[a]==null&&_o(r,a,"");for(const a in t)a==="display"&&(i=!0),_o(r,a,t[a])}else if(s){if(e!==t){const a=r[LE];a&&(t+=";"+a),r.cssText=t,i=FE.test(t)}}else e&&n.removeAttribute("style");Dh in n&&(n[Dh]=i?r.display:"",n[ME]&&(r.display="none"))}const kh=/\s*!important$/;function _o(n,e,t){if(ne(t))t.forEach(r=>_o(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=BE(n,e);kh.test(t)?n.setProperty(ar(r),t.replace(kh,""),"important"):n[r]=t}}const Nh=["Webkit","Moz","ms"],oc={};function BE(n,e){const t=oc[e];if(t)return t;let r=Jn(e);if(r!=="filter"&&r in n)return oc[e]=r;r=Vd(r);for(let s=0;s<Nh.length;s++){const i=Nh[s]+r;if(i in n)return oc[e]=i}return e}const Oh="http://www.w3.org/1999/xlink";function xh(n,e,t,r,s,i=B_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Oh,e.slice(6,e.length)):n.setAttributeNS(Oh,e,t):t==null||i&&!kd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":or(t)?String(t):t)}function Mh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?xp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=kd(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Gr(n,e,t,r){n.addEventListener(e,t,r)}function $E(n,e,t,r){n.removeEventListener(e,t,r)}const Lh=Symbol("_vei");function jE(n,e,t,r,s=null){const i=n[Lh]||(n[Lh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=qE(e);if(r){const h=i[e]=KE(r,s);Gr(n,c,h,l)}else a&&($E(n,c,a,l),i[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function qE(n){let e;if(Fh.test(n)){e={};let r;for(;r=n.match(Fh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ar(n.slice(2)),e]}let ac=0;const HE=Promise.resolve(),WE=()=>ac||(HE.then(()=>ac=0),ac=Date.now());function KE(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Ht(zE(r,t.value),e,5,[r])};return t.value=n,t.attached=WE(),t}function zE(n,e){if(ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Uh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,GE=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?xE(n,r,a):e==="style"?UE(n,t,r):ia(e)?cl(e)||jE(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):QE(n,e,r,a))?(Mh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xh(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Le(r))?Mh(n,Jn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),xh(n,e,r,a))};function QE(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uh(e)&&ae(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uh(e)&&Le(t)?!1:e in n}const Bh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ne(e)?t=>ho(e,t):e};function JE(n){n.target.composing=!0}function $h(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cc=Symbol("_assign");function jh(n,e,t){return e&&(n=n.trim()),t&&(n=hl(n)),n}const Uo={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[cc]=Bh(s);const i=r||s.props&&s.props.type==="number";Gr(n,e?"change":"input",a=>{a.target.composing||n[cc](jh(n.value,t,i))}),(t||i)&&Gr(n,"change",()=>{n.value=jh(n.value,t,i)}),e||(Gr(n,"compositionstart",JE),Gr(n,"compositionend",$h),Gr(n,"change",$h))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[cc]=Bh(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?hl(n.value):n.value,l=e??"";c!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},YE=["ctrl","shift","alt","meta"],XE={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>YE.some(t=>n[`${t}Key`]&&!e.includes(t))},Ks=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=XE[e[a]];if(c&&c(s,e))return}return n(s,...i)})},ZE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=ar(s.key);if(e.some(a=>a===i||ZE[a]===i))return n(s)})},ev=Je({patchProp:GE},PE);let Hh;function tv(){return Hh||(Hh=Yy(ev))}const nv=(...n)=>{const e=tv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=sv(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,rv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function rv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function sv(n){return Le(n)?document.querySelector(n):n}const iv=()=>{};var Wh={};/**
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
 */const Lp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ov=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Fp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(E=64)),r.push(t[d],t[p],t[E],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ov(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new av;const E=i<<2|c>>4;if(r.push(E),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class av extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cv=function(n){const e=Lp(n);return Fp.encodeByteArray(e,!0)},Bo=function(n){return cv(n).replace(/\./g,"")},Up=function(n){try{return Fp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uv=()=>lv().__FIREBASE_DEFAULTS__,hv=()=>{if(typeof process>"u"||typeof Wh>"u")return;const n=Wh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Up(n[1]);return e&&JSON.parse(e)},_a=()=>{try{return iv()||uv()||hv()||fv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bp=n=>{var e,t;return(t=(e=_a())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},dv=n=>{const e=Bp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},$p=()=>{var n;return(n=_a())==null?void 0:n.config},jp=n=>{var e;return(e=_a())==null?void 0:e[`_${n}`]};/**
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
 */class pv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function gv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Bo(JSON.stringify(t)),Bo(JSON.stringify(a)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function _v(){var e;const n=(e=_a())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ev(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tv(){const n=ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Iv(){return!_v()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wv(){try{return typeof indexedDB=="object"}catch{return!1}}function Av(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Sv="FirebaseError";class Rn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Sv,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?bv(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Rn(s,c,r)}}function bv(n,e){return n.replace(Rv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rv=/\{\$([^}]+)}/g;function Pv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Kh(i)&&Kh(a)){if(!Cr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Kh(n){return n!==null&&typeof n=="object"}/**
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
 */function ki(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Gs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Cv(n,e){const t=new Vv(n,e);return t.subscribe.bind(t)}class Vv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Dv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=lc),s.error===void 0&&(s.error=lc),s.complete===void 0&&(s.complete=lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lc(){}/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Ni(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qp(n){return(await fetch(n,{credentials:"include"})).ok}class Vr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class kv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new pv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ov(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nv(n){return n===wr?void 0:n}function Ov(n){return n.instantiationMode==="EAGER"}/**
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
 */class xv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const Mv={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Lv=ge.INFO,Fv={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Uv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Fv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=Lv,this._logHandler=Uv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Bv=(n,e)=>e.some(t=>n instanceof t);let zh,Gh;function $v(){return zh||(zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jv(){return Gh||(Gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hp=new WeakMap,Oc=new WeakMap,Wp=new WeakMap,uc=new WeakMap,Rl=new WeakMap;function qv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Hn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Hp.set(t,n)}).catch(()=>{}),Rl.set(e,n),e}function Hv(n){if(Oc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Oc.set(n,e)}let xc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Wv(n){xc=n(xc)}function Kv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hc(this),e,...t);return Wp.set(r,e.sort?e.sort():[e]),Hn(r)}:jv().includes(n)?function(...e){return n.apply(hc(this),e),Hn(Hp.get(this))}:function(...e){return Hn(n.apply(hc(this),e))}}function zv(n){return typeof n=="function"?Kv(n):(n instanceof IDBTransaction&&Hv(n),Bv(n,$v())?new Proxy(n,xc):n)}function Hn(n){if(n instanceof IDBRequest)return qv(n);if(uc.has(n))return uc.get(n);const e=zv(n);return e!==n&&(uc.set(n,e),Rl.set(e,n)),e}const hc=n=>Rl.get(n);function Gv(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Hn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Hn(a.result),l.oldVersion,l.newVersion,Hn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Qv=["get","getKey","getAll","getAllKeys","count"],Jv=["put","add","delete","clear"],fc=new Map;function Qh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Jv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qv.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return fc.set(e,i),i}Wv(n=>({...n,get:(e,t,r)=>Qh(e,t)||n.get(e,t,r),has:(e,t)=>!!Qh(e,t)||n.has(e,t)}));/**
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
 */class Yv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Xv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Xv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",Jh="0.14.12";/**
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
 */const In=new bl("@firebase/app"),Zv="@firebase/app-compat",eT="@firebase/analytics-compat",tT="@firebase/analytics",nT="@firebase/app-check-compat",rT="@firebase/app-check",sT="@firebase/auth",iT="@firebase/auth-compat",oT="@firebase/database",aT="@firebase/data-connect",cT="@firebase/database-compat",lT="@firebase/functions",uT="@firebase/functions-compat",hT="@firebase/installations",fT="@firebase/installations-compat",dT="@firebase/messaging",pT="@firebase/messaging-compat",gT="@firebase/performance",mT="@firebase/performance-compat",_T="@firebase/remote-config",yT="@firebase/remote-config-compat",ET="@firebase/storage",vT="@firebase/storage-compat",TT="@firebase/firestore",IT="@firebase/ai",wT="@firebase/firestore-compat",AT="firebase",ST="12.13.0";/**
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
 */const Lc="[DEFAULT]",bT={[Mc]:"fire-core",[Zv]:"fire-core-compat",[tT]:"fire-analytics",[eT]:"fire-analytics-compat",[rT]:"fire-app-check",[nT]:"fire-app-check-compat",[sT]:"fire-auth",[iT]:"fire-auth-compat",[oT]:"fire-rtdb",[aT]:"fire-data-connect",[cT]:"fire-rtdb-compat",[lT]:"fire-fn",[uT]:"fire-fn-compat",[hT]:"fire-iid",[fT]:"fire-iid-compat",[dT]:"fire-fcm",[pT]:"fire-fcm-compat",[gT]:"fire-perf",[mT]:"fire-perf-compat",[_T]:"fire-rc",[yT]:"fire-rc-compat",[ET]:"fire-gcs",[vT]:"fire-gcs-compat",[TT]:"fire-fst",[wT]:"fire-fst-compat",[IT]:"fire-vertex","fire-js":"fire-js",[AT]:"fire-js-all"};/**
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
 */const $o=new Map,RT=new Map,Fc=new Map;function Yh(n,e){try{n.container.addComponent(e)}catch(t){In.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fs(n){const e=n.name;if(Fc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,n);for(const t of $o.values())Yh(t,n);for(const t of RT.values())Yh(t,n);return!0}function Pl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function kt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const PT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Di("app","Firebase",PT);/**
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
 */class CT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Es=ST;function Kp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Lc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(t||(t=$p()),!t)throw Wn.create("no-options");const i=$o.get(s);if(i){if(Cr(t,i.options)&&Cr(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const a=new xv(s);for(const l of Fc.values())a.addComponent(l);const c=new CT(t,r,a);return $o.set(s,c),c}function zp(n=Lc){const e=$o.get(n);if(!e&&n===Lc&&$p())return Kp();if(!e)throw Wn.create("no-app",{appName:n});return e}function Kn(n,e,t){let r=bT[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(a.join(" "));return}fs(new Vr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const VT="firebase-heartbeat-database",DT=1,yi="firebase-heartbeat-store";let dc=null;function Gp(){return dc||(dc=Gv(VT,DT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(yi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wn.create("idb-open",{originalErrorMessage:n.message})})),dc}async function kT(n){try{const t=(await Gp()).transaction(yi),r=await t.objectStore(yi).get(Qp(n));return await t.done,r}catch(e){if(e instanceof Rn)In.warn(e.message);else{const t=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(t.message)}}}async function Xh(n,e){try{const r=(await Gp()).transaction(yi,"readwrite");await r.objectStore(yi).put(e,Qp(n)),await r.done}catch(t){if(t instanceof Rn)In.warn(t.message);else{const r=Wn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});In.warn(r.message)}}}function Qp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const NT=1024,OT=30;class xT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new LT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>OT){const a=FT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zh(),{heartbeatsToSend:r,unsentEntries:s}=MT(this._heartbeatsCache.heartbeats),i=Bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return In.warn(t),""}}}function Zh(){return new Date().toISOString().substring(0,10)}function MT(n,e=NT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ef(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ef(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class LT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wv()?Av().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ef(n){return Bo(JSON.stringify({version:2,heartbeats:n})).length}function FT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function UT(n){fs(new Vr("platform-logger",e=>new Yv(e),"PRIVATE")),fs(new Vr("heartbeat",e=>new xT(e),"PRIVATE")),Kn(Mc,Jh,n),Kn(Mc,Jh,"esm2020"),Kn("fire-js","")}UT("");function Jp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BT=Jp,Yp=new Di("auth","Firebase",Jp());/**
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
 */const jo=new bl("@firebase/auth");function $T(n,...e){jo.logLevel<=ge.WARN&&jo.warn(`Auth (${Es}): ${n}`,...e)}function yo(n,...e){jo.logLevel<=ge.ERROR&&jo.error(`Auth (${Es}): ${n}`,...e)}/**
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
 */function Wt(n,...e){throw Cl(n,...e)}function en(n,...e){return Cl(n,...e)}function Xp(n,e,t){const r={...BT(),[e]:t};return new Di("auth","Firebase",r).create(e,{appName:n.name})}function En(n){return Xp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Yp.create(n,...e)}function ee(n,e,...t){if(!n)throw Cl(e,...t)}function mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw yo(e),new Error(e)}function wn(n,e){n||mn(e)}/**
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
 */function Uc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function jT(){return tf()==="http:"||tf()==="https:"}function tf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function qT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jT()||Ev()||"connection"in navigator)?navigator.onLine:!0}function HT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Oi{constructor(e,t){this.shortDelay=e,this.longDelay=t,wn(t>e,"Short delay should be less than long delay!"),this.isMobile=mv()||vv()}get(){return qT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class Zp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zT=new Oi(3e4,6e4);function cr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function lr(n,e,t,r,s={}){return eg(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ki({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return yv()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Ni(n.emulatorConfig.host)&&(h.credentials="include"),Zp.fetch()(await tg(n,n.config.apiHost,t,c),h)})}async function eg(n,e,t){n._canInitEmulator=!1;const r={...WT,...e};try{const s=new QT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw io(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw io(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw io(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xp(n,d,h);Wt(n,d)}}catch(s){if(s instanceof Rn)throw s;Wt(n,"network-request-failed",{message:String(s)})}}async function xi(n,e,t,r,s={}){const i=await lr(n,e,t,r,s);return"mfaPendingCredential"in i&&Wt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function tg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Vl(n.config,s):`${n.config.apiScheme}://${s}`;return KT.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function GT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),zT.get())})}}function io(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=en(n,e,r);return s.customData._tokenResponse=t,s}function nf(n){return n!==void 0&&n.enterprise!==void 0}class JT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return GT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function YT(n,e){return lr(n,"GET","/v2/recaptchaConfig",cr(n,e))}/**
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
 */async function XT(n,e){return lr(n,"POST","/v1/accounts:delete",e)}async function qo(n,e){return lr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function oi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZT(n,e=!1){const t=Ke(n),r=await t.getIdToken(e),s=Dl(r);ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oi(pc(s.auth_time)),issuedAtTime:oi(pc(s.iat)),expirationTime:oi(pc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pc(n){return Number(n)*1e3}function Dl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Up(t);return s?JSON.parse(s):(yo("Failed to decode base64 JWT payload"),null)}catch(s){return yo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rf(n){const e=Dl(n);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ei(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rn&&eI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function eI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class tI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Ho(n){var p;const e=n.auth,t=await n.getIdToken(),r=await Ei(n,qo(e,{idToken:t}));ee(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?ng(s.providerUserInfo):[],a=rI(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function nI(n){const e=Ke(n);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ng(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function sI(n,e){const t=await eg(n,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await tg(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Ni(n.emulatorConfig.host)&&(l.credentials="include"),Zp.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iI(n,e){return lr(n,"POST","/v2/accounts:revokeToken",cr(n,e))}/**
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
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=rf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await sI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new os;return r&&(ee(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Mn(n,e){ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Bt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new tI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ZT(this,e)}reload(){return nI(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await Ei(this,XT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:E,isAnonymous:b,providerData:V,stsTokenManager:N}=t;ee(p&&N,e,"internal-error");const B=os.fromJSON(this.name,N);ee(typeof p=="string",e,"internal-error"),Mn(r,e.name),Mn(s,e.name),ee(typeof E=="boolean",e,"internal-error"),ee(typeof b=="boolean",e,"internal-error"),Mn(i,e.name),Mn(a,e.name),Mn(c,e.name),Mn(l,e.name),Mn(h,e.name),Mn(d,e.name);const q=new Bt({uid:p,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:B,createdAt:h,lastLoginAt:d});return V&&Array.isArray(V)&&(q.providerData=V.map(K=>({...K}))),l&&(q._redirectEventId=l),q}static async _fromIdTokenResponse(e,t,r=!1){const s=new os;s.updateFromServerResponse(t);const i=new Bt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ng(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new os;c.updateFromIdToken(r);const l=new Bt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */class rg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rg.type="NONE";const of=rg;/**
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
 */function Eo(n,e,t){return`firebase:${n}:${e}:${t}`}class as{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qo(this.auth,{idToken:e}).catch(()=>{});return t?Bt._fromGetAccountInfoResponse(this.auth,t,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new as(_n(of),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_n(of);const a=Eo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const E=await qo(e,{idToken:d}).catch(()=>{});if(!E)break;p=await Bt._fromGetAccountInfoResponse(e,E,d)}else p=Bt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new as(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new as(i,e,r))}}/**
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
 */function af(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lg(e))return"Blackberry";if(ug(e))return"Webos";if(ig(e))return"Safari";if((e.includes("chrome/")||og(e))&&!e.includes("edge/"))return"Chrome";if(cg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sg(n=ht()){return/firefox\//i.test(n)}function ig(n=ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function og(n=ht()){return/crios\//i.test(n)}function ag(n=ht()){return/iemobile/i.test(n)}function cg(n=ht()){return/android/i.test(n)}function lg(n=ht()){return/blackberry/i.test(n)}function ug(n=ht()){return/webos/i.test(n)}function kl(n=ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function oI(n=ht()){var e;return kl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function aI(){return Tv()&&document.documentMode===10}function hg(n=ht()){return kl(n)||cg(n)||ug(n)||lg(n)||/windows phone/i.test(n)||ag(n)}/**
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
 */function fg(n,e=[]){let t;switch(n){case"Browser":t=af(ht());break;case"Worker":t=`${af(ht())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Es}/${r}`}/**
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
 */class cI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lI(n,e={}){return lr(n,"GET","/v2/passwordPolicy",cr(n,e))}/**
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
 */const uI=6;class hI{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??uI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class fI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cf(this),this.idTokenSubscription=new cf(this),this.beforeStateQueue=new cI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qo(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(kt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(En(this));const t=e?Ke(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lI(this),t=new hI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await iI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&$T(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function xr(n){return Ke(n)}class cf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cv(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dI(n){ya=n}function dg(n){return ya.loadJS(n)}function pI(){return ya.recaptchaEnterpriseScript}function gI(){return ya.gapiScript}function mI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class _I{constructor(){this.enterprise=new yI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const EI="recaptcha-enterprise",pg="NO_RECAPTCHA";class vI{constructor(e){this.type=EI,this.auth=xr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{YT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new JT(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;nf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(pg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _I().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&nf(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=pI();l.length!==0&&(l+=c),dg(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function lf(n,e,t,r=!1,s=!1){const i=new vI(n);let a;if(s)a=pg;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $c(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await lf(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await lf(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function TI(n,e){const t=Pl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Cr(i,e??{}))return s;Wt(s,"already-initialized")}return t.initialize({options:e})}function II(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wI(n,e,t){const r=xr(n);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gg(e),{host:a,port:c}=AI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(Cr(h,r.config.emulator)&&Cr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ni(a)?qp(`${i}//${a}${l}`):SI()}function gg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function AI(n){const e=gg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:uf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:uf(a)}}}function uf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function SI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Nl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function bI(n,e){return lr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function RI(n,e){return xi(n,"POST","/v1/accounts:signInWithPassword",cr(n,e))}/**
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
 */async function PI(n,e){return xi(n,"POST","/v1/accounts:signInWithEmailLink",cr(n,e))}async function CI(n,e){return xi(n,"POST","/v1/accounts:signInWithEmailLink",cr(n,e))}/**
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
 */class vi extends Nl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new vi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new vi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,t,"signInWithPassword",RI);case"emailLink":return PI(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $c(e,r,"signUpPassword",bI);case"emailLink":return CI(e,{idToken:t,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function cs(n,e){return xi(n,"POST","/v1/accounts:signInWithIdp",cr(n,e))}/**
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
 */const VI="http://localhost";class Dr extends Nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Dr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return cs(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,cs(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cs(e,t)}buildRequest(){const e={requestUri:VI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ki(t)}return e}}/**
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
 */function DI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kI(n){const e=zs(Gs(n)).link,t=e?zs(Gs(e)).deep_link_id:null,r=zs(Gs(n)).deep_link_id;return(r?zs(Gs(r)).link:null)||r||t||e||n}class Ol{constructor(e){const t=zs(Gs(e)),r=t.apiKey??null,s=t.oobCode??null,i=DI(t.mode??null);ee(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=kI(e);try{return new Ol(t)}catch{return null}}}/**
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
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,t){return vi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ol.parseLink(t);return ee(r,"argument-error"),vi._fromEmailAndCode(e,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class mg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends mg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Un extends Mi{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Dr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class $n extends Mi{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class jn extends Mi{constructor(){super("twitter.com")}static credential(e,t){return Dr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jn.credential(t,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */async function NI(n,e){return xi(n,"POST","/v1/accounts:signUp",cr(n,e))}/**
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
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Bt._fromIdTokenResponse(e,r,s),a=hf(r);return new kr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=hf(r);return new kr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function hf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Wo extends Rn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Wo(e,t,r,s)}}function _g(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wo._fromErrorAndOperation(n,i,e,r):i})}async function OI(n,e,t=!1){const r=await Ei(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return kr._forOperation(n,"link",r)}/**
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
 */async function xI(n,e,t=!1){const{auth:r}=n;if(kt(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await Ei(n,_g(r,s,e,n),t);ee(i.idToken,r,"internal-error");const a=Dl(i.idToken);ee(a,r,"internal-error");const{sub:c}=a;return ee(n.uid===c,r,"user-mismatch"),kr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),i}}/**
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
 */async function yg(n,e,t=!1){if(kt(n.app))return Promise.reject(En(n));const r="signIn",s=await _g(n,r,e),i=await kr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function MI(n,e){return yg(xr(n),e)}/**
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
 */async function Eg(n){const e=xr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LI(n,e,t){if(kt(n.app))return Promise.reject(En(n));const r=xr(n),a=await $c(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Eg(n),l}),c=await kr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function FI(n,e,t){return kt(n.app)?Promise.reject(En(n)):MI(Ke(n),vs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Eg(n),r})}function UI(n,e,t,r){return Ke(n).onIdTokenChanged(e,t,r)}function BI(n,e,t){return Ke(n).beforeAuthStateChanged(e,t)}function $I(n,e,t,r){return Ke(n).onAuthStateChanged(e,t,r)}function jI(n){return Ke(n).signOut()}const Ko="__sak";/**
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
 */class vg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qI=1e3,HI=10;class Tg extends vg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);aI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tg.type="LOCAL";const WI=Tg;/**
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
 */class Ig extends vg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ig.type="SESSION";const wg=Ig;/**
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
 */function KI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ea(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await KI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ea.receivers=[];/**
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
 */class zI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=xl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const E=p;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function tn(){return window}function GI(n){tn().location.href=n}/**
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
 */function Ag(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function QI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function YI(){return Ag()?self:null}/**
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
 */const Sg="firebaseLocalStorageDb",XI=1,zo="firebaseLocalStorage",bg="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function va(n,e){return n.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function ZI(){const n=indexedDB.deleteDatabase(Sg);return new Li(n).toPromise()}function jc(){const n=indexedDB.open(Sg,XI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(zo,{keyPath:bg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(zo)?e(r):(r.close(),await ZI(),e(await jc()))})})}async function ff(n,e,t){const r=va(n,!0).put({[bg]:e,value:t});return new Li(r).toPromise()}async function ew(n,e){const t=va(n,!1).get(e),r=await new Li(t).toPromise();return r===void 0?null:r.value}function df(n,e){const t=va(n,!0).delete(e);return new Li(t).toPromise()}const tw=800,nw=3;class Rg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>nw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ag()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(YI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await QI(),!this.activeServiceWorker)return;this.sender=new zI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await ff(e,Ko,"1"),await df(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ff(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ew(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>df(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=va(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rg.type="LOCAL";const rw=Rg;new Oi(3e4,6e4);/**
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
 */function sw(n,e){return e?_n(e):(ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ml extends Nl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iw(n){return yg(n.auth,new Ml(n),n.bypassAuthState)}function ow(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),xI(t,new Ml(n),n.bypassAuthState)}async function aw(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),OI(t,new Ml(n),n.bypassAuthState)}/**
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
 */class Pg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iw;case"linkViaPopup":case"linkViaRedirect":return aw;case"reauthViaPopup":case"reauthViaRedirect":return ow;default:Wt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cw=new Oi(2e3,1e4);class Zr extends Pg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cw.get())};e()}}Zr.currentPopupAction=null;/**
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
 */const lw="pendingRedirect",vo=new Map;class uw extends Pg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await hw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hw(n,e){const t=pw(e),r=dw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function fw(n,e){vo.set(n._key(),e)}function dw(n){return _n(n._redirectPersistence)}function pw(n){return Eo(lw,n.config.apiKey,n.name)}async function gw(n,e,t=!1){if(kt(n.app))return Promise.reject(En(n));const r=xr(n),s=sw(r,e),a=await new uw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const mw=10*60*1e3;class _w{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Cg(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(en(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mw&&this.cachedEventUids.clear(),this.cachedEventUids.has(pf(e))}saveEventToCache(e){this.cachedEventUids.add(pf(e)),this.lastProcessedEventTime=Date.now()}}function pf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cg(n);default:return!1}}/**
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
 */async function Ew(n,e={}){return lr(n,"GET","/v1/projects",e)}/**
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
 */const vw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tw=/^https?/;async function Iw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ew(n);for(const t of e)try{if(ww(t))return}catch{}Wt(n,"unauthorized-domain")}function ww(n){const e=Uc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Tw.test(t))return!1;if(vw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Aw=new Oi(3e4,6e4);function gf(){const n=tn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sw(n){return new Promise((e,t)=>{var s,i,a;function r(){gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gf(),t(en(n,"network-request-failed"))},timeout:Aw.get()})}if((i=(s=tn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=tn().gapi)!=null&&a.load)r();else{const c=mI("iframefcb");return tn()[c]=()=>{gapi.load?r():t(en(n,"network-request-failed"))},dg(`${gI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw To=null,e})}let To=null;function bw(n){return To=To||Sw(n),To}/**
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
 */const Rw=new Oi(5e3,15e3),Pw="__/auth/iframe",Cw="emulator/auth/iframe",Vw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kw(n){const e=n.config;ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vl(e,Cw):`https://${n.config.authDomain}/${Pw}`,r={apiKey:e.apiKey,appName:n.name,v:Es},s=Dw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ki(r).slice(1)}`}async function Nw(n){const e=await bw(n),t=tn().gapi;return ee(t,n,"internal-error"),e.open({where:document.body,url:kw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=en(n,"network-request-failed"),c=tn().setTimeout(()=>{i(a)},Rw.get());function l(){tn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const Ow={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xw=500,Mw=600,Lw="_blank",Fw="http://localhost";class mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uw(n,e,t,r=xw,s=Mw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Ow,width:r.toString(),height:s.toString(),top:i,left:a},h=ht().toLowerCase();t&&(c=og(h)?Lw:t),sg(h)&&(e=e||Fw,l.scrollbars="yes");const d=Object.entries(l).reduce((E,[b,V])=>`${E}${b}=${V},`,"");if(oI(h)&&c!=="_self")return Bw(e||"",c),new mf(null);const p=window.open(e||"",c,d);ee(p,n,"popup-blocked");try{p.focus()}catch{}return new mf(p)}function Bw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const $w="__/auth/handler",jw="emulator/auth/handler",qw=encodeURIComponent("fac");async function _f(n,e,t,r,s,i){ee(n.config.authDomain,n,"auth-domain-config-required"),ee(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Es,eventId:s};if(e instanceof mg){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Pv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Mi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${qw}=${encodeURIComponent(l)}`:"";return`${Hw(n)}?${ki(c).slice(1)}${h}`}function Hw({config:n}){return n.emulator?Vl(n,jw):`https://${n.authDomain}/${$w}`}/**
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
 */const gc="webStorageSupport";class Ww{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wg,this._completeRedirectFn=gw,this._overrideRedirectResult=fw}async _openPopup(e,t,r,s){var a;wn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await _f(e,t,r,Uc(),s);return Uw(e,i,xl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await _f(e,t,r,Uc(),s);return GI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Nw(e),r=new _w(e);return t.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gc,{type:gc},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[gc];i!==void 0&&t(!!i),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Iw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hg()||ig()||kl()}}const Kw=Ww;var yf="@firebase/auth",Ef="1.13.1";/**
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
 */class zw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Gw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qw(n){fs(new Vr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fg(n)},h=new fI(r,s,i,l);return II(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),fs(new Vr("auth-internal",e=>{const t=xr(e.getProvider("auth").getImmediate());return(r=>new zw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(yf,Ef,Gw(n)),Kn(yf,Ef,"esm2020")}/**
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
 */const Jw=5*60,Yw=jp("authIdTokenMaxAge")||Jw;let vf=null;const Xw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Yw)return;const s=t==null?void 0:t.token;vf!==s&&(vf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zw(n=zp()){const e=Pl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=TI(n,{popupRedirectResolver:Kw,persistence:[rw,WI,wg]}),r=jp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Xw(i.toString());BI(t,a,()=>a(t.currentUser)),UI(t,c=>a(c))}}const s=Bp("auth");return s&&wI(t,`http://${s}`),t}function eA(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}dI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",eA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qw("Browser");var Tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,Vg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function m(){}m.prototype=y.prototype,A.F=y.prototype,A.prototype=new m,A.prototype.constructor=A,A.D=function(w,I,T){for(var _=Array(arguments.length-2),me=2;me<arguments.length;me++)_[me-2]=arguments[me];return y.prototype[I].apply(w,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,m){m||(m=0);const w=Array(16);if(typeof y=="string")for(var I=0;I<16;++I)w[I]=y.charCodeAt(m++)|y.charCodeAt(m++)<<8|y.charCodeAt(m++)<<16|y.charCodeAt(m++)<<24;else for(I=0;I<16;++I)w[I]=y[m++]|y[m++]<<8|y[m++]<<16|y[m++]<<24;y=A.g[0],m=A.g[1],I=A.g[2];let T=A.g[3],_;_=y+(T^m&(I^T))+w[0]+3614090360&4294967295,y=m+(_<<7&4294967295|_>>>25),_=T+(I^y&(m^I))+w[1]+3905402710&4294967295,T=y+(_<<12&4294967295|_>>>20),_=I+(m^T&(y^m))+w[2]+606105819&4294967295,I=T+(_<<17&4294967295|_>>>15),_=m+(y^I&(T^y))+w[3]+3250441966&4294967295,m=I+(_<<22&4294967295|_>>>10),_=y+(T^m&(I^T))+w[4]+4118548399&4294967295,y=m+(_<<7&4294967295|_>>>25),_=T+(I^y&(m^I))+w[5]+1200080426&4294967295,T=y+(_<<12&4294967295|_>>>20),_=I+(m^T&(y^m))+w[6]+2821735955&4294967295,I=T+(_<<17&4294967295|_>>>15),_=m+(y^I&(T^y))+w[7]+4249261313&4294967295,m=I+(_<<22&4294967295|_>>>10),_=y+(T^m&(I^T))+w[8]+1770035416&4294967295,y=m+(_<<7&4294967295|_>>>25),_=T+(I^y&(m^I))+w[9]+2336552879&4294967295,T=y+(_<<12&4294967295|_>>>20),_=I+(m^T&(y^m))+w[10]+4294925233&4294967295,I=T+(_<<17&4294967295|_>>>15),_=m+(y^I&(T^y))+w[11]+2304563134&4294967295,m=I+(_<<22&4294967295|_>>>10),_=y+(T^m&(I^T))+w[12]+1804603682&4294967295,y=m+(_<<7&4294967295|_>>>25),_=T+(I^y&(m^I))+w[13]+4254626195&4294967295,T=y+(_<<12&4294967295|_>>>20),_=I+(m^T&(y^m))+w[14]+2792965006&4294967295,I=T+(_<<17&4294967295|_>>>15),_=m+(y^I&(T^y))+w[15]+1236535329&4294967295,m=I+(_<<22&4294967295|_>>>10),_=y+(I^T&(m^I))+w[1]+4129170786&4294967295,y=m+(_<<5&4294967295|_>>>27),_=T+(m^I&(y^m))+w[6]+3225465664&4294967295,T=y+(_<<9&4294967295|_>>>23),_=I+(y^m&(T^y))+w[11]+643717713&4294967295,I=T+(_<<14&4294967295|_>>>18),_=m+(T^y&(I^T))+w[0]+3921069994&4294967295,m=I+(_<<20&4294967295|_>>>12),_=y+(I^T&(m^I))+w[5]+3593408605&4294967295,y=m+(_<<5&4294967295|_>>>27),_=T+(m^I&(y^m))+w[10]+38016083&4294967295,T=y+(_<<9&4294967295|_>>>23),_=I+(y^m&(T^y))+w[15]+3634488961&4294967295,I=T+(_<<14&4294967295|_>>>18),_=m+(T^y&(I^T))+w[4]+3889429448&4294967295,m=I+(_<<20&4294967295|_>>>12),_=y+(I^T&(m^I))+w[9]+568446438&4294967295,y=m+(_<<5&4294967295|_>>>27),_=T+(m^I&(y^m))+w[14]+3275163606&4294967295,T=y+(_<<9&4294967295|_>>>23),_=I+(y^m&(T^y))+w[3]+4107603335&4294967295,I=T+(_<<14&4294967295|_>>>18),_=m+(T^y&(I^T))+w[8]+1163531501&4294967295,m=I+(_<<20&4294967295|_>>>12),_=y+(I^T&(m^I))+w[13]+2850285829&4294967295,y=m+(_<<5&4294967295|_>>>27),_=T+(m^I&(y^m))+w[2]+4243563512&4294967295,T=y+(_<<9&4294967295|_>>>23),_=I+(y^m&(T^y))+w[7]+1735328473&4294967295,I=T+(_<<14&4294967295|_>>>18),_=m+(T^y&(I^T))+w[12]+2368359562&4294967295,m=I+(_<<20&4294967295|_>>>12),_=y+(m^I^T)+w[5]+4294588738&4294967295,y=m+(_<<4&4294967295|_>>>28),_=T+(y^m^I)+w[8]+2272392833&4294967295,T=y+(_<<11&4294967295|_>>>21),_=I+(T^y^m)+w[11]+1839030562&4294967295,I=T+(_<<16&4294967295|_>>>16),_=m+(I^T^y)+w[14]+4259657740&4294967295,m=I+(_<<23&4294967295|_>>>9),_=y+(m^I^T)+w[1]+2763975236&4294967295,y=m+(_<<4&4294967295|_>>>28),_=T+(y^m^I)+w[4]+1272893353&4294967295,T=y+(_<<11&4294967295|_>>>21),_=I+(T^y^m)+w[7]+4139469664&4294967295,I=T+(_<<16&4294967295|_>>>16),_=m+(I^T^y)+w[10]+3200236656&4294967295,m=I+(_<<23&4294967295|_>>>9),_=y+(m^I^T)+w[13]+681279174&4294967295,y=m+(_<<4&4294967295|_>>>28),_=T+(y^m^I)+w[0]+3936430074&4294967295,T=y+(_<<11&4294967295|_>>>21),_=I+(T^y^m)+w[3]+3572445317&4294967295,I=T+(_<<16&4294967295|_>>>16),_=m+(I^T^y)+w[6]+76029189&4294967295,m=I+(_<<23&4294967295|_>>>9),_=y+(m^I^T)+w[9]+3654602809&4294967295,y=m+(_<<4&4294967295|_>>>28),_=T+(y^m^I)+w[12]+3873151461&4294967295,T=y+(_<<11&4294967295|_>>>21),_=I+(T^y^m)+w[15]+530742520&4294967295,I=T+(_<<16&4294967295|_>>>16),_=m+(I^T^y)+w[2]+3299628645&4294967295,m=I+(_<<23&4294967295|_>>>9),_=y+(I^(m|~T))+w[0]+4096336452&4294967295,y=m+(_<<6&4294967295|_>>>26),_=T+(m^(y|~I))+w[7]+1126891415&4294967295,T=y+(_<<10&4294967295|_>>>22),_=I+(y^(T|~m))+w[14]+2878612391&4294967295,I=T+(_<<15&4294967295|_>>>17),_=m+(T^(I|~y))+w[5]+4237533241&4294967295,m=I+(_<<21&4294967295|_>>>11),_=y+(I^(m|~T))+w[12]+1700485571&4294967295,y=m+(_<<6&4294967295|_>>>26),_=T+(m^(y|~I))+w[3]+2399980690&4294967295,T=y+(_<<10&4294967295|_>>>22),_=I+(y^(T|~m))+w[10]+4293915773&4294967295,I=T+(_<<15&4294967295|_>>>17),_=m+(T^(I|~y))+w[1]+2240044497&4294967295,m=I+(_<<21&4294967295|_>>>11),_=y+(I^(m|~T))+w[8]+1873313359&4294967295,y=m+(_<<6&4294967295|_>>>26),_=T+(m^(y|~I))+w[15]+4264355552&4294967295,T=y+(_<<10&4294967295|_>>>22),_=I+(y^(T|~m))+w[6]+2734768916&4294967295,I=T+(_<<15&4294967295|_>>>17),_=m+(T^(I|~y))+w[13]+1309151649&4294967295,m=I+(_<<21&4294967295|_>>>11),_=y+(I^(m|~T))+w[4]+4149444226&4294967295,y=m+(_<<6&4294967295|_>>>26),_=T+(m^(y|~I))+w[11]+3174756917&4294967295,T=y+(_<<10&4294967295|_>>>22),_=I+(y^(T|~m))+w[2]+718787259&4294967295,I=T+(_<<15&4294967295|_>>>17),_=m+(T^(I|~y))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+T&4294967295}r.prototype.v=function(A,y){y===void 0&&(y=A.length);const m=y-this.blockSize,w=this.C;let I=this.h,T=0;for(;T<y;){if(I==0)for(;T<=m;)s(this,A,T),T+=this.blockSize;if(typeof A=="string"){for(;T<y;)if(w[I++]=A.charCodeAt(T++),I==this.blockSize){s(this,w),I=0;break}}else for(;T<y;)if(w[I++]=A[T++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=y},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;y=this.o*8;for(var m=A.length-8;m<A.length;++m)A[m]=y&255,y/=256;for(this.v(A),A=Array(16),y=0,m=0;m<4;++m)for(let w=0;w<32;w+=8)A[y++]=this.g[m]>>>w&255;return A};function i(A,y){var m=c;return Object.prototype.hasOwnProperty.call(m,A)?m[A]:m[A]=y(A)}function a(A,y){this.h=y;const m=[];let w=!0;for(let I=A.length-1;I>=0;I--){const T=A[I]|0;w&&T==y||(m[I]=T,w=!1)}this.g=m}var c={};function l(A){return-128<=A&&A<128?i(A,function(y){return new a([y|0],y<0?-1:0)}):new a([A|0],A<0?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return B(h(-A));const y=[];let m=1;for(let w=0;A>=m;w++)y[w]=A/m|0,m*=4294967296;return new a(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return B(d(A.substring(1),y));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=h(Math.pow(y,8));let w=p;for(let T=0;T<A.length;T+=8){var I=Math.min(8,A.length-T);const _=parseInt(A.substring(T,T+I),y);I<8?(I=h(Math.pow(y,I)),w=w.j(I).add(h(_))):(w=w.j(m),w=w.add(h(_)))}return w}var p=l(0),E=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(N(this))return-B(this).m();let A=0,y=1;for(let m=0;m<this.g.length;m++){const w=this.i(m);A+=(w>=0?w:4294967296+w)*y,y*=4294967296}return A},n.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(V(this))return"0";if(N(this))return"-"+B(this).toString(A);const y=h(Math.pow(A,6));var m=this;let w="";for(;;){const I=G(m,y).g;m=q(m,I.j(y));let T=((m.g.length>0?m.g[0]:m.h)>>>0).toString(A);if(m=I,V(m))return T+w;for(;T.length<6;)T="0"+T;w=T+w}},n.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function V(A){if(A.h!=0)return!1;for(let y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function N(A){return A.h==-1}n.l=function(A){return A=q(this,A),N(A)?-1:V(A)?0:1};function B(A){const y=A.g.length,m=[];for(let w=0;w<y;w++)m[w]=~A.g[w];return new a(m,~A.h).add(E)}n.abs=function(){return N(this)?B(this):this},n.add=function(A){const y=Math.max(this.g.length,A.g.length),m=[];let w=0;for(let I=0;I<=y;I++){let T=w+(this.i(I)&65535)+(A.i(I)&65535),_=(T>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);w=_>>>16,T&=65535,_&=65535,m[I]=_<<16|T}return new a(m,m[m.length-1]&-2147483648?-1:0)};function q(A,y){return A.add(B(y))}n.j=function(A){if(V(this)||V(A))return p;if(N(this))return N(A)?B(this).j(B(A)):B(B(this).j(A));if(N(A))return B(this.j(B(A)));if(this.l(b)<0&&A.l(b)<0)return h(this.m()*A.m());const y=this.g.length+A.g.length,m=[];for(var w=0;w<2*y;w++)m[w]=0;for(w=0;w<this.g.length;w++)for(let I=0;I<A.g.length;I++){const T=this.i(w)>>>16,_=this.i(w)&65535,me=A.i(I)>>>16,qe=A.i(I)&65535;m[2*w+2*I]+=_*qe,K(m,2*w+2*I),m[2*w+2*I+1]+=T*qe,K(m,2*w+2*I+1),m[2*w+2*I+1]+=_*me,K(m,2*w+2*I+1),m[2*w+2*I+2]+=T*me,K(m,2*w+2*I+2)}for(A=0;A<y;A++)m[A]=m[2*A+1]<<16|m[2*A];for(A=y;A<2*y;A++)m[A]=0;return new a(m,0)};function K(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function Q(A,y){this.g=A,this.h=y}function G(A,y){if(V(y))throw Error("division by zero");if(V(A))return new Q(p,p);if(N(A))return y=G(B(A),y),new Q(B(y.g),B(y.h));if(N(y))return y=G(A,B(y)),new Q(B(y.g),y.h);if(A.g.length>30){if(N(A)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var m=E,w=y;w.l(A)<=0;)m=se(m),w=se(w);var I=he(m,1),T=he(w,1);for(w=he(w,2),m=he(m,2);!V(w);){var _=T.add(w);_.l(A)<=0&&(I=I.add(m),T=_),w=he(w,1),m=he(m,1)}return y=q(A,I.j(y)),new Q(I,y)}for(I=p;A.l(y)>=0;){for(m=Math.max(1,Math.floor(A.m()/y.m())),w=Math.ceil(Math.log(m)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),T=h(m),_=T.j(y);N(_)||_.l(A)>0;)m-=w,T=h(m),_=T.j(y);V(T)&&(T=E),I=I.add(T),A=q(A,_)}return new Q(I,A)}n.B=function(A){return G(this,A).h},n.and=function(A){const y=Math.max(this.g.length,A.g.length),m=[];for(let w=0;w<y;w++)m[w]=this.i(w)&A.i(w);return new a(m,this.h&A.h)},n.or=function(A){const y=Math.max(this.g.length,A.g.length),m=[];for(let w=0;w<y;w++)m[w]=this.i(w)|A.i(w);return new a(m,this.h|A.h)},n.xor=function(A){const y=Math.max(this.g.length,A.g.length),m=[];for(let w=0;w<y;w++)m[w]=this.i(w)^A.i(w);return new a(m,this.h^A.h)};function se(A){const y=A.g.length+1,m=[];for(let w=0;w<y;w++)m[w]=A.i(w)<<1|A.i(w-1)>>>31;return new a(m,A.h)}function he(A,y){const m=y>>5;y%=32;const w=A.g.length-m,I=[];for(let T=0;T<w;T++)I[T]=y>0?A.i(T+m)>>>y|A.i(T+m+1)<<32-y:A.i(T+m);return new a(I,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Vg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,zn=a}).apply(typeof Tf<"u"?Tf:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dg,Qs,kg,Io,qc,Ng,Og,xg;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=l,h.apply(null,arguments)}function d(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,R,P){for(var $=Array(arguments.length-2),le=2;le<arguments.length;le++)$[le-2]=arguments[le];return u.prototype[R].apply(g,$)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function V(o,u){for(let g=1;g<arguments.length;g++){const R=arguments[g];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=o.length||0;const P=R.length||0;o.length=f+P;for(let $=0;$<P;$++)o[f+$]=R[$]}else o.push(R)}}class N{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){a.setTimeout(()=>{throw o},0)}function q(){var o=A;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class K{constructor(){this.h=this.g=null}add(u,f){const g=Q.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Q=new N(()=>new G,o=>o.reset());class G{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let se,he=!1,A=new K,y=()=>{const o=Promise.resolve(void 0);se=()=>{o.then(m)}};function m(){for(var o;o=q();){try{o.h.call(o.g)}catch(f){B(f)}var u=Q;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}he=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function me(o,u){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(me,I),me.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var qe="closure_listenable_"+(Math.random()*1e6|0),Ne=0;function Ae(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++Ne,this.da=this.fa=!1}function ye(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ye(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function cn(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function Ct(o){const u={};for(const f in o)u[f]=o[f];return u}const ft="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fr(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let P=0;P<ft.length;P++)f=ft[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function Pn(o){this.src=o,this.g={},this.h=0}Pn.prototype.add=function(o,u,f,g,R){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const $=yt(o,u,g,R);return $>-1?(u=o[$],f||(u.fa=!1)):(u=new Ae(u,this.src,P,!!g,R),u.fa=f,o.push(u)),u};function ln(o,u){const f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),P;(P=R>=0)&&Array.prototype.splice.call(g,R,1),P&&(ye(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function yt(o,u,f,g){for(let R=0;R<o.length;++R){const P=o[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return R}return-1}var ce="closure_lm_"+(Math.random()*1e6|0),ue={};function Oe(o,u,f,g,R){if(Array.isArray(u)){for(let P=0;P<u.length;P++)Oe(o,u[P],f,g,R);return null}return f=j(f),o&&o[qe]?o.J(u,f,c(g)?!!g.capture:!1,R):Vt(o,u,f,!1,g,R)}function Vt(o,u,f,g,R,P){if(!u)throw Error("Invalid event type");const $=c(R)?!!R.capture:!!R;let le=O(o);if(le||(o[ce]=le=new Pn(o)),f=le.add(u,f,g,$,P),f.proxy)return f;if(g=Ur(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)T||(R=$),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(C(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ur(){function o(f){return u.call(o.src,o.listener,f)}const u=U;return o}function v(o,u,f,g,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)v(o,u[P],f,g,R);else g=c(g)?!!g.capture:!!g,f=j(f),o&&o[qe]?(o=o.i,P=String(u).toString(),P in o.g&&(u=o.g[P],f=yt(u,f,g,R),f>-1&&(ye(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[P],o.h--)))):o&&(o=O(o))&&(u=o.g[u.toString()],o=-1,u&&(o=yt(u,f,g,R)),(f=o>-1?u[o]:null)&&S(f))}function S(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[qe])ln(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(C(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=O(u))?(ln(f,o),f.h==0&&(f.src=null,u[ce]=null)):ye(o)}}}function C(o){return o in ue?ue[o]:ue[o]="on"+o}function U(o,u){if(o.da)o=!0;else{u=new me(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&S(o),o=f.call(g,u)}return o}function O(o){return o=o[ce],o instanceof Pn?o:null}var x="__closure_events_fn_"+(Math.random()*1e9>>>0);function j(o){return typeof o=="function"?o:(o[x]||(o[x]=function(u){return o.handleEvent(u)}),o[x])}function F(){w.call(this),this.i=new Pn(this),this.M=this,this.G=null}p(F,w),F.prototype[qe]=!0,F.prototype.removeEventListener=function(o,u,f,g){v(this,o,u,f,g)};function L(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new I(u,o);else if(u instanceof I)u.target=u.target||o;else{var R=u;u=new I(g,o),fr(u,R)}R=!0;let P,$;if(f)for($=f.length-1;$>=0;$--)P=u.g=f[$],R=M(P,g,!0,u)&&R;if(P=u.g=o,R=M(P,g,!0,u)&&R,R=M(P,g,!1,u)&&R,f)for($=0;$<f.length;$++)P=u.g=f[$],R=M(P,g,!1,u)&&R}F.prototype.N=function(){if(F.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)ye(f[g]);delete o.g[u],o.h--}}this.G=null},F.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},F.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function M(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let P=0;P<u.length;++P){const $=u[P];if($&&!$.da&&$.capture==f){const le=$.listener,He=$.ha||$.src;$.fa&&ln(o.i,$),R=le.call(He,g)!==!1&&R}}return R&&!g.defaultPrevented}function X(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function H(o){o.g=X(()=>{o.g=null,o.i&&(o.i=!1,H(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Y extends w{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:H(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(o){w.call(this),this.h=o,this.g={}}p(Z,w);var fe=[];function we(o){Ye(o.g,function(u,f){this.g.hasOwnProperty(f)&&S(u)},o),o.g={}}Z.prototype.N=function(){Z.Z.N.call(this),we(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ee=a.JSON.stringify,rt=a.JSON.parse,st=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function It(){}function wt(){}var Mt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Br(){I.call(this,"d")}p(Br,I);function Xe(){I.call(this,"c")}p(Xe,I);var ze={},bs=null;function dr(){return bs=bs||new F}ze.Ia="serverreachability";function Eu(o){I.call(this,ze.Ia,o)}p(Eu,I);function Rs(o){const u=dr();L(u,new Eu(u))}ze.STAT_EVENT="statevent";function vu(o,u){I.call(this,ze.STAT_EVENT,o),this.stat=u}p(vu,I);function dt(o){const u=dr();L(u,new vu(u,o))}ze.Ja="timingevent";function Tu(o,u){I.call(this,ze.Ja,o),this.size=u}p(Tu,I);function Ps(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function Cs(){this.g=!0}Cs.prototype.ua=function(){this.g=!1};function c_(o,u,f,g,R,P){o.info(function(){if(o.g)if(P){var $="",le=P.split("&");for(let Se=0;Se<le.length;Se++){var He=le[Se].split("=");if(He.length>1){const Ge=He[0];He=He[1];const Gt=Ge.split("_");$=Gt.length>=2&&Gt[1]=="type"?$+(Ge+"="+He+"&"):$+(Ge+"=redacted&")}}}else $=null;else $=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+$})}function l_(o,u,f,g,R,P,$){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+$})}function $r(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+h_(o,f)+(g?" "+g:"")})}function u_(o,u){o.info(function(){return"TIMEOUT: "+u})}Cs.prototype.info=function(){};function h_(o,u){if(!o.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var f=P[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let $=1;$<g.length;$++)g[$]=""}}}}return Ee(P)}catch{return u}}var Wi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Iu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},wu;function xa(){}p(xa,It),xa.prototype.g=function(){return new XMLHttpRequest},wu=new xa;function Vs(o){return encodeURIComponent(String(o))}function f_(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function Cn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Au}function Au(){this.i=null,this.g="",this.h=!1}var Su={},Ma={};function La(o,u,f){o.M=1,o.A=zi(zt(u)),o.u=f,o.R=!0,bu(o,null)}function bu(o,u){o.F=Date.now(),Ki(o),o.B=zt(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Uu(f.i,"t",g),o.C=0,f=o.j.L,o.h=new Au,o.g=rh(o.j,f?u:null,!o.u),o.P>0&&(o.O=new Y(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(fe[0]=R.toString()),R=fe);for(let P=0;P<R.length;P++){const $=Oe(f,R[P],g||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=o.J?Ct(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Rs(),c_(o.i,o.v,o.B,o.l,o.S,o.u)}Cn.prototype.ba=function(o){o=o.target;const u=this.O;u&&kn(o)==3?u.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const le=kn(this.g),He=this.g.ya(),Se=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||Ku(this.g)))){this.K||le!=4||He==7||(He==8||Se<=0?Rs(3):Rs(2)),Fa(this);var u=this.g.ca();this.X=u;var f=d_(this);if(this.o=u==200,l_(this.i,this.v,this.B,this.l,this.S,le,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var P=g;break t}}P=null}if(o=P)$r(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ua(this,o);else{this.o=!1,this.m=3,dt(12),pr(this),Ds(this);break e}}if(this.R){o=!0;let Ge;for(;!this.K&&this.C<f.length;)if(Ge=p_(this,f),Ge==Ma){le==4&&(this.m=4,dt(14),o=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==Su){this.m=4,dt(15),$r(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else $r(this.i,this.l,Ge,null),Ua(this,Ge);if(Ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||f.length!=0||this.h.h||(this.m=1,dt(16),o=!1),this.o=this.o&&o,!o)$r(this.i,this.l,f,"[Invalid Chunked Response]"),pr(this),Ds(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),za($),$.P=!0,dt(11))}}else $r(this.i,this.l,f,null),Ua(this,f);le==4&&pr(this),this.o&&!this.K&&(le==4?Zu(this.j,this):(this.o=!1,Ki(this)))}else P_(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,dt(12)):(this.m=0,dt(13)),pr(this),Ds(this)}}}catch{}finally{}};function d_(o){if(!Ru(o))return o.g.la();const u=Ku(o.g);if(u==="")return"";let f="";const g=u.length,R=kn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return pr(o),Ds(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<g;P++)o.h.h=!0,f+=o.h.i.decode(u[P],{stream:!(R&&P==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function Ru(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function p_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Ma:(f=Number(u.substring(f,g)),isNaN(f)?Su:(g+=1,g+f>u.length?Ma:(u=u.slice(g,g+f),o.C=g+f,u)))}Cn.prototype.cancel=function(){this.K=!0,pr(this)};function Ki(o){o.T=Date.now()+o.H,Pu(o,o.H)}function Pu(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Ps(h(o.aa,o),u)}function Fa(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Cn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(u_(this.i,this.B),this.M!=2&&(Rs(),dt(17)),pr(this),this.m=2,Ds(this)):Pu(this,this.T-o)};function Ds(o){o.j.I==0||o.K||Zu(o.j,o)}function pr(o){Fa(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,we(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Ua(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||Ba(f.h,o))){if(!o.L&&Ba(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Xi(f),Ji(f);else break e;Ka(f),dt(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ps(h(f.Va,f),6e3));Du(f.h)<=1&&f.ta&&(f.ta=void 0)}else mr(f,11)}else if((o.L||f.g==o)&&Xi(f),!_(u))for(R=f.Ba.g.parse(u),u=0;u<R.length;u++){let Se=R[u];const Ge=Se[0];if(!(Ge<=f.K))if(f.K=Ge,Se=Se[1],f.I==2)if(Se[0]=="c"){f.M=Se[1],f.ba=Se[2];const Gt=Se[3];Gt!=null&&(f.ka=Gt,f.j.info("VER="+f.ka));const _r=Se[4];_r!=null&&(f.za=_r,f.j.info("SVER="+f.za));const Nn=Se[5];Nn!=null&&typeof Nn=="number"&&Nn>0&&(g=1.5*Nn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const On=o.g;if(On){const eo=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var P=g.h;P.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&($a(P,P.h),P.h=null))}if(g.G){const Ga=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;Ga&&(g.wa=Ga,Ve(g.J,g.G,Ga))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var $=o;if(g.na=nh(g,g.L?g.ba:null,g.W),$.L){ku(g.h,$);var le=$,He=g.O;He&&(le.H=He),le.D&&(Fa(le),Ki(le)),g.g=$}else Yu(g);f.i.length>0&&Yi(f)}else Se[0]!="stop"&&Se[0]!="close"||mr(f,7);else f.I==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?mr(f,7):Wa(f):Se[0]!="noop"&&f.l&&f.l.qa(Se),f.A=0)}}Rs(4)}catch{}}var g_=class{constructor(o,u){this.g=o,this.map=u}};function Cu(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Du(o){return o.h?1:o.g?o.g.size:0}function Ba(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function $a(o,u){o.g?o.g.add(u):o.h=u}function ku(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Cu.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Nu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return b(o.i)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function m_(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let R,P=null;g>=0?(R=o[f].substring(0,g),P=o[f].substring(g+1)):R=o[f],u(R,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Vn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Vn?(this.l=o.l,ks(this,o.j),this.o=o.o,this.g=o.g,Ns(this,o.u),this.h=o.h,ja(this,Bu(o.i)),this.m=o.m):o&&(u=String(o).match(Ou))?(this.l=!1,ks(this,u[1]||"",!0),this.o=Os(u[2]||""),this.g=Os(u[3]||"",!0),Ns(this,u[4]),this.h=Os(u[5]||"",!0),ja(this,u[6]||"",!0),this.m=Os(u[7]||"")):(this.l=!1,this.i=new Ms(null,this.l))}Vn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(xs(u,xu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(xs(u,xu,!0),"@"),o.push(Vs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(xs(f,f.charAt(0)=="/"?E_:y_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",xs(f,T_)),o.join("")},Vn.prototype.resolve=function(o){const u=zt(this);let f=!!o.j;f?ks(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)Ns(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=u.h.lastIndexOf("/");R!=-1&&(g=u.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const P=[];for(let $=0;$<R.length;){const le=R[$++];le=="."?g&&$==R.length&&P.push(""):le==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&$==R.length&&P.push("")):(P.push(le),g=!0)}g=P.join("/")}else g=R}return f?u.h=g:f=o.i.toString()!=="",f?ja(u,Bu(o.i)):f=!!o.m,f&&(u.m=o.m),u};function zt(o){return new Vn(o)}function ks(o,u,f){o.j=f?Os(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ns(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function ja(o,u,f){u instanceof Ms?(o.i=u,I_(o.i,o.l)):(f||(u=xs(u,v_)),o.i=new Ms(u,o.l))}function Ve(o,u,f){o.i.set(u,f)}function zi(o){return Ve(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Os(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function xs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,__),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function __(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var xu=/[#\/\?@]/g,y_=/[#\?:]/g,E_=/[#\?]/g,v_=/[#\?@]/g,T_=/#/g;function Ms(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function gr(o){o.g||(o.g=new Map,o.h=0,o.i&&m_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Ms.prototype,n.add=function(o,u){gr(this),this.i=null,o=jr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Mu(o,u){gr(o),u=jr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Lu(o,u){return gr(o),u=jr(o,u),o.g.has(u)}n.forEach=function(o,u){gr(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)};function Fu(o,u){gr(o);let f=[];if(typeof u=="string")Lu(o,u)&&(f=f.concat(o.g.get(jr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}n.set=function(o,u){return gr(this),this.i=null,o=jr(this,o),Lu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Fu(this,o),o.length>0?String(o[0]):u):u};function Uu(o,u,f){Mu(o,u),f.length>0&&(o.i=null,o.g.set(jr(o,u),b(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const R=Vs(f);f=Fu(this,f);for(let P=0;P<f.length;P++){let $=R;f[P]!==""&&($+="="+Vs(f[P])),o.push($)}}return this.i=o.join("&")};function Bu(o){const u=new Ms;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function jr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function I_(o,u){u&&!o.j&&(gr(o),o.i=null,o.g.forEach(function(f,g){const R=g.toLowerCase();g!=R&&(Mu(this,g),Uu(this,R,f))},o)),o.j=u}function w_(o,u){const f=new Cs;if(a.Image){const g=new Image;g.onload=d(Dn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=d(Dn,f,"TestLoadImage: error",!1,u,g),g.onabort=d(Dn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=d(Dn,f,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function A_(o,u){const f=new Cs,g=new AbortController,R=setTimeout(()=>{g.abort(),Dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?Dn(f,"TestPingServer: ok",!0,u):Dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Dn(f,"TestPingServer: error",!1,u)})}function Dn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function S_(){this.g=new st}function qa(o){this.i=o.Sb||null,this.h=o.ab||!1}p(qa,It),qa.prototype.g=function(){return new Gi(this.i,this.h)};function Gi(o,u){F.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Gi,F),n=Gi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Fs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$u(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function $u(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ls(this):Fs(this),this.readyState==3&&$u(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ls(this))},n.Na=function(o){this.g&&(this.response=o,Ls(this))},n.ga=function(){this.g&&Ls(this)};function Ls(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Fs(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Fs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ju(o){let u="";return Ye(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ha(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ju(f),typeof o=="string"?f!=null&&Vs(f):Ve(o,u,f))}function xe(o){F.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(xe,F);var b_=/^https?$/i,R_=["POST","PUT"];n=xe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wu.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){qu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(R_,u,void 0)>=0)||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,$]of f)this.g.setRequestHeader(P,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){qu(this,P)}};function qu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Hu(o),Qi(o)}function Hu(o){o.A||(o.A=!0,L(o,"complete"),L(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,L(this,"complete"),L(this,"abort"),Qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),xe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Wu(this):this.Xa())},n.Xa=function(){Wu(this)};function Wu(o){if(o.h&&typeof i<"u"){if(o.v&&kn(o)==4)setTimeout(o.Ca.bind(o),0);else if(L(o,"readystatechange"),kn(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=P===0){let $=String(o.D).match(Ou)[1]||null;!$&&a.self&&a.self.location&&($=a.self.location.protocol.slice(0,-1)),g=!b_.test($?$.toLowerCase():"")}f=g}if(f)L(o,"complete"),L(o,"success");else{o.o=6;try{var R=kn(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",Hu(o)}}finally{Qi(o)}}}}function Qi(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||L(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function kn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return kn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),rt(u)}};function Ku(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function P_(o){const u={};o=(o.g&&kn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(_(o[g]))continue;var f=f_(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}cn(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function zu(o){this.za=0,this.i=[],this.j=new Cs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Us("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Us("baseRetryDelayMs",5e3,o),this.Za=Us("retryDelaySeedMs",1e4,o),this.Ta=Us("forwardChannelMaxRetries",2,o),this.va=Us("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Cu(o&&o.concurrentRequestLimit),this.Ba=new S_,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=zu.prototype,n.ka=8,n.I=1,n.connect=function(o,u,f,g){dt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=nh(this,null,this.W),Yi(this)};function Wa(o){if(Gu(o),o.I==3){var u=o.V++,f=zt(o.J);if(Ve(f,"SID",o.M),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),Bs(o,f),u=new Cn(o,o.j,u),u.M=2,u.A=zi(zt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=rh(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ki(u)}th(o)}function Ji(o){o.g&&(za(o),o.g.cancel(),o.g=null)}function Gu(o){Ji(o),o.v&&(a.clearTimeout(o.v),o.v=null),Xi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Yi(o){if(!Vu(o.h)&&!o.m){o.m=!0;var u=o.Ea;se||y(),he||(se(),he=!0),A.add(u,o),o.D=0}}function C_(o,u){return Du(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Ps(h(o.Ea,o,u),eh(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new Cn(this,this.j,o);let P=this.o;if(this.U&&(P?(P=Ct(P),fr(P,this.U)):P=this.U),this.u!==null||this.R||(R.J=P,P=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ju(this,R,u),f=zt(this.J),Ve(f,"RID",o),Ve(f,"CVER",22),this.G&&Ve(f,"X-HTTP-Session-Id",this.G),Bs(this,f),P&&(this.R?u="headers="+Vs(ju(P))+"&"+u:this.u&&Ha(f,this.u,P)),$a(this.h,R),this.Ra&&Ve(f,"TYPE","init"),this.S?(Ve(f,"$req",u),Ve(f,"SID","null"),R.U=!0,La(R,f,null)):La(R,f,u),this.I=2}}else this.I==3&&(o?Qu(this,o):this.i.length==0||Vu(this.h)||Qu(this))};function Qu(o,u){var f;u?f=u.l:f=o.V++;const g=zt(o.J);Ve(g,"SID",o.M),Ve(g,"RID",f),Ve(g,"AID",o.K),Bs(o,g),o.u&&o.o&&Ha(g,o.u,o.o),f=new Cn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Ju(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),$a(o.h,f),La(f,g,u)}function Bs(o,u){o.H&&Ye(o.H,function(f,g){Ve(u,g,f)}),o.l&&Ye({},function(f,g){Ve(u,g,f)})}function Ju(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var R=o.i;let le=-1;for(;;){const He=["count="+f];le==-1?f>0?(le=R[0].g,He.push("ofs="+le)):le=0:He.push("ofs="+le);let Se=!0;for(let Ge=0;Ge<f;Ge++){var P=R[Ge].g;const Gt=R[Ge].map;if(P-=le,P<0)le=Math.max(0,R[Ge].g-100),Se=!1;else try{P="req"+P+"_"||"";try{var $=Gt instanceof Map?Gt:Object.entries(Gt);for(const[_r,Nn]of $){let On=Nn;c(Nn)&&(On=Ee(Nn)),He.push(P+_r+"="+encodeURIComponent(On))}}catch(_r){throw He.push(P+"type="+encodeURIComponent("_badmap")),_r}}catch{g&&g(Gt)}}if(Se){$=He.join("&");break e}}$=void 0}return o=o.i.splice(0,f),u.G=o,$}function Yu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;se||y(),he||(se(),he=!0),A.add(u,o),o.A=0}}function Ka(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Ps(h(o.Da,o),eh(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Xu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Ps(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,dt(10),Ji(this),Xu(this))};function za(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Xu(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=zt(o.na);Ve(u,"RID","rpc"),Ve(u,"SID",o.M),Ve(u,"AID",o.K),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ve(u,"TO",o.ia),Ve(u,"TYPE","xmlhttp"),Bs(o,u),o.u&&o.o&&Ha(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=zi(zt(u)),f.u=null,f.R=!0,bu(f,o)}n.Va=function(){this.C!=null&&(this.C=null,Ji(this),Ka(this),dt(19))};function Xi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Zu(o,u){var f=null;if(o.g==u){Xi(o),za(o),o.g=null;var g=2}else if(Ba(o.h,u))f=u.G,ku(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var R=o.D;g=dr(),L(g,new Tu(g,f)),Yi(o)}else Yu(o);else if(R=u.m,R==3||R==0&&u.X>0||!(g==1&&C_(o,u)||g==2&&Ka(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),R){case 1:mr(o,5);break;case 4:mr(o,10);break;case 3:mr(o,6);break;default:mr(o,2)}}}function eh(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function mr(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const R=!g;g=new Vn(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ks(g,"https"),zi(g),R?w_(g.toString(),f):A_(g.toString(),f)}else dt(2);o.I=0,o.l&&o.l.pa(u),th(o),Gu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function th(o){if(o.I=0,o.ja=[],o.l){const u=Nu(o.h);(u.length!=0||o.i.length!=0)&&(V(o.ja,u),V(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function nh(o,u,f){var g=f instanceof Vn?zt(f):new Vn(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ns(g,g.u);else{var R=a.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const P=new Vn(null);g&&ks(P,g),u&&(P.g=u),R&&Ns(P,R),f&&(P.h=f),g=P}return f=o.G,u=o.wa,f&&u&&Ve(g,f,u),Ve(g,"VER",o.ka),Bs(o,g),g}function rh(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new xe(new qa({ab:f})):new xe(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}n=sh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Zi(){}Zi.prototype.g=function(o,u){return new At(o,u)};function At(o,u){F.call(this),this.g=new zu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!_(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new qr(this)}p(At,F),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Wa(this.g)},At.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=Ee(o),o=f);u.i.push(new g_(u.Ya++,o)),u.I==3&&Yi(u)},At.prototype.N=function(){this.g.l=null,delete this.j,Wa(this.g),delete this.g,At.Z.N.call(this)};function ih(o){Br.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(ih,Br);function oh(){Xe.call(this),this.status=1}p(oh,Xe);function qr(o){this.g=o}p(qr,sh),qr.prototype.ra=function(){L(this.g,"a")},qr.prototype.qa=function(o){L(this.g,new ih(o))},qr.prototype.pa=function(o){L(this.g,new oh)},qr.prototype.oa=function(){L(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,xg=function(){return new Zi},Og=function(){return dr()},Ng=ze,qc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,Io=Wi,Iu.COMPLETE="complete",kg=Iu,wt.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",F.prototype.listen=F.prototype.J,Qs=wt,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,Dg=xe}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Ts="12.13.0";function tA(n){Ts=n}/**
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
 */const Nr=new bl("@firebase/firestore");function Qr(){return Nr.logLevel}function W(n,...e){if(Nr.logLevel<=ge.DEBUG){const t=e.map(Ll);Nr.debug(`Firestore (${Ts}): ${n}`,...t)}}function An(n,...e){if(Nr.logLevel<=ge.ERROR){const t=e.map(Ll);Nr.error(`Firestore (${Ts}): ${n}`,...t)}}function Or(n,...e){if(Nr.logLevel<=ge.WARN){const t=e.map(Ll);Nr.warn(`Firestore (${Ts}): ${n}`,...t)}}function Ll(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Mg(n,r,t)}function Mg(n,e,t){let r=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw An(r),new Error(r)}function Ie(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Mg(e,s,r)}function oe(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Lg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ot.UNAUTHENTICATED))}shutdown(){}}class rA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sA{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new Lg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class iA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class oA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new iA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class If{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new If(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new If(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function cA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Fl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=cA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function Hc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return mc(s)===mc(i)?de(s,i):mc(s)?1:-1}return de(n.length,e.length)}const lA=55296,uA=57343;function mc(n){const e=n.charCodeAt(0);return e>=lA&&e<=uA}function ds(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const wf="__name__";class Yt{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Yt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Yt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return de(e.length,t.length)}static compareSegments(e,t){const r=Yt.isNumericId(e),s=Yt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Yt.extractNumericId(e).compare(Yt.extractNumericId(t)):Hc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zn.fromString(e.substring(4,e.length-2))}}class Pe extends Yt{construct(e,t,r){return new Pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Pe(t)}static emptyPath(){return new Pe([])}}const hA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Yt{construct(e,t,r){return new tt(e,t,r)}static isValidIdentifier(e){return hA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wf}static keyField(){return new tt([wf])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(t)}static emptyPath(){return new tt([])}}/**
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
 */function Fg(n,e,t){if(!t)throw new z(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fA(n,e,t,r){if(e===!0&&r===!0)throw new z(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Af(n){if(!J.isDocumentKey(n))throw new z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sf(n){if(J.isDocumentKey(n))throw new z(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ug(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ta(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function Gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ta(n);throw new z(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function $e(n,e){const t={typeString:n};return e&&(t.value=e),t}function Fi(n,e){if(!Ug(n))throw new z(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new z(D.INVALID_ARGUMENT,t);return!0}/**
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
 */const bf=-62135596800,Rf=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Rf);return new De(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bf)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rf}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:De._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fi(e,De._jsonSchema))return new De(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}De._jsonSchemaVersion="firestore/timestamp/1.0",De._jsonSchema={type:$e("string",De._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
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
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new De(0,0))}static max(){return new ie(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ti=-1;function dA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new De(t+1,0):new De(t,r));return new Zn(s,J.empty(),e)}function pA(n){return new Zn(n.readTime,n.key,Ti)}class Zn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Zn(ie.min(),J.empty(),Ti)}static max(){return new Zn(ie.max(),J.empty(),Ti)}}function gA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=J.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
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
 */const mA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _A{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Is(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==mA)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(d=>{a[h]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function yA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ws(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Ul=-1;function wa(n){return n==null}function Go(n){return n===0&&1/n==-1/0}function EA(n){return typeof n=="number"&&Number.isInteger(n)&&!Go(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Bg="";function vA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pf(e)),e=TA(n.get(t),e);return Pf(e)}function TA(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Bg:t+="";break;default:t+=i}}return t}function Pf(n){return n+Bg+""}/**
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
 */function Cf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ur(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $g(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ke{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ze(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class We{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vf(this.data.getIterator())}getIteratorFrom(e){return new Vf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new We(this.comparator);return t.data=e,t}}class Vf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Pt([])}unionWith(e){let t=new We(tt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Pt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class jg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jg("Invalid base64 string: "+i):i}}(e);return new nt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const IA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(n){if(Ie(!!n,39018),typeof n=="string"){let e=0;const t=IA.exec(n);if(Ie(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(n.seconds),nanos:Me(n.nanos)}}function Me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function tr(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
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
 */const qg="server_timestamp",Hg="__type__",Wg="__previous_value__",Kg="__local_write_time__";function Bl(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hg])==null?void 0:r.stringValue)===qg}function Aa(n){const e=n.mapValue.fields[Wg];return Bl(e)?Aa(e):e}function Ii(n){const e=er(n.mapValue.fields[Kg].timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class wA{constructor(e,t,r,s,i,a,c,l,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const Qo="(default)";class wi{constructor(e,t){this.projectId=e,this.database=t||Qo}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database===Qo}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}function AA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(n.options.projectId,e)}/**
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
 */const zg="__type__",SA="__max__",co={mapValue:{}},Gg="__vector__",Jo="value";function nr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bl(n)?4:RA(n)?9007199254740991:bA(n)?10:11:te(28295,{value:n})}function on(n,e){if(n===e)return!0;const t=nr(n);if(t!==nr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ii(n).isEqual(Ii(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=er(s.timestampValue),c=er(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return tr(s.bytesValue).isEqual(tr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Me(s.doubleValue),c=Me(i.doubleValue);return a===c?Go(a)===Go(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return ds(n.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Cf(a)!==Cf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!on(a[l],c[l])))return!1;return!0}(n,e);default:return te(52216,{left:n})}}function Ai(n,e){return(n.values||[]).find(t=>on(t,e))!==void 0}function ps(n,e){if(n===e)return 0;const t=nr(n),r=nr(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Me(i.integerValue||i.doubleValue),l=Me(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Df(n.timestampValue,e.timestampValue);case 4:return Df(Ii(n),Ii(e));case 5:return Hc(n.stringValue,e.stringValue);case 6:return function(i,a){const c=tr(i),l=tr(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=de(c[h],l[h]);if(d!==0)return d}return de(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=de(Me(i.latitude),Me(a.latitude));return c!==0?c:de(Me(i.longitude),Me(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return kf(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,b,V,N;const c=i.fields||{},l=a.fields||{},h=(E=c[Jo])==null?void 0:E.arrayValue,d=(b=l[Jo])==null?void 0:b.arrayValue,p=de(((V=h==null?void 0:h.values)==null?void 0:V.length)||0,((N=d==null?void 0:d.values)==null?void 0:N.length)||0);return p!==0?p:kf(h,d)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===co.mapValue&&a===co.mapValue)return 0;if(i===co.mapValue)return 1;if(a===co.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const E=Hc(l[p],d[p]);if(E!==0)return E;const b=ps(c[l[p]],h[d[p]]);if(b!==0)return b}return de(l.length,d.length)}(n.mapValue,e.mapValue);default:throw te(23264,{he:t})}}function Df(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=er(n),r=er(e),s=de(t.seconds,r.seconds);return s!==0?s:de(t.nanos,r.nanos)}function kf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ps(t[s],r[s]);if(i)return i}return de(t.length,r.length)}function gs(n){return Wc(n)}function Wc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=er(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return tr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return J.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Wc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Wc(t.fields[a])}`;return s+"}"}(n.mapValue):te(61005,{value:n})}function wo(n){switch(nr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Aa(n);return e?16+wo(e):16;case 5:return 2*n.stringValue.length;case 6:return tr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+wo(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ur(r.fields,(i,a)=>{s+=i.length+wo(a)}),s}(n.mapValue);default:throw te(13486,{value:n})}}function Nf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Kc(n){return!!n&&"integerValue"in n}function $l(n){return!!n&&"arrayValue"in n}function Of(n){return!!n&&"nullValue"in n}function xf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ao(n){return!!n&&"mapValue"in n}function bA(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[zg])==null?void 0:r.stringValue)===Gg}function ai(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ur(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ai(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ai(n.arrayValue.values[t]);return e}return{...n}}function RA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===SA}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ao(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(t)}setAll(e){let t=tt.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ai(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ao(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ur(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(ai(this.value))}}function Qg(n){const e=[];return ur(n.fields,(t,r)=>{const s=new tt([t]);if(Ao(r)){const i=Qg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Pt(e)}/**
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
 */class ct{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,ie.min(),ie.min(),ie.min(),Tt.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,ie.min(),ie.min(),Tt.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,ie.min(),ie.min(),Tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yo{constructor(e,t){this.position=e,this.inclusive=t}}function Mf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),t.key):r=ps(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!on(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Si{constructor(e,t="asc"){this.field=e,this.dir=t}}function PA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Jg{}class Be extends Jg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new VA(e,t,r):t==="array-contains"?new NA(e,r):t==="in"?new OA(e,r):t==="not-in"?new xA(e,r):t==="array-contains-any"?new MA(e,r):new Be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new DA(e,r):new kA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ps(t,this.value)):t!==null&&nr(this.value)===nr(t)&&this.matchesComparison(ps(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Jg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Kt(e,t)}matches(e){return Yg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Yg(n){return n.op==="and"}function Xg(n){return CA(n)&&Yg(n)}function CA(n){for(const e of n.filters)if(e instanceof Kt)return!1;return!0}function zc(n){if(n instanceof Be)return n.field.canonicalString()+n.op.toString()+gs(n.value);if(Xg(n))return n.filters.map(e=>zc(e)).join(",");{const e=n.filters.map(t=>zc(t)).join(",");return`${n.op}(${e})`}}function Zg(n,e){return n instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(n,e):n instanceof Kt?function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Zg(a,s.filters[c]),!0):!1}(n,e):void te(19439)}function em(n){return n instanceof Be?function(t){return`${t.field.canonicalString()} ${t.op} ${gs(t.value)}`}(n):n instanceof Kt?function(t){return t.op.toString()+" {"+t.getFilters().map(em).join(" ,")+"}"}(n):"Filter"}class VA extends Be{constructor(e,t,r){super(e,t,r),this.key=J.fromName(r.referenceValue)}matches(e){const t=J.comparator(e.key,this.key);return this.matchesComparison(t)}}class DA extends Be{constructor(e,t){super(e,"in",t),this.keys=tm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kA extends Be{constructor(e,t){super(e,"not-in",t),this.keys=tm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>J.fromName(r.referenceValue))}class NA extends Be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $l(t)&&Ai(t.arrayValue,this.value)}}class OA extends Be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ai(this.value.arrayValue,t)}}class xA extends Be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ai(this.value.arrayValue,t)}}class MA extends Be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$l(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ai(this.value.arrayValue,r))}}/**
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
 */class LA{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Ff(n,e=null,t=[],r=[],s=null,i=null,a=null){return new LA(n,e,t,r,s,i,a)}function jl(n){const e=oe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>zc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>gs(r)).join(",")),e.Te=t}return e.Te}function ql(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!PA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Zg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Lf(n.startAt,e.startAt)&&Lf(n.endAt,e.endAt)}function Gc(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class As{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function FA(n,e,t,r,s,i,a,c){return new As(n,e,t,r,s,i,a,c)}function Hl(n){return new As(n)}function Uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function UA(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function nm(n){return n.collectionGroup!==null}function ci(n){const e=oe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new We(tt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Si(i,r))}),t.has(tt.keyField().canonicalString())||e.Ie.push(new Si(tt.keyField(),r))}return e.Ie}function nn(n){const e=oe(n);return e.Ee||(e.Ee=BA(e,ci(n))),e.Ee}function BA(n,e){if(n.limitType==="F")return Ff(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Si(s.field,i)});const t=n.endAt?new Yo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yo(n.startAt.position,n.startAt.inclusive):null;return Ff(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Qc(n,e){const t=n.filters.concat([e]);return new As(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function $A(n,e){const t=n.explicitOrderBy.concat([e]);return new As(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Jc(n,e,t){return new As(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sa(n,e){return ql(nn(n),nn(e))&&n.limitType===e.limitType}function rm(n){return`${jl(nn(n))}|lt:${n.limitType}`}function Jr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>em(s)).join(", ")}]`),wa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>gs(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>gs(s)).join(",")),`Target(${r})`}(nn(n))}; limitType=${n.limitType})`}function ba(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=Mf(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,ci(r),s)||r.endAt&&!function(a,c,l){const h=Mf(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,ci(r),s))}(n,e)}function jA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function sm(n){return(e,t)=>{let r=!1;for(const s of ci(n)){const i=qA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qA(n,e,t){const r=n.field.isKeyField()?J.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ps(l,h):te(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
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
 */class Mr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $g(this.inner)}size(){return this.innerSize}}/**
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
 */const HA=new ke(J.comparator);function Sn(){return HA}const im=new ke(J.comparator);function Js(...n){let e=im;for(const t of n)e=e.insert(t.key,t);return e}function om(n){let e=im;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Sr(){return li()}function am(){return li()}function li(){return new Mr(n=>n.toString(),(n,e)=>n.isEqual(e))}const WA=new ke(J.comparator),KA=new We(J.comparator);function pe(...n){let e=KA;for(const t of n)e=e.add(t);return e}const zA=new We(de);function GA(){return zA}/**
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
 */function Wl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function cm(n){return{integerValue:""+n}}function QA(n,e){return EA(e)?cm(e):Wl(n,e)}/**
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
 */class Ra{constructor(){this._=void 0}}function JA(n,e,t){return n instanceof bi?function(s,i){const a={fields:{[Hg]:{stringValue:qg},[Kg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bl(i)&&(i=Aa(i)),i&&(a.fields[Wg]=i),{mapValue:a}}(t,e):n instanceof Ri?um(n,e):n instanceof Pi?hm(n,e):function(s,i){const a=lm(s,i),c=Bf(a)+Bf(s.Ae);return Kc(a)&&Kc(s.Ae)?cm(c):Wl(s.serializer,c)}(n,e)}function YA(n,e,t){return n instanceof Ri?um(n,e):n instanceof Pi?hm(n,e):t}function lm(n,e){return n instanceof Xo?function(r){return Kc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class bi extends Ra{}class Ri extends Ra{constructor(e){super(),this.elements=e}}function um(n,e){const t=fm(e);for(const r of n.elements)t.some(s=>on(s,r))||t.push(r);return{arrayValue:{values:t}}}class Pi extends Ra{constructor(e){super(),this.elements=e}}function hm(n,e){let t=fm(e);for(const r of n.elements)t=t.filter(s=>!on(s,r));return{arrayValue:{values:t}}}class Xo extends Ra{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Bf(n){return Me(n.integerValue||n.doubleValue)}function fm(n){return $l(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class XA{constructor(e,t){this.field=e,this.transform=t}}function ZA(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Pi&&s instanceof Pi?ds(r.elements,s.elements,on):r instanceof Xo&&s instanceof Xo?on(r.Ae,s.Ae):r instanceof bi&&s instanceof bi}(n.transform,e.transform)}class eS{constructor(e,t){this.version=e,this.transformResults=t}}class jt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function So(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Pa{}function dm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Kl(n.key,jt.none()):new Ui(n.key,n.data,jt.none());{const t=n.data,r=Tt.empty();let s=new We(tt.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new hr(n.key,r,new Pt(s.toArray()),jt.none())}}function tS(n,e,t){n instanceof Ui?function(s,i,a){const c=s.value.clone(),l=jf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof hr?function(s,i,a){if(!So(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=jf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(pm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ui(n,e,t,r){return n instanceof Ui?function(i,a,c,l){if(!So(i.precondition,a))return c;const h=i.value.clone(),d=qf(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof hr?function(i,a,c,l){if(!So(i.precondition,a))return c;const h=qf(i.fieldTransforms,l,a),d=a.data;return d.setAll(pm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,c){return So(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function nS(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=lm(r.transform,s||null);i!=null&&(t===null&&(t=Tt.empty()),t.set(r.field,i))}return t||null}function $f(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ds(r,s,(i,a)=>ZA(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ui extends Pa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hr extends Pa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function jf(n,e,t){const r=new Map;Ie(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,YA(a,c,t[s]))}return r}function qf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,JA(i,a,e))}return r}class Kl extends Pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rS extends Pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sS{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&tS(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ui(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ui(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=am();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=dm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(t,r)=>$f(t,r))&&ds(this.baseMutations,e.baseMutations,(t,r)=>$f(t,r))}}class zl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ie(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return WA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new zl(e,t,r,s)}}/**
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
 */class iS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Fe,_e;function aS(n){switch(n){case D.OK:return te(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function gm(n){if(n===void 0)return An("GRPC error has no .code"),D.UNKNOWN;switch(n){case Fe.OK:return D.OK;case Fe.CANCELLED:return D.CANCELLED;case Fe.UNKNOWN:return D.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return D.INTERNAL;case Fe.UNAVAILABLE:return D.UNAVAILABLE;case Fe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Fe.NOT_FOUND:return D.NOT_FOUND;case Fe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Fe.ABORTED:return D.ABORTED;case Fe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Fe.DATA_LOSS:return D.DATA_LOSS;default:return te(39323,{code:n})}}(_e=Fe||(Fe={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cS(){return new TextEncoder}/**
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
 */const lS=new zn([4294967295,4294967295],0);function Hf(n){const e=cS().encode(n),t=new Vg;return t.update(e),new Uint8Array(t.digest())}function Wf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zn([t,r],0),new zn([s,i],0)]}class Gl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ys(`Invalid padding: ${t}`);if(r<0)throw new Ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=zn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(zn.fromNumber(r)));return s.compare(lS)===1&&(s=new zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Hf(e),[r,s]=Wf(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Gl(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Hf(e),[r,s]=Wf(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Bi(ie.min(),s,new ke(de),Sn(),pe())}}class $i{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $i(r,t,pe(),pe(),pe())}}/**
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
 */class bo{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class mm{constructor(e,t){this.targetId=e,this.Ce=t}}class _m{constructor(e,t,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Kf{constructor(){this.ve=0,this.Fe=zf(),this.Me=nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=pe(),t=pe(),r=pe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}}),new $i(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=zf()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class uS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Sn(),this.Je=lo(),this.He=lo(),this.Ze=new ke(de)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Gc(i))if(r===0){const a=new J(i.path);this.et(t,a,ct.newNoDocument(a,ie.min()))}else Ie(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=tr(r).toUint8Array()}catch(l){if(l instanceof jg)return Or("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Gl(a,s,i)}catch(l){return Or(l instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Gc(c.target)){const l=new J(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ct.newNoDocument(l,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let r=pe();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Bi(e,t,this.Ze,this.je,r);return this.je=Sn(),this.Je=lo(),this.He=lo(),this.Ze=new ke(de),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Kf,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new We(de),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new We(de),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kf),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function lo(){return new ke(J.comparator)}function zf(){return new ke(J.comparator)}const hS={asc:"ASCENDING",desc:"DESCENDING"},fS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dS={and:"AND",or:"OR"};class pS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yc(n,e){return n.useProto3Json||wa(e)?e:{value:e}}function Zo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ym(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gS(n,e){return Zo(n,e.toTimestamp())}function rn(n){return Ie(!!n,49232),ie.fromTimestamp(function(t){const r=er(t);return new De(r.seconds,r.nanos)}(n))}function Ql(n,e){return Xc(n,e).canonicalString()}function Xc(n,e){const t=function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Em(n){const e=Pe.fromString(n);return Ie(Am(e),10190,{key:e.toString()}),e}function Zc(n,e){return Ql(n.databaseId,e.path)}function _c(n,e){const t=Em(e);if(t.get(1)!==n.databaseId.projectId)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new J(Tm(t))}function vm(n,e){return Ql(n.databaseId,e)}function mS(n){const e=Em(n);return e.length===4?Pe.emptyPath():Tm(e)}function el(n){return new Pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tm(n){return Ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Gf(n,e,t){return{name:Zc(n,e),fields:t.value.mapValue.fields}}function _S(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ie(d===void 0||typeof d=="string",58123),nt.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),nt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const d=h.code===void 0?D.UNKNOWN:gm(h.code);return new z(d,h.message||"")}(a);t=new _m(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_c(n,r.document.name),i=rn(r.document.updateTime),a=r.document.createTime?rn(r.document.createTime):ie.min(),c=new Tt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new bo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_c(n,r.document),i=r.readTime?rn(r.readTime):ie.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];t=new bo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_c(n,r.document),i=r.removedTargetIds||[];t=new bo([],i,s,null)}else{if(!("filter"in e))return te(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new oS(s,i),c=r.targetId;t=new mm(c,a)}}return t}function yS(n,e){let t;if(e instanceof Ui)t={update:Gf(n,e.key,e.value)};else if(e instanceof Kl)t={delete:Zc(n,e.key)};else if(e instanceof hr)t={update:Gf(n,e.key,e.data),updateMask:RS(e.fieldMask)};else{if(!(e instanceof rS))return te(16599,{dt:e.type});t={verify:Zc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof bi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ri)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Pi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xo)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw te(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)}(n,e.precondition)),t}function ES(n,e){return n&&n.length>0?(Ie(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?rn(s.updateTime):rn(i);return a.isEqual(ie.min())&&(a=rn(i)),new eS(a,s.transformResults||[])}(t,e))):[]}function vS(n,e){return{documents:[vm(n,e.path)]}}function TS(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vm(n,s);const i=function(h){if(h.length!==0)return wm(Kt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(E){return{field:Yr(E.field),direction:AS(E.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Yc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function IS(n){let e=mS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const E=Im(p);return E instanceof Kt&&Xg(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(E=>function(V){return new Si(Xr(V.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(p){let E;return E=typeof p=="object"?p.value:p,wa(E)?null:E}(t.limit));let l=null;t.startAt&&(l=function(p){const E=!!p.before,b=p.values||[];return new Yo(b,E)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const E=!p.before,b=p.values||[];return new Yo(b,E)}(t.endAt)),FA(e,s,a,i,c,"F",l,h)}function wS(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Im(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xr(t.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xr(t.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(t.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xr(t.unaryFilter.field);return Be.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(n):n.fieldFilter!==void 0?function(t){return Be.create(Xr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Kt.create(t.compositeFilter.filters.map(r=>Im(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(t.compositeFilter.op))}(n):te(30097,{filter:n})}function AS(n){return hS[n]}function SS(n){return fS[n]}function bS(n){return dS[n]}function Yr(n){return{fieldPath:n.canonicalString()}}function Xr(n){return tt.fromServerFormat(n.fieldPath)}function wm(n){return n instanceof Be?function(t){if(t.op==="=="){if(xf(t.value))return{unaryFilter:{field:Yr(t.field),op:"IS_NAN"}};if(Of(t.value))return{unaryFilter:{field:Yr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xf(t.value))return{unaryFilter:{field:Yr(t.field),op:"IS_NOT_NAN"}};if(Of(t.value))return{unaryFilter:{field:Yr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(t.field),op:SS(t.op),value:t.value}}}(n):n instanceof Kt?function(t){const r=t.getFilters().map(s=>wm(s));return r.length===1?r[0]:{compositeFilter:{op:bS(t.op),filters:r}}}(n):te(54877,{filter:n})}function RS(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Am(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Sm(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class yn{constructor(e,t,r,s,i=ie.min(),a=ie.min(),c=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class PS{constructor(e){this.yt=e}}function CS(n){const e=IS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jc(e,e.limit,"L"):e}/**
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
 */class VS{constructor(){this.bn=new DS}addToCollectionParentIndex(e,t){return this.bn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Zn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class DS{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new We(Pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(Pe.comparator)).toArray()}}/**
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
 */const Qf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bm=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(bm,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
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
 */const Jf="LruGarbageCollector",kS=1048576;function Yf([n,e],[t,r]){const s=de(n,t);return s===0?de(e,r):s}class NS{constructor(e){this.Pr=e,this.buffer=new We(Yf),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Yf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OS{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(Jf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ws(t)?W(Jf,"Ignoring IndexedDB error during garbage collection: ",t):await Is(t)}await this.Ar(3e5)})}}class xS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Ia.ce);const r=new NS(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Qf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qf):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Qr()<=ge.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function MS(n,e){return new xS(n,e)}/**
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
 */class LS{constructor(){this.changes=new Mr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class US{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ui(r.mutation,s,Pt.empty(),De.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=pe()){const s=Sr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Js();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Sr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,pe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Sn();const a=li(),c=function(){return li()}();return t.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof hr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ui(d.mutation,h,d.mutation.getFieldMask(),De.now())):a.set(h.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>c.set(h,new FS(d,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=li();let s=new ke((a,c)=>a-c),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||Pt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||pe()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=am();d.forEach(E=>{if(!i.has(E)){const b=dm(t.get(E),r.get(E));b!==null&&p.set(E,b),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return UA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Sr());let c=Ti,l=i;return a.next(h=>k.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(e,d).next(E=>{l=l.insert(d,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,pe())).next(d=>({batchId:c,changes:om(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new J(t)).next(r=>{let s=Js();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Js();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,l=>{const h=function(p,E){return new As(E,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,E)=>{a=a.insert(p,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))});let c=Js();return a.forEach((l,h)=>{const d=i.get(l);d!==void 0&&ui(d.mutation,h,Pt.empty(),De.now()),ba(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class BS{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return k.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:CS(s.bundledQuery),readTime:rn(s.readTime)}}(t)),k.resolve()}}/**
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
 */class $S{constructor(){this.overlays=new ke(J.comparator),this.Lr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Sr();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Sr(),i=t.length+1,a=new J(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ke((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Sr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=Sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return k.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new iS(t,r));let i=this.Lr.get(t);i===void 0&&(i=pe(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class jS{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class Jl{constructor(){this.kr=new We(Qe.Kr),this.qr=new We(Qe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Qe(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Qe(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new J(new Pe([])),r=new Qe(t,e),s=new Qe(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new J(new Pe([])),r=new Qe(t,e),s=new Qe(t,e+1);let i=pe();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Qe(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return J.comparator(e.key,t.key)||de(e.Jr,t.Jr)}static Ur(e,t){return de(e.Jr,t.Jr)||J.comparator(e.key,t.key)}}/**
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
 */class qS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new We(Qe.Kr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sS(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Hr=this.Hr.add(new Qe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Ul:this.Yn-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Qe(t,0),s=new Qe(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const c=this.Zr(a.Jr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(de);return t.forEach(s=>{const i=new Qe(s,0),a=new Qe(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],c=>{r=r.add(c.Jr)})}),k.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new Qe(new J(i),0);let c=new We(de);return this.Hr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Jr)),!0)},a),k.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ie(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return k.forEach(t.mutations,s=>{const i=new Qe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new Qe(t,0),s=this.Hr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class HS{constructor(e){this.ti=e,this.docs=function(){return new ke(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=Sn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Sn();const a=t.path,c=new J(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||gA(pA(d),r)<=0||(s.has(d.key)||ba(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}ni(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new WS(this)}getSize(e){return k.resolve(this.size)}}class WS extends LS{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class KS{constructor(e){this.persistence=e,this.ri=new Mr(t=>jl(t),ql),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.ii=0,this.si=new Jl,this.targetCount=0,this.oi=rr._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),k.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new rr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.lr(t),k.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.si.containsKey(t))}}/**
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
 */class Rm{constructor(e,t){this._i={},this.overlays={},this.ai=new Ia(0),this.ui=!1,this.ui=!0,this.ci=new jS,this.referenceDelegate=e(this),this.li=new KS(this),this.indexManager=new VS,this.remoteDocumentCache=function(s){return new HS(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new PS(t),this.Pi=new BS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $S,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new qS(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new zS(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return k.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class zS extends _A{constructor(e){super(),this.currentSequenceNumber=e}}class Yl{constructor(e){this.persistence=e,this.Ri=new Jl,this.Ai=null}static Vi(e){return new Yl(e)}get di(){if(this.Ai)return this.Ai;throw te(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.di,r=>{const s=J.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,ie.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ea{constructor(e,t){this.persistence=e,this.fi=new Mr(r=>vA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=MS(this,t)}static Vi(e,t){return new ea(e,t)}Ti(){}Ii(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return k.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wo(e.data.value)),t}wr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class GS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QS{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Iv()?8:yA(ht())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new GS;return this.ys(e,t,a).next(c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Qr()<=ge.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Jr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(Qr()<=ge.DEBUG&&W("QueryEngine","Query:",Jr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Qr()<=ge.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Jr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(t))):k.resolve())}gs(e,t){if(Uf(t))return k.resolve(null);let r=nn(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Jc(t,null,"F"),r=nn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=pe(...i);return this.fs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ss(t,c);return this.bs(t,h,a,l.readTime)?this.gs(e,Jc(t,null,"F")):this.Ds(e,h,t,l)}))})))}ps(e,t,r,s){return Uf(t)||s.isEqual(ie.min())?k.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?k.resolve(null):(Qr()<=ge.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jr(t)),this.Ds(e,a,t,dA(s,Ti)).next(c=>c))})}Ss(e,t){let r=new We(sm(e));return t.forEach((s,i)=>{ba(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Qr()<=ge.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Jr(t)),this.fs.getDocumentsMatchingQuery(e,t,Zn.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Zl="LocalStore",JS=3e8;class YS{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ke(de),this.Fs=new Mr(i=>jl(i),ql),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new US(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function XS(n,e,t,r){return new YS(n,e,t,r)}async function Pm(n,e){const t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=pe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:c}))})})}function ZS(n,e){const t=oe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,E=p.keys();let b=k.resolve();return E.forEach(V=>{b=b.next(()=>d.getEntry(l,V)).next(N=>{const B=h.docVersions.get(V);Ie(B!==null,48541),N.version.compareTo(B)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=pe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Cm(n){const e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function eb(n,e){const t=oe(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach((d,p)=>{const E=s.get(p);if(!E)return;c.push(t.li.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,d.addedDocuments,p)));let b=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(nt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),function(N,B,q){return N.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=JS?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(E,b,d)&&c.push(t.li.updateTargetData(i,b))});let l=Sn(),h=pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(tb(i,a,e.documentUpdates).next(d=>{l=d.Bs,h=d.Ls})),!r.isEqual(ie.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.vs=s,i))}function tb(n,e,t){let r=pe(),s=pe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Sn();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(Zl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Bs:a,Ls:s}})}function nb(n,e){const t=oe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ul),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rb(n,e){const t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new yn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function tl(n,e,t){const r=oe(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ws(a))throw a;W(Zl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Xf(n,e,t){const r=oe(n);let s=ie.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,d){const p=oe(l),E=p.Fs.get(d);return E!==void 0?k.resolve(p.vs.get(E)):p.li.getTargetData(h,d)}(r,a,nn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:ie.min(),t?i:pe())).next(c=>(sb(r,jA(e),c),{documents:c,ks:i})))}function sb(n,e,t){let r=n.Ms.get(e)||ie.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class Zf{constructor(){this.activeTargetIds=GA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ib{constructor(){this.vo=new Zf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Zf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ob{Mo(e){}shutdown(){}}/**
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
 */const ed="ConnectivityMonitor";class td{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(ed,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(ed,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const yc="RestConnection",ab={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class cb{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Qo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=nl(),c=this.Qo(e,t.toUriEncodedString());W(yc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),d=Ni(h);return this.zo(e,c,l,r,d).then(p=>(W(yc,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Or(yc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=ab[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class lb{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const it="WebChannelConnection",qs=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class ls extends cb{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ls.c_){const e=Og();qs(e,Ng.STAT_EVENT,t=>{t.stat===qc.PROXY?W(it,"STAT_EVENT: detected buffering proxy"):t.stat===qc.NOPROXY&&W(it,"STAT_EVENT: detected no buffering proxy")}),ls.c_=!0}}zo(e,t,r,s,i){const a=nl();return new Promise((c,l)=>{const h=new Dg;h.setWithCredentials(!0),h.listenOnce(kg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Io.NO_ERROR:const p=h.getResponseJson();W(it,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Io.TIMEOUT:W(it,`RPC '${e}' ${a} timed out`),l(new z(D.DEADLINE_EXCEEDED,"Request time out"));break;case Io.HTTP_ERROR:const E=h.getStatus();if(W(it,`RPC '${e}' ${a} failed with status:`,E,"response text:",h.getResponseText()),E>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const N=function(q){const K=q.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(K)>=0?K:D.UNKNOWN}(V.status);l(new z(N,V.message))}else l(new z(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new z(D.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(it,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);W(it,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)})}T_(e,t,r){const s=nl(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");W(it,`Creating RPC '${e}' stream ${s}: ${h}`,c);const d=a.createWebChannel(h,c);this.I_(d);let p=!1,E=!1;const b=new lb({Jo:V=>{E?W(it,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(p||(W(it,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),W(it,`RPC '${e}' stream ${s} sending:`,V),d.send(V))},Ho:()=>d.close()});return qs(d,Qs.EventType.OPEN,()=>{E||(W(it,`RPC '${e}' stream ${s} transport opened.`),b.i_())}),qs(d,Qs.EventType.CLOSE,()=>{E||(E=!0,W(it,`RPC '${e}' stream ${s} transport closed`),b.o_(),this.E_(d))}),qs(d,Qs.EventType.ERROR,V=>{E||(E=!0,Or(it,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),b.o_(new z(D.UNAVAILABLE,"The operation could not be completed")))}),qs(d,Qs.EventType.MESSAGE,V=>{var N;if(!E){const B=V.data[0];Ie(!!B,16349);const q=B,K=(q==null?void 0:q.error)||((N=q[0])==null?void 0:N.error);if(K){W(it,`RPC '${e}' stream ${s} received error:`,K);const Q=K.status;let G=function(A){const y=Fe[A];if(y!==void 0)return gm(y)}(Q),se=K.message;Q==="NOT_FOUND"&&se.includes("database")&&se.includes("does not exist")&&se.includes(this.databaseId.database)&&Or(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),G===void 0&&(G=D.INTERNAL,se="Unknown error status: "+Q+" with message "+K.message),E=!0,b.o_(new z(G,se)),d.close()}else W(it,`RPC '${e}' stream ${s} received:`,B),b.__(B)}}),ls.u_(),setTimeout(()=>{b.s_()},0),b}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return xg()}}/**
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
 */function ub(n){return new ls(n)}function Ec(){return typeof document<"u"?document:null}/**
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
 */function Ca(n){return new pS(n,!0)}/**
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
 */ls.c_=!1;class Vm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const nd="PersistentStream";class Dm{constructor(e,t,r,s,i,a,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(An(t.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new z(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(nd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(W(nd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hb extends Dm{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=_S(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?rn(a.readTime):ie.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=el(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=Gc(l)?{documents:vS(i,l)}:{query:TS(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=ym(i,a.resumeToken);const h=Yc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ie.min())>0){c.readTime=Zo(i,a.snapshotVersion.toTimestamp());const h=Yc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=wS(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=el(this.serializer),t.removeTarget=e,this.K_(t)}}class fb extends Dm{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=ES(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=el(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>yS(this.serializer,r))};this.K_(t)}}/**
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
 */class db{}class pb extends db{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Xc(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(D.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.jo(e,Xc(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(D.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function gb(n,e,t,r){return new pb(n,e,t,r)}class mb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(An(t),this.aa=!1):W("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const an="RemoteStore";class _b{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new rr(1e3),this.Va=new rr(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{Lr(this)&&(W(an,"Restarting streams for network reachability change."),await async function(l){const h=oe(l);h.da.add(4),await ji(h),h.ga.set("Unknown"),h.da.delete(4),await Va(h)}(this))})}),this.ga=new mb(r,s)}}async function Va(n){if(Lr(n))for(const e of n.ma)await e(!0)}async function ji(n){for(const e of n.ma)await e(!1)}function rl(n,e){return n.Ea.get(e)||void 0}function km(n,e){const t=oe(n),r=rl(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=function(c,l){const h=rl(c,l);h!==void 0&&c.Ra.delete(h);const d=function(E,b){return b%2!=0?E.Va.next():E.Aa.next()}(c,l);return c.Ea.set(l,d),c.Ra.set(d,l),d}(t,e.targetId);W(an,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new yn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),ru(t)?nu(t):Ss(t).O_()&&tu(t,i)}function eu(n,e){const t=oe(n),r=Ss(t),s=rl(t,e);W(an,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&Nm(t,s),t.Ia.size===0&&(r.O_()?r.L_():Lr(t)&&t.ga.set("Unknown"))}function tu(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void W(an,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Ss(n).Z_(e)}function Nm(n,e){n.pa.$e(e),Ss(n).X_(e)}function nu(n){n.pa=new uS({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):pe()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ss(n).start(),n.ga.ua()}function ru(n){return Lr(n)&&!Ss(n).x_()&&n.Ia.size>0}function Lr(n){return oe(n).da.size===0}function Om(n){n.pa=void 0}async function yb(n){n.ga.set("Online")}async function Eb(n){n.Ia.forEach((e,t)=>{tu(n,e)})}async function vb(n,e){Om(n),ru(n)?(n.ga.ha(e),nu(n)):n.ga.set("Unknown")}async function Tb(n,e,t){if(n.ga.set("Online"),e instanceof _m&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds){if(s.Ia.has(c)){const l=s.Ra.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.Ra.delete(c)),s.Ia.delete(c)}s.pa.removeTarget(c)}}(n,e)}catch(r){W(an,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(n,r)}else if(e instanceof bo?n.pa.Xe(e):e instanceof mm?n.pa.st(e):n.pa.tt(e),!t.isEqual(ie.min()))try{const r=await Cm(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.pa.Tt(a);c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(nt.EMPTY_BYTE_STRING,p.snapshotVersion)),Nm(i,h);const E=new yn(p.target,h,d,p.sequenceNumber);tu(i,E)});const l=function(d,p){const E=new Map;p.targetChanges.forEach((V,N)=>{const B=d.Ra.get(N);B!==void 0&&E.set(B,V)});let b=new ke(de);return p.targetMismatches.forEach((V,N)=>{const B=d.Ra.get(V);B!==void 0&&(b=b.insert(B,N))}),new Bi(p.snapshotVersion,E,b,p.documentUpdates,p.resolvedLimboDocuments)}(i,c);return i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){W(an,"Failed to raise snapshot:",r),await ta(n,r)}}async function ta(n,e,t){if(!ws(e))throw e;n.da.add(1),await ji(n),n.ga.set("Offline"),t||(t=()=>Cm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{W(an,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Va(n)})}function xm(n,e){return e().catch(t=>ta(n,t,e))}async function Da(n){const e=oe(n),t=sr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ul;for(;Ib(e);)try{const s=await nb(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,wb(e,s)}catch(s){await ta(e,s)}Mm(e)&&Lm(e)}function Ib(n){return Lr(n)&&n.Ta.length<10}function wb(n,e){n.Ta.push(e);const t=sr(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Mm(n){return Lr(n)&&!sr(n).x_()&&n.Ta.length>0}function Lm(n){sr(n).start()}async function Ab(n){sr(n).ra()}async function Sb(n){const e=sr(n);for(const t of n.Ta)e.ea(t.mutations)}async function bb(n,e,t){const r=n.Ta.shift(),s=zl.from(r,e,t);await xm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Da(n)}async function Rb(n,e){e&&sr(n).Y_&&await async function(r,s){if(function(a){return aS(a)&&a!==D.ABORTED}(s.code)){const i=r.Ta.shift();sr(r).B_(),await xm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Da(r)}}(n,e),Mm(n)&&Lm(n)}async function rd(n,e){const t=oe(n);t.asyncQueue.verifyOperationInProgress(),W(an,"RemoteStore received new credentials");const r=Lr(t);t.da.add(3),await ji(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Va(t)}async function Pb(n,e){const t=oe(n);e?(t.da.delete(2),await Va(t)):e||(t.da.add(2),await ji(t),t.ga.set("Unknown"))}function Ss(n){return n.ya||(n.ya=function(t,r,s){const i=oe(t);return i.sa(),new hb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:yb.bind(null,n),Yo:Eb.bind(null,n),t_:vb.bind(null,n),H_:Tb.bind(null,n)}),n.ma.push(async e=>{e?(n.ya.B_(),ru(n)?nu(n):n.ga.set("Unknown")):(await n.ya.stop(),Om(n))})),n.ya}function sr(n){return n.wa||(n.wa=function(t,r,s){const i=oe(t);return i.sa(),new fb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Ab.bind(null,n),t_:Rb.bind(null,n),ta:Sb.bind(null,n),na:bb.bind(null,n)}),n.ma.push(async e=>{e?(n.wa.B_(),await Da(n)):(await n.wa.stop(),n.Ta.length>0&&(W(an,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
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
 */class su{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new su(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(n,e){if(An("AsyncQueue",`${e}: ${n}`),ws(n))return new z(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class us{static emptySet(e){return new us(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||J.comparator(t.key,r.key):(t,r)=>J.comparator(t.key,r.key),this.keyedMap=Js(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class sd{constructor(){this.Sa=new ke(J.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):te(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal((t,r)=>{e.push(r)}),e}}class ms{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ms(e,t,us.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Cb{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class Vb{constructor(){this.queries=id(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=oe(t),i=s.queries;s.queries=id(),i.forEach((a,c)=>{for(const l of c.va)l.onError(r)})})(this,new z(D.ABORTED,"Firestore shutting down"))}}function id(){return new Mr(n=>rm(n),Sa)}async function Db(n,e){const t=oe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new Cb,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=iu(a,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&ou(t)}async function kb(n,e){const t=oe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Nb(n,e){const t=oe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.va)c.Na(s)&&(r=!0);a.Ca=s}}r&&ou(t)}function Ob(n,e,t){const r=oe(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function ou(n){n.xa.forEach(e=>{e.next()})}var sl,od;(od=sl||(sl={})).Ba="default",od.Cache="cache";class xb{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==sl.Cache}}/**
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
 */class Fm{constructor(e){this.key=e}}class Um{constructor(e){this.key=e}}class Mb{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=pe(),this.mutatedKeys=pe(),this.iu=sm(e),this.su=new us(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new sd,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const E=s.get(d),b=ba(this.query,p)?p:null,V=!!E&&this.mutatedKeys.has(E.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let B=!1;E&&b?E.data.isEqual(b.data)?V!==N&&(r.track({type:3,doc:b}),B=!0):this.uu(E,b)||(r.track({type:2,doc:b}),B=!0,(l&&this.iu(b,l)>0||h&&this.iu(b,h)<0)&&(c=!0)):!E&&b?(r.track({type:0,doc:b}),B=!0):E&&!b&&(r.track({type:1,doc:E}),B=!0,(l||h)&&(c=!0)),B&&(b?(a=a.add(b),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{su:a,au:r,bs:c,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((d,p)=>function(b,V){const N=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Vt:B})}};return N(b)-N(V)}(d.type,p.type)||this.iu(d.doc,p.doc)),this.cu(r),s=s??!1;const c=t&&!s?this.lu():[],l=this.ru.size===0&&this.current&&!s?1:0,h=l!==this.nu;return this.nu=l,a.length!==0||h?{snapshot:new ms(this.query,e.su,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new sd,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=pe(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const t=[];return e.forEach(r=>{this.ru.has(r)||t.push(new Um(r))}),this.ru.forEach(r=>{e.has(r)||t.push(new Fm(r))}),t}Tu(e){this.tu=e.ks,this.ru=pe();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return ms.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const au="SyncEngine";class Lb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Fb{constructor(e){this.key=e,this.Eu=!1}}class Ub{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new Mr(c=>rm(c),Sa),this.Vu=new Map,this.du=new Set,this.mu=new ke(J.comparator),this.fu=new Map,this.gu=new Jl,this.pu={},this.yu=new Map,this.wu=rr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Bb(n,e,t=!0){const r=Wm(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await Bm(r,e,t,!0),s}async function $b(n,e){const t=Wm(n);await Bm(t,e,!0,!1)}async function Bm(n,e,t,r){const s=await rb(n.localStore,nn(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await jb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&km(n.remoteStore,s),c}async function jb(n,e,t,r,s){n.bu=(p,E,b)=>async function(N,B,q,K){let Q=B.view._u(q);Q.bs&&(Q=await Xf(N.localStore,B.query,!1).then(({documents:A})=>B.view._u(A,Q)));const G=K&&K.targetChanges.get(B.targetId),se=K&&K.targetMismatches.get(B.targetId)!=null,he=B.view.applyChanges(Q,N.isPrimaryClient,G,se);return cd(N,B.targetId,he.hu),he.snapshot}(n,p,E,b);const i=await Xf(n.localStore,e,!0),a=new Mb(e,i.ks),c=a._u(i.documents),l=$i.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);cd(n,t,h.hu);const d=new Lb(e,t,a);return n.Au.set(e,d),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),h.snapshot}async function qb(n,e,t){const r=oe(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(a=>!Sa(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&eu(r.remoteStore,s.targetId),il(r,s.targetId)}).catch(Is)):(il(r,s.targetId),await tl(r.localStore,s.targetId,!0))}async function Hb(n,e){const t=oe(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),eu(t.remoteStore,r.targetId))}async function Wb(n,e,t){const r=Xb(n);try{const s=await function(a,c){const l=oe(a),h=De.now(),d=c.reduce((b,V)=>b.add(V.key),pe());let p,E;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=Sn(),N=pe();return l.xs.getEntries(b,d).next(B=>{V=B,V.forEach((q,K)=>{K.isValidDocument()||(N=N.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,V)).next(B=>{p=B;const q=[];for(const K of c){const Q=nS(K,p.get(K.key).overlayedDocument);Q!=null&&q.push(new hr(K.key,Q,Qg(Q.value.mapValue),jt.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,q,c)}).next(B=>{E=B;const q=B.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(b,B.batchId,q)})}).then(()=>({batchId:E.batchId,changes:om(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.pu[a.currentUser.toKey()];h||(h=new ke(de)),h=h.insert(c,l),a.pu[a.currentUser.toKey()]=h}(r,s.batchId,t),await qi(r,s.changes),await Da(r.remoteStore)}catch(s){const i=iu(s,"Failed to persist write");t.reject(i)}}async function $m(n,e){const t=oe(n);try{const r=await eb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.fu.get(i);a&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?Ie(a.Eu,14607):s.removedDocuments.size>0&&(Ie(a.Eu,42227),a.Eu=!1))}),await qi(t,r,e)}catch(r){await Is(r)}}function ad(n,e,t){const r=oe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach((i,a)=>{const c=a.view.Oa(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=oe(a);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const E of p.va)E.Oa(c)&&(h=!0)}),h&&ou(l)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Kb(n,e,t){const r=oe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let a=new ke(J.comparator);a=a.insert(i,ct.newNoDocument(i,ie.min()));const c=pe().add(i),l=new Bi(ie.min(),new Map,new ke(de),a,c);await $m(r,l),r.mu=r.mu.remove(i),r.fu.delete(e),cu(r)}else await tl(r.localStore,e,!1).then(()=>il(r,e,t)).catch(Is)}async function zb(n,e){const t=oe(n),r=e.batch.batchId;try{const s=await ZS(t.localStore,e);qm(t,r,null),jm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qi(t,s)}catch(s){await Is(s)}}async function Gb(n,e,t){const r=oe(n);try{const s=await function(a,c){const l=oe(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ie(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);qm(r,e,t),jm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qi(r,s)}catch(s){await Is(s)}}function jm(n,e){(n.yu.get(e)||[]).forEach(t=>{t.resolve()}),n.yu.delete(e)}function qm(n,e,t){const r=oe(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function il(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach(r=>{n.gu.containsKey(r)||Hm(n,r)})}function Hm(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(eu(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),cu(n))}function cd(n,e,t){for(const r of t)r instanceof Fm?(n.gu.addReference(r.key,e),Qb(n,r)):r instanceof Um?(W(au,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||Hm(n,r.key)):te(19791,{Cu:r})}function Qb(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(W(au,"New document in limbo: "+t),n.du.add(r),cu(n))}function cu(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new J(Pe.fromString(e)),r=n.wu.next();n.fu.set(r,new Fb(t)),n.mu=n.mu.insert(t,r),km(n.remoteStore,new yn(nn(Hl(t.path)),r,"TargetPurposeLimboResolution",Ia.ce))}}async function qi(n,e,t){const r=oe(n),s=[],i=[],a=[];r.Au.isEmpty()||(r.Au.forEach((c,l)=>{a.push(r.bu(l,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Xl.Es(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ru.H_(s),await async function(l,h){const d=oe(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(h,E=>k.forEach(E.Ts,b=>d.persistence.referenceDelegate.addReference(p,E.targetId,b)).next(()=>k.forEach(E.Is,b=>d.persistence.referenceDelegate.removeReference(p,E.targetId,b)))))}catch(p){if(!ws(p))throw p;W(Zl,"Failed to update sequence numbers: "+p)}for(const p of h){const E=p.targetId;if(!p.fromCache){const b=d.vs.get(E),V=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(V);d.vs=d.vs.insert(E,N)}}}(r.localStore,i))}async function Jb(n,e){const t=oe(n);if(!t.currentUser.isEqual(e)){W(au,"User change. New user:",e.toKey());const r=await Pm(t.localStore,e);t.currentUser=e,function(i,a){i.yu.forEach(c=>{c.forEach(l=>{l.reject(new z(D.CANCELLED,a))})}),i.yu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(t,r.Ns)}}function Yb(n,e){const t=oe(n),r=t.fu.get(e);if(r&&r.Eu)return pe().add(r.key);{let s=pe();const i=t.Vu.get(e);if(!i)return s;for(const a of i){const c=t.Au.get(a);s=s.unionWith(c.view.ou)}return s}}function Wm(n){const e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$m.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kb.bind(null,e),e.Ru.H_=Nb.bind(null,e.eventManager),e.Ru.Du=Ob.bind(null,e.eventManager),e}function Xb(n){const e=oe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gb.bind(null,e),e}class na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ca(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return XS(this.persistence,new QS,e.initialUser,this.serializer)}xu(e){return new Rm(Yl.Vi,this.serializer)}Mu(e){return new ib}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}na.provider={build:()=>new na};class Zb extends na{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){Ie(this.persistence.referenceDelegate instanceof ea,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new OS(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Rm(r=>ea.Vi(r,t),this.serializer)}}class ol{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ad(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jb.bind(null,this.syncEngine),await Pb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Vb}()}createDatastore(e){const t=Ca(e.databaseInfo.databaseId),r=ub(e.databaseInfo);return gb(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new _b(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ad(this.syncEngine,t,0),function(){return td.v()?new td:new ob}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,d){const p=new Ub(s,i,a,c,l,h);return d&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=oe(s);W(an,"RemoteStore shutting down."),i.da.add(5),await ji(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ol.provider={build:()=>new ol};/**
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
 */class eR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ir="FirestoreClient";class tR{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=Fl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{W(ir,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(W(ir,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=iu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vc(n,e){n.asyncQueue.verifyOperationInProgress(),W(ir,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Pm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ld(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nR(n);W(ir,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>rd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>rd(e.remoteStore,s)),n._onlineComponents=e}async function nR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(ir,"Using user provided OfflineComponentProvider");try{await vc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Or("Error using user provided cache. Falling back to memory cache: "+t),await vc(n,new na)}}else W(ir,"Using default OfflineComponentProvider"),await vc(n,new Zb(void 0));return n._offlineComponents}async function Km(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(ir,"Using user provided OnlineComponentProvider"),await ld(n,n._uninitializedComponentsProvider._online)):(W(ir,"Using default OnlineComponentProvider"),await ld(n,new ol))),n._onlineComponents}function rR(n){return Km(n).then(e=>e.syncEngine)}async function ud(n){const e=await Km(n),t=e.eventManager;return t.onListen=Bb.bind(null,e.syncEngine),t.onUnlisten=qb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$b.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Hb.bind(null,e.syncEngine),t}function sR(n,e,t,r){const s=new eR(r),i=new xb(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>Db(await ud(n),i)),()=>{s.Ku(),n.asyncQueue.enqueueAndForget(async()=>kb(await ud(n),i))}}function iR(n,e){const t=new Rr;return n.asyncQueue.enqueueAndForget(async()=>Wb(await rR(n),e,t)),t.promise}/**
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
 */function zm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const oR="ComponentProvider",hd=new Map;function aR(n,e,t,r,s){return new wA(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,zm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Gm="firestore.googleapis.com",fd=!0;class dd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gm,this.ssl=fd}else this.host=e.host,this.ssl=e.ssl??fd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kS)throw new z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zm(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ka{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nA;switch(r.type){case"firstParty":return new oA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hd.get(t);r&&(W(oR,"Removing Datastore"),hd.delete(t),r.terminate())}(this),Promise.resolve()}}function cR(n,e,t,r={}){var h;n=Gn(n,ka);const s=Ni(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&qp(`https://${c}`),i.host!==Gm&&i.host!==c&&Or("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Cr(l,a)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=gv(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new z(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(E)}n._authCredentials=new rA(new Lg(d,p))}}/**
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
 */class Fr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Fi(t,je._jsonSchema))return new je(e,r||null,new J(Pe.fromString(t.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:$e("string",je._jsonSchemaVersion),referencePath:$e("string")};class Qn extends Fr{constructor(e,t,r){super(e,t,Hl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new J(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function pd(n,e,...t){if(n=Ke(n),Fg("collection","path",e),n instanceof ka){const r=Pe.fromString(e,...t);return Sf(r),new Qn(n,null,r)}{if(!(n instanceof je||n instanceof Qn))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return Sf(r),new Qn(n.firestore,null,r)}}function Ro(n,e,...t){if(n=Ke(n),arguments.length===1&&(e=Fl.newId()),Fg("doc","path",e),n instanceof ka){const r=Pe.fromString(e,...t);return Af(r),new je(n,null,new J(r))}{if(!(n instanceof je||n instanceof Qn))throw new z(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return Af(r),new je(n.firestore,n instanceof Qn?n.converter:null,new J(r))}}/**
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
 */const gd="AsyncQueue";class md{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Vm(this,"async_queue_retry"),this.lc=()=>{const r=Ec();r&&W(gd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=Ec();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Ec();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const t=new Rr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ws(e))throw e;W(gd,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const t=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,An("INTERNAL UNHANDLED ERROR: ",_d(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=su.createAndSchedule(this,e,t,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&te(47125,{Rc:_d(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function _d(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _s extends ka{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new md,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new md(e),this._firestoreClient=void 0,await e}}}function lR(n,e){const t=typeof n=="object"?n:zp(),r=typeof n=="string"?n:Qo,s=Pl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=dv("firestore");i&&cR(s,...i)}return s}function Qm(n){if(n._terminated)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||uR(n),n._firestoreClient}function uR(n){var r,s,i,a;const e=n._freezeSettings(),t=aR(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new tR(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(nt.fromBase64String(e))}catch(t){throw new z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nt(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fi(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:$e("string",Nt._jsonSchemaVersion),bytes:$e("string")};/**
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
 */class lu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(Fi(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:$e("string",sn._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
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
 */class qt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fi(e,qt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new qt(e.vectorValues);throw new z(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qt._jsonSchemaVersion="firestore/vectorValue/1.0",qt._jsonSchema={type:$e("string",qt._jsonSchemaVersion),vectorValues:$e("object")};/**
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
 */const hR=/^__.*__$/;class fR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ui(e,this.data,t,this.fieldTransforms)}}class Jm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new hr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ym(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{dataSource:n})}}class uu{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new uu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return ra(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Ym(this.dataSource)&&hR.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class dR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ca(e)}V(e,t,r,s=!1){return new uu({dataSource:e,methodName:t,targetDoc:r,path:tt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hu(n){const e=n._freezeSettings(),t=Ca(n._databaseId);return new dR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pR(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);du("Data must be an object, but it was:",a,r);const c=Xm(r,a);let l,h;if(i.merge)l=new Pt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const E=ys(e,p,t);if(!a.contains(E))throw new z(D.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);t_(d,E)||d.push(E)}l=new Pt(d),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new fR(new Tt(c),l,h)}class Oa extends Na{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oa}}class fu extends Na{_toFieldTransform(e){return new XA(e.path,new bi)}isEqual(e){return e instanceof fu}}function gR(n,e,t,r){const s=n.V(1,e,t);du("Data must be an object, but it was:",s,r);const i=[],a=Tt.empty();ur(r,(l,h)=>{const d=e_(e,l,t);h=Ke(h);const p=s.Sc(d);if(h instanceof Oa)i.push(d);else{const E=Hi(h,p);E!=null&&(i.push(d),a.set(d,E))}});const c=new Pt(i);return new Jm(a,c,s.fieldTransforms)}function mR(n,e,t,r,s,i){const a=n.V(1,e,t),c=[ys(e,r,t)],l=[s];if(i.length%2!=0)throw new z(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(ys(e,i[E])),l.push(i[E+1]);const h=[],d=Tt.empty();for(let E=c.length-1;E>=0;--E)if(!t_(h,c[E])){const b=c[E];let V=l[E];V=Ke(V);const N=a.Sc(b);if(V instanceof Oa)h.push(b);else{const B=Hi(V,N);B!=null&&(h.push(b),d.set(b,B))}}const p=new Pt(h);return new Jm(d,p,a.fieldTransforms)}function _R(n,e,t,r=!1){return Hi(t,n.V(r?4:3,e))}function Hi(n,e){if(Zm(n=Ke(n)))return du("Unsupported field value:",e,n),Xm(n,e);if(n instanceof Na)return function(r,s){if(!Ym(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Hi(c,s.bc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:Zo(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zo(s.serializer,i)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:ym(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ql(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qt)return function(a,c){const l=a instanceof qt?a.toArray():a;return{mapValue:{fields:{[zg]:{stringValue:Gg},[Jo]:{arrayValue:{values:l.map(d=>{if(typeof d!="number")throw c.Dc("VectorValues must only contain numeric values.");return Wl(c.serializer,d)})}}}}}}(r,s);if(Sm(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Ta(r)}`)}(n,e)}function Xm(n,e){const t={};return $g(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(n,(r,s)=>{const i=Hi(s,e.yc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Zm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof De||n instanceof sn||n instanceof Nt||n instanceof je||n instanceof Na||n instanceof qt||Sm(n))}function du(n,e,t){if(!Zm(t)||!Ug(t)){const r=Ta(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function ys(n,e,t){if((e=Ke(e))instanceof lu)return e._internalPath;if(typeof e=="string")return e_(n,e);throw ra("Field path arguments must be of type string or ",n,!1,void 0,t)}const yR=new RegExp("[~\\*/\\[\\]]");function e_(n,e,t){if(e.search(yR)>=0)throw ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new lu(...e.split("."))._internalPath}catch{throw ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ra(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new z(D.INVALID_ARGUMENT,c+n+l)}function t_(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ER{convertValue(e,t="none"){switch(nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ur(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Jo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>Me(a.doubleValue));return new qt(t)}convertGeoPoint(e){return new sn(Me(e.latitude),Me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Aa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ii(e));default:return null}}convertTimestamp(e){const t=er(e);return new De(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Pe.fromString(e);Ie(Am(r),9688,{name:e});const s=new wi(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(t)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class n_ extends ER{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}function vR(){return new fu("serverTimestamp")}const yd="@firebase/firestore",Ed="4.14.1";/**
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
 */class r_{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ys("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class TR extends r_{data(){return super.data()}}/**
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
 */function IR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pu{}class s_ extends pu{}function wR(n,e,...t){let r=[];e instanceof pu&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof mu).length,c=i.filter(l=>l instanceof gu).length;if(a>1||a>0&&c>0)throw new z(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class gu extends s_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new gu(e,t,r)}_apply(e){const t=this._parse(e);return i_(e._query,t),new Fr(e.firestore,e.converter,Qc(e._query,t))}_parse(e){const t=hu(e.firestore);return function(i,a,c,l,h,d,p){let E;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Id(p,d);const V=[];for(const N of p)V.push(Td(l,i,N));E={arrayValue:{values:V}}}else E=Td(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Id(p,d),E=_R(c,a,p,d==="in"||d==="not-in");return Be.create(h,d,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class mu extends pu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Kt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)i_(a,l),a=Qc(a,l)}(e._query,t),new Fr(e.firestore,e.converter,Qc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _u extends s_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _u(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Si(i,a)}(e._query,this._field,this._direction);return new Fr(e.firestore,e.converter,$A(e._query,t))}}function AR(n,e="asc"){const t=e,r=ys("orderBy",n);return _u._create(r,t)}function Td(n,e,t){if(typeof(t=Ke(t))=="string"){if(t==="")throw new z(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nm(e)&&t.indexOf("/")!==-1)throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Pe.fromString(t));if(!J.isDocumentKey(r))throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nf(n,new J(r))}if(t instanceof je)return Nf(n,t._key);throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ta(t)}.`)}function Id(n,e){if(!Array.isArray(n)||n.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function i_(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function SR(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Xs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pr extends r_{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ys("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pr._jsonSchema={type:$e("string",Pr._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class Po extends Pr{data(e={}){return super.data(e)}}class hs{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Po(this._firestore,this._userDataWriter,r.key,r,new Xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:bR(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}/**
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
 */hs._jsonSchemaVersion="firestore/querySnapshot/1.0",hs._jsonSchema={type:$e("string",hs._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};function wd(n,e,t,...r){n=Gn(n,je);const s=Gn(n.firestore,_s),i=hu(s);let a;return a=typeof(e=Ke(e))=="string"||e instanceof lu?mR(i,"updateDoc",n._key,e,t,r):gR(i,"updateDoc",n._key,e),yu(s,[a.toMutation(n._key,jt.exists(!0))])}function RR(n){return yu(Gn(n.firestore,_s),[new Kl(n._key,jt.none())])}function PR(n,e){const t=Gn(n.firestore,_s),r=Ro(n),s=SR(n.converter,e),i=hu(n.firestore);return yu(t,[pR(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function CR(n,...e){var h,d,p;n=Ke(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||vd(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(vd(e[r])){const E=e[r];e[r]=(h=E.next)==null?void 0:h.bind(E),e[r+1]=(d=E.error)==null?void 0:d.bind(E),e[r+2]=(p=E.complete)==null?void 0:p.bind(E)}let i,a,c;if(n instanceof je)a=Gn(n.firestore,_s),c=Hl(n._key.path),i={next:E=>{e[r]&&e[r](VR(a,n,E))},error:e[r+1],complete:e[r+2]};else{const E=Gn(n,Fr);a=Gn(E.firestore,_s),c=E._query;const b=new n_(a);i={next:V=>{e[r]&&e[r](new hs(a,b,E,V))},error:e[r+1],complete:e[r+2]},IR(n._query)}const l=Qm(a);return sR(l,c,s,i)}function yu(n,e){const t=Qm(n);return iR(t,e)}function VR(n,e,t){const r=t.docs.get(e._key),s=new n_(n);return new Pr(n,s,e._key,r,new Xs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){tA(Es),fs(new Vr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new _s(new sA(r.getProvider("auth-internal")),new aA(a,r.getProvider("app-check-internal")),AA(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Kn(yd,Ed,e),Kn(yd,Ed,"esm2020")})();var DR="firebase",kR="12.13.0";/**
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
 */Kn(DR,kR,"app");const NR={apiKey:"AIzaSyAWJiDPnggMGmFl3LA6dp1ImaeEoa9oLJk",authDomain:"task-list-76460.firebaseapp.com",projectId:"task-list-76460",storageBucket:"task-list-76460.firebasestorage.app",messagingSenderId:"357470215566",appId:"1:357470215566:web:37e6f0cb3e31275fd998df"},o_=Kp(NR),sa=Zw(o_),Hs=lR(o_),OR={class:"auth-container"},xR={class:"auth-card"},MR={class:"form-group"},LR={class:"form-group"},FR={key:0,class:"error-message"},UR=["disabled"],BR={class:"toggle-text"},$R=ap({__name:"AuthForm",setup(n){const e=Ue(""),t=Ue(""),r=Ue(!0),s=Ue(""),i=Ue(!1),a=async()=>{if(!(!e.value||!t.value)){i.value=!0,s.value="";try{r.value?await FI(sa,e.value,t.value):await LI(sa,e.value,t.value)}catch(l){const h=l.code??"";s.value=c(h)}finally{i.value=!1}}},c=l=>({"auth/user-not-found":"メールアドレスが見つかりません","auth/wrong-password":"パスワードが正しくありません","auth/invalid-credential":"メールアドレスまたはパスワードが正しくありません","auth/email-already-in-use":"このメールアドレスは既に使用されています","auth/weak-password":"パスワードは6文字以上にしてください","auth/invalid-email":"メールアドレスの形式が正しくありません","auth/too-many-requests":"ログイン試行が多すぎます。しばらく後に再試行してください"})[l]??"エラーが発生しました。再試行してください";return(l,h)=>(bt(),Lt("div",OR,[re("div",xR,[h[5]||(h[5]=re("h1",null,"📝 Todoリスト",-1)),re("h2",null,Ut(r.value?"ログイン":"アカウント作成"),1),re("form",{onSubmit:Ks(a,["prevent"])},[re("div",MR,[h[3]||(h[3]=re("label",{for:"email"},"メールアドレス",-1)),No(re("input",{id:"email","onUpdate:modelValue":h[0]||(h[0]=d=>e.value=d),type:"email",placeholder:"example@email.com",required:"",autocomplete:"email"},null,512),[[Uo,e.value]])]),re("div",LR,[h[4]||(h[4]=re("label",{for:"password"},"パスワード",-1)),No(re("input",{id:"password","onUpdate:modelValue":h[1]||(h[1]=d=>t.value=d),type:"password",placeholder:"6文字以上",required:"",autocomplete:"current-password"},null,512),[[Uo,t.value]])]),s.value?(bt(),Lt("p",FR,Ut(s.value),1)):Kr("",!0),re("button",{type:"submit",disabled:i.value,class:"submit-btn"},Ut(i.value?"処理中...":r.value?"ログイン":"登録"),9,UR)],32),re("p",BR,[Dp(Ut(r.value?"アカウントをお持ちでない方は":"すでにアカウントをお持ちの方は")+" ",1),re("button",{class:"link-btn",onClick:h[2]||(h[2]=d=>{r.value=!r.value,s.value=""})},Ut(r.value?"新規登録":"ログイン"),1)])])]))}}),a_=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},jR=a_($R,[["__scopeId","data-v-304ef8ac"]]),qR={key:0,class:"loading-screen"},HR={key:2,class:"todo-app"},WR={class:"sticky-top"},KR={class:"app-header"},zR={class:"user-info"},GR={class:"user-email"},QR={class:"progress-section"},JR={class:"progress-labels"},YR={class:"progress-bar-track"},XR={key:0,class:"notification-banner"},ZR={class:"todo-list"},eP=["onClick"],tP=["checked","onChange"],nP={class:"todo-text"},rP=["onClick"],sP={key:0,class:"empty-message"},iP={class:"add-panel-actions"},oP=["disabled"],aP={class:"add-panel-actions"},cP=["disabled"],Ad=100,lP=ap({__name:"App",setup(n){const e=Ue(null),t=Ue(!0),r=Ue([]),s=Ue(""),i=Ue(!1),a=Ue("unsupported"),c=Ue(0),l=Ue(!1),h=Ue(!1);let d=0;const p=zr(()=>h.value?{transform:"translateY(100%)",transition:"transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"}:l.value?{transform:`translateY(${c.value}px)`,transition:"none"}:{transform:`translateY(${c.value}px)`,transition:"transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"}),E=ce=>{d=ce.touches[0].clientY,c.value=0,l.value=!0},b=ce=>{if(!l.value)return;const ue=ce.touches[0].clientY-d;c.value=Math.max(0,ue)},V=()=>{c.value>Ad?(l.value=!1,h.value=!0,setTimeout(()=>{h.value=!1,c.value=0,ln()},300)):(l.value=!1,bc(()=>{c.value=0}))},N=Ue(!1),B=Ue(null),q=Ue(""),K=Ue(0),Q=Ue(!1),G=Ue(!1);let se=0;const he=zr(()=>G.value?{transform:"translateY(100%)",transition:"transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"}:Q.value?{transform:`translateY(${K.value}px)`,transition:"none"}:{transform:`translateY(${K.value}px)`,transition:"transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"}),A=ce=>{se=ce.touches[0].clientY,K.value=0,Q.value=!0},y=ce=>{if(!Q.value)return;const ue=ce.touches[0].clientY-se;K.value=Math.max(0,ue)},m=()=>{K.value>Ad?(Q.value=!1,G.value=!0,setTimeout(()=>{G.value=!1,K.value=0,Ye()},300)):(Q.value=!1,bc(()=>{K.value=0}))};let w=null;const I=zr(()=>r.value.filter(ce=>ce.completed).length),T=zr(()=>r.value.filter(ce=>!ce.completed).length),_=zr(()=>r.value.length===0?0:Math.round(I.value/r.value.length*100)),me=ce=>{"setAppBadge"in navigator&&(ce>0?navigator.setAppBadge(ce):navigator.clearAppBadge())};go(T,me,{immediate:!0});const qe=ce=>{const ue=pd(Hs,"users",ce,"todos"),Oe=wR(ue,AR("createdAt","asc"));w=CR(Oe,Vt=>{r.value=Vt.docs.map(Ur=>({id:Ur.id,text:Ur.data().text,completed:Ur.data().completed}))})},Ne=async()=>{!e.value||s.value.trim()===""||(await PR(pd(Hs,"users",e.value.uid,"todos"),{text:s.value.trim(),completed:!1,createdAt:vR()}),s.value="",i.value=!1)},Ae=async ce=>{e.value&&await RR(Ro(Hs,"users",e.value.uid,"todos",ce))},ye=ce=>{B.value=ce,q.value=ce.text,K.value=0,Q.value=!1,G.value=!1,N.value=!0},Ye=()=>{N.value=!1,B.value=null,q.value="",K.value=0,Q.value=!1},cn=async()=>{!e.value||!B.value||q.value.trim()===""||(await wd(Ro(Hs,"users",e.value.uid,"todos",B.value.id),{text:q.value.trim()}),Ye())},Ct=async ce=>{if(!e.value)return;const ue=r.value.find(Oe=>Oe.id===ce);ue&&await wd(Ro(Hs,"users",e.value.uid,"todos",ce),{completed:!ue.completed})},ft=async()=>{await jI(sa)},fr=async()=>{if("Notification"in window)if(Notification.permission==="default"){const ce=await Notification.requestPermission();a.value=ce,ce==="granted"&&me(T.value)}else a.value=Notification.permission},Pn=()=>{i.value=!0,s.value="",c.value=0,l.value=!1,h.value=!1},ln=()=>{i.value=!1,s.value="",c.value=0,l.value=!1};let yt=null;return Tl(()=>{"Notification"in window&&(a.value=Notification.permission),yt=$I(sa,ce=>{e.value=ce,t.value=!1,w&&(w(),w=null,r.value=[]),ce&&(qe(ce.uid),fr())})}),Il(()=>{yt==null||yt(),w==null||w(),"clearAppBadge"in navigator&&navigator.clearAppBadge()}),(ce,ue)=>t.value?(bt(),Lt("div",qR,[...ue[4]||(ue[4]=[re("p",null,"読み込み中...",-1)])])):e.value?(bt(),Lt("div",HR,[re("div",WR,[re("header",KR,[ue[5]||(ue[5]=re("h1",null,"Todoリスト",-1)),re("div",zR,[re("span",GR,Ut(e.value.email),1),re("button",{class:"logout-btn",onClick:ft},"ログアウト")])]),re("div",QR,[re("div",JR,[re("span",null,"進捗 "+Ut(_.value)+"%",1),re("span",null,Ut(I.value)+" / "+Ut(r.value.length)+" 完了",1)]),re("div",YR,[re("div",{class:"progress-bar-fill",style:ns({width:_.value+"%"})},null,4)])]),a.value==="denied"?(bt(),Lt("div",XR," バッジを表示するには、設定 › Safari › 通知 で許可してください ")):Kr("",!0)]),re("div",ZR,[(bt(!0),Lt(Ft,null,xy(r.value,Oe=>(bt(),Lt("div",{key:Oe.id,class:la(["todo-item",{completed:Oe.completed}]),onClick:Vt=>ye(Oe)},[re("span",{onClick:ue[0]||(ue[0]=Ks(()=>{},["stop"]))},[re("input",{type:"checkbox",checked:Oe.completed,onChange:Vt=>Ct(Oe.id)},null,40,tP)]),re("span",nP,Ut(Oe.text),1),re("button",{class:"delete-btn",onClick:Ks(Vt=>Ae(Oe.id),["stop"])},"削除",8,rP)],10,eP))),128)),r.value.length===0?(bt(),Lt("p",sP," タスクがありません。＋ボタンで追加してください。 ")):Kr("",!0)]),re("button",{class:"fab",onClick:Pn,"aria-label":"タスクを追加"},[...ue[6]||(ue[6]=[re("span",{class:"fab-icon"},"＋",-1)])]),lt(sc,{name:"fade"},{default:fo(()=>[i.value||N.value?(bt(),Lt("div",{key:0,class:"overlay",onClick:ue[1]||(ue[1]=Oe=>i.value?ln():Ye())})):Kr("",!0)]),_:1}),lt(sc,{name:h.value?"":"slide-up"},{default:fo(()=>[i.value?(bt(),Lt("div",{key:0,class:"add-panel",style:ns(p.value),onTouchstart:E,onTouchmove:Ks(b,["prevent"]),onTouchend:V},[ue[7]||(ue[7]=re("div",{class:"add-panel-handle"},null,-1)),ue[8]||(ue[8]=re("h2",{class:"add-panel-title"},"タスクを追加",-1)),No(re("input",{"onUpdate:modelValue":ue[2]||(ue[2]=Oe=>s.value=Oe),type:"text",class:"add-panel-input",placeholder:"新しいタスクを入力...",onKeyup:qh(Ne,["enter"]),autofocus:""},null,544),[[Uo,s.value]]),re("div",iP,[re("button",{class:"cancel-btn",onClick:ln},"キャンセル"),re("button",{class:"add-btn",onClick:Ne,disabled:s.value.trim()===""},"追加",8,oP)])],36)):Kr("",!0)]),_:1},8,["name"]),lt(sc,{name:G.value?"":"slide-up"},{default:fo(()=>[N.value?(bt(),Lt("div",{key:0,class:"add-panel",style:ns(he.value),onTouchstart:A,onTouchmove:Ks(y,["prevent"]),onTouchend:m},[ue[9]||(ue[9]=re("div",{class:"add-panel-handle"},null,-1)),ue[10]||(ue[10]=re("h2",{class:"add-panel-title"},"タスクを編集",-1)),No(re("input",{"onUpdate:modelValue":ue[3]||(ue[3]=Oe=>q.value=Oe),type:"text",class:"add-panel-input",placeholder:"タスクを入力...",onKeyup:qh(cn,["enter"]),autofocus:""},null,544),[[Uo,q.value]]),re("div",aP,[re("button",{class:"cancel-btn",onClick:Ye},"キャンセル"),re("button",{class:"add-btn",onClick:cn,disabled:q.value.trim()===""},"保存",8,cP)])],36)):Kr("",!0)]),_:1},8,["name"])])):(bt(),Cp(jR,{key:1}))}}),uP=a_(lP,[["__scopeId","data-v-d78f703f"]]);nv(uP).mount("#app");
