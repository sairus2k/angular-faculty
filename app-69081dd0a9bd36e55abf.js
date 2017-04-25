webpackJsonp([0],[,,function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.city={template:n(14),controller:["Api",function(t){"ngInject";var e=this;this.searchUpdate=function(){t.getCities(e.search).then(function(t){e.cities=t})}}]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.edit={template:n(15),controller:["$stateParams","Api",function(t,e){"ngInject";var n=this;this.edit={},e.getCitiesById(t.cityId).then(function(t){n.edit.city=t[0].name}),e.getUniversities("",t.cityId).then(function(e){n.edit.university=e.filter(function(e){return e.id===Number(t.universityId)})[0].title}),e.getFaculties("",t.universityId).then(function(e){n.edit.faculty=e.filter(function(e){return e.id===Number(t.facultyId)})[0].title})}]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.faculty={template:n(16),controller:["$stateParams","Api",function(t,e){"ngInject";var n=this;this.searchUpdate=function(){e.getFaculties(n.search,t.universityId).then(function(t){n.faculties=t})},this.state=t}]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.loading=void 0,n(13);e.loading={template:n(17),controller:["$rootScope",function(t){"ngInject";var e=this,n={request:0,response:0};this.show=!1;var i=t.$on("request",function(){++n.request>n.response&&(e.show=!0)}),r=t.$on("response",function(){n.response++,n.request===n.response&&(e.show=!1)});this.$onDestroy=function(){i(),r()}}]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.university={template:n(18),controller:["$stateParams","Api",function(t,e){"ngInject";var n=this;this.searchUpdate=function(){e.getUniversities(n.search,t.city_id).then(function(t){n.universities=t})}}]}},function(t,e,n){"use strict";function i(t){"ngInject";function e(n){return t.jsonp(s+"."+e.name,{params:{country_id:1,count:3,q:n}}).then(function(t){return t.data.response})}function n(e){return t.jsonp(s+"."+n.name,{params:{city_ids:e}}).then(function(t){return t.data.response})}function i(e,n){return t.jsonp(s+"."+i.name,{params:{country_id:1,city_id:n,q:e}}).then(function(t){return t.data.response.splice(1)})}function r(e,n){return t.jsonp(s+"."+r.name,{params:{country_id:1,university_id:n,q:e}}).then(function(t){return t.data.response.splice(1)})}var s="https://api.vk.com/method/database";return{getCities:e,getCitiesById:n,getUniversities:i,getFaculties:r}}i.$inject=["$http"],Object.defineProperty(e,"__esModule",{value:!0}),e.api=i},function(t,e,n){"use strict";function i(t){"ngInject";t.interceptors.push(["$q","$rootScope",function(t,e){return{request:function(n){return e.$emit("request"),n||t.when(n)},response:function(n){return e.$emit("response"),n||t.when(n)},responseError:function(n){return e.$emit("response"),t.reject(n)}}}])}i.$inject=["$httpProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e,n){"use strict";function i(t,e){e.otherwise("/"),t.state("city",{url:"/",views:{city:{component:"city"}}}).state("city.university",{url:":cityId/",views:{"university@":{component:"university"}}}).state("city.university.faculty",{url:":universityId/",views:{"faculty@":{component:"faculty"}}}).state("city.university.faculty.edit",{url:":facultyId",views:{"edit@":{component:"edit"}}})}i.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e,n){"use strict";function i(t){"ngInject";t.resourceUrlWhitelist(["self","https://api.vk.com/**"])}i.$inject=["$sceDelegateProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},,function(t,e){},function(t,e){t.exports='<div class="form-group">\n  <label for="cityInput" class="sr-only">City</label>\n  <input\n    type="search"\n    class="form-control"\n    id="cityInput"\n    placeholder="City"\n    ng-model="$ctrl.search"\n    ng-model-options="{updateOn: \'default blur\', debounce: {default: 300, blur: 0}}"\n    ng-change="$ctrl.searchUpdate()"\n  >\n</div>\n<div class="list-group">\n  <a\n    class="list-group-item"\n    ng-repeat="city in $ctrl.cities"\n    ui-sref="city.university({cityId: city.cid})"\n  >\n    <h4 class="list-group-item-heading">{{city.title}}</h4>\n    <p class="list-group-item-text">{{city.region}}</p>\n  </a>\n</div>\n'},function(t,e){t.exports='<form>\n  <div class="form-group">\n    <label for="inputCity">City</label>\n    <input type="text" class="form-control" id="inputCity" placeholder="City" ng-model="$ctrl.edit.city">\n  </div>\n  <div class="form-group">\n    <label for="inputUniversity">University</label>\n    <input type="text" class="form-control" id="inputUniversity" placeholder="University" ng-model="$ctrl.edit.university">\n  </div>\n  <div class="form-group">\n    <label for="inputFaculty">Faculty</label>\n    <input type="text" class="form-control" id="inputFaculty" placeholder="Faculty" ng-model="$ctrl.edit.faculty">\n  </div>\n  <button type="submit" class="btn btn-default" disabled>Submit</button>\n</form>\n'},function(t,e){t.exports='<div class="form-group">\n  <label for="facultyInput" class="sr-only">Faculty</label>\n  <input\n    type="search"\n    class="form-control"\n    id="facultyInput"\n    placeholder="Faculty"\n    ng-model="$ctrl.search"\n    ng-model-options="{updateOn: \'default blur\', debounce: {default: 300, blur: 0}}"\n    ng-change="$ctrl.searchUpdate()"\n  >\n</div>\n<div class="list-group">\n  <a\n    class="list-group-item"\n    ng-repeat="faculty in $ctrl.faculties"\n    ui-sref="city.university.faculty.edit({facultyId: faculty.id})"\n  >\n    {{faculty.title}}\n  </a>\n</div>\n'},function(t,e){t.exports='<div ng-if="$ctrl.show" class="loading"></div>\n'},function(t,e){t.exports='<div class="form-group">\n  <label for="universityInput" class="sr-only">University</label>\n  <input\n    type="search"\n    class="form-control"\n    id="universityInput"\n    placeholder="University"\n    ng-model="$ctrl.search"\n    ng-model-options="{updateOn: \'default blur\', debounce: {default: 300, blur: 0}}"\n    ng-change="$ctrl.searchUpdate()"\n  >\n</div>\n<div class="list-group">\n  <a\n    class="list-group-item"\n    ng-repeat="university in $ctrl.universities"\n    ui-sref="city.university.faculty({universityId: university.id})"\n  >\n    {{university.title}}\n  </a>\n</div>\n'},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.app=void 0;var r=n(0),s=i(r),c=n(1),u=i(c),o=n(8),l=n(3),a=n(7),d=n(5),p=n(6),f=n(4),y=n(10),v=i(y),m=n(11),h=i(m),g=n(9),b=i(g);n(2);var $=e.app="app";s.default.module($,[u.default]).config(v.default).config(h.default).config(b.default).factory("Api",o.api).component("city",l.city).component("university",a.university).component("faculty",d.faculty).component("loading",p.loading).component("edit",f.edit)}],[19]);