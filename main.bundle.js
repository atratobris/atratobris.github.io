webpackJsonp([0,4],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* ENV */].apiUrl + "/sessions";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
        this.idKey = 'atrato-user-id';
        this.nameKey = 'atrato-user-name';
    }
    AuthenticationService.prototype.canActivate = function () {
        if (this.loggedIn()) {
            return true;
        }
        this.router.navigate(['/authentication']);
        return false;
    };
    AuthenticationService.prototype.logIn = function (user) {
        var _this = this;
        return this.http
            .post(this.apiUrl + ".json", JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var jsonResponse = response.json();
            _this.setCurrentUserId(jsonResponse.id);
            _this.setUserName(jsonResponse.name);
            _this.handleLoggedIn();
        }).catch(this.handleError);
    };
    AuthenticationService.prototype.loggedIn = function () {
        return !!this.getCurrentUserId();
    };
    AuthenticationService.prototype.handleLoggedIn = function () {
        if (this.loggedIn()) {
            this.redirectToRoot();
        }
    };
    AuthenticationService.prototype.redirectToRoot = function (params) {
        if (params) {
            var navigationExtras = {
                queryParams: params,
            };
            this.router.navigate(['/sketches'], navigationExtras);
        }
        else {
            this.router.navigate(['/sketches']);
        }
    };
    AuthenticationService.prototype.getCurrentUserId = function () {
        return parseInt(localStorage.getItem(this.idKey), 10);
    };
    AuthenticationService.prototype.setCurrentUserId = function (value) {
        localStorage.setItem(this.idKey, value);
    };
    AuthenticationService.prototype.getUserName = function () {
        return localStorage.getItem(this.nameKey);
    };
    AuthenticationService.prototype.setUserName = function (value) {
        localStorage.setItem(this.nameKey, value);
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(this.idKey);
        this.router.navigate(['/authentication']);
    };
    AuthenticationService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/authentication.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_colours__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link_link__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardConfig; });


var BoardConfig = (function () {
    function BoardConfig(obj) {
        this.animated = false;
        this.is_used = false;
        this.used_count = 0;
        this.id = obj && obj.id;
        this.mac = obj && obj.mac || '';
        this.type = obj && obj.type || 'Input';
        this.subtype = obj && obj.subtype || 'RealBoard';
        this.name = obj && obj.name || "" + this.type;
        this.status = obj && obj.status || 'offline';
        this.last_activity = obj && obj.last_activity;
        this.colour = __WEBPACK_IMPORTED_MODULE_0__lib_colours__["a" /* Colours */].getColour(this.id);
        this.accepted_links = [];
        this.metadata = obj && obj.metadata || {};
        this.image_url = obj && obj.image_url || '';
        if (obj) {
            if (obj.accepted_links && 0 in obj.accepted_links) {
                for (var i = 0; i < obj.accepted_links.length; i++) {
                    this.accepted_links.push(obj.accepted_links[i]);
                }
            }
            else {
                for (var key in obj.accepted_links) {
                    if (obj.accepted_links.hasOwnProperty(key)) {
                        this.accepted_links.push(new __WEBPACK_IMPORTED_MODULE_1__link_link__["a" /* LinkOption */]({ 'name': key, 'description': obj.accepted_links[key] }));
                    }
                }
            }
        }
    }
    BoardConfig.prototype.newBoard = function (configs) {
        var _this = this;
        if (this.subtype === 'RealBoard') {
            return this;
        }
        if (this.subtype === 'VirtualBoard') {
            var boards = configs.filter(function (config) { return config.getType() === _this.type; });
            var index = 0;
            while (index < boards.length) {
                var mac = "" + this.type + index;
                if (boards.map(function (b) { return b.getMac(); }).indexOf(mac) === -1) {
                    break;
                }
                index++;
            }
            return this.nextBoard(index);
        }
    };
    BoardConfig.prototype.getSubType = function () {
        return this.subtype;
    };
    BoardConfig.prototype.nextBoard = function (index) {
        this.mac = "" + this.type + index;
        this.name = "" + this.type;
        return this.copy();
    };
    BoardConfig.prototype.setMac = function (mac) {
        this.mac = mac;
    };
    BoardConfig.prototype.getMac = function () {
        return this.mac;
    };
    BoardConfig.prototype.getMetadata = function () {
        return this.metadata;
    };
    BoardConfig.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
    };
    BoardConfig.prototype.in_use = function () {
        return this.is_used;
    };
    BoardConfig.prototype.used = function (is_used) {
        this.is_used = is_used;
    };
    BoardConfig.prototype.inBoards = function (boards) {
        var _this = this;
        var b = boards.find(function (board) { return board.getMac() === _this.mac; });
        return !!b;
    };
    BoardConfig.prototype.setCount = function (count) {
        this.used_count = count;
    };
    BoardConfig.prototype.getCount = function () {
        return this.used_count;
    };
    BoardConfig.prototype.animate = function () {
        var _this = this;
        this.animated = true;
        setTimeout(function () { return _this.animated = false; }, 1000);
    };
    BoardConfig.prototype.setId = function (id) {
        this.id = id;
    };
    BoardConfig.prototype.getId = function () {
        return this.id;
    };
    BoardConfig.prototype.setColour = function () {
        this.colour = this.colour || __WEBPACK_IMPORTED_MODULE_0__lib_colours__["a" /* Colours */].getColour(this.id);
    };
    BoardConfig.prototype.getColour = function () {
        return this.colour;
    };
    BoardConfig.prototype.getName = function () {
        return this.name;
    };
    BoardConfig.prototype.setName = function (name) {
        this.name = name;
    };
    BoardConfig.prototype.getAcceptedLinks = function () {
        return this.accepted_links;
    };
    BoardConfig.prototype.copy = function () {
        return new BoardConfig(this.prepare());
    };
    BoardConfig.prototype.prepare = function () {
        return {
            id: null,
            mac: this.mac,
            type: this.type,
            name: this.name,
            status: this.status,
            subtype: this.subtype,
            last_activity: this.last_activity,
            colour: this.colour,
            accepted_links: this.accepted_links,
            image_url: this.image_url
        };
    };
    BoardConfig.prototype.getType = function () {
        return this.type;
    };
    BoardConfig.prototype.getImageUrl = function () {
        return this.image_url;
    };
    BoardConfig.prototype.setImageUrl = function (new_url) {
        this.image_url = new_url;
    };
    BoardConfig.prototype.isReal = function () {
        return this.subtype === 'RealBoard';
    };
    return BoardConfig;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/board-config.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Link; });

var LinkOption = (function () {
    function LinkOption(linkOptionInterface) {
        this.name = linkOptionInterface.name;
        this.description = linkOptionInterface.description;
    }
    LinkOption.prototype.getName = function () {
        return this.name;
    };
    return LinkOption;
}());
var Link = (function () {
    function Link(startXOrLinkInterface, startYOrBArray, endX, endY, startBoard, endBoard) {
        this.distanceTreshold = 10;
        this.shouldRenderText = false;
        this.path = new Path2D();
        if (typeof startXOrLinkInterface === 'number') {
            var startX = startXOrLinkInterface;
            var startY = startYOrBArray;
            this.setInitPoints(new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](startX, startY), new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](endX, endY));
            this.start = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](startX, startY);
            this.end = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](endX, endY);
            this.midpoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((startX + endX) / 2, (startY + endY) / 2);
            this.startBoard = startBoard || null;
            this.endBoard = endBoard || null;
            this.logic = 'toggle';
            this.shouldRenderText = false;
        }
        else {
            var linkInterface_1 = startXOrLinkInterface;
            var bArray = startYOrBArray;
            this.logic = linkInterface_1.logic;
            this.startBoard = bArray.filter(function (board) { return board.getMac() === linkInterface_1.from; })[0] || null;
            this.endBoard = bArray.filter(function (board) { return board.getMac() === linkInterface_1.to; })[0] || null;
            this.linkToBoard();
            this.setInitPoints(this.startBoard.getCentre(), this.endBoard.getCentre());
            this.shouldRenderText = true;
        }
    }
    Link.prototype.setInitPoints = function (start, end) {
        this.start = start;
        this.end = end;
        this.midpoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((start.getX() + end.getX()) / 2, (start.getY() + end.getY()) / 2);
    };
    Link.prototype.computeSlope = function () {
        if (this.end.getX() - this.start.getX() === 0) {
            return (this.end.getY() - this.start.getY()) / 0.01;
        }
        return (this.end.getY() - this.start.getY()) / (this.end.getX() - this.start.getX());
    };
    Link.prototype.prepare = function () {
        return {
            to: this.endBoard.getMac(),
            from: this.startBoard.getMac(),
            logic: this.logic
        };
    };
    Link.prototype.setStart = function (x, y, startBoard) {
        this.start.set(x, y);
        this.shouldRenderText = false;
        if (startBoard) {
            this.startBoard = startBoard;
        }
    };
    Link.prototype.setEnd = function (x, y, endBoard) {
        this.end.set(x, y);
        if (endBoard) {
            this.shouldRenderText = true;
            this.endBoard = endBoard;
        }
    };
    Link.prototype.getStart = function () {
        return this.start;
    };
    Link.prototype.getStartBoard = function () {
        return this.startBoard;
    };
    Link.prototype.getEnd = function () {
        return this.end;
    };
    Link.prototype.getEndBoard = function () {
        return this.endBoard;
    };
    Link.prototype.getLogic = function () {
        return this.logic;
    };
    Link.prototype.draw = function (ctx) {
        var textHeight = 30;
        this.path = new Path2D();
        this.path.moveTo(this.start.getX(), this.start.getY());
        this.path.lineTo(this.end.getX(), this.end.getY());
        // ctx.rotate( Math.PI / 2);
        var angle = this.calculateAngle();
        this.drawArrowHead(ctx, angle);
        ctx.stroke(this.path);
        if (this.shouldRenderText) {
            this.updateMidpoint();
            ctx.save();
            ctx.translate(this.midpoint.getX(), this.midpoint.getY());
            // angle = angle % ( Math.PI / 2);
            angle = Math.atan(Math.tan(angle)); // Use angle of slope instead
            ctx.rotate(angle);
            ctx.font = textHeight + "px serif";
            ctx.fillText(this.logic, -5, -5);
            ctx.translate(-this.midpoint.getX(), -this.midpoint.getY());
            ctx.restore();
        }
    };
    Link.prototype.updateMidpoint = function () {
        this.midpoint.set((this.start.getX() + this.end.getX()) / 2, (this.start.getY() + this.end.getY()) / 2);
    };
    Link.prototype.calculateAngle = function () {
        var slope = this.computeSlope();
        var x_sign = Math.sign(this.end.getX() - this.start.getX());
        x_sign = (x_sign === 0) ? 1 : x_sign;
        var y_sign = Math.sign(this.end.getY() - this.start.getY());
        y_sign = (y_sign === 0) ? 1 : y_sign;
        var quadrant = 1;
        if (y_sign === -1) {
            if (x_sign === -1) {
                quadrant = 3;
            }
            else {
                quadrant = 4;
            }
        }
        else {
            if (x_sign === -1) {
                quadrant = 2;
            }
        }
        var angle = Math.atan(slope);
        switch (quadrant) {
            case 1:
                break;
            case 2:
                angle = Math.PI + angle;
                break;
            case 3:
                angle = Math.PI + angle;
                break;
            case 4:
                angle = 2 * Math.PI + angle;
                break;
        }
        return angle;
    };
    Link.prototype.drawArrowHead = function (ctx, angle) {
        ctx.save();
        var path = new Path2D();
        var head_x = this.end.getX();
        var head_y = this.end.getY();
        var width = 5;
        path.moveTo(head_x, head_y);
        path.lineTo(head_x - width, head_y + width);
        path.lineTo(head_x - width, head_y - width);
        ctx.translate(head_x, head_y); // translate to rectangle center
        ctx.rotate(angle);
        ctx.translate(-head_x, -head_y); // translate back
        ctx.fillStyle = '#000';
        ctx.fill(path);
        ctx.restore();
    };
    Link.prototype.closeTo = function (point, ctx) {
        // line equation: y = ax + b
        // slope is a
        var slope = this.computeSlope();
        // compute b
        var b = this.start.getY() - slope * this.start.getX();
        // compute if checking point can be transposed onto the link
        var tx = point.getX() + slope * point.getY() - slope * b;
        tx = tx / (Math.pow(slope, 2) + 1);
        var ty = slope * (point.getX() + slope * point.getY() - slope * b);
        ty = b + ty / (Math.pow(slope, 2) + 1);
        if (tx < this.start.getX() && tx < this.end.getX()) {
            return false;
        }
        if (tx > this.start.getX() && tx > this.end.getX()) {
            return false;
        }
        if (ty < this.start.getY() && ty < this.end.getY()) {
            return false;
        }
        if (ty > this.start.getY() && ty > this.end.getY()) {
            return false;
        }
        var distance = Math.sqrt(Math.pow(tx - point.getX(), 2) + Math.pow(ty - point.getY(), 2));
        if (distance < this.distanceTreshold) {
            return true;
        }
        return false;
    };
    Link.prototype.copy = function () {
        var newlink = new Link(this.start.getX(), this.start.getY(), this.end.getX(), this.end.getY(), this.startBoard, this.endBoard);
        newlink.setLogic(this.logic);
        return newlink;
    };
    Link.prototype.exportFinished = function () {
        var finishedLink = this.copy();
        finishedLink.linkToBoard();
        finishedLink.showWithLogic();
        return finishedLink;
    };
    Link.prototype.setLogic = function (logic) {
        this.logic = logic;
    };
    Link.prototype.showWithLogic = function () {
        this.shouldRenderText = true;
    };
    Link.prototype.linkToBoard = function () {
        this.start = this.startBoard.getCentre();
        this.end = this.endBoard.getCentre();
    };
    return Link;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/link.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SketchService = (function () {
    function SketchService(http) {
        this.http = http;
        // private apiUrl = 'http://caplatform.herokuapp.com/api/sketch';
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* ENV */].apiUrl + "/sketch";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SketchService.prototype.get = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('user_id', localStorage.getItem('atrato-user-id'));
        return this.http
            .get(this.apiUrl + "/" + id + ".json", { search: params })
            .toPromise()
            .then(function (response) { return new __WEBPACK_IMPORTED_MODULE_3__sketch__["a" /* Sketch */](response.json()); })
            .catch(this.handleError);
    };
    SketchService.prototype.all = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('user_id', localStorage.getItem('atrato-user-id'));
        return this.http
            .get(this.apiUrl + ".json", { search: params })
            .toPromise()
            .then(function (response) { return response.json().map(function (s) { return new __WEBPACK_IMPORTED_MODULE_3__sketch__["a" /* Sketch */](s); }); })
            .catch(this.handleError);
    };
    SketchService.prototype.marketplace = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* ENV */].apiUrl + "/marketplace.json")
            .toPromise()
            .then(function (response) { return response.json().map(function (s) { return new __WEBPACK_IMPORTED_MODULE_3__sketch__["a" /* Sketch */](s); }); })
            .catch(this.handleError);
    };
    SketchService.prototype.purchase = function (sketch, user_id) {
        var object = { user_id: user_id, sketch_id: sketch.getId() };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* ENV */].apiUrl + "/marketplace/purchase.json", object, { headers: this.headers })
            .toPromise()
            .then(function (response) { return new __WEBPACK_IMPORTED_MODULE_3__sketch__["a" /* Sketch */](response.json()); })
            .catch(this.handleError);
    };
    SketchService.prototype.create = function (newBoards, newLinks) {
        return this.http
            .post(this.apiUrl + ".json", JSON.stringify({ boards: newBoards, links: newLinks, user_id: localStorage.getItem('atrato-user-id') }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return new __WEBPACK_IMPORTED_MODULE_3__sketch__["a" /* Sketch */](response.json()); })
            .catch(this.handleError);
    };
    SketchService.prototype.update = function (sketch) {
        var url = this.apiUrl + "/" + sketch.getId() + ".json";
        var obj = sketch.prepare();
        var user_id = { user_id: localStorage.getItem('atrato-user-id') };
        Object.assign(obj, user_id);
        return this.http
            .put(url, obj, { headers: this.headers })
            .toPromise()
            .then(function () { return sketch; })
            .catch(this.handleError);
    };
    SketchService.prototype.updateLinks = function (sketch, links) {
        var url = this.apiUrl + "/" + sketch.getId() + ".json";
        var linksInterface = Array.from(links, function (l) { return l.prepare(); });
        return this.http
            .put(url, { 'links': linksInterface, 'user_id': localStorage.getItem('atrato-user-id') }, { headers: this.headers })
            .toPromise()
            .then(function () { return sketch; })
            .catch(this.handleError);
    };
    SketchService.prototype.updateStatus = function (sketch) {
        var url = this.apiUrl + "/" + sketch.getId() + ".json";
        return this.http
            .put(url, { 'status': sketch.getStatus(), 'user_id': localStorage.getItem('atrato-user-id') }, { headers: this.headers })
            .toPromise()
            .then(function () { return sketch; })
            .catch(this.handleError);
    };
    SketchService.prototype.removeSketch = function (sketch) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        params.set('user_id', localStorage.getItem('atrato-user-id'));
        var url = this.apiUrl + "/" + sketch.getId() + ".json";
        return this.http
            .delete(url, { search: params })
            .toPromise()
            .then(function (response) { return response.status === 204; })
            .catch(this.handleError);
    };
    SketchService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    SketchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], SketchService);
    return SketchService;
    var _a;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/sketch.service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = (function () {
    function Point(xOrInterface, y) {
        if (typeof xOrInterface === 'number') {
            this.x = xOrInterface;
            this.y = y;
        }
        else {
            this.x = xOrInterface.x;
            this.y = xOrInterface.y;
        }
    }
    Point.prototype.prepare = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Point;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/point.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board_board__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link_link__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sketch; });


var Sketch = (function () {
    function Sketch(sketch) {
        var _this = this;
        this.id = sketch.id;
        this.boards = sketch.boards.map(function (b) { return new __WEBPACK_IMPORTED_MODULE_0__board_board__["a" /* Board */](b); });
        this.links = sketch.links.map(function (l) { return new __WEBPACK_IMPORTED_MODULE_1__link_link__["b" /* Link */](l, _this.boards); });
        this.status = sketch.status;
        this.name = sketch.name;
        this.saved = true;
        this.description = sketch.description;
        this.listed = sketch.listed;
        this.user = sketch.user;
        this.user_id = sketch.user_id;
        this.newPurchase = false;
    }
    Sketch.prototype.prepare = function () {
        return {
            id: this.id,
            status: this.status,
            name: this.name,
            boards: Array.from(this.boards, function (b) { return b.prepare(); }),
            links: Array.from(this.links, function (l) { return l.prepare(); }),
            listed: this.listed,
            user: this.user,
            user_id: this.user_id,
            description: this.description
        };
    };
    Sketch.prototype.getBoards = function () {
        return this.boards;
    };
    Sketch.prototype.getLinks = function () {
        return this.links;
    };
    Sketch.prototype.setBoards = function (boards) {
        this.boards = boards;
    };
    Sketch.prototype.setLinks = function (links) {
        this.links = links;
    };
    Sketch.prototype.getId = function () {
        return this.id;
    };
    Sketch.prototype.getStatus = function () {
        return this.status;
    };
    Sketch.prototype.getName = function () {
        return this.name;
    };
    Sketch.prototype.setName = function (name) {
        this.name = name;
    };
    Sketch.prototype.changeStatus = function (status) {
        this.status = status;
    };
    Sketch.prototype.isSaved = function () {
        return this.saved;
    };
    Sketch.prototype.changed = function () {
        this.saved = false;
    };
    Sketch.prototype.saveChanges = function () {
        this.saved = true;
    };
    Sketch.prototype.getBoardConfigs = function () {
        return this.boards.map(function (board) { return board.getBoardConfig(); });
    };
    Sketch.prototype.getUserId = function () {
        return this.user_id;
    };
    return Sketch;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/sketch.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(539);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationComponent = (function () {
    function AuthenticationComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        // if the session is authenticated, send to dashboard
        if (this.authenticationService.loggedIn()) {
            this.authenticationService.handleLoggedIn();
        }
    };
    AuthenticationComponent.prototype.submit = function () {
        this.authenticationService.logIn(this.user);
        this.submitted = true;
    };
    AuthenticationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(729),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], AuthenticationComponent);
    return AuthenticationComponent;
    var _a;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/authentication.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_config__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_service__ = __webpack_require__(348);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });



var Board = (function () {
    function Board(posXorBoardInterface, posY, width, height, b_config) {
        this.width = 160;
        this.height = 80;
        // debugger
        this.boardConfig = b_config || new __WEBPACK_IMPORTED_MODULE_1__board_config__["a" /* BoardConfig */]();
        this.offset = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        if (typeof posXorBoardInterface === 'number') {
            this.centre = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](posXorBoardInterface, posY);
        }
        else if (typeof posXorBoardInterface === 'object') {
            this.centre = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](posXorBoardInterface.centre);
            this.boardConfig = new __WEBPACK_IMPORTED_MODULE_1__board_config__["a" /* BoardConfig */](posXorBoardInterface.boardConfig);
        }
        this.path = new Path2D();
        if (!__WEBPACK_IMPORTED_MODULE_2__image_service__["a" /* ImageService */].getInstance().hasImage(this.boardConfig.getType())) {
            __WEBPACK_IMPORTED_MODULE_2__image_service__["a" /* ImageService */].getInstance().setImage(this.boardConfig.getType(), this.boardConfig.getImageUrl());
        }
        this.image = __WEBPACK_IMPORTED_MODULE_2__image_service__["a" /* ImageService */].getInstance().getImage(this.boardConfig.getType());
    }
    Board.prototype.prepare = function () {
        return {
            centre: this.centre.prepare(),
            width: this.width,
            height: this.height,
            mac: this.getMac(),
            boardConfig: this.getBoardConfig()
        };
    };
    Board.prototype.draw = function (ctx) {
        var oldColour = ctx.fillStyle;
        ctx.fillStyle = this.boardConfig.getColour();
        ctx.fill(this.drawRectangle());
        this.drawImage(ctx);
        this.drawText(ctx);
        ctx.fillStyle = oldColour;
    };
    Board.prototype.drawImage = function (ctx) {
        // image.width = 200;
        // image.height = 100;
        var translateX = this.getPosX() - this.width / 2;
        var translateY = this.getPosY() - this.height / 2;
        ctx.save();
        ctx.translate(translateX, translateY);
        ctx.drawImage(this.image, 0, 0, this.width, this.height);
        ctx.translate(-translateX, -translateY);
        ctx.restore();
    };
    Board.prototype.drawRectangle = function () {
        this.path = new Path2D();
        this.path.rect(this.getPosX() - this.width / 2, this.getPosY() - this.height / 2, this.width, this.height);
        return this.path;
    };
    Board.prototype.drawText = function (ctx) {
        var textHeight = 30;
        var leftPadding = 10;
        ctx.fillStyle = 'black';
        ctx.font = textHeight + "px serif";
        ctx.fillText(this.boardConfig.getName(), this.getPosX() - this.width / 2, this.getPosY() - this.height / 2 - 10);
    };
    Board.prototype.getSubType = function () {
        return this.getBoardConfig().getSubType();
    };
    Board.prototype.getWidth = function () {
        return this.width;
    };
    Board.prototype.getHeight = function () {
        return this.height;
    };
    Board.prototype.getPosX = function () {
        return this.centre.getX();
    };
    Board.prototype.shake = function () {
        var _this = this;
        // this.boardConfig.animate();
        var initialWidth = this.width;
        var initialHeight = this.height;
        var shaking = setInterval(function () {
            _this.width += 5;
            _this.height += 5;
            if (_this.width > initialWidth * 1.5 || _this.height > initialHeight * 2) {
                clearInterval(shaking);
                _this.width = initialWidth;
                _this.height = initialHeight;
            }
        }, 10);
    };
    Board.prototype.getName = function () {
        return this.getBoardConfig().getName();
    };
    Board.prototype.getPosY = function () {
        return this.centre.getY();
    };
    Board.prototype.getCentre = function () {
        return this.centre;
    };
    Board.prototype.setCentre = function (p) {
        this.centre = p;
    };
    Board.prototype.deepSetCentre = function (p) {
        this.centre.set(p.getX(), p.getY());
    };
    Board.prototype.collides = function (board) {
        if (this.getPosX() + this.getWidth() / 2 < board.getPosX() - board.getWidth() / 2 ||
            this.getPosX() - this.getWidth() / 2 > board.getPosX() + board.getWidth() / 2 ||
            this.getPosY() + this.getHeight() / 2 < board.getPosY() - board.getHeight() / 2 ||
            this.getPosY() - this.getHeight() / 2 > board.getPosY() + board.getHeight() / 2) {
            return false;
        }
        else {
            return true;
        }
    };
    Board.prototype.getPath = function () {
        return this.path;
    };
    Board.prototype.containsPoint = function (ctx, x, y) {
        return ctx.isPointInPath(this.path, x, y);
    };
    Board.prototype.set = function (x, y) {
        this.centre.set(x - this.getOffsetX(), y - this.getOffsetY());
    };
    Board.prototype.setOffset = function (offsetX, offsetY) {
        this.offset = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](offsetX, offsetY);
    };
    Board.prototype.getOffsetX = function () {
        return this.offset.getX();
    };
    Board.prototype.getOffsetY = function () {
        return this.offset.getY();
    };
    Board.prototype.getBoardConfig = function () {
        return this.boardConfig;
    };
    Board.prototype.setBoardConfig = function (conf) {
        this.boardConfig = conf;
    };
    Board.prototype.setMetadata = function (metadata) {
        this.boardConfig.setMetadata(metadata);
    };
    Board.prototype.copy = function () {
        return new Board(this.getPosX(), this.getPosY(), this.getWidth(), this.getHeight(), this.getBoardConfig());
    };
    Board.prototype.getMac = function () {
        return this.boardConfig.getMac();
    };
    Board.prototype.getType = function () {
        return this.boardConfig.getType();
    };
    return Board;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/board.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(733),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/home.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageService = (function () {
    function ImageService() {
        if (!ImageService.isCreating) {
            throw new Error('You shouldn\'t initialise multiple Image Services');
        }
        this.images = {};
    }
    ImageService.getInstance = function () {
        if (ImageService.instance == null) {
            ImageService.isCreating = true;
            ImageService.instance = new ImageService();
            ImageService.isCreating = false;
        }
        return ImageService.instance;
    };
    ImageService.prototype.setImage = function (key, image_url) {
        this.images[key] = new Image();
        this.images[key].src = image_url;
        this.images[key].onload = function () {
            console.log('Completed', key);
        };
    };
    ImageService.prototype.getImage = function (key) {
        return this.images[key];
    };
    ImageService.prototype.getImages = function () {
        return this.images;
    };
    ImageService.prototype.hasImage = function (key) {
        return !!this.images[key];
    };
    ImageService.isCreating = false;
    ImageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ImageService);
    return ImageService;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/image.service.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaptopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LaptopComponent = (function () {
    function LaptopComponent() {
    }
    LaptopComponent.prototype.ngOnInit = function () {
    };
    LaptopComponent.prototype.ngOnDestroy = function () {
    };
    LaptopComponent.prototype.activateOutput = function () {
        this.input = false;
        this.output = true;
    };
    LaptopComponent.prototype.activateInput = function () {
        this.output = false;
        this.input = true;
    };
    LaptopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-laptop',
            template: __webpack_require__(736),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [])
    ], LaptopComponent);
    return LaptopComponent;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/laptop.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__code__ = __webpack_require__(547);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CodeService = (function () {
    function CodeService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* ENV */].apiUrl + "/code_snippet";
    }
    CodeService.prototype.all = function (boardType, linkTypes) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        search.set('board_type', boardType);
        for (var _i = 0, linkTypes_1 = linkTypes; _i < linkTypes_1.length; _i++) {
            var type = linkTypes_1[_i];
            search.append('link_types[]', type);
        }
        return this.http
            .get(this.apiUrl + ".json", { search: search })
            .toPromise()
            .then(function (response) { return response.json().map(function (code) { return new __WEBPACK_IMPORTED_MODULE_4__code__["a" /* Code */](code); }); })
            .catch(this.handleError);
    };
    CodeService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    CodeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CodeService);
    return CodeService;
    var _a;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/code.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__link_link__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LinkService = (function () {
    function LinkService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* ENV */].apiUrl + "/links";
    }
    LinkService.prototype.all = function () {
        return this.http
            .get(this.apiUrl + ".json")
            .toPromise()
            .then(function (response) {
            return Array.from(response.json(), function (x) { return new __WEBPACK_IMPORTED_MODULE_4__link_link__["a" /* LinkOption */](x); });
        }).catch(this.handleError);
    };
    LinkService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    LinkService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], LinkService);
    return LinkService;
    var _a;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/link.service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogsComponent = (function () {
    function LogsComponent(ng2cable) {
        this.ng2cable = ng2cable;
        this.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* ENV */].apiWs;
        this.logs = [];
        this.ng2cable.setCable(this.url);
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ng2cable.subscription = this.ng2cable.cable.subscriptions.create({ channel: 'LogChannel' }, {
            received: function (data) {
                data.message.map(function (log) { return _this.logs.unshift(new __WEBPACK_IMPORTED_MODULE_2__log__["a" /* Log */](log)); });
            }
        });
    };
    LogsComponent.prototype.ngOnDestroy = function () {
        this.ng2cable.unsubscribe();
    };
    LogsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logs',
            template: __webpack_require__(737),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__["Ng2Cable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__["Ng2Cable"]) === 'function' && _a) || Object])
    ], LogsComponent);
    return LogsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/logs.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sketch_sketch_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board_board_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarketplaceComponent = (function () {
    function MarketplaceComponent(sketchService, boardService, authenticationService) {
        this.sketchService = sketchService;
        this.boardService = boardService;
        this.authenticationService = authenticationService;
    }
    MarketplaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sketchService.marketplace().then(function (sketches) { return _this.sketches = sketches; });
        this.boardService.all('RealBoard').then(function (boards) {
            _this.boards = boards;
            _this.boardTypes = _this.boards.map(function (board) { return board.getType(); });
        });
    };
    MarketplaceComponent.prototype.hardwareClass = function (type) {
        if (this.boardTypes.includes(type)) {
            return 'owned';
        }
        return 'not-owned';
    };
    MarketplaceComponent.prototype.canBuySketch = function (sketch) {
        if (!this.mySketch(sketch) && this.ownAllBoards(sketch)) {
            return true;
        }
        return false;
    };
    MarketplaceComponent.prototype.ownAllBoards = function (sketch) {
        var sketchTypes = sketch.getBoardConfigs()
            .filter(function (config) { return config.isReal(); })
            .map(function (config) { return config.type; });
        for (var _i = 0, sketchTypes_1 = sketchTypes; _i < sketchTypes_1.length; _i++) {
            var type = sketchTypes_1[_i];
            if (!this.boardTypes.includes(type)) {
                return false;
            }
        }
        return true;
    };
    MarketplaceComponent.prototype.missingBoards = function (sketch) {
        var missing = [];
        var sketchTypes = sketch.getBoardConfigs()
            .filter(function (config) { return config.isReal(); })
            .map(function (config) { return config.type; });
        for (var _i = 0, sketchTypes_2 = sketchTypes; _i < sketchTypes_2.length; _i++) {
            var type = sketchTypes_2[_i];
            if (!this.boardTypes.includes(type)) {
                missing.push(type);
            }
        }
        return missing.join(', ');
    };
    MarketplaceComponent.prototype.mySketch = function (sketch) {
        if (sketch.getUserId() === this.authenticationService.getCurrentUserId()) {
            return true;
        }
        return false;
    };
    MarketplaceComponent.prototype.buySketch = function (sketch) {
        var _this = this;
        this.sketchService
            .purchase(sketch, this.authenticationService.getCurrentUserId())
            .then(function (sketch) { return _this.authenticationService.redirectToRoot({ id: sketch.getId() }); });
    };
    MarketplaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marketplace',
            template: __webpack_require__(738),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sketch_sketch_service__["a" /* SketchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__sketch_sketch_service__["a" /* SketchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__board_board_service__["a" /* BoardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__board_board_service__["a" /* BoardService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object])
    ], MarketplaceComponent);
    return MarketplaceComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/marketplace.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link_link_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__board_board_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sketch_sketch_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cable_js_index__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cable_js_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_cable_js_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SketchEditorComponent = (function () {
    function SketchEditorComponent(ng2cable, ngZone, boardService, sketchService, linkService, activatedRoute, router) {
        this.ng2cable = ng2cable;
        this.ngZone = ngZone;
        this.boardService = boardService;
        this.sketchService = sketchService;
        this.linkService = linkService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.boardSelected = false;
        this.linkSelected = false;
        this.url = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* ENV */].apiWs;
        this.ng2cable.setCable(this.url);
    }
    SketchEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayRealBoards = true;
        this.setSketch();
        this.linkService.all().then(function (links) {
            _this.links = links;
        });
        this.changeMode('Select');
        this.refreshBoardData();
        this.ng2cable.subscription = this.ng2cable.cable.subscriptions
            .create({ channel: 'WatcherChannel', 'user_id': localStorage.getItem('atrato-user-id') }, {
            received: function (data) {
                _this.activateBoard(data.message.mac);
                _this.updateMetadata(data.message.metadata, data.message.mac);
            }
        });
    };
    SketchEditorComponent.prototype.showRealBoards = function () {
        this.displayRealBoards = true;
    };
    SketchEditorComponent.prototype.showVirtualBoards = function () {
        this.displayRealBoards = false;
    };
    SketchEditorComponent.prototype.setSketch = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            var id = parseInt(params['sketch_id'], 10);
            _this.sketchService.get(id).then(function (activeSketch) {
                _this.sketch = activeSketch;
                _this.markUsedBoards();
            });
        });
    };
    SketchEditorComponent.prototype.activateSketch = function (id) {
        this.sketch.changeStatus('active');
        this.sketchService.updateStatus(this.sketch);
    };
    SketchEditorComponent.prototype.stopSketch = function (id) {
        this.sketch.changeStatus('closed');
        this.sketchService.updateStatus(this.sketch);
    };
    SketchEditorComponent.prototype.ngOnDestroy = function () {
        this.ng2cable.unsubscribe();
    };
    SketchEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes['sketch']) {
            this.onLinkDeselected();
            this.onBoardDeselected();
            this.markUsedBoards();
        }
    };
    SketchEditorComponent.prototype.ngAfterViewInit = function () {
    };
    SketchEditorComponent.prototype.markUsedBoards = function () {
        if (!!this.boards && !!this.sketch) {
            var realBoards = this.boards.filter(function (board) { return board.getSubType() === 'RealBoard'; });
            var virtualBoards = this.boards.filter(function (board) { return board.getSubType() === 'VirtualBoard'; });
            for (var _i = 0, realBoards_1 = realBoards; _i < realBoards_1.length; _i++) {
                var b = realBoards_1[_i];
                b.used(b.inBoards(this.sketch.getBoards()));
            }
            var _loop_1 = function(b) {
                var count = this_1.sketch.getBoards().filter(function (board) { return board.getType() === b.getType(); }).length;
                b.setCount(count);
            };
            var this_1 = this;
            for (var _a = 0, virtualBoards_1 = virtualBoards; _a < virtualBoards_1.length; _a++) {
                var b = virtualBoards_1[_a];
                _loop_1(b);
            }
        }
    };
    SketchEditorComponent.prototype.onNameUpdated = function (newName) {
        this.sketch.setName(newName);
        this.sketchService.update(this.sketch);
    };
    SketchEditorComponent.prototype.navigateToHome = function () {
        this.router.navigate(['/home']);
    };
    SketchEditorComponent.prototype.updateMetadata = function (metadata, mac) {
        var b = this.sketch.getBoards().find(function (board) { return board.getMac() === mac; });
        if (!!b) {
            b.setMetadata(metadata);
        }
    };
    SketchEditorComponent.prototype.activateBoard = function (mac) {
        var b = this.sketch.getBoards().find(function (board) { return board.getMac() === mac; });
        if (!!b) {
            b.shake();
        }
        var bc = this.boards.find(function (board) { return board.getMac() === mac; });
        if (!!bc) {
            bc.animate();
        }
    };
    SketchEditorComponent.prototype.refreshBoardData = function () {
        var _this = this;
        this.boardService.all('RealBoard').then(function (boards) {
            _this.boards = boards;
            _this.markUsedBoards();
            _this.boardService.all('VirtualBoard').then(function (bs) {
                if (!!_this.boards) {
                    _this.boards = bs.concat(_this.boards);
                }
            });
        });
    };
    SketchEditorComponent.prototype.clicked = function (event) {
        this.sketch.setBoards([]);
    };
    SketchEditorComponent.prototype.changeMode = function (operation) {
        if (this.operationMode === operation) {
            delete this.operationMode;
        }
        else {
            this.operationMode = operation;
        }
        this.onLinkDeselected();
        this.onBoardDeselected();
        if (this.operationMode !== 'Add') {
            this.newBoard = null;
        }
    };
    SketchEditorComponent.prototype.onBoardSelected = function (selected_board) {
        this.selectedBoard = selected_board;
        this.boardSelected = true;
    };
    SketchEditorComponent.prototype.onLinkSelected = function (link) {
        this.linkSelected = true;
        this.selectedLink = link;
        delete this.operationMode;
    };
    SketchEditorComponent.prototype.onLinkSave = function (link) {
        var links = this.sketch.getLinks();
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var l = links_1[_i];
            if (link['to'] === l['to'] && link['from'] === l['from']) {
                l.setLogic(link.logic);
                break;
            }
        }
        this.sketchService.updateLinks(this.sketch, links);
        this.onLinkDeselected();
    };
    SketchEditorComponent.prototype.onBoardSave = function (b) {
        this.boardService.update(b);
        for (var _i = 0, _a = this.boards; _i < _a.length; _i++) {
            var board = _a[_i];
            if (board.getMac() === b.getMac()) {
                board.setName(b.getName());
            }
        }
        for (var _b = 0, _c = this.sketch.getBoardConfigs(); _b < _c.length; _b++) {
            var board = _c[_b];
            if (board.getMac() === b.getMac()) {
                board.setName(b.getName());
            }
        }
    };
    SketchEditorComponent.prototype.revertToActive = function () {
        var _this = this;
        this.changeMode('Select');
        this.sketchService.get(this.sketch.getId()).then(function (activeSketch) {
            _this.sketch = activeSketch;
            _this.markUsedBoards();
        });
    };
    SketchEditorComponent.prototype.onLinkDeselected = function () {
        this.linkSelected = false;
        delete this.selectedLink;
    };
    SketchEditorComponent.prototype.onBoardDeselected = function () {
        this.boardSelected = false;
        delete this.selectedBoard;
    };
    SketchEditorComponent.prototype.onActiveBoardSelected = function (board) {
        this.changeMode('Add');
        this.newBoard = board.newBoard(this.sketch.getBoardConfigs());
        this.onBoardSelected(board);
    };
    SketchEditorComponent.prototype.onFinishedAddingBoard = function () {
        this.newBoard = null;
        this.changeMode('Select');
        this.markUsedBoards();
    };
    SketchEditorComponent.prototype.onFinishedDeletingBoard = function () {
        this.markUsedBoards();
    };
    SketchEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sketch-editor',
            template: __webpack_require__(739),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_cable_js_index__["Ng2Cable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ng2_cable_js_index__["Ng2Cable"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__board_board_service__["a" /* BoardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__board_board_service__["a" /* BoardService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__sketch_sketch_service__["a" /* SketchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__sketch_sketch_service__["a" /* SketchService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__link_link_service__["a" /* LinkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__link_link_service__["a" /* LinkService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _g) || Object])
    ], SketchEditorComponent);
    return SketchEditorComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/sketch-editor.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sketch_sketch_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SketchManagerComponent = (function () {
    function SketchManagerComponent(ngZone, sketchService, activatedRoute, router) {
        this.ngZone = ngZone;
        this.sketchService = sketchService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    SketchManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sketchService.all().then(function (sketches) {
            _this.sketches = sketches;
            _this.setDefaultSelectedSketch();
        });
    };
    SketchManagerComponent.prototype.ngAfterViewInit = function () {
    };
    SketchManagerComponent.prototype.ngOnDestroy = function () {
    };
    SketchManagerComponent.prototype.activateSketch = function (id, event) {
        var _this = this;
        if (event === void 0) { event = null; }
        // stop all sketches before activating this one
        for (var i = 0; i < this.sketches.length; i++) {
            if (this.sketches[i].getStatus() === 'active') {
                this.stopSketch(i);
            }
        }
        this.sketches[id].changeStatus('active');
        this.sketchService.updateStatus(this.sketches[id]).then(function (sketch) {
            _this.sketches[id] = sketch;
        });
        if (!!event) {
            event.stopPropagation();
        }
    };
    SketchManagerComponent.prototype.removeSketch = function (id) {
        var _this = this;
        this.sketchService.removeSketch(this.sketches[id]).then(function (removed) {
            if (removed) {
                if (_this.sketches[id] === _this.selectedSketch) {
                    delete _this.selectedSketch;
                }
                _this.sketches.splice(id, 1);
            }
        });
    };
    SketchManagerComponent.prototype.stopSketch = function (id, event) {
        if (event === void 0) { event = null; }
        this.sketches[id].changeStatus('closed');
        this.sketchService.updateStatus(this.sketches[id]);
        if (!!event) {
            event.stopPropagation();
        }
    };
    SketchManagerComponent.prototype.onSketchEdit = function (id) {
        if (this.selectedSketch && !this.selectedSketch.isSaved()) {
            alert('Save changes to sketch');
            return;
        }
        var navigationExtras = {
            queryParams: { sketch_id: this.sketches[id].getId() },
        };
        this.router.navigate(['/dashboard'], navigationExtras);
        this.selectedSketch = this.sketches[id];
    };
    SketchManagerComponent.prototype.onNameUpdated = function (newName) {
        var _this = this;
        this.selectedSketch.setName(newName);
        this.sketchService.update(this.selectedSketch).then(function (sketch) {
            _this.selectedSketch = sketch;
        });
    };
    SketchManagerComponent.prototype.newSketch = function () {
        var _this = this;
        // send empty array for boards and links
        this.sketchService.create([], []).then(function (sketch) {
            _this.selectedSketch = sketch;
            _this.sketches.push(sketch);
        });
    };
    SketchManagerComponent.prototype.setDefaultSelectedSketch = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            var id = parseInt(params['id'], 10);
            for (var _i = 0, _a = _this.sketches; _i < _a.length; _i++) {
                var sketch = _a[_i];
                if (sketch.getId() === id) {
                    _this.selectedSketch = sketch;
                    _this.selectedSketch.newPurchase = true;
                    break;
                }
            }
            if (!_this.selectedSketch) {
                _this.selectedSketch = _this.defaultSketch();
            }
        });
    };
    SketchManagerComponent.prototype.defaultSketch = function () {
        for (var _i = 0, _a = this.sketches; _i < _a.length; _i++) {
            var sketch = _a[_i];
            if (sketch.getStatus() === 'active') {
                return sketch;
            }
        }
        return this.sketches[0];
    };
    SketchManagerComponent.prototype.publishToMarket = function (id) {
        var _this = this;
        this.sketches[id].listed = true;
        this.sketchService.update(this.sketches[id]).then(function (sketch) { return _this.sketches[id] = sketch; });
    };
    SketchManagerComponent.prototype.removeFromMarket = function (id) {
        var _this = this;
        this.sketches[id].listed = false;
        this.sketchService.update(this.sketches[id]).then(function (sketch) { return _this.sketches[id] = sketch; });
    };
    SketchManagerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sketch-manager',
            template: __webpack_require__(740),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sketch_sketch_service__["a" /* SketchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__sketch_sketch_service__["a" /* SketchService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], SketchManagerComponent);
    return SketchManagerComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/sketch-manager.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_board_service__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBoardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserBoardsComponent = (function () {
    function UserBoardsComponent(boardService) {
        this.boardService = boardService;
        this.active_board_config = {
            'class': 'col-6 col-sm-3 col-md-2',
            'unregisterable': true,
        };
    }
    UserBoardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boardService.all('RealBoard').then(function (boards) {
            _this.boards = boards;
        });
    };
    UserBoardsComponent.prototype.registerBoard = function () {
        this.boardService.request_register(this.code);
    };
    UserBoardsComponent.prototype.getActiveBoardsConfig = function () {
        return this.active_board_config;
    };
    UserBoardsComponent.prototype.deregisterBoard = function (board) {
        this.boardService.deregister(board);
    };
    UserBoardsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-boards',
            template: __webpack_require__(741),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__board_board_service__["a" /* BoardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__board_board_service__["a" /* BoardService */]) === 'function' && _a) || Object])
    ], UserBoardsComponent);
    return UserBoardsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/user-boards.component.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var baseURI = 'caplatform.herokuapp.com';
var ENV = {
    production: true,
    apiWs: "wss://" + baseURI + "/cable",
    apiUrl: "https://" + baseURI + "/api"
};
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/environment.js.map

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 414;


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(538);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* ENV */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/main.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_config__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board_board_service__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveBoardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActiveBoardsComponent = (function () {
    function ActiveBoardsComponent(boardService) {
        this.boardService = boardService;
        this.boardSelectedEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.boardDeregisterEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBoardSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.default_config = {
            'class': 'col-12',
            'unregisterable': false,
        };
        this.configuration = {};
        Object.assign(this.configuration, this.default_config);
    }
    ActiveBoardsComponent.prototype.onDragStart = function (event) {
        event.preventDefault();
    };
    ActiveBoardsComponent.prototype.ngOnInit = function () {
        Object.assign(this.configuration, this.config);
    };
    ActiveBoardsComponent.prototype.onNameUpdated = function (newName, board) {
        board.setName(newName);
        this.onBoardSave.emit(board);
    };
    ActiveBoardsComponent.prototype.onBoardSelected = function (board) {
        if (!board.in_use()) {
            this.boardSelectedEmitter.emit(board);
        }
    };
    ActiveBoardsComponent.prototype.onDeregisterBoard = function (board) {
        this.boardDeregisterEmitter.emit(board);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ActiveBoardsComponent.prototype, "boards", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__board_config__["a" /* BoardConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__board_config__["a" /* BoardConfig */]) === 'function' && _a) || Object)
    ], ActiveBoardsComponent.prototype, "selectedBoard", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ActiveBoardsComponent.prototype, "config", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ActiveBoardsComponent.prototype, "boardSelectedEmitter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ActiveBoardsComponent.prototype, "boardDeregisterEmitter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ActiveBoardsComponent.prototype, "onBoardSave", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragstart', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ActiveBoardsComponent.prototype, "onDragStart", null);
    ActiveBoardsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-active-boards',
            template: __webpack_require__(727),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__board_board_service__["a" /* BoardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__board_board_service__["a" /* BoardService */]) === 'function' && _b) || Object])
    ], ActiveBoardsComponent);
    return ActiveBoardsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/active-boards.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sketch_manager_sketch_manager_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch_editor_sketch_editor_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__laptop_laptop_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logs_logs_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__marketplace_marketplace_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_boards_user_boards_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_authentication_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var routes = [
    { path: '', redirectTo: '/authentication', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__authentication_authentication_service__["a" /* AuthenticationService */]] },
    { path: 'authentication', component: __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_component__["a" /* AuthenticationComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__sketch_editor_sketch_editor_component__["a" /* SketchEditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__authentication_authentication_service__["a" /* AuthenticationService */]] },
    { path: 'laptop', component: __WEBPACK_IMPORTED_MODULE_4__laptop_laptop_component__["a" /* LaptopComponent */] },
    { path: 'logs', component: __WEBPACK_IMPORTED_MODULE_5__logs_logs_component__["a" /* LogsComponent */] },
    { path: 'myboards', component: __WEBPACK_IMPORTED_MODULE_7__user_boards_user_boards_component__["a" /* UserBoardsComponent */] },
    { path: 'marketplace', component: __WEBPACK_IMPORTED_MODULE_6__marketplace_marketplace_component__["a" /* MarketplaceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__authentication_authentication_service__["a" /* AuthenticationService */]] },
    { path: 'sketches', component: __WEBPACK_IMPORTED_MODULE_2__sketch_manager_sketch_manager_component__["a" /* SketchManagerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__authentication_authentication_service__["a" /* AuthenticationService */]] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/app-routing.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    AppComponent.prototype.loggedIn = function () {
        return this.authenticationService.loggedIn();
    };
    AppComponent.prototype.userName = function () {
        return this.authenticationService.getUserName();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(728),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/app.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rxjs_extensions__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cable_js_index__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cable_js_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cable_js_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_capitalize_pipe__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_dasherize_pipe__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sketch_editor_sketch_editor_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dragdrop_drag_drop_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__board_details_board_details_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sketch_manager_sketch_manager_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sketch_sketch_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__authentication_authentication_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__link_link_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__board_board_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__link_code_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__active_boards_active_boards_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__laptop_laptop_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__laptop_laptop_input_laptop_input_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__laptop_laptop_output_laptop_output_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__click_to_edit_click_to_edit_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__logs_logs_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__marketplace_marketplace_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_boards_user_boards_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__authentication_authentication_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_home_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__board_config_pipe__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__image_service__ = __webpack_require__(348);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sketch_editor_sketch_editor_component__["a" /* SketchEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dragdrop_drag_drop_component__["a" /* DragDropComponent */],
                __WEBPACK_IMPORTED_MODULE_12__board_details_board_details_component__["a" /* BoardDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__sketch_manager_sketch_manager_component__["a" /* SketchManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__active_boards_active_boards_component__["a" /* ActiveBoardsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__laptop_laptop_component__["a" /* LaptopComponent */],
                __WEBPACK_IMPORTED_MODULE_21__laptop_laptop_input_laptop_input_component__["a" /* LaptopInputComponent */],
                __WEBPACK_IMPORTED_MODULE_22__laptop_laptop_output_laptop_output_component__["a" /* LaptopOutputComponent */],
                __WEBPACK_IMPORTED_MODULE_23__click_to_edit_click_to_edit_component__["a" /* ClickToEditComponent */],
                __WEBPACK_IMPORTED_MODULE_24__logs_logs_component__["a" /* LogsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_dasherize_pipe__["a" /* DasherizePipe */],
                __WEBPACK_IMPORTED_MODULE_25__marketplace_marketplace_component__["a" /* MarketplaceComponent */],
                __WEBPACK_IMPORTED_MODULE_26__user_boards_user_boards_component__["a" /* UserBoardsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__authentication_authentication_component__["a" /* AuthenticationComponent */],
                __WEBPACK_IMPORTED_MODULE_29__board_config_pipe__["a" /* VirtualBoardsPipe */],
                __WEBPACK_IMPORTED_MODULE_29__board_config_pipe__["b" /* RealBoardsPipe */],
                __WEBPACK_IMPORTED_MODULE_28__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__sketch_sketch_service__["a" /* SketchService */], __WEBPACK_IMPORTED_MODULE_17__board_board_service__["a" /* BoardService */], __WEBPACK_IMPORTED_MODULE_2_ng2_cable_js_index__["Ng2Cable"], __WEBPACK_IMPORTED_MODULE_2_ng2_cable_js_index__["Broadcaster"], __WEBPACK_IMPORTED_MODULE_16__link_link_service__["a" /* LinkService */], __WEBPACK_IMPORTED_MODULE_15__authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_18__link_code_service__["a" /* CodeService */], __WEBPACK_IMPORTED_MODULE_30__image_service__["a" /* ImageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/app.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userInterface) {
        if (userInterface) {
            this.name = userInterface.name;
            this.email = userInterface.email;
        }
    }
    User.prototype.isValid = function () {
        return this.name && this.email;
    };
    return User;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/user.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualBoardsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RealBoardsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VirtualBoardsPipe = (function () {
    function VirtualBoardsPipe() {
    }
    VirtualBoardsPipe.prototype.transform = function (allBoards) {
        return allBoards.filter(function (board) { return board.getSubType() === 'VirtualBoard'; });
    };
    VirtualBoardsPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'virtualBoards' }), 
        __metadata('design:paramtypes', [])
    ], VirtualBoardsPipe);
    return VirtualBoardsPipe;
}());
var RealBoardsPipe = (function () {
    function RealBoardsPipe() {
    }
    RealBoardsPipe.prototype.transform = function (allBoards) {
        return allBoards.filter(function (board) { return board.getSubType() === 'RealBoard'; });
    };
    RealBoardsPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'realBoards' }), 
        __metadata('design:paramtypes', [])
    ], RealBoardsPipe);
    return RealBoardsPipe;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/board-config.pipe.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_config__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__link_link__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sketch_sketch__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__link_code_service__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BoardDetailsComponent = (function () {
    function BoardDetailsComponent(codeService) {
        this.codeService = codeService;
        this.onBoardSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onLinkSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BoardDetailsComponent.prototype.ngOnInit = function () {
    };
    BoardDetailsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.link) {
            this.codeService.all(this.link.getEndBoard().getType(), this.linkTypes(this.link)).then(function (codeSnippets) {
                _this.codeSnippets = codeSnippets;
            });
        }
        if (this.board) {
            this.metadata = Object.keys(this.board.getMetadata());
        }
    };
    BoardDetailsComponent.prototype.updateLink = function (link) {
        this.onLinkSave.emit(link.prepare());
    };
    BoardDetailsComponent.prototype.updateBoard = function (board) {
        this.onBoardSave.emit(board);
    };
    BoardDetailsComponent.prototype.renderCodeSnippet = function () {
        for (var _i = 0, _a = this.codeSnippets; _i < _a.length; _i++) {
            var code = _a[_i];
            if (code.getName() === this.link.getLogic()) {
                return code.getCode();
            }
        }
        return '';
    };
    BoardDetailsComponent.prototype.trigger = function () {
    };
    BoardDetailsComponent.prototype.linkTypes = function (link) {
        return link
            .getEndBoard()
            .getBoardConfig()
            .getAcceptedLinks()
            .map(function (l) { return l.getName(); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__board_config__["a" /* BoardConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__board_config__["a" /* BoardConfig */]) === 'function' && _a) || Object)
    ], BoardDetailsComponent.prototype, "board", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__link_link__["b" /* Link */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__link_link__["b" /* Link */]) === 'function' && _b) || Object)
    ], BoardDetailsComponent.prototype, "link", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__sketch_sketch__["a" /* Sketch */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__sketch_sketch__["a" /* Sketch */]) === 'function' && _c) || Object)
    ], BoardDetailsComponent.prototype, "sketch", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], BoardDetailsComponent.prototype, "linkOptions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BoardDetailsComponent.prototype, "onBoardSave", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BoardDetailsComponent.prototype, "onLinkSave", void 0);
    BoardDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-board-details',
            template: __webpack_require__(730),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__link_code_service__["a" /* CodeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__link_code_service__["a" /* CodeService */]) === 'function' && _d) || Object])
    ], BoardDetailsComponent);
    return BoardDetailsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/board-details.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickToEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickToEditComponent = (function () {
    function ClickToEditComponent() {
        this.nameUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ClickToEditComponent.prototype.ngOnInit = function () {
        this.editable = this.fieldValue === '' ? true : false;
    };
    ClickToEditComponent.prototype.onClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.editable = true;
    };
    ClickToEditComponent.prototype.onSave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!!this.fieldValue) {
            this.nameUpdated.emit(this.fieldValue);
            this.editable = false;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ClickToEditComponent.prototype, "fieldValue", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ClickToEditComponent.prototype, "fieldName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ClickToEditComponent.prototype, "nameUpdated", void 0);
    ClickToEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-click-to-edit',
            template: __webpack_require__(731),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [])
    ], ClickToEditComponent);
    return ClickToEditComponent;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/click-to-edit.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board_board__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__board_board_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workspace_canvas__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__board_config__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sketch_sketch_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sketch_sketch__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__point__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DragDropComponent = (function () {
    function DragDropComponent(ngZone, sketchService, route, boardService) {
        this.ngZone = ngZone;
        this.sketchService = sketchService;
        this.route = route;
        this.boardService = boardService;
        this.onBoardSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onLinkSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBoardDeselected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onLinkDeselected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.finishedAddingBoard = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.finishedDeletingBoard = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragging = false;
        this.canSelect = false;
        this.linkSelected = false;
        this.boardSelected = false;
        this.linking = false;
        this.mouseDown = false;
        this.mouseUp = false;
        this.fullWidthX = 1600;
        this.fullWidthY = 900;
        this.width = 990;
        this.height = 600;
    }
    DragDropComponent.prototype.onMouseEnter = function (event) {
        event.preventDefault();
        if (!!this.newBoard && this.operationMode === 'Add') {
            var point = new __WEBPACK_IMPORTED_MODULE_8__point__["a" /* Point */]((event.clientX - this.rect.left) / this.scaleFactor, (event.clientY - this.rect.top) / this.scaleFactor);
            this.wsc.setCursor(new __WEBPACK_IMPORTED_MODULE_2__board_board__["a" /* Board */](point.getX(), point.getY(), 160 / this.scaleFactor, 160 / this.scaleFactor, this.newBoard));
        }
    };
    DragDropComponent.prototype.onMouseLeave = function (event) {
        event.preventDefault();
        this.wsc.resetCursorLocation();
        this.dragging = false;
        this.linking = false;
        this.canSelect = false;
    };
    DragDropComponent.prototype.onMousemove = function (event) {
        event.preventDefault();
        var point = new __WEBPACK_IMPORTED_MODULE_8__point__["a" /* Point */]((event.clientX - this.rect.left) / this.scaleFactor, (event.clientY - this.rect.top) / this.scaleFactor);
        if (this.operationMode === 'Add' || (this.mouseDown && this.dragging)) {
            this.wsc.updateCursorLocation(point.getX(), point.getY());
        }
        if (this.mouseDown && !this.dragging) {
            this.canSelect = this.wsc.checkPoint(point);
        }
        if (this.operationMode === 'Link' && this.linking) {
            this.wsc.updateLinking(point.getX(), point.getY());
        }
    };
    DragDropComponent.prototype.onMousedown = function (event) {
        event.preventDefault();
        var point = new __WEBPACK_IMPORTED_MODULE_8__point__["a" /* Point */]((event.clientX - this.rect.left) / this.scaleFactor, (event.clientY - this.rect.top) / this.scaleFactor);
        this.mouseDown = true;
        if (this.operationMode === 'Link') {
            this.linking = this.wsc.linkStart(point.getX(), point.getY());
            return;
        }
        if (this.operationMode === 'Delete') {
            if (this.wsc.checkPoint(point)) {
                if (this.wsc.findBoardAt(point.getX(), point.getY())) {
                    var deletedBoard = this.wsc.deleteAtPoint(point);
                    if (deletedBoard) {
                        this.availableBoards.push(deletedBoard);
                        this.finishedDeletingBoard.emit();
                    }
                }
                else {
                    this.wsc.removeLinkNextToPoint(point);
                }
            }
            else {
                this.finishedAddingBoard.emit();
            }
        }
        if (this.wsc.selectBoard(point.getX(), point.getY())) {
            this.dragging = this.wsc.dragStart(point.getX(), point.getY());
            this.selectBoard();
            this.deselectLink();
            return;
        }
        if (this.wsc.selectLink(point)) {
            this.selectLink();
            this.deselectBoard();
            return;
        }
        this.deselectLink();
        this.deselectBoard();
    };
    DragDropComponent.prototype.onMouseup = function (event) {
        event.preventDefault();
        this.mouseUp = false;
        var point = new __WEBPACK_IMPORTED_MODULE_8__point__["a" /* Point */]((event.clientX - this.rect.left) / this.scaleFactor, (event.clientY - this.rect.top) / this.scaleFactor);
        if (this.dragging) {
            this.wsc.dragEnd(point.getX(), point.getY());
            this.dragging = false;
            this.canSelect = this.wsc.checkPoint(point);
        }
        if (this.operationMode === 'Link' && this.linking) {
            var link_success = this.wsc.linkEnd(point.getX(), point.getY());
            this.linking = false;
            if (link_success) {
                this.selectLink();
            }
        }
        if (this.operationMode === 'Add') {
            this.clicked(event);
        }
    };
    DragDropComponent.prototype.onResize = function (event) {
        this.refreshRect();
    };
    DragDropComponent.prototype.onScroll = function (event) {
        this.refreshRect();
    };
    DragDropComponent.prototype.onKeyUp = function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.stopPropagation();
            event.preventDefault();
            this.saveSketch();
        }
    };
    DragDropComponent.prototype.ngOnInit = function () {
        this.ctx = this.canvasRef.nativeElement.getContext('2d');
        this.wsc = new __WEBPACK_IMPORTED_MODULE_4__workspace_canvas__["a" /* WorkspaceCanvas */](this.ctx, this.rect, this.width, this.height);
        this.refreshRect();
        this.loadSketch();
    };
    DragDropComponent.prototype.getAvailableBoards = function () {
        var _this = this;
        this.availableBoards = [];
        this.boardService.all('RealBoard').then(function (boards) {
            for (var idx = 0; idx < boards.length; idx++) {
                var remove = false;
                for (var _i = 0, _a = _this.sketch.getBoards(); _i < _a.length; _i++) {
                    var board = _a[_i];
                    if (boards[idx].getMac() === board.getMac()) {
                        remove = true;
                        break;
                    }
                }
                if (!remove) {
                    _this.availableBoards.push(boards[idx]);
                }
            }
        });
    };
    DragDropComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.refreshRect();
        this.ngZone.runOutsideAngular(function () { return _this.wsc.draw(); });
    };
    DragDropComponent.prototype.saveSketch = function () {
        this.sketch = this.wsc.buildSketch();
        this.sketchService.update(this.sketch);
    };
    DragDropComponent.prototype.ngOnChanges = function (changes) {
        if (changes['operationMode']) {
            this.deselectBoard();
        }
        if (changes['sketch']) {
            this.deselectLink();
            this.deselectBoard();
            if (typeof this.wsc !== 'undefined') {
                this.loadSketch();
            }
            this.getAvailableBoards();
        }
        if (this.operationMode === 'Add' && changes['newBoard']) {
            this.wsc.setCursor(new __WEBPACK_IMPORTED_MODULE_2__board_board__["a" /* Board */](-100 / this.scaleFactor, -100 / this.scaleFactor, 160 / this.scaleFactor, 160 / this.scaleFactor, this.newBoard));
        }
    };
    DragDropComponent.prototype.refreshRect = function () {
        this.width = this.canvasContainerRef.nativeElement.clientWidth;
        this.height = this.canvasContainerRef.nativeElement.clientHeight;
        this.canvasRef.nativeElement.width = this.width;
        this.canvasRef.nativeElement.height = this.height;
        this.scaleFactor = this.width / this.fullWidthX;
        this.rect = this.canvasRef.nativeElement.getBoundingClientRect();
        this.wsc.refreshRect(this.rect, this.width, this.height, this.scaleFactor);
    };
    DragDropComponent.prototype.clicked = function (event) {
        var selectedPoint = new __WEBPACK_IMPORTED_MODULE_8__point__["a" /* Point */]((event.clientX - this.rect.left) / this.scaleFactor, (event.clientY - this.rect.top) / this.scaleFactor);
        if (this.operationMode === 'Add') {
            if (!this.newBoard.in_use()) {
                var drawn = this.wsc.drawBoardAt(selectedPoint, this.newBoard);
                if (drawn) {
                    this.availableBoards.splice(0, 1);
                }
            }
            this.finishedAddingBoard.emit();
            this.wsc.setCursor(null);
        }
    };
    DragDropComponent.prototype.selectLink = function () {
        this.linkSelected = true;
        this.onLinkSelected.emit(this.wsc.getSelectedLink());
    };
    DragDropComponent.prototype.deselectLink = function () {
        if (this.linkSelected) {
            this.linkSelected = false;
            this.wsc.deselectLink();
            this.onLinkDeselected.emit();
        }
    };
    DragDropComponent.prototype.selectBoard = function () {
        this.boardSelected = true;
        this.onBoardSelected.emit(this.wsc.getSelectedBoard());
    };
    DragDropComponent.prototype.deselectBoard = function () {
        if (this.boardSelected) {
            this.boardSelected = false;
            this.wsc.deselectBoard();
            this.onBoardDeselected.emit();
        }
    };
    DragDropComponent.prototype.loadSketch = function () {
        this.wsc.loadSketch(this.sketch);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DragDropComponent.prototype, "operationMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__sketch_sketch__["a" /* Sketch */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__sketch_sketch__["a" /* Sketch */]) === 'function' && _a) || Object)
    ], DragDropComponent.prototype, "sketch", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__board_config__["a" /* BoardConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__board_config__["a" /* BoardConfig */]) === 'function' && _b) || Object)
    ], DragDropComponent.prototype, "newBoard", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DragDropComponent.prototype, "onBoardSelected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DragDropComponent.prototype, "onLinkSelected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DragDropComponent.prototype, "onBoardDeselected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DragDropComponent.prototype, "onLinkDeselected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DragDropComponent.prototype, "finishedAddingBoard", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DragDropComponent.prototype, "finishedDeletingBoard", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myCanvas'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _c) || Object)
    ], DragDropComponent.prototype, "canvasRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myCanvasContainer'), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _d) || Object)
    ], DragDropComponent.prototype, "canvasContainerRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DragDropComponent.prototype, "onMouseEnter", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DragDropComponent.prototype, "onMouseLeave", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousemove', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DragDropComponent.prototype, "onMousemove", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DragDropComponent.prototype, "onMousedown", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DragDropComponent.prototype, "onMouseup", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DragDropComponent.prototype, "onResize", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DragDropComponent.prototype, "onScroll", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DragDropComponent.prototype, "onKeyUp", null);
    DragDropComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drag-drop',
            template: __webpack_require__(732),
            styles: [__webpack_require__(712)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__sketch_sketch_service__["a" /* SketchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__sketch_sketch_service__["a" /* SketchService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__board_board_service__["a" /* BoardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__board_board_service__["a" /* BoardService */]) === 'function' && _h) || Object])
    ], DragDropComponent);
    return DragDropComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/drag-drop.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaptopInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LaptopInputComponent = (function () {
    function LaptopInputComponent(ng2cable, broadcaster) {
        this.ng2cable = ng2cable;
        this.broadcaster = broadcaster;
        this.events = [];
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* ENV */].apiWs;
        this.deviceType = 'Input';
        // private mac: string = `${localStorage.getItem('atrato-user-id')}|${BrowserDetails.getDetails()}|${this.deviceType}`;
        this.mac = localStorage.getItem('atrato-user-id') + "|LaptopInput";
        this.events.push("Registering laptop with mac: " + this.mac);
        this.ng2cable.setCable(this.url);
    }
    LaptopInputComponent.prototype.ngOnInit = function () {
        this.registerToChannel();
    };
    LaptopInputComponent.prototype.registerToChannel = function () {
        this.ng2cable.subscription = this.ng2cable.cable.subscriptions.create({ channel: 'SketchChannel',
            mac: this.mac, type: this.deviceType, user_id: localStorage.getItem('atrato-user-id') });
        this.events.push("Started connection with " + this.ng2cable.subscription.consumer.url);
    };
    LaptopInputComponent.prototype.triggerInput = function () {
        this.ng2cable.subscription.perform('blink', { 'mac': this.mac });
    };
    LaptopInputComponent.prototype.ngOnDestroy = function () {
        this.ng2cable.unsubscribe();
    };
    LaptopInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-laptop-input',
            template: __webpack_require__(734),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__["Ng2Cable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__["Ng2Cable"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__["Broadcaster"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__["Broadcaster"]) === 'function' && _b) || Object])
    ], LaptopInputComponent);
    return LaptopInputComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/laptop-input.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaptopOutputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LaptopOutputComponent = (function () {
    function LaptopOutputComponent(ng2cable) {
        this.ng2cable = ng2cable;
        this.events = [];
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* ENV */].apiWs;
        this.deviceType = 'Screen';
        // private mac: string = `${localStorage.getItem('atrato-user-id')}|${BrowserDetails.getDetails()}${this.deviceType}`;
        this.mac = localStorage.getItem('atrato-user-id') + "|LaptopScreen";
        this.events.push("Registering laptop with mac: " + this.mac);
        this.ng2cable.setCable(this.url);
    }
    LaptopOutputComponent.prototype.ngOnInit = function () {
        this.registerToChannel();
    };
    LaptopOutputComponent.prototype.registerToChannel = function () {
        var _this = this;
        this.ng2cable.subscription = this.ng2cable.cable.subscriptions.create({ channel: 'SketchChannel',
            mac: this.mac, type: this.deviceType, user_id: localStorage.getItem('atrato-user-id') }, {
            received: function (data) {
                var message = data.message;
                _this.events.push("Received channel message with type: " + message.type);
                window.open(message.url);
            }
        });
        this.events.push("Started connection with " + this.ng2cable.subscription.consumer.url);
    };
    LaptopOutputComponent.prototype.ngOnDestroy = function () {
        this.ng2cable.unsubscribe();
    };
    LaptopOutputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-laptop-output',
            template: __webpack_require__(735),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__["Ng2Cable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_cable_js_index__["Ng2Cable"]) === 'function' && _a) || Object])
    ], LaptopOutputComponent);
    return LaptopOutputComponent;
    var _a;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/laptop-output.component.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colours; });
// Colours imported from http://materializecss.com/color.html
// Pick the Lighten-2 values so they work with black text
var Colours = (function () {
    function Colours() {
    }
    Colours.getColour = function (idx) {
        var len = this.colours.length;
        return this.colours[idx % len];
    };
    Colours.colours = [
        '#e57373',
        '#f06292',
        '#ba68c8',
        '#7986cb',
        '#64b5f6',
        '#4dd0e1',
    ];
    return Colours;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/colours.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Code; });
var Code = (function () {
    function Code(codeInterface) {
        this.code = codeInterface.code;
        this.name = codeInterface.name;
    }
    Code.prototype.getCode = function () {
        return this.code;
    };
    Code.prototype.getName = function () {
        return this.name;
    };
    return Code;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/code.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Log; });
var Log = (function () {
    function Log(log) {
        this.id = log.id;
        this.log_type = log.log_type;
        this.message = log.message;
        this.created_at = log.created_at;
    }
    return Log;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/log.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        value = value.replace("_", " ");
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    };
    CapitalizePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'capitalize'
        }), 
        __metadata('design:paramtypes', [])
    ], CapitalizePipe);
    return CapitalizePipe;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/capitalize.pipe.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DasherizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DasherizePipe = (function () {
    function DasherizePipe() {
    }
    DasherizePipe.prototype.transform = function (value) {
        return value.replace("_", "-");
    };
    DasherizePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dasherize'
        }), 
        __metadata('design:paramtypes', [])
    ], DasherizePipe);
    return DasherizePipe;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/dasherize.pipe.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);









//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/rxjs-extensions.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__link_link__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkspaceCanvas; });

var WorkspaceCanvas = (function () {
    function WorkspaceCanvas(ctx, rect, width, height) {
        this.ctx = ctx;
        this.rect = rect;
        // this.boards = [];
        this.links = [];
        this.currentLink = null;
        this.cursor = null;
        this.width = width;
        this.height = height;
    }
    WorkspaceCanvas.prototype.boards = function () {
        return this.sketch.getBoards();
    };
    WorkspaceCanvas.prototype.drawBoardAt = function (selectedPoint, b) {
        this.cursor.setBoardConfig(b);
        return this.drawAtPoint(selectedPoint.getX(), selectedPoint.getY());
    };
    WorkspaceCanvas.prototype.drawAtPoint = function (x, y) {
        var new_board = this.cursor.copy();
        new_board.setCentre(this.cursor.getCentre());
        for (var _i = 0, _a = this.boards(); _i < _a.length; _i++) {
            var board = _a[_i];
            if (board.collides(new_board)) {
                return false;
            }
        }
        delete this.cursor;
        new_board.setOffset(0, 0);
        this.addBoard(new_board);
        return true;
    };
    WorkspaceCanvas.prototype.checkPoint = function (selectedPoint) {
        return !!(this.findBoardAt(selectedPoint.getX(), selectedPoint.getY()) ||
            this.checkIfNearLink(selectedPoint));
    };
    WorkspaceCanvas.prototype.removeBoardLinks = function (board) {
        for (var idx = this.links.length - 1; idx >= 0; idx--) {
            var link = this.links[idx];
            if (link.getEndBoard().getBoardConfig() === board.getBoardConfig() ||
                link.getStartBoard().getBoardConfig() === board.getBoardConfig()) {
                this.links.splice(idx, 1);
            }
        }
    };
    WorkspaceCanvas.prototype.removeLinkNextToPoint = function (selectedPoint) {
        var deletedLink = this.checkIfNearLink(selectedPoint);
        this.links.splice(this.links.indexOf(deletedLink), 1);
    };
    WorkspaceCanvas.prototype.removeBoard = function (board) {
        var index = this.boards().indexOf(board);
        this.boards().splice(index, 1);
        this.sketch.changed();
    };
    WorkspaceCanvas.prototype.addBoard = function (board) {
        this.boards().push(board);
        this.sketch.changed();
    };
    WorkspaceCanvas.prototype.deleteAtPoint = function (selectedPoint) {
        var clickedBoard = this.findBoardAt(selectedPoint.getX(), selectedPoint.getY());
        if (clickedBoard) {
            this.removeBoard(clickedBoard);
            this.removeBoardLinks(clickedBoard);
            return clickedBoard.getBoardConfig();
        }
        else {
            return null;
        }
    };
    WorkspaceCanvas.prototype.redrawCanvas = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.scale(this.scaleFactor, this.scaleFactor);
        for (var _i = 0, _a = this.boards(); _i < _a.length; _i++) {
            var board = _a[_i];
            board.draw(this.ctx);
        }
        for (var _b = 0, _c = this.links; _b < _c.length; _b++) {
            var link = _c[_b];
            link.draw(this.ctx);
        }
        if (this.currentLink) {
            this.currentLink.draw(this.ctx);
        }
        if (this.cursor) {
            this.ctx.fillStyle = 'green';
            for (var _d = 0, _e = this.boards(); _d < _e.length; _d++) {
                var board = _e[_d];
                if (board.collides(this.cursor)) {
                    this.ctx.fillStyle = 'red';
                    break;
                }
            }
            this.cursor.draw(this.ctx);
            this.ctx.fillStyle = 'black';
        }
        if (this.selectedBoard) {
            this.ctx.fillStyle = 'yellow';
            this.selectedBoard.draw(this.ctx);
            this.ctx.fillStyle = 'black';
        }
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    };
    WorkspaceCanvas.prototype.updateCursorLocation = function (x, y) {
        if (this.cursor) {
            this.cursor.set(x, y);
        }
    };
    WorkspaceCanvas.prototype.resetCursorLocation = function () {
        if (this.savedBoard) {
            this.cursor.deepSetCentre(this.savedBoard.getCentre());
            this.savedBoard.setCentre(this.cursor.getCentre());
            this.addBoard(this.savedBoard);
            this.savedBoard = null;
        }
        this.cursor = null;
        this.currentLink = null;
    };
    WorkspaceCanvas.prototype.draw = function () {
        var _this = this;
        this.redrawCanvas();
        requestAnimationFrame(function () { return _this.draw(); });
    };
    WorkspaceCanvas.prototype.updateLinking = function (x, y) {
        this.currentLink.setEnd(x, y);
    };
    WorkspaceCanvas.prototype.linkStart = function (x, y) {
        var selectedBoard = this.findBoardAt(x, y);
        if (selectedBoard) {
            this.currentLink = new __WEBPACK_IMPORTED_MODULE_0__link_link__["b" /* Link */](selectedBoard.getPosX(), selectedBoard.getPosY(), x, y, selectedBoard);
            return true;
        }
        else {
            return false;
        }
    };
    WorkspaceCanvas.prototype.linkEnd = function (x, y) {
        var selectedBoard = this.findBoardAt(x, y);
        if (selectedBoard && this.currentLink.getStartBoard() !== selectedBoard) {
            var acceptedLinks = selectedBoard.getBoardConfig().getAcceptedLinks();
            if (acceptedLinks.length !== 0) {
                this.currentLink.setEnd(selectedBoard.getPosX(), selectedBoard.getPosY(), selectedBoard);
                this.currentLink.setLogic(acceptedLinks[0].getName());
                this.links.push(this.currentLink.exportFinished());
                this.sketch.changed();
                this.selectedLink = this.links.slice(-1)[0];
                this.currentLink = null;
                return true;
            }
        }
        this.currentLink = null;
        return false;
    };
    WorkspaceCanvas.prototype.dragStart = function (x, y) {
        var selectedBoard = this.findBoardAt(x, y);
        if (selectedBoard) {
            this.removeBoard(selectedBoard);
            this.savedBoard = selectedBoard.copy();
            this.cursor = selectedBoard;
            this.cursor.setOffset(x - selectedBoard.getPosX(), y - selectedBoard.getPosY());
            return true;
        }
        else {
            this.cursor = null;
            this.savedBoard = null;
            return false;
        }
    };
    WorkspaceCanvas.prototype.dragEnd = function (x, y) {
        if (!this.drawAtPoint(x, y)) {
            this.resetCursorLocation();
        }
        this.savedBoard = null;
        this.cursor = null;
    };
    WorkspaceCanvas.prototype.findBoardAt = function (x, y) {
        var clickedBoard = null;
        for (var _i = 0, _a = this.boards(); _i < _a.length; _i++) {
            var board = _a[_i];
            if (board.containsPoint(this.ctx, x, y)) {
                clickedBoard = board;
                break; // Never more than one board at one point
            }
        }
        return clickedBoard;
    };
    WorkspaceCanvas.prototype.checkIfNearLink = function (point) {
        var selectedLink = null;
        for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.closeTo(point, this.ctx)) {
                selectedLink = link;
                break;
            }
        }
        return selectedLink;
    };
    WorkspaceCanvas.prototype.selectBoard = function (x, y) {
        this.selectedBoard = this.findBoardAt(x, y);
        return (this.selectedBoard) ? true : false;
    };
    WorkspaceCanvas.prototype.selectLink = function (point) {
        this.selectedLink = this.checkIfNearLink(point);
        return (this.selectedLink) ? true : false;
    };
    WorkspaceCanvas.prototype.deselectLink = function () {
        delete this.selectedLink;
    };
    WorkspaceCanvas.prototype.deselectBoard = function () {
        delete this.selectedBoard;
    };
    WorkspaceCanvas.prototype.getSelectedBoard = function () {
        return this.selectedBoard.getBoardConfig();
    };
    WorkspaceCanvas.prototype.getSelectedLink = function () {
        return this.selectedLink;
    };
    WorkspaceCanvas.prototype.setCursor = function (board) {
        this.cursor = board;
    };
    WorkspaceCanvas.prototype.loadSketch = function (sketch) {
        this.sketch = sketch;
        // this.boards() = this.sketch.getBoards();
        this.links = this.sketch.getLinks();
    };
    WorkspaceCanvas.prototype.buildSketch = function () {
        this.sketch.setBoards(this.boards());
        this.sketch.setLinks(this.links);
        this.sketch.saveChanges();
        return this.sketch;
    };
    WorkspaceCanvas.prototype.refreshRect = function (rect, width, height, scaleFactor) {
        this.width = width;
        this.height = height;
        this.rect = rect;
        this.scaleFactor = scaleFactor;
    };
    return WorkspaceCanvas;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/workspace-canvas.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/polyfills.js.map

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".active-boards-container {\n  max-height: 700px;\n  overflow-y: scroll; }\n\n.board {\n  border: 4px solid white;\n  border-radius: 10px;\n  padding: 5px 8px;\n  margin: 0 5px 25px 0; }\n  .board.selected {\n    border: 4px solid black; }\n  .board.used {\n    opacity: 0.5; }\n\n.text-right {\n  text-align: right; }\n\n.offline {\n  color: #b71c1c; }\n\n.online {\n  color: #1b5e20; }\n\np {\n  margin-bottom: 5px; }\n\n.activity {\n  font-size: 11px; }\n\n.mac {\n  word-wrap: break-word;\n  font-size: 13px; }\n\napp-click-to-edit {\n  display: inline-block; }\n\n.board {\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none; }\n  .board.animate {\n    -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n            animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px; }\n    .board.animate.used {\n      -webkit-animation: none;\n              animation: none; }\n\n@-webkit-keyframes shake {\n  10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0); }\n  20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0); }\n  30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0); }\n  40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0); } }\n\n@keyframes shake {\n  10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0); }\n  20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0); }\n  30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0); }\n  40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".box-size-proper {\n  background-color: black; }\n\n.navigation a {\n  cursor: pointer; }\n\n.navigation .auth {\n  margin-left: 30%; }\n\n.navigation .nav-item a {\n  display: block;\n  padding: .5em 1em;\n  border: 1px solid transparent;\n  border-top-right-radius: .25rem;\n  border-top-left-radius: .25rem; }\n  .navigation .nav-item a.active {\n    color: #464a4c;\n    background-color: #fff;\n    border-color: #ddd #ddd #fff; }\n  .navigation .nav-item a.username {\n    color: gray;\n    font-size: 16px;\n    cursor: default; }\n\n.navigation a:not([href]):not([tabindex]) {\n  color: #0275d8;\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".details {\n  background-color: #e0e0e0;\n  padding: 10px 25px; }\n\n.btn.full {\n  width: 100%;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".edit-form {\n  margin-bottom: 10px; }\n\nbutton:focus {\n  outline: 0;\n  cursor: pointer; }\n\n.read-only {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80); }\n\n.gu-hide {\n  display: none !important; }\n\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }\n\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20); }\n\n.container.source {\n  background-color: red; }\n\n.container.target {\n  background-color: blue;\n  min-height: 100px; }\n\n.menu, .workspace {\n  border: 1px solid black;\n  min-height: 400px; }\n\ncanvas {\n  border: 1px solid black;\n  width: 100%;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none; }\n\n.sixteen-nine {\n  position: relative;\n  width: 100%;\n  max-width: 990px;\n  margin: 0 auto; }\n  .sixteen-nine:before {\n    display: block;\n    content: \"\";\n    width: 100%;\n    padding-top: 56.25%; }\n  .sixteen-nine > .canvas {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.draggable {\n  cursor: -webkit-grab;\n  cursor: grab; }\n\n.dragging {\n  cursor: -webkit-grabbing;\n  cursor: grabbing; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".home-container {\n  margin-top: 3rem; }\n\nul.pages {\n  list-style-type: none;\n  padding: 0 15%; }\n  ul.pages li {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".log .connected {\n  color: #4caf50; }\n\n.log .disconnected {\n  color: #9e9e9e; }\n\n.log .error {\n  color: #f44336; }\n\n.log .output-sent {\n  color: #2196f3; }\n\n.log .input-received {\n  color: #ff9800; }\n\n.log .register {\n  color: #1b5e20; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "h3, p {\n  display: block;\n  width: 100%; }\n\n.hardware-req {\n  padding: 5px 10px;\n  border-radius: 10px;\n  margin-right: 5px; }\n  .hardware-req.owned {\n    background-color: #81c784; }\n  .hardware-req.not-owned {\n    background-color: #e57373; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".btn-group .btn {\n  border: 3px solid white; }\n  .btn-group .btn.full {\n    width: 100%; }\n  .btn-group .btn.half {\n    width: 49%; }\n  .btn-group .btn.selected {\n    border: 3px solid black; }\n\n.commands-wrapper {\n  width: 100%; }\n  .commands-wrapper .description {\n    margin-left: 1rem; }\n\n.status-button {\n  text-align: center;\n  border: 4px solid white;\n  border-radius: 10px; }\n  .status-button .btn {\n    color: white;\n    font-weight: bold;\n    padding: 15px 45px; }\n    .status-button .btn.closed {\n      background-color: #81c784; }\n      .status-button .btn.closed.selected {\n        border: 4px solid #1b5e20; }\n    .status-button .btn.active {\n      background-color: #e57373; }\n      .status-button .btn.active.selected {\n        border: 4px solid #b71c1c; }\n\napp-click-to-edit {\n  display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "ul {\n  padding-left: 5px; }\n\n.sketch {\n  list-style-type: none;\n  margin-bottom: 2rem;\n  border-radius: 5px;\n  position: relative; }\n  .sketch .info {\n    padding: 10px;\n    border: 4px solid white;\n    border-radius: 10px; }\n    .sketch .info.active {\n      background-color: #81c784; }\n      .sketch .info.active.selected {\n        border: 4px solid #1b5e20; }\n    .sketch .info.closed {\n      background-color: #e57373; }\n      .sketch .info.closed.selected {\n        border: 4px solid #b71c1c; }\n    .sketch .info.new-purchase {\n      background-color: #ab47bc; }\n      .sketch .info.new-purchase.selected {\n        border: 4px solid #4a148c; }\n  .sketch.new-button {\n    border: 1px solid gray;\n    padding: 10px;\n    cursor: pointer; }\n  .sketch .removeButton {\n    border-radius: 7px;\n    border: 0px;\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    cursor: pointer; }\n  .sketch .marketplace-button {\n    border-radius: 7px;\n    border: 0px;\n    position: absolute;\n    right: -10px;\n    bottom: -10px;\n    cursor: pointer; }\n    .sketch .marketplace-button.publish-to-market {\n      background-color: #2196f3; }\n    .sketch .marketplace-button.remove-from-market {\n      background-color: #ff9800; }\n    .sketch .marketplace-button .fa-cloud-upload {\n      padding: 5px; }\n    .sketch .marketplace-button .fa-usd {\n      padding: 5px 10px; }\n\napp-click-to-edit {\n  display: inline-block; }\n\n.box-size-proper {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".register-form {\n  margin-top: 100px;\n  text-align: center; }\n  .register-form input {\n    text-align: center; }\n  .register-form button {\n    margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"boards\" class=\"active-boards-container row \">\n  <div *ngFor=\"let board of boards\" class=\"{{configuration.class}}\">\n    <div class=\"board {{board.is_used ? 'used' : ''}} {{board.animated ? 'animate' : ''}} {{selectedBoard === board ? 'selected' : ''}}\" [ngStyle]=\"{'background-color': board.colour}\" (mousedown)=\"onBoardSelected(board)\" >\n      <p class=\"text-center\"  [ngClass]=\"{'mb-2 mt-2': board.subtype==='VirtualBoard' }\">\n        {{board.name}}\n        <!-- <app-click-to-edit [fieldValue]=\"board.getName()\" [fieldName]=\"'Board name'\" (nameUpdated)=\"onNameUpdated($event, board)\"></app-click-to-edit>\n        <i *ngIf=\"configuration.unregisterable\" (click)=\"onDeregisterBoard(board)\" class=\"fa fa-power-off pull-right\" aria-hidden=\"true\"></i> -->\n      </p>\n      <div *ngIf=\"board.subtype === 'RealBoard'\">\n        <p class=\"text-center\">\n          <span [class]=\"board.status\">{{board.status}}</span>\n        </p>\n        <!-- <p class=\"text-center mac\">{{board.mac}}</p> -->\n        <p *ngIf=\"board.status === 'offline'\" class=\"text-center activity\">\n          last active {{board.last_activity}}\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <ul class=\"nav nav-tabs navigation\">\n    <li class=\"nav-item\" *ngIf=\"loggedIn()\">\n      <a class=\"username\" routerLink=\"/home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Welcome {{userName()}}</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"loggedIn()\">\n      <a (click)=\"logout()\">Log out</a>\n    </li>\n  </ul>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<p class=\"text-muted text-center\">\n  You need to authenticate before accessing the dashboard or marketplace\n</p>\n<div class=\"row\">\n  <div class=\"col-sm-6 offset-sm-3\">\n    <div class=\"form-group\">\n      <label for=\"account-name\">Name</label>\n      <input [(ngModel)]=\"user.name\" type=\"text\" class=\"form-control\" id=\"account-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"account-email\">Email address</label>\n      <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control\" id=\"account-email\" placeholder=\"Enter email\">\n    </div>\n    <button class=\"btn btn-success\" (click)=\"submit()\" [disabled]=\"!user.isValid() || submitted\">\n      Login\n      <i class=\"fa fa-spinner fa-pulse fa-fw\" aria-hidden=\"true\" *ngIf=\"submitted\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"link\" class=\"details\">\n  <h2>Link: </h2>\n  <span>{{link.startBoard.getName()}}</span>\n  <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n  <span>{{link.endBoard.getName()}}</span>\n  <span>\n    <select [(ngModel)]=\"link.logic\" name=\"Logic Type\" class=\"form-control\">\n      <option *ngFor=\"let option of link.getEndBoard().getBoardConfig().getAcceptedLinks()\" [attr.value]=\"option.name\">{{option.description}}</option>\n    </select>\n  </span>\n  <pre *ngIf=\"codeSnippets\">\n  {{renderCodeSnippet()}}\n  </pre>\n  <button type=\"button\" name=\"button\" (click)=\"updateLink(link)\" class=\"btn btn-success\">update</button>\n</div>\n<div *ngIf=\"board\" class=\"details\">\n  <h2 class=\"text-center mb-0\">Board </h2>\n  <div class=\"text-center\">\n    ({{board.mac}})\n  </div>\n  <p>\n    <label class=\"mb-0\">Type:</label>\n    <input [(ngModel)]=\"board.type\" placeholder=\"type\" class=\"form-control\" />\n  </p>\n  <p>\n    <label class=\"mb-0\">Name:</label>\n    <input [(ngModel)]=\"board.name\" placeholder=\"name\" class=\"form-control\" />\n  </p>\n  <div *ngFor=\"let field of metadata\" class=\"mb-1\">\n    <label class=\"mb-0\">{{field}}:</label>\n    <input [(ngModel)]=\"board.metadata[field]\" class=\"form-control\" >\n  </div>\n  <button type=\"button\" name=\"button\" (click)=\"updateBoard(board)\" class=\"btn full btn-success\">update</button>\n</div>\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!editable && fieldValue\" (click)=\"onClick($event);\" class=\"read-only text-center\">\n  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n  {{fieldValue}}\n</div>\n<div *ngIf=\"editable\">\n  <div class=\"form-inline edit-form\">\n    <div class=\"input-group\">\n      <input [(ngModel)]=\"fieldValue\" name=\"{{fieldName}}\" (click)=\"$event.stopPropagation();\"  class=\"form-control text-center\" placeholder=\"{{fieldName}}\">\n      <button class=\"input-group-addon\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\" (click)=\"onSave($event); \"></i></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<div class=\"sixteen-nine\" #myCanvasContainer>\n  <canvas class=\"canvas\" #myCanvas (click)='clicked($event)' [ngClass]=\"{'dragging': dragging, 'draggable': canSelect}\">\n  </canvas>\n</div>\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n        <ul class=\"list-group pages\">\n          <li class=\"\">\n            <button class=\"btn btn-outline-primary btn-lg btn-block\"routerLink=\"/sketches\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Sketches</button>\n          </li>\n          <li class=\"\">\n            <button class=\"btn btn-outline-primary btn-lg btn-block\" routerLink=\"/laptop\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Laptop</button>\n          </li>\n          <li class=\"\">\n            <button class=\"btn btn-outline-primary btn-lg btn-block\" routerLink=\"/logs\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Sketch Logs</button>\n          </li>\n          <li class=\"\">\n            <button class=\"btn btn-outline-primary btn-lg btn-block\" routerLink=\"/marketplace\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Marketplace</button>\n          </li>\n          <li class=\"\">\n            <button class=\"btn btn-outline-primary btn-lg btn-block\" routerLink=\"/myboards\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">My Boards</button>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-6\">\n        <app-sketch-manager></app-sketch-manager>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" name=\"button\" class=\"btn btn-secondary\" (click)=\"triggerInput()\">Trigger</button>\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "Screen sunt\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6 col-offset-2\">\n    <ul>\n      <li *ngFor=\"let event of events\">\n        {{event}}\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"text-center\">\n  <button type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"activateOutput()\">Output</button>\n  <button type=\"button\" name=\"button\" class=\"btn btn-info\" (click)=\"activateInput()\">Input </button>\n</div>\n<div  *ngIf=\"input\" class=\"\">\n  <app-laptop-input></app-laptop-input>\n</div>\n\n<div *ngIf=\"output\">\n  <app-laptop-output></app-laptop-output>\n</div>\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"logs\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Type</th>\n        <th>Message</th>\n        <th>Time</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let log of logs\" class=\"log\">\n        <th scope=\"row\">{{log.id}}</th>\n        <td class=\"{{log.log_type | dasherize }}\" >{{log.log_type | capitalize }}</td>\n        <td>{{log.message}}</td>\n        <td>{{log.created_at}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sketches && boards\" class=\"row\">\n  <div class=\"col-sm-6 offset-sm-3\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item row\" *ngFor=\"let sketch of sketches\">\n        <div class=\"col-10\">\n          <h3>\n            {{sketch.id}}. {{sketch.name}}\n          </h3>\n          <p class=\"text-muted\">\n            {{sketch.description}}\n          </p>\n          <p>\n            <b>Required Hardware</b>\n            <span *ngFor=\"let board of sketch.getBoardConfigs() | realBoards \" class=\"hardware-req {{hardwareClass(board.type)}}\">\n              {{board.type}}\n            </span>\n          </p>\n          <p class=\"text-right\">\n            Created by: {{sketch.user}}\n          </p>\n          <p class=\"text-muted\" *ngIf=\"!ownAllBoards(sketch)\">\n            You don't own the following required hardware: {{missingBoards(sketch) }}\n          </p>\n          <p class=\"text-muted\" *ngIf=\"mySketch(sketch)\">\n            You already own this sketch\n          </p>\n        </div>\n        <div class=\"col-2\">\n            <button disabled=\"{{canBuySketch(sketch) ? '' : true}}\" class=\"btn btn-info\" (click)=\"buySketch(sketch)\">Buy</button>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div *ngIf=\"sketches && sketches.length == 0\" class=\"row\">\n  <div class=\"col-sm-6 offset-sm-3\">\n    <p class=\"text-muted text-center\">\n      There are no sketches for sale at the moment..\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sketch\" class=\"row\">\n  <div class=\"col-sm-3\">\n    <button type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"navigateToHome()\">HOME</button>\n  </div>\n  <div class=\"col-sm-3 text-center mb-3 mt-3 h1\">\n      <app-click-to-edit [fieldValue]=\"sketch.getName()\" [fieldName]=\"'Sketch name'\" (nameUpdated)=\"onNameUpdated($event)\"></app-click-to-edit>\n      <div class=\"btn-group mr-2 status-button\" role=\"group\" aria-label=\"First group\">\n        <button *ngIf=\"sketch.status=='closed'\" type=\"button\" class=\"btn btn-secondary closed\" (click)=\"activateSketch(idx)\">\n          Activate\n        </button>\n        <button *ngIf=\"sketch.status=='active'\" type=\"button\" class=\"btn btn-secondary active\" (click)=\"stopSketch(idx)\">\n          Stop\n        </button>\n      </div>\n  </div>\n  <div class=\"col-sm-6\">\n\n  </div>\n</div>\n<div *ngIf=\"sketch\" class=\"row\">\n  <div class=\"col-md-2 pt-2\">\n    <div *ngIf=\"boards\">\n      <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [ngClass]=\"{'active' : displayRealBoards }\" (click)=\"showRealBoards()\">Real</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [ngClass]=\"{'active' : !displayRealBoards }\" (click)=\"showVirtualBoards()\">Virtual</a>\n        </li>\n      </ul>\n      <div *ngIf=\"displayRealBoards\">\n        <app-active-boards [boards]=\"boards | realBoards\" [selectedBoard]=\"newBoard\" (onBoardSave)=\"onBoardSave($event)\" (boardSelectedEmitter)=\"onActiveBoardSelected($event)\"></app-active-boards>\n      </div>\n      <div *ngIf=\"!displayRealBoards\">\n        <app-active-boards [boards]=\"(boards | virtualBoards)\" [selectedBoard]=\"newBoard\" (onBoardSave)=\"onBoardSave($event)\" (boardSelectedEmitter)=\"onActiveBoardSelected($event)\"></app-active-boards>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"btn-group commands-wrapper mb-2 row\" role=\"group\" aria-label=\"First group\">\n      <div class=\"col-sm-3\">\n        <button [ngClass]=\"{'selected': operationMode==='Delete' }\" type=\"button\" class=\"btn btn-secondary btn-danger full\" (click)=\"changeMode('Delete')\"> Delete </button>\n      </div>\n      <div class=\"col-sm-6 text-center\">\n        <button *ngIf=\"!sketch.saved\" type=\"button\" class=\"btn btn-success half\" (click)=\"drag_drop.saveSketch()\"> Save </button>\n        <button *ngIf=\"!sketch.saved\" type=\"button\" class=\"btn btn-warning half\" (click)=\"revertToActive()\" >Revert</button>\n      </div>\n      <div class=\"col-sm-3\">\n        <button [ngClass]=\"{'selected': operationMode==='Link' }\" type=\"button\" class=\"btn btn-primary full\" (click)=\"changeMode('Link')\"> Link </button>\n      </div>\n    </div>\n    <app-drag-drop #drag_drop [sketch]=\"sketch\" [newBoard]=\"newBoard\" [operationMode]=\"operationMode\" (onLinkSelected)=\"onLinkSelected($event)\" (onLinkDeselected)=\"onLinkDeselected()\" (onBoardSelected)=\"onBoardSelected($event)\" (onBoardDeselected)=\"onBoardDeselected()\" (finishedDeletingBoard)=\"onFinishedDeletingBoard($event)\" (finishedAddingBoard)=\"onFinishedAddingBoard($event)\"></app-drag-drop>\n    <input [(ngModel)]=\"sketch.description\" name=\"sketch-description\" class=\"form-control description\" placeholder=\"Sketch description (for marketplace)\">\n  </div>\n  <app-board-details class='col-md-2' [board]=\"selectedBoard\" (onBoardSave)=\"onBoardSave($event)\" [link]=\"selectedLink\" (onLinkSave)=\"onLinkSave($event)\" [linkOptions]=\"links\"></app-board-details>\n</div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<div class=\"box-size-proper\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-sm-8 pt-2\">\n      <div *ngIf=\"sketches\" class=\"sketchesBar\">\n        <div  class=\"text-center sketch {{sketch.status}}\" *ngFor=\"let sketch of sketches; let idx = index\">\n          <button class=\"removeButton\" name=\"button\">\n            <i class=\"fa fa-times\" (click)=\"removeSketch(idx)\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"marketplace-button remove-from-market\" *ngIf=\"sketch.listed\" (click)=\"removeFromMarket(idx)\">\n            <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n          </button>\n          <button class=\"marketplace-button publish-to-market\" *ngIf=\"!sketch.listed\" (click)=\"publishToMarket(idx)\">\n            <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i>\n          </button>\n          <div (click)=\"onSketchEdit(idx)\" class=\"info {{sketch.status}} {{sketch === selectedSketch ? 'selected' : ''}} {{sketch.newPurchase ? 'new-purchase' : ''}}\">\n            <div class=\"text_center\">\n              <app-click-to-edit [fieldValue]=\"sketch.getName()\" [fieldName]=\"'Sketch name'\" (nameUpdated)=\"onNameUpdated($event);\"></app-click-to-edit>\n            </div>\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n              <button *ngIf=\"sketch.status=='closed'\" type=\"button\" class=\"btn btn-secondary\" (click)=\"activateSketch(idx, $event);\">\n                Activate\n              </button>\n              <button *ngIf=\"sketch.status=='active'\" type=\"button\" class=\"btn btn-secondary\" (click)=\"stopSketch(idx, $event);\">\n                Stop\n              </button>\n            </div>\n            <p *ngIf=\"sketch.newPurchase\" class=\"new-purchase-info\">Just Purchased</p>\n          </div>\n        </div>\n        <div class=\"sketch new-button text-center\" (click)=\"newSketch()\">\n          New Sketch\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div class=\"user-boards-container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 offset-sm-4 register-form\">\n      <span>\n        <label>Last 4 digits of MAC: </label> <br>\n        <input [(ngModel)]=\"code\" placeholder=\"XXXX\" />\n      </span>\n      <br>\n      <button type=\"button\" name=\"button\" (click)=\"registerBoard(code)\" class=\"btn btn-success\">Submit</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10 text-center\">\n      <app-active-boards [boards]=\"boards\" [selectedBoard]=\"newBoard\" (boardDeregisterEmitter)=\"deregisterBoard($event)\" [config]=\"getActiveBoardsConfig()\"></app-active-boards>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(415);


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__board_config__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BoardService = (function () {
    function BoardService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* ENV */].apiUrl + "/board";
        // private apiUrl = 'http://caplatform.herokuapp.com/api/board';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    BoardService.prototype.get = function (mac) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        search.set('user_id', localStorage.getItem('atrato-user-id'));
        return this.http
            .get(this.apiUrl + "/" + mac + ".json", { search: search })
            .toPromise()
            .then(function (response) { return new __WEBPACK_IMPORTED_MODULE_3__board_config__["a" /* BoardConfig */](response.json()); })
            .catch(this.handleError);
    };
    BoardService.prototype.all = function (subtype) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        search.set('user_id', localStorage.getItem('atrato-user-id'));
        search.set('subtype', subtype);
        return this.http
            .get(this.apiUrl + ".json", { search: search })
            .toPromise()
            .then(function (response) { return response.json().map(function (board) { return new __WEBPACK_IMPORTED_MODULE_3__board_config__["a" /* BoardConfig */](board); }); })
            .catch(this.handleError);
    };
    BoardService.prototype.update = function (board) {
        var url = this.apiUrl + "/" + board.getMac();
        return this.http
            .put(url, this.board_params(board), { headers: this.headers })
            .toPromise()
            .then(function () { return board; })
            .catch(this.handleError);
    };
    BoardService.prototype.request_register = function (code) {
        return this.http
            .post(this.apiUrl + "/register.json", { partial_mac: code, user_id: localStorage.getItem('atrato-user-id') }, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.log(Array.from(response.json(), function (board) { return board; }));
        })
            .catch(this.handleError);
    };
    BoardService.prototype.deregister = function (board) {
        return this.http
            .post(this.apiUrl + "/deregister.json", this.board_params(board), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.log('Success');
        })
            .catch(this.handleError);
    };
    BoardService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    BoardService.prototype.board_params = function (board) {
        var params = {};
        Object.assign(params, board);
        var user_id = { user_id: localStorage.getItem('atrato-user-id') };
        Object.assign(params, user_id);
        return params;
    };
    BoardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BoardService);
    return BoardService;
    var _a;
}());
//# sourceMappingURL=/Users/andrei/Workspace/Dizertatie/PAClient/src/board.service.js.map

/***/ })

},[774]);
//# sourceMappingURL=main.bundle.js.map