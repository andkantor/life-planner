"use strict";angular.module("lifePlannerApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","mgcrea.ngStrap","pascalprecht.translate"]).config(["$routeProvider","$translateProvider",function(a,b){a.when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/mission",{templateUrl:"views/mission.html",controller:"MissionCtrl"}).when("/goals",{templateUrl:"views/goal-list.html",controller:"GoalListCtrl"}).when("/goal/create",{templateUrl:"views/goal-create.html",controller:"GoalCreateCtrl"}).when("/goal/:id",{templateUrl:"views/goal-view.html",controller:"GoalViewCtrl"}).otherwise({redirectTo:"/"}),b.translations("en_EN",{login:{title:"Please sign in",username:"Username",password:"Password",login:"Sign in",success:"You have signed in successfully.",error:{username:"Username cannot be empty!",password:"Password cannot be empty!",invalidPassword:"Invalid password!"}},menu:{title:"Life Planner",home:"Home",mission:"Mission",goals:"Goals",activities:"Activities"},button:{create:"Create",save:"Save",cancel:"Cancel",edit:"Edit","delete":"Delete"},home:{activities:{prevWeek:"Activities previous week",thisWeek:"Activities this week",nextWeek:"Activities next week",afterNextWeek:"Activities after next week"}},mission:{title:"Personal Mission Statement",addRoleButton:"Add new Role",roleModalTitle:"Add new Role",role:{button:{showGoals:"Goals"}}},role:{name:"Name",statement:"Statement"},goal:{list:{title:"Goals",numberOfGoals:"Number of active goals: ",noGoals:"There are no goals yet.",modalTitle:"Create new goal",saveSuccessText:"You have successfully saved the goal!"},modal:{alsoCreateActivity:"Also create activity."},name:"Name",description:"Description",imageUrl:"Image Url",priority:"Priority",status:{status:"Status","new":"New",inProgress:"In Progress",done:"Done"},roles:"Roles",tags:"Tags",date:"Date to achieve"},activity:{list:{noActivities:"There are no activities yet.",saveSuccessText:"You have successfully saved the activity!"},modal:{title:"Add new activity"},title:"Title",status:{status:"Status","new":"New",done:"Done"},date:"Date to perform"},schedule:{reschedule:{bringForwardOneDay:"Bring forward by a day",bringForwardOneWeek:"Bring forward by a week",bringForwardOneMonth:"Bring forward by a month",postponeOneDay:"Postpone by a day",postponeOneWeek:"Postpone by a week",postponeOneMonth:"Postpone by a month"}}})}]).run(["$rootScope","$location","User",function(a,b,c){a.$on("$routeChangeStart",function(a,d){c.isLogged()||"views/login.html"!==d.loadedTemplateUrl&&b.path("/login")})}]),angular.module("lifePlannerApp").controller("GoalListCtrl",["$scope","GoalList","GoalConfig",function(a,b,c){a.goals=b.all(),a.isActive=function(a){return a.status!==c.statuses.done}}]),angular.module("lifePlannerApp").directive("lpGoalTable",["$location",function(a){return{templateUrl:"views/templates/directive/goal/lp-goal-table.html",restrict:"E",scope:{goals:"=",noGoalsText:"@",enableAdd:"=?"},link:function(b){b.viewGoal=function(b){a.path("/goal/"+b.id)},b.removeGoal=function(a){a.remove()}}}}]),angular.module("lifePlannerApp").controller("MainCtrl",["$scope","$translate","User","DataLoader","SecretProvider",function(a,b,c,d,e){b.use("en_EN"),a.user=c}]),angular.module("lifePlannerApp").service("Storage",function(){this.get=function(a,b){return localStorage[a]?JSON.parse(localStorage[a]):b},this.set=function(a,b){localStorage[a]=JSON.stringify(b)}}),angular.module("lifePlannerApp").directive("lpGoalView",["ActivityList",function(a){return{templateUrl:"views/templates/directive/goal/lp-goal-view.html",restrict:"E",link:function(b){b.activities=_.filter(a.all(),function(a){return a.goalId===b.goal.id})}}}]),angular.module("lifePlannerApp").controller("GoalViewCtrl",["$scope","$routeParams","GoalList",function(a,b,c){a.goal=c.get(b.id)}]),angular.module("lifePlannerApp").service("GoalConfig",function(){this.statuses={"new":"new",inProgress:"inProgress",done:"done"},this.priorities=[1,2,3,4,5,6,7,8,9],this.tags=["life","family","sport","career","health","future","personality","product","entertainment","experience","donation","learn","hobby","important","other"].sort()}),angular.module("lifePlannerApp").controller("HomeCtrl",["$scope","DateHelper",function(a,b){a.prevWeek=b.getWeek(b.getDate(-7)),a.thisWeek=b.getWeek(b.getDate()),a.nextWeek=b.getWeek(b.getDate(7)),a.afterNextWeek=b.getWeek(b.getDate(14))}]),angular.module("lifePlannerApp").directive("lpNavLink",["$location",function(a){return{templateUrl:"views/templates/directive/lp-nav-link.html",restrict:"E",replace:!0,scope:{title:"@",path:"@"},link:function(b){b.isActive=function(){return a.$$path===b.path}}}}]),angular.module("lifePlannerApp").factory("DateHelper",function(){var a,b={format:function(a){return a.toISOString().slice(0,10)},compare:function(a,c){return a=b.format(a),c=b.format(c),a>c?1:a===c?0:-1},getFirstDayOfWeek:function(a){var c=a.getDay(),d=a.getDate()-c+(0===c?-6:1);return a.setDate(d),b.format(a)},getLastDayOfWeek:function(a){var c=new Date(a);return c.setDate(c.getDate()+6),b.format(c)},getDate:function(b){return b=b||0,a=new Date,a.setDate(a.getDate()+b),a},getWeek:function(a){var d=b.getFirstDayOfWeek(a);return new c(d,b.getLastDayOfWeek(d))}},c=function(c,d){this.toString=function(){return c+" - "+d},this.isWithin=function(e){return a=b.format(e.date),a>=c&&d>=a}};return{format:b.format,compare:b.compare,getDate:b.getDate,getWeek:b.getWeek}}),angular.module("lifePlannerApp").controller("MissionCtrl",["$scope","$modal","RoleList",function(a,b,c){a.roles=c.all(),a.role=c.createSkeleton();var d=b({scope:a,templateUrl:"views/templates/modal/lp-role-modal.html",show:!1});a.addRole=function(){c.save(a.role),a.role=c.createSkeleton(),d.hide()},a.showModal=function(){d.$promise.then(d.show)}}]),angular.module("lifePlannerApp").directive("lpRoleRow",["$filter","GoalList",function(a,b){return{templateUrl:"views/templates/directive/lp-role-row.html",restrict:"E",scope:{role:"="},link:function(a){a.editable=!1,a.showGoals=!1,a.goals=_.filter(b.all(),function(b){return b.hasRole(a.role)}),a.showForm=function(){a.editable=!0},a.saveRole=function(){a.editable=!1,a.role.save()},a.removeRole=function(){a.role.remove()}}}}]),angular.module("lifePlannerApp").factory("ListFactory",["UserAwareStorage",function(a){var b=function(b){var c;this.load=function(){c=a.get(b,{elements:[],nextId:1})},this.load(),this.get=function(a){return a=parseInt(a),_.find(c.elements,function(b){return b.id===a})},this.remove=function(d){_.remove(c.elements,function(a){return a.id===d.id}),a.set(b,c)},this.save=function(d){d.id||(d.id=c.nextId++,c.elements.push(d)),a.set(b,c)},this.all=function(){return c.elements}};return{create:function(a){return new b(a)}}}]),angular.module("lifePlannerApp").factory("RoleList",["ListFactory",function(a){return a.create("LP-Roles")}]),angular.module("lifePlannerApp").factory("GoalList",["ListFactory",function(a){return a.create("LP-Goals")}]),angular.module("lifePlannerApp").factory("ActivityList",["ListFactory",function(a){return a.create("LP-Activities")}]),angular.module("lifePlannerApp").factory("RoleDecorator",["RoleList","GoalList",function(a,b){var c,d={addGoal:function(a){this.hasGoal(a)||this.goals.push(a.id)},hasGoal:function(a){return this.goals.indexOf(a.id)>-1},removeGoal:function(a){_.remove(this.goals,function(b){return b===a.id})},save:function(){var d=this;a.save(d),_.each(d.goals,function(a){c=b.get(a),c.addRole(d),b.save(c)})},remove:function(){var d=this;_.each(d.goals,function(a){c=b.get(a),c.removeRole(d),b.save(c)}),a.remove(d)}},e=function(a){_.each(a.all(),function(a){_.extend(a,d)})},f=function(a){a.createSkeleton=function(){var a={name:"",statement:"",goals:[]};return _.extend(a,d),a}};return{decorate:function(){e(a),f(a)}}}]),angular.module("lifePlannerApp").factory("GoalDecorator",["GoalList","RoleList","ActivityList",function(a,b,c){var d,e,f={addRole:function(a){this.hasRole(a)||this.roles.push(a.id)},hasRole:function(a){return this.roles.indexOf(a.id)>-1},removeRole:function(a){_.remove(this.roles,function(b){return b===a.id})},addActivity:function(a){this.hasActivity(a)||this.activities.push(a.id)},hasActivity:function(a){return this.activities.indexOf(a.id)>-1},removeActivity:function(a){_.remove(this.activities,function(b){return b===a.id})},save:function(){var f=this;a.save(f),_.each(f.roles,function(a){d=b.get(a),d.addGoal(f),b.save(d)}),_.each(f.activities,function(a){e=c.get(a),e.setGoal(f),c.save(e)})},remove:function(){var f=this;_.each(f.roles,function(a){d=b.get(a),d.removeGoal(f),b.save(d)}),_.each(f.activities,function(a){e=c.get(a),c.remove(e)}),a.remove(f)}},g=function(a){_.each(a.all(),function(a){_.extend(a,f),a.date=new Date(a.date)})},h=function(a){a.createSkeleton=function(){var a={name:"",description:"",status:"new",image:"",tags:[],priority:1,date:new Date,roles:[],activities:[]};return _.extend(a,f),a}};return{decorate:function(){g(a),h(a)}}}]),angular.module("lifePlannerApp").factory("ActivityDecorator",["ActivityList","GoalList",function(a,b){var c={setGoal:function(a){this.goalId=a.id},getGoal:function(){return b.get(this.goalId)},save:function(){a.save(this),this.getGoal().addActivity(this),this.getGoal().save()},remove:function(){this.getGoal().removeActivity(this),this.getGoal().save(),a.remove(this)}},d=function(a){_.each(a.all(),function(a){_.extend(a,c),a.date=new Date(a.date)})},e=function(a){a.createSkeleton=function(){var a={title:"",status:"new",date:new Date,goalId:0};return _.extend(a,c),a}};return{decorate:function(){d(a),e(a)}}}]),angular.module("lifePlannerApp").factory("Notifier",["$translate",function(a){var b={newest_on_top:!0,delay:2e3,timer:500,placement:{from:"top",align:"center"},offset:50,allow_dismiss:!0,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"}};return{success:function(c){a(c).then(function(a){$.notify(a,_.extend({type:"success"},b))})},error:function(c){a(c).then(function(a){$.notify(a,_.extend({type:"danger"},b))})}}}]),angular.module("lifePlannerApp").directive("lpActivityTable",["$translate","ActivityList","Scheduler","DateHelper",function(a,b,c,d){return{templateUrl:"views/templates/directive/activity/lp-activity-table.html",restrict:"E",scope:{title:"@",goal:"=?",condition:"=?",enableAdd:"=?"},link:function(e){e.activities=b.all(),e.goal&&void 0===e.condition&&(e.condition=function(a){return e.goal.id===a.goalId}),e.showChecked=!0,e.showUnchecked=!0,e.bringForwardActions={},_.each(c.BRING_FORWARD_ACTIONS,function(b){e.bringForwardActions[b]=a.instant("schedule.reschedule."+b)}),e.postponeActions={},_.each(c.POSTPONE_ACTIONS,function(b){e.postponeActions[b]=a.instant("schedule.reschedule."+b)}),e.reschedule=function(a,b){c.reschedule(a,b),1===d.compare(a.date,a.getGoal().date)&&(a.getGoal().date=new Date(d.format(a.date)),a.getGoal().save())},e.showActivity=function(a){return"done"===a.status&&e.showChecked||"new"===a.status&&e.showUnchecked},e.changeActivityStatus=function(a){a.status="done"===a.status?"new":"done",a.save()},e.removeActivity=function(a){a.remove()}}}}]),angular.module("lifePlannerApp").directive("lpActivityCreateButton",["$modal","ActivityList","Notifier",function(a,b,c){return{templateUrl:"views/templates/directive/activity/lp-activity-create-button.html",restrict:"E",replace:!0,scope:{goal:"="},link:function(d){d.activity=b.createSkeleton();var e=a({scope:d,templateUrl:"views/templates/modal/lp-activity-modal.html",show:!1});d.statuses={"new":"new",done:"done"},d.addActivity=function(){d.activity.setGoal(d.goal),d.activity.save(),e.hide(),c.success("activity.list.saveSuccessText"),d.activity=b.createSkeleton()},d.showActivityModal=function(){e.$promise.then(e.show).then()}}}}]),angular.module("lifePlannerApp").directive("lpGoalStatusDropdown",["GoalConfig",function(a){return{templateUrl:"views/templates/directive/goal/lp-goal-status-dropdown.html",restrict:"E",scope:{goal:"="},link:function(b){b.statuses=a.statuses,b.changeStatus=function(a){b.goal.status=a,b.goal.save()}}}}]),angular.module("lifePlannerApp").directive("lpGoalPriorityDropdown",["GoalConfig",function(a){return{templateUrl:"views/templates/directive/goal/lp-goal-priority-dropdown.html",restrict:"E",scope:{goal:"="},link:function(b){b.priorities=a.priorities,b.changePriority=function(a){b.goal.priority=a,b.goal.save()}}}}]),angular.module("lifePlannerApp").factory("Cipher",["SecretProvider",function(a){var b=function(b){return CryptoJS.AES.encrypt(b,a.getSecret()).toString()},c=function(b){return CryptoJS.AES.decrypt(b,a.getSecret()).toString(CryptoJS.enc.Utf8)};return{encrypt:function(a){return b(a)},decrypt:function(a){return c(a)}}}]),angular.module("lifePlannerApp").factory("SecretProvider",function(){var a="";return{setSecret:function(b){a=b},getSecret:function(){return a}}}),angular.module("lifePlannerApp").factory("User",function(){return{username:"",password:"",loggedIn:!1,isLogged:function(){return this.loggedIn}}}),angular.module("lifePlannerApp").controller("LoginCtrl",["$scope","$location","User","UserList","Cipher","SecretProvider","DataLoader","Notifier",function(a,b,c,d,e,f,g,h){var i="apple";a.username="",a.password="";var j=function(){if(""===a.username)return h.error("login.error.username"),!1;if(""===a.password)return h.error("login.error.password"),!1;var b=d.get(a.username);return b&&(f.setSecret(a.password),e.decrypt(b.passwordCheck)!==i)?(h.error("login.error.invalidPassword"),!1):!0};a.login=function(){if(j()){f.setSecret(a.password);var h=d.get(a.username);h||(h={username:a.username,passwordCheck:e.encrypt(i).toString()},d.save(h)),c.username=a.username,c.password=a.password,c.loggedIn=!0,g.load(),b.path("/")}}}]),angular.module("lifePlannerApp").factory("UserList",["Storage",function(a){var b=function(b){var c=a.get(b,{elements:[],nextId:1});this.get=function(a){return _.find(c.elements,function(b){return b.username===a})},this.save=function(d){d.id||(d.id=c.nextId++,c.elements.push(d)),a.set(b,c)}};return new b("LP-Users")}]),angular.module("lifePlannerApp").service("UserAwareStorage",["User","Cipher",function(a,b){this.get=function(c,d){return c=c+"-"+a.username,localStorage[c]?JSON.parse(b.decrypt(localStorage[c])):d},this.set=function(c,d){c=c+"-"+a.username,localStorage[c]=b.encrypt(JSON.stringify(d))}}]),angular.module("lifePlannerApp").factory("DataLoader",["ActivityList","ActivityDecorator","GoalList","GoalDecorator","RoleList","RoleDecorator",function(a,b,c,d,e,f){return{load:function(){a.load(),b.decorate(),c.load(),d.decorate(),e.load(),f.decorate()}}}]),angular.module("lifePlannerApp").factory("Scheduler",function(){var a={reschedule:function(a,b){switch(b){case"bringForwardOneDay":return void a.date.setDate(a.date.getDate()-1);case"bringForwardOneWeek":return void a.date.setDate(a.date.getDate()-7);case"bringForwardOneMonth":return void a.date.setMonth(a.date.getMonth()-1);case"postponeOneDay":return void a.date.setDate(a.date.getDate()+1);case"postponeOneWeek":return void a.date.setDate(a.date.getDate()+7);case"postponeOneMonth":return void a.date.setMonth(a.date.getMonth()+1)}}};return{BRING_FORWARD_ACTIONS:["bringForwardOneDay","bringForwardOneWeek","bringForwardOneMonth"],POSTPONE_ACTIONS:["postponeOneDay","postponeOneWeek","postponeOneMonth"],reschedule:function(b,c){return a.reschedule(b,c)}}}),angular.module("lifePlannerApp").controller("GoalCreateCtrl",["$scope","$location","GoalList","RoleList","GoalConfig","ActivityList","Notifier",function(a,b,c,d,e,f,g){a.goal=c.createSkeleton(),a.roles=d.all(),a.alsoCreateActivity=!0,a.goalConfig=e,a.selectPriority=function(b){a.goal.priority=b},a.toggleRole=function(b){a.goal.hasRole(b)?a.goal.removeRole(b):a.goal.addRole(b)},a.saveGoal=function(){if(a.goal.save(),a.alsoCreateActivity){var c=f.createSkeleton();c.setGoal(a.goal),c.title=a.goal.name,c.date=a.goal.date,c.save()}g.success("goal.list.saveSuccessText"),b.path("/goals")}}]),angular.module("lifePlannerApp").run(["$templateCache",function(a){a.put("views/goal-create.html",'<div> <form role="form" id="add-goal" name="goalForm"> <div class="modal-body"> <div class="form-group"> <label for="goal-name" translate>goal.name</label> <input type="text" class="form-control" id="goal-name" ng-model="goal.name" required> </div> <div class="form-group"> <label for="goal-image" translate>goal.imageUrl</label> <input type="url" class="form-control" id="goal-image" ng-model="goal.image"> </div> <div class="form-group"> <div><label translate>goal.priority</label></div> <div class="btn-group" role="group"> <button type="button" class="btn btn-default" ng-repeat="priority in goalConfig.priorities track by $index" ng-class="{active: goal.priority == priority }" ng-click="selectPriority(priority)">{{priority}} </button> </div> </div> <div class="form-group"> <div><label translate>goal.roles</label></div> <div class="btn-group" role="group"> <button type="button" class="btn btn-default" ng-repeat="role in roles track by $index" ng-class="{active: goal.hasRole(role) }" ng-click="toggleRole(role)">{{role.name}} </button> </div> </div> <div class="form-group"> <label for="goal-status" translate>goal.status.status</label> <select class="form-control" id="goal-status" ng-model="goal.status" required> <option ng-selected="true" value="{{goalConfig.statuses.new}}" translate>goal.status.new</option> <option value="{{goalConfig.statuses.inProgress}}" translate>goal.status.inProgress</option> <option value="{{goalConfig.statuses.done}}" translate>goal.status.done</option> </select> </div> <div class="form-group"> <label for="goal-date" translate>goal.date</label> <input type="date" class="form-control" id="goal-date" ng-model="goal.date" required> </div> <div class="form-group"> <input type="checkbox" id="also-create-activity" ng-model="alsoCreateActivity"> <label for="also-create-activity" translate>goal.modal.alsoCreateActivity</label> </div> </div> <div class="modal-footer"> <button type="submit" class="btn btn-success" ng-click="saveGoal()" ng-disabled="!goalForm.$valid" translate>button.save </button> <button type="button" class="btn btn-danger" ng-click="$hide()" translate>button.cancel </button> </div> </form> </div>'),a.put("views/goal-list.html",'<div> <div> <h2 translate>goal.list.title</h2> </div> <div>{{\'goal.list.numberOfGoals\'|translate}} {{(goals|filter:isActive).length}}</div> <div class="clearfix"></div> <lp-goal-table goals="goals" no-goals-text="{{\'goal.list.noGoals\'|translate}}" enable-add="true"></lp-goal-table> </div>'),a.put("views/goal-view.html","<div> <lp-goal-view></lp-goal-view> </div>"),a.put("views/home.html",'<div> <lp-activity-table title="{{\'home.activities.prevWeek\'|translate}}" condition="prevWeek.isWithin"></lp-activity-table> <lp-activity-table title="{{\'home.activities.thisWeek\'|translate}}" condition="thisWeek.isWithin"></lp-activity-table> <lp-activity-table title="{{\'home.activities.nextWeek\'|translate}}" condition="nextWeek.isWithin"></lp-activity-table> <lp-activity-table title="{{\'home.activities.afterNextWeek\'|translate}}" condition="afterNextWeek.isWithin"></lp-activity-table> </div>'),a.put("views/login.html",'<div style="width: 400px"> <h3 translate>login.title</h3> <div class="form-group"> <div translate>login.username</div> <input class="form-control" type="text" ng-model="username"> </div> <div class="form-group"> <div translate>login.password</div> <input class="form-control" type="password" ng-model="password"> </div> <div class="form-group"> <button type="submit" class="btn btn-sm btn-success" ng-click="login()" translate>login.login</button> </div> </div>'),a.put("views/mission.html",'<div> <div> <h1 translate>mission.title</h1> </div> <div> <div class="pull-right"> <a class="btn btn-sm btn-success" ng-click="showModal()"> <span class="glyphicon glyphicon-plus"></span> </a> </div> <div class="clearfix"></div> </div> <div class="roles"> <div ng-repeat="role in roles track by $index"> <lp-role-row role="role"></lp-role-row> </div> </div> </div>'),a.put("views/templates/directive/activity/lp-activity-create-button.html",'<a role="button" class="btn btn-sm btn-success" ng-click="showActivityModal()"> <span class="glyphicon glyphicon-plus"></span> </a>'),a.put("views/templates/directive/activity/lp-activity-table.html",'<div> <div class="panel"> <table class="table table-hover"> <thead> <tr> <th colspan="2">{{title}}</th> <th> <div class="btn-group pull-right" role="group"> <a class="btn btn-sm btn-default" role="button" ng-class="{active: showChecked}" ng-click="showChecked = !showChecked"> <span class="glyphicon glyphicon-check"></span> </a> <a class="btn btn-sm btn-default" role="button" ng-class="{active: showUnchecked}" ng-click="showUnchecked = !showUnchecked"> <span class="glyphicon glyphicon-unchecked"></span> </a> <lp-activity-create-button goal="goal" ng-if="enableAdd"></lp-activity-create-button> </div> </th> </tr> </thead> <tbody> <tr ng-if="!activities.length" class="text-center"> <td colspan="3" translate>activity.list.noActivities</td> </tr> <tr ng-repeat="activity in activities | orderBy:\'date\' track by $index" ng-if="condition(activity)" ng-show="showActivity(activity)"> <td class="col-xs-8">{{activity.title}}</td> <td class="col-xs-2">{{activity.date|date:\'mediumDate\'}}</td> <td class="col-xs-2"> <div class="btn-group pull-right" role="group"> <div class="pull-left dropdown"> <a class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="glyphicon glyphicon-time"></span> </a> <ul class="dropdown-menu"> <li ng-repeat="(action, title) in bringForwardActions track by $index"> <a role="button" ng-click="reschedule(activity, action)">{{title}}</a> </li> <li role="separator" class="divider"></li> <li ng-repeat="(action, title) in postponeActions track by $index"> <a role="button" ng-click="reschedule(activity, action)">{{title}}</a> </li> </ul> </div> <a class="btn btn-sm btn-default" role="button" ng-class="{\'btn-success\': activity.status == \'done\'}" ng-click="changeActivityStatus(activity)"> <span class="glyphicon glyphicon-ok"></span> </a> <a class="btn btn-sm btn-default" role="button" ng-click="removeActivity(activity)"> <span class="glyphicon glyphicon-remove"></span> </a> </div> </td> </tr> </tbody> </table> </div> </div>'),a.put("views/templates/directive/goal/lp-goal-priority-dropdown.html",'<div class="dropdown"> <a class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {{goal.priority}} </a> <ul class="dropdown-menu"> <li ng-repeat="priority in priorities track by $index"> <a role="button" ng-click="changePriority(priority)">{{priority}}</a> </li> </ul> </div>'),a.put("views/templates/directive/goal/lp-goal-status-dropdown.html",'<div class="dropdown"> <a class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {{\'goal.status.\' + goal.status|translate}} </a> <ul class="dropdown-menu"> <li ng-repeat="status in statuses track by $index"> <a role="button" ng-click="changeStatus(status)" translate>{{\'goal.status.\' + status|translate}}</a> </li> </ul> </div>'),a.put("views/templates/directive/goal/lp-goal-table.html",'<div> <div class="panel"> <table class="table table-hover"> <thead> <tr> <th>#</th> <th translate>goal.name</th> <th translate>goal.priority</th> <th translate>goal.status.status</th> <th translate>goal.date</th> <th> <div class="btn-group" role="group"> <a role="button" class="btn btn-sm btn-success" ng-if="enableAdd" ng-href="#/goal/create"> <span class="glyphicon glyphicon-plus"></span> </a> </div> </th> </tr> </thead> <tbody> <tr ng-if="!goals.length" class="text-center"> <td colspan="5" translate>{{noGoalsText}}</td> </tr> <tr ng-repeat="goal in goals | orderBy:\'date\' track by goal.id"> <td class="col-xs-1">{{goal.id}}</td> <td class="col-xs-4" role="button" ng-click="viewGoal(goal)">{{goal.name}}</td> <td class="col-xs-1"> {{goal.priority}} </td> <td class="col-xs-3"> {{goal.status}} </td> <td class="col-xs-3"> {{goal.date|date}} </td> <td class="col-xs-1"> <div class="btn-group pull-right" role="group"> <a class="btn btn-sm btn-default" role="button" ng-click="removeGoal(goal)"> <span class="glyphicon glyphicon-remove"></span> </a> </div> </td> </tr> </tbody> </table> </div> </div>'),a.put("views/templates/directive/goal/lp-goal-view.html",'<div class="goal-view"> <h2>{{goal.name}}</h2> <div> <div class="pull-left goal-view-left"> <img src="{{goal.image}}" width="300" height="300"> </div> <div class="pull-left goal-view-right"> <!--<div class="">--> <!--{{\'goal.description\'|translate}}: {{goal.description}}--> <!--</div>--> <div class=""> {{\'goal.priority\'|translate}}: {{goal.priority}} </div> <div class=""> {{\'goal.status.status\'|translate}}: {{goal.status}} </div> <div class=""> {{\'goal.date\'|translate}}: {{goal.date|date}} </div> <!--<div class="">--> <!--{{\'goal.tags\'|translate}}: {{goal.tags.join(\', \')}}--> <!--</div>--> </div> <div class="clearfix"></div> <lp-activity-table title="{{\'activity.list.title\'|translate}}" goal="goal" enable-add="true"></lp-activity-table> </div> </div>'),a.put("views/templates/directive/lp-nav-link.html",'<li ng-class="{active: isActive()}"> <a ng-href="#{{path}}" class="navbar-item">{{title}}</a> </li>'),a.put("views/templates/directive/lp-role-row.html",'<div class="role-row" ng-show="!editable"> <div> <div class="pull-left"> <h2>{{role.name}}</h2> </div> <div class="pull-right dropdown" style="padding-top: 20px"> <a class="btn btn-sm btn-default" role="button" ng-click="showGoals = !showGoals" ng-class="{active: showGoals}"><span class="glyphicon" ng-class="{\'glyphicon-chevron-down\': !showGoals, \'glyphicon-chevron-up\': showGoals }"></span> </a> <a class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="glyphicon glyphicon-option-vertical"></span> </a> <ul class="dropdown-menu"> <li> <a role="button" ng-click="showForm()" translate>button.edit</a> </li> <li> <a role="button" ng-click="removeRole()" translate>button.delete</a> </li> </ul> </div> <div class="clearfix"></div> </div> <div>{{role.statement}}</div> <div ng-show="showGoals"> <lp-goal-table goals="goals" no-goals-text="{{\'goal.list.noGoals\'|translate}}" enable-add="false"></lp-goal-table> </div> </div> <div class="role-form" ng-show="editable"> <div class="form-group"> <input class="form-control" ng-model="role.name"> </div> <div class="form-group"> <textarea class="form-control" ng-model="role.statement" rows="5"></textarea> </div> <div> <a class="btn btn-success" ng-click="saveRole()" translate>button.save</a> </div> </div>'),a.put("views/templates/modal/lp-activity-modal.html",'<div class="modal" tabindex="-1" role="dialog"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" ng-click="$hide()"> &times;</button> <h4 class="modal-title" translate>activity.modal.title</h4> </div> <form role="form" id="add-activity" name="activityForm"> <div class="modal-body"> <div class="form-group"> <label for="activity-title" translate>activity.title</label> <input type="text" class="form-control" id="activity-title" ng-model="activity.title" required> </div> <div class="form-group"> <label for="activity-status" translate>activity.status.status</label> <select class="form-control" id="activity-status" ng-model="activity.status" required> <option ng-selected="true" value="{{statuses.new}}" translate>activity.status.new</option> <option value="{{statuses.done}}" translate>activity.status.done</option> </select> </div> <div class="form-group"> <label for="activity-date" translate>activity.date</label> <input type="date" class="form-control" id="activity-date" ng-model="activity.date" required> </div> <div class="modal-footer"> <button type="submit" class="btn btn-success" ng-click="addActivity()" ng-disabled="!activityForm.$valid" translate>button.save </button> <button type="button" class="btn btn-danger" ng-click="$hide()" translate>button.cancel </button> </div> </div></form> </div> </div> </div>'),a.put("views/templates/modal/lp-role-modal.html",'<div class="modal" tabindex="-1" role="dialog"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" ng-click="$hide()"> &times;</button> <h4 class="modal-title" translate>mission.roleModalTitle</h4> </div> <form role="form" id="add-role" name="roleForm"> <div class="modal-body"> <div class="form-group"> <label for="role-name" translate>role.name</label> <input type="text" class="form-control" id="role-name" ng-model="role.name" required> </div> <div class="form-group"> <label for="role-statement" translate>role.statement</label> <textarea class="form-control" id="role-statement" rows="5" ng-model="role.statement" required>\r\n                            </textarea> </div> <div class="modal-footer"> <button type="submit" class="btn btn-success" ng-click="addRole()" ng-disabled="!roleForm.$valid" translate>button.save </button> <button type="button" class="btn btn-danger" ng-click="$hide()" translate>button.cancel </button> </div> </div></form> </div> </div> </div>')}]);