(this["webpackJsonpscss-to-styles"]=this["webpackJsonpscss-to-styles"]||[]).push([[0],{26:function(e,t,n){e.exports=n(52)},31:function(e,t,n){},32:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(19),r=n.n(s),c=(n(31),n(32),n(2)),l=n(5),u=n(6),i=n(3),p=n(4);function h(){var e=Object(i.a)(["\n  ","\n"]);return h=function(){return e},e}var f=p.a.button(h(),(function(e){return"function"===typeof e.css.toJS?e.css.toJS():e.css})),d=function(e){return o.a.createElement(f,{type:e.type,className:e.className,css:e.css,disabled:e.disabled||e.loading,"aria-disabled":e.disabled||e.loading,onClick:e.onClick,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseDown:e.onMouseDown,onMouseOut:e.onMouseOut,onMouseOver:e.onMouseOver,onMouseUp:e.onMouseUp,onTouchCancel:e.onTouchCancel,onTouchEnd:e.onTouchEnd,onTouchMove:e.onTouchMove,onTouchStart:e.onTouchStart},o.a.createElement("em",null,e.children))};d.defaultProps={type:"button"};var v=d,m=n(23);function g(){var e=Object(i.a)(["\n  ","\n"]);return g=function(){return e},e}var b=p.a.div(g(),(function(e){return"function"===typeof e.css.toJS?e.css.toJS():e.css}));b.defaultProps={css:{}};var y=b,C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={value:a.props.value},a.UNSAFE_componentWillReceiveProps=function(e){e.value!==a.props.value&&a.setState({value:e.value})},a.handleChange=function(e){e.persist(),a.setState({value:e.target.value},(function(){"function"===typeof a.props.changeCallback&&a.props.changeCallback({target:{name:a.props.name,value:e.target.value}})}))},a.handleFocus=function(e){"function"===typeof a.props.focusCallback&&a.props.focusCallback(e)},a.handleBlur=function(e){"function"===typeof a.props.blurCallback&&a.props.blurCallback(e)},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.css,a=e.disabled,s=e.label,r=e.height,c=e.readOnly,l=e.placeholder,u=r?{height:r}:null;return o.a.createElement(y,{className:t,css:n},s&&o.a.createElement("label",null,s),o.a.createElement("textarea",{value:this.state.value,onFocus:this.handleFocus,onChange:this.handleChange,onBlur:this.handleBlur,disabled:a,readOnly:c,placeholder:l,style:u}))}}]),n}(a.Component);C.defaultProps={disabled:!1,value:""};var E=C,O={height:"100vh",width:"100vw",display:"flex",alignItems:"center"},x={flex:1,height:"calc(100% - 20px)",margin:"10px",textarea:{height:"100%",width:"100%",boxSizing:"border-box",resize:"none"}},S={flex:0,maxHeight:"50px",minWidth:"100px"},k=n(24),w=n.n(k);var M=function(e){return e=e.replace(/(-.)/g,(function(e){return e[1].toUpperCase()}))},j=function(e){return"@media "+e},T=function(e){return e=(e=(e=(e=e.replace(/\s\s+/g," ")).replace(/[^a-zA-Z0-9]/g,"_")).replace(/^_+/g,"")).replace(/_+$/g,"")};var _=function(e){if(!e)throw new Error("missing css text to transform");var t=!1;-1===e.indexOf("{")&&(t=!0,e=".bootstrapWithCssClass { ".concat(e," }"));var n={};return function e(t,n,a){n.forEach((function(n){var o={};if("media"===n.type){var s=j(n.media),r=a[s]=a[s]||{__expression__:n.media};e(t,n.rules,r)}else"rule"===n.type&&(n.declarations.forEach((function(e){if("declaration"===e.type){var t=M(e.property);o[t]=e.value}})),n.selectors.forEach((function(e){var t=T(e.trim());a[t]=o})))}))}(this,w.a.parse(e).stylesheet.rules,n),t&&(n=n.bootstrapWithCssClass),n},J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={scss:"",styles:""},a.handleChanges=function(e){a.setState({scss:e.target.value})},a.transformStyles=function(){var e=_(a.state.scss),t=JSON.stringify(e,void 0,2).replace(/"/gm,"'").replace(/'(.*)':/gm,"$1:").replace(/'([0-9]+|\$.*)'/gm,"$1");a.setState({styles:t})},a.render=function(){return o.a.createElement(y,{css:O},o.a.createElement(E,{css:x,changeCallback:a.handleChanges}),o.a.createElement(v,{css:S,onClick:a.transformStyles},"Convert"),o.a.createElement(E,{css:x,readOnly:!0,value:a.state.styles}))},a}return n}(a.Component);var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.c18709ff.chunk.js.map