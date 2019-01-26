webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\r\n  <app-todo-list-header (add)=\"onAddTodo($event)\"></app-todo-list-header>\r\n  <app-todo-list [todos]=\"todos\" (toggleComplete)=\"onToggleTodoComplete($event)\"\r\n                 (remove)=\"onRemoveTodo($event)\"></app-todo-list>\r\n  <app-todo-list-footer [todos]=\"todos\"></app-todo-list-footer>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_data_service__ = __webpack_require__("./src/app/todo-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(todoDataService) {
        this.todoDataService = todoDataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.todoDataService.updateList();
    };
    AppComponent.prototype.onAddTodo = function (todo) {
        this.todoDataService.addTodo(todo);
    };
    AppComponent.prototype.onToggleTodoComplete = function (todo) {
        this.todoDataService.toggleTodoComplete(todo);
    };
    AppComponent.prototype.onRemoveTodo = function (todo) {
        this.todoDataService.deleteTodoById(todo.id);
    };
    Object.defineProperty(AppComponent.prototype, "todos", {
        get: function () {
            return this.todoDataService.getAllTodos();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_list_todo_list_component__ = __webpack_require__("./src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_list_footer_todo_list_footer_component__ = __webpack_require__("./src/app/todo-list-footer/todo-list-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_list_header_todo_list_header_component__ = __webpack_require__("./src/app/todo-list-header/todo-list-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_data_service__ = __webpack_require__("./src/app/todo-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_list_item_todo_list_item_component__ = __webpack_require__("./src/app/todo-list-item/todo-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_todo_service__ = __webpack_require__("./src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todo_list_todo_list_component__["a" /* TodoListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__todo_list_footer_todo_list_footer_component__["a" /* TodoListFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__todo_list_header_todo_list_header_component__["a" /* TodoListHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__todo_list_item_todo_list_item_component__["a" /* TodoListItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_todo_service__["a" /* TodoService */],
                __WEBPACK_IMPORTED_MODULE_8__todo_data_service__["a" /* TodoDataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:8080/api/todo/';
    }
    TodoService.prototype.getAll = function () {
        return this.httpClient
            .get(this.baseUrl)
            .pipe(function (todo) {
            return todo;
        });
    };
    TodoService.prototype.getOne = function (id) {
        return this.httpClient
            .get(this.baseUrl + id)
            .pipe(function (todo) {
            return todo;
        });
    };
    TodoService.prototype.create = function (obj) {
        return this.httpClient
            .post(this.baseUrl, obj)
            .pipe(function (todo) {
            return todo;
        });
    };
    TodoService.prototype.done = function (id) {
        return this.httpClient
            .post(this.baseUrl + id, null)
            .pipe(function (todo) {
            return todo;
        });
    };
    TodoService.prototype.undone = function (id) {
        return this.httpClient
            .post(this.baseUrl + id, null)
            .pipe(function (todo) {
            return todo;
        });
    };
    TodoService.prototype.delete = function (id) {
        return this.httpClient
            .delete(this.baseUrl + id);
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/todo-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDataService = /** @class */ (function () {
    function TodoDataService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:8080/api/todo/';
        // Placeholder for last id so we can simulate
        // automatic incrementing of id's
        this.lastId = 0;
        // Placeholder for todo's
        this.todos = [];
    }
    // Simulate POST /todos
    TodoDataService.prototype.addTodo = function (todo) {
        var _this = this;
        this.httpClient
            .post(this.baseUrl, todo)
            .subscribe(function (todo) {
            _this.todos.push(todo);
            _this.updateList();
        }, function (err) {
            console.log(err);
        });
        return this;
    };
    TodoDataService.prototype.updateList = function () {
        var _this = this;
        this.httpClient
            .get(this.baseUrl)
            .subscribe(function (todo) {
            _this.todos = todo;
        }, function (err) {
            console.log(err);
        });
    };
    // Simulate DELETE /todos/:id
    TodoDataService.prototype.deleteTodoById = function (id) {
        var _this = this;
        this.todos = this.todos
            .filter(function (todo) { return todo.id !== id; });
        this.httpClient.delete(this.baseUrl + id).subscribe(function () {
            _this.updateList();
        }, function (err) {
            console.log(err);
        });
        this.updateList();
        return this;
    };
    // Simulate PUT /todos/:id
    TodoDataService.prototype.updateTodoById = function (id, values) {
        if (values === void 0) { values = {}; }
        var todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        // noinspection TypeScriptUnresolvedFunction
        Object.assign(todo, values);
        return todo;
    };
    // Simulate GET /todos
    TodoDataService.prototype.getAllTodos = function () {
        return this.todos;
    };
    // Simulate GET /todos/:id
    TodoDataService.prototype.getTodoById = function (id) {
        return this.todos
            .filter(function (todo) { return todo.id === id; })
            .pop();
    };
    // Toggle todo complete
    TodoDataService.prototype.toggleTodoComplete = function (todo) {
        var _this = this;
        if (todo.finalizado === true) {
            this.httpClient.post(this.baseUrl + 'undone/' + todo.id, null)
                .subscribe(function () {
                _this.updateList();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.httpClient.post(this.baseUrl + todo.id, null)
                .subscribe(function () {
                _this.updateList();
            }, function (err) {
                console.log(err);
            });
        }
        var updatedTodo = this.updateTodoById(todo.id, {
            complete: !todo.finalizado
        });
        return updatedTodo;
    };
    TodoDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoDataService);
    return TodoDataService;
}());



/***/ }),

/***/ "./src/app/todo-list-footer/todo-list-footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-list-footer/todo-list-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" *ngIf=\"todos.length > 0\">\r\n  <span class=\"todo-count\"><strong>{{todos.length}}</strong> {{todos.length == 1 ? 'item' : 'items'}} left</span>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/todo-list-footer/todo-list-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListFooterComponent = /** @class */ (function () {
    function TodoListFooterComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], TodoListFooterComponent.prototype, "todos", void 0);
    TodoListFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todo-list-footer',
            template: __webpack_require__("./src/app/todo-list-footer/todo-list-footer.component.html"),
            styles: [__webpack_require__("./src/app/todo-list-footer/todo-list-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListFooterComponent);
    return TodoListFooterComponent;
}());



/***/ }),

/***/ "./src/app/todo-list-header/todo-list-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-list-header/todo-list-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <h1>Todos</h1>\r\n  <input class=\"new-todo\" placeholder=\"What needs to be done?\" autofocus=\"\" [(ngModel)]=\"newTodo.atividade\"\r\n         (keyup.enter)=\"addTodo()\">\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/todo-list-header/todo-list-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("./src/app/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListHeaderComponent = /** @class */ (function () {
    function TodoListHeaderComponent() {
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */]();
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    TodoListHeaderComponent.prototype.addTodo = function () {
        this.add.emit(this.newTodo);
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TodoListHeaderComponent.prototype, "add", void 0);
    TodoListHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todo-list-header',
            template: __webpack_require__("./src/app/todo-list-header/todo-list-header.component.html"),
            styles: [__webpack_require__("./src/app/todo-list-header/todo-list-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListHeaderComponent);
    return TodoListHeaderComponent;
}());



/***/ }),

/***/ "./src/app/todo-list-item/todo-list-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-list-item/todo-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\r\n  <input class=\"toggle\" type=\"checkbox\" (click)=\"toggleTodoComplete(todo)\" [checked]=\"todo.finalizado\">\r\n  <label>{{todo.atividade}}</label>\r\n  <button class=\"destroy\" (click)=\"removeTodo(todo)\"></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo-list-item/todo-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("./src/app/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListItemComponent = /** @class */ (function () {
    function TodoListItemComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.toggleComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    TodoListItemComponent.prototype.toggleTodoComplete = function (todo) {
        this.toggleComplete.emit(todo);
    };
    TodoListItemComponent.prototype.removeTodo = function (todo) {
        this.remove.emit(todo);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */])
    ], TodoListItemComponent.prototype, "todo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TodoListItemComponent.prototype, "remove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TodoListItemComponent.prototype, "toggleComplete", void 0);
    TodoListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todo-list-item',
            template: __webpack_require__("./src/app/todo-list-item/todo-list-item.component.html"),
            styles: [__webpack_require__("./src/app/todo-list-item/todo-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListItemComponent);
    return TodoListItemComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main\" *ngIf=\"todos.length > 0\">\r\n  <ul class=\"todo-list\">\r\n    <li *ngFor=\"let todo of todos\" [class.completed]=\"todo.finalizado\">\r\n      <app-todo-list-item\r\n        [todo]=\"todo\"\r\n        (toggleComplete)=\"onToggleTodoComplete($event)\"\r\n        (remove)=\"onRemoveTodo($event)\"></app-todo-list-item>\r\n    </li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListComponent = /** @class */ (function () {
    function TodoListComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.toggleComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    TodoListComponent.prototype.onToggleTodoComplete = function (todo) {
        this.toggleComplete.emit(todo);
    };
    TodoListComponent.prototype.onRemoveTodo = function (todo) {
        this.remove.emit(todo);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], TodoListComponent.prototype, "todos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TodoListComponent.prototype, "remove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TodoListComponent.prototype, "toggleComplete", void 0);
    TodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todo-list',
            template: __webpack_require__("./src/app/todo-list/todo-list.component.html"),
            styles: [__webpack_require__("./src/app/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(values) {
        if (values === void 0) { values = {}; }
        this.atividade = '';
        this.finalizado = false;
        Object.assign(this, values);
    }
    return Todo;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map