(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d267a20"],{2296:function(t,s,e){},a55b:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("form",{staticClass:"form-signin",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("請先登入")]),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("電子郵件")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}}),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("密碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),t._m(0),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")]),e("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017-2018")])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"checkbox mb-3"},[e("label",[e("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me\n      ")])])}],n=(e("cadf"),e("551c"),e("097d"),{name:"HelloWorld",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t="".concat("https://vue-course-api.hexschool.io","/admin/signin"),s=this;this.$http.post(t,s.user).then(function(t){console.log(t),t.data.success&&s.$router.push("/admin/products")})}}}),o=n,i=(e("d911"),e("2877")),u=Object(i["a"])(o,a,r,!1,null,"61492b44",null);s["default"]=u.exports},d911:function(t,s,e){"use strict";var a=e("2296"),r=e.n(a);r.a}}]);
//# sourceMappingURL=chunk-8d267a20.fb2e1d52.js.map