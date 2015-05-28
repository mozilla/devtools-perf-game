var defs = {

  teamColor: ["#ff4444", "#00aaff"],

  frozenSprite: [193, 86, 11, 19],

  buttons: {
    "fighter": [4, 345, 64, 64],
    "speed": [132, 345, 64, 64],
    "life": [68, 345, 64, 64],
    "damage": [196, 345, 64, 64]
  },

  ships: {

    "fighter": {

      preference: ["small"],
      cooldown: 0.5,
      damage: 1,
      hp: 10,
      sprite: [407, 18, 32, 32],
      price: 1,
      speed: 80

    },

    "freelancer": {

      cooldown: 0.5,
      damage: 1,
      hp: 10,
      sprite: [367, 59, 31, 32],
      speed: 80
      
    },


    "creep1": {

      preference: ["big"],
      damage: 2,
      cooldown: 2,
      hp: 4,
      sprite: [444, 23, 22, 21],
      price: 5,
      speed: 60

    },

    "creep2": {

      preference: ["big"],
      damage: 2,
      cooldown: 2,
      hp: 10,
      sprite: [471, 23, 32, 23],
      price: 5,
      speed: 80

    },

    "creep3": {

      preference: ["big"],
      damage: 4,
      cooldown: 2,
      hp: 30,
      sprite: [503, 19, 32, 29],
      price: 5,
      speed: 50

    },

    "creep4": {

      preference: ["big"],
      damage: 6,
      cooldown: 2,
      hp: 50,
      sprite: [535, 18, 32, 32],
      price: 5,
      speed: 50

    },

    "boss": {

      damage: 10,
      cooldown: 2,
      hp: 500,
      sprite: [456, 53, 64, 64],
      speed: 32,
      boss: true

    }

  },

  tooltips: {

    "fighter": "build a fighter",
    "speed": "upgrade fighters speed",
    "life": "upgrade fighters life",
    "damage": "upgrade fighters damage"

  },

  bonuses: {
    shield: "asteroids shield",
    laser: "cursor laser",
    magnet: "coin magnet"
  }

};
/**
 * @license
 * lodash 3.8.0 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=n===n,e=t===t;if(n>t||!r||n===w&&e)return 1;if(n<t||!e||t===w&&r)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return typeof n=="string"?n:null==n?"":n+""}function o(n){return n.charCodeAt(0)}function i(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function f(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function a(t,r){return n(t.a,r.a)||t.b-r.b}function c(n){return $n[n]}function l(n){return Ln[n]}function s(n){return"\\"+Mn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);

}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return zn[n]}function m(_){function $n(n){if(h(n)&&!(To(n)||n instanceof Bn)){if(n instanceof zn)return n;if(Ge.call(n,"__chain__")&&Ge.call(n,"__wrapped__"))return Lr(n)}return new zn(n)}function Ln(){}function zn(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function Bn(n){this.__wrapped__=n,this.__actions__=null,this.__dir__=1,this.__filtered__=false,this.__iteratees__=null,this.__takeCount__=Iu,this.__views__=null}function Mn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:du(null),set:new lu};t--;)this.push(n[t])}function Pn(n,t){var r=n.data;return(typeof t=="string"||se(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Ue(e));++r<e;)t[r]=n[r];return t}function Kn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Vn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Gn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Jn(n,t){for(var r=-1,e=n.length,u=Ue(e);++r<e;)u[r]=t(n[r],r,n);return u}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;return false}function Qn(n,t){return n===w?t:n}function nt(n,t,r,e){
return n!==w&&Ge.call(e,r)?n:t}function tt(n,t,r){var e=Ko(t);fu.apply(e,Zu(t));for(var u=-1,o=e.length;++u<o;){var i=e[u],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function rt(n,t){for(var r=-1,e=null==n,u=!e&&jr(n),o=u&&n.length,i=t.length,f=Ue(i);++r<i;){var a=t[r];f[r]=u?kr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){var e=typeof n;return"function"==e?t===w?n:zt(n,t,r):null==n?Re:"object"==e?wt(n):t===w?Te(n):bt(n,t);

}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!se(n))return n;if(e=To(n)){if(f=wr(n),!t)return qn(n,f)}else{var a=Xe.call(n),c=a==K;if(a!=Y&&a!=B&&(!c||u))return Nn[a]?xr(n,a,t):u?n:{};if(f=br(c?{}:n),!t)return $u(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Kn:ht)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){if(typeof n!="function")throw new Pe(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){
var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=mr(),f=i==r,a=f&&200<=t.length?qu(t):null,c=t.length;a&&(i=Pn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return zu(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t){var r=[];return zu(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function lt(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function st(n,t,r){
for(var e=-1,u=n.length,o=-1,i=[];++e<u;){var f=n[e];if(h(f)&&jr(f)&&(r||To(f)||ae(f))){t&&(f=st(f,t,r));for(var a=-1,c=f.length;++a<c;)i[++o]=f[a]}else r||(i[++o]=f)}return i}function pt(n,t){Mu(n,t,me)}function ht(n,t){return Mu(n,t,Ko)}function _t(n,t){return Du(n,t,Ko)}function vt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];No(n[i])&&(o[++u]=i)}return o}function gt(n,t,r){if(null!=n){r!==w&&r in Fr(n)&&(t=[r]),r=-1;for(var e=t.length;null!=n&&++r<e;)n=n[t[r]];return r&&r==e?n:w}
}function yt(n,t,r,e,u,o){if(n===t)return true;var i=typeof n,f=typeof t;if("function"!=i&&"object"!=i&&"function"!=f&&"object"!=f||null==n||null==t)n=n!==n&&t!==t;else n:{var i=yt,f=To(n),a=To(t),c=M,l=M;f||(c=Xe.call(n),c==B?c=Y:c!=Y&&(f=ge(n))),a||(l=Xe.call(t),l==B?l=Y:l!=Y&&ge(t));var s=c==Y,a=l==Y,l=c==l;if(!l||f||s){if(!e&&(c=s&&Ge.call(n,"__wrapped__"),a=a&&Ge.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){
n=o[c]==t;break n}u.push(n),o.push(t),n=(f?_r:gr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=vr(n,t,c)}return n}function dt(n,t,r,e,u){for(var o=-1,i=t.length,f=!u;++o<i;)if(f&&e[o]?r[o]!==n[t[o]]:!(t[o]in n))return false;for(o=-1;++o<i;){var a=t[o],c=n[a],l=r[o];if(f&&e[o]?a=c!==w||a in n:(a=u?u(c,l,a):w,a===w&&(a=yt(l,c,u,true))),!a)return false}return true}function mt(n,t){var r=-1,e=jr(n)?Ue(n.length):[];return zu(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function wt(n){var t=Ko(n),r=t.length;if(!r)return Ie(true);

if(1==r){var e=t[0],u=n[e];if(Cr(u))return function(n){return null==n?false:n[e]===u&&(u!==w||e in Fr(n))}}for(var o=Ue(r),i=Ue(r);r--;)u=n[t[r]],o[r]=u,i[r]=Cr(u);return function(n){return null!=n&&dt(Fr(n),t,o,i)}}function bt(n,t){var r=To(n),e=Er(n)&&Cr(t),u=n+"";return n=$r(n),function(o){if(null==o)return false;var i=u;if(o=Fr(o),!(!r&&e||i in o)){if(o=1==n.length?o:gt(o,It(n,0,-1)),null==o)return false;i=Pr(n),o=Fr(o)}return o[i]===t?t!==w||i in o:yt(t,o[i],null,true)}}function xt(n,t,r,e,u){if(!se(n))return n;

var o=jr(t)&&(To(t)||ge(t));if(!o){var i=Ko(t);fu.apply(i,Zu(t))}return Kn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,jr(_)&&(To(_)||ge(_))?v=To(p)?p:jr(p)?qn(p):[]:Fo(_)||ae(_)?v=ae(p)?ye(p):Fo(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=xt(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),!o&&l===w||!s&&(l===l?l===c:c!==c)||(n[a]=l);

}),n}function At(n){return function(t){return null==t?w:t[n]}}function jt(n){var t=n+"";return n=$r(n),function(r){return gt(r,n,t)}}function kt(n,t){for(var r=n?t.length:0;r--;){var e=parseFloat(t[r]);if(e!=u&&kr(e)){var u=e;pu.call(n,e,1)}}}function Ot(n,t){return n+uu(Ou()*(t-n+1))}function Et(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function It(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,
r=Ue(u);++e<u;)r[e]=n[e+t];return r}function Rt(n,t){var r;return zu(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ct(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=dr(),o=-1;return r=Jn(r,function(n){return u(n)}),t=mt(t,function(n){return{a:Jn(r,function(t){return t(n)}),b:++o,c:n}}),Ct(t,function(t,r){var u;n:{u=-1;for(var o=t.a,i=r.a,f=o.length,a=e.length;++u<f;){var c=n(o[u],i[u]);if(c){u=u<a?c*(e[u]?1:-1):c;break n}}u=t.b-r.b}return u})}function St(n,t){
var r=0;return zu(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function Tt(n,t){var e=-1,u=mr(),o=n.length,i=u==r,f=i&&200<=o,a=f?qu():null,c=[];a?(u=Pn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ut(n,t){for(var r=-1,e=t.length,u=Ue(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?It(n,e?0:o,e?o+1:u):It(n,e?o+1:0,e?u:o)}function Ft(n,t){var r=n;r instanceof Bn&&(r=r.value());for(var e=-1,u=t.length;++e<u;){var r=[r],o=t[e];fu.apply(r,o.args),r=o.func.apply(o.thisArg,r)}return r}function $t(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Wu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)?e=o+1:u=o}return u}return Lt(n,t,Re,r)}function Lt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=t===w;u<o;){var a=uu((u+o)/2),c=r(n[a]),l=c===c;(i?l||e:f?l&&(e||c!==w):e?c<=t:c<t)?u=a+1:o=a;

}return xu(o,Cu)}function zt(n,t,r){if(typeof n!="function")return Re;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Bt(n){return tu.call(n,0)}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Ue(o+f);++i<f;)a[i]=t[i];

for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function Dt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Ue(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=dr(e,u,3),To(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else zu(r,function(t,r,u){n(o,t,e(t,r,u),u)});return o}}function qt(n){return fe(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u&&r[u-2],i=2<u&&r[2],f=1<u&&r[u-1];

for(typeof o=="function"?(o=zt(o,f,5),u-=2):(o=typeof f=="function"?f:null,u-=o?1:0),i&&Or(r[0],r[1],i)&&(o=3>u?null:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Kt(n,t){return function(r,e){var u=r?Yu(r):0;if(!Rr(u))return n(r,e);for(var o=t?u:-1,i=Fr(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Vt(n){return function(t,r,e){var u=Fr(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Yn&&this instanceof r?e:n).apply(t,arguments);

}var e=Gt(n);return r}function Zt(n){return function(t){var r=-1;t=Oe(be(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Gt(n){return function(){var t=Lu(n.prototype),r=n.apply(t,arguments);return se(r)?r:t}}function Jt(n){function t(r,e,u){return u&&Or(r,e,u)&&(e=null),r=hr(r,n,null,null,null,null,null,e),r.placeholder=t.placeholder,r}return t}function Xt(n,t){return function(r,e,u){u&&Or(r,e,u)&&(e=null);var i=dr(),f=null==e;if(i===ut&&f||(f=false,e=i(e,u,3)),f){if(e=To(r),e||!ve(r))return n(e?r:Nr(r));

e=o}return yr(r,e,t)}}function Ht(n,r){return function(e,u,o){return u=dr(u,o,3),To(e)?(u=t(e,u,r),-1<u?e[u]:w):lt(e,u,n)}}function Qt(n){return function(r,e,u){return r&&r.length?(e=dr(e,u,3),t(r,e,n)):-1}}function nr(n){return function(t,r,e){return r=dr(r,e,3),lt(t,r,n,true)}}function tr(n){return function(){var t=arguments.length;if(!t)return function(){return arguments[0]};for(var r,e=n?t:-1,u=0,o=Ue(t);n?e--:++e<t;){var i=o[u++]=arguments[e];if(typeof i!="function")throw new Pe(L);var f=r?"":Vu(i);

r="wrapper"==f?new zn([]):r}for(e=r?-1:t;++e<t;)i=o[e],f=Vu(i),r=(u="wrapper"==f?Ku(i):null)&&Ir(u[0])&&u[1]==(R|k|E|C)&&!u[4].length&&1==u[9]?r[Vu(u[0])].apply(r,u[3]):1==i.length&&Ir(i)?r[f]():r.thru(i);return function(){var n=arguments;if(r&&1==n.length&&To(n[0]))return r.plant(n[0]).value();for(var e=0,n=o[e].apply(this,n);++e<t;)n=o[e].call(this,n);return n}}}function rr(n,t){return function(r,e,u){return typeof e=="function"&&u===w&&To(r)?n(r,e):t(r,zt(e,u,3))}}function er(n){return function(t,r,e){
return(typeof r!="function"||e!==w)&&(r=zt(r,e,3)),n(t,r,me)}}function ur(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=zt(r,e,3)),n(t,r)}}function or(n){return function(t,r,e){var u={};return r=dr(r,e,3),ht(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ir(n){return function(t,r,e){return t=u(t),(n?t:"")+lr(t,r,e)+(n?"":t)}}function fr(n){var t=fe(function(r,e){var u=v(e,t.placeholder);return hr(r,n,null,e,u)});return t}function ar(n,t){return function(r,e,u,o){
var i=3>arguments.length;return typeof e=="function"&&o===w&&To(r)?n(r,e,u,i):Et(r,dr(e,o,4),u,i,t)}}function cr(n,t,r,e,u,o,i,f,a,c){function l(){for(var b=arguments.length,j=b,k=Ue(b);j--;)k[j]=arguments[j];if(e&&(k=Mt(k,e,u)),o&&(k=Dt(k,o,i)),_||y){var j=l.placeholder,O=v(k,j),b=b-O.length;if(b<c){var R=f?qn(f):null,b=bu(c-b,0),C=_?O:null,O=_?null:O,W=_?k:null,k=_?null:k;return t|=_?E:I,t&=~(_?I:E),g||(t&=~(x|A)),k=[n,t,r,W,C,k,O,R,a,b],R=cr.apply(w,k),Ir(n)&&Gu(R,k),R.placeholder=j,R}}if(j=p?r:this,
h&&(n=j[m]),f)for(R=k.length,b=xu(f.length,R),C=qn(k);b--;)O=f[b],k[b]=kr(O,R)?C[O]:w;return s&&a<k.length&&(k.length=a),(this&&this!==Yn&&this instanceof l?d||Gt(n):n).apply(j,k)}var s=t&R,p=t&x,h=t&A,_=t&k,g=t&j,y=t&O,d=!h&&Gt(n),m=n;return l}function lr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",je(r,ru(t/r.length)).slice(0,t)):""}function sr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Ue(f+c);++a<c;)l[a]=e[a];for(;f--;)l[a++]=arguments[++t];return(this&&this!==Yn&&this instanceof u?i:n).apply(o?r:this,l);

}var o=t&x,i=Gt(n);return u}function pr(n){return function(t,r,e,u){var o=dr(e);return o===ut&&null==e?$t(t,r,n):Lt(t,r,o(e,u,1),n)}}function hr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Pe(L);var c=e?e.length:0;if(c||(t&=~(E|I),e=u=null),c-=u?u.length:0,t&I){var l=e,s=u;e=u=null}var p=a?null:Ku(n);return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==R&&e==k||t==R&&e==C&&r[7].length<=p[8]||t==(R|C)&&e==k,(f<R||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),
r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?Dt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&R&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Pu:Gu)(t==x?Yt(r[0],r[2]):t!=E&&t!=(x|E)||r[4].length?cr.apply(w,r):sr.apply(w,r),r)}function _r(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length,l=true;if(a!=c&&(!u||c<=a))return false;for(;l&&++f<a;){var s=n[f],p=t[f],l=w;if(e&&(l=u?e(p,s,f):e(s,p,f)),
l===w)if(u)for(var h=c;h--&&(p=t[h],!(l=s&&s===p||r(s,p,e,u,o,i))););else l=s&&s===p||r(s,p,e,u,o,i)}return!!l}function vr(n,t,r){switch(r){case D:case P:return+n==+t;case q:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Z:case G:return n==t+""}return false}function gr(n,t,r,e,u,o,i){var f=Ko(n),a=f.length,c=Ko(t).length;if(a!=c&&!u)return false;for(var c=u,l=-1;++l<a;){var s=f[l],p=u?s in t:Ge.call(t,s);if(p){var h=n[s],_=t[s],p=w;e&&(p=u?e(_,h,s):e(h,_,s)),p===w&&(p=h&&h===_||r(h,_,e,u,o,i));

}if(!p)return false;c||(c="constructor"==s)}return c||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function yr(n,t,r){var e=r?Iu:Eu,u=e,o=u;return zu(n,function(n,i,f){i=t(n,i,f),((r?i<u:i>u)||i===e&&i===o)&&(u=i,o=n)}),o}function dr(n,t,r){var e=$n.callback||Ee,e=e===Ee?ut:e;return r?e(n,t,r):e}function mr(n,t,e){var u=$n.indexOf||Dr,u=u===Dr?r:u;return n?u(n,t,e):u}function wr(n){var t=n.length,r=new n.constructor(t);

return t&&"string"==typeof n[0]&&Ge.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function br(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Be),new n}function xr(n,t,r){var e=n.constructor;switch(t){case J:return Bt(n);case D:case P:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Bt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Z:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u;

}function Ar(n,t,r){return null==n||Er(t,n)||(t=$r(t),n=1==t.length?n:gt(n,It(t,0,-1)),t=Pr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function jr(n){return null!=n&&Rr(Yu(n))}function kr(n,t){return n=+n,t=null==t?Tu:t,-1<n&&0==n%1&&n<t}function Or(n,t,r){if(!se(r))return false;var e=typeof t;return("number"==e?jr(r)&&kr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Er(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:To(n)?false:!yn.test(n)||null!=t&&n in Fr(t);

}function Ir(n){var t=Vu(n);return!!t&&n===$n[t]&&t in Bn.prototype}function Rr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Tu}function Cr(n){return n===n&&!se(n)}function Wr(n,t){n=Fr(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Sr(n,t){var r={};return pt(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Tr(n){var t;if(!h(n)||Xe.call(n)!=Y||!(Ge.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return pt(n,function(n,t){
r=t}),r===w||Ge.call(n,r)}function Ur(n){for(var t=me(n),r=t.length,e=r&&n.length,u=$n.support,u=e&&Rr(e)&&(To(n)||u.nonEnumArgs&&ae(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&kr(f,e)||Ge.call(n,f))&&i.push(f)}return i}function Nr(n){return null==n?[]:jr(n)?se(n)?n:Be(n):we(n)}function Fr(n){return se(n)?n:Be(n)}function $r(n){if(To(n))return n;var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Lr(n){return n instanceof Bn?n.clone():new zn(n.__wrapped__,n.__chain__,qn(n.__actions__));

}function zr(n,t,r){return n&&n.length?((r?Or(n,t,r):null==t)&&(t=1),It(n,0>t?0:t)):[]}function Br(n,t,r){var e=n?n.length:0;return e?((r?Or(n,t,r):null==t)&&(t=1),t=e-(+t||0),It(n,0,0>t?0:t)):[]}function Mr(n){return n?n[0]:w}function Dr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=$t(n,t),n=n[e],(t===t?t===n:n!==n)?e:-1;return r(n,t,e||0)}function Pr(n){var t=n?n.length:0;return t?n[t-1]:w}function qr(n){return zr(n,1)}function Kr(n,t,e,u){
if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Or(n,t,u)?null:t,t=false);var o=dr();if((o!==ut||null!=e)&&(e=o(e,u,3)),t&&mr()==r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=Tt(n,e);return n}function Vr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Gn(n,function(n){return jr(n)?(r=bu(n.length,r),true):void 0});for(var e=Ue(r);++t<r;)e[t]=Jn(n,At(t));return e}function Yr(n,t,r){return n&&n.length?(n=Vr(n),null==t?n:(t=zt(t,r,4),
Jn(n,function(n){return Xn(n,t,w,true)}))):[]}function Zr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||To(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Gr(n){return n=$n(n),n.__chain__=true,n}function Jr(n,t,r){return t.call(r,n)}function Xr(n,t,r){var e=To(n)?Vn:at;return r&&Or(n,t,r)&&(t=null),(typeof t!="function"||r!==w)&&(t=dr(t,r,3)),e(n,t)}function Hr(n,t,r){var e=To(n)?Gn:ct;return t=dr(t,r,3),e(n,t)}function Qr(n,t,r,e){var u=n?Yu(n):0;return Rr(u)||(n=we(n),
u=n.length),u?(r=typeof r!="number"||e&&Or(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!To(n)&&ve(n)?r<u&&-1<n.indexOf(t,r):-1<mr(n,t,r)):false}function ne(n,t,r){var e=To(n)?Jn:mt;return t=dr(t,r,3),e(n,t)}function te(n,t,r){return(r?Or(n,t,r):null==t)?(n=Nr(n),t=n.length,0<t?n[Ot(0,t-1)]:w):(n=re(n),n.length=xu(0>t?0:+t||0,n.length),n)}function re(n){n=Nr(n);for(var t=-1,r=n.length,e=Ue(r);++t<r;){var u=Ot(0,t);t!=u&&(e[t]=e[u]),e[u]=n[t]}return e}function ee(n,t,r){var e=To(n)?Hn:Rt;return r&&Or(n,t,r)&&(t=null),
(typeof t!="function"||r!==w)&&(t=dr(t,r,3)),e(n,t)}function ue(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Pe(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}}function oe(n,t,r){function e(){var r=t-(wo()-c);0>=r||r>t?(f&&eu(f),r=p,f=s=p=w,r&&(h=wo(),a=n.apply(l,i),s||f||(i=l=null))):s=su(e,r)}function u(){s&&eu(s),f=s=p=w,(v||_!==t)&&(h=wo(),a=n.apply(l,i),s||f||(i=l=null))}function o(){if(i=arguments,c=wo(),l=this,p=v&&(s||!g),
!1===_)var r=g&&!s;else{f||g||(h=c);var o=_-(c-h),y=0>=o||o>_;y?(f&&(f=eu(f)),h=c,a=n.apply(l,i)):f||(f=su(u,o))}return y&&s?s=eu(s):s||t===_||(s=su(e,t)),r&&(y=true,a=n.apply(l,i)),!y||s||f||(i=l=null),a}var i,f,a,c,l,s,p,h=0,_=false,v=true;if(typeof n!="function")throw new Pe(L);if(t=0>t?0:+t||0,true===r)var g=true,v=false;else se(r)&&(g=r.leading,_="maxWait"in r&&bu(+r.maxWait||0,t),v="trailing"in r?r.trailing:v);return o.cancel=function(){s&&eu(s),f&&eu(f),f=s=p=w},o}function ie(n,t){function r(){var e=arguments,u=r.cache,o=t?t.apply(this,e):e[0];

return u.has(o)?u.get(o):(e=n.apply(this,e),u.set(o,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Pe(L);return r.cache=new ie.Cache,r}function fe(n,t){if(typeof n!="function")throw new Pe(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Ue(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);case 2:return n.call(this,r[0],r[1],o)}for(u=Ue(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u);

}}function ae(n){return h(n)&&jr(n)&&Xe.call(n)==B}function ce(n){return!!n&&1===n.nodeType&&h(n)&&-1<Xe.call(n).indexOf("Element")}function le(n){return h(n)&&typeof n.message=="string"&&Xe.call(n)==q}function se(n){var t=typeof n;return"function"==t||!!n&&"object"==t}function pe(n){return null==n?false:Xe.call(n)==K?Qe.test(Ze.call(n)):h(n)&&En.test(n)}function he(n){return typeof n=="number"||h(n)&&Xe.call(n)==V}function _e(n){return h(n)&&Xe.call(n)==Z}function ve(n){return typeof n=="string"||h(n)&&Xe.call(n)==G;

}function ge(n){return h(n)&&Rr(n.length)&&!!Un[Xe.call(n)]}function ye(n){return et(n,me(n))}function de(n){return vt(n,me(n))}function me(n){if(null==n)return[];se(n)||(n=Be(n));for(var t=n.length,t=t&&Rr(t)&&(To(n)||Fu.nonEnumArgs&&ae(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Ue(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&kr(i,t)||"constructor"==i&&(r||!Ge.call(n,i))||u.push(i);return u}function we(n){return Ut(n,Ko(n))}function be(n){return(n=u(n))&&n.replace(In,c).replace(xn,"");

}function xe(n){return(n=u(n))&&bn.test(n)?n.replace(wn,"\\$&"):n}function Ae(n,t,r){return r&&Or(n,t,r)&&(t=0),ku(n,t)}function je(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=uu(t/2),n+=n;while(t);return r}function ke(n,t,r){var e=n;return(n=u(n))?(r?Or(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(i(n,t),f(n,t)+1)):n}function Oe(n,t,r){return r&&Or(n,t,r)&&(t=null),n=u(n),n.match(t||Wn)||[]}function Ee(n,t,r){return r&&Or(n,t,r)&&(t=null),h(n)?Ce(n):ut(n,t)}function Ie(n){
return function(){return n}}function Re(n){return n}function Ce(n){return wt(ot(n,true))}function We(n,t,r){if(null==r){var e=se(t),u=e&&Ko(t);((u=u&&u.length&&vt(t,u))?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=vt(t,Ko(t)));var o=true,e=-1,i=No(n),f=u.length;false===r?o=false:se(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,
thisArg:n}),e.__chain__=r,e}return r=[this.value()],fu.apply(r,arguments),t.apply(n,r)}}(a))}return n}function Se(){}function Te(n){return Er(n)?At(n):jt(n)}_=_?Zn.defaults(Yn.Object(),_,Zn.pick(Yn,Tn)):Yn;var Ue=_.Array,Ne=_.Date,Fe=_.Error,$e=_.Function,Le=_.Math,ze=_.Number,Be=_.Object,Me=_.RegExp,De=_.String,Pe=_.TypeError,qe=Ue.prototype,Ke=Be.prototype,Ve=De.prototype,Ye=(Ye=_.window)&&Ye.document,Ze=$e.prototype.toString,Ge=Ke.hasOwnProperty,Je=0,Xe=Ke.toString,He=_._,Qe=Me("^"+xe(Xe).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nu=pe(nu=_.ArrayBuffer)&&nu,tu=pe(tu=nu&&new nu(0).slice)&&tu,ru=Le.ceil,eu=_.clearTimeout,uu=Le.floor,ou=pe(ou=Be.getOwnPropertySymbols)&&ou,iu=pe(iu=Be.getPrototypeOf)&&iu,fu=qe.push,au=pe(au=Be.preventExtensions)&&au,cu=Ke.propertyIsEnumerable,lu=pe(lu=_.Set)&&lu,su=_.setTimeout,pu=qe.splice,hu=pe(hu=_.Uint8Array)&&hu,_u=pe(_u=_.WeakMap)&&_u,vu=function(){
try{var n=pe(n=_.Float64Array)&&n,t=new n(new nu(10),0,1)&&n}catch(r){}return t}(),gu=function(){var n=au&&pe(n=Be.assign)&&n;try{if(n){var t=au({1:0});t[0]=1}}catch(r){try{n(t,"xo")}catch(e){}return!t[1]&&n}return false}(),yu=pe(yu=Ue.isArray)&&yu,du=pe(du=Be.create)&&du,mu=_.isFinite,wu=pe(wu=Be.keys)&&wu,bu=Le.max,xu=Le.min,Au=pe(Au=Ne.now)&&Au,ju=pe(ju=ze.isFinite)&&ju,ku=_.parseInt,Ou=Le.random,Eu=ze.NEGATIVE_INFINITY,Iu=ze.POSITIVE_INFINITY,Ru=Le.pow(2,32)-1,Cu=Ru-1,Wu=Ru>>>1,Su=vu?vu.BYTES_PER_ELEMENT:0,Tu=Le.pow(2,53)-1,Uu=_u&&new _u,Nu={},Fu=$n.support={};

!function(n){function t(){this.x=n}var r=arguments,e=[];t.prototype={valueOf:n,y:n};for(var u in new t)e.push(u);Fu.funcDecomp=/\bthis\b/.test(function(){return this}),Fu.funcNames=typeof $e.name=="string";try{Fu.dom=11===Ye.createDocumentFragment().nodeType}catch(o){Fu.dom=false}try{Fu.nonEnumArgs=!cu.call(r,1)}catch(i){Fu.nonEnumArgs=true}}(1,0),$n.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:$n}};var $u=gu||function(n,t){return null==t?n:et(t,Zu(t),et(t,Ko(t),n))},Lu=function(){
function n(){}return function(t){if(se(t)){n.prototype=t;var r=new n;n.prototype=null}return r||_.Object()}}(),zu=Kt(ht),Bu=Kt(_t,true),Mu=Vt(),Du=Vt(true),Pu=Uu?function(n,t){return Uu.set(n,t),n}:Re;tu||(Bt=nu&&hu?function(n){var t=n.byteLength,r=vu?uu(t/Su):0,e=r*Su,u=new nu(t);if(r){var o=new vu(u,0,r);o.set(new vu(n,0,r))}return t!=e&&(o=new hu(u,e),o.set(new hu(n,e))),u}:Ie(null));var qu=du&&lu?function(n){return new Dn(n)}:Ie(null),Ku=Uu?function(n){return Uu.get(n)}:Se,Vu=function(){return Fu.funcNames?"constant"==Ie.name?At("name"):function(n){
for(var t=n.name,r=Nu[t],e=r?r.length:0;e--;){var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}:Ie("")}(),Yu=At("length"),Zu=ou?function(n){return ou(Fr(n))}:Ie([]),Gu=function(){var n=0,t=0;return function(r,e){var u=wo(),o=U-(u-t);if(t=u,0<o){if(++n>=T)return r}else n=0;return Pu(r,e)}}(),Ju=fe(function(n,t){return jr(n)?ft(n,st(t,false,true)):[]}),Xu=Qt(),Hu=Qt(true),Qu=fe(function(t,r){r=st(r);var e=rt(t,r);return kt(t,r.sort(n)),e}),no=pr(),to=pr(true),ro=fe(function(n){return Tt(st(n,false,true));

}),eo=fe(function(n,t){return jr(n)?ft(n,t):[]}),uo=fe(Vr),oo=fe(function(n){var t=n.length,r=n[t-2],e=n[t-1];return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Yr(n,r,e)}),io=fe(function(n,t){return rt(n,st(t))}),fo=Pt(function(n,t,r){Ge.call(n,r)?++n[r]:n[r]=1}),ao=Ht(zu),co=Ht(Bu,true),lo=rr(Kn,zu),so=rr(function(n,t){for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Bu),po=Pt(function(n,t,r){Ge.call(n,r)?n[r].push(t):n[r]=[t]}),ho=Pt(function(n,t,r){
n[r]=t}),_o=fe(function(n,t,r){var e=-1,u=typeof t=="function",o=Er(t),i=jr(n)?Ue(n.length):[];return zu(n,function(n){var f=u?t:o&&null!=n&&n[t];i[++e]=f?f.apply(n,r):Ar(n,t,r)}),i}),vo=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),go=ar(Xn,zu),yo=ar(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Bu),mo=fe(function(n,t){if(null==n)return[];var r=t[2];return r&&Or(t[0],t[1],r)&&(t.length=1),Wt(n,st(t),[])}),wo=Au||function(){return(new Ne).getTime();

},bo=fe(function(n,t,r){var e=x;if(r.length)var u=v(r,bo.placeholder),e=e|E;return hr(n,e,t,r,u)}),xo=fe(function(n,t){t=t.length?st(t):de(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=hr(n[u],x,n)}return n}),Ao=fe(function(n,t,r){var e=x|A;if(r.length)var u=v(r,Ao.placeholder),e=e|E;return hr(t,e,n,r,u)}),jo=Jt(k),ko=Jt(O),Oo=fe(function(n,t){return it(n,1,t)}),Eo=fe(function(n,t,r){return it(n,t,r)}),Io=tr(),Ro=tr(true),Co=fr(E),Wo=fr(I),So=fe(function(n,t){return hr(n,C,null,null,null,st(t));

}),To=yu||function(n){return h(n)&&Rr(n.length)&&Xe.call(n)==M};Fu.dom||(ce=function(n){return!!n&&1===n.nodeType&&h(n)&&!Fo(n)});var Uo=ju||function(n){return typeof n=="number"&&mu(n)},No=e(/x/)||hu&&!e(hu)?function(n){return Xe.call(n)==K}:e,Fo=iu?function(n){if(!n||Xe.call(n)!=Y)return false;var t=n.valueOf,r=pe(t)&&(r=iu(t))&&iu(r);return r?n==r||iu(n)==r:Tr(n)}:Tr,$o=qt(function(n,t,r){return r?tt(n,t,r):$u(n,t)}),Lo=fe(function(n){var t=n[0];return null==t?t:(n.push(Qn),$o.apply(w,n))}),zo=nr(ht),Bo=nr(_t),Mo=er(Mu),Do=er(Du),Po=ur(ht),qo=ur(_t),Ko=wu?function(n){
var t=null!=n&&n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&jr(n)?Ur(n):se(n)?wu(n):[]}:Ur,Vo=or(true),Yo=or(),Zo=qt(xt),Go=fe(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Jn(st(t),De),Wr(n,ft(me(n),t));var r=zt(t[0],t[1],3);return Sr(n,function(n,t,e){return!r(n,t,e)})}),Jo=fe(function(n,t){return null==n?{}:"function"==typeof t[0]?Sr(n,zt(t[0],t[1],3)):Wr(n,st(t))}),Xo=Zt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);

}),Ho=Zt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Qo=ir(),ni=ir(true);8!=ku(Sn+"08")&&(Ae=function(n,t,r){return(r?Or(n,t,r):null==t)?t=0:t&&(t=+t),n=ke(n),ku(n,t||(On.test(n)?16:10))});var ti=Zt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),ri=Zt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),ei=fe(function(n,t){try{return n.apply(w,t)}catch(r){return le(r)?r:new Fe(r)}}),ui=fe(function(n,t){return function(r){return Ar(r,n,t)}}),oi=fe(function(n,t){
return function(r){return Ar(n,r,t)}}),ii=Xt(function(n){for(var t=-1,r=n.length,e=Eu;++t<r;){var u=n[t];u>e&&(e=u)}return e}),fi=Xt(function(n){for(var t=-1,r=n.length,e=Iu;++t<r;){var u=n[t];u<e&&(e=u)}return e},true);return $n.prototype=Ln.prototype,zn.prototype=Lu(Ln.prototype),zn.prototype.constructor=zn,Bn.prototype=Lu(Ln.prototype),Bn.prototype.constructor=Bn,Mn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Mn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n];

},Mn.prototype.has=function(n){return"__proto__"!=n&&Ge.call(this.__data__,n)},Mn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||se(n)?t.set.add(n):t.hash[n]=true},ie.Cache=Mn,$n.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Pe(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},$n.ary=function(n,t,r){return r&&Or(n,t,r)&&(t=null),
t=n&&null==t?n.length:bu(+t||0,0),hr(n,R,null,null,null,null,t)},$n.assign=$o,$n.at=io,$n.before=ue,$n.bind=bo,$n.bindAll=xo,$n.bindKey=Ao,$n.callback=Ee,$n.chain=Gr,$n.chunk=function(n,t,r){t=(r?Or(n,t,r):null==t)?1:bu(+t||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Ue(ru(e/t));r<e;)o[++u]=It(n,r,r+=t);return o},$n.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},$n.constant=Ie,$n.countBy=fo,$n.create=function(n,t,r){var e=Lu(n);return r&&Or(n,t,r)&&(t=null),
t?$u(e,t):e},$n.curry=jo,$n.curryRight=ko,$n.debounce=oe,$n.defaults=Lo,$n.defer=Oo,$n.delay=Eo,$n.difference=Ju,$n.drop=zr,$n.dropRight=Br,$n.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,dr(t,r,3),true,true):[]},$n.dropWhile=function(n,t,r){return n&&n.length?Nt(n,dr(t,r,3),true):[]},$n.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Or(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;

return n},$n.filter=Hr,$n.flatten=function(n,t,r){var e=n?n.length:0;return r&&Or(n,t,r)&&(t=false),e?st(n,t):[]},$n.flattenDeep=function(n){return n&&n.length?st(n,true):[]},$n.flow=Io,$n.flowRight=Ro,$n.forEach=lo,$n.forEachRight=so,$n.forIn=Mo,$n.forInRight=Do,$n.forOwn=Po,$n.forOwnRight=qo,$n.functions=de,$n.groupBy=po,$n.indexBy=ho,$n.initial=function(n){return Br(n,1)},$n.intersection=function(){for(var n=[],t=-1,e=arguments.length,u=[],o=mr(),i=o==r,f=[];++t<e;){var a=arguments[t];jr(a)&&(n.push(a),
u.push(i&&120<=a.length?qu(t&&a):null))}if(e=n.length,2>e)return f;var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Pn(s,a):o(f,a,0))){for(t=e;--t;){var p=u[t];if(0>(p?Pn(p,a):o(n[t],a,0)))continue n}s&&s.push(a),f.push(a)}return f},$n.invert=function(n,t,r){r&&Or(n,t,r)&&(t=null),r=-1;for(var e=Ko(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?Ge.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},$n.invoke=_o,$n.keys=Ko,$n.keysIn=me,$n.map=ne,$n.mapKeys=Vo,$n.mapValues=Yo,$n.matches=Ce,
$n.matchesProperty=function(n,t){return bt(n,ot(t,true))},$n.memoize=ie,$n.merge=Zo,$n.method=ui,$n.methodOf=oi,$n.mixin=We,$n.negate=function(n){if(typeof n!="function")throw new Pe(L);return function(){return!n.apply(this,arguments)}},$n.omit=Go,$n.once=function(n){return ue(2,n)},$n.pairs=function(n){for(var t=-1,r=Ko(n),e=r.length,u=Ue(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u},$n.partial=Co,$n.partialRight=Wo,$n.partition=vo,$n.pick=Jo,$n.pluck=function(n,t){return ne(n,Te(t))},$n.property=Te,
$n.propertyOf=function(n){return function(t){return gt(n,$r(t),t+"")}},$n.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=mr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);return t},$n.pullAt=Qu,$n.range=function(n,t,r){r&&Or(n,t,r)&&(t=r=null),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(ru((t-n)/(r||1)),0);for(var u=Ue(t);++e<t;)u[e]=n,n+=r;return u},$n.rearg=So,$n.reject=function(n,t,r){var e=To(n)?Gn:ct;return t=dr(t,r,3),
e(n,function(n,r,e){return!t(n,r,e)})},$n.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=dr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return kt(n,o),e},$n.rest=qr,$n.restParam=fe,$n.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Er(t,n)?[e]:$r(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];se(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=kr(t[e+1])?[]:{})),i=i[f]}return n},$n.shuffle=re,$n.slice=function(n,t,r){var e=n?n.length:0;

return e?(r&&typeof r!="number"&&Or(n,t,r)&&(t=0,r=e),It(n,t,r)):[]},$n.sortBy=function(n,t,r){if(null==n)return[];r&&Or(n,t,r)&&(t=null);var e=-1;return t=dr(t,r,3),n=mt(n,function(n,r,u){return{a:t(n,r,u),b:++e,c:n}}),Ct(n,a)},$n.sortByAll=mo,$n.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Or(t,r,e)&&(r=null),To(t)||(t=null==t?[]:[t]),To(r)||(r=null==r?[]:[r]),Wt(n,t,r))},$n.spread=function(n){if(typeof n!="function")throw new Pe(L);return function(t){return n.apply(this,t)}},$n.take=function(n,t,r){
return n&&n.length?((r?Or(n,t,r):null==t)&&(t=1),It(n,0,0>t?0:t)):[]},$n.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Or(n,t,r):null==t)&&(t=1),t=e-(+t||0),It(n,0>t?0:t)):[]},$n.takeRightWhile=function(n,t,r){return n&&n.length?Nt(n,dr(t,r,3),false,true):[]},$n.takeWhile=function(n,t,r){return n&&n.length?Nt(n,dr(t,r,3)):[]},$n.tap=function(n,t,r){return t.call(r,n),n},$n.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Pe(L);return false===r?e=false:se(r)&&(e="leading"in r?!!r.leading:e,
u="trailing"in r?!!r.trailing:u),Fn.leading=e,Fn.maxWait=+t,Fn.trailing=u,oe(n,t,Fn)},$n.thru=Jr,$n.times=function(n,t,r){if(n=uu(n),1>n||!mu(n))return[];var e=-1,u=Ue(xu(n,Ru));for(t=zt(t,r,1);++e<n;)e<Ru?u[e]=t(e):t(e);return u},$n.toArray=function(n){var t=n?Yu(n):0;return Rr(t)?t?qn(n):[]:we(n)},$n.toPlainObject=ye,$n.transform=function(n,t,r,e){var u=To(n)||ge(n);return t=dr(t,e,4),null==r&&(u||se(n)?(e=n.constructor,r=u?To(n)?new e:[]:Lu(No(e)&&e.prototype)):r={}),(u?Kn:ht)(n,function(n,e,u){
return t(r,n,e,u)}),r},$n.union=ro,$n.uniq=Kr,$n.unzip=Vr,$n.unzipWith=Yr,$n.values=we,$n.valuesIn=function(n){return Ut(n,me(n))},$n.where=function(n,t){return Hr(n,wt(t))},$n.without=eo,$n.wrap=function(n,t){return t=null==t?Re:t,hr(t,E,null,[n],[])},$n.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(jr(r))var e=e?ft(e,r).concat(ft(r,e)):r}return e?Tt(e):[]},$n.zip=uo,$n.zipObject=Zr,$n.zipWith=oo,$n.backflow=Ro,$n.collect=ne,$n.compose=Ro,$n.each=lo,$n.eachRight=so,
$n.extend=$o,$n.iteratee=Ee,$n.methods=de,$n.object=Zr,$n.select=Hr,$n.tail=qr,$n.unique=Kr,We($n,$n),$n.add=function(n,t){return(+n||0)+(+t||0)},$n.attempt=ei,$n.camelCase=Xo,$n.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},$n.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Or(n,t,r)?t=false:typeof t=="function"&&(e=r,r=t,t=false),r=typeof r=="function"&&zt(r,e,1),ot(n,t,r)},$n.cloneDeep=function(n,t,r){return t=typeof t=="function"&&zt(t,r,1),ot(n,true,t)},$n.deburr=be,
$n.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},$n.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,l):n},$n.escapeRegExp=xe,$n.every=Xr,$n.find=ao,$n.findIndex=Xu,$n.findKey=zo,$n.findLast=co,$n.findLastIndex=Hu,$n.findLastKey=Bo,$n.findWhere=function(n,t){return ao(n,wt(t))},$n.first=Mr,$n.get=function(n,t,r){return n=null==n?w:gt(n,$r(t),t+""),n===w?r:n},$n.has=function(n,t){if(null==n)return false;var r=Ge.call(n,t);

return r||Er(t)||(t=$r(t),n=1==t.length?n:gt(n,It(t,0,-1)),t=Pr(t),r=null!=n&&Ge.call(n,t)),r},$n.identity=Re,$n.includes=Qr,$n.indexOf=Dr,$n.inRange=function(n,t,r){return t=+t||0,"undefined"===typeof r?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},$n.isArguments=ae,$n.isArray=To,$n.isBoolean=function(n){return true===n||false===n||h(n)&&Xe.call(n)==D},$n.isDate=function(n){return h(n)&&Xe.call(n)==P},$n.isElement=ce,$n.isEmpty=function(n){return null==n?true:jr(n)&&(To(n)||ve(n)||ae(n)||h(n)&&No(n.splice))?!n.length:!Ko(n).length;

},$n.isEqual=function(n,t,r,e){return r=typeof r=="function"&&zt(r,e,3),!r&&Cr(n)&&Cr(t)?n===t:(e=r?r(n,t):w,e===w?yt(n,t,r):!!e)},$n.isError=le,$n.isFinite=Uo,$n.isFunction=No,$n.isMatch=function(n,t,r,e){var u=Ko(t),o=u.length;if(!o)return true;if(null==n)return false;if(r=typeof r=="function"&&zt(r,e,3),n=Fr(n),!r&&1==o){var i=u[0];if(e=t[i],Cr(e))return e===n[i]&&(e!==w||i in n)}for(var i=Ue(o),f=Ue(o);o--;)e=i[o]=t[u[o]],f[o]=Cr(e);return dt(n,u,i,f,r)},$n.isNaN=function(n){return he(n)&&n!=+n},$n.isNative=pe,
$n.isNull=function(n){return null===n},$n.isNumber=he,$n.isObject=se,$n.isPlainObject=Fo,$n.isRegExp=_e,$n.isString=ve,$n.isTypedArray=ge,$n.isUndefined=function(n){return n===w},$n.kebabCase=Ho,$n.last=Pr,$n.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=$t(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},$n.max=ii,$n.min=fi,$n.noConflict=function(){
return _._=He,this},$n.noop=Se,$n.now=wo,$n.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=uu(e),e=ru(e),r=lr("",e,r),r.slice(0,t)+n+r):n},$n.padLeft=Qo,$n.padRight=ni,$n.parseInt=Ae,$n.random=function(n,t,r){r&&Or(n,t,r)&&(t=r=null);var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=Ou(),xu(n+r*(t-n+parseFloat("1e-"+((r+"").length-1))),t)):Ot(n,t)},$n.reduce=go,
$n.reduceRight=yo,$n.repeat=je,$n.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Er(t,n)||(t=$r(t),n=1==t.length?n:gt(n,It(t,0,-1)),e=null==n?w:n[Pr(t)]),e=e===w?r:e),No(e)?e.call(n):e},$n.runInContext=m,$n.size=function(n){var t=n?Yu(n):0;return Rr(t)?t:Ko(n).length},$n.snakeCase=ti,$n.some=ee,$n.sortedIndex=no,$n.sortedLastIndex=to,$n.startCase=ri,$n.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},$n.sum=function(n,t,r){r&&Or(n,t,r)&&(t=null);

var e=dr(),u=null==t;if(e===ut&&u||(u=false,t=e(t,r,3)),u){for(n=To(n)?n:Nr(n),t=n.length,r=0;t--;)r+=+n[t]||0;n=r}else n=St(n,t);return n},$n.template=function(n,t,r){var e=$n.templateSettings;r&&Or(n,t,r)&&(t=r=null),n=u(n),t=tt($u({},r||t),e,nt),r=tt($u({},t.imports),e.imports,nt);var o,i,f=Ko(r),a=Ut(r,f),c=0;r=t.interpolate||Rn;var l="__p+='";r=Me((t.escape||Rn).source+"|"+r.source+"|"+(r===gn?jn:Rn).source+"|"+(t.evaluate||Rn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";

if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Cn,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",
t=ei(function(){return $e(f,p+"return "+l).apply(w,a)}),t.source=l,le(t))throw t;return t},$n.trim=ke,$n.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Or(e,t,r):null==t)?g(n):i(n,t+"")):n},$n.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Or(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,f(n,t+"")+1):n},$n.trunc=function(n,t,r){r&&Or(n,t,r)&&(t=null);var e=W;if(r=S,null!=t)if(se(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;

if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(_e(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Me(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),-1<o&&(t=t.slice(0,o)));return t+r},$n.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},$n.uniqueId=function(n){var t=++Je;return u(n)+t},$n.words=Oe,$n.all=Xr,$n.any=ee,$n.contains=Qr,
$n.detect=ao,$n.foldl=go,$n.foldr=yo,$n.head=Mr,$n.include=Qr,$n.inject=go,We($n,function(){var n={};return ht($n,function(t,r){$n.prototype[r]||(n[r]=t)}),n}(),false),$n.sample=te,$n.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return te(t,n)}):te(this.value())},$n.VERSION=b,Kn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){$n[n].placeholder=$n}),Kn(["dropWhile","filter","map","takeWhile"],function(n,t){var r=t!=$,e=t==N;Bn.prototype[n]=function(n,u){
var o=this.__filtered__,i=o&&e?new Bn(this):this.clone();return(i.__iteratees__||(i.__iteratees__=[])).push({done:false,count:0,index:0,iteratee:dr(n,u,1),limit:-1,type:t}),i.__filtered__=o||r,i}}),Kn(["drop","take"],function(n,t){var r=n+"While";Bn.prototype[n]=function(r){var e=this.__filtered__,u=e&&!t?this.dropWhile():this.clone();return r=null==r?1:bu(uu(r)||0,0),e?t?u.__takeCount__=xu(u.__takeCount__,r):Pr(u.__iteratees__).limit=r:(u.__views__||(u.__views__=[])).push({size:r,type:n+(0>u.__dir__?"Right":"")
}),u},Bn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()},Bn.prototype[n+"RightWhile"]=function(n,t){return this.reverse()[r](n,t).reverse()}}),Kn(["first","last"],function(n,t){var r="take"+(t?"Right":"");Bn.prototype[n]=function(){return this[r](1).value()[0]}}),Kn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");Bn.prototype[n]=function(){return this[r](1)}}),Kn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?wt:Te;Bn.prototype[n]=function(n){return this[r](e(n));

}}),Bn.prototype.compact=function(){return this.filter(Re)},Bn.prototype.reject=function(n,t){return n=dr(n,t,1),this.filter(function(t){return!n(t)})},Bn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return 0>n?r=this.takeRight(-n):n&&(r=this.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r},Bn.prototype.toArray=function(){return this.drop(0)},ht(Bn.prototype,function(n,t){var r=$n[t];if(r){var e=/^(?:filter|map|reject)|While$/.test(t),u=/^(?:first|last)$/.test(t);$n.prototype[t]=function(){
function t(n){return n=[n],fu.apply(n,o),r.apply($n,n)}var o=arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof Bn,l=o[0],s=c||To(f);return s&&e&&typeof l=="function"&&1!=l.length&&(c=s=false),c=c&&!a,u&&!i?c?n.call(f):r.call($n,this.value()):s?(f=n.apply(c?f:new Bn(this),o),u||!a&&!f.__actions__||(f.__actions__||(f.__actions__=[])).push({func:Jr,args:[t],thisArg:$n}),new zn(f,i)):this.thru(t)}}}),Kn("concat join pop push replace shift sort splice split unshift".split(" "),function(n){
var t=(/^(?:replace|split)$/.test(n)?Ve:qe)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);$n.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),ht(Bn.prototype,function(n,t){var r=$n[t];if(r){var e=r.name;(Nu[e]||(Nu[e]=[])).push({name:t,func:r})}}),Nu[cr(null,A).name]=[{name:"wrapper",func:null}],Bn.prototype.clone=function(){var n=this.__actions__,t=this.__iteratees__,r=this.__views__,e=new Bn(this.__wrapped__);

return e.__actions__=n?qn(n):null,e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=t?qn(t):null,e.__takeCount__=this.__takeCount__,e.__views__=r?qn(r):null,e},Bn.prototype.reverse=function(){if(this.__filtered__){var n=new Bn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Bn.prototype.value=function(){var n=this.__wrapped__.value();if(!To(n))return Ft(n,this.__actions__);var t,r=this.__dir__,e=0>r;t=n.length;for(var u=this.__views__,o=0,i=-1,f=u?u.length:0;++i<f;){
var a=u[i],c=a.size;switch(a.type){case"drop":o+=c;break;case"dropRight":t-=c;break;case"take":t=xu(t,o+c);break;case"takeRight":o=bu(o,t-c)}}t={start:o,end:t},u=t.start,o=t.end,t=o-u,u=e?o:u-1,o=xu(t,this.__takeCount__),f=(i=this.__iteratees__)?i.length:0,a=0,c=[];n:for(;t--&&a<o;){for(var u=u+r,l=-1,s=n[u];++l<f;){var p=i[l],h=p.iteratee,_=p.type;if(_==N){if(p.done&&(e?u>p.index:u<p.index)&&(p.count=0,p.done=false),p.index=u,!(p.done||(_=p.limit,p.done=-1<_?p.count++>=_:!h(s))))continue n}else if(p=h(s),
_==$)s=p;else if(!p){if(_==F)continue n;break n}}c[a++]=s}return c},$n.prototype.chain=function(){return Gr(this)},$n.prototype.commit=function(){return new zn(this.value(),this.__chain__)},$n.prototype.plant=function(n){for(var t,r=this;r instanceof Ln;){var e=Lr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},$n.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Bn?(this.__actions__.length&&(n=new Bn(this)),new zn(n.reverse(),this.__chain__)):this.thru(function(n){
return n.reverse()})},$n.prototype.toString=function(){return this.value()+""},$n.prototype.run=$n.prototype.toJSON=$n.prototype.valueOf=$n.prototype.value=function(){return Ft(this.__wrapped__,this.__actions__)},$n.prototype.collect=$n.prototype.map,$n.prototype.head=$n.prototype.first,$n.prototype.select=$n.prototype.filter,$n.prototype.tail=$n.prototype.rest,$n}var w,b="3.8.0",x=1,A=2,j=4,k=8,O=16,E=32,I=64,R=128,C=256,W=30,S="...",T=150,U=16,N=0,F=1,$=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",M="[object Array]",D="[object Boolean]",P="[object Date]",q="[object Error]",K="[object Function]",V="[object Number]",Y="[object Object]",Z="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/[.*+?^${}()|[\]\/\\]/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,On=/^0[xX]/,En=/^\[object .+?Constructor\]$/,In=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Rn=/($^)/,Cn=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),Sn=" \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",Tn="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window".split(" "),Un={};

Un[X]=Un[H]=Un[Q]=Un[nn]=Un[tn]=Un[rn]=Un[en]=Un[un]=Un[on]=true,Un[B]=Un[M]=Un[J]=Un[D]=Un[P]=Un[q]=Un[K]=Un["[object Map]"]=Un[V]=Un[Y]=Un[Z]=Un["[object Set]"]=Un[G]=Un["[object WeakMap]"]=false;var Nn={};Nn[B]=Nn[M]=Nn[J]=Nn[D]=Nn[P]=Nn[X]=Nn[H]=Nn[Q]=Nn[nn]=Nn[tn]=Nn[V]=Nn[Y]=Nn[Z]=Nn[G]=Nn[rn]=Nn[en]=Nn[un]=Nn[on]=true,Nn[q]=Nn[K]=Nn["[object Map]"]=Nn["[object Set]"]=Nn["[object WeakMap]"]=false;var Fn={leading:false,maxWait:0,trailing:false},$n={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A",
"\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u",
"\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},zn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Bn={"function":true,object:true},Mn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Dn=Bn[typeof exports]&&exports&&!exports.nodeType&&exports,Pn=Bn[typeof module]&&module&&!module.nodeType&&module,qn=Bn[typeof self]&&self&&self.Object&&self,Kn=Bn[typeof window]&&window&&window.Object&&window,Vn=Pn&&Pn.exports===Dn&&Dn,Yn=Dn&&Pn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||qn||this,Zn=m();

typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Yn._=Zn, define(function(){return Zn})):Dn&&Pn?Vn?(Pn.exports=Zn)._=Zn:Dn._=Zn:Yn._=Zn}).call(this);
var Utils = {

  extend: function() {
    for (var i = 1; i < arguments.length; i++) {
      for (var j in arguments[i]) {
        arguments[0][j] = arguments[i][j];
      }
    }

    return arguments[0];
  },

  distance: function(a, b) {

    var dx = a.x - b.x;
    var dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);

  },

  xnearest: function(from, entities) {

    var min = -1;
    var result = null;

    for (var i = 0; i < entities.length; i++) {

      var to = entities[i];

      if (from === to) continue;

      var distance = this.distance(from, to);

      if (distance < min || min < 0) {
        min = distance;
        result = to;
      }

    }

    return result;
  },

  circWrap: function(val) {

    return this.wrap(val, 0, Math.PI * 2);

  },

  wrap: function(value, min, max) {

    if (value < min) return max + (value % max);
    if (value >= max) return value % max;
    return value;

  },

  wrapTo: function(value, target, max, step) {

    if (value === target) return target;

    var result = value;

    var d = this.wrappedDistance(value, target, max);

    if (Math.abs(d) < step) return target;

    result += (d < 0 ? -1 : 1) * step;

    if (result > max) {
      result = result - max;
    } else if (result < 0) {
      result = max + result;
    }

    return result;

  },

  circWrapTo: function(value, target, step) {

    return this.wrapTo(value, target, Math.PI * 2, step);

  },

  circDistance: function(a, b) {

    return this.wrappedDistance(a, b, Math.PI * 2);

  },

  wrappedDistance: function(a, b, max) {

    if (a === b) return 0;
    else if (a < b) {
      var l = -a - max + b;
      var r = b - a;
    } else {
      var l = b - a;
      var r = max - a + b;
    }

    if (Math.abs(l) > Math.abs(r)) return r;
    else return l;

  },

  random: function(a, b) {

    if (a === undefined) {

      return Math.random();

    } else if (b !== undefined) {

      return Math.floor(a + Math.random() * Math.abs(b - a + 1));

    } else {

      if (a instanceof Array) return a[(a.length + 1) * Math.random() - 1 | 0];
      else {
        return a[this.random(Object.keys(a))];
      }

    }

  },

  sincos: function(angle, radius) {

    if (arguments.length === 1) {
      radius = angle;
      angle = Math.random() * 6.28;
    }

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  },

  ground: function(num, threshold) {

    return (num / threshold | 0) * threshold;

  },

  shuffle: function(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  },

  sign: function(value) {

    return value / Math.abs(value);

  },

  moveTo: function(value, target, step) {

    if (value < target) {
      value += step;
      if (value > target) value = target;
    }

    if (value > target) {
      value -= step;
      if (value < target) value = target;
    }

    return value;

  },

  interval: function(key, interval, object) {

    if (!object.throttles) object.throttles = {};
    if (!object.throttles[key]) object.throttles[key] = object.lifetime - interval;

    if (object.lifetime - object.throttles[key] >= interval) {
      object.throttles[key] = object.lifetime;
      return true;
    } else return false;

  },

  moveInDirection: function(direction, value) {

    this.x += Math.cos(direction) * value;
    this.y += Math.sin(direction) * value;

  }



};


_.defaults(Utils, _);
/* file: license.txt */

/*     

  PlaygroundJS r4
  
  http://playgroundjs.com
  
  (c) 2012-2015 http://rezoner.net
  
  Playground may be freely distributed under the MIT license.

  latest major changes:

  r4

  + tweens with events
  + context argument for events

  r3

  + pointer = mouse + touch

*/


/* file: src/lib/Whammy.js */

/* whammy - https://github.com/antimatter15/whammy */

window.Whammy = function() {
  function h(a, b) {
    for (var c = r(a), c = [{
        id: 440786851,
        data: [{
          data: 1,
          id: 17030
        }, {
          data: 1,
          id: 17143
        }, {
          data: 4,
          id: 17138
        }, {
          data: 8,
          id: 17139
        }, {
          data: "webm",
          id: 17026
        }, {
          data: 2,
          id: 17031
        }, {
          data: 2,
          id: 17029
        }]
      }, {
        id: 408125543,
        data: [{
          id: 357149030,
          data: [{
            data: 1E6,
            id: 2807729
          }, {
            data: "whammy",
            id: 19840
          }, {
            data: "whammy",
            id: 22337
          }, {
            data: s(c.duration),
            id: 17545
          }]
        }, {
          id: 374648427,
          data: [{
            id: 174,
            data: [{
              data: 1,
              id: 215
            }, {
              data: 1,
              id: 25541
            }, {
              data: 0,
              id: 156
            }, {
              data: "und",
              id: 2274716
            }, {
              data: "V_VP8",
              id: 134
            }, {
              data: "VP8",
              id: 2459272
            }, {
              data: 1,
              id: 131
            }, {
              id: 224,
              data: [{
                data: c.width,
                id: 176
              }, {
                data: c.height,
                id: 186
              }]
            }]
          }]
        }]
      }], e = 0, d = 0; e < a.length;) {
      var g = [],
        f = 0;
      do g.push(a[e]), f += a[e].duration, e++; while (e < a.length && 3E4 > f);
      var h = 0,
        g = {
          id: 524531317,
          data: [{
            data: d,
            id: 231
          }].concat(g.map(function(a) {
            var b = t({
              discardable: 0,
              frame: a.data.slice(4),
              invisible: 0,
              keyframe: 1,
              lacing: 0,
              trackNum: 1,
              timecode: Math.round(h)
            });
            h += a.duration;
            return {
              data: b,
              id: 163
            }
          }))
        };
      c[1].data.push(g);
      d += f
    }
    return m(c, b)
  }

  function r(a) {
    for (var b = a[0].width, c = a[0].height, e = a[0].duration,
        d = 1; d < a.length; d++) {
      if (a[d].width != b) throw "Frame " + (d + 1) + " has a different width";
      if (a[d].height != c) throw "Frame " + (d + 1) + " has a different height";
      if (0 > a[d].duration || 32767 < a[d].duration) throw "Frame " + (d + 1) + " has a weird duration (must be between 0 and 32767)";
      e += a[d].duration
    }
    return {
      duration: e,
      width: b,
      height: c
    }
  }

  function u(a) {
    for (var b = []; 0 < a;) b.push(a & 255), a >>= 8;
    return new Uint8Array(b.reverse())
  }

  function n(a) {
    var b = [];
    a = (a.length % 8 ? Array(9 - a.length % 8).join("0") : "") + a;
    for (var c = 0; c < a.length; c += 8) b.push(parseInt(a.substr(c,
      8), 2));
    return new Uint8Array(b)
  }

  function m(a, b) {
    for (var c = [], e = 0; e < a.length; e++) {
      var d = a[e].data;
      "object" == typeof d && (d = m(d, b));
      "number" == typeof d && (d = n(d.toString(2)));
      if ("string" == typeof d) {
        for (var g = new Uint8Array(d.length), f = 0; f < d.length; f++) g[f] = d.charCodeAt(f);
        d = g
      }
      f = d.size || d.byteLength || d.length;
      g = Math.ceil(Math.ceil(Math.log(f) / Math.log(2)) / 8);
      f = f.toString(2);
      f = Array(7 * g + 8 - f.length).join("0") + f;
      g = Array(g).join("0") + "1" + f;
      c.push(u(a[e].id));
      c.push(n(g));
      c.push(d)
    }
    return b ? (c = p(c), new Uint8Array(c)) :
      new Blob(c, {
        type: "video/webm"
      })
  }

  function p(a, b) {
    null == b && (b = []);
    for (var c = 0; c < a.length; c++) "object" == typeof a[c] ? p(a[c], b) : b.push(a[c]);
    return b
  }

  function t(a) {
    var b = 0;
    a.keyframe && (b |= 128);
    a.invisible && (b |= 8);
    a.lacing && (b |= a.lacing << 1);
    a.discardable && (b |= 1);
    if (127 < a.trackNum) throw "TrackNumber > 127 not supported";
    return [a.trackNum | 128, a.timecode >> 8, a.timecode & 255, b].map(function(a) {
      return String.fromCharCode(a)
    }).join("") + a.frame
  }

  function q(a) {
    for (var b = a.RIFF[0].WEBP[0], c = b.indexOf("\u009d\u0001*"),
        e = 0, d = []; 4 > e; e++) d[e] = b.charCodeAt(c + 3 + e);
    e = d[1] << 8 | d[0];
    c = e & 16383;
    e = d[3] << 8 | d[2];
    return {
      width: c,
      height: e & 16383,
      data: b,
      riff: a
    }
  }

  function k(a) {
    for (var b = 0, c = {}; b < a.length;) {
      var e = a.substr(b, 4),
        d = parseInt(a.substr(b + 4, 4).split("").map(function(a) {
          a = a.charCodeAt(0).toString(2);
          return Array(8 - a.length + 1).join("0") + a
        }).join(""), 2),
        g = a.substr(b + 4 + 4, d),
        b = b + (8 + d);
      c[e] = c[e] || [];
      "RIFF" == e || "LIST" == e ? c[e].push(k(g)) : c[e].push(g)
    }
    return c
  }

  function s(a) {
    return [].slice.call(new Uint8Array((new Float64Array([a])).buffer),
      0).map(function(a) {
      return String.fromCharCode(a)
    }).reverse().join("")
  }

  function l(a, b) {
    this.frames = [];
    this.duration = 1E3 / a;
    this.quality = b || .8
  }
  l.prototype.add = function(a, b) {
    if ("undefined" != typeof b && this.duration) throw "you can't pass a duration if the fps is set";
    if ("undefined" == typeof b && !this.duration) throw "if you don't have the fps set, you ned to have durations here.";
    "canvas" in a && (a = a.canvas);
    if ("toDataURL" in a) a = a.toDataURL("image/webp", this.quality);
    else if ("string" != typeof a) throw "frame must be a a HTMLCanvasElement, a CanvasRenderingContext2D or a DataURI formatted string";
    if (!/^data:image\/webp;base64,/ig.test(a)) throw "Input must be formatted properly as a base64 encoded DataURI of type image/webp";
    this.frames.push({
      image: a,
      duration: b || this.duration
    })
  };
  l.prototype.compile = function(a) {
    return new h(this.frames.map(function(a) {
      var c = q(k(atob(a.image.slice(23))));
      c.duration = a.duration;
      return c
    }), a)
  };
  return {
    Video: l,
    fromImageArray: function(a, b, c) {
      return h(a.map(function(a) {
        a = q(k(atob(a.slice(23))));
        a.duration = 1E3 / b;
        return a
      }), c)
    },
    toWebM: h
  }
}();

/* file: src/lib/Ease.js */

/*     

  Ease 1.0
  
  http://canvasquery.com
  
  (c) 2015 by Rezoner - http://rezoner.net

  `ease` may be freely distributed under the MIT license.

*/

(function() {

  var ease = function(progress, easing) {

    if (typeof ease.cache[easing] === "function") {

      return ease.cache[easing](progress);

    } else {

      return ease.spline(progress, easing || ease.defaultEasing);

    }

  };

  var extend = function() {
    for (var i = 1; i < arguments.length; i++) {
      for (var j in arguments[i]) {
        arguments[0][j] = arguments[i][j];
      }
    }

    return arguments[0];
  };

  extend(ease, {

    defaultEasing: "016",

    cache: {

      linear: function(t) {
        return t
      },

      inQuad: function(t) {
        return t * t
      },
      outQuad: function(t) {
        return t * (2 - t)
      },
      inOutQuad: function(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      },
      inCubic: function(t) {
        return t * t * t
      },
      outCubic: function(t) {
        return (--t) * t * t + 1
      },
      inOutCubic: function(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      },
      inQuart: function(t) {
        return t * t * t * t
      },
      outQuart: function(t) {
        return 1 - (--t) * t * t * t
      },
      inOutQuart: function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
      },
      inQuint: function(t) {
        return t * t * t * t * t
      },
      outQuint: function(t) {
        return 1 + (--t) * t * t * t * t
      },
      inOutQuint: function(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
      },
      inSine: function(t) {
        return -1 * Math.cos(t / 1 * (Math.PI * 0.5)) + 1;
      },
      outSine: function(t) {
        return Math.sin(t / 1 * (Math.PI * 0.5));
      },
      inOutSine: function(t) {
        return -1 / 2 * (Math.cos(Math.PI * t) - 1);
      },
      inExpo: function(t) {
        return (t == 0) ? 0 : Math.pow(2, 10 * (t - 1));
      },
      outExpo: function(t) {
        return (t == 1) ? 1 : (-Math.pow(2, -10 * t) + 1);
      },
      inOutExpo: function(t) {
        if (t == 0) return 0;
        if (t == 1) return 1;
        if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
        return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
      },
      inCirc: function(t) {
        return -1 * (Math.sqrt(1 - t * t) - 1);
      },
      outCirc: function(t) {
        return Math.sqrt(1 - (t = t - 1) * t);
      },
      inOutCirc: function(t) {
        if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
        return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      inElastic: function(t) {
        var s = 1.70158;
        var p = 0;
        var a = 1;
        if (t == 0) return 0;
        if (t == 1) return 1;
        if (!p) p = 0.3;
        if (a < 1) {
          a = 1;
          var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(1 / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
      },
      outElastic: function(t) {
        var s = 1.70158;
        var p = 0;
        var a = 1;
        if (t == 0) return 0;
        if (t == 1) return 1;
        if (!p) p = 0.3;
        if (a < 1) {
          a = 1;
          var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(1 / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
      },
      inOutElastic: function(t) {
        var s = 1.70158;
        var p = 0;
        var a = 1;
        if (t == 0) return 0;
        if ((t /= 1 / 2) == 2) return 1;
        if (!p) p = (0.3 * 1.5);
        if (a < 1) {
          a = 1;
          var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(1 / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
      },
      inBack: function(t, s) {
        if (s == undefined) s = 1.70158;
        return 1 * t * t * ((s + 1) * t - s);
      },
      outBack: function(t, s) {
        if (s == undefined) s = 1.70158;
        return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
      },
      inOutBack: function(t, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
        return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
      },
      inBounce: function(t) {
        return 1 - this.outBounce(1 - t);
      },
      outBounce: function(t) {
        if ((t /= 1) < (1 / 2.75)) {
          return (7.5625 * t * t);
        } else if (t < (2 / 2.75)) {
          return (7.5625 * (t -= (1.5 / 2.75)) * t + .75);
        } else if (t < (2.5 / 2.75)) {
          return (7.5625 * (t -= (2.25 / 2.75)) * t + .9375);
        } else {
          return (7.5625 * (t -= (2.625 / 2.75)) * t + .984375);
        }
      },
      inOutBounce: function(t) {
        if (t < 1 / 2) return this.inBounce(t * 2) * 0.5;
        return this.outBounce(t * 2 - 1) * 0.5 + 0.5;
      }
    },

    translateEasing: function(key) {

      if (!this.cache[key]) {
        var array = key.split('');

        var sign = 1;
        var signed = false;

        for (var i = 0; i < array.length; i++) {

          var char = array[i];

          if (char === "-") {
            sign = -1;
            signed = true;
            array.splice(i--, 1);
          } else if (char === "+") {
            sign = 1;
            array.splice(i--, 1);
          } else array[i] = parseInt(array[i], 16) * sign;

        }

        var min = Math.min.apply(null, array);
        var max = Math.max.apply(null, array);
        var diff = max - min;
        var cache = [];
        var normalized = [];

        for (var i = 0; i < array.length; i++) {
          if (signed) {
            var diff = Math.max(Math.abs(min), Math.abs(max))
            normalized.push((array[i]) / diff);
          } else {
            var diff = max - min;
            normalized.push((array[i] - min) / diff);
          }
        }

        this.cache[key] = normalized;

      }

      return this.cache[key]

    },

    /* 
      
      Cubic-spline interpolation by Ivan Kuckir

      http://blog.ivank.net/interpolation-with-cubic-splines.html

      With slight modifications by Morgan Herlocker

      https://github.com/morganherlocker/cubic-spline

    */

    splineK: {},
    splineX: {},
    splineY: {},

    insertIntermediateValues: function(a) {
      var result = [];
      for (var i = 0; i < a.length; i++) {
        result.push(a[i]);

        if (i < a.length - 1) result.push(a[i + 1] + (a[i] - a[i + 1]) * 0.6);
      }

      return result;
    },

    spline: function(x, key) {

      if (!this.splineK[key]) {

        var xs = [];
        var ys = this.translateEasing(key);

        // ys = this.insertIntermediateValues(ys);

        if (!ys.length) return 0;

        for (var i = 0; i < ys.length; i++) xs.push(i * (1 / (ys.length - 1)));

        var ks = xs.map(function() {
          return 0
        });

        ks = this.getNaturalKs(xs, ys, ks);

        this.splineX[key] = xs;
        this.splineY[key] = ys;
        this.splineK[key] = ks;

      }

      if (x > 1) return this.splineY[key][this.splineY[key].length - 1];

      var ks = this.splineK[key];
      var xs = this.splineX[key];
      var ys = this.splineY[key];

      var i = 1;

      while (xs[i] < x) i++;

      var t = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
      var a = ks[i - 1] * (xs[i] - xs[i - 1]) - (ys[i] - ys[i - 1]);
      var b = -ks[i] * (xs[i] - xs[i - 1]) + (ys[i] - ys[i - 1]);
      var q = (1 - t) * ys[i - 1] + t * ys[i] + t * (1 - t) * (a * (1 - t) + b * t);

      /*
      var py = ys[i - 2];
      var cy = ys[i - 1];
      var ny = (i < ys.length - 1) ? ys[i] : ys[i - 1];

      if (q > ny) {
        var diff = (q - py);
        //q = py + diff;

      }

    if (cy === ny && cy === py) q = py;
    */


      return q;
    },

    getNaturalKs: function(xs, ys, ks) {
      var n = xs.length - 1;
      var A = this.zerosMat(n + 1, n + 2);

      for (var i = 1; i < n; i++) // rows
      {
        A[i][i - 1] = 1 / (xs[i] - xs[i - 1]);
        A[i][i] = 2 * (1 / (xs[i] - xs[i - 1]) + 1 / (xs[i + 1] - xs[i]));
        A[i][i + 1] = 1 / (xs[i + 1] - xs[i]);
        A[i][n + 1] = 3 * ((ys[i] - ys[i - 1]) / ((xs[i] - xs[i - 1]) * (xs[i] - xs[i - 1])) + (ys[i + 1] - ys[i]) / ((xs[i + 1] - xs[i]) * (xs[i + 1] - xs[i])));
      }

      A[0][0] = 2 / (xs[1] - xs[0]);
      A[0][1] = 1 / (xs[1] - xs[0]);
      A[0][n + 1] = 3 * (ys[1] - ys[0]) / ((xs[1] - xs[0]) * (xs[1] - xs[0]));

      A[n][n - 1] = 1 / (xs[n] - xs[n - 1]);
      A[n][n] = 2 / (xs[n] - xs[n - 1]);
      A[n][n + 1] = 3 * (ys[n] - ys[n - 1]) / ((xs[n] - xs[n - 1]) * (xs[n] - xs[n - 1]));

      return this.solve(A, ks);
    },

    solve: function(A, ks) {
      var m = A.length;
      for (var k = 0; k < m; k++) // column
      {
        // pivot for column
        var i_max = 0;
        var vali = Number.NEGATIVE_INFINITY;
        for (var i = k; i < m; i++)
          if (A[i][k] > vali) {
            i_max = i;
            vali = A[i][k];
          }
        this.splineSwapRows(A, k, i_max);

        // for all rows below pivot
        for (var i = k + 1; i < m; i++) {
          for (var j = k + 1; j < m + 1; j++)
            A[i][j] = A[i][j] - A[k][j] * (A[i][k] / A[k][k]);
          A[i][k] = 0;
        }
      }
      for (var i = m - 1; i >= 0; i--) // rows = columns
      {
        var v = A[i][m] / A[i][i];
        ks[i] = v;
        for (var j = i - 1; j >= 0; j--) // rows
        {
          A[j][m] -= A[j][i] * v;
          A[j][i] = 0;
        }
      }
      return ks;
    },

    zerosMat: function(r, c) {
      var A = [];
      for (var i = 0; i < r; i++) {
        A.push([]);
        for (var j = 0; j < c; j++) A[i].push(0);
      }
      return A;
    },

    splineSwapRows: function(m, k, l) {
      var p = m[k];
      m[k] = m[l];
      m[l] = p;
    }
  });

  window.ease = ease;

})();


/* file: src/Playground.js */

PLAYGROUND = {};

function playground(args) {

  return new PLAYGROUND.Application(args);

};

/* file: src/Utils.js */

PLAYGROUND.Utils = {

  extend: function() {

    for (var i = 1; i < arguments.length; i++) {
      for (var j in arguments[i]) {
        arguments[0][j] = arguments[i][j];
      }
    }

    return arguments[0];

  },

  merge: function(a) {

    for (var i = 1; i < arguments.length; i++) {

      var b = arguments[i];

      for (var key in b) {

        var value = b[key];

        if (typeof a[key] !== "undefined") {
          if (typeof a[key] === "object") this.merge(a[key], value);
          else a[key] = value;
        } else {
          a[key] = value;
        }
      }
    }
    return a;

  },

  invoke: function(object, methodName) {

    var args = Array.prototype.slice.call(arguments, 2);

    for (var i = 0; i < object.length; i++) {
      var current = object[i];

      if (current[methodName]) current[methodName].apply(current, args);

    }

  },

  throttle: function(fn, threshold) {
    threshold || (threshold = 250);
    var last,
      deferTimer;
    return function() {
      var context = this;

      var now = +new Date,
        args = arguments;
      if (last && now < last + threshold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function() {
          last = now;
          fn.apply(context, args);
        }, threshold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

};

PLAYGROUND.Utils.ease = ease;


/* file: src/Events.js */

PLAYGROUND.Events = function() {

  this.listeners = {};

};

PLAYGROUND.Events.prototype = {

  on: function(event, callback, context) {

    if (typeof event === "object") {
      var result = {};
      for (var key in event) {
        result[key] = this.on(key, event[key], context)
      }
      return result;
    }

    if (!this.listeners[event]) this.listeners[event] = [];

    var listener = {
      once: false,
      callback: callback,
      context: context
    };

    this.listeners[event].push(listener);

    return listener;
  },

  once: function(event, callback, context) {

    if (typeof event === "object") {
      var result = {};
      for (var key in event) {
        result[key] = this.once(key, event[key], context)
      }
      return result;
    }

    if (!this.listeners[event]) this.listeners[event] = [];

    var listener = {
      once: true,
      callback: callback,
      context: context
    };

    this.listeners[event].push(listener);

    return listener;
  },

  off: function(event, callback) {

    for (var i = 0, len = this.listeners[event].length; i < len; i++) {
      if (this.listeners[event][i]._remove) {
        this.listeners[event].splice(i--, 1);
        len--;
      }
    }

  },

  trigger: function(event, data) {

    /* if you prefer events pipe */

    if (this.listeners["event"]) {

      for (var i = 0, len = this.listeners["event"].length; i < len; i++) {

        var listener = this.listeners["event"][i];

        listener.callback.call(listener.context || this, event, data);

      }

    }

    /* or subscribed to single event */

    if (this.listeners[event]) {
      for (var i = 0, len = this.listeners[event].length; i < len; i++) {

        var listener = this.listeners[event][i];

        listener.callback.call(listener.context || this, data);

        if (listener.once) {
          this.listeners[event].splice(i--, 1);
          len--;
        }
      }
    }

  }

};

/* file: src/States.js */

PLAYGROUND.States = function(app) {

  this.app = app;

  PLAYGROUND.Events.call(this);

  app.on("step", this.step.bind(this));

};

PLAYGROUND.States.prototype = {

  step: function(delta) {

    if (!this.next) return;

    if (this.current && this.current.locked) return;

    var state = this.next;

    if (typeof state === "function") state = new state;

    /* create state if object has never been used as a state before */

    if (!state.__created) {

      state.__created = true;

      state.app = this.app;

      this.trigger("createstate", {
        state: state
      });

      if (state.create) state.create();

    }

    /* enter new state */

    if (this.current) {
      this.trigger("leavestate", {
        prev: this.current,
        next: state,
        state: this.current
      });
    }

    this.trigger("enterstate", {
      prev: this.current,
      next: state,
      state: state
    });

    this.current = state;

    if (this.current && this.current.enter) {
      this.current.enter();
    }

    this.app.state = this.current;

    this.next = false;


  },

  set: function(state) {

    if (this.current && this.current.leave) this.current.leave();

    this.next = state;

    this.step(0);

  }


};

PLAYGROUND.Utils.extend(PLAYGROUND.States.prototype, PLAYGROUND.Events.prototype);

/* file: src/Application.js */

PLAYGROUND.Application = function(args) {

  var app = this;

  /* events */

  PLAYGROUND.Events.call(this);

  /* defaults */

  PLAYGROUND.Utils.merge(this, this.defaults, args);

  /* guess scaling mode */

  this.autoWidth = this.width ? false : true;
  this.autoHeight = this.height ? false : true;
  this.autoScale = this.scale ? false : true;

  /* get container */

  if (!this.container) this.container = document.body;

  if (this.container !== document.body) this.customContainer = true;

  if (typeof this.container === "string") this.container = document.querySelector(this.container);

  this.updateSize();

  /* events */

  // this.emitLocalEvent = this.emitLocalEvent.bind(this);
  // this.emitGlobalEvent = this.emitGlobalEvent.bind(this);

  /* states manager */

  this.states = new PLAYGROUND.States(this);
  this.states.on("event", this.emitLocalEvent, this);

  /* mouse */

  this.mouse = new PLAYGROUND.Mouse(this, this.container);
  this.mouse.on("event", this.emitGlobalEvent, this);

  /* touch */

  this.touch = new PLAYGROUND.Touch(this, this.container);
  this.touch.on("event", this.emitGlobalEvent, this);

  /* keyboard */

  this.keyboard = new PLAYGROUND.Keyboard();
  this.keyboard.on("event", this.emitGlobalEvent, this);

  /* gamepads */

  this.gamepads = new PLAYGROUND.Gamepads(this);
  this.gamepads.on("event", this.emitGlobalEvent, this);

  /* tweens */

  this.tweens = new PLAYGROUND.TweenManager(this);

  /* ease */

  this.ease = PLAYGROUND.Utils.ease;

  /* video recorder */

  this.videoRecorder = new PLAYGROUND.VideoRecorder(this);

  /* sound */

  PLAYGROUND.Sound(this);

  /* window resize */

  window.addEventListener("resize", this.handleResize.bind(this));

  /* visilibitychange */

  document.addEventListener("visibilitychange", function() {

    app.emitGlobalEvent("visibilitychange", document.visibilityState);


  });

  /* assets containers */

  this.images = {};
  this.atlases = {};
  this.data = {};

  this.loader = new PLAYGROUND.Loader(this);

  this.loadFoo(0.25);

  /* create plugins in the same way */

  this.plugins = [];

  for (var key in PLAYGROUND) {

    var property = PLAYGROUND[key];

    if (property.plugin) this.plugins.push(new property(this));

  }

  /* flow */

  this.emitGlobalEvent("preload");

  this.firstBatch = true;

  function onPreloadEnd() {

    app.loadFoo(0.25);

    /* run everything in the next frame */

    setTimeout(function() {

      app.emitLocalEvent("create");

      app.setState(PLAYGROUND.DefaultState);
      app.handleResize();
      app.setState(PLAYGROUND.LoadingScreen);

      /* game loop */

      PLAYGROUND.GameLoop(app);

    });

    /* stage proper loading step */

    app.loader.once("ready", function() {

      app.firstBatch = false;

      app.setState(PLAYGROUND.DefaultState);

      app.emitLocalEvent("ready");
      app.handleResize();


    });


  };


  this.loader.once("ready", onPreloadEnd);

};

PLAYGROUND.Application.prototype = {

  defaults: {
    smoothing: 1,
    paths: {
      base: "",
      images: "images/"
    },
    offsetX: 0,
    offsetY: 0
  },

  setState: function(state) {

    this.states.set(state);

  },

  getPath: function(to) {

    return this.paths.base + (this.paths[to] || (to + "/"));

  },

  getAssetEntry: function(path, folder, defaultExtension) {

    /* translate folder according to user provided paths 
       or leave as is */

    var folder = this.paths[folder] || (folder + "/");

    var fileinfo = path.match(/(.*)\..*/);
    var key = fileinfo ? fileinfo[1] : path;

    var temp = path.split(".");
    var basename = path;

    if (temp.length > 1) {
      var ext = temp.pop();
      path = temp.join(".");
    } else {
      var ext = defaultExtension;
      basename += "." + defaultExtension;
    }

    return {
      key: key,
      url: this.paths.base + folder + basename,
      path: this.paths.base + folder + path,
      ext: ext
    };

  },

  /* events that shouldn't flow down to the state */

  emitLocalEvent: function(event, data) {

    this.trigger(event, data);

    if ((!this.firstBatch || this.loader.ready) && this[event]) this[event](data);

  },

  /* events that should be passed to the state */

  emitGlobalEvent: function(event, data) {

    if (!this.state) return this.emitLocalEvent(event, data);

    this.trigger(event, data);

    if ((!this.firstBatch || this.loader.ready) && this.event) this.event(event, data);

    if ((!this.firstBatch || this.loader.ready) && this[event]) this[event](data);

    if (this.state.event) this.state.event(event, data);

    if (this.state[event]) this.state[event](data);

    this.trigger("post" + event, data);

    // if (this.state.proxy) this.state.proxy(event, data);

  },

  updateSize: function() {

    if (this.customContainer) {

      var containerWidth = this.container.offsetWidth;
      var containerHeight = this.container.offsetHeight;

    } else {

      var containerWidth = window.innerWidth;
      var containerHeight = window.innerHeight;

    }

    if (!this.autoScale && !this.autoWidth && !this.autoHeight) {

    } else if (!this.autoHeight && this.autoWidth) {

      if (this.autoScale) this.scale = containerHeight / this.height;

      this.width = Math.ceil(containerWidth / this.scale);

    } else if (!this.autoWidth && this.autoHeight) {

      if (this.autoScale) this.scale = containerWidth / this.width;

      this.height = Math.ceil(containerHeight / this.scale);


    } else if (this.autoWidth && this.autoHeight && this.autoScale) {

      this.scale = 1;
      this.width = containerWidth;
      this.height = containerHeight;

    } else if (this.autoWidth && this.autoHeight) {

      this.width = Math.ceil(containerWidth / this.scale);
      this.height = Math.ceil(containerHeight / this.scale);

    } else {

      this.scale = Math.min(containerWidth / this.width, containerHeight / this.height);

    }

    this.offsetX = (containerWidth - this.width * this.scale) / 2 | 0;
    this.offsetY = (containerHeight - this.height * this.scale) / 2 | 0;

    this.center = {
      x: this.width / 2 | 0,
      y: this.height / 2 | 0
    };

  },

  handleResize: function() {

    this.updateSize();

    this.mouse.handleResize();
    this.touch.handleResize();

    this.emitGlobalEvent("resize", {});

  },

  /* 
    request a file over http 
    it shall be later an abstraction using 'fs' in node-webkit

    returns a promise
  */

  request: function(url) {

    function promise(success, fail) {

      var request = new XMLHttpRequest();

      var app = this;

      request.open("GET", url, true);

      request.onload = function(event) {

        var xhr = event.target;

        if (xhr.status !== 200 && xhr.status !== 0) {

          return fail(new Error("Failed to get " + url));

        }

        success(xhr);

      }

      request.send();

    }

    return new Promise(promise);

  },

  /* imaginary timeout to delay loading */

  loadFoo: function(timeout) {

    var loader = this.loader;

    this.loader.add("foo " + timeout);

    setTimeout(function() {
      loader.success("foo " + timeout);
    }, timeout * 1000);

  },

  /* data/json */

  loadData: function() {

    for (var i = 0; i < arguments.length; i++) {

      var arg = arguments[i];

      if (typeof arg === "object") {

        for (var key in arg) this.loadData(arg[key]);

      } else {

        this.loadDataItem(arg);

      }

    }

  },

  loadDataItem: function(name) {

    var entry = this.getAssetEntry(name, "data", "json");

    var app = this;

    this.loader.add();

    this.request(entry.url).then(processData);

    function processData(request) {

      if (entry.ext === "json") {
        app.data[entry.key] = JSON.parse(request.responseText);
      } else {
        app.data[entry.key] = request.responseText;
      }

      app.loader.success(entry.url);

    }

  },

  /* images */

  loadImage: function() {

    return this.loadImages.apply(this, arguments);

  },

  loadImages: function() {

    var promises = [];

    for (var i = 0; i < arguments.length; i++) {

      var arg = arguments[i];

      /* polymorphism at its finest */

      if (typeof arg === "object") {

        for (var key in arg) promises = promises.concat(this.loadImages(arg[key]));

      } else {

        promises.push(this.loadOneImage(arg));

      }

    }

    return Promise.all(promises);

  },

  loadOneImage: function(name) {

    var app = this;

    if (!this._imageLoaders) this._imageLoaders = {};

    if (!this._imageLoaders[name]) {

      var promise = function(resolve, reject) {

        /* if argument is not an object/array let's try to load it */

        var loader = app.loader;

        var entry = app.getAssetEntry(name, "images", "png");

        app.loader.add(entry.path);

        var image = app.images[entry.key] = new Image;

        image.addEventListener("load", function() {

          resolve(image);
          loader.success(entry.url);

        });

        image.addEventListener("error", function() {

          reject("can't load " + entry.url);
          loader.error(entry.url);

        });

        image.src = entry.url;

      };

      app._imageLoaders[name] = new Promise(promise);

    }

    return this._imageLoaders[name];

  },

  render: function() {

  }

};

PLAYGROUND.Utils.extend(PLAYGROUND.Application.prototype, PLAYGROUND.Events.prototype);



/* file: src/GameLoop.js */

PLAYGROUND.GameLoop = function(app) {

  app.lifetime = 0;
  app.ops = 0;
  app.opcost = 0;

  var lastTick = Date.now();
  var frame = 0;
  var unbounded = false;

  function render(dt) {
    
    app.emitGlobalEvent("render", dt)
    app.emitGlobalEvent("postrender", dt)

  };

  function step(dt) {

    app.emitGlobalEvent("step", dt)

  };

  function gameLoop() {

    if (!app.unbound) {
      if (app.immidiate) {
        setZeroTimeout(gameLoop);
      } else {
        requestAnimationFrame(gameLoop);
      }
    }

    var started = performance.now();

    var delta = Date.now() - lastTick;

    lastTick = Date.now();

    if (app.unbound) {
      delta = 20;
    }

    if (delta > 1000) return;

    var dt = delta / 1000;

    app.lifetime += dt;
    app.elapsed = dt;
    
    step(dt);

    app.frameTime = performance.now() - started;

    render(dt);

    if (app.unbound && !unbounded) {
      unbounded = true;
      while (app.unbound) {
        gameLoop();
      }
      unbounded = false;
    }

  };

  requestAnimationFrame(gameLoop);

};

// Only add setZeroTimeout to the window object, and hide everything
// else in a closure.
(function() {
  var timeouts = [];
  var messageName = "zero-timeout-message";

  // Like setTimeout, but only takes a function argument.  There's
  // no time argument (always zero) and no arguments (you have to
  // use a closure).
  function setZeroTimeout(fn) {
    timeouts.push(fn);
    window.postMessage(messageName, "*");
  }

  function handleMessage(event) {
    if (event.source == window && event.data == messageName) {
      event.stopPropagation();
      if (timeouts.length > 0) {
        var fn = timeouts.shift();
        fn();
      }
    }
  }

  window.addEventListener("message", handleMessage, true);

  // Add the one thing we want added to the window object.
  window.setZeroTimeout = setZeroTimeout;
})();

/* file: src/Gamepads.js */

PLAYGROUND.Gamepads = function(app) {

  this.app = app;

  PLAYGROUND.Events.call(this);

  this.getGamepads = navigator.getGamepads || navigator.webkitGetGamepads;

  this.gamepadmoveEvent = {};
  this.gamepaddownEvent = {};
  this.gamepadupEvent = {};

  this.gamepads = {};

  this.app.on("step", this.step.bind(this));

};

PLAYGROUND.Gamepads.prototype = {

  buttons: {
    0: "1",
    1: "2",
    2: "3",
    3: "4",
    4: "l1",
    5: "r1",
    6: "l2",
    7: "r2",
    8: "select",
    9: "start",
    12: "up",
    13: "down",
    14: "left",
    15: "right"
  },

  zeroState: function() {

    var buttons = [];

    for (var i = 0; i <= 15; i++) {
      buttons.push({
        pressed: false,
        value: 0
      });
    }

    return {
      axes: [],
      buttons: buttons
    };

  },

  createGamepad: function() {

    var result = {
      buttons: {},
      sticks: [{
        x: 0,
        y: 0
      }, {
        x: 0,
        y: 0
      }]
    };


    for (var i = 0; i < 16; i++) {
      var key = this.buttons[i];
      result.buttons[key] = false;
    }

    return result;

  },

  step: function() {

    if (!navigator.getGamepads) return;

    var gamepads = navigator.getGamepads();

    for (var i = 0; i < gamepads.length; i++) {

      var current = gamepads[i];

      if (!current) continue;

      if (!this[i]) this[i] = this.createGamepad();

      /* have to concat the current.buttons because the are read-only */

      var buttons = [].concat(current.buttons);

      /* hack for missing  dpads */

      for (var h = 12; h <= 15; h++) {
        if (!buttons[h]) buttons[h] = {
          pressed: false,
          value: 0
        };
      }

      var previous = this[i];

      /* axes (sticks) to buttons */

      if (current.axes) {

        if (current.axes[0] < 0) buttons[14].pressed = true;
        if (current.axes[0] > 0) buttons[15].pressed = true;
        if (current.axes[1] < 0) buttons[12].pressed = true;
        if (current.axes[1] > 0) buttons[13].pressed = true;

        previous.sticks[0].x = current.axes[0].value;
        previous.sticks[0].y = current.axes[1].value;
        previous.sticks[1].x = current.axes[2].value;
        previous.sticks[1].y = current.axes[3].value;

      }

      /* check buttons changes */

      for (var j = 0; j < buttons.length; j++) {

        var key = this.buttons[j];

        /* gamepad down */

        if (buttons[j].pressed && !previous.buttons[key]) {

          previous.buttons[key] = true;
          this.gamepaddownEvent.button = this.buttons[j];
          this.gamepaddownEvent.gamepad = i;
          this.trigger("gamepaddown", this.gamepaddownEvent);

        }

        /* gamepad up */
        else if (!buttons[j].pressed && previous.buttons[key]) {

          previous.buttons[key] = false;
          this.gamepadupEvent.button = this.buttons[j];
          this.gamepadupEvent.gamepad = i;
          this.trigger("gamepadup", this.gamepadupEvent);

        }

      }

    }

  }
};

PLAYGROUND.Utils.extend(PLAYGROUND.Gamepads.prototype, PLAYGROUND.Events.prototype);


/* file: src/Keyboard.js */

PLAYGROUND.Keyboard = function() {

  PLAYGROUND.Events.call(this);

  this.keys = {};

  document.addEventListener("keydown", this.keydown.bind(this));
  document.addEventListener("keyup", this.keyup.bind(this));
  document.addEventListener("keypress", this.keypress.bind(this));

  this.keydownEvent = {};
  this.keyupEvent = {};

  this.preventDefault = true;

};

PLAYGROUND.Keyboard.prototype = {

  keycodes: {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "delete",
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "capslock",
    27: "escape",
    32: "space",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    144: "numlock",
    145: "scrolllock",
    186: "semicolon",
    187: "equal",
    188: "comma",
    189: "dash",
    190: "period",
    191: "slash",
    192: "graveaccent",
    219: "openbracket",
    220: "backslash",
    221: "closebraket",
    222: "singlequote"
  },

  keypress: function(e) {

  },

  keydown: function(e) {
    if (e.which >= 48 && e.which <= 90) var keyName = String.fromCharCode(e.which).toLowerCase();
    else var keyName = this.keycodes[e.which];

    if (this.keys[keyName]) return;

    this.keydownEvent.key = keyName;
    this.keydownEvent.original = e;

    this.keys[keyName] = true;

    this.trigger("keydown", this.keydownEvent);

    if (this.preventDefault && document.activeElement === document.body) {
      e.returnValue = false;
      e.keyCode = 0;
      e.preventDefault();
      e.stopPropagation();
    }
  },

  keyup: function(e) {

    if (e.which >= 48 && e.which <= 90) var keyName = String.fromCharCode(e.which).toLowerCase();
    else var keyName = this.keycodes[e.which];

    this.keyupEvent.key = keyName;
    this.keyupEvent.original = e;

    this.keys[keyName] = false;

    this.trigger("keyup", this.keyupEvent);
  }

};

PLAYGROUND.Utils.extend(PLAYGROUND.Keyboard.prototype, PLAYGROUND.Events.prototype);



/* file: src/Pointer.js */

PLAYGROUND.Pointer = function(app) {

  this.app = app;

  app.on("touchstart", this.touchstart, this);
  app.on("touchend", this.touchend, this);
  app.on("touchmove", this.touchmove, this);

  app.on("mousemove", this.mousemove, this);
  app.on("mousedown", this.mousedown, this);
  app.on("mouseup", this.mouseup, this);

  this.pointers = app.pointers = {};

};

PLAYGROUND.Pointer.plugin = true;

PLAYGROUND.Pointer.prototype = {

  updatePointer: function(pointer) {

    this.pointers[pointer.id] = pointer;

  },

  removePointer: function(pointer) {

    delete this.pointers[pointer.id];

  },

  touchstart: function(e) {

    e.touch = true;

    this.updatePointer(e);

    this.app.emitGlobalEvent("pointerdown", e);

  },

  touchend: function(e) {

    e.touch = true;

    this.removePointer(e);

    this.app.emitGlobalEvent("pointerup", e);

  },

  touchmove: function(e) {

    e.touch = true;

    this.updatePointer(e);

    this.app.emitGlobalEvent("pointermove", e);

  },

  mousemove: function(e) {

    e.mouse = true;

    this.updatePointer(e);

    this.app.emitGlobalEvent("pointermove", e);

  },

  mousedown: function(e) {

    e.mouse = true;

    this.app.emitGlobalEvent("pointerdown", e);

  },

  mouseup: function(e) {

    e.mouse = true;

    this.app.emitGlobalEvent("pointerup", e);

  },

  mousewheel: function(e) {

    e.mouse = true;

    this.app.emitGlobalEvent("pointerwheel", e);

  }

};

/* file: src/Loader.js */

/* Loader */

PLAYGROUND.Loader = function(app) {

  this.app = app;

  PLAYGROUND.Events.call(this);

  this.reset();

};

PLAYGROUND.Loader.prototype = {

  /* loader */

  add: function(id) {

    this.queue++;
    this.count++;
    this.ready = false;
    this.trigger("add", id);

    return id;

  },

  error: function(id) {

    this.trigger("error", id);

  },

  success: function(id) {

    this.queue--;

    this.progress = 1 - this.queue / this.count;

    this.trigger("load", id);

    if (this.queue <= 0) {
      this.trigger("ready");
      this.reset();
    }

  },

  reset: function() {

    this.progress = 0;
    this.queue = 0;
    this.count = 0;
    this.ready = true;

  }
};

PLAYGROUND.Utils.extend(PLAYGROUND.Loader.prototype, PLAYGROUND.Events.prototype);

/* file: src/Mouse.js */

PLAYGROUND.Mouse = function(app, element) {

  var self = this;

  this.app = app;

  PLAYGROUND.Events.call(this);

  this.element = element;

  this.buttons = {};

  this.preventContextMenu = true;

  this.mousemoveEvent = {};
  this.mousedownEvent = {};
  this.mouseupEvent = {};
  this.mousewheelEvent = {};

  this.x = 0;
  this.y = 0;

  element.addEventListener("mousemove", this.mousemove.bind(this));
  element.addEventListener("mousedown", this.mousedown.bind(this));
  element.addEventListener("mouseup", this.mouseup.bind(this));

  this.enableMousewheel();

  this.element.addEventListener("contextmenu", function(e) {
    if (self.preventContextMenu) e.preventDefault();
  });

  element.requestPointerLock = element.requestPointerLock ||
    element.mozRequestPointerLock ||
    element.webkitRequestPointerLock;

  document.exitPointerLock = document.exitPointerLock ||
    document.mozExitPointerLock ||
    document.webkitExitPointerLock;


  this.handleResize();
};

PLAYGROUND.Mouse.prototype = {

  lock: function() {

    this.locked = true;
    this.element.requestPointerLock();

  },

  unlock: function() {

    this.locked = false;
    document.exitPointerLock();

  },

  getElementOffset: function(element) {

    var offsetX = 0;
    var offsetY = 0;

    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    }

    while ((element = element.offsetParent));

    return {
      x: offsetX,
      y: offsetY
    };

  },

  handleResize: function() {

    this.elementOffset = this.getElementOffset(this.element);

  },

  mousemove: PLAYGROUND.Utils.throttle(function(e) {

    this.x = this.mousemoveEvent.x = (e.pageX - this.elementOffset.x - this.app.offsetX) / this.app.scale | 0;
    this.y = this.mousemoveEvent.y = (e.pageY - this.elementOffset.y - this.app.offsetY) / this.app.scale | 0;

    this.mousemoveEvent.original = e;

    if (this.locked) {
      this.mousemoveEvent.movementX = e.movementX ||
        e.mozMovementX ||
        e.webkitMovementX ||
        0;

      this.mousemoveEvent.movementY = e.movementY ||
        e.mozMovementY ||
        e.webkitMovementY ||
        0;
    }

    if (this.app.mouseToTouch) {
      //      if (this.left) {
      this.mousemoveEvent.id = this.mousemoveEvent.identifier = 255;
      this.trigger("touchmove", this.mousemoveEvent);
      //      }
    } else {
      this.mousemoveEvent.id = this.mousemoveEvent.identifier = 255;
      this.trigger("mousemove", this.mousemoveEvent);
    }

  }, 16),

  mousedown: function(e) {

    var buttonName = ["left", "middle", "right"][e.button];

    this.mousedownEvent.x = this.mousemoveEvent.x;
    this.mousedownEvent.y = this.mousemoveEvent.y;
    this.mousedownEvent.button = buttonName;
    this.mousedownEvent.original = e;

    this[buttonName] = true;

    this.mousedownEvent.id = this.mousedownEvent.identifier = 255;

    if (this.app.mouseToTouch) {
      this.trigger("touchmove", this.mousedownEvent);
      this.trigger("touchstart", this.mousedownEvent);
    } else {
      this.trigger("mousedown", this.mousedownEvent);
    }

  },

  mouseup: function(e) {

    var buttonName = ["left", "middle", "right"][e.button];

    this.mouseupEvent.x = this.mousemoveEvent.x;
    this.mouseupEvent.y = this.mousemoveEvent.y;
    this.mouseupEvent.button = buttonName;
    this.mouseupEvent.original = e;

    this.mouseupEvent.id = this.mouseupEvent.identifier = 255;

    if (this.app.mouseToTouch) {

      this.trigger("touchend", this.mouseupEvent);

    } else {

      this.trigger("mouseup", this.mouseupEvent);

    }

    this[buttonName] = false;

  },

  mousewheel: function(e) {

    this.mousewheelEvent.x = this.mousemoveEvent.x;
    this.mousewheelEvent.y = this.mousemoveEvent.y;
    this.mousewheelEvent.button = ["none", "left", "middle", "right"][e.button];
    this.mousewheelEvent.original = e;
    this.mousewheelEvent.id = this.mousewheelEvent.identifier = 255;

    this[e.button] = false;

    this.trigger("mousewheel", this.mousewheelEvent);

  },


  enableMousewheel: function() {

    var eventNames = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var callback = this.mousewheel.bind(this);
    var self = this;

    for (var i = eventNames.length; i;) {

      self.element.addEventListener(eventNames[--i], PLAYGROUND.Utils.throttle(function(event) {

        var orgEvent = event || window.event,
          args = [].slice.call(arguments, 1),
          delta = 0,
          deltaX = 0,
          deltaY = 0,
          absDelta = 0,
          absDeltaXY = 0,
          fn;

        orgEvent.type = "mousewheel";

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) {
          delta = orgEvent.wheelDelta;
        }

        if (orgEvent.detail) {
          delta = orgEvent.detail * -1;
        }

        // New school wheel delta (wheel event)
        if (orgEvent.deltaY) {
          deltaY = orgEvent.deltaY * -1;
          delta = deltaY;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
          deltaY = orgEvent.wheelDeltaY;
        }

        var result = delta ? delta : deltaY;

        self.mousewheelEvent.x = self.mousemoveEvent.x;
        self.mousewheelEvent.y = self.mousemoveEvent.y;
        self.mousewheelEvent.delta = result / Math.abs(result);
        self.mousewheelEvent.original = orgEvent;

        callback(self.mousewheelEvent);

        orgEvent.preventDefault();

      }, 40), false);
    }

  }

};

PLAYGROUND.Utils.extend(PLAYGROUND.Mouse.prototype, PLAYGROUND.Events.prototype);

/* file: src/Sound.js */

PLAYGROUND.Sound = function(app) {

  var audioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

  if (audioContext) {

    if (!PLAYGROUND.audioContext) PLAYGROUND.audioContext = new audioContext;

    app.audioContext = PLAYGROUND.audioContext;
    app.sound = new PLAYGROUND.SoundWebAudioAPI(app, app.audioContext);
    app.music = new PLAYGROUND.SoundWebAudioAPI(app, app.audioContext);

  } else {

    app.sound = new PLAYGROUND.SoundAudio(app);
    app.music = new PLAYGROUND.SoundAudio(app);

  }

};

PLAYGROUND.Application.prototype.playSound = function(key, loop) {

  return this.sound.play(key, loop);

};

PLAYGROUND.Application.prototype.stopSound = function(sound) {

  this.sound.stop(sound);

};

PLAYGROUND.Application.prototype.loadSound = function() {

  return this.loadSounds.apply(this, arguments);

};

PLAYGROUND.Application.prototype.loadSounds = function() {

  for (var i = 0; i < arguments.length; i++) {

    var arg = arguments[i];

    /* polymorphism at its finest */

    if (typeof arg === "object") {

      for (var key in arg) this.loadSounds(arg[key]);

    } else {
      this.sound.load(arg);
    }
  }

};

/* file: src/SoundWebAudioAPI.js */

PLAYGROUND.SoundWebAudioAPI = function(app, audioContext) {

  this.app = app;

  var canPlayMp3 = (new Audio).canPlayType("audio/mp3");
  var canPlayOgg = (new Audio).canPlayType('audio/ogg; codecs="vorbis"');

  if (this.app.preferedAudioFormat === "mp3") {

    if (canPlayMp3) this.audioFormat = "mp3";
    else this.audioFormat = "ogg";

  } else {

    if (canPlayOgg) this.audioFormat = "ogg";
    else this.audioFormat = "mp3";

  }

  this.context = audioContext;

  this.gainNode = this.context.createGain()
  this.gainNode.connect(this.context.destination);

  this.compressor = this.context.createDynamicsCompressor();
  this.compressor.connect(this.gainNode);

  this.output = this.gainNode;

  this.gainNode.gain.value = 1.0;

  this.pool = [];
  this.volume = 1.0;

  this.setMasterPosition(0, 0, 0);

  this.loops = [];

  this.app.on("step", this.step.bind(this));

};

PLAYGROUND.SoundWebAudioAPI.prototype = {

  buffers: {},
  aliases: {},

  alias: function(alias, source, volume, rate) {

    this.aliases[alias] = {
      source: source,
      volume: volume,
      rate: rate
    };

  },

  setMaster: function(volume) {

    this.volume = volume;

    this.gainNode.gain.value = volume;

  },

  load: function(file) {

    var entry = this.app.getAssetEntry(file, "sounds", this.audioFormat);

    var sampler = this;

    var request = new XMLHttpRequest();

    request.open("GET", entry.url, true);
    request.responseType = "arraybuffer";

    var id = this.app.loader.add(entry.url);

    request.onload = function() {

      sampler.context.decodeAudioData(this.response, function(decodedBuffer) {
        sampler.buffers[entry.key] = decodedBuffer;
        sampler.app.loader.success(entry.url);
      });

    }

    request.send();

  },

  cleanArray: function(array, property) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === null || (property && array[i][property])) {
        array.splice(i--, 1);
        len--;
      }
    }
  },

  setMasterPosition: function(x, y, z) {

    this.masterPosition = {
      x: x,
      y: y,
      z: z
    };

    this.context.listener.setPosition(x, y, z)
      // this.context.listener.setOrientation(0, 0, -1, 0, 1, 0);
      // this.context.listener.dopplerFactor = 1;
      // this.context.listener.speedOfSound = 343.3;
  },

  getSoundBuffer: function() {
    if (!this.pool.length) {
      for (var i = 0; i < 100; i++) {

        var buffer, gain, panner;

        var nodes = [
          buffer = this.context.createBufferSource(),
          gain = this.context.createGain(),
          panner = this.context.createPanner()
        ];

        panner.distanceModel = "linear";

        // 1 - rolloffFactor * (distance - refDistance) / (maxDistance - refDistance)
        // refDistance / (refDistance + rolloffFactor * (distance - refDistance))
        panner.refDistance = 1;
        panner.maxDistance = 600;
        panner.rolloffFactor = 1.0;


        // panner.setOrientation(-1, -1, 0);

        this.pool.push(nodes);

        nodes[0].connect(nodes[1]);
        // nodes[1].connect(nodes[2]);
        nodes[1].connect(this.output);
      }
    }

    return this.pool.pop();
  },

  play: function(name, loop) {

    var alias = this.aliases[name];

    var nodes = this.getSoundBuffer();

    if (alias) name = alias.source;

    bufferSource = nodes[0];
    bufferSource.gainNode = nodes[1];
    bufferSource.pannerNode = nodes[2];
    bufferSource.buffer = this.buffers[name];
    bufferSource.loop = loop || false;
    bufferSource.key = name;

    bufferSource.alias = alias;

    this.setVolume(bufferSource, 1.0);
    this.setPlaybackRate(bufferSource, 1.0);

    if (this.loop) {
      //  bufferSource.loopStart = this.loopStart;
      // bufferSource.loopEnd = this.loopEnd;
    }


    bufferSource.start(0);

    bufferSource.volumeLimit = 1;

    this.setPosition(bufferSource, this.masterPosition.x, this.masterPosition.y, this.masterPosition.z);

    return bufferSource;
  },

  stop: function(what) {

    if (!what) return;

    what.stop(0);

  },

  setPlaybackRate: function(sound, rate) {

    if (!sound) return;

    if (sound.alias) rate *= sound.alias.rate;

    return sound.playbackRate.value = rate;
  },

  setPosition: function(sound, x, y, z) {

    if (!sound) return;

    sound.pannerNode.setPosition(x, y || 0, z || 0);
  },

  setVelocity: function(sound, x, y, z) {

    if (!sound) return;

    sound.pannerNode.setPosition(x, y || 0, z || 0);

  },

  getVolume: function(sound) {

    if (!sound) return;

    return sound.gainNode.gain.value;

  },

  setVolume: function(sound, volume) {

    if (!sound) return;

    if (sound.alias) volume *= sound.alias.volume;

    return sound.gainNode.gain.value = Math.max(0, volume);
  },

  fadeOut: function(sound) {

    if (!sound) return;

    sound.fadeOut = true;

    this.loops.push(sound);

    return sound;

  },

  fadeIn: function(sound) {

    if (!sound) return;

    sound.fadeIn = true;

    this.loops.push(sound);
    this.setVolume(sound, 0);


    return sound;

  },

  step: function(delta) {

    for (var i = 0; i < this.loops.length; i++) {

      var loop = this.loops[i];

      if (loop.fadeIn) {
        var volume = this.getVolume(loop);
        volume = this.setVolume(loop, Math.min(1.0, volume + delta * 0.5));

        if (volume >= 1.0) {
          this.loops.splice(i--, 1);
        }
      }

      if (loop.fadeOut) {
        var volume = this.getVolume(loop);
        volume = this.setVolume(loop, Math.min(1.0, volume - delta * 0.5));

        if (volume <= 0) {
          this.loops.splice(i--, 1);
          this.stop(loop);
        }
      }

    }

  }

};

/* file: src/SoundAudio.js */

PLAYGROUND.SoundAudio = function(app) {

  this.app = app;

  var canPlayMp3 = (new Audio).canPlayType("audio/mp3");
  var canPlayOgg = (new Audio).canPlayType('audio/ogg; codecs="vorbis"');

  if (this.app.preferedAudioFormat === "mp3") {

    if (canPlayMp3) this.audioFormat = "mp3";
    else this.audioFormat = "ogg";

  } else {

    if (canPlayOgg) this.audioFormat = "ogg";
    else this.audioFormat = "mp3";

  }

};

PLAYGROUND.SoundAudio.prototype = {

  samples: {},

  setMaster: function(volume) {

    this.volume = volume;

  },

  setMasterPosition: function() {

  },

  setPosition: function(x, y, z) {
    return;
  },

  load: function(file) {

    var url = "sounds/" + file + "." + this.audioFormat;

    var loader = this.app.loader;

    this.app.loader.add(url);

    var audio = this.samples[file] = new Audio;

    audio.addEventListener("canplay", function() {
      loader.success(url);
    });

    audio.addEventListener("error", function() {
      loader.error(url);
    });

    audio.src = url;

  },

  play: function(key, loop) {

    var sound = this.samples[key];

    sound.currentTime = 0;
    sound.loop = loop;
    sound.play();

    return sound;

  },

  stop: function(what) {

    if (!what) return;

    what.pause();

  },

  step: function(delta) {

  },

  setPlaybackRate: function(sound, rate) {

    return;
  },

  setVolume: function(sound, volume) {

    sound.volume = volume * this.volume;

  },

  setPosition: function() {

  }

};

/* file: src/Touch.js */

PLAYGROUND.Touch = function(app, element) {

  PLAYGROUND.Events.call(this);

  this.app = app;

  this.element = element;

  this.buttons = {};

  this.touches = {};

  this.x = 0;
  this.y = 0;

  element.addEventListener("touchmove", this.touchmove.bind(this));
  element.addEventListener("touchstart", this.touchstart.bind(this));
  element.addEventListener("touchend", this.touchend.bind(this));

};

PLAYGROUND.Touch.prototype = {

  getElementOffset: function(element) {

    var offsetX = 0;
    var offsetY = 0;

    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    }

    while ((element = element.offsetParent));

    return {
      x: offsetX,
      y: offsetY
    };

  },

  handleResize: function() {

    this.elementOffset = this.getElementOffset(this.element);

  },

  touchmove: function(e) {

    for (var i = 0; i < e.changedTouches.length; i++) {

      var touch = e.changedTouches[i];

      touchmoveEvent = {}

      this.x = touchmoveEvent.x = (touch.pageX - this.elementOffset.x - this.app.offsetX) / this.app.scale | 0;
      this.y = touchmoveEvent.y = (touch.pageY - this.elementOffset.y - this.app.offsetY) / this.app.scale | 0;

      touchmoveEvent.original = touch;
      touchmoveEvent.id = touchmoveEvent.identifier = touch.identifier;

      this.touches[touch.identifier].x = touchmoveEvent.x;
      this.touches[touch.identifier].y = touchmoveEvent.y;

      this.trigger("touchmove", touchmoveEvent);

    }

    e.preventDefault();

  },

  touchstart: function(e) {

    for (var i = 0; i < e.changedTouches.length; i++) {

      var touch = e.changedTouches[i];

      var touchstartEvent = {}

      this.x = touchstartEvent.x = (touch.pageX - this.elementOffset.x - this.app.offsetX) / this.app.scale | 0;
      this.y = touchstartEvent.y = (touch.pageY - this.elementOffset.y - this.app.offsetY) / this.app.scale | 0;

      touchstartEvent.original = e.touch;
      touchstartEvent.id = touchstartEvent.identifier = touch.identifier;

      this.touches[touch.identifier] = {
        x: touchstartEvent.x,
        y: touchstartEvent.y
      };

      this.trigger("touchstart", touchstartEvent);

    }

    e.preventDefault();

  },

  touchend: function(e) {

    for (var i = 0; i < e.changedTouches.length; i++) {

      var touch = e.changedTouches[i];
      var touchendEvent = {};

      touchendEvent.x = (touch.pageX - this.elementOffset.x - this.app.offsetX) / this.app.scale | 0;
      touchendEvent.y = (touch.pageY - this.elementOffset.y - this.app.offsetY) / this.app.scale | 0;

      touchendEvent.original = touch;
      touchendEvent.id = touchendEvent.identifier = touch.identifier;

      delete this.touches[touch.identifier];

      this.trigger("touchend", touchendEvent);

    }

    e.preventDefault();

  }

};

PLAYGROUND.Utils.extend(PLAYGROUND.Touch.prototype, PLAYGROUND.Events.prototype);

/* file: src/Tween.js */

PLAYGROUND.Tween = function(manager, context) {

  PLAYGROUND.Events.call(this);

  this.manager = manager;
  this.context = context;

  PLAYGROUND.Utils.extend(this, {

    actions: [],
    index: -1,

    prevEasing: "045",
    prevDuration: 0.5

  });

  this.current = false;

};

PLAYGROUND.Tween.prototype = {

  add: function(properties, duration, easing) {

    if (duration) this.prevDuration = duration;
    else duration = 0.5;
    if (easing) this.prevEasing = easing;
    else easing = "045";

    this.actions.push([properties, duration, easing]);

    return this;

  },

  discard: function() {

    this.manager.discard(this.context, this);

    return this;

  },

  to: function(properties, duration, easing) {
    return this.add(properties, duration, easing);
  },

  loop: function() {

    this.looped = true;

    return this;

  },

  repeat: function(times) {

    this.actions.push(["repeat", times]);

  },

  wait: function(time) {

    this.actions.push(["wait", time]);

    return this;

  },

  delay: function(time) {

    this.actions.push(["wait", time]);

  },

  stop: function() {

    this.manager.remove(this);

    return this;

  },

  play: function() {

    this.manager.add(this);

    this.finished = false;

    return this;

  },


  end: function() {

    var lastAnimationIndex = 0;

    for (var i = this.index + 1; i < this.actions.length; i++) {
      if (typeof this.actions[i][0] === "object") lastAnimationIndex = i;
    }

    this.index = lastAnimationIndex - 1;
    this.next();
    this.delta = this.duration;
    this.step(0);

    return this;

  },

  forward: function() {

    this.delta = this.duration;
    this.step(0);

  },

  rewind: function() {

    this.delta = 0;
    this.step(0);

  },

  next: function() {

    this.delta = 0;

    this.index++;

    if (this.index >= this.actions.length) {

      if (this.looped) {

        this.trigger("loop", {
          tween: this
        });

        this.index = 0;
      } else {

        this.trigger("finished", {
          tween: this
        });

        this.finished = true;
        this.manager.remove(this);
        return;
      }
    }

    this.current = this.actions[this.index];

    if (this.current[0] === "wait") {

      this.duration = this.current[1];
      this.currentAction = "wait";

    } else {

      /* calculate changes */

      var properties = this.current[0];

      /* keep keys as array for 0.0001% performance boost */

      this.keys = Object.keys(properties);

      this.change = [];
      this.before = [];
      this.types = [];

      for (i = 0; i < this.keys.length; i++) {
        var key = this.keys[i];

        if (typeof this.context[key] === "number") {
          this.before.push(this.context[key]);
          this.change.push(properties[key] - this.context[key]);
          this.types.push(0);
        } else {
          var before = cq.color(this.context[key]);

          this.before.push(before);

          var after = cq.color(properties[key]);

          var temp = [];

          for (var j = 0; j < 3; j++) {
            temp.push(after[j] - before[j]);
          }

          this.change.push(temp);

          this.types.push(1);
        }

      }

      this.currentAction = "animate";

      this.duration = this.current[1];
      this.easing = this.current[2];

    }


  },

  prev: function() {

  },

  step: function(delta) {

    this.delta += delta;

    if (!this.current) this.next();

    switch (this.currentAction) {

      case "animate":
        this.doAnimate(delta);
        break;

      case "wait":
        this.doWait(delta);
        break;

    }

  },

  doAnimate: function(delta) {

    this.progress = Math.min(1, this.delta / this.duration);

    var mod = PLAYGROUND.Utils.ease(this.progress, this.easing);

    for (var i = 0; i < this.keys.length; i++) {

      var key = this.keys[i];

      switch (this.types[i]) {

        /* number */

        case 0:

          this.context[key] = this.before[i] + this.change[i] * mod;

          break;

          /* color */

        case 1:

          var change = this.change[i];
          var before = this.before[i];
          var color = [];

          for (var j = 0; j < 3; j++) {
            color.push(before[j] + change[j] * mod | 0);
          }

          this.context[key] = "rgb(" + color.join(",") + ")";

          break;
      }
    }

    if (this.progress >= 1) {
      this.next();
    }

  },

  doWait: function(delta) {

    if (this.delta >= this.duration) this.next();

  }

};

PLAYGROUND.Utils.extend(PLAYGROUND.Tween.prototype, PLAYGROUND.Events.prototype);

PLAYGROUND.TweenManager = function(app) {

  this.tweens = [];

  if (app) {
    this.app = app;
    this.app.tween = this.tween.bind(this);
  }

  this.delta = 0;

  this.app.on("step", this.step.bind(this));

};

PLAYGROUND.TweenManager.prototype = {

  defaultEasing: "128",

  discard: function(object, safe) {

    for (var i = 0; i < this.tweens.length; i++) {

      var tween = this.tweens[i];

      if (tween.context === object && tween !== safe) this.remove(tween);

    }

  },

  tween: function(context) {

    var tween = new PLAYGROUND.Tween(this, context);

    this.add(tween);

    return tween;

  },

  step: function(delta) {

    this.delta += delta;

    for (var i = 0; i < this.tweens.length; i++) {

      var tween = this.tweens[i];

      if (!tween._remove) tween.step(delta);

      if (tween._remove) this.tweens.splice(i--, 1);

    }

  },

  add: function(tween) {

    tween._remove = false;

    var index = this.tweens.indexOf(tween);

    if (index === -1) this.tweens.push(tween);

  },

  remove: function(tween) {

    tween._remove = true;

  }

};

/* file: src/VideoRecorder.js */

/* Video recorder */

PLAYGROUND.VideoRecorder = function(app, args) {

  this.app = app;

  this.app.on("step", this.step.bind(this));

};

PLAYGROUND.VideoRecorder.prototype = {

  setup: function(args) {

    this.region = false;

    PLAYGROUND.Utils.extend(this, {
      followMouse: false,
      framerate: 20,
      scale: 1.0
    }, args);

    if (!this.region) {
      this.region = [0, 0, this.app.layer.width, this.app.layer.height];
    }

    this.playbackRate = this.framerate / 60;

    this.layer = cq(this.region[2] * this.scale | 0, this.region[3] * this.scale | 0);
  },

  start: function(args) {
    this.setup(args);
    this.encoder = new Whammy.Video(this.framerate);
    this.captureTimeout = 0;
    this.recording = true;
  },

  step: function(delta) {

    if (this.encoder) {

      this.captureTimeout -= delta * 1000;

      if (this.captureTimeout <= 0) {
        this.captureTimeout = 1000 / this.framerate + this.captureTimeout;

        this.layer.drawImage(this.app.layer.canvas, this.region[0], this.region[1], this.region[2], this.region[3], 0, 0, this.layer.width, this.layer.height);
        this.encoder.add(this.layer.canvas);
      }

      this.app.screen.save().lineWidth(8).strokeStyle("#c00").strokeRect(0, 0, this.app.screen.width, this.app.screen.height).restore();
    }

  },

  stop: function() {
    if (!this.encoder) return;
    var output = this.encoder.compile();
    var url = (window.webkitURL || window.URL).createObjectURL(output);
    window.open(url);
    this.recording = false;

    delete this.encoder;
  },

  toggle: function(args) {

    if (this.encoder) this.stop();
    else this.start(args);

  }

};

PLAYGROUND.Application.prototype.record = function(args) {

  this.videoRecorder.toggle(args);

};

/* file: src/Atlases.js */

PLAYGROUND.Application.prototype.loadAtlases = function() {

  for (var i = 0; i < arguments.length; i++) {

    var arg = arguments[i];

    /* polymorphism at its finest */

    if (typeof arg === "object") {

      for (var key in arg) this.loadAtlases(arg[key]);

    } else {

      /* if argument is not an object/array let's try to load it */

      this._loadAtlas(arg)

    }
  }

};

PLAYGROUND.Application.prototype.loadAtlas = function() {

  return this.loadAtlases.apply(this, arguments);

};

PLAYGROUND.Application.prototype._loadAtlas = function(filename) {

  var entry = this.getAssetEntry(filename, "atlases", "png");

  this.loader.add(entry.url);

  var atlas = this.atlases[entry.key] = {};

  var image = atlas.image = new Image;

  image.addEventListener("load", function() {
    loader.success(entry.url);
  });

  image.addEventListener("error", function() {
    loader.error(entry.url);
  });

  image.src = entry.url;

  /* data */

  var request = new XMLHttpRequest();

  request.open("GET", entry.path + ".json", true);

  this.loader.add(entry.path + ".json");

  var loader = this.loader;

  request.onload = function() {

    var data = JSON.parse(this.response);

    atlas.frames = [];

    for (var i = 0; i < data.frames.length; i++) {
      var frame = data.frames[i];

      atlas.frames.push({
        region: [frame.frame.x, frame.frame.y, frame.frame.w, frame.frame.h],
        offset: [frame.spriteSourceSize.x || 0, frame.spriteSourceSize.y || 0],
        width: frame.sourceSize.w,
        height: frame.sourceSize.h
      });
    }

    loader.success(entry.path + ".json");

  }

  request.send();
};

/* file: src/Fonts.js */

PLAYGROUND.Application.prototype.loadFont = function(name) {

  var styleNode = document.createElement("style");
  styleNode.type = "text/css";

  var formats = {
    "woff": "woff",
    "ttf": "truetype"
  };

  var sources = "";

  for (var ext in formats) {
    var type = formats[ext];
    sources += " url(\"fonts/" + name + "." + ext + "\") format('" + type + "');"
  }

  styleNode.textContent = "@font-face { font-family: '" + name + "'; src: " + sources + " }";

  document.head.appendChild(styleNode);

  var layer = cq(32, 32);

  layer.font("10px Testing");
  layer.fillText(16, 16, 16).trim();

  var width = layer.width;
  var height = layer.height;

  this.loader.add("font " + name);

  var self = this;

  function check() {

    var layer = cq(32, 32);

    layer.font("10px " + name).fillText(16, 16, 16);
    layer.trim();

    if (layer.width !== width || layer.height !== height) {

      self.loader.ready("font " + name);

    } else {

      setTimeout(check, 250);

    }

  };

  check();

};

/* file: src/DefaultState.js */

PLAYGROUND.DefaultState = {

};

/* file: src/LoadingScreen.js */

PLAYGROUND.LoadingScreen = {

  /* basic loading screen using DOM */

  logoRaw: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAASBAMAAADPiN0xAAAAGFBMVEUAAQAtLixHSUdnaGaJioimqKXMzsv7/fr5shgVAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB98EAwkeA4oQWJ4AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAB9klEQVQ4y72UvW+rMBDAz+FrpVKrrFmesmapWNOlrKjSe1kZ+uoVAvj+/frujG1SaJcqJwU7voOf7xMQzQmsIDi5NPTMsLRntH3U+F6SAZo3NlCvcgBFJz8o+vkDiE63lI95Y/UmpinsZWkgJWJiDbAVQ16htptxSTNloIlugwaw001Ey3ASF3so6L1qLNXzQS5S0UGKL/CI5wWNriE0UH9Yty37LqIVg+wsqu7Ix0MwVBSF/dU+jv2SNnma021LEdPqVnMeU3xAu0kXcSGjmq7Ox4E2Wn88LZ2+EFj3avjixzai6VPVyuYveZLHF2XfdDnvAq27DIHGuq+0DJFsE30OtB1KqOwd8Dr7PcM4b+jfj2g5lp4WyntBK66qua3JzEA+uXJpwH/NlVuzRVPY/kTLB2mjuN+KwdZ8FOy8j2gDbEUSqumnSCY4lf4ibq3IhVM4ycZQRnv+zFqVdJQVn6BxvUqebGpuaNo3sZxwBzjajiMZOoBiwyVF+kCr+nUaJOaGpnAeRPPJZTr4FqmHRXcneEo4DqQ/ftfdnLeDrUAME8xWKPeKCwW6YkEpXfs3p1EWJhdcUAYP0TI/uYaV8cgjwBovaeyWwji2T9rTFIdS/cP/MnkTLRUWxgNNZVin7bT5fqT9miDcUVJzR1gRpfIONMmulU+5Qqr6zXAUqAAAAABJRU5ErkJggg==",

  create: function() {

    var self = this;

    this.logo = new Image;

    this.logo.addEventListener("load", function() {
      self.ready = true;
      self.createElements();
    });

    this.logo.src = this.logoRaw;

    this.background = "#000";

    if (window.getComputedStyle) {
      this.background = window.getComputedStyle(document.body).backgroundColor || "#000";
    }


  },

  enter: function() {

    this.current = 0;

  },

  leave: function() {

    this.locked = true;

    this.animation = this.app.tween(this)
      .to({
        current: 1
      }, 0.5);

  },

  step: function(delta) {

    if (this.locked) {

      if (this.animation.finished) {
        this.locked = false;
        this.wrapper.parentNode.removeChild(this.wrapper);
      }

    } else {

      this.current = this.current + Math.abs(this.app.loader.progress - this.current) * delta;
    }

  },

  createElements: function() {

    this.width = window.innerWidth * 0.6 | 0;
    this.height = window.innerHeight * 0.1 | 0;

    this.wrapper = document.createElement("div");
    this.wrapper.style.width = this.width + "px";
    this.wrapper.style.height = this.height + "px";
    this.wrapper.style.background = "#000";
    this.wrapper.style.border = "4px solid #fff";
    this.wrapper.style.position = "absolute";
    this.wrapper.style.left = (window.innerWidth / 2 - this.width / 2 | 0) + "px";
    this.wrapper.style.top = (window.innerHeight / 2 - this.height / 2 | 0) + "px";
    this.wrapper.style.zIndex = 100;

    this.app.container.appendChild(this.wrapper);

    this.progressBar = document.createElement("div");
    this.progressBar.style.width = "0%";
    this.progressBar.style.height = this.height + "px";
    this.progressBar.style.background = "#fff";

    this.wrapper.appendChild(this.progressBar);

  },


  render: function() {

    if (!this.ready) return;

    this.progressBar.style.width = (this.current * 100 | 0) + "%";


  }

};

/* file: src/lib/CanvasQuery.js */

/*     

  Canvas Query r2
  
  http://canvasquery.com
  
  (c) 2012-2015 http://rezoner.net
  
  Canvas Query may be freely distributed under the MIT license.

  ! fixed color parsers

*/


(function() {

  var COCOONJS = false;

  var Canvas = window.HTMLCanvasElement;
  var Image = window.HTMLImageElement;
  var COCOONJS = navigator.isCocoonJS;

  var cq = function(selector) {
    if (arguments.length === 0) {
      var canvas = cq.createCanvas(window.innerWidth, window.innerHeight);
      window.addEventListener("resize", function() {
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
      });
    } else if (typeof selector === "string") {
      var canvas = document.querySelector(selector);
    } else if (typeof selector === "number") {
      var canvas = cq.createCanvas(arguments[0], arguments[1]);
    } else if (selector instanceof Image) {
      var canvas = cq.createCanvas(selector);
    } else if (selector instanceof cq.Layer) {
      return selector;
    } else {
      var canvas = selector;
    }

    return new cq.Layer(canvas);
  };

  cq.lineSpacing = 1.0;
  cq.defaultFont = "Arial";

  cq.cocoon = function(selector) {
    if (arguments.length === 0) {
      var canvas = cq.createCocoonCanvas(window.innerWidth, window.innerHeight);
      window.addEventListener("resize", function() {});
    } else if (typeof selector === "string") {
      var canvas = document.querySelector(selector);
    } else if (typeof selector === "number") {
      var canvas = cq.createCocoonCanvas(arguments[0], arguments[1]);
    } else if (selector instanceof Image) {
      var canvas = cq.createCocoonCanvas(selector);
    } else if (selector instanceof cq.Layer) {
      return selector;
    } else {
      var canvas = selector;
    }

    return new cq.Layer(canvas);
  }


  cq.extend = function() {
    for (var i = 1; i < arguments.length; i++) {
      for (var j in arguments[i]) {
        arguments[0][j] = arguments[i][j];
      }
    }

    return arguments[0];
  };

  cq.augment = function() {
    for (var i = 1; i < arguments.length; i++) {
      _.extend(arguments[0], arguments[i]);
      arguments[i](arguments[0]);
    }
  };

  cq.distance = function(x1, y1, x2, y2) {
    if (arguments.length > 2) {
      var dx = x1 - x2;
      var dy = y1 - y2;

      return Math.sqrt(dx * dx + dy * dy);
    } else {
      return Math.abs(x1 - y1);
    }
  };

  /* fast.js */

  cq.fastApply = function(subject, thisContext, args) {

    switch (args.length) {
      case 0:
        return subject.call(thisContext);
      case 1:
        return subject.call(thisContext, args[0]);
      case 2:
        return subject.call(thisContext, args[0], args[1]);
      case 3:
        return subject.call(thisContext, args[0], args[1], args[2]);
      case 4:
        return subject.call(thisContext, args[0], args[1], args[2], args[3]);
      case 5:
        return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
      case 8:
        return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
      case 9:
        return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
      default:
        return subject.apply(thisContext, args);
    }

  };

  cq.extend(cq, {

    smoothing: true,

    blend: function(below, above, mode, mix) {

      if (typeof mix === "undefined") mix = 1;

      var below = cq(below);
      var mask = below.clone();
      var above = cq(above);

      below.save();
      below.globalAlpha(mix);
      below.globalCompositeOperation(mode);
      below.drawImage(above.canvas, 0, 0);
      below.restore();

      mask.save();
      mask.globalCompositeOperation("source-in");
      mask.drawImage(below.canvas, 0, 0);
      mask.restore();

      return mask;
    },

    matchColor: function(color, palette) {
      var rgbPalette = [];

      for (var i = 0; i < palette.length; i++) {
        rgbPalette.push(cq.color(palette[i]));
      }

      var imgData = cq.color(color);

      var difList = [];
      for (var j = 0; j < rgbPalette.length; j++) {
        var rgbVal = rgbPalette[j];
        var rDif = Math.abs(imgData[0] - rgbVal[0]),
          gDif = Math.abs(imgData[1] - rgbVal[1]),
          bDif = Math.abs(imgData[2] - rgbVal[2]);
        difList.push(rDif + gDif + bDif);
      }

      var closestMatch = 0;
      for (var j = 0; j < palette.length; j++) {
        if (difList[j] < difList[closestMatch]) {
          closestMatch = j;
        }
      }

      return palette[closestMatch];
    },

    temp: function(width, height) {
      if (!this.tempLayer) {
        this.tempLayer = cq(1, 1);
      }

      if (width instanceof Image) {
        this.tempLayer.width = width.width;
        this.tempLayer.height = width.height;
        this.tempLayer.context.drawImage(width, 0, 0);
      } else if (width instanceof Canvas) {
        this.tempLayer.width = width.width;
        this.tempLayer.height = width.height;
        this.tempLayer.context.drawImage(width, 0, 0);
      } else if (width instanceof CanvasQuery.Layer) {
        this.tempLayer.width = width.width;
        this.tempLayer.height = width.height;
        this.tempLayer.context.drawImage(width.canvas, 0, 0);
      } else {
        this.tempLayer.width = width;
        this.tempLayer.height = height;
      }

      return this.tempLayer;
    },

    wrapValue: function(value, min, max) {
      if (value < min) return max + (value % max);
      if (value >= max) return value % max;
      return value;
    },

    limitValue: function(value, min, max) {
      return value < min ? min : value > max ? max : value;
    },

    mix: function(a, b, amount) {
      return a + (b - a) * amount;
    },

    hexToRgb: function(hex) {
      if (hex.length === 7) return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
      else return ['0x' + hex[1] + hex[1] | 0, '0x' + hex[2] + hex[2] | 0, '0x' + hex[3] + hex[3] | 0];
    },

    rgbToHex: function(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1, 7);
    },

    /* author: http://mjijackson.com/ */

    rgbToHsl: function(r, g, b) {

      if (r instanceof Array) {
        b = r[2];
        g = r[1];
        r = r[0];
      }

      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;

      if (max == min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return [h, s, l];
    },

    /* author: http://mjijackson.com/ */

    hue2rgb: function(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    },

    hslToRgb: function(h, s, l) {
      var r, g, b;

      if (s == 0) {
        r = g = b = l; // achromatic
      } else {

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = this.hue2rgb(p, q, h + 1 / 3);
        g = this.hue2rgb(p, q, h);
        b = this.hue2rgb(p, q, h - 1 / 3);
      }

      return [r * 255 | 0, g * 255 | 0, b * 255 | 0];
    },

    rgbToHsv: function(r, g, b) {
      if (r instanceof Array) {
        b = r[2];
        g = r[1];
        r = r[0];
      }

      r = r / 255, g = g / 255, b = b / 255;
      var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      var h, s, v = max;

      var d = max - min;
      s = max == 0 ? 0 : d / max;

      if (max == min) {
        h = 0; // achromatic
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return [h, s, v];
    },

    hsvToRgb: function(h, s, v) {
      var r, g, b;

      var i = Math.floor(h * 6);
      var f = h * 6 - i;
      var p = v * (1 - s);
      var q = v * (1 - f * s);
      var t = v * (1 - (1 - f) * s);

      switch (i % 6) {
        case 0:
          r = v, g = t, b = p;
          break;
        case 1:
          r = q, g = v, b = p;
          break;
        case 2:
          r = p, g = v, b = t;
          break;
        case 3:
          r = p, g = q, b = v;
          break;
        case 4:
          r = t, g = p, b = v;
          break;
        case 5:
          r = v, g = p, b = q;
          break;
      }

      return [r * 255, g * 255, b * 255];
    },

    color: function() {
      var result = new cq.Color();
      result.parse(arguments[0], arguments[1]);
      return result;
    },

    poolArray: [],

    pool: function() {

      if (!this.poolArray.length) {
        for (var i = 0; i < 100; i++) {
          this.poolArray.push(this.createCanvas(1, 1));
        }
      }

      return this.poolArray.pop();

    },

    createCanvas: function(width, height) {
      var result = document.createElement("canvas");

      if (arguments[0] instanceof Image || arguments[0] instanceof Canvas) {
        var image = arguments[0];
        result.width = image.width;
        result.height = image.height;
        result.getContext("2d").drawImage(image, 0, 0);
      } else {
        result.width = width;
        result.height = height;
      }


      return result;
    },

    createCocoonCanvas: function(width, height) {
      var result = document.createElement("screencanvas");

      if (arguments[0] instanceof Image) {
        var image = arguments[0];
        result.width = image.width;
        result.height = image.height;
        result.getContext("2d").drawImage(image, 0, 0);
      } else {
        result.width = width;
        result.height = height;
      }

      return result;
    },

    createImageData: function(width, height) {
      return cq.createCanvas(width, height).getContext("2d").createImageData(width, height);
    }

  });

  cq.Layer = function(canvas) {
    this.context = canvas.getContext("2d");
    this.canvas = canvas;
    this.alignX = 0;
    this.alignY = 0;
    this.aligned = false;
    this.update();
  };

  cq.Layer.prototype = {

    update: function() {

      var smoothing = cq.smoothing;

      if (typeof this.smoothing !== "undefined") smoothing = this.smoothing;

      this.context.webkitImageSmoothingEnabled = smoothing;
      this.context.mozImageSmoothingEnabled = smoothing;
      this.context.msImageSmoothingEnabled = smoothing;
      this.context.imageSmoothingEnabled = smoothing;

      if (COCOONJS) Cocoon.Utils.setAntialias(smoothing);
    },

    appendTo: function(selector) {
      if (typeof selector === "object") {
        var element = selector;
      } else {
        var element = document.querySelector(selector);
      }

      element.appendChild(this.canvas);

      return this;
    },

    a: function(a) {
      if (arguments.length) {
        this.previousAlpha = this.globalAlpha();
        return this.globalAlpha(a);
      } else
        return this.globalAlpha();
    },

    ra: function() {
      return this.a(this.previousAlpha);
    },
    /*
        drawImage: function() {

          if (!this.alignX && !this.alignY) {
            this.context.call
          }

            return this;


        },

        restore: function() {
          this.context.restore();
          this.alignX = 0;
          this.alignY = 0;
        },
        */

    realign: function() {

      this.alignX = this.prevAlignX;
      this.alignY = this.prevAlignY;

      return this;

    },

    align: function(x, y) {

      if (typeof y === "undefined") y = x;

      this.alignX = x;
      this.alignY = y;

      return this;
    },


    /* save translate align rotate scale */

    stars: function(x, y, alignX, alignY, rotation, scaleX, scaleY) {

      if (typeof alignX === "undefined") alignX = 0.5;
      if (typeof alignY === "undefined") alignY = 0.5;
      if (typeof rotation === "undefined") rotation = 0;
      if (typeof scaleX === "undefined") scaleX = 1.0;
      if (typeof scaleY === "undefined") scaleY = scaleX;

      this.save();
      this.translate(x, y);
      this.align(alignX, alignY);
      this.rotate(rotation);
      this.scale(scaleX, scaleY);

      return this;
    },

    tars: function(x, y, alignX, alignY, rotation, scaleX, scaleY) {

      if (typeof alignX === "undefined") alignX = 0.5;
      if (typeof alignY === "undefined") alignY = 0.5;
      if (typeof rotation === "undefined") rotation = 0;
      if (typeof scaleX === "undefined") scaleX = 1.0;
      if (typeof scaleY === "undefined") scaleY = scaleX;

      this.translate(x, y);
      this.align(alignX, alignY);
      this.rotate(rotation);
      this.scale(scaleX, scaleY);

      return this;

    },

    fillRect: function() {

      if (this.alignX || this.alignY) {
        arguments[0] -= arguments[2] * this.alignX | 0;
        arguments[1] -= arguments[3] * this.alignY | 0;
      }

      cq.fastApply(this.context.fillRect, this.context, arguments);

      return this;

    },

    strokeRect: function() {

      if (this.alignX || this.alignY) {
        arguments[0] -= arguments[2] * this.alignX | 0;
        arguments[1] -= arguments[3] * this.alignY | 0;
      }

      cq.fastApply(this.context.strokeRect, this.context, arguments);

      return this;

    },

    drawImage: function(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {

      if (this.alignX || this.alignY) {
        if (sWidth == null) {
          sx -= image.width * this.alignX | 0;
          sy -= image.height * this.alignY | 0;
        } else {
          dx -= dWidth * this.alignX | 0;
          dy -= dHeight * this.alignY | 0;
        }
      }

      if (sWidth == null) {
        this.context.drawImage(image, sx, sy);
      } else if (dx == null) {
        this.context.drawImage(image, sx, sy, sWidth, sHeight);
      } else {
        this.context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      }

      // cq.fastApply(this.context.drawImage, this.context, arguments);

      return this;

    },

    save: function() {
      this.prevAlignX = this.alignX;
      this.prevAlignY = this.alignY;

      this.context.save();

      return this;
    },

    restore: function() {

      this.realign();
      this.context.restore();
      return this;
    },

    drawTile: function(image, x, y, frameX, frameY, frameWidth, frameHeight, frames, frame) {

    },

    drawAtlasFrame: function(atlas, frame, x, y) {

      var frame = atlas.frames[frame];

      this.drawRegion(
        atlas.image,
        frame.region,
        x - frame.width * this.alignX + frame.offset[0] + frame.region[2] * this.alignX, y - frame.height * this.alignY + frame.offset[1] + frame.region[3] * this.alignY
      );

      return this;

    },


    imageFill: function(image, width, height) {

      var scale = Math.max(width / image.width, height / image.height);

      this.save();
      this.scale(scale, scale);
      this.drawImage(image, 0, 0);
      this.restore();

    },

    drawRegion: function(image, region, x, y, scale) {

      scale = scale || 1;

      var dWidth = region[2] * scale | 0;
      var dHeight = region[3] * scale | 0;

      this.context.drawImage(
        image, region[0], region[1], region[2], region[3],
        x - dWidth * this.alignX | 0, y - dHeight * this.alignY | 0, dWidth, dHeight
      );

      return this;
    },

    cache: function() {
      return this.clone().canvas;

      /* FFS .... image.src is no longer synchronous when assigning dataURL */

      var image = new Image;
      image.src = this.canvas.toDataURL();
      return image;
    },

    blendOn: function(what, mode, mix) {
      cq.blend(what, this, mode, mix);

      return this;
    },

    posterize: function(pc, inc) {
      pc = pc || 32;
      inc = inc || 4;
      var imgdata = this.getImageData(0, 0, this.width, this.height);
      var data = imgdata.data;

      for (var i = 0; i < data.length; i += inc) {
        data[i] -= data[i] % pc; // set value to nearest of 8 possibilities
        data[i + 1] -= data[i + 1] % pc; // set value to nearest of 8 possibilities
        data[i + 2] -= data[i + 2] % pc; // set value to nearest of 8 possibilities
      }

      this.putImageData(imgdata, 0, 0); // put image data to canvas

      return this;
    },


    bw: function(pc) {
      pc = 128;
      var imgdata = this.getImageData(0, 0, this.width, this.height);
      var data = imgdata.data;
      // 8-bit: rrr ggg bb
      for (var i = 0; i < data.length; i += 4) {
        var v = ((data[i] + data[i + 1] + data[i + 2]) / 3);

        v = (v / 128 | 0) * 128;
        //data[i] = v; // set value to nearest of 8 possibilities
        //data[i + 1] = v; // set value to nearest of 8 possibilities
        data[i + 2] = (v / 255) * data[i]; // set value to nearest of 8 possibilities

      }

      this.putImageData(imgdata, 0, 0); // put image data to canvas
    },

    blend: function(what, mode, mix) {
      if (typeof what === "string") {
        var color = what;
        what = cq(this.canvas.width, this.canvas.height);
        what.fillStyle(color).fillRect(0, 0, this.canvas.width, this.canvas.height);
      }

      var result = cq.blend(this, what, mode, mix);

      this.canvas = result.canvas;
      this.context = result.context;

      return this;
    },

    textWithBackground: function(text, x, y, background, padding) {
      var w = this.measureText(text).width;
      var h = this.fontHeight() * 0.8;
      var f = this.fillStyle();
      var padding = padding || 2;

      this.fillStyle(background).fillRect(x - w / 2 - padding * 2, y - padding, w + padding * 4, h + padding * 2)
      this.fillStyle(f).textAlign("center").textBaseline("top").fillText(text, x, y);

      return this;
    },

    fillCircle: function(x, y, r) {
      this.context.beginPath();
      this.context.arc(x, y, r, 0, Math.PI * 2);
      this.context.fill();
      return this;
    },

    strokeCircle: function(x, y, r) {
      this.context.beginPath();
      this.context.arc(x, y, r, 0, Math.PI * 2);
      this.context.stroke();
      return this;
    },

    circle: function(x, y, r) {
      this.context.beginPath();
      this.context.arc(x, y, r, 0, Math.PI * 2);
      return this;
    },

    crop: function(x, y, w, h) {

      if (arguments.length === 1) {

        var y = arguments[0][1];
        var w = arguments[0][2];
        var h = arguments[0][3];
        var x = arguments[0][0];
      }

      var canvas = cq.createCanvas(w, h);
      var context = canvas.getContext("2d");

      context.drawImage(this.canvas, x, y, w, h, 0, 0, w, h);
      this.canvas.width = w;
      this.canvas.height = h;
      this.clear();
      this.context.drawImage(canvas, 0, 0);

      return this;
    },

    set: function(properties) {
      cq.extend(this.context, properties);
    },

    resize: function(width, height) {
      var w = width,
        h = height;

      if (arguments.length === 1) {
        w = arguments[0] * this.canvas.width | 0;
        h = arguments[0] * this.canvas.height | 0;
      } else {

        if (height === false) {
          if (this.canvas.width > width) {
            h = this.canvas.height * (width / this.canvas.width) | 0;
            w = width;
          } else {
            w = this.canvas.width;
            h = this.canvas.height;
          }
        } else if (width === false) {
          if (this.canvas.width > width) {
            w = this.canvas.width * (height / this.canvas.height) | 0;
            h = height;
          } else {
            w = this.canvas.width;
            h = this.canvas.height;
          }
        }
      }

      var cqresized = cq(w, h).drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, w, h);
      this.canvas = cqresized.canvas;
      this.context = cqresized.context;

      return this;
    },

    imageLine: function(image, region, x, y, ex, ey, scale) {
      if (!region) region = [0, 0, image.width, image.height];

      var distance = cq.distance(x, y, ex, ey);
      var count = distance / region[3] + 0.5 | 0;
      var angle = Math.atan2(ey - y, ex - x) + Math.PI / 2;

      this.save();

      this.translate(x, y);
      this.rotate(angle);

      if (scale) this.scale(scale, 1.0);

      for (var i = 0; i <= count; i++) {
        this.drawRegion(image, region, -region[2] / 2 | 0, -region[3] * (i + 1));
      }

      this.restore();

      return this;
    },

    trim: function(color, changes) {
      var transparent;

      if (color) {
        color = cq.color(color).toArray();
        transparent = !color[3];
      } else transparent = true;

      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      var bound = [this.canvas.width, this.canvas.height, 0, 0];

      var width = this.canvas.width;
      var height = this.canvas.height;

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        if (transparent) {
          if (!sourcePixels[i + 3]) continue;
        } else if (sourcePixels[i + 0] === color[0] && sourcePixels[i + 1] === color[1] && sourcePixels[i + 2] === color[2]) continue;

        var x = (i / 4 | 0) % this.canvas.width | 0;
        var y = (i / 4 | 0) / this.canvas.width | 0;

        if (x < bound[0]) bound[0] = x;
        if (x > bound[2]) bound[2] = x;

        if (y < bound[1]) bound[1] = y;
        if (y > bound[3]) bound[3] = y;
      }


      if (bound[2] === 0 && bound[3] === 0) {} else {
        if (changes) {
          changes.left = bound[0];
          changes.top = bound[1];

          changes.bottom = height - bound[3];
          changes.right = width - bound[2] - bound[0];

          changes.width = bound[2] - bound[0];
          changes.height = bound[3] - bound[1];
        }

        this.crop(bound[0], bound[1], bound[2] - bound[0] + 1, bound[3] - bound[1] + 1);
      }

      return this;
    },

    matchPalette: function(palette) {
      var imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

      var rgbPalette = [];

      for (var i = 0; i < palette.length; i++) {
        rgbPalette.push(cq.color(palette[i]));
      }


      for (var i = 0; i < imgData.data.length; i += 4) {
        var difList = [];
        if (!imgData.data[i + 3]) continue;

        for (var j = 0; j < rgbPalette.length; j++) {
          var rgbVal = rgbPalette[j];
          var rDif = Math.abs(imgData.data[i] - rgbVal[0]),
            gDif = Math.abs(imgData.data[i + 1] - rgbVal[1]),
            bDif = Math.abs(imgData.data[i + 2] - rgbVal[2]);
          difList.push(rDif + gDif + bDif);
        }

        var closestMatch = 0;

        for (var j = 0; j < palette.length; j++) {
          if (difList[j] < difList[closestMatch]) {
            closestMatch = j;
          }
        }

        var paletteRgb = cq.hexToRgb(palette[closestMatch]);
        imgData.data[i] = paletteRgb[0];
        imgData.data[i + 1] = paletteRgb[1];
        imgData.data[i + 2] = paletteRgb[2];

        /* dithering */
        //imgData.data[i + 3] = (255 * Math.random() < imgData.data[i + 3]) ? 255 : 0;

        //imgData.data[i + 3] = imgData.data[i + 3] > 128 ? 255 : 0;
        /*
        if (i % 3 === 0) {
          imgData.data[i] -= cq.limitValue(imgData.data[i] - 50, 0, 255);
          imgData.data[i + 1] -= cq.limitValue(imgData.data[i + 1] - 50, 0, 255);
          imgData.data[i + 2] -= cq.limitValue(imgData.data[i + 2] - 50, 0, 255);
        }
        */

      }

      this.context.putImageData(imgData, 0, 0);

      return this;
    },

    getPalette: function() {
      var palette = [];
      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        if (sourcePixels[i + 3]) {
          var hex = cq.rgbToHex(sourcePixels[i + 0], sourcePixels[i + 1], sourcePixels[i + 2]);
          if (palette.indexOf(hex) === -1) palette.push(hex);
        }
      }

      return palette;
    },

    mapPalette: function() {

    },

    polygon: function(array) {

      this.beginPath();

      this.moveTo(array[0][0], array[0][1]);

      for (var i = 1; i < array.length; i++) {
        this.lineTo(array[i][0], array[i][1]);
      }

      this.closePath();

      return this;
    },

    fillPolygon: function(polygon) {
      this.beginPath();
      this.polygon(polygon);
      this.fill();
    },

    strokePolygon: function(polygon) {
      this.beginPath();
      this.polygon(polygon);
      this.stroke();
    },

    colorToMask: function(color, inverted) {
      color = cq.color(color).toArray();
      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      var mask = [];

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        if (sourcePixels[i + 3] > 0) mask.push(inverted ? false : true);
        else mask.push(inverted ? true : false);
      }

      return mask;
    },

    grayscaleToMask: function() {

      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      var mask = [];

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        mask.push(((sourcePixels[i + 0] + sourcePixels[i + 1] + sourcePixels[i + 2]) / 3) / 255);
      }

      return mask;
    },

    applyMask: function(mask) {
      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      var mode = typeof mask[0] === "boolean" ? "bool" : "byte";

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        var value = mask[i / 4];
        sourcePixels[i + 3] = value * 255 | 0;
      }

      this.context.putImageData(sourceData, 0, 0);
      return this;
    },

    fillMask: function(mask) {

      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      var maskType = typeof mask[0] === "boolean" ? "bool" : "byte";
      var colorMode = arguments.length === 2 ? "normal" : "gradient";

      var color = cq.color(arguments[1]);
      if (colorMode === "gradient") colorB = cq.color(arguments[2]);

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        var value = mask[i / 4];

        if (maskType === "byte") value /= 255;

        if (colorMode === "normal") {
          if (value) {
            sourcePixels[i + 0] = color[0] | 0;
            sourcePixels[i + 1] = color[1] | 0;
            sourcePixels[i + 2] = color[2] | 0;
            sourcePixels[i + 3] = value * 255 | 0;
          }
        } else {
          sourcePixels[i + 0] = color[0] + (colorB[0] - color[0]) * value | 0;
          sourcePixels[i + 1] = color[1] + (colorB[1] - color[1]) * value | 0;
          sourcePixels[i + 2] = color[2] + (colorB[2] - color[2]) * value | 0;
          sourcePixels[i + 3] = 255;
        }
      }

      this.context.putImageData(sourceData, 0, 0);
      return this;
    },

    clear: function(color) {
      if (color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      } else {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }

      return this;
    },

    clone: function() {

      // var result = cq.createCanvas(this.canvas);

      var result = cq.pool();
      result.width = this.width;
      result.height = this.height;
      result.getContext("2d").drawImage(this.canvas, 0, 0);

      return cq(result);
    },

    gradientText: function(text, x, y, maxWidth, gradient) {

      var words = text.split(" ");

      var h = this.fontHeight() * 2;

      var ox = 0;
      var oy = 0;

      if (maxWidth) {
        var line = 0;
        var lines = [""];

        for (var i = 0; i < words.length; i++) {
          var word = words[i] + " ";
          var wordWidth = this.context.measureText(word).width;

          if (ox + wordWidth > maxWidth) {
            lines[++line] = "";
            ox = 0;
          }

          lines[line] += word;

          ox += wordWidth;
        }
      } else var lines = [text];

      for (var i = 0; i < lines.length; i++) {
        var oy = y + i * h * 0.6 | 0;
        var lingrad = this.context.createLinearGradient(0, oy, 0, oy + h * 0.6 | 0);

        for (var j = 0; j < gradient.length; j += 2) {
          lingrad.addColorStop(gradient[j], gradient[j + 1]);
        }

        var text = lines[i];

        this.fillStyle(lingrad).fillText(text, x, oy);
      }

      return this;
    },

    removeColor: function(color) {

      color = cq.color(color);

      var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var pixels = data.data;

      for (var x = 0; x < this.canvas.width; x++) {
        for (var y = 0; y < this.canvas.height; y++) {
          var i = (y * this.canvas.width + x) * 4;

          if (pixels[i + 0] === color[0] && pixels[i + 1] === color[1] && pixels[i + 2] === color[2]) {
            pixels[i + 3] = 0;
          }


        }
      }

      this.clear();
      this.context.putImageData(data, 0, 0);

      return this;
    },

    outline: function() {
      var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var pixels = data.data;

      var newData = this.createImageData(this.canvas.width, this.canvas.height);
      var newPixels = newData.data;

      var canvas = this.canvas;

      function check(x, y) {

        if (x < 0) return 0;
        if (x >= canvas.width) return 0;
        if (y < 0) return 0;
        if (y >= canvas.height) return 0;

        var i = (x + y * canvas.width) * 4;

        return pixels[i + 3] > 0;

      }

      for (var x = 0; x < this.canvas.width; x++) {
        for (var y = 0; y < this.canvas.height; y++) {

          var full = 0;
          var i = (y * canvas.width + x) * 4;

          if (!pixels[i + 3]) continue;

          full += check(x - 1, y);
          full += check(x + 1, y);
          full += check(x, y - 1);
          full += check(x, y + 1);

          if (full !== 4) {

            newPixels[i] = 255;
            newPixels[i + 1] = 255;
            newPixels[i + 2] = 255;
            newPixels[i + 3] = 255;
          }

        }
      }

      this.context.putImageData(newData, 0, 0);

      return this;
    },

    setHsl: function() {

      if (arguments.length === 1) {
        var args = arguments[0];
      } else {
        var args = arguments;
      }

      var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var pixels = data.data;
      var r, g, b, a, h, s, l, hsl = [],
        newPixel = [];

      for (var i = 0, len = pixels.length; i < len; i += 4) {
        hsl = cq.rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);

        h = args[0] === false ? hsl[0] : cq.limitValue(args[0], 0, 1);
        s = args[1] === false ? hsl[1] : cq.limitValue(args[1], 0, 1);
        l = args[2] === false ? hsl[2] : cq.limitValue(args[2], 0, 1);

        newPixel = cq.hslToRgb(h, s, l);

        pixels[i + 0] = newPixel[0];
        pixels[i + 1] = newPixel[1];
        pixels[i + 2] = newPixel[2];
      }

      this.context.putImageData(data, 0, 0);

      return this;
    },

    shiftHsl: function() {

      if (arguments.length === 1) {
        var args = arguments[0];
      } else {
        var args = arguments;
      }

      var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var pixels = data.data;
      var r, g, b, a, h, s, l, hsl = [],
        newPixel = [];

      for (var i = 0, len = pixels.length; i < len; i += 4) {
        hsl = cq.rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);

        if (pixels[i + 0] !== pixels[i + 1] || pixels[i + 1] !== pixels[i + 2]) {
          h = args[0] === false ? hsl[0] : cq.wrapValue(hsl[0] + args[0], 0, 1);
          s = args[1] === false ? hsl[1] : cq.limitValue(hsl[1] + args[1], 0, 1);
        } else {
          h = hsl[0];
          s = hsl[1];
        }

        l = args[2] === false ? hsl[2] : cq.limitValue(hsl[2] + args[2], 0, 1);

        newPixel = cq.hslToRgb(h, s, l);

        pixels[i + 0] = newPixel[0];
        pixels[i + 1] = newPixel[1];
        pixels[i + 2] = newPixel[2];
      }


      this.context.putImageData(data, 0, 0);

      return this;
    },

    applyColor: function(color) {

      if (COCOONJS) return this;
      this.save();

      this.globalCompositeOperation("source-in");
      this.clear(color);

      this.restore();

      return this;
    },

    negative: function(src, dst) {

      var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var pixels = data.data;
      var r, g, b, a, h, s, l, hsl = [],
        newPixel = [];

      for (var i = 0, len = pixels.length; i < len; i += 4) {
        pixels[i + 0] = 255 - pixels[i + 0];
        pixels[i + 1] = 255 - pixels[i + 1];
        pixels[i + 2] = 255 - pixels[i + 2];
      }

      this.context.putImageData(data, 0, 0);

      return this;
    },

    roundRect: function(x, y, width, height, radius) {

      this.beginPath();
      this.moveTo(x + radius, y);
      this.lineTo(x + width - radius, y);
      this.quadraticCurveTo(x + width, y, x + width, y + radius);
      this.lineTo(x + width, y + height - radius);
      this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      this.lineTo(x + radius, y + height);
      this.quadraticCurveTo(x, y + height, x, y + height - radius);
      this.lineTo(x, y + radius);
      this.quadraticCurveTo(x, y, x + radius, y);
      this.closePath();

      return this;
    },

    markupText: function(text) {


    },

    wrappedText: function(text, x, y, maxWidth, lineHeight) {

      var words = text.split(" ");

      var lineHeight = lineHeight || this.fontHeight();

      var ox = 0;
      var oy = 0;

      if (maxWidth) {
        var line = 0;
        var lines = [""];

        for (var i = 0; i < words.length; i++) {
          var word = words[i] + " ";
          var wordWidth = this.context.measureText(word).width;

          if (ox + wordWidth > maxWidth || words[i] === "\n") {
            lines[++line] = "";
            ox = 0;
          }
          if (words[i] !== "\n") {
            lines[line] += word;

            ox += wordWidth;
          }


        }
      } else {
        var lines = [text];
      }

      for (var i = 0; i < lines.length; i++) {
        var oy = y + i * lineHeight | 0;

        var text = lines[i];

        this.fillText(text, x, oy);
      }

      return this;
    },

    fontHeights: {},

    fontHeight: function() {
      var font = this.font();

      if (!this.fontHeights[font]) {
        var temp = cq(100, 100);
        var height = 0;
        var changes = {};
        temp.font(font).fillStyle("#fff");
        temp.textBaseline("bottom").fillText("gM", 25, 100);
        temp.trim(false, changes);
        height += changes.bottom;

        var temp = cq(100, 100);
        var changes = {};
        temp.font(font).fillStyle("#fff");
        temp.textBaseline("top").fillText("gM", 25, 0);
        temp.trim(false, changes);
        height += changes.top;

        var temp = cq(100, 100);
        var changes = {};
        temp.font(font).fillStyle("#fff");
        temp.textBaseline("alphabetic").fillText("gM", 50, 50);
        temp.trim(false, changes);
        height += temp.height;

        this.fontHeights[font] = height;
      }

      return this.fontHeights[font];
    },

    textBoundaries: function(text, maxWidth) {
      var words = text.split(" ");

      var h = this.fontHeight();

      var ox = 0;
      var oy = 0;

      if (maxWidth) {
        var line = 0;
        var lines = [""];

        for (var i = 0; i < words.length; i++) {
          var word = words[i] + " ";
          var wordWidth = this.context.measureText(word).width;

          if (ox + wordWidth > maxWidth || words[i] === "\n") {
            lines[++line] = "";
            ox = 0;
          }

          if (words[i] !== "\n") {
            lines[line] += word;
            ox += wordWidth;
          }
        }
      } else {
        var lines = [text];
        maxWidth = this.measureText(text).width;
      }

      return {
        height: lines.length * h,
        width: maxWidth,
        lines: lines.length,
        lineHeight: h
      }
    },

    repeatImageRegion: function(image, sx, sy, sw, sh, dx, dy, dw, dh) {
      this.save();
      this.rect(dx, dy, dw, dh);
      this.clip();

      for (var x = 0, len = Math.ceil(dw / sw); x < len; x++) {
        for (var y = 0, leny = Math.ceil(dh / sh); y < leny; y++) {
          this.drawImage(image, sx, sy, sw, sh, dx + x * sw, dy + y * sh, sw, sh);
        }
      }

      this.restore();

      return this;
    },

    repeatImage: function(image, x, y, w, h) {
      // if (!env.details) return this;

      if (arguments.length < 9) {
        this.repeatImageRegion(image, 0, 0, image.width, image.height, x, y, w, h);
      } else {
        this.repeatImageRegion.apply(this, arguments);
      }

      return this;
    },

    borderImage: function(image, x, y, w, h, t, r, b, l, fill) {

      // if (!env.details) return this;

      if (typeof t === "object") {

        var bottomLeft = t.bottomLeft || [0, 0, 0, 0];
        var bottomRight = t.bottomRight || [0, 0, 0, 0];
        var topLeft = t.topLeft || [0, 0, 0, 0];
        var topRight = t.topRight || [0, 0, 0, 0];

        var clh = bottomLeft[3] + topLeft[3];
        var crh = bottomRight[3] + topRight[3];
        var ctw = topLeft[2] + topRight[2];
        var cbw = bottomLeft[2] + bottomRight[2];

        t.fillPadding = [0, 0, 0, 0];

        if (t.left) t.fillPadding[0] = t.left[2];
        if (t.top) t.fillPadding[1] = t.top[3];
        if (t.right) t.fillPadding[2] = t.right[2];
        if (t.bottom) t.fillPadding[3] = t.bottom[3];

        // if (!t.fillPadding) t.fillPadding = [0, 0, 0, 0];

        if (t.fill) {
          this.drawImage(image, t.fill[0], t.fill[1], t.fill[2], t.fill[3], x + t.fillPadding[0], y + t.fillPadding[1], w - t.fillPadding[2] - t.fillPadding[0], h - t.fillPadding[3] - t.fillPadding[1]);
        } else {
          // this.fillRect(x + t.fillPadding[0], y + t.fillPadding[1], w - t.fillPadding[2] - t.fillPadding[0], h - t.fillPadding[3] - t.fillPadding[1]);
        }

        if (t.left) this[t.left[4] === "stretch" ? "drawImage" : "repeatImage"](image, t.left[0], t.left[1], t.left[2], t.left[3], x, y + topLeft[3], t.left[2], h - clh);
        if (t.right) this[t.right[4] === "stretch" ? "drawImage" : "repeatImage"](image, t.right[0], t.right[1], t.right[2], t.right[3], x + w - t.right[2], y + topRight[3], t.right[2], h - crh);
        if (t.top) this[t.top[4] === "stretch" ? "drawImage" : "repeatImage"](image, t.top[0], t.top[1], t.top[2], t.top[3], x + topLeft[2], y, w - ctw, t.top[3]);
        if (t.bottom) this[t.bottom[4] === "stretch" ? "drawImage" : "repeatImage"](image, t.bottom[0], t.bottom[1], t.bottom[2], t.bottom[3], x + bottomLeft[2], y + h - t.bottom[3], w - cbw, t.bottom[3]);

        if (t.bottomLeft) this.drawImage(image, t.bottomLeft[0], t.bottomLeft[1], t.bottomLeft[2], t.bottomLeft[3], x, y + h - t.bottomLeft[3], t.bottomLeft[2], t.bottomLeft[3]);
        if (t.topLeft) this.drawImage(image, t.topLeft[0], t.topLeft[1], t.topLeft[2], t.topLeft[3], x, y, t.topLeft[2], t.topLeft[3]);
        if (t.topRight) this.drawImage(image, t.topRight[0], t.topRight[1], t.topRight[2], t.topRight[3], x + w - t.topRight[2], y, t.topRight[2], t.topRight[3]);
        if (t.bottomRight) this.drawImage(image, t.bottomRight[0], t.bottomRight[1], t.bottomRight[2], t.bottomRight[3], x + w - t.bottomRight[2], y + h - t.bottomRight[3], t.bottomRight[2], t.bottomRight[3]);


      } else {


        /* top */
        if (t > 0 && w - l - r > 0) this.drawImage(image, l, 0, image.width - l - r, t, x + l, y, w - l - r, t);

        /* bottom */
        if (b > 0 && w - l - r > 0) this.drawImage(image, l, image.height - b, image.width - l - r, b, x + l, y + h - b, w - l - r, b);
        //      console.log(x, y, w, h, t, r, b, l);
        //      console.log(image, 0, t, l, image.height - b - t, x, y + t, l, h - b - t);
        /* left */
        if (l > 0 && h - b - t > 0) this.drawImage(image, 0, t, l, image.height - b - t, x, y + t, l, h - b - t);


        /* right */
        if (r > 0 && h - b - t > 0) this.drawImage(image, image.width - r, t, r, image.height - b - t, x + w - r, y + t, r, h - b - t);

        /* top-left */
        if (l > 0 && t > 0) this.drawImage(image, 0, 0, l, t, x, y, l, t);

        /* top-right */
        if (r > 0 && t > 0) this.drawImage(image, image.width - r, 0, r, t, x + w - r, y, r, t);

        /* bottom-right */
        if (r > 0 && b > 0) this.drawImage(image, image.width - r, image.height - b, r, b, x + w - r, y + h - b, r, b);

        /* bottom-left */
        if (l > 0 && b > 0) this.drawImage(image, 0, image.height - b, l, b, x, y + h - b, l, b);

        if (fill) {
          if (typeof fill === "string") {
            this.fillStyle(fill).fillRect(x + l, y + t, w - l - r, h - t - b);
          } else {
            if (w - l - r > 0 && h - t - b > 0)
              this.drawImage(image, l, t, image.width - r - l, image.height - b - t, x + l, y + t, w - l - r, h - t - b);
          }
        }
      }
    },

    setPixel: function(color, x, y) {

      /* fillRect is slow! */

      return this.fillStyle(color).fillRect(x, y, 1, 1);

      /* this is how it should work - but it does not */

      color = cq.color(color);

      var pixel = this.createImageData(1, 1);

      pixel.data[0] = color[0];
      pixel.data[1] = color[1];
      pixel.data[2] = color[2];
      pixel.data[3] = 1.0;

      this.putImageData(pixel, x, y);

      return this;
    },

    getPixel: function(x, y) {
      var pixel = this.context.getImageData(x, y, 1, 1).data;
      return cq.color([pixel[0], pixel[1], pixel[2], pixel[3]]);
    },

    createImageData: function(width, height) {
      if (false && this.context.createImageData) {
        return this.context.createImageData.apply(this.context, arguments);
      } else {
        if (!this.emptyCanvas) {
          this.emptyCanvas = cq.createCanvas(width, height);
          this.emptyCanvasContext = this.emptyCanvas.getContext("2d");
        }

        this.emptyCanvas.width = width;
        this.emptyCanvas.height = height;
        return this.emptyCanvasContext.getImageData(0, 0, width, height);
      }
    },

    strokeLine: function(x1, y1, x2, y2) {

      this.beginPath();

      if (typeof x2 === "undefined") {
        this.moveTo(x1.x, x1.y);
        this.lineTo(y1.x, y1.y);
      } else {
        this.moveTo(x1, y1);
        this.lineTo(x2, y2);
      }

      this.stroke();

      return this;

    },

    setLineDash: function(dash) {
      if (this.context.setLineDash) {
        this.context.setLineDash(dash);
        return this;
      } else return this;
    },

    measureText: function() {
      return this.context.measureText.apply(this.context, arguments);
    },

    getLineDash: function() {
      return this.context.getLineDash();
    },

    createRadialGradient: function() {
      return this.context.createRadialGradient.apply(this.context, arguments);
    },

    createLinearGradient: function() {
      return this.context.createLinearGradient.apply(this.context, arguments);
    },

    createPattern: function() {
      return this.context.createPattern.apply(this.context, arguments);
    },

    getImageData: function() {
      return this.context.getImageData.apply(this.context, arguments);
    },

    /* If you think that I am retarded because I use fillRect to set 
       pixels - read about premultipled alpha in canvas */

    writeMeta: function(data) {

      var json = JSON.stringify(data);

      json = encodeURIComponent(json);

      var bytes = [];

      for (var i = 0; i < json.length; i++) {
        bytes.push(json.charCodeAt(i));
        //      console.log(json[i])
      }

      bytes.push(127);

      var x = this.width - 1;
      var y = this.height - 1;

      var pixel = [];

      while (bytes.length) {

        var byte = bytes.shift();

        pixel.unshift(byte * 2);
        //        console.log(x + String.fromCharCode(byte), byte);

        if (!bytes.length)
          for (var i = 0; i < 3 - pixel.length; i++) pixel.unshift(254);

        if (pixel.length === 3) {
          this.fillStyle(cq.color(pixel).toRgb()).fillRect(x, y, 1, 1);
          pixel = [];
          x--;

          if (x < 0) {
            y--;
            x = this.width - 1;
          }
        }
      }

      return this;

    },

    readMeta: function() {

      var bytes = [];

      var x = this.width - 1;
      var y = this.height - 1;

      while (true) {
        var pixel = this.getPixel(x, y);

        var stop = false;

        for (var i = 0; i < 3; i++) {

          if (pixel[2 - i] === 254) stop = true;

          else bytes.push(pixel[2 - i] / 2 | 0);

        }

        if (stop) break;

        x--;

        if (x < 0) {
          y--;
          x = this.width - 1;
          break;
        }
      }


      var json = "";

      while (bytes.length) {
        json += String.fromCharCode(bytes.shift());
      }

      var data = false;

      console.log(json);

      try {
        data = JSON.parse(decodeURIComponent(json));
      } catch (e) {

      }

      return data;

    },

    get width() {
      return this.canvas.width;
    },

    get height() {
      return this.canvas.height;
    },

    set width(w) {
      this.canvas.width = w;
      this.update();
      return this.canvas.width;
    },

    set height(h) {
      this.canvas.height = h;
      this.update();
      return this.canvas.height;
    }


  };

  /* extend Layer with drawing context methods */

  var methods = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createRadialGradient", "createPattern", "drawFocusRing", "drawImage", "fill", "fillRect", "fillText", "getImageData", "isPointInPath", "lineTo", "measureText", "moveTo", "putImageData", "quadraticCurveTo", "rect", "restore", "rotate", "save", "scale", "setTransform", "stroke", "strokeRect", "strokeText", "transform", "translate", "setLineDash"];

  for (var i = 0; i < methods.length; i++) {
    var name = methods[i];

    if (cq.Layer.prototype[name]) continue;

    cq.Layer.prototype[name] = (function(method) {

      return function() {
        cq.fastApply(method, this.context, arguments);
        return this;
      }

    })(CanvasRenderingContext2D.prototype[name]);


    continue;


    if (!this.debug) {
      // if (!cq.Layer.prototype[name]) cq.Layer.prototype[name] = Function("this.context." + name + ".apply(this.context, arguments); return this;");

      var self = this;

      (function(name) {

        cq.Layer.prototype[name] = function() {
          // this.context[name].apply(this.context, arguments);

          cq.fastApply(this.context[name], this.context, arguments);

          return this;
        }

      })(name);

    } else {

      var self = this;

      (function(name) {

        cq.Layer.prototype[name] = function() {
          try {
            this.context[name].apply(this.context, arguments);
            return this;
          } catch (e) {
            var err = new Error();
            console.log(err.stack);
            throw (e + err.stack);

            console.log(e, name, arguments);
          }
        }

      })(name);

    }

  };

  /* create setters and getters */

  var properties = ["canvas", "fillStyle", "font", "globalAlpha", "globalCompositeOperation", "lineCap", "lineJoin", "lineWidth", "miterLimit", "shadowOffsetX", "shadowOffsetY", "shadowBlur", "shadowColor", "strokeStyle", "textAlign", "textBaseline", "lineDashOffset"];

  for (var i = 0; i < properties.length; i++) {
    var name = properties[i];
    if (!cq.Layer.prototype[name]) cq.Layer.prototype[name] = Function("if(arguments.length) { this.context." + name + " = arguments[0]; return this; } else { return this.context." + name + "; }");
  };

  /* color */

  cq.Color = function(data, type) {

    if (arguments.length) this.parse(data, type);
  }

  cq.Color.prototype = {

    toString: function() {
      return this.toRgb();
    },

    parse: function(args, type) {
      if (args[0] instanceof cq.Color) {
        this[0] = args[0][0];
        this[1] = args[0][1];
        this[2] = args[0][2];
        this[3] = args[0][3];
        return;
      }

      if (typeof args === "string") {
        var match = null;

        if (args[0] === "#") {
          var rgb = cq.hexToRgb(args);
          this[0] = rgb[0];
          this[1] = rgb[1];
          this[2] = rgb[2];
          this[3] = 1.0;
        } else if (match = args.match(/rgb\((.*),(.*),(.*)\)/)) {
          this[0] = match[1] | 0;
          this[1] = match[2] | 0;
          this[2] = match[3] | 0;
          this[3] = 1.0;
        } else if (match = args.match(/rgba\((.*),(.*),(.*)\)/)) {
          this[0] = match[1] | 0;
          this[1] = match[2] | 0;
          this[2] = match[3] | 0;
          this[3] = match[4] | 0;
        } else if (match = args.match(/hsl\((.*),(.*),(.*)\)/)) {
          this.fromHsl(match[1], match[2], match[3]);
        } else if (match = args.match(/hsv\((.*),(.*),(.*)\)/)) {
          this.fromHsv(match[1], match[2], match[3]);
        }
      } else {
        switch (type) {
          case "hsl":
          case "hsla":

            this.fromHsl(args[0], args[1], args[2], args[3]);
            break;

          case "hsv":
          case "hsva":

            this.fromHsv(args[0], args[1], args[2], args[3]);
            break;

          default:
            this[0] = args[0];
            this[1] = args[1];
            this[2] = args[2];
            this[3] = typeof args[3] === "undefined" ? 1.0 : args[3];
            break;
        }
      }
    },

    a: function(a) {
      return this.alpha(a);
    },

    alpha: function(a) {
      this[3] = a;
      return this;
    },

    fromHsl: function() {
      var components = arguments[0] instanceof Array ? arguments[0] : arguments;

      var color = cq.hslToRgb(parseFloat(components[0]), parseFloat(components[1]), parseFloat(components[2]));

      this[0] = color[0];
      this[1] = color[1];
      this[2] = color[2];
      this[3] = typeof arguments[3] === "undefined" ? 1.0 : arguments[3];
    },

    fromHsv: function() {
      var components = arguments[0] instanceof Array ? arguments[0] : arguments;
      var color = cq.hsvToRgb(parseFloat(components[0]), parseFloat(components[1]), parseFloat(components[2]));

      this[0] = color[0];
      this[1] = color[1];
      this[2] = color[2];
      this[3] = typeof arguments[3] === "undefined" ? 1.0 : arguments[3];
    },

    toArray: function() {
      return [this[0], this[1], this[2], this[3]];
    },

    toRgb: function() {
      return "rgb(" + this[0] + ", " + this[1] + ", " + this[2] + ")";
    },

    toRgba: function() {
      return "rgba(" + this[0] + ", " + this[1] + ", " + this[2] + ", " + this[3] + ")";
    },

    toHex: function() {
      return cq.rgbToHex(this[0], this[1], this[2]);
    },

    toHsl: function() {
      var c = cq.rgbToHsl(this[0], this[1], this[2]);
      c[3] = this[3];
      return c;
    },

    toHsv: function() {
      var c = cq.rgbToHsv(this[0], this[1], this[2]);
      c[3] = this[3];
      return c;
    },

    gradient: function(target, steps) {
      var targetColor = cq.color(target);
    },

    shiftHsl: function() {
      var hsl = this.toHsl();

      if (this[0] !== this[1] || this[1] !== this[2]) {
        var h = arguments[0] === false ? hsl[0] : cq.wrapValue(hsl[0] + arguments[0], 0, 1);
        var s = arguments[1] === false ? hsl[1] : cq.limitValue(hsl[1] + arguments[1], 0, 1);
      } else {
        var h = hsl[0];
        var s = hsl[1];
      }

      var l = arguments[2] === false ? hsl[2] : cq.limitValue(hsl[2] + arguments[2], 0, 1);

      this.fromHsl(h, s, l);

      return this;
    },

    setHsl: function() {
      var hsl = this.toHsl();

      var h = arguments[0] === false ? hsl[0] : cq.limitValue(arguments[0], 0, 1);
      var s = arguments[1] === false ? hsl[1] : cq.limitValue(arguments[1], 0, 1);
      var l = arguments[2] === false ? hsl[2] : cq.limitValue(arguments[2], 0, 1);

      this.fromHsl(h, s, l);

      return this;
    },

    mix: function(color, amount) {
      color = cq.color(color);

      for (var i = 0; i < 4; i++)
        this[i] = cq.mix(this[i], color[i], amount);

      return this;
    }

  };

  window["cq"] = window["CanvasQuery"] = cq;


  return cq;

})();

/* file: src/layer/Layer.js */

PLAYGROUND.Renderer = function(app) {

  this.app = app;

  app.on("create", this.create.bind(this));
  app.on("resize", this.resize.bind(this));

};

PLAYGROUND.Renderer.plugin = true;

PLAYGROUND.Renderer.prototype = {

  create: function(data) {

    this.app.layer = cq().appendTo(this.app.container);

    if (!this.app.customContainer) {
      this.app.container.style.margin = "0px";
      this.app.container.style.overflow = "hidden";
    }

  },

  resize: function(data) {

    var app = this.app;

    var layer = app.layer;

    layer.width = app.width;
    layer.height = app.height;

    layer.canvas.style.transformOrigin = "0 0";
    layer.canvas.style.transform = "translate(" + app.offsetX + "px," + app.offsetY + "px) scale(" + app.scale + ", " + app.scale + ")";
    layer.canvas.style.transformStyle = "preserve-3d";

    layer.canvas.style.webkitTransformOrigin = "0 0";
    layer.canvas.style.webkitTransform = "translate(" + app.offsetX + "px," + app.offsetY + "px) scale(" + app.scale + ", " + app.scale + ")";
    layer.canvas.style.webkitTransformStyle = "preserve-3d";

    layer.smoothing = this.app.smoothing;
    layer.update();

    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      layer.canvas.style.imageRendering = this.app.smoothing ? "auto" : "-moz-crisp-edges";
    } else {
      layer.canvas.style.imageRendering = this.app.smoothing ? "auto" : "pixelated";
    }

  }

};

/* file: src/layer/Transitions.js */

PLAYGROUND.Transitions = function(app) {

  this.app = app;

  app.on("enterstate", this.enterstate.bind(this));
  app.on("postrender", this.postrender.bind(this));
  app.on("step", this.step.bind(this));

  this.progress = 1;
  this.lifetime = 0;
};

PLAYGROUND.Transitions.plugin = true;

PLAYGROUND.Transitions.prototype = {

  enterstate: function(data) {

    this.screenshot = this.app.layer.cache();

    if (data.prev) {
      this.lifetime = 0;
      this.progress = 0;
    }

  },

  postrender: function() {

    if (this.progress >= 1) return;

    PLAYGROUND.Transitions.Split(this, this.progress);

  },

  step: function(delta) {

    if (this.progress >= 1) return;

    this.lifetime += delta;

    this.progress = Math.min(this.lifetime / 0.5, 1);

  }

};

PLAYGROUND.Transitions.Implode = function(manager, progress) {

  var app = manager.app;
  var layer = app.layer;

  progress = app.ease(progress, "outCubic");

  var negative = 1 - progress;

  layer.save();
  layer.tars(app.center.x, app.center.y, 0.5, 0.5, 0, 0.5 + 0.5 * negative, negative);
  layer.drawImage(manager.screenshot, 0, 0);

  layer.restore();

};

PLAYGROUND.Transitions.Split = function(manager, progress) {

  var app = manager.app;
  var layer = app.layer;

  progress = app.ease(progress, "inOutCubic");

  var negative = 1 - progress;

  layer.save();

  layer.a(negative).clear("#fff").ra();

  layer.drawImage(manager.screenshot, 0, 0, app.width, app.height / 2 | 0, 0, 0, app.width, negative * app.height / 2 | 0);
  layer.drawImage(manager.screenshot, 0, app.height / 2 | 0, app.width, app.height / 2 | 0, 0, app.height / 2 + progress * app.height / 2 + 1 | 0, app.width, Math.max(1, negative * app.height * 0.5 | 0));

  layer.restore();

};

/* file: src/layer/LoadingScreen.js */

PLAYGROUND.LoadingScreen = {

  logoRaw: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAASBAMAAADPiN0xAAAAGFBMVEUAAQAtLixHSUdnaGaJioimqKXMzsv7/fr5shgVAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB98EAwkeA4oQWJ4AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAB9klEQVQ4y72UvW+rMBDAz+FrpVKrrFmesmapWNOlrKjSe1kZ+uoVAvj+/frujG1SaJcqJwU7voOf7xMQzQmsIDi5NPTMsLRntH3U+F6SAZo3NlCvcgBFJz8o+vkDiE63lI95Y/UmpinsZWkgJWJiDbAVQ16htptxSTNloIlugwaw001Ey3ASF3so6L1qLNXzQS5S0UGKL/CI5wWNriE0UH9Yty37LqIVg+wsqu7Ix0MwVBSF/dU+jv2SNnma021LEdPqVnMeU3xAu0kXcSGjmq7Ox4E2Wn88LZ2+EFj3avjixzai6VPVyuYveZLHF2XfdDnvAq27DIHGuq+0DJFsE30OtB1KqOwd8Dr7PcM4b+jfj2g5lp4WyntBK66qua3JzEA+uXJpwH/NlVuzRVPY/kTLB2mjuN+KwdZ8FOy8j2gDbEUSqumnSCY4lf4ibq3IhVM4ycZQRnv+zFqVdJQVn6BxvUqebGpuaNo3sZxwBzjajiMZOoBiwyVF+kCr+nUaJOaGpnAeRPPJZTr4FqmHRXcneEo4DqQ/ftfdnLeDrUAME8xWKPeKCwW6YkEpXfs3p1EWJhdcUAYP0TI/uYaV8cgjwBovaeyWwji2T9rTFIdS/cP/MnkTLRUWxgNNZVin7bT5fqT9miDcUVJzR1gRpfIONMmulU+5Qqr6zXAUqAAAAABJRU5ErkJggg==",

  create: function() {

    var self = this;

    this.logo = new Image;

    this.logo.addEventListener("load", function() {
      self.ready = true;
    });

    this.logo.src = this.logoRaw;

    this.background = "#272822";
    this.app.container.style.background = "#272822";

    if (window.getComputedStyle) {
      // this.background = window.getComputedStyle(document.body).backgroundColor || "#000";
    }


  },

  enter: function() {

    this.current = 0;

  },

  leave: function() {

    this.locked = true;

    this.animation = this.app.tween(this)
      .to({
        current: 1
      }, 0.5);

  },

  step: function(delta) {

    if (this.locked) {
      if (this.animation.finished) this.locked = false;
    } else {
      this.current = this.current + Math.abs(this.app.loader.progress - this.current) * delta;
    }

  },

  ready: function() {


  },

  render: function() {

    if (!this.ready) return;

    this.app.layer.clear(this.background);

    this.app.layer.fillStyle("#fff");

    this.app.layer.save();
    this.app.layer.align(0.5, 0.5);
    this.app.layer.globalCompositeOperation("lighter");
    this.app.layer.drawImage(this.logo, this.app.center.x, this.app.center.y);

    var w = this.current * this.logo.width;

    this.app.layer.fillStyle("#fff");

    this.app.layer.fillRect(this.app.center.x, this.app.center.y + 32, w, 12);
    this.app.layer.fillRect(this.app.center.x, this.app.center.y + 32, this.logo.width, 4);

    this.app.layer.restore();

  }

};
/* scanlines plugin for playground's default renderer */

PLAYGROUND.Scanlines = function(app) {

  this.app = app;

  app.on("resize", this.resize.bind(this));
  app.on("postrender", this.postrender.bind(this));

};

PLAYGROUND.Scanlines.plugin = true;

PLAYGROUND.Scanlines.prototype = {

  resize: function() {

    this.image = cq(this.app.width, this.app.height);

    this.image.globalAlpha(0.1);
    this.image.fillStyle("#008");

    for (var i = 1; i < this.image.canvas.height; i += 8){
      
      this.image.fillRect(0, i, this.image.canvas.width, 4);

    }

    this.image = this.image.cache();

  },

  postrender: function() {

    if (this.image) {

      // this.app.layer.drawImage(this.image, 0, 0);

    }

  }

};
/*     

  SoundOnDemand r1

  (c) 2012-2015 http://rezoner.net

  This library may be freely distributed under the MIT license.

*/

/* options */

/* output: output node, default */
/* audioContext: audioContext */

SoundOnDemand = function(options) {

  options = options || {};

  var canPlayMp3 = (new Audio).canPlayType("audio/mp3");
  var canPlayOgg = (new Audio).canPlayType('audio/ogg; codecs="vorbis"');

  if (this.preferedAudioFormat === "mp3") {

    if (canPlayMp3) this.audioFormat = "mp3";
    else this.audioFormat = "ogg";

  } else {

    if (canPlayOgg) this.audioFormat = "ogg";
    else this.audioFormat = "mp3";

  }

  this.audioContext = options.audioContext || new AudioContext;

  this.compressor = this.audioContext.createDynamicsCompressor();
  this.compressor.connect(this.audioContext.destination);

  this.gainNode = this.audioContext.createGain()
  this.gainNode.connect(this.compressor);

  this.input = this.gainNode;

  this.gainNode.gain.value = 1.0;

  this.buffers = {};

  this.channels = {};
  this.aliases = {};

  var lastTick = Date.now();
  var engine = this;

  setInterval(function() {

    var delta = (Date.now() - lastTick) / 1000;

    lastTick = Date.now();

    engine.step(delta);

  }, 1000 / 60);

};

SoundOnDemand.moveTo = function(value, target, step) {

  if (value < target) {
    value += step;
    if (value > target) value = target;
  }

  if (value > target) {
    value -= step;
    if (value < target) value = target;
  }

  return value;

};

SoundOnDemand.prototype = {

  constructor: SoundOnDemand,

  path: "sounds/",

  channel: function(name) {

    if (!this.channels[name]) this.channels[name] = new SoundOnDemand.Channel(this);

    return this.channels[name];

  },

  getAssetEntry: function(path, defaultExtension) {

    /* translate folder according to user provided paths 
       or leave as is */

    var fileinfo = path.match(/(.*)\..*/);
    var key = fileinfo ? fileinfo[1] : path;

    var temp = path.split(".");
    var basename = path;

    if (temp.length > 1) {
      var ext = temp.pop();
      path = temp.join(".");
    } else {
      var ext = defaultExtension;
      basename += "." + defaultExtension;
    }

    return {
      key: key,
      url: this.path + basename,
      path: this.path + path,
      ext: ext
    };

  },

  loaders: {},

  load: function(key) {

    var engine = this;
    var entry = engine.getAssetEntry(key, engine.audioFormat);

    if (!this.loaders[key]) {

      this.loaders[key] = new Promise(function(resolve, reject) {

        if (engine.buffers[entry.key]) return resolve(engine.buffers[entry.key]);

        var request = new XMLHttpRequest();

        request.open("GET", entry.url, true);
        request.responseType = "arraybuffer";

        request.onload = function() {

          engine.audioContext.decodeAudioData(this.response, function(decodedBuffer) {

            engine.buffers[entry.key] = decodedBuffer;
            resolve(decodedBuffer);

          });

        }

        request.send();

      });

    }

    return this.loaders[key];

  },

  step: function(delta) {

    for (var key in this.channels) {

      this.channels[key].step(delta);

    }

  },

  duplicate: function(source, as, volume, rate) {

    var engine = this;

    this.load(source).then(function() {

      engine.buffers[source];

      engine.buffers[as] = engine.buffers[source];

    });

  },

  alias: function(name, source, rate, volume) {

    this.aliases[name] = {
      source: source,
      rate: rate,
      volume: volume
    };

  }

};
SoundOnDemand.Events = function() {

  this.listeners = {};

};

SoundOnDemand.Events.prototype = {

  on: function(event, callback) {

    if (typeof event === "object") {
      var result = {};
      for (var key in event) {
        result[key] = this.on(key, event[key])
      }
      return result;
    }

    if (!this.listeners[event]) this.listeners[event] = [];

    this.listeners[event].push(callback);

    return callback;
  },

  once: function(event, callback) {

    callback.once = true;

    if (!this.listeners[event]) this.listeners[event] = [];

    this.listeners[event].push(callback);

    return callback;

  },

  off: function(event, callback) {

    for (var i = 0, len = this.listeners[event].length; i < len; i++) {
      if (this.listeners[event][i]._remove) {
        this.listeners[event].splice(i--, 1);
        len--;
      }
    }

  },

  trigger: function(event, data) {

    /* if you prefer events pipe */

    if (this.listeners["event"]) {
      for (var i = 0, len = this.listeners["event"].length; i < len; i++) {
        this.listeners["event"][i](event, data);
      }
    }

    /* or subscribed to single event */

    if (this.listeners[event]) {
      for (var i = 0, len = this.listeners[event].length; i < len; i++) {
        var listener = this.listeners[event][i];
        listener.call(this, data);

        if (listener.once) {
          this.listeners[event].splice(i--, 1);
          len--;
        }
      }
    }

  }

};
SoundOnDemand.Channel = function(engine) {

  this.engine = engine;
  this.audioContext = engine.audioContext;

  /* connection order goes from bottom to top */

  /* gain node */

  this.gainNode = this.audioContext.createGain();

  /* convolver */

  this.convolverWetNode = this.audioContext.createGain();
  this.convolverDryNode = this.audioContext.createGain();
  this.convolverNode = this.audioContext.createConvolver();
  this.convolverEnabled = false;

  this.route();

  this.queue = [];
  this.loops = [];

};

SoundOnDemand.Channel.prototype = {

  constructor: SoundOnDemand.Channel,

  /* get a sound for further usage */

  xroute: function() {

    if (this.currentRoute) {

      for (var i = 0; i < this.currentRoute.length - 1; i++) {

        this.currentRoute[i].disconnect();

      }

    }

    this.currentRoute = [];

    for (var i = 0; i < arguments.length; i++) {

      if (i < arguments.length - 1) {

        var node = arguments[i];

        node.connect(arguments[i + 1]);

      }

      this.currentRoute.push(node);

    }

    this.input = arguments[0];

  },

  get: function(key) {

    return new SoundOnDemand.Sound(key, this);

  },

  play: function(key) {

    var sound = this.get(key);

    this.add(sound);

    return sound;

  },

  remove: function(sound) {

    sound._remove = true;

  },

  add: function(sound) {

    sound._remove = false;

    this.queue.push(sound);

  },

  step: function(delta) {

    /* process queue */

    for (var i = 0; i < this.queue.length; i++) {

      var sound = this.queue[i];

      sound.step(delta);

      if (sound._remove) this.queue.splice(i--, 1);

    }

    /* process sounds being played */

  },

  volume: function(value) {

    if (arguments.length) {

      this.gainNode.gain.value = value;

      return this;
      
    } else {
      
      return this.gainNode.gain.value;

    }

  },

  swapConvolver: function(key) {

    var engine = this.engine;
    var channel = this;

    return new Promise(function(resolve, fail) {

      if (channel.currentConvolverImpulse === key) {

        resolve();

      } else {

        engine.load(key).then(function(buffer) {
          channel.currentConvolverImpulse = key;
          channel.convolverNode.buffer = buffer;
          resolve();
        });

      }

    });

  },

  updateConvovlerState: function(enabled) {

    this.convolverEnabled = enabled;
    this.route();

  },

  subroute: function(nodes) {

    for (var i = 0; i < nodes.length; i++) {

      if (i < nodes.length - 1) {

        var node = nodes[i];
        node.disconnect();
        node.connect(nodes[i + 1]);

      }

    }

    this.input = nodes[0];

  },

  route: function() {

    this.gainNode.disconnect();

    if (this.convolverEnabled) {

      this.gainNode.connect(this.convolverDryNode);

      this.gainNode.connect(this.convolverNode);
      this.convolverNode.connect(this.convolverWetNode);

      this.convolverWetNode.connect(this.engine.input);
      this.convolverDryNode.connect(this.engine.input);

    } else {

      this.gainNode.connect(this.engine.input);

    }

    this.input = this.gainNode;

  },

  convolver: function(value, key) {

    var enabled = value > 0;
    var channel = this;

    this.swapConvolver(key).then(function() {

      if (enabled !== channel.convolverEnabled) channel.updateConvovlerState(enabled);

    });

    this.convolverWetNode.gain.value = value;
    this.convolverDryNode.gain.value = 1 - value;

    return this;

  }

};
SoundOnDemand.Sound = function(key, channel) {

  this.key = key;
  this.bufferKey = key;

  if (channel.engine.aliases[key]) {

    this.alias = channel.engine.aliases[key];

    this.bufferKey = this.alias.source;

  }

  if (!channel.engine.buffers[this.bufferKey]) channel.engine.load(this.bufferKey);

  this.channel = channel;
  this.audioContext = this.channel.engine.audioContext;

  this.current = {
    volume: 1.0,
    rate: 1.0
  };

  this.fadeMod = 1.0;

  this.createNodes();

};

SoundOnDemand.Sound.prototype = {

  constructor: SoundOnDemand.Sound,

  alias: {
    volume: 1.0,
    rate: 1.0
  },

  createNodes: function() {

    var bufferSource = this.audioContext.createBufferSource();
    var gainNode = this.audioContext.createGain();
    var panNode = this.audioContext.createStereoPanner();

    bufferSource.connect(panNode);
    panNode.connect(gainNode);
    gainNode.connect(this.channel.input);

    this.bufferSource = bufferSource;
    this.gainNode = gainNode;
    this.panNode = panNode;

  },

  volume: function(volume) {

    volume *= this.alias.volume;

    this.current.volume = volume;

    this.updateVolume();

    return this;

  },

  updateVolume: function() {

    this.gainNode.gain.value = this.current.volume * this.fadeMod;

  },

  pan: function(pan) {

    this.current.pan = pan;

    this.updatePanning();

    return this;

  },

  updatePanning: function() {

    this.panNode.pan.value = this.current.pan;

  },

  loop: function() {

    this.bufferSource.loop = true;
    this.current.loop = true;

    return this;

  },

  rrate: function(range) {

    return this.rate(this.current.rate + (-1 + Math.random() * 2) * range);

  },

  rate: function(rate) {

    rate *= this.alias.rate;

    this.bufferSource.playbackRate.value = rate;

    this.current.rate = rate;

    return this;

  },

  onended: function() {

    if (!this.current.loop) this.stop();

  },

  step: function(delta) {

    if (!this.ready) {

      if (!this.channel.engine.buffers[this.bufferKey]) return;

      this.ready = true;
      this.playing = true;

      this.buffer = this.channel.engine.buffers[this.bufferKey];

      this.bufferSource.buffer = this.buffer;

      this.bufferSource.start(0);
      this.bufferSource.onended = this.onended.bind(this);

      this.currentTime = 0;

    }

    this.currentTime += this.bufferSource.playbackRate.value * delta;

    if (this.fadeTarget !== this.fadeMod) {

      this.fadeMod = SoundOnDemand.moveTo(this.fadeMod, this.fadeTarget, delta * this.fadeSpeed);

      this.updateVolume();

    } else if (this.fadeTarget === 0) {

      this.pause();

    }


  },

  pause: function() {

    this.channel.remove(this);

    this.bufferSource.stop(0);

    this.playing = false;

  },

  stop: function() {

    this.channel.remove(this);

    this.bufferSource.stop(0);

    this.playing = false;

  },

  resume: function() {

    this.createNodes();

    this.bufferSource.buffer = this.buffer;

    this.currentTime = this.currentTime % this.buffer.duration;
    this.bufferSource.start(0, this.currentTime);

    this.rate(this.current.rate);
    this.volume(this.current.volume);
    this.loop(this.current.loop);

    this.channel.add(this);

    this.playing = true;

  },

  fadeTo: function(target, duration) {

    if (!this.playing) this.resume();

    duration = duration || 1.0;

    this.fadeTime = 0;
    this.fadeTarget = target;
    this.fadeDuration = duration;
    this.fadeSpeed = Math.abs(target - this.fadeMod) / duration;

    return this;

  },

  fadeIn: function(duration) {

    if (!this.playing) this.resume();

    this.fadeTo(1.0, duration);

    return this;

  },

  fadeOut: function(duration) {

    this.fadeTo(0, duration);

    return this;

  },



};

PLAYGROUND.SoundOnDemand = function(app) {

  app.audio = new SoundOnDemand();

  app.audio.path = app.getPath("sounds");

  app.loadSounds = function() {

    for (var i = 0; i < arguments.length; i++) {

      var key = arguments[i];

      this.loader.add();

      this.audio.load(key).then(
        this.loader.success.bind(this.loader),
        this.loader.error.bind(this.loader)
      );

    }

  };

};

PLAYGROUND.SoundOnDemand.plugin = true;
ENGINE = { };
ga = function() {}

ENGINE.Benchmark = {

  create: function() {

    // this.gradient = app.layer.createRadialGradient(app.center.x, app.center.y, 0, app.center.x, app.center.y, app.center.x);
    // this.gradient.addColorStop(0.0, "transparent");
    // this.gradient.addColorStop(1.0, "#000");

    // JIT warmup
    this.didWarmup = false;
    this.steps = 0;
    this.iotaList = [];
    this.frameTimes = [];
    this.scores = [];
    this.runCount = 0;
    this.skipCount = 0;
    this.skipResetCount = 0;
    this.resetCount = 0;
    this.scoreStack = [];
  },

  enter: function() {
    this.iotaCount = this.app.baseline ? Math.floor(this.app.baseline * 0.7) : 1;
    this.app.baseline = 0;
    this.reset();
  },

  // Called between benchmark loops
  reset: function() {
    this.steps = 0;
    this.frameTimes.length = 0;
    this.skipCount = 0;
    // JIT warmup settings (run unbound loops)
    if (!this.didWarmup) {
      console.time('Warmup');
      this.app.unbound = true;
      this.app.immidiate = false;
    } else {
      this.app.unbound = false;
      this.app.immidiate = true;
    }
    if (this.iotaList.length == 0) {
      this.addIotas(this.didWarmup ? this.iotaCount : 1);
    }
  },

  step: function(dt) {

    var before = performance.now();

    var object = {};

    for (var i = 0; i < 10000; i++) object[i] = i;
    for (var i = 0; i < 10000; i++) object[i];

    var array = [];

    for (var i = 0; i < 10000; i++) array.push(i);
    for (var i = 0; i < 10000; i++) array[i];

    for (var i = 0; i < 100; i++) Math.atan2(Math.random(), Math.random())

    this.iotaList.forEach(function(iota) {
      iota.step(dt);
    });

    this.frameTime = performance.now() - before;

    if (!this.didWarmup) {
      // State: JIT Warmup
      this.stepWarmUp();
    } else if (this.frameTime) {
      // Stresstesting
      this.stepStressTest()
    }

  },

  stepWarmUp: function() {

    this.steps++;

    if (this.steps > 1100) {
      this.didWarmup = true;
      console.timeEnd('Warmup');
      console.log('Warmup with %d iotas', this.iotaList.length);
      this.reset();
    }
  },

  stepStressTest: function() {
    var add = 1;
    var frameTimes = this.frameTimes;
    var MAX_FRAMES = 45;
    var MIN_FRAMES = 15;
    var COST = 8;
    var ERROR = 0.25;
    var frameTime = this.frameTime;
    if (frameTimes.unshift(frameTime) > MAX_FRAMES) {
      frameTimes.length = MAX_FRAMES;
    }
    if (frameTimes.length >= MIN_FRAMES) {
      var sample = this.analyze(frameTimes);
      var score = this.iotaList.length;
      if (sample.rse <= ERROR && sample.mean > COST) {
        this.pushScore(score);
        return;
      }
      if (sample.rse > ERROR || sample.mean > COST) {
        console.log('Skip #' + this.skipCount);
        this.skipCount++;
        if (this.skipCount > 60) {
          console.log(
            '[RESET STEP] High sampling error %f%% or mean %fms for %d entities.',
            sample.rse * 100, sample.mean, score
          );
          this.iotaCount = Math.floor(this.lastScore * 0.7);
          this.skipResetCount++;
          if (this.skipResetCount > 10) {
            this.finalize(false);
            return;
          }
          this.finalize(true);
        }
        return;
      }
      this.skipCount = 0;
      add = Math.round(COST / sample.mean);
    }

    this.addIotas(add);
  },

  pushScore: function(score) {
    var SAVE_SCORES = 3;
    var MIN_SCORES = 5;
    var MAX_SCORES = 10;
    var ERROR = 0.15;

    this.skipResetCount = 0;
    var scores = this.scores;
    this.runCount++;
    if (scores.unshift(score) > MAX_SCORES) {
      scores.length = MAX_SCORES;
    }
    this.iotaCount = Math.ceil(score * 0.7);
    var l = scores.length;
    if (l >= MIN_SCORES) {
      var sample = this.analyze(scores);
      if (sample.rse < ERROR) {
        this.resetCount = 0;
        this.app.baseline = Math.round(sample.mean);
        this.app.baselineErr = sample.rse;
        this.scores.splice(SAVE_SCORES);
        this.finalize(false);
        return;
      } else {
        console.log(
          '[SCORE RESET] Standard error %f%% too high in score samples.',
          sample.rse * 100
        );
        this.resetCount++;
        if (this.resetCount > 10) {
          this.scores.splice(0);
          console.log('[BAIL] Too many [RESET SCORE].');
          this.finalize(false);
          return;
        }
      }
    }
    this.finalize(true);
  },

  finalize: function(restart) {
    if (!restart) {
      // Remove iotas
      this.iotaCount = 0;
      this.runCount = 0;
      // Reset benchmark engine settings
      this.app.unbound = false;
      this.app.immidiate = false;
    }
    // Reduce iotaList to iotaCount
    this.iotaList.splice(this.iotaCount).forEach(function(iota) {
      iota.destroy();
    });
    if (restart) {
      this.reset();
    } else {
      this.app.setState(ENGINE.Game);
    }
  },

  addIotas: function(count) {

    for (var j = 0; j < count; j++) {

      this.iotaList.push(new Iota(this.app, this));

    }

  },

  render: function() {

    /* get reference to the application */

    var app = this.app;

    /* get reference to drawing surface */

    var layer = this.app.layer;

    /* clear screen */

    layer.clear("#222");

    // app.ctx.fillStyle = this.gradient;
    // app.ctx.fillRect(0, 0, app.width, app.height);

    // this.iotaList.forEach(function(iota) {
    //   iota.render(layer);
    // });

    // layer
    //   .fillStyle('#fff')
    //   .font("14px 'arial'")
    //   .fillText('Stress test #' + this.runCount, 5, 15)
    //   .fillText('Entities: ' + this.iotaList.length, 5, 30)
    //   .fillText('Frametime:' + this.frameTime.toFixed(1), 5, 45);
  },

  analyze: function(population) {
    var l = population.length;
    var sum = 0.0;
    var sumsq = 0.0;
    for (var i = 0; i < l; i++) {
      sum += population[i];
      sumsq += population[i] * population[i];
    }
    var mean = sum / l;
    var sd = Math.sqrt(sumsq / l - sum * sum / (l * l));
    var se = sd / Math.sqrt(l);
    // standard error at 95% confidence
    var se95 = 1.96 * se;
    var rse = se / mean;
    return {
      mean: mean,
      sd: sd,
      se: se,
      se95: se95,
      rse: rse
    }
  },

  nearest: function(from, entities) {

    var min = -1;
    var result = null;

    for (var i = 0; i < entities.length; i++) {

      var to = entities[i];

      if (from === to) continue;

      var distance = this.distance(from, to);

      if (distance < min || min < 0) {
        min = distance;
        result = to;
      }

    }

    return result;
  },

  distance: function(a, b) {

    var dx = a.x - b.x;
    var dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);

  }
};

var images = ['firefox', 'firefox_beta', 'firefox_developer_edition', 'firefox_nightly'];

function Iota(app, parent) {
  this.x = 0.0;
  this.y = 0.0;
  this.vx = 0.0;
  this.vy = 0.0;
  this.vr = 0.0;
  this.alpha = 0.0;
  this.angle = 0.0;
  this.app = app;
  this.parent = parent;
  this.x = Math.random() * app.width;
  this.y = Math.random() * app.height;
  this.maxVel = 100.0;
  this.maxTorq = Math.PI * 10;
  this.vx = Math.random() * this.maxVel * 2 - this.maxVel;
  this.vy = Math.random() * this.maxVel * 2 - this.maxVel;
  this.vr = Math.random() * this.maxTorq * 2 - this.maxTorq;
  this.image = app.images[images[Math.round(Math.random() * 3)]];
  this.region = Utils.random([
    [548, 88, 46, 47],
    [544, 142, 46, 48],
    [544, 200, 46, 47],
    [545, 253, 44, 48]
  ]);
  this.maxForce = 100.0;
  this.alpha = 0.2 + Math.random() * 0.8;
  this.angle = Math.random() * Math.PI;
}

Iota.prototype = {

  step: function(dt) {

    app.state.nearest(this, this.parent.iotaList);

    var iotaList = this.parent.iotaList;
    var forcex = 0.0;
    var forcey = 0.0;
    var forces = 0;
    var maxDist = 60.0;
    for (var i = 0, l = iotaList.length; i < l; i++) {
      var distx = (this.x - iotaList[i].x) / maxDist;
      var disty = (this.y - iotaList[i].y) / maxDist;
      var signx = Math.sign(distx);
      var signy = Math.sign(disty);
      var absx = Math.abs(distx);
      var absy = Math.abs(disty);
      if (absx < 1 && absy < 1) {
        forcex += signx + absx * signx;
        forcey += signy + absy * signy;
        forces++;
      }
    }

    if (forces == 0) {
      forces = 1;
    }
    forcex = Math.max(-this.maxForce, Math.min(this.maxForce, forcex / forces)) * 500;
    forcey = Math.max(-this.maxForce, Math.min(this.maxForce, forcey / forces)) * 500;
    this.vx = this.vx * 0.99 + forcex * 0.01;
    this.vy = this.vy * 0.99 + forcey * 0.01;

    var x = this.x + this.vx * dt;
    if (x < 0 || x > this.app.width) {
      x = Math.random() * this.app.width;
    }
    this.x = x;

    var y = this.y + this.vy * dt;
    if (y < 0 || y > this.app.height) {
      y = Math.random() * this.app.height;
    }
    this.y = y;
    this.angle += this.vr * dt;
  },

  // render: function(layer) {

  //   return;

  //   layer.context.save();
  //   layer.context.translate(this.x | 0, this.y | 0);
  //   // layer.a(this.alpha);
  //   layer.context.fillStyle = "#f00";
  //   layer.context.fillRect(this.x, this.y, 64, 64);
  //   layer.context.fillStyle = "#fff";
  //   layer.context.beginPath();
  //   layer.context.moveTo(this.x, this.y);
  //   layer.context.arc(this.x, this.y, 64, 0, Math.PI * 2);
  //   layer.context.rotate(this.angle);
  //   layer.drawRegion(app.images.spritesheet, this.region, 0, 0);
  //   layer.context.restore();
  // },

  destroy: function() {
    this.app = null;
    this.parent = null;
  }
}
ENGINE.BackgroundStars = function() {

  this.color = "#0af";

  this.count = Math.max(app.height, app.width) / 16 | 0;

  this.x = 0;
  this.y = 0;

  this.populated = false;
  this.image = app.getColoredImage(app.images.spritesheet, this.color);

};

ENGINE.BackgroundStars.prototype = {

  images: {},

  colors: ["#afc", "#fa0"],

  sprites: [
    [260, 165, 5, 5],
    [261, 171, 3, 3]
  ],

  populate: function(fill) {
    this.stars = [];

    for (var i = 0; i < this.count; i++) {
      this.spawnStar(fill);
    }

  },

  spawnStar: function(fill) {

    var star = {
      x: Math.random() * app.width,
      y: Math.random() * app.height,
      z: 0.1 + 0.9 * Math.random(),
      s: Utils.random([1, 2, 3]),
      spriteIndex: Math.random() * this.sprites.length | 0
    };

    star.lx = star.x;
    star.ly = star.y;

    this.stars.push(star);

  },

  render: function(dt) {

    if (!this.populated) {
      this.populated = true;
      this.populate(true);
    }

    var diffX = 32 * dt;
    var diffY = 32 * dt;

    for (var i = 0; i < this.stars.length; i++) {

      var star = this.stars[i];

      var sprite = this.sprites[star.spriteIndex];

      app.ctx.drawImage(this.image, sprite[0], sprite[1], sprite[2], sprite[3],
        star.x, star.y, sprite[2], sprite[3]);

      star.x += diffX;
      star.y += diffY;

      if (star.x > app.width) star.x = 0;
      if (star.y > app.height) star.y = 0;

      if (star.x < 0) star.x = app.width;
      if (star.y < 0) star.y = app.height;

    }

  }

};
ENGINE.CircleExplosion = function(args) {

  Utils.extend(this, {

    attachedTo: false,
    radius: 0,
    alpha: 1.0,
    duration: 0.5

  }, args);

  this.radius = 0;

  this.image = app.getColoredImage(app.images.spritesheet, "#000", "source-in");

  this.tween = app.tween(this).discard().to({
    radius: args.radius
  }, this.duration, "outElastic").to({
    radius: 0
  }, this.duration, "outElastic");

};

ENGINE.CircleExplosion.prototype = {

  constructor: ENGINE.CircleExplosion,

  type: "circleExplosion",

  action: function() {

    app.sound.play("laser");

  },

  step: function() {

    if(this.attachedTo) {
      this.x = this.attachedTo.x;
      this.y = this.attachedTo.y;
    }

    if (this.tween.finished) this.dead = true;

  },

  render: function() {

    if (this.radius > 0) {
      
      app.ctx.beginPath();
      app.ctx.fillStyle = this.color;
      app.ctx.globalCompositeOperation = "lighter";
      app.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      app.ctx.fill();
      app.ctx.globalCompositeOperation = "source-over";


    }

  }

};
ENGINE.Ship = function(args) {

  Utils.extend(this, {

    damage: 1,
    firerate: 0.5,
    speed: 160,
    radius: 16,
    rotationSpeed: 5,
    hp: 10,
    range: 200,
    force: 0,
    forceDirection: 0,
    targetTimeout: 0,
    hitLifespan: 0,
    scale: 1.0,
    rank: 0,
    kills: 0

  }, defs.ships[args.type], args);

  this.random = this.game.random();

  this.maxHp = this.hp;

  this.lifetime = this.game.random() * 10;
  this.cooldown = this.firerate;
  this.desiredDirection = this.direction = this.game.random() * 6;

  this.color = defs.teamColor[this.team];

  this.image = app.images.spritesheet;

  if (this.team) this.applyUpgrades(this.game.upgrades);
  else this.applyDifficulty();

};

ENGINE.Ship.prototype = {

  constructor: ENGINE.Ship,

  hoverable: true,

  frozenSprite: [193, 86, 11, 19],

  pointerenter: function() {

    this.repair();

  },

  ranks: [
    [318, 131, 10, 5],
    [333, 131, 10, 10],
    [348, 131, 10, 15],
    [360, 131, 10, 8],
    [372, 131, 10, 13],
    [384, 131, 10, 18],
    [396, 131, 15, 16]
  ],

  applyDifficulty: function() {

    var difficulty = this.game.wave / 30;

    this.speed *= 1 + difficulty;
    this.damage *= 1 + difficulty;

  },

  applyUpgrades: function(upgrades) {

    var hpmod = this.hp / this.maxHp;

    this.damage = 1 + upgrades.damage * 0.25;
    this.maxHp = upgrades.life * 10;
    this.hp = hpmod * this.maxHp;
    this.speed = 80 + 10 * upgrades.speed;


    if (this.free) {
      this.damage *= 2;
      this.maxHp *= 2;
      this.hp *= 2;
    }

  },

  die: function() {

    if (!this.team) this.game.score++;

    if (this.game.benchmark) {

      this.hp = this.maxHp;

    } else {

      this.dead = true;

    }

    if (this.boss) {

      this.game.shake();

      for (var i = 0; i < 16; i++) {

        this.game.add(ENGINE.Resource, {
          x: this.x,
          y: this.y
        });

      }

    }

    this.game.explosion(this.x, this.y, 16, this.color);

    this.game.add(ENGINE.Resource, {
      x: this.x,
      y: this.y,
      parent: this
    });

    if (this.planet) this.planet.ships--;

    if (!this.team) this.game.onenemydeath(this);

    if (!this.game.benchmark) app.sound.play("planetHit").rate(0.6);

  },

  applyDamage: function(damage, attacker) {

    if (this.dead) return;

    this.hitLifespan = 0.1;

    this.hp -= damage;

    if (this.hp <= 0) {
      this.die();
      if (attacker) attacker.onscore();
    }

    this.game.explosion(this.x, this.y, 3, this.color);


  },

  step: function(dt) {

    dt *= this.game.timeFactor;

    // if (!this.team) dt *= Math.sin((app.lifetime % 2 / 2) * Math.PI);

    this.lifetime += dt;

    if ((this.targetTimeout -= dt) <= 0) {

      this.target = false;
      this.targetTimeout = 0.25;

    }

    if (!this.target) {

      this.target = this.getTarget(this.game.entities);

    } else if (this.target.dead) {

      this.target = null;

    }


    this.foresightCollision();

    var destination = false;
    var speed = this.speed;

    var ox = 0;
    var oy = 0;

    if (this.team && this.target) {

      ox = Math.cos(this.random * 6.28) * 100;
      oy = Math.sin(this.random * 6.28) * 100;

      destination = this.target;

    } else destination = this.game.player.planet;

    if (this.team && Utils.distance(this, app.center) > app.center.y) {

      destination = app.center;

    }

    if (this.collisionDanger) {

      /*

        var angle = Math.atan2(this.collisionDanger.y - this.y, this.collisionDanger.x - this.x) - Math.PI / 2;

        destination = {
          x: this.collisionDanger.x + Math.cos(angle) * 150,
          y: this.collisionDanger.y + Math.cos(angle) * 150
        }

        speed *= 1 - 0.5 * Math.abs(Utils.circDistance(this.direction, angle) / (Math.PI));

      */

      if (this.collisionDistance < 50) {

        var angle = Math.atan2(this.collisionDanger.y - this.y, this.collisionDanger.x - this.x) - Math.PI;

        this.x = this.collisionDanger.x + Math.cos(angle) * 50;
        this.y = this.collisionDanger.y + Math.sin(angle) * 50;

      }

      // speed *= this.collisionDistance / 200;

    }


    if (destination) {

      this.desiredDirection = Math.atan2(destination.y - this.y + ox, destination.x - this.x + oy);

    }

    if (!this.frozen) {

      this.direction = Utils.circWrapTo(this.direction, this.desiredDirection, dt * this.rotationSpeed);

    }

    this.move(dt);

    /* firing mechanics */

    this.cooldown -= dt;

    if (this.canFire()) {

      this.fire();

    }

    if (!this.team && Utils.distance(this, this.game.playerPlanet) < this.game.playerPlanet.radius) {

      if (!this.game.benchmark) {

        this.game.player.planet.applyDamage(1, this);
        this.die();

      }

    }

    this.hitLifespan -= dt;

  },


  move: function(dt) {

    if (!this.frozen) {

      Utils.moveInDirection.call(this, this.direction, this.speed * dt);

    }

    if (this.force > 0) {

      this.force -= 200 * dt;

      Utils.moveInDirection.call(this, this.forceDirection, this.force * dt);

    }

  },

  canFire: function() {

    if (this.frozen) return false;

    if (this.cooldown > 0) return;
    if (!this.target) return;
    if (Utils.distance(this, this.target) > this.range) return;

    this.cooldown = this.firerate;

    this.fire();

  },

  fire: function() {

    this.game.add(ENGINE.Bullet, {
      x: this.x,
      y: this.y,
      team: this.team,
      target: this.target,
      damage: this.damage,
      parent: this
    });

    if (!this.game.benchmark) app.sound.play("laser");

  },

  render: function() {

    /* sprite */

    app.ctx.save();
    app.ctx.translate(this.x, this.y);

    this.renderHUD();

    if (this.hitLifespan > 0) {

      var image = app.getColoredImage(this.image, "#fff", "source-in");

    } else {

      var image = this.image;

    }

    app.ctx.rotate(this.direction - Math.PI / 2);
    app.ctx.scale(this.scale, this.scale);
    app.ctx.drawImage(image, this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]);
    app.ctx.restore();

    if (this.frozen) {

      app.ctx.drawImage(app.images.spritesheet,
        this.frozenSprite[0], this.frozenSprite[1], this.frozenSprite[2], this.frozenSprite[3],
        this.x - this.frozenSprite[2] / 2, this.y - this.frozenSprite[3] / 2, this.frozenSprite[2], this.frozenSprite[3]);

    }

    if (this.team) {

      var rankSprite = this.ranks[this.rank];

      app.ctx.drawImage(app.images.spritesheet,
        rankSprite[0], rankSprite[1], rankSprite[2], rankSprite[3],
        this.x + 24, this.y - 24, rankSprite[2], rankSprite[3]);


    }

  },

  renderHUD: function() {

    if (this.frozen) return;

    var w = Math.min(100, (this.maxHp / 160) * 100 | 0);

    var mod = this.hp / this.maxHp;

    app.ctx.fillStyle = this.color;
    app.ctx.strokeStyle = this.color;
    app.ctx.lineWidth = 2;
    app.ctx.fillRect(0, 32, w * mod, 8);
    app.ctx.strokeRect(0, 32, w, 8);

  },

  collisionRange: 100,

  foresightCollision: function() {

    this.collisionDanger = false;

    var self = this;

    var pool = Utils.filter(this.game.entities, function(e) {

      if (e.type !== "asteroid") return false;

      if (Utils.distance(self, e) > self.collisionRange) return false;

      return true;

    });

    this.collisionDanger = Utils.nearest(this, pool);

    if (this.collisionDanger) this.collisionDistance = Utils.distance(this, this.collisionDanger);

  },

  getTarget: function() {

    var pool = [];

    for (var i = 0; i < this.game.entities.length; i++) {

      var entity = this.game.entities[i];

      if (!(entity instanceof ENGINE.Ship)) continue;

      if (entity.team !== this.team) pool.push(entity);

    }

    return Utils.nearest(this, pool);

  },

  repair: function() {

    if (this.hp >= this.maxHp) return;

    this.game.add(ENGINE.CircleExplosion, {
      color: "#a04",
      radius: 32,
      attachedTo: this
    });

    this.hp = this.maxHp;

  },

  onscore: function() {

    this.kills++;

    this.rank = Math.min(this.ranks.length - 1, this.kills / 3 | 0);

  }

};
ENGINE.Bullet = function(args) {

  Utils.extend(this, {
    speed: 400
  }, args);

  this.color = defs.teamColor[this.team];
  this.radius = 4;
  this.direction = 0;

  this.image = app.getColoredImage(app.images.spritesheet, this.color, "source-in")

};

ENGINE.Bullet.prototype = {

  sprite: [145, 25, 6, 39],

  constructor: ENGINE.Bullet,

  step: function(dt) {

    dt *= this.game.timeFactor;

    this.direction = Math.atan2(this.target.y - this.y, this.target.x - this.x);

    this.x += Math.cos(this.direction) * this.speed * dt;
    this.y += Math.sin(this.direction) * this.speed * dt;

    if (Utils.distance(this, this.target) < this.radius + this.target.radius) {

      this.hit(this.target);

    }

  },

  hit: function(target) {

    target.applyDamage(this.damage, this.parent);

    this.die();

  },

  die: function() {

    this.dead = true;

  },

  render: function() {

    var s = this.game.getScale(this);

    app.ctx.save();

    app.ctx.translate(this.x, this.y);
    app.ctx.rotate(this.direction + Math.PI / 2);
    app.ctx.scale(s, s);
    app.ctx.drawImage(this.image,
      this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
    );

    app.ctx.restore();

  }

};
ENGINE.Asteroid = function(args) {

  this.max = this.resources = 5;

  Utils.extend(this, {

    hitLifespan: 0

  }, args);

  this.radius = 32;

  this.direction = Math.atan2(app.center.y - this.y, app.center.x - this.x);
  this.speed = 8 + this.game.random() * 32;

  this.lifetime = 0;

  this.kind = this.game.random() > 0.8 ? "gold" : "normal";

  this.sprite = Utils.random(this.sprites[this.kind]);

  this.collectibles = 0;


};

ENGINE.Asteroid.prototype = {

  consturctor: ENGINE.Asteroid,

  hoverable: "mining",
  silent: true,
  instant: true,

  type: "asteroid",


  sprites: {

    normal: [
      [341, 239, 52, 39],
      [337, 288, 61, 61],
      [338, 354, 57, 58]
    ],

    gold: [
      [408, 238, 52, 39],
      [404, 287, 59, 61],
      [403, 353, 59, 58]
    ]

  },

  pointerenter: function() {

    this.slowdown = true;

  },

  pointerleave: function() {

    this.slowdown = false;

  },

  die: function() {

    if (!this.game.benchmark) app.sound.play("digEnd");

    if (Math.random() > 0.7) {

      this.game.add(ENGINE.Powerup, {
        x: this.x,
        y: this.y
      });

    }

    this.game.remove(this);
    this.game.explosion(this.x, this.y, 16, "#aaa");
    this.game.spawnAsteroid();

  },

  dig: function() {

    this.hitLifespan = 0.1;

    this.resources--;

    if (this.resources <= 0) {
      this.die();
    }

    var count = this.kind === "gold" ? 2 : 1;

    this.spawnResources(count);

    this.game.explosion(this.x, this.y, 4, "#fa0");

    if (!this.game.benchmark) app.sound.play("dig");

  },

  spawnResources: function(count) {
    
    for (var i = 0; i < count; i++) {

      this.game.add(ENGINE.Resource, {
        x: this.x,
        y: this.y,
        parent: this
      });

    }

  },

  step: function(dt) {

    dt *= this.game.timeFactor;

    this.lifetime += dt;

    this.hitLifespan -= dt;

    var speed = this.speed * (this.slowdown ? 0.25 : 1.0);

    this.x += Math.cos(this.direction) * speed * dt;
    this.y += Math.sin(this.direction) * speed * dt;

    this.game.wrap(this);

    if (Utils.distance(this, app.center) < this.game.player.planet.radius + this.radius) {

      if (this.game.player.planet.asteroidsShield) {

        this.spawnResources(5);

      } else {

        this.game.player.planet.applyDamage(1, this);

      }

      this.die();

    }

  },

  render: function() {

    if (this.hitLifespan > 0) {
      var image = app.getColoredImage(app.images.spritesheet, "#fff", "source-in");
    } else {
      var image = app.images.spritesheet;
    }

    var scale = 0.5 + 0.5 * this.resources / this.max;

    app.ctx.save();

    app.ctx.translate(this.x, this.y)
    app.ctx.rotate(app.roundAngle(this.lifetime))
    app.ctx.scale(scale, scale)
    app.ctx.drawImage(image,
      this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
    );
    app.ctx.restore();

  }

};
ENGINE.Cursor = function(game, team, planet) {

  this.game = game;

  this.actionTimeout = 0;

  this.dotRadius = 8;
  this.capacity = 10;
  this.resources = 4;
  this.x = 0;
  this.y = 0;
  this.hoverTime = 0;
  this.team = team;
  this.color = defs.teamColor[team];
  this.planet = planet;

  this.targetTimeout = this.targetInterval = 0.25;
  this.fireCooldown = this.fireInterval = 0.25;

  /* timers */

  this.times = {
    mining: 0.5,
    collect: 0.05,
    build: 0.5,
    repair: 2
  };


  this.tween = app.tween(this);

  if (!this.team) {

    this.ai = new ENGINE.Ai(this);
    this.ai.set("idle");

  }


};

ENGINE.Cursor.prototype = {

  consturctor: ENGINE.Cursor,

  poke: function() {

    this.tween = app.tween(this).discard()

    .to({
      dotRadius: 16
    }, 0.1, "outSine")

    .to({
      dotRadius: 8
    }, 0.05, "inSine");

  },

  step: function(dt) {

    var prevEntity = this.entity;

    this.entity = this.getHoveredEntity();

    if (this.entity !== prevEntity) {

      if (prevEntity && prevEntity.pointerleave) prevEntity.pointerleave(this);
      if (this.entity && this.entity.pointerenter) this.entity.pointerenter(this);

      this.onentitychange();

    }

    if (this.action) {

      this.hoverTime += dt;

      this.progressAction(dt);

    }

    /* firing mechanics */

    if (this.target && this.target.dead) this.target = false;

    if ((this.targetTimeout -= dt) <= 0) {

      this.targetTimeout = 0.5;

      this.target = this.getTarget();

    }


    this.fireCooldown -= dt;

    if (this.canFire()) {

      this.fire();

    }


  },

  getTarget: function() {

    var pool = [];

    for (var i = 0; i < this.game.entities.length; i++) {

      var entity = this.game.entities[i];

      if (!(entity instanceof ENGINE.Ship)) continue;

      if (Utils.distance(entity, this) > 200) continue;
      if (entity.team !== this.team) pool.push(entity);

    }

    return Utils.nearest(this, pool);

  },

  onentitychange: function() {

    this.actionComplete = false;

    this.hoverTime = 0;

    if (this.entity) {

      this.action = this.entity.hoverable;
      this.resetAction();

      if (this.entity.instant) this.actionTimeout = 0;


    } else this.action = false;

    /*
        if (!this.actionSound) this.actionSound = app.sound.play("action").loop().rate(0.5);

        if (!this.action) {
          this.actionSound.stop();
        } else {
          this.actionSound.fadeIn();
        }
        */
    this.updateTooltip();


  },

  resetAction: function() {


    this.actionTimeout = this.times[this.action];

    this.actionDuration = this.actionTimeout;

  },

  upgrade: function(key) {

    this.game.upgrades[key] ++;

    this.game.buttons[key].count = this.getPrice(key);

    var ships = Utils.filter(this.game.entities, function(e) {
      
      return (e instanceof ENGINE.Ship) && e.team;

    });

    for (var i = 0; i < ships.length; i++) {

      var ship = ships[i];

      this.game.add(ENGINE.CircleExplosion, {
        color: "#0af",
        radius: 32,
        attachedTo: ship
      });

      ship.applyUpgrades(this.game.upgrades)

    }

  },

  getPrice: function(key) {

    return Math.pow(2, this.game.upgrades[key]);

  },

  canProgress: function() {

    switch (this.action) {

      case "repair":

        return this.planet.hp < this.planet.maxHP;

        break;

      case "build":

        if (this.entity.key === "fighter") {

          if (this.game.playerPlanet.max - this.game.playerPlanet.ships <= 0) return false;

          return this.resources > 0;
        } else {

          return this.resources >= this.getPrice(this.entity.key);

        }

        break;

      default:

        return true;

        break;

    }
  },

  progressAction: function(dt) {

    if (this.canProgress() && (this.actionTimeout -= dt) < 0) {

      this.finalizeAction();
      this.resetAction();

    };

    this.progress = 1 - this.actionTimeout / this.actionDuration;


  },

  finalizeAction: function() {

    this.actionComplete = true;

    switch (this.action) {

      case "repair":

        this.planet.repair();

        break;

      case "mining":

        this.entity.dig();

        break;


      case "build":

        switch (this.entity.key) {

          case "fighter":

            this.planet.spawnShip("fighter");
            this.resources -= 1;
            if (!this.game.benchmark) app.sound.play("build");

            break;

          case "life":
          case "damage":
          case "speed":

            this.resources -= this.getPrice(this.entity.key);

            this.upgrade(this.entity.key);

            if (!this.game.benchmark) app.sound.play("upgrade");


            break;

        }

        break;
    }

  },

  hit: function() {

    this.game.shake();

    this.planet.applyDamage(1, this.planet);

    this.game.add(ENGINE.CircleExplosion, {
      x: this.x,
      y: this.y,
      color: "#c02",
      radius: 32
    })

  },

  getHoveredEntity: function() {

    for (var i = 0; i < this.game.entities.length; i++) {

      var entity = this.game.entities[i];

      if (entity.hoverable && Utils.distance(entity, this) < entity.radius) return entity;

    }

    return null;

  },

  render: function() {

    app.layer.fillStyle(this.color).fillCircle(this.x, this.y, this.dotRadius);

    if (this.action && !this.entity.silent) {

      var mod = Math.min(1, app.ease(2 * this.hoverTime, "outBounce"));

      app.ctx.save();
      app.ctx.translate(this.entity.x, this.entity.y);

      app.ctx.strokeStyle = this.color;
      app.ctx.lineWidth = 2;
      app.ctx.beginPath();
      app.ctx.arc(0, 0, (this.entity.radius + 2) * mod, 0, Math.PI * 2);
      app.ctx.stroke();

      app.ctx.lineWidth = 8;
      app.ctx.beginPath();
      app.ctx.globalAlpha = 0.25;
      app.ctx.arc(0, 0, this.entity.radius + 8, 0, Math.PI * 2)
      app.ctx.stroke()
      app.ctx.globalAlpha = 1.0;

      app.ctx.lineWidth = 8;
      app.ctx.beginPath();
      app.ctx.arc(0, 0, this.entity.radius + 8, 0, this.progress * Math.PI * 2)
      app.ctx.stroke();

      app.ctx.restore();

    }



  },

  canFire: function() {

    if (!this.game.checkBonus("laser")) return;

    if (this.fireCooldown > 0) return;
    if (!this.target) return;
    if (Utils.distance(this, this.target) > this.range) return;

    this.fireCooldown = this.fireInterval;

    this.fire();

  },

  fire: function() {

    this.game.add(ENGINE.Bullet, {
      x: this.x,
      y: this.y,
      team: this.team,
      target: this.target,
      damage: 2,
      speed: 1000
    });

    if (!this.game.benchmark) app.sound.play("laser");

  },

  moveTo: function(destination) {

    this.destination = destination;

  },

  updateTooltip: function() {

    if (this.entity) {
      if (this.entity.tooltip) this.game.tooltip = this.entity.tooltip;
    } else {
      this.game.tooltip = false;
    }

  }

}
ENGINE.Resource = function(args) {

  Utils.extend(this, args);

  this.radius = 32;

  this.direction = Math.random() * 6.28;
  this.speed = 32;

  this.forceDirection = Math.random() * 6.28;
  this.force = 64 + Math.random() * 128;

  this.force *= 3;
  this.forceDamping = this.force;

  this.lifetime = 0;
  this.duration = 10;

  this.value = Math.random() * 3 | 0;

  this.sprite = this.sprites[this.value];
};

ENGINE.Resource.prototype = {

  consturctor: ENGINE.Resource,

  sprites: [
    [333, 105, 10, 10],
    [320, 104, 12, 12],
    [303, 102, 16, 16]
  ],

  type: "resource",


  collect: function() {

    this.game.remove(this);

    if (!this.game.benchmark) app.sound.play("coin");

    this.game.player.poke();

    this.game.add(ENGINE.CircleExplosion, {
      color: "#fc0",
      radius: 8,
      attachedTo: this,
      duration: 0.25
    });

    this.game.player.resources += this.value;
    
  },

  step: function(dt) {

    this.lifetime += dt;

    var playerDistance = Utils.distance(this, this.game.player);

    if (this.force) {

      this.x += Math.cos(this.forceDirection) * this.force * dt;
      this.y += Math.sin(this.forceDirection) * this.force * dt;

      this.force = Math.max(0, this.force - this.forceDamping * dt);

    }

    if (this.poked && this.game.checkBonus("magnet")) {

      this.direction = Math.atan2(this.game.player.y - this.y, this.game.player.x - this.x);

      this.x += Math.cos(this.direction) * this.speed * dt;
      this.y += Math.sin(this.direction) * this.speed * dt;


      if (!this.force) {
        this.speed += 256 * dt;
      }

    } else {

      if (playerDistance < 100) {
        this.poked = true;
        this.speed = 128;
      }

    }


    if (this.lifetime > 0.5) {
      if (playerDistance < 32) {
        this.collect();
      }
    }

    if (this.lifetime > this.duration) this.game.remove(this);

  },

  render: function() {

    app.ctx.save();

    app.ctx.translate(this.x, this.y);

    app.ctx.rotate(this.lifetime);

    app.ctx.drawImage(app.images.spritesheet,
      this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
    );

    app.ctx.restore();

  }

};
ENGINE.Button = function(args) {

  Utils.extend(this, {

    radius: 32

  }, args);


  this.image = app.images.spritesheet;

};

ENGINE.Button.prototype = {

  constructor: ENGINE.Button,

  type: "button",

  pointerenter: function() {

    app.tween(this).discard().to({
      radius: 24
    }, 0.1).to({
      radius: 32
    }, 0.2, "outSine");

  },

  action: function() {


    app.sound.play("laser");

  },

  step: function() {

  },

  render: function() {


    if (this.sprite) {
      var scale = this.radius / 32;

      app.ctx.save();

      app.ctx.translate(this.x, this.y);
      app.ctx.drawImage(this.image,
        this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
      );

      app.ctx.restore();

    }

    if (this.count) {
      app.layer.textAlign("center").font("bold 32px Arial").fillStyle(this.color).fillText(this.count, this.x, this.y - this.radius - 48);
    }

  }

};
ENGINE.Particle = function(args) {

  Utils.extend(this, {
    radius: 4
  }, args)

  this.spriteIndex = 0;

  this.reset();

};

ENGINE.Particle.prototype = {

  consturctor: ENGINE.Particle,

  sprites: [
    [260, 152, 6, 6],
    [260, 159, 5, 5],
    [260, 165, 5, 5],
    [261, 171, 3, 3]
  ],

  reset: function() {

    this.lifetime = 0;
    this.duration = 0.5;

    this.direction = this.game.random() * 6.28;
    this.speed = 32 + this.game.random() * 128;

    this.speed *= 3;

    this.damping = this.speed * 2;

  },

  step: function(dt) {

    this.lifetime += dt;

    this.x += Math.cos(this.direction) * this.speed * dt;
    this.y += Math.sin(this.direction) * this.speed * dt;

    this.speed = Math.max(0, this.speed - this.damping * dt);

    this.progress = Math.min(this.lifetime / this.duration, 1.0);

    if (this.progress >= 1.0) {
      this.x = 0;
      this.y = 0;
      this.progress = 0;
    }

    this.spriteIndex = this.progress * this.sprites.length | 0;

  },

  render: function() {


    // var s = this.size * (1 - this.progress);

    // if (s > 0) {
    if (this.progress >= 1.0) return;

    this.image = app.getColoredImage(app.images.spritesheet, this.color);

    // app.ctx.fillStyle = this.color;
    // app.ctx.fillRect(this.x - s / 2, this.y - s / 2, s, s)

    var sprite = this.sprites[this.spriteIndex];

    app.ctx.drawImage(this.image, sprite[0], sprite[1], sprite[2], sprite[3],
      this.x, this.y, sprite[2], sprite[3])

    // }

  }

};
ENGINE.Planet = function(args) {

  Utils.extend(this, {

    radius: 48,
    hp: 20,
    max: 100,
    ships: 0,
    repairProgress: 0,
    repairTime: 4,
    asteroidsShield: true,
    shieldScale: 0.0

  }, args);

  this.maxHP = this.hp;

  this.lifetime = 0;

};

ENGINE.Planet.prototype = {

  constructor: ENGINE.Planet,

  type: "planet",

  hoverable: "repair",

  sprite: [201, 215, 104, 104],

  shieldSprite: [492, 320, 124, 124],

  repair: function() {

    this.hp++;

  },

  applyDamage: function(damage, attacker) {

    this.game.shake();

    this.hp--;

    if (this.hp <= 0 && !this.game.benchmark) this.game.gameover();

    if (!this.game.benchmark) app.sound.play("planetHit");

    this.game.add(ENGINE.CircleExplosion, {
      x: attacker.x,
      y: attacker.y,
      color: "#a04",
      radius: 32
    })

  },

  step: function(dt) {

    this.lifetime += dt;

    var prevShield = this.asteroidsShield;
    this.asteroidsShield = this.game.checkBonus("shield");

    if (prevShield !== this.asteroidsShield) {

      app.tween(this).discard().to({
        shieldScale: this.asteroidsShield ? 1.0 : 0.0
      }, 0.5, "outElastic");

    }

  },

  spawnShip: function(type) {

    var ship = this.game.add(ENGINE.Ship, {
      x: this.x,
      y: this.y,
      type: type,
      team: 1,
      planet: this
    });

    ship.forceDirection = Math.random() * 6;
    ship.force = 200;

    this.ships++;

  },

  render: function() {

    app.layer.align(0.5, 0.5);
    app.layer.drawRegion(app.images.spritesheet, this.sprite, this.x, this.y);
    app.layer.textAlign("center").font("bold 48px Arial").fillStyle("#fff").fillText(this.hp, this.x, this.y - 24);
    app.layer.realign();

    if (this.asteroidsShield && this.shieldScale > 0) {
      var scale = this.shieldScale;
      app.ctx.save();
      app.ctx.globalAlpha = 0.5;
      app.ctx.globalCompositeOperation = "lighter";
      app.ctx.translate(this.x, this.y);
      app.ctx.scale(scale, scale);
      app.ctx.drawImage(app.images.spritesheet, this.shieldSprite[0], this.shieldSprite[1], this.shieldSprite[2], this.shieldSprite[3], -this.shieldSprite[2] / 2, -this.shieldSprite[3] / 2, this.shieldSprite[2], this.shieldSprite[3]);
      app.ctx.restore();
    }

  }

};
/* The counter in the top-left corner is: 

AVERAGE FRAME TIME |  DEVICE  POWER   | ENTITIES COUNT
                     (baselineFactor)
*/


/* Reference baseline to calculate device power */

REFERENCE_BASELINE = 378;

/* Reference frame time to tell how well the game has been optimized */
/* Make it higher to give user more CPU power */

REFERENCE_FRAME_TIME = 0.8;

/* How much optimization value one ship drains */

SHIP_CPU_COST = 0.1;

ENGINE.Game = {

  bonuses: {

    magnet: 0.1,
    laser: 0.2,
    shield: 0.4

  },

  checkBonus: function(key) {

    return this.cpuRatio >= this.bonuses[key];

  },

  explosion: function(x, y, count, color) {

    if (!this.particlesPool) {

      this.particlesPool = [];

      for (var i = 0; i < 100; i++) {

        var particle = this.add(ENGINE.Particle, {
          x: x,
          y: y
        });

        this.particlesPool.push(particle);

      }

      this.particleIndex = 0;

    }

    for (var i = 0; i <= count; i++) {

      if (++this.particleIndex >= this.particlesPool.length) this.particleIndex = 0;;

      var particle = this.particlesPool[this.particleIndex];

      particle.x = x;
      particle.y = y;
      particle.color = color;

      particle.reset();

    }

  },

  random: function() {

    return this.benchmark ? 0.5 : Math.random();

  },

  add: function(constructor, args) {

    args = args || {};

    args.game = this;

    var entity = new constructor(args);

    this.entities.push(entity);

    return entity;

  },

  remove: function(entity) {

    entity.dead = true;

  },

  enter: function() {

    localStorage.setItem("baseline", app.baseline);

    if (!this.benchmark) app.music.play("dust").volume(0.5).loop();

    this.gradient = app.ctx.createRadialGradient(app.center.x, app.center.y, 0, app.center.x, app.center.y, app.center.x);

    this.gradient.addColorStop(0.0, "transparent");
    this.gradient.addColorStop(1.0, "#000");

    this.reset();

  },

  getScale: function(entity) {

    return 1 - Math.min(1.0, Utils.distance(entity, app.center) / (app.width * 0.5)) * 0.75;

  },

  spawnAsteroid: function() {

    var angle = Math.random() * Math.PI * 2;
    var radius = app.width / 2;
    var ox = Math.cos(angle) * radius;
    var oy = Math.sin(angle) * radius;

    this.add(ENGINE.Asteroid, {
      x: app.center.x + ox,
      y: app.center.y + oy
    });

  },

  resetVirtualPool: function() {

    this.virtualPool = [];

    for (var i = 0; i < 100; i++) {

      this.virtualPool.push(new ENGINE.Ship({
        x: Math.random() * app.width,
        y: Math.random() * app.height,
        game: this,
        team: i % 2
      }));

    }

  },

  addOptimizationWeight: function() {

    return;

    var ship = this.virtualPool[0];

    for (var i = 0; i < 100; i++) Utils.nearest(app.center, this.virtualPool);

    for (var i = 0; i < 500; i++) ship.getTarget(this.virtualPool);
    for (var i = 0; i < 5000 * 5; i++) ship.move(0.1);

  },

  reset: function() {

    this.spawnTimeout = 0;
    this.cpuUsage = 0;

    this.upgrades = {

      speed: 1,
      damage: 1,
      life: 1

    };

    this.resetVirtualPool();

    delete this.particlesPool;

    this.score = 0;

    this.wave = 0;

    this.tooltip = false;

    this.entities = [];

    this.playerPlanet = this.add(ENGINE.Planet, {
      x: app.center.x,
      y: app.center.y,
      team: 1
    });

    this.player = new ENGINE.Cursor(this, 1, this.playerPlanet);
    this.player.x = app.center.x;
    this.player.y = app.center.y;

    this.stars = new ENGINE.BackgroundStars(this);

    for (var i = 0; i < 8; i++) {

      this.spawnAsteroid();

    }

    var buttons = ["speed", "life", "damage"];

    this.buttons = {};

    for (var i = 0; i < buttons.length; i++) {

      var key = buttons[i];

      this.buttons[key] = this.add(ENGINE.Button, {
        color: defs.teamColor[1],
        x: app.center.x - 160 + i * 100,
        y: app.height - 100,
        sprite: defs.buttons[key],
        key: key,
        count: 1,
        hoverable: "build",
        tooltip: defs.tooltips[key]
      })
    }

    this.nextWave();


  },

  cpuHistory: [],

  step: function(dt) {

    var before = performance.now();

    /* slow motion - when you collect freeze powerup */

    this.timeFactor = 1.0;

    if (this.freezeLifespan > 0) {

      this.freezeLifespan -= dt;
      this.timeFactor = 0.1;

    }

    /* update the game 10 times to magnitude results in profiler */

    for (var j = 0; j < 10; j++) {

      for (var i = 0; i < this.entities.length; i++) {

        var entity = this.entities[i];

        entity.step(dt / 10);

        if (entity.dead) this.entities.splice(i--, 1);

      }

    }

    /* measure optimization */

    /* It's the average of 100 frame times */

    /* 

      baselineFactor      - baseline vs reference sample to get device power
                            if the device is over-powered we artificialy
                            make frameTime higher to make it more fair among the players

      optimizationRating  - reference frame time divided by (current) average frame time
                            handicaped by baselineFactor - this gives a factor of 
                            how well user optimized the game

                            Make REFERENCE_FRAME_TIME higher to give player MORE cpu output

    */

    var frameTime = performance.now() - before;

    this.cpuHistory.push(frameTime);

    if (this.cpuHistory.length > 100) this.cpuHistory.shift();

    this.baselineFactor = app.baseline / REFERENCE_BASELINE;

    this.averageFrameTime = this.average(this.cpuHistory);

    this.optimizationRating = REFERENCE_FRAME_TIME / (this.baselineFactor * this.averageFrameTime);

    this.player.step(dt);

    /* use optimization results to affect the game */

    this.applyOptimization(dt);


  },

  average: function(array) {

    if (!array.length) return 0;

    var sum = 0;

    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum / array.length;

  },

  applyOptimization: function(dt) {

    var cpuUsage = 0;

    /* calculate (artificial) cpuUsage of ships 
       if cpuUsage is greater than optimizationRating
       freeze a ship
    */

    for (var i = 0; i < this.entities.length; i++) {

      var entity = this.entities[i];

      if (!(entity instanceof ENGINE.Ship)) continue;
      if (!entity.team) continue;
      if (entity.free) continue;

      cpuUsage += SHIP_CPU_COST;

      if (cpuUsage < this.optimizationRating) {

        entity.frozen = false;

      } else {

        entity.frozen = true;

      }

    }

    /* tween cpuUsage instead of setting it instantly (less jittering) */

    this.cpuUsage = Utils.moveTo(this.cpuUsage, cpuUsage, dt * 0.25);

    /* that's the value 0.0 - 1.0 that coresponds with the yellow power bar */

    this.cpuRatio = 1 - Math.min(1.0, this.cpuUsage / this.optimizationRating);

    /* spawn ships if there is enough power */

    if ((this.spawnTimeout -= dt) <= 0) {

      this.spawnTimeout = 0.5;

      if (this.cpuRatio > 0.5) this.playerPlanet.spawnShip("fighter");

    }


  },

  shake: function() {

    this.shakeLifespan = 0.4;

  },

  render: function(dt) {

    if (!this.averageFrameTime) return;

    app.ctx.textBaseline = "top";
    app.ctx.save();

    app.ctx.fillStyle = "#161630";
    app.ctx.fillRect(0, 0, app.width, app.height);

    // app.ctx.fillStyle = this.gradient;
    //app.ctx.fillRect(0, 0, app.width, app.height);

    if (this.shakeLifespan > 0) {
      this.shakeLifespan -= dt;
      var chaos = Utils.random(-6, 6);
      app.ctx.translate(chaos, chaos)
    }

    this.stars.render(dt);

    for (var i = 0; i < this.entities.length; i++) {

      this.entities[i].render();

    }

    this.player.render();

    this.renderTooltip();

    app.ctx.textAlign = "right";
    app.ctx.font = "bold 16px Arial";
    app.ctx.fillStyle = "#fff";
    app.ctx.fillText("SCORE: " + this.score, app.width - 20, 20);


    this.renderCPUBar();
    this.renderBonuses();

    app.ctx.textAlign = "center";
    app.ctx.font = "bold 64px Arial";
    app.ctx.fillStyle = "#fa0";
    app.ctx.fillText(this.player.resources, app.center.x - 280, app.height - 130);

    app.ctx.textAlign = "left";
    app.ctx.font = "bold 16px Arial";
    app.ctx.fillStyle = "#fff";
    app.ctx.fillText(this.averageFrameTime.toFixed(2) + " | " + this.baselineFactor.toFixed(2) + " | " + this.entities.length, 16, 16);

    app.ctx.restore();

  },

  barWidth: 200,

  renderCPUBar: function() {


    var width = 200;
    var currentWidth = this.barWidth * this.cpuRatio;

    app.ctx.drawImage(app.images.spritesheet,
      defs.frozenSprite[0], defs.frozenSprite[1], defs.frozenSprite[2], defs.frozenSprite[3],
      app.center.x - this.barWidth / 2 - 32, 24, defs.frozenSprite[2], defs.frozenSprite[3]);


    app.ctx.strokeStyle = "#fa0";
    app.ctx.fillStyle = "#fa0";
    app.ctx.lineWidth = 2;

    app.ctx.strokeRect(app.center.x - this.barWidth / 2, 16, this.barWidth, 32)
    app.ctx.fillRect(app.center.x - this.barWidth / 2, 16, currentWidth, 32)

    app.ctx.fillStyle = "#fff";
    app.ctx.textAlign = "center";
    app.fontSize(16);
    app.ctx.fillText("AVAILABLE CPU", app.center.x, 24);

    app.ctx.textAlign = "left";
    app.ctx.fillStyle = "#fa0";

    app.ctx.fillText("+ " + this.optimizationRating.toFixed(2), app.center.x + width / 2 + 16, 16);

    app.ctx.fillStyle = "#c40";
    app.ctx.fillText("- " + this.cpuUsage.toFixed(2), app.center.x + width / 2 + 16, 32);

  },


  renderBonuses: function() {

    app.ctx.save();
    app.ctx.translate(app.center.x - this.barWidth / 2, 54);
    app.ctx.textAlign = "left";
    app.ctx.textBaseline = "top";

    var i = Object.keys(this.bonuses).length;

    for (var key in this.bonuses) {

      var threshold = this.bonuses[key];

      var x = this.barWidth * threshold;
      var y = i * 16;

      app.ctx.globalAlpha = this.checkBonus(key) ? 1.0 : 0.4;

      app.ctx.fillStyle = "#fff";
      app.ctx.fillRect(x, 0, 2, y);
      app.ctx.fillRect(x, y, 16, 2);

      app.ctx.fillStyle = "#fff";
      app.fontSize(12);
      app.ctx.fillText(defs.bonuses[key].toUpperCase(), x + 20, y - 6);

      i--;

    }

    app.ctx.restore();

  },


  renderTooltip: function() {

    if (!this.tooltip) return;

    app.layer.textAlign("center").fillStyle("#fff").font("16px Arial").textWithBackground(this.tooltip, app.center.x, app.height - 64, "#000", 16);

  },

  pointermove: function(e) {

    this.player.x = e.x;
    this.player.y = e.y;

  },

  wrap: function(entity) {

    if (entity.x + entity.radius < 0) entity.x = app.width + entity.radius;
    if (entity.x - entity.radius > app.width) entity.x = -entity.radius;
    if (entity.y + entity.radius < 0) entity.y = app.height + entity.radius;
    if (entity.y - entity.radius > app.height) entity.y = -entity.radius;

  },

  keydown: function(e) {

  },

  nextWave: function() {

    if (this.benchmark) return;

    this.wave++;

    this.shipsLeft = 0;

    var streamsPositions = [
      [0.0, 1.0],
      [0.0, 0.5],
      [0.0, 0.0],
      [1.0, 0.0],
      [1.0, 0.5],
      [1.0, 1.0]
    ];

    var difficulty = this.wave / 20;

    Utils.shuffle(streamsPositions);

    var streamsCount = Math.min(3, 1 + difficulty) + 0.3 | 0;
    var shipsPerStream = Math.min(16, 4 + difficulty * 4) | 0;

    var possibleShips = [];

    if (this.wave > 0) possibleShips.push("creep1");
    if (this.wave > 3) possibleShips.push("creep2");
    if (this.wave > 6) possibleShips.push("creep3");
    if (this.wave > 10) possibleShips.push("creep4");

    if (this.wave % 5 === 0) possibleShips = ["boss"];

    for (var i = 0; i < streamsCount; i++) {

      var stream = streamsPositions.pop();

      var x = stream[0] * app.width;
      var y = stream[1] * app.height;

      var ship = Utils.random(possibleShips);
      var shipData = defs.ships[ship];
      var angle = Math.atan2(y - app.center.y, x - app.center.x);

      for (var j = 0; j < shipsPerStream; j++) {

        var entity = this.add(ENGINE.Ship, {
          type: ship,
          x: x + Math.cos(angle) * j * 100,
          y: y + Math.sin(angle) * j * 100,
          team: 0
        });

        this.shipsLeft++;

        if (shipData.boss) {

          entity.hp = entity.maxHp = this.score;
          entity.damage = this.score / 50 | 0;
          entity.scale = 0.5 + this.score / 200;

          break;

        }

      }

    }

  },

  repairShips: function() {

    var ships = Utils.filter(this.entities, function(e) {
      return (e instanceof ENGINE.Ship) && e.team;
    });

    for (var i = 0; i < ships.length; i++) {

      ships[i].repair();

    }

  },

  onenemydeath: function(ship) {

    this.shipsLeft--;

    if (this.shipsLeft <= 0) this.nextWave();

  },

  pointerdown: function(e) {

    this.add(ENGINE.Missile, {
      x: e.x,
      y: e.y,
      team: 1
    });

  },

  gameover: function() {

    ENGINE.Gameover.score = this.score;

    app.setState(ENGINE.Gameover);


  }

};
ENGINE.Powerup = function(args) {

  Utils.extend(this, args);

  this.radius = 32;

  this.direction = Math.random() * 6.28;
  this.speed = 32;

  this.forceDirection = Math.random() * 6.28;
  this.force = 64 + Math.random() * 128;

  this.force *= 3;
  this.forceDamping = this.force;

  this.lifetime = 0;
  this.duration = 10;

  var keys = ["repair", "missiles", "freeze"];

  var freelanersCount = Utils.filter(this.game.entities, function(e) {
    return e.free && e instanceof ENGINE.Ship;
  }).length;

  if (freelanersCount < 2) keys.push("freelancer");

  this.key = Utils.random(keys);
  this.sprite = this.sprites[this.key];

};

ENGINE.Powerup.prototype = {

  consturctor: ENGINE.Powerup,

  sprite: [216, 159, 14, 14],

  type: "powerup",

  sprites: {

    "repair": [245, 89, 23, 25],
    "freelancer": [276, 51, 32, 32],
    "freeze": [242, 119, 19, 21],
    "missiles": [311, 13, 28, 32]

  },

  collect: function() {

    this.game.explosion(this.x, this.y, 16, "#fff");

    this.game.remove(this);

    if (!this.game.benchmark) app.sound.play("coin");

    this.game.player.poke();

    this.game.add(ENGINE.TextOut, {
      x: this.x,
      y: this.y,
      text: this.key
    });

    switch (this.key) {

      case "freeze":

        this.game.freezeLifespan = 4.0;

        break;

      case "missiles":

        for (var i = 0; i < 4; i++) this.game.add(ENGINE.Missile, {
          x: this.x,
          y: this.y,
          team: 1
        });

        break;

      case "repair":

        this.game.repairShips();

        break;


      case "freelancer":

        var ship = this.game.add(ENGINE.Ship, {
          x: this.x,
          y: this.y,
          type: "freelancer",
          team: 1,
          free: true,
          planet: this.game.playerPlanet
        });

        ship.forceDirection = Math.random() * 6;
        ship.force = 200;

        break;
    }

  },

  step: function(dt) {

    this.lifetime += dt;

    var playerDistance = Utils.distance(this, this.game.player);

    if (this.force) {

      this.x += Math.cos(this.forceDirection) * this.force * dt;
      this.y += Math.sin(this.forceDirection) * this.force * dt;

      this.force = Math.max(0, this.force - this.forceDamping * dt);

    }

    if (this.lifetime > 0.5) {
      if (playerDistance < 32) {
        this.collect();
        this.game.player.resources++;
      }
    }

    if (this.lifetime > this.duration) this.game.remove(this);

  },

  render: function() {

    var linear = app.lifetime % 0.5 / 0.5;
    var scale = 0.8 + Math.sin(Math.PI * linear) * 0.4;

    app.ctx.save();

    app.ctx.translate(this.x, this.y);

    app.ctx.scale(scale, scale);

    app.ctx.drawImage(app.images.spritesheet,
      this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
    );

    app.ctx.restore();

  }

};
ENGINE.TextOut = function(args) {

  Utils.extend(this, {
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    fontSize: 24,
    scaleX: 0,
    scaleY: 1.0,
    text: "void",
    duration: 2.0
  }, args);

  var textout = this;

  app.tween(this)
    .to({
      scaleX: 1.0
    }, this.duration * 0.25, "outElastic")
    .wait(this.duration * 0.5)
    .to({
      scaleY: 0.0
    }, this.duration * 0.25, "outCirc")
    .on("finish", function() {
      textout.game.remove(textout);
    });

    ttt = this;

};

ENGINE.TextOut.prototype = {

  consturctor: ENGINE.TextOut,

  sprite: [216, 159, 14, 14],

  type: "textout",

  step: function(dt) {

  },

  render: function() {

    if (!this.scaleX || !this.scaleY) return;

    app.ctx.save();

    app.ctx.translate(this.x, this.y);

    app.fontSize(this.fontSize);

    app.ctx.fillStyle = this.color;
    app.ctx.textAlign = "center";

    app.ctx.scale(this.scaleX, this.scaleY);
    app.ctx.fillText(this.text, 0, 0)

    app.ctx.restore();

  }

};
ENGINE.Trail = function(parent, args) {

  this.parent = parent;

  Utils.extend(this, {
    color: "#0fc",
    points: [],
    maxPoints: 5,
    width: 10,
    lifetime: 0,
    lifespan: 0,
    paused: false,
    interval: 0.15,
    stroke: true
  }, args);

};

ENGINE.Trail.prototype = {

  zIndex: 200,

  reaction: 8,

  clear: function() {

    this.points = [];

  },

  step: function(delta) {

    this.lifetime += delta;

    if (Utils.interval("point", this.interval, this)) {

      if (!this.paused) this.points.push(this.parent.x, this.parent.y);

      if (        
        (this.points.length > this.maxPoints * 2) ||
        (this.paused && this.points.length > 0)
      ) {
        this.points.shift();
        this.points.shift();
      }
    }

    this.points[this.points.length - 2] = this.parent.x;
    this.points[this.points.length - 1] = this.parent.y;

    if(this.lifespan && this.lifetime > this.lifespan) {
      this.paused = true;
    }

  },

  render: function() {

    if(this.points.length <= 0) return;

    app.layer.save();
    app.layer.strokeStyle(this.color);
    app.layer.lineCap("square");

    // if (!this.stroke) app.layer.strokeStyle("rgba(0,0,0,0.1)");

    for (var i = 2; i < this.points.length; i += 2) {

      var ratio = i / (2 * this.maxPoints);
      var px = this.points[i - 2];
      var py = this.points[i - 1];
      var nx = this.points[i];
      var ny = this.points[i + 1];
      app.layer.beginPath();
      app.layer.moveTo(px | 0, py | 0);
      app.layer.lineTo(nx | 0, ny | 0);
      app.layer.a(ratio).lineWidth(ratio * this.width);
      app.layer.stroke();
    }

    app.layer.restore();


  }

};
ENGINE.Missile = function(args) {

  Utils.extend(this, {
    speed: 400
  }, args);

  this.color = defs.teamColor[this.team];
  this.radius = 4;
  this.direction = 0;

  this.force = 400;
  this.forceDirection = Math.random() * 6;

  this.trail = new ENGINE.Trail(this, {
    interval: 0.05,
    maxPoints: 10,
    color: "#fa0"
  });

  for (var i = 0; i < this.game.entities.length; i++) {

    var e = this.game.entities[i];

    if (!(e instanceof ENGINE.Ship)) continue;

    if (e.missileTarget) continue;
    if (e.team === this.team) continue;

    e.missileTarget = this;
    this.target = e;

    break;

  }

};

ENGINE.Missile.prototype = {

  sprite: [145, 25, 6, 39],

  constructor: ENGINE.Missile,

  step: function(dt) {

    if(!this.target) return this.die();

    this.direction = Math.atan2(this.target.y - this.y, this.target.x - this.x);

    this.x += Math.cos(this.direction) * this.speed * dt;
    this.y += Math.sin(this.direction) * this.speed * dt;

    this.force = Math.max(this.force - dt * 400, 0);

    this.x += Math.cos(this.forceDirection) * this.force * dt;
    this.y += Math.sin(this.forceDirection) * this.force * dt;


    if (Utils.distance(this, this.target) < this.radius + this.target.radius) {

      this.hit(this.target);

    }

    this.trail.step(dt);


  },

  hit: function(target) {

    target.applyDamage(10 + this.game.score / 10);

    this.die();

  },

  die: function() {

    this.dead = true;

  },

  render: function() {

    this.trail.render();

  }

};
ENGINE.Gameover = {

  score: 737,
  hiscore: 200,

  starOff: [382, 177, 15, 16],
  starOn: [339, 169, 37, 37],

  enter: function() {

    this.currentScore = 0;
    this.stars = [];
    this.scoreOffset = -app.width;
    this.achievedStars = Math.min(10, (this.score / 1000) * 10 | 0);

    for (var i = 0; i < 10; i++) {

      this.stars.push({
        x: i * 64,
        y: 64,
        scale: 0
      });

    }

    for (var i = 0; i < this.achievedStars; i++) {

      var star = this.stars[i];

      app.tween(star).wait(i * 0.1).to({
        scale: 1.0,
        y: 64
      }, 2.5, "outElastic");

    }

    app.tween(this).to({

      currentScore: this.score,
      scoreOffset: 0

    }, 2.5, "outElastic");


  },

  step: function() {

  },

  renderStars: function(x, y) {


    for (var i = 0; i < 10; i++) {

      var star = this.stars[i];

      app.layer.save();

      app.layer.translate(star.x + x, star.y + y);

      app.layer.align(0.5, 0.5);

      app.layer.drawRegion(app.images.spritesheet, this.starOff, 0, 0);

      if (star.scale > 0) {

        app.layer.rotate(app.lifetime);
        app.layer.scale(star.scale, star.scale);
        app.layer.drawRegion(app.images.spritesheet, this.starOn, 0, 0);
      }

      app.layer.restore();

    }

  },

  render: function() {

    app.ctx.fillStyle = "#131731";

    app.ctx.fillRect(0, 0, app.width, app.height);

    app.ctx.drawImage(app.images.help, app.center.x - app.images.help.width * 0.5 | 0, app.height - app.images.help.height - 32)

    this.renderStars(app.center.x - 320, 0);

    app.fontSize(48);

    app.ctx.fillStyle = "#fa0";
    app.ctx.textAlign = "center";

    app.ctx.fillText("SCORE: " + (this.currentScore | 0), app.center.x + this.scoreOffset, 180)

    app.fontSize(32);

    app.ctx.fillStyle = "#f40";
    app.ctx.textAlign = "center";

    app.ctx.fillText("HI-SCORE: " + (this.hiscore | 0), app.center.x - this.scoreOffset, 220)
  }

};
/* application */

var app = playground({

  // width: 1440,
  // height: 900,

  paths: {

    // base: "http://rezoner.net/private/mozilla/live/"

  },

  smoothing: false,

  fontSize: function(size) {

    return this.ctx.font = size + "px 'Squada One'";

  },

  create: function() {

    this.loadImages("spritesheet", "help");
    this.loadSound("action");

    this.keyboard.preventDefault = false;

    this.sound = this.audio.channel("sound").volume(0.5);
    this.music = this.audio.channel("music").volume(0.5);

    this.ctx = app.layer.context;

  },

  ready: function() {

    app.baseline = localStorage.getItem("baseline") | 0;

    if (false && app.baseline) {

      this.setState(ENGINE.Game);

    } else {
      //      this.setState(ENGINE.Gameover);

      this.setState(ENGINE.Benchmark);

    }

  },

  getColoredImage: function(key, color, mode) {

    if (typeof mode === "undefined") mode = "hard-light";

    if (typeof key === "string") {
      var image = this.images[key];
    } else {
      var image = key;
    }

    var storekey = key + color;

    if (!image[storekey]) {

      if (typeof mix === "undefined") mix = 1;

      var below = document.createElement("canvas");
      belowCtx = below.getContext("2d");

      below.width = image.width;
      below.height = image.height;

      belowCtx.drawImage(image, 0, 0);
      belowCtx.globalCompositeOperation = "source-in";
      belowCtx.fillStyle = color;
      belowCtx.fillRect(0, 0, image.width, image.height);

      image[storekey] = below;

    }

    return image[storekey];

  },

  roundAngle: function(angle) {

    return Utils.ground(angle - Math.PI / 16, Math.PI / 8);

  },

  visibilitychange: function(e) {

    if (e === "hidden") {

      this.storedSoundVolume = this.sound.volume();
      this.storedMusicVolume = this.music.volume();

      this.sound.volume(0);
      this.music.volume(0);


    } else {

      this.sound.volume(this.storedSoundVolume);
      this.music.volume(this.storedMusicVolume);

    }

  }

});


var performance = window.performance || window.webkitPerformance || Date;

Math.sign = Math.sign || function(x) {

  x = +x; // convert to a number

  if (x === 0 || isNaN(x)) {

    return x;

  }

  return x > 0 ? 1 : -1;

};
/*

Put unoptimized versions of functions there.
If you want to test optimized vs unoptimized
just comment out a function or put a random letter in its name...


As you will put more and more bottlenecks you will have to adjust 
how much does it affect available power so unoptimized game can run at least 
one ship. Modify this factor is in Game.js

REFERENCE_FRAME_TIME = 0.8;

*/

/* 

  Distance is an example of a risky optimization target 

  1) Execution time is neglectible
  2) If you unoptimize then optimize such cheap function you will get enormous boost
     that will render the rest of optimization unnecessary
  3) This method literally affects half of the logic in the game
     The results are unpredictable
  4) I might not be right ;)

*/

Utils.distance = function(a, b) {

  var dx = a.x - b.x;
  var dy = a.y - b.y;

  return Math.sqrt(dx * dx + dy * dy);

};

/* I think we should put a comment before any function hoisted for optimization
   that will tell what return value is actually expected by the method */

Utils.nearest = function(from, entities) {

  var result = null;

  var distances = [];

  for (var i = 0; i < entities.length; i++) {

    var to = entities[i];

    if (from === to) continue;

    var distance = this.distance(from, to);

    distances.push({
      target: to,
      distance: distance
    });

  }

  var min = -1;

  function sortDistances(a, b) {

    return a.distance - b.distance;

  }

  var sortedDistances = distances.sort(sortDistances);

  if (sortedDistances.length)

    return sortedDistances[0].target;

  else return null;

};

/* Functional programming \o/
   This one is actually an optimized version
*/

Utils.filter = function(array, test) {

  var result = [];

  for (var i = 0; i < array.length; i++) {

    if (test(array[i])) result.push(array[i]);

  }

  return result;

};

/* returns nearest ship of opposite team */

ENGINE.Ship.prototype.getTarget = function() {

  var pool = [];

  for (var i = 0; i < this.game.entities.length; i++) {

    var entity = this.game.entities[i];

    if (!(entity instanceof ENGINE.Ship)) continue;

    if (entity.team !== this.team) pool.push(entity);

  }

  /* ANOTHER WARNING  - we have already unoptimized Utils.nearest
     this adds up to unpredictable scale of results */

  return Utils.nearest(this, pool);

};

Utils.moveInDirection = function(direction, value) {

  value /= 1000;

  for (var i = 0; i < 1000; i++) {

    this.x += Math.cos(direction) * value;
    this.y += Math.sin(direction) * value;

  }

};

ENGINE.Ship.prototype.move = function(dt) {

  if (!this.frozen) {

    Utils.moveInDirection.apply(this, [this.direction, this.speed * dt]);

  }

  if (this.force > 0) {

    this.force -= 200 * dt;

    Utils.moveInDirection.apply(this, [this.forceDirection, this.force * dt]);

  }

};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuanMiLCJMb2Rhc2guanMiLCJVdGlscy5qcyIsIlBsYXlncm91bmQuanMiLCJQbGF5Z3JvdW5kLlNjYW5saW5lcy5qcyIsIlBsYXlncm91bmQuU291bmRPbkRlbWFuZC5qcyIsIkVuZ2luZS5qcyIsIkJlbmNobWFyay5qcyIsIkJhY2tncm91bmRTdGFycy5qcyIsIkNpcmNsZUV4cGxvc2lvbi5qcyIsIlNoaXAuanMiLCJCdWxsZXQuanMiLCJBc3Rlcm9pZC5qcyIsIkN1cnNvci5qcyIsIlJlc291cmNlLmpzIiwiQnV0dG9uLmpzIiwiUGFydGljbGUuanMiLCJQbGFuZXQuanMiLCJHYW1lLmpzIiwiUG93ZXJ1cC5qcyIsIlRleHRPdXQuanMiLCJUcmFpbC5qcyIsIk1pc3NpbGUuanMiLCJHYW1lb3Zlci5qcyIsIk1haW4uanMiLCJib3R0bGVuZWNrcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaHZCQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdFlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeFpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDam9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmcyA9IHtcblxuICB0ZWFtQ29sb3I6IFtcIiNmZjQ0NDRcIiwgXCIjMDBhYWZmXCJdLFxuXG4gIGZyb3plblNwcml0ZTogWzE5MywgODYsIDExLCAxOV0sXG5cbiAgYnV0dG9uczoge1xuICAgIFwiZmlnaHRlclwiOiBbNCwgMzQ1LCA2NCwgNjRdLFxuICAgIFwic3BlZWRcIjogWzEzMiwgMzQ1LCA2NCwgNjRdLFxuICAgIFwibGlmZVwiOiBbNjgsIDM0NSwgNjQsIDY0XSxcbiAgICBcImRhbWFnZVwiOiBbMTk2LCAzNDUsIDY0LCA2NF1cbiAgfSxcblxuICBzaGlwczoge1xuXG4gICAgXCJmaWdodGVyXCI6IHtcblxuICAgICAgcHJlZmVyZW5jZTogW1wic21hbGxcIl0sXG4gICAgICBjb29sZG93bjogMC41LFxuICAgICAgZGFtYWdlOiAxLFxuICAgICAgaHA6IDEwLFxuICAgICAgc3ByaXRlOiBbNDA3LCAxOCwgMzIsIDMyXSxcbiAgICAgIHByaWNlOiAxLFxuICAgICAgc3BlZWQ6IDgwXG5cbiAgICB9LFxuXG4gICAgXCJmcmVlbGFuY2VyXCI6IHtcblxuICAgICAgY29vbGRvd246IDAuNSxcbiAgICAgIGRhbWFnZTogMSxcbiAgICAgIGhwOiAxMCxcbiAgICAgIHNwcml0ZTogWzM2NywgNTksIDMxLCAzMl0sXG4gICAgICBzcGVlZDogODBcbiAgICAgIFxuICAgIH0sXG5cblxuICAgIFwiY3JlZXAxXCI6IHtcblxuICAgICAgcHJlZmVyZW5jZTogW1wiYmlnXCJdLFxuICAgICAgZGFtYWdlOiAyLFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBocDogNCxcbiAgICAgIHNwcml0ZTogWzQ0NCwgMjMsIDIyLCAyMV0sXG4gICAgICBwcmljZTogNSxcbiAgICAgIHNwZWVkOiA2MFxuXG4gICAgfSxcblxuICAgIFwiY3JlZXAyXCI6IHtcblxuICAgICAgcHJlZmVyZW5jZTogW1wiYmlnXCJdLFxuICAgICAgZGFtYWdlOiAyLFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBocDogMTAsXG4gICAgICBzcHJpdGU6IFs0NzEsIDIzLCAzMiwgMjNdLFxuICAgICAgcHJpY2U6IDUsXG4gICAgICBzcGVlZDogODBcblxuICAgIH0sXG5cbiAgICBcImNyZWVwM1wiOiB7XG5cbiAgICAgIHByZWZlcmVuY2U6IFtcImJpZ1wiXSxcbiAgICAgIGRhbWFnZTogNCxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgaHA6IDMwLFxuICAgICAgc3ByaXRlOiBbNTAzLCAxOSwgMzIsIDI5XSxcbiAgICAgIHByaWNlOiA1LFxuICAgICAgc3BlZWQ6IDUwXG5cbiAgICB9LFxuXG4gICAgXCJjcmVlcDRcIjoge1xuXG4gICAgICBwcmVmZXJlbmNlOiBbXCJiaWdcIl0sXG4gICAgICBkYW1hZ2U6IDYsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGhwOiA1MCxcbiAgICAgIHNwcml0ZTogWzUzNSwgMTgsIDMyLCAzMl0sXG4gICAgICBwcmljZTogNSxcbiAgICAgIHNwZWVkOiA1MFxuXG4gICAgfSxcblxuICAgIFwiYm9zc1wiOiB7XG5cbiAgICAgIGRhbWFnZTogMTAsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGhwOiA1MDAsXG4gICAgICBzcHJpdGU6IFs0NTYsIDUzLCA2NCwgNjRdLFxuICAgICAgc3BlZWQ6IDMyLFxuICAgICAgYm9zczogdHJ1ZVxuXG4gICAgfVxuXG4gIH0sXG5cbiAgdG9vbHRpcHM6IHtcblxuICAgIFwiZmlnaHRlclwiOiBcImJ1aWxkIGEgZmlnaHRlclwiLFxuICAgIFwic3BlZWRcIjogXCJ1cGdyYWRlIGZpZ2h0ZXJzIHNwZWVkXCIsXG4gICAgXCJsaWZlXCI6IFwidXBncmFkZSBmaWdodGVycyBsaWZlXCIsXG4gICAgXCJkYW1hZ2VcIjogXCJ1cGdyYWRlIGZpZ2h0ZXJzIGRhbWFnZVwiXG5cbiAgfSxcblxuICBib251c2VzOiB7XG4gICAgc2hpZWxkOiBcImFzdGVyb2lkcyBzaGllbGRcIixcbiAgICBsYXNlcjogXCJjdXJzb3IgbGFzZXJcIixcbiAgICBtYWduZXQ6IFwiY29pbiBtYWduZXRcIlxuICB9XG5cbn07IiwiLyoqXG4gKiBAbGljZW5zZVxuICogbG9kYXNoIDMuOC4wIChDdXN0b20gQnVpbGQpIGxvZGFzaC5jb20vbGljZW5zZSB8IFVuZGVyc2NvcmUuanMgMS44LjMgdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFXG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gLW8gLi9sb2Rhc2guanNgXG4gKi9cbjsoZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4sdCl7aWYobiE9PXQpe3ZhciByPW49PT1uLGU9dD09PXQ7aWYobj50fHwhcnx8bj09PXcmJmUpcmV0dXJuIDE7aWYobjx0fHwhZXx8dD09PXcmJnIpcmV0dXJuLTF9cmV0dXJuIDB9ZnVuY3Rpb24gdChuLHQscil7Zm9yKHZhciBlPW4ubGVuZ3RoLHU9cj9lOi0xO3I/dS0tOisrdTxlOylpZih0KG5bdV0sdSxuKSlyZXR1cm4gdTtyZXR1cm4tMX1mdW5jdGlvbiByKG4sdCxyKXtpZih0IT09dClyZXR1cm4gcChuLHIpO3ItPTE7Zm9yKHZhciBlPW4ubGVuZ3RoOysrcjxlOylpZihuW3JdPT09dClyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiBlKG4pe3JldHVybiB0eXBlb2Ygbj09XCJmdW5jdGlvblwifHxmYWxzZX1mdW5jdGlvbiB1KG4pe3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIj9uOm51bGw9PW4/XCJcIjpuK1wiXCJ9ZnVuY3Rpb24gbyhuKXtyZXR1cm4gbi5jaGFyQ29kZUF0KDApfWZ1bmN0aW9uIGkobix0KXtmb3IodmFyIHI9LTEsZT1uLmxlbmd0aDsrK3I8ZSYmLTE8dC5pbmRleE9mKG4uY2hhckF0KHIpKTspO1xucmV0dXJuIHJ9ZnVuY3Rpb24gZihuLHQpe2Zvcih2YXIgcj1uLmxlbmd0aDtyLS0mJi0xPHQuaW5kZXhPZihuLmNoYXJBdChyKSk7KTtyZXR1cm4gcn1mdW5jdGlvbiBhKHQscil7cmV0dXJuIG4odC5hLHIuYSl8fHQuYi1yLmJ9ZnVuY3Rpb24gYyhuKXtyZXR1cm4gJG5bbl19ZnVuY3Rpb24gbChuKXtyZXR1cm4gTG5bbl19ZnVuY3Rpb24gcyhuKXtyZXR1cm5cIlxcXFxcIitNbltuXX1mdW5jdGlvbiBwKG4sdCxyKXt2YXIgZT1uLmxlbmd0aDtmb3IodCs9cj8wOi0xO3I/dC0tOisrdDxlOyl7dmFyIHU9blt0XTtpZih1IT09dSlyZXR1cm4gdH1yZXR1cm4tMX1mdW5jdGlvbiBoKG4pe3JldHVybiEhbiYmdHlwZW9mIG49PVwib2JqZWN0XCJ9ZnVuY3Rpb24gXyhuKXtyZXR1cm4gMTYwPj1uJiY5PD1uJiYxMz49bnx8MzI9PW58fDE2MD09bnx8NTc2MD09bnx8NjE1OD09bnx8ODE5Mjw9biYmKDgyMDI+PW58fDgyMzI9PW58fDgyMzM9PW58fDgyMzk9PW58fDgyODc9PW58fDEyMjg4PT1ufHw2NTI3OT09bik7XG5cbn1mdW5jdGlvbiB2KG4sdCl7Zm9yKHZhciByPS0xLGU9bi5sZW5ndGgsdT0tMSxvPVtdOysrcjxlOyluW3JdPT09dCYmKG5bcl09eixvWysrdV09cik7cmV0dXJuIG99ZnVuY3Rpb24gZyhuKXtmb3IodmFyIHQ9LTEscj1uLmxlbmd0aDsrK3Q8ciYmXyhuLmNoYXJDb2RlQXQodCkpOyk7cmV0dXJuIHR9ZnVuY3Rpb24geShuKXtmb3IodmFyIHQ9bi5sZW5ndGg7dC0tJiZfKG4uY2hhckNvZGVBdCh0KSk7KTtyZXR1cm4gdH1mdW5jdGlvbiBkKG4pe3JldHVybiB6bltuXX1mdW5jdGlvbiBtKF8pe2Z1bmN0aW9uICRuKG4pe2lmKGgobikmJiEoVG8obil8fG4gaW5zdGFuY2VvZiBCbikpe2lmKG4gaW5zdGFuY2VvZiB6bilyZXR1cm4gbjtpZihHZS5jYWxsKG4sXCJfX2NoYWluX19cIikmJkdlLmNhbGwobixcIl9fd3JhcHBlZF9fXCIpKXJldHVybiBMcihuKX1yZXR1cm4gbmV3IHpuKG4pfWZ1bmN0aW9uIExuKCl7fWZ1bmN0aW9uIHpuKG4sdCxyKXt0aGlzLl9fd3JhcHBlZF9fPW4sdGhpcy5fX2FjdGlvbnNfXz1yfHxbXSxcbnRoaXMuX19jaGFpbl9fPSEhdH1mdW5jdGlvbiBCbihuKXt0aGlzLl9fd3JhcHBlZF9fPW4sdGhpcy5fX2FjdGlvbnNfXz1udWxsLHRoaXMuX19kaXJfXz0xLHRoaXMuX19maWx0ZXJlZF9fPWZhbHNlLHRoaXMuX19pdGVyYXRlZXNfXz1udWxsLHRoaXMuX190YWtlQ291bnRfXz1JdSx0aGlzLl9fdmlld3NfXz1udWxsfWZ1bmN0aW9uIE1uKCl7dGhpcy5fX2RhdGFfXz17fX1mdW5jdGlvbiBEbihuKXt2YXIgdD1uP24ubGVuZ3RoOjA7Zm9yKHRoaXMuZGF0YT17aGFzaDpkdShudWxsKSxzZXQ6bmV3IGx1fTt0LS07KXRoaXMucHVzaChuW3RdKX1mdW5jdGlvbiBQbihuLHQpe3ZhciByPW4uZGF0YTtyZXR1cm4odHlwZW9mIHQ9PVwic3RyaW5nXCJ8fHNlKHQpP3Iuc2V0Lmhhcyh0KTpyLmhhc2hbdF0pPzA6LTF9ZnVuY3Rpb24gcW4obix0KXt2YXIgcj0tMSxlPW4ubGVuZ3RoO2Zvcih0fHwodD1VZShlKSk7KytyPGU7KXRbcl09bltyXTtyZXR1cm4gdH1mdW5jdGlvbiBLbihuLHQpe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoOysrcjxlJiZmYWxzZSE9PXQobltyXSxyLG4pOyk7XG5yZXR1cm4gbn1mdW5jdGlvbiBWbihuLHQpe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoOysrcjxlOylpZighdChuW3JdLHIsbikpcmV0dXJuIGZhbHNlO3JldHVybiB0cnVlfWZ1bmN0aW9uIEduKG4sdCl7Zm9yKHZhciByPS0xLGU9bi5sZW5ndGgsdT0tMSxvPVtdOysrcjxlOyl7dmFyIGk9bltyXTt0KGkscixuKSYmKG9bKyt1XT1pKX1yZXR1cm4gb31mdW5jdGlvbiBKbihuLHQpe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoLHU9VWUoZSk7KytyPGU7KXVbcl09dChuW3JdLHIsbik7cmV0dXJuIHV9ZnVuY3Rpb24gWG4obix0LHIsZSl7dmFyIHU9LTEsbz1uLmxlbmd0aDtmb3IoZSYmbyYmKHI9blsrK3VdKTsrK3U8bzspcj10KHIsblt1XSx1LG4pO3JldHVybiByfWZ1bmN0aW9uIEhuKG4sdCl7Zm9yKHZhciByPS0xLGU9bi5sZW5ndGg7KytyPGU7KWlmKHQobltyXSxyLG4pKXJldHVybiB0cnVlO3JldHVybiBmYWxzZX1mdW5jdGlvbiBRbihuLHQpe3JldHVybiBuPT09dz90Om59ZnVuY3Rpb24gbnQobix0LHIsZSl7XG5yZXR1cm4gbiE9PXcmJkdlLmNhbGwoZSxyKT9uOnR9ZnVuY3Rpb24gdHQobix0LHIpe3ZhciBlPUtvKHQpO2Z1LmFwcGx5KGUsWnUodCkpO2Zvcih2YXIgdT0tMSxvPWUubGVuZ3RoOysrdTxvOyl7dmFyIGk9ZVt1XSxmPW5baV0sYT1yKGYsdFtpXSxpLG4sdCk7KGE9PT1hP2E9PT1mOmYhPT1mKSYmKGYhPT13fHxpIGluIG4pfHwobltpXT1hKX1yZXR1cm4gbn1mdW5jdGlvbiBydChuLHQpe2Zvcih2YXIgcj0tMSxlPW51bGw9PW4sdT0hZSYmanIobiksbz11JiZuLmxlbmd0aCxpPXQubGVuZ3RoLGY9VWUoaSk7KytyPGk7KXt2YXIgYT10W3JdO2Zbcl09dT9rcihhLG8pP25bYV06dzplP3c6blthXX1yZXR1cm4gZn1mdW5jdGlvbiBldChuLHQscil7cnx8KHI9e30pO2Zvcih2YXIgZT0tMSx1PXQubGVuZ3RoOysrZTx1Oyl7dmFyIG89dFtlXTtyW29dPW5bb119cmV0dXJuIHJ9ZnVuY3Rpb24gdXQobix0LHIpe3ZhciBlPXR5cGVvZiBuO3JldHVyblwiZnVuY3Rpb25cIj09ZT90PT09dz9uOnp0KG4sdCxyKTpudWxsPT1uP1JlOlwib2JqZWN0XCI9PWU/d3Qobik6dD09PXc/VGUobik6YnQobix0KTtcblxufWZ1bmN0aW9uIG90KG4sdCxyLGUsdSxvLGkpe3ZhciBmO2lmKHImJihmPXU/cihuLGUsdSk6cihuKSksZiE9PXcpcmV0dXJuIGY7aWYoIXNlKG4pKXJldHVybiBuO2lmKGU9VG8obikpe2lmKGY9d3IobiksIXQpcmV0dXJuIHFuKG4sZil9ZWxzZXt2YXIgYT1YZS5jYWxsKG4pLGM9YT09SztpZihhIT1ZJiZhIT1CJiYoIWN8fHUpKXJldHVybiBOblthXT94cihuLGEsdCk6dT9uOnt9O2lmKGY9YnIoYz97fTpuKSwhdClyZXR1cm4gJHUoZixuKX1mb3Iob3x8KG89W10pLGl8fChpPVtdKSx1PW8ubGVuZ3RoO3UtLTspaWYob1t1XT09bilyZXR1cm4gaVt1XTtyZXR1cm4gby5wdXNoKG4pLGkucHVzaChmKSwoZT9LbjpodCkobixmdW5jdGlvbihlLHUpe2ZbdV09b3QoZSx0LHIsdSxuLG8saSl9KSxmfWZ1bmN0aW9uIGl0KG4sdCxyKXtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBQZShMKTtyZXR1cm4gc3UoZnVuY3Rpb24oKXtuLmFwcGx5KHcscil9LHQpfWZ1bmN0aW9uIGZ0KG4sdCl7XG52YXIgZT1uP24ubGVuZ3RoOjAsdT1bXTtpZighZSlyZXR1cm4gdTt2YXIgbz0tMSxpPW1yKCksZj1pPT1yLGE9ZiYmMjAwPD10Lmxlbmd0aD9xdSh0KTpudWxsLGM9dC5sZW5ndGg7YSYmKGk9UG4sZj1mYWxzZSx0PWEpO246Zm9yKDsrK288ZTspaWYoYT1uW29dLGYmJmE9PT1hKXtmb3IodmFyIGw9YztsLS07KWlmKHRbbF09PT1hKWNvbnRpbnVlIG47dS5wdXNoKGEpfWVsc2UgMD5pKHQsYSwwKSYmdS5wdXNoKGEpO3JldHVybiB1fWZ1bmN0aW9uIGF0KG4sdCl7dmFyIHI9dHJ1ZTtyZXR1cm4genUobixmdW5jdGlvbihuLGUsdSl7cmV0dXJuIHI9ISF0KG4sZSx1KX0pLHJ9ZnVuY3Rpb24gY3Qobix0KXt2YXIgcj1bXTtyZXR1cm4genUobixmdW5jdGlvbihuLGUsdSl7dChuLGUsdSkmJnIucHVzaChuKX0pLHJ9ZnVuY3Rpb24gbHQobix0LHIsZSl7dmFyIHU7cmV0dXJuIHIobixmdW5jdGlvbihuLHIsbyl7cmV0dXJuIHQobixyLG8pPyh1PWU/cjpuLGZhbHNlKTp2b2lkIDB9KSx1fWZ1bmN0aW9uIHN0KG4sdCxyKXtcbmZvcih2YXIgZT0tMSx1PW4ubGVuZ3RoLG89LTEsaT1bXTsrK2U8dTspe3ZhciBmPW5bZV07aWYoaChmKSYmanIoZikmJihyfHxUbyhmKXx8YWUoZikpKXt0JiYoZj1zdChmLHQscikpO2Zvcih2YXIgYT0tMSxjPWYubGVuZ3RoOysrYTxjOylpWysrb109ZlthXX1lbHNlIHJ8fChpWysrb109Zil9cmV0dXJuIGl9ZnVuY3Rpb24gcHQobix0KXtNdShuLHQsbWUpfWZ1bmN0aW9uIGh0KG4sdCl7cmV0dXJuIE11KG4sdCxLbyl9ZnVuY3Rpb24gX3Qobix0KXtyZXR1cm4gRHUobix0LEtvKX1mdW5jdGlvbiB2dChuLHQpe2Zvcih2YXIgcj0tMSxlPXQubGVuZ3RoLHU9LTEsbz1bXTsrK3I8ZTspe3ZhciBpPXRbcl07Tm8obltpXSkmJihvWysrdV09aSl9cmV0dXJuIG99ZnVuY3Rpb24gZ3Qobix0LHIpe2lmKG51bGwhPW4pe3IhPT13JiZyIGluIEZyKG4pJiYodD1bcl0pLHI9LTE7Zm9yKHZhciBlPXQubGVuZ3RoO251bGwhPW4mJisrcjxlOyluPW5bdFtyXV07cmV0dXJuIHImJnI9PWU/bjp3fVxufWZ1bmN0aW9uIHl0KG4sdCxyLGUsdSxvKXtpZihuPT09dClyZXR1cm4gdHJ1ZTt2YXIgaT10eXBlb2YgbixmPXR5cGVvZiB0O2lmKFwiZnVuY3Rpb25cIiE9aSYmXCJvYmplY3RcIiE9aSYmXCJmdW5jdGlvblwiIT1mJiZcIm9iamVjdFwiIT1mfHxudWxsPT1ufHxudWxsPT10KW49biE9PW4mJnQhPT10O2Vsc2Ugbjp7dmFyIGk9eXQsZj1UbyhuKSxhPVRvKHQpLGM9TSxsPU07Znx8KGM9WGUuY2FsbChuKSxjPT1CP2M9WTpjIT1ZJiYoZj1nZShuKSkpLGF8fChsPVhlLmNhbGwodCksbD09Qj9sPVk6bCE9WSYmZ2UodCkpO3ZhciBzPWM9PVksYT1sPT1ZLGw9Yz09bDtpZighbHx8Znx8cyl7aWYoIWUmJihjPXMmJkdlLmNhbGwobixcIl9fd3JhcHBlZF9fXCIpLGE9YSYmR2UuY2FsbCh0LFwiX193cmFwcGVkX19cIiksY3x8YSkpe249aShjP24udmFsdWUoKTpuLGE/dC52YWx1ZSgpOnQscixlLHUsbyk7YnJlYWsgbn1pZihsKXtmb3IodXx8KHU9W10pLG98fChvPVtdKSxjPXUubGVuZ3RoO2MtLTspaWYodVtjXT09bil7XG5uPW9bY109PXQ7YnJlYWsgbn11LnB1c2gobiksby5wdXNoKHQpLG49KGY/X3I6Z3IpKG4sdCxpLHIsZSx1LG8pLHUucG9wKCksby5wb3AoKX1lbHNlIG49ZmFsc2V9ZWxzZSBuPXZyKG4sdCxjKX1yZXR1cm4gbn1mdW5jdGlvbiBkdChuLHQscixlLHUpe2Zvcih2YXIgbz0tMSxpPXQubGVuZ3RoLGY9IXU7KytvPGk7KWlmKGYmJmVbb10/cltvXSE9PW5bdFtvXV06ISh0W29daW4gbikpcmV0dXJuIGZhbHNlO2ZvcihvPS0xOysrbzxpOyl7dmFyIGE9dFtvXSxjPW5bYV0sbD1yW29dO2lmKGYmJmVbb10/YT1jIT09d3x8YSBpbiBuOihhPXU/dShjLGwsYSk6dyxhPT09dyYmKGE9eXQobCxjLHUsdHJ1ZSkpKSwhYSlyZXR1cm4gZmFsc2V9cmV0dXJuIHRydWV9ZnVuY3Rpb24gbXQobix0KXt2YXIgcj0tMSxlPWpyKG4pP1VlKG4ubGVuZ3RoKTpbXTtyZXR1cm4genUobixmdW5jdGlvbihuLHUsbyl7ZVsrK3JdPXQobix1LG8pfSksZX1mdW5jdGlvbiB3dChuKXt2YXIgdD1LbyhuKSxyPXQubGVuZ3RoO2lmKCFyKXJldHVybiBJZSh0cnVlKTtcblxuaWYoMT09cil7dmFyIGU9dFswXSx1PW5bZV07aWYoQ3IodSkpcmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT1uP2ZhbHNlOm5bZV09PT11JiYodSE9PXd8fGUgaW4gRnIobikpfX1mb3IodmFyIG89VWUociksaT1VZShyKTtyLS07KXU9blt0W3JdXSxvW3JdPXUsaVtyXT1Dcih1KTtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJmR0KEZyKG4pLHQsbyxpKX19ZnVuY3Rpb24gYnQobix0KXt2YXIgcj1UbyhuKSxlPUVyKG4pJiZDcih0KSx1PW4rXCJcIjtyZXR1cm4gbj0kcihuKSxmdW5jdGlvbihvKXtpZihudWxsPT1vKXJldHVybiBmYWxzZTt2YXIgaT11O2lmKG89RnIobyksISghciYmZXx8aSBpbiBvKSl7aWYobz0xPT1uLmxlbmd0aD9vOmd0KG8sSXQobiwwLC0xKSksbnVsbD09bylyZXR1cm4gZmFsc2U7aT1QcihuKSxvPUZyKG8pfXJldHVybiBvW2ldPT09dD90IT09d3x8aSBpbiBvOnl0KHQsb1tpXSxudWxsLHRydWUpfX1mdW5jdGlvbiB4dChuLHQscixlLHUpe2lmKCFzZShuKSlyZXR1cm4gbjtcblxudmFyIG89anIodCkmJihUbyh0KXx8Z2UodCkpO2lmKCFvKXt2YXIgaT1Lbyh0KTtmdS5hcHBseShpLFp1KHQpKX1yZXR1cm4gS24oaXx8dCxmdW5jdGlvbihmLGEpe2lmKGkmJihhPWYsZj10W2FdKSxoKGYpKXtlfHwoZT1bXSksdXx8KHU9W10pO246e2Zvcih2YXIgYz1hLGw9ZSxzPXUscD1sLmxlbmd0aCxfPXRbY107cC0tOylpZihsW3BdPT1fKXtuW2NdPXNbcF07YnJlYWsgbn12YXIgcD1uW2NdLHY9cj9yKHAsXyxjLG4sdCk6dyxnPXY9PT13O2cmJih2PV8sanIoXykmJihUbyhfKXx8Z2UoXykpP3Y9VG8ocCk/cDpqcihwKT9xbihwKTpbXTpGbyhfKXx8YWUoXyk/dj1hZShwKT95ZShwKTpGbyhwKT9wOnt9Omc9ZmFsc2UpLGwucHVzaChfKSxzLnB1c2godiksZz9uW2NdPXh0KHYsXyxyLGwscyk6KHY9PT12P3YhPT1wOnA9PT1wKSYmKG5bY109dil9fWVsc2UgYz1uW2FdLGw9cj9yKGMsZixhLG4sdCk6dywocz1sPT09dykmJihsPWYpLCFvJiZsPT09d3x8IXMmJihsPT09bD9sPT09YzpjIT09Yyl8fChuW2FdPWwpO1xuXG59KSxufWZ1bmN0aW9uIEF0KG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD93OnRbbl19fWZ1bmN0aW9uIGp0KG4pe3ZhciB0PW4rXCJcIjtyZXR1cm4gbj0kcihuKSxmdW5jdGlvbihyKXtyZXR1cm4gZ3QocixuLHQpfX1mdW5jdGlvbiBrdChuLHQpe2Zvcih2YXIgcj1uP3QubGVuZ3RoOjA7ci0tOyl7dmFyIGU9cGFyc2VGbG9hdCh0W3JdKTtpZihlIT11JiZrcihlKSl7dmFyIHU9ZTtwdS5jYWxsKG4sZSwxKX19fWZ1bmN0aW9uIE90KG4sdCl7cmV0dXJuIG4rdXUoT3UoKSoodC1uKzEpKX1mdW5jdGlvbiBFdChuLHQscixlLHUpe3JldHVybiB1KG4sZnVuY3Rpb24obix1LG8pe3I9ZT8oZT1mYWxzZSxuKTp0KHIsbix1LG8pfSkscn1mdW5jdGlvbiBJdChuLHQscil7dmFyIGU9LTEsdT1uLmxlbmd0aDtmb3IodD1udWxsPT10PzA6K3R8fDAsMD50JiYodD0tdD51PzA6dSt0KSxyPXI9PT13fHxyPnU/dTorcnx8MCwwPnImJihyKz11KSx1PXQ+cj8wOnItdD4+PjAsdD4+Pj0wLFxucj1VZSh1KTsrK2U8dTspcltlXT1uW2UrdF07cmV0dXJuIHJ9ZnVuY3Rpb24gUnQobix0KXt2YXIgcjtyZXR1cm4genUobixmdW5jdGlvbihuLGUsdSl7cmV0dXJuIHI9dChuLGUsdSksIXJ9KSwhIXJ9ZnVuY3Rpb24gQ3Qobix0KXt2YXIgcj1uLmxlbmd0aDtmb3Iobi5zb3J0KHQpO3ItLTspbltyXT1uW3JdLmM7cmV0dXJuIG59ZnVuY3Rpb24gV3QodCxyLGUpe3ZhciB1PWRyKCksbz0tMTtyZXR1cm4gcj1KbihyLGZ1bmN0aW9uKG4pe3JldHVybiB1KG4pfSksdD1tdCh0LGZ1bmN0aW9uKG4pe3JldHVybnthOkpuKHIsZnVuY3Rpb24odCl7cmV0dXJuIHQobil9KSxiOisrbyxjOm59fSksQ3QodCxmdW5jdGlvbih0LHIpe3ZhciB1O246e3U9LTE7Zm9yKHZhciBvPXQuYSxpPXIuYSxmPW8ubGVuZ3RoLGE9ZS5sZW5ndGg7Kyt1PGY7KXt2YXIgYz1uKG9bdV0saVt1XSk7aWYoYyl7dT11PGE/YyooZVt1XT8xOi0xKTpjO2JyZWFrIG59fXU9dC5iLXIuYn1yZXR1cm4gdX0pfWZ1bmN0aW9uIFN0KG4sdCl7XG52YXIgcj0wO3JldHVybiB6dShuLGZ1bmN0aW9uKG4sZSx1KXtyKz0rdChuLGUsdSl8fDB9KSxyfWZ1bmN0aW9uIFR0KG4sdCl7dmFyIGU9LTEsdT1tcigpLG89bi5sZW5ndGgsaT11PT1yLGY9aSYmMjAwPD1vLGE9Zj9xdSgpOm51bGwsYz1bXTthPyh1PVBuLGk9ZmFsc2UpOihmPWZhbHNlLGE9dD9bXTpjKTtuOmZvcig7KytlPG87KXt2YXIgbD1uW2VdLHM9dD90KGwsZSxuKTpsO2lmKGkmJmw9PT1sKXtmb3IodmFyIHA9YS5sZW5ndGg7cC0tOylpZihhW3BdPT09cyljb250aW51ZSBuO3QmJmEucHVzaChzKSxjLnB1c2gobCl9ZWxzZSAwPnUoYSxzLDApJiYoKHR8fGYpJiZhLnB1c2gocyksYy5wdXNoKGwpKX1yZXR1cm4gY31mdW5jdGlvbiBVdChuLHQpe2Zvcih2YXIgcj0tMSxlPXQubGVuZ3RoLHU9VWUoZSk7KytyPGU7KXVbcl09blt0W3JdXTtyZXR1cm4gdX1mdW5jdGlvbiBOdChuLHQscixlKXtmb3IodmFyIHU9bi5sZW5ndGgsbz1lP3U6LTE7KGU/by0tOisrbzx1KSYmdChuW29dLG8sbik7KTtcbnJldHVybiByP0l0KG4sZT8wOm8sZT9vKzE6dSk6SXQobixlP28rMTowLGU/dTpvKX1mdW5jdGlvbiBGdChuLHQpe3ZhciByPW47ciBpbnN0YW5jZW9mIEJuJiYocj1yLnZhbHVlKCkpO2Zvcih2YXIgZT0tMSx1PXQubGVuZ3RoOysrZTx1Oyl7dmFyIHI9W3JdLG89dFtlXTtmdS5hcHBseShyLG8uYXJncykscj1vLmZ1bmMuYXBwbHkoby50aGlzQXJnLHIpfXJldHVybiByfWZ1bmN0aW9uICR0KG4sdCxyKXt2YXIgZT0wLHU9bj9uLmxlbmd0aDplO2lmKHR5cGVvZiB0PT1cIm51bWJlclwiJiZ0PT09dCYmdTw9V3Upe2Zvcig7ZTx1Oyl7dmFyIG89ZSt1Pj4+MSxpPW5bb107KHI/aTw9dDppPHQpP2U9bysxOnU9b31yZXR1cm4gdX1yZXR1cm4gTHQobix0LFJlLHIpfWZ1bmN0aW9uIEx0KG4sdCxyLGUpe3Q9cih0KTtmb3IodmFyIHU9MCxvPW4/bi5sZW5ndGg6MCxpPXQhPT10LGY9dD09PXc7dTxvOyl7dmFyIGE9dXUoKHUrbykvMiksYz1yKG5bYV0pLGw9Yz09PWM7KGk/bHx8ZTpmP2wmJihlfHxjIT09dyk6ZT9jPD10OmM8dCk/dT1hKzE6bz1hO1xuXG59cmV0dXJuIHh1KG8sQ3UpfWZ1bmN0aW9uIHp0KG4sdCxyKXtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXJldHVybiBSZTtpZih0PT09dylyZXR1cm4gbjtzd2l0Y2gocil7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gbi5jYWxsKHQscil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24ocixlLHUpe3JldHVybiBuLmNhbGwodCxyLGUsdSl9O2Nhc2UgNDpyZXR1cm4gZnVuY3Rpb24ocixlLHUsbyl7cmV0dXJuIG4uY2FsbCh0LHIsZSx1LG8pfTtjYXNlIDU6cmV0dXJuIGZ1bmN0aW9uKHIsZSx1LG8saSl7cmV0dXJuIG4uY2FsbCh0LHIsZSx1LG8saSl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBuLmFwcGx5KHQsYXJndW1lbnRzKX19ZnVuY3Rpb24gQnQobil7cmV0dXJuIHR1LmNhbGwobiwwKX1mdW5jdGlvbiBNdChuLHQscil7Zm9yKHZhciBlPXIubGVuZ3RoLHU9LTEsbz1idShuLmxlbmd0aC1lLDApLGk9LTEsZj10Lmxlbmd0aCxhPVVlKG8rZik7KytpPGY7KWFbaV09dFtpXTtcblxuZm9yKDsrK3U8ZTspYVtyW3VdXT1uW3VdO2Zvcig7by0tOylhW2krK109blt1KytdO3JldHVybiBhfWZ1bmN0aW9uIER0KG4sdCxyKXtmb3IodmFyIGU9LTEsdT1yLmxlbmd0aCxvPS0xLGk9YnUobi5sZW5ndGgtdSwwKSxmPS0xLGE9dC5sZW5ndGgsYz1VZShpK2EpOysrbzxpOyljW29dPW5bb107Zm9yKGk9bzsrK2Y8YTspY1tpK2ZdPXRbZl07Zm9yKDsrK2U8dTspY1tpK3JbZV1dPW5bbysrXTtyZXR1cm4gY31mdW5jdGlvbiBQdChuLHQpe3JldHVybiBmdW5jdGlvbihyLGUsdSl7dmFyIG89dD90KCk6e307aWYoZT1kcihlLHUsMyksVG8ocikpe3U9LTE7Zm9yKHZhciBpPXIubGVuZ3RoOysrdTxpOyl7dmFyIGY9clt1XTtuKG8sZixlKGYsdSxyKSxyKX19ZWxzZSB6dShyLGZ1bmN0aW9uKHQscix1KXtuKG8sdCxlKHQscix1KSx1KX0pO3JldHVybiBvfX1mdW5jdGlvbiBxdChuKXtyZXR1cm4gZmUoZnVuY3Rpb24odCxyKXt2YXIgZT0tMSx1PW51bGw9PXQ/MDpyLmxlbmd0aCxvPTI8dSYmclt1LTJdLGk9Mjx1JiZyWzJdLGY9MTx1JiZyW3UtMV07XG5cbmZvcih0eXBlb2Ygbz09XCJmdW5jdGlvblwiPyhvPXp0KG8sZiw1KSx1LT0yKToobz10eXBlb2YgZj09XCJmdW5jdGlvblwiP2Y6bnVsbCx1LT1vPzE6MCksaSYmT3IoclswXSxyWzFdLGkpJiYobz0zPnU/bnVsbDpvLHU9MSk7KytlPHU7KShpPXJbZV0pJiZuKHQsaSxvKTtyZXR1cm4gdH0pfWZ1bmN0aW9uIEt0KG4sdCl7cmV0dXJuIGZ1bmN0aW9uKHIsZSl7dmFyIHU9cj9ZdShyKTowO2lmKCFScih1KSlyZXR1cm4gbihyLGUpO2Zvcih2YXIgbz10P3U6LTEsaT1GcihyKTsodD9vLS06KytvPHUpJiZmYWxzZSE9PWUoaVtvXSxvLGkpOyk7cmV0dXJuIHJ9fWZ1bmN0aW9uIFZ0KG4pe3JldHVybiBmdW5jdGlvbih0LHIsZSl7dmFyIHU9RnIodCk7ZT1lKHQpO2Zvcih2YXIgbz1lLmxlbmd0aCxpPW4/bzotMTtuP2ktLTorK2k8bzspe3ZhciBmPWVbaV07aWYoZmFsc2U9PT1yKHVbZl0sZix1KSlicmVha31yZXR1cm4gdH19ZnVuY3Rpb24gWXQobix0KXtmdW5jdGlvbiByKCl7cmV0dXJuKHRoaXMmJnRoaXMhPT1ZbiYmdGhpcyBpbnN0YW5jZW9mIHI/ZTpuKS5hcHBseSh0LGFyZ3VtZW50cyk7XG5cbn12YXIgZT1HdChuKTtyZXR1cm4gcn1mdW5jdGlvbiBadChuKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIHI9LTE7dD1PZShiZSh0KSk7Zm9yKHZhciBlPXQubGVuZ3RoLHU9XCJcIjsrK3I8ZTspdT1uKHUsdFtyXSxyKTtyZXR1cm4gdX19ZnVuY3Rpb24gR3Qobil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9THUobi5wcm90b3R5cGUpLHI9bi5hcHBseSh0LGFyZ3VtZW50cyk7cmV0dXJuIHNlKHIpP3I6dH19ZnVuY3Rpb24gSnQobil7ZnVuY3Rpb24gdChyLGUsdSl7cmV0dXJuIHUmJk9yKHIsZSx1KSYmKGU9bnVsbCkscj1ocihyLG4sbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLGUpLHIucGxhY2Vob2xkZXI9dC5wbGFjZWhvbGRlcixyfXJldHVybiB0fWZ1bmN0aW9uIFh0KG4sdCl7cmV0dXJuIGZ1bmN0aW9uKHIsZSx1KXt1JiZPcihyLGUsdSkmJihlPW51bGwpO3ZhciBpPWRyKCksZj1udWxsPT1lO2lmKGk9PT11dCYmZnx8KGY9ZmFsc2UsZT1pKGUsdSwzKSksZil7aWYoZT1UbyhyKSxlfHwhdmUocikpcmV0dXJuIG4oZT9yOk5yKHIpKTtcblxuZT1vfXJldHVybiB5cihyLGUsdCl9fWZ1bmN0aW9uIEh0KG4scil7cmV0dXJuIGZ1bmN0aW9uKGUsdSxvKXtyZXR1cm4gdT1kcih1LG8sMyksVG8oZSk/KHU9dChlLHUsciksLTE8dT9lW3VdOncpOmx0KGUsdSxuKX19ZnVuY3Rpb24gUXQobil7cmV0dXJuIGZ1bmN0aW9uKHIsZSx1KXtyZXR1cm4gciYmci5sZW5ndGg/KGU9ZHIoZSx1LDMpLHQocixlLG4pKTotMX19ZnVuY3Rpb24gbnIobil7cmV0dXJuIGZ1bmN0aW9uKHQscixlKXtyZXR1cm4gcj1kcihyLGUsMyksbHQodCxyLG4sdHJ1ZSl9fWZ1bmN0aW9uIHRyKG4pe3JldHVybiBmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg7aWYoIXQpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXX07Zm9yKHZhciByLGU9bj90Oi0xLHU9MCxvPVVlKHQpO24/ZS0tOisrZTx0Oyl7dmFyIGk9b1t1KytdPWFyZ3VtZW50c1tlXTtpZih0eXBlb2YgaSE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBQZShMKTt2YXIgZj1yP1wiXCI6VnUoaSk7XG5cbnI9XCJ3cmFwcGVyXCI9PWY/bmV3IHpuKFtdKTpyfWZvcihlPXI/LTE6dDsrK2U8dDspaT1vW2VdLGY9VnUoaSkscj0odT1cIndyYXBwZXJcIj09Zj9LdShpKTpudWxsKSYmSXIodVswXSkmJnVbMV09PShSfGt8RXxDKSYmIXVbNF0ubGVuZ3RoJiYxPT11WzldP3JbVnUodVswXSldLmFwcGx5KHIsdVszXSk6MT09aS5sZW5ndGgmJklyKGkpP3JbZl0oKTpyLnRocnUoaSk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49YXJndW1lbnRzO2lmKHImJjE9PW4ubGVuZ3RoJiZUbyhuWzBdKSlyZXR1cm4gci5wbGFudChuWzBdKS52YWx1ZSgpO2Zvcih2YXIgZT0wLG49b1tlXS5hcHBseSh0aGlzLG4pOysrZTx0OyluPW9bZV0uY2FsbCh0aGlzLG4pO3JldHVybiBufX19ZnVuY3Rpb24gcnIobix0KXtyZXR1cm4gZnVuY3Rpb24ocixlLHUpe3JldHVybiB0eXBlb2YgZT09XCJmdW5jdGlvblwiJiZ1PT09dyYmVG8ocik/bihyLGUpOnQocix6dChlLHUsMykpfX1mdW5jdGlvbiBlcihuKXtyZXR1cm4gZnVuY3Rpb24odCxyLGUpe1xucmV0dXJuKHR5cGVvZiByIT1cImZ1bmN0aW9uXCJ8fGUhPT13KSYmKHI9enQocixlLDMpKSxuKHQscixtZSl9fWZ1bmN0aW9uIHVyKG4pe3JldHVybiBmdW5jdGlvbih0LHIsZSl7cmV0dXJuKHR5cGVvZiByIT1cImZ1bmN0aW9uXCJ8fGUhPT13KSYmKHI9enQocixlLDMpKSxuKHQscil9fWZ1bmN0aW9uIG9yKG4pe3JldHVybiBmdW5jdGlvbih0LHIsZSl7dmFyIHU9e307cmV0dXJuIHI9ZHIocixlLDMpLGh0KHQsZnVuY3Rpb24odCxlLG8pe289cih0LGUsbyksZT1uP286ZSx0PW4/dDpvLHVbZV09dH0pLHV9fWZ1bmN0aW9uIGlyKG4pe3JldHVybiBmdW5jdGlvbih0LHIsZSl7cmV0dXJuIHQ9dSh0KSwobj90OlwiXCIpK2xyKHQscixlKSsobj9cIlwiOnQpfX1mdW5jdGlvbiBmcihuKXt2YXIgdD1mZShmdW5jdGlvbihyLGUpe3ZhciB1PXYoZSx0LnBsYWNlaG9sZGVyKTtyZXR1cm4gaHIocixuLG51bGwsZSx1KX0pO3JldHVybiB0fWZ1bmN0aW9uIGFyKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKHIsZSx1LG8pe1xudmFyIGk9Mz5hcmd1bWVudHMubGVuZ3RoO3JldHVybiB0eXBlb2YgZT09XCJmdW5jdGlvblwiJiZvPT09dyYmVG8ocik/bihyLGUsdSxpKTpFdChyLGRyKGUsbyw0KSx1LGksdCl9fWZ1bmN0aW9uIGNyKG4sdCxyLGUsdSxvLGksZixhLGMpe2Z1bmN0aW9uIGwoKXtmb3IodmFyIGI9YXJndW1lbnRzLmxlbmd0aCxqPWIsaz1VZShiKTtqLS07KWtbal09YXJndW1lbnRzW2pdO2lmKGUmJihrPU10KGssZSx1KSksbyYmKGs9RHQoayxvLGkpKSxffHx5KXt2YXIgaj1sLnBsYWNlaG9sZGVyLE89dihrLGopLGI9Yi1PLmxlbmd0aDtpZihiPGMpe3ZhciBSPWY/cW4oZik6bnVsbCxiPWJ1KGMtYiwwKSxDPV8/TzpudWxsLE89Xz9udWxsOk8sVz1fP2s6bnVsbCxrPV8/bnVsbDprO3JldHVybiB0fD1fP0U6SSx0Jj1+KF8/STpFKSxnfHwodCY9fih4fEEpKSxrPVtuLHQscixXLEMsayxPLFIsYSxiXSxSPWNyLmFwcGx5KHcsayksSXIobikmJkd1KFIsayksUi5wbGFjZWhvbGRlcj1qLFJ9fWlmKGo9cD9yOnRoaXMsXG5oJiYobj1qW21dKSxmKWZvcihSPWsubGVuZ3RoLGI9eHUoZi5sZW5ndGgsUiksQz1xbihrKTtiLS07KU89ZltiXSxrW2JdPWtyKE8sUik/Q1tPXTp3O3JldHVybiBzJiZhPGsubGVuZ3RoJiYoay5sZW5ndGg9YSksKHRoaXMmJnRoaXMhPT1ZbiYmdGhpcyBpbnN0YW5jZW9mIGw/ZHx8R3Qobik6bikuYXBwbHkoaixrKX12YXIgcz10JlIscD10JngsaD10JkEsXz10JmssZz10JmoseT10Jk8sZD0haCYmR3QobiksbT1uO3JldHVybiBsfWZ1bmN0aW9uIGxyKG4sdCxyKXtyZXR1cm4gbj1uLmxlbmd0aCx0PSt0LG48dCYmbXUodCk/KHQtPW4scj1udWxsPT1yP1wiIFwiOnIrXCJcIixqZShyLHJ1KHQvci5sZW5ndGgpKS5zbGljZSgwLHQpKTpcIlwifWZ1bmN0aW9uIHNyKG4sdCxyLGUpe2Z1bmN0aW9uIHUoKXtmb3IodmFyIHQ9LTEsZj1hcmd1bWVudHMubGVuZ3RoLGE9LTEsYz1lLmxlbmd0aCxsPVVlKGYrYyk7KythPGM7KWxbYV09ZVthXTtmb3IoO2YtLTspbFthKytdPWFyZ3VtZW50c1srK3RdO3JldHVybih0aGlzJiZ0aGlzIT09WW4mJnRoaXMgaW5zdGFuY2VvZiB1P2k6bikuYXBwbHkobz9yOnRoaXMsbCk7XG5cbn12YXIgbz10JngsaT1HdChuKTtyZXR1cm4gdX1mdW5jdGlvbiBwcihuKXtyZXR1cm4gZnVuY3Rpb24odCxyLGUsdSl7dmFyIG89ZHIoZSk7cmV0dXJuIG89PT11dCYmbnVsbD09ZT8kdCh0LHIsbik6THQodCxyLG8oZSx1LDEpLG4pfX1mdW5jdGlvbiBocihuLHQscixlLHUsbyxpLGYpe3ZhciBhPXQmQTtpZighYSYmdHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgUGUoTCk7dmFyIGM9ZT9lLmxlbmd0aDowO2lmKGN8fCh0Jj1+KEV8SSksZT11PW51bGwpLGMtPXU/dS5sZW5ndGg6MCx0Jkkpe3ZhciBsPWUscz11O2U9dT1udWxsfXZhciBwPWE/bnVsbDpLdShuKTtyZXR1cm4gcj1bbix0LHIsZSx1LGwscyxvLGksZl0scCYmKGU9clsxXSx0PXBbMV0sZj1lfHQsdT10PT1SJiZlPT1rfHx0PT1SJiZlPT1DJiZyWzddLmxlbmd0aDw9cFs4XXx8dD09KFJ8QykmJmU9PWssKGY8Unx8dSkmJih0JngmJihyWzJdPXBbMl0sZnw9ZSZ4PzA6aiksKGU9cFszXSkmJih1PXJbM10sclszXT11P010KHUsZSxwWzRdKTpxbihlKSxcbnJbNF09dT92KHJbM10seik6cW4ocFs0XSkpLChlPXBbNV0pJiYodT1yWzVdLHJbNV09dT9EdCh1LGUscFs2XSk6cW4oZSkscls2XT11P3Yocls1XSx6KTpxbihwWzZdKSksKGU9cFs3XSkmJihyWzddPXFuKGUpKSx0JlImJihyWzhdPW51bGw9PXJbOF0/cFs4XTp4dShyWzhdLHBbOF0pKSxudWxsPT1yWzldJiYocls5XT1wWzldKSxyWzBdPXBbMF0sclsxXT1mKSx0PXJbMV0sZj1yWzldKSxyWzldPW51bGw9PWY/YT8wOm4ubGVuZ3RoOmJ1KGYtYywwKXx8MCwocD9QdTpHdSkodD09eD9ZdChyWzBdLHJbMl0pOnQhPUUmJnQhPSh4fEUpfHxyWzRdLmxlbmd0aD9jci5hcHBseSh3LHIpOnNyLmFwcGx5KHcscikscil9ZnVuY3Rpb24gX3Iobix0LHIsZSx1LG8saSl7dmFyIGY9LTEsYT1uLmxlbmd0aCxjPXQubGVuZ3RoLGw9dHJ1ZTtpZihhIT1jJiYoIXV8fGM8PWEpKXJldHVybiBmYWxzZTtmb3IoO2wmJisrZjxhOyl7dmFyIHM9bltmXSxwPXRbZl0sbD13O2lmKGUmJihsPXU/ZShwLHMsZik6ZShzLHAsZikpLFxubD09PXcpaWYodSlmb3IodmFyIGg9YztoLS0mJihwPXRbaF0sIShsPXMmJnM9PT1wfHxyKHMscCxlLHUsbyxpKSkpOyk7ZWxzZSBsPXMmJnM9PT1wfHxyKHMscCxlLHUsbyxpKX1yZXR1cm4hIWx9ZnVuY3Rpb24gdnIobix0LHIpe3N3aXRjaChyKXtjYXNlIEQ6Y2FzZSBQOnJldHVybituPT0rdDtjYXNlIHE6cmV0dXJuIG4ubmFtZT09dC5uYW1lJiZuLm1lc3NhZ2U9PXQubWVzc2FnZTtjYXNlIFY6cmV0dXJuIG4hPStuP3QhPSt0Om49PSt0O2Nhc2UgWjpjYXNlIEc6cmV0dXJuIG49PXQrXCJcIn1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gZ3Iobix0LHIsZSx1LG8saSl7dmFyIGY9S28obiksYT1mLmxlbmd0aCxjPUtvKHQpLmxlbmd0aDtpZihhIT1jJiYhdSlyZXR1cm4gZmFsc2U7Zm9yKHZhciBjPXUsbD0tMTsrK2w8YTspe3ZhciBzPWZbbF0scD11P3MgaW4gdDpHZS5jYWxsKHQscyk7aWYocCl7dmFyIGg9bltzXSxfPXRbc10scD13O2UmJihwPXU/ZShfLGgscyk6ZShoLF8scykpLHA9PT13JiYocD1oJiZoPT09X3x8cihoLF8sZSx1LG8saSkpO1xuXG59aWYoIXApcmV0dXJuIGZhbHNlO2N8fChjPVwiY29uc3RydWN0b3JcIj09cyl9cmV0dXJuIGN8fChyPW4uY29uc3RydWN0b3IsZT10LmNvbnN0cnVjdG9yLCEociE9ZSYmXCJjb25zdHJ1Y3RvclwiaW4gbiYmXCJjb25zdHJ1Y3RvclwiaW4gdCl8fHR5cGVvZiByPT1cImZ1bmN0aW9uXCImJnIgaW5zdGFuY2VvZiByJiZ0eXBlb2YgZT09XCJmdW5jdGlvblwiJiZlIGluc3RhbmNlb2YgZSk/dHJ1ZTpmYWxzZX1mdW5jdGlvbiB5cihuLHQscil7dmFyIGU9cj9JdTpFdSx1PWUsbz11O3JldHVybiB6dShuLGZ1bmN0aW9uKG4saSxmKXtpPXQobixpLGYpLCgocj9pPHU6aT51KXx8aT09PWUmJmk9PT1vKSYmKHU9aSxvPW4pfSksb31mdW5jdGlvbiBkcihuLHQscil7dmFyIGU9JG4uY2FsbGJhY2t8fEVlLGU9ZT09PUVlP3V0OmU7cmV0dXJuIHI/ZShuLHQscik6ZX1mdW5jdGlvbiBtcihuLHQsZSl7dmFyIHU9JG4uaW5kZXhPZnx8RHIsdT11PT09RHI/cjp1O3JldHVybiBuP3Uobix0LGUpOnV9ZnVuY3Rpb24gd3Iobil7dmFyIHQ9bi5sZW5ndGgscj1uZXcgbi5jb25zdHJ1Y3Rvcih0KTtcblxucmV0dXJuIHQmJlwic3RyaW5nXCI9PXR5cGVvZiBuWzBdJiZHZS5jYWxsKG4sXCJpbmRleFwiKSYmKHIuaW5kZXg9bi5pbmRleCxyLmlucHV0PW4uaW5wdXQpLHJ9ZnVuY3Rpb24gYnIobil7cmV0dXJuIG49bi5jb25zdHJ1Y3Rvcix0eXBlb2Ygbj09XCJmdW5jdGlvblwiJiZuIGluc3RhbmNlb2Ygbnx8KG49QmUpLG5ldyBufWZ1bmN0aW9uIHhyKG4sdCxyKXt2YXIgZT1uLmNvbnN0cnVjdG9yO3N3aXRjaCh0KXtjYXNlIEo6cmV0dXJuIEJ0KG4pO2Nhc2UgRDpjYXNlIFA6cmV0dXJuIG5ldyBlKCtuKTtjYXNlIFg6Y2FzZSBIOmNhc2UgUTpjYXNlIG5uOmNhc2UgdG46Y2FzZSBybjpjYXNlIGVuOmNhc2UgdW46Y2FzZSBvbjpyZXR1cm4gdD1uLmJ1ZmZlcixuZXcgZShyP0J0KHQpOnQsbi5ieXRlT2Zmc2V0LG4ubGVuZ3RoKTtjYXNlIFY6Y2FzZSBHOnJldHVybiBuZXcgZShuKTtjYXNlIFo6dmFyIHU9bmV3IGUobi5zb3VyY2Usa24uZXhlYyhuKSk7dS5sYXN0SW5kZXg9bi5sYXN0SW5kZXh9cmV0dXJuIHU7XG5cbn1mdW5jdGlvbiBBcihuLHQscil7cmV0dXJuIG51bGw9PW58fEVyKHQsbil8fCh0PSRyKHQpLG49MT09dC5sZW5ndGg/bjpndChuLEl0KHQsMCwtMSkpLHQ9UHIodCkpLHQ9bnVsbD09bj9uOm5bdF0sbnVsbD09dD93OnQuYXBwbHkobixyKX1mdW5jdGlvbiBqcihuKXtyZXR1cm4gbnVsbCE9biYmUnIoWXUobikpfWZ1bmN0aW9uIGtyKG4sdCl7cmV0dXJuIG49K24sdD1udWxsPT10P1R1OnQsLTE8biYmMD09biUxJiZuPHR9ZnVuY3Rpb24gT3Iobix0LHIpe2lmKCFzZShyKSlyZXR1cm4gZmFsc2U7dmFyIGU9dHlwZW9mIHQ7cmV0dXJuKFwibnVtYmVyXCI9PWU/anIocikmJmtyKHQsci5sZW5ndGgpOlwic3RyaW5nXCI9PWUmJnQgaW4gcik/KHQ9clt0XSxuPT09bj9uPT09dDp0IT09dCk6ZmFsc2V9ZnVuY3Rpb24gRXIobix0KXt2YXIgcj10eXBlb2YgbjtyZXR1cm5cInN0cmluZ1wiPT1yJiZkbi50ZXN0KG4pfHxcIm51bWJlclwiPT1yP3RydWU6VG8obik/ZmFsc2U6IXluLnRlc3Qobil8fG51bGwhPXQmJm4gaW4gRnIodCk7XG5cbn1mdW5jdGlvbiBJcihuKXt2YXIgdD1WdShuKTtyZXR1cm4hIXQmJm49PT0kblt0XSYmdCBpbiBCbi5wcm90b3R5cGV9ZnVuY3Rpb24gUnIobil7cmV0dXJuIHR5cGVvZiBuPT1cIm51bWJlclwiJiYtMTxuJiYwPT1uJTEmJm48PVR1fWZ1bmN0aW9uIENyKG4pe3JldHVybiBuPT09biYmIXNlKG4pfWZ1bmN0aW9uIFdyKG4sdCl7bj1GcihuKTtmb3IodmFyIHI9LTEsZT10Lmxlbmd0aCx1PXt9OysrcjxlOyl7dmFyIG89dFtyXTtvIGluIG4mJih1W29dPW5bb10pfXJldHVybiB1fWZ1bmN0aW9uIFNyKG4sdCl7dmFyIHI9e307cmV0dXJuIHB0KG4sZnVuY3Rpb24obixlLHUpe3QobixlLHUpJiYocltlXT1uKX0pLHJ9ZnVuY3Rpb24gVHIobil7dmFyIHQ7aWYoIWgobil8fFhlLmNhbGwobikhPVl8fCEoR2UuY2FsbChuLFwiY29uc3RydWN0b3JcIil8fCh0PW4uY29uc3RydWN0b3IsdHlwZW9mIHQhPVwiZnVuY3Rpb25cInx8dCBpbnN0YW5jZW9mIHQpKSlyZXR1cm4gZmFsc2U7dmFyIHI7cmV0dXJuIHB0KG4sZnVuY3Rpb24obix0KXtcbnI9dH0pLHI9PT13fHxHZS5jYWxsKG4scil9ZnVuY3Rpb24gVXIobil7Zm9yKHZhciB0PW1lKG4pLHI9dC5sZW5ndGgsZT1yJiZuLmxlbmd0aCx1PSRuLnN1cHBvcnQsdT1lJiZScihlKSYmKFRvKG4pfHx1Lm5vbkVudW1BcmdzJiZhZShuKSksbz0tMSxpPVtdOysrbzxyOyl7dmFyIGY9dFtvXTsodSYma3IoZixlKXx8R2UuY2FsbChuLGYpKSYmaS5wdXNoKGYpfXJldHVybiBpfWZ1bmN0aW9uIE5yKG4pe3JldHVybiBudWxsPT1uP1tdOmpyKG4pP3NlKG4pP246QmUobik6d2Uobil9ZnVuY3Rpb24gRnIobil7cmV0dXJuIHNlKG4pP246QmUobil9ZnVuY3Rpb24gJHIobil7aWYoVG8obikpcmV0dXJuIG47dmFyIHQ9W107cmV0dXJuIHUobikucmVwbGFjZShtbixmdW5jdGlvbihuLHIsZSx1KXt0LnB1c2goZT91LnJlcGxhY2UoQW4sXCIkMVwiKTpyfHxuKX0pLHR9ZnVuY3Rpb24gTHIobil7cmV0dXJuIG4gaW5zdGFuY2VvZiBCbj9uLmNsb25lKCk6bmV3IHpuKG4uX193cmFwcGVkX18sbi5fX2NoYWluX18scW4obi5fX2FjdGlvbnNfXykpO1xuXG59ZnVuY3Rpb24genIobix0LHIpe3JldHVybiBuJiZuLmxlbmd0aD8oKHI/T3Iobix0LHIpOm51bGw9PXQpJiYodD0xKSxJdChuLDA+dD8wOnQpKTpbXX1mdW5jdGlvbiBCcihuLHQscil7dmFyIGU9bj9uLmxlbmd0aDowO3JldHVybiBlPygocj9PcihuLHQscik6bnVsbD09dCkmJih0PTEpLHQ9ZS0oK3R8fDApLEl0KG4sMCwwPnQ/MDp0KSk6W119ZnVuY3Rpb24gTXIobil7cmV0dXJuIG4/blswXTp3fWZ1bmN0aW9uIERyKG4sdCxlKXt2YXIgdT1uP24ubGVuZ3RoOjA7aWYoIXUpcmV0dXJuLTE7aWYodHlwZW9mIGU9PVwibnVtYmVyXCIpZT0wPmU/YnUodStlLDApOmU7ZWxzZSBpZihlKXJldHVybiBlPSR0KG4sdCksbj1uW2VdLCh0PT09dD90PT09bjpuIT09bik/ZTotMTtyZXR1cm4gcihuLHQsZXx8MCl9ZnVuY3Rpb24gUHIobil7dmFyIHQ9bj9uLmxlbmd0aDowO3JldHVybiB0P25bdC0xXTp3fWZ1bmN0aW9uIHFyKG4pe3JldHVybiB6cihuLDEpfWZ1bmN0aW9uIEtyKG4sdCxlLHUpe1xuaWYoIW58fCFuLmxlbmd0aClyZXR1cm5bXTtudWxsIT10JiZ0eXBlb2YgdCE9XCJib29sZWFuXCImJih1PWUsZT1PcihuLHQsdSk/bnVsbDp0LHQ9ZmFsc2UpO3ZhciBvPWRyKCk7aWYoKG8hPT11dHx8bnVsbCE9ZSkmJihlPW8oZSx1LDMpKSx0JiZtcigpPT1yKXt0PWU7dmFyIGk7ZT0tMSx1PW4ubGVuZ3RoO2Zvcih2YXIgbz0tMSxmPVtdOysrZTx1Oyl7dmFyIGE9bltlXSxjPXQ/dChhLGUsbik6YTtlJiZpPT09Y3x8KGk9YyxmWysrb109YSl9bj1mfWVsc2Ugbj1UdChuLGUpO3JldHVybiBufWZ1bmN0aW9uIFZyKG4pe2lmKCFufHwhbi5sZW5ndGgpcmV0dXJuW107dmFyIHQ9LTEscj0wO249R24obixmdW5jdGlvbihuKXtyZXR1cm4ganIobik/KHI9YnUobi5sZW5ndGgsciksdHJ1ZSk6dm9pZCAwfSk7Zm9yKHZhciBlPVVlKHIpOysrdDxyOyllW3RdPUpuKG4sQXQodCkpO3JldHVybiBlfWZ1bmN0aW9uIFlyKG4sdCxyKXtyZXR1cm4gbiYmbi5sZW5ndGg/KG49VnIobiksbnVsbD09dD9uOih0PXp0KHQsciw0KSxcbkpuKG4sZnVuY3Rpb24obil7cmV0dXJuIFhuKG4sdCx3LHRydWUpfSkpKTpbXX1mdW5jdGlvbiBacihuLHQpe3ZhciByPS0xLGU9bj9uLmxlbmd0aDowLHU9e307Zm9yKCFlfHx0fHxUbyhuWzBdKXx8KHQ9W10pOysrcjxlOyl7dmFyIG89bltyXTt0P3Vbb109dFtyXTpvJiYodVtvWzBdXT1vWzFdKX1yZXR1cm4gdX1mdW5jdGlvbiBHcihuKXtyZXR1cm4gbj0kbihuKSxuLl9fY2hhaW5fXz10cnVlLG59ZnVuY3Rpb24gSnIobix0LHIpe3JldHVybiB0LmNhbGwocixuKX1mdW5jdGlvbiBYcihuLHQscil7dmFyIGU9VG8obik/Vm46YXQ7cmV0dXJuIHImJk9yKG4sdCxyKSYmKHQ9bnVsbCksKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCJ8fHIhPT13KSYmKHQ9ZHIodCxyLDMpKSxlKG4sdCl9ZnVuY3Rpb24gSHIobix0LHIpe3ZhciBlPVRvKG4pP0duOmN0O3JldHVybiB0PWRyKHQsciwzKSxlKG4sdCl9ZnVuY3Rpb24gUXIobix0LHIsZSl7dmFyIHU9bj9ZdShuKTowO3JldHVybiBScih1KXx8KG49d2UobiksXG51PW4ubGVuZ3RoKSx1PyhyPXR5cGVvZiByIT1cIm51bWJlclwifHxlJiZPcih0LHIsZSk/MDowPnI/YnUodStyLDApOnJ8fDAsdHlwZW9mIG49PVwic3RyaW5nXCJ8fCFUbyhuKSYmdmUobik/cjx1JiYtMTxuLmluZGV4T2YodCxyKTotMTxtcihuLHQscikpOmZhbHNlfWZ1bmN0aW9uIG5lKG4sdCxyKXt2YXIgZT1UbyhuKT9KbjptdDtyZXR1cm4gdD1kcih0LHIsMyksZShuLHQpfWZ1bmN0aW9uIHRlKG4sdCxyKXtyZXR1cm4ocj9PcihuLHQscik6bnVsbD09dCk/KG49TnIobiksdD1uLmxlbmd0aCwwPHQ/bltPdCgwLHQtMSldOncpOihuPXJlKG4pLG4ubGVuZ3RoPXh1KDA+dD8wOit0fHwwLG4ubGVuZ3RoKSxuKX1mdW5jdGlvbiByZShuKXtuPU5yKG4pO2Zvcih2YXIgdD0tMSxyPW4ubGVuZ3RoLGU9VWUocik7Kyt0PHI7KXt2YXIgdT1PdCgwLHQpO3QhPXUmJihlW3RdPWVbdV0pLGVbdV09blt0XX1yZXR1cm4gZX1mdW5jdGlvbiBlZShuLHQscil7dmFyIGU9VG8obik/SG46UnQ7cmV0dXJuIHImJk9yKG4sdCxyKSYmKHQ9bnVsbCksXG4odHlwZW9mIHQhPVwiZnVuY3Rpb25cInx8ciE9PXcpJiYodD1kcih0LHIsMykpLGUobix0KX1mdW5jdGlvbiB1ZShuLHQpe3ZhciByO2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpe2lmKHR5cGVvZiBuIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFBlKEwpO3ZhciBlPW47bj10LHQ9ZX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gMDwtLW4mJihyPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpKSwxPj1uJiYodD1udWxsKSxyfX1mdW5jdGlvbiBvZShuLHQscil7ZnVuY3Rpb24gZSgpe3ZhciByPXQtKHdvKCktYyk7MD49cnx8cj50PyhmJiZldShmKSxyPXAsZj1zPXA9dyxyJiYoaD13bygpLGE9bi5hcHBseShsLGkpLHN8fGZ8fChpPWw9bnVsbCkpKTpzPXN1KGUscil9ZnVuY3Rpb24gdSgpe3MmJmV1KHMpLGY9cz1wPXcsKHZ8fF8hPT10KSYmKGg9d28oKSxhPW4uYXBwbHkobCxpKSxzfHxmfHwoaT1sPW51bGwpKX1mdW5jdGlvbiBvKCl7aWYoaT1hcmd1bWVudHMsYz13bygpLGw9dGhpcyxwPXYmJihzfHwhZyksXG4hMT09PV8pdmFyIHI9ZyYmIXM7ZWxzZXtmfHxnfHwoaD1jKTt2YXIgbz1fLShjLWgpLHk9MD49b3x8bz5fO3k/KGYmJihmPWV1KGYpKSxoPWMsYT1uLmFwcGx5KGwsaSkpOmZ8fChmPXN1KHUsbykpfXJldHVybiB5JiZzP3M9ZXUocyk6c3x8dD09PV98fChzPXN1KGUsdCkpLHImJih5PXRydWUsYT1uLmFwcGx5KGwsaSkpLCF5fHxzfHxmfHwoaT1sPW51bGwpLGF9dmFyIGksZixhLGMsbCxzLHAsaD0wLF89ZmFsc2Usdj10cnVlO2lmKHR5cGVvZiBuIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFBlKEwpO2lmKHQ9MD50PzA6K3R8fDAsdHJ1ZT09PXIpdmFyIGc9dHJ1ZSx2PWZhbHNlO2Vsc2Ugc2UocikmJihnPXIubGVhZGluZyxfPVwibWF4V2FpdFwiaW4gciYmYnUoK3IubWF4V2FpdHx8MCx0KSx2PVwidHJhaWxpbmdcImluIHI/ci50cmFpbGluZzp2KTtyZXR1cm4gby5jYW5jZWw9ZnVuY3Rpb24oKXtzJiZldShzKSxmJiZldShmKSxmPXM9cD13fSxvfWZ1bmN0aW9uIGllKG4sdCl7ZnVuY3Rpb24gcigpe3ZhciBlPWFyZ3VtZW50cyx1PXIuY2FjaGUsbz10P3QuYXBwbHkodGhpcyxlKTplWzBdO1xuXG5yZXR1cm4gdS5oYXMobyk/dS5nZXQobyk6KGU9bi5hcHBseSh0aGlzLGUpLHUuc2V0KG8sZSksZSl9aWYodHlwZW9mIG4hPVwiZnVuY3Rpb25cInx8dCYmdHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgUGUoTCk7cmV0dXJuIHIuY2FjaGU9bmV3IGllLkNhY2hlLHJ9ZnVuY3Rpb24gZmUobix0KXtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBQZShMKTtyZXR1cm4gdD1idSh0PT09dz9uLmxlbmd0aC0xOit0fHwwLDApLGZ1bmN0aW9uKCl7Zm9yKHZhciByPWFyZ3VtZW50cyxlPS0xLHU9YnUoci5sZW5ndGgtdCwwKSxvPVVlKHUpOysrZTx1OylvW2VdPXJbdCtlXTtzd2l0Y2godCl7Y2FzZSAwOnJldHVybiBuLmNhbGwodGhpcyxvKTtjYXNlIDE6cmV0dXJuIG4uY2FsbCh0aGlzLHJbMF0sbyk7Y2FzZSAyOnJldHVybiBuLmNhbGwodGhpcyxyWzBdLHJbMV0sbyl9Zm9yKHU9VWUodCsxKSxlPS0xOysrZTx0Oyl1W2VdPXJbZV07cmV0dXJuIHVbdF09byxuLmFwcGx5KHRoaXMsdSk7XG5cbn19ZnVuY3Rpb24gYWUobil7cmV0dXJuIGgobikmJmpyKG4pJiZYZS5jYWxsKG4pPT1CfWZ1bmN0aW9uIGNlKG4pe3JldHVybiEhbiYmMT09PW4ubm9kZVR5cGUmJmgobikmJi0xPFhlLmNhbGwobikuaW5kZXhPZihcIkVsZW1lbnRcIil9ZnVuY3Rpb24gbGUobil7cmV0dXJuIGgobikmJnR5cGVvZiBuLm1lc3NhZ2U9PVwic3RyaW5nXCImJlhlLmNhbGwobik9PXF9ZnVuY3Rpb24gc2Uobil7dmFyIHQ9dHlwZW9mIG47cmV0dXJuXCJmdW5jdGlvblwiPT10fHwhIW4mJlwib2JqZWN0XCI9PXR9ZnVuY3Rpb24gcGUobil7cmV0dXJuIG51bGw9PW4/ZmFsc2U6WGUuY2FsbChuKT09Sz9RZS50ZXN0KFplLmNhbGwobikpOmgobikmJkVuLnRlc3Qobil9ZnVuY3Rpb24gaGUobil7cmV0dXJuIHR5cGVvZiBuPT1cIm51bWJlclwifHxoKG4pJiZYZS5jYWxsKG4pPT1WfWZ1bmN0aW9uIF9lKG4pe3JldHVybiBoKG4pJiZYZS5jYWxsKG4pPT1afWZ1bmN0aW9uIHZlKG4pe3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcInx8aChuKSYmWGUuY2FsbChuKT09RztcblxufWZ1bmN0aW9uIGdlKG4pe3JldHVybiBoKG4pJiZScihuLmxlbmd0aCkmJiEhVW5bWGUuY2FsbChuKV19ZnVuY3Rpb24geWUobil7cmV0dXJuIGV0KG4sbWUobikpfWZ1bmN0aW9uIGRlKG4pe3JldHVybiB2dChuLG1lKG4pKX1mdW5jdGlvbiBtZShuKXtpZihudWxsPT1uKXJldHVybltdO3NlKG4pfHwobj1CZShuKSk7Zm9yKHZhciB0PW4ubGVuZ3RoLHQ9dCYmUnIodCkmJihUbyhuKXx8RnUubm9uRW51bUFyZ3MmJmFlKG4pKSYmdHx8MCxyPW4uY29uc3RydWN0b3IsZT0tMSxyPXR5cGVvZiByPT1cImZ1bmN0aW9uXCImJnIucHJvdG90eXBlPT09bix1PVVlKHQpLG89MDx0OysrZTx0Oyl1W2VdPWUrXCJcIjtmb3IodmFyIGkgaW4gbilvJiZrcihpLHQpfHxcImNvbnN0cnVjdG9yXCI9PWkmJihyfHwhR2UuY2FsbChuLGkpKXx8dS5wdXNoKGkpO3JldHVybiB1fWZ1bmN0aW9uIHdlKG4pe3JldHVybiBVdChuLEtvKG4pKX1mdW5jdGlvbiBiZShuKXtyZXR1cm4obj11KG4pKSYmbi5yZXBsYWNlKEluLGMpLnJlcGxhY2UoeG4sXCJcIik7XG5cbn1mdW5jdGlvbiB4ZShuKXtyZXR1cm4obj11KG4pKSYmYm4udGVzdChuKT9uLnJlcGxhY2Uod24sXCJcXFxcJCZcIik6bn1mdW5jdGlvbiBBZShuLHQscil7cmV0dXJuIHImJk9yKG4sdCxyKSYmKHQ9MCksa3Uobix0KX1mdW5jdGlvbiBqZShuLHQpe3ZhciByPVwiXCI7aWYobj11KG4pLHQ9K3QsMT50fHwhbnx8IW11KHQpKXJldHVybiByO2RvIHQlMiYmKHIrPW4pLHQ9dXUodC8yKSxuKz1uO3doaWxlKHQpO3JldHVybiByfWZ1bmN0aW9uIGtlKG4sdCxyKXt2YXIgZT1uO3JldHVybihuPXUobikpPyhyP09yKGUsdCxyKTpudWxsPT10KT9uLnNsaWNlKGcobikseShuKSsxKToodCs9XCJcIixuLnNsaWNlKGkobix0KSxmKG4sdCkrMSkpOm59ZnVuY3Rpb24gT2Uobix0LHIpe3JldHVybiByJiZPcihuLHQscikmJih0PW51bGwpLG49dShuKSxuLm1hdGNoKHR8fFduKXx8W119ZnVuY3Rpb24gRWUobix0LHIpe3JldHVybiByJiZPcihuLHQscikmJih0PW51bGwpLGgobik/Q2Uobik6dXQobix0KX1mdW5jdGlvbiBJZShuKXtcbnJldHVybiBmdW5jdGlvbigpe3JldHVybiBufX1mdW5jdGlvbiBSZShuKXtyZXR1cm4gbn1mdW5jdGlvbiBDZShuKXtyZXR1cm4gd3Qob3Qobix0cnVlKSl9ZnVuY3Rpb24gV2Uobix0LHIpe2lmKG51bGw9PXIpe3ZhciBlPXNlKHQpLHU9ZSYmS28odCk7KCh1PXUmJnUubGVuZ3RoJiZ2dCh0LHUpKT91Lmxlbmd0aDplKXx8KHU9ZmFsc2Uscj10LHQ9bixuPXRoaXMpfXV8fCh1PXZ0KHQsS28odCkpKTt2YXIgbz10cnVlLGU9LTEsaT1ObyhuKSxmPXUubGVuZ3RoO2ZhbHNlPT09cj9vPWZhbHNlOnNlKHIpJiZcImNoYWluXCJpbiByJiYobz1yLmNoYWluKTtmb3IoOysrZTxmOyl7cj11W2VdO3ZhciBhPXRbcl07bltyXT1hLGkmJihuLnByb3RvdHlwZVtyXT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgcj10aGlzLl9fY2hhaW5fXztpZihvfHxyKXt2YXIgZT1uKHRoaXMuX193cmFwcGVkX18pO3JldHVybihlLl9fYWN0aW9uc19fPXFuKHRoaXMuX19hY3Rpb25zX18pKS5wdXNoKHtmdW5jOnQsYXJnczphcmd1bWVudHMsXG50aGlzQXJnOm59KSxlLl9fY2hhaW5fXz1yLGV9cmV0dXJuIHI9W3RoaXMudmFsdWUoKV0sZnUuYXBwbHkocixhcmd1bWVudHMpLHQuYXBwbHkobixyKX19KGEpKX1yZXR1cm4gbn1mdW5jdGlvbiBTZSgpe31mdW5jdGlvbiBUZShuKXtyZXR1cm4gRXIobik/QXQobik6anQobil9Xz1fP1puLmRlZmF1bHRzKFluLk9iamVjdCgpLF8sWm4ucGljayhZbixUbikpOlluO3ZhciBVZT1fLkFycmF5LE5lPV8uRGF0ZSxGZT1fLkVycm9yLCRlPV8uRnVuY3Rpb24sTGU9Xy5NYXRoLHplPV8uTnVtYmVyLEJlPV8uT2JqZWN0LE1lPV8uUmVnRXhwLERlPV8uU3RyaW5nLFBlPV8uVHlwZUVycm9yLHFlPVVlLnByb3RvdHlwZSxLZT1CZS5wcm90b3R5cGUsVmU9RGUucHJvdG90eXBlLFllPShZZT1fLndpbmRvdykmJlllLmRvY3VtZW50LFplPSRlLnByb3RvdHlwZS50b1N0cmluZyxHZT1LZS5oYXNPd25Qcm9wZXJ0eSxKZT0wLFhlPUtlLnRvU3RyaW5nLEhlPV8uXyxRZT1NZShcIl5cIit4ZShYZSkucmVwbGFjZSgvdG9TdHJpbmd8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZyxcIiQxLio/XCIpK1wiJFwiKSxudT1wZShudT1fLkFycmF5QnVmZmVyKSYmbnUsdHU9cGUodHU9bnUmJm5ldyBudSgwKS5zbGljZSkmJnR1LHJ1PUxlLmNlaWwsZXU9Xy5jbGVhclRpbWVvdXQsdXU9TGUuZmxvb3Isb3U9cGUob3U9QmUuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSYmb3UsaXU9cGUoaXU9QmUuZ2V0UHJvdG90eXBlT2YpJiZpdSxmdT1xZS5wdXNoLGF1PXBlKGF1PUJlLnByZXZlbnRFeHRlbnNpb25zKSYmYXUsY3U9S2UucHJvcGVydHlJc0VudW1lcmFibGUsbHU9cGUobHU9Xy5TZXQpJiZsdSxzdT1fLnNldFRpbWVvdXQscHU9cWUuc3BsaWNlLGh1PXBlKGh1PV8uVWludDhBcnJheSkmJmh1LF91PXBlKF91PV8uV2Vha01hcCkmJl91LHZ1PWZ1bmN0aW9uKCl7XG50cnl7dmFyIG49cGUobj1fLkZsb2F0NjRBcnJheSkmJm4sdD1uZXcgbihuZXcgbnUoMTApLDAsMSkmJm59Y2F0Y2gocil7fXJldHVybiB0fSgpLGd1PWZ1bmN0aW9uKCl7dmFyIG49YXUmJnBlKG49QmUuYXNzaWduKSYmbjt0cnl7aWYobil7dmFyIHQ9YXUoezE6MH0pO3RbMF09MX19Y2F0Y2gocil7dHJ5e24odCxcInhvXCIpfWNhdGNoKGUpe31yZXR1cm4hdFsxXSYmbn1yZXR1cm4gZmFsc2V9KCkseXU9cGUoeXU9VWUuaXNBcnJheSkmJnl1LGR1PXBlKGR1PUJlLmNyZWF0ZSkmJmR1LG11PV8uaXNGaW5pdGUsd3U9cGUod3U9QmUua2V5cykmJnd1LGJ1PUxlLm1heCx4dT1MZS5taW4sQXU9cGUoQXU9TmUubm93KSYmQXUsanU9cGUoanU9emUuaXNGaW5pdGUpJiZqdSxrdT1fLnBhcnNlSW50LE91PUxlLnJhbmRvbSxFdT16ZS5ORUdBVElWRV9JTkZJTklUWSxJdT16ZS5QT1NJVElWRV9JTkZJTklUWSxSdT1MZS5wb3coMiwzMiktMSxDdT1SdS0xLFd1PVJ1Pj4+MSxTdT12dT92dS5CWVRFU19QRVJfRUxFTUVOVDowLFR1PUxlLnBvdygyLDUzKS0xLFV1PV91JiZuZXcgX3UsTnU9e30sRnU9JG4uc3VwcG9ydD17fTtcblxuIWZ1bmN0aW9uKG4pe2Z1bmN0aW9uIHQoKXt0aGlzLng9bn12YXIgcj1hcmd1bWVudHMsZT1bXTt0LnByb3RvdHlwZT17dmFsdWVPZjpuLHk6bn07Zm9yKHZhciB1IGluIG5ldyB0KWUucHVzaCh1KTtGdS5mdW5jRGVjb21wPS9cXGJ0aGlzXFxiLy50ZXN0KGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxGdS5mdW5jTmFtZXM9dHlwZW9mICRlLm5hbWU9PVwic3RyaW5nXCI7dHJ5e0Z1LmRvbT0xMT09PVllLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5ub2RlVHlwZX1jYXRjaChvKXtGdS5kb209ZmFsc2V9dHJ5e0Z1Lm5vbkVudW1BcmdzPSFjdS5jYWxsKHIsMSl9Y2F0Y2goaSl7RnUubm9uRW51bUFyZ3M9dHJ1ZX19KDEsMCksJG4udGVtcGxhdGVTZXR0aW5ncz17ZXNjYXBlOl9uLGV2YWx1YXRlOnZuLGludGVycG9sYXRlOmduLHZhcmlhYmxlOlwiXCIsaW1wb3J0czp7Xzokbn19O3ZhciAkdT1ndXx8ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09dD9uOmV0KHQsWnUodCksZXQodCxLbyh0KSxuKSl9LEx1PWZ1bmN0aW9uKCl7XG5mdW5jdGlvbiBuKCl7fXJldHVybiBmdW5jdGlvbih0KXtpZihzZSh0KSl7bi5wcm90b3R5cGU9dDt2YXIgcj1uZXcgbjtuLnByb3RvdHlwZT1udWxsfXJldHVybiByfHxfLk9iamVjdCgpfX0oKSx6dT1LdChodCksQnU9S3QoX3QsdHJ1ZSksTXU9VnQoKSxEdT1WdCh0cnVlKSxQdT1VdT9mdW5jdGlvbihuLHQpe3JldHVybiBVdS5zZXQobix0KSxufTpSZTt0dXx8KEJ0PW51JiZodT9mdW5jdGlvbihuKXt2YXIgdD1uLmJ5dGVMZW5ndGgscj12dT91dSh0L1N1KTowLGU9cipTdSx1PW5ldyBudSh0KTtpZihyKXt2YXIgbz1uZXcgdnUodSwwLHIpO28uc2V0KG5ldyB2dShuLDAscikpfXJldHVybiB0IT1lJiYobz1uZXcgaHUodSxlKSxvLnNldChuZXcgaHUobixlKSkpLHV9OkllKG51bGwpKTt2YXIgcXU9ZHUmJmx1P2Z1bmN0aW9uKG4pe3JldHVybiBuZXcgRG4obil9OkllKG51bGwpLEt1PVV1P2Z1bmN0aW9uKG4pe3JldHVybiBVdS5nZXQobil9OlNlLFZ1PWZ1bmN0aW9uKCl7cmV0dXJuIEZ1LmZ1bmNOYW1lcz9cImNvbnN0YW50XCI9PUllLm5hbWU/QXQoXCJuYW1lXCIpOmZ1bmN0aW9uKG4pe1xuZm9yKHZhciB0PW4ubmFtZSxyPU51W3RdLGU9cj9yLmxlbmd0aDowO2UtLTspe3ZhciB1PXJbZV0sbz11LmZ1bmM7aWYobnVsbD09b3x8bz09bilyZXR1cm4gdS5uYW1lfXJldHVybiB0fTpJZShcIlwiKX0oKSxZdT1BdChcImxlbmd0aFwiKSxadT1vdT9mdW5jdGlvbihuKXtyZXR1cm4gb3UoRnIobikpfTpJZShbXSksR3U9ZnVuY3Rpb24oKXt2YXIgbj0wLHQ9MDtyZXR1cm4gZnVuY3Rpb24ocixlKXt2YXIgdT13bygpLG89VS0odS10KTtpZih0PXUsMDxvKXtpZigrK24+PVQpcmV0dXJuIHJ9ZWxzZSBuPTA7cmV0dXJuIFB1KHIsZSl9fSgpLEp1PWZlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGpyKG4pP2Z0KG4sc3QodCxmYWxzZSx0cnVlKSk6W119KSxYdT1RdCgpLEh1PVF0KHRydWUpLFF1PWZlKGZ1bmN0aW9uKHQscil7cj1zdChyKTt2YXIgZT1ydCh0LHIpO3JldHVybiBrdCh0LHIuc29ydChuKSksZX0pLG5vPXByKCksdG89cHIodHJ1ZSkscm89ZmUoZnVuY3Rpb24obil7cmV0dXJuIFR0KHN0KG4sZmFsc2UsdHJ1ZSkpO1xuXG59KSxlbz1mZShmdW5jdGlvbihuLHQpe3JldHVybiBqcihuKT9mdChuLHQpOltdfSksdW89ZmUoVnIpLG9vPWZlKGZ1bmN0aW9uKG4pe3ZhciB0PW4ubGVuZ3RoLHI9blt0LTJdLGU9blt0LTFdO3JldHVybiAyPHQmJnR5cGVvZiByPT1cImZ1bmN0aW9uXCI/dC09Mjoocj0xPHQmJnR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/KC0tdCxlKTp3LGU9dyksbi5sZW5ndGg9dCxZcihuLHIsZSl9KSxpbz1mZShmdW5jdGlvbihuLHQpe3JldHVybiBydChuLHN0KHQpKX0pLGZvPVB0KGZ1bmN0aW9uKG4sdCxyKXtHZS5jYWxsKG4scik/KytuW3JdOm5bcl09MX0pLGFvPUh0KHp1KSxjbz1IdChCdSx0cnVlKSxsbz1ycihLbix6dSksc289cnIoZnVuY3Rpb24obix0KXtmb3IodmFyIHI9bi5sZW5ndGg7ci0tJiZmYWxzZSE9PXQobltyXSxyLG4pOyk7cmV0dXJuIG59LEJ1KSxwbz1QdChmdW5jdGlvbihuLHQscil7R2UuY2FsbChuLHIpP25bcl0ucHVzaCh0KTpuW3JdPVt0XX0pLGhvPVB0KGZ1bmN0aW9uKG4sdCxyKXtcbm5bcl09dH0pLF9vPWZlKGZ1bmN0aW9uKG4sdCxyKXt2YXIgZT0tMSx1PXR5cGVvZiB0PT1cImZ1bmN0aW9uXCIsbz1Fcih0KSxpPWpyKG4pP1VlKG4ubGVuZ3RoKTpbXTtyZXR1cm4genUobixmdW5jdGlvbihuKXt2YXIgZj11P3Q6byYmbnVsbCE9biYmblt0XTtpWysrZV09Zj9mLmFwcGx5KG4scik6QXIobix0LHIpfSksaX0pLHZvPVB0KGZ1bmN0aW9uKG4sdCxyKXtuW3I/MDoxXS5wdXNoKHQpfSxmdW5jdGlvbigpe3JldHVybltbXSxbXV19KSxnbz1hcihYbix6dSkseW89YXIoZnVuY3Rpb24obix0LHIsZSl7dmFyIHU9bi5sZW5ndGg7Zm9yKGUmJnUmJihyPW5bLS11XSk7dS0tOylyPXQocixuW3VdLHUsbik7cmV0dXJuIHJ9LEJ1KSxtbz1mZShmdW5jdGlvbihuLHQpe2lmKG51bGw9PW4pcmV0dXJuW107dmFyIHI9dFsyXTtyZXR1cm4gciYmT3IodFswXSx0WzFdLHIpJiYodC5sZW5ndGg9MSksV3QobixzdCh0KSxbXSl9KSx3bz1BdXx8ZnVuY3Rpb24oKXtyZXR1cm4obmV3IE5lKS5nZXRUaW1lKCk7XG5cbn0sYm89ZmUoZnVuY3Rpb24obix0LHIpe3ZhciBlPXg7aWYoci5sZW5ndGgpdmFyIHU9dihyLGJvLnBsYWNlaG9sZGVyKSxlPWV8RTtyZXR1cm4gaHIobixlLHQscix1KX0pLHhvPWZlKGZ1bmN0aW9uKG4sdCl7dD10Lmxlbmd0aD9zdCh0KTpkZShuKTtmb3IodmFyIHI9LTEsZT10Lmxlbmd0aDsrK3I8ZTspe3ZhciB1PXRbcl07blt1XT1ocihuW3VdLHgsbil9cmV0dXJuIG59KSxBbz1mZShmdW5jdGlvbihuLHQscil7dmFyIGU9eHxBO2lmKHIubGVuZ3RoKXZhciB1PXYocixBby5wbGFjZWhvbGRlciksZT1lfEU7cmV0dXJuIGhyKHQsZSxuLHIsdSl9KSxqbz1KdChrKSxrbz1KdChPKSxPbz1mZShmdW5jdGlvbihuLHQpe3JldHVybiBpdChuLDEsdCl9KSxFbz1mZShmdW5jdGlvbihuLHQscil7cmV0dXJuIGl0KG4sdCxyKX0pLElvPXRyKCksUm89dHIodHJ1ZSksQ289ZnIoRSksV289ZnIoSSksU289ZmUoZnVuY3Rpb24obix0KXtyZXR1cm4gaHIobixDLG51bGwsbnVsbCxudWxsLHN0KHQpKTtcblxufSksVG89eXV8fGZ1bmN0aW9uKG4pe3JldHVybiBoKG4pJiZScihuLmxlbmd0aCkmJlhlLmNhbGwobik9PU19O0Z1LmRvbXx8KGNlPWZ1bmN0aW9uKG4pe3JldHVybiEhbiYmMT09PW4ubm9kZVR5cGUmJmgobikmJiFGbyhuKX0pO3ZhciBVbz1qdXx8ZnVuY3Rpb24obil7cmV0dXJuIHR5cGVvZiBuPT1cIm51bWJlclwiJiZtdShuKX0sTm89ZSgveC8pfHxodSYmIWUoaHUpP2Z1bmN0aW9uKG4pe3JldHVybiBYZS5jYWxsKG4pPT1LfTplLEZvPWl1P2Z1bmN0aW9uKG4pe2lmKCFufHxYZS5jYWxsKG4pIT1ZKXJldHVybiBmYWxzZTt2YXIgdD1uLnZhbHVlT2Yscj1wZSh0KSYmKHI9aXUodCkpJiZpdShyKTtyZXR1cm4gcj9uPT1yfHxpdShuKT09cjpUcihuKX06VHIsJG89cXQoZnVuY3Rpb24obix0LHIpe3JldHVybiByP3R0KG4sdCxyKTokdShuLHQpfSksTG89ZmUoZnVuY3Rpb24obil7dmFyIHQ9blswXTtyZXR1cm4gbnVsbD09dD90OihuLnB1c2goUW4pLCRvLmFwcGx5KHcsbikpfSksem89bnIoaHQpLEJvPW5yKF90KSxNbz1lcihNdSksRG89ZXIoRHUpLFBvPXVyKGh0KSxxbz11cihfdCksS289d3U/ZnVuY3Rpb24obil7XG52YXIgdD1udWxsIT1uJiZuLmNvbnN0cnVjdG9yO3JldHVybiB0eXBlb2YgdD09XCJmdW5jdGlvblwiJiZ0LnByb3RvdHlwZT09PW58fHR5cGVvZiBuIT1cImZ1bmN0aW9uXCImJmpyKG4pP1VyKG4pOnNlKG4pP3d1KG4pOltdfTpVcixWbz1vcih0cnVlKSxZbz1vcigpLFpvPXF0KHh0KSxHbz1mZShmdW5jdGlvbihuLHQpe2lmKG51bGw9PW4pcmV0dXJue307aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdFswXSlyZXR1cm4gdD1KbihzdCh0KSxEZSksV3IobixmdChtZShuKSx0KSk7dmFyIHI9enQodFswXSx0WzFdLDMpO3JldHVybiBTcihuLGZ1bmN0aW9uKG4sdCxlKXtyZXR1cm4hcihuLHQsZSl9KX0pLEpvPWZlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/e306XCJmdW5jdGlvblwiPT10eXBlb2YgdFswXT9TcihuLHp0KHRbMF0sdFsxXSwzKSk6V3IobixzdCh0KSl9KSxYbz1adChmdW5jdGlvbihuLHQscil7cmV0dXJuIHQ9dC50b0xvd2VyQ2FzZSgpLG4rKHI/dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpOnQpO1xuXG59KSxIbz1adChmdW5jdGlvbihuLHQscil7cmV0dXJuIG4rKHI/XCItXCI6XCJcIikrdC50b0xvd2VyQ2FzZSgpfSksUW89aXIoKSxuaT1pcih0cnVlKTs4IT1rdShTbitcIjA4XCIpJiYoQWU9ZnVuY3Rpb24obix0LHIpe3JldHVybihyP09yKG4sdCxyKTpudWxsPT10KT90PTA6dCYmKHQ9K3QpLG49a2Uobiksa3Uobix0fHwoT24udGVzdChuKT8xNjoxMCkpfSk7dmFyIHRpPVp0KGZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbisocj9cIl9cIjpcIlwiKSt0LnRvTG93ZXJDYXNlKCl9KSxyaT1adChmdW5jdGlvbihuLHQscil7cmV0dXJuIG4rKHI/XCIgXCI6XCJcIikrKHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKSl9KSxlaT1mZShmdW5jdGlvbihuLHQpe3RyeXtyZXR1cm4gbi5hcHBseSh3LHQpfWNhdGNoKHIpe3JldHVybiBsZShyKT9yOm5ldyBGZShyKX19KSx1aT1mZShmdW5jdGlvbihuLHQpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gQXIocixuLHQpfX0pLG9pPWZlKGZ1bmN0aW9uKG4sdCl7XG5yZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIEFyKG4scix0KX19KSxpaT1YdChmdW5jdGlvbihuKXtmb3IodmFyIHQ9LTEscj1uLmxlbmd0aCxlPUV1OysrdDxyOyl7dmFyIHU9blt0XTt1PmUmJihlPXUpfXJldHVybiBlfSksZmk9WHQoZnVuY3Rpb24obil7Zm9yKHZhciB0PS0xLHI9bi5sZW5ndGgsZT1JdTsrK3Q8cjspe3ZhciB1PW5bdF07dTxlJiYoZT11KX1yZXR1cm4gZX0sdHJ1ZSk7cmV0dXJuICRuLnByb3RvdHlwZT1Mbi5wcm90b3R5cGUsem4ucHJvdG90eXBlPUx1KExuLnByb3RvdHlwZSksem4ucHJvdG90eXBlLmNvbnN0cnVjdG9yPXpuLEJuLnByb3RvdHlwZT1MdShMbi5wcm90b3R5cGUpLEJuLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1CbixNbi5wcm90b3R5cGVbXCJkZWxldGVcIl09ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuaGFzKG4pJiZkZWxldGUgdGhpcy5fX2RhdGFfX1tuXX0sTW4ucHJvdG90eXBlLmdldD1mdW5jdGlvbihuKXtyZXR1cm5cIl9fcHJvdG9fX1wiPT1uP3c6dGhpcy5fX2RhdGFfX1tuXTtcblxufSxNbi5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKG4pe3JldHVyblwiX19wcm90b19fXCIhPW4mJkdlLmNhbGwodGhpcy5fX2RhdGFfXyxuKX0sTW4ucHJvdG90eXBlLnNldD1mdW5jdGlvbihuLHQpe3JldHVyblwiX19wcm90b19fXCIhPW4mJih0aGlzLl9fZGF0YV9fW25dPXQpLHRoaXN9LERuLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuZGF0YTt0eXBlb2Ygbj09XCJzdHJpbmdcInx8c2Uobik/dC5zZXQuYWRkKG4pOnQuaGFzaFtuXT10cnVlfSxpZS5DYWNoZT1Nbiwkbi5hZnRlcj1mdW5jdGlvbihuLHQpe2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpe2lmKHR5cGVvZiBuIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFBlKEwpO3ZhciByPW47bj10LHQ9cn1yZXR1cm4gbj1tdShuPStuKT9uOjAsZnVuY3Rpb24oKXtyZXR1cm4gMT4tLW4/dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dm9pZCAwfX0sJG4uYXJ5PWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gciYmT3Iobix0LHIpJiYodD1udWxsKSxcbnQ9biYmbnVsbD09dD9uLmxlbmd0aDpidSgrdHx8MCwwKSxocihuLFIsbnVsbCxudWxsLG51bGwsbnVsbCx0KX0sJG4uYXNzaWduPSRvLCRuLmF0PWlvLCRuLmJlZm9yZT11ZSwkbi5iaW5kPWJvLCRuLmJpbmRBbGw9eG8sJG4uYmluZEtleT1Bbywkbi5jYWxsYmFjaz1FZSwkbi5jaGFpbj1Hciwkbi5jaHVuaz1mdW5jdGlvbihuLHQscil7dD0ocj9PcihuLHQscik6bnVsbD09dCk/MTpidSgrdHx8MSwxKSxyPTA7Zm9yKHZhciBlPW4/bi5sZW5ndGg6MCx1PS0xLG89VWUocnUoZS90KSk7cjxlOylvWysrdV09SXQobixyLHIrPXQpO3JldHVybiBvfSwkbi5jb21wYWN0PWZ1bmN0aW9uKG4pe2Zvcih2YXIgdD0tMSxyPW4/bi5sZW5ndGg6MCxlPS0xLHU9W107Kyt0PHI7KXt2YXIgbz1uW3RdO28mJih1WysrZV09byl9cmV0dXJuIHV9LCRuLmNvbnN0YW50PUllLCRuLmNvdW50Qnk9Zm8sJG4uY3JlYXRlPWZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1MdShuKTtyZXR1cm4gciYmT3Iobix0LHIpJiYodD1udWxsKSxcbnQ/JHUoZSx0KTplfSwkbi5jdXJyeT1qbywkbi5jdXJyeVJpZ2h0PWtvLCRuLmRlYm91bmNlPW9lLCRuLmRlZmF1bHRzPUxvLCRuLmRlZmVyPU9vLCRuLmRlbGF5PUVvLCRuLmRpZmZlcmVuY2U9SnUsJG4uZHJvcD16ciwkbi5kcm9wUmlnaHQ9QnIsJG4uZHJvcFJpZ2h0V2hpbGU9ZnVuY3Rpb24obix0LHIpe3JldHVybiBuJiZuLmxlbmd0aD9OdChuLGRyKHQsciwzKSx0cnVlLHRydWUpOltdfSwkbi5kcm9wV2hpbGU9ZnVuY3Rpb24obix0LHIpe3JldHVybiBuJiZuLmxlbmd0aD9OdChuLGRyKHQsciwzKSx0cnVlKTpbXX0sJG4uZmlsbD1mdW5jdGlvbihuLHQscixlKXt2YXIgdT1uP24ubGVuZ3RoOjA7aWYoIXUpcmV0dXJuW107Zm9yKHImJnR5cGVvZiByIT1cIm51bWJlclwiJiZPcihuLHQscikmJihyPTAsZT11KSx1PW4ubGVuZ3RoLHI9bnVsbD09cj8wOityfHwwLDA+ciYmKHI9LXI+dT8wOnUrciksZT1lPT09d3x8ZT51P3U6K2V8fDAsMD5lJiYoZSs9dSksdT1yPmU/MDplPj4+MCxyPj4+PTA7cjx1OyluW3IrK109dDtcblxucmV0dXJuIG59LCRuLmZpbHRlcj1Iciwkbi5mbGF0dGVuPWZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1uP24ubGVuZ3RoOjA7cmV0dXJuIHImJk9yKG4sdCxyKSYmKHQ9ZmFsc2UpLGU/c3Qobix0KTpbXX0sJG4uZmxhdHRlbkRlZXA9ZnVuY3Rpb24obil7cmV0dXJuIG4mJm4ubGVuZ3RoP3N0KG4sdHJ1ZSk6W119LCRuLmZsb3c9SW8sJG4uZmxvd1JpZ2h0PVJvLCRuLmZvckVhY2g9bG8sJG4uZm9yRWFjaFJpZ2h0PXNvLCRuLmZvckluPU1vLCRuLmZvckluUmlnaHQ9RG8sJG4uZm9yT3duPVBvLCRuLmZvck93blJpZ2h0PXFvLCRuLmZ1bmN0aW9ucz1kZSwkbi5ncm91cEJ5PXBvLCRuLmluZGV4Qnk9aG8sJG4uaW5pdGlhbD1mdW5jdGlvbihuKXtyZXR1cm4gQnIobiwxKX0sJG4uaW50ZXJzZWN0aW9uPWZ1bmN0aW9uKCl7Zm9yKHZhciBuPVtdLHQ9LTEsZT1hcmd1bWVudHMubGVuZ3RoLHU9W10sbz1tcigpLGk9bz09cixmPVtdOysrdDxlOyl7dmFyIGE9YXJndW1lbnRzW3RdO2pyKGEpJiYobi5wdXNoKGEpLFxudS5wdXNoKGkmJjEyMDw9YS5sZW5ndGg/cXUodCYmYSk6bnVsbCkpfWlmKGU9bi5sZW5ndGgsMj5lKXJldHVybiBmO3ZhciBpPW5bMF0sYz0tMSxsPWk/aS5sZW5ndGg6MCxzPXVbMF07bjpmb3IoOysrYzxsOylpZihhPWlbY10sMD4ocz9QbihzLGEpOm8oZixhLDApKSl7Zm9yKHQ9ZTstLXQ7KXt2YXIgcD11W3RdO2lmKDA+KHA/UG4ocCxhKTpvKG5bdF0sYSwwKSkpY29udGludWUgbn1zJiZzLnB1c2goYSksZi5wdXNoKGEpfXJldHVybiBmfSwkbi5pbnZlcnQ9ZnVuY3Rpb24obix0LHIpe3ImJk9yKG4sdCxyKSYmKHQ9bnVsbCkscj0tMTtmb3IodmFyIGU9S28obiksdT1lLmxlbmd0aCxvPXt9Oysrcjx1Oyl7dmFyIGk9ZVtyXSxmPW5baV07dD9HZS5jYWxsKG8sZik/b1tmXS5wdXNoKGkpOm9bZl09W2ldOm9bZl09aX1yZXR1cm4gb30sJG4uaW52b2tlPV9vLCRuLmtleXM9S28sJG4ua2V5c0luPW1lLCRuLm1hcD1uZSwkbi5tYXBLZXlzPVZvLCRuLm1hcFZhbHVlcz1Zbywkbi5tYXRjaGVzPUNlLFxuJG4ubWF0Y2hlc1Byb3BlcnR5PWZ1bmN0aW9uKG4sdCl7cmV0dXJuIGJ0KG4sb3QodCx0cnVlKSl9LCRuLm1lbW9pemU9aWUsJG4ubWVyZ2U9Wm8sJG4ubWV0aG9kPXVpLCRuLm1ldGhvZE9mPW9pLCRuLm1peGluPVdlLCRuLm5lZ2F0ZT1mdW5jdGlvbihuKXtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBQZShMKTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4hbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSwkbi5vbWl0PUdvLCRuLm9uY2U9ZnVuY3Rpb24obil7cmV0dXJuIHVlKDIsbil9LCRuLnBhaXJzPWZ1bmN0aW9uKG4pe2Zvcih2YXIgdD0tMSxyPUtvKG4pLGU9ci5sZW5ndGgsdT1VZShlKTsrK3Q8ZTspe3ZhciBvPXJbdF07dVt0XT1bbyxuW29dXX1yZXR1cm4gdX0sJG4ucGFydGlhbD1Dbywkbi5wYXJ0aWFsUmlnaHQ9V28sJG4ucGFydGl0aW9uPXZvLCRuLnBpY2s9Sm8sJG4ucGx1Y2s9ZnVuY3Rpb24obix0KXtyZXR1cm4gbmUobixUZSh0KSl9LCRuLnByb3BlcnR5PVRlLFxuJG4ucHJvcGVydHlPZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGd0KG4sJHIodCksdCtcIlwiKX19LCRuLnB1bGw9ZnVuY3Rpb24oKXt2YXIgbj1hcmd1bWVudHMsdD1uWzBdO2lmKCF0fHwhdC5sZW5ndGgpcmV0dXJuIHQ7Zm9yKHZhciByPTAsZT1tcigpLHU9bi5sZW5ndGg7KytyPHU7KWZvcih2YXIgbz0wLGk9bltyXTstMTwobz1lKHQsaSxvKSk7KXB1LmNhbGwodCxvLDEpO3JldHVybiB0fSwkbi5wdWxsQXQ9UXUsJG4ucmFuZ2U9ZnVuY3Rpb24obix0LHIpe3ImJk9yKG4sdCxyKSYmKHQ9cj1udWxsKSxuPStufHwwLHI9bnVsbD09cj8xOityfHwwLG51bGw9PXQ/KHQ9bixuPTApOnQ9K3R8fDA7dmFyIGU9LTE7dD1idShydSgodC1uKS8ocnx8MSkpLDApO2Zvcih2YXIgdT1VZSh0KTsrK2U8dDspdVtlXT1uLG4rPXI7cmV0dXJuIHV9LCRuLnJlYXJnPVNvLCRuLnJlamVjdD1mdW5jdGlvbihuLHQscil7dmFyIGU9VG8obik/R246Y3Q7cmV0dXJuIHQ9ZHIodCxyLDMpLFxuZShuLGZ1bmN0aW9uKG4scixlKXtyZXR1cm4hdChuLHIsZSl9KX0sJG4ucmVtb3ZlPWZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1bXTtpZighbnx8IW4ubGVuZ3RoKXJldHVybiBlO3ZhciB1PS0xLG89W10saT1uLmxlbmd0aDtmb3IodD1kcih0LHIsMyk7Kyt1PGk7KXI9blt1XSx0KHIsdSxuKSYmKGUucHVzaChyKSxvLnB1c2godSkpO3JldHVybiBrdChuLG8pLGV9LCRuLnJlc3Q9cXIsJG4ucmVzdFBhcmFtPWZlLCRuLnNldD1mdW5jdGlvbihuLHQscil7aWYobnVsbD09bilyZXR1cm4gbjt2YXIgZT10K1wiXCI7dD1udWxsIT1uW2VdfHxFcih0LG4pP1tlXTokcih0KTtmb3IodmFyIGU9LTEsdT10Lmxlbmd0aCxvPXUtMSxpPW47bnVsbCE9aSYmKytlPHU7KXt2YXIgZj10W2VdO3NlKGkpJiYoZT09bz9pW2ZdPXI6bnVsbD09aVtmXSYmKGlbZl09a3IodFtlKzFdKT9bXTp7fSkpLGk9aVtmXX1yZXR1cm4gbn0sJG4uc2h1ZmZsZT1yZSwkbi5zbGljZT1mdW5jdGlvbihuLHQscil7dmFyIGU9bj9uLmxlbmd0aDowO1xuXG5yZXR1cm4gZT8ociYmdHlwZW9mIHIhPVwibnVtYmVyXCImJk9yKG4sdCxyKSYmKHQ9MCxyPWUpLEl0KG4sdCxyKSk6W119LCRuLnNvcnRCeT1mdW5jdGlvbihuLHQscil7aWYobnVsbD09bilyZXR1cm5bXTtyJiZPcihuLHQscikmJih0PW51bGwpO3ZhciBlPS0xO3JldHVybiB0PWRyKHQsciwzKSxuPW10KG4sZnVuY3Rpb24obixyLHUpe3JldHVybnthOnQobixyLHUpLGI6KytlLGM6bn19KSxDdChuLGEpfSwkbi5zb3J0QnlBbGw9bW8sJG4uc29ydEJ5T3JkZXI9ZnVuY3Rpb24obix0LHIsZSl7cmV0dXJuIG51bGw9PW4/W106KGUmJk9yKHQscixlKSYmKHI9bnVsbCksVG8odCl8fCh0PW51bGw9PXQ/W106W3RdKSxUbyhyKXx8KHI9bnVsbD09cj9bXTpbcl0pLFd0KG4sdCxyKSl9LCRuLnNwcmVhZD1mdW5jdGlvbihuKXtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBQZShMKTtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIG4uYXBwbHkodGhpcyx0KX19LCRuLnRha2U9ZnVuY3Rpb24obix0LHIpe1xucmV0dXJuIG4mJm4ubGVuZ3RoPygocj9PcihuLHQscik6bnVsbD09dCkmJih0PTEpLEl0KG4sMCwwPnQ/MDp0KSk6W119LCRuLnRha2VSaWdodD1mdW5jdGlvbihuLHQscil7dmFyIGU9bj9uLmxlbmd0aDowO3JldHVybiBlPygocj9PcihuLHQscik6bnVsbD09dCkmJih0PTEpLHQ9ZS0oK3R8fDApLEl0KG4sMD50PzA6dCkpOltdfSwkbi50YWtlUmlnaHRXaGlsZT1mdW5jdGlvbihuLHQscil7cmV0dXJuIG4mJm4ubGVuZ3RoP050KG4sZHIodCxyLDMpLGZhbHNlLHRydWUpOltdfSwkbi50YWtlV2hpbGU9ZnVuY3Rpb24obix0LHIpe3JldHVybiBuJiZuLmxlbmd0aD9OdChuLGRyKHQsciwzKSk6W119LCRuLnRhcD1mdW5jdGlvbihuLHQscil7cmV0dXJuIHQuY2FsbChyLG4pLG59LCRuLnRocm90dGxlPWZ1bmN0aW9uKG4sdCxyKXt2YXIgZT10cnVlLHU9dHJ1ZTtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBQZShMKTtyZXR1cm4gZmFsc2U9PT1yP2U9ZmFsc2U6c2UocikmJihlPVwibGVhZGluZ1wiaW4gcj8hIXIubGVhZGluZzplLFxudT1cInRyYWlsaW5nXCJpbiByPyEhci50cmFpbGluZzp1KSxGbi5sZWFkaW5nPWUsRm4ubWF4V2FpdD0rdCxGbi50cmFpbGluZz11LG9lKG4sdCxGbil9LCRuLnRocnU9SnIsJG4udGltZXM9ZnVuY3Rpb24obix0LHIpe2lmKG49dXUobiksMT5ufHwhbXUobikpcmV0dXJuW107dmFyIGU9LTEsdT1VZSh4dShuLFJ1KSk7Zm9yKHQ9enQodCxyLDEpOysrZTxuOyllPFJ1P3VbZV09dChlKTp0KGUpO3JldHVybiB1fSwkbi50b0FycmF5PWZ1bmN0aW9uKG4pe3ZhciB0PW4/WXUobik6MDtyZXR1cm4gUnIodCk/dD9xbihuKTpbXTp3ZShuKX0sJG4udG9QbGFpbk9iamVjdD15ZSwkbi50cmFuc2Zvcm09ZnVuY3Rpb24obix0LHIsZSl7dmFyIHU9VG8obil8fGdlKG4pO3JldHVybiB0PWRyKHQsZSw0KSxudWxsPT1yJiYodXx8c2Uobik/KGU9bi5jb25zdHJ1Y3RvcixyPXU/VG8obik/bmV3IGU6W106THUoTm8oZSkmJmUucHJvdG90eXBlKSk6cj17fSksKHU/S246aHQpKG4sZnVuY3Rpb24obixlLHUpe1xucmV0dXJuIHQocixuLGUsdSl9KSxyfSwkbi51bmlvbj1ybywkbi51bmlxPUtyLCRuLnVuemlwPVZyLCRuLnVuemlwV2l0aD1Zciwkbi52YWx1ZXM9d2UsJG4udmFsdWVzSW49ZnVuY3Rpb24obil7cmV0dXJuIFV0KG4sbWUobikpfSwkbi53aGVyZT1mdW5jdGlvbihuLHQpe3JldHVybiBIcihuLHd0KHQpKX0sJG4ud2l0aG91dD1lbywkbi53cmFwPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIHQ9bnVsbD09dD9SZTp0LGhyKHQsRSxudWxsLFtuXSxbXSl9LCRuLnhvcj1mdW5jdGlvbigpe2Zvcih2YXIgbj0tMSx0PWFyZ3VtZW50cy5sZW5ndGg7KytuPHQ7KXt2YXIgcj1hcmd1bWVudHNbbl07aWYoanIocikpdmFyIGU9ZT9mdChlLHIpLmNvbmNhdChmdChyLGUpKTpyfXJldHVybiBlP1R0KGUpOltdfSwkbi56aXA9dW8sJG4uemlwT2JqZWN0PVpyLCRuLnppcFdpdGg9b28sJG4uYmFja2Zsb3c9Um8sJG4uY29sbGVjdD1uZSwkbi5jb21wb3NlPVJvLCRuLmVhY2g9bG8sJG4uZWFjaFJpZ2h0PXNvLFxuJG4uZXh0ZW5kPSRvLCRuLml0ZXJhdGVlPUVlLCRuLm1ldGhvZHM9ZGUsJG4ub2JqZWN0PVpyLCRuLnNlbGVjdD1Iciwkbi50YWlsPXFyLCRuLnVuaXF1ZT1LcixXZSgkbiwkbiksJG4uYWRkPWZ1bmN0aW9uKG4sdCl7cmV0dXJuKCtufHwwKSsoK3R8fDApfSwkbi5hdHRlbXB0PWVpLCRuLmNhbWVsQ2FzZT1Ybywkbi5jYXBpdGFsaXplPWZ1bmN0aW9uKG4pe3JldHVybihuPXUobikpJiZuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK24uc2xpY2UoMSl9LCRuLmNsb25lPWZ1bmN0aW9uKG4sdCxyLGUpe3JldHVybiB0JiZ0eXBlb2YgdCE9XCJib29sZWFuXCImJk9yKG4sdCxyKT90PWZhbHNlOnR5cGVvZiB0PT1cImZ1bmN0aW9uXCImJihlPXIscj10LHQ9ZmFsc2UpLHI9dHlwZW9mIHI9PVwiZnVuY3Rpb25cIiYmenQocixlLDEpLG90KG4sdCxyKX0sJG4uY2xvbmVEZWVwPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gdD10eXBlb2YgdD09XCJmdW5jdGlvblwiJiZ6dCh0LHIsMSksb3Qobix0cnVlLHQpfSwkbi5kZWJ1cnI9YmUsXG4kbi5lbmRzV2l0aD1mdW5jdGlvbihuLHQscil7bj11KG4pLHQrPVwiXCI7dmFyIGU9bi5sZW5ndGg7cmV0dXJuIHI9cj09PXc/ZTp4dSgwPnI/MDorcnx8MCxlKSxyLT10Lmxlbmd0aCwwPD1yJiZuLmluZGV4T2YodCxyKT09cn0sJG4uZXNjYXBlPWZ1bmN0aW9uKG4pe3JldHVybihuPXUobikpJiZobi50ZXN0KG4pP24ucmVwbGFjZShzbixsKTpufSwkbi5lc2NhcGVSZWdFeHA9eGUsJG4uZXZlcnk9WHIsJG4uZmluZD1hbywkbi5maW5kSW5kZXg9WHUsJG4uZmluZEtleT16bywkbi5maW5kTGFzdD1jbywkbi5maW5kTGFzdEluZGV4PUh1LCRuLmZpbmRMYXN0S2V5PUJvLCRuLmZpbmRXaGVyZT1mdW5jdGlvbihuLHQpe3JldHVybiBhbyhuLHd0KHQpKX0sJG4uZmlyc3Q9TXIsJG4uZ2V0PWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbj1udWxsPT1uP3c6Z3Qobiwkcih0KSx0K1wiXCIpLG49PT13P3I6bn0sJG4uaGFzPWZ1bmN0aW9uKG4sdCl7aWYobnVsbD09bilyZXR1cm4gZmFsc2U7dmFyIHI9R2UuY2FsbChuLHQpO1xuXG5yZXR1cm4gcnx8RXIodCl8fCh0PSRyKHQpLG49MT09dC5sZW5ndGg/bjpndChuLEl0KHQsMCwtMSkpLHQ9UHIodCkscj1udWxsIT1uJiZHZS5jYWxsKG4sdCkpLHJ9LCRuLmlkZW50aXR5PVJlLCRuLmluY2x1ZGVzPVFyLCRuLmluZGV4T2Y9RHIsJG4uaW5SYW5nZT1mdW5jdGlvbihuLHQscil7cmV0dXJuIHQ9K3R8fDAsXCJ1bmRlZmluZWRcIj09PXR5cGVvZiByPyhyPXQsdD0wKTpyPStyfHwwLG4+PXh1KHQscikmJm48YnUodCxyKX0sJG4uaXNBcmd1bWVudHM9YWUsJG4uaXNBcnJheT1Ubywkbi5pc0Jvb2xlYW49ZnVuY3Rpb24obil7cmV0dXJuIHRydWU9PT1ufHxmYWxzZT09PW58fGgobikmJlhlLmNhbGwobik9PUR9LCRuLmlzRGF0ZT1mdW5jdGlvbihuKXtyZXR1cm4gaChuKSYmWGUuY2FsbChuKT09UH0sJG4uaXNFbGVtZW50PWNlLCRuLmlzRW1wdHk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW4/dHJ1ZTpqcihuKSYmKFRvKG4pfHx2ZShuKXx8YWUobil8fGgobikmJk5vKG4uc3BsaWNlKSk/IW4ubGVuZ3RoOiFLbyhuKS5sZW5ndGg7XG5cbn0sJG4uaXNFcXVhbD1mdW5jdGlvbihuLHQscixlKXtyZXR1cm4gcj10eXBlb2Ygcj09XCJmdW5jdGlvblwiJiZ6dChyLGUsMyksIXImJkNyKG4pJiZDcih0KT9uPT09dDooZT1yP3Iobix0KTp3LGU9PT13P3l0KG4sdCxyKTohIWUpfSwkbi5pc0Vycm9yPWxlLCRuLmlzRmluaXRlPVVvLCRuLmlzRnVuY3Rpb249Tm8sJG4uaXNNYXRjaD1mdW5jdGlvbihuLHQscixlKXt2YXIgdT1Lbyh0KSxvPXUubGVuZ3RoO2lmKCFvKXJldHVybiB0cnVlO2lmKG51bGw9PW4pcmV0dXJuIGZhbHNlO2lmKHI9dHlwZW9mIHI9PVwiZnVuY3Rpb25cIiYmenQocixlLDMpLG49RnIobiksIXImJjE9PW8pe3ZhciBpPXVbMF07aWYoZT10W2ldLENyKGUpKXJldHVybiBlPT09bltpXSYmKGUhPT13fHxpIGluIG4pfWZvcih2YXIgaT1VZShvKSxmPVVlKG8pO28tLTspZT1pW29dPXRbdVtvXV0sZltvXT1DcihlKTtyZXR1cm4gZHQobix1LGksZixyKX0sJG4uaXNOYU49ZnVuY3Rpb24obil7cmV0dXJuIGhlKG4pJiZuIT0rbn0sJG4uaXNOYXRpdmU9cGUsXG4kbi5pc051bGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PT1ufSwkbi5pc051bWJlcj1oZSwkbi5pc09iamVjdD1zZSwkbi5pc1BsYWluT2JqZWN0PUZvLCRuLmlzUmVnRXhwPV9lLCRuLmlzU3RyaW5nPXZlLCRuLmlzVHlwZWRBcnJheT1nZSwkbi5pc1VuZGVmaW5lZD1mdW5jdGlvbihuKXtyZXR1cm4gbj09PXd9LCRuLmtlYmFiQ2FzZT1Ibywkbi5sYXN0PVByLCRuLmxhc3RJbmRleE9mPWZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1uP24ubGVuZ3RoOjA7aWYoIWUpcmV0dXJuLTE7dmFyIHU9ZTtpZih0eXBlb2Ygcj09XCJudW1iZXJcIil1PSgwPnI/YnUoZStyLDApOnh1KHJ8fDAsZS0xKSkrMTtlbHNlIGlmKHIpcmV0dXJuIHU9JHQobix0LHRydWUpLTEsbj1uW3VdLCh0PT09dD90PT09bjpuIT09bik/dTotMTtpZih0IT09dClyZXR1cm4gcChuLHUsdHJ1ZSk7Zm9yKDt1LS07KWlmKG5bdV09PT10KXJldHVybiB1O3JldHVybi0xfSwkbi5tYXg9aWksJG4ubWluPWZpLCRuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtcbnJldHVybiBfLl89SGUsdGhpc30sJG4ubm9vcD1TZSwkbi5ub3c9d28sJG4ucGFkPWZ1bmN0aW9uKG4sdCxyKXtuPXUobiksdD0rdDt2YXIgZT1uLmxlbmd0aDtyZXR1cm4gZTx0JiZtdSh0KT8oZT0odC1lKS8yLHQ9dXUoZSksZT1ydShlKSxyPWxyKFwiXCIsZSxyKSxyLnNsaWNlKDAsdCkrbityKTpufSwkbi5wYWRMZWZ0PVFvLCRuLnBhZFJpZ2h0PW5pLCRuLnBhcnNlSW50PUFlLCRuLnJhbmRvbT1mdW5jdGlvbihuLHQscil7ciYmT3Iobix0LHIpJiYodD1yPW51bGwpO3ZhciBlPW51bGw9PW4sdT1udWxsPT10O3JldHVybiBudWxsPT1yJiYodSYmdHlwZW9mIG49PVwiYm9vbGVhblwiPyhyPW4sbj0xKTp0eXBlb2YgdD09XCJib29sZWFuXCImJihyPXQsdT10cnVlKSksZSYmdSYmKHQ9MSx1PWZhbHNlKSxuPStufHwwLHU/KHQ9bixuPTApOnQ9K3R8fDAscnx8biUxfHx0JTE/KHI9T3UoKSx4dShuK3IqKHQtbitwYXJzZUZsb2F0KFwiMWUtXCIrKChyK1wiXCIpLmxlbmd0aC0xKSkpLHQpKTpPdChuLHQpfSwkbi5yZWR1Y2U9Z28sXG4kbi5yZWR1Y2VSaWdodD15bywkbi5yZXBlYXQ9amUsJG4ucmVzdWx0PWZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1udWxsPT1uP3c6blt0XTtyZXR1cm4gZT09PXcmJihudWxsPT1ufHxFcih0LG4pfHwodD0kcih0KSxuPTE9PXQubGVuZ3RoP246Z3QobixJdCh0LDAsLTEpKSxlPW51bGw9PW4/dzpuW1ByKHQpXSksZT1lPT09dz9yOmUpLE5vKGUpP2UuY2FsbChuKTplfSwkbi5ydW5JbkNvbnRleHQ9bSwkbi5zaXplPWZ1bmN0aW9uKG4pe3ZhciB0PW4/WXUobik6MDtyZXR1cm4gUnIodCk/dDpLbyhuKS5sZW5ndGh9LCRuLnNuYWtlQ2FzZT10aSwkbi5zb21lPWVlLCRuLnNvcnRlZEluZGV4PW5vLCRuLnNvcnRlZExhc3RJbmRleD10bywkbi5zdGFydENhc2U9cmksJG4uc3RhcnRzV2l0aD1mdW5jdGlvbihuLHQscil7cmV0dXJuIG49dShuKSxyPW51bGw9PXI/MDp4dSgwPnI/MDorcnx8MCxuLmxlbmd0aCksbi5sYXN0SW5kZXhPZih0LHIpPT1yfSwkbi5zdW09ZnVuY3Rpb24obix0LHIpe3ImJk9yKG4sdCxyKSYmKHQ9bnVsbCk7XG5cbnZhciBlPWRyKCksdT1udWxsPT10O2lmKGU9PT11dCYmdXx8KHU9ZmFsc2UsdD1lKHQsciwzKSksdSl7Zm9yKG49VG8obik/bjpOcihuKSx0PW4ubGVuZ3RoLHI9MDt0LS07KXIrPStuW3RdfHwwO249cn1lbHNlIG49U3Qobix0KTtyZXR1cm4gbn0sJG4udGVtcGxhdGU9ZnVuY3Rpb24obix0LHIpe3ZhciBlPSRuLnRlbXBsYXRlU2V0dGluZ3M7ciYmT3Iobix0LHIpJiYodD1yPW51bGwpLG49dShuKSx0PXR0KCR1KHt9LHJ8fHQpLGUsbnQpLHI9dHQoJHUoe30sdC5pbXBvcnRzKSxlLmltcG9ydHMsbnQpO3ZhciBvLGksZj1LbyhyKSxhPVV0KHIsZiksYz0wO3I9dC5pbnRlcnBvbGF0ZXx8Um47dmFyIGw9XCJfX3ArPSdcIjtyPU1lKCh0LmVzY2FwZXx8Um4pLnNvdXJjZStcInxcIityLnNvdXJjZStcInxcIisocj09PWduP2puOlJuKS5zb3VyY2UrXCJ8XCIrKHQuZXZhbHVhdGV8fFJuKS5zb3VyY2UrXCJ8JFwiLFwiZ1wiKTt2YXIgcD1cInNvdXJjZVVSTFwiaW4gdD9cIi8vIyBzb3VyY2VVUkw9XCIrdC5zb3VyY2VVUkwrXCJcXG5cIjpcIlwiO1xuXG5pZihuLnJlcGxhY2UocixmdW5jdGlvbih0LHIsZSx1LGYsYSl7cmV0dXJuIGV8fChlPXUpLGwrPW4uc2xpY2UoYyxhKS5yZXBsYWNlKENuLHMpLHImJihvPXRydWUsbCs9XCInK19fZShcIityK1wiKSsnXCIpLGYmJihpPXRydWUsbCs9XCInO1wiK2YrXCI7XFxuX19wKz0nXCIpLGUmJihsKz1cIicrKChfX3Q9KFwiK2UrXCIpKT09bnVsbD8nJzpfX3QpKydcIiksYz1hK3QubGVuZ3RoLHR9KSxsKz1cIic7XCIsKHQ9dC52YXJpYWJsZSl8fChsPVwid2l0aChvYmope1wiK2wrXCJ9XCIpLGw9KGk/bC5yZXBsYWNlKGZuLFwiXCIpOmwpLnJlcGxhY2UoYW4sXCIkMVwiKS5yZXBsYWNlKGNuLFwiJDE7XCIpLGw9XCJmdW5jdGlvbihcIisodHx8XCJvYmpcIikrXCIpe1wiKyh0P1wiXCI6XCJvYmp8fChvYmo9e30pO1wiKStcInZhciBfX3QsX19wPScnXCIrKG8/XCIsX19lPV8uZXNjYXBlXCI6XCJcIikrKGk/XCIsX19qPUFycmF5LnByb3RvdHlwZS5qb2luO2Z1bmN0aW9uIHByaW50KCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpfVwiOlwiO1wiKStsK1wicmV0dXJuIF9fcH1cIixcbnQ9ZWkoZnVuY3Rpb24oKXtyZXR1cm4gJGUoZixwK1wicmV0dXJuIFwiK2wpLmFwcGx5KHcsYSl9KSx0LnNvdXJjZT1sLGxlKHQpKXRocm93IHQ7cmV0dXJuIHR9LCRuLnRyaW09a2UsJG4udHJpbUxlZnQ9ZnVuY3Rpb24obix0LHIpe3ZhciBlPW47cmV0dXJuKG49dShuKSk/bi5zbGljZSgocj9PcihlLHQscik6bnVsbD09dCk/ZyhuKTppKG4sdCtcIlwiKSk6bn0sJG4udHJpbVJpZ2h0PWZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1uO3JldHVybihuPXUobikpPyhyP09yKGUsdCxyKTpudWxsPT10KT9uLnNsaWNlKDAseShuKSsxKTpuLnNsaWNlKDAsZihuLHQrXCJcIikrMSk6bn0sJG4udHJ1bmM9ZnVuY3Rpb24obix0LHIpe3ImJk9yKG4sdCxyKSYmKHQ9bnVsbCk7dmFyIGU9VztpZihyPVMsbnVsbCE9dClpZihzZSh0KSl7dmFyIG89XCJzZXBhcmF0b3JcImluIHQ/dC5zZXBhcmF0b3I6byxlPVwibGVuZ3RoXCJpbiB0Pyt0Lmxlbmd0aHx8MDplO3I9XCJvbWlzc2lvblwiaW4gdD91KHQub21pc3Npb24pOnJ9ZWxzZSBlPSt0fHwwO1xuXG5pZihuPXUobiksZT49bi5sZW5ndGgpcmV0dXJuIG47aWYoZS09ci5sZW5ndGgsMT5lKXJldHVybiByO2lmKHQ9bi5zbGljZSgwLGUpLG51bGw9PW8pcmV0dXJuIHQrcjtpZihfZShvKSl7aWYobi5zbGljZShlKS5zZWFyY2gobykpe3ZhciBpLGY9bi5zbGljZSgwLGUpO2ZvcihvLmdsb2JhbHx8KG89TWUoby5zb3VyY2UsKGtuLmV4ZWMobyl8fFwiXCIpK1wiZ1wiKSksby5sYXN0SW5kZXg9MDtuPW8uZXhlYyhmKTspaT1uLmluZGV4O3Q9dC5zbGljZSgwLG51bGw9PWk/ZTppKX19ZWxzZSBuLmluZGV4T2YobyxlKSE9ZSYmKG89dC5sYXN0SW5kZXhPZihvKSwtMTxvJiYodD10LnNsaWNlKDAsbykpKTtyZXR1cm4gdCtyfSwkbi51bmVzY2FwZT1mdW5jdGlvbihuKXtyZXR1cm4obj11KG4pKSYmcG4udGVzdChuKT9uLnJlcGxhY2UobG4sZCk6bn0sJG4udW5pcXVlSWQ9ZnVuY3Rpb24obil7dmFyIHQ9KytKZTtyZXR1cm4gdShuKSt0fSwkbi53b3Jkcz1PZSwkbi5hbGw9WHIsJG4uYW55PWVlLCRuLmNvbnRhaW5zPVFyLFxuJG4uZGV0ZWN0PWFvLCRuLmZvbGRsPWdvLCRuLmZvbGRyPXlvLCRuLmhlYWQ9TXIsJG4uaW5jbHVkZT1Rciwkbi5pbmplY3Q9Z28sV2UoJG4sZnVuY3Rpb24oKXt2YXIgbj17fTtyZXR1cm4gaHQoJG4sZnVuY3Rpb24odCxyKXskbi5wcm90b3R5cGVbcl18fChuW3JdPXQpfSksbn0oKSxmYWxzZSksJG4uc2FtcGxlPXRlLCRuLnByb3RvdHlwZS5zYW1wbGU9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuX19jaGFpbl9ffHxudWxsIT1uP3RoaXMudGhydShmdW5jdGlvbih0KXtyZXR1cm4gdGUodCxuKX0pOnRlKHRoaXMudmFsdWUoKSl9LCRuLlZFUlNJT049YixLbihcImJpbmQgYmluZEtleSBjdXJyeSBjdXJyeVJpZ2h0IHBhcnRpYWwgcGFydGlhbFJpZ2h0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKG4peyRuW25dLnBsYWNlaG9sZGVyPSRufSksS24oW1wiZHJvcFdoaWxlXCIsXCJmaWx0ZXJcIixcIm1hcFwiLFwidGFrZVdoaWxlXCJdLGZ1bmN0aW9uKG4sdCl7dmFyIHI9dCE9JCxlPXQ9PU47Qm4ucHJvdG90eXBlW25dPWZ1bmN0aW9uKG4sdSl7XG52YXIgbz10aGlzLl9fZmlsdGVyZWRfXyxpPW8mJmU/bmV3IEJuKHRoaXMpOnRoaXMuY2xvbmUoKTtyZXR1cm4oaS5fX2l0ZXJhdGVlc19ffHwoaS5fX2l0ZXJhdGVlc19fPVtdKSkucHVzaCh7ZG9uZTpmYWxzZSxjb3VudDowLGluZGV4OjAsaXRlcmF0ZWU6ZHIobix1LDEpLGxpbWl0Oi0xLHR5cGU6dH0pLGkuX19maWx0ZXJlZF9fPW98fHIsaX19KSxLbihbXCJkcm9wXCIsXCJ0YWtlXCJdLGZ1bmN0aW9uKG4sdCl7dmFyIHI9bitcIldoaWxlXCI7Qm4ucHJvdG90eXBlW25dPWZ1bmN0aW9uKHIpe3ZhciBlPXRoaXMuX19maWx0ZXJlZF9fLHU9ZSYmIXQ/dGhpcy5kcm9wV2hpbGUoKTp0aGlzLmNsb25lKCk7cmV0dXJuIHI9bnVsbD09cj8xOmJ1KHV1KHIpfHwwLDApLGU/dD91Ll9fdGFrZUNvdW50X189eHUodS5fX3Rha2VDb3VudF9fLHIpOlByKHUuX19pdGVyYXRlZXNfXykubGltaXQ9cjoodS5fX3ZpZXdzX198fCh1Ll9fdmlld3NfXz1bXSkpLnB1c2goe3NpemU6cix0eXBlOm4rKDA+dS5fX2Rpcl9fP1wiUmlnaHRcIjpcIlwiKVxufSksdX0sQm4ucHJvdG90eXBlW24rXCJSaWdodFwiXT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5yZXZlcnNlKClbbl0odCkucmV2ZXJzZSgpfSxCbi5wcm90b3R5cGVbbitcIlJpZ2h0V2hpbGVcIl09ZnVuY3Rpb24obix0KXtyZXR1cm4gdGhpcy5yZXZlcnNlKClbcl0obix0KS5yZXZlcnNlKCl9fSksS24oW1wiZmlyc3RcIixcImxhc3RcIl0sZnVuY3Rpb24obix0KXt2YXIgcj1cInRha2VcIisodD9cIlJpZ2h0XCI6XCJcIik7Qm4ucHJvdG90eXBlW25dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbcl0oMSkudmFsdWUoKVswXX19KSxLbihbXCJpbml0aWFsXCIsXCJyZXN0XCJdLGZ1bmN0aW9uKG4sdCl7dmFyIHI9XCJkcm9wXCIrKHQ/XCJcIjpcIlJpZ2h0XCIpO0JuLnByb3RvdHlwZVtuXT1mdW5jdGlvbigpe3JldHVybiB0aGlzW3JdKDEpfX0pLEtuKFtcInBsdWNrXCIsXCJ3aGVyZVwiXSxmdW5jdGlvbihuLHQpe3ZhciByPXQ/XCJmaWx0ZXJcIjpcIm1hcFwiLGU9dD93dDpUZTtCbi5wcm90b3R5cGVbbl09ZnVuY3Rpb24obil7cmV0dXJuIHRoaXNbcl0oZShuKSk7XG5cbn19KSxCbi5wcm90b3R5cGUuY29tcGFjdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZpbHRlcihSZSl9LEJuLnByb3RvdHlwZS5yZWplY3Q9ZnVuY3Rpb24obix0KXtyZXR1cm4gbj1kcihuLHQsMSksdGhpcy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIW4odCl9KX0sQm4ucHJvdG90eXBlLnNsaWNlPWZ1bmN0aW9uKG4sdCl7bj1udWxsPT1uPzA6K258fDA7dmFyIHI9dGhpcztyZXR1cm4gMD5uP3I9dGhpcy50YWtlUmlnaHQoLW4pOm4mJihyPXRoaXMuZHJvcChuKSksdCE9PXcmJih0PSt0fHwwLHI9MD50P3IuZHJvcFJpZ2h0KC10KTpyLnRha2UodC1uKSkscn0sQm4ucHJvdG90eXBlLnRvQXJyYXk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kcm9wKDApfSxodChCbi5wcm90b3R5cGUsZnVuY3Rpb24obix0KXt2YXIgcj0kblt0XTtpZihyKXt2YXIgZT0vXig/OmZpbHRlcnxtYXB8cmVqZWN0KXxXaGlsZSQvLnRlc3QodCksdT0vXig/OmZpcnN0fGxhc3QpJC8udGVzdCh0KTskbi5wcm90b3R5cGVbdF09ZnVuY3Rpb24oKXtcbmZ1bmN0aW9uIHQobil7cmV0dXJuIG49W25dLGZ1LmFwcGx5KG4sbyksci5hcHBseSgkbixuKX12YXIgbz1hcmd1bWVudHMsaT10aGlzLl9fY2hhaW5fXyxmPXRoaXMuX193cmFwcGVkX18sYT0hIXRoaXMuX19hY3Rpb25zX18ubGVuZ3RoLGM9ZiBpbnN0YW5jZW9mIEJuLGw9b1swXSxzPWN8fFRvKGYpO3JldHVybiBzJiZlJiZ0eXBlb2YgbD09XCJmdW5jdGlvblwiJiYxIT1sLmxlbmd0aCYmKGM9cz1mYWxzZSksYz1jJiYhYSx1JiYhaT9jP24uY2FsbChmKTpyLmNhbGwoJG4sdGhpcy52YWx1ZSgpKTpzPyhmPW4uYXBwbHkoYz9mOm5ldyBCbih0aGlzKSxvKSx1fHwhYSYmIWYuX19hY3Rpb25zX198fChmLl9fYWN0aW9uc19ffHwoZi5fX2FjdGlvbnNfXz1bXSkpLnB1c2goe2Z1bmM6SnIsYXJnczpbdF0sdGhpc0FyZzokbn0pLG5ldyB6bihmLGkpKTp0aGlzLnRocnUodCl9fX0pLEtuKFwiY29uY2F0IGpvaW4gcG9wIHB1c2ggcmVwbGFjZSBzaGlmdCBzb3J0IHNwbGljZSBzcGxpdCB1bnNoaWZ0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKG4pe1xudmFyIHQ9KC9eKD86cmVwbGFjZXxzcGxpdCkkLy50ZXN0KG4pP1ZlOnFlKVtuXSxyPS9eKD86cHVzaHxzb3J0fHVuc2hpZnQpJC8udGVzdChuKT9cInRhcFwiOlwidGhydVwiLGU9L14oPzpqb2lufHBvcHxyZXBsYWNlfHNoaWZ0KSQvLnRlc3Qobik7JG4ucHJvdG90eXBlW25dPWZ1bmN0aW9uKCl7dmFyIG49YXJndW1lbnRzO3JldHVybiBlJiYhdGhpcy5fX2NoYWluX18/dC5hcHBseSh0aGlzLnZhbHVlKCksbik6dGhpc1tyXShmdW5jdGlvbihyKXtyZXR1cm4gdC5hcHBseShyLG4pfSl9fSksaHQoQm4ucHJvdG90eXBlLGZ1bmN0aW9uKG4sdCl7dmFyIHI9JG5bdF07aWYocil7dmFyIGU9ci5uYW1lOyhOdVtlXXx8KE51W2VdPVtdKSkucHVzaCh7bmFtZTp0LGZ1bmM6cn0pfX0pLE51W2NyKG51bGwsQSkubmFtZV09W3tuYW1lOlwid3JhcHBlclwiLGZ1bmM6bnVsbH1dLEJuLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3ZhciBuPXRoaXMuX19hY3Rpb25zX18sdD10aGlzLl9faXRlcmF0ZWVzX18scj10aGlzLl9fdmlld3NfXyxlPW5ldyBCbih0aGlzLl9fd3JhcHBlZF9fKTtcblxucmV0dXJuIGUuX19hY3Rpb25zX189bj9xbihuKTpudWxsLGUuX19kaXJfXz10aGlzLl9fZGlyX18sZS5fX2ZpbHRlcmVkX189dGhpcy5fX2ZpbHRlcmVkX18sZS5fX2l0ZXJhdGVlc19fPXQ/cW4odCk6bnVsbCxlLl9fdGFrZUNvdW50X189dGhpcy5fX3Rha2VDb3VudF9fLGUuX192aWV3c19fPXI/cW4ocik6bnVsbCxlfSxCbi5wcm90b3R5cGUucmV2ZXJzZT1mdW5jdGlvbigpe2lmKHRoaXMuX19maWx0ZXJlZF9fKXt2YXIgbj1uZXcgQm4odGhpcyk7bi5fX2Rpcl9fPS0xLG4uX19maWx0ZXJlZF9fPXRydWV9ZWxzZSBuPXRoaXMuY2xvbmUoKSxuLl9fZGlyX18qPS0xO3JldHVybiBufSxCbi5wcm90b3R5cGUudmFsdWU9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLl9fd3JhcHBlZF9fLnZhbHVlKCk7aWYoIVRvKG4pKXJldHVybiBGdChuLHRoaXMuX19hY3Rpb25zX18pO3ZhciB0LHI9dGhpcy5fX2Rpcl9fLGU9MD5yO3Q9bi5sZW5ndGg7Zm9yKHZhciB1PXRoaXMuX192aWV3c19fLG89MCxpPS0xLGY9dT91Lmxlbmd0aDowOysraTxmOyl7XG52YXIgYT11W2ldLGM9YS5zaXplO3N3aXRjaChhLnR5cGUpe2Nhc2VcImRyb3BcIjpvKz1jO2JyZWFrO2Nhc2VcImRyb3BSaWdodFwiOnQtPWM7YnJlYWs7Y2FzZVwidGFrZVwiOnQ9eHUodCxvK2MpO2JyZWFrO2Nhc2VcInRha2VSaWdodFwiOm89YnUobyx0LWMpfX10PXtzdGFydDpvLGVuZDp0fSx1PXQuc3RhcnQsbz10LmVuZCx0PW8tdSx1PWU/bzp1LTEsbz14dSh0LHRoaXMuX190YWtlQ291bnRfXyksZj0oaT10aGlzLl9faXRlcmF0ZWVzX18pP2kubGVuZ3RoOjAsYT0wLGM9W107bjpmb3IoO3QtLSYmYTxvOyl7Zm9yKHZhciB1PXUrcixsPS0xLHM9blt1XTsrK2w8Zjspe3ZhciBwPWlbbF0saD1wLml0ZXJhdGVlLF89cC50eXBlO2lmKF89PU4pe2lmKHAuZG9uZSYmKGU/dT5wLmluZGV4OnU8cC5pbmRleCkmJihwLmNvdW50PTAscC5kb25lPWZhbHNlKSxwLmluZGV4PXUsIShwLmRvbmV8fChfPXAubGltaXQscC5kb25lPS0xPF8/cC5jb3VudCsrPj1fOiFoKHMpKSkpY29udGludWUgbn1lbHNlIGlmKHA9aChzKSxcbl89PSQpcz1wO2Vsc2UgaWYoIXApe2lmKF89PUYpY29udGludWUgbjticmVhayBufX1jW2ErK109c31yZXR1cm4gY30sJG4ucHJvdG90eXBlLmNoYWluPWZ1bmN0aW9uKCl7cmV0dXJuIEdyKHRoaXMpfSwkbi5wcm90b3R5cGUuY29tbWl0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB6bih0aGlzLnZhbHVlKCksdGhpcy5fX2NoYWluX18pfSwkbi5wcm90b3R5cGUucGxhbnQ9ZnVuY3Rpb24obil7Zm9yKHZhciB0LHI9dGhpcztyIGluc3RhbmNlb2YgTG47KXt2YXIgZT1McihyKTt0P3UuX193cmFwcGVkX189ZTp0PWU7dmFyIHU9ZSxyPXIuX193cmFwcGVkX199cmV0dXJuIHUuX193cmFwcGVkX189bix0fSwkbi5wcm90b3R5cGUucmV2ZXJzZT1mdW5jdGlvbigpe3ZhciBuPXRoaXMuX193cmFwcGVkX187cmV0dXJuIG4gaW5zdGFuY2VvZiBCbj8odGhpcy5fX2FjdGlvbnNfXy5sZW5ndGgmJihuPW5ldyBCbih0aGlzKSksbmV3IHpuKG4ucmV2ZXJzZSgpLHRoaXMuX19jaGFpbl9fKSk6dGhpcy50aHJ1KGZ1bmN0aW9uKG4pe1xucmV0dXJuIG4ucmV2ZXJzZSgpfSl9LCRuLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlKCkrXCJcIn0sJG4ucHJvdG90eXBlLnJ1bj0kbi5wcm90b3R5cGUudG9KU09OPSRuLnByb3RvdHlwZS52YWx1ZU9mPSRuLnByb3RvdHlwZS52YWx1ZT1mdW5jdGlvbigpe3JldHVybiBGdCh0aGlzLl9fd3JhcHBlZF9fLHRoaXMuX19hY3Rpb25zX18pfSwkbi5wcm90b3R5cGUuY29sbGVjdD0kbi5wcm90b3R5cGUubWFwLCRuLnByb3RvdHlwZS5oZWFkPSRuLnByb3RvdHlwZS5maXJzdCwkbi5wcm90b3R5cGUuc2VsZWN0PSRuLnByb3RvdHlwZS5maWx0ZXIsJG4ucHJvdG90eXBlLnRhaWw9JG4ucHJvdG90eXBlLnJlc3QsJG59dmFyIHcsYj1cIjMuOC4wXCIseD0xLEE9MixqPTQsaz04LE89MTYsRT0zMixJPTY0LFI9MTI4LEM9MjU2LFc9MzAsUz1cIi4uLlwiLFQ9MTUwLFU9MTYsTj0wLEY9MSwkPTIsTD1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIix6PVwiX19sb2Rhc2hfcGxhY2Vob2xkZXJfX1wiLEI9XCJbb2JqZWN0IEFyZ3VtZW50c11cIixNPVwiW29iamVjdCBBcnJheV1cIixEPVwiW29iamVjdCBCb29sZWFuXVwiLFA9XCJbb2JqZWN0IERhdGVdXCIscT1cIltvYmplY3QgRXJyb3JdXCIsSz1cIltvYmplY3QgRnVuY3Rpb25dXCIsVj1cIltvYmplY3QgTnVtYmVyXVwiLFk9XCJbb2JqZWN0IE9iamVjdF1cIixaPVwiW29iamVjdCBSZWdFeHBdXCIsRz1cIltvYmplY3QgU3RyaW5nXVwiLEo9XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiLFg9XCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIixIPVwiW29iamVjdCBGbG9hdDY0QXJyYXldXCIsUT1cIltvYmplY3QgSW50OEFycmF5XVwiLG5uPVwiW29iamVjdCBJbnQxNkFycmF5XVwiLHRuPVwiW29iamVjdCBJbnQzMkFycmF5XVwiLHJuPVwiW29iamVjdCBVaW50OEFycmF5XVwiLGVuPVwiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIix1bj1cIltvYmplY3QgVWludDE2QXJyYXldXCIsb249XCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiLGZuPS9cXGJfX3BcXCs9Jyc7L2csYW49L1xcYihfX3BcXCs9KScnXFwrL2csY249LyhfX2VcXCguKj9cXCl8XFxiX190XFwpKVxcKycnOy9nLGxuPS8mKD86YW1wfGx0fGd0fHF1b3R8IzM5fCM5Nik7L2csc249L1smPD5cIidgXS9nLHBuPVJlZ0V4cChsbi5zb3VyY2UpLGhuPVJlZ0V4cChzbi5zb3VyY2UpLF9uPS88JS0oW1xcc1xcU10rPyklPi9nLHZuPS88JShbXFxzXFxTXSs/KSU+L2csZ249LzwlPShbXFxzXFxTXSs/KSU+L2cseW49L1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxuXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxkbj0vXlxcdyokLyxtbj0vW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxuXFxcXF18XFxcXC4pKj8pXFwyKVxcXS9nLHduPS9bLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZyxibj1SZWdFeHAod24uc291cmNlKSx4bj0vW1xcdTAzMDAtXFx1MDM2ZlxcdWZlMjAtXFx1ZmUyM10vZyxBbj0vXFxcXChcXFxcKT8vZyxqbj0vXFwkXFx7KFteXFxcXH1dKig/OlxcXFwuW15cXFxcfV0qKSopXFx9L2csa249L1xcdyokLyxPbj0vXjBbeFhdLyxFbj0vXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvLEluPS9bXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZVxceGRmLVxceGY2XFx4ZjgtXFx4ZmZdL2csUm49LygkXikvLENuPS9bJ1xcblxcclxcdTIwMjhcXHUyMDI5XFxcXF0vZyxXbj1SZWdFeHAoXCJbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSsoPz1bQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXVthLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmZdKyl8W0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0/W2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZl0rfFtBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdK3xbMC05XStcIixcImdcIiksU249XCIgXFx0XFx4MGJcXGZcXHhhMFxcdWZlZmZcXG5cXHJcXHUyMDI4XFx1MjAyOVxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcIixUbj1cIkFycmF5IEFycmF5QnVmZmVyIERhdGUgRXJyb3IgRmxvYXQzMkFycmF5IEZsb2F0NjRBcnJheSBGdW5jdGlvbiBJbnQ4QXJyYXkgSW50MTZBcnJheSBJbnQzMkFycmF5IE1hdGggTnVtYmVyIE9iamVjdCBSZWdFeHAgU2V0IFN0cmluZyBfIGNsZWFyVGltZW91dCBkb2N1bWVudCBpc0Zpbml0ZSBwYXJzZUludCBzZXRUaW1lb3V0IFR5cGVFcnJvciBVaW50OEFycmF5IFVpbnQ4Q2xhbXBlZEFycmF5IFVpbnQxNkFycmF5IFVpbnQzMkFycmF5IFdlYWtNYXAgd2luZG93XCIuc3BsaXQoXCIgXCIpLFVuPXt9O1xuXG5VbltYXT1VbltIXT1VbltRXT1Vbltubl09VW5bdG5dPVVuW3JuXT1Vbltlbl09VW5bdW5dPVVuW29uXT10cnVlLFVuW0JdPVVuW01dPVVuW0pdPVVuW0RdPVVuW1BdPVVuW3FdPVVuW0tdPVVuW1wiW29iamVjdCBNYXBdXCJdPVVuW1ZdPVVuW1ldPVVuW1pdPVVuW1wiW29iamVjdCBTZXRdXCJdPVVuW0ddPVVuW1wiW29iamVjdCBXZWFrTWFwXVwiXT1mYWxzZTt2YXIgTm49e307Tm5bQl09Tm5bTV09Tm5bSl09Tm5bRF09Tm5bUF09Tm5bWF09Tm5bSF09Tm5bUV09Tm5bbm5dPU5uW3RuXT1ObltWXT1ObltZXT1ObltaXT1ObltHXT1Obltybl09Tm5bZW5dPU5uW3VuXT1Obltvbl09dHJ1ZSxObltxXT1ObltLXT1ObltcIltvYmplY3QgTWFwXVwiXT1ObltcIltvYmplY3QgU2V0XVwiXT1ObltcIltvYmplY3QgV2Vha01hcF1cIl09ZmFsc2U7dmFyIEZuPXtsZWFkaW5nOmZhbHNlLG1heFdhaXQ6MCx0cmFpbGluZzpmYWxzZX0sJG49e1wiXFx4YzBcIjpcIkFcIixcIlxceGMxXCI6XCJBXCIsXCJcXHhjMlwiOlwiQVwiLFwiXFx4YzNcIjpcIkFcIixcIlxceGM0XCI6XCJBXCIsXCJcXHhjNVwiOlwiQVwiLFxuXCJcXHhlMFwiOlwiYVwiLFwiXFx4ZTFcIjpcImFcIixcIlxceGUyXCI6XCJhXCIsXCJcXHhlM1wiOlwiYVwiLFwiXFx4ZTRcIjpcImFcIixcIlxceGU1XCI6XCJhXCIsXCJcXHhjN1wiOlwiQ1wiLFwiXFx4ZTdcIjpcImNcIixcIlxceGQwXCI6XCJEXCIsXCJcXHhmMFwiOlwiZFwiLFwiXFx4YzhcIjpcIkVcIixcIlxceGM5XCI6XCJFXCIsXCJcXHhjYVwiOlwiRVwiLFwiXFx4Y2JcIjpcIkVcIixcIlxceGU4XCI6XCJlXCIsXCJcXHhlOVwiOlwiZVwiLFwiXFx4ZWFcIjpcImVcIixcIlxceGViXCI6XCJlXCIsXCJcXHhjY1wiOlwiSVwiLFwiXFx4Y2RcIjpcIklcIixcIlxceGNlXCI6XCJJXCIsXCJcXHhjZlwiOlwiSVwiLFwiXFx4ZWNcIjpcImlcIixcIlxceGVkXCI6XCJpXCIsXCJcXHhlZVwiOlwiaVwiLFwiXFx4ZWZcIjpcImlcIixcIlxceGQxXCI6XCJOXCIsXCJcXHhmMVwiOlwiblwiLFwiXFx4ZDJcIjpcIk9cIixcIlxceGQzXCI6XCJPXCIsXCJcXHhkNFwiOlwiT1wiLFwiXFx4ZDVcIjpcIk9cIixcIlxceGQ2XCI6XCJPXCIsXCJcXHhkOFwiOlwiT1wiLFwiXFx4ZjJcIjpcIm9cIixcIlxceGYzXCI6XCJvXCIsXCJcXHhmNFwiOlwib1wiLFwiXFx4ZjVcIjpcIm9cIixcIlxceGY2XCI6XCJvXCIsXCJcXHhmOFwiOlwib1wiLFwiXFx4ZDlcIjpcIlVcIixcIlxceGRhXCI6XCJVXCIsXCJcXHhkYlwiOlwiVVwiLFwiXFx4ZGNcIjpcIlVcIixcIlxceGY5XCI6XCJ1XCIsXCJcXHhmYVwiOlwidVwiLFxuXCJcXHhmYlwiOlwidVwiLFwiXFx4ZmNcIjpcInVcIixcIlxceGRkXCI6XCJZXCIsXCJcXHhmZFwiOlwieVwiLFwiXFx4ZmZcIjpcInlcIixcIlxceGM2XCI6XCJBZVwiLFwiXFx4ZTZcIjpcImFlXCIsXCJcXHhkZVwiOlwiVGhcIixcIlxceGZlXCI6XCJ0aFwiLFwiXFx4ZGZcIjpcInNzXCJ9LExuPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiMzOTtcIixcImBcIjpcIiYjOTY7XCJ9LHpuPXtcIiZhbXA7XCI6XCImXCIsXCImbHQ7XCI6XCI8XCIsXCImZ3Q7XCI6XCI+XCIsXCImcXVvdDtcIjonXCInLFwiJiMzOTtcIjpcIidcIixcIiYjOTY7XCI6XCJgXCJ9LEJuPXtcImZ1bmN0aW9uXCI6dHJ1ZSxvYmplY3Q6dHJ1ZX0sTW49e1wiXFxcXFwiOlwiXFxcXFwiLFwiJ1wiOlwiJ1wiLFwiXFxuXCI6XCJuXCIsXCJcXHJcIjpcInJcIixcIlxcdTIwMjhcIjpcInUyMDI4XCIsXCJcXHUyMDI5XCI6XCJ1MjAyOVwifSxEbj1Cblt0eXBlb2YgZXhwb3J0c10mJmV4cG9ydHMmJiFleHBvcnRzLm5vZGVUeXBlJiZleHBvcnRzLFBuPUJuW3R5cGVvZiBtb2R1bGVdJiZtb2R1bGUmJiFtb2R1bGUubm9kZVR5cGUmJm1vZHVsZSxxbj1Cblt0eXBlb2Ygc2VsZl0mJnNlbGYmJnNlbGYuT2JqZWN0JiZzZWxmLEtuPUJuW3R5cGVvZiB3aW5kb3ddJiZ3aW5kb3cmJndpbmRvdy5PYmplY3QmJndpbmRvdyxWbj1QbiYmUG4uZXhwb3J0cz09PURuJiZEbixZbj1EbiYmUG4mJnR5cGVvZiBnbG9iYWw9PVwib2JqZWN0XCImJmdsb2JhbCYmZ2xvYmFsLk9iamVjdCYmZ2xvYmFsfHxLbiE9PSh0aGlzJiZ0aGlzLndpbmRvdykmJktufHxxbnx8dGhpcyxabj1tKCk7XG5cbnR5cGVvZiBkZWZpbmU9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGRlZmluZS5hbWQ9PVwib2JqZWN0XCImJmRlZmluZS5hbWQ/KFluLl89Wm4sIGRlZmluZShmdW5jdGlvbigpe3JldHVybiBabn0pKTpEbiYmUG4/Vm4/KFBuLmV4cG9ydHM9Wm4pLl89Wm46RG4uXz1abjpZbi5fPVpufSkuY2FsbCh0aGlzKTsiLCJ2YXIgVXRpbHMgPSB7XG5cbiAgZXh0ZW5kOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgYXJndW1lbnRzWzBdW2pdID0gYXJndW1lbnRzW2ldW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gIH0sXG5cbiAgZGlzdGFuY2U6IGZ1bmN0aW9uKGEsIGIpIHtcblxuICAgIHZhciBkeCA9IGEueCAtIGIueDtcbiAgICB2YXIgZHkgPSBhLnkgLSBiLnk7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICB9LFxuXG4gIHhuZWFyZXN0OiBmdW5jdGlvbihmcm9tLCBlbnRpdGllcykge1xuXG4gICAgdmFyIG1pbiA9IC0xO1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgdG8gPSBlbnRpdGllc1tpXTtcblxuICAgICAgaWYgKGZyb20gPT09IHRvKSBjb250aW51ZTtcblxuICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShmcm9tLCB0byk7XG5cbiAgICAgIGlmIChkaXN0YW5jZSA8IG1pbiB8fCBtaW4gPCAwKSB7XG4gICAgICAgIG1pbiA9IGRpc3RhbmNlO1xuICAgICAgICByZXN1bHQgPSB0bztcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgY2lyY1dyYXA6IGZ1bmN0aW9uKHZhbCkge1xuXG4gICAgcmV0dXJuIHRoaXMud3JhcCh2YWwsIDAsIE1hdGguUEkgKiAyKTtcblxuICB9LFxuXG4gIHdyYXA6IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xuXG4gICAgaWYgKHZhbHVlIDwgbWluKSByZXR1cm4gbWF4ICsgKHZhbHVlICUgbWF4KTtcbiAgICBpZiAodmFsdWUgPj0gbWF4KSByZXR1cm4gdmFsdWUgJSBtYXg7XG4gICAgcmV0dXJuIHZhbHVlO1xuXG4gIH0sXG5cbiAgd3JhcFRvOiBmdW5jdGlvbih2YWx1ZSwgdGFyZ2V0LCBtYXgsIHN0ZXApIHtcblxuICAgIGlmICh2YWx1ZSA9PT0gdGFyZ2V0KSByZXR1cm4gdGFyZ2V0O1xuXG4gICAgdmFyIHJlc3VsdCA9IHZhbHVlO1xuXG4gICAgdmFyIGQgPSB0aGlzLndyYXBwZWREaXN0YW5jZSh2YWx1ZSwgdGFyZ2V0LCBtYXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGQpIDwgc3RlcCkgcmV0dXJuIHRhcmdldDtcblxuICAgIHJlc3VsdCArPSAoZCA8IDAgPyAtMSA6IDEpICogc3RlcDtcblxuICAgIGlmIChyZXN1bHQgPiBtYXgpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCAtIG1heDtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA8IDApIHtcbiAgICAgIHJlc3VsdCA9IG1heCArIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuXG4gIH0sXG5cbiAgY2lyY1dyYXBUbzogZnVuY3Rpb24odmFsdWUsIHRhcmdldCwgc3RlcCkge1xuXG4gICAgcmV0dXJuIHRoaXMud3JhcFRvKHZhbHVlLCB0YXJnZXQsIE1hdGguUEkgKiAyLCBzdGVwKTtcblxuICB9LFxuXG4gIGNpcmNEaXN0YW5jZTogZnVuY3Rpb24oYSwgYikge1xuXG4gICAgcmV0dXJuIHRoaXMud3JhcHBlZERpc3RhbmNlKGEsIGIsIE1hdGguUEkgKiAyKTtcblxuICB9LFxuXG4gIHdyYXBwZWREaXN0YW5jZTogZnVuY3Rpb24oYSwgYiwgbWF4KSB7XG5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgIHZhciBsID0gLWEgLSBtYXggKyBiO1xuICAgICAgdmFyIHIgPSBiIC0gYTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGwgPSBiIC0gYTtcbiAgICAgIHZhciByID0gbWF4IC0gYSArIGI7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGwpID4gTWF0aC5hYnMocikpIHJldHVybiByO1xuICAgIGVsc2UgcmV0dXJuIGw7XG5cbiAgfSxcblxuICByYW5kb206IGZ1bmN0aW9uKGEsIGIpIHtcblxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCk7XG5cbiAgICB9IGVsc2UgaWYgKGIgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihhICsgTWF0aC5yYW5kb20oKSAqIE1hdGguYWJzKGIgLSBhICsgMSkpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIGFbKGEubGVuZ3RoICsgMSkgKiBNYXRoLnJhbmRvbSgpIC0gMSB8IDBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhW3RoaXMucmFuZG9tKE9iamVjdC5rZXlzKGEpKV07XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfSxcblxuICBzaW5jb3M6IGZ1bmN0aW9uKGFuZ2xlLCByYWRpdXMpIHtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByYWRpdXMgPSBhbmdsZTtcbiAgICAgIGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDYuMjg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAgIHk6IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c1xuICAgIH07XG4gIH0sXG5cbiAgZ3JvdW5kOiBmdW5jdGlvbihudW0sIHRocmVzaG9sZCkge1xuXG4gICAgcmV0dXJuIChudW0gLyB0aHJlc2hvbGQgfCAwKSAqIHRocmVzaG9sZDtcblxuICB9LFxuXG4gIHNodWZmbGU6IGZ1bmN0aW9uKG8pIHtcbiAgICBmb3IgKHZhciBqLCB4LCBpID0gby5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4KTtcbiAgICByZXR1cm4gbztcbiAgfSxcblxuICBzaWduOiBmdW5jdGlvbih2YWx1ZSkge1xuXG4gICAgcmV0dXJuIHZhbHVlIC8gTWF0aC5hYnModmFsdWUpO1xuXG4gIH0sXG5cbiAgbW92ZVRvOiBmdW5jdGlvbih2YWx1ZSwgdGFyZ2V0LCBzdGVwKSB7XG5cbiAgICBpZiAodmFsdWUgPCB0YXJnZXQpIHtcbiAgICAgIHZhbHVlICs9IHN0ZXA7XG4gICAgICBpZiAodmFsdWUgPiB0YXJnZXQpIHZhbHVlID0gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA+IHRhcmdldCkge1xuICAgICAgdmFsdWUgLT0gc3RlcDtcbiAgICAgIGlmICh2YWx1ZSA8IHRhcmdldCkgdmFsdWUgPSB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuXG4gIH0sXG5cbiAgaW50ZXJ2YWw6IGZ1bmN0aW9uKGtleSwgaW50ZXJ2YWwsIG9iamVjdCkge1xuXG4gICAgaWYgKCFvYmplY3QudGhyb3R0bGVzKSBvYmplY3QudGhyb3R0bGVzID0ge307XG4gICAgaWYgKCFvYmplY3QudGhyb3R0bGVzW2tleV0pIG9iamVjdC50aHJvdHRsZXNba2V5XSA9IG9iamVjdC5saWZldGltZSAtIGludGVydmFsO1xuXG4gICAgaWYgKG9iamVjdC5saWZldGltZSAtIG9iamVjdC50aHJvdHRsZXNba2V5XSA+PSBpbnRlcnZhbCkge1xuICAgICAgb2JqZWN0LnRocm90dGxlc1trZXldID0gb2JqZWN0LmxpZmV0aW1lO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcblxuICB9LFxuXG4gIG1vdmVJbkRpcmVjdGlvbjogZnVuY3Rpb24oZGlyZWN0aW9uLCB2YWx1ZSkge1xuXG4gICAgdGhpcy54ICs9IE1hdGguY29zKGRpcmVjdGlvbikgKiB2YWx1ZTtcbiAgICB0aGlzLnkgKz0gTWF0aC5zaW4oZGlyZWN0aW9uKSAqIHZhbHVlO1xuXG4gIH1cblxuXG5cbn07XG5cblxuXy5kZWZhdWx0cyhVdGlscywgXyk7IiwiLyogZmlsZTogbGljZW5zZS50eHQgKi9cblxuLyogICAgIFxuXG4gIFBsYXlncm91bmRKUyByNFxuICBcbiAgaHR0cDovL3BsYXlncm91bmRqcy5jb21cbiAgXG4gIChjKSAyMDEyLTIwMTUgaHR0cDovL3Jlem9uZXIubmV0XG4gIFxuICBQbGF5Z3JvdW5kIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4gIGxhdGVzdCBtYWpvciBjaGFuZ2VzOlxuXG4gIHI0XG5cbiAgKyB0d2VlbnMgd2l0aCBldmVudHNcbiAgKyBjb250ZXh0IGFyZ3VtZW50IGZvciBldmVudHNcblxuICByM1xuXG4gICsgcG9pbnRlciA9IG1vdXNlICsgdG91Y2hcblxuKi9cblxuXG4vKiBmaWxlOiBzcmMvbGliL1doYW1teS5qcyAqL1xuXG4vKiB3aGFtbXkgLSBodHRwczovL2dpdGh1Yi5jb20vYW50aW1hdHRlcjE1L3doYW1teSAqL1xuXG53aW5kb3cuV2hhbW15ID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGgoYSwgYikge1xuICAgIGZvciAodmFyIGMgPSByKGEpLCBjID0gW3tcbiAgICAgICAgaWQ6IDQ0MDc4Njg1MSxcbiAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICBkYXRhOiAxLFxuICAgICAgICAgIGlkOiAxNzAzMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGF0YTogMSxcbiAgICAgICAgICBpZDogMTcxNDNcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRhdGE6IDQsXG4gICAgICAgICAgaWQ6IDE3MTM4XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkYXRhOiA4LFxuICAgICAgICAgIGlkOiAxNzEzOVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGF0YTogXCJ3ZWJtXCIsXG4gICAgICAgICAgaWQ6IDE3MDI2XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkYXRhOiAyLFxuICAgICAgICAgIGlkOiAxNzAzMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGF0YTogMixcbiAgICAgICAgICBpZDogMTcwMjlcbiAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDQwODEyNTU0MyxcbiAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICBpZDogMzU3MTQ5MDMwLFxuICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICBkYXRhOiAxRTYsXG4gICAgICAgICAgICBpZDogMjgwNzcyOVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGE6IFwid2hhbW15XCIsXG4gICAgICAgICAgICBpZDogMTk4NDBcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhOiBcIndoYW1teVwiLFxuICAgICAgICAgICAgaWQ6IDIyMzM3XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YTogcyhjLmR1cmF0aW9uKSxcbiAgICAgICAgICAgIGlkOiAxNzU0NVxuICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogMzc0NjQ4NDI3LFxuICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICBpZDogMTc0LFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGF0YTogMSxcbiAgICAgICAgICAgICAgaWQ6IDIxNVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkYXRhOiAxLFxuICAgICAgICAgICAgICBpZDogMjU1NDFcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGF0YTogMCxcbiAgICAgICAgICAgICAgaWQ6IDE1NlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkYXRhOiBcInVuZFwiLFxuICAgICAgICAgICAgICBpZDogMjI3NDcxNlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkYXRhOiBcIlZfVlA4XCIsXG4gICAgICAgICAgICAgIGlkOiAxMzRcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGF0YTogXCJWUDhcIixcbiAgICAgICAgICAgICAgaWQ6IDI0NTkyNzJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGF0YTogMSxcbiAgICAgICAgICAgICAgaWQ6IDEzMVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBpZDogMjI0LFxuICAgICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICAgIGRhdGE6IGMud2lkdGgsXG4gICAgICAgICAgICAgICAgaWQ6IDE3NlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGF0YTogYy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgaWQ6IDE4NlxuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgICAgfV0sIGUgPSAwLCBkID0gMDsgZSA8IGEubGVuZ3RoOykge1xuICAgICAgdmFyIGcgPSBbXSxcbiAgICAgICAgZiA9IDA7XG4gICAgICBkbyBnLnB1c2goYVtlXSksIGYgKz0gYVtlXS5kdXJhdGlvbiwgZSsrOyB3aGlsZSAoZSA8IGEubGVuZ3RoICYmIDNFNCA+IGYpO1xuICAgICAgdmFyIGggPSAwLFxuICAgICAgICBnID0ge1xuICAgICAgICAgIGlkOiA1MjQ1MzEzMTcsXG4gICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgIGRhdGE6IGQsXG4gICAgICAgICAgICBpZDogMjMxXG4gICAgICAgICAgfV0uY29uY2F0KGcubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgIHZhciBiID0gdCh7XG4gICAgICAgICAgICAgIGRpc2NhcmRhYmxlOiAwLFxuICAgICAgICAgICAgICBmcmFtZTogYS5kYXRhLnNsaWNlKDQpLFxuICAgICAgICAgICAgICBpbnZpc2libGU6IDAsXG4gICAgICAgICAgICAgIGtleWZyYW1lOiAxLFxuICAgICAgICAgICAgICBsYWNpbmc6IDAsXG4gICAgICAgICAgICAgIHRyYWNrTnVtOiAxLFxuICAgICAgICAgICAgICB0aW1lY29kZTogTWF0aC5yb3VuZChoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBoICs9IGEuZHVyYXRpb247XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRhOiBiLFxuICAgICAgICAgICAgICBpZDogMTYzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpXG4gICAgICAgIH07XG4gICAgICBjWzFdLmRhdGEucHVzaChnKTtcbiAgICAgIGQgKz0gZlxuICAgIH1cbiAgICByZXR1cm4gbShjLCBiKVxuICB9XG5cbiAgZnVuY3Rpb24gcihhKSB7XG4gICAgZm9yICh2YXIgYiA9IGFbMF0ud2lkdGgsIGMgPSBhWzBdLmhlaWdodCwgZSA9IGFbMF0uZHVyYXRpb24sXG4gICAgICAgIGQgPSAxOyBkIDwgYS5sZW5ndGg7IGQrKykge1xuICAgICAgaWYgKGFbZF0ud2lkdGggIT0gYikgdGhyb3cgXCJGcmFtZSBcIiArIChkICsgMSkgKyBcIiBoYXMgYSBkaWZmZXJlbnQgd2lkdGhcIjtcbiAgICAgIGlmIChhW2RdLmhlaWdodCAhPSBjKSB0aHJvdyBcIkZyYW1lIFwiICsgKGQgKyAxKSArIFwiIGhhcyBhIGRpZmZlcmVudCBoZWlnaHRcIjtcbiAgICAgIGlmICgwID4gYVtkXS5kdXJhdGlvbiB8fCAzMjc2NyA8IGFbZF0uZHVyYXRpb24pIHRocm93IFwiRnJhbWUgXCIgKyAoZCArIDEpICsgXCIgaGFzIGEgd2VpcmQgZHVyYXRpb24gKG11c3QgYmUgYmV0d2VlbiAwIGFuZCAzMjc2NylcIjtcbiAgICAgIGUgKz0gYVtkXS5kdXJhdGlvblxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZHVyYXRpb246IGUsXG4gICAgICB3aWR0aDogYixcbiAgICAgIGhlaWdodDogY1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHUoYSkge1xuICAgIGZvciAodmFyIGIgPSBbXTsgMCA8IGE7KSBiLnB1c2goYSAmIDI1NSksIGEgPj49IDg7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGIucmV2ZXJzZSgpKVxuICB9XG5cbiAgZnVuY3Rpb24gbihhKSB7XG4gICAgdmFyIGIgPSBbXTtcbiAgICBhID0gKGEubGVuZ3RoICUgOCA/IEFycmF5KDkgLSBhLmxlbmd0aCAlIDgpLmpvaW4oXCIwXCIpIDogXCJcIikgKyBhO1xuICAgIGZvciAodmFyIGMgPSAwOyBjIDwgYS5sZW5ndGg7IGMgKz0gOCkgYi5wdXNoKHBhcnNlSW50KGEuc3Vic3RyKGMsXG4gICAgICA4KSwgMikpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShiKVxuICB9XG5cbiAgZnVuY3Rpb24gbShhLCBiKSB7XG4gICAgZm9yICh2YXIgYyA9IFtdLCBlID0gMDsgZSA8IGEubGVuZ3RoOyBlKyspIHtcbiAgICAgIHZhciBkID0gYVtlXS5kYXRhO1xuICAgICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZCAmJiAoZCA9IG0oZCwgYikpO1xuICAgICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgZCAmJiAoZCA9IG4oZC50b1N0cmluZygyKSkpO1xuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGQpIHtcbiAgICAgICAgZm9yICh2YXIgZyA9IG5ldyBVaW50OEFycmF5KGQubGVuZ3RoKSwgZiA9IDA7IGYgPCBkLmxlbmd0aDsgZisrKSBnW2ZdID0gZC5jaGFyQ29kZUF0KGYpO1xuICAgICAgICBkID0gZ1xuICAgICAgfVxuICAgICAgZiA9IGQuc2l6ZSB8fCBkLmJ5dGVMZW5ndGggfHwgZC5sZW5ndGg7XG4gICAgICBnID0gTWF0aC5jZWlsKE1hdGguY2VpbChNYXRoLmxvZyhmKSAvIE1hdGgubG9nKDIpKSAvIDgpO1xuICAgICAgZiA9IGYudG9TdHJpbmcoMik7XG4gICAgICBmID0gQXJyYXkoNyAqIGcgKyA4IC0gZi5sZW5ndGgpLmpvaW4oXCIwXCIpICsgZjtcbiAgICAgIGcgPSBBcnJheShnKS5qb2luKFwiMFwiKSArIFwiMVwiICsgZjtcbiAgICAgIGMucHVzaCh1KGFbZV0uaWQpKTtcbiAgICAgIGMucHVzaChuKGcpKTtcbiAgICAgIGMucHVzaChkKVxuICAgIH1cbiAgICByZXR1cm4gYiA/IChjID0gcChjKSwgbmV3IFVpbnQ4QXJyYXkoYykpIDpcbiAgICAgIG5ldyBCbG9iKGMsIHtcbiAgICAgICAgdHlwZTogXCJ2aWRlby93ZWJtXCJcbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwKGEsIGIpIHtcbiAgICBudWxsID09IGIgJiYgKGIgPSBbXSk7XG4gICAgZm9yICh2YXIgYyA9IDA7IGMgPCBhLmxlbmd0aDsgYysrKSBcIm9iamVjdFwiID09IHR5cGVvZiBhW2NdID8gcChhW2NdLCBiKSA6IGIucHVzaChhW2NdKTtcbiAgICByZXR1cm4gYlxuICB9XG5cbiAgZnVuY3Rpb24gdChhKSB7XG4gICAgdmFyIGIgPSAwO1xuICAgIGEua2V5ZnJhbWUgJiYgKGIgfD0gMTI4KTtcbiAgICBhLmludmlzaWJsZSAmJiAoYiB8PSA4KTtcbiAgICBhLmxhY2luZyAmJiAoYiB8PSBhLmxhY2luZyA8PCAxKTtcbiAgICBhLmRpc2NhcmRhYmxlICYmIChiIHw9IDEpO1xuICAgIGlmICgxMjcgPCBhLnRyYWNrTnVtKSB0aHJvdyBcIlRyYWNrTnVtYmVyID4gMTI3IG5vdCBzdXBwb3J0ZWRcIjtcbiAgICByZXR1cm4gW2EudHJhY2tOdW0gfCAxMjgsIGEudGltZWNvZGUgPj4gOCwgYS50aW1lY29kZSAmIDI1NSwgYl0ubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpXG4gICAgfSkuam9pbihcIlwiKSArIGEuZnJhbWVcbiAgfVxuXG4gIGZ1bmN0aW9uIHEoYSkge1xuICAgIGZvciAodmFyIGIgPSBhLlJJRkZbMF0uV0VCUFswXSwgYyA9IGIuaW5kZXhPZihcIlxcdTAwOWRcXHUwMDAxKlwiKSxcbiAgICAgICAgZSA9IDAsIGQgPSBbXTsgNCA+IGU7IGUrKykgZFtlXSA9IGIuY2hhckNvZGVBdChjICsgMyArIGUpO1xuICAgIGUgPSBkWzFdIDw8IDggfCBkWzBdO1xuICAgIGMgPSBlICYgMTYzODM7XG4gICAgZSA9IGRbM10gPDwgOCB8IGRbMl07XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBjLFxuICAgICAgaGVpZ2h0OiBlICYgMTYzODMsXG4gICAgICBkYXRhOiBiLFxuICAgICAgcmlmZjogYVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGsoYSkge1xuICAgIGZvciAodmFyIGIgPSAwLCBjID0ge307IGIgPCBhLmxlbmd0aDspIHtcbiAgICAgIHZhciBlID0gYS5zdWJzdHIoYiwgNCksXG4gICAgICAgIGQgPSBwYXJzZUludChhLnN1YnN0cihiICsgNCwgNCkuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICBhID0gYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDIpO1xuICAgICAgICAgIHJldHVybiBBcnJheSg4IC0gYS5sZW5ndGggKyAxKS5qb2luKFwiMFwiKSArIGFcbiAgICAgICAgfSkuam9pbihcIlwiKSwgMiksXG4gICAgICAgIGcgPSBhLnN1YnN0cihiICsgNCArIDQsIGQpLFxuICAgICAgICBiID0gYiArICg4ICsgZCk7XG4gICAgICBjW2VdID0gY1tlXSB8fCBbXTtcbiAgICAgIFwiUklGRlwiID09IGUgfHwgXCJMSVNUXCIgPT0gZSA/IGNbZV0ucHVzaChrKGcpKSA6IGNbZV0ucHVzaChnKVxuICAgIH1cbiAgICByZXR1cm4gY1xuICB9XG5cbiAgZnVuY3Rpb24gcyhhKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwobmV3IFVpbnQ4QXJyYXkoKG5ldyBGbG9hdDY0QXJyYXkoW2FdKSkuYnVmZmVyKSxcbiAgICAgIDApLm1hcChmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShhKVxuICAgIH0pLnJldmVyc2UoKS5qb2luKFwiXCIpXG4gIH1cblxuICBmdW5jdGlvbiBsKGEsIGIpIHtcbiAgICB0aGlzLmZyYW1lcyA9IFtdO1xuICAgIHRoaXMuZHVyYXRpb24gPSAxRTMgLyBhO1xuICAgIHRoaXMucXVhbGl0eSA9IGIgfHwgLjhcbiAgfVxuICBsLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGIgJiYgdGhpcy5kdXJhdGlvbikgdGhyb3cgXCJ5b3UgY2FuJ3QgcGFzcyBhIGR1cmF0aW9uIGlmIHRoZSBmcHMgaXMgc2V0XCI7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGIgJiYgIXRoaXMuZHVyYXRpb24pIHRocm93IFwiaWYgeW91IGRvbid0IGhhdmUgdGhlIGZwcyBzZXQsIHlvdSBuZWQgdG8gaGF2ZSBkdXJhdGlvbnMgaGVyZS5cIjtcbiAgICBcImNhbnZhc1wiIGluIGEgJiYgKGEgPSBhLmNhbnZhcyk7XG4gICAgaWYgKFwidG9EYXRhVVJMXCIgaW4gYSkgYSA9IGEudG9EYXRhVVJMKFwiaW1hZ2Uvd2VicFwiLCB0aGlzLnF1YWxpdHkpO1xuICAgIGVsc2UgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIGEpIHRocm93IFwiZnJhbWUgbXVzdCBiZSBhIGEgSFRNTENhbnZhc0VsZW1lbnQsIGEgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIG9yIGEgRGF0YVVSSSBmb3JtYXR0ZWQgc3RyaW5nXCI7XG4gICAgaWYgKCEvXmRhdGE6aW1hZ2VcXC93ZWJwO2Jhc2U2NCwvaWcudGVzdChhKSkgdGhyb3cgXCJJbnB1dCBtdXN0IGJlIGZvcm1hdHRlZCBwcm9wZXJseSBhcyBhIGJhc2U2NCBlbmNvZGVkIERhdGFVUkkgb2YgdHlwZSBpbWFnZS93ZWJwXCI7XG4gICAgdGhpcy5mcmFtZXMucHVzaCh7XG4gICAgICBpbWFnZTogYSxcbiAgICAgIGR1cmF0aW9uOiBiIHx8IHRoaXMuZHVyYXRpb25cbiAgICB9KVxuICB9O1xuICBsLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBuZXcgaCh0aGlzLmZyYW1lcy5tYXAoZnVuY3Rpb24oYSkge1xuICAgICAgdmFyIGMgPSBxKGsoYXRvYihhLmltYWdlLnNsaWNlKDIzKSkpKTtcbiAgICAgIGMuZHVyYXRpb24gPSBhLmR1cmF0aW9uO1xuICAgICAgcmV0dXJuIGNcbiAgICB9KSwgYSlcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBWaWRlbzogbCxcbiAgICBmcm9tSW1hZ2VBcnJheTogZnVuY3Rpb24oYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGgoYS5tYXAoZnVuY3Rpb24oYSkge1xuICAgICAgICBhID0gcShrKGF0b2IoYS5zbGljZSgyMykpKSk7XG4gICAgICAgIGEuZHVyYXRpb24gPSAxRTMgLyBiO1xuICAgICAgICByZXR1cm4gYVxuICAgICAgfSksIGMpXG4gICAgfSxcbiAgICB0b1dlYk06IGhcbiAgfVxufSgpO1xuXG4vKiBmaWxlOiBzcmMvbGliL0Vhc2UuanMgKi9cblxuLyogICAgIFxuXG4gIEVhc2UgMS4wXG4gIFxuICBodHRwOi8vY2FudmFzcXVlcnkuY29tXG4gIFxuICAoYykgMjAxNSBieSBSZXpvbmVyIC0gaHR0cDovL3Jlem9uZXIubmV0XG5cbiAgYGVhc2VgIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4qL1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgdmFyIGVhc2UgPSBmdW5jdGlvbihwcm9ncmVzcywgZWFzaW5nKSB7XG5cbiAgICBpZiAodHlwZW9mIGVhc2UuY2FjaGVbZWFzaW5nXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgIHJldHVybiBlYXNlLmNhY2hlW2Vhc2luZ10ocHJvZ3Jlc3MpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgcmV0dXJuIGVhc2Uuc3BsaW5lKHByb2dyZXNzLCBlYXNpbmcgfHwgZWFzZS5kZWZhdWx0RWFzaW5nKTtcblxuICAgIH1cblxuICB9O1xuXG4gIHZhciBleHRlbmQgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgYXJndW1lbnRzWzBdW2pdID0gYXJndW1lbnRzW2ldW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gIH07XG5cbiAgZXh0ZW5kKGVhc2UsIHtcblxuICAgIGRlZmF1bHRFYXNpbmc6IFwiMDE2XCIsXG5cbiAgICBjYWNoZToge1xuXG4gICAgICBsaW5lYXI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHRcbiAgICAgIH0sXG5cbiAgICAgIGluUXVhZDogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdCAqIHRcbiAgICAgIH0sXG4gICAgICBvdXRRdWFkOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0ICogKDIgLSB0KVxuICAgICAgfSxcbiAgICAgIGluT3V0UXVhZDogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdCA8IC41ID8gMiAqIHQgKiB0IDogLTEgKyAoNCAtIDIgKiB0KSAqIHRcbiAgICAgIH0sXG4gICAgICBpbkN1YmljOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0ICogdCAqIHRcbiAgICAgIH0sXG4gICAgICBvdXRDdWJpYzogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gKC0tdCkgKiB0ICogdCArIDFcbiAgICAgIH0sXG4gICAgICBpbk91dEN1YmljOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0IDwgLjUgPyA0ICogdCAqIHQgKiB0IDogKHQgLSAxKSAqICgyICogdCAtIDIpICogKDIgKiB0IC0gMikgKyAxXG4gICAgICB9LFxuICAgICAgaW5RdWFydDogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdCAqIHQgKiB0ICogdFxuICAgICAgfSxcbiAgICAgIG91dFF1YXJ0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiAxIC0gKC0tdCkgKiB0ICogdCAqIHRcbiAgICAgIH0sXG4gICAgICBpbk91dFF1YXJ0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0IDwgLjUgPyA4ICogdCAqIHQgKiB0ICogdCA6IDEgLSA4ICogKC0tdCkgKiB0ICogdCAqIHRcbiAgICAgIH0sXG4gICAgICBpblF1aW50OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdFxuICAgICAgfSxcbiAgICAgIG91dFF1aW50OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiAxICsgKC0tdCkgKiB0ICogdCAqIHQgKiB0XG4gICAgICB9LFxuICAgICAgaW5PdXRRdWludDogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdCA8IC41ID8gMTYgKiB0ICogdCAqIHQgKiB0ICogdCA6IDEgKyAxNiAqICgtLXQpICogdCAqIHQgKiB0ICogdFxuICAgICAgfSxcbiAgICAgIGluU2luZTogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gLTEgKiBNYXRoLmNvcyh0IC8gMSAqIChNYXRoLlBJICogMC41KSkgKyAxO1xuICAgICAgfSxcbiAgICAgIG91dFNpbmU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc2luKHQgLyAxICogKE1hdGguUEkgKiAwLjUpKTtcbiAgICAgIH0sXG4gICAgICBpbk91dFNpbmU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIC0xIC8gMiAqIChNYXRoLmNvcyhNYXRoLlBJICogdCkgLSAxKTtcbiAgICAgIH0sXG4gICAgICBpbkV4cG86IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuICh0ID09IDApID8gMCA6IE1hdGgucG93KDIsIDEwICogKHQgLSAxKSk7XG4gICAgICB9LFxuICAgICAgb3V0RXhwbzogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gKHQgPT0gMSkgPyAxIDogKC1NYXRoLnBvdygyLCAtMTAgKiB0KSArIDEpO1xuICAgICAgfSxcbiAgICAgIGluT3V0RXhwbzogZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKHQgPT0gMSkgcmV0dXJuIDE7XG4gICAgICAgIGlmICgodCAvPSAxIC8gMikgPCAxKSByZXR1cm4gMSAvIDIgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpO1xuICAgICAgICByZXR1cm4gMSAvIDIgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKTtcbiAgICAgIH0sXG4gICAgICBpbkNpcmM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIC0xICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSk7XG4gICAgICB9LFxuICAgICAgb3V0Q2lyYzogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAodCA9IHQgLSAxKSAqIHQpO1xuICAgICAgfSxcbiAgICAgIGluT3V0Q2lyYzogZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAoKHQgLz0gMSAvIDIpIDwgMSkgcmV0dXJuIC0xIC8gMiAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpO1xuICAgICAgICByZXR1cm4gMSAvIDIgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSk7XG4gICAgICB9LFxuICAgICAgaW5FbGFzdGljOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICB2YXIgYSA9IDE7XG4gICAgICAgIGlmICh0ID09IDApIHJldHVybiAwO1xuICAgICAgICBpZiAodCA9PSAxKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKCFwKSBwID0gMC4zO1xuICAgICAgICBpZiAoYSA8IDEpIHtcbiAgICAgICAgICBhID0gMTtcbiAgICAgICAgICB2YXIgcyA9IHAgLyA0O1xuICAgICAgICB9IGVsc2UgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbigxIC8gYSk7XG4gICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpO1xuICAgICAgfSxcbiAgICAgIG91dEVsYXN0aWM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgIHZhciBhID0gMTtcbiAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIDA7XG4gICAgICAgIGlmICh0ID09IDEpIHJldHVybiAxO1xuICAgICAgICBpZiAoIXApIHAgPSAwLjM7XG4gICAgICAgIGlmIChhIDwgMSkge1xuICAgICAgICAgIGEgPSAxO1xuICAgICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgICAgIH0gZWxzZSB2YXIgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKDEgLyBhKTtcbiAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyAxO1xuICAgICAgfSxcbiAgICAgIGluT3V0RWxhc3RpYzogZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgdmFyIGEgPSAxO1xuICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKCh0IC89IDEgLyAyKSA9PSAyKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKCFwKSBwID0gKDAuMyAqIDEuNSk7XG4gICAgICAgIGlmIChhIDwgMSkge1xuICAgICAgICAgIGEgPSAxO1xuICAgICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgICAgIH0gZWxzZSB2YXIgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKDEgLyBhKTtcbiAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gLS41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpO1xuICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKiAwLjUgKyAxO1xuICAgICAgfSxcbiAgICAgIGluQmFjazogZnVuY3Rpb24odCwgcykge1xuICAgICAgICBpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gMSAqIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcyk7XG4gICAgICB9LFxuICAgICAgb3V0QmFjazogZnVuY3Rpb24odCwgcykge1xuICAgICAgICBpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gMSAqICgodCA9IHQgLyAxIC0gMSkgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxKTtcbiAgICAgIH0sXG4gICAgICBpbk91dEJhY2s6IGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgaWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcbiAgICAgICAgaWYgKCh0IC89IDEgLyAyKSA8IDEpIHJldHVybiAxIC8gMiAqICh0ICogdCAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHQgLSBzKSk7XG4gICAgICAgIHJldHVybiAxIC8gMiAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB0ICsgcykgKyAyKTtcbiAgICAgIH0sXG4gICAgICBpbkJvdW5jZTogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gMSAtIHRoaXMub3V0Qm91bmNlKDEgLSB0KTtcbiAgICAgIH0sXG4gICAgICBvdXRCb3VuY2U6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKCh0IC89IDEpIDwgKDEgLyAyLjc1KSkge1xuICAgICAgICAgIHJldHVybiAoNy41NjI1ICogdCAqIHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHQgPCAoMiAvIDIuNzUpKSB7XG4gICAgICAgICAgcmV0dXJuICg3LjU2MjUgKiAodCAtPSAoMS41IC8gMi43NSkpICogdCArIC43NSk7XG4gICAgICAgIH0gZWxzZSBpZiAodCA8ICgyLjUgLyAyLjc1KSkge1xuICAgICAgICAgIHJldHVybiAoNy41NjI1ICogKHQgLT0gKDIuMjUgLyAyLjc1KSkgKiB0ICsgLjkzNzUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoNy41NjI1ICogKHQgLT0gKDIuNjI1IC8gMi43NSkpICogdCArIC45ODQzNzUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5PdXRCb3VuY2U6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHRoaXMuaW5Cb3VuY2UodCAqIDIpICogMC41O1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRCb3VuY2UodCAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdHJhbnNsYXRlRWFzaW5nOiBmdW5jdGlvbihrZXkpIHtcblxuICAgICAgaWYgKCF0aGlzLmNhY2hlW2tleV0pIHtcbiAgICAgICAgdmFyIGFycmF5ID0ga2V5LnNwbGl0KCcnKTtcblxuICAgICAgICB2YXIgc2lnbiA9IDE7XG4gICAgICAgIHZhciBzaWduZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICB2YXIgY2hhciA9IGFycmF5W2ldO1xuXG4gICAgICAgICAgaWYgKGNoYXIgPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBzaWduID0gLTE7XG4gICAgICAgICAgICBzaWduZWQgPSB0cnVlO1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGktLSwgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIitcIikge1xuICAgICAgICAgICAgc2lnbiA9IDE7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICB9IGVsc2UgYXJyYXlbaV0gPSBwYXJzZUludChhcnJheVtpXSwgMTYpICogc2lnbjtcblxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluLmFwcGx5KG51bGwsIGFycmF5KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGFycmF5KTtcbiAgICAgICAgdmFyIGRpZmYgPSBtYXggLSBtaW47XG4gICAgICAgIHZhciBjYWNoZSA9IFtdO1xuICAgICAgICB2YXIgbm9ybWFsaXplZCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoc2lnbmVkKSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IE1hdGgubWF4KE1hdGguYWJzKG1pbiksIE1hdGguYWJzKG1heCkpXG4gICAgICAgICAgICBub3JtYWxpemVkLnB1c2goKGFycmF5W2ldKSAvIGRpZmYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IG1heCAtIG1pbjtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQucHVzaCgoYXJyYXlbaV0gLSBtaW4pIC8gZGlmZik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gbm9ybWFsaXplZDtcblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldXG5cbiAgICB9LFxuXG4gICAgLyogXG4gICAgICBcbiAgICAgIEN1YmljLXNwbGluZSBpbnRlcnBvbGF0aW9uIGJ5IEl2YW4gS3Vja2lyXG5cbiAgICAgIGh0dHA6Ly9ibG9nLml2YW5rLm5ldC9pbnRlcnBvbGF0aW9uLXdpdGgtY3ViaWMtc3BsaW5lcy5odG1sXG5cbiAgICAgIFdpdGggc2xpZ2h0IG1vZGlmaWNhdGlvbnMgYnkgTW9yZ2FuIEhlcmxvY2tlclxuXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vbW9yZ2FuaGVybG9ja2VyL2N1YmljLXNwbGluZVxuXG4gICAgKi9cblxuICAgIHNwbGluZUs6IHt9LFxuICAgIHNwbGluZVg6IHt9LFxuICAgIHNwbGluZVk6IHt9LFxuXG4gICAgaW5zZXJ0SW50ZXJtZWRpYXRlVmFsdWVzOiBmdW5jdGlvbihhKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYVtpXSk7XG5cbiAgICAgICAgaWYgKGkgPCBhLmxlbmd0aCAtIDEpIHJlc3VsdC5wdXNoKGFbaSArIDFdICsgKGFbaV0gLSBhW2kgKyAxXSkgKiAwLjYpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBzcGxpbmU6IGZ1bmN0aW9uKHgsIGtleSkge1xuXG4gICAgICBpZiAoIXRoaXMuc3BsaW5lS1trZXldKSB7XG5cbiAgICAgICAgdmFyIHhzID0gW107XG4gICAgICAgIHZhciB5cyA9IHRoaXMudHJhbnNsYXRlRWFzaW5nKGtleSk7XG5cbiAgICAgICAgLy8geXMgPSB0aGlzLmluc2VydEludGVybWVkaWF0ZVZhbHVlcyh5cyk7XG5cbiAgICAgICAgaWYgKCF5cy5sZW5ndGgpIHJldHVybiAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeXMubGVuZ3RoOyBpKyspIHhzLnB1c2goaSAqICgxIC8gKHlzLmxlbmd0aCAtIDEpKSk7XG5cbiAgICAgICAgdmFyIGtzID0geHMubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGtzID0gdGhpcy5nZXROYXR1cmFsS3MoeHMsIHlzLCBrcyk7XG5cbiAgICAgICAgdGhpcy5zcGxpbmVYW2tleV0gPSB4cztcbiAgICAgICAgdGhpcy5zcGxpbmVZW2tleV0gPSB5cztcbiAgICAgICAgdGhpcy5zcGxpbmVLW2tleV0gPSBrcztcblxuICAgICAgfVxuXG4gICAgICBpZiAoeCA+IDEpIHJldHVybiB0aGlzLnNwbGluZVlba2V5XVt0aGlzLnNwbGluZVlba2V5XS5sZW5ndGggLSAxXTtcblxuICAgICAgdmFyIGtzID0gdGhpcy5zcGxpbmVLW2tleV07XG4gICAgICB2YXIgeHMgPSB0aGlzLnNwbGluZVhba2V5XTtcbiAgICAgIHZhciB5cyA9IHRoaXMuc3BsaW5lWVtrZXldO1xuXG4gICAgICB2YXIgaSA9IDE7XG5cbiAgICAgIHdoaWxlICh4c1tpXSA8IHgpIGkrKztcblxuICAgICAgdmFyIHQgPSAoeCAtIHhzW2kgLSAxXSkgLyAoeHNbaV0gLSB4c1tpIC0gMV0pO1xuICAgICAgdmFyIGEgPSBrc1tpIC0gMV0gKiAoeHNbaV0gLSB4c1tpIC0gMV0pIC0gKHlzW2ldIC0geXNbaSAtIDFdKTtcbiAgICAgIHZhciBiID0gLWtzW2ldICogKHhzW2ldIC0geHNbaSAtIDFdKSArICh5c1tpXSAtIHlzW2kgLSAxXSk7XG4gICAgICB2YXIgcSA9ICgxIC0gdCkgKiB5c1tpIC0gMV0gKyB0ICogeXNbaV0gKyB0ICogKDEgLSB0KSAqIChhICogKDEgLSB0KSArIGIgKiB0KTtcblxuICAgICAgLypcbiAgICAgIHZhciBweSA9IHlzW2kgLSAyXTtcbiAgICAgIHZhciBjeSA9IHlzW2kgLSAxXTtcbiAgICAgIHZhciBueSA9IChpIDwgeXMubGVuZ3RoIC0gMSkgPyB5c1tpXSA6IHlzW2kgLSAxXTtcblxuICAgICAgaWYgKHEgPiBueSkge1xuICAgICAgICB2YXIgZGlmZiA9IChxIC0gcHkpO1xuICAgICAgICAvL3EgPSBweSArIGRpZmY7XG5cbiAgICAgIH1cblxuICAgIGlmIChjeSA9PT0gbnkgJiYgY3kgPT09IHB5KSBxID0gcHk7XG4gICAgKi9cblxuXG4gICAgICByZXR1cm4gcTtcbiAgICB9LFxuXG4gICAgZ2V0TmF0dXJhbEtzOiBmdW5jdGlvbih4cywgeXMsIGtzKSB7XG4gICAgICB2YXIgbiA9IHhzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgQSA9IHRoaXMuemVyb3NNYXQobiArIDEsIG4gKyAyKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuOyBpKyspIC8vIHJvd3NcbiAgICAgIHtcbiAgICAgICAgQVtpXVtpIC0gMV0gPSAxIC8gKHhzW2ldIC0geHNbaSAtIDFdKTtcbiAgICAgICAgQVtpXVtpXSA9IDIgKiAoMSAvICh4c1tpXSAtIHhzW2kgLSAxXSkgKyAxIC8gKHhzW2kgKyAxXSAtIHhzW2ldKSk7XG4gICAgICAgIEFbaV1baSArIDFdID0gMSAvICh4c1tpICsgMV0gLSB4c1tpXSk7XG4gICAgICAgIEFbaV1bbiArIDFdID0gMyAqICgoeXNbaV0gLSB5c1tpIC0gMV0pIC8gKCh4c1tpXSAtIHhzW2kgLSAxXSkgKiAoeHNbaV0gLSB4c1tpIC0gMV0pKSArICh5c1tpICsgMV0gLSB5c1tpXSkgLyAoKHhzW2kgKyAxXSAtIHhzW2ldKSAqICh4c1tpICsgMV0gLSB4c1tpXSkpKTtcbiAgICAgIH1cblxuICAgICAgQVswXVswXSA9IDIgLyAoeHNbMV0gLSB4c1swXSk7XG4gICAgICBBWzBdWzFdID0gMSAvICh4c1sxXSAtIHhzWzBdKTtcbiAgICAgIEFbMF1bbiArIDFdID0gMyAqICh5c1sxXSAtIHlzWzBdKSAvICgoeHNbMV0gLSB4c1swXSkgKiAoeHNbMV0gLSB4c1swXSkpO1xuXG4gICAgICBBW25dW24gLSAxXSA9IDEgLyAoeHNbbl0gLSB4c1tuIC0gMV0pO1xuICAgICAgQVtuXVtuXSA9IDIgLyAoeHNbbl0gLSB4c1tuIC0gMV0pO1xuICAgICAgQVtuXVtuICsgMV0gPSAzICogKHlzW25dIC0geXNbbiAtIDFdKSAvICgoeHNbbl0gLSB4c1tuIC0gMV0pICogKHhzW25dIC0geHNbbiAtIDFdKSk7XG5cbiAgICAgIHJldHVybiB0aGlzLnNvbHZlKEEsIGtzKTtcbiAgICB9LFxuXG4gICAgc29sdmU6IGZ1bmN0aW9uKEEsIGtzKSB7XG4gICAgICB2YXIgbSA9IEEubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBtOyBrKyspIC8vIGNvbHVtblxuICAgICAge1xuICAgICAgICAvLyBwaXZvdCBmb3IgY29sdW1uXG4gICAgICAgIHZhciBpX21heCA9IDA7XG4gICAgICAgIHZhciB2YWxpID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgICBmb3IgKHZhciBpID0gazsgaSA8IG07IGkrKylcbiAgICAgICAgICBpZiAoQVtpXVtrXSA+IHZhbGkpIHtcbiAgICAgICAgICAgIGlfbWF4ID0gaTtcbiAgICAgICAgICAgIHZhbGkgPSBBW2ldW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGxpbmVTd2FwUm93cyhBLCBrLCBpX21heCk7XG5cbiAgICAgICAgLy8gZm9yIGFsbCByb3dzIGJlbG93IHBpdm90XG4gICAgICAgIGZvciAodmFyIGkgPSBrICsgMTsgaSA8IG07IGkrKykge1xuICAgICAgICAgIGZvciAodmFyIGogPSBrICsgMTsgaiA8IG0gKyAxOyBqKyspXG4gICAgICAgICAgICBBW2ldW2pdID0gQVtpXVtqXSAtIEFba11bal0gKiAoQVtpXVtrXSAvIEFba11ba10pO1xuICAgICAgICAgIEFbaV1ba10gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gbSAtIDE7IGkgPj0gMDsgaS0tKSAvLyByb3dzID0gY29sdW1uc1xuICAgICAge1xuICAgICAgICB2YXIgdiA9IEFbaV1bbV0gLyBBW2ldW2ldO1xuICAgICAgICBrc1tpXSA9IHY7XG4gICAgICAgIGZvciAodmFyIGogPSBpIC0gMTsgaiA+PSAwOyBqLS0pIC8vIHJvd3NcbiAgICAgICAge1xuICAgICAgICAgIEFbal1bbV0gLT0gQVtqXVtpXSAqIHY7XG4gICAgICAgICAgQVtqXVtpXSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBrcztcbiAgICB9LFxuXG4gICAgemVyb3NNYXQ6IGZ1bmN0aW9uKHIsIGMpIHtcbiAgICAgIHZhciBBID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHI7IGkrKykge1xuICAgICAgICBBLnB1c2goW10pO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGM7IGorKykgQVtpXS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEE7XG4gICAgfSxcblxuICAgIHNwbGluZVN3YXBSb3dzOiBmdW5jdGlvbihtLCBrLCBsKSB7XG4gICAgICB2YXIgcCA9IG1ba107XG4gICAgICBtW2tdID0gbVtsXTtcbiAgICAgIG1bbF0gPSBwO1xuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmVhc2UgPSBlYXNlO1xuXG59KSgpO1xuXG5cbi8qIGZpbGU6IHNyYy9QbGF5Z3JvdW5kLmpzICovXG5cblBMQVlHUk9VTkQgPSB7fTtcblxuZnVuY3Rpb24gcGxheWdyb3VuZChhcmdzKSB7XG5cbiAgcmV0dXJuIG5ldyBQTEFZR1JPVU5ELkFwcGxpY2F0aW9uKGFyZ3MpO1xuXG59O1xuXG4vKiBmaWxlOiBzcmMvVXRpbHMuanMgKi9cblxuUExBWUdST1VORC5VdGlscyA9IHtcblxuICBleHRlbmQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAodmFyIGogaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICAgIGFyZ3VtZW50c1swXVtqXSA9IGFyZ3VtZW50c1tpXVtqXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuXG4gIH0sXG5cbiAgbWVyZ2U6IGZ1bmN0aW9uKGEpIHtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBiID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IGJba2V5XTtcblxuICAgICAgICBpZiAodHlwZW9mIGFba2V5XSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGlmICh0eXBlb2YgYVtrZXldID09PSBcIm9iamVjdFwiKSB0aGlzLm1lcmdlKGFba2V5XSwgdmFsdWUpO1xuICAgICAgICAgIGVsc2UgYVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGE7XG5cbiAgfSxcblxuICBpbnZva2U6IGZ1bmN0aW9uKG9iamVjdCwgbWV0aG9kTmFtZSkge1xuXG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjdXJyZW50ID0gb2JqZWN0W2ldO1xuXG4gICAgICBpZiAoY3VycmVudFttZXRob2ROYW1lXSkgY3VycmVudFttZXRob2ROYW1lXS5hcHBseShjdXJyZW50LCBhcmdzKTtcblxuICAgIH1cblxuICB9LFxuXG4gIHRocm90dGxlOiBmdW5jdGlvbihmbiwgdGhyZXNob2xkKSB7XG4gICAgdGhyZXNob2xkIHx8ICh0aHJlc2hvbGQgPSAyNTApO1xuICAgIHZhciBsYXN0LFxuICAgICAgZGVmZXJUaW1lcjtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG5cbiAgICAgIHZhciBub3cgPSArbmV3IERhdGUsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAobGFzdCAmJiBub3cgPCBsYXN0ICsgdGhyZXNob2xkKSB7XG4gICAgICAgIC8vIGhvbGQgb24gdG8gaXRcbiAgICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgICAgICBkZWZlclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9LCB0aHJlc2hvbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELlV0aWxzLmVhc2UgPSBlYXNlO1xuXG5cbi8qIGZpbGU6IHNyYy9FdmVudHMuanMgKi9cblxuUExBWUdST1VORC5FdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuXG59O1xuXG5QTEFZR1JPVU5ELkV2ZW50cy5wcm90b3R5cGUgPSB7XG5cbiAgb246IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgaWYgKHR5cGVvZiBldmVudCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIGV2ZW50KSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdGhpcy5vbihrZXksIGV2ZW50W2tleV0sIGNvbnRleHQpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBbXTtcblxuICAgIHZhciBsaXN0ZW5lciA9IHtcbiAgICAgIG9uY2U6IGZhbHNlLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY29udGV4dDogY29udGV4dFxuICAgIH07XG5cbiAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gbGlzdGVuZXI7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cbiAgICBpZiAodHlwZW9mIGV2ZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZXZlbnQpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLm9uY2Uoa2V5LCBldmVudFtrZXldLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50XSkgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gW107XG5cbiAgICB2YXIgbGlzdGVuZXIgPSB7XG4gICAgICBvbmNlOiB0cnVlLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY29udGV4dDogY29udGV4dFxuICAgIH07XG5cbiAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gbGlzdGVuZXI7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spIHtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVyc1tldmVudF0ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudF1baV0uX3JlbW92ZSkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uc3BsaWNlKGktLSwgMSk7XG4gICAgICAgIGxlbi0tO1xuICAgICAgfVxuICAgIH1cblxuICB9LFxuXG4gIHRyaWdnZXI6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG5cbiAgICAvKiBpZiB5b3UgcHJlZmVyIGV2ZW50cyBwaXBlICovXG5cbiAgICBpZiAodGhpcy5saXN0ZW5lcnNbXCJldmVudFwiXSkge1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnNbXCJldmVudFwiXS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW1wiZXZlbnRcIl1baV07XG5cbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5jb250ZXh0IHx8IHRoaXMsIGV2ZW50LCBkYXRhKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyogb3Igc3Vic2NyaWJlZCB0byBzaW5nbGUgZXZlbnQgKi9cblxuICAgIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVyc1tldmVudF0ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tldmVudF1baV07XG5cbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5jb250ZXh0IHx8IHRoaXMsIGRhdGEpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lci5vbmNlKSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpLS0sIDEpO1xuICAgICAgICAgIGxlbi0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufTtcblxuLyogZmlsZTogc3JjL1N0YXRlcy5qcyAqL1xuXG5QTEFZR1JPVU5ELlN0YXRlcyA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIFBMQVlHUk9VTkQuRXZlbnRzLmNhbGwodGhpcyk7XG5cbiAgYXBwLm9uKFwic3RlcFwiLCB0aGlzLnN0ZXAuYmluZCh0aGlzKSk7XG5cbn07XG5cblBMQVlHUk9VTkQuU3RhdGVzLnByb3RvdHlwZSA9IHtcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgaWYgKCF0aGlzLm5leHQpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmN1cnJlbnQgJiYgdGhpcy5jdXJyZW50LmxvY2tlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHN0YXRlID0gdGhpcy5uZXh0O1xuXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiKSBzdGF0ZSA9IG5ldyBzdGF0ZTtcblxuICAgIC8qIGNyZWF0ZSBzdGF0ZSBpZiBvYmplY3QgaGFzIG5ldmVyIGJlZW4gdXNlZCBhcyBhIHN0YXRlIGJlZm9yZSAqL1xuXG4gICAgaWYgKCFzdGF0ZS5fX2NyZWF0ZWQpIHtcblxuICAgICAgc3RhdGUuX19jcmVhdGVkID0gdHJ1ZTtcblxuICAgICAgc3RhdGUuYXBwID0gdGhpcy5hcHA7XG5cbiAgICAgIHRoaXMudHJpZ2dlcihcImNyZWF0ZXN0YXRlXCIsIHtcbiAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0YXRlLmNyZWF0ZSkgc3RhdGUuY3JlYXRlKCk7XG5cbiAgICB9XG5cbiAgICAvKiBlbnRlciBuZXcgc3RhdGUgKi9cblxuICAgIGlmICh0aGlzLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMudHJpZ2dlcihcImxlYXZlc3RhdGVcIiwge1xuICAgICAgICBwcmV2OiB0aGlzLmN1cnJlbnQsXG4gICAgICAgIG5leHQ6IHN0YXRlLFxuICAgICAgICBzdGF0ZTogdGhpcy5jdXJyZW50XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoXCJlbnRlcnN0YXRlXCIsIHtcbiAgICAgIHByZXY6IHRoaXMuY3VycmVudCxcbiAgICAgIG5leHQ6IHN0YXRlLFxuICAgICAgc3RhdGU6IHN0YXRlXG4gICAgfSk7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSBzdGF0ZTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnQgJiYgdGhpcy5jdXJyZW50LmVudGVyKSB7XG4gICAgICB0aGlzLmN1cnJlbnQuZW50ZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFwcC5zdGF0ZSA9IHRoaXMuY3VycmVudDtcblxuICAgIHRoaXMubmV4dCA9IGZhbHNlO1xuXG5cbiAgfSxcblxuICBzZXQ6IGZ1bmN0aW9uKHN0YXRlKSB7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50ICYmIHRoaXMuY3VycmVudC5sZWF2ZSkgdGhpcy5jdXJyZW50LmxlYXZlKCk7XG5cbiAgICB0aGlzLm5leHQgPSBzdGF0ZTtcblxuICAgIHRoaXMuc3RlcCgwKTtcblxuICB9XG5cblxufTtcblxuUExBWUdST1VORC5VdGlscy5leHRlbmQoUExBWUdST1VORC5TdGF0ZXMucHJvdG90eXBlLCBQTEFZR1JPVU5ELkV2ZW50cy5wcm90b3R5cGUpO1xuXG4vKiBmaWxlOiBzcmMvQXBwbGljYXRpb24uanMgKi9cblxuUExBWUdST1VORC5BcHBsaWNhdGlvbiA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICB2YXIgYXBwID0gdGhpcztcblxuICAvKiBldmVudHMgKi9cblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIC8qIGRlZmF1bHRzICovXG5cbiAgUExBWUdST1VORC5VdGlscy5tZXJnZSh0aGlzLCB0aGlzLmRlZmF1bHRzLCBhcmdzKTtcblxuICAvKiBndWVzcyBzY2FsaW5nIG1vZGUgKi9cblxuICB0aGlzLmF1dG9XaWR0aCA9IHRoaXMud2lkdGggPyBmYWxzZSA6IHRydWU7XG4gIHRoaXMuYXV0b0hlaWdodCA9IHRoaXMuaGVpZ2h0ID8gZmFsc2UgOiB0cnVlO1xuICB0aGlzLmF1dG9TY2FsZSA9IHRoaXMuc2NhbGUgPyBmYWxzZSA6IHRydWU7XG5cbiAgLyogZ2V0IGNvbnRhaW5lciAqL1xuXG4gIGlmICghdGhpcy5jb250YWluZXIpIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcblxuICBpZiAodGhpcy5jb250YWluZXIgIT09IGRvY3VtZW50LmJvZHkpIHRoaXMuY3VzdG9tQ29udGFpbmVyID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHRoaXMuY29udGFpbmVyID09PSBcInN0cmluZ1wiKSB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250YWluZXIpO1xuXG4gIHRoaXMudXBkYXRlU2l6ZSgpO1xuXG4gIC8qIGV2ZW50cyAqL1xuXG4gIC8vIHRoaXMuZW1pdExvY2FsRXZlbnQgPSB0aGlzLmVtaXRMb2NhbEV2ZW50LmJpbmQodGhpcyk7XG4gIC8vIHRoaXMuZW1pdEdsb2JhbEV2ZW50ID0gdGhpcy5lbWl0R2xvYmFsRXZlbnQuYmluZCh0aGlzKTtcblxuICAvKiBzdGF0ZXMgbWFuYWdlciAqL1xuXG4gIHRoaXMuc3RhdGVzID0gbmV3IFBMQVlHUk9VTkQuU3RhdGVzKHRoaXMpO1xuICB0aGlzLnN0YXRlcy5vbihcImV2ZW50XCIsIHRoaXMuZW1pdExvY2FsRXZlbnQsIHRoaXMpO1xuXG4gIC8qIG1vdXNlICovXG5cbiAgdGhpcy5tb3VzZSA9IG5ldyBQTEFZR1JPVU5ELk1vdXNlKHRoaXMsIHRoaXMuY29udGFpbmVyKTtcbiAgdGhpcy5tb3VzZS5vbihcImV2ZW50XCIsIHRoaXMuZW1pdEdsb2JhbEV2ZW50LCB0aGlzKTtcblxuICAvKiB0b3VjaCAqL1xuXG4gIHRoaXMudG91Y2ggPSBuZXcgUExBWUdST1VORC5Ub3VjaCh0aGlzLCB0aGlzLmNvbnRhaW5lcik7XG4gIHRoaXMudG91Y2gub24oXCJldmVudFwiLCB0aGlzLmVtaXRHbG9iYWxFdmVudCwgdGhpcyk7XG5cbiAgLyoga2V5Ym9hcmQgKi9cblxuICB0aGlzLmtleWJvYXJkID0gbmV3IFBMQVlHUk9VTkQuS2V5Ym9hcmQoKTtcbiAgdGhpcy5rZXlib2FyZC5vbihcImV2ZW50XCIsIHRoaXMuZW1pdEdsb2JhbEV2ZW50LCB0aGlzKTtcblxuICAvKiBnYW1lcGFkcyAqL1xuXG4gIHRoaXMuZ2FtZXBhZHMgPSBuZXcgUExBWUdST1VORC5HYW1lcGFkcyh0aGlzKTtcbiAgdGhpcy5nYW1lcGFkcy5vbihcImV2ZW50XCIsIHRoaXMuZW1pdEdsb2JhbEV2ZW50LCB0aGlzKTtcblxuICAvKiB0d2VlbnMgKi9cblxuICB0aGlzLnR3ZWVucyA9IG5ldyBQTEFZR1JPVU5ELlR3ZWVuTWFuYWdlcih0aGlzKTtcblxuICAvKiBlYXNlICovXG5cbiAgdGhpcy5lYXNlID0gUExBWUdST1VORC5VdGlscy5lYXNlO1xuXG4gIC8qIHZpZGVvIHJlY29yZGVyICovXG5cbiAgdGhpcy52aWRlb1JlY29yZGVyID0gbmV3IFBMQVlHUk9VTkQuVmlkZW9SZWNvcmRlcih0aGlzKTtcblxuICAvKiBzb3VuZCAqL1xuXG4gIFBMQVlHUk9VTkQuU291bmQodGhpcyk7XG5cbiAgLyogd2luZG93IHJlc2l6ZSAqL1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcykpO1xuXG4gIC8qIHZpc2lsaWJpdHljaGFuZ2UgKi9cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5lbWl0R2xvYmFsRXZlbnQoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSk7XG5cblxuICB9KTtcblxuICAvKiBhc3NldHMgY29udGFpbmVycyAqL1xuXG4gIHRoaXMuaW1hZ2VzID0ge307XG4gIHRoaXMuYXRsYXNlcyA9IHt9O1xuICB0aGlzLmRhdGEgPSB7fTtcblxuICB0aGlzLmxvYWRlciA9IG5ldyBQTEFZR1JPVU5ELkxvYWRlcih0aGlzKTtcblxuICB0aGlzLmxvYWRGb28oMC4yNSk7XG5cbiAgLyogY3JlYXRlIHBsdWdpbnMgaW4gdGhlIHNhbWUgd2F5ICovXG5cbiAgdGhpcy5wbHVnaW5zID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIFBMQVlHUk9VTkQpIHtcblxuICAgIHZhciBwcm9wZXJ0eSA9IFBMQVlHUk9VTkRba2V5XTtcblxuICAgIGlmIChwcm9wZXJ0eS5wbHVnaW4pIHRoaXMucGx1Z2lucy5wdXNoKG5ldyBwcm9wZXJ0eSh0aGlzKSk7XG5cbiAgfVxuXG4gIC8qIGZsb3cgKi9cblxuICB0aGlzLmVtaXRHbG9iYWxFdmVudChcInByZWxvYWRcIik7XG5cbiAgdGhpcy5maXJzdEJhdGNoID0gdHJ1ZTtcblxuICBmdW5jdGlvbiBvblByZWxvYWRFbmQoKSB7XG5cbiAgICBhcHAubG9hZEZvbygwLjI1KTtcblxuICAgIC8qIHJ1biBldmVyeXRoaW5nIGluIHRoZSBuZXh0IGZyYW1lICovXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICBhcHAuZW1pdExvY2FsRXZlbnQoXCJjcmVhdGVcIik7XG5cbiAgICAgIGFwcC5zZXRTdGF0ZShQTEFZR1JPVU5ELkRlZmF1bHRTdGF0ZSk7XG4gICAgICBhcHAuaGFuZGxlUmVzaXplKCk7XG4gICAgICBhcHAuc2V0U3RhdGUoUExBWUdST1VORC5Mb2FkaW5nU2NyZWVuKTtcblxuICAgICAgLyogZ2FtZSBsb29wICovXG5cbiAgICAgIFBMQVlHUk9VTkQuR2FtZUxvb3AoYXBwKTtcblxuICAgIH0pO1xuXG4gICAgLyogc3RhZ2UgcHJvcGVyIGxvYWRpbmcgc3RlcCAqL1xuXG4gICAgYXBwLmxvYWRlci5vbmNlKFwicmVhZHlcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgIGFwcC5maXJzdEJhdGNoID0gZmFsc2U7XG5cbiAgICAgIGFwcC5zZXRTdGF0ZShQTEFZR1JPVU5ELkRlZmF1bHRTdGF0ZSk7XG5cbiAgICAgIGFwcC5lbWl0TG9jYWxFdmVudChcInJlYWR5XCIpO1xuICAgICAgYXBwLmhhbmRsZVJlc2l6ZSgpO1xuXG5cbiAgICB9KTtcblxuXG4gIH07XG5cblxuICB0aGlzLmxvYWRlci5vbmNlKFwicmVhZHlcIiwgb25QcmVsb2FkRW5kKTtcblxufTtcblxuUExBWUdST1VORC5BcHBsaWNhdGlvbi5wcm90b3R5cGUgPSB7XG5cbiAgZGVmYXVsdHM6IHtcbiAgICBzbW9vdGhpbmc6IDEsXG4gICAgcGF0aHM6IHtcbiAgICAgIGJhc2U6IFwiXCIsXG4gICAgICBpbWFnZXM6IFwiaW1hZ2VzL1wiXG4gICAgfSxcbiAgICBvZmZzZXRYOiAwLFxuICAgIG9mZnNldFk6IDBcbiAgfSxcblxuICBzZXRTdGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcblxuICAgIHRoaXMuc3RhdGVzLnNldChzdGF0ZSk7XG5cbiAgfSxcblxuICBnZXRQYXRoOiBmdW5jdGlvbih0bykge1xuXG4gICAgcmV0dXJuIHRoaXMucGF0aHMuYmFzZSArICh0aGlzLnBhdGhzW3RvXSB8fCAodG8gKyBcIi9cIikpO1xuXG4gIH0sXG5cbiAgZ2V0QXNzZXRFbnRyeTogZnVuY3Rpb24ocGF0aCwgZm9sZGVyLCBkZWZhdWx0RXh0ZW5zaW9uKSB7XG5cbiAgICAvKiB0cmFuc2xhdGUgZm9sZGVyIGFjY29yZGluZyB0byB1c2VyIHByb3ZpZGVkIHBhdGhzIFxuICAgICAgIG9yIGxlYXZlIGFzIGlzICovXG5cbiAgICB2YXIgZm9sZGVyID0gdGhpcy5wYXRoc1tmb2xkZXJdIHx8IChmb2xkZXIgKyBcIi9cIik7XG5cbiAgICB2YXIgZmlsZWluZm8gPSBwYXRoLm1hdGNoKC8oLiopXFwuLiovKTtcbiAgICB2YXIga2V5ID0gZmlsZWluZm8gPyBmaWxlaW5mb1sxXSA6IHBhdGg7XG5cbiAgICB2YXIgdGVtcCA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICAgIHZhciBiYXNlbmFtZSA9IHBhdGg7XG5cbiAgICBpZiAodGVtcC5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgZXh0ID0gdGVtcC5wb3AoKTtcbiAgICAgIHBhdGggPSB0ZW1wLmpvaW4oXCIuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXh0ID0gZGVmYXVsdEV4dGVuc2lvbjtcbiAgICAgIGJhc2VuYW1lICs9IFwiLlwiICsgZGVmYXVsdEV4dGVuc2lvbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBrZXksXG4gICAgICB1cmw6IHRoaXMucGF0aHMuYmFzZSArIGZvbGRlciArIGJhc2VuYW1lLFxuICAgICAgcGF0aDogdGhpcy5wYXRocy5iYXNlICsgZm9sZGVyICsgcGF0aCxcbiAgICAgIGV4dDogZXh0XG4gICAgfTtcblxuICB9LFxuXG4gIC8qIGV2ZW50cyB0aGF0IHNob3VsZG4ndCBmbG93IGRvd24gdG8gdGhlIHN0YXRlICovXG5cbiAgZW1pdExvY2FsRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG5cbiAgICB0aGlzLnRyaWdnZXIoZXZlbnQsIGRhdGEpO1xuXG4gICAgaWYgKCghdGhpcy5maXJzdEJhdGNoIHx8IHRoaXMubG9hZGVyLnJlYWR5KSAmJiB0aGlzW2V2ZW50XSkgdGhpc1tldmVudF0oZGF0YSk7XG5cbiAgfSxcblxuICAvKiBldmVudHMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBzdGF0ZSAqL1xuXG4gIGVtaXRHbG9iYWxFdmVudDogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcblxuICAgIGlmICghdGhpcy5zdGF0ZSkgcmV0dXJuIHRoaXMuZW1pdExvY2FsRXZlbnQoZXZlbnQsIGRhdGEpO1xuXG4gICAgdGhpcy50cmlnZ2VyKGV2ZW50LCBkYXRhKTtcblxuICAgIGlmICgoIXRoaXMuZmlyc3RCYXRjaCB8fCB0aGlzLmxvYWRlci5yZWFkeSkgJiYgdGhpcy5ldmVudCkgdGhpcy5ldmVudChldmVudCwgZGF0YSk7XG5cbiAgICBpZiAoKCF0aGlzLmZpcnN0QmF0Y2ggfHwgdGhpcy5sb2FkZXIucmVhZHkpICYmIHRoaXNbZXZlbnRdKSB0aGlzW2V2ZW50XShkYXRhKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50KSB0aGlzLnN0YXRlLmV2ZW50KGV2ZW50LCBkYXRhKTtcblxuICAgIGlmICh0aGlzLnN0YXRlW2V2ZW50XSkgdGhpcy5zdGF0ZVtldmVudF0oZGF0YSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoXCJwb3N0XCIgKyBldmVudCwgZGF0YSk7XG5cbiAgICAvLyBpZiAodGhpcy5zdGF0ZS5wcm94eSkgdGhpcy5zdGF0ZS5wcm94eShldmVudCwgZGF0YSk7XG5cbiAgfSxcblxuICB1cGRhdGVTaXplOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmN1c3RvbUNvbnRhaW5lcikge1xuXG4gICAgICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICAgIHZhciBjb250YWluZXJIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgY29udGFpbmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIHZhciBjb250YWluZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuYXV0b1NjYWxlICYmICF0aGlzLmF1dG9XaWR0aCAmJiAhdGhpcy5hdXRvSGVpZ2h0KSB7XG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmF1dG9IZWlnaHQgJiYgdGhpcy5hdXRvV2lkdGgpIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b1NjYWxlKSB0aGlzLnNjYWxlID0gY29udGFpbmVySGVpZ2h0IC8gdGhpcy5oZWlnaHQ7XG5cbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLmNlaWwoY29udGFpbmVyV2lkdGggLyB0aGlzLnNjYWxlKTtcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMuYXV0b1dpZHRoICYmIHRoaXMuYXV0b0hlaWdodCkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvU2NhbGUpIHRoaXMuc2NhbGUgPSBjb250YWluZXJXaWR0aCAvIHRoaXMud2lkdGg7XG5cbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5jZWlsKGNvbnRhaW5lckhlaWdodCAvIHRoaXMuc2NhbGUpO1xuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b1dpZHRoICYmIHRoaXMuYXV0b0hlaWdodCAmJiB0aGlzLmF1dG9TY2FsZSkge1xuXG4gICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgIHRoaXMud2lkdGggPSBjb250YWluZXJXaWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0O1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLmF1dG9XaWR0aCAmJiB0aGlzLmF1dG9IZWlnaHQpIHtcblxuICAgICAgdGhpcy53aWR0aCA9IE1hdGguY2VpbChjb250YWluZXJXaWR0aCAvIHRoaXMuc2NhbGUpO1xuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLmNlaWwoY29udGFpbmVySGVpZ2h0IC8gdGhpcy5zY2FsZSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLnNjYWxlID0gTWF0aC5taW4oY29udGFpbmVyV2lkdGggLyB0aGlzLndpZHRoLCBjb250YWluZXJIZWlnaHQgLyB0aGlzLmhlaWdodCk7XG5cbiAgICB9XG5cbiAgICB0aGlzLm9mZnNldFggPSAoY29udGFpbmVyV2lkdGggLSB0aGlzLndpZHRoICogdGhpcy5zY2FsZSkgLyAyIHwgMDtcbiAgICB0aGlzLm9mZnNldFkgPSAoY29udGFpbmVySGVpZ2h0IC0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlKSAvIDIgfCAwO1xuXG4gICAgdGhpcy5jZW50ZXIgPSB7XG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiB8IDAsXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIgfCAwXG4gICAgfTtcblxuICB9LFxuXG4gIGhhbmRsZVJlc2l6ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnVwZGF0ZVNpemUoKTtcblxuICAgIHRoaXMubW91c2UuaGFuZGxlUmVzaXplKCk7XG4gICAgdGhpcy50b3VjaC5oYW5kbGVSZXNpemUoKTtcblxuICAgIHRoaXMuZW1pdEdsb2JhbEV2ZW50KFwicmVzaXplXCIsIHt9KTtcblxuICB9LFxuXG4gIC8qIFxuICAgIHJlcXVlc3QgYSBmaWxlIG92ZXIgaHR0cCBcbiAgICBpdCBzaGFsbCBiZSBsYXRlciBhbiBhYnN0cmFjdGlvbiB1c2luZyAnZnMnIGluIG5vZGUtd2Via2l0XG5cbiAgICByZXR1cm5zIGEgcHJvbWlzZVxuICAqL1xuXG4gIHJlcXVlc3Q6IGZ1bmN0aW9uKHVybCkge1xuXG4gICAgZnVuY3Rpb24gcHJvbWlzZShzdWNjZXNzLCBmYWlsKSB7XG5cbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHZhciBhcHAgPSB0aGlzO1xuXG4gICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblxuICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciB4aHIgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgaWYgKHhoci5zdGF0dXMgIT09IDIwMCAmJiB4aHIuc3RhdHVzICE9PSAwKSB7XG5cbiAgICAgICAgICByZXR1cm4gZmFpbChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IFwiICsgdXJsKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHN1Y2Nlc3MoeGhyKTtcblxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LnNlbmQoKTtcblxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShwcm9taXNlKTtcblxuICB9LFxuXG4gIC8qIGltYWdpbmFyeSB0aW1lb3V0IHRvIGRlbGF5IGxvYWRpbmcgKi9cblxuICBsb2FkRm9vOiBmdW5jdGlvbih0aW1lb3V0KSB7XG5cbiAgICB2YXIgbG9hZGVyID0gdGhpcy5sb2FkZXI7XG5cbiAgICB0aGlzLmxvYWRlci5hZGQoXCJmb28gXCIgKyB0aW1lb3V0KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBsb2FkZXIuc3VjY2VzcyhcImZvbyBcIiArIHRpbWVvdXQpO1xuICAgIH0sIHRpbWVvdXQgKiAxMDAwKTtcblxuICB9LFxuXG4gIC8qIGRhdGEvanNvbiAqL1xuXG4gIGxvYWREYXRhOiBmdW5jdGlvbigpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGlmICh0eXBlb2YgYXJnID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZykgdGhpcy5sb2FkRGF0YShhcmdba2V5XSk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy5sb2FkRGF0YUl0ZW0oYXJnKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH0sXG5cbiAgbG9hZERhdGFJdGVtOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICB2YXIgZW50cnkgPSB0aGlzLmdldEFzc2V0RW50cnkobmFtZSwgXCJkYXRhXCIsIFwianNvblwiKTtcblxuICAgIHZhciBhcHAgPSB0aGlzO1xuXG4gICAgdGhpcy5sb2FkZXIuYWRkKCk7XG5cbiAgICB0aGlzLnJlcXVlc3QoZW50cnkudXJsKS50aGVuKHByb2Nlc3NEYXRhKTtcblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKHJlcXVlc3QpIHtcblxuICAgICAgaWYgKGVudHJ5LmV4dCA9PT0gXCJqc29uXCIpIHtcbiAgICAgICAgYXBwLmRhdGFbZW50cnkua2V5XSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXBwLmRhdGFbZW50cnkua2V5XSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xuICAgICAgfVxuXG4gICAgICBhcHAubG9hZGVyLnN1Y2Nlc3MoZW50cnkudXJsKTtcblxuICAgIH1cblxuICB9LFxuXG4gIC8qIGltYWdlcyAqL1xuXG4gIGxvYWRJbWFnZTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gdGhpcy5sb2FkSW1hZ2VzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgfSxcblxuICBsb2FkSW1hZ2VzOiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgLyogcG9seW1vcnBoaXNtIGF0IGl0cyBmaW5lc3QgKi9cblxuICAgICAgaWYgKHR5cGVvZiBhcmcgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJnKSBwcm9taXNlcyA9IHByb21pc2VzLmNvbmNhdCh0aGlzLmxvYWRJbWFnZXMoYXJnW2tleV0pKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZE9uZUltYWdlKGFyZykpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gIH0sXG5cbiAgbG9hZE9uZUltYWdlOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICB2YXIgYXBwID0gdGhpcztcblxuICAgIGlmICghdGhpcy5faW1hZ2VMb2FkZXJzKSB0aGlzLl9pbWFnZUxvYWRlcnMgPSB7fTtcblxuICAgIGlmICghdGhpcy5faW1hZ2VMb2FkZXJzW25hbWVdKSB7XG5cbiAgICAgIHZhciBwcm9taXNlID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgICAgLyogaWYgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9hcnJheSBsZXQncyB0cnkgdG8gbG9hZCBpdCAqL1xuXG4gICAgICAgIHZhciBsb2FkZXIgPSBhcHAubG9hZGVyO1xuXG4gICAgICAgIHZhciBlbnRyeSA9IGFwcC5nZXRBc3NldEVudHJ5KG5hbWUsIFwiaW1hZ2VzXCIsIFwicG5nXCIpO1xuXG4gICAgICAgIGFwcC5sb2FkZXIuYWRkKGVudHJ5LnBhdGgpO1xuXG4gICAgICAgIHZhciBpbWFnZSA9IGFwcC5pbWFnZXNbZW50cnkua2V5XSA9IG5ldyBJbWFnZTtcblxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgICAgIGxvYWRlci5zdWNjZXNzKGVudHJ5LnVybCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgcmVqZWN0KFwiY2FuJ3QgbG9hZCBcIiArIGVudHJ5LnVybCk7XG4gICAgICAgICAgbG9hZGVyLmVycm9yKGVudHJ5LnVybCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gZW50cnkudXJsO1xuXG4gICAgICB9O1xuXG4gICAgICBhcHAuX2ltYWdlTG9hZGVyc1tuYW1lXSA9IG5ldyBQcm9taXNlKHByb21pc2UpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlTG9hZGVyc1tuYW1lXTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELlV0aWxzLmV4dGVuZChQTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZSwgUExBWUdST1VORC5FdmVudHMucHJvdG90eXBlKTtcblxuXG5cbi8qIGZpbGU6IHNyYy9HYW1lTG9vcC5qcyAqL1xuXG5QTEFZR1JPVU5ELkdhbWVMb29wID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgYXBwLmxpZmV0aW1lID0gMDtcbiAgYXBwLm9wcyA9IDA7XG4gIGFwcC5vcGNvc3QgPSAwO1xuXG4gIHZhciBsYXN0VGljayA9IERhdGUubm93KCk7XG4gIHZhciBmcmFtZSA9IDA7XG4gIHZhciB1bmJvdW5kZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiByZW5kZXIoZHQpIHtcbiAgICBcbiAgICBhcHAuZW1pdEdsb2JhbEV2ZW50KFwicmVuZGVyXCIsIGR0KVxuICAgIGFwcC5lbWl0R2xvYmFsRXZlbnQoXCJwb3N0cmVuZGVyXCIsIGR0KVxuXG4gIH07XG5cbiAgZnVuY3Rpb24gc3RlcChkdCkge1xuXG4gICAgYXBwLmVtaXRHbG9iYWxFdmVudChcInN0ZXBcIiwgZHQpXG5cbiAgfTtcblxuICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcblxuICAgIGlmICghYXBwLnVuYm91bmQpIHtcbiAgICAgIGlmIChhcHAuaW1taWRpYXRlKSB7XG4gICAgICAgIHNldFplcm9UaW1lb3V0KGdhbWVMb29wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0ZWQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIHZhciBkZWx0YSA9IERhdGUubm93KCkgLSBsYXN0VGljaztcblxuICAgIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcblxuICAgIGlmIChhcHAudW5ib3VuZCkge1xuICAgICAgZGVsdGEgPSAyMDtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGEgPiAxMDAwKSByZXR1cm47XG5cbiAgICB2YXIgZHQgPSBkZWx0YSAvIDEwMDA7XG5cbiAgICBhcHAubGlmZXRpbWUgKz0gZHQ7XG4gICAgYXBwLmVsYXBzZWQgPSBkdDtcbiAgICBcbiAgICBzdGVwKGR0KTtcblxuICAgIGFwcC5mcmFtZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0ZWQ7XG5cbiAgICByZW5kZXIoZHQpO1xuXG4gICAgaWYgKGFwcC51bmJvdW5kICYmICF1bmJvdW5kZWQpIHtcbiAgICAgIHVuYm91bmRlZCA9IHRydWU7XG4gICAgICB3aGlsZSAoYXBwLnVuYm91bmQpIHtcbiAgICAgICAgZ2FtZUxvb3AoKTtcbiAgICAgIH1cbiAgICAgIHVuYm91bmRlZCA9IGZhbHNlO1xuICAgIH1cblxuICB9O1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG5cbn07XG5cbi8vIE9ubHkgYWRkIHNldFplcm9UaW1lb3V0IHRvIHRoZSB3aW5kb3cgb2JqZWN0LCBhbmQgaGlkZSBldmVyeXRoaW5nXG4vLyBlbHNlIGluIGEgY2xvc3VyZS5cbihmdW5jdGlvbigpIHtcbiAgdmFyIHRpbWVvdXRzID0gW107XG4gIHZhciBtZXNzYWdlTmFtZSA9IFwiemVyby10aW1lb3V0LW1lc3NhZ2VcIjtcblxuICAvLyBMaWtlIHNldFRpbWVvdXQsIGJ1dCBvbmx5IHRha2VzIGEgZnVuY3Rpb24gYXJndW1lbnQuICBUaGVyZSdzXG4gIC8vIG5vIHRpbWUgYXJndW1lbnQgKGFsd2F5cyB6ZXJvKSBhbmQgbm8gYXJndW1lbnRzICh5b3UgaGF2ZSB0b1xuICAvLyB1c2UgYSBjbG9zdXJlKS5cbiAgZnVuY3Rpb24gc2V0WmVyb1RpbWVvdXQoZm4pIHtcbiAgICB0aW1lb3V0cy5wdXNoKGZuKTtcbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZU5hbWUsIFwiKlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuc291cmNlID09IHdpbmRvdyAmJiBldmVudC5kYXRhID09IG1lc3NhZ2VOYW1lKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0aW1lb3V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBmbiA9IHRpbWVvdXRzLnNoaWZ0KCk7XG4gICAgICAgIGZuKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGhhbmRsZU1lc3NhZ2UsIHRydWUpO1xuXG4gIC8vIEFkZCB0aGUgb25lIHRoaW5nIHdlIHdhbnQgYWRkZWQgdG8gdGhlIHdpbmRvdyBvYmplY3QuXG4gIHdpbmRvdy5zZXRaZXJvVGltZW91dCA9IHNldFplcm9UaW1lb3V0O1xufSkoKTtcblxuLyogZmlsZTogc3JjL0dhbWVwYWRzLmpzICovXG5cblBMQVlHUk9VTkQuR2FtZXBhZHMgPSBmdW5jdGlvbihhcHApIHtcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIHRoaXMuZ2V0R2FtZXBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMgfHwgbmF2aWdhdG9yLndlYmtpdEdldEdhbWVwYWRzO1xuXG4gIHRoaXMuZ2FtZXBhZG1vdmVFdmVudCA9IHt9O1xuICB0aGlzLmdhbWVwYWRkb3duRXZlbnQgPSB7fTtcbiAgdGhpcy5nYW1lcGFkdXBFdmVudCA9IHt9O1xuXG4gIHRoaXMuZ2FtZXBhZHMgPSB7fTtcblxuICB0aGlzLmFwcC5vbihcInN0ZXBcIiwgdGhpcy5zdGVwLmJpbmQodGhpcykpO1xuXG59O1xuXG5QTEFZR1JPVU5ELkdhbWVwYWRzLnByb3RvdHlwZSA9IHtcblxuICBidXR0b25zOiB7XG4gICAgMDogXCIxXCIsXG4gICAgMTogXCIyXCIsXG4gICAgMjogXCIzXCIsXG4gICAgMzogXCI0XCIsXG4gICAgNDogXCJsMVwiLFxuICAgIDU6IFwicjFcIixcbiAgICA2OiBcImwyXCIsXG4gICAgNzogXCJyMlwiLFxuICAgIDg6IFwic2VsZWN0XCIsXG4gICAgOTogXCJzdGFydFwiLFxuICAgIDEyOiBcInVwXCIsXG4gICAgMTM6IFwiZG93blwiLFxuICAgIDE0OiBcImxlZnRcIixcbiAgICAxNTogXCJyaWdodFwiXG4gIH0sXG5cbiAgemVyb1N0YXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBidXR0b25zID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAxNTsgaSsrKSB7XG4gICAgICBidXR0b25zLnB1c2goe1xuICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBheGVzOiBbXSxcbiAgICAgIGJ1dHRvbnM6IGJ1dHRvbnNcbiAgICB9O1xuXG4gIH0sXG5cbiAgY3JlYXRlR2FtZXBhZDogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgYnV0dG9uczoge30sXG4gICAgICBzdGlja3M6IFt7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfV1cbiAgICB9O1xuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmJ1dHRvbnNbaV07XG4gICAgICByZXN1bHQuYnV0dG9uc1trZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMpIHJldHVybjtcblxuICAgIHZhciBnYW1lcGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lcGFkcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgY3VycmVudCA9IGdhbWVwYWRzW2ldO1xuXG4gICAgICBpZiAoIWN1cnJlbnQpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoIXRoaXNbaV0pIHRoaXNbaV0gPSB0aGlzLmNyZWF0ZUdhbWVwYWQoKTtcblxuICAgICAgLyogaGF2ZSB0byBjb25jYXQgdGhlIGN1cnJlbnQuYnV0dG9ucyBiZWNhdXNlIHRoZSBhcmUgcmVhZC1vbmx5ICovXG5cbiAgICAgIHZhciBidXR0b25zID0gW10uY29uY2F0KGN1cnJlbnQuYnV0dG9ucyk7XG5cbiAgICAgIC8qIGhhY2sgZm9yIG1pc3NpbmcgIGRwYWRzICovXG5cbiAgICAgIGZvciAodmFyIGggPSAxMjsgaCA8PSAxNTsgaCsrKSB7XG4gICAgICAgIGlmICghYnV0dG9uc1toXSkgYnV0dG9uc1toXSA9IHtcbiAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldmlvdXMgPSB0aGlzW2ldO1xuXG4gICAgICAvKiBheGVzIChzdGlja3MpIHRvIGJ1dHRvbnMgKi9cblxuICAgICAgaWYgKGN1cnJlbnQuYXhlcykge1xuXG4gICAgICAgIGlmIChjdXJyZW50LmF4ZXNbMF0gPCAwKSBidXR0b25zWzE0XS5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGN1cnJlbnQuYXhlc1swXSA+IDApIGJ1dHRvbnNbMTVdLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICBpZiAoY3VycmVudC5heGVzWzFdIDwgMCkgYnV0dG9uc1sxMl0ucHJlc3NlZCA9IHRydWU7XG4gICAgICAgIGlmIChjdXJyZW50LmF4ZXNbMV0gPiAwKSBidXR0b25zWzEzXS5wcmVzc2VkID0gdHJ1ZTtcblxuICAgICAgICBwcmV2aW91cy5zdGlja3NbMF0ueCA9IGN1cnJlbnQuYXhlc1swXS52YWx1ZTtcbiAgICAgICAgcHJldmlvdXMuc3RpY2tzWzBdLnkgPSBjdXJyZW50LmF4ZXNbMV0udmFsdWU7XG4gICAgICAgIHByZXZpb3VzLnN0aWNrc1sxXS54ID0gY3VycmVudC5heGVzWzJdLnZhbHVlO1xuICAgICAgICBwcmV2aW91cy5zdGlja3NbMV0ueSA9IGN1cnJlbnQuYXhlc1szXS52YWx1ZTtcblxuICAgICAgfVxuXG4gICAgICAvKiBjaGVjayBidXR0b25zIGNoYW5nZXMgKi9cblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBidXR0b25zLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnV0dG9uc1tqXTtcblxuICAgICAgICAvKiBnYW1lcGFkIGRvd24gKi9cblxuICAgICAgICBpZiAoYnV0dG9uc1tqXS5wcmVzc2VkICYmICFwcmV2aW91cy5idXR0b25zW2tleV0pIHtcblxuICAgICAgICAgIHByZXZpb3VzLmJ1dHRvbnNba2V5XSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5nYW1lcGFkZG93bkV2ZW50LmJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tqXTtcbiAgICAgICAgICB0aGlzLmdhbWVwYWRkb3duRXZlbnQuZ2FtZXBhZCA9IGk7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyKFwiZ2FtZXBhZGRvd25cIiwgdGhpcy5nYW1lcGFkZG93bkV2ZW50KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLyogZ2FtZXBhZCB1cCAqL1xuICAgICAgICBlbHNlIGlmICghYnV0dG9uc1tqXS5wcmVzc2VkICYmIHByZXZpb3VzLmJ1dHRvbnNba2V5XSkge1xuXG4gICAgICAgICAgcHJldmlvdXMuYnV0dG9uc1trZXldID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5nYW1lcGFkdXBFdmVudC5idXR0b24gPSB0aGlzLmJ1dHRvbnNbal07XG4gICAgICAgICAgdGhpcy5nYW1lcGFkdXBFdmVudC5nYW1lcGFkID0gaTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXIoXCJnYW1lcGFkdXBcIiwgdGhpcy5nYW1lcGFkdXBFdmVudCk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxufTtcblxuUExBWUdST1VORC5VdGlscy5leHRlbmQoUExBWUdST1VORC5HYW1lcGFkcy5wcm90b3R5cGUsIFBMQVlHUk9VTkQuRXZlbnRzLnByb3RvdHlwZSk7XG5cblxuLyogZmlsZTogc3JjL0tleWJvYXJkLmpzICovXG5cblBMQVlHUk9VTkQuS2V5Ym9hcmQgPSBmdW5jdGlvbigpIHtcblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIHRoaXMua2V5cyA9IHt9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bi5iaW5kKHRoaXMpKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXAuYmluZCh0aGlzKSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCB0aGlzLmtleXByZXNzLmJpbmQodGhpcykpO1xuXG4gIHRoaXMua2V5ZG93bkV2ZW50ID0ge307XG4gIHRoaXMua2V5dXBFdmVudCA9IHt9O1xuXG4gIHRoaXMucHJldmVudERlZmF1bHQgPSB0cnVlO1xuXG59O1xuXG5QTEFZR1JPVU5ELktleWJvYXJkLnByb3RvdHlwZSA9IHtcblxuICBrZXljb2Rlczoge1xuICAgIDM3OiBcImxlZnRcIixcbiAgICAzODogXCJ1cFwiLFxuICAgIDM5OiBcInJpZ2h0XCIsXG4gICAgNDA6IFwiZG93blwiLFxuICAgIDQ1OiBcImluc2VydFwiLFxuICAgIDQ2OiBcImRlbGV0ZVwiLFxuICAgIDg6IFwiYmFja3NwYWNlXCIsXG4gICAgOTogXCJ0YWJcIixcbiAgICAxMzogXCJlbnRlclwiLFxuICAgIDE2OiBcInNoaWZ0XCIsXG4gICAgMTc6IFwiY3RybFwiLFxuICAgIDE4OiBcImFsdFwiLFxuICAgIDE5OiBcInBhdXNlXCIsXG4gICAgMjA6IFwiY2Fwc2xvY2tcIixcbiAgICAyNzogXCJlc2NhcGVcIixcbiAgICAzMjogXCJzcGFjZVwiLFxuICAgIDMzOiBcInBhZ2V1cFwiLFxuICAgIDM0OiBcInBhZ2Vkb3duXCIsXG4gICAgMzU6IFwiZW5kXCIsXG4gICAgMzY6IFwiaG9tZVwiLFxuICAgIDExMjogXCJmMVwiLFxuICAgIDExMzogXCJmMlwiLFxuICAgIDExNDogXCJmM1wiLFxuICAgIDExNTogXCJmNFwiLFxuICAgIDExNjogXCJmNVwiLFxuICAgIDExNzogXCJmNlwiLFxuICAgIDExODogXCJmN1wiLFxuICAgIDExOTogXCJmOFwiLFxuICAgIDEyMDogXCJmOVwiLFxuICAgIDEyMTogXCJmMTBcIixcbiAgICAxMjI6IFwiZjExXCIsXG4gICAgMTIzOiBcImYxMlwiLFxuICAgIDE0NDogXCJudW1sb2NrXCIsXG4gICAgMTQ1OiBcInNjcm9sbGxvY2tcIixcbiAgICAxODY6IFwic2VtaWNvbG9uXCIsXG4gICAgMTg3OiBcImVxdWFsXCIsXG4gICAgMTg4OiBcImNvbW1hXCIsXG4gICAgMTg5OiBcImRhc2hcIixcbiAgICAxOTA6IFwicGVyaW9kXCIsXG4gICAgMTkxOiBcInNsYXNoXCIsXG4gICAgMTkyOiBcImdyYXZlYWNjZW50XCIsXG4gICAgMjE5OiBcIm9wZW5icmFja2V0XCIsXG4gICAgMjIwOiBcImJhY2tzbGFzaFwiLFxuICAgIDIyMTogXCJjbG9zZWJyYWtldFwiLFxuICAgIDIyMjogXCJzaW5nbGVxdW90ZVwiXG4gIH0sXG5cbiAga2V5cHJlc3M6IGZ1bmN0aW9uKGUpIHtcblxuICB9LFxuXG4gIGtleWRvd246IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS53aGljaCA+PSA0OCAmJiBlLndoaWNoIDw9IDkwKSB2YXIga2V5TmFtZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9Mb3dlckNhc2UoKTtcbiAgICBlbHNlIHZhciBrZXlOYW1lID0gdGhpcy5rZXljb2Rlc1tlLndoaWNoXTtcblxuICAgIGlmICh0aGlzLmtleXNba2V5TmFtZV0pIHJldHVybjtcblxuICAgIHRoaXMua2V5ZG93bkV2ZW50LmtleSA9IGtleU5hbWU7XG4gICAgdGhpcy5rZXlkb3duRXZlbnQub3JpZ2luYWwgPSBlO1xuXG4gICAgdGhpcy5rZXlzW2tleU5hbWVdID0gdHJ1ZTtcblxuICAgIHRoaXMudHJpZ2dlcihcImtleWRvd25cIiwgdGhpcy5rZXlkb3duRXZlbnQpO1xuXG4gICAgaWYgKHRoaXMucHJldmVudERlZmF1bHQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgZS5rZXlDb2RlID0gMDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9LFxuXG4gIGtleXVwOiBmdW5jdGlvbihlKSB7XG5cbiAgICBpZiAoZS53aGljaCA+PSA0OCAmJiBlLndoaWNoIDw9IDkwKSB2YXIga2V5TmFtZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9Mb3dlckNhc2UoKTtcbiAgICBlbHNlIHZhciBrZXlOYW1lID0gdGhpcy5rZXljb2Rlc1tlLndoaWNoXTtcblxuICAgIHRoaXMua2V5dXBFdmVudC5rZXkgPSBrZXlOYW1lO1xuICAgIHRoaXMua2V5dXBFdmVudC5vcmlnaW5hbCA9IGU7XG5cbiAgICB0aGlzLmtleXNba2V5TmFtZV0gPSBmYWxzZTtcblxuICAgIHRoaXMudHJpZ2dlcihcImtleXVwXCIsIHRoaXMua2V5dXBFdmVudCk7XG4gIH1cblxufTtcblxuUExBWUdST1VORC5VdGlscy5leHRlbmQoUExBWUdST1VORC5LZXlib2FyZC5wcm90b3R5cGUsIFBMQVlHUk9VTkQuRXZlbnRzLnByb3RvdHlwZSk7XG5cblxuXG4vKiBmaWxlOiBzcmMvUG9pbnRlci5qcyAqL1xuXG5QTEFZR1JPVU5ELlBvaW50ZXIgPSBmdW5jdGlvbihhcHApIHtcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICBhcHAub24oXCJ0b3VjaHN0YXJ0XCIsIHRoaXMudG91Y2hzdGFydCwgdGhpcyk7XG4gIGFwcC5vbihcInRvdWNoZW5kXCIsIHRoaXMudG91Y2hlbmQsIHRoaXMpO1xuICBhcHAub24oXCJ0b3VjaG1vdmVcIiwgdGhpcy50b3VjaG1vdmUsIHRoaXMpO1xuXG4gIGFwcC5vbihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlbW92ZSwgdGhpcyk7XG4gIGFwcC5vbihcIm1vdXNlZG93blwiLCB0aGlzLm1vdXNlZG93biwgdGhpcyk7XG4gIGFwcC5vbihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZXVwLCB0aGlzKTtcblxuICB0aGlzLnBvaW50ZXJzID0gYXBwLnBvaW50ZXJzID0ge307XG5cbn07XG5cblBMQVlHUk9VTkQuUG9pbnRlci5wbHVnaW4gPSB0cnVlO1xuXG5QTEFZR1JPVU5ELlBvaW50ZXIucHJvdG90eXBlID0ge1xuXG4gIHVwZGF0ZVBvaW50ZXI6IGZ1bmN0aW9uKHBvaW50ZXIpIHtcblxuICAgIHRoaXMucG9pbnRlcnNbcG9pbnRlci5pZF0gPSBwb2ludGVyO1xuXG4gIH0sXG5cbiAgcmVtb3ZlUG9pbnRlcjogZnVuY3Rpb24ocG9pbnRlcikge1xuXG4gICAgZGVsZXRlIHRoaXMucG9pbnRlcnNbcG9pbnRlci5pZF07XG5cbiAgfSxcblxuICB0b3VjaHN0YXJ0OiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLnRvdWNoID0gdHJ1ZTtcblxuICAgIHRoaXMudXBkYXRlUG9pbnRlcihlKTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJkb3duXCIsIGUpO1xuXG4gIH0sXG5cbiAgdG91Y2hlbmQ6IGZ1bmN0aW9uKGUpIHtcblxuICAgIGUudG91Y2ggPSB0cnVlO1xuXG4gICAgdGhpcy5yZW1vdmVQb2ludGVyKGUpO1xuXG4gICAgdGhpcy5hcHAuZW1pdEdsb2JhbEV2ZW50KFwicG9pbnRlcnVwXCIsIGUpO1xuXG4gIH0sXG5cbiAgdG91Y2htb3ZlOiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLnRvdWNoID0gdHJ1ZTtcblxuICAgIHRoaXMudXBkYXRlUG9pbnRlcihlKTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJtb3ZlXCIsIGUpO1xuXG4gIH0sXG5cbiAgbW91c2Vtb3ZlOiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLm1vdXNlID0gdHJ1ZTtcblxuICAgIHRoaXMudXBkYXRlUG9pbnRlcihlKTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJtb3ZlXCIsIGUpO1xuXG4gIH0sXG5cbiAgbW91c2Vkb3duOiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLm1vdXNlID0gdHJ1ZTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJkb3duXCIsIGUpO1xuXG4gIH0sXG5cbiAgbW91c2V1cDogZnVuY3Rpb24oZSkge1xuXG4gICAgZS5tb3VzZSA9IHRydWU7XG5cbiAgICB0aGlzLmFwcC5lbWl0R2xvYmFsRXZlbnQoXCJwb2ludGVydXBcIiwgZSk7XG5cbiAgfSxcblxuICBtb3VzZXdoZWVsOiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLm1vdXNlID0gdHJ1ZTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJ3aGVlbFwiLCBlKTtcblxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9Mb2FkZXIuanMgKi9cblxuLyogTG9hZGVyICovXG5cblBMQVlHUk9VTkQuTG9hZGVyID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgUExBWUdST1VORC5FdmVudHMuY2FsbCh0aGlzKTtcblxuICB0aGlzLnJlc2V0KCk7XG5cbn07XG5cblBMQVlHUk9VTkQuTG9hZGVyLnByb3RvdHlwZSA9IHtcblxuICAvKiBsb2FkZXIgKi9cblxuICBhZGQ6IGZ1bmN0aW9uKGlkKSB7XG5cbiAgICB0aGlzLnF1ZXVlKys7XG4gICAgdGhpcy5jb3VudCsrO1xuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLnRyaWdnZXIoXCJhZGRcIiwgaWQpO1xuXG4gICAgcmV0dXJuIGlkO1xuXG4gIH0sXG5cbiAgZXJyb3I6IGZ1bmN0aW9uKGlkKSB7XG5cbiAgICB0aGlzLnRyaWdnZXIoXCJlcnJvclwiLCBpZCk7XG5cbiAgfSxcblxuICBzdWNjZXNzOiBmdW5jdGlvbihpZCkge1xuXG4gICAgdGhpcy5xdWV1ZS0tO1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IDEgLSB0aGlzLnF1ZXVlIC8gdGhpcy5jb3VudDtcblxuICAgIHRoaXMudHJpZ2dlcihcImxvYWRcIiwgaWQpO1xuXG4gICAgaWYgKHRoaXMucXVldWUgPD0gMCkge1xuICAgICAgdGhpcy50cmlnZ2VyKFwicmVhZHlcIik7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5xdWV1ZSA9IDA7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5yZWFkeSA9IHRydWU7XG5cbiAgfVxufTtcblxuUExBWUdST1VORC5VdGlscy5leHRlbmQoUExBWUdST1VORC5Mb2FkZXIucHJvdG90eXBlLCBQTEFZR1JPVU5ELkV2ZW50cy5wcm90b3R5cGUpO1xuXG4vKiBmaWxlOiBzcmMvTW91c2UuanMgKi9cblxuUExBWUdST1VORC5Nb3VzZSA9IGZ1bmN0aW9uKGFwcCwgZWxlbWVudCkge1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgdGhpcy5idXR0b25zID0ge307XG5cbiAgdGhpcy5wcmV2ZW50Q29udGV4dE1lbnUgPSB0cnVlO1xuXG4gIHRoaXMubW91c2Vtb3ZlRXZlbnQgPSB7fTtcbiAgdGhpcy5tb3VzZWRvd25FdmVudCA9IHt9O1xuICB0aGlzLm1vdXNldXBFdmVudCA9IHt9O1xuICB0aGlzLm1vdXNld2hlZWxFdmVudCA9IHt9O1xuXG4gIHRoaXMueCA9IDA7XG4gIHRoaXMueSA9IDA7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2Vtb3ZlLmJpbmQodGhpcykpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZWRvd24uYmluZCh0aGlzKSk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZXVwLmJpbmQodGhpcykpO1xuXG4gIHRoaXMuZW5hYmxlTW91c2V3aGVlbCgpO1xuXG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZnVuY3Rpb24oZSkge1xuICAgIGlmIChzZWxmLnByZXZlbnRDb250ZXh0TWVudSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBlbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jayA9IGVsZW1lbnQucmVxdWVzdFBvaW50ZXJMb2NrIHx8XG4gICAgZWxlbWVudC5tb3pSZXF1ZXN0UG9pbnRlckxvY2sgfHxcbiAgICBlbGVtZW50LndlYmtpdFJlcXVlc3RQb2ludGVyTG9jaztcblxuICBkb2N1bWVudC5leGl0UG9pbnRlckxvY2sgPSBkb2N1bWVudC5leGl0UG9pbnRlckxvY2sgfHxcbiAgICBkb2N1bWVudC5tb3pFeGl0UG9pbnRlckxvY2sgfHxcbiAgICBkb2N1bWVudC53ZWJraXRFeGl0UG9pbnRlckxvY2s7XG5cblxuICB0aGlzLmhhbmRsZVJlc2l6ZSgpO1xufTtcblxuUExBWUdST1VORC5Nb3VzZS5wcm90b3R5cGUgPSB7XG5cbiAgbG9jazogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmxvY2tlZCA9IHRydWU7XG4gICAgdGhpcy5lbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xuXG4gIH0sXG5cbiAgdW5sb2NrOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG5cbiAgfSxcblxuICBnZXRFbGVtZW50T2Zmc2V0OiBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICB2YXIgb2Zmc2V0WCA9IDA7XG4gICAgdmFyIG9mZnNldFkgPSAwO1xuXG4gICAgZG8ge1xuICAgICAgb2Zmc2V0WCArPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICBvZmZzZXRZICs9IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgIH1cblxuICAgIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogb2Zmc2V0WCxcbiAgICAgIHk6IG9mZnNldFlcbiAgICB9O1xuXG4gIH0sXG5cbiAgaGFuZGxlUmVzaXplOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZWxlbWVudE9mZnNldCA9IHRoaXMuZ2V0RWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQpO1xuXG4gIH0sXG5cbiAgbW91c2Vtb3ZlOiBQTEFZR1JPVU5ELlV0aWxzLnRocm90dGxlKGZ1bmN0aW9uKGUpIHtcblxuICAgIHRoaXMueCA9IHRoaXMubW91c2Vtb3ZlRXZlbnQueCA9IChlLnBhZ2VYIC0gdGhpcy5lbGVtZW50T2Zmc2V0LnggLSB0aGlzLmFwcC5vZmZzZXRYKSAvIHRoaXMuYXBwLnNjYWxlIHwgMDtcbiAgICB0aGlzLnkgPSB0aGlzLm1vdXNlbW92ZUV2ZW50LnkgPSAoZS5wYWdlWSAtIHRoaXMuZWxlbWVudE9mZnNldC55IC0gdGhpcy5hcHAub2Zmc2V0WSkgLyB0aGlzLmFwcC5zY2FsZSB8IDA7XG5cbiAgICB0aGlzLm1vdXNlbW92ZUV2ZW50Lm9yaWdpbmFsID0gZTtcblxuICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmVFdmVudC5tb3ZlbWVudFggPSBlLm1vdmVtZW50WCB8fFxuICAgICAgICBlLm1vek1vdmVtZW50WCB8fFxuICAgICAgICBlLndlYmtpdE1vdmVtZW50WCB8fFxuICAgICAgICAwO1xuXG4gICAgICB0aGlzLm1vdXNlbW92ZUV2ZW50Lm1vdmVtZW50WSA9IGUubW92ZW1lbnRZIHx8XG4gICAgICAgIGUubW96TW92ZW1lbnRZIHx8XG4gICAgICAgIGUud2Via2l0TW92ZW1lbnRZIHx8XG4gICAgICAgIDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXBwLm1vdXNlVG9Ub3VjaCkge1xuICAgICAgLy8gICAgICBpZiAodGhpcy5sZWZ0KSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZUV2ZW50LmlkID0gdGhpcy5tb3VzZW1vdmVFdmVudC5pZGVudGlmaWVyID0gMjU1O1xuICAgICAgdGhpcy50cmlnZ2VyKFwidG91Y2htb3ZlXCIsIHRoaXMubW91c2Vtb3ZlRXZlbnQpO1xuICAgICAgLy8gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlRXZlbnQuaWQgPSB0aGlzLm1vdXNlbW92ZUV2ZW50LmlkZW50aWZpZXIgPSAyNTU7XG4gICAgICB0aGlzLnRyaWdnZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZW1vdmVFdmVudCk7XG4gICAgfVxuXG4gIH0sIDE2KSxcblxuICBtb3VzZWRvd246IGZ1bmN0aW9uKGUpIHtcblxuICAgIHZhciBidXR0b25OYW1lID0gW1wibGVmdFwiLCBcIm1pZGRsZVwiLCBcInJpZ2h0XCJdW2UuYnV0dG9uXTtcblxuICAgIHRoaXMubW91c2Vkb3duRXZlbnQueCA9IHRoaXMubW91c2Vtb3ZlRXZlbnQueDtcbiAgICB0aGlzLm1vdXNlZG93bkV2ZW50LnkgPSB0aGlzLm1vdXNlbW92ZUV2ZW50Lnk7XG4gICAgdGhpcy5tb3VzZWRvd25FdmVudC5idXR0b24gPSBidXR0b25OYW1lO1xuICAgIHRoaXMubW91c2Vkb3duRXZlbnQub3JpZ2luYWwgPSBlO1xuXG4gICAgdGhpc1tidXR0b25OYW1lXSA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlZG93bkV2ZW50LmlkID0gdGhpcy5tb3VzZWRvd25FdmVudC5pZGVudGlmaWVyID0gMjU1O1xuXG4gICAgaWYgKHRoaXMuYXBwLm1vdXNlVG9Ub3VjaCkge1xuICAgICAgdGhpcy50cmlnZ2VyKFwidG91Y2htb3ZlXCIsIHRoaXMubW91c2Vkb3duRXZlbnQpO1xuICAgICAgdGhpcy50cmlnZ2VyKFwidG91Y2hzdGFydFwiLCB0aGlzLm1vdXNlZG93bkV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmlnZ2VyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2Vkb3duRXZlbnQpO1xuICAgIH1cblxuICB9LFxuXG4gIG1vdXNldXA6IGZ1bmN0aW9uKGUpIHtcblxuICAgIHZhciBidXR0b25OYW1lID0gW1wibGVmdFwiLCBcIm1pZGRsZVwiLCBcInJpZ2h0XCJdW2UuYnV0dG9uXTtcblxuICAgIHRoaXMubW91c2V1cEV2ZW50LnggPSB0aGlzLm1vdXNlbW92ZUV2ZW50Lng7XG4gICAgdGhpcy5tb3VzZXVwRXZlbnQueSA9IHRoaXMubW91c2Vtb3ZlRXZlbnQueTtcbiAgICB0aGlzLm1vdXNldXBFdmVudC5idXR0b24gPSBidXR0b25OYW1lO1xuICAgIHRoaXMubW91c2V1cEV2ZW50Lm9yaWdpbmFsID0gZTtcblxuICAgIHRoaXMubW91c2V1cEV2ZW50LmlkID0gdGhpcy5tb3VzZXVwRXZlbnQuaWRlbnRpZmllciA9IDI1NTtcblxuICAgIGlmICh0aGlzLmFwcC5tb3VzZVRvVG91Y2gpIHtcblxuICAgICAgdGhpcy50cmlnZ2VyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZXVwRXZlbnQpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy50cmlnZ2VyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNldXBFdmVudCk7XG5cbiAgICB9XG5cbiAgICB0aGlzW2J1dHRvbk5hbWVdID0gZmFsc2U7XG5cbiAgfSxcblxuICBtb3VzZXdoZWVsOiBmdW5jdGlvbihlKSB7XG5cbiAgICB0aGlzLm1vdXNld2hlZWxFdmVudC54ID0gdGhpcy5tb3VzZW1vdmVFdmVudC54O1xuICAgIHRoaXMubW91c2V3aGVlbEV2ZW50LnkgPSB0aGlzLm1vdXNlbW92ZUV2ZW50Lnk7XG4gICAgdGhpcy5tb3VzZXdoZWVsRXZlbnQuYnV0dG9uID0gW1wibm9uZVwiLCBcImxlZnRcIiwgXCJtaWRkbGVcIiwgXCJyaWdodFwiXVtlLmJ1dHRvbl07XG4gICAgdGhpcy5tb3VzZXdoZWVsRXZlbnQub3JpZ2luYWwgPSBlO1xuICAgIHRoaXMubW91c2V3aGVlbEV2ZW50LmlkID0gdGhpcy5tb3VzZXdoZWVsRXZlbnQuaWRlbnRpZmllciA9IDI1NTtcblxuICAgIHRoaXNbZS5idXR0b25dID0gZmFsc2U7XG5cbiAgICB0aGlzLnRyaWdnZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMubW91c2V3aGVlbEV2ZW50KTtcblxuICB9LFxuXG5cbiAgZW5hYmxlTW91c2V3aGVlbDogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZXZlbnROYW1lcyA9ICdvbndoZWVsJyBpbiBkb2N1bWVudCB8fCBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gOSA/IFsnd2hlZWwnXSA6IFsnbW91c2V3aGVlbCcsICdEb21Nb3VzZVNjcm9sbCcsICdNb3pNb3VzZVBpeGVsU2Nyb2xsJ107XG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5tb3VzZXdoZWVsLmJpbmQodGhpcyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgaSA9IGV2ZW50TmFtZXMubGVuZ3RoOyBpOykge1xuXG4gICAgICBzZWxmLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWVzWy0taV0sIFBMQVlHUk9VTkQuVXRpbHMudGhyb3R0bGUoZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgb3JnRXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQsXG4gICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICBkZWx0YSA9IDAsXG4gICAgICAgICAgZGVsdGFYID0gMCxcbiAgICAgICAgICBkZWx0YVkgPSAwLFxuICAgICAgICAgIGFic0RlbHRhID0gMCxcbiAgICAgICAgICBhYnNEZWx0YVhZID0gMCxcbiAgICAgICAgICBmbjtcblxuICAgICAgICBvcmdFdmVudC50eXBlID0gXCJtb3VzZXdoZWVsXCI7XG5cbiAgICAgICAgLy8gT2xkIHNjaG9vbCBzY3JvbGx3aGVlbCBkZWx0YVxuICAgICAgICBpZiAob3JnRXZlbnQud2hlZWxEZWx0YSkge1xuICAgICAgICAgIGRlbHRhID0gb3JnRXZlbnQud2hlZWxEZWx0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcmdFdmVudC5kZXRhaWwpIHtcbiAgICAgICAgICBkZWx0YSA9IG9yZ0V2ZW50LmRldGFpbCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTmV3IHNjaG9vbCB3aGVlbCBkZWx0YSAod2hlZWwgZXZlbnQpXG4gICAgICAgIGlmIChvcmdFdmVudC5kZWx0YVkpIHtcbiAgICAgICAgICBkZWx0YVkgPSBvcmdFdmVudC5kZWx0YVkgKiAtMTtcbiAgICAgICAgICBkZWx0YSA9IGRlbHRhWTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlYmtpdFxuICAgICAgICBpZiAob3JnRXZlbnQud2hlZWxEZWx0YVkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbHRhWSA9IG9yZ0V2ZW50LndoZWVsRGVsdGFZO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IGRlbHRhID8gZGVsdGEgOiBkZWx0YVk7XG5cbiAgICAgICAgc2VsZi5tb3VzZXdoZWVsRXZlbnQueCA9IHNlbGYubW91c2Vtb3ZlRXZlbnQueDtcbiAgICAgICAgc2VsZi5tb3VzZXdoZWVsRXZlbnQueSA9IHNlbGYubW91c2Vtb3ZlRXZlbnQueTtcbiAgICAgICAgc2VsZi5tb3VzZXdoZWVsRXZlbnQuZGVsdGEgPSByZXN1bHQgLyBNYXRoLmFicyhyZXN1bHQpO1xuICAgICAgICBzZWxmLm1vdXNld2hlZWxFdmVudC5vcmlnaW5hbCA9IG9yZ0V2ZW50O1xuXG4gICAgICAgIGNhbGxiYWNrKHNlbGYubW91c2V3aGVlbEV2ZW50KTtcblxuICAgICAgICBvcmdFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB9LCA0MCksIGZhbHNlKTtcbiAgICB9XG5cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELlV0aWxzLmV4dGVuZChQTEFZR1JPVU5ELk1vdXNlLnByb3RvdHlwZSwgUExBWUdST1VORC5FdmVudHMucHJvdG90eXBlKTtcblxuLyogZmlsZTogc3JjL1NvdW5kLmpzICovXG5cblBMQVlHUk9VTkQuU291bmQgPSBmdW5jdGlvbihhcHApIHtcblxuICB2YXIgYXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0IHx8IHdpbmRvdy5tb3pBdWRpb0NvbnRleHQ7XG5cbiAgaWYgKGF1ZGlvQ29udGV4dCkge1xuXG4gICAgaWYgKCFQTEFZR1JPVU5ELmF1ZGlvQ29udGV4dCkgUExBWUdST1VORC5hdWRpb0NvbnRleHQgPSBuZXcgYXVkaW9Db250ZXh0O1xuXG4gICAgYXBwLmF1ZGlvQ29udGV4dCA9IFBMQVlHUk9VTkQuYXVkaW9Db250ZXh0O1xuICAgIGFwcC5zb3VuZCA9IG5ldyBQTEFZR1JPVU5ELlNvdW5kV2ViQXVkaW9BUEkoYXBwLCBhcHAuYXVkaW9Db250ZXh0KTtcbiAgICBhcHAubXVzaWMgPSBuZXcgUExBWUdST1VORC5Tb3VuZFdlYkF1ZGlvQVBJKGFwcCwgYXBwLmF1ZGlvQ29udGV4dCk7XG5cbiAgfSBlbHNlIHtcblxuICAgIGFwcC5zb3VuZCA9IG5ldyBQTEFZR1JPVU5ELlNvdW5kQXVkaW8oYXBwKTtcbiAgICBhcHAubXVzaWMgPSBuZXcgUExBWUdST1VORC5Tb3VuZEF1ZGlvKGFwcCk7XG5cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZS5wbGF5U291bmQgPSBmdW5jdGlvbihrZXksIGxvb3ApIHtcblxuICByZXR1cm4gdGhpcy5zb3VuZC5wbGF5KGtleSwgbG9vcCk7XG5cbn07XG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLnN0b3BTb3VuZCA9IGZ1bmN0aW9uKHNvdW5kKSB7XG5cbiAgdGhpcy5zb3VuZC5zdG9wKHNvdW5kKTtcblxufTtcblxuUExBWUdST1VORC5BcHBsaWNhdGlvbi5wcm90b3R5cGUubG9hZFNvdW5kID0gZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIHRoaXMubG9hZFNvdW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG59O1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZS5sb2FkU291bmRzID0gZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cbiAgICAvKiBwb2x5bW9ycGhpc20gYXQgaXRzIGZpbmVzdCAqL1xuXG4gICAgaWYgKHR5cGVvZiBhcmcgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgZm9yICh2YXIga2V5IGluIGFyZykgdGhpcy5sb2FkU291bmRzKGFyZ1trZXldKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvdW5kLmxvYWQoYXJnKTtcbiAgICB9XG4gIH1cblxufTtcblxuLyogZmlsZTogc3JjL1NvdW5kV2ViQXVkaW9BUEkuanMgKi9cblxuUExBWUdST1VORC5Tb3VuZFdlYkF1ZGlvQVBJID0gZnVuY3Rpb24oYXBwLCBhdWRpb0NvbnRleHQpIHtcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICB2YXIgY2FuUGxheU1wMyA9IChuZXcgQXVkaW8pLmNhblBsYXlUeXBlKFwiYXVkaW8vbXAzXCIpO1xuICB2YXIgY2FuUGxheU9nZyA9IChuZXcgQXVkaW8pLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJyk7XG5cbiAgaWYgKHRoaXMuYXBwLnByZWZlcmVkQXVkaW9Gb3JtYXQgPT09IFwibXAzXCIpIHtcblxuICAgIGlmIChjYW5QbGF5TXAzKSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJtcDNcIjtcbiAgICBlbHNlIHRoaXMuYXVkaW9Gb3JtYXQgPSBcIm9nZ1wiO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBpZiAoY2FuUGxheU9nZykgdGhpcy5hdWRpb0Zvcm1hdCA9IFwib2dnXCI7XG4gICAgZWxzZSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJtcDNcIjtcblxuICB9XG5cbiAgdGhpcy5jb250ZXh0ID0gYXVkaW9Db250ZXh0O1xuXG4gIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXG4gIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gIHRoaXMuY29tcHJlc3NvciA9IHRoaXMuY29udGV4dC5jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IoKTtcbiAgdGhpcy5jb21wcmVzc29yLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG5cbiAgdGhpcy5vdXRwdXQgPSB0aGlzLmdhaW5Ob2RlO1xuXG4gIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDEuMDtcblxuICB0aGlzLnBvb2wgPSBbXTtcbiAgdGhpcy52b2x1bWUgPSAxLjA7XG5cbiAgdGhpcy5zZXRNYXN0ZXJQb3NpdGlvbigwLCAwLCAwKTtcblxuICB0aGlzLmxvb3BzID0gW107XG5cbiAgdGhpcy5hcHAub24oXCJzdGVwXCIsIHRoaXMuc3RlcC5iaW5kKHRoaXMpKTtcblxufTtcblxuUExBWUdST1VORC5Tb3VuZFdlYkF1ZGlvQVBJLnByb3RvdHlwZSA9IHtcblxuICBidWZmZXJzOiB7fSxcbiAgYWxpYXNlczoge30sXG5cbiAgYWxpYXM6IGZ1bmN0aW9uKGFsaWFzLCBzb3VyY2UsIHZvbHVtZSwgcmF0ZSkge1xuXG4gICAgdGhpcy5hbGlhc2VzW2FsaWFzXSA9IHtcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgdm9sdW1lOiB2b2x1bWUsXG4gICAgICByYXRlOiByYXRlXG4gICAgfTtcblxuICB9LFxuXG4gIHNldE1hc3RlcjogZnVuY3Rpb24odm9sdW1lKSB7XG5cbiAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcblxuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHZvbHVtZTtcblxuICB9LFxuXG4gIGxvYWQ6IGZ1bmN0aW9uKGZpbGUpIHtcblxuICAgIHZhciBlbnRyeSA9IHRoaXMuYXBwLmdldEFzc2V0RW50cnkoZmlsZSwgXCJzb3VuZHNcIiwgdGhpcy5hdWRpb0Zvcm1hdCk7XG5cbiAgICB2YXIgc2FtcGxlciA9IHRoaXM7XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIGVudHJ5LnVybCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG5cbiAgICB2YXIgaWQgPSB0aGlzLmFwcC5sb2FkZXIuYWRkKGVudHJ5LnVybCk7XG5cbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICBzYW1wbGVyLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHRoaXMucmVzcG9uc2UsIGZ1bmN0aW9uKGRlY29kZWRCdWZmZXIpIHtcbiAgICAgICAgc2FtcGxlci5idWZmZXJzW2VudHJ5LmtleV0gPSBkZWNvZGVkQnVmZmVyO1xuICAgICAgICBzYW1wbGVyLmFwcC5sb2FkZXIuc3VjY2VzcyhlbnRyeS51cmwpO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXF1ZXN0LnNlbmQoKTtcblxuICB9LFxuXG4gIGNsZWFuQXJyYXk6IGZ1bmN0aW9uKGFycmF5LCBwcm9wZXJ0eSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGFycmF5W2ldID09PSBudWxsIHx8IChwcm9wZXJ0eSAmJiBhcnJheVtpXVtwcm9wZXJ0eV0pKSB7XG4gICAgICAgIGFycmF5LnNwbGljZShpLS0sIDEpO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgc2V0TWFzdGVyUG9zaXRpb246IGZ1bmN0aW9uKHgsIHksIHopIHtcblxuICAgIHRoaXMubWFzdGVyUG9zaXRpb24gPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHo6IHpcbiAgICB9O1xuXG4gICAgdGhpcy5jb250ZXh0Lmxpc3RlbmVyLnNldFBvc2l0aW9uKHgsIHksIHopXG4gICAgICAvLyB0aGlzLmNvbnRleHQubGlzdGVuZXIuc2V0T3JpZW50YXRpb24oMCwgMCwgLTEsIDAsIDEsIDApO1xuICAgICAgLy8gdGhpcy5jb250ZXh0Lmxpc3RlbmVyLmRvcHBsZXJGYWN0b3IgPSAxO1xuICAgICAgLy8gdGhpcy5jb250ZXh0Lmxpc3RlbmVyLnNwZWVkT2ZTb3VuZCA9IDM0My4zO1xuICB9LFxuXG4gIGdldFNvdW5kQnVmZmVyOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucG9vbC5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcblxuICAgICAgICB2YXIgYnVmZmVyLCBnYWluLCBwYW5uZXI7XG5cbiAgICAgICAgdmFyIG5vZGVzID0gW1xuICAgICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKSxcbiAgICAgICAgICBnYWluID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKSxcbiAgICAgICAgICBwYW5uZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlUGFubmVyKClcbiAgICAgICAgXTtcblxuICAgICAgICBwYW5uZXIuZGlzdGFuY2VNb2RlbCA9IFwibGluZWFyXCI7XG5cbiAgICAgICAgLy8gMSAtIHJvbGxvZmZGYWN0b3IgKiAoZGlzdGFuY2UgLSByZWZEaXN0YW5jZSkgLyAobWF4RGlzdGFuY2UgLSByZWZEaXN0YW5jZSlcbiAgICAgICAgLy8gcmVmRGlzdGFuY2UgLyAocmVmRGlzdGFuY2UgKyByb2xsb2ZmRmFjdG9yICogKGRpc3RhbmNlIC0gcmVmRGlzdGFuY2UpKVxuICAgICAgICBwYW5uZXIucmVmRGlzdGFuY2UgPSAxO1xuICAgICAgICBwYW5uZXIubWF4RGlzdGFuY2UgPSA2MDA7XG4gICAgICAgIHBhbm5lci5yb2xsb2ZmRmFjdG9yID0gMS4wO1xuXG5cbiAgICAgICAgLy8gcGFubmVyLnNldE9yaWVudGF0aW9uKC0xLCAtMSwgMCk7XG5cbiAgICAgICAgdGhpcy5wb29sLnB1c2gobm9kZXMpO1xuXG4gICAgICAgIG5vZGVzWzBdLmNvbm5lY3Qobm9kZXNbMV0pO1xuICAgICAgICAvLyBub2Rlc1sxXS5jb25uZWN0KG5vZGVzWzJdKTtcbiAgICAgICAgbm9kZXNbMV0uY29ubmVjdCh0aGlzLm91dHB1dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucG9vbC5wb3AoKTtcbiAgfSxcblxuICBwbGF5OiBmdW5jdGlvbihuYW1lLCBsb29wKSB7XG5cbiAgICB2YXIgYWxpYXMgPSB0aGlzLmFsaWFzZXNbbmFtZV07XG5cbiAgICB2YXIgbm9kZXMgPSB0aGlzLmdldFNvdW5kQnVmZmVyKCk7XG5cbiAgICBpZiAoYWxpYXMpIG5hbWUgPSBhbGlhcy5zb3VyY2U7XG5cbiAgICBidWZmZXJTb3VyY2UgPSBub2Rlc1swXTtcbiAgICBidWZmZXJTb3VyY2UuZ2Fpbk5vZGUgPSBub2Rlc1sxXTtcbiAgICBidWZmZXJTb3VyY2UucGFubmVyTm9kZSA9IG5vZGVzWzJdO1xuICAgIGJ1ZmZlclNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcnNbbmFtZV07XG4gICAgYnVmZmVyU291cmNlLmxvb3AgPSBsb29wIHx8IGZhbHNlO1xuICAgIGJ1ZmZlclNvdXJjZS5rZXkgPSBuYW1lO1xuXG4gICAgYnVmZmVyU291cmNlLmFsaWFzID0gYWxpYXM7XG5cbiAgICB0aGlzLnNldFZvbHVtZShidWZmZXJTb3VyY2UsIDEuMCk7XG4gICAgdGhpcy5zZXRQbGF5YmFja1JhdGUoYnVmZmVyU291cmNlLCAxLjApO1xuXG4gICAgaWYgKHRoaXMubG9vcCkge1xuICAgICAgLy8gIGJ1ZmZlclNvdXJjZS5sb29wU3RhcnQgPSB0aGlzLmxvb3BTdGFydDtcbiAgICAgIC8vIGJ1ZmZlclNvdXJjZS5sb29wRW5kID0gdGhpcy5sb29wRW5kO1xuICAgIH1cblxuXG4gICAgYnVmZmVyU291cmNlLnN0YXJ0KDApO1xuXG4gICAgYnVmZmVyU291cmNlLnZvbHVtZUxpbWl0ID0gMTtcblxuICAgIHRoaXMuc2V0UG9zaXRpb24oYnVmZmVyU291cmNlLCB0aGlzLm1hc3RlclBvc2l0aW9uLngsIHRoaXMubWFzdGVyUG9zaXRpb24ueSwgdGhpcy5tYXN0ZXJQb3NpdGlvbi56KTtcblxuICAgIHJldHVybiBidWZmZXJTb3VyY2U7XG4gIH0sXG5cbiAgc3RvcDogZnVuY3Rpb24od2hhdCkge1xuXG4gICAgaWYgKCF3aGF0KSByZXR1cm47XG5cbiAgICB3aGF0LnN0b3AoMCk7XG5cbiAgfSxcblxuICBzZXRQbGF5YmFja1JhdGU6IGZ1bmN0aW9uKHNvdW5kLCByYXRlKSB7XG5cbiAgICBpZiAoIXNvdW5kKSByZXR1cm47XG5cbiAgICBpZiAoc291bmQuYWxpYXMpIHJhdGUgKj0gc291bmQuYWxpYXMucmF0ZTtcblxuICAgIHJldHVybiBzb3VuZC5wbGF5YmFja1JhdGUudmFsdWUgPSByYXRlO1xuICB9LFxuXG4gIHNldFBvc2l0aW9uOiBmdW5jdGlvbihzb3VuZCwgeCwgeSwgeikge1xuXG4gICAgaWYgKCFzb3VuZCkgcmV0dXJuO1xuXG4gICAgc291bmQucGFubmVyTm9kZS5zZXRQb3NpdGlvbih4LCB5IHx8IDAsIHogfHwgMCk7XG4gIH0sXG5cbiAgc2V0VmVsb2NpdHk6IGZ1bmN0aW9uKHNvdW5kLCB4LCB5LCB6KSB7XG5cbiAgICBpZiAoIXNvdW5kKSByZXR1cm47XG5cbiAgICBzb3VuZC5wYW5uZXJOb2RlLnNldFBvc2l0aW9uKHgsIHkgfHwgMCwgeiB8fCAwKTtcblxuICB9LFxuXG4gIGdldFZvbHVtZTogZnVuY3Rpb24oc291bmQpIHtcblxuICAgIGlmICghc291bmQpIHJldHVybjtcblxuICAgIHJldHVybiBzb3VuZC5nYWluTm9kZS5nYWluLnZhbHVlO1xuXG4gIH0sXG5cbiAgc2V0Vm9sdW1lOiBmdW5jdGlvbihzb3VuZCwgdm9sdW1lKSB7XG5cbiAgICBpZiAoIXNvdW5kKSByZXR1cm47XG5cbiAgICBpZiAoc291bmQuYWxpYXMpIHZvbHVtZSAqPSBzb3VuZC5hbGlhcy52b2x1bWU7XG5cbiAgICByZXR1cm4gc291bmQuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IE1hdGgubWF4KDAsIHZvbHVtZSk7XG4gIH0sXG5cbiAgZmFkZU91dDogZnVuY3Rpb24oc291bmQpIHtcblxuICAgIGlmICghc291bmQpIHJldHVybjtcblxuICAgIHNvdW5kLmZhZGVPdXQgPSB0cnVlO1xuXG4gICAgdGhpcy5sb29wcy5wdXNoKHNvdW5kKTtcblxuICAgIHJldHVybiBzb3VuZDtcblxuICB9LFxuXG4gIGZhZGVJbjogZnVuY3Rpb24oc291bmQpIHtcblxuICAgIGlmICghc291bmQpIHJldHVybjtcblxuICAgIHNvdW5kLmZhZGVJbiA9IHRydWU7XG5cbiAgICB0aGlzLmxvb3BzLnB1c2goc291bmQpO1xuICAgIHRoaXMuc2V0Vm9sdW1lKHNvdW5kLCAwKTtcblxuXG4gICAgcmV0dXJuIHNvdW5kO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sb29wcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgbG9vcCA9IHRoaXMubG9vcHNbaV07XG5cbiAgICAgIGlmIChsb29wLmZhZGVJbikge1xuICAgICAgICB2YXIgdm9sdW1lID0gdGhpcy5nZXRWb2x1bWUobG9vcCk7XG4gICAgICAgIHZvbHVtZSA9IHRoaXMuc2V0Vm9sdW1lKGxvb3AsIE1hdGgubWluKDEuMCwgdm9sdW1lICsgZGVsdGEgKiAwLjUpKTtcblxuICAgICAgICBpZiAodm9sdW1lID49IDEuMCkge1xuICAgICAgICAgIHRoaXMubG9vcHMuc3BsaWNlKGktLSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxvb3AuZmFkZU91dCkge1xuICAgICAgICB2YXIgdm9sdW1lID0gdGhpcy5nZXRWb2x1bWUobG9vcCk7XG4gICAgICAgIHZvbHVtZSA9IHRoaXMuc2V0Vm9sdW1lKGxvb3AsIE1hdGgubWluKDEuMCwgdm9sdW1lIC0gZGVsdGEgKiAwLjUpKTtcblxuICAgICAgICBpZiAodm9sdW1lIDw9IDApIHtcbiAgICAgICAgICB0aGlzLmxvb3BzLnNwbGljZShpLS0sIDEpO1xuICAgICAgICAgIHRoaXMuc3RvcChsb29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxufTtcblxuLyogZmlsZTogc3JjL1NvdW5kQXVkaW8uanMgKi9cblxuUExBWUdST1VORC5Tb3VuZEF1ZGlvID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgdmFyIGNhblBsYXlNcDMgPSAobmV3IEF1ZGlvKS5jYW5QbGF5VHlwZShcImF1ZGlvL21wM1wiKTtcbiAgdmFyIGNhblBsYXlPZ2cgPSAobmV3IEF1ZGlvKS5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpO1xuXG4gIGlmICh0aGlzLmFwcC5wcmVmZXJlZEF1ZGlvRm9ybWF0ID09PSBcIm1wM1wiKSB7XG5cbiAgICBpZiAoY2FuUGxheU1wMykgdGhpcy5hdWRpb0Zvcm1hdCA9IFwibXAzXCI7XG4gICAgZWxzZSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJvZ2dcIjtcblxuICB9IGVsc2Uge1xuXG4gICAgaWYgKGNhblBsYXlPZ2cpIHRoaXMuYXVkaW9Gb3JtYXQgPSBcIm9nZ1wiO1xuICAgIGVsc2UgdGhpcy5hdWRpb0Zvcm1hdCA9IFwibXAzXCI7XG5cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELlNvdW5kQXVkaW8ucHJvdG90eXBlID0ge1xuXG4gIHNhbXBsZXM6IHt9LFxuXG4gIHNldE1hc3RlcjogZnVuY3Rpb24odm9sdW1lKSB7XG5cbiAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcblxuICB9LFxuXG4gIHNldE1hc3RlclBvc2l0aW9uOiBmdW5jdGlvbigpIHtcblxuICB9LFxuXG4gIHNldFBvc2l0aW9uOiBmdW5jdGlvbih4LCB5LCB6KSB7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIGxvYWQ6IGZ1bmN0aW9uKGZpbGUpIHtcblxuICAgIHZhciB1cmwgPSBcInNvdW5kcy9cIiArIGZpbGUgKyBcIi5cIiArIHRoaXMuYXVkaW9Gb3JtYXQ7XG5cbiAgICB2YXIgbG9hZGVyID0gdGhpcy5hcHAubG9hZGVyO1xuXG4gICAgdGhpcy5hcHAubG9hZGVyLmFkZCh1cmwpO1xuXG4gICAgdmFyIGF1ZGlvID0gdGhpcy5zYW1wbGVzW2ZpbGVdID0gbmV3IEF1ZGlvO1xuXG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBsb2FkZXIuc3VjY2Vzcyh1cmwpO1xuICAgIH0pO1xuXG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgbG9hZGVyLmVycm9yKHVybCk7XG4gICAgfSk7XG5cbiAgICBhdWRpby5zcmMgPSB1cmw7XG5cbiAgfSxcblxuICBwbGF5OiBmdW5jdGlvbihrZXksIGxvb3ApIHtcblxuICAgIHZhciBzb3VuZCA9IHRoaXMuc2FtcGxlc1trZXldO1xuXG4gICAgc291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgIHNvdW5kLmxvb3AgPSBsb29wO1xuICAgIHNvdW5kLnBsYXkoKTtcblxuICAgIHJldHVybiBzb3VuZDtcblxuICB9LFxuXG4gIHN0b3A6IGZ1bmN0aW9uKHdoYXQpIHtcblxuICAgIGlmICghd2hhdCkgcmV0dXJuO1xuXG4gICAgd2hhdC5wYXVzZSgpO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICB9LFxuXG4gIHNldFBsYXliYWNrUmF0ZTogZnVuY3Rpb24oc291bmQsIHJhdGUpIHtcblxuICAgIHJldHVybjtcbiAgfSxcblxuICBzZXRWb2x1bWU6IGZ1bmN0aW9uKHNvdW5kLCB2b2x1bWUpIHtcblxuICAgIHNvdW5kLnZvbHVtZSA9IHZvbHVtZSAqIHRoaXMudm9sdW1lO1xuXG4gIH0sXG5cbiAgc2V0UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXG4gIH1cblxufTtcblxuLyogZmlsZTogc3JjL1RvdWNoLmpzICovXG5cblBMQVlHUk9VTkQuVG91Y2ggPSBmdW5jdGlvbihhcHAsIGVsZW1lbnQpIHtcblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgdGhpcy5idXR0b25zID0ge307XG5cbiAgdGhpcy50b3VjaGVzID0ge307XG5cbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy50b3VjaG1vdmUuYmluZCh0aGlzKSk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy50b3VjaHN0YXJ0LmJpbmQodGhpcykpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLnRvdWNoZW5kLmJpbmQodGhpcykpO1xuXG59O1xuXG5QTEFZR1JPVU5ELlRvdWNoLnByb3RvdHlwZSA9IHtcblxuICBnZXRFbGVtZW50T2Zmc2V0OiBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICB2YXIgb2Zmc2V0WCA9IDA7XG4gICAgdmFyIG9mZnNldFkgPSAwO1xuXG4gICAgZG8ge1xuICAgICAgb2Zmc2V0WCArPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICBvZmZzZXRZICs9IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgIH1cblxuICAgIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogb2Zmc2V0WCxcbiAgICAgIHk6IG9mZnNldFlcbiAgICB9O1xuXG4gIH0sXG5cbiAgaGFuZGxlUmVzaXplOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZWxlbWVudE9mZnNldCA9IHRoaXMuZ2V0RWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQpO1xuXG4gIH0sXG5cbiAgdG91Y2htb3ZlOiBmdW5jdGlvbihlKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1tpXTtcblxuICAgICAgdG91Y2htb3ZlRXZlbnQgPSB7fVxuXG4gICAgICB0aGlzLnggPSB0b3VjaG1vdmVFdmVudC54ID0gKHRvdWNoLnBhZ2VYIC0gdGhpcy5lbGVtZW50T2Zmc2V0LnggLSB0aGlzLmFwcC5vZmZzZXRYKSAvIHRoaXMuYXBwLnNjYWxlIHwgMDtcbiAgICAgIHRoaXMueSA9IHRvdWNobW92ZUV2ZW50LnkgPSAodG91Y2gucGFnZVkgLSB0aGlzLmVsZW1lbnRPZmZzZXQueSAtIHRoaXMuYXBwLm9mZnNldFkpIC8gdGhpcy5hcHAuc2NhbGUgfCAwO1xuXG4gICAgICB0b3VjaG1vdmVFdmVudC5vcmlnaW5hbCA9IHRvdWNoO1xuICAgICAgdG91Y2htb3ZlRXZlbnQuaWQgPSB0b3VjaG1vdmVFdmVudC5pZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcblxuICAgICAgdGhpcy50b3VjaGVzW3RvdWNoLmlkZW50aWZpZXJdLnggPSB0b3VjaG1vdmVFdmVudC54O1xuICAgICAgdGhpcy50b3VjaGVzW3RvdWNoLmlkZW50aWZpZXJdLnkgPSB0b3VjaG1vdmVFdmVudC55O1xuXG4gICAgICB0aGlzLnRyaWdnZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2htb3ZlRXZlbnQpO1xuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH0sXG5cbiAgdG91Y2hzdGFydDogZnVuY3Rpb24oZSkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbaV07XG5cbiAgICAgIHZhciB0b3VjaHN0YXJ0RXZlbnQgPSB7fVxuXG4gICAgICB0aGlzLnggPSB0b3VjaHN0YXJ0RXZlbnQueCA9ICh0b3VjaC5wYWdlWCAtIHRoaXMuZWxlbWVudE9mZnNldC54IC0gdGhpcy5hcHAub2Zmc2V0WCkgLyB0aGlzLmFwcC5zY2FsZSB8IDA7XG4gICAgICB0aGlzLnkgPSB0b3VjaHN0YXJ0RXZlbnQueSA9ICh0b3VjaC5wYWdlWSAtIHRoaXMuZWxlbWVudE9mZnNldC55IC0gdGhpcy5hcHAub2Zmc2V0WSkgLyB0aGlzLmFwcC5zY2FsZSB8IDA7XG5cbiAgICAgIHRvdWNoc3RhcnRFdmVudC5vcmlnaW5hbCA9IGUudG91Y2g7XG4gICAgICB0b3VjaHN0YXJ0RXZlbnQuaWQgPSB0b3VjaHN0YXJ0RXZlbnQuaWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG5cbiAgICAgIHRoaXMudG91Y2hlc1t0b3VjaC5pZGVudGlmaWVyXSA9IHtcbiAgICAgICAgeDogdG91Y2hzdGFydEV2ZW50LngsXG4gICAgICAgIHk6IHRvdWNoc3RhcnRFdmVudC55XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnRyaWdnZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoc3RhcnRFdmVudCk7XG5cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgfSxcblxuICB0b3VjaGVuZDogZnVuY3Rpb24oZSkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICB2YXIgdG91Y2hlbmRFdmVudCA9IHt9O1xuXG4gICAgICB0b3VjaGVuZEV2ZW50LnggPSAodG91Y2gucGFnZVggLSB0aGlzLmVsZW1lbnRPZmZzZXQueCAtIHRoaXMuYXBwLm9mZnNldFgpIC8gdGhpcy5hcHAuc2NhbGUgfCAwO1xuICAgICAgdG91Y2hlbmRFdmVudC55ID0gKHRvdWNoLnBhZ2VZIC0gdGhpcy5lbGVtZW50T2Zmc2V0LnkgLSB0aGlzLmFwcC5vZmZzZXRZKSAvIHRoaXMuYXBwLnNjYWxlIHwgMDtcblxuICAgICAgdG91Y2hlbmRFdmVudC5vcmlnaW5hbCA9IHRvdWNoO1xuICAgICAgdG91Y2hlbmRFdmVudC5pZCA9IHRvdWNoZW5kRXZlbnQuaWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLnRvdWNoZXNbdG91Y2guaWRlbnRpZmllcl07XG5cbiAgICAgIHRoaXMudHJpZ2dlcihcInRvdWNoZW5kXCIsIHRvdWNoZW5kRXZlbnQpO1xuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH1cblxufTtcblxuUExBWUdST1VORC5VdGlscy5leHRlbmQoUExBWUdST1VORC5Ub3VjaC5wcm90b3R5cGUsIFBMQVlHUk9VTkQuRXZlbnRzLnByb3RvdHlwZSk7XG5cbi8qIGZpbGU6IHNyYy9Ud2Vlbi5qcyAqL1xuXG5QTEFZR1JPVU5ELlR3ZWVuID0gZnVuY3Rpb24obWFuYWdlciwgY29udGV4dCkge1xuXG4gIFBMQVlHUk9VTkQuRXZlbnRzLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICBQTEFZR1JPVU5ELlV0aWxzLmV4dGVuZCh0aGlzLCB7XG5cbiAgICBhY3Rpb25zOiBbXSxcbiAgICBpbmRleDogLTEsXG5cbiAgICBwcmV2RWFzaW5nOiBcIjA0NVwiLFxuICAgIHByZXZEdXJhdGlvbjogMC41XG5cbiAgfSk7XG5cbiAgdGhpcy5jdXJyZW50ID0gZmFsc2U7XG5cbn07XG5cblBMQVlHUk9VTkQuVHdlZW4ucHJvdG90eXBlID0ge1xuXG4gIGFkZDogZnVuY3Rpb24ocHJvcGVydGllcywgZHVyYXRpb24sIGVhc2luZykge1xuXG4gICAgaWYgKGR1cmF0aW9uKSB0aGlzLnByZXZEdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIGVsc2UgZHVyYXRpb24gPSAwLjU7XG4gICAgaWYgKGVhc2luZykgdGhpcy5wcmV2RWFzaW5nID0gZWFzaW5nO1xuICAgIGVsc2UgZWFzaW5nID0gXCIwNDVcIjtcblxuICAgIHRoaXMuYWN0aW9ucy5wdXNoKFtwcm9wZXJ0aWVzLCBkdXJhdGlvbiwgZWFzaW5nXSk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIGRpc2NhcmQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5tYW5hZ2VyLmRpc2NhcmQodGhpcy5jb250ZXh0LCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgdG86IGZ1bmN0aW9uKHByb3BlcnRpZXMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQocHJvcGVydGllcywgZHVyYXRpb24sIGVhc2luZyk7XG4gIH0sXG5cbiAgbG9vcDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmxvb3BlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIHJlcGVhdDogZnVuY3Rpb24odGltZXMpIHtcblxuICAgIHRoaXMuYWN0aW9ucy5wdXNoKFtcInJlcGVhdFwiLCB0aW1lc10pO1xuXG4gIH0sXG5cbiAgd2FpdDogZnVuY3Rpb24odGltZSkge1xuXG4gICAgdGhpcy5hY3Rpb25zLnB1c2goW1wid2FpdFwiLCB0aW1lXSk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIGRlbGF5OiBmdW5jdGlvbih0aW1lKSB7XG5cbiAgICB0aGlzLmFjdGlvbnMucHVzaChbXCJ3YWl0XCIsIHRpbWVdKTtcblxuICB9LFxuXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5tYW5hZ2VyLnJlbW92ZSh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgcGxheTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLm1hbmFnZXIuYWRkKHRoaXMpO1xuXG4gICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuXG4gIGVuZDogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbGFzdEFuaW1hdGlvbkluZGV4ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSB0aGlzLmluZGV4ICsgMTsgaSA8IHRoaXMuYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmFjdGlvbnNbaV1bMF0gPT09IFwib2JqZWN0XCIpIGxhc3RBbmltYXRpb25JbmRleCA9IGk7XG4gICAgfVxuXG4gICAgdGhpcy5pbmRleCA9IGxhc3RBbmltYXRpb25JbmRleCAtIDE7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgdGhpcy5kZWx0YSA9IHRoaXMuZHVyYXRpb247XG4gICAgdGhpcy5zdGVwKDApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuICBmb3J3YXJkOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZGVsdGEgPSB0aGlzLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RlcCgwKTtcblxuICB9LFxuXG4gIHJld2luZDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmRlbHRhID0gMDtcbiAgICB0aGlzLnN0ZXAoMCk7XG5cbiAgfSxcblxuICBuZXh0OiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZGVsdGEgPSAwO1xuXG4gICAgdGhpcy5pbmRleCsrO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPj0gdGhpcy5hY3Rpb25zLmxlbmd0aCkge1xuXG4gICAgICBpZiAodGhpcy5sb29wZWQpIHtcblxuICAgICAgICB0aGlzLnRyaWdnZXIoXCJsb29wXCIsIHtcbiAgICAgICAgICB0d2VlbjogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKFwiZmluaXNoZWRcIiwge1xuICAgICAgICAgIHR3ZWVuOiB0aGlzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1hbmFnZXIucmVtb3ZlKHRoaXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5hY3Rpb25zW3RoaXMuaW5kZXhdO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFswXSA9PT0gXCJ3YWl0XCIpIHtcblxuICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMuY3VycmVudFsxXTtcbiAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IFwid2FpdFwiO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLyogY2FsY3VsYXRlIGNoYW5nZXMgKi9cblxuICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmN1cnJlbnRbMF07XG5cbiAgICAgIC8qIGtlZXAga2V5cyBhcyBhcnJheSBmb3IgMC4wMDAxJSBwZXJmb3JtYW5jZSBib29zdCAqL1xuXG4gICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcblxuICAgICAgdGhpcy5jaGFuZ2UgPSBbXTtcbiAgICAgIHRoaXMuYmVmb3JlID0gW107XG4gICAgICB0aGlzLnR5cGVzID0gW107XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMua2V5c1tpXTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGV4dFtrZXldID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgdGhpcy5iZWZvcmUucHVzaCh0aGlzLmNvbnRleHRba2V5XSk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2UucHVzaChwcm9wZXJ0aWVzW2tleV0gLSB0aGlzLmNvbnRleHRba2V5XSk7XG4gICAgICAgICAgdGhpcy50eXBlcy5wdXNoKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBiZWZvcmUgPSBjcS5jb2xvcih0aGlzLmNvbnRleHRba2V5XSk7XG5cbiAgICAgICAgICB0aGlzLmJlZm9yZS5wdXNoKGJlZm9yZSk7XG5cbiAgICAgICAgICB2YXIgYWZ0ZXIgPSBjcS5jb2xvcihwcm9wZXJ0aWVzW2tleV0pO1xuXG4gICAgICAgICAgdmFyIHRlbXAgPSBbXTtcblxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgICB0ZW1wLnB1c2goYWZ0ZXJbal0gLSBiZWZvcmVbal0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2hhbmdlLnB1c2godGVtcCk7XG5cbiAgICAgICAgICB0aGlzLnR5cGVzLnB1c2goMSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBcImFuaW1hdGVcIjtcblxuICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMuY3VycmVudFsxXTtcbiAgICAgIHRoaXMuZWFzaW5nID0gdGhpcy5jdXJyZW50WzJdO1xuXG4gICAgfVxuXG5cbiAgfSxcblxuICBwcmV2OiBmdW5jdGlvbigpIHtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICB0aGlzLmRlbHRhICs9IGRlbHRhO1xuXG4gICAgaWYgKCF0aGlzLmN1cnJlbnQpIHRoaXMubmV4dCgpO1xuXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRBY3Rpb24pIHtcblxuICAgICAgY2FzZSBcImFuaW1hdGVcIjpcbiAgICAgICAgdGhpcy5kb0FuaW1hdGUoZGVsdGEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIndhaXRcIjpcbiAgICAgICAgdGhpcy5kb1dhaXQoZGVsdGEpO1xuICAgICAgICBicmVhaztcblxuICAgIH1cblxuICB9LFxuXG4gIGRvQW5pbWF0ZTogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLmRlbHRhIC8gdGhpcy5kdXJhdGlvbik7XG5cbiAgICB2YXIgbW9kID0gUExBWUdST1VORC5VdGlscy5lYXNlKHRoaXMucHJvZ3Jlc3MsIHRoaXMuZWFzaW5nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5rZXlzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBrZXkgPSB0aGlzLmtleXNbaV07XG5cbiAgICAgIHN3aXRjaCAodGhpcy50eXBlc1tpXSkge1xuXG4gICAgICAgIC8qIG51bWJlciAqL1xuXG4gICAgICAgIGNhc2UgMDpcblxuICAgICAgICAgIHRoaXMuY29udGV4dFtrZXldID0gdGhpcy5iZWZvcmVbaV0gKyB0aGlzLmNoYW5nZVtpXSAqIG1vZDtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLyogY29sb3IgKi9cblxuICAgICAgICBjYXNlIDE6XG5cbiAgICAgICAgICB2YXIgY2hhbmdlID0gdGhpcy5jaGFuZ2VbaV07XG4gICAgICAgICAgdmFyIGJlZm9yZSA9IHRoaXMuYmVmb3JlW2ldO1xuICAgICAgICAgIHZhciBjb2xvciA9IFtdO1xuXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgICAgICAgIGNvbG9yLnB1c2goYmVmb3JlW2pdICsgY2hhbmdlW2pdICogbW9kIHwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jb250ZXh0W2tleV0gPSBcInJnYihcIiArIGNvbG9yLmpvaW4oXCIsXCIpICsgXCIpXCI7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG5cbiAgfSxcblxuICBkb1dhaXQ6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAodGhpcy5kZWx0YSA+PSB0aGlzLmR1cmF0aW9uKSB0aGlzLm5leHQoKTtcblxuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuVXRpbHMuZXh0ZW5kKFBMQVlHUk9VTkQuVHdlZW4ucHJvdG90eXBlLCBQTEFZR1JPVU5ELkV2ZW50cy5wcm90b3R5cGUpO1xuXG5QTEFZR1JPVU5ELlR3ZWVuTWFuYWdlciA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gIHRoaXMudHdlZW5zID0gW107XG5cbiAgaWYgKGFwcCkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuYXBwLnR3ZWVuID0gdGhpcy50d2Vlbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdGhpcy5kZWx0YSA9IDA7XG5cbiAgdGhpcy5hcHAub24oXCJzdGVwXCIsIHRoaXMuc3RlcC5iaW5kKHRoaXMpKTtcblxufTtcblxuUExBWUdST1VORC5Ud2Vlbk1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gIGRlZmF1bHRFYXNpbmc6IFwiMTI4XCIsXG5cbiAgZGlzY2FyZDogZnVuY3Rpb24ob2JqZWN0LCBzYWZlKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHdlZW5zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0d2VlbiA9IHRoaXMudHdlZW5zW2ldO1xuXG4gICAgICBpZiAodHdlZW4uY29udGV4dCA9PT0gb2JqZWN0ICYmIHR3ZWVuICE9PSBzYWZlKSB0aGlzLnJlbW92ZSh0d2Vlbik7XG5cbiAgICB9XG5cbiAgfSxcblxuICB0d2VlbjogZnVuY3Rpb24oY29udGV4dCkge1xuXG4gICAgdmFyIHR3ZWVuID0gbmV3IFBMQVlHUk9VTkQuVHdlZW4odGhpcywgY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZCh0d2Vlbik7XG5cbiAgICByZXR1cm4gdHdlZW47XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgdGhpcy5kZWx0YSArPSBkZWx0YTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50d2VlbnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIHR3ZWVuID0gdGhpcy50d2VlbnNbaV07XG5cbiAgICAgIGlmICghdHdlZW4uX3JlbW92ZSkgdHdlZW4uc3RlcChkZWx0YSk7XG5cbiAgICAgIGlmICh0d2Vlbi5fcmVtb3ZlKSB0aGlzLnR3ZWVucy5zcGxpY2UoaS0tLCAxKTtcblxuICAgIH1cblxuICB9LFxuXG4gIGFkZDogZnVuY3Rpb24odHdlZW4pIHtcblxuICAgIHR3ZWVuLl9yZW1vdmUgPSBmYWxzZTtcblxuICAgIHZhciBpbmRleCA9IHRoaXMudHdlZW5zLmluZGV4T2YodHdlZW4pO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkgdGhpcy50d2VlbnMucHVzaCh0d2Vlbik7XG5cbiAgfSxcblxuICByZW1vdmU6IGZ1bmN0aW9uKHR3ZWVuKSB7XG5cbiAgICB0d2Vlbi5fcmVtb3ZlID0gdHJ1ZTtcblxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9WaWRlb1JlY29yZGVyLmpzICovXG5cbi8qIFZpZGVvIHJlY29yZGVyICovXG5cblBMQVlHUk9VTkQuVmlkZW9SZWNvcmRlciA9IGZ1bmN0aW9uKGFwcCwgYXJncykge1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIHRoaXMuYXBwLm9uKFwic3RlcFwiLCB0aGlzLnN0ZXAuYmluZCh0aGlzKSk7XG5cbn07XG5cblBMQVlHUk9VTkQuVmlkZW9SZWNvcmRlci5wcm90b3R5cGUgPSB7XG5cbiAgc2V0dXA6IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICAgIHRoaXMucmVnaW9uID0gZmFsc2U7XG5cbiAgICBQTEFZR1JPVU5ELlV0aWxzLmV4dGVuZCh0aGlzLCB7XG4gICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXG4gICAgICBmcmFtZXJhdGU6IDIwLFxuICAgICAgc2NhbGU6IDEuMFxuICAgIH0sIGFyZ3MpO1xuXG4gICAgaWYgKCF0aGlzLnJlZ2lvbikge1xuICAgICAgdGhpcy5yZWdpb24gPSBbMCwgMCwgdGhpcy5hcHAubGF5ZXIud2lkdGgsIHRoaXMuYXBwLmxheWVyLmhlaWdodF07XG4gICAgfVxuXG4gICAgdGhpcy5wbGF5YmFja1JhdGUgPSB0aGlzLmZyYW1lcmF0ZSAvIDYwO1xuXG4gICAgdGhpcy5sYXllciA9IGNxKHRoaXMucmVnaW9uWzJdICogdGhpcy5zY2FsZSB8IDAsIHRoaXMucmVnaW9uWzNdICogdGhpcy5zY2FsZSB8IDApO1xuICB9LFxuXG4gIHN0YXJ0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5zZXR1cChhcmdzKTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgV2hhbW15LlZpZGVvKHRoaXMuZnJhbWVyYXRlKTtcbiAgICB0aGlzLmNhcHR1cmVUaW1lb3V0ID0gMDtcbiAgICB0aGlzLnJlY29yZGluZyA9IHRydWU7XG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIGlmICh0aGlzLmVuY29kZXIpIHtcblxuICAgICAgdGhpcy5jYXB0dXJlVGltZW91dCAtPSBkZWx0YSAqIDEwMDA7XG5cbiAgICAgIGlmICh0aGlzLmNhcHR1cmVUaW1lb3V0IDw9IDApIHtcbiAgICAgICAgdGhpcy5jYXB0dXJlVGltZW91dCA9IDEwMDAgLyB0aGlzLmZyYW1lcmF0ZSArIHRoaXMuY2FwdHVyZVRpbWVvdXQ7XG5cbiAgICAgICAgdGhpcy5sYXllci5kcmF3SW1hZ2UodGhpcy5hcHAubGF5ZXIuY2FudmFzLCB0aGlzLnJlZ2lvblswXSwgdGhpcy5yZWdpb25bMV0sIHRoaXMucmVnaW9uWzJdLCB0aGlzLnJlZ2lvblszXSwgMCwgMCwgdGhpcy5sYXllci53aWR0aCwgdGhpcy5sYXllci5oZWlnaHQpO1xuICAgICAgICB0aGlzLmVuY29kZXIuYWRkKHRoaXMubGF5ZXIuY2FudmFzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcHAuc2NyZWVuLnNhdmUoKS5saW5lV2lkdGgoOCkuc3Ryb2tlU3R5bGUoXCIjYzAwXCIpLnN0cm9rZVJlY3QoMCwgMCwgdGhpcy5hcHAuc2NyZWVuLndpZHRoLCB0aGlzLmFwcC5zY3JlZW4uaGVpZ2h0KS5yZXN0b3JlKCk7XG4gICAgfVxuXG4gIH0sXG5cbiAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmVuY29kZXIpIHJldHVybjtcbiAgICB2YXIgb3V0cHV0ID0gdGhpcy5lbmNvZGVyLmNvbXBpbGUoKTtcbiAgICB2YXIgdXJsID0gKHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93LlVSTCkuY3JlYXRlT2JqZWN0VVJMKG91dHB1dCk7XG4gICAgd2luZG93Lm9wZW4odXJsKTtcbiAgICB0aGlzLnJlY29yZGluZyA9IGZhbHNlO1xuXG4gICAgZGVsZXRlIHRoaXMuZW5jb2RlcjtcbiAgfSxcblxuICB0b2dnbGU6IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICAgIGlmICh0aGlzLmVuY29kZXIpIHRoaXMuc3RvcCgpO1xuICAgIGVsc2UgdGhpcy5zdGFydChhcmdzKTtcblxuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLnJlY29yZCA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICB0aGlzLnZpZGVvUmVjb3JkZXIudG9nZ2xlKGFyZ3MpO1xuXG59O1xuXG4vKiBmaWxlOiBzcmMvQXRsYXNlcy5qcyAqL1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZS5sb2FkQXRsYXNlcyA9IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXG4gICAgLyogcG9seW1vcnBoaXNtIGF0IGl0cyBmaW5lc3QgKi9cblxuICAgIGlmICh0eXBlb2YgYXJnID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBhcmcpIHRoaXMubG9hZEF0bGFzZXMoYXJnW2tleV0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLyogaWYgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9hcnJheSBsZXQncyB0cnkgdG8gbG9hZCBpdCAqL1xuXG4gICAgICB0aGlzLl9sb2FkQXRsYXMoYXJnKVxuXG4gICAgfVxuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLmxvYWRBdGxhcyA9IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB0aGlzLmxvYWRBdGxhc2VzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbn07XG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLl9sb2FkQXRsYXMgPSBmdW5jdGlvbihmaWxlbmFtZSkge1xuXG4gIHZhciBlbnRyeSA9IHRoaXMuZ2V0QXNzZXRFbnRyeShmaWxlbmFtZSwgXCJhdGxhc2VzXCIsIFwicG5nXCIpO1xuXG4gIHRoaXMubG9hZGVyLmFkZChlbnRyeS51cmwpO1xuXG4gIHZhciBhdGxhcyA9IHRoaXMuYXRsYXNlc1tlbnRyeS5rZXldID0ge307XG5cbiAgdmFyIGltYWdlID0gYXRsYXMuaW1hZ2UgPSBuZXcgSW1hZ2U7XG5cbiAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgbG9hZGVyLnN1Y2Nlc3MoZW50cnkudXJsKTtcbiAgfSk7XG5cbiAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uKCkge1xuICAgIGxvYWRlci5lcnJvcihlbnRyeS51cmwpO1xuICB9KTtcblxuICBpbWFnZS5zcmMgPSBlbnRyeS51cmw7XG5cbiAgLyogZGF0YSAqL1xuXG4gIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIGVudHJ5LnBhdGggKyBcIi5qc29uXCIsIHRydWUpO1xuXG4gIHRoaXMubG9hZGVyLmFkZChlbnRyeS5wYXRoICsgXCIuanNvblwiKTtcblxuICB2YXIgbG9hZGVyID0gdGhpcy5sb2FkZXI7XG5cbiAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlKTtcblxuICAgIGF0bGFzLmZyYW1lcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZyYW1lID0gZGF0YS5mcmFtZXNbaV07XG5cbiAgICAgIGF0bGFzLmZyYW1lcy5wdXNoKHtcbiAgICAgICAgcmVnaW9uOiBbZnJhbWUuZnJhbWUueCwgZnJhbWUuZnJhbWUueSwgZnJhbWUuZnJhbWUudywgZnJhbWUuZnJhbWUuaF0sXG4gICAgICAgIG9mZnNldDogW2ZyYW1lLnNwcml0ZVNvdXJjZVNpemUueCB8fCAwLCBmcmFtZS5zcHJpdGVTb3VyY2VTaXplLnkgfHwgMF0sXG4gICAgICAgIHdpZHRoOiBmcmFtZS5zb3VyY2VTaXplLncsXG4gICAgICAgIGhlaWdodDogZnJhbWUuc291cmNlU2l6ZS5oXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkZXIuc3VjY2VzcyhlbnRyeS5wYXRoICsgXCIuanNvblwiKTtcblxuICB9XG5cbiAgcmVxdWVzdC5zZW5kKCk7XG59O1xuXG4vKiBmaWxlOiBzcmMvRm9udHMuanMgKi9cblxuUExBWUdST1VORC5BcHBsaWNhdGlvbi5wcm90b3R5cGUubG9hZEZvbnQgPSBmdW5jdGlvbihuYW1lKSB7XG5cbiAgdmFyIHN0eWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgc3R5bGVOb2RlLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cbiAgdmFyIGZvcm1hdHMgPSB7XG4gICAgXCJ3b2ZmXCI6IFwid29mZlwiLFxuICAgIFwidHRmXCI6IFwidHJ1ZXR5cGVcIlxuICB9O1xuXG4gIHZhciBzb3VyY2VzID0gXCJcIjtcblxuICBmb3IgKHZhciBleHQgaW4gZm9ybWF0cykge1xuICAgIHZhciB0eXBlID0gZm9ybWF0c1tleHRdO1xuICAgIHNvdXJjZXMgKz0gXCIgdXJsKFxcXCJmb250cy9cIiArIG5hbWUgKyBcIi5cIiArIGV4dCArIFwiXFxcIikgZm9ybWF0KCdcIiArIHR5cGUgKyBcIicpO1wiXG4gIH1cblxuICBzdHlsZU5vZGUudGV4dENvbnRlbnQgPSBcIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJ1wiICsgbmFtZSArIFwiJzsgc3JjOiBcIiArIHNvdXJjZXMgKyBcIiB9XCI7XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZU5vZGUpO1xuXG4gIHZhciBsYXllciA9IGNxKDMyLCAzMik7XG5cbiAgbGF5ZXIuZm9udChcIjEwcHggVGVzdGluZ1wiKTtcbiAgbGF5ZXIuZmlsbFRleHQoMTYsIDE2LCAxNikudHJpbSgpO1xuXG4gIHZhciB3aWR0aCA9IGxheWVyLndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gbGF5ZXIuaGVpZ2h0O1xuXG4gIHRoaXMubG9hZGVyLmFkZChcImZvbnQgXCIgKyBuYW1lKTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gY2hlY2soKSB7XG5cbiAgICB2YXIgbGF5ZXIgPSBjcSgzMiwgMzIpO1xuXG4gICAgbGF5ZXIuZm9udChcIjEwcHggXCIgKyBuYW1lKS5maWxsVGV4dCgxNiwgMTYsIDE2KTtcbiAgICBsYXllci50cmltKCk7XG5cbiAgICBpZiAobGF5ZXIud2lkdGggIT09IHdpZHRoIHx8IGxheWVyLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG5cbiAgICAgIHNlbGYubG9hZGVyLnJlYWR5KFwiZm9udCBcIiArIG5hbWUpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgc2V0VGltZW91dChjaGVjaywgMjUwKTtcblxuICAgIH1cblxuICB9O1xuXG4gIGNoZWNrKCk7XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9EZWZhdWx0U3RhdGUuanMgKi9cblxuUExBWUdST1VORC5EZWZhdWx0U3RhdGUgPSB7XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9Mb2FkaW5nU2NyZWVuLmpzICovXG5cblBMQVlHUk9VTkQuTG9hZGluZ1NjcmVlbiA9IHtcblxuICAvKiBiYXNpYyBsb2FkaW5nIHNjcmVlbiB1c2luZyBET00gKi9cblxuICBsb2dvUmF3OiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTm9BQUFBU0JBTUFBQURQaU4weEFBQUFHRkJNVkVVQUFRQXRMaXhIU1VkbmFHYUppb2ltcUtYTXpzdjcvZnI1c2hnVkFBQUFBV0pMUjBRQWlBVWRTQUFBQUFsd1NGbHpBQUFMRXdBQUN4TUJBSnFjR0FBQUFBZDBTVTFGQjk4RUF3a2VBNG9RV0o0QUFBQVpkRVZZZEVOdmJXMWxiblFBUTNKbFlYUmxaQ0IzYVhSb0lFZEpUVkJYZ1E0WEFBQUI5a2xFUVZRNHk3MlV2VytyTUJEQXorRnJwVktyckZtZXNtYXBXTk9scktqU2Uxa1ordW9WQXZqKy9mcnVqRzFTYUpjcUp3VTd2b09mN3hNUXpRbXNJRGk1TlBUTXNMUm50SDNVK0Y2U0FabzNObEN2Y2dCRkp6OG8rdmtEaUU2M2xJOTVZL1VtcGluc1pXa2dKV0ppRGJBVlExNmh0cHR4U1RObG9JbHVnd2F3MDAxRXkzQVNGM3NvNkwxcUxOWHpRUzVTMFVHS0wvQ0k1d1dOcmlFMFVIOVl0eTM3THFJVmcrd3NxdTdJeDBNd1ZCU0YvZFUranYyU05ubWEwMjFMRWRQcVZuTWVVM3hBdTBrWGNTR2ptcTdPeDRFMlduODhMWjIrRUZqM2F2aml4emFpNlZQVnl1WXZlWkxIRjJYZmREbnZBcTI3RElIR3VxKzBESkZzRTMwT3RCMUtxT3dkOERyN1BjTTRiK2pmajJnNWxwNFd5bnRCSzY2cXVhM0p6RUErdVhKcHdIL05sVnV6UlZQWS9rVExCMm1qdU4rS3dkWjhGT3k4ajJnRGJFVVNxdW1uU0NZNGxmNGlicTNJaFZNNHljWlFSbnYrekZxVmRKUVZuNkJ4dlVxZWJHcHVhTm8zc1p4d0J6amFqaU1aT29CaXd5VkYra0NyK25VYUpPYUdwbkFlUlBQSlpUcjRGcW1IUlhjbmVFbzREcVEvZnRmZG5MZURyVUFNRTh4V0tQZUtDd1c2WWtFcFhmczNwMUVXSmhkY1VBWVAwVEkvdVlhVjhjZ2p3Qm92YWV5V3dqaTJUOXJURklkUy9jUC9NbmtUTFJVV3hnTk5aVmluN2JUNWZxVDltaURjVVZKelIxZ1JwZklPTk1tdWxVKzVRcXI2elhBVXFBQUFBQUJKUlU1RXJrSmdnZz09XCIsXG5cbiAgY3JlYXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMubG9nbyA9IG5ldyBJbWFnZTtcblxuICAgIHRoaXMubG9nby5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYucmVhZHkgPSB0cnVlO1xuICAgICAgc2VsZi5jcmVhdGVFbGVtZW50cygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2dvLnNyYyA9IHRoaXMubG9nb1JhdztcblxuICAgIHRoaXMuYmFja2dyb3VuZCA9IFwiIzAwMFwiO1xuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgICB0aGlzLmJhY2tncm91bmQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5iYWNrZ3JvdW5kQ29sb3IgfHwgXCIjMDAwXCI7XG4gICAgfVxuXG5cbiAgfSxcblxuICBlbnRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuXG4gIH0sXG5cbiAgbGVhdmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFwcC50d2Vlbih0aGlzKVxuICAgICAgLnRvKHtcbiAgICAgICAgY3VycmVudDogMVxuICAgICAgfSwgMC41KTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAodGhpcy5sb2NrZWQpIHtcblxuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uLmZpbmlzaGVkKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMud3JhcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgKyBNYXRoLmFicyh0aGlzLmFwcC5sb2FkZXIucHJvZ3Jlc3MgLSB0aGlzLmN1cnJlbnQpICogZGVsdGE7XG4gICAgfVxuXG4gIH0sXG5cbiAgY3JlYXRlRWxlbWVudHM6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC42IHwgMDtcbiAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMSB8IDA7XG5cbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMud3JhcHBlci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyBcInB4XCI7XG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgXCJweFwiO1xuICAgIHRoaXMud3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMDAwXCI7XG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLmJvcmRlciA9IFwiNHB4IHNvbGlkICNmZmZcIjtcbiAgICB0aGlzLndyYXBwZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLmxlZnQgPSAod2luZG93LmlubmVyV2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIgfCAwKSArIFwicHhcIjtcbiAgICB0aGlzLndyYXBwZXIuc3R5bGUudG9wID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDIgfCAwKSArIFwicHhcIjtcbiAgICB0aGlzLndyYXBwZXIuc3R5bGUuekluZGV4ID0gMTAwO1xuXG4gICAgdGhpcy5hcHAuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG5cbiAgICB0aGlzLnByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gXCIwJVwiO1xuICAgIHRoaXMucHJvZ3Jlc3NCYXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyBcInB4XCI7XG4gICAgdGhpcy5wcm9ncmVzc0Jhci5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZmXCI7XG5cbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5wcm9ncmVzc0Jhcik7XG5cbiAgfSxcblxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIXRoaXMucmVhZHkpIHJldHVybjtcblxuICAgIHRoaXMucHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAodGhpcy5jdXJyZW50ICogMTAwIHwgMCkgKyBcIiVcIjtcblxuXG4gIH1cblxufTtcblxuLyogZmlsZTogc3JjL2xpYi9DYW52YXNRdWVyeS5qcyAqL1xuXG4vKiAgICAgXG5cbiAgQ2FudmFzIFF1ZXJ5IHIyXG4gIFxuICBodHRwOi8vY2FudmFzcXVlcnkuY29tXG4gIFxuICAoYykgMjAxMi0yMDE1IGh0dHA6Ly9yZXpvbmVyLm5ldFxuICBcbiAgQ2FudmFzIFF1ZXJ5IG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4gICEgZml4ZWQgY29sb3IgcGFyc2Vyc1xuXG4qL1xuXG5cbihmdW5jdGlvbigpIHtcblxuICB2YXIgQ09DT09OSlMgPSBmYWxzZTtcblxuICB2YXIgQ2FudmFzID0gd2luZG93LkhUTUxDYW52YXNFbGVtZW50O1xuICB2YXIgSW1hZ2UgPSB3aW5kb3cuSFRNTEltYWdlRWxlbWVudDtcbiAgdmFyIENPQ09PTkpTID0gbmF2aWdhdG9yLmlzQ29jb29uSlM7XG5cbiAgdmFyIGNxID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIGNhbnZhcyA9IGNxLmNyZWF0ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgLy8gY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHZhciBjYW52YXMgPSBjcS5jcmVhdGVDYW52YXMoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBJbWFnZSkge1xuICAgICAgdmFyIGNhbnZhcyA9IGNxLmNyZWF0ZUNhbnZhcyhzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIGNxLkxheWVyKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjYW52YXMgPSBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IGNxLkxheWVyKGNhbnZhcyk7XG4gIH07XG5cbiAgY3EubGluZVNwYWNpbmcgPSAxLjA7XG4gIGNxLmRlZmF1bHRGb250ID0gXCJBcmlhbFwiO1xuXG4gIGNxLmNvY29vbiA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBjYW52YXMgPSBjcS5jcmVhdGVDb2Nvb25DYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHt9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcIm51bWJlclwiKSB7XG4gICAgICB2YXIgY2FudmFzID0gY3EuY3JlYXRlQ29jb29uQ2FudmFzKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSW1hZ2UpIHtcbiAgICAgIHZhciBjYW52YXMgPSBjcS5jcmVhdGVDb2Nvb25DYW52YXMoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBjcS5MYXllcikge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2FudmFzID0gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBjcS5MYXllcihjYW52YXMpO1xuICB9XG5cblxuICBjcS5leHRlbmQgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgYXJndW1lbnRzWzBdW2pdID0gYXJndW1lbnRzW2ldW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gIH07XG5cbiAgY3EuYXVnbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfLmV4dGVuZChhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1tpXSk7XG4gICAgICBhcmd1bWVudHNbaV0oYXJndW1lbnRzWzBdKTtcbiAgICB9XG4gIH07XG5cbiAgY3EuZGlzdGFuY2UgPSBmdW5jdGlvbih4MSwgeTEsIHgyLCB5Mikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgdmFyIGR4ID0geDEgLSB4MjtcbiAgICAgIHZhciBkeSA9IHkxIC0geTI7XG5cbiAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnMoeDEgLSB5MSk7XG4gICAgfVxuICB9O1xuXG4gIC8qIGZhc3QuanMgKi9cblxuICBjcS5mYXN0QXBwbHkgPSBmdW5jdGlvbihzdWJqZWN0LCB0aGlzQ29udGV4dCwgYXJncykge1xuXG4gICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gc3ViamVjdC5jYWxsKHRoaXNDb250ZXh0KTtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuY2FsbCh0aGlzQ29udGV4dCwgYXJnc1swXSk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmNhbGwodGhpc0NvbnRleHQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gc3ViamVjdC5jYWxsKHRoaXNDb250ZXh0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuY2FsbCh0aGlzQ29udGV4dCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmNhbGwodGhpc0NvbnRleHQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gc3ViamVjdC5jYWxsKHRoaXNDb250ZXh0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdKTtcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuY2FsbCh0aGlzQ29udGV4dCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSwgYXJnc1s1XSwgYXJnc1s2XSk7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmNhbGwodGhpc0NvbnRleHQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0sIGFyZ3NbNV0sIGFyZ3NbNl0sIGFyZ3NbN10pO1xuICAgICAgY2FzZSA5OlxuICAgICAgICByZXR1cm4gc3ViamVjdC5jYWxsKHRoaXNDb250ZXh0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdLCBhcmdzWzZdLCBhcmdzWzddLCBhcmdzWzhdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmFwcGx5KHRoaXNDb250ZXh0LCBhcmdzKTtcbiAgICB9XG5cbiAgfTtcblxuICBjcS5leHRlbmQoY3EsIHtcblxuICAgIHNtb290aGluZzogdHJ1ZSxcblxuICAgIGJsZW5kOiBmdW5jdGlvbihiZWxvdywgYWJvdmUsIG1vZGUsIG1peCkge1xuXG4gICAgICBpZiAodHlwZW9mIG1peCA9PT0gXCJ1bmRlZmluZWRcIikgbWl4ID0gMTtcblxuICAgICAgdmFyIGJlbG93ID0gY3EoYmVsb3cpO1xuICAgICAgdmFyIG1hc2sgPSBiZWxvdy5jbG9uZSgpO1xuICAgICAgdmFyIGFib3ZlID0gY3EoYWJvdmUpO1xuXG4gICAgICBiZWxvdy5zYXZlKCk7XG4gICAgICBiZWxvdy5nbG9iYWxBbHBoYShtaXgpO1xuICAgICAgYmVsb3cuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKG1vZGUpO1xuICAgICAgYmVsb3cuZHJhd0ltYWdlKGFib3ZlLmNhbnZhcywgMCwgMCk7XG4gICAgICBiZWxvdy5yZXN0b3JlKCk7XG5cbiAgICAgIG1hc2suc2F2ZSgpO1xuICAgICAgbWFzay5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24oXCJzb3VyY2UtaW5cIik7XG4gICAgICBtYXNrLmRyYXdJbWFnZShiZWxvdy5jYW52YXMsIDAsIDApO1xuICAgICAgbWFzay5yZXN0b3JlKCk7XG5cbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH0sXG5cbiAgICBtYXRjaENvbG9yOiBmdW5jdGlvbihjb2xvciwgcGFsZXR0ZSkge1xuICAgICAgdmFyIHJnYlBhbGV0dGUgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWxldHRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJnYlBhbGV0dGUucHVzaChjcS5jb2xvcihwYWxldHRlW2ldKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbWdEYXRhID0gY3EuY29sb3IoY29sb3IpO1xuXG4gICAgICB2YXIgZGlmTGlzdCA9IFtdO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZ2JQYWxldHRlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciByZ2JWYWwgPSByZ2JQYWxldHRlW2pdO1xuICAgICAgICB2YXIgckRpZiA9IE1hdGguYWJzKGltZ0RhdGFbMF0gLSByZ2JWYWxbMF0pLFxuICAgICAgICAgIGdEaWYgPSBNYXRoLmFicyhpbWdEYXRhWzFdIC0gcmdiVmFsWzFdKSxcbiAgICAgICAgICBiRGlmID0gTWF0aC5hYnMoaW1nRGF0YVsyXSAtIHJnYlZhbFsyXSk7XG4gICAgICAgIGRpZkxpc3QucHVzaChyRGlmICsgZ0RpZiArIGJEaWYpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2xvc2VzdE1hdGNoID0gMDtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFsZXR0ZS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoZGlmTGlzdFtqXSA8IGRpZkxpc3RbY2xvc2VzdE1hdGNoXSkge1xuICAgICAgICAgIGNsb3Nlc3RNYXRjaCA9IGo7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhbGV0dGVbY2xvc2VzdE1hdGNoXTtcbiAgICB9LFxuXG4gICAgdGVtcDogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgaWYgKCF0aGlzLnRlbXBMYXllcikge1xuICAgICAgICB0aGlzLnRlbXBMYXllciA9IGNxKDEsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAod2lkdGggaW5zdGFuY2VvZiBJbWFnZSkge1xuICAgICAgICB0aGlzLnRlbXBMYXllci53aWR0aCA9IHdpZHRoLndpZHRoO1xuICAgICAgICB0aGlzLnRlbXBMYXllci5oZWlnaHQgPSB3aWR0aC5oZWlnaHQ7XG4gICAgICAgIHRoaXMudGVtcExheWVyLmNvbnRleHQuZHJhd0ltYWdlKHdpZHRoLCAwLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAod2lkdGggaW5zdGFuY2VvZiBDYW52YXMpIHtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIud2lkdGggPSB3aWR0aC53aWR0aDtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIuaGVpZ2h0ID0gd2lkdGguaGVpZ2h0O1xuICAgICAgICB0aGlzLnRlbXBMYXllci5jb250ZXh0LmRyYXdJbWFnZSh3aWR0aCwgMCwgMCk7XG4gICAgICB9IGVsc2UgaWYgKHdpZHRoIGluc3RhbmNlb2YgQ2FudmFzUXVlcnkuTGF5ZXIpIHtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIud2lkdGggPSB3aWR0aC53aWR0aDtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIuaGVpZ2h0ID0gd2lkdGguaGVpZ2h0O1xuICAgICAgICB0aGlzLnRlbXBMYXllci5jb250ZXh0LmRyYXdJbWFnZSh3aWR0aC5jYW52YXMsIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy50ZW1wTGF5ZXI7XG4gICAgfSxcblxuICAgIHdyYXBWYWx1ZTogZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICBpZiAodmFsdWUgPCBtaW4pIHJldHVybiBtYXggKyAodmFsdWUgJSBtYXgpO1xuICAgICAgaWYgKHZhbHVlID49IG1heCkgcmV0dXJuIHZhbHVlICUgbWF4O1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBsaW1pdFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWU7XG4gICAgfSxcblxuICAgIG1peDogZnVuY3Rpb24oYSwgYiwgYW1vdW50KSB7XG4gICAgICByZXR1cm4gYSArIChiIC0gYSkgKiBhbW91bnQ7XG4gICAgfSxcblxuICAgIGhleFRvUmdiOiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGlmIChoZXgubGVuZ3RoID09PSA3KSByZXR1cm4gWycweCcgKyBoZXhbMV0gKyBoZXhbMl0gfCAwLCAnMHgnICsgaGV4WzNdICsgaGV4WzRdIHwgMCwgJzB4JyArIGhleFs1XSArIGhleFs2XSB8IDBdO1xuICAgICAgZWxzZSByZXR1cm4gWycweCcgKyBoZXhbMV0gKyBoZXhbMV0gfCAwLCAnMHgnICsgaGV4WzJdICsgaGV4WzJdIHwgMCwgJzB4JyArIGhleFszXSArIGhleFszXSB8IDBdO1xuICAgIH0sXG5cbiAgICByZ2JUb0hleDogZnVuY3Rpb24ociwgZywgYikge1xuICAgICAgcmV0dXJuIFwiI1wiICsgKCgxIDw8IDI0KSArIChyIDw8IDE2KSArIChnIDw8IDgpICsgYikudG9TdHJpbmcoMTYpLnNsaWNlKDEsIDcpO1xuICAgIH0sXG5cbiAgICAvKiBhdXRob3I6IGh0dHA6Ly9tamlqYWNrc29uLmNvbS8gKi9cblxuICAgIHJnYlRvSHNsOiBmdW5jdGlvbihyLCBnLCBiKSB7XG5cbiAgICAgIGlmIChyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgYiA9IHJbMl07XG4gICAgICAgIGcgPSByWzFdO1xuICAgICAgICByID0gclswXTtcbiAgICAgIH1cblxuICAgICAgciAvPSAyNTUsIGcgLz0gMjU1LCBiIC89IDI1NTtcbiAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICB2YXIgaCwgcywgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgICAgaWYgKG1heCA9PSBtaW4pIHtcbiAgICAgICAgaCA9IHMgPSAwOyAvLyBhY2hyb21hdGljXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgICAgIGNhc2UgcjpcbiAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgZzpcbiAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGI6XG4gICAgICAgICAgICBoID0gKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaCAvPSA2O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW2gsIHMsIGxdO1xuICAgIH0sXG5cbiAgICAvKiBhdXRob3I6IGh0dHA6Ly9tamlqYWNrc29uLmNvbS8gKi9cblxuICAgIGh1ZTJyZ2I6IGZ1bmN0aW9uKHAsIHEsIHQpIHtcbiAgICAgIGlmICh0IDwgMCkgdCArPSAxO1xuICAgICAgaWYgKHQgPiAxKSB0IC09IDE7XG4gICAgICBpZiAodCA8IDEgLyA2KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgICAgIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xuICAgICAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfSxcblxuICAgIGhzbFRvUmdiOiBmdW5jdGlvbihoLCBzLCBsKSB7XG4gICAgICB2YXIgciwgZywgYjtcblxuICAgICAgaWYgKHMgPT0gMCkge1xuICAgICAgICByID0gZyA9IGIgPSBsOyAvLyBhY2hyb21hdGljXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgdmFyIHAgPSAyICogbCAtIHE7XG4gICAgICAgIHIgPSB0aGlzLmh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcbiAgICAgICAgZyA9IHRoaXMuaHVlMnJnYihwLCBxLCBoKTtcbiAgICAgICAgYiA9IHRoaXMuaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW3IgKiAyNTUgfCAwLCBnICogMjU1IHwgMCwgYiAqIDI1NSB8IDBdO1xuICAgIH0sXG5cbiAgICByZ2JUb0hzdjogZnVuY3Rpb24ociwgZywgYikge1xuICAgICAgaWYgKHIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBiID0gclsyXTtcbiAgICAgICAgZyA9IHJbMV07XG4gICAgICAgIHIgPSByWzBdO1xuICAgICAgfVxuXG4gICAgICByID0gciAvIDI1NSwgZyA9IGcgLyAyNTUsIGIgPSBiIC8gMjU1O1xuICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgIHZhciBoLCBzLCB2ID0gbWF4O1xuXG4gICAgICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgICAgIHMgPSBtYXggPT0gMCA/IDAgOiBkIC8gbWF4O1xuXG4gICAgICBpZiAobWF4ID09IG1pbikge1xuICAgICAgICBoID0gMDsgLy8gYWNocm9tYXRpY1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChtYXgpIHtcbiAgICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgICBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBiOlxuICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGggLz0gNjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtoLCBzLCB2XTtcbiAgICB9LFxuXG4gICAgaHN2VG9SZ2I6IGZ1bmN0aW9uKGgsIHMsIHYpIHtcbiAgICAgIHZhciByLCBnLCBiO1xuXG4gICAgICB2YXIgaSA9IE1hdGguZmxvb3IoaCAqIDYpO1xuICAgICAgdmFyIGYgPSBoICogNiAtIGk7XG4gICAgICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xuICAgICAgdmFyIHEgPSB2ICogKDEgLSBmICogcyk7XG4gICAgICB2YXIgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKTtcblxuICAgICAgc3dpdGNoIChpICUgNikge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgciA9IHYsIGcgPSB0LCBiID0gcDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHIgPSBxLCBnID0gdiwgYiA9IHA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByID0gcCwgZyA9IHYsIGIgPSB0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgciA9IHAsIGcgPSBxLCBiID0gdjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHIgPSB0LCBnID0gcCwgYiA9IHY7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByID0gdiwgZyA9IHAsIGIgPSBxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xuICAgIH0sXG5cbiAgICBjb2xvcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IGNxLkNvbG9yKCk7XG4gICAgICByZXN1bHQucGFyc2UoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgcG9vbEFycmF5OiBbXSxcblxuICAgIHBvb2w6IGZ1bmN0aW9uKCkge1xuXG4gICAgICBpZiAoIXRoaXMucG9vbEFycmF5Lmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5wb29sQXJyYXkucHVzaCh0aGlzLmNyZWF0ZUNhbnZhcygxLCAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucG9vbEFycmF5LnBvcCgpO1xuXG4gICAgfSxcblxuICAgIGNyZWF0ZUNhbnZhczogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbiAgICAgIGlmIChhcmd1bWVudHNbMF0gaW5zdGFuY2VvZiBJbWFnZSB8fCBhcmd1bWVudHNbMF0gaW5zdGFuY2VvZiBDYW52YXMpIHtcbiAgICAgICAgdmFyIGltYWdlID0gYXJndW1lbnRzWzBdO1xuICAgICAgICByZXN1bHQud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgcmVzdWx0LmdldENvbnRleHQoXCIyZFwiKS5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB9XG5cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgY3JlYXRlQ29jb29uQ2FudmFzOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmVlbmNhbnZhc1wiKTtcblxuICAgICAgaWYgKGFyZ3VtZW50c1swXSBpbnN0YW5jZW9mIEltYWdlKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIHJlc3VsdC5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBjcmVhdGVJbWFnZURhdGE6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHJldHVybiBjcS5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCkuZ2V0Q29udGV4dChcIjJkXCIpLmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgY3EuTGF5ZXIgPSBmdW5jdGlvbihjYW52YXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuYWxpZ25YID0gMDtcbiAgICB0aGlzLmFsaWduWSA9IDA7XG4gICAgdGhpcy5hbGlnbmVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfTtcblxuICBjcS5MYXllci5wcm90b3R5cGUgPSB7XG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgc21vb3RoaW5nID0gY3Euc21vb3RoaW5nO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc21vb3RoaW5nICE9PSBcInVuZGVmaW5lZFwiKSBzbW9vdGhpbmcgPSB0aGlzLnNtb290aGluZztcblxuICAgICAgdGhpcy5jb250ZXh0LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHNtb290aGluZztcbiAgICAgIHRoaXMuY29udGV4dC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBzbW9vdGhpbmc7XG4gICAgICB0aGlzLmNvbnRleHQubXNJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBzbW9vdGhpbmc7XG4gICAgICB0aGlzLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gc21vb3RoaW5nO1xuXG4gICAgICBpZiAoQ09DT09OSlMpIENvY29vbi5VdGlscy5zZXRBbnRpYWxpYXMoc21vb3RoaW5nKTtcbiAgICB9LFxuXG4gICAgYXBwZW5kVG86IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc2VsZWN0b3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGE6IGZ1bmN0aW9uKGEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNBbHBoYSA9IHRoaXMuZ2xvYmFsQWxwaGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsQWxwaGEoYSk7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsQWxwaGEoKTtcbiAgICB9LFxuXG4gICAgcmE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYSh0aGlzLnByZXZpb3VzQWxwaGEpO1xuICAgIH0sXG4gICAgLypcbiAgICAgICAgZHJhd0ltYWdlOiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIGlmICghdGhpcy5hbGlnblggJiYgIXRoaXMuYWxpZ25ZKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2FsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cblxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc3RvcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgICAgdGhpcy5hbGlnblggPSAwO1xuICAgICAgICAgIHRoaXMuYWxpZ25ZID0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgKi9cblxuICAgIHJlYWxpZ246IGZ1bmN0aW9uKCkge1xuXG4gICAgICB0aGlzLmFsaWduWCA9IHRoaXMucHJldkFsaWduWDtcbiAgICAgIHRoaXMuYWxpZ25ZID0gdGhpcy5wcmV2QWxpZ25ZO1xuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cbiAgICBhbGlnbjogZnVuY3Rpb24oeCwgeSkge1xuXG4gICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHkgPSB4O1xuXG4gICAgICB0aGlzLmFsaWduWCA9IHg7XG4gICAgICB0aGlzLmFsaWduWSA9IHk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cblxuICAgIC8qIHNhdmUgdHJhbnNsYXRlIGFsaWduIHJvdGF0ZSBzY2FsZSAqL1xuXG4gICAgc3RhcnM6IGZ1bmN0aW9uKHgsIHksIGFsaWduWCwgYWxpZ25ZLCByb3RhdGlvbiwgc2NhbGVYLCBzY2FsZVkpIHtcblxuICAgICAgaWYgKHR5cGVvZiBhbGlnblggPT09IFwidW5kZWZpbmVkXCIpIGFsaWduWCA9IDAuNTtcbiAgICAgIGlmICh0eXBlb2YgYWxpZ25ZID09PSBcInVuZGVmaW5lZFwiKSBhbGlnblkgPSAwLjU7XG4gICAgICBpZiAodHlwZW9mIHJvdGF0aW9uID09PSBcInVuZGVmaW5lZFwiKSByb3RhdGlvbiA9IDA7XG4gICAgICBpZiAodHlwZW9mIHNjYWxlWCA9PT0gXCJ1bmRlZmluZWRcIikgc2NhbGVYID0gMS4wO1xuICAgICAgaWYgKHR5cGVvZiBzY2FsZVkgPT09IFwidW5kZWZpbmVkXCIpIHNjYWxlWSA9IHNjYWxlWDtcblxuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgIHRoaXMuYWxpZ24oYWxpZ25YLCBhbGlnblkpO1xuICAgICAgdGhpcy5yb3RhdGUocm90YXRpb24pO1xuICAgICAgdGhpcy5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICB0YXJzOiBmdW5jdGlvbih4LCB5LCBhbGlnblgsIGFsaWduWSwgcm90YXRpb24sIHNjYWxlWCwgc2NhbGVZKSB7XG5cbiAgICAgIGlmICh0eXBlb2YgYWxpZ25YID09PSBcInVuZGVmaW5lZFwiKSBhbGlnblggPSAwLjU7XG4gICAgICBpZiAodHlwZW9mIGFsaWduWSA9PT0gXCJ1bmRlZmluZWRcIikgYWxpZ25ZID0gMC41O1xuICAgICAgaWYgKHR5cGVvZiByb3RhdGlvbiA9PT0gXCJ1bmRlZmluZWRcIikgcm90YXRpb24gPSAwO1xuICAgICAgaWYgKHR5cGVvZiBzY2FsZVggPT09IFwidW5kZWZpbmVkXCIpIHNjYWxlWCA9IDEuMDtcbiAgICAgIGlmICh0eXBlb2Ygc2NhbGVZID09PSBcInVuZGVmaW5lZFwiKSBzY2FsZVkgPSBzY2FsZVg7XG5cbiAgICAgIHRoaXMudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgdGhpcy5hbGlnbihhbGlnblgsIGFsaWduWSk7XG4gICAgICB0aGlzLnJvdGF0ZShyb3RhdGlvbik7XG4gICAgICB0aGlzLnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9LFxuXG4gICAgZmlsbFJlY3Q6IGZ1bmN0aW9uKCkge1xuXG4gICAgICBpZiAodGhpcy5hbGlnblggfHwgdGhpcy5hbGlnblkpIHtcbiAgICAgICAgYXJndW1lbnRzWzBdIC09IGFyZ3VtZW50c1syXSAqIHRoaXMuYWxpZ25YIHwgMDtcbiAgICAgICAgYXJndW1lbnRzWzFdIC09IGFyZ3VtZW50c1szXSAqIHRoaXMuYWxpZ25ZIHwgMDtcbiAgICAgIH1cblxuICAgICAgY3EuZmFzdEFwcGx5KHRoaXMuY29udGV4dC5maWxsUmVjdCwgdGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cbiAgICBzdHJva2VSZWN0OiBmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKHRoaXMuYWxpZ25YIHx8IHRoaXMuYWxpZ25ZKSB7XG4gICAgICAgIGFyZ3VtZW50c1swXSAtPSBhcmd1bWVudHNbMl0gKiB0aGlzLmFsaWduWCB8IDA7XG4gICAgICAgIGFyZ3VtZW50c1sxXSAtPSBhcmd1bWVudHNbM10gKiB0aGlzLmFsaWduWSB8IDA7XG4gICAgICB9XG5cbiAgICAgIGNxLmZhc3RBcHBseSh0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdCwgdGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cbiAgICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpIHtcblxuICAgICAgaWYgKHRoaXMuYWxpZ25YIHx8IHRoaXMuYWxpZ25ZKSB7XG4gICAgICAgIGlmIChzV2lkdGggPT0gbnVsbCkge1xuICAgICAgICAgIHN4IC09IGltYWdlLndpZHRoICogdGhpcy5hbGlnblggfCAwO1xuICAgICAgICAgIHN5IC09IGltYWdlLmhlaWdodCAqIHRoaXMuYWxpZ25ZIHwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkeCAtPSBkV2lkdGggKiB0aGlzLmFsaWduWCB8IDA7XG4gICAgICAgICAgZHkgLT0gZEhlaWdodCAqIHRoaXMuYWxpZ25ZIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc1dpZHRoID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgc3gsIHN5KTtcbiAgICAgIH0gZWxzZSBpZiAoZHggPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBjcS5mYXN0QXBwbHkodGhpcy5jb250ZXh0LmRyYXdJbWFnZSwgdGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cbiAgICBzYXZlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucHJldkFsaWduWCA9IHRoaXMuYWxpZ25YO1xuICAgICAgdGhpcy5wcmV2QWxpZ25ZID0gdGhpcy5hbGlnblk7XG5cbiAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICByZXN0b3JlOiBmdW5jdGlvbigpIHtcblxuICAgICAgdGhpcy5yZWFsaWduKCk7XG4gICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGRyYXdUaWxlOiBmdW5jdGlvbihpbWFnZSwgeCwgeSwgZnJhbWVYLCBmcmFtZVksIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBmcmFtZXMsIGZyYW1lKSB7XG5cbiAgICB9LFxuXG4gICAgZHJhd0F0bGFzRnJhbWU6IGZ1bmN0aW9uKGF0bGFzLCBmcmFtZSwgeCwgeSkge1xuXG4gICAgICB2YXIgZnJhbWUgPSBhdGxhcy5mcmFtZXNbZnJhbWVdO1xuXG4gICAgICB0aGlzLmRyYXdSZWdpb24oXG4gICAgICAgIGF0bGFzLmltYWdlLFxuICAgICAgICBmcmFtZS5yZWdpb24sXG4gICAgICAgIHggLSBmcmFtZS53aWR0aCAqIHRoaXMuYWxpZ25YICsgZnJhbWUub2Zmc2V0WzBdICsgZnJhbWUucmVnaW9uWzJdICogdGhpcy5hbGlnblgsIHkgLSBmcmFtZS5oZWlnaHQgKiB0aGlzLmFsaWduWSArIGZyYW1lLm9mZnNldFsxXSArIGZyYW1lLnJlZ2lvblszXSAqIHRoaXMuYWxpZ25ZXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cblxuICAgIGltYWdlRmlsbDogZnVuY3Rpb24oaW1hZ2UsIHdpZHRoLCBoZWlnaHQpIHtcblxuICAgICAgdmFyIHNjYWxlID0gTWF0aC5tYXgod2lkdGggLyBpbWFnZS53aWR0aCwgaGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0KTtcblxuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLnNjYWxlKHNjYWxlLCBzY2FsZSk7XG4gICAgICB0aGlzLmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICB0aGlzLnJlc3RvcmUoKTtcblxuICAgIH0sXG5cbiAgICBkcmF3UmVnaW9uOiBmdW5jdGlvbihpbWFnZSwgcmVnaW9uLCB4LCB5LCBzY2FsZSkge1xuXG4gICAgICBzY2FsZSA9IHNjYWxlIHx8IDE7XG5cbiAgICAgIHZhciBkV2lkdGggPSByZWdpb25bMl0gKiBzY2FsZSB8IDA7XG4gICAgICB2YXIgZEhlaWdodCA9IHJlZ2lvblszXSAqIHNjYWxlIHwgMDtcblxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgaW1hZ2UsIHJlZ2lvblswXSwgcmVnaW9uWzFdLCByZWdpb25bMl0sIHJlZ2lvblszXSxcbiAgICAgICAgeCAtIGRXaWR0aCAqIHRoaXMuYWxpZ25YIHwgMCwgeSAtIGRIZWlnaHQgKiB0aGlzLmFsaWduWSB8IDAsIGRXaWR0aCwgZEhlaWdodFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGNhY2hlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuY2FudmFzO1xuXG4gICAgICAvKiBGRlMgLi4uLiBpbWFnZS5zcmMgaXMgbm8gbG9uZ2VyIHN5bmNocm9ub3VzIHdoZW4gYXNzaWduaW5nIGRhdGFVUkwgKi9cblxuICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlO1xuICAgICAgaW1hZ2Uuc3JjID0gdGhpcy5jYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfSxcblxuICAgIGJsZW5kT246IGZ1bmN0aW9uKHdoYXQsIG1vZGUsIG1peCkge1xuICAgICAgY3EuYmxlbmQod2hhdCwgdGhpcywgbW9kZSwgbWl4KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHBvc3Rlcml6ZTogZnVuY3Rpb24ocGMsIGluYykge1xuICAgICAgcGMgPSBwYyB8fCAzMjtcbiAgICAgIGluYyA9IGluYyB8fCA0O1xuICAgICAgdmFyIGltZ2RhdGEgPSB0aGlzLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB2YXIgZGF0YSA9IGltZ2RhdGEuZGF0YTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSBpbmMpIHtcbiAgICAgICAgZGF0YVtpXSAtPSBkYXRhW2ldICUgcGM7IC8vIHNldCB2YWx1ZSB0byBuZWFyZXN0IG9mIDggcG9zc2liaWxpdGllc1xuICAgICAgICBkYXRhW2kgKyAxXSAtPSBkYXRhW2kgKyAxXSAlIHBjOyAvLyBzZXQgdmFsdWUgdG8gbmVhcmVzdCBvZiA4IHBvc3NpYmlsaXRpZXNcbiAgICAgICAgZGF0YVtpICsgMl0gLT0gZGF0YVtpICsgMl0gJSBwYzsgLy8gc2V0IHZhbHVlIHRvIG5lYXJlc3Qgb2YgOCBwb3NzaWJpbGl0aWVzXG4gICAgICB9XG5cbiAgICAgIHRoaXMucHV0SW1hZ2VEYXRhKGltZ2RhdGEsIDAsIDApOyAvLyBwdXQgaW1hZ2UgZGF0YSB0byBjYW52YXNcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuXG4gICAgYnc6IGZ1bmN0aW9uKHBjKSB7XG4gICAgICBwYyA9IDEyODtcbiAgICAgIHZhciBpbWdkYXRhID0gdGhpcy5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgdmFyIGRhdGEgPSBpbWdkYXRhLmRhdGE7XG4gICAgICAvLyA4LWJpdDogcnJyIGdnZyBiYlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIHZhciB2ID0gKChkYXRhW2ldICsgZGF0YVtpICsgMV0gKyBkYXRhW2kgKyAyXSkgLyAzKTtcblxuICAgICAgICB2ID0gKHYgLyAxMjggfCAwKSAqIDEyODtcbiAgICAgICAgLy9kYXRhW2ldID0gdjsgLy8gc2V0IHZhbHVlIHRvIG5lYXJlc3Qgb2YgOCBwb3NzaWJpbGl0aWVzXG4gICAgICAgIC8vZGF0YVtpICsgMV0gPSB2OyAvLyBzZXQgdmFsdWUgdG8gbmVhcmVzdCBvZiA4IHBvc3NpYmlsaXRpZXNcbiAgICAgICAgZGF0YVtpICsgMl0gPSAodiAvIDI1NSkgKiBkYXRhW2ldOyAvLyBzZXQgdmFsdWUgdG8gbmVhcmVzdCBvZiA4IHBvc3NpYmlsaXRpZXNcblxuICAgICAgfVxuXG4gICAgICB0aGlzLnB1dEltYWdlRGF0YShpbWdkYXRhLCAwLCAwKTsgLy8gcHV0IGltYWdlIGRhdGEgdG8gY2FudmFzXG4gICAgfSxcblxuICAgIGJsZW5kOiBmdW5jdGlvbih3aGF0LCBtb2RlLCBtaXgpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2hhdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgY29sb3IgPSB3aGF0O1xuICAgICAgICB3aGF0ID0gY3EodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHdoYXQuZmlsbFN0eWxlKGNvbG9yKS5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IGNxLmJsZW5kKHRoaXMsIHdoYXQsIG1vZGUsIG1peCk7XG5cbiAgICAgIHRoaXMuY2FudmFzID0gcmVzdWx0LmNhbnZhcztcbiAgICAgIHRoaXMuY29udGV4dCA9IHJlc3VsdC5jb250ZXh0O1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgdGV4dFdpdGhCYWNrZ3JvdW5kOiBmdW5jdGlvbih0ZXh0LCB4LCB5LCBiYWNrZ3JvdW5kLCBwYWRkaW5nKSB7XG4gICAgICB2YXIgdyA9IHRoaXMubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgICB2YXIgaCA9IHRoaXMuZm9udEhlaWdodCgpICogMC44O1xuICAgICAgdmFyIGYgPSB0aGlzLmZpbGxTdHlsZSgpO1xuICAgICAgdmFyIHBhZGRpbmcgPSBwYWRkaW5nIHx8IDI7XG5cbiAgICAgIHRoaXMuZmlsbFN0eWxlKGJhY2tncm91bmQpLmZpbGxSZWN0KHggLSB3IC8gMiAtIHBhZGRpbmcgKiAyLCB5IC0gcGFkZGluZywgdyArIHBhZGRpbmcgKiA0LCBoICsgcGFkZGluZyAqIDIpXG4gICAgICB0aGlzLmZpbGxTdHlsZShmKS50ZXh0QWxpZ24oXCJjZW50ZXJcIikudGV4dEJhc2VsaW5lKFwidG9wXCIpLmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZmlsbENpcmNsZTogZnVuY3Rpb24oeCwgeSwgcikge1xuICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHN0cm9rZUNpcmNsZTogZnVuY3Rpb24oeCwgeSwgcikge1xuICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7XG4gICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY2lyY2xlOiBmdW5jdGlvbih4LCB5LCByKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmNvbnRleHQuYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjcm9wOiBmdW5jdGlvbih4LCB5LCB3LCBoKSB7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cbiAgICAgICAgdmFyIHkgPSBhcmd1bWVudHNbMF1bMV07XG4gICAgICAgIHZhciB3ID0gYXJndW1lbnRzWzBdWzJdO1xuICAgICAgICB2YXIgaCA9IGFyZ3VtZW50c1swXVszXTtcbiAgICAgICAgdmFyIHggPSBhcmd1bWVudHNbMF1bMF07XG4gICAgICB9XG5cbiAgICAgIHZhciBjYW52YXMgPSBjcS5jcmVhdGVDYW52YXModywgaCk7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5LCB3LCBoLCAwLCAwLCB3LCBoKTtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdztcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGg7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGNhbnZhcywgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHByb3BlcnRpZXMpIHtcbiAgICAgIGNxLmV4dGVuZCh0aGlzLmNvbnRleHQsIHByb3BlcnRpZXMpO1xuICAgIH0sXG5cbiAgICByZXNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciB3ID0gd2lkdGgsXG4gICAgICAgIGggPSBoZWlnaHQ7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHcgPSBhcmd1bWVudHNbMF0gKiB0aGlzLmNhbnZhcy53aWR0aCB8IDA7XG4gICAgICAgIGggPSBhcmd1bWVudHNbMF0gKiB0aGlzLmNhbnZhcy5oZWlnaHQgfCAwO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoaGVpZ2h0ID09PSBmYWxzZSkge1xuICAgICAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCA+IHdpZHRoKSB7XG4gICAgICAgICAgICBoID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogKHdpZHRoIC8gdGhpcy5jYW52YXMud2lkdGgpIHwgMDtcbiAgICAgICAgICAgIHcgPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdyA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgaCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoID4gd2lkdGgpIHtcbiAgICAgICAgICAgIHcgPSB0aGlzLmNhbnZhcy53aWR0aCAqIChoZWlnaHQgLyB0aGlzLmNhbnZhcy5oZWlnaHQpIHwgMDtcbiAgICAgICAgICAgIGggPSBoZWlnaHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHcgPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGggPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjcXJlc2l6ZWQgPSBjcSh3LCBoKS5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIDAsIDAsIHcsIGgpO1xuICAgICAgdGhpcy5jYW52YXMgPSBjcXJlc2l6ZWQuY2FudmFzO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY3FyZXNpemVkLmNvbnRleHQ7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpbWFnZUxpbmU6IGZ1bmN0aW9uKGltYWdlLCByZWdpb24sIHgsIHksIGV4LCBleSwgc2NhbGUpIHtcbiAgICAgIGlmICghcmVnaW9uKSByZWdpb24gPSBbMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodF07XG5cbiAgICAgIHZhciBkaXN0YW5jZSA9IGNxLmRpc3RhbmNlKHgsIHksIGV4LCBleSk7XG4gICAgICB2YXIgY291bnQgPSBkaXN0YW5jZSAvIHJlZ2lvblszXSArIDAuNSB8IDA7XG4gICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKGV5IC0geSwgZXggLSB4KSArIE1hdGguUEkgLyAyO1xuXG4gICAgICB0aGlzLnNhdmUoKTtcblxuICAgICAgdGhpcy50cmFuc2xhdGUoeCwgeSk7XG4gICAgICB0aGlzLnJvdGF0ZShhbmdsZSk7XG5cbiAgICAgIGlmIChzY2FsZSkgdGhpcy5zY2FsZShzY2FsZSwgMS4wKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gY291bnQ7IGkrKykge1xuICAgICAgICB0aGlzLmRyYXdSZWdpb24oaW1hZ2UsIHJlZ2lvbiwgLXJlZ2lvblsyXSAvIDIgfCAwLCAtcmVnaW9uWzNdICogKGkgKyAxKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVzdG9yZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgdHJpbTogZnVuY3Rpb24oY29sb3IsIGNoYW5nZXMpIHtcbiAgICAgIHZhciB0cmFuc3BhcmVudDtcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gY3EuY29sb3IoY29sb3IpLnRvQXJyYXkoKTtcbiAgICAgICAgdHJhbnNwYXJlbnQgPSAhY29sb3JbM107XG4gICAgICB9IGVsc2UgdHJhbnNwYXJlbnQgPSB0cnVlO1xuXG4gICAgICB2YXIgc291cmNlRGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgc291cmNlUGl4ZWxzID0gc291cmNlRGF0YS5kYXRhO1xuXG4gICAgICB2YXIgYm91bmQgPSBbdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgMCwgMF07XG5cbiAgICAgIHZhciB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgdmFyIGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNvdXJjZVBpeGVscy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBpZiAodHJhbnNwYXJlbnQpIHtcbiAgICAgICAgICBpZiAoIXNvdXJjZVBpeGVsc1tpICsgM10pIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZVBpeGVsc1tpICsgMF0gPT09IGNvbG9yWzBdICYmIHNvdXJjZVBpeGVsc1tpICsgMV0gPT09IGNvbG9yWzFdICYmIHNvdXJjZVBpeGVsc1tpICsgMl0gPT09IGNvbG9yWzJdKSBjb250aW51ZTtcblxuICAgICAgICB2YXIgeCA9IChpIC8gNCB8IDApICUgdGhpcy5jYW52YXMud2lkdGggfCAwO1xuICAgICAgICB2YXIgeSA9IChpIC8gNCB8IDApIC8gdGhpcy5jYW52YXMud2lkdGggfCAwO1xuXG4gICAgICAgIGlmICh4IDwgYm91bmRbMF0pIGJvdW5kWzBdID0geDtcbiAgICAgICAgaWYgKHggPiBib3VuZFsyXSkgYm91bmRbMl0gPSB4O1xuXG4gICAgICAgIGlmICh5IDwgYm91bmRbMV0pIGJvdW5kWzFdID0geTtcbiAgICAgICAgaWYgKHkgPiBib3VuZFszXSkgYm91bmRbM10gPSB5O1xuICAgICAgfVxuXG5cbiAgICAgIGlmIChib3VuZFsyXSA9PT0gMCAmJiBib3VuZFszXSA9PT0gMCkge30gZWxzZSB7XG4gICAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgICAgY2hhbmdlcy5sZWZ0ID0gYm91bmRbMF07XG4gICAgICAgICAgY2hhbmdlcy50b3AgPSBib3VuZFsxXTtcblxuICAgICAgICAgIGNoYW5nZXMuYm90dG9tID0gaGVpZ2h0IC0gYm91bmRbM107XG4gICAgICAgICAgY2hhbmdlcy5yaWdodCA9IHdpZHRoIC0gYm91bmRbMl0gLSBib3VuZFswXTtcblxuICAgICAgICAgIGNoYW5nZXMud2lkdGggPSBib3VuZFsyXSAtIGJvdW5kWzBdO1xuICAgICAgICAgIGNoYW5nZXMuaGVpZ2h0ID0gYm91bmRbM10gLSBib3VuZFsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JvcChib3VuZFswXSwgYm91bmRbMV0sIGJvdW5kWzJdIC0gYm91bmRbMF0gKyAxLCBib3VuZFszXSAtIGJvdW5kWzFdICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBtYXRjaFBhbGV0dGU6IGZ1bmN0aW9uKHBhbGV0dGUpIHtcbiAgICAgIHZhciBpbWdEYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgdmFyIHJnYlBhbGV0dGUgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWxldHRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJnYlBhbGV0dGUucHVzaChjcS5jb2xvcihwYWxldHRlW2ldKSk7XG4gICAgICB9XG5cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWdEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgdmFyIGRpZkxpc3QgPSBbXTtcbiAgICAgICAgaWYgKCFpbWdEYXRhLmRhdGFbaSArIDNdKSBjb250aW51ZTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJnYlBhbGV0dGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB2YXIgcmdiVmFsID0gcmdiUGFsZXR0ZVtqXTtcbiAgICAgICAgICB2YXIgckRpZiA9IE1hdGguYWJzKGltZ0RhdGEuZGF0YVtpXSAtIHJnYlZhbFswXSksXG4gICAgICAgICAgICBnRGlmID0gTWF0aC5hYnMoaW1nRGF0YS5kYXRhW2kgKyAxXSAtIHJnYlZhbFsxXSksXG4gICAgICAgICAgICBiRGlmID0gTWF0aC5hYnMoaW1nRGF0YS5kYXRhW2kgKyAyXSAtIHJnYlZhbFsyXSk7XG4gICAgICAgICAgZGlmTGlzdC5wdXNoKHJEaWYgKyBnRGlmICsgYkRpZik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xvc2VzdE1hdGNoID0gMDtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhbGV0dGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoZGlmTGlzdFtqXSA8IGRpZkxpc3RbY2xvc2VzdE1hdGNoXSkge1xuICAgICAgICAgICAgY2xvc2VzdE1hdGNoID0gajtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFsZXR0ZVJnYiA9IGNxLmhleFRvUmdiKHBhbGV0dGVbY2xvc2VzdE1hdGNoXSk7XG4gICAgICAgIGltZ0RhdGEuZGF0YVtpXSA9IHBhbGV0dGVSZ2JbMF07XG4gICAgICAgIGltZ0RhdGEuZGF0YVtpICsgMV0gPSBwYWxldHRlUmdiWzFdO1xuICAgICAgICBpbWdEYXRhLmRhdGFbaSArIDJdID0gcGFsZXR0ZVJnYlsyXTtcblxuICAgICAgICAvKiBkaXRoZXJpbmcgKi9cbiAgICAgICAgLy9pbWdEYXRhLmRhdGFbaSArIDNdID0gKDI1NSAqIE1hdGgucmFuZG9tKCkgPCBpbWdEYXRhLmRhdGFbaSArIDNdKSA/IDI1NSA6IDA7XG5cbiAgICAgICAgLy9pbWdEYXRhLmRhdGFbaSArIDNdID0gaW1nRGF0YS5kYXRhW2kgKyAzXSA+IDEyOCA/IDI1NSA6IDA7XG4gICAgICAgIC8qXG4gICAgICAgIGlmIChpICUgMyA9PT0gMCkge1xuICAgICAgICAgIGltZ0RhdGEuZGF0YVtpXSAtPSBjcS5saW1pdFZhbHVlKGltZ0RhdGEuZGF0YVtpXSAtIDUwLCAwLCAyNTUpO1xuICAgICAgICAgIGltZ0RhdGEuZGF0YVtpICsgMV0gLT0gY3EubGltaXRWYWx1ZShpbWdEYXRhLmRhdGFbaSArIDFdIC0gNTAsIDAsIDI1NSk7XG4gICAgICAgICAgaW1nRGF0YS5kYXRhW2kgKyAyXSAtPSBjcS5saW1pdFZhbHVlKGltZ0RhdGEuZGF0YVtpICsgMl0gLSA1MCwgMCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoaW1nRGF0YSwgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXRQYWxldHRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwYWxldHRlID0gW107XG4gICAgICB2YXIgc291cmNlRGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgc291cmNlUGl4ZWxzID0gc291cmNlRGF0YS5kYXRhO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlUGl4ZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGlmIChzb3VyY2VQaXhlbHNbaSArIDNdKSB7XG4gICAgICAgICAgdmFyIGhleCA9IGNxLnJnYlRvSGV4KHNvdXJjZVBpeGVsc1tpICsgMF0sIHNvdXJjZVBpeGVsc1tpICsgMV0sIHNvdXJjZVBpeGVsc1tpICsgMl0pO1xuICAgICAgICAgIGlmIChwYWxldHRlLmluZGV4T2YoaGV4KSA9PT0gLTEpIHBhbGV0dGUucHVzaChoZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWxldHRlO1xuICAgIH0sXG5cbiAgICBtYXBQYWxldHRlOiBmdW5jdGlvbigpIHtcblxuICAgIH0sXG5cbiAgICBwb2x5Z29uOiBmdW5jdGlvbihhcnJheSkge1xuXG4gICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuXG4gICAgICB0aGlzLm1vdmVUbyhhcnJheVswXVswXSwgYXJyYXlbMF1bMV0pO1xuXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMubGluZVRvKGFycmF5W2ldWzBdLCBhcnJheVtpXVsxXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBmaWxsUG9seWdvbjogZnVuY3Rpb24ocG9seWdvbikge1xuICAgICAgdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMucG9seWdvbihwb2x5Z29uKTtcbiAgICAgIHRoaXMuZmlsbCgpO1xuICAgIH0sXG5cbiAgICBzdHJva2VQb2x5Z29uOiBmdW5jdGlvbihwb2x5Z29uKSB7XG4gICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5wb2x5Z29uKHBvbHlnb24pO1xuICAgICAgdGhpcy5zdHJva2UoKTtcbiAgICB9LFxuXG4gICAgY29sb3JUb01hc2s6IGZ1bmN0aW9uKGNvbG9yLCBpbnZlcnRlZCkge1xuICAgICAgY29sb3IgPSBjcS5jb2xvcihjb2xvcikudG9BcnJheSgpO1xuICAgICAgdmFyIHNvdXJjZURhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgdmFyIHNvdXJjZVBpeGVscyA9IHNvdXJjZURhdGEuZGF0YTtcblxuICAgICAgdmFyIG1hc2sgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNvdXJjZVBpeGVscy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBpZiAoc291cmNlUGl4ZWxzW2kgKyAzXSA+IDApIG1hc2sucHVzaChpbnZlcnRlZCA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgIGVsc2UgbWFzay5wdXNoKGludmVydGVkID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSxcblxuICAgIGdyYXlzY2FsZVRvTWFzazogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBzb3VyY2VEYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBzb3VyY2VQaXhlbHMgPSBzb3VyY2VEYXRhLmRhdGE7XG5cbiAgICAgIHZhciBtYXNrID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2VQaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgbWFzay5wdXNoKCgoc291cmNlUGl4ZWxzW2kgKyAwXSArIHNvdXJjZVBpeGVsc1tpICsgMV0gKyBzb3VyY2VQaXhlbHNbaSArIDJdKSAvIDMpIC8gMjU1KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSxcblxuICAgIGFwcGx5TWFzazogZnVuY3Rpb24obWFzaykge1xuICAgICAgdmFyIHNvdXJjZURhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgdmFyIHNvdXJjZVBpeGVscyA9IHNvdXJjZURhdGEuZGF0YTtcblxuICAgICAgdmFyIG1vZGUgPSB0eXBlb2YgbWFza1swXSA9PT0gXCJib29sZWFuXCIgPyBcImJvb2xcIiA6IFwiYnl0ZVwiO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlUGl4ZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG1hc2tbaSAvIDRdO1xuICAgICAgICBzb3VyY2VQaXhlbHNbaSArIDNdID0gdmFsdWUgKiAyNTUgfCAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKHNvdXJjZURhdGEsIDAsIDApO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGZpbGxNYXNrOiBmdW5jdGlvbihtYXNrKSB7XG5cbiAgICAgIHZhciBzb3VyY2VEYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBzb3VyY2VQaXhlbHMgPSBzb3VyY2VEYXRhLmRhdGE7XG5cbiAgICAgIHZhciBtYXNrVHlwZSA9IHR5cGVvZiBtYXNrWzBdID09PSBcImJvb2xlYW5cIiA/IFwiYm9vbFwiIDogXCJieXRlXCI7XG4gICAgICB2YXIgY29sb3JNb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMiA/IFwibm9ybWFsXCIgOiBcImdyYWRpZW50XCI7XG5cbiAgICAgIHZhciBjb2xvciA9IGNxLmNvbG9yKGFyZ3VtZW50c1sxXSk7XG4gICAgICBpZiAoY29sb3JNb2RlID09PSBcImdyYWRpZW50XCIpIGNvbG9yQiA9IGNxLmNvbG9yKGFyZ3VtZW50c1syXSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2VQaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbWFza1tpIC8gNF07XG5cbiAgICAgICAgaWYgKG1hc2tUeXBlID09PSBcImJ5dGVcIikgdmFsdWUgLz0gMjU1O1xuXG4gICAgICAgIGlmIChjb2xvck1vZGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHNvdXJjZVBpeGVsc1tpICsgMF0gPSBjb2xvclswXSB8IDA7XG4gICAgICAgICAgICBzb3VyY2VQaXhlbHNbaSArIDFdID0gY29sb3JbMV0gfCAwO1xuICAgICAgICAgICAgc291cmNlUGl4ZWxzW2kgKyAyXSA9IGNvbG9yWzJdIHwgMDtcbiAgICAgICAgICAgIHNvdXJjZVBpeGVsc1tpICsgM10gPSB2YWx1ZSAqIDI1NSB8IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvdXJjZVBpeGVsc1tpICsgMF0gPSBjb2xvclswXSArIChjb2xvckJbMF0gLSBjb2xvclswXSkgKiB2YWx1ZSB8IDA7XG4gICAgICAgICAgc291cmNlUGl4ZWxzW2kgKyAxXSA9IGNvbG9yWzFdICsgKGNvbG9yQlsxXSAtIGNvbG9yWzFdKSAqIHZhbHVlIHwgMDtcbiAgICAgICAgICBzb3VyY2VQaXhlbHNbaSArIDJdID0gY29sb3JbMl0gKyAoY29sb3JCWzJdIC0gY29sb3JbMl0pICogdmFsdWUgfCAwO1xuICAgICAgICAgIHNvdXJjZVBpeGVsc1tpICsgM10gPSAyNTU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShzb3VyY2VEYXRhLCAwLCAwKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjbGVhcjogZnVuY3Rpb24oY29sb3IpIHtcbiAgICAgIGlmIChjb2xvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIHZhciByZXN1bHQgPSBjcS5jcmVhdGVDYW52YXModGhpcy5jYW52YXMpO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gY3EucG9vbCgpO1xuICAgICAgcmVzdWx0LndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIHJlc3VsdC5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIHJlc3VsdC5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcblxuICAgICAgcmV0dXJuIGNxKHJlc3VsdCk7XG4gICAgfSxcblxuICAgIGdyYWRpZW50VGV4dDogZnVuY3Rpb24odGV4dCwgeCwgeSwgbWF4V2lkdGgsIGdyYWRpZW50KSB7XG5cbiAgICAgIHZhciB3b3JkcyA9IHRleHQuc3BsaXQoXCIgXCIpO1xuXG4gICAgICB2YXIgaCA9IHRoaXMuZm9udEhlaWdodCgpICogMjtcblxuICAgICAgdmFyIG94ID0gMDtcbiAgICAgIHZhciBveSA9IDA7XG5cbiAgICAgIGlmIChtYXhXaWR0aCkge1xuICAgICAgICB2YXIgbGluZSA9IDA7XG4gICAgICAgIHZhciBsaW5lcyA9IFtcIlwiXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHdvcmQgPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgICAgICAgIHZhciB3b3JkV2lkdGggPSB0aGlzLmNvbnRleHQubWVhc3VyZVRleHQod29yZCkud2lkdGg7XG5cbiAgICAgICAgICBpZiAob3ggKyB3b3JkV2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgbGluZXNbKytsaW5lXSA9IFwiXCI7XG4gICAgICAgICAgICBveCA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbbGluZV0gKz0gd29yZDtcblxuICAgICAgICAgIG94ICs9IHdvcmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHZhciBsaW5lcyA9IFt0ZXh0XTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb3kgPSB5ICsgaSAqIGggKiAwLjYgfCAwO1xuICAgICAgICB2YXIgbGluZ3JhZCA9IHRoaXMuY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBveSwgMCwgb3kgKyBoICogMC42IHwgMCk7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBncmFkaWVudC5sZW5ndGg7IGogKz0gMikge1xuICAgICAgICAgIGxpbmdyYWQuYWRkQ29sb3JTdG9wKGdyYWRpZW50W2pdLCBncmFkaWVudFtqICsgMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRleHQgPSBsaW5lc1tpXTtcblxuICAgICAgICB0aGlzLmZpbGxTdHlsZShsaW5ncmFkKS5maWxsVGV4dCh0ZXh0LCB4LCBveSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICByZW1vdmVDb2xvcjogZnVuY3Rpb24oY29sb3IpIHtcblxuICAgICAgY29sb3IgPSBjcS5jb2xvcihjb2xvcik7XG5cbiAgICAgIHZhciBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBwaXhlbHMgPSBkYXRhLmRhdGE7XG5cbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXMud2lkdGg7IHgrKykge1xuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMuY2FudmFzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgdmFyIGkgPSAoeSAqIHRoaXMuY2FudmFzLndpZHRoICsgeCkgKiA0O1xuXG4gICAgICAgICAgaWYgKHBpeGVsc1tpICsgMF0gPT09IGNvbG9yWzBdICYmIHBpeGVsc1tpICsgMV0gPT09IGNvbG9yWzFdICYmIHBpeGVsc1tpICsgMl0gPT09IGNvbG9yWzJdKSB7XG4gICAgICAgICAgICBwaXhlbHNbaSArIDNdID0gMDtcbiAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBvdXRsaW5lOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBwaXhlbHMgPSBkYXRhLmRhdGE7XG5cbiAgICAgIHZhciBuZXdEYXRhID0gdGhpcy5jcmVhdGVJbWFnZURhdGEodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgbmV3UGl4ZWxzID0gbmV3RGF0YS5kYXRhO1xuXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXM7XG5cbiAgICAgIGZ1bmN0aW9uIGNoZWNrKHgsIHkpIHtcblxuICAgICAgICBpZiAoeCA8IDApIHJldHVybiAwO1xuICAgICAgICBpZiAoeCA+PSBjYW52YXMud2lkdGgpIHJldHVybiAwO1xuICAgICAgICBpZiAoeSA8IDApIHJldHVybiAwO1xuICAgICAgICBpZiAoeSA+PSBjYW52YXMuaGVpZ2h0KSByZXR1cm4gMDtcblxuICAgICAgICB2YXIgaSA9ICh4ICsgeSAqIGNhbnZhcy53aWR0aCkgKiA0O1xuXG4gICAgICAgIHJldHVybiBwaXhlbHNbaSArIDNdID4gMDtcblxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMuY2FudmFzLndpZHRoOyB4KyspIHtcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmNhbnZhcy5oZWlnaHQ7IHkrKykge1xuXG4gICAgICAgICAgdmFyIGZ1bGwgPSAwO1xuICAgICAgICAgIHZhciBpID0gKHkgKiBjYW52YXMud2lkdGggKyB4KSAqIDQ7XG5cbiAgICAgICAgICBpZiAoIXBpeGVsc1tpICsgM10pIGNvbnRpbnVlO1xuXG4gICAgICAgICAgZnVsbCArPSBjaGVjayh4IC0gMSwgeSk7XG4gICAgICAgICAgZnVsbCArPSBjaGVjayh4ICsgMSwgeSk7XG4gICAgICAgICAgZnVsbCArPSBjaGVjayh4LCB5IC0gMSk7XG4gICAgICAgICAgZnVsbCArPSBjaGVjayh4LCB5ICsgMSk7XG5cbiAgICAgICAgICBpZiAoZnVsbCAhPT0gNCkge1xuXG4gICAgICAgICAgICBuZXdQaXhlbHNbaV0gPSAyNTU7XG4gICAgICAgICAgICBuZXdQaXhlbHNbaSArIDFdID0gMjU1O1xuICAgICAgICAgICAgbmV3UGl4ZWxzW2kgKyAyXSA9IDI1NTtcbiAgICAgICAgICAgIG5ld1BpeGVsc1tpICsgM10gPSAyNTU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShuZXdEYXRhLCAwLCAwKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHNldEhzbDogZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBwaXhlbHMgPSBkYXRhLmRhdGE7XG4gICAgICB2YXIgciwgZywgYiwgYSwgaCwgcywgbCwgaHNsID0gW10sXG4gICAgICAgIG5ld1BpeGVsID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgaHNsID0gY3EucmdiVG9Ic2wocGl4ZWxzW2kgKyAwXSwgcGl4ZWxzW2kgKyAxXSwgcGl4ZWxzW2kgKyAyXSk7XG5cbiAgICAgICAgaCA9IGFyZ3NbMF0gPT09IGZhbHNlID8gaHNsWzBdIDogY3EubGltaXRWYWx1ZShhcmdzWzBdLCAwLCAxKTtcbiAgICAgICAgcyA9IGFyZ3NbMV0gPT09IGZhbHNlID8gaHNsWzFdIDogY3EubGltaXRWYWx1ZShhcmdzWzFdLCAwLCAxKTtcbiAgICAgICAgbCA9IGFyZ3NbMl0gPT09IGZhbHNlID8gaHNsWzJdIDogY3EubGltaXRWYWx1ZShhcmdzWzJdLCAwLCAxKTtcblxuICAgICAgICBuZXdQaXhlbCA9IGNxLmhzbFRvUmdiKGgsIHMsIGwpO1xuXG4gICAgICAgIHBpeGVsc1tpICsgMF0gPSBuZXdQaXhlbFswXTtcbiAgICAgICAgcGl4ZWxzW2kgKyAxXSA9IG5ld1BpeGVsWzFdO1xuICAgICAgICBwaXhlbHNbaSArIDJdID0gbmV3UGl4ZWxbMl07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzaGlmdEhzbDogZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBwaXhlbHMgPSBkYXRhLmRhdGE7XG4gICAgICB2YXIgciwgZywgYiwgYSwgaCwgcywgbCwgaHNsID0gW10sXG4gICAgICAgIG5ld1BpeGVsID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgaHNsID0gY3EucmdiVG9Ic2wocGl4ZWxzW2kgKyAwXSwgcGl4ZWxzW2kgKyAxXSwgcGl4ZWxzW2kgKyAyXSk7XG5cbiAgICAgICAgaWYgKHBpeGVsc1tpICsgMF0gIT09IHBpeGVsc1tpICsgMV0gfHwgcGl4ZWxzW2kgKyAxXSAhPT0gcGl4ZWxzW2kgKyAyXSkge1xuICAgICAgICAgIGggPSBhcmdzWzBdID09PSBmYWxzZSA/IGhzbFswXSA6IGNxLndyYXBWYWx1ZShoc2xbMF0gKyBhcmdzWzBdLCAwLCAxKTtcbiAgICAgICAgICBzID0gYXJnc1sxXSA9PT0gZmFsc2UgPyBoc2xbMV0gOiBjcS5saW1pdFZhbHVlKGhzbFsxXSArIGFyZ3NbMV0sIDAsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGggPSBoc2xbMF07XG4gICAgICAgICAgcyA9IGhzbFsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGwgPSBhcmdzWzJdID09PSBmYWxzZSA/IGhzbFsyXSA6IGNxLmxpbWl0VmFsdWUoaHNsWzJdICsgYXJnc1syXSwgMCwgMSk7XG5cbiAgICAgICAgbmV3UGl4ZWwgPSBjcS5oc2xUb1JnYihoLCBzLCBsKTtcblxuICAgICAgICBwaXhlbHNbaSArIDBdID0gbmV3UGl4ZWxbMF07XG4gICAgICAgIHBpeGVsc1tpICsgMV0gPSBuZXdQaXhlbFsxXTtcbiAgICAgICAgcGl4ZWxzW2kgKyAyXSA9IG5ld1BpeGVsWzJdO1xuICAgICAgfVxuXG5cbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBhcHBseUNvbG9yOiBmdW5jdGlvbihjb2xvcikge1xuXG4gICAgICBpZiAoQ09DT09OSlMpIHJldHVybiB0aGlzO1xuICAgICAgdGhpcy5zYXZlKCk7XG5cbiAgICAgIHRoaXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKFwic291cmNlLWluXCIpO1xuICAgICAgdGhpcy5jbGVhcihjb2xvcik7XG5cbiAgICAgIHRoaXMucmVzdG9yZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgbmVnYXRpdmU6IGZ1bmN0aW9uKHNyYywgZHN0KSB7XG5cbiAgICAgIHZhciBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBwaXhlbHMgPSBkYXRhLmRhdGE7XG4gICAgICB2YXIgciwgZywgYiwgYSwgaCwgcywgbCwgaHNsID0gW10sXG4gICAgICAgIG5ld1BpeGVsID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgcGl4ZWxzW2kgKyAwXSA9IDI1NSAtIHBpeGVsc1tpICsgMF07XG4gICAgICAgIHBpeGVsc1tpICsgMV0gPSAyNTUgLSBwaXhlbHNbaSArIDFdO1xuICAgICAgICBwaXhlbHNbaSArIDJdID0gMjU1IC0gcGl4ZWxzW2kgKyAyXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHJvdW5kUmVjdDogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XG5cbiAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICAgIHRoaXMubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgICB0aGlzLnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgICAgdGhpcy5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICAgIHRoaXMucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgICB0aGlzLmxpbmVUbyh4ICsgcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICAgIHRoaXMucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICAgIHRoaXMubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgICAgdGhpcy5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG1hcmt1cFRleHQ6IGZ1bmN0aW9uKHRleHQpIHtcblxuXG4gICAgfSxcblxuICAgIHdyYXBwZWRUZXh0OiBmdW5jdGlvbih0ZXh0LCB4LCB5LCBtYXhXaWR0aCwgbGluZUhlaWdodCkge1xuXG4gICAgICB2YXIgd29yZHMgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcblxuICAgICAgdmFyIGxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0IHx8IHRoaXMuZm9udEhlaWdodCgpO1xuXG4gICAgICB2YXIgb3ggPSAwO1xuICAgICAgdmFyIG95ID0gMDtcblxuICAgICAgaWYgKG1heFdpZHRoKSB7XG4gICAgICAgIHZhciBsaW5lID0gMDtcbiAgICAgICAgdmFyIGxpbmVzID0gW1wiXCJdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgd29yZCA9IHdvcmRzW2ldICsgXCIgXCI7XG4gICAgICAgICAgdmFyIHdvcmRXaWR0aCA9IHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dCh3b3JkKS53aWR0aDtcblxuICAgICAgICAgIGlmIChveCArIHdvcmRXaWR0aCA+IG1heFdpZHRoIHx8IHdvcmRzW2ldID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBsaW5lc1srK2xpbmVdID0gXCJcIjtcbiAgICAgICAgICAgIG94ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdvcmRzW2ldICE9PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBsaW5lc1tsaW5lXSArPSB3b3JkO1xuXG4gICAgICAgICAgICBveCArPSB3b3JkV2lkdGg7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGxpbmVzID0gW3RleHRdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBveSA9IHkgKyBpICogbGluZUhlaWdodCB8IDA7XG5cbiAgICAgICAgdmFyIHRleHQgPSBsaW5lc1tpXTtcblxuICAgICAgICB0aGlzLmZpbGxUZXh0KHRleHQsIHgsIG95KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGZvbnRIZWlnaHRzOiB7fSxcblxuICAgIGZvbnRIZWlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZvbnQgPSB0aGlzLmZvbnQoKTtcblxuICAgICAgaWYgKCF0aGlzLmZvbnRIZWlnaHRzW2ZvbnRdKSB7XG4gICAgICAgIHZhciB0ZW1wID0gY3EoMTAwLCAxMDApO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSB7fTtcbiAgICAgICAgdGVtcC5mb250KGZvbnQpLmZpbGxTdHlsZShcIiNmZmZcIik7XG4gICAgICAgIHRlbXAudGV4dEJhc2VsaW5lKFwiYm90dG9tXCIpLmZpbGxUZXh0KFwiZ01cIiwgMjUsIDEwMCk7XG4gICAgICAgIHRlbXAudHJpbShmYWxzZSwgY2hhbmdlcyk7XG4gICAgICAgIGhlaWdodCArPSBjaGFuZ2VzLmJvdHRvbTtcblxuICAgICAgICB2YXIgdGVtcCA9IGNxKDEwMCwgMTAwKTtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSB7fTtcbiAgICAgICAgdGVtcC5mb250KGZvbnQpLmZpbGxTdHlsZShcIiNmZmZcIik7XG4gICAgICAgIHRlbXAudGV4dEJhc2VsaW5lKFwidG9wXCIpLmZpbGxUZXh0KFwiZ01cIiwgMjUsIDApO1xuICAgICAgICB0ZW1wLnRyaW0oZmFsc2UsIGNoYW5nZXMpO1xuICAgICAgICBoZWlnaHQgKz0gY2hhbmdlcy50b3A7XG5cbiAgICAgICAgdmFyIHRlbXAgPSBjcSgxMDAsIDEwMCk7XG4gICAgICAgIHZhciBjaGFuZ2VzID0ge307XG4gICAgICAgIHRlbXAuZm9udChmb250KS5maWxsU3R5bGUoXCIjZmZmXCIpO1xuICAgICAgICB0ZW1wLnRleHRCYXNlbGluZShcImFscGhhYmV0aWNcIikuZmlsbFRleHQoXCJnTVwiLCA1MCwgNTApO1xuICAgICAgICB0ZW1wLnRyaW0oZmFsc2UsIGNoYW5nZXMpO1xuICAgICAgICBoZWlnaHQgKz0gdGVtcC5oZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5mb250SGVpZ2h0c1tmb250XSA9IGhlaWdodDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZm9udEhlaWdodHNbZm9udF07XG4gICAgfSxcblxuICAgIHRleHRCb3VuZGFyaWVzOiBmdW5jdGlvbih0ZXh0LCBtYXhXaWR0aCkge1xuICAgICAgdmFyIHdvcmRzID0gdGV4dC5zcGxpdChcIiBcIik7XG5cbiAgICAgIHZhciBoID0gdGhpcy5mb250SGVpZ2h0KCk7XG5cbiAgICAgIHZhciBveCA9IDA7XG4gICAgICB2YXIgb3kgPSAwO1xuXG4gICAgICBpZiAobWF4V2lkdGgpIHtcbiAgICAgICAgdmFyIGxpbmUgPSAwO1xuICAgICAgICB2YXIgbGluZXMgPSBbXCJcIl07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciB3b3JkID0gd29yZHNbaV0gKyBcIiBcIjtcbiAgICAgICAgICB2YXIgd29yZFdpZHRoID0gdGhpcy5jb250ZXh0Lm1lYXN1cmVUZXh0KHdvcmQpLndpZHRoO1xuXG4gICAgICAgICAgaWYgKG94ICsgd29yZFdpZHRoID4gbWF4V2lkdGggfHwgd29yZHNbaV0gPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGxpbmVzWysrbGluZV0gPSBcIlwiO1xuICAgICAgICAgICAgb3ggPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh3b3Jkc1tpXSAhPT0gXCJcXG5cIikge1xuICAgICAgICAgICAgbGluZXNbbGluZV0gKz0gd29yZDtcbiAgICAgICAgICAgIG94ICs9IHdvcmRXaWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsaW5lcyA9IFt0ZXh0XTtcbiAgICAgICAgbWF4V2lkdGggPSB0aGlzLm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IGxpbmVzLmxlbmd0aCAqIGgsXG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgbGluZXM6IGxpbmVzLmxlbmd0aCxcbiAgICAgICAgbGluZUhlaWdodDogaFxuICAgICAgfVxuICAgIH0sXG5cbiAgICByZXBlYXRJbWFnZVJlZ2lvbjogZnVuY3Rpb24oaW1hZ2UsIHN4LCBzeSwgc3csIHNoLCBkeCwgZHksIGR3LCBkaCkge1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLnJlY3QoZHgsIGR5LCBkdywgZGgpO1xuICAgICAgdGhpcy5jbGlwKCk7XG5cbiAgICAgIGZvciAodmFyIHggPSAwLCBsZW4gPSBNYXRoLmNlaWwoZHcgLyBzdyk7IHggPCBsZW47IHgrKykge1xuICAgICAgICBmb3IgKHZhciB5ID0gMCwgbGVueSA9IE1hdGguY2VpbChkaCAvIHNoKTsgeSA8IGxlbnk7IHkrKykge1xuICAgICAgICAgIHRoaXMuZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHN3LCBzaCwgZHggKyB4ICogc3csIGR5ICsgeSAqIHNoLCBzdywgc2gpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVzdG9yZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVwZWF0SW1hZ2U6IGZ1bmN0aW9uKGltYWdlLCB4LCB5LCB3LCBoKSB7XG4gICAgICAvLyBpZiAoIWVudi5kZXRhaWxzKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA5KSB7XG4gICAgICAgIHRoaXMucmVwZWF0SW1hZ2VSZWdpb24oaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIHgsIHksIHcsIGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXBlYXRJbWFnZVJlZ2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYm9yZGVySW1hZ2U6IGZ1bmN0aW9uKGltYWdlLCB4LCB5LCB3LCBoLCB0LCByLCBiLCBsLCBmaWxsKSB7XG5cbiAgICAgIC8vIGlmICghZW52LmRldGFpbHMpIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAodHlwZW9mIHQgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgICB2YXIgYm90dG9tTGVmdCA9IHQuYm90dG9tTGVmdCB8fCBbMCwgMCwgMCwgMF07XG4gICAgICAgIHZhciBib3R0b21SaWdodCA9IHQuYm90dG9tUmlnaHQgfHwgWzAsIDAsIDAsIDBdO1xuICAgICAgICB2YXIgdG9wTGVmdCA9IHQudG9wTGVmdCB8fCBbMCwgMCwgMCwgMF07XG4gICAgICAgIHZhciB0b3BSaWdodCA9IHQudG9wUmlnaHQgfHwgWzAsIDAsIDAsIDBdO1xuXG4gICAgICAgIHZhciBjbGggPSBib3R0b21MZWZ0WzNdICsgdG9wTGVmdFszXTtcbiAgICAgICAgdmFyIGNyaCA9IGJvdHRvbVJpZ2h0WzNdICsgdG9wUmlnaHRbM107XG4gICAgICAgIHZhciBjdHcgPSB0b3BMZWZ0WzJdICsgdG9wUmlnaHRbMl07XG4gICAgICAgIHZhciBjYncgPSBib3R0b21MZWZ0WzJdICsgYm90dG9tUmlnaHRbMl07XG5cbiAgICAgICAgdC5maWxsUGFkZGluZyA9IFswLCAwLCAwLCAwXTtcblxuICAgICAgICBpZiAodC5sZWZ0KSB0LmZpbGxQYWRkaW5nWzBdID0gdC5sZWZ0WzJdO1xuICAgICAgICBpZiAodC50b3ApIHQuZmlsbFBhZGRpbmdbMV0gPSB0LnRvcFszXTtcbiAgICAgICAgaWYgKHQucmlnaHQpIHQuZmlsbFBhZGRpbmdbMl0gPSB0LnJpZ2h0WzJdO1xuICAgICAgICBpZiAodC5ib3R0b20pIHQuZmlsbFBhZGRpbmdbM10gPSB0LmJvdHRvbVszXTtcblxuICAgICAgICAvLyBpZiAoIXQuZmlsbFBhZGRpbmcpIHQuZmlsbFBhZGRpbmcgPSBbMCwgMCwgMCwgMF07XG5cbiAgICAgICAgaWYgKHQuZmlsbCkge1xuICAgICAgICAgIHRoaXMuZHJhd0ltYWdlKGltYWdlLCB0LmZpbGxbMF0sIHQuZmlsbFsxXSwgdC5maWxsWzJdLCB0LmZpbGxbM10sIHggKyB0LmZpbGxQYWRkaW5nWzBdLCB5ICsgdC5maWxsUGFkZGluZ1sxXSwgdyAtIHQuZmlsbFBhZGRpbmdbMl0gLSB0LmZpbGxQYWRkaW5nWzBdLCBoIC0gdC5maWxsUGFkZGluZ1szXSAtIHQuZmlsbFBhZGRpbmdbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMuZmlsbFJlY3QoeCArIHQuZmlsbFBhZGRpbmdbMF0sIHkgKyB0LmZpbGxQYWRkaW5nWzFdLCB3IC0gdC5maWxsUGFkZGluZ1syXSAtIHQuZmlsbFBhZGRpbmdbMF0sIGggLSB0LmZpbGxQYWRkaW5nWzNdIC0gdC5maWxsUGFkZGluZ1sxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodC5sZWZ0KSB0aGlzW3QubGVmdFs0XSA9PT0gXCJzdHJldGNoXCIgPyBcImRyYXdJbWFnZVwiIDogXCJyZXBlYXRJbWFnZVwiXShpbWFnZSwgdC5sZWZ0WzBdLCB0LmxlZnRbMV0sIHQubGVmdFsyXSwgdC5sZWZ0WzNdLCB4LCB5ICsgdG9wTGVmdFszXSwgdC5sZWZ0WzJdLCBoIC0gY2xoKTtcbiAgICAgICAgaWYgKHQucmlnaHQpIHRoaXNbdC5yaWdodFs0XSA9PT0gXCJzdHJldGNoXCIgPyBcImRyYXdJbWFnZVwiIDogXCJyZXBlYXRJbWFnZVwiXShpbWFnZSwgdC5yaWdodFswXSwgdC5yaWdodFsxXSwgdC5yaWdodFsyXSwgdC5yaWdodFszXSwgeCArIHcgLSB0LnJpZ2h0WzJdLCB5ICsgdG9wUmlnaHRbM10sIHQucmlnaHRbMl0sIGggLSBjcmgpO1xuICAgICAgICBpZiAodC50b3ApIHRoaXNbdC50b3BbNF0gPT09IFwic3RyZXRjaFwiID8gXCJkcmF3SW1hZ2VcIiA6IFwicmVwZWF0SW1hZ2VcIl0oaW1hZ2UsIHQudG9wWzBdLCB0LnRvcFsxXSwgdC50b3BbMl0sIHQudG9wWzNdLCB4ICsgdG9wTGVmdFsyXSwgeSwgdyAtIGN0dywgdC50b3BbM10pO1xuICAgICAgICBpZiAodC5ib3R0b20pIHRoaXNbdC5ib3R0b21bNF0gPT09IFwic3RyZXRjaFwiID8gXCJkcmF3SW1hZ2VcIiA6IFwicmVwZWF0SW1hZ2VcIl0oaW1hZ2UsIHQuYm90dG9tWzBdLCB0LmJvdHRvbVsxXSwgdC5ib3R0b21bMl0sIHQuYm90dG9tWzNdLCB4ICsgYm90dG9tTGVmdFsyXSwgeSArIGggLSB0LmJvdHRvbVszXSwgdyAtIGNidywgdC5ib3R0b21bM10pO1xuXG4gICAgICAgIGlmICh0LmJvdHRvbUxlZnQpIHRoaXMuZHJhd0ltYWdlKGltYWdlLCB0LmJvdHRvbUxlZnRbMF0sIHQuYm90dG9tTGVmdFsxXSwgdC5ib3R0b21MZWZ0WzJdLCB0LmJvdHRvbUxlZnRbM10sIHgsIHkgKyBoIC0gdC5ib3R0b21MZWZ0WzNdLCB0LmJvdHRvbUxlZnRbMl0sIHQuYm90dG9tTGVmdFszXSk7XG4gICAgICAgIGlmICh0LnRvcExlZnQpIHRoaXMuZHJhd0ltYWdlKGltYWdlLCB0LnRvcExlZnRbMF0sIHQudG9wTGVmdFsxXSwgdC50b3BMZWZ0WzJdLCB0LnRvcExlZnRbM10sIHgsIHksIHQudG9wTGVmdFsyXSwgdC50b3BMZWZ0WzNdKTtcbiAgICAgICAgaWYgKHQudG9wUmlnaHQpIHRoaXMuZHJhd0ltYWdlKGltYWdlLCB0LnRvcFJpZ2h0WzBdLCB0LnRvcFJpZ2h0WzFdLCB0LnRvcFJpZ2h0WzJdLCB0LnRvcFJpZ2h0WzNdLCB4ICsgdyAtIHQudG9wUmlnaHRbMl0sIHksIHQudG9wUmlnaHRbMl0sIHQudG9wUmlnaHRbM10pO1xuICAgICAgICBpZiAodC5ib3R0b21SaWdodCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIHQuYm90dG9tUmlnaHRbMF0sIHQuYm90dG9tUmlnaHRbMV0sIHQuYm90dG9tUmlnaHRbMl0sIHQuYm90dG9tUmlnaHRbM10sIHggKyB3IC0gdC5ib3R0b21SaWdodFsyXSwgeSArIGggLSB0LmJvdHRvbVJpZ2h0WzNdLCB0LmJvdHRvbVJpZ2h0WzJdLCB0LmJvdHRvbVJpZ2h0WzNdKTtcblxuXG4gICAgICB9IGVsc2Uge1xuXG5cbiAgICAgICAgLyogdG9wICovXG4gICAgICAgIGlmICh0ID4gMCAmJiB3IC0gbCAtIHIgPiAwKSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgbCwgMCwgaW1hZ2Uud2lkdGggLSBsIC0gciwgdCwgeCArIGwsIHksIHcgLSBsIC0gciwgdCk7XG5cbiAgICAgICAgLyogYm90dG9tICovXG4gICAgICAgIGlmIChiID4gMCAmJiB3IC0gbCAtIHIgPiAwKSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgbCwgaW1hZ2UuaGVpZ2h0IC0gYiwgaW1hZ2Uud2lkdGggLSBsIC0gciwgYiwgeCArIGwsIHkgKyBoIC0gYiwgdyAtIGwgLSByLCBiKTtcbiAgICAgICAgLy8gICAgICBjb25zb2xlLmxvZyh4LCB5LCB3LCBoLCB0LCByLCBiLCBsKTtcbiAgICAgICAgLy8gICAgICBjb25zb2xlLmxvZyhpbWFnZSwgMCwgdCwgbCwgaW1hZ2UuaGVpZ2h0IC0gYiAtIHQsIHgsIHkgKyB0LCBsLCBoIC0gYiAtIHQpO1xuICAgICAgICAvKiBsZWZ0ICovXG4gICAgICAgIGlmIChsID4gMCAmJiBoIC0gYiAtIHQgPiAwKSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgMCwgdCwgbCwgaW1hZ2UuaGVpZ2h0IC0gYiAtIHQsIHgsIHkgKyB0LCBsLCBoIC0gYiAtIHQpO1xuXG5cbiAgICAgICAgLyogcmlnaHQgKi9cbiAgICAgICAgaWYgKHIgPiAwICYmIGggLSBiIC0gdCA+IDApIHRoaXMuZHJhd0ltYWdlKGltYWdlLCBpbWFnZS53aWR0aCAtIHIsIHQsIHIsIGltYWdlLmhlaWdodCAtIGIgLSB0LCB4ICsgdyAtIHIsIHkgKyB0LCByLCBoIC0gYiAtIHQpO1xuXG4gICAgICAgIC8qIHRvcC1sZWZ0ICovXG4gICAgICAgIGlmIChsID4gMCAmJiB0ID4gMCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGwsIHQsIHgsIHksIGwsIHQpO1xuXG4gICAgICAgIC8qIHRvcC1yaWdodCAqL1xuICAgICAgICBpZiAociA+IDAgJiYgdCA+IDApIHRoaXMuZHJhd0ltYWdlKGltYWdlLCBpbWFnZS53aWR0aCAtIHIsIDAsIHIsIHQsIHggKyB3IC0gciwgeSwgciwgdCk7XG5cbiAgICAgICAgLyogYm90dG9tLXJpZ2h0ICovXG4gICAgICAgIGlmIChyID4gMCAmJiBiID4gMCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIGltYWdlLndpZHRoIC0gciwgaW1hZ2UuaGVpZ2h0IC0gYiwgciwgYiwgeCArIHcgLSByLCB5ICsgaCAtIGIsIHIsIGIpO1xuXG4gICAgICAgIC8qIGJvdHRvbS1sZWZ0ICovXG4gICAgICAgIGlmIChsID4gMCAmJiBiID4gMCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIDAsIGltYWdlLmhlaWdodCAtIGIsIGwsIGIsIHgsIHkgKyBoIC0gYiwgbCwgYik7XG5cbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGZpbGwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKGZpbGwpLmZpbGxSZWN0KHggKyBsLCB5ICsgdCwgdyAtIGwgLSByLCBoIC0gdCAtIGIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodyAtIGwgLSByID4gMCAmJiBoIC0gdCAtIGIgPiAwKVxuICAgICAgICAgICAgICB0aGlzLmRyYXdJbWFnZShpbWFnZSwgbCwgdCwgaW1hZ2Uud2lkdGggLSByIC0gbCwgaW1hZ2UuaGVpZ2h0IC0gYiAtIHQsIHggKyBsLCB5ICsgdCwgdyAtIGwgLSByLCBoIC0gdCAtIGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXRQaXhlbDogZnVuY3Rpb24oY29sb3IsIHgsIHkpIHtcblxuICAgICAgLyogZmlsbFJlY3QgaXMgc2xvdyEgKi9cblxuICAgICAgcmV0dXJuIHRoaXMuZmlsbFN0eWxlKGNvbG9yKS5maWxsUmVjdCh4LCB5LCAxLCAxKTtcblxuICAgICAgLyogdGhpcyBpcyBob3cgaXQgc2hvdWxkIHdvcmsgLSBidXQgaXQgZG9lcyBub3QgKi9cblxuICAgICAgY29sb3IgPSBjcS5jb2xvcihjb2xvcik7XG5cbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY3JlYXRlSW1hZ2VEYXRhKDEsIDEpO1xuXG4gICAgICBwaXhlbC5kYXRhWzBdID0gY29sb3JbMF07XG4gICAgICBwaXhlbC5kYXRhWzFdID0gY29sb3JbMV07XG4gICAgICBwaXhlbC5kYXRhWzJdID0gY29sb3JbMl07XG4gICAgICBwaXhlbC5kYXRhWzNdID0gMS4wO1xuXG4gICAgICB0aGlzLnB1dEltYWdlRGF0YShwaXhlbCwgeCwgeSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXRQaXhlbDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgdmFyIHBpeGVsID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKS5kYXRhO1xuICAgICAgcmV0dXJuIGNxLmNvbG9yKFtwaXhlbFswXSwgcGl4ZWxbMV0sIHBpeGVsWzJdLCBwaXhlbFszXV0pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVJbWFnZURhdGE6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIGlmIChmYWxzZSAmJiB0aGlzLmNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhLmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5lbXB0eUNhbnZhcykge1xuICAgICAgICAgIHRoaXMuZW1wdHlDYW52YXMgPSBjcS5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgdGhpcy5lbXB0eUNhbnZhc0NvbnRleHQgPSB0aGlzLmVtcHR5Q2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW1wdHlDYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5lbXB0eUNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5Q2FudmFzQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0cm9rZUxpbmU6IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKSB7XG5cbiAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgeDIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdGhpcy5tb3ZlVG8oeDEueCwgeDEueSk7XG4gICAgICAgIHRoaXMubGluZVRvKHkxLngsIHkxLnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb3ZlVG8oeDEsIHkxKTtcbiAgICAgICAgdGhpcy5saW5lVG8oeDIsIHkyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdHJva2UoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9LFxuXG4gICAgc2V0TGluZURhc2g6IGZ1bmN0aW9uKGRhc2gpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHQuc2V0TGluZURhc2gpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNldExpbmVEYXNoKGRhc2gpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gZWxzZSByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgbWVhc3VyZVRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dC5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIGdldExpbmVEYXNoOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGluZURhc2goKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlUmFkaWFsR3JhZGllbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudC5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUxpbmVhckdyYWRpZW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVQYXR0ZXJuOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY3JlYXRlUGF0dGVybi5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIGdldEltYWdlRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIC8qIElmIHlvdSB0aGluayB0aGF0IEkgYW0gcmV0YXJkZWQgYmVjYXVzZSBJIHVzZSBmaWxsUmVjdCB0byBzZXQgXG4gICAgICAgcGl4ZWxzIC0gcmVhZCBhYm91dCBwcmVtdWx0aXBsZWQgYWxwaGEgaW4gY2FudmFzICovXG5cbiAgICB3cml0ZU1ldGE6IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgICAganNvbiA9IGVuY29kZVVSSUNvbXBvbmVudChqc29uKTtcblxuICAgICAgdmFyIGJ5dGVzID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBieXRlcy5wdXNoKGpzb24uY2hhckNvZGVBdChpKSk7XG4gICAgICAgIC8vICAgICAgY29uc29sZS5sb2coanNvbltpXSlcbiAgICAgIH1cblxuICAgICAgYnl0ZXMucHVzaCgxMjcpO1xuXG4gICAgICB2YXIgeCA9IHRoaXMud2lkdGggLSAxO1xuICAgICAgdmFyIHkgPSB0aGlzLmhlaWdodCAtIDE7XG5cbiAgICAgIHZhciBwaXhlbCA9IFtdO1xuXG4gICAgICB3aGlsZSAoYnl0ZXMubGVuZ3RoKSB7XG5cbiAgICAgICAgdmFyIGJ5dGUgPSBieXRlcy5zaGlmdCgpO1xuXG4gICAgICAgIHBpeGVsLnVuc2hpZnQoYnl0ZSAqIDIpO1xuICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coeCArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSksIGJ5dGUpO1xuXG4gICAgICAgIGlmICghYnl0ZXMubGVuZ3RoKVxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMyAtIHBpeGVsLmxlbmd0aDsgaSsrKSBwaXhlbC51bnNoaWZ0KDI1NCk7XG5cbiAgICAgICAgaWYgKHBpeGVsLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKGNxLmNvbG9yKHBpeGVsKS50b1JnYigpKS5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICBwaXhlbCA9IFtdO1xuICAgICAgICAgIHgtLTtcblxuICAgICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgeS0tO1xuICAgICAgICAgICAgeCA9IHRoaXMud2lkdGggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cbiAgICByZWFkTWV0YTogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBieXRlcyA9IFtdO1xuXG4gICAgICB2YXIgeCA9IHRoaXMud2lkdGggLSAxO1xuICAgICAgdmFyIHkgPSB0aGlzLmhlaWdodCAtIDE7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBwaXhlbCA9IHRoaXMuZ2V0UGl4ZWwoeCwgeSk7XG5cbiAgICAgICAgdmFyIHN0b3AgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXG4gICAgICAgICAgaWYgKHBpeGVsWzIgLSBpXSA9PT0gMjU0KSBzdG9wID0gdHJ1ZTtcblxuICAgICAgICAgIGVsc2UgYnl0ZXMucHVzaChwaXhlbFsyIC0gaV0gLyAyIHwgMCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdG9wKSBicmVhaztcblxuICAgICAgICB4LS07XG5cbiAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgeS0tO1xuICAgICAgICAgIHggPSB0aGlzLndpZHRoIC0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIHZhciBqc29uID0gXCJcIjtcblxuICAgICAgd2hpbGUgKGJ5dGVzLmxlbmd0aCkge1xuICAgICAgICBqc29uICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXMuc2hpZnQoKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gZmFsc2U7XG5cbiAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuXG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoanNvbikpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcblxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB9LFxuXG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgfSxcblxuICAgIHNldCB3aWR0aCh3KSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHc7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICAgIH0sXG5cbiAgICBzZXQgaGVpZ2h0KGgpIHtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGg7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9XG5cblxuICB9O1xuXG4gIC8qIGV4dGVuZCBMYXllciB3aXRoIGRyYXdpbmcgY29udGV4dCBtZXRob2RzICovXG5cbiAgdmFyIG1ldGhvZHMgPSBbXCJhcmNcIiwgXCJhcmNUb1wiLCBcImJlZ2luUGF0aFwiLCBcImJlemllckN1cnZlVG9cIiwgXCJjbGVhclJlY3RcIiwgXCJjbGlwXCIsIFwiY2xvc2VQYXRoXCIsIFwiY3JlYXRlTGluZWFyR3JhZGllbnRcIiwgXCJjcmVhdGVSYWRpYWxHcmFkaWVudFwiLCBcImNyZWF0ZVBhdHRlcm5cIiwgXCJkcmF3Rm9jdXNSaW5nXCIsIFwiZHJhd0ltYWdlXCIsIFwiZmlsbFwiLCBcImZpbGxSZWN0XCIsIFwiZmlsbFRleHRcIiwgXCJnZXRJbWFnZURhdGFcIiwgXCJpc1BvaW50SW5QYXRoXCIsIFwibGluZVRvXCIsIFwibWVhc3VyZVRleHRcIiwgXCJtb3ZlVG9cIiwgXCJwdXRJbWFnZURhdGFcIiwgXCJxdWFkcmF0aWNDdXJ2ZVRvXCIsIFwicmVjdFwiLCBcInJlc3RvcmVcIiwgXCJyb3RhdGVcIiwgXCJzYXZlXCIsIFwic2NhbGVcIiwgXCJzZXRUcmFuc2Zvcm1cIiwgXCJzdHJva2VcIiwgXCJzdHJva2VSZWN0XCIsIFwic3Ryb2tlVGV4dFwiLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVwiLCBcInNldExpbmVEYXNoXCJdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuYW1lID0gbWV0aG9kc1tpXTtcblxuICAgIGlmIChjcS5MYXllci5wcm90b3R5cGVbbmFtZV0pIGNvbnRpbnVlO1xuXG4gICAgY3EuTGF5ZXIucHJvdG90eXBlW25hbWVdID0gKGZ1bmN0aW9uKG1ldGhvZCkge1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNxLmZhc3RBcHBseShtZXRob2QsIHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICB9KShDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlW25hbWVdKTtcblxuXG4gICAgY29udGludWU7XG5cblxuICAgIGlmICghdGhpcy5kZWJ1Zykge1xuICAgICAgLy8gaWYgKCFjcS5MYXllci5wcm90b3R5cGVbbmFtZV0pIGNxLkxheWVyLnByb3RvdHlwZVtuYW1lXSA9IEZ1bmN0aW9uKFwidGhpcy5jb250ZXh0LlwiICsgbmFtZSArIFwiLmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTsgcmV0dXJuIHRoaXM7XCIpO1xuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIChmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAgICAgY3EuTGF5ZXIucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gdGhpcy5jb250ZXh0W25hbWVdLmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcblxuICAgICAgICAgIGNxLmZhc3RBcHBseSh0aGlzLmNvbnRleHRbbmFtZV0sIHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgIH0pKG5hbWUpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAoZnVuY3Rpb24obmFtZSkge1xuXG4gICAgICAgIGNxLkxheWVyLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRbbmFtZV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcbiAgICAgICAgICAgIHRocm93IChlICsgZXJyLnN0YWNrKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgbmFtZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSkobmFtZSk7XG5cbiAgICB9XG5cbiAgfTtcblxuICAvKiBjcmVhdGUgc2V0dGVycyBhbmQgZ2V0dGVycyAqL1xuXG4gIHZhciBwcm9wZXJ0aWVzID0gW1wiY2FudmFzXCIsIFwiZmlsbFN0eWxlXCIsIFwiZm9udFwiLCBcImdsb2JhbEFscGhhXCIsIFwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uXCIsIFwibGluZUNhcFwiLCBcImxpbmVKb2luXCIsIFwibGluZVdpZHRoXCIsIFwibWl0ZXJMaW1pdFwiLCBcInNoYWRvd09mZnNldFhcIiwgXCJzaGFkb3dPZmZzZXRZXCIsIFwic2hhZG93Qmx1clwiLCBcInNoYWRvd0NvbG9yXCIsIFwic3Ryb2tlU3R5bGVcIiwgXCJ0ZXh0QWxpZ25cIiwgXCJ0ZXh0QmFzZWxpbmVcIiwgXCJsaW5lRGFzaE9mZnNldFwiXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmFtZSA9IHByb3BlcnRpZXNbaV07XG4gICAgaWYgKCFjcS5MYXllci5wcm90b3R5cGVbbmFtZV0pIGNxLkxheWVyLnByb3RvdHlwZVtuYW1lXSA9IEZ1bmN0aW9uKFwiaWYoYXJndW1lbnRzLmxlbmd0aCkgeyB0aGlzLmNvbnRleHQuXCIgKyBuYW1lICsgXCIgPSBhcmd1bWVudHNbMF07IHJldHVybiB0aGlzOyB9IGVsc2UgeyByZXR1cm4gdGhpcy5jb250ZXh0LlwiICsgbmFtZSArIFwiOyB9XCIpO1xuICB9O1xuXG4gIC8qIGNvbG9yICovXG5cbiAgY3EuQ29sb3IgPSBmdW5jdGlvbihkYXRhLCB0eXBlKSB7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkgdGhpcy5wYXJzZShkYXRhLCB0eXBlKTtcbiAgfVxuXG4gIGNxLkNvbG9yLnByb3RvdHlwZSA9IHtcblxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvUmdiKCk7XG4gICAgfSxcblxuICAgIHBhcnNlOiBmdW5jdGlvbihhcmdzLCB0eXBlKSB7XG4gICAgICBpZiAoYXJnc1swXSBpbnN0YW5jZW9mIGNxLkNvbG9yKSB7XG4gICAgICAgIHRoaXNbMF0gPSBhcmdzWzBdWzBdO1xuICAgICAgICB0aGlzWzFdID0gYXJnc1swXVsxXTtcbiAgICAgICAgdGhpc1syXSA9IGFyZ3NbMF1bMl07XG4gICAgICAgIHRoaXNbM10gPSBhcmdzWzBdWzNdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgbWF0Y2ggPSBudWxsO1xuXG4gICAgICAgIGlmIChhcmdzWzBdID09PSBcIiNcIikge1xuICAgICAgICAgIHZhciByZ2IgPSBjcS5oZXhUb1JnYihhcmdzKTtcbiAgICAgICAgICB0aGlzWzBdID0gcmdiWzBdO1xuICAgICAgICAgIHRoaXNbMV0gPSByZ2JbMV07XG4gICAgICAgICAgdGhpc1syXSA9IHJnYlsyXTtcbiAgICAgICAgICB0aGlzWzNdID0gMS4wO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID0gYXJncy5tYXRjaCgvcmdiXFwoKC4qKSwoLiopLCguKilcXCkvKSkge1xuICAgICAgICAgIHRoaXNbMF0gPSBtYXRjaFsxXSB8IDA7XG4gICAgICAgICAgdGhpc1sxXSA9IG1hdGNoWzJdIHwgMDtcbiAgICAgICAgICB0aGlzWzJdID0gbWF0Y2hbM10gfCAwO1xuICAgICAgICAgIHRoaXNbM10gPSAxLjA7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBhcmdzLm1hdGNoKC9yZ2JhXFwoKC4qKSwoLiopLCguKilcXCkvKSkge1xuICAgICAgICAgIHRoaXNbMF0gPSBtYXRjaFsxXSB8IDA7XG4gICAgICAgICAgdGhpc1sxXSA9IG1hdGNoWzJdIHwgMDtcbiAgICAgICAgICB0aGlzWzJdID0gbWF0Y2hbM10gfCAwO1xuICAgICAgICAgIHRoaXNbM10gPSBtYXRjaFs0XSB8IDA7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBhcmdzLm1hdGNoKC9oc2xcXCgoLiopLCguKiksKC4qKVxcKS8pKSB7XG4gICAgICAgICAgdGhpcy5mcm9tSHNsKG1hdGNoWzFdLCBtYXRjaFsyXSwgbWF0Y2hbM10pO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID0gYXJncy5tYXRjaCgvaHN2XFwoKC4qKSwoLiopLCguKilcXCkvKSkge1xuICAgICAgICAgIHRoaXMuZnJvbUhzdihtYXRjaFsxXSwgbWF0Y2hbMl0sIG1hdGNoWzNdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBcImhzbFwiOlxuICAgICAgICAgIGNhc2UgXCJoc2xhXCI6XG5cbiAgICAgICAgICAgIHRoaXMuZnJvbUhzbChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImhzdlwiOlxuICAgICAgICAgIGNhc2UgXCJoc3ZhXCI6XG5cbiAgICAgICAgICAgIHRoaXMuZnJvbUhzdihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXNbMF0gPSBhcmdzWzBdO1xuICAgICAgICAgICAgdGhpc1sxXSA9IGFyZ3NbMV07XG4gICAgICAgICAgICB0aGlzWzJdID0gYXJnc1syXTtcbiAgICAgICAgICAgIHRoaXNbM10gPSB0eXBlb2YgYXJnc1szXSA9PT0gXCJ1bmRlZmluZWRcIiA/IDEuMCA6IGFyZ3NbM107XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhOiBmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbHBoYShhKTtcbiAgICB9LFxuXG4gICAgYWxwaGE6IGZ1bmN0aW9uKGEpIHtcbiAgICAgIHRoaXNbM10gPSBhO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGZyb21Ic2w6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbXBvbmVudHMgPSBhcmd1bWVudHNbMF0gaW5zdGFuY2VvZiBBcnJheSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cztcblxuICAgICAgdmFyIGNvbG9yID0gY3EuaHNsVG9SZ2IocGFyc2VGbG9hdChjb21wb25lbnRzWzBdKSwgcGFyc2VGbG9hdChjb21wb25lbnRzWzFdKSwgcGFyc2VGbG9hdChjb21wb25lbnRzWzJdKSk7XG5cbiAgICAgIHRoaXNbMF0gPSBjb2xvclswXTtcbiAgICAgIHRoaXNbMV0gPSBjb2xvclsxXTtcbiAgICAgIHRoaXNbMl0gPSBjb2xvclsyXTtcbiAgICAgIHRoaXNbM10gPSB0eXBlb2YgYXJndW1lbnRzWzNdID09PSBcInVuZGVmaW5lZFwiID8gMS4wIDogYXJndW1lbnRzWzNdO1xuICAgIH0sXG5cbiAgICBmcm9tSHN2OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjb21wb25lbnRzID0gYXJndW1lbnRzWzBdIGluc3RhbmNlb2YgQXJyYXkgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHM7XG4gICAgICB2YXIgY29sb3IgPSBjcS5oc3ZUb1JnYihwYXJzZUZsb2F0KGNvbXBvbmVudHNbMF0pLCBwYXJzZUZsb2F0KGNvbXBvbmVudHNbMV0pLCBwYXJzZUZsb2F0KGNvbXBvbmVudHNbMl0pKTtcblxuICAgICAgdGhpc1swXSA9IGNvbG9yWzBdO1xuICAgICAgdGhpc1sxXSA9IGNvbG9yWzFdO1xuICAgICAgdGhpc1syXSA9IGNvbG9yWzJdO1xuICAgICAgdGhpc1szXSA9IHR5cGVvZiBhcmd1bWVudHNbM10gPT09IFwidW5kZWZpbmVkXCIgPyAxLjAgOiBhcmd1bWVudHNbM107XG4gICAgfSxcblxuICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFt0aGlzWzBdLCB0aGlzWzFdLCB0aGlzWzJdLCB0aGlzWzNdXTtcbiAgICB9LFxuXG4gICAgdG9SZ2I6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwicmdiKFwiICsgdGhpc1swXSArIFwiLCBcIiArIHRoaXNbMV0gKyBcIiwgXCIgKyB0aGlzWzJdICsgXCIpXCI7XG4gICAgfSxcblxuICAgIHRvUmdiYTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXCJyZ2JhKFwiICsgdGhpc1swXSArIFwiLCBcIiArIHRoaXNbMV0gKyBcIiwgXCIgKyB0aGlzWzJdICsgXCIsIFwiICsgdGhpc1szXSArIFwiKVwiO1xuICAgIH0sXG5cbiAgICB0b0hleDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY3EucmdiVG9IZXgodGhpc1swXSwgdGhpc1sxXSwgdGhpc1syXSk7XG4gICAgfSxcblxuICAgIHRvSHNsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjID0gY3EucmdiVG9Ic2wodGhpc1swXSwgdGhpc1sxXSwgdGhpc1syXSk7XG4gICAgICBjWzNdID0gdGhpc1szXTtcbiAgICAgIHJldHVybiBjO1xuICAgIH0sXG5cbiAgICB0b0hzdjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYyA9IGNxLnJnYlRvSHN2KHRoaXNbMF0sIHRoaXNbMV0sIHRoaXNbMl0pO1xuICAgICAgY1szXSA9IHRoaXNbM107XG4gICAgICByZXR1cm4gYztcbiAgICB9LFxuXG4gICAgZ3JhZGllbnQ6IGZ1bmN0aW9uKHRhcmdldCwgc3RlcHMpIHtcbiAgICAgIHZhciB0YXJnZXRDb2xvciA9IGNxLmNvbG9yKHRhcmdldCk7XG4gICAgfSxcblxuICAgIHNoaWZ0SHNsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG5cbiAgICAgIGlmICh0aGlzWzBdICE9PSB0aGlzWzFdIHx8IHRoaXNbMV0gIT09IHRoaXNbMl0pIHtcbiAgICAgICAgdmFyIGggPSBhcmd1bWVudHNbMF0gPT09IGZhbHNlID8gaHNsWzBdIDogY3Eud3JhcFZhbHVlKGhzbFswXSArIGFyZ3VtZW50c1swXSwgMCwgMSk7XG4gICAgICAgIHZhciBzID0gYXJndW1lbnRzWzFdID09PSBmYWxzZSA/IGhzbFsxXSA6IGNxLmxpbWl0VmFsdWUoaHNsWzFdICsgYXJndW1lbnRzWzFdLCAwLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBoID0gaHNsWzBdO1xuICAgICAgICB2YXIgcyA9IGhzbFsxXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGwgPSBhcmd1bWVudHNbMl0gPT09IGZhbHNlID8gaHNsWzJdIDogY3EubGltaXRWYWx1ZShoc2xbMl0gKyBhcmd1bWVudHNbMl0sIDAsIDEpO1xuXG4gICAgICB0aGlzLmZyb21Ic2woaCwgcywgbCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzZXRIc2w6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcblxuICAgICAgdmFyIGggPSBhcmd1bWVudHNbMF0gPT09IGZhbHNlID8gaHNsWzBdIDogY3EubGltaXRWYWx1ZShhcmd1bWVudHNbMF0sIDAsIDEpO1xuICAgICAgdmFyIHMgPSBhcmd1bWVudHNbMV0gPT09IGZhbHNlID8gaHNsWzFdIDogY3EubGltaXRWYWx1ZShhcmd1bWVudHNbMV0sIDAsIDEpO1xuICAgICAgdmFyIGwgPSBhcmd1bWVudHNbMl0gPT09IGZhbHNlID8gaHNsWzJdIDogY3EubGltaXRWYWx1ZShhcmd1bWVudHNbMl0sIDAsIDEpO1xuXG4gICAgICB0aGlzLmZyb21Ic2woaCwgcywgbCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBtaXg6IGZ1bmN0aW9uKGNvbG9yLCBhbW91bnQpIHtcbiAgICAgIGNvbG9yID0gY3EuY29sb3IoY29sb3IpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKylcbiAgICAgICAgdGhpc1tpXSA9IGNxLm1peCh0aGlzW2ldLCBjb2xvcltpXSwgYW1vdW50KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gIH07XG5cbiAgd2luZG93W1wiY3FcIl0gPSB3aW5kb3dbXCJDYW52YXNRdWVyeVwiXSA9IGNxO1xuXG5cbiAgcmV0dXJuIGNxO1xuXG59KSgpO1xuXG4vKiBmaWxlOiBzcmMvbGF5ZXIvTGF5ZXIuanMgKi9cblxuUExBWUdST1VORC5SZW5kZXJlciA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIGFwcC5vbihcImNyZWF0ZVwiLCB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpKTtcbiAgYXBwLm9uKFwicmVzaXplXCIsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xuXG59O1xuXG5QTEFZR1JPVU5ELlJlbmRlcmVyLnBsdWdpbiA9IHRydWU7XG5cblBMQVlHUk9VTkQuUmVuZGVyZXIucHJvdG90eXBlID0ge1xuXG4gIGNyZWF0ZTogZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgdGhpcy5hcHAubGF5ZXIgPSBjcSgpLmFwcGVuZFRvKHRoaXMuYXBwLmNvbnRhaW5lcik7XG5cbiAgICBpZiAoIXRoaXMuYXBwLmN1c3RvbUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5hcHAuY29udGFpbmVyLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmFwcC5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIH1cblxuICB9LFxuXG4gIHJlc2l6ZTogZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgdmFyIGFwcCA9IHRoaXMuYXBwO1xuXG4gICAgdmFyIGxheWVyID0gYXBwLmxheWVyO1xuXG4gICAgbGF5ZXIud2lkdGggPSBhcHAud2lkdGg7XG4gICAgbGF5ZXIuaGVpZ2h0ID0gYXBwLmhlaWdodDtcblxuICAgIGxheWVyLmNhbnZhcy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIjAgMFwiO1xuICAgIGxheWVyLmNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIGFwcC5vZmZzZXRYICsgXCJweCxcIiArIGFwcC5vZmZzZXRZICsgXCJweCkgc2NhbGUoXCIgKyBhcHAuc2NhbGUgKyBcIiwgXCIgKyBhcHAuc2NhbGUgKyBcIilcIjtcbiAgICBsYXllci5jYW52YXMuc3R5bGUudHJhbnNmb3JtU3R5bGUgPSBcInByZXNlcnZlLTNkXCI7XG5cbiAgICBsYXllci5jYW52YXMuc3R5bGUud2Via2l0VHJhbnNmb3JtT3JpZ2luID0gXCIwIDBcIjtcbiAgICBsYXllci5jYW52YXMuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyBhcHAub2Zmc2V0WCArIFwicHgsXCIgKyBhcHAub2Zmc2V0WSArIFwicHgpIHNjYWxlKFwiICsgYXBwLnNjYWxlICsgXCIsIFwiICsgYXBwLnNjYWxlICsgXCIpXCI7XG4gICAgbGF5ZXIuY2FudmFzLnN0eWxlLndlYmtpdFRyYW5zZm9ybVN0eWxlID0gXCJwcmVzZXJ2ZS0zZFwiO1xuXG4gICAgbGF5ZXIuc21vb3RoaW5nID0gdGhpcy5hcHAuc21vb3RoaW5nO1xuICAgIGxheWVyLnVwZGF0ZSgpO1xuXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSkge1xuICAgICAgbGF5ZXIuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gdGhpcy5hcHAuc21vb3RoaW5nID8gXCJhdXRvXCIgOiBcIi1tb3otY3Jpc3AtZWRnZXNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5ZXIuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gdGhpcy5hcHAuc21vb3RoaW5nID8gXCJhdXRvXCIgOiBcInBpeGVsYXRlZFwiO1xuICAgIH1cblxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9sYXllci9UcmFuc2l0aW9ucy5qcyAqL1xuXG5QTEFZR1JPVU5ELlRyYW5zaXRpb25zID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgYXBwLm9uKFwiZW50ZXJzdGF0ZVwiLCB0aGlzLmVudGVyc3RhdGUuYmluZCh0aGlzKSk7XG4gIGFwcC5vbihcInBvc3RyZW5kZXJcIiwgdGhpcy5wb3N0cmVuZGVyLmJpbmQodGhpcykpO1xuICBhcHAub24oXCJzdGVwXCIsIHRoaXMuc3RlcC5iaW5kKHRoaXMpKTtcblxuICB0aGlzLnByb2dyZXNzID0gMTtcbiAgdGhpcy5saWZldGltZSA9IDA7XG59O1xuXG5QTEFZR1JPVU5ELlRyYW5zaXRpb25zLnBsdWdpbiA9IHRydWU7XG5cblBMQVlHUk9VTkQuVHJhbnNpdGlvbnMucHJvdG90eXBlID0ge1xuXG4gIGVudGVyc3RhdGU6IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgIHRoaXMuc2NyZWVuc2hvdCA9IHRoaXMuYXBwLmxheWVyLmNhY2hlKCk7XG5cbiAgICBpZiAoZGF0YS5wcmV2KSB7XG4gICAgICB0aGlzLmxpZmV0aW1lID0gMDtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIH1cblxuICB9LFxuXG4gIHBvc3RyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMSkgcmV0dXJuO1xuXG4gICAgUExBWUdST1VORC5UcmFuc2l0aW9ucy5TcGxpdCh0aGlzLCB0aGlzLnByb2dyZXNzKTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxKSByZXR1cm47XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGRlbHRhO1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgubWluKHRoaXMubGlmZXRpbWUgLyAwLjUsIDEpO1xuXG4gIH1cblxufTtcblxuUExBWUdST1VORC5UcmFuc2l0aW9ucy5JbXBsb2RlID0gZnVuY3Rpb24obWFuYWdlciwgcHJvZ3Jlc3MpIHtcblxuICB2YXIgYXBwID0gbWFuYWdlci5hcHA7XG4gIHZhciBsYXllciA9IGFwcC5sYXllcjtcblxuICBwcm9ncmVzcyA9IGFwcC5lYXNlKHByb2dyZXNzLCBcIm91dEN1YmljXCIpO1xuXG4gIHZhciBuZWdhdGl2ZSA9IDEgLSBwcm9ncmVzcztcblxuICBsYXllci5zYXZlKCk7XG4gIGxheWVyLnRhcnMoYXBwLmNlbnRlci54LCBhcHAuY2VudGVyLnksIDAuNSwgMC41LCAwLCAwLjUgKyAwLjUgKiBuZWdhdGl2ZSwgbmVnYXRpdmUpO1xuICBsYXllci5kcmF3SW1hZ2UobWFuYWdlci5zY3JlZW5zaG90LCAwLCAwKTtcblxuICBsYXllci5yZXN0b3JlKCk7XG5cbn07XG5cblBMQVlHUk9VTkQuVHJhbnNpdGlvbnMuU3BsaXQgPSBmdW5jdGlvbihtYW5hZ2VyLCBwcm9ncmVzcykge1xuXG4gIHZhciBhcHAgPSBtYW5hZ2VyLmFwcDtcbiAgdmFyIGxheWVyID0gYXBwLmxheWVyO1xuXG4gIHByb2dyZXNzID0gYXBwLmVhc2UocHJvZ3Jlc3MsIFwiaW5PdXRDdWJpY1wiKTtcblxuICB2YXIgbmVnYXRpdmUgPSAxIC0gcHJvZ3Jlc3M7XG5cbiAgbGF5ZXIuc2F2ZSgpO1xuXG4gIGxheWVyLmEobmVnYXRpdmUpLmNsZWFyKFwiI2ZmZlwiKS5yYSgpO1xuXG4gIGxheWVyLmRyYXdJbWFnZShtYW5hZ2VyLnNjcmVlbnNob3QsIDAsIDAsIGFwcC53aWR0aCwgYXBwLmhlaWdodCAvIDIgfCAwLCAwLCAwLCBhcHAud2lkdGgsIG5lZ2F0aXZlICogYXBwLmhlaWdodCAvIDIgfCAwKTtcbiAgbGF5ZXIuZHJhd0ltYWdlKG1hbmFnZXIuc2NyZWVuc2hvdCwgMCwgYXBwLmhlaWdodCAvIDIgfCAwLCBhcHAud2lkdGgsIGFwcC5oZWlnaHQgLyAyIHwgMCwgMCwgYXBwLmhlaWdodCAvIDIgKyBwcm9ncmVzcyAqIGFwcC5oZWlnaHQgLyAyICsgMSB8IDAsIGFwcC53aWR0aCwgTWF0aC5tYXgoMSwgbmVnYXRpdmUgKiBhcHAuaGVpZ2h0ICogMC41IHwgMCkpO1xuXG4gIGxheWVyLnJlc3RvcmUoKTtcblxufTtcblxuLyogZmlsZTogc3JjL2xheWVyL0xvYWRpbmdTY3JlZW4uanMgKi9cblxuUExBWUdST1VORC5Mb2FkaW5nU2NyZWVuID0ge1xuXG4gIGxvZ29SYXc6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFOb0FBQUFTQkFNQUFBRFBpTjB4QUFBQUdGQk1WRVVBQVFBdExpeEhTVWRuYUdhSmlvaW1xS1hNenN2Ny9mcjVzaGdWQUFBQUFXSkxSMFFBaUFVZFNBQUFBQWx3U0ZsekFBQUxFd0FBQ3hNQkFKcWNHQUFBQUFkMFNVMUZCOThFQXdrZUE0b1FXSjRBQUFBWmRFVllkRU52YlcxbGJuUUFRM0psWVhSbFpDQjNhWFJvSUVkSlRWQlhnUTRYQUFBQjlrbEVRVlE0eTcyVXZXK3JNQkRBeitGcnBWS3JyRm1lc21hcFdOT2xyS2pTZTFrWit1b1ZBdmorL2ZydWpHMVNhSmNxSndVN3ZvT2Y3eE1RelFtc0lEaTVOUFRNc0xSbnRIM1UrRjZTQVpvM05sQ3ZjZ0JGSno4byt2a0RpRTYzbEk5NVkvVW1waW5zWldrZ0pXSmlEYkFWUTE2aHRwdHhTVE5sb0lsdWd3YXcwMDFFeTNBU0Yzc282TDFxTE5YelFTNVMwVUdLTC9DSTV3V05yaUUwVUg5WXR5MzdMcUlWZyt3c3F1N0l4ME13VkJTRi9kVStqdjJTTm5tYTAyMUxFZFBxVm5NZVUzeEF1MGtYY1NHam1xN094NEUyV244OExaMitFRmozYXZqaXh6YWk2VlBWeXVZdmVaTEhGMlhmZERudkFxMjdESUhHdXErMERKRnNFMzBPdEIxS3FPd2Q4RHI3UGNNNGIramZqMmc1bHA0V3ludEJLNjZxdWEzSnpFQSt1WEpwd0gvTmxWdXpSVlBZL2tUTEIybWp1TitLd2RaOEZPeThqMmdEYkVVU3F1bW5TQ1k0bGY0aWJxM0loVk00eWNaUVJudit6RnFWZEpRVm42Qnh2VXFlYkdwdWFObzNzWnh3QnpqYWppTVpPb0Jpd3lWRitrQ3IrblVhSk9hR3BuQWVSUFBKWlRyNEZxbUhSWGNuZUVvNERxUS9mdGZkbkxlRHJVQU1FOHhXS1BlS0N3VzZZa0VwWGZzM3AxRVdKaGRjVUFZUDBUSS91WWFWOGNnandCb3ZhZXlXd2ppMlQ5clRGSWRTL2NQL01ua1RMUlVXeGdOTlpWaW43YlQ1ZnFUOW1pRGNVVkp6UjFnUnBmSU9OTW11bFUrNVFxcjZ6WEFVcUFBQUFBQkpSVTVFcmtKZ2dnPT1cIixcblxuICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5sb2dvID0gbmV3IEltYWdlO1xuXG4gICAgdGhpcy5sb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5yZWFkeSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvZ28uc3JjID0gdGhpcy5sb2dvUmF3O1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gXCIjMjcyODIyXCI7XG4gICAgdGhpcy5hcHAuY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBcIiMyNzI4MjJcIjtcblxuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgLy8gdGhpcy5iYWNrZ3JvdW5kID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuYmFja2dyb3VuZENvbG9yIHx8IFwiIzAwMFwiO1xuICAgIH1cblxuXG4gIH0sXG5cbiAgZW50ZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5jdXJyZW50ID0gMDtcblxuICB9LFxuXG4gIGxlYXZlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMubG9ja2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hcHAudHdlZW4odGhpcylcbiAgICAgIC50byh7XG4gICAgICAgIGN1cnJlbnQ6IDFcbiAgICAgIH0sIDAuNSk7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgaWYgKHRoaXMubG9ja2VkKSB7XG4gICAgICBpZiAodGhpcy5hbmltYXRpb24uZmluaXNoZWQpIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCArIE1hdGguYWJzKHRoaXMuYXBwLmxvYWRlci5wcm9ncmVzcyAtIHRoaXMuY3VycmVudCkgKiBkZWx0YTtcbiAgICB9XG5cbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG5cblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIXRoaXMucmVhZHkpIHJldHVybjtcblxuICAgIHRoaXMuYXBwLmxheWVyLmNsZWFyKHRoaXMuYmFja2dyb3VuZCk7XG5cbiAgICB0aGlzLmFwcC5sYXllci5maWxsU3R5bGUoXCIjZmZmXCIpO1xuXG4gICAgdGhpcy5hcHAubGF5ZXIuc2F2ZSgpO1xuICAgIHRoaXMuYXBwLmxheWVyLmFsaWduKDAuNSwgMC41KTtcbiAgICB0aGlzLmFwcC5sYXllci5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24oXCJsaWdodGVyXCIpO1xuICAgIHRoaXMuYXBwLmxheWVyLmRyYXdJbWFnZSh0aGlzLmxvZ28sIHRoaXMuYXBwLmNlbnRlci54LCB0aGlzLmFwcC5jZW50ZXIueSk7XG5cbiAgICB2YXIgdyA9IHRoaXMuY3VycmVudCAqIHRoaXMubG9nby53aWR0aDtcblxuICAgIHRoaXMuYXBwLmxheWVyLmZpbGxTdHlsZShcIiNmZmZcIik7XG5cbiAgICB0aGlzLmFwcC5sYXllci5maWxsUmVjdCh0aGlzLmFwcC5jZW50ZXIueCwgdGhpcy5hcHAuY2VudGVyLnkgKyAzMiwgdywgMTIpO1xuICAgIHRoaXMuYXBwLmxheWVyLmZpbGxSZWN0KHRoaXMuYXBwLmNlbnRlci54LCB0aGlzLmFwcC5jZW50ZXIueSArIDMyLCB0aGlzLmxvZ28ud2lkdGgsIDQpO1xuXG4gICAgdGhpcy5hcHAubGF5ZXIucmVzdG9yZSgpO1xuXG4gIH1cblxufTsiLCIvKiBzY2FubGluZXMgcGx1Z2luIGZvciBwbGF5Z3JvdW5kJ3MgZGVmYXVsdCByZW5kZXJlciAqL1xuXG5QTEFZR1JPVU5ELlNjYW5saW5lcyA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIGFwcC5vbihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgYXBwLm9uKFwicG9zdHJlbmRlclwiLCB0aGlzLnBvc3RyZW5kZXIuYmluZCh0aGlzKSk7XG5cbn07XG5cblBMQVlHUk9VTkQuU2NhbmxpbmVzLnBsdWdpbiA9IHRydWU7XG5cblBMQVlHUk9VTkQuU2NhbmxpbmVzLnByb3RvdHlwZSA9IHtcblxuICByZXNpemU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5pbWFnZSA9IGNxKHRoaXMuYXBwLndpZHRoLCB0aGlzLmFwcC5oZWlnaHQpO1xuXG4gICAgdGhpcy5pbWFnZS5nbG9iYWxBbHBoYSgwLjEpO1xuICAgIHRoaXMuaW1hZ2UuZmlsbFN0eWxlKFwiIzAwOFwiKTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5pbWFnZS5jYW52YXMuaGVpZ2h0OyBpICs9IDgpe1xuICAgICAgXG4gICAgICB0aGlzLmltYWdlLmZpbGxSZWN0KDAsIGksIHRoaXMuaW1hZ2UuY2FudmFzLndpZHRoLCA0KTtcblxuICAgIH1cblxuICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmltYWdlLmNhY2hlKCk7XG5cbiAgfSxcblxuICBwb3N0cmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmltYWdlKSB7XG5cbiAgICAgIC8vIHRoaXMuYXBwLmxheWVyLmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwKTtcblxuICAgIH1cblxuICB9XG5cbn07IiwiLyogICAgIFxuXG4gIFNvdW5kT25EZW1hbmQgcjFcblxuICAoYykgMjAxMi0yMDE1IGh0dHA6Ly9yZXpvbmVyLm5ldFxuXG4gIFRoaXMgbGlicmFyeSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKi9cblxuLyogb3B0aW9ucyAqL1xuXG4vKiBvdXRwdXQ6IG91dHB1dCBub2RlLCBkZWZhdWx0ICovXG4vKiBhdWRpb0NvbnRleHQ6IGF1ZGlvQ29udGV4dCAqL1xuXG5Tb3VuZE9uRGVtYW5kID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBjYW5QbGF5TXAzID0gKG5ldyBBdWRpbykuY2FuUGxheVR5cGUoXCJhdWRpby9tcDNcIik7XG4gIHZhciBjYW5QbGF5T2dnID0gKG5ldyBBdWRpbykuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKTtcblxuICBpZiAodGhpcy5wcmVmZXJlZEF1ZGlvRm9ybWF0ID09PSBcIm1wM1wiKSB7XG5cbiAgICBpZiAoY2FuUGxheU1wMykgdGhpcy5hdWRpb0Zvcm1hdCA9IFwibXAzXCI7XG4gICAgZWxzZSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJvZ2dcIjtcblxuICB9IGVsc2Uge1xuXG4gICAgaWYgKGNhblBsYXlPZ2cpIHRoaXMuYXVkaW9Gb3JtYXQgPSBcIm9nZ1wiO1xuICAgIGVsc2UgdGhpcy5hdWRpb0Zvcm1hdCA9IFwibXAzXCI7XG5cbiAgfVxuXG4gIHRoaXMuYXVkaW9Db250ZXh0ID0gb3B0aW9ucy5hdWRpb0NvbnRleHQgfHwgbmV3IEF1ZGlvQ29udGV4dDtcblxuICB0aGlzLmNvbXByZXNzb3IgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IoKTtcbiAgdGhpcy5jb21wcmVzc29yLmNvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKClcbiAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuY29tcHJlc3Nvcik7XG5cbiAgdGhpcy5pbnB1dCA9IHRoaXMuZ2Fpbk5vZGU7XG5cbiAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMS4wO1xuXG4gIHRoaXMuYnVmZmVycyA9IHt9O1xuXG4gIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgdGhpcy5hbGlhc2VzID0ge307XG5cbiAgdmFyIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgdmFyIGVuZ2luZSA9IHRoaXM7XG5cbiAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVsdGEgPSAoRGF0ZS5ub3coKSAtIGxhc3RUaWNrKSAvIDEwMDA7XG5cbiAgICBsYXN0VGljayA9IERhdGUubm93KCk7XG5cbiAgICBlbmdpbmUuc3RlcChkZWx0YSk7XG5cbiAgfSwgMTAwMCAvIDYwKTtcblxufTtcblxuU291bmRPbkRlbWFuZC5tb3ZlVG8gPSBmdW5jdGlvbih2YWx1ZSwgdGFyZ2V0LCBzdGVwKSB7XG5cbiAgaWYgKHZhbHVlIDwgdGFyZ2V0KSB7XG4gICAgdmFsdWUgKz0gc3RlcDtcbiAgICBpZiAodmFsdWUgPiB0YXJnZXQpIHZhbHVlID0gdGFyZ2V0O1xuICB9XG5cbiAgaWYgKHZhbHVlID4gdGFyZ2V0KSB7XG4gICAgdmFsdWUgLT0gc3RlcDtcbiAgICBpZiAodmFsdWUgPCB0YXJnZXQpIHZhbHVlID0gdGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xuXG59O1xuXG5Tb3VuZE9uRGVtYW5kLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogU291bmRPbkRlbWFuZCxcblxuICBwYXRoOiBcInNvdW5kcy9cIixcblxuICBjaGFubmVsOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBuZXcgU291bmRPbkRlbWFuZC5DaGFubmVsKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG5cbiAgfSxcblxuICBnZXRBc3NldEVudHJ5OiBmdW5jdGlvbihwYXRoLCBkZWZhdWx0RXh0ZW5zaW9uKSB7XG5cbiAgICAvKiB0cmFuc2xhdGUgZm9sZGVyIGFjY29yZGluZyB0byB1c2VyIHByb3ZpZGVkIHBhdGhzIFxuICAgICAgIG9yIGxlYXZlIGFzIGlzICovXG5cbiAgICB2YXIgZmlsZWluZm8gPSBwYXRoLm1hdGNoKC8oLiopXFwuLiovKTtcbiAgICB2YXIga2V5ID0gZmlsZWluZm8gPyBmaWxlaW5mb1sxXSA6IHBhdGg7XG5cbiAgICB2YXIgdGVtcCA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICAgIHZhciBiYXNlbmFtZSA9IHBhdGg7XG5cbiAgICBpZiAodGVtcC5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgZXh0ID0gdGVtcC5wb3AoKTtcbiAgICAgIHBhdGggPSB0ZW1wLmpvaW4oXCIuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXh0ID0gZGVmYXVsdEV4dGVuc2lvbjtcbiAgICAgIGJhc2VuYW1lICs9IFwiLlwiICsgZGVmYXVsdEV4dGVuc2lvbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBrZXksXG4gICAgICB1cmw6IHRoaXMucGF0aCArIGJhc2VuYW1lLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgcGF0aCxcbiAgICAgIGV4dDogZXh0XG4gICAgfTtcblxuICB9LFxuXG4gIGxvYWRlcnM6IHt9LFxuXG4gIGxvYWQ6IGZ1bmN0aW9uKGtleSkge1xuXG4gICAgdmFyIGVuZ2luZSA9IHRoaXM7XG4gICAgdmFyIGVudHJ5ID0gZW5naW5lLmdldEFzc2V0RW50cnkoa2V5LCBlbmdpbmUuYXVkaW9Gb3JtYXQpO1xuXG4gICAgaWYgKCF0aGlzLmxvYWRlcnNba2V5XSkge1xuXG4gICAgICB0aGlzLmxvYWRlcnNba2V5XSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICAgIGlmIChlbmdpbmUuYnVmZmVyc1tlbnRyeS5rZXldKSByZXR1cm4gcmVzb2x2ZShlbmdpbmUuYnVmZmVyc1tlbnRyeS5rZXldKTtcblxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBlbnRyeS51cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcblxuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgZW5naW5lLmF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEodGhpcy5yZXNwb25zZSwgZnVuY3Rpb24oZGVjb2RlZEJ1ZmZlcikge1xuXG4gICAgICAgICAgICBlbmdpbmUuYnVmZmVyc1tlbnRyeS5rZXldID0gZGVjb2RlZEJ1ZmZlcjtcbiAgICAgICAgICAgIHJlc29sdmUoZGVjb2RlZEJ1ZmZlcik7XG5cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG5cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9hZGVyc1trZXldO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNoYW5uZWxzKSB7XG5cbiAgICAgIHRoaXMuY2hhbm5lbHNba2V5XS5zdGVwKGRlbHRhKTtcblxuICAgIH1cblxuICB9LFxuXG4gIGR1cGxpY2F0ZTogZnVuY3Rpb24oc291cmNlLCBhcywgdm9sdW1lLCByYXRlKSB7XG5cbiAgICB2YXIgZW5naW5lID0gdGhpcztcblxuICAgIHRoaXMubG9hZChzb3VyY2UpLnRoZW4oZnVuY3Rpb24oKSB7XG5cbiAgICAgIGVuZ2luZS5idWZmZXJzW3NvdXJjZV07XG5cbiAgICAgIGVuZ2luZS5idWZmZXJzW2FzXSA9IGVuZ2luZS5idWZmZXJzW3NvdXJjZV07XG5cbiAgICB9KTtcblxuICB9LFxuXG4gIGFsaWFzOiBmdW5jdGlvbihuYW1lLCBzb3VyY2UsIHJhdGUsIHZvbHVtZSkge1xuXG4gICAgdGhpcy5hbGlhc2VzW25hbWVdID0ge1xuICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICByYXRlOiByYXRlLFxuICAgICAgdm9sdW1lOiB2b2x1bWVcbiAgICB9O1xuXG4gIH1cblxufTtcblNvdW5kT25EZW1hbmQuRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcblxufTtcblxuU291bmRPbkRlbWFuZC5FdmVudHMucHJvdG90eXBlID0ge1xuXG4gIG9uOiBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spIHtcblxuICAgIGlmICh0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBldmVudCkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRoaXMub24oa2V5LCBldmVudFtrZXldKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50XSkgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gW107XG5cbiAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XG5cbiAgICBjYWxsYmFjay5vbmNlID0gdHJ1ZTtcblxuICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBbXTtcblxuICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBjYWxsYmFjaztcblxuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdW2ldLl9yZW1vdmUpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpLS0sIDEpO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSxcblxuICB0cmlnZ2VyOiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuXG4gICAgLyogaWYgeW91IHByZWZlciBldmVudHMgcGlwZSAqL1xuXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzW1wiZXZlbnRcIl0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVyc1tcImV2ZW50XCJdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW1wiZXZlbnRcIl1baV0oZXZlbnQsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIG9yIHN1YnNjcmliZWQgdG8gc2luZ2xlIGV2ZW50ICovXG5cbiAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XVtpXTtcbiAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgICAgICBpZiAobGlzdGVuZXIub25jZSkge1xuICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICBsZW4tLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn07XG5Tb3VuZE9uRGVtYW5kLkNoYW5uZWwgPSBmdW5jdGlvbihlbmdpbmUpIHtcblxuICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgdGhpcy5hdWRpb0NvbnRleHQgPSBlbmdpbmUuYXVkaW9Db250ZXh0O1xuXG4gIC8qIGNvbm5lY3Rpb24gb3JkZXIgZ29lcyBmcm9tIGJvdHRvbSB0byB0b3AgKi9cblxuICAvKiBnYWluIG5vZGUgKi9cblxuICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuXG4gIC8qIGNvbnZvbHZlciAqL1xuXG4gIHRoaXMuY29udm9sdmVyV2V0Tm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgdGhpcy5jb252b2x2ZXJEcnlOb2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICB0aGlzLmNvbnZvbHZlck5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVDb252b2x2ZXIoKTtcbiAgdGhpcy5jb252b2x2ZXJFbmFibGVkID0gZmFsc2U7XG5cbiAgdGhpcy5yb3V0ZSgpO1xuXG4gIHRoaXMucXVldWUgPSBbXTtcbiAgdGhpcy5sb29wcyA9IFtdO1xuXG59O1xuXG5Tb3VuZE9uRGVtYW5kLkNoYW5uZWwucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBTb3VuZE9uRGVtYW5kLkNoYW5uZWwsXG5cbiAgLyogZ2V0IGEgc291bmQgZm9yIGZ1cnRoZXIgdXNhZ2UgKi9cblxuICB4cm91dGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFJvdXRlKSB7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50Um91dGUubGVuZ3RoIC0gMTsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGVbaV0uZGlzY29ubmVjdCgpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRSb3V0ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgaWYgKGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMSkge1xuXG4gICAgICAgIHZhciBub2RlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIG5vZGUuY29ubmVjdChhcmd1bWVudHNbaSArIDFdKTtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZS5wdXNoKG5vZGUpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dCA9IGFyZ3VtZW50c1swXTtcblxuICB9LFxuXG4gIGdldDogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICByZXR1cm4gbmV3IFNvdW5kT25EZW1hbmQuU291bmQoa2V5LCB0aGlzKTtcblxuICB9LFxuXG4gIHBsYXk6IGZ1bmN0aW9uKGtleSkge1xuXG4gICAgdmFyIHNvdW5kID0gdGhpcy5nZXQoa2V5KTtcblxuICAgIHRoaXMuYWRkKHNvdW5kKTtcblxuICAgIHJldHVybiBzb3VuZDtcblxuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24oc291bmQpIHtcblxuICAgIHNvdW5kLl9yZW1vdmUgPSB0cnVlO1xuXG4gIH0sXG5cbiAgYWRkOiBmdW5jdGlvbihzb3VuZCkge1xuXG4gICAgc291bmQuX3JlbW92ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5xdWV1ZS5wdXNoKHNvdW5kKTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICAvKiBwcm9jZXNzIHF1ZXVlICovXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVldWUubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIHNvdW5kID0gdGhpcy5xdWV1ZVtpXTtcblxuICAgICAgc291bmQuc3RlcChkZWx0YSk7XG5cbiAgICAgIGlmIChzb3VuZC5fcmVtb3ZlKSB0aGlzLnF1ZXVlLnNwbGljZShpLS0sIDEpO1xuXG4gICAgfVxuXG4gICAgLyogcHJvY2VzcyBzb3VuZHMgYmVpbmcgcGxheWVkICovXG5cbiAgfSxcblxuICB2b2x1bWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXG4gICAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSB2YWx1ZTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgXG4gICAgICByZXR1cm4gdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgc3dhcENvbnZvbHZlcjogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICB2YXIgZW5naW5lID0gdGhpcy5lbmdpbmU7XG4gICAgdmFyIGNoYW5uZWwgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIGZhaWwpIHtcblxuICAgICAgaWYgKGNoYW5uZWwuY3VycmVudENvbnZvbHZlckltcHVsc2UgPT09IGtleSkge1xuXG4gICAgICAgIHJlc29sdmUoKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBlbmdpbmUubG9hZChrZXkpLnRoZW4oZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgICAgY2hhbm5lbC5jdXJyZW50Q29udm9sdmVySW1wdWxzZSA9IGtleTtcbiAgICAgICAgICBjaGFubmVsLmNvbnZvbHZlck5vZGUuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gIH0sXG5cbiAgdXBkYXRlQ29udm92bGVyU3RhdGU6IGZ1bmN0aW9uKGVuYWJsZWQpIHtcblxuICAgIHRoaXMuY29udm9sdmVyRW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgdGhpcy5yb3V0ZSgpO1xuXG4gIH0sXG5cbiAgc3Vicm91dGU6IGZ1bmN0aW9uKG5vZGVzKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGlmIChpIDwgbm9kZXMubGVuZ3RoIC0gMSkge1xuXG4gICAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIG5vZGUuZGlzY29ubmVjdCgpO1xuICAgICAgICBub2RlLmNvbm5lY3Qobm9kZXNbaSArIDFdKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dCA9IG5vZGVzWzBdO1xuXG4gIH0sXG5cbiAgcm91dGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5nYWluTm9kZS5kaXNjb25uZWN0KCk7XG5cbiAgICBpZiAodGhpcy5jb252b2x2ZXJFbmFibGVkKSB7XG5cbiAgICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnZvbHZlckRyeU5vZGUpO1xuXG4gICAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb252b2x2ZXJOb2RlKTtcbiAgICAgIHRoaXMuY29udm9sdmVyTm9kZS5jb25uZWN0KHRoaXMuY29udm9sdmVyV2V0Tm9kZSk7XG5cbiAgICAgIHRoaXMuY29udm9sdmVyV2V0Tm9kZS5jb25uZWN0KHRoaXMuZW5naW5lLmlucHV0KTtcbiAgICAgIHRoaXMuY29udm9sdmVyRHJ5Tm9kZS5jb25uZWN0KHRoaXMuZW5naW5lLmlucHV0KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmVuZ2luZS5pbnB1dCk7XG5cbiAgICB9XG5cbiAgICB0aGlzLmlucHV0ID0gdGhpcy5nYWluTm9kZTtcblxuICB9LFxuXG4gIGNvbnZvbHZlcjogZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXG4gICAgdmFyIGVuYWJsZWQgPSB2YWx1ZSA+IDA7XG4gICAgdmFyIGNoYW5uZWwgPSB0aGlzO1xuXG4gICAgdGhpcy5zd2FwQ29udm9sdmVyKGtleSkudGhlbihmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKGVuYWJsZWQgIT09IGNoYW5uZWwuY29udm9sdmVyRW5hYmxlZCkgY2hhbm5lbC51cGRhdGVDb252b3ZsZXJTdGF0ZShlbmFibGVkKTtcblxuICAgIH0pO1xuXG4gICAgdGhpcy5jb252b2x2ZXJXZXROb2RlLmdhaW4udmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnZvbHZlckRyeU5vZGUuZ2Fpbi52YWx1ZSA9IDEgLSB2YWx1ZTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxufTtcblNvdW5kT25EZW1hbmQuU291bmQgPSBmdW5jdGlvbihrZXksIGNoYW5uZWwpIHtcblxuICB0aGlzLmtleSA9IGtleTtcbiAgdGhpcy5idWZmZXJLZXkgPSBrZXk7XG5cbiAgaWYgKGNoYW5uZWwuZW5naW5lLmFsaWFzZXNba2V5XSkge1xuXG4gICAgdGhpcy5hbGlhcyA9IGNoYW5uZWwuZW5naW5lLmFsaWFzZXNba2V5XTtcblxuICAgIHRoaXMuYnVmZmVyS2V5ID0gdGhpcy5hbGlhcy5zb3VyY2U7XG5cbiAgfVxuXG4gIGlmICghY2hhbm5lbC5lbmdpbmUuYnVmZmVyc1t0aGlzLmJ1ZmZlcktleV0pIGNoYW5uZWwuZW5naW5lLmxvYWQodGhpcy5idWZmZXJLZXkpO1xuXG4gIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIHRoaXMuYXVkaW9Db250ZXh0ID0gdGhpcy5jaGFubmVsLmVuZ2luZS5hdWRpb0NvbnRleHQ7XG5cbiAgdGhpcy5jdXJyZW50ID0ge1xuICAgIHZvbHVtZTogMS4wLFxuICAgIHJhdGU6IDEuMFxuICB9O1xuXG4gIHRoaXMuZmFkZU1vZCA9IDEuMDtcblxuICB0aGlzLmNyZWF0ZU5vZGVzKCk7XG5cbn07XG5cblNvdW5kT25EZW1hbmQuU291bmQucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBTb3VuZE9uRGVtYW5kLlNvdW5kLFxuXG4gIGFsaWFzOiB7XG4gICAgdm9sdW1lOiAxLjAsXG4gICAgcmF0ZTogMS4wXG4gIH0sXG5cbiAgY3JlYXRlTm9kZXM6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGJ1ZmZlclNvdXJjZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgIHZhciBnYWluTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB2YXIgcGFuTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZVN0ZXJlb1Bhbm5lcigpO1xuXG4gICAgYnVmZmVyU291cmNlLmNvbm5lY3QocGFuTm9kZSk7XG4gICAgcGFuTm9kZS5jb25uZWN0KGdhaW5Ob2RlKTtcbiAgICBnYWluTm9kZS5jb25uZWN0KHRoaXMuY2hhbm5lbC5pbnB1dCk7XG5cbiAgICB0aGlzLmJ1ZmZlclNvdXJjZSA9IGJ1ZmZlclNvdXJjZTtcbiAgICB0aGlzLmdhaW5Ob2RlID0gZ2Fpbk5vZGU7XG4gICAgdGhpcy5wYW5Ob2RlID0gcGFuTm9kZTtcblxuICB9LFxuXG4gIHZvbHVtZTogZnVuY3Rpb24odm9sdW1lKSB7XG5cbiAgICB2b2x1bWUgKj0gdGhpcy5hbGlhcy52b2x1bWU7XG5cbiAgICB0aGlzLmN1cnJlbnQudm9sdW1lID0gdm9sdW1lO1xuXG4gICAgdGhpcy51cGRhdGVWb2x1bWUoKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgdXBkYXRlVm9sdW1lOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuY3VycmVudC52b2x1bWUgKiB0aGlzLmZhZGVNb2Q7XG5cbiAgfSxcblxuICBwYW46IGZ1bmN0aW9uKHBhbikge1xuXG4gICAgdGhpcy5jdXJyZW50LnBhbiA9IHBhbjtcblxuICAgIHRoaXMudXBkYXRlUGFubmluZygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuICB1cGRhdGVQYW5uaW5nOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMucGFuTm9kZS5wYW4udmFsdWUgPSB0aGlzLmN1cnJlbnQucGFuO1xuXG4gIH0sXG5cbiAgbG9vcDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmJ1ZmZlclNvdXJjZS5sb29wID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnQubG9vcCA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIHJyYXRlOiBmdW5jdGlvbihyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmF0ZSh0aGlzLmN1cnJlbnQucmF0ZSArICgtMSArIE1hdGgucmFuZG9tKCkgKiAyKSAqIHJhbmdlKTtcblxuICB9LFxuXG4gIHJhdGU6IGZ1bmN0aW9uKHJhdGUpIHtcblxuICAgIHJhdGUgKj0gdGhpcy5hbGlhcy5yYXRlO1xuXG4gICAgdGhpcy5idWZmZXJTb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlID0gcmF0ZTtcblxuICAgIHRoaXMuY3VycmVudC5yYXRlID0gcmF0ZTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgb25lbmRlZDogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIXRoaXMuY3VycmVudC5sb29wKSB0aGlzLnN0b3AoKTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAoIXRoaXMucmVhZHkpIHtcblxuICAgICAgaWYgKCF0aGlzLmNoYW5uZWwuZW5naW5lLmJ1ZmZlcnNbdGhpcy5idWZmZXJLZXldKSByZXR1cm47XG5cbiAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcblxuICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmNoYW5uZWwuZW5naW5lLmJ1ZmZlcnNbdGhpcy5idWZmZXJLZXldO1xuXG4gICAgICB0aGlzLmJ1ZmZlclNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcblxuICAgICAgdGhpcy5idWZmZXJTb3VyY2Uuc3RhcnQoMCk7XG4gICAgICB0aGlzLmJ1ZmZlclNvdXJjZS5vbmVuZGVkID0gdGhpcy5vbmVuZGVkLmJpbmQodGhpcyk7XG5cbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuXG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50VGltZSArPSB0aGlzLmJ1ZmZlclNvdXJjZS5wbGF5YmFja1JhdGUudmFsdWUgKiBkZWx0YTtcblxuICAgIGlmICh0aGlzLmZhZGVUYXJnZXQgIT09IHRoaXMuZmFkZU1vZCkge1xuXG4gICAgICB0aGlzLmZhZGVNb2QgPSBTb3VuZE9uRGVtYW5kLm1vdmVUbyh0aGlzLmZhZGVNb2QsIHRoaXMuZmFkZVRhcmdldCwgZGVsdGEgKiB0aGlzLmZhZGVTcGVlZCk7XG5cbiAgICAgIHRoaXMudXBkYXRlVm9sdW1lKCk7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuZmFkZVRhcmdldCA9PT0gMCkge1xuXG4gICAgICB0aGlzLnBhdXNlKCk7XG5cbiAgICB9XG5cblxuICB9LFxuXG4gIHBhdXNlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuY2hhbm5lbC5yZW1vdmUodGhpcyk7XG5cbiAgICB0aGlzLmJ1ZmZlclNvdXJjZS5zdG9wKDApO1xuXG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG5cbiAgfSxcblxuICBzdG9wOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuY2hhbm5lbC5yZW1vdmUodGhpcyk7XG5cbiAgICB0aGlzLmJ1ZmZlclNvdXJjZS5zdG9wKDApO1xuXG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG5cbiAgfSxcblxuICByZXN1bWU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5jcmVhdGVOb2RlcygpO1xuXG4gICAgdGhpcy5idWZmZXJTb3VyY2UuYnVmZmVyID0gdGhpcy5idWZmZXI7XG5cbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZSAlIHRoaXMuYnVmZmVyLmR1cmF0aW9uO1xuICAgIHRoaXMuYnVmZmVyU291cmNlLnN0YXJ0KDAsIHRoaXMuY3VycmVudFRpbWUpO1xuXG4gICAgdGhpcy5yYXRlKHRoaXMuY3VycmVudC5yYXRlKTtcbiAgICB0aGlzLnZvbHVtZSh0aGlzLmN1cnJlbnQudm9sdW1lKTtcbiAgICB0aGlzLmxvb3AodGhpcy5jdXJyZW50Lmxvb3ApO1xuXG4gICAgdGhpcy5jaGFubmVsLmFkZCh0aGlzKTtcblxuICAgIHRoaXMucGxheWluZyA9IHRydWU7XG5cbiAgfSxcblxuICBmYWRlVG86IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24pIHtcblxuICAgIGlmICghdGhpcy5wbGF5aW5nKSB0aGlzLnJlc3VtZSgpO1xuXG4gICAgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAxLjA7XG5cbiAgICB0aGlzLmZhZGVUaW1lID0gMDtcbiAgICB0aGlzLmZhZGVUYXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5mYWRlRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB0aGlzLmZhZGVTcGVlZCA9IE1hdGguYWJzKHRhcmdldCAtIHRoaXMuZmFkZU1vZCkgLyBkdXJhdGlvbjtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgZmFkZUluOiBmdW5jdGlvbihkdXJhdGlvbikge1xuXG4gICAgaWYgKCF0aGlzLnBsYXlpbmcpIHRoaXMucmVzdW1lKCk7XG5cbiAgICB0aGlzLmZhZGVUbygxLjAsIGR1cmF0aW9uKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgZmFkZU91dDogZnVuY3Rpb24oZHVyYXRpb24pIHtcblxuICAgIHRoaXMuZmFkZVRvKDAsIGR1cmF0aW9uKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cblxuXG59O1xuXG5QTEFZR1JPVU5ELlNvdW5kT25EZW1hbmQgPSBmdW5jdGlvbihhcHApIHtcblxuICBhcHAuYXVkaW8gPSBuZXcgU291bmRPbkRlbWFuZCgpO1xuXG4gIGFwcC5hdWRpby5wYXRoID0gYXBwLmdldFBhdGgoXCJzb3VuZHNcIik7XG5cbiAgYXBwLmxvYWRTb3VuZHMgPSBmdW5jdGlvbigpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBrZXkgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIHRoaXMubG9hZGVyLmFkZCgpO1xuXG4gICAgICB0aGlzLmF1ZGlvLmxvYWQoa2V5KS50aGVuKFxuICAgICAgICB0aGlzLmxvYWRlci5zdWNjZXNzLmJpbmQodGhpcy5sb2FkZXIpLFxuICAgICAgICB0aGlzLmxvYWRlci5lcnJvci5iaW5kKHRoaXMubG9hZGVyKVxuICAgICAgKTtcblxuICAgIH1cblxuICB9O1xuXG59O1xuXG5QTEFZR1JPVU5ELlNvdW5kT25EZW1hbmQucGx1Z2luID0gdHJ1ZTsiLCJFTkdJTkUgPSB7IH07IiwiZ2EgPSBmdW5jdGlvbigpIHt9XG5cbkVOR0lORS5CZW5jaG1hcmsgPSB7XG5cbiAgY3JlYXRlOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIHRoaXMuZ3JhZGllbnQgPSBhcHAubGF5ZXIuY3JlYXRlUmFkaWFsR3JhZGllbnQoYXBwLmNlbnRlci54LCBhcHAuY2VudGVyLnksIDAsIGFwcC5jZW50ZXIueCwgYXBwLmNlbnRlci55LCBhcHAuY2VudGVyLngpO1xuICAgIC8vIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuMCwgXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAvLyB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgxLjAsIFwiIzAwMFwiKTtcblxuICAgIC8vIEpJVCB3YXJtdXBcbiAgICB0aGlzLmRpZFdhcm11cCA9IGZhbHNlO1xuICAgIHRoaXMuc3RlcHMgPSAwO1xuICAgIHRoaXMuaW90YUxpc3QgPSBbXTtcbiAgICB0aGlzLmZyYW1lVGltZXMgPSBbXTtcbiAgICB0aGlzLnNjb3JlcyA9IFtdO1xuICAgIHRoaXMucnVuQ291bnQgPSAwO1xuICAgIHRoaXMuc2tpcENvdW50ID0gMDtcbiAgICB0aGlzLnNraXBSZXNldENvdW50ID0gMDtcbiAgICB0aGlzLnJlc2V0Q291bnQgPSAwO1xuICAgIHRoaXMuc2NvcmVTdGFjayA9IFtdO1xuICB9LFxuXG4gIGVudGVyOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlvdGFDb3VudCA9IHRoaXMuYXBwLmJhc2VsaW5lID8gTWF0aC5mbG9vcih0aGlzLmFwcC5iYXNlbGluZSAqIDAuNykgOiAxO1xuICAgIHRoaXMuYXBwLmJhc2VsaW5lID0gMDtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH0sXG5cbiAgLy8gQ2FsbGVkIGJldHdlZW4gYmVuY2htYXJrIGxvb3BzXG4gIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0ZXBzID0gMDtcbiAgICB0aGlzLmZyYW1lVGltZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnNraXBDb3VudCA9IDA7XG4gICAgLy8gSklUIHdhcm11cCBzZXR0aW5ncyAocnVuIHVuYm91bmQgbG9vcHMpXG4gICAgaWYgKCF0aGlzLmRpZFdhcm11cCkge1xuICAgICAgY29uc29sZS50aW1lKCdXYXJtdXAnKTtcbiAgICAgIHRoaXMuYXBwLnVuYm91bmQgPSB0cnVlO1xuICAgICAgdGhpcy5hcHAuaW1taWRpYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXBwLnVuYm91bmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYXBwLmltbWlkaWF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmlvdGFMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmFkZElvdGFzKHRoaXMuZGlkV2FybXVwID8gdGhpcy5pb3RhQ291bnQgOiAxKTtcbiAgICB9XG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICAgIHZhciBiZWZvcmUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIHZhciBvYmplY3QgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDA7IGkrKykgb2JqZWN0W2ldID0gaTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDAwOyBpKyspIG9iamVjdFtpXTtcblxuICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwMDsgaSsrKSBhcnJheS5wdXNoKGkpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDA7IGkrKykgYXJyYXlbaV07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSBNYXRoLmF0YW4yKE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCkpXG5cbiAgICB0aGlzLmlvdGFMaXN0LmZvckVhY2goZnVuY3Rpb24oaW90YSkge1xuICAgICAgaW90YS5zdGVwKGR0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZnJhbWVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBiZWZvcmU7XG5cbiAgICBpZiAoIXRoaXMuZGlkV2FybXVwKSB7XG4gICAgICAvLyBTdGF0ZTogSklUIFdhcm11cFxuICAgICAgdGhpcy5zdGVwV2FybVVwKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZyYW1lVGltZSkge1xuICAgICAgLy8gU3RyZXNzdGVzdGluZ1xuICAgICAgdGhpcy5zdGVwU3RyZXNzVGVzdCgpXG4gICAgfVxuXG4gIH0sXG5cbiAgc3RlcFdhcm1VcDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnN0ZXBzKys7XG5cbiAgICBpZiAodGhpcy5zdGVwcyA+IDExMDApIHtcbiAgICAgIHRoaXMuZGlkV2FybXVwID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUudGltZUVuZCgnV2FybXVwJyk7XG4gICAgICBjb25zb2xlLmxvZygnV2FybXVwIHdpdGggJWQgaW90YXMnLCB0aGlzLmlvdGFMaXN0Lmxlbmd0aCk7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9LFxuXG4gIHN0ZXBTdHJlc3NUZXN0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYWRkID0gMTtcbiAgICB2YXIgZnJhbWVUaW1lcyA9IHRoaXMuZnJhbWVUaW1lcztcbiAgICB2YXIgTUFYX0ZSQU1FUyA9IDQ1O1xuICAgIHZhciBNSU5fRlJBTUVTID0gMTU7XG4gICAgdmFyIENPU1QgPSA4O1xuICAgIHZhciBFUlJPUiA9IDAuMjU7XG4gICAgdmFyIGZyYW1lVGltZSA9IHRoaXMuZnJhbWVUaW1lO1xuICAgIGlmIChmcmFtZVRpbWVzLnVuc2hpZnQoZnJhbWVUaW1lKSA+IE1BWF9GUkFNRVMpIHtcbiAgICAgIGZyYW1lVGltZXMubGVuZ3RoID0gTUFYX0ZSQU1FUztcbiAgICB9XG4gICAgaWYgKGZyYW1lVGltZXMubGVuZ3RoID49IE1JTl9GUkFNRVMpIHtcbiAgICAgIHZhciBzYW1wbGUgPSB0aGlzLmFuYWx5emUoZnJhbWVUaW1lcyk7XG4gICAgICB2YXIgc2NvcmUgPSB0aGlzLmlvdGFMaXN0Lmxlbmd0aDtcbiAgICAgIGlmIChzYW1wbGUucnNlIDw9IEVSUk9SICYmIHNhbXBsZS5tZWFuID4gQ09TVCkge1xuICAgICAgICB0aGlzLnB1c2hTY29yZShzY29yZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzYW1wbGUucnNlID4gRVJST1IgfHwgc2FtcGxlLm1lYW4gPiBDT1NUKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTa2lwICMnICsgdGhpcy5za2lwQ291bnQpO1xuICAgICAgICB0aGlzLnNraXBDb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5za2lwQ291bnQgPiA2MCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgJ1tSRVNFVCBTVEVQXSBIaWdoIHNhbXBsaW5nIGVycm9yICVmJSUgb3IgbWVhbiAlZm1zIGZvciAlZCBlbnRpdGllcy4nLFxuICAgICAgICAgICAgc2FtcGxlLnJzZSAqIDEwMCwgc2FtcGxlLm1lYW4sIHNjb3JlXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmlvdGFDb3VudCA9IE1hdGguZmxvb3IodGhpcy5sYXN0U2NvcmUgKiAwLjcpO1xuICAgICAgICAgIHRoaXMuc2tpcFJlc2V0Q291bnQrKztcbiAgICAgICAgICBpZiAodGhpcy5za2lwUmVzZXRDb3VudCA+IDEwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmFsaXplKGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNraXBDb3VudCA9IDA7XG4gICAgICBhZGQgPSBNYXRoLnJvdW5kKENPU1QgLyBzYW1wbGUubWVhbik7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRJb3RhcyhhZGQpO1xuICB9LFxuXG4gIHB1c2hTY29yZTogZnVuY3Rpb24oc2NvcmUpIHtcbiAgICB2YXIgU0FWRV9TQ09SRVMgPSAzO1xuICAgIHZhciBNSU5fU0NPUkVTID0gNTtcbiAgICB2YXIgTUFYX1NDT1JFUyA9IDEwO1xuICAgIHZhciBFUlJPUiA9IDAuMTU7XG5cbiAgICB0aGlzLnNraXBSZXNldENvdW50ID0gMDtcbiAgICB2YXIgc2NvcmVzID0gdGhpcy5zY29yZXM7XG4gICAgdGhpcy5ydW5Db3VudCsrO1xuICAgIGlmIChzY29yZXMudW5zaGlmdChzY29yZSkgPiBNQVhfU0NPUkVTKSB7XG4gICAgICBzY29yZXMubGVuZ3RoID0gTUFYX1NDT1JFUztcbiAgICB9XG4gICAgdGhpcy5pb3RhQ291bnQgPSBNYXRoLmNlaWwoc2NvcmUgKiAwLjcpO1xuICAgIHZhciBsID0gc2NvcmVzLmxlbmd0aDtcbiAgICBpZiAobCA+PSBNSU5fU0NPUkVTKSB7XG4gICAgICB2YXIgc2FtcGxlID0gdGhpcy5hbmFseXplKHNjb3Jlcyk7XG4gICAgICBpZiAoc2FtcGxlLnJzZSA8IEVSUk9SKSB7XG4gICAgICAgIHRoaXMucmVzZXRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuYXBwLmJhc2VsaW5lID0gTWF0aC5yb3VuZChzYW1wbGUubWVhbik7XG4gICAgICAgIHRoaXMuYXBwLmJhc2VsaW5lRXJyID0gc2FtcGxlLnJzZTtcbiAgICAgICAgdGhpcy5zY29yZXMuc3BsaWNlKFNBVkVfU0NPUkVTKTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZShmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICdbU0NPUkUgUkVTRVRdIFN0YW5kYXJkIGVycm9yICVmJSUgdG9vIGhpZ2ggaW4gc2NvcmUgc2FtcGxlcy4nLFxuICAgICAgICAgIHNhbXBsZS5yc2UgKiAxMDBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZXNldENvdW50Kys7XG4gICAgICAgIGlmICh0aGlzLnJlc2V0Q291bnQgPiAxMCkge1xuICAgICAgICAgIHRoaXMuc2NvcmVzLnNwbGljZSgwKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW0JBSUxdIFRvbyBtYW55IFtSRVNFVCBTQ09SRV0uJyk7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZShmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmluYWxpemUodHJ1ZSk7XG4gIH0sXG5cbiAgZmluYWxpemU6IGZ1bmN0aW9uKHJlc3RhcnQpIHtcbiAgICBpZiAoIXJlc3RhcnQpIHtcbiAgICAgIC8vIFJlbW92ZSBpb3Rhc1xuICAgICAgdGhpcy5pb3RhQ291bnQgPSAwO1xuICAgICAgdGhpcy5ydW5Db3VudCA9IDA7XG4gICAgICAvLyBSZXNldCBiZW5jaG1hcmsgZW5naW5lIHNldHRpbmdzXG4gICAgICB0aGlzLmFwcC51bmJvdW5kID0gZmFsc2U7XG4gICAgICB0aGlzLmFwcC5pbW1pZGlhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gUmVkdWNlIGlvdGFMaXN0IHRvIGlvdGFDb3VudFxuICAgIHRoaXMuaW90YUxpc3Quc3BsaWNlKHRoaXMuaW90YUNvdW50KS5mb3JFYWNoKGZ1bmN0aW9uKGlvdGEpIHtcbiAgICAgIGlvdGEuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGlmIChyZXN0YXJ0KSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXBwLnNldFN0YXRlKEVOR0lORS5HYW1lKTtcbiAgICB9XG4gIH0sXG5cbiAgYWRkSW90YXM6IGZ1bmN0aW9uKGNvdW50KSB7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcblxuICAgICAgdGhpcy5pb3RhTGlzdC5wdXNoKG5ldyBJb3RhKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgLyogZ2V0IHJlZmVyZW5jZSB0byB0aGUgYXBwbGljYXRpb24gKi9cblxuICAgIHZhciBhcHAgPSB0aGlzLmFwcDtcblxuICAgIC8qIGdldCByZWZlcmVuY2UgdG8gZHJhd2luZyBzdXJmYWNlICovXG5cbiAgICB2YXIgbGF5ZXIgPSB0aGlzLmFwcC5sYXllcjtcblxuICAgIC8qIGNsZWFyIHNjcmVlbiAqL1xuXG4gICAgbGF5ZXIuY2xlYXIoXCIjMjIyXCIpO1xuXG4gICAgLy8gYXBwLmN0eC5maWxsU3R5bGUgPSB0aGlzLmdyYWRpZW50O1xuICAgIC8vIGFwcC5jdHguZmlsbFJlY3QoMCwgMCwgYXBwLndpZHRoLCBhcHAuaGVpZ2h0KTtcblxuICAgIC8vIHRoaXMuaW90YUxpc3QuZm9yRWFjaChmdW5jdGlvbihpb3RhKSB7XG4gICAgLy8gICBpb3RhLnJlbmRlcihsYXllcik7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBsYXllclxuICAgIC8vICAgLmZpbGxTdHlsZSgnI2ZmZicpXG4gICAgLy8gICAuZm9udChcIjE0cHggJ2FyaWFsJ1wiKVxuICAgIC8vICAgLmZpbGxUZXh0KCdTdHJlc3MgdGVzdCAjJyArIHRoaXMucnVuQ291bnQsIDUsIDE1KVxuICAgIC8vICAgLmZpbGxUZXh0KCdFbnRpdGllczogJyArIHRoaXMuaW90YUxpc3QubGVuZ3RoLCA1LCAzMClcbiAgICAvLyAgIC5maWxsVGV4dCgnRnJhbWV0aW1lOicgKyB0aGlzLmZyYW1lVGltZS50b0ZpeGVkKDEpLCA1LCA0NSk7XG4gIH0sXG5cbiAgYW5hbHl6ZTogZnVuY3Rpb24ocG9wdWxhdGlvbikge1xuICAgIHZhciBsID0gcG9wdWxhdGlvbi5sZW5ndGg7XG4gICAgdmFyIHN1bSA9IDAuMDtcbiAgICB2YXIgc3Vtc3EgPSAwLjA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHN1bSArPSBwb3B1bGF0aW9uW2ldO1xuICAgICAgc3Vtc3EgKz0gcG9wdWxhdGlvbltpXSAqIHBvcHVsYXRpb25baV07XG4gICAgfVxuICAgIHZhciBtZWFuID0gc3VtIC8gbDtcbiAgICB2YXIgc2QgPSBNYXRoLnNxcnQoc3Vtc3EgLyBsIC0gc3VtICogc3VtIC8gKGwgKiBsKSk7XG4gICAgdmFyIHNlID0gc2QgLyBNYXRoLnNxcnQobCk7XG4gICAgLy8gc3RhbmRhcmQgZXJyb3IgYXQgOTUlIGNvbmZpZGVuY2VcbiAgICB2YXIgc2U5NSA9IDEuOTYgKiBzZTtcbiAgICB2YXIgcnNlID0gc2UgLyBtZWFuO1xuICAgIHJldHVybiB7XG4gICAgICBtZWFuOiBtZWFuLFxuICAgICAgc2Q6IHNkLFxuICAgICAgc2U6IHNlLFxuICAgICAgc2U5NTogc2U5NSxcbiAgICAgIHJzZTogcnNlXG4gICAgfVxuICB9LFxuXG4gIG5lYXJlc3Q6IGZ1bmN0aW9uKGZyb20sIGVudGl0aWVzKSB7XG5cbiAgICB2YXIgbWluID0gLTE7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0byA9IGVudGl0aWVzW2ldO1xuXG4gICAgICBpZiAoZnJvbSA9PT0gdG8pIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKGZyb20sIHRvKTtcblxuICAgICAgaWYgKGRpc3RhbmNlIDwgbWluIHx8IG1pbiA8IDApIHtcbiAgICAgICAgbWluID0gZGlzdGFuY2U7XG4gICAgICAgIHJlc3VsdCA9IHRvO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBkaXN0YW5jZTogZnVuY3Rpb24oYSwgYikge1xuXG4gICAgdmFyIGR4ID0gYS54IC0gYi54O1xuICAgIHZhciBkeSA9IGEueSAtIGIueTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gIH1cbn07XG5cbnZhciBpbWFnZXMgPSBbJ2ZpcmVmb3gnLCAnZmlyZWZveF9iZXRhJywgJ2ZpcmVmb3hfZGV2ZWxvcGVyX2VkaXRpb24nLCAnZmlyZWZveF9uaWdodGx5J107XG5cbmZ1bmN0aW9uIElvdGEoYXBwLCBwYXJlbnQpIHtcbiAgdGhpcy54ID0gMC4wO1xuICB0aGlzLnkgPSAwLjA7XG4gIHRoaXMudnggPSAwLjA7XG4gIHRoaXMudnkgPSAwLjA7XG4gIHRoaXMudnIgPSAwLjA7XG4gIHRoaXMuYWxwaGEgPSAwLjA7XG4gIHRoaXMuYW5nbGUgPSAwLjA7XG4gIHRoaXMuYXBwID0gYXBwO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGFwcC53aWR0aDtcbiAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIGFwcC5oZWlnaHQ7XG4gIHRoaXMubWF4VmVsID0gMTAwLjA7XG4gIHRoaXMubWF4VG9ycSA9IE1hdGguUEkgKiAxMDtcbiAgdGhpcy52eCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLm1heFZlbCAqIDIgLSB0aGlzLm1heFZlbDtcbiAgdGhpcy52eSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLm1heFZlbCAqIDIgLSB0aGlzLm1heFZlbDtcbiAgdGhpcy52ciA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLm1heFRvcnEgKiAyIC0gdGhpcy5tYXhUb3JxO1xuICB0aGlzLmltYWdlID0gYXBwLmltYWdlc1tpbWFnZXNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMyldXTtcbiAgdGhpcy5yZWdpb24gPSBVdGlscy5yYW5kb20oW1xuICAgIFs1NDgsIDg4LCA0NiwgNDddLFxuICAgIFs1NDQsIDE0MiwgNDYsIDQ4XSxcbiAgICBbNTQ0LCAyMDAsIDQ2LCA0N10sXG4gICAgWzU0NSwgMjUzLCA0NCwgNDhdXG4gIF0pO1xuICB0aGlzLm1heEZvcmNlID0gMTAwLjA7XG4gIHRoaXMuYWxwaGEgPSAwLjIgKyBNYXRoLnJhbmRvbSgpICogMC44O1xuICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG59XG5cbklvdGEucHJvdG90eXBlID0ge1xuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICBhcHAuc3RhdGUubmVhcmVzdCh0aGlzLCB0aGlzLnBhcmVudC5pb3RhTGlzdCk7XG5cbiAgICB2YXIgaW90YUxpc3QgPSB0aGlzLnBhcmVudC5pb3RhTGlzdDtcbiAgICB2YXIgZm9yY2V4ID0gMC4wO1xuICAgIHZhciBmb3JjZXkgPSAwLjA7XG4gICAgdmFyIGZvcmNlcyA9IDA7XG4gICAgdmFyIG1heERpc3QgPSA2MC4wO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gaW90YUxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgZGlzdHggPSAodGhpcy54IC0gaW90YUxpc3RbaV0ueCkgLyBtYXhEaXN0O1xuICAgICAgdmFyIGRpc3R5ID0gKHRoaXMueSAtIGlvdGFMaXN0W2ldLnkpIC8gbWF4RGlzdDtcbiAgICAgIHZhciBzaWdueCA9IE1hdGguc2lnbihkaXN0eCk7XG4gICAgICB2YXIgc2lnbnkgPSBNYXRoLnNpZ24oZGlzdHkpO1xuICAgICAgdmFyIGFic3ggPSBNYXRoLmFicyhkaXN0eCk7XG4gICAgICB2YXIgYWJzeSA9IE1hdGguYWJzKGRpc3R5KTtcbiAgICAgIGlmIChhYnN4IDwgMSAmJiBhYnN5IDwgMSkge1xuICAgICAgICBmb3JjZXggKz0gc2lnbnggKyBhYnN4ICogc2lnbng7XG4gICAgICAgIGZvcmNleSArPSBzaWdueSArIGFic3kgKiBzaWdueTtcbiAgICAgICAgZm9yY2VzKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZvcmNlcyA9PSAwKSB7XG4gICAgICBmb3JjZXMgPSAxO1xuICAgIH1cbiAgICBmb3JjZXggPSBNYXRoLm1heCgtdGhpcy5tYXhGb3JjZSwgTWF0aC5taW4odGhpcy5tYXhGb3JjZSwgZm9yY2V4IC8gZm9yY2VzKSkgKiA1MDA7XG4gICAgZm9yY2V5ID0gTWF0aC5tYXgoLXRoaXMubWF4Rm9yY2UsIE1hdGgubWluKHRoaXMubWF4Rm9yY2UsIGZvcmNleSAvIGZvcmNlcykpICogNTAwO1xuICAgIHRoaXMudnggPSB0aGlzLnZ4ICogMC45OSArIGZvcmNleCAqIDAuMDE7XG4gICAgdGhpcy52eSA9IHRoaXMudnkgKiAwLjk5ICsgZm9yY2V5ICogMC4wMTtcblxuICAgIHZhciB4ID0gdGhpcy54ICsgdGhpcy52eCAqIGR0O1xuICAgIGlmICh4IDwgMCB8fCB4ID4gdGhpcy5hcHAud2lkdGgpIHtcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5hcHAud2lkdGg7XG4gICAgfVxuICAgIHRoaXMueCA9IHg7XG5cbiAgICB2YXIgeSA9IHRoaXMueSArIHRoaXMudnkgKiBkdDtcbiAgICBpZiAoeSA8IDAgfHwgeSA+IHRoaXMuYXBwLmhlaWdodCkge1xuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmFwcC5oZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5hbmdsZSArPSB0aGlzLnZyICogZHQ7XG4gIH0sXG5cbiAgLy8gcmVuZGVyOiBmdW5jdGlvbihsYXllcikge1xuXG4gIC8vICAgcmV0dXJuO1xuXG4gIC8vICAgbGF5ZXIuY29udGV4dC5zYXZlKCk7XG4gIC8vICAgbGF5ZXIuY29udGV4dC50cmFuc2xhdGUodGhpcy54IHwgMCwgdGhpcy55IHwgMCk7XG4gIC8vICAgLy8gbGF5ZXIuYSh0aGlzLmFscGhhKTtcbiAgLy8gICBsYXllci5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI2YwMFwiO1xuICAvLyAgIGxheWVyLmNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIDY0LCA2NCk7XG4gIC8vICAgbGF5ZXIuY29udGV4dC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgLy8gICBsYXllci5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAvLyAgIGxheWVyLmNvbnRleHQubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgLy8gICBsYXllci5jb250ZXh0LmFyYyh0aGlzLngsIHRoaXMueSwgNjQsIDAsIE1hdGguUEkgKiAyKTtcbiAgLy8gICBsYXllci5jb250ZXh0LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcbiAgLy8gICBsYXllci5kcmF3UmVnaW9uKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsIHRoaXMucmVnaW9uLCAwLCAwKTtcbiAgLy8gICBsYXllci5jb250ZXh0LnJlc3RvcmUoKTtcbiAgLy8gfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFwcCA9IG51bGw7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICB9XG59IiwiRU5HSU5FLkJhY2tncm91bmRTdGFycyA9IGZ1bmN0aW9uKCkge1xuXG4gIHRoaXMuY29sb3IgPSBcIiMwYWZcIjtcblxuICB0aGlzLmNvdW50ID0gTWF0aC5tYXgoYXBwLmhlaWdodCwgYXBwLndpZHRoKSAvIDE2IHwgMDtcblxuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuXG4gIHRoaXMucG9wdWxhdGVkID0gZmFsc2U7XG4gIHRoaXMuaW1hZ2UgPSBhcHAuZ2V0Q29sb3JlZEltYWdlKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsIHRoaXMuY29sb3IpO1xuXG59O1xuXG5FTkdJTkUuQmFja2dyb3VuZFN0YXJzLnByb3RvdHlwZSA9IHtcblxuICBpbWFnZXM6IHt9LFxuXG4gIGNvbG9yczogW1wiI2FmY1wiLCBcIiNmYTBcIl0sXG5cbiAgc3ByaXRlczogW1xuICAgIFsyNjAsIDE2NSwgNSwgNV0sXG4gICAgWzI2MSwgMTcxLCAzLCAzXVxuICBdLFxuXG4gIHBvcHVsYXRlOiBmdW5jdGlvbihmaWxsKSB7XG4gICAgdGhpcy5zdGFycyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcbiAgICAgIHRoaXMuc3Bhd25TdGFyKGZpbGwpO1xuICAgIH1cblxuICB9LFxuXG4gIHNwYXduU3RhcjogZnVuY3Rpb24oZmlsbCkge1xuXG4gICAgdmFyIHN0YXIgPSB7XG4gICAgICB4OiBNYXRoLnJhbmRvbSgpICogYXBwLndpZHRoLFxuICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGFwcC5oZWlnaHQsXG4gICAgICB6OiAwLjEgKyAwLjkgKiBNYXRoLnJhbmRvbSgpLFxuICAgICAgczogVXRpbHMucmFuZG9tKFsxLCAyLCAzXSksXG4gICAgICBzcHJpdGVJbmRleDogTWF0aC5yYW5kb20oKSAqIHRoaXMuc3ByaXRlcy5sZW5ndGggfCAwXG4gICAgfTtcblxuICAgIHN0YXIubHggPSBzdGFyLng7XG4gICAgc3Rhci5seSA9IHN0YXIueTtcblxuICAgIHRoaXMuc3RhcnMucHVzaChzdGFyKTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oZHQpIHtcblxuICAgIGlmICghdGhpcy5wb3B1bGF0ZWQpIHtcbiAgICAgIHRoaXMucG9wdWxhdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9wdWxhdGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgdmFyIGRpZmZYID0gMzIgKiBkdDtcbiAgICB2YXIgZGlmZlkgPSAzMiAqIGR0O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXJzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBzdGFyID0gdGhpcy5zdGFyc1tpXTtcblxuICAgICAgdmFyIHNwcml0ZSA9IHRoaXMuc3ByaXRlc1tzdGFyLnNwcml0ZUluZGV4XTtcblxuICAgICAgYXBwLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgc3ByaXRlWzBdLCBzcHJpdGVbMV0sIHNwcml0ZVsyXSwgc3ByaXRlWzNdLFxuICAgICAgICBzdGFyLngsIHN0YXIueSwgc3ByaXRlWzJdLCBzcHJpdGVbM10pO1xuXG4gICAgICBzdGFyLnggKz0gZGlmZlg7XG4gICAgICBzdGFyLnkgKz0gZGlmZlk7XG5cbiAgICAgIGlmIChzdGFyLnggPiBhcHAud2lkdGgpIHN0YXIueCA9IDA7XG4gICAgICBpZiAoc3Rhci55ID4gYXBwLmhlaWdodCkgc3Rhci55ID0gMDtcblxuICAgICAgaWYgKHN0YXIueCA8IDApIHN0YXIueCA9IGFwcC53aWR0aDtcbiAgICAgIGlmIChzdGFyLnkgPCAwKSBzdGFyLnkgPSBhcHAuaGVpZ2h0O1xuXG4gICAgfVxuXG4gIH1cblxufTsiLCJFTkdJTkUuQ2lyY2xlRXhwbG9zaW9uID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG5cbiAgICBhdHRhY2hlZFRvOiBmYWxzZSxcbiAgICByYWRpdXM6IDAsXG4gICAgYWxwaGE6IDEuMCxcbiAgICBkdXJhdGlvbjogMC41XG5cbiAgfSwgYXJncyk7XG5cbiAgdGhpcy5yYWRpdXMgPSAwO1xuXG4gIHRoaXMuaW1hZ2UgPSBhcHAuZ2V0Q29sb3JlZEltYWdlKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsIFwiIzAwMFwiLCBcInNvdXJjZS1pblwiKTtcblxuICB0aGlzLnR3ZWVuID0gYXBwLnR3ZWVuKHRoaXMpLmRpc2NhcmQoKS50byh7XG4gICAgcmFkaXVzOiBhcmdzLnJhZGl1c1xuICB9LCB0aGlzLmR1cmF0aW9uLCBcIm91dEVsYXN0aWNcIikudG8oe1xuICAgIHJhZGl1czogMFxuICB9LCB0aGlzLmR1cmF0aW9uLCBcIm91dEVsYXN0aWNcIik7XG5cbn07XG5cbkVOR0lORS5DaXJjbGVFeHBsb3Npb24ucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBFTkdJTkUuQ2lyY2xlRXhwbG9zaW9uLFxuXG4gIHR5cGU6IFwiY2lyY2xlRXhwbG9zaW9uXCIsXG5cbiAgYWN0aW9uOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5zb3VuZC5wbGF5KFwibGFzZXJcIik7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbigpIHtcblxuICAgIGlmKHRoaXMuYXR0YWNoZWRUbykge1xuICAgICAgdGhpcy54ID0gdGhpcy5hdHRhY2hlZFRvLng7XG4gICAgICB0aGlzLnkgPSB0aGlzLmF0dGFjaGVkVG8ueTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50d2Vlbi5maW5pc2hlZCkgdGhpcy5kZWFkID0gdHJ1ZTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAodGhpcy5yYWRpdXMgPiAwKSB7XG4gICAgICBcbiAgICAgIGFwcC5jdHguYmVnaW5QYXRoKCk7XG4gICAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBhcHAuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xuICAgICAgYXBwLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICBhcHAuY3R4LmZpbGwoKTtcbiAgICAgIGFwcC5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuXG5cbiAgICB9XG5cbiAgfVxuXG59OyIsIkVOR0lORS5TaGlwID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG5cbiAgICBkYW1hZ2U6IDEsXG4gICAgZmlyZXJhdGU6IDAuNSxcbiAgICBzcGVlZDogMTYwLFxuICAgIHJhZGl1czogMTYsXG4gICAgcm90YXRpb25TcGVlZDogNSxcbiAgICBocDogMTAsXG4gICAgcmFuZ2U6IDIwMCxcbiAgICBmb3JjZTogMCxcbiAgICBmb3JjZURpcmVjdGlvbjogMCxcbiAgICB0YXJnZXRUaW1lb3V0OiAwLFxuICAgIGhpdExpZmVzcGFuOiAwLFxuICAgIHNjYWxlOiAxLjAsXG4gICAgcmFuazogMCxcbiAgICBraWxsczogMFxuXG4gIH0sIGRlZnMuc2hpcHNbYXJncy50eXBlXSwgYXJncyk7XG5cbiAgdGhpcy5yYW5kb20gPSB0aGlzLmdhbWUucmFuZG9tKCk7XG5cbiAgdGhpcy5tYXhIcCA9IHRoaXMuaHA7XG5cbiAgdGhpcy5saWZldGltZSA9IHRoaXMuZ2FtZS5yYW5kb20oKSAqIDEwO1xuICB0aGlzLmNvb2xkb3duID0gdGhpcy5maXJlcmF0ZTtcbiAgdGhpcy5kZXNpcmVkRGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmdhbWUucmFuZG9tKCkgKiA2O1xuXG4gIHRoaXMuY29sb3IgPSBkZWZzLnRlYW1Db2xvclt0aGlzLnRlYW1dO1xuXG4gIHRoaXMuaW1hZ2UgPSBhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0O1xuXG4gIGlmICh0aGlzLnRlYW0pIHRoaXMuYXBwbHlVcGdyYWRlcyh0aGlzLmdhbWUudXBncmFkZXMpO1xuICBlbHNlIHRoaXMuYXBwbHlEaWZmaWN1bHR5KCk7XG5cbn07XG5cbkVOR0lORS5TaGlwLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLlNoaXAsXG5cbiAgaG92ZXJhYmxlOiB0cnVlLFxuXG4gIGZyb3plblNwcml0ZTogWzE5MywgODYsIDExLCAxOV0sXG5cbiAgcG9pbnRlcmVudGVyOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMucmVwYWlyKCk7XG5cbiAgfSxcblxuICByYW5rczogW1xuICAgIFszMTgsIDEzMSwgMTAsIDVdLFxuICAgIFszMzMsIDEzMSwgMTAsIDEwXSxcbiAgICBbMzQ4LCAxMzEsIDEwLCAxNV0sXG4gICAgWzM2MCwgMTMxLCAxMCwgOF0sXG4gICAgWzM3MiwgMTMxLCAxMCwgMTNdLFxuICAgIFszODQsIDEzMSwgMTAsIDE4XSxcbiAgICBbMzk2LCAxMzEsIDE1LCAxNl1cbiAgXSxcblxuICBhcHBseURpZmZpY3VsdHk6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGRpZmZpY3VsdHkgPSB0aGlzLmdhbWUud2F2ZSAvIDMwO1xuXG4gICAgdGhpcy5zcGVlZCAqPSAxICsgZGlmZmljdWx0eTtcbiAgICB0aGlzLmRhbWFnZSAqPSAxICsgZGlmZmljdWx0eTtcblxuICB9LFxuXG4gIGFwcGx5VXBncmFkZXM6IGZ1bmN0aW9uKHVwZ3JhZGVzKSB7XG5cbiAgICB2YXIgaHBtb2QgPSB0aGlzLmhwIC8gdGhpcy5tYXhIcDtcblxuICAgIHRoaXMuZGFtYWdlID0gMSArIHVwZ3JhZGVzLmRhbWFnZSAqIDAuMjU7XG4gICAgdGhpcy5tYXhIcCA9IHVwZ3JhZGVzLmxpZmUgKiAxMDtcbiAgICB0aGlzLmhwID0gaHBtb2QgKiB0aGlzLm1heEhwO1xuICAgIHRoaXMuc3BlZWQgPSA4MCArIDEwICogdXBncmFkZXMuc3BlZWQ7XG5cblxuICAgIGlmICh0aGlzLmZyZWUpIHtcbiAgICAgIHRoaXMuZGFtYWdlICo9IDI7XG4gICAgICB0aGlzLm1heEhwICo9IDI7XG4gICAgICB0aGlzLmhwICo9IDI7XG4gICAgfVxuXG4gIH0sXG5cbiAgZGllOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICghdGhpcy50ZWFtKSB0aGlzLmdhbWUuc2NvcmUrKztcblxuICAgIGlmICh0aGlzLmdhbWUuYmVuY2htYXJrKSB7XG5cbiAgICAgIHRoaXMuaHAgPSB0aGlzLm1heEhwO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvc3MpIHtcblxuICAgICAgdGhpcy5nYW1lLnNoYWtlKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLlJlc291cmNlLCB7XG4gICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgIHk6IHRoaXMueVxuICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5nYW1lLmV4cGxvc2lvbih0aGlzLngsIHRoaXMueSwgMTYsIHRoaXMuY29sb3IpO1xuXG4gICAgdGhpcy5nYW1lLmFkZChFTkdJTkUuUmVzb3VyY2UsIHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucGxhbmV0KSB0aGlzLnBsYW5ldC5zaGlwcy0tO1xuXG4gICAgaWYgKCF0aGlzLnRlYW0pIHRoaXMuZ2FtZS5vbmVuZW15ZGVhdGgodGhpcyk7XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwicGxhbmV0SGl0XCIpLnJhdGUoMC42KTtcblxuICB9LFxuXG4gIGFwcGx5RGFtYWdlOiBmdW5jdGlvbihkYW1hZ2UsIGF0dGFja2VyKSB7XG5cbiAgICBpZiAodGhpcy5kZWFkKSByZXR1cm47XG5cbiAgICB0aGlzLmhpdExpZmVzcGFuID0gMC4xO1xuXG4gICAgdGhpcy5ocCAtPSBkYW1hZ2U7XG5cbiAgICBpZiAodGhpcy5ocCA8PSAwKSB7XG4gICAgICB0aGlzLmRpZSgpO1xuICAgICAgaWYgKGF0dGFja2VyKSBhdHRhY2tlci5vbnNjb3JlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5nYW1lLmV4cGxvc2lvbih0aGlzLngsIHRoaXMueSwgMywgdGhpcy5jb2xvcik7XG5cblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICBkdCAqPSB0aGlzLmdhbWUudGltZUZhY3RvcjtcblxuICAgIC8vIGlmICghdGhpcy50ZWFtKSBkdCAqPSBNYXRoLnNpbigoYXBwLmxpZmV0aW1lICUgMiAvIDIpICogTWF0aC5QSSk7XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGR0O1xuXG4gICAgaWYgKCh0aGlzLnRhcmdldFRpbWVvdXQgLT0gZHQpIDw9IDApIHtcblxuICAgICAgdGhpcy50YXJnZXQgPSBmYWxzZTtcbiAgICAgIHRoaXMudGFyZ2V0VGltZW91dCA9IDAuMjU7XG5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG5cbiAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXQodGhpcy5nYW1lLmVudGl0aWVzKTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXQuZGVhZCkge1xuXG4gICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG5cbiAgICB9XG5cblxuICAgIHRoaXMuZm9yZXNpZ2h0Q29sbGlzaW9uKCk7XG5cbiAgICB2YXIgZGVzdGluYXRpb24gPSBmYWxzZTtcbiAgICB2YXIgc3BlZWQgPSB0aGlzLnNwZWVkO1xuXG4gICAgdmFyIG94ID0gMDtcbiAgICB2YXIgb3kgPSAwO1xuXG4gICAgaWYgKHRoaXMudGVhbSAmJiB0aGlzLnRhcmdldCkge1xuXG4gICAgICBveCA9IE1hdGguY29zKHRoaXMucmFuZG9tICogNi4yOCkgKiAxMDA7XG4gICAgICBveSA9IE1hdGguc2luKHRoaXMucmFuZG9tICogNi4yOCkgKiAxMDA7XG5cbiAgICAgIGRlc3RpbmF0aW9uID0gdGhpcy50YXJnZXQ7XG5cbiAgICB9IGVsc2UgZGVzdGluYXRpb24gPSB0aGlzLmdhbWUucGxheWVyLnBsYW5ldDtcblxuICAgIGlmICh0aGlzLnRlYW0gJiYgVXRpbHMuZGlzdGFuY2UodGhpcywgYXBwLmNlbnRlcikgPiBhcHAuY2VudGVyLnkpIHtcblxuICAgICAgZGVzdGluYXRpb24gPSBhcHAuY2VudGVyO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29sbGlzaW9uRGFuZ2VyKSB7XG5cbiAgICAgIC8qXG5cbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMih0aGlzLmNvbGxpc2lvbkRhbmdlci55IC0gdGhpcy55LCB0aGlzLmNvbGxpc2lvbkRhbmdlci54IC0gdGhpcy54KSAtIE1hdGguUEkgLyAyO1xuXG4gICAgICAgIGRlc3RpbmF0aW9uID0ge1xuICAgICAgICAgIHg6IHRoaXMuY29sbGlzaW9uRGFuZ2VyLnggKyBNYXRoLmNvcyhhbmdsZSkgKiAxNTAsXG4gICAgICAgICAgeTogdGhpcy5jb2xsaXNpb25EYW5nZXIueSArIE1hdGguY29zKGFuZ2xlKSAqIDE1MFxuICAgICAgICB9XG5cbiAgICAgICAgc3BlZWQgKj0gMSAtIDAuNSAqIE1hdGguYWJzKFV0aWxzLmNpcmNEaXN0YW5jZSh0aGlzLmRpcmVjdGlvbiwgYW5nbGUpIC8gKE1hdGguUEkpKTtcblxuICAgICAgKi9cblxuICAgICAgaWYgKHRoaXMuY29sbGlzaW9uRGlzdGFuY2UgPCA1MCkge1xuXG4gICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIodGhpcy5jb2xsaXNpb25EYW5nZXIueSAtIHRoaXMueSwgdGhpcy5jb2xsaXNpb25EYW5nZXIueCAtIHRoaXMueCkgLSBNYXRoLlBJO1xuXG4gICAgICAgIHRoaXMueCA9IHRoaXMuY29sbGlzaW9uRGFuZ2VyLnggKyBNYXRoLmNvcyhhbmdsZSkgKiA1MDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jb2xsaXNpb25EYW5nZXIueSArIE1hdGguc2luKGFuZ2xlKSAqIDUwO1xuXG4gICAgICB9XG5cbiAgICAgIC8vIHNwZWVkICo9IHRoaXMuY29sbGlzaW9uRGlzdGFuY2UgLyAyMDA7XG5cbiAgICB9XG5cblxuICAgIGlmIChkZXN0aW5hdGlvbikge1xuXG4gICAgICB0aGlzLmRlc2lyZWREaXJlY3Rpb24gPSBNYXRoLmF0YW4yKGRlc3RpbmF0aW9uLnkgLSB0aGlzLnkgKyBveCwgZGVzdGluYXRpb24ueCAtIHRoaXMueCArIG95KTtcblxuICAgIH1cblxuICAgIGlmICghdGhpcy5mcm96ZW4pIHtcblxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBVdGlscy5jaXJjV3JhcFRvKHRoaXMuZGlyZWN0aW9uLCB0aGlzLmRlc2lyZWREaXJlY3Rpb24sIGR0ICogdGhpcy5yb3RhdGlvblNwZWVkKTtcblxuICAgIH1cblxuICAgIHRoaXMubW92ZShkdCk7XG5cbiAgICAvKiBmaXJpbmcgbWVjaGFuaWNzICovXG5cbiAgICB0aGlzLmNvb2xkb3duIC09IGR0O1xuXG4gICAgaWYgKHRoaXMuY2FuRmlyZSgpKSB7XG5cbiAgICAgIHRoaXMuZmlyZSgpO1xuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRlYW0gJiYgVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy5nYW1lLnBsYXllclBsYW5ldCkgPCB0aGlzLmdhbWUucGxheWVyUGxhbmV0LnJhZGl1cykge1xuXG4gICAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIHtcblxuICAgICAgICB0aGlzLmdhbWUucGxheWVyLnBsYW5ldC5hcHBseURhbWFnZSgxLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kaWUoKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5oaXRMaWZlc3BhbiAtPSBkdDtcblxuICB9LFxuXG5cbiAgbW92ZTogZnVuY3Rpb24oZHQpIHtcblxuICAgIGlmICghdGhpcy5mcm96ZW4pIHtcblxuICAgICAgVXRpbHMubW92ZUluRGlyZWN0aW9uLmNhbGwodGhpcywgdGhpcy5kaXJlY3Rpb24sIHRoaXMuc3BlZWQgKiBkdCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JjZSA+IDApIHtcblxuICAgICAgdGhpcy5mb3JjZSAtPSAyMDAgKiBkdDtcblxuICAgICAgVXRpbHMubW92ZUluRGlyZWN0aW9uLmNhbGwodGhpcywgdGhpcy5mb3JjZURpcmVjdGlvbiwgdGhpcy5mb3JjZSAqIGR0KTtcblxuICAgIH1cblxuICB9LFxuXG4gIGNhbkZpcmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMuZnJvemVuKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHJldHVybjtcbiAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm47XG4gICAgaWYgKFV0aWxzLmRpc3RhbmNlKHRoaXMsIHRoaXMudGFyZ2V0KSA+IHRoaXMucmFuZ2UpIHJldHVybjtcblxuICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmZpcmVyYXRlO1xuXG4gICAgdGhpcy5maXJlKCk7XG5cbiAgfSxcblxuICBmaXJlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLkJ1bGxldCwge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgdGVhbTogdGhpcy50ZWFtLFxuICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIGRhbWFnZTogdGhpcy5kYW1hZ2UsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJsYXNlclwiKTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICAvKiBzcHJpdGUgKi9cblxuICAgIGFwcC5jdHguc2F2ZSgpO1xuICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcblxuICAgIHRoaXMucmVuZGVySFVEKCk7XG5cbiAgICBpZiAodGhpcy5oaXRMaWZlc3BhbiA+IDApIHtcblxuICAgICAgdmFyIGltYWdlID0gYXBwLmdldENvbG9yZWRJbWFnZSh0aGlzLmltYWdlLCBcIiNmZmZcIiwgXCJzb3VyY2UtaW5cIik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlO1xuXG4gICAgfVxuXG4gICAgYXBwLmN0eC5yb3RhdGUodGhpcy5kaXJlY3Rpb24gLSBNYXRoLlBJIC8gMik7XG4gICAgYXBwLmN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcbiAgICBhcHAuY3R4LmRyYXdJbWFnZShpbWFnZSwgdGhpcy5zcHJpdGVbMF0sIHRoaXMuc3ByaXRlWzFdLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM10sIC10aGlzLnNwcml0ZVsyXSAvIDIsIC10aGlzLnNwcml0ZVszXSAvIDIsIHRoaXMuc3ByaXRlWzJdLCB0aGlzLnNwcml0ZVszXSk7XG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgICBpZiAodGhpcy5mcm96ZW4pIHtcblxuICAgICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgICAgdGhpcy5mcm96ZW5TcHJpdGVbMF0sIHRoaXMuZnJvemVuU3ByaXRlWzFdLCB0aGlzLmZyb3plblNwcml0ZVsyXSwgdGhpcy5mcm96ZW5TcHJpdGVbM10sXG4gICAgICAgIHRoaXMueCAtIHRoaXMuZnJvemVuU3ByaXRlWzJdIC8gMiwgdGhpcy55IC0gdGhpcy5mcm96ZW5TcHJpdGVbM10gLyAyLCB0aGlzLmZyb3plblNwcml0ZVsyXSwgdGhpcy5mcm96ZW5TcHJpdGVbM10pO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGVhbSkge1xuXG4gICAgICB2YXIgcmFua1Nwcml0ZSA9IHRoaXMucmFua3NbdGhpcy5yYW5rXTtcblxuICAgICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgICAgcmFua1Nwcml0ZVswXSwgcmFua1Nwcml0ZVsxXSwgcmFua1Nwcml0ZVsyXSwgcmFua1Nwcml0ZVszXSxcbiAgICAgICAgdGhpcy54ICsgMjQsIHRoaXMueSAtIDI0LCByYW5rU3ByaXRlWzJdLCByYW5rU3ByaXRlWzNdKTtcblxuXG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVySFVEOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmZyb3plbikgcmV0dXJuO1xuXG4gICAgdmFyIHcgPSBNYXRoLm1pbigxMDAsICh0aGlzLm1heEhwIC8gMTYwKSAqIDEwMCB8IDApO1xuXG4gICAgdmFyIG1vZCA9IHRoaXMuaHAgLyB0aGlzLm1heEhwO1xuXG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGFwcC5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGFwcC5jdHgubGluZVdpZHRoID0gMjtcbiAgICBhcHAuY3R4LmZpbGxSZWN0KDAsIDMyLCB3ICogbW9kLCA4KTtcbiAgICBhcHAuY3R4LnN0cm9rZVJlY3QoMCwgMzIsIHcsIDgpO1xuXG4gIH0sXG5cbiAgY29sbGlzaW9uUmFuZ2U6IDEwMCxcblxuICBmb3Jlc2lnaHRDb2xsaXNpb246IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5jb2xsaXNpb25EYW5nZXIgPSBmYWxzZTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwb29sID0gVXRpbHMuZmlsdGVyKHRoaXMuZ2FtZS5lbnRpdGllcywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS50eXBlICE9PSBcImFzdGVyb2lkXCIpIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYgKFV0aWxzLmRpc3RhbmNlKHNlbGYsIGUpID4gc2VsZi5jb2xsaXNpb25SYW5nZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH0pO1xuXG4gICAgdGhpcy5jb2xsaXNpb25EYW5nZXIgPSBVdGlscy5uZWFyZXN0KHRoaXMsIHBvb2wpO1xuXG4gICAgaWYgKHRoaXMuY29sbGlzaW9uRGFuZ2VyKSB0aGlzLmNvbGxpc2lvbkRpc3RhbmNlID0gVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy5jb2xsaXNpb25EYW5nZXIpO1xuXG4gIH0sXG5cbiAgZ2V0VGFyZ2V0OiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBwb29sID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2FtZS5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgZW50aXR5ID0gdGhpcy5nYW1lLmVudGl0aWVzW2ldO1xuXG4gICAgICBpZiAoIShlbnRpdHkgaW5zdGFuY2VvZiBFTkdJTkUuU2hpcCkpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoZW50aXR5LnRlYW0gIT09IHRoaXMudGVhbSkgcG9vbC5wdXNoKGVudGl0eSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gVXRpbHMubmVhcmVzdCh0aGlzLCBwb29sKTtcblxuICB9LFxuXG4gIHJlcGFpcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAodGhpcy5ocCA+PSB0aGlzLm1heEhwKSByZXR1cm47XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5DaXJjbGVFeHBsb3Npb24sIHtcbiAgICAgIGNvbG9yOiBcIiNhMDRcIixcbiAgICAgIHJhZGl1czogMzIsXG4gICAgICBhdHRhY2hlZFRvOiB0aGlzXG4gICAgfSk7XG5cbiAgICB0aGlzLmhwID0gdGhpcy5tYXhIcDtcblxuICB9LFxuXG4gIG9uc2NvcmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5raWxscysrO1xuXG4gICAgdGhpcy5yYW5rID0gTWF0aC5taW4odGhpcy5yYW5rcy5sZW5ndGggLSAxLCB0aGlzLmtpbGxzIC8gMyB8IDApO1xuXG4gIH1cblxufTsiLCJFTkdJTkUuQnVsbGV0ID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG4gICAgc3BlZWQ6IDQwMFxuICB9LCBhcmdzKTtcblxuICB0aGlzLmNvbG9yID0gZGVmcy50ZWFtQ29sb3JbdGhpcy50ZWFtXTtcbiAgdGhpcy5yYWRpdXMgPSA0O1xuICB0aGlzLmRpcmVjdGlvbiA9IDA7XG5cbiAgdGhpcy5pbWFnZSA9IGFwcC5nZXRDb2xvcmVkSW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCwgdGhpcy5jb2xvciwgXCJzb3VyY2UtaW5cIilcblxufTtcblxuRU5HSU5FLkJ1bGxldC5wcm90b3R5cGUgPSB7XG5cbiAgc3ByaXRlOiBbMTQ1LCAyNSwgNiwgMzldLFxuXG4gIGNvbnN0cnVjdG9yOiBFTkdJTkUuQnVsbGV0LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICBkdCAqPSB0aGlzLmdhbWUudGltZUZhY3RvcjtcblxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5hdGFuMih0aGlzLnRhcmdldC55IC0gdGhpcy55LCB0aGlzLnRhcmdldC54IC0gdGhpcy54KTtcblxuICAgIHRoaXMueCArPSBNYXRoLmNvcyh0aGlzLmRpcmVjdGlvbikgKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuZGlyZWN0aW9uKSAqIHRoaXMuc3BlZWQgKiBkdDtcblxuICAgIGlmIChVdGlscy5kaXN0YW5jZSh0aGlzLCB0aGlzLnRhcmdldCkgPCB0aGlzLnJhZGl1cyArIHRoaXMudGFyZ2V0LnJhZGl1cykge1xuXG4gICAgICB0aGlzLmhpdCh0aGlzLnRhcmdldCk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBoaXQ6IGZ1bmN0aW9uKHRhcmdldCkge1xuXG4gICAgdGFyZ2V0LmFwcGx5RGFtYWdlKHRoaXMuZGFtYWdlLCB0aGlzLnBhcmVudCk7XG5cbiAgICB0aGlzLmRpZSgpO1xuXG4gIH0sXG5cbiAgZGllOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZGVhZCA9IHRydWU7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHMgPSB0aGlzLmdhbWUuZ2V0U2NhbGUodGhpcyk7XG5cbiAgICBhcHAuY3R4LnNhdmUoKTtcblxuICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBhcHAuY3R4LnJvdGF0ZSh0aGlzLmRpcmVjdGlvbiArIE1hdGguUEkgLyAyKTtcbiAgICBhcHAuY3R4LnNjYWxlKHMsIHMpO1xuICAgIGFwcC5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLnNwcml0ZVswXSwgdGhpcy5zcHJpdGVbMV0sIHRoaXMuc3ByaXRlWzJdLCB0aGlzLnNwcml0ZVszXSwgLXRoaXMuc3ByaXRlWzJdIC8gMiwgLXRoaXMuc3ByaXRlWzNdIC8gMiwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdXG4gICAgKTtcblxuICAgIGFwcC5jdHgucmVzdG9yZSgpO1xuXG4gIH1cblxufTsiLCJFTkdJTkUuQXN0ZXJvaWQgPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgdGhpcy5tYXggPSB0aGlzLnJlc291cmNlcyA9IDU7XG5cbiAgVXRpbHMuZXh0ZW5kKHRoaXMsIHtcblxuICAgIGhpdExpZmVzcGFuOiAwXG5cbiAgfSwgYXJncyk7XG5cbiAgdGhpcy5yYWRpdXMgPSAzMjtcblxuICB0aGlzLmRpcmVjdGlvbiA9IE1hdGguYXRhbjIoYXBwLmNlbnRlci55IC0gdGhpcy55LCBhcHAuY2VudGVyLnggLSB0aGlzLngpO1xuICB0aGlzLnNwZWVkID0gOCArIHRoaXMuZ2FtZS5yYW5kb20oKSAqIDMyO1xuXG4gIHRoaXMubGlmZXRpbWUgPSAwO1xuXG4gIHRoaXMua2luZCA9IHRoaXMuZ2FtZS5yYW5kb20oKSA+IDAuOCA/IFwiZ29sZFwiIDogXCJub3JtYWxcIjtcblxuICB0aGlzLnNwcml0ZSA9IFV0aWxzLnJhbmRvbSh0aGlzLnNwcml0ZXNbdGhpcy5raW5kXSk7XG5cbiAgdGhpcy5jb2xsZWN0aWJsZXMgPSAwO1xuXG5cbn07XG5cbkVOR0lORS5Bc3Rlcm9pZC5wcm90b3R5cGUgPSB7XG5cbiAgY29uc3R1cmN0b3I6IEVOR0lORS5Bc3Rlcm9pZCxcblxuICBob3ZlcmFibGU6IFwibWluaW5nXCIsXG4gIHNpbGVudDogdHJ1ZSxcbiAgaW5zdGFudDogdHJ1ZSxcblxuICB0eXBlOiBcImFzdGVyb2lkXCIsXG5cblxuICBzcHJpdGVzOiB7XG5cbiAgICBub3JtYWw6IFtcbiAgICAgIFszNDEsIDIzOSwgNTIsIDM5XSxcbiAgICAgIFszMzcsIDI4OCwgNjEsIDYxXSxcbiAgICAgIFszMzgsIDM1NCwgNTcsIDU4XVxuICAgIF0sXG5cbiAgICBnb2xkOiBbXG4gICAgICBbNDA4LCAyMzgsIDUyLCAzOV0sXG4gICAgICBbNDA0LCAyODcsIDU5LCA2MV0sXG4gICAgICBbNDAzLCAzNTMsIDU5LCA1OF1cbiAgICBdXG5cbiAgfSxcblxuICBwb2ludGVyZW50ZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5zbG93ZG93biA9IHRydWU7XG5cbiAgfSxcblxuICBwb2ludGVybGVhdmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5zbG93ZG93biA9IGZhbHNlO1xuXG4gIH0sXG5cbiAgZGllOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJkaWdFbmRcIik7XG5cbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNykge1xuXG4gICAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5Qb3dlcnVwLCB7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIHRoaXMuZ2FtZS5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5nYW1lLmV4cGxvc2lvbih0aGlzLngsIHRoaXMueSwgMTYsIFwiI2FhYVwiKTtcbiAgICB0aGlzLmdhbWUuc3Bhd25Bc3Rlcm9pZCgpO1xuXG4gIH0sXG5cbiAgZGlnOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuaGl0TGlmZXNwYW4gPSAwLjE7XG5cbiAgICB0aGlzLnJlc291cmNlcy0tO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VzIDw9IDApIHtcbiAgICAgIHRoaXMuZGllKCk7XG4gICAgfVxuXG4gICAgdmFyIGNvdW50ID0gdGhpcy5raW5kID09PSBcImdvbGRcIiA/IDIgOiAxO1xuXG4gICAgdGhpcy5zcGF3blJlc291cmNlcyhjb3VudCk7XG5cbiAgICB0aGlzLmdhbWUuZXhwbG9zaW9uKHRoaXMueCwgdGhpcy55LCA0LCBcIiNmYTBcIik7XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwiZGlnXCIpO1xuXG4gIH0sXG5cbiAgc3Bhd25SZXNvdXJjZXM6IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbiAgICAgIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLlJlc291cmNlLCB7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55LFxuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICAgIGR0ICo9IHRoaXMuZ2FtZS50aW1lRmFjdG9yO1xuXG4gICAgdGhpcy5saWZldGltZSArPSBkdDtcblxuICAgIHRoaXMuaGl0TGlmZXNwYW4gLT0gZHQ7XG5cbiAgICB2YXIgc3BlZWQgPSB0aGlzLnNwZWVkICogKHRoaXMuc2xvd2Rvd24gPyAwLjI1IDogMS4wKTtcblxuICAgIHRoaXMueCArPSBNYXRoLmNvcyh0aGlzLmRpcmVjdGlvbikgKiBzcGVlZCAqIGR0O1xuICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmRpcmVjdGlvbikgKiBzcGVlZCAqIGR0O1xuXG4gICAgdGhpcy5nYW1lLndyYXAodGhpcyk7XG5cbiAgICBpZiAoVXRpbHMuZGlzdGFuY2UodGhpcywgYXBwLmNlbnRlcikgPCB0aGlzLmdhbWUucGxheWVyLnBsYW5ldC5yYWRpdXMgKyB0aGlzLnJhZGl1cykge1xuXG4gICAgICBpZiAodGhpcy5nYW1lLnBsYXllci5wbGFuZXQuYXN0ZXJvaWRzU2hpZWxkKSB7XG5cbiAgICAgICAgdGhpcy5zcGF3blJlc291cmNlcyg1KTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0aGlzLmdhbWUucGxheWVyLnBsYW5ldC5hcHBseURhbWFnZSgxLCB0aGlzKTtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLmRpZSgpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmhpdExpZmVzcGFuID4gMCkge1xuICAgICAgdmFyIGltYWdlID0gYXBwLmdldENvbG9yZWRJbWFnZShhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LCBcIiNmZmZcIiwgXCJzb3VyY2UtaW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpbWFnZSA9IGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQ7XG4gICAgfVxuXG4gICAgdmFyIHNjYWxlID0gMC41ICsgMC41ICogdGhpcy5yZXNvdXJjZXMgLyB0aGlzLm1heDtcblxuICAgIGFwcC5jdHguc2F2ZSgpO1xuXG4gICAgYXBwLmN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpXG4gICAgYXBwLmN0eC5yb3RhdGUoYXBwLnJvdW5kQW5nbGUodGhpcy5saWZldGltZSkpXG4gICAgYXBwLmN0eC5zY2FsZShzY2FsZSwgc2NhbGUpXG4gICAgYXBwLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsXG4gICAgICB0aGlzLnNwcml0ZVswXSwgdGhpcy5zcHJpdGVbMV0sIHRoaXMuc3ByaXRlWzJdLCB0aGlzLnNwcml0ZVszXSwgLXRoaXMuc3ByaXRlWzJdIC8gMiwgLXRoaXMuc3ByaXRlWzNdIC8gMiwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdXG4gICAgKTtcbiAgICBhcHAuY3R4LnJlc3RvcmUoKTtcblxuICB9XG5cbn07IiwiRU5HSU5FLkN1cnNvciA9IGZ1bmN0aW9uKGdhbWUsIHRlYW0sIHBsYW5ldCkge1xuXG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgdGhpcy5hY3Rpb25UaW1lb3V0ID0gMDtcblxuICB0aGlzLmRvdFJhZGl1cyA9IDg7XG4gIHRoaXMuY2FwYWNpdHkgPSAxMDtcbiAgdGhpcy5yZXNvdXJjZXMgPSA0O1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuICB0aGlzLmhvdmVyVGltZSA9IDA7XG4gIHRoaXMudGVhbSA9IHRlYW07XG4gIHRoaXMuY29sb3IgPSBkZWZzLnRlYW1Db2xvclt0ZWFtXTtcbiAgdGhpcy5wbGFuZXQgPSBwbGFuZXQ7XG5cbiAgdGhpcy50YXJnZXRUaW1lb3V0ID0gdGhpcy50YXJnZXRJbnRlcnZhbCA9IDAuMjU7XG4gIHRoaXMuZmlyZUNvb2xkb3duID0gdGhpcy5maXJlSW50ZXJ2YWwgPSAwLjI1O1xuXG4gIC8qIHRpbWVycyAqL1xuXG4gIHRoaXMudGltZXMgPSB7XG4gICAgbWluaW5nOiAwLjUsXG4gICAgY29sbGVjdDogMC4wNSxcbiAgICBidWlsZDogMC41LFxuICAgIHJlcGFpcjogMlxuICB9O1xuXG5cbiAgdGhpcy50d2VlbiA9IGFwcC50d2Vlbih0aGlzKTtcblxuICBpZiAoIXRoaXMudGVhbSkge1xuXG4gICAgdGhpcy5haSA9IG5ldyBFTkdJTkUuQWkodGhpcyk7XG4gICAgdGhpcy5haS5zZXQoXCJpZGxlXCIpO1xuXG4gIH1cblxuXG59O1xuXG5FTkdJTkUuQ3Vyc29yLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHVyY3RvcjogRU5HSU5FLkN1cnNvcixcblxuICBwb2tlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMudHdlZW4gPSBhcHAudHdlZW4odGhpcykuZGlzY2FyZCgpXG5cbiAgICAudG8oe1xuICAgICAgZG90UmFkaXVzOiAxNlxuICAgIH0sIDAuMSwgXCJvdXRTaW5lXCIpXG5cbiAgICAudG8oe1xuICAgICAgZG90UmFkaXVzOiA4XG4gICAgfSwgMC4wNSwgXCJpblNpbmVcIik7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgdmFyIHByZXZFbnRpdHkgPSB0aGlzLmVudGl0eTtcblxuICAgIHRoaXMuZW50aXR5ID0gdGhpcy5nZXRIb3ZlcmVkRW50aXR5KCk7XG5cbiAgICBpZiAodGhpcy5lbnRpdHkgIT09IHByZXZFbnRpdHkpIHtcblxuICAgICAgaWYgKHByZXZFbnRpdHkgJiYgcHJldkVudGl0eS5wb2ludGVybGVhdmUpIHByZXZFbnRpdHkucG9pbnRlcmxlYXZlKHRoaXMpO1xuICAgICAgaWYgKHRoaXMuZW50aXR5ICYmIHRoaXMuZW50aXR5LnBvaW50ZXJlbnRlcikgdGhpcy5lbnRpdHkucG9pbnRlcmVudGVyKHRoaXMpO1xuXG4gICAgICB0aGlzLm9uZW50aXR5Y2hhbmdlKCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3Rpb24pIHtcblxuICAgICAgdGhpcy5ob3ZlclRpbWUgKz0gZHQ7XG5cbiAgICAgIHRoaXMucHJvZ3Jlc3NBY3Rpb24oZHQpO1xuXG4gICAgfVxuXG4gICAgLyogZmlyaW5nIG1lY2hhbmljcyAqL1xuXG4gICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmRlYWQpIHRoaXMudGFyZ2V0ID0gZmFsc2U7XG5cbiAgICBpZiAoKHRoaXMudGFyZ2V0VGltZW91dCAtPSBkdCkgPD0gMCkge1xuXG4gICAgICB0aGlzLnRhcmdldFRpbWVvdXQgPSAwLjU7XG5cbiAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXQoKTtcblxuICAgIH1cblxuXG4gICAgdGhpcy5maXJlQ29vbGRvd24gLT0gZHQ7XG5cbiAgICBpZiAodGhpcy5jYW5GaXJlKCkpIHtcblxuICAgICAgdGhpcy5maXJlKCk7XG5cbiAgICB9XG5cblxuICB9LFxuXG4gIGdldFRhcmdldDogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgcG9vbCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdhbWUuZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGVudGl0eSA9IHRoaXMuZ2FtZS5lbnRpdGllc1tpXTtcblxuICAgICAgaWYgKCEoZW50aXR5IGluc3RhbmNlb2YgRU5HSU5FLlNoaXApKSBjb250aW51ZTtcblxuICAgICAgaWYgKFV0aWxzLmRpc3RhbmNlKGVudGl0eSwgdGhpcykgPiAyMDApIGNvbnRpbnVlO1xuICAgICAgaWYgKGVudGl0eS50ZWFtICE9PSB0aGlzLnRlYW0pIHBvb2wucHVzaChlbnRpdHkpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWxzLm5lYXJlc3QodGhpcywgcG9vbCk7XG5cbiAgfSxcblxuICBvbmVudGl0eWNoYW5nZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmFjdGlvbkNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICB0aGlzLmhvdmVyVGltZSA9IDA7XG5cbiAgICBpZiAodGhpcy5lbnRpdHkpIHtcblxuICAgICAgdGhpcy5hY3Rpb24gPSB0aGlzLmVudGl0eS5ob3ZlcmFibGU7XG4gICAgICB0aGlzLnJlc2V0QWN0aW9uKCk7XG5cbiAgICAgIGlmICh0aGlzLmVudGl0eS5pbnN0YW50KSB0aGlzLmFjdGlvblRpbWVvdXQgPSAwO1xuXG5cbiAgICB9IGVsc2UgdGhpcy5hY3Rpb24gPSBmYWxzZTtcblxuICAgIC8qXG4gICAgICAgIGlmICghdGhpcy5hY3Rpb25Tb3VuZCkgdGhpcy5hY3Rpb25Tb3VuZCA9IGFwcC5zb3VuZC5wbGF5KFwiYWN0aW9uXCIpLmxvb3AoKS5yYXRlKDAuNSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbikge1xuICAgICAgICAgIHRoaXMuYWN0aW9uU291bmQuc3RvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWN0aW9uU291bmQuZmFkZUluKCk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICB0aGlzLnVwZGF0ZVRvb2x0aXAoKTtcblxuXG4gIH0sXG5cbiAgcmVzZXRBY3Rpb246IGZ1bmN0aW9uKCkge1xuXG5cbiAgICB0aGlzLmFjdGlvblRpbWVvdXQgPSB0aGlzLnRpbWVzW3RoaXMuYWN0aW9uXTtcblxuICAgIHRoaXMuYWN0aW9uRHVyYXRpb24gPSB0aGlzLmFjdGlvblRpbWVvdXQ7XG5cbiAgfSxcblxuICB1cGdyYWRlOiBmdW5jdGlvbihrZXkpIHtcblxuICAgIHRoaXMuZ2FtZS51cGdyYWRlc1trZXldICsrO1xuXG4gICAgdGhpcy5nYW1lLmJ1dHRvbnNba2V5XS5jb3VudCA9IHRoaXMuZ2V0UHJpY2Uoa2V5KTtcblxuICAgIHZhciBzaGlwcyA9IFV0aWxzLmZpbHRlcih0aGlzLmdhbWUuZW50aXRpZXMsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIFxuICAgICAgcmV0dXJuIChlIGluc3RhbmNlb2YgRU5HSU5FLlNoaXApICYmIGUudGVhbTtcblxuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgc2hpcCA9IHNoaXBzW2ldO1xuXG4gICAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5DaXJjbGVFeHBsb3Npb24sIHtcbiAgICAgICAgY29sb3I6IFwiIzBhZlwiLFxuICAgICAgICByYWRpdXM6IDMyLFxuICAgICAgICBhdHRhY2hlZFRvOiBzaGlwXG4gICAgICB9KTtcblxuICAgICAgc2hpcC5hcHBseVVwZ3JhZGVzKHRoaXMuZ2FtZS51cGdyYWRlcylcblxuICAgIH1cblxuICB9LFxuXG4gIGdldFByaWNlOiBmdW5jdGlvbihrZXkpIHtcblxuICAgIHJldHVybiBNYXRoLnBvdygyLCB0aGlzLmdhbWUudXBncmFkZXNba2V5XSk7XG5cbiAgfSxcblxuICBjYW5Qcm9ncmVzczogZnVuY3Rpb24oKSB7XG5cbiAgICBzd2l0Y2ggKHRoaXMuYWN0aW9uKSB7XG5cbiAgICAgIGNhc2UgXCJyZXBhaXJcIjpcblxuICAgICAgICByZXR1cm4gdGhpcy5wbGFuZXQuaHAgPCB0aGlzLnBsYW5ldC5tYXhIUDtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImJ1aWxkXCI6XG5cbiAgICAgICAgaWYgKHRoaXMuZW50aXR5LmtleSA9PT0gXCJmaWdodGVyXCIpIHtcblxuICAgICAgICAgIGlmICh0aGlzLmdhbWUucGxheWVyUGxhbmV0Lm1heCAtIHRoaXMuZ2FtZS5wbGF5ZXJQbGFuZXQuc2hpcHMgPD0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzID4gMDtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlcyA+PSB0aGlzLmdldFByaWNlKHRoaXMuZW50aXR5LmtleSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICB9LFxuXG4gIHByb2dyZXNzQWN0aW9uOiBmdW5jdGlvbihkdCkge1xuXG4gICAgaWYgKHRoaXMuY2FuUHJvZ3Jlc3MoKSAmJiAodGhpcy5hY3Rpb25UaW1lb3V0IC09IGR0KSA8IDApIHtcblxuICAgICAgdGhpcy5maW5hbGl6ZUFjdGlvbigpO1xuICAgICAgdGhpcy5yZXNldEFjdGlvbigpO1xuXG4gICAgfTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSAxIC0gdGhpcy5hY3Rpb25UaW1lb3V0IC8gdGhpcy5hY3Rpb25EdXJhdGlvbjtcblxuXG4gIH0sXG5cbiAgZmluYWxpemVBY3Rpb246IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5hY3Rpb25Db21wbGV0ZSA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKHRoaXMuYWN0aW9uKSB7XG5cbiAgICAgIGNhc2UgXCJyZXBhaXJcIjpcblxuICAgICAgICB0aGlzLnBsYW5ldC5yZXBhaXIoKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIm1pbmluZ1wiOlxuXG4gICAgICAgIHRoaXMuZW50aXR5LmRpZygpO1xuXG4gICAgICAgIGJyZWFrO1xuXG5cbiAgICAgIGNhc2UgXCJidWlsZFwiOlxuXG4gICAgICAgIHN3aXRjaCAodGhpcy5lbnRpdHkua2V5KSB7XG5cbiAgICAgICAgICBjYXNlIFwiZmlnaHRlclwiOlxuXG4gICAgICAgICAgICB0aGlzLnBsYW5ldC5zcGF3blNoaXAoXCJmaWdodGVyXCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMgLT0gMTtcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJidWlsZFwiKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwibGlmZVwiOlxuICAgICAgICAgIGNhc2UgXCJkYW1hZ2VcIjpcbiAgICAgICAgICBjYXNlIFwic3BlZWRcIjpcblxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXMgLT0gdGhpcy5nZXRQcmljZSh0aGlzLmVudGl0eS5rZXkpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZ3JhZGUodGhpcy5lbnRpdHkua2V5KTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWUuYmVuY2htYXJrKSBhcHAuc291bmQucGxheShcInVwZ3JhZGVcIik7XG5cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICB9LFxuXG4gIGhpdDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmdhbWUuc2hha2UoKTtcblxuICAgIHRoaXMucGxhbmV0LmFwcGx5RGFtYWdlKDEsIHRoaXMucGxhbmV0KTtcblxuICAgIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLkNpcmNsZUV4cGxvc2lvbiwge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgY29sb3I6IFwiI2MwMlwiLFxuICAgICAgcmFkaXVzOiAzMlxuICAgIH0pXG5cbiAgfSxcblxuICBnZXRIb3ZlcmVkRW50aXR5OiBmdW5jdGlvbigpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBlbnRpdHkgPSB0aGlzLmdhbWUuZW50aXRpZXNbaV07XG5cbiAgICAgIGlmIChlbnRpdHkuaG92ZXJhYmxlICYmIFV0aWxzLmRpc3RhbmNlKGVudGl0eSwgdGhpcykgPCBlbnRpdHkucmFkaXVzKSByZXR1cm4gZW50aXR5O1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgYXBwLmxheWVyLmZpbGxTdHlsZSh0aGlzLmNvbG9yKS5maWxsQ2lyY2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLmRvdFJhZGl1cyk7XG5cbiAgICBpZiAodGhpcy5hY3Rpb24gJiYgIXRoaXMuZW50aXR5LnNpbGVudCkge1xuXG4gICAgICB2YXIgbW9kID0gTWF0aC5taW4oMSwgYXBwLmVhc2UoMiAqIHRoaXMuaG92ZXJUaW1lLCBcIm91dEJvdW5jZVwiKSk7XG5cbiAgICAgIGFwcC5jdHguc2F2ZSgpO1xuICAgICAgYXBwLmN0eC50cmFuc2xhdGUodGhpcy5lbnRpdHkueCwgdGhpcy5lbnRpdHkueSk7XG5cbiAgICAgIGFwcC5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgYXBwLmN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgYXBwLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGFwcC5jdHguYXJjKDAsIDAsICh0aGlzLmVudGl0eS5yYWRpdXMgKyAyKSAqIG1vZCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgYXBwLmN0eC5zdHJva2UoKTtcblxuICAgICAgYXBwLmN0eC5saW5lV2lkdGggPSA4O1xuICAgICAgYXBwLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGFwcC5jdHguZ2xvYmFsQWxwaGEgPSAwLjI1O1xuICAgICAgYXBwLmN0eC5hcmMoMCwgMCwgdGhpcy5lbnRpdHkucmFkaXVzICsgOCwgMCwgTWF0aC5QSSAqIDIpXG4gICAgICBhcHAuY3R4LnN0cm9rZSgpXG4gICAgICBhcHAuY3R4Lmdsb2JhbEFscGhhID0gMS4wO1xuXG4gICAgICBhcHAuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICBhcHAuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgYXBwLmN0eC5hcmMoMCwgMCwgdGhpcy5lbnRpdHkucmFkaXVzICsgOCwgMCwgdGhpcy5wcm9ncmVzcyAqIE1hdGguUEkgKiAyKVxuICAgICAgYXBwLmN0eC5zdHJva2UoKTtcblxuICAgICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgICB9XG5cblxuXG4gIH0sXG5cbiAgY2FuRmlyZTogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5jaGVja0JvbnVzKFwibGFzZXJcIikpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmZpcmVDb29sZG93biA+IDApIHJldHVybjtcbiAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm47XG4gICAgaWYgKFV0aWxzLmRpc3RhbmNlKHRoaXMsIHRoaXMudGFyZ2V0KSA+IHRoaXMucmFuZ2UpIHJldHVybjtcblxuICAgIHRoaXMuZmlyZUNvb2xkb3duID0gdGhpcy5maXJlSW50ZXJ2YWw7XG5cbiAgICB0aGlzLmZpcmUoKTtcblxuICB9LFxuXG4gIGZpcmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5nYW1lLmFkZChFTkdJTkUuQnVsbGV0LCB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICB0ZWFtOiB0aGlzLnRlYW0sXG4gICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgZGFtYWdlOiAyLFxuICAgICAgc3BlZWQ6IDEwMDBcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJsYXNlclwiKTtcblxuICB9LFxuXG4gIG1vdmVUbzogZnVuY3Rpb24oZGVzdGluYXRpb24pIHtcblxuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcblxuICB9LFxuXG4gIHVwZGF0ZVRvb2x0aXA6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMuZW50aXR5KSB7XG4gICAgICBpZiAodGhpcy5lbnRpdHkudG9vbHRpcCkgdGhpcy5nYW1lLnRvb2x0aXAgPSB0aGlzLmVudGl0eS50b29sdGlwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhbWUudG9vbHRpcCA9IGZhbHNlO1xuICAgIH1cblxuICB9XG5cbn0iLCJFTkdJTkUuUmVzb3VyY2UgPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgVXRpbHMuZXh0ZW5kKHRoaXMsIGFyZ3MpO1xuXG4gIHRoaXMucmFkaXVzID0gMzI7XG5cbiAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogNi4yODtcbiAgdGhpcy5zcGVlZCA9IDMyO1xuXG4gIHRoaXMuZm9yY2VEaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogNi4yODtcbiAgdGhpcy5mb3JjZSA9IDY0ICsgTWF0aC5yYW5kb20oKSAqIDEyODtcblxuICB0aGlzLmZvcmNlICo9IDM7XG4gIHRoaXMuZm9yY2VEYW1waW5nID0gdGhpcy5mb3JjZTtcblxuICB0aGlzLmxpZmV0aW1lID0gMDtcbiAgdGhpcy5kdXJhdGlvbiA9IDEwO1xuXG4gIHRoaXMudmFsdWUgPSBNYXRoLnJhbmRvbSgpICogMyB8IDA7XG5cbiAgdGhpcy5zcHJpdGUgPSB0aGlzLnNwcml0ZXNbdGhpcy52YWx1ZV07XG59O1xuXG5FTkdJTkUuUmVzb3VyY2UucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0dXJjdG9yOiBFTkdJTkUuUmVzb3VyY2UsXG5cbiAgc3ByaXRlczogW1xuICAgIFszMzMsIDEwNSwgMTAsIDEwXSxcbiAgICBbMzIwLCAxMDQsIDEyLCAxMl0sXG4gICAgWzMwMywgMTAyLCAxNiwgMTZdXG4gIF0sXG5cbiAgdHlwZTogXCJyZXNvdXJjZVwiLFxuXG5cbiAgY29sbGVjdDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmdhbWUucmVtb3ZlKHRoaXMpO1xuXG4gICAgaWYgKCF0aGlzLmdhbWUuYmVuY2htYXJrKSBhcHAuc291bmQucGxheShcImNvaW5cIik7XG5cbiAgICB0aGlzLmdhbWUucGxheWVyLnBva2UoKTtcblxuICAgIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLkNpcmNsZUV4cGxvc2lvbiwge1xuICAgICAgY29sb3I6IFwiI2ZjMFwiLFxuICAgICAgcmFkaXVzOiA4LFxuICAgICAgYXR0YWNoZWRUbzogdGhpcyxcbiAgICAgIGR1cmF0aW9uOiAwLjI1XG4gICAgfSk7XG5cbiAgICB0aGlzLmdhbWUucGxheWVyLnJlc291cmNlcyArPSB0aGlzLnZhbHVlO1xuICAgIFxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGR0O1xuXG4gICAgdmFyIHBsYXllckRpc3RhbmNlID0gVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy5nYW1lLnBsYXllcik7XG5cbiAgICBpZiAodGhpcy5mb3JjZSkge1xuXG4gICAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5mb3JjZURpcmVjdGlvbikgKiB0aGlzLmZvcmNlICogZHQ7XG4gICAgICB0aGlzLnkgKz0gTWF0aC5zaW4odGhpcy5mb3JjZURpcmVjdGlvbikgKiB0aGlzLmZvcmNlICogZHQ7XG5cbiAgICAgIHRoaXMuZm9yY2UgPSBNYXRoLm1heCgwLCB0aGlzLmZvcmNlIC0gdGhpcy5mb3JjZURhbXBpbmcgKiBkdCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb2tlZCAmJiB0aGlzLmdhbWUuY2hlY2tCb251cyhcIm1hZ25ldFwiKSkge1xuXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGguYXRhbjIodGhpcy5nYW1lLnBsYXllci55IC0gdGhpcy55LCB0aGlzLmdhbWUucGxheWVyLnggLSB0aGlzLngpO1xuXG4gICAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuZGlyZWN0aW9uKSAqIHRoaXMuc3BlZWQgKiBkdDtcblxuXG4gICAgICBpZiAoIXRoaXMuZm9yY2UpIHtcbiAgICAgICAgdGhpcy5zcGVlZCArPSAyNTYgKiBkdDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmIChwbGF5ZXJEaXN0YW5jZSA8IDEwMCkge1xuICAgICAgICB0aGlzLnBva2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEyODtcbiAgICAgIH1cblxuICAgIH1cblxuXG4gICAgaWYgKHRoaXMubGlmZXRpbWUgPiAwLjUpIHtcbiAgICAgIGlmIChwbGF5ZXJEaXN0YW5jZSA8IDMyKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmxpZmV0aW1lID4gdGhpcy5kdXJhdGlvbikgdGhpcy5nYW1lLnJlbW92ZSh0aGlzKTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAuY3R4LnNhdmUoKTtcblxuICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGFwcC5jdHgucm90YXRlKHRoaXMubGlmZXRpbWUpO1xuXG4gICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgIHRoaXMuc3ByaXRlWzBdLCB0aGlzLnNwcml0ZVsxXSwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdLCAtdGhpcy5zcHJpdGVbMl0gLyAyLCAtdGhpcy5zcHJpdGVbM10gLyAyLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM11cbiAgICApO1xuXG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgfVxuXG59OyIsIkVOR0lORS5CdXR0b24gPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgVXRpbHMuZXh0ZW5kKHRoaXMsIHtcblxuICAgIHJhZGl1czogMzJcblxuICB9LCBhcmdzKTtcblxuXG4gIHRoaXMuaW1hZ2UgPSBhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0O1xuXG59O1xuXG5FTkdJTkUuQnV0dG9uLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLkJ1dHRvbixcblxuICB0eXBlOiBcImJ1dHRvblwiLFxuXG4gIHBvaW50ZXJlbnRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAudHdlZW4odGhpcykuZGlzY2FyZCgpLnRvKHtcbiAgICAgIHJhZGl1czogMjRcbiAgICB9LCAwLjEpLnRvKHtcbiAgICAgIHJhZGl1czogMzJcbiAgICB9LCAwLjIsIFwib3V0U2luZVwiKTtcblxuICB9LFxuXG4gIGFjdGlvbjogZnVuY3Rpb24oKSB7XG5cblxuICAgIGFwcC5zb3VuZC5wbGF5KFwibGFzZXJcIik7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbigpIHtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblxuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgdmFyIHNjYWxlID0gdGhpcy5yYWRpdXMgLyAzMjtcblxuICAgICAgYXBwLmN0eC5zYXZlKCk7XG5cbiAgICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGFwcC5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsXG4gICAgICAgIHRoaXMuc3ByaXRlWzBdLCB0aGlzLnNwcml0ZVsxXSwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdLCAtdGhpcy5zcHJpdGVbMl0gLyAyLCAtdGhpcy5zcHJpdGVbM10gLyAyLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM11cbiAgICAgICk7XG5cbiAgICAgIGFwcC5jdHgucmVzdG9yZSgpO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY291bnQpIHtcbiAgICAgIGFwcC5sYXllci50ZXh0QWxpZ24oXCJjZW50ZXJcIikuZm9udChcImJvbGQgMzJweCBBcmlhbFwiKS5maWxsU3R5bGUodGhpcy5jb2xvcikuZmlsbFRleHQodGhpcy5jb3VudCwgdGhpcy54LCB0aGlzLnkgLSB0aGlzLnJhZGl1cyAtIDQ4KTtcbiAgICB9XG5cbiAgfVxuXG59OyIsIkVOR0lORS5QYXJ0aWNsZSA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywge1xuICAgIHJhZGl1czogNFxuICB9LCBhcmdzKVxuXG4gIHRoaXMuc3ByaXRlSW5kZXggPSAwO1xuXG4gIHRoaXMucmVzZXQoKTtcblxufTtcblxuRU5HSU5FLlBhcnRpY2xlLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHVyY3RvcjogRU5HSU5FLlBhcnRpY2xlLFxuXG4gIHNwcml0ZXM6IFtcbiAgICBbMjYwLCAxNTIsIDYsIDZdLFxuICAgIFsyNjAsIDE1OSwgNSwgNV0sXG4gICAgWzI2MCwgMTY1LCA1LCA1XSxcbiAgICBbMjYxLCAxNzEsIDMsIDNdXG4gIF0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5saWZldGltZSA9IDA7XG4gICAgdGhpcy5kdXJhdGlvbiA9IDAuNTtcblxuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nYW1lLnJhbmRvbSgpICogNi4yODtcbiAgICB0aGlzLnNwZWVkID0gMzIgKyB0aGlzLmdhbWUucmFuZG9tKCkgKiAxMjg7XG5cbiAgICB0aGlzLnNwZWVkICo9IDM7XG5cbiAgICB0aGlzLmRhbXBpbmcgPSB0aGlzLnNwZWVkICogMjtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGR0O1xuXG4gICAgdGhpcy54ICs9IE1hdGguY29zKHRoaXMuZGlyZWN0aW9uKSAqIHRoaXMuc3BlZWQgKiBkdDtcbiAgICB0aGlzLnkgKz0gTWF0aC5zaW4odGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgubWF4KDAsIHRoaXMuc3BlZWQgLSB0aGlzLmRhbXBpbmcgKiBkdCk7XG5cbiAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5taW4odGhpcy5saWZldGltZSAvIHRoaXMuZHVyYXRpb24sIDEuMCk7XG5cbiAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxLjApIHtcbiAgICAgIHRoaXMueCA9IDA7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5zcHJpdGVJbmRleCA9IHRoaXMucHJvZ3Jlc3MgKiB0aGlzLnNwcml0ZXMubGVuZ3RoIHwgMDtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblxuICAgIC8vIHZhciBzID0gdGhpcy5zaXplICogKDEgLSB0aGlzLnByb2dyZXNzKTtcblxuICAgIC8vIGlmIChzID4gMCkge1xuICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEuMCkgcmV0dXJuO1xuXG4gICAgdGhpcy5pbWFnZSA9IGFwcC5nZXRDb2xvcmVkSW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCwgdGhpcy5jb2xvcik7XG5cbiAgICAvLyBhcHAuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgLy8gYXBwLmN0eC5maWxsUmVjdCh0aGlzLnggLSBzIC8gMiwgdGhpcy55IC0gcyAvIDIsIHMsIHMpXG5cbiAgICB2YXIgc3ByaXRlID0gdGhpcy5zcHJpdGVzW3RoaXMuc3ByaXRlSW5kZXhdO1xuXG4gICAgYXBwLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgc3ByaXRlWzBdLCBzcHJpdGVbMV0sIHNwcml0ZVsyXSwgc3ByaXRlWzNdLFxuICAgICAgdGhpcy54LCB0aGlzLnksIHNwcml0ZVsyXSwgc3ByaXRlWzNdKVxuXG4gICAgLy8gfVxuXG4gIH1cblxufTsiLCJFTkdJTkUuUGxhbmV0ID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG5cbiAgICByYWRpdXM6IDQ4LFxuICAgIGhwOiAyMCxcbiAgICBtYXg6IDEwMCxcbiAgICBzaGlwczogMCxcbiAgICByZXBhaXJQcm9ncmVzczogMCxcbiAgICByZXBhaXJUaW1lOiA0LFxuICAgIGFzdGVyb2lkc1NoaWVsZDogdHJ1ZSxcbiAgICBzaGllbGRTY2FsZTogMC4wXG5cbiAgfSwgYXJncyk7XG5cbiAgdGhpcy5tYXhIUCA9IHRoaXMuaHA7XG5cbiAgdGhpcy5saWZldGltZSA9IDA7XG5cbn07XG5cbkVOR0lORS5QbGFuZXQucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBFTkdJTkUuUGxhbmV0LFxuXG4gIHR5cGU6IFwicGxhbmV0XCIsXG5cbiAgaG92ZXJhYmxlOiBcInJlcGFpclwiLFxuXG4gIHNwcml0ZTogWzIwMSwgMjE1LCAxMDQsIDEwNF0sXG5cbiAgc2hpZWxkU3ByaXRlOiBbNDkyLCAzMjAsIDEyNCwgMTI0XSxcblxuICByZXBhaXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5ocCsrO1xuXG4gIH0sXG5cbiAgYXBwbHlEYW1hZ2U6IGZ1bmN0aW9uKGRhbWFnZSwgYXR0YWNrZXIpIHtcblxuICAgIHRoaXMuZ2FtZS5zaGFrZSgpO1xuXG4gICAgdGhpcy5ocC0tO1xuXG4gICAgaWYgKHRoaXMuaHAgPD0gMCAmJiAhdGhpcy5nYW1lLmJlbmNobWFyaykgdGhpcy5nYW1lLmdhbWVvdmVyKCk7XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwicGxhbmV0SGl0XCIpO1xuXG4gICAgdGhpcy5nYW1lLmFkZChFTkdJTkUuQ2lyY2xlRXhwbG9zaW9uLCB7XG4gICAgICB4OiBhdHRhY2tlci54LFxuICAgICAgeTogYXR0YWNrZXIueSxcbiAgICAgIGNvbG9yOiBcIiNhMDRcIixcbiAgICAgIHJhZGl1czogMzJcbiAgICB9KVxuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICAgIHRoaXMubGlmZXRpbWUgKz0gZHQ7XG5cbiAgICB2YXIgcHJldlNoaWVsZCA9IHRoaXMuYXN0ZXJvaWRzU2hpZWxkO1xuICAgIHRoaXMuYXN0ZXJvaWRzU2hpZWxkID0gdGhpcy5nYW1lLmNoZWNrQm9udXMoXCJzaGllbGRcIik7XG5cbiAgICBpZiAocHJldlNoaWVsZCAhPT0gdGhpcy5hc3Rlcm9pZHNTaGllbGQpIHtcblxuICAgICAgYXBwLnR3ZWVuKHRoaXMpLmRpc2NhcmQoKS50byh7XG4gICAgICAgIHNoaWVsZFNjYWxlOiB0aGlzLmFzdGVyb2lkc1NoaWVsZCA/IDEuMCA6IDAuMFxuICAgICAgfSwgMC41LCBcIm91dEVsYXN0aWNcIik7XG5cbiAgICB9XG5cbiAgfSxcblxuICBzcGF3blNoaXA6IGZ1bmN0aW9uKHR5cGUpIHtcblxuICAgIHZhciBzaGlwID0gdGhpcy5nYW1lLmFkZChFTkdJTkUuU2hpcCwge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIHRlYW06IDEsXG4gICAgICBwbGFuZXQ6IHRoaXNcbiAgICB9KTtcblxuICAgIHNoaXAuZm9yY2VEaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogNjtcbiAgICBzaGlwLmZvcmNlID0gMjAwO1xuXG4gICAgdGhpcy5zaGlwcysrO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5sYXllci5hbGlnbigwLjUsIDAuNSk7XG4gICAgYXBwLmxheWVyLmRyYXdSZWdpb24oYXBwLmltYWdlcy5zcHJpdGVzaGVldCwgdGhpcy5zcHJpdGUsIHRoaXMueCwgdGhpcy55KTtcbiAgICBhcHAubGF5ZXIudGV4dEFsaWduKFwiY2VudGVyXCIpLmZvbnQoXCJib2xkIDQ4cHggQXJpYWxcIikuZmlsbFN0eWxlKFwiI2ZmZlwiKS5maWxsVGV4dCh0aGlzLmhwLCB0aGlzLngsIHRoaXMueSAtIDI0KTtcbiAgICBhcHAubGF5ZXIucmVhbGlnbigpO1xuXG4gICAgaWYgKHRoaXMuYXN0ZXJvaWRzU2hpZWxkICYmIHRoaXMuc2hpZWxkU2NhbGUgPiAwKSB7XG4gICAgICB2YXIgc2NhbGUgPSB0aGlzLnNoaWVsZFNjYWxlO1xuICAgICAgYXBwLmN0eC5zYXZlKCk7XG4gICAgICBhcHAuY3R4Lmdsb2JhbEFscGhhID0gMC41O1xuICAgICAgYXBwLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImxpZ2h0ZXJcIjtcbiAgICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGFwcC5jdHguc2NhbGUoc2NhbGUsIHNjYWxlKTtcbiAgICAgIGFwcC5jdHguZHJhd0ltYWdlKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsIHRoaXMuc2hpZWxkU3ByaXRlWzBdLCB0aGlzLnNoaWVsZFNwcml0ZVsxXSwgdGhpcy5zaGllbGRTcHJpdGVbMl0sIHRoaXMuc2hpZWxkU3ByaXRlWzNdLCAtdGhpcy5zaGllbGRTcHJpdGVbMl0gLyAyLCAtdGhpcy5zaGllbGRTcHJpdGVbM10gLyAyLCB0aGlzLnNoaWVsZFNwcml0ZVsyXSwgdGhpcy5zaGllbGRTcHJpdGVbM10pO1xuICAgICAgYXBwLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gIH1cblxufTsiLCIvKiBUaGUgY291bnRlciBpbiB0aGUgdG9wLWxlZnQgY29ybmVyIGlzOiBcblxuQVZFUkFHRSBGUkFNRSBUSU1FIHwgIERFVklDRSAgUE9XRVIgICB8IEVOVElUSUVTIENPVU5UXG4gICAgICAgICAgICAgICAgICAgICAoYmFzZWxpbmVGYWN0b3IpXG4qL1xuXG5cbi8qIFJlZmVyZW5jZSBiYXNlbGluZSB0byBjYWxjdWxhdGUgZGV2aWNlIHBvd2VyICovXG5cblJFRkVSRU5DRV9CQVNFTElORSA9IDM3ODtcblxuLyogUmVmZXJlbmNlIGZyYW1lIHRpbWUgdG8gdGVsbCBob3cgd2VsbCB0aGUgZ2FtZSBoYXMgYmVlbiBvcHRpbWl6ZWQgKi9cbi8qIE1ha2UgaXQgaGlnaGVyIHRvIGdpdmUgdXNlciBtb3JlIENQVSBwb3dlciAqL1xuXG5SRUZFUkVOQ0VfRlJBTUVfVElNRSA9IDAuODtcblxuLyogSG93IG11Y2ggb3B0aW1pemF0aW9uIHZhbHVlIG9uZSBzaGlwIGRyYWlucyAqL1xuXG5TSElQX0NQVV9DT1NUID0gMC4xO1xuXG5FTkdJTkUuR2FtZSA9IHtcblxuICBib251c2VzOiB7XG5cbiAgICBtYWduZXQ6IDAuMSxcbiAgICBsYXNlcjogMC4yLFxuICAgIHNoaWVsZDogMC40XG5cbiAgfSxcblxuICBjaGVja0JvbnVzOiBmdW5jdGlvbihrZXkpIHtcblxuICAgIHJldHVybiB0aGlzLmNwdVJhdGlvID49IHRoaXMuYm9udXNlc1trZXldO1xuXG4gIH0sXG5cbiAgZXhwbG9zaW9uOiBmdW5jdGlvbih4LCB5LCBjb3VudCwgY29sb3IpIHtcblxuICAgIGlmICghdGhpcy5wYXJ0aWNsZXNQb29sKSB7XG5cbiAgICAgIHRoaXMucGFydGljbGVzUG9vbCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIHBhcnRpY2xlID0gdGhpcy5hZGQoRU5HSU5FLlBhcnRpY2xlLCB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFydGljbGVzUG9vbC5wdXNoKHBhcnRpY2xlKTtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLnBhcnRpY2xlSW5kZXggPSAwO1xuXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gY291bnQ7IGkrKykge1xuXG4gICAgICBpZiAoKyt0aGlzLnBhcnRpY2xlSW5kZXggPj0gdGhpcy5wYXJ0aWNsZXNQb29sLmxlbmd0aCkgdGhpcy5wYXJ0aWNsZUluZGV4ID0gMDs7XG5cbiAgICAgIHZhciBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzUG9vbFt0aGlzLnBhcnRpY2xlSW5kZXhdO1xuXG4gICAgICBwYXJ0aWNsZS54ID0geDtcbiAgICAgIHBhcnRpY2xlLnkgPSB5O1xuICAgICAgcGFydGljbGUuY29sb3IgPSBjb2xvcjtcblxuICAgICAgcGFydGljbGUucmVzZXQoKTtcblxuICAgIH1cblxuICB9LFxuXG4gIHJhbmRvbTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gdGhpcy5iZW5jaG1hcmsgPyAwLjUgOiBNYXRoLnJhbmRvbSgpO1xuXG4gIH0sXG5cbiAgYWRkOiBmdW5jdGlvbihjb25zdHJ1Y3RvciwgYXJncykge1xuXG4gICAgYXJncyA9IGFyZ3MgfHwge307XG5cbiAgICBhcmdzLmdhbWUgPSB0aGlzO1xuXG4gICAgdmFyIGVudGl0eSA9IG5ldyBjb25zdHJ1Y3RvcihhcmdzKTtcblxuICAgIHRoaXMuZW50aXRpZXMucHVzaChlbnRpdHkpO1xuXG4gICAgcmV0dXJuIGVudGl0eTtcblxuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24oZW50aXR5KSB7XG5cbiAgICBlbnRpdHkuZGVhZCA9IHRydWU7XG5cbiAgfSxcblxuICBlbnRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhc2VsaW5lXCIsIGFwcC5iYXNlbGluZSk7XG5cbiAgICBpZiAoIXRoaXMuYmVuY2htYXJrKSBhcHAubXVzaWMucGxheShcImR1c3RcIikudm9sdW1lKDAuNSkubG9vcCgpO1xuXG4gICAgdGhpcy5ncmFkaWVudCA9IGFwcC5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoYXBwLmNlbnRlci54LCBhcHAuY2VudGVyLnksIDAsIGFwcC5jZW50ZXIueCwgYXBwLmNlbnRlci55LCBhcHAuY2VudGVyLngpO1xuXG4gICAgdGhpcy5ncmFkaWVudC5hZGRDb2xvclN0b3AoMC4wLCBcInRyYW5zcGFyZW50XCIpO1xuICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEuMCwgXCIjMDAwXCIpO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuXG4gIH0sXG5cbiAgZ2V0U2NhbGU6IGZ1bmN0aW9uKGVudGl0eSkge1xuXG4gICAgcmV0dXJuIDEgLSBNYXRoLm1pbigxLjAsIFV0aWxzLmRpc3RhbmNlKGVudGl0eSwgYXBwLmNlbnRlcikgLyAoYXBwLndpZHRoICogMC41KSkgKiAwLjc1O1xuXG4gIH0sXG5cbiAgc3Bhd25Bc3Rlcm9pZDogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgdmFyIHJhZGl1cyA9IGFwcC53aWR0aCAvIDI7XG4gICAgdmFyIG94ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgIHZhciBveSA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcblxuICAgIHRoaXMuYWRkKEVOR0lORS5Bc3Rlcm9pZCwge1xuICAgICAgeDogYXBwLmNlbnRlci54ICsgb3gsXG4gICAgICB5OiBhcHAuY2VudGVyLnkgKyBveVxuICAgIH0pO1xuXG4gIH0sXG5cbiAgcmVzZXRWaXJ0dWFsUG9vbDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnZpcnR1YWxQb29sID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG5cbiAgICAgIHRoaXMudmlydHVhbFBvb2wucHVzaChuZXcgRU5HSU5FLlNoaXAoe1xuICAgICAgICB4OiBNYXRoLnJhbmRvbSgpICogYXBwLndpZHRoLFxuICAgICAgICB5OiBNYXRoLnJhbmRvbSgpICogYXBwLmhlaWdodCxcbiAgICAgICAgZ2FtZTogdGhpcyxcbiAgICAgICAgdGVhbTogaSAlIDJcbiAgICAgIH0pKTtcblxuICAgIH1cblxuICB9LFxuXG4gIGFkZE9wdGltaXphdGlvbldlaWdodDogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm47XG5cbiAgICB2YXIgc2hpcCA9IHRoaXMudmlydHVhbFBvb2xbMF07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSBVdGlscy5uZWFyZXN0KGFwcC5jZW50ZXIsIHRoaXMudmlydHVhbFBvb2wpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1MDA7IGkrKykgc2hpcC5nZXRUYXJnZXQodGhpcy52aXJ0dWFsUG9vbCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1MDAwICogNTsgaSsrKSBzaGlwLm1vdmUoMC4xKTtcblxuICB9LFxuXG4gIHJlc2V0OiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuc3Bhd25UaW1lb3V0ID0gMDtcbiAgICB0aGlzLmNwdVVzYWdlID0gMDtcblxuICAgIHRoaXMudXBncmFkZXMgPSB7XG5cbiAgICAgIHNwZWVkOiAxLFxuICAgICAgZGFtYWdlOiAxLFxuICAgICAgbGlmZTogMVxuXG4gICAgfTtcblxuICAgIHRoaXMucmVzZXRWaXJ0dWFsUG9vbCgpO1xuXG4gICAgZGVsZXRlIHRoaXMucGFydGljbGVzUG9vbDtcblxuICAgIHRoaXMuc2NvcmUgPSAwO1xuXG4gICAgdGhpcy53YXZlID0gMDtcblxuICAgIHRoaXMudG9vbHRpcCA9IGZhbHNlO1xuXG4gICAgdGhpcy5lbnRpdGllcyA9IFtdO1xuXG4gICAgdGhpcy5wbGF5ZXJQbGFuZXQgPSB0aGlzLmFkZChFTkdJTkUuUGxhbmV0LCB7XG4gICAgICB4OiBhcHAuY2VudGVyLngsXG4gICAgICB5OiBhcHAuY2VudGVyLnksXG4gICAgICB0ZWFtOiAxXG4gICAgfSk7XG5cbiAgICB0aGlzLnBsYXllciA9IG5ldyBFTkdJTkUuQ3Vyc29yKHRoaXMsIDEsIHRoaXMucGxheWVyUGxhbmV0KTtcbiAgICB0aGlzLnBsYXllci54ID0gYXBwLmNlbnRlci54O1xuICAgIHRoaXMucGxheWVyLnkgPSBhcHAuY2VudGVyLnk7XG5cbiAgICB0aGlzLnN0YXJzID0gbmV3IEVOR0lORS5CYWNrZ3JvdW5kU3RhcnModGhpcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXG4gICAgICB0aGlzLnNwYXduQXN0ZXJvaWQoKTtcblxuICAgIH1cblxuICAgIHZhciBidXR0b25zID0gW1wic3BlZWRcIiwgXCJsaWZlXCIsIFwiZGFtYWdlXCJdO1xuXG4gICAgdGhpcy5idXR0b25zID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGtleSA9IGJ1dHRvbnNbaV07XG5cbiAgICAgIHRoaXMuYnV0dG9uc1trZXldID0gdGhpcy5hZGQoRU5HSU5FLkJ1dHRvbiwge1xuICAgICAgICBjb2xvcjogZGVmcy50ZWFtQ29sb3JbMV0sXG4gICAgICAgIHg6IGFwcC5jZW50ZXIueCAtIDE2MCArIGkgKiAxMDAsXG4gICAgICAgIHk6IGFwcC5oZWlnaHQgLSAxMDAsXG4gICAgICAgIHNwcml0ZTogZGVmcy5idXR0b25zW2tleV0sXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgaG92ZXJhYmxlOiBcImJ1aWxkXCIsXG4gICAgICAgIHRvb2x0aXA6IGRlZnMudG9vbHRpcHNba2V5XVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLm5leHRXYXZlKCk7XG5cblxuICB9LFxuXG4gIGNwdUhpc3Rvcnk6IFtdLFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICB2YXIgYmVmb3JlID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAvKiBzbG93IG1vdGlvbiAtIHdoZW4geW91IGNvbGxlY3QgZnJlZXplIHBvd2VydXAgKi9cblxuICAgIHRoaXMudGltZUZhY3RvciA9IDEuMDtcblxuICAgIGlmICh0aGlzLmZyZWV6ZUxpZmVzcGFuID4gMCkge1xuXG4gICAgICB0aGlzLmZyZWV6ZUxpZmVzcGFuIC09IGR0O1xuICAgICAgdGhpcy50aW1lRmFjdG9yID0gMC4xO1xuXG4gICAgfVxuXG4gICAgLyogdXBkYXRlIHRoZSBnYW1lIDEwIHRpbWVzIHRvIG1hZ25pdHVkZSByZXN1bHRzIGluIHByb2ZpbGVyICovXG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDEwOyBqKyspIHtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIGVudGl0eSA9IHRoaXMuZW50aXRpZXNbaV07XG5cbiAgICAgICAgZW50aXR5LnN0ZXAoZHQgLyAxMCk7XG5cbiAgICAgICAgaWYgKGVudGl0eS5kZWFkKSB0aGlzLmVudGl0aWVzLnNwbGljZShpLS0sIDEpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvKiBtZWFzdXJlIG9wdGltaXphdGlvbiAqL1xuXG4gICAgLyogSXQncyB0aGUgYXZlcmFnZSBvZiAxMDAgZnJhbWUgdGltZXMgKi9cblxuICAgIC8qIFxuXG4gICAgICBiYXNlbGluZUZhY3RvciAgICAgIC0gYmFzZWxpbmUgdnMgcmVmZXJlbmNlIHNhbXBsZSB0byBnZXQgZGV2aWNlIHBvd2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgdGhlIGRldmljZSBpcyBvdmVyLXBvd2VyZWQgd2UgYXJ0aWZpY2lhbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWtlIGZyYW1lVGltZSBoaWdoZXIgdG8gbWFrZSBpdCBtb3JlIGZhaXIgYW1vbmcgdGhlIHBsYXllcnNcblxuICAgICAgb3B0aW1pemF0aW9uUmF0aW5nICAtIHJlZmVyZW5jZSBmcmFtZSB0aW1lIGRpdmlkZWQgYnkgKGN1cnJlbnQpIGF2ZXJhZ2UgZnJhbWUgdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRpY2FwZWQgYnkgYmFzZWxpbmVGYWN0b3IgLSB0aGlzIGdpdmVzIGEgZmFjdG9yIG9mIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdyB3ZWxsIHVzZXIgb3B0aW1pemVkIHRoZSBnYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWtlIFJFRkVSRU5DRV9GUkFNRV9USU1FIGhpZ2hlciB0byBnaXZlIHBsYXllciBNT1JFIGNwdSBvdXRwdXRcblxuICAgICovXG5cbiAgICB2YXIgZnJhbWVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBiZWZvcmU7XG5cbiAgICB0aGlzLmNwdUhpc3RvcnkucHVzaChmcmFtZVRpbWUpO1xuXG4gICAgaWYgKHRoaXMuY3B1SGlzdG9yeS5sZW5ndGggPiAxMDApIHRoaXMuY3B1SGlzdG9yeS5zaGlmdCgpO1xuXG4gICAgdGhpcy5iYXNlbGluZUZhY3RvciA9IGFwcC5iYXNlbGluZSAvIFJFRkVSRU5DRV9CQVNFTElORTtcblxuICAgIHRoaXMuYXZlcmFnZUZyYW1lVGltZSA9IHRoaXMuYXZlcmFnZSh0aGlzLmNwdUhpc3RvcnkpO1xuXG4gICAgdGhpcy5vcHRpbWl6YXRpb25SYXRpbmcgPSBSRUZFUkVOQ0VfRlJBTUVfVElNRSAvICh0aGlzLmJhc2VsaW5lRmFjdG9yICogdGhpcy5hdmVyYWdlRnJhbWVUaW1lKTtcblxuICAgIHRoaXMucGxheWVyLnN0ZXAoZHQpO1xuXG4gICAgLyogdXNlIG9wdGltaXphdGlvbiByZXN1bHRzIHRvIGFmZmVjdCB0aGUgZ2FtZSAqL1xuXG4gICAgdGhpcy5hcHBseU9wdGltaXphdGlvbihkdCk7XG5cblxuICB9LFxuXG4gIGF2ZXJhZ2U6IGZ1bmN0aW9uKGFycmF5KSB7XG5cbiAgICBpZiAoIWFycmF5Lmxlbmd0aCkgcmV0dXJuIDA7XG5cbiAgICB2YXIgc3VtID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN1bSArPSBhcnJheVtpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VtIC8gYXJyYXkubGVuZ3RoO1xuXG4gIH0sXG5cbiAgYXBwbHlPcHRpbWl6YXRpb246IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICB2YXIgY3B1VXNhZ2UgPSAwO1xuXG4gICAgLyogY2FsY3VsYXRlIChhcnRpZmljaWFsKSBjcHVVc2FnZSBvZiBzaGlwcyBcbiAgICAgICBpZiBjcHVVc2FnZSBpcyBncmVhdGVyIHRoYW4gb3B0aW1pemF0aW9uUmF0aW5nXG4gICAgICAgZnJlZXplIGEgc2hpcFxuICAgICovXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGVudGl0eSA9IHRoaXMuZW50aXRpZXNbaV07XG5cbiAgICAgIGlmICghKGVudGl0eSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwKSkgY29udGludWU7XG4gICAgICBpZiAoIWVudGl0eS50ZWFtKSBjb250aW51ZTtcbiAgICAgIGlmIChlbnRpdHkuZnJlZSkgY29udGludWU7XG5cbiAgICAgIGNwdVVzYWdlICs9IFNISVBfQ1BVX0NPU1Q7XG5cbiAgICAgIGlmIChjcHVVc2FnZSA8IHRoaXMub3B0aW1pemF0aW9uUmF0aW5nKSB7XG5cbiAgICAgICAgZW50aXR5LmZyb3plbiA9IGZhbHNlO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGVudGl0eS5mcm96ZW4gPSB0cnVlO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvKiB0d2VlbiBjcHVVc2FnZSBpbnN0ZWFkIG9mIHNldHRpbmcgaXQgaW5zdGFudGx5IChsZXNzIGppdHRlcmluZykgKi9cblxuICAgIHRoaXMuY3B1VXNhZ2UgPSBVdGlscy5tb3ZlVG8odGhpcy5jcHVVc2FnZSwgY3B1VXNhZ2UsIGR0ICogMC4yNSk7XG5cbiAgICAvKiB0aGF0J3MgdGhlIHZhbHVlIDAuMCAtIDEuMCB0aGF0IGNvcmVzcG9uZHMgd2l0aCB0aGUgeWVsbG93IHBvd2VyIGJhciAqL1xuXG4gICAgdGhpcy5jcHVSYXRpbyA9IDEgLSBNYXRoLm1pbigxLjAsIHRoaXMuY3B1VXNhZ2UgLyB0aGlzLm9wdGltaXphdGlvblJhdGluZyk7XG5cbiAgICAvKiBzcGF3biBzaGlwcyBpZiB0aGVyZSBpcyBlbm91Z2ggcG93ZXIgKi9cblxuICAgIGlmICgodGhpcy5zcGF3blRpbWVvdXQgLT0gZHQpIDw9IDApIHtcblxuICAgICAgdGhpcy5zcGF3blRpbWVvdXQgPSAwLjU7XG5cbiAgICAgIGlmICh0aGlzLmNwdVJhdGlvID4gMC41KSB0aGlzLnBsYXllclBsYW5ldC5zcGF3blNoaXAoXCJmaWdodGVyXCIpO1xuXG4gICAgfVxuXG5cbiAgfSxcblxuICBzaGFrZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnNoYWtlTGlmZXNwYW4gPSAwLjQ7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICBpZiAoIXRoaXMuYXZlcmFnZUZyYW1lVGltZSkgcmV0dXJuO1xuXG4gICAgYXBwLmN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICAgIGFwcC5jdHguc2F2ZSgpO1xuXG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiMxNjE2MzBcIjtcbiAgICBhcHAuY3R4LmZpbGxSZWN0KDAsIDAsIGFwcC53aWR0aCwgYXBwLmhlaWdodCk7XG5cbiAgICAvLyBhcHAuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XG4gICAgLy9hcHAuY3R4LmZpbGxSZWN0KDAsIDAsIGFwcC53aWR0aCwgYXBwLmhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5zaGFrZUxpZmVzcGFuID4gMCkge1xuICAgICAgdGhpcy5zaGFrZUxpZmVzcGFuIC09IGR0O1xuICAgICAgdmFyIGNoYW9zID0gVXRpbHMucmFuZG9tKC02LCA2KTtcbiAgICAgIGFwcC5jdHgudHJhbnNsYXRlKGNoYW9zLCBjaGFvcylcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJzLnJlbmRlcihkdCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdGhpcy5lbnRpdGllc1tpXS5yZW5kZXIoKTtcblxuICAgIH1cblxuICAgIHRoaXMucGxheWVyLnJlbmRlcigpO1xuXG4gICAgdGhpcy5yZW5kZXJUb29sdGlwKCk7XG5cbiAgICBhcHAuY3R4LnRleHRBbGlnbiA9IFwicmlnaHRcIjtcbiAgICBhcHAuY3R4LmZvbnQgPSBcImJvbGQgMTZweCBBcmlhbFwiO1xuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgYXBwLmN0eC5maWxsVGV4dChcIlNDT1JFOiBcIiArIHRoaXMuc2NvcmUsIGFwcC53aWR0aCAtIDIwLCAyMCk7XG5cblxuICAgIHRoaXMucmVuZGVyQ1BVQmFyKCk7XG4gICAgdGhpcy5yZW5kZXJCb251c2VzKCk7XG5cbiAgICBhcHAuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgYXBwLmN0eC5mb250ID0gXCJib2xkIDY0cHggQXJpYWxcIjtcbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IFwiI2ZhMFwiO1xuICAgIGFwcC5jdHguZmlsbFRleHQodGhpcy5wbGF5ZXIucmVzb3VyY2VzLCBhcHAuY2VudGVyLnggLSAyODAsIGFwcC5oZWlnaHQgLSAxMzApO1xuXG4gICAgYXBwLmN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBhcHAuY3R4LmZvbnQgPSBcImJvbGQgMTZweCBBcmlhbFwiO1xuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgYXBwLmN0eC5maWxsVGV4dCh0aGlzLmF2ZXJhZ2VGcmFtZVRpbWUudG9GaXhlZCgyKSArIFwiIHwgXCIgKyB0aGlzLmJhc2VsaW5lRmFjdG9yLnRvRml4ZWQoMikgKyBcIiB8IFwiICsgdGhpcy5lbnRpdGllcy5sZW5ndGgsIDE2LCAxNik7XG5cbiAgICBhcHAuY3R4LnJlc3RvcmUoKTtcblxuICB9LFxuXG4gIGJhcldpZHRoOiAyMDAsXG5cbiAgcmVuZGVyQ1BVQmFyOiBmdW5jdGlvbigpIHtcblxuXG4gICAgdmFyIHdpZHRoID0gMjAwO1xuICAgIHZhciBjdXJyZW50V2lkdGggPSB0aGlzLmJhcldpZHRoICogdGhpcy5jcHVSYXRpbztcblxuICAgIGFwcC5jdHguZHJhd0ltYWdlKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsXG4gICAgICBkZWZzLmZyb3plblNwcml0ZVswXSwgZGVmcy5mcm96ZW5TcHJpdGVbMV0sIGRlZnMuZnJvemVuU3ByaXRlWzJdLCBkZWZzLmZyb3plblNwcml0ZVszXSxcbiAgICAgIGFwcC5jZW50ZXIueCAtIHRoaXMuYmFyV2lkdGggLyAyIC0gMzIsIDI0LCBkZWZzLmZyb3plblNwcml0ZVsyXSwgZGVmcy5mcm96ZW5TcHJpdGVbM10pO1xuXG5cbiAgICBhcHAuY3R4LnN0cm9rZVN0eWxlID0gXCIjZmEwXCI7XG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiNmYTBcIjtcbiAgICBhcHAuY3R4LmxpbmVXaWR0aCA9IDI7XG5cbiAgICBhcHAuY3R4LnN0cm9rZVJlY3QoYXBwLmNlbnRlci54IC0gdGhpcy5iYXJXaWR0aCAvIDIsIDE2LCB0aGlzLmJhcldpZHRoLCAzMilcbiAgICBhcHAuY3R4LmZpbGxSZWN0KGFwcC5jZW50ZXIueCAtIHRoaXMuYmFyV2lkdGggLyAyLCAxNiwgY3VycmVudFdpZHRoLCAzMilcblxuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgYXBwLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGFwcC5mb250U2l6ZSgxNik7XG4gICAgYXBwLmN0eC5maWxsVGV4dChcIkFWQUlMQUJMRSBDUFVcIiwgYXBwLmNlbnRlci54LCAyNCk7XG5cbiAgICBhcHAuY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmEwXCI7XG5cbiAgICBhcHAuY3R4LmZpbGxUZXh0KFwiKyBcIiArIHRoaXMub3B0aW1pemF0aW9uUmF0aW5nLnRvRml4ZWQoMiksIGFwcC5jZW50ZXIueCArIHdpZHRoIC8gMiArIDE2LCAxNik7XG5cbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IFwiI2M0MFwiO1xuICAgIGFwcC5jdHguZmlsbFRleHQoXCItIFwiICsgdGhpcy5jcHVVc2FnZS50b0ZpeGVkKDIpLCBhcHAuY2VudGVyLnggKyB3aWR0aCAvIDIgKyAxNiwgMzIpO1xuXG4gIH0sXG5cblxuICByZW5kZXJCb251c2VzOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5jdHguc2F2ZSgpO1xuICAgIGFwcC5jdHgudHJhbnNsYXRlKGFwcC5jZW50ZXIueCAtIHRoaXMuYmFyV2lkdGggLyAyLCA1NCk7XG4gICAgYXBwLmN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBhcHAuY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG5cbiAgICB2YXIgaSA9IE9iamVjdC5rZXlzKHRoaXMuYm9udXNlcykubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuYm9udXNlcykge1xuXG4gICAgICB2YXIgdGhyZXNob2xkID0gdGhpcy5ib251c2VzW2tleV07XG5cbiAgICAgIHZhciB4ID0gdGhpcy5iYXJXaWR0aCAqIHRocmVzaG9sZDtcbiAgICAgIHZhciB5ID0gaSAqIDE2O1xuXG4gICAgICBhcHAuY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5jaGVja0JvbnVzKGtleSkgPyAxLjAgOiAwLjQ7XG5cbiAgICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgICBhcHAuY3R4LmZpbGxSZWN0KHgsIDAsIDIsIHkpO1xuICAgICAgYXBwLmN0eC5maWxsUmVjdCh4LCB5LCAxNiwgMik7XG5cbiAgICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgICBhcHAuZm9udFNpemUoMTIpO1xuICAgICAgYXBwLmN0eC5maWxsVGV4dChkZWZzLmJvbnVzZXNba2V5XS50b1VwcGVyQ2FzZSgpLCB4ICsgMjAsIHkgLSA2KTtcblxuICAgICAgaS0tO1xuXG4gICAgfVxuXG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgfSxcblxuXG4gIHJlbmRlclRvb2x0aXA6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHJldHVybjtcblxuICAgIGFwcC5sYXllci50ZXh0QWxpZ24oXCJjZW50ZXJcIikuZmlsbFN0eWxlKFwiI2ZmZlwiKS5mb250KFwiMTZweCBBcmlhbFwiKS50ZXh0V2l0aEJhY2tncm91bmQodGhpcy50b29sdGlwLCBhcHAuY2VudGVyLngsIGFwcC5oZWlnaHQgLSA2NCwgXCIjMDAwXCIsIDE2KTtcblxuICB9LFxuXG4gIHBvaW50ZXJtb3ZlOiBmdW5jdGlvbihlKSB7XG5cbiAgICB0aGlzLnBsYXllci54ID0gZS54O1xuICAgIHRoaXMucGxheWVyLnkgPSBlLnk7XG5cbiAgfSxcblxuICB3cmFwOiBmdW5jdGlvbihlbnRpdHkpIHtcblxuICAgIGlmIChlbnRpdHkueCArIGVudGl0eS5yYWRpdXMgPCAwKSBlbnRpdHkueCA9IGFwcC53aWR0aCArIGVudGl0eS5yYWRpdXM7XG4gICAgaWYgKGVudGl0eS54IC0gZW50aXR5LnJhZGl1cyA+IGFwcC53aWR0aCkgZW50aXR5LnggPSAtZW50aXR5LnJhZGl1cztcbiAgICBpZiAoZW50aXR5LnkgKyBlbnRpdHkucmFkaXVzIDwgMCkgZW50aXR5LnkgPSBhcHAuaGVpZ2h0ICsgZW50aXR5LnJhZGl1cztcbiAgICBpZiAoZW50aXR5LnkgLSBlbnRpdHkucmFkaXVzID4gYXBwLmhlaWdodCkgZW50aXR5LnkgPSAtZW50aXR5LnJhZGl1cztcblxuICB9LFxuXG4gIGtleWRvd246IGZ1bmN0aW9uKGUpIHtcblxuICB9LFxuXG4gIG5leHRXYXZlOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmJlbmNobWFyaykgcmV0dXJuO1xuXG4gICAgdGhpcy53YXZlKys7XG5cbiAgICB0aGlzLnNoaXBzTGVmdCA9IDA7XG5cbiAgICB2YXIgc3RyZWFtc1Bvc2l0aW9ucyA9IFtcbiAgICAgIFswLjAsIDEuMF0sXG4gICAgICBbMC4wLCAwLjVdLFxuICAgICAgWzAuMCwgMC4wXSxcbiAgICAgIFsxLjAsIDAuMF0sXG4gICAgICBbMS4wLCAwLjVdLFxuICAgICAgWzEuMCwgMS4wXVxuICAgIF07XG5cbiAgICB2YXIgZGlmZmljdWx0eSA9IHRoaXMud2F2ZSAvIDIwO1xuXG4gICAgVXRpbHMuc2h1ZmZsZShzdHJlYW1zUG9zaXRpb25zKTtcblxuICAgIHZhciBzdHJlYW1zQ291bnQgPSBNYXRoLm1pbigzLCAxICsgZGlmZmljdWx0eSkgKyAwLjMgfCAwO1xuICAgIHZhciBzaGlwc1BlclN0cmVhbSA9IE1hdGgubWluKDE2LCA0ICsgZGlmZmljdWx0eSAqIDQpIHwgMDtcblxuICAgIHZhciBwb3NzaWJsZVNoaXBzID0gW107XG5cbiAgICBpZiAodGhpcy53YXZlID4gMCkgcG9zc2libGVTaGlwcy5wdXNoKFwiY3JlZXAxXCIpO1xuICAgIGlmICh0aGlzLndhdmUgPiAzKSBwb3NzaWJsZVNoaXBzLnB1c2goXCJjcmVlcDJcIik7XG4gICAgaWYgKHRoaXMud2F2ZSA+IDYpIHBvc3NpYmxlU2hpcHMucHVzaChcImNyZWVwM1wiKTtcbiAgICBpZiAodGhpcy53YXZlID4gMTApIHBvc3NpYmxlU2hpcHMucHVzaChcImNyZWVwNFwiKTtcblxuICAgIGlmICh0aGlzLndhdmUgJSA1ID09PSAwKSBwb3NzaWJsZVNoaXBzID0gW1wiYm9zc1wiXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyZWFtc0NvdW50OyBpKyspIHtcblxuICAgICAgdmFyIHN0cmVhbSA9IHN0cmVhbXNQb3NpdGlvbnMucG9wKCk7XG5cbiAgICAgIHZhciB4ID0gc3RyZWFtWzBdICogYXBwLndpZHRoO1xuICAgICAgdmFyIHkgPSBzdHJlYW1bMV0gKiBhcHAuaGVpZ2h0O1xuXG4gICAgICB2YXIgc2hpcCA9IFV0aWxzLnJhbmRvbShwb3NzaWJsZVNoaXBzKTtcbiAgICAgIHZhciBzaGlwRGF0YSA9IGRlZnMuc2hpcHNbc2hpcF07XG4gICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHkgLSBhcHAuY2VudGVyLnksIHggLSBhcHAuY2VudGVyLngpO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoaXBzUGVyU3RyZWFtOyBqKyspIHtcblxuICAgICAgICB2YXIgZW50aXR5ID0gdGhpcy5hZGQoRU5HSU5FLlNoaXAsIHtcbiAgICAgICAgICB0eXBlOiBzaGlwLFxuICAgICAgICAgIHg6IHggKyBNYXRoLmNvcyhhbmdsZSkgKiBqICogMTAwLFxuICAgICAgICAgIHk6IHkgKyBNYXRoLnNpbihhbmdsZSkgKiBqICogMTAwLFxuICAgICAgICAgIHRlYW06IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaGlwc0xlZnQrKztcblxuICAgICAgICBpZiAoc2hpcERhdGEuYm9zcykge1xuXG4gICAgICAgICAgZW50aXR5LmhwID0gZW50aXR5Lm1heEhwID0gdGhpcy5zY29yZTtcbiAgICAgICAgICBlbnRpdHkuZGFtYWdlID0gdGhpcy5zY29yZSAvIDUwIHwgMDtcbiAgICAgICAgICBlbnRpdHkuc2NhbGUgPSAwLjUgKyB0aGlzLnNjb3JlIC8gMjAwO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfSxcblxuICByZXBhaXJTaGlwczogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgc2hpcHMgPSBVdGlscy5maWx0ZXIodGhpcy5lbnRpdGllcywgZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIChlIGluc3RhbmNlb2YgRU5HSU5FLlNoaXApICYmIGUudGVhbTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgc2hpcHNbaV0ucmVwYWlyKCk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBvbmVuZW15ZGVhdGg6IGZ1bmN0aW9uKHNoaXApIHtcblxuICAgIHRoaXMuc2hpcHNMZWZ0LS07XG5cbiAgICBpZiAodGhpcy5zaGlwc0xlZnQgPD0gMCkgdGhpcy5uZXh0V2F2ZSgpO1xuXG4gIH0sXG5cbiAgcG9pbnRlcmRvd246IGZ1bmN0aW9uKGUpIHtcblxuICAgIHRoaXMuYWRkKEVOR0lORS5NaXNzaWxlLCB7XG4gICAgICB4OiBlLngsXG4gICAgICB5OiBlLnksXG4gICAgICB0ZWFtOiAxXG4gICAgfSk7XG5cbiAgfSxcblxuICBnYW1lb3ZlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBFTkdJTkUuR2FtZW92ZXIuc2NvcmUgPSB0aGlzLnNjb3JlO1xuXG4gICAgYXBwLnNldFN0YXRlKEVOR0lORS5HYW1lb3Zlcik7XG5cblxuICB9XG5cbn07IiwiRU5HSU5FLlBvd2VydXAgPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgVXRpbHMuZXh0ZW5kKHRoaXMsIGFyZ3MpO1xuXG4gIHRoaXMucmFkaXVzID0gMzI7XG5cbiAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogNi4yODtcbiAgdGhpcy5zcGVlZCA9IDMyO1xuXG4gIHRoaXMuZm9yY2VEaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogNi4yODtcbiAgdGhpcy5mb3JjZSA9IDY0ICsgTWF0aC5yYW5kb20oKSAqIDEyODtcblxuICB0aGlzLmZvcmNlICo9IDM7XG4gIHRoaXMuZm9yY2VEYW1waW5nID0gdGhpcy5mb3JjZTtcblxuICB0aGlzLmxpZmV0aW1lID0gMDtcbiAgdGhpcy5kdXJhdGlvbiA9IDEwO1xuXG4gIHZhciBrZXlzID0gW1wicmVwYWlyXCIsIFwibWlzc2lsZXNcIiwgXCJmcmVlemVcIl07XG5cbiAgdmFyIGZyZWVsYW5lcnNDb3VudCA9IFV0aWxzLmZpbHRlcih0aGlzLmdhbWUuZW50aXRpZXMsIGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gZS5mcmVlICYmIGUgaW5zdGFuY2VvZiBFTkdJTkUuU2hpcDtcbiAgfSkubGVuZ3RoO1xuXG4gIGlmIChmcmVlbGFuZXJzQ291bnQgPCAyKSBrZXlzLnB1c2goXCJmcmVlbGFuY2VyXCIpO1xuXG4gIHRoaXMua2V5ID0gVXRpbHMucmFuZG9tKGtleXMpO1xuICB0aGlzLnNwcml0ZSA9IHRoaXMuc3ByaXRlc1t0aGlzLmtleV07XG5cbn07XG5cbkVOR0lORS5Qb3dlcnVwLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHVyY3RvcjogRU5HSU5FLlBvd2VydXAsXG5cbiAgc3ByaXRlOiBbMjE2LCAxNTksIDE0LCAxNF0sXG5cbiAgdHlwZTogXCJwb3dlcnVwXCIsXG5cbiAgc3ByaXRlczoge1xuXG4gICAgXCJyZXBhaXJcIjogWzI0NSwgODksIDIzLCAyNV0sXG4gICAgXCJmcmVlbGFuY2VyXCI6IFsyNzYsIDUxLCAzMiwgMzJdLFxuICAgIFwiZnJlZXplXCI6IFsyNDIsIDExOSwgMTksIDIxXSxcbiAgICBcIm1pc3NpbGVzXCI6IFszMTEsIDEzLCAyOCwgMzJdXG5cbiAgfSxcblxuICBjb2xsZWN0OiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZ2FtZS5leHBsb3Npb24odGhpcy54LCB0aGlzLnksIDE2LCBcIiNmZmZcIik7XG5cbiAgICB0aGlzLmdhbWUucmVtb3ZlKHRoaXMpO1xuXG4gICAgaWYgKCF0aGlzLmdhbWUuYmVuY2htYXJrKSBhcHAuc291bmQucGxheShcImNvaW5cIik7XG5cbiAgICB0aGlzLmdhbWUucGxheWVyLnBva2UoKTtcblxuICAgIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLlRleHRPdXQsIHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIHRleHQ6IHRoaXMua2V5XG4gICAgfSk7XG5cbiAgICBzd2l0Y2ggKHRoaXMua2V5KSB7XG5cbiAgICAgIGNhc2UgXCJmcmVlemVcIjpcblxuICAgICAgICB0aGlzLmdhbWUuZnJlZXplTGlmZXNwYW4gPSA0LjA7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJtaXNzaWxlc1wiOlxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB0aGlzLmdhbWUuYWRkKEVOR0lORS5NaXNzaWxlLCB7XG4gICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgIHk6IHRoaXMueSxcbiAgICAgICAgICB0ZWFtOiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwicmVwYWlyXCI6XG5cbiAgICAgICAgdGhpcy5nYW1lLnJlcGFpclNoaXBzKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgY2FzZSBcImZyZWVsYW5jZXJcIjpcblxuICAgICAgICB2YXIgc2hpcCA9IHRoaXMuZ2FtZS5hZGQoRU5HSU5FLlNoaXAsIHtcbiAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgeTogdGhpcy55LFxuICAgICAgICAgIHR5cGU6IFwiZnJlZWxhbmNlclwiLFxuICAgICAgICAgIHRlYW06IDEsXG4gICAgICAgICAgZnJlZTogdHJ1ZSxcbiAgICAgICAgICBwbGFuZXQ6IHRoaXMuZ2FtZS5wbGF5ZXJQbGFuZXRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hpcC5mb3JjZURpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2O1xuICAgICAgICBzaGlwLmZvcmNlID0gMjAwO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGR0O1xuXG4gICAgdmFyIHBsYXllckRpc3RhbmNlID0gVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy5nYW1lLnBsYXllcik7XG5cbiAgICBpZiAodGhpcy5mb3JjZSkge1xuXG4gICAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5mb3JjZURpcmVjdGlvbikgKiB0aGlzLmZvcmNlICogZHQ7XG4gICAgICB0aGlzLnkgKz0gTWF0aC5zaW4odGhpcy5mb3JjZURpcmVjdGlvbikgKiB0aGlzLmZvcmNlICogZHQ7XG5cbiAgICAgIHRoaXMuZm9yY2UgPSBNYXRoLm1heCgwLCB0aGlzLmZvcmNlIC0gdGhpcy5mb3JjZURhbXBpbmcgKiBkdCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5saWZldGltZSA+IDAuNSkge1xuICAgICAgaWYgKHBsYXllckRpc3RhbmNlIDwgMzIpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0KCk7XG4gICAgICAgIHRoaXMuZ2FtZS5wbGF5ZXIucmVzb3VyY2VzKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGlmZXRpbWUgPiB0aGlzLmR1cmF0aW9uKSB0aGlzLmdhbWUucmVtb3ZlKHRoaXMpO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBsaW5lYXIgPSBhcHAubGlmZXRpbWUgJSAwLjUgLyAwLjU7XG4gICAgdmFyIHNjYWxlID0gMC44ICsgTWF0aC5zaW4oTWF0aC5QSSAqIGxpbmVhcikgKiAwLjQ7XG5cbiAgICBhcHAuY3R4LnNhdmUoKTtcblxuICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGFwcC5jdHguc2NhbGUoc2NhbGUsIHNjYWxlKTtcblxuICAgIGFwcC5jdHguZHJhd0ltYWdlKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsXG4gICAgICB0aGlzLnNwcml0ZVswXSwgdGhpcy5zcHJpdGVbMV0sIHRoaXMuc3ByaXRlWzJdLCB0aGlzLnNwcml0ZVszXSwgLXRoaXMuc3ByaXRlWzJdIC8gMiwgLXRoaXMuc3ByaXRlWzNdIC8gMiwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdXG4gICAgKTtcblxuICAgIGFwcC5jdHgucmVzdG9yZSgpO1xuXG4gIH1cblxufTsiLCJFTkdJTkUuVGV4dE91dCA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywge1xuICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjUpXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGZvbnRTaXplOiAyNCxcbiAgICBzY2FsZVg6IDAsXG4gICAgc2NhbGVZOiAxLjAsXG4gICAgdGV4dDogXCJ2b2lkXCIsXG4gICAgZHVyYXRpb246IDIuMFxuICB9LCBhcmdzKTtcblxuICB2YXIgdGV4dG91dCA9IHRoaXM7XG5cbiAgYXBwLnR3ZWVuKHRoaXMpXG4gICAgLnRvKHtcbiAgICAgIHNjYWxlWDogMS4wXG4gICAgfSwgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIFwib3V0RWxhc3RpY1wiKVxuICAgIC53YWl0KHRoaXMuZHVyYXRpb24gKiAwLjUpXG4gICAgLnRvKHtcbiAgICAgIHNjYWxlWTogMC4wXG4gICAgfSwgdGhpcy5kdXJhdGlvbiAqIDAuMjUsIFwib3V0Q2lyY1wiKVxuICAgIC5vbihcImZpbmlzaFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHRleHRvdXQuZ2FtZS5yZW1vdmUodGV4dG91dCk7XG4gICAgfSk7XG5cbiAgICB0dHQgPSB0aGlzO1xuXG59O1xuXG5FTkdJTkUuVGV4dE91dC5wcm90b3R5cGUgPSB7XG5cbiAgY29uc3R1cmN0b3I6IEVOR0lORS5UZXh0T3V0LFxuXG4gIHNwcml0ZTogWzIxNiwgMTU5LCAxNCwgMTRdLFxuXG4gIHR5cGU6IFwidGV4dG91dFwiLFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCF0aGlzLnNjYWxlWCB8fCAhdGhpcy5zY2FsZVkpIHJldHVybjtcblxuICAgIGFwcC5jdHguc2F2ZSgpO1xuXG4gICAgYXBwLmN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuXG4gICAgYXBwLmZvbnRTaXplKHRoaXMuZm9udFNpemUpO1xuXG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGFwcC5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuICAgIGFwcC5jdHguc2NhbGUodGhpcy5zY2FsZVgsIHRoaXMuc2NhbGVZKTtcbiAgICBhcHAuY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgMCwgMClcblxuICAgIGFwcC5jdHgucmVzdG9yZSgpO1xuXG4gIH1cblxufTsiLCJFTkdJTkUuVHJhaWwgPSBmdW5jdGlvbihwYXJlbnQsIGFyZ3MpIHtcblxuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICBVdGlscy5leHRlbmQodGhpcywge1xuICAgIGNvbG9yOiBcIiMwZmNcIixcbiAgICBwb2ludHM6IFtdLFxuICAgIG1heFBvaW50czogNSxcbiAgICB3aWR0aDogMTAsXG4gICAgbGlmZXRpbWU6IDAsXG4gICAgbGlmZXNwYW46IDAsXG4gICAgcGF1c2VkOiBmYWxzZSxcbiAgICBpbnRlcnZhbDogMC4xNSxcbiAgICBzdHJva2U6IHRydWVcbiAgfSwgYXJncyk7XG5cbn07XG5cbkVOR0lORS5UcmFpbC5wcm90b3R5cGUgPSB7XG5cbiAgekluZGV4OiAyMDAsXG5cbiAgcmVhY3Rpb246IDgsXG5cbiAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5wb2ludHMgPSBbXTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGRlbHRhO1xuXG4gICAgaWYgKFV0aWxzLmludGVydmFsKFwicG9pbnRcIiwgdGhpcy5pbnRlcnZhbCwgdGhpcykpIHtcblxuICAgICAgaWYgKCF0aGlzLnBhdXNlZCkgdGhpcy5wb2ludHMucHVzaCh0aGlzLnBhcmVudC54LCB0aGlzLnBhcmVudC55KTtcblxuICAgICAgaWYgKCAgICAgICAgXG4gICAgICAgICh0aGlzLnBvaW50cy5sZW5ndGggPiB0aGlzLm1heFBvaW50cyAqIDIpIHx8XG4gICAgICAgICh0aGlzLnBhdXNlZCAmJiB0aGlzLnBvaW50cy5sZW5ndGggPiAwKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucG9pbnRzLnNoaWZ0KCk7XG4gICAgICAgIHRoaXMucG9pbnRzLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMl0gPSB0aGlzLnBhcmVudC54O1xuICAgIHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdID0gdGhpcy5wYXJlbnQueTtcblxuICAgIGlmKHRoaXMubGlmZXNwYW4gJiYgdGhpcy5saWZldGltZSA+IHRoaXMubGlmZXNwYW4pIHtcbiAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYodGhpcy5wb2ludHMubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGFwcC5sYXllci5zYXZlKCk7XG4gICAgYXBwLmxheWVyLnN0cm9rZVN0eWxlKHRoaXMuY29sb3IpO1xuICAgIGFwcC5sYXllci5saW5lQ2FwKFwic3F1YXJlXCIpO1xuXG4gICAgLy8gaWYgKCF0aGlzLnN0cm9rZSkgYXBwLmxheWVyLnN0cm9rZVN0eWxlKFwicmdiYSgwLDAsMCwwLjEpXCIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkgKz0gMikge1xuXG4gICAgICB2YXIgcmF0aW8gPSBpIC8gKDIgKiB0aGlzLm1heFBvaW50cyk7XG4gICAgICB2YXIgcHggPSB0aGlzLnBvaW50c1tpIC0gMl07XG4gICAgICB2YXIgcHkgPSB0aGlzLnBvaW50c1tpIC0gMV07XG4gICAgICB2YXIgbnggPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgIHZhciBueSA9IHRoaXMucG9pbnRzW2kgKyAxXTtcbiAgICAgIGFwcC5sYXllci5iZWdpblBhdGgoKTtcbiAgICAgIGFwcC5sYXllci5tb3ZlVG8ocHggfCAwLCBweSB8IDApO1xuICAgICAgYXBwLmxheWVyLmxpbmVUbyhueCB8IDAsIG55IHwgMCk7XG4gICAgICBhcHAubGF5ZXIuYShyYXRpbykubGluZVdpZHRoKHJhdGlvICogdGhpcy53aWR0aCk7XG4gICAgICBhcHAubGF5ZXIuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgYXBwLmxheWVyLnJlc3RvcmUoKTtcblxuXG4gIH1cblxufTsiLCJFTkdJTkUuTWlzc2lsZSA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywge1xuICAgIHNwZWVkOiA0MDBcbiAgfSwgYXJncyk7XG5cbiAgdGhpcy5jb2xvciA9IGRlZnMudGVhbUNvbG9yW3RoaXMudGVhbV07XG4gIHRoaXMucmFkaXVzID0gNDtcbiAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuXG4gIHRoaXMuZm9yY2UgPSA0MDA7XG4gIHRoaXMuZm9yY2VEaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogNjtcblxuICB0aGlzLnRyYWlsID0gbmV3IEVOR0lORS5UcmFpbCh0aGlzLCB7XG4gICAgaW50ZXJ2YWw6IDAuMDUsXG4gICAgbWF4UG9pbnRzOiAxMCxcbiAgICBjb2xvcjogXCIjZmEwXCJcbiAgfSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdhbWUuZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgIHZhciBlID0gdGhpcy5nYW1lLmVudGl0aWVzW2ldO1xuXG4gICAgaWYgKCEoZSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwKSkgY29udGludWU7XG5cbiAgICBpZiAoZS5taXNzaWxlVGFyZ2V0KSBjb250aW51ZTtcbiAgICBpZiAoZS50ZWFtID09PSB0aGlzLnRlYW0pIGNvbnRpbnVlO1xuXG4gICAgZS5taXNzaWxlVGFyZ2V0ID0gdGhpcztcbiAgICB0aGlzLnRhcmdldCA9IGU7XG5cbiAgICBicmVhaztcblxuICB9XG5cbn07XG5cbkVOR0lORS5NaXNzaWxlLnByb3RvdHlwZSA9IHtcblxuICBzcHJpdGU6IFsxNDUsIDI1LCA2LCAzOV0sXG5cbiAgY29uc3RydWN0b3I6IEVOR0lORS5NaXNzaWxlLFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICBpZighdGhpcy50YXJnZXQpIHJldHVybiB0aGlzLmRpZSgpO1xuXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLmF0YW4yKHRoaXMudGFyZ2V0LnkgLSB0aGlzLnksIHRoaXMudGFyZ2V0LnggLSB0aGlzLngpO1xuXG4gICAgdGhpcy54ICs9IE1hdGguY29zKHRoaXMuZGlyZWN0aW9uKSAqIHRoaXMuc3BlZWQgKiBkdDtcbiAgICB0aGlzLnkgKz0gTWF0aC5zaW4odGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuXG4gICAgdGhpcy5mb3JjZSA9IE1hdGgubWF4KHRoaXMuZm9yY2UgLSBkdCAqIDQwMCwgMCk7XG5cbiAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5mb3JjZURpcmVjdGlvbikgKiB0aGlzLmZvcmNlICogZHQ7XG4gICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuZm9yY2VEaXJlY3Rpb24pICogdGhpcy5mb3JjZSAqIGR0O1xuXG5cbiAgICBpZiAoVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy50YXJnZXQpIDwgdGhpcy5yYWRpdXMgKyB0aGlzLnRhcmdldC5yYWRpdXMpIHtcblxuICAgICAgdGhpcy5oaXQodGhpcy50YXJnZXQpO1xuXG4gICAgfVxuXG4gICAgdGhpcy50cmFpbC5zdGVwKGR0KTtcblxuXG4gIH0sXG5cbiAgaGl0OiBmdW5jdGlvbih0YXJnZXQpIHtcblxuICAgIHRhcmdldC5hcHBseURhbWFnZSgxMCArIHRoaXMuZ2FtZS5zY29yZSAvIDEwKTtcblxuICAgIHRoaXMuZGllKCk7XG5cbiAgfSxcblxuICBkaWU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5kZWFkID0gdHJ1ZTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnRyYWlsLnJlbmRlcigpO1xuXG4gIH1cblxufTsiLCJFTkdJTkUuR2FtZW92ZXIgPSB7XG5cbiAgc2NvcmU6IDczNyxcbiAgaGlzY29yZTogMjAwLFxuXG4gIHN0YXJPZmY6IFszODIsIDE3NywgMTUsIDE2XSxcbiAgc3Rhck9uOiBbMzM5LCAxNjksIDM3LCAzN10sXG5cbiAgZW50ZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5jdXJyZW50U2NvcmUgPSAwO1xuICAgIHRoaXMuc3RhcnMgPSBbXTtcbiAgICB0aGlzLnNjb3JlT2Zmc2V0ID0gLWFwcC53aWR0aDtcbiAgICB0aGlzLmFjaGlldmVkU3RhcnMgPSBNYXRoLm1pbigxMCwgKHRoaXMuc2NvcmUgLyAxMDAwKSAqIDEwIHwgMCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblxuICAgICAgdGhpcy5zdGFycy5wdXNoKHtcbiAgICAgICAgeDogaSAqIDY0LFxuICAgICAgICB5OiA2NCxcbiAgICAgICAgc2NhbGU6IDBcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFjaGlldmVkU3RhcnM7IGkrKykge1xuXG4gICAgICB2YXIgc3RhciA9IHRoaXMuc3RhcnNbaV07XG5cbiAgICAgIGFwcC50d2VlbihzdGFyKS53YWl0KGkgKiAwLjEpLnRvKHtcbiAgICAgICAgc2NhbGU6IDEuMCxcbiAgICAgICAgeTogNjRcbiAgICAgIH0sIDIuNSwgXCJvdXRFbGFzdGljXCIpO1xuXG4gICAgfVxuXG4gICAgYXBwLnR3ZWVuKHRoaXMpLnRvKHtcblxuICAgICAgY3VycmVudFNjb3JlOiB0aGlzLnNjb3JlLFxuICAgICAgc2NvcmVPZmZzZXQ6IDBcblxuICAgIH0sIDIuNSwgXCJvdXRFbGFzdGljXCIpO1xuXG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbigpIHtcblxuICB9LFxuXG4gIHJlbmRlclN0YXJzOiBmdW5jdGlvbih4LCB5KSB7XG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXG4gICAgICB2YXIgc3RhciA9IHRoaXMuc3RhcnNbaV07XG5cbiAgICAgIGFwcC5sYXllci5zYXZlKCk7XG5cbiAgICAgIGFwcC5sYXllci50cmFuc2xhdGUoc3Rhci54ICsgeCwgc3Rhci55ICsgeSk7XG5cbiAgICAgIGFwcC5sYXllci5hbGlnbigwLjUsIDAuNSk7XG5cbiAgICAgIGFwcC5sYXllci5kcmF3UmVnaW9uKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsIHRoaXMuc3Rhck9mZiwgMCwgMCk7XG5cbiAgICAgIGlmIChzdGFyLnNjYWxlID4gMCkge1xuXG4gICAgICAgIGFwcC5sYXllci5yb3RhdGUoYXBwLmxpZmV0aW1lKTtcbiAgICAgICAgYXBwLmxheWVyLnNjYWxlKHN0YXIuc2NhbGUsIHN0YXIuc2NhbGUpO1xuICAgICAgICBhcHAubGF5ZXIuZHJhd1JlZ2lvbihhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LCB0aGlzLnN0YXJPbiwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIGFwcC5sYXllci5yZXN0b3JlKCk7XG5cbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiMxMzE3MzFcIjtcblxuICAgIGFwcC5jdHguZmlsbFJlY3QoMCwgMCwgYXBwLndpZHRoLCBhcHAuaGVpZ2h0KTtcblxuICAgIGFwcC5jdHguZHJhd0ltYWdlKGFwcC5pbWFnZXMuaGVscCwgYXBwLmNlbnRlci54IC0gYXBwLmltYWdlcy5oZWxwLndpZHRoICogMC41IHwgMCwgYXBwLmhlaWdodCAtIGFwcC5pbWFnZXMuaGVscC5oZWlnaHQgLSAzMilcblxuICAgIHRoaXMucmVuZGVyU3RhcnMoYXBwLmNlbnRlci54IC0gMzIwLCAwKTtcblxuICAgIGFwcC5mb250U2l6ZSg0OCk7XG5cbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IFwiI2ZhMFwiO1xuICAgIGFwcC5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuICAgIGFwcC5jdHguZmlsbFRleHQoXCJTQ09SRTogXCIgKyAodGhpcy5jdXJyZW50U2NvcmUgfCAwKSwgYXBwLmNlbnRlci54ICsgdGhpcy5zY29yZU9mZnNldCwgMTgwKVxuXG4gICAgYXBwLmZvbnRTaXplKDMyKTtcblxuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZjQwXCI7XG4gICAgYXBwLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgYXBwLmN0eC5maWxsVGV4dChcIkhJLVNDT1JFOiBcIiArICh0aGlzLmhpc2NvcmUgfCAwKSwgYXBwLmNlbnRlci54IC0gdGhpcy5zY29yZU9mZnNldCwgMjIwKVxuICB9XG5cbn07IiwiLyogYXBwbGljYXRpb24gKi9cblxudmFyIGFwcCA9IHBsYXlncm91bmQoe1xuXG4gIC8vIHdpZHRoOiAxNDQwLFxuICAvLyBoZWlnaHQ6IDkwMCxcblxuICBwYXRoczoge1xuXG4gICAgLy8gYmFzZTogXCJodHRwOi8vcmV6b25lci5uZXQvcHJpdmF0ZS9tb3ppbGxhL2xpdmUvXCJcblxuICB9LFxuXG4gIHNtb290aGluZzogZmFsc2UsXG5cbiAgZm9udFNpemU6IGZ1bmN0aW9uKHNpemUpIHtcblxuICAgIHJldHVybiB0aGlzLmN0eC5mb250ID0gc2l6ZSArIFwicHggJ1NxdWFkYSBPbmUnXCI7XG5cbiAgfSxcblxuICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5sb2FkSW1hZ2VzKFwic3ByaXRlc2hlZXRcIiwgXCJoZWxwXCIpO1xuICAgIHRoaXMubG9hZFNvdW5kKFwiYWN0aW9uXCIpO1xuXG4gICAgdGhpcy5rZXlib2FyZC5wcmV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zb3VuZCA9IHRoaXMuYXVkaW8uY2hhbm5lbChcInNvdW5kXCIpLnZvbHVtZSgwLjUpO1xuICAgIHRoaXMubXVzaWMgPSB0aGlzLmF1ZGlvLmNoYW5uZWwoXCJtdXNpY1wiKS52b2x1bWUoMC41KTtcblxuICAgIHRoaXMuY3R4ID0gYXBwLmxheWVyLmNvbnRleHQ7XG5cbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAuYmFzZWxpbmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhc2VsaW5lXCIpIHwgMDtcblxuICAgIGlmIChmYWxzZSAmJiBhcHAuYmFzZWxpbmUpIHtcblxuICAgICAgdGhpcy5zZXRTdGF0ZShFTkdJTkUuR2FtZSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gICAgICB0aGlzLnNldFN0YXRlKEVOR0lORS5HYW1lb3Zlcik7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoRU5HSU5FLkJlbmNobWFyayk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBnZXRDb2xvcmVkSW1hZ2U6IGZ1bmN0aW9uKGtleSwgY29sb3IsIG1vZGUpIHtcblxuICAgIGlmICh0eXBlb2YgbW9kZSA9PT0gXCJ1bmRlZmluZWRcIikgbW9kZSA9IFwiaGFyZC1saWdodFwiO1xuXG4gICAgaWYgKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2VzW2tleV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpbWFnZSA9IGtleTtcbiAgICB9XG5cbiAgICB2YXIgc3RvcmVrZXkgPSBrZXkgKyBjb2xvcjtcblxuICAgIGlmICghaW1hZ2Vbc3RvcmVrZXldKSB7XG5cbiAgICAgIGlmICh0eXBlb2YgbWl4ID09PSBcInVuZGVmaW5lZFwiKSBtaXggPSAxO1xuXG4gICAgICB2YXIgYmVsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgYmVsb3dDdHggPSBiZWxvdy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgIGJlbG93LndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICBiZWxvdy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG5cbiAgICAgIGJlbG93Q3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICBiZWxvd0N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1pblwiO1xuICAgICAgYmVsb3dDdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBiZWxvd0N0eC5maWxsUmVjdCgwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcblxuICAgICAgaW1hZ2Vbc3RvcmVrZXldID0gYmVsb3c7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2Vbc3RvcmVrZXldO1xuXG4gIH0sXG5cbiAgcm91bmRBbmdsZTogZnVuY3Rpb24oYW5nbGUpIHtcblxuICAgIHJldHVybiBVdGlscy5ncm91bmQoYW5nbGUgLSBNYXRoLlBJIC8gMTYsIE1hdGguUEkgLyA4KTtcblxuICB9LFxuXG4gIHZpc2liaWxpdHljaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcblxuICAgIGlmIChlID09PSBcImhpZGRlblwiKSB7XG5cbiAgICAgIHRoaXMuc3RvcmVkU291bmRWb2x1bWUgPSB0aGlzLnNvdW5kLnZvbHVtZSgpO1xuICAgICAgdGhpcy5zdG9yZWRNdXNpY1ZvbHVtZSA9IHRoaXMubXVzaWMudm9sdW1lKCk7XG5cbiAgICAgIHRoaXMuc291bmQudm9sdW1lKDApO1xuICAgICAgdGhpcy5tdXNpYy52b2x1bWUoMCk7XG5cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuc291bmQudm9sdW1lKHRoaXMuc3RvcmVkU291bmRWb2x1bWUpO1xuICAgICAgdGhpcy5tdXNpYy52b2x1bWUodGhpcy5zdG9yZWRNdXNpY1ZvbHVtZSk7XG5cbiAgICB9XG5cbiAgfVxuXG59KTtcblxuXG52YXIgcGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2UgfHwgd2luZG93LndlYmtpdFBlcmZvcm1hbmNlIHx8IERhdGU7XG5cbk1hdGguc2lnbiA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbih4KSB7XG5cbiAgeCA9ICt4OyAvLyBjb252ZXJ0IHRvIGEgbnVtYmVyXG5cbiAgaWYgKHggPT09IDAgfHwgaXNOYU4oeCkpIHtcblxuICAgIHJldHVybiB4O1xuXG4gIH1cblxuICByZXR1cm4geCA+IDAgPyAxIDogLTE7XG5cbn07IiwiLypcblxuUHV0IHVub3B0aW1pemVkIHZlcnNpb25zIG9mIGZ1bmN0aW9ucyB0aGVyZS5cbklmIHlvdSB3YW50IHRvIHRlc3Qgb3B0aW1pemVkIHZzIHVub3B0aW1pemVkXG5qdXN0IGNvbW1lbnQgb3V0IGEgZnVuY3Rpb24gb3IgcHV0IGEgcmFuZG9tIGxldHRlciBpbiBpdHMgbmFtZS4uLlxuXG5cbkFzIHlvdSB3aWxsIHB1dCBtb3JlIGFuZCBtb3JlIGJvdHRsZW5lY2tzIHlvdSB3aWxsIGhhdmUgdG8gYWRqdXN0IFxuaG93IG11Y2ggZG9lcyBpdCBhZmZlY3QgYXZhaWxhYmxlIHBvd2VyIHNvIHVub3B0aW1pemVkIGdhbWUgY2FuIHJ1biBhdCBsZWFzdCBcbm9uZSBzaGlwLiBNb2RpZnkgdGhpcyBmYWN0b3IgaXMgaW4gR2FtZS5qc1xuXG5SRUZFUkVOQ0VfRlJBTUVfVElNRSA9IDAuODtcblxuKi9cblxuLyogXG5cbiAgRGlzdGFuY2UgaXMgYW4gZXhhbXBsZSBvZiBhIHJpc2t5IG9wdGltaXphdGlvbiB0YXJnZXQgXG5cbiAgMSkgRXhlY3V0aW9uIHRpbWUgaXMgbmVnbGVjdGlibGVcbiAgMikgSWYgeW91IHVub3B0aW1pemUgdGhlbiBvcHRpbWl6ZSBzdWNoIGNoZWFwIGZ1bmN0aW9uIHlvdSB3aWxsIGdldCBlbm9ybW91cyBib29zdFxuICAgICB0aGF0IHdpbGwgcmVuZGVyIHRoZSByZXN0IG9mIG9wdGltaXphdGlvbiB1bm5lY2Vzc2FyeVxuICAzKSBUaGlzIG1ldGhvZCBsaXRlcmFsbHkgYWZmZWN0cyBoYWxmIG9mIHRoZSBsb2dpYyBpbiB0aGUgZ2FtZVxuICAgICBUaGUgcmVzdWx0cyBhcmUgdW5wcmVkaWN0YWJsZVxuICA0KSBJIG1pZ2h0IG5vdCBiZSByaWdodCA7KVxuXG4qL1xuXG5VdGlscy5kaXN0YW5jZSA9IGZ1bmN0aW9uKGEsIGIpIHtcblxuICB2YXIgZHggPSBhLnggLSBiLng7XG4gIHZhciBkeSA9IGEueSAtIGIueTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxufTtcblxuLyogSSB0aGluayB3ZSBzaG91bGQgcHV0IGEgY29tbWVudCBiZWZvcmUgYW55IGZ1bmN0aW9uIGhvaXN0ZWQgZm9yIG9wdGltaXphdGlvblxuICAgdGhhdCB3aWxsIHRlbGwgd2hhdCByZXR1cm4gdmFsdWUgaXMgYWN0dWFsbHkgZXhwZWN0ZWQgYnkgdGhlIG1ldGhvZCAqL1xuXG5VdGlscy5uZWFyZXN0ID0gZnVuY3Rpb24oZnJvbSwgZW50aXRpZXMpIHtcblxuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICB2YXIgZGlzdGFuY2VzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgdmFyIHRvID0gZW50aXRpZXNbaV07XG5cbiAgICBpZiAoZnJvbSA9PT0gdG8pIGNvbnRpbnVlO1xuXG4gICAgdmFyIGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShmcm9tLCB0byk7XG5cbiAgICBkaXN0YW5jZXMucHVzaCh7XG4gICAgICB0YXJnZXQ6IHRvLFxuICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlXG4gICAgfSk7XG5cbiAgfVxuXG4gIHZhciBtaW4gPSAtMTtcblxuICBmdW5jdGlvbiBzb3J0RGlzdGFuY2VzKGEsIGIpIHtcblxuICAgIHJldHVybiBhLmRpc3RhbmNlIC0gYi5kaXN0YW5jZTtcblxuICB9XG5cbiAgdmFyIHNvcnRlZERpc3RhbmNlcyA9IGRpc3RhbmNlcy5zb3J0KHNvcnREaXN0YW5jZXMpO1xuXG4gIGlmIChzb3J0ZWREaXN0YW5jZXMubGVuZ3RoKVxuXG4gICAgcmV0dXJuIHNvcnRlZERpc3RhbmNlc1swXS50YXJnZXQ7XG5cbiAgZWxzZSByZXR1cm4gbnVsbDtcblxufTtcblxuLyogRnVuY3Rpb25hbCBwcm9ncmFtbWluZyBcXG8vXG4gICBUaGlzIG9uZSBpcyBhY3R1YWxseSBhbiBvcHRpbWl6ZWQgdmVyc2lvblxuKi9cblxuVXRpbHMuZmlsdGVyID0gZnVuY3Rpb24oYXJyYXksIHRlc3QpIHtcblxuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXG4gICAgaWYgKHRlc3QoYXJyYXlbaV0pKSByZXN1bHQucHVzaChhcnJheVtpXSk7XG5cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG5cbn07XG5cbi8qIHJldHVybnMgbmVhcmVzdCBzaGlwIG9mIG9wcG9zaXRlIHRlYW0gKi9cblxuRU5HSU5FLlNoaXAucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gIHZhciBwb29sID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdhbWUuZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgIHZhciBlbnRpdHkgPSB0aGlzLmdhbWUuZW50aXRpZXNbaV07XG5cbiAgICBpZiAoIShlbnRpdHkgaW5zdGFuY2VvZiBFTkdJTkUuU2hpcCkpIGNvbnRpbnVlO1xuXG4gICAgaWYgKGVudGl0eS50ZWFtICE9PSB0aGlzLnRlYW0pIHBvb2wucHVzaChlbnRpdHkpO1xuXG4gIH1cblxuICAvKiBBTk9USEVSIFdBUk5JTkcgIC0gd2UgaGF2ZSBhbHJlYWR5IHVub3B0aW1pemVkIFV0aWxzLm5lYXJlc3RcbiAgICAgdGhpcyBhZGRzIHVwIHRvIHVucHJlZGljdGFibGUgc2NhbGUgb2YgcmVzdWx0cyAqL1xuXG4gIHJldHVybiBVdGlscy5uZWFyZXN0KHRoaXMsIHBvb2wpO1xuXG59O1xuXG5VdGlscy5tb3ZlSW5EaXJlY3Rpb24gPSBmdW5jdGlvbihkaXJlY3Rpb24sIHZhbHVlKSB7XG5cbiAgdmFsdWUgLz0gMTAwMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuXG4gICAgdGhpcy54ICs9IE1hdGguY29zKGRpcmVjdGlvbikgKiB2YWx1ZTtcbiAgICB0aGlzLnkgKz0gTWF0aC5zaW4oZGlyZWN0aW9uKSAqIHZhbHVlO1xuXG4gIH1cblxufTtcblxuRU5HSU5FLlNoaXAucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbihkdCkge1xuXG4gIGlmICghdGhpcy5mcm96ZW4pIHtcblxuICAgIFV0aWxzLm1vdmVJbkRpcmVjdGlvbi5hcHBseSh0aGlzLCBbdGhpcy5kaXJlY3Rpb24sIHRoaXMuc3BlZWQgKiBkdF0pO1xuXG4gIH1cblxuICBpZiAodGhpcy5mb3JjZSA+IDApIHtcblxuICAgIHRoaXMuZm9yY2UgLT0gMjAwICogZHQ7XG5cbiAgICBVdGlscy5tb3ZlSW5EaXJlY3Rpb24uYXBwbHkodGhpcywgW3RoaXMuZm9yY2VEaXJlY3Rpb24sIHRoaXMuZm9yY2UgKiBkdF0pO1xuXG4gIH1cblxufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=