"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[964],{9223:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r=t(5671),u=t(3144),o=t(136),i=t(2882),s=t(2791),a=t(946),c=t(8687),l=t(885),f="users_imageSize__RtYsX",g="users_selectedPage__bgTbL",p=t(184),h=function(e){for(var n=e.totalItemsCount,t=e.pageSize,r=e.currentPage,u=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,a=Math.ceil(n/t),c=[],f=1;f<=a;f++)c.push(f);var h=Math.ceil(a/i),d=(0,s.useState)(1),v=(0,l.Z)(d,2),y=v[0],j=v[1],x=(y-1)*i+1,m=y*i;return(0,p.jsxs)("div",{children:[y>1&&(0,p.jsx)("button",{onClick:function(){j(y-1)},children:"Previous"}),c.filter((function(e){return e>=x&&e<=m})).map((function(e){return(0,p.jsx)("span",{onClick:function(){return u(e)},className:r===e?g:"",children:e},e)})),y<h&&(0,p.jsx)("button",{onClick:function(){j(y+1)},children:"next"})]})},d=t.p+"static/media/user-default-avatar.be2959bfcfaeee682f4f.png",v=t(3504),y=function(e){var n=e.user,t=e.fetchingToggleRequests,r=e.toggleFollow;return(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(v.OL,{to:"/profile/".concat(n.id),children:(0,p.jsx)("img",{className:f,src:null!==n.photos.small?n.photos.small:d,alt:""})}),(0,p.jsx)("button",{disabled:t.includes(n.id),onClick:function(){r(n.id,n.followed)},children:n.followed?"Unfollow":"Follow"})]})}),(0,p.jsxs)("span",{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:n.name}),(0,p.jsx)("div",{children:n.status})]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:"user.location.country"}),(0,p.jsx)("div",{children:"user.location.city"})]})]})]})},j=function(e){return(0,p.jsxs)("div",{children:[(0,p.jsx)(h,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((function(n){return(0,p.jsx)(y,{user:n,fetchingToggleRequests:e.fetchingToggleRequests,toggleFollow:e.toggleFollow},n.id)}))]})},x=t(9776),m="NOT_FOUND";var C=function(e,n){return e===n};function P(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,u=void 0===r?C:r,o=t.maxSize,i=void 0===o?1:o,s=t.resultEqualityCheck,a=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!e(n[u],t[u]))return!1;return!0}}(u),c=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:m},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(a):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return m}return{get:r,put:function(n,u){r(n)===m&&(t.unshift({key:n,value:u}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,a);function l(){var n=c.get(arguments);if(n===m){if(n=e.apply(null,arguments),s){var t=c.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}c.put(arguments,n)}return n}return l.clearCache=function(){return c.clear()},l}function k(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function w(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var u=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var o,i=0,s={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(s=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var c=s,l=c.memoizeOptions,f=void 0===l?t:l,g=Array.isArray(f)?f:[f],p=k(r),h=e.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(g)),d=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return o=h.apply(null,e)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:h,dependencies:p,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),d};return u}var b=w(P),z=function(e){return e.usersPage.users},S=(b(z,(function(e){e.filter((function(e){return!0}))})),function(e){return e.usersPage.pageSize}),F=function(e){return e.usersPage.totalUsersCount},R=function(e){return e.usersPage.currentPage},U=function(e){return e.usersPage.isFetching},_=function(e){return e.usersPage.fetchingToggleRequests},q=function(e){(0,o.Z)(t,e);var n=(0,i.Z)(t);function t(){var e;(0,r.Z)(this,t);for(var u=arguments.length,o=new Array(u),i=0;i<u;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){e.props.setCurrentPage(n),e.props.getUsers(n,e.props.pageSize)},e}return(0,u.Z)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){var e=this;return(0,p.jsxs)(p.Fragment,{children:[this.props.isFetching?(0,p.jsx)(x.p,{}):null,(0,p.jsx)(j,{onPageChanged:function(n){e.onPageChanged(n)},currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,fetchingToggleRequests:this.props.fetchingToggleRequests,toggleFollow:this.props.toggleFollow})]})}}]),t}(s.Component),T=(0,c.$j)((function(e){return{users:z(e),pageSize:S(e),totalUsersCount:F(e),currentPage:R(e),isFetching:U(e),fetchingToggleRequests:_(e)}}),{setCurrentPage:a.D4,getUsers:a.Uk,toggleFollow:a.s4})(q)}}]);
//# sourceMappingURL=964.f556c707.chunk.js.map