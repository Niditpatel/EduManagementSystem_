"use strict";(self.webpackChunkpublicwebapp=self.webpackChunkpublicwebapp||[]).push([[302],{7013:function(e,t,r){r.d(t,{Al:function(){return i},B$:function(){return v},Sz:function(){return p},fC:function(){return g},m3:function(){return o},oP:function(){return c},tC:function(){return Z},tq:function(){return m}});var s=r(4165),n=r(5861),a=r(6343);function i(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.post("/signup",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(e){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.post("/login",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function c(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.post("/forgotpassword",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.post("/checkfortoken",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.post("/resetpassword",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/verify",{headers:{authorization:t,Accept:"application/json","Content-Type":"application/json"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return b.apply(this,arguments)}function b(){return(b=(0,n.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.put("/active",{token:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Z(e){return S.apply(this,arguments)}function S(){return(S=(0,n.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.put("/regeneratetoken",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},8302:function(e,t,r){r.r(t),r.d(t,{default:function(){return A}});var s=r(1413),n=r(2982),a=r(4165),i=r(5861),l=r(885),o=r(1134),u=r(4695),c=r(5107),d=r(2791),p=r(6871),f=r(4583),m=r(7686),h=r(7942),v=h.Ry().shape({query:h.Z_(),limit:h.Rx().default(5),offset:h.Rx().default(0),search_schools:h.IX().of(h.Ry()),role:h.IX().of(h.Ry())}),x=r(5987),g=r(3153),b=h.Ry().shape({role:h.Ry().required("role is required").nullable(),title:h.Ry().required("Title is required").nullable(),firstName:h.Z_().required("first name is required").min(2).max(15),lastName:h.Z_().required("last name is required").min(2).max(15),email:h.Z_().email().required("email is required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"please enter valid email"),institute:h.Ry().required("Institute is Required").nullable()}),Z=r(7013),S=r(184),y=["role","title","institute"];function j(e){var t=(0,d.useState)([]),r=(0,l.Z)(t,2),m=r[0],h=r[1],v=(0,d.useState)([]),j=(0,l.Z)(v,2),w=j[0],N=j[1],I=(0,d.useState)(""),q=(0,l.Z)(I,2),_=q[0],k=q[1],V=(0,d.useState)(""),U=(0,l.Z)(V,2),O=U[0],C=U[1],A=(0,d.useState)(),D=(0,l.Z)(A,2),R=D[0],z=D[1],F=(0,o.cI)({mode:"onChange",resolver:(0,u.X)(b),defaultValues:{role:null,title:null,institute:R&&"SchoolAdmin"===R.role?{}:null}}),J=(0,p.bx)().handleLoading,E=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(r){var n,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(""),k(""),r.role,r.title,r.institute,n=(0,x.Z)(r,y),J(!0),t.next=6,(0,Z.Al)((0,s.Z)({role:r.role.value,title:r.title.value,institute:r.institute.value},n));case 6:0===(i=t.sent).success?(J(!1),k(i.message)):(C(i.message),F.reset(),J(!1),e.viewCreatedData(!0));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>2)){e.next=7;break}return e.next=3,(0,f.t)(t);case 3:return r=e.sent,s=r.map((function(e){return{label:e.name.toUpperCase(),value:e._id}})),N((0,n.Z)(s)),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){sessionStorage.getItem("Access");var e=sessionStorage.getItem("User"),t=null!==e?JSON.parse(e):e;z(t),(0,f.M)().then((function(e){var t=e.map((function(e){return{label:e,value:e}}));h(t)}))}),[]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"flex justify-center",children:[_.length>0&&(0,S.jsx)("div",{className:"bg-warning rounded p-2",children:_}),O.length>0&&(0,S.jsx)("div",{className:"bg-success p-2 rounded",children:O})]}),(0,S.jsx)(o.RV,(0,s.Z)((0,s.Z)({},F),{},{children:(0,S.jsxs)("form",{action:"",onSubmit:F.handleSubmit(E),children:[(0,S.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[(0,S.jsx)("div",{className:"w-full mt-5",children:(0,S.jsx)(c.q4,{fieldname:"role",placeholder:"Select Role",required:!0,options:e.roles})}),(0,S.jsx)("div",{className:"w-full mt-5",children:(0,S.jsx)(c.q4,{fieldname:"title",placeholder:"Select Title",options:m,isSearchable:!1,required:!0})}),(0,S.jsx)("div",{children:(0,S.jsx)(g.Z,{fieldname:"firstName",label:"First Name",required:!0})}),(0,S.jsx)("div",{children:(0,S.jsx)(g.Z,{fieldname:"lastName",label:"Last Name",required:!0})}),(0,S.jsx)("div",{children:(0,S.jsx)(g.Z,{fieldname:"email",type:"email",label:"Email",required:!0})}),R&&(0,S.jsxs)(S.Fragment,{children:["SuperAdmin"===R.role&&(0,S.jsx)("div",{children:(0,S.jsx)(c.rS,{fieldname:"institute",placeholder:"Select Institute",loadOptions:T,instituteDefaultOptions:w,required:!0})}),"SuperAdmin"!==R.role&&(0,S.jsx)(S.Fragment,{children:F.setValue("institute",{label:R.institute,value:R.institute})})]})]}),(0,S.jsx)("div",{className:"flex items-center justify-center mt-5",children:(0,S.jsx)("button",{type:"submit",className:"border border-primary w-32 text-center bg-primary text-white  py-1  capitalize hover:bg-white hover:text-primary ",children:"Create User"})})]})}))]})}var w=r(7519),N=["institute","title","role"];function I(e){var t=e.userId,r=(0,d.useState)([]),h=(0,l.Z)(r,2),v=h[0],y=h[1],j=(0,d.useState)([]),I=(0,l.Z)(j,2),q=I[0],_=I[1],k=(0,d.useState)({}),V=(0,l.Z)(k,2),U=V[0],O=V[1],C=(0,d.useState)(!1),A=(0,l.Z)(C,2),D=A[0],R=A[1],z=(0,d.useState)(""),F=(0,l.Z)(z,2),J=F[0],E=F[1],T=(0,d.useState)(""),X=(0,l.Z)(T,2),M=X[0],L=X[1],P=(0,d.useState)(),B=(0,l.Z)(P,2),G=B[0],H=B[1],Q=(0,p.bx)().handleLoading,$=(0,o.cI)({mode:"onChange",resolver:(0,u.X)(b)}),Y=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(r){var n,i,l,o,u,c,d,p;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={role:r.role.value,title:r.title.value,firstName:r.firstName,lastName:r.lastName,email:r.email,institute:r.institute.value},!(0,w.O)(n,U)){t.next=14;break}return i=sessionStorage.getItem("Access"),O(n),E(""),L(""),Q(!0),l=r.institute,o=r.title,u=r.role,c=(0,x.Z)(r,N),d=sessionStorage.getItem("editUserId"),t.next=12,(0,m.BN)("user/"+d,(0,s.Z)({institute:l.value,title:o.value,role:u.value},c),i,{});case 12:1===(p=t.sent).success?(L(p.message),Q(!1),e.viewUpdatedData(!0)):(E(p.message),Q(!1));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>2)){e.next=7;break}return e.next=3,(0,f.t)(t);case 3:return r=e.sent,s=r.map((function(e){return{label:e.name.toUpperCase(),value:e._id}})),_((0,n.Z)(s)),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(""),E(""),e.next=4,(0,Z.oP)({email:$.getValues("email")});case 4:0===(t=e.sent).success?E(t.message):L(t.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){Q(!0),L(""),E("");var e=sessionStorage.getItem("Access"),t=sessionStorage.getItem("User"),r=null!==t?JSON.parse(t):t;H(r),(0,f.M)().then((function(e){var t=e.map((function(e){return{label:e,value:e}}));y(t),Q(!1)}));var s=sessionStorage.getItem("editUserId");(0,m.dX)("user/"+s,e,{}).then((function(e){if(1===e.success){var t=e.user;console.log(t,"user"),R(t.Approved),$.setValue("email",t.email),$.setValue("firstName",t.firstName),$.setValue("lastName",t.lastName),$.setValue("role",{label:t.role,value:t.role}),$.setValue("title",{label:t.title,value:t.title}),$.setValue("institute",{label:t.institute.name.toUpperCase(),value:t.institute._id}),O({role:t.role,title:t.title,firstName:t.firstName,lastName:t.lastName,email:t.email,institute:t.institute._id})}Q(!1)}))}),[t]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"flex justify-center",children:[J.length>0&&(0,S.jsx)("div",{className:"bg-warning rounded p-2 capitalize",children:J}),M.length>0&&(0,S.jsx)("div",{className:"bg-success p-2 rounded capitalize",children:M})]}),(0,S.jsx)(o.RV,(0,s.Z)((0,s.Z)({},$),{},{children:(0,S.jsxs)("form",{action:"",onSubmit:$.handleSubmit(Y),children:[(0,S.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[(0,S.jsx)("div",{className:"w-full mt-5",children:(0,S.jsx)(c.q4,{fieldname:"role",placeholder:"Select Role",required:!0,options:e.roles,isSearchable:!1})}),(0,S.jsx)("div",{className:"w-full mt-5",children:(0,S.jsx)(c.q4,{fieldname:"title",placeholder:"Select Title",options:v,isSearchable:!1,required:!0})}),(0,S.jsx)("div",{children:(0,S.jsx)(g.Z,{fieldname:"firstName",label:"First Name",required:!0})}),(0,S.jsx)("div",{children:(0,S.jsx)(g.Z,{fieldname:"lastName",label:"Last Name",required:!0})}),(0,S.jsx)("div",{children:(0,S.jsx)(g.Z,{fieldname:"email",type:"email",label:"Email",required:!0})}),G&&(0,S.jsx)(S.Fragment,{children:"SuperAdmin"===G.role&&(0,S.jsx)("div",{children:(0,S.jsx)(c.rS,{fieldname:"institute",placeholder:"Select Institute",loadOptions:K,instituteDefaultOptions:q,required:!0})})})]}),(0,S.jsxs)("div",{className:"flex items-center justify-center space-x-4 mt-5",children:[(0,S.jsx)("button",{type:"submit",className:"border border-primary w-32 text-center bg-primary text-white  py-1  capitalize hover:bg-white hover:text-primary",children:"Update"}),(0,S.jsx)("button",{className:"border border-primary w-32 text-center bg-primary text-white  py-1  capitalize hover:bg-white hover:text-primary",onClick:function(e){e.preventDefault(),W()},children:"Reset Password"}),!1===D&&(0,S.jsx)("button",{className:"border border-primary w-32 text-center bg-primary text-white  py-1  capitalize hover:bg-white hover:text-primary",onClick:function(t){t.preventDefault(),function(){L(""),E(""),Q(!0);var t=sessionStorage.getItem("Access"),r=sessionStorage.getItem("editUserId");(0,m.BN)("user/approved/"+r,{},t,{}).then((function(t){1===t.success?(L(t.message),e.viewUpdatedData(!0),R(!0)):E(t.message)})),Q(!1)}()},children:"Approve User"})]})]})}))]})}var q=r(5108),_=r(314),k=r(6226),V=r(8806),U=r(3839),O=r(158),C=r(100);function A(){var e=(0,d.useState)([]),t=(0,l.Z)(e,2),r=t[0],h=t[1],x=(0,d.useState)([]),g=(0,l.Z)(x,2),b=g[0],Z=g[1],y=(0,d.useState)(),w=(0,l.Z)(y,2),N=w[0],A=w[1],D=(0,d.useState)(),R=(0,l.Z)(D,2),z=R[0],F=R[1],J=(0,d.useState)([]),E=(0,l.Z)(J,2),T=E[0],X=E[1],M=(0,d.useState)({}),L=(0,l.Z)(M,2),P=L[0],B=L[1],G=(0,d.useState)(""),H=(0,l.Z)(G,2),Q=H[0],$=H[1],Y=(0,d.useState)(""),K=(0,l.Z)(Y,2),W=K[0],ee=K[1],te=(0,d.useState)("search"),re=(0,l.Z)(te,2),se=re[0],ne=re[1],ae=(0,d.useState)({limit:5,offset:1}),ie=(0,l.Z)(ae,2),le=ie[0],oe=ie[1],ue=(0,d.useState)({order:1,sort_by:""}),ce=(0,l.Z)(ue,2),de=ce[0],pe=ce[1],fe=(0,d.useState)(),me=(0,l.Z)(fe,2),he=me[0],ve=me[1],xe=(0,p.bx)().handleLoading,ge=(0,d.useState)(!1),be=(0,l.Z)(ge,2),Ze=be[0],Se=be[1],ye=(0,d.useState)(!1),je=(0,l.Z)(ye,2),we=je[0],Ne=je[1],Ie=(0,o.cI)({mode:"onChange",resolver:(0,u.X)(v),defaultValues:{query:null,limit:5,offset:1,search_schools:[],role:[]}}),qe=((0,d.useMemo)((0,i.Z)((0,a.Z)().mark((function e(){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!we){e.next=8;break}return t=sessionStorage.getItem("Access"),xe(!0),e.next=5,(0,m.dX)("user/",t,{query:Ie.getValues("query"),limit:Ie.getValues("limit"),offset:Ie.getValues("offset"),search_schools:void 0!==Ie.getValues("search_schools")?Ie.getValues("search_schools").map((function(e){return e.value})).join("&&"):"",role:void 0!==Ie.getValues("role")?Ie.getValues("role").map((function(e){return e.value})).join("&&"):"",order:de.order,sort_by:de.sort_by});case 5:1===(r=e.sent).success&&(X(r.data),F(r.count),A(Math.ceil(parseInt(r.count)/Ie.getValues("limit"))),xe(!1)),0===r.success&&(X([]),F(0),A(0),xe(!1));case 8:return e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)}))),[le,Q,Ze,de]),function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ie.setValue("limit",5),Ie.setValue("offset",1),sessionStorage.setItem("limit","5"),sessionStorage.setItem("offset","1"),r=sessionStorage.getItem("Access"),void 0!==t.role&&sessionStorage.setItem("role",JSON.stringify(t.role)),void 0!==t.search_schools&&sessionStorage.setItem("search_schools",JSON.stringify(t.search_schools)),sessionStorage.setItem("query",JSON.stringify(t.query)),xe(!0),(0,m.dX)("user/",r,{query:t.query,role:void 0!==t.role?t.role.map((function(e){return e.value})).join("&&"):"",search_schools:void 0!==t.search_schools?t.search_schools.map((function(e){return e.value})).join("&&"):"",offset:t.offset,limit:t.limit,order:de.order,sort_by:de.sort_by}).then((function(e){1===e.success?(xe(!1),X(e.data),F(e.count),A(Math.ceil(parseInt(e.count)/t.limit))):(F(0),A(0),xe(!1),X([]))}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());(0,d.useEffect)((function(){xe(!0);var e=sessionStorage.getItem("User"),t=null!==e?JSON.parse(e):e;ve(t);var r=sessionStorage.getItem("Useraction");ne(void 0!==r&&null!==r?r:"search");var s=sessionStorage.getItem("Access"),a=sessionStorage.getItem("query"),i=sessionStorage.getItem("role"),l=sessionStorage.getItem("search_schools"),o=sessionStorage.getItem("offset"),u=sessionStorage.getItem("limit"),c=sessionStorage.getItem("Userorder"),d=sessionStorage.getItem("Usersort_by");return null!==a&&void 0!==a&&Ie.setValue("query",JSON.parse(a)),null!==u&&void 0!==u&&Ie.setValue("limit",JSON.parse(u)),null!==o&&void 0!==o&&Ie.setValue("offset",JSON.parse(o)),void 0!==d&&null!==d&&null!==c&&void 0!==c&&pe({order:parseInt(c),sort_by:d}),(0,m.dX)("roles",s,{}).then((function(e){if(xe(!1),1===e.success){var t=e.data.map((function(e){return{label:e,value:e}}));h((0,n.Z)(t))}})),(0,m.dX)("user/",s,{query:void 0!==a&&null!==a?JSON.parse(a):"",role:void 0!==i&&null!==i?JSON.parse(i).map((function(e){return e.value})).join("&&"):"",search_schools:void 0!==l&&null!==l?JSON.parse(l).map((function(e){return e.value})).join("&&"):"",offset:void 0!==o&&null!==o?o:1,limit:void 0!==u&&null!==u?u:5,order:void 0!==c&&null!==c?parseInt(c):1,sort_by:void 0!==d&&null!==d?d:"_id"}).then((function(e){1===e.success?(xe(!1),X(e.data),void 0!==u&&null!==u?(F(e.count),A(Math.ceil(parseInt(e.count)/parseInt(u)))):A(Math.ceil(parseInt(e.count)/5))):(X([]),F(0),A(0))})),xe(!1),Ne(!0)}),[]);var _e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>2)){e.next=7;break}return e.next=3,(0,f.t)(t);case 3:return r=e.sent,s=r.map((function(e){return{label:e.name.toUpperCase(),value:e._id}})),Z((0,n.Z)(s)),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ke=function(e){Se(!0!==Ze&&e)};return(0,S.jsxs)("div",{className:" container px-2 text-primary ",children:[(0,S.jsx)("div",{className:"capitalize text-lg",children:"Users"}),(0,S.jsx)(o.RV,(0,s.Z)((0,s.Z)({},Ie),{},{children:(0,S.jsxs)("form",{onSubmit:Ie.handleSubmit(qe),children:[(0,S.jsxs)("div",{className:" mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",children:[(0,S.jsxs)("div",{className:"w-full pr-4",children:[(0,S.jsx)("label",{id:"UserSearchQueryLabel",htmlFor:"",className:"capitalize","data-tooltip-content":"Search First Name, Last Name , Email Or Institute Name Here...",children:"search"}),(0,S.jsx)("br",{}),(0,S.jsx)("input",(0,s.Z)({type:"text",id:"",className:"border rounded light1-placeholder w-full p-4  focus:outline-none",placeholder:"Search..."},Ie.register("query")))]}),(0,S.jsxs)("div",{className:"".concat(he&&"SuperAdmin"===he.role?"show":"hidden"),children:[(0,S.jsx)("label",{htmlFor:"",className:"capitalize",children:"institution"}),(0,S.jsx)("br",{}),(0,S.jsx)(c.EG,{fieldname:"search_schools",placeholder:"Select",loadOptions:_e,defaultOptions:b})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{htmlFor:"",className:"capitalize",children:"role"}),(0,S.jsx)("br",{}),(0,S.jsx)(c.EG,{fieldname:"role",placeholder:"Select",loadOptions:r,defaultOptions:r,isSearchable:!1})]})]}),(0,S.jsxs)("div",{className:"flex flex-col space-y-4 md:flex-row md:justify-between  mt-5 md:mt-3",children:[(0,S.jsxs)("div",{className:"flex space-x-8",children:[(0,S.jsx)("button",{type:"submit",className:"border border-primary w-32 text-center bg-primary text-white  py-1  capitalize hover:bg-white hover:text-primary ",children:"search"}),(0,S.jsx)("button",{className:"border border-primary w-32 text-center bg-primary text-white py-1  capitalize hover:bg-white hover:text-primary",onClick:function(e){e.preventDefault(),Ie.reset(),sessionStorage.removeItem("query"),sessionStorage.removeItem("search_schools"),sessionStorage.removeItem("role"),sessionStorage.removeItem("Userorder"),sessionStorage.removeItem("Usersort_by")},children:"reset"})]}),(0,S.jsx)("div",{children:(0,S.jsx)("button",{className:"underline capitalize",onClick:function(e){e.preventDefault(),ne("new"),sessionStorage.setItem("Useraction","new")},children:"+ create user"})})]}),(0,S.jsxs)("div",{children:[(0,S.jsxs)("div",{className:"conatiner py-1  mt-5",id:"userTableParentDiv",children:[T&&(0,S.jsx)(S.Fragment,{children:T.length>0&&(0,S.jsx)(q.Z,{data:T,isFor:"User",handleEdit:function(e){ee(e),ne("edit")},handleDelete:function(e){var t;B(e),null===(t=document.getElementById("DeleteUserModal"))||void 0===t||t.click()},handleSort:function(e){pe({sort_by:e.sort_by,order:e.order})},children:(0,S.jsx)(k.Z,{TotalData:z})})}),0===T.length&&(0,S.jsx)(S.Fragment,{children:(0,S.jsx)("div",{className:"capitalize w-full  text-center text-3xl mt-10",children:"There is No Data To show"})})]}),0!==T.length&&(0,S.jsxs)("div",{className:"flex my-5 justify-between",children:[(0,S.jsx)(O.Z,{handlePageUp:function(e){var t=le.offset;t<parseInt(N)&&(Ie.setValue("offset",t+1),sessionStorage.setItem("offset",(t+1).toString()),oe((0,s.Z)((0,s.Z)({},le),{},{offset:t+1})))},handlePageDown:function(e){var t=Ie.getValues("offset");t>1&&(Ie.setValue("offset",t-1),sessionStorage.setItem("offset",(t-1).toString()),oe((0,s.Z)((0,s.Z)({},le),{},{offset:t-1})))},handlePageJump:function(e){var t=parseInt(e);e.length>0&&t>=1&&t!==le.offset&&(Ie.setValue("offset",t),oe((0,s.Z)((0,s.Z)({},le),{},{offset:t})),sessionStorage.setItem("offset",e))},lastPage:N}),(0,S.jsx)(V.Z,{handleChange:function(e){sessionStorage.setItem("limit",e),Ie.setValue("limit",parseInt(e)),Ie.setValue("offset",1),sessionStorage.setItem("offset","1"),oe({offset:1,limit:parseInt(e)})},TotalData:z})]})]})]})})),(0,S.jsx)(_.Z,{id:"DeleteUserModal",handleConform:function(){xe(!0);var e=sessionStorage.getItem("Access");(0,m.HG)("user/",e,P._id).then((function(e){xe(!1),$(e.message)}))},modalText:"Are you sure , You want to delete  ".concat(P.title,".  ").concat(P.firstName," ").concat(P.lastName," ?"),isFor:"warning"}),"search"!==se&&(0,S.jsx)(U.Z,{handleReturn:function(){ne("search"),sessionStorage.setItem("Useraction","search")}}),"new"===se&&(0,S.jsx)(j,{viewCreatedData:ke,roles:r}),"edit"===se&&(0,S.jsx)(I,{userId:W,viewUpdatedData:ke,roles:r}),(0,S.jsx)(C.u,{id:"UserSearchQueryLabel"})]})}},7519:function(e,t,r){r.d(t,{O:function(){return s}});var s=function(e,t){return JSON.stringify(e)!==JSON.stringify(t)}},100:function(e,t,r){r.d(t,{u:function(){return a}});var s=r(9248),n=r(184),a=function(e){var t=e.id;return(0,n.jsx)(s.u,{anchorId:t})}}}]);
//# sourceMappingURL=302.38b5dece.chunk.js.map