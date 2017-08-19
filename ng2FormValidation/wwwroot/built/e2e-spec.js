'use strict'; // necessary for es6 output in node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var expectedH1 = 'Tour of Heroes';
var expectedTitle = "Angular " + expectedH1;
var targetHero = { id: 14, name: 'Celeritas' };
var targetHeroDashboardIndex = 3;
var nameSuffix = 'X';
var newHeroName = targetHero.name + nameSuffix;
var Hero = (function () {
    function Hero() {
    }
    // Factory methods
    // Hero from string formatted as '<id> <name>'.
    Hero.fromString = function (s) {
        return {
            id: +s.substr(0, s.indexOf(' ')),
            name: s.substr(s.indexOf(' ') + 1),
        };
    };
    // Hero from hero list <li> element.
    Hero.fromLi = function (li) {
        return __awaiter(this, void 0, void 0, function () {
            var strings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, li.all(protractor_1.by.xpath('span')).getText()];
                    case 1:
                        strings = _a.sent();
                        return [2 /*return*/, { id: +strings[0], name: strings[1] }];
                }
            });
        });
    };
    // Hero id and name from the given detail element.
    Hero.fromDetail = function (detail) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, _name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, detail.all(protractor_1.by.css('div')).first().getText()];
                    case 1:
                        _id = _a.sent();
                        return [4 /*yield*/, detail.element(protractor_1.by.css('h2')).getText()];
                    case 2:
                        _name = _a.sent();
                        return [2 /*return*/, {
                                id: +_id.substr(_id.indexOf(' ') + 1),
                                name: _name.substr(0, _name.lastIndexOf(' '))
                            }];
                }
            });
        });
    };
    return Hero;
}());
describe('Tutorial part 6', function () {
    beforeAll(function () { return protractor_1.browser.get(''); });
    function getPageElts() {
        var navElts = protractor_1.element.all(protractor_1.by.css('my-app nav a'));
        return {
            navElts: navElts,
            myDashboardHref: navElts.get(0),
            myDashboard: protractor_1.element(protractor_1.by.css('my-app my-dashboard')),
            topHeroes: protractor_1.element.all(protractor_1.by.css('my-app my-dashboard > div h4')),
            myHeroesHref: navElts.get(1),
            myHeroes: protractor_1.element(protractor_1.by.css('my-app my-heroes')),
            allHeroes: protractor_1.element.all(protractor_1.by.css('my-app my-heroes li')),
            selectedHero: protractor_1.element(protractor_1.by.css('my-app li.selected')),
            selectedHeroSubview: protractor_1.element(protractor_1.by.css('my-app my-heroes > div:last-child')),
            heroDetail: protractor_1.element(protractor_1.by.css('my-app hero-detail > div')),
            searchBox: protractor_1.element(protractor_1.by.css('#search-box')),
            searchResults: protractor_1.element.all(protractor_1.by.css('.search-result'))
        };
    }
    describe('Initial page', function () {
        it("has title '" + expectedTitle + "'", function () {
            expect(protractor_1.browser.getTitle()).toEqual(expectedTitle);
        });
        it("has h1 '" + expectedH1 + "'", function () {
            expectHeading(1, expectedH1);
        });
        var expectedViewNames = ['Dashboard', 'Heroes'];
        it("has views " + expectedViewNames, function () {
            var viewNames = getPageElts().navElts.map(function (el) { return el.getText(); });
            expect(viewNames).toEqual(expectedViewNames);
        });
        it('has dashboard as the active view', function () {
            var page = getPageElts();
            expect(page.myDashboard.isPresent()).toBeTruthy();
        });
    });
    describe('Dashboard tests', function () {
        beforeAll(function () { return protractor_1.browser.get(''); });
        it('has top heroes', function () {
            var page = getPageElts();
            expect(page.topHeroes.count()).toEqual(4);
        });
        it("selects and routes to " + targetHero.name + " details", dashboardSelectTargetHero);
        it("updates hero name (" + newHeroName + ") in details view", updateHeroNameInDetailView);
        it("cancels and shows " + targetHero.name + " in Dashboard", function () {
            protractor_1.element(protractor_1.by.buttonText('Back')).click();
            protractor_1.browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
            var targetHeroElt = getPageElts().topHeroes.get(targetHeroDashboardIndex);
            expect(targetHeroElt.getText()).toEqual(targetHero.name);
        });
        it("selects and routes to " + targetHero.name + " details", dashboardSelectTargetHero);
        it("updates hero name (" + newHeroName + ") in details view", updateHeroNameInDetailView);
        it("saves and shows " + newHeroName + " in Dashboard", function () {
            protractor_1.element(protractor_1.by.buttonText('Save')).click();
            protractor_1.browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
            var targetHeroElt = getPageElts().topHeroes.get(targetHeroDashboardIndex);
            expect(targetHeroElt.getText()).toEqual(newHeroName);
        });
    });
    describe('Heroes tests', function () {
        beforeAll(function () { return protractor_1.browser.get(''); });
        it('can switch to Heroes view', function () {
            getPageElts().myHeroesHref.click();
            var page = getPageElts();
            expect(page.myHeroes.isPresent()).toBeTruthy();
            expect(page.allHeroes.count()).toEqual(11, 'number of heroes');
        });
        it("selects and shows " + targetHero.name + " as selected in list", function () {
            getHeroLiEltById(targetHero.id).click();
            expect(Hero.fromLi(getPageElts().selectedHero)).toEqual(targetHero);
        });
        it('shows selected hero subview', function () {
            var page = getPageElts();
            var title = page.selectedHeroSubview.element(protractor_1.by.css('h2')).getText();
            var expectedTitle = targetHero.name.toUpperCase() + " is my hero";
            expect(title).toEqual(expectedTitle);
        });
        it('can route to hero details', function () {
            protractor_1.element(protractor_1.by.buttonText('View Details')).click();
            var page = getPageElts();
            expect(page.heroDetail.isPresent()).toBeTruthy('shows hero detail');
            var hero = Hero.fromDetail(page.heroDetail);
            expect(hero).toEqual(targetHero);
        });
        it("updates hero name (" + newHeroName + ") in details view", updateHeroNameInDetailView);
        it("shows " + newHeroName + " in Heroes list", function () {
            protractor_1.element(protractor_1.by.buttonText('Save')).click();
            protractor_1.browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
            var expectedHero = { id: targetHero.id, name: newHeroName };
            expect(Hero.fromLi(getHeroLiEltById(targetHero.id))).toEqual(expectedHero);
        });
        it("deletes " + newHeroName + " from Heroes list", function () { return __awaiter(_this, void 0, void 0, function () {
            var heroesBefore, li, page, heroesAfter, expectedHeroes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toHeroArray(getPageElts().allHeroes)];
                    case 1:
                        heroesBefore = _a.sent();
                        li = getHeroLiEltById(targetHero.id);
                        li.element(protractor_1.by.buttonText('x')).click();
                        page = getPageElts();
                        expect(page.myHeroes.isPresent()).toBeTruthy();
                        expect(page.allHeroes.count()).toEqual(10, 'number of heroes');
                        return [4 /*yield*/, toHeroArray(page.allHeroes)];
                    case 2:
                        heroesAfter = _a.sent();
                        expectedHeroes = heroesBefore.filter(function (h) { return h.name !== newHeroName; });
                        expect(heroesAfter).toEqual(expectedHeroes);
                        expect(page.selectedHeroSubview.isPresent()).toBeFalsy();
                        return [2 /*return*/];
                }
            });
        }); });
        it("adds back " + targetHero.name, function () { return __awaiter(_this, void 0, void 0, function () {
            var newHeroName, heroesBefore, numHeroes, page, heroesAfter, maxId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newHeroName = 'Alice';
                        return [4 /*yield*/, toHeroArray(getPageElts().allHeroes)];
                    case 1:
                        heroesBefore = _a.sent();
                        numHeroes = heroesBefore.length;
                        protractor_1.element(protractor_1.by.css('input')).sendKeys(newHeroName);
                        protractor_1.element(protractor_1.by.buttonText('Add')).click();
                        page = getPageElts();
                        return [4 /*yield*/, toHeroArray(page.allHeroes)];
                    case 2:
                        heroesAfter = _a.sent();
                        expect(heroesAfter.length).toEqual(numHeroes + 1, 'number of heroes');
                        expect(heroesAfter.slice(0, numHeroes)).toEqual(heroesBefore, 'Old heroes are still there');
                        maxId = heroesBefore[heroesBefore.length - 1].id;
                        expect(heroesAfter[numHeroes]).toEqual({ id: maxId + 1, name: newHeroName });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Progressive hero search', function () {
        beforeAll(function () { return protractor_1.browser.get(''); });
        it("searches for 'Ce'", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                getPageElts().searchBox.sendKeys('Ce');
                protractor_1.browser.sleep(1000);
                expect(getPageElts().searchResults.count()).toBe(2);
                return [2 /*return*/];
            });
        }); });
        it("continues search with 'l'", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                getPageElts().searchBox.sendKeys('l');
                protractor_1.browser.sleep(1000);
                expect(getPageElts().searchResults.count()).toBe(1);
                return [2 /*return*/];
            });
        }); });
        it("continues search with 'e' and gets " + targetHero.name, function () { return __awaiter(_this, void 0, void 0, function () {
            var page, hero;
            return __generator(this, function (_a) {
                getPageElts().searchBox.sendKeys('e');
                protractor_1.browser.sleep(1000);
                page = getPageElts();
                expect(page.searchResults.count()).toBe(1);
                hero = page.searchResults.get(0);
                expect(hero.getText()).toEqual(targetHero.name);
                return [2 /*return*/];
            });
        }); });
        it("navigates to " + targetHero.name + " details view", function () { return __awaiter(_this, void 0, void 0, function () {
            var hero, page;
            return __generator(this, function (_a) {
                hero = getPageElts().searchResults.get(0);
                expect(hero.getText()).toEqual(targetHero.name);
                hero.click();
                page = getPageElts();
                expect(page.heroDetail.isPresent()).toBeTruthy('shows hero detail');
                expect(Hero.fromDetail(page.heroDetail)).toEqual(targetHero);
                return [2 /*return*/];
            });
        }); });
    });
    function dashboardSelectTargetHero() {
        var targetHeroElt = getPageElts().topHeroes.get(targetHeroDashboardIndex);
        expect(targetHeroElt.getText()).toEqual(targetHero.name);
        targetHeroElt.click();
        protractor_1.browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
        var page = getPageElts();
        expect(page.heroDetail.isPresent()).toBeTruthy('shows hero detail');
        var hero = Hero.fromDetail(page.heroDetail);
        expect(hero).toEqual(targetHero);
    }
    function updateHeroNameInDetailView() {
        return __awaiter(this, void 0, void 0, function () {
            var hero;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Assumes that the current view is the hero details view.
                        addToHeroName(nameSuffix);
                        return [4 /*yield*/, Hero.fromDetail(getPageElts().heroDetail)];
                    case 1:
                        hero = _a.sent();
                        expect(hero).toEqual({ id: targetHero.id, name: newHeroName });
                        return [2 /*return*/];
                }
            });
        });
    }
});
function addToHeroName(text) {
    var input = protractor_1.element(protractor_1.by.css('input'));
    return input.sendKeys(text);
}
function expectHeading(hLevel, expectedText) {
    var hTag = "h" + hLevel;
    var hText = protractor_1.element(protractor_1.by.css(hTag)).getText();
    expect(hText).toEqual(expectedText, hTag);
}
;
function getHeroLiEltById(id) {
    var spanForId = protractor_1.element(protractor_1.by.cssContainingText('li span.badge', id.toString()));
    return spanForId.element(protractor_1.by.xpath('..'));
}
function toHeroArray(allHeroes) {
    return __awaiter(this, void 0, void 0, function () {
        var promisedHeroes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, allHeroes.map(Hero.fromLi)];
                case 1:
                    promisedHeroes = _a.sent();
                    // The cast is necessary to get around issuing with the signature of Promise.all()
                    return [2 /*return*/, Promise.all(promisedHeroes)];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9lMmUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUMsQ0FBQyxtQ0FBbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFqRCxpQkEyUkE7O0FBelJBLHlDQUFxRjtBQUdyRixJQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwQyxJQUFNLGFBQWEsR0FBRyxhQUFXLFVBQVksQ0FBQztBQUM5QyxJQUFNLFVBQVUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQ2pELElBQU0sd0JBQXdCLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUN2QixJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUVqRDtJQUFBO0lBK0JBLENBQUM7SUEzQkMsa0JBQWtCO0lBRWxCLCtDQUErQztJQUN4QyxlQUFVLEdBQWpCLFVBQWtCLENBQVM7UUFDekIsTUFBTSxDQUFDO1lBQ0wsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELG9DQUFvQztJQUN2QixXQUFNLEdBQW5CLFVBQW9CLEVBQWlCOzs7Ozs0QkFDbkIscUJBQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O2tDQUF4QyxTQUF3Qzt3QkFDdEQsc0JBQU8sRUFBRSxFQUFFLEVBQUUs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TUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVELHVCQUF1QixNQUFjLEVBQUUsWUFBb0I7SUFDdkQsSUFBSSxJQUFJLEdBQUcsTUFBSSxNQUFRLENBQUM7SUFDeEIsSUFBSSxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFRiwwQkFBMEIsRUFBVTtJQUNsQyxJQUFJLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVELHFCQUEyQixTQUE2Qjs7Ozs7d0JBQ2pDLHFCQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFBOztxQ0FBaEMsU0FBZ0M7b0JBQ3JELGtGQUFrRjtvQkFDbEYsc0JBQXNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUM7Ozs7Q0FDbkQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7IC8vIG5lY2Vzc2FyeSBmb3IgZXM2IG91dHB1dCBpbiBub2RlXG5cbmltcG9ydCB7IGJyb3dzZXIsIGVsZW1lbnQsIGJ5LCBFbGVtZW50RmluZGVyLCBFbGVtZW50QXJyYXlGaW5kZXIgfSBmcm9tICdwcm90cmFjdG9yJztcbmltcG9ydCB7IHByb21pc2UgfSBmcm9tICdzZWxlbml1bS13ZWJkcml2ZXInO1xuXG5jb25zdCBleHBlY3RlZEgxID0gJ1RvdXIgb2YgSGVyb2VzJztcbmNvbnN0IGV4cGVjdGVkVGl0bGUgPSBgQW5ndWxhciAke2V4cGVjdGVkSDF9YDtcbmNvbnN0IHRhcmdldEhlcm8gPSB7IGlkOiAxNCwgbmFtZTogJ0NlbGVyaXRhcycgfTtcbmNvbnN0IHRhcmdldEhlcm9EYXNoYm9hcmRJbmRleCA9IDM7XG5jb25zdCBuYW1lU3VmZml4ID0gJ1gnO1xuY29uc3QgbmV3SGVyb05hbWUgPSB0YXJnZXRIZXJvLm5hbWUgKyBuYW1lU3VmZml4O1xuXG5jbGFzcyBIZXJvIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8vIEZhY3RvcnkgbWV0aG9kc1xuXG4gIC8vIEhlcm8gZnJvbSBzdHJpbmcgZm9ybWF0dGVkIGFzICc8aWQ+IDxuYW1lPicuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHM6IHN0cmluZyk6IEhlcm8ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogK3Muc3Vic3RyKDAsIHMuaW5kZXhPZignICcpKSxcbiAgICAgIG5hbWU6IHMuc3Vic3RyKHMuaW5kZXhPZignICcpICsgMSksXG4gICAgfTtcbiAgfVxuXG4gIC8vIEhlcm8gZnJvbSBoZXJvIGxpc3QgPGxpPiBlbGVtZW50LlxuICBzdGF0aWMgYXN5bmMgZnJvbUxpKGxpOiBFbGVtZW50RmluZGVyKTogUHJvbWlzZTxIZXJvPiB7XG4gICAgICBsZXQgc3RyaW5ncyA9IGF3YWl0IGxpLmFsbChieS54cGF0aCgnc3BhbicpKS5nZXRUZXh0KCk7XG4gICAgICByZXR1cm4geyBpZDogK3N0cmluZ3NbMF0sIG5hbWU6IHN0cmluZ3NbMV0gfTtcbiAgfVxuXG4gIC8vIEhlcm8gaWQgYW5kIG5hbWUgZnJvbSB0aGUgZ2l2ZW4gZGV0YWlsIGVsZW1lbnQuXG4gIHN0YXRpYyBhc3luYyBmcm9tRGV0YWlsKGRldGFpbDogRWxlbWVudEZpbmRlcik6IFByb21pc2U8SGVybz4ge1xuICAgIC8vIEdldCBoZXJvIGlkIGZyb20gdGhlIGZpcnN0IDxkaXY+XG4gICAgbGV0IF9pZCA9IGF3YWl0IGRldGFpbC5hbGwoYnkuY3NzKCdkaXYnKSkuZmlyc3QoKS5nZXRUZXh0KCk7XG4gICAgLy8gR2V0IG5hbWUgZnJvbSB0aGUgaDJcbiAgICBsZXQgX25hbWUgPSBhd2FpdCBkZXRhaWwuZWxlbWVudChieS5jc3MoJ2gyJykpLmdldFRleHQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogK19pZC5zdWJzdHIoX2lkLmluZGV4T2YoJyAnKSArIDEpLFxuICAgICAgICBuYW1lOiBfbmFtZS5zdWJzdHIoMCwgX25hbWUubGFzdEluZGV4T2YoJyAnKSlcbiAgICB9O1xuICB9XG59XG5cbmRlc2NyaWJlKCdUdXRvcmlhbCBwYXJ0IDYnLCAoKSA9PiB7XG5cbiAgYmVmb3JlQWxsKCgpID0+IGJyb3dzZXIuZ2V0KCcnKSk7XG5cbiAgZnVuY3Rpb24gZ2V0UGFnZUVsdHMoKSB7XG4gICAgbGV0IG5hdkVsdHMgPSBlbGVtZW50LmFsbChieS5jc3MoJ215LWFwcCBuYXYgYScpKTtcblxuICAgIHJldHVybiB7XG4gICAgICBuYXZFbHRzOiBuYXZFbHRzLFxuXG4gICAgICBteURhc2hib2FyZEhyZWY6IG5hdkVsdHMuZ2V0KDApLFxuICAgICAgbXlEYXNoYm9hcmQ6IGVsZW1lbnQoYnkuY3NzKCdteS1hcHAgbXktZGFzaGJvYXJkJykpLFxuICAgICAgdG9wSGVyb2VzOiBlbGVtZW50LmFsbChieS5jc3MoJ215LWFwcCBteS1kYXNoYm9hcmQgPiBkaXYgaDQnKSksXG5cbiAgICAgIG15SGVyb2VzSHJlZjogbmF2RWx0cy5nZXQoMSksXG4gICAgICBteUhlcm9lczogZWxlbWVudChieS5jc3MoJ215LWFwcCBteS1oZXJvZXMnKSksXG4gICAgICBhbGxIZXJvZXM6IGVsZW1lbnQuYWxsKGJ5LmNzcygnbXktYXBwIG15LWhlcm9lcyBsaScpKSxcbiAgICAgIHNlbGVjdGVkSGVybzogZWxlbWVudChieS5jc3MoJ215LWFwcCBsaS5zZWxlY3RlZCcpKSxcbiAgICAgIHNlbGVjdGVkSGVyb1N1YnZpZXc6IGVsZW1lbnQoYnkuY3NzKCdteS1hcHAgbXktaGVyb2VzID4gZGl2Omxhc3QtY2hpbGQnKSksXG5cbiAgICAgIGhlcm9EZXRhaWw6IGVsZW1lbnQoYnkuY3NzKCdteS1hcHAgaGVyby1kZXRhaWwgPiBkaXYnKSksXG5cbiAgICAgIHNlYXJjaEJveDogZWxlbWVudChieS5jc3MoJyNzZWFyY2gtYm94JykpLFxuICAgICAgc2VhcmNoUmVzdWx0czogZWxlbWVudC5hbGwoYnkuY3NzKCcuc2VhcmNoLXJlc3VsdCcpKVxuICAgIH07XG4gIH1cblxuICBkZXNjcmliZSgnSW5pdGlhbCBwYWdlJywgKCkgPT4ge1xuXG4gICAgaXQoYGhhcyB0aXRsZSAnJHtleHBlY3RlZFRpdGxlfSdgLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChicm93c2VyLmdldFRpdGxlKCkpLnRvRXF1YWwoZXhwZWN0ZWRUaXRsZSk7XG4gICAgfSk7XG5cbiAgICBpdChgaGFzIGgxICcke2V4cGVjdGVkSDF9J2AsICgpID0+IHtcbiAgICAgICAgZXhwZWN0SGVhZGluZygxLCBleHBlY3RlZEgxKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGV4cGVjdGVkVmlld05hbWVzID0gWydEYXNoYm9hcmQnLCAnSGVyb2VzJ107XG4gICAgaXQoYGhhcyB2aWV3cyAke2V4cGVjdGVkVmlld05hbWVzfWAsICgpID0+IHtcbiAgICAgIGxldCB2aWV3TmFtZXMgPSBnZXRQYWdlRWx0cygpLm5hdkVsdHMubWFwKChlbDogRWxlbWVudEZpbmRlcikgPT4gZWwuZ2V0VGV4dCgpKTtcbiAgICAgIGV4cGVjdCh2aWV3TmFtZXMpLnRvRXF1YWwoZXhwZWN0ZWRWaWV3TmFtZXMpO1xuICAgIH0pO1xuXG4gICAgaXQoJ2hhcyBkYXNoYm9hcmQgYXMgdGhlIGFjdGl2ZSB2aWV3JywgKCkgPT4ge1xuICAgICAgbGV0IHBhZ2UgPSBnZXRQYWdlRWx0cygpO1xuICAgICAgZXhwZWN0KHBhZ2UubXlEYXNoYm9hcmQuaXNQcmVzZW50KCkpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICB9KTtcblxuICBkZXNjcmliZSgnRGFzaGJvYXJkIHRlc3RzJywgKCkgPT4ge1xuXG4gICAgYmVmb3JlQWxsKCgpID0+IGJyb3dzZXIuZ2V0KCcnKSk7XG5cbiAgICBpdCgnaGFzIHRvcCBoZXJvZXMnLCAoKSA9PiB7XG4gICAgICBsZXQgcGFnZSA9IGdldFBhZ2VFbHRzKCk7XG4gICAgICBleHBlY3QocGFnZS50b3BIZXJvZXMuY291bnQoKSkudG9FcXVhbCg0KTtcbiAgICB9KTtcblxuICAgIGl0KGBzZWxlY3RzIGFuZCByb3V0ZXMgdG8gJHt0YXJnZXRIZXJvLm5hbWV9IGRldGFpbHNgLCBkYXNoYm9hcmRTZWxlY3RUYXJnZXRIZXJvKTtcblxuICAgIGl0KGB1cGRhdGVzIGhlcm8gbmFtZSAoJHtuZXdIZXJvTmFtZX0pIGluIGRldGFpbHMgdmlld2AsIHVwZGF0ZUhlcm9OYW1lSW5EZXRhaWxWaWV3KTtcblxuICAgIGl0KGBjYW5jZWxzIGFuZCBzaG93cyAke3RhcmdldEhlcm8ubmFtZX0gaW4gRGFzaGJvYXJkYCwgKCkgPT4ge1xuICAgICAgZWxlbWVudChieS5idXR0b25UZXh0KCdCYWNrJykpLmNsaWNrKCk7XG4gICAgICBicm93c2VyLndhaXRGb3JBbmd1bGFyKCk7IC8vIHNlZW1zIG5lY2Vzc2FyeSB0byBnZXRzIHRlc3RzIHRvIHBhc3QgZm9yIHRvaC1wdDZcblxuICAgICAgbGV0IHRhcmdldEhlcm9FbHQgPSBnZXRQYWdlRWx0cygpLnRvcEhlcm9lcy5nZXQodGFyZ2V0SGVyb0Rhc2hib2FyZEluZGV4KTtcbiAgICAgIGV4cGVjdCh0YXJnZXRIZXJvRWx0LmdldFRleHQoKSkudG9FcXVhbCh0YXJnZXRIZXJvLm5hbWUpO1xuICAgIH0pO1xuXG4gICAgaXQoYHNlbGVjdHMgYW5kIHJvdXRlcyB0byAke3RhcmdldEhlcm8ubmFtZX0gZGV0YWlsc2AsIGRhc2hib2FyZFNlbGVjdFRhcmdldEhlcm8pO1xuXG4gICAgaXQoYHVwZGF0ZXMgaGVybyBuYW1lICgke25ld0hlcm9OYW1lfSkgaW4gZGV0YWlscyB2aWV3YCwgdXBkYXRlSGVyb05hbWVJbkRldGFpbFZpZXcpO1xuXG4gICAgaXQoYHNhdmVzIGFuZCBzaG93cyAke25ld0hlcm9OYW1lfSBpbiBEYXNoYm9hcmRgLCAoKSA9PiB7XG4gICAgICBlbGVtZW50KGJ5LmJ1dHRvblRleHQoJ1NhdmUnKSkuY2xpY2soKTtcbiAgICAgIGJyb3dzZXIud2FpdEZvckFuZ3VsYXIoKTsgLy8gc2VlbXMgbmVjZXNzYXJ5IHRvIGdldHMgdGVzdHMgdG8gcGFzdCBmb3IgdG9oLXB0NlxuXG4gICAgICBsZXQgdGFyZ2V0SGVyb0VsdCA9IGdldFBhZ2VFbHRzKCkudG9wSGVyb2VzLmdldCh0YXJnZXRIZXJvRGFzaGJvYXJkSW5kZXgpO1xuICAgICAgZXhwZWN0KHRhcmdldEhlcm9FbHQuZ2V0VGV4dCgpKS50b0VxdWFsKG5ld0hlcm9OYW1lKTtcbiAgICB9KTtcblxuICB9KTtcblxuICBkZXNjcmliZSgnSGVyb2VzIHRlc3RzJywgKCkgPT4ge1xuXG4gICAgYmVmb3JlQWxsKCgpID0+IGJyb3dzZXIuZ2V0KCcnKSk7XG5cbiAgICBpdCgnY2FuIHN3aXRjaCB0byBIZXJvZXMgdmlldycsICgpID0+IHtcbiAgICAgIGdldFBhZ2VFbHRzKCkubXlIZXJvZXNIcmVmLmNsaWNrKCk7XG4gICAgICBsZXQgcGFnZSA9IGdldFBhZ2VFbHRzKCk7XG4gICAgICBleHBlY3QocGFnZS5teUhlcm9lcy5pc1ByZXNlbnQoKSkudG9CZVRydXRoeSgpO1xuICAgICAgZXhwZWN0KHBhZ2UuYWxsSGVyb2VzLmNvdW50KCkpLnRvRXF1YWwoMTEsICdudW1iZXIgb2YgaGVyb2VzJyk7XG4gICAgfSk7XG5cbiAgICBpdChgc2VsZWN0cyBhbmQgc2hvd3MgJHt0YXJnZXRIZXJvLm5hbWV9IGFzIHNlbGVjdGVkIGluIGxpc3RgLCAoKSA9PiB7XG4gICAgICBnZXRIZXJvTGlFbHRCeUlkKHRhcmdldEhlcm8uaWQpLmNsaWNrKCk7XG4gICAgICBleHBlY3QoSGVyby5mcm9tTGkoZ2V0UGFnZUVsdHMoKS5zZWxlY3RlZEhlcm8pKS50b0VxdWFsKHRhcmdldEhlcm8pO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3dzIHNlbGVjdGVkIGhlcm8gc3VidmlldycsICgpID0+IHtcbiAgICAgIGxldCBwYWdlID0gZ2V0UGFnZUVsdHMoKTtcbiAgICAgIGxldCB0aXRsZSA9IHBhZ2Uuc2VsZWN0ZWRIZXJvU3Vidmlldy5lbGVtZW50KGJ5LmNzcygnaDInKSkuZ2V0VGV4dCgpO1xuICAgICAgbGV0IGV4cGVjdGVkVGl0bGUgPSBgJHt0YXJnZXRIZXJvLm5hbWUudG9VcHBlckNhc2UoKX0gaXMgbXkgaGVyb2A7XG4gICAgICBleHBlY3QodGl0bGUpLnRvRXF1YWwoZXhwZWN0ZWRUaXRsZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnY2FuIHJvdXRlIHRvIGhlcm8gZGV0YWlscycsICgpID0+IHtcbiAgICAgIGVsZW1lbnQoYnkuYnV0dG9uVGV4dCgnVmlldyBEZXRhaWxzJykpLmNsaWNrKCk7XG5cbiAgICAgIGxldCBwYWdlID0gZ2V0UGFnZUVsdHMoKTtcbiAgICAgIGV4cGVjdChwYWdlLmhlcm9EZXRhaWwuaXNQcmVzZW50KCkpLnRvQmVUcnV0aHkoJ3Nob3dzIGhlcm8gZGV0YWlsJyk7XG4gICAgICBsZXQgaGVybyA9IEhlcm8uZnJvbURldGFpbChwYWdlLmhlcm9EZXRhaWwpO1xuICAgICAgZXhwZWN0KGhlcm8pLnRvRXF1YWwodGFyZ2V0SGVybyk7XG4gICAgfSk7XG5cbiAgICBpdChgdXBkYXRlcyBoZXJvIG5hbWUgKCR7bmV3SGVyb05hbWV9KSBpbiBkZXRhaWxzIHZpZXdgLCB1cGRhdGVIZXJvTmFtZUluRGV0YWlsVmlldyk7XG5cbiAgICBpdChgc2hvd3MgJHtuZXdIZXJvTmFtZX0gaW4gSGVyb2VzIGxpc3RgLCAoKSA9PiB7XG4gICAgICBlbGVtZW50KGJ5LmJ1dHRvblRleHQoJ1NhdmUnKSkuY2xpY2soKTtcbiAgICAgIGJyb3dzZXIud2FpdEZvckFuZ3VsYXIoKTsgLy8gc2VlbXMgbmVjZXNzYXJ5IHRvIGdldHMgdGVzdHMgdG8gcGFzdCBmb3IgdG9oLXB0NlxuICAgICAgbGV0IGV4cGVjdGVkSGVybyA9IHtpZDogdGFyZ2V0SGVyby5pZCwgbmFtZTogbmV3SGVyb05hbWV9O1xuICAgICAgZXhwZWN0KEhlcm8uZnJvbUxpKGdldEhlcm9MaUVsdEJ5SWQodGFyZ2V0SGVyby5pZCkpKS50b0VxdWFsKGV4cGVjdGVkSGVybyk7XG4gICAgfSk7XG5cbiAgICBpdChgZGVsZXRlcyAke25ld0hlcm9OYW1lfSBmcm9tIEhlcm9lcyBsaXN0YCwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgaGVyb2VzQmVmb3JlID0gYXdhaXQgdG9IZXJvQXJyYXkoZ2V0UGFnZUVsdHMoKS5hbGxIZXJvZXMpO1xuICAgICAgY29uc3QgbGkgPSBnZXRIZXJvTGlFbHRCeUlkKHRhcmdldEhlcm8uaWQpO1xuICAgICAgbGkuZWxlbWVudChieS5idXR0b25UZXh0KCd4JykpLmNsaWNrKCk7XG5cbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRQYWdlRWx0cygpO1xuICAgICAgZXhwZWN0KHBhZ2UubXlIZXJvZXMuaXNQcmVzZW50KCkpLnRvQmVUcnV0aHkoKTtcbiAgICAgIGV4cGVjdChwYWdlLmFsbEhlcm9lcy5jb3VudCgpKS50b0VxdWFsKDEwLCAnbnVtYmVyIG9mIGhlcm9lcycpO1xuICAgICAgY29uc3QgaGVyb2VzQWZ0ZXIgPSBhd2FpdCB0b0hlcm9BcnJheShwYWdlLmFsbEhlcm9lcyk7XG4gICAgICBjb25zdCBleHBlY3RlZEhlcm9lcyA9ICBoZXJvZXNCZWZvcmUuZmlsdGVyKGggPT4gaC5uYW1lICE9PSBuZXdIZXJvTmFtZSk7XG4gICAgICBleHBlY3QoaGVyb2VzQWZ0ZXIpLnRvRXF1YWwoZXhwZWN0ZWRIZXJvZXMpO1xuICAgICAgZXhwZWN0KHBhZ2Uuc2VsZWN0ZWRIZXJvU3Vidmlldy5pc1ByZXNlbnQoKSkudG9CZUZhbHN5KCk7XG4gICAgfSk7XG5cbiAgICBpdChgYWRkcyBiYWNrICR7dGFyZ2V0SGVyby5uYW1lfWAsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0hlcm9OYW1lID0gJ0FsaWNlJztcbiAgICAgIGNvbnN0IGhlcm9lc0JlZm9yZSA9IGF3YWl0IHRvSGVyb0FycmF5KGdldFBhZ2VFbHRzKCkuYWxsSGVyb2VzKTtcbiAgICAgIGNvbnN0IG51bUhlcm9lcyA9IGhlcm9lc0JlZm9yZS5sZW5ndGg7XG5cbiAgICAgIGVsZW1lbnQoYnkuY3NzKCdpbnB1dCcpKS5zZW5kS2V5cyhuZXdIZXJvTmFtZSk7XG4gICAgICBlbGVtZW50KGJ5LmJ1dHRvblRleHQoJ0FkZCcpKS5jbGljaygpO1xuXG4gICAgICBsZXQgcGFnZSA9IGdldFBhZ2VFbHRzKCk7XG4gICAgICBsZXQgaGVyb2VzQWZ0ZXIgPSBhd2FpdCB0b0hlcm9BcnJheShwYWdlLmFsbEhlcm9lcyk7XG4gICAgICBleHBlY3QoaGVyb2VzQWZ0ZXIubGVuZ3RoKS50b0VxdWFsKG51bUhlcm9lcyArIDEsICdudW1iZXIgb2YgaGVyb2VzJyk7XG5cbiAgICAgIGV4cGVjdChoZXJvZXNBZnRlci5zbGljZSgwLCBudW1IZXJvZXMpKS50b0VxdWFsKGhlcm9lc0JlZm9yZSwgJ09sZCBoZXJvZXMgYXJlIHN0aWxsIHRoZXJlJyk7XG5cbiAgICAgIGNvbnN0IG1heElkID0gaGVyb2VzQmVmb3JlW2hlcm9lc0JlZm9yZS5sZW5ndGggLSAxXS5pZDtcbiAgICAgIGV4cGVjdChoZXJvZXNBZnRlcltudW1IZXJvZXNdKS50b0VxdWFsKHtpZDogbWF4SWQgKyAxLCBuYW1lOiBuZXdIZXJvTmFtZX0pO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnUHJvZ3Jlc3NpdmUgaGVybyBzZWFyY2gnLCAoKSA9PiB7XG5cbiAgICBiZWZvcmVBbGwoKCkgPT4gYnJvd3Nlci5nZXQoJycpKTtcblxuICAgIGl0KGBzZWFyY2hlcyBmb3IgJ0NlJ2AsIGFzeW5jICgpID0+IHtcbiAgICAgIGdldFBhZ2VFbHRzKCkuc2VhcmNoQm94LnNlbmRLZXlzKCdDZScpO1xuICAgICAgYnJvd3Nlci5zbGVlcCgxMDAwKTtcbiAgICAgIGV4cGVjdChnZXRQYWdlRWx0cygpLnNlYXJjaFJlc3VsdHMuY291bnQoKSkudG9CZSgyKTtcbiAgICB9KTtcblxuICAgIGl0KGBjb250aW51ZXMgc2VhcmNoIHdpdGggJ2wnYCwgYXN5bmMgKCkgPT4ge1xuICAgICAgZ2V0UGFnZUVsdHMoKS5zZWFyY2hCb3guc2VuZEtleXMoJ2wnKTtcbiAgICAgIGJyb3dzZXIuc2xlZXAoMTAwMCk7XG4gICAgICBleHBlY3QoZ2V0UGFnZUVsdHMoKS5zZWFyY2hSZXN1bHRzLmNvdW50KCkpLnRvQmUoMSk7XG4gICAgfSk7XG5cbiAgICBpdChgY29udGludWVzIHNlYXJjaCB3aXRoICdlJyBhbmQgZ2V0cyAke3RhcmdldEhlcm8ubmFtZX1gLCBhc3luYyAoKSA9PiB7XG4gICAgICBnZXRQYWdlRWx0cygpLnNlYXJjaEJveC5zZW5kS2V5cygnZScpO1xuICAgICAgYnJvd3Nlci5zbGVlcCgxMDAwKTtcbiAgICAgIGxldCBwYWdlID0gZ2V0UGFnZUVsdHMoKTtcbiAgICAgIGV4cGVjdChwYWdlLnNlYXJjaFJlc3VsdHMuY291bnQoKSkudG9CZSgxKTtcbiAgICAgIGxldCBoZXJvID0gcGFnZS5zZWFyY2hSZXN1bHRzLmdldCgwKTtcbiAgICAgIGV4cGVjdChoZXJvLmdldFRleHQoKSkudG9FcXVhbCh0YXJnZXRIZXJvLm5hbWUpO1xuICAgIH0pO1xuXG4gICAgaXQoYG5hdmlnYXRlcyB0byAke3RhcmdldEhlcm8ubmFtZX0gZGV0YWlscyB2aWV3YCwgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IGhlcm8gPSBnZXRQYWdlRWx0cygpLnNlYXJjaFJlc3VsdHMuZ2V0KDApO1xuICAgICAgZXhwZWN0KGhlcm8uZ2V0VGV4dCgpKS50b0VxdWFsKHRhcmdldEhlcm8ubmFtZSk7XG4gICAgICBoZXJvLmNsaWNrKCk7XG5cbiAgICAgIGxldCBwYWdlID0gZ2V0UGFnZUVsdHMoKTtcbiAgICAgIGV4cGVjdChwYWdlLmhlcm9EZXRhaWwuaXNQcmVzZW50KCkpLnRvQmVUcnV0aHkoJ3Nob3dzIGhlcm8gZGV0YWlsJyk7XG4gICAgICBleHBlY3QoSGVyby5mcm9tRGV0YWlsKHBhZ2UuaGVyb0RldGFpbCkpLnRvRXF1YWwodGFyZ2V0SGVybyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGRhc2hib2FyZFNlbGVjdFRhcmdldEhlcm8oKSB7XG4gICAgbGV0IHRhcmdldEhlcm9FbHQgPSBnZXRQYWdlRWx0cygpLnRvcEhlcm9lcy5nZXQodGFyZ2V0SGVyb0Rhc2hib2FyZEluZGV4KTtcbiAgICBleHBlY3QodGFyZ2V0SGVyb0VsdC5nZXRUZXh0KCkpLnRvRXF1YWwodGFyZ2V0SGVyby5uYW1lKTtcbiAgICB0YXJnZXRIZXJvRWx0LmNsaWNrKCk7XG4gICAgYnJvd3Nlci53YWl0Rm9yQW5ndWxhcigpOyAvLyBzZWVtcyBuZWNlc3NhcnkgdG8gZ2V0cyB0ZXN0cyB0byBwYXN0IGZvciB0b2gtcHQ2XG5cbiAgICBsZXQgcGFnZSA9IGdldFBhZ2VFbHRzKCk7XG4gICAgZXhwZWN0KHBhZ2UuaGVyb0RldGFpbC5pc1ByZXNlbnQoKSkudG9CZVRydXRoeSgnc2hvd3MgaGVybyBkZXRhaWwnKTtcbiAgICBsZXQgaGVybyA9IEhlcm8uZnJvbURldGFpbChwYWdlLmhlcm9EZXRhaWwpO1xuICAgIGV4cGVjdChoZXJvKS50b0VxdWFsKHRhcmdldEhlcm8pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSGVyb05hbWVJbkRldGFpbFZpZXcoKSB7XG4gICAgLy8gQXNzdW1lcyB0aGF0IHRoZSBjdXJyZW50IHZpZXcgaXMgdGhlIGhlcm8gZGV0YWlscyB2aWV3LlxuICAgIGFkZFRvSGVyb05hbWUobmFtZVN1ZmZpeCk7XG5cbiAgICBsZXQgaGVybyA9IGF3YWl0IEhlcm8uZnJvbURldGFpbChnZXRQYWdlRWx0cygpLmhlcm9EZXRhaWwpO1xuICAgIGV4cGVjdChoZXJvKS50b0VxdWFsKHtpZDogdGFyZ2V0SGVyby5pZCwgbmFtZTogbmV3SGVyb05hbWV9KTtcbiAgfVxuXG59KTtcblxuZnVuY3Rpb24gYWRkVG9IZXJvTmFtZSh0ZXh0OiBzdHJpbmcpOiBwcm9taXNlLlByb21pc2U8dm9pZD4ge1xuICBsZXQgaW5wdXQgPSBlbGVtZW50KGJ5LmNzcygnaW5wdXQnKSk7XG4gIHJldHVybiBpbnB1dC5zZW5kS2V5cyh0ZXh0KTtcbn1cblxuZnVuY3Rpb24gZXhwZWN0SGVhZGluZyhoTGV2ZWw6IG51bWJlciwgZXhwZWN0ZWRUZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgaFRhZyA9IGBoJHtoTGV2ZWx9YDtcbiAgICBsZXQgaFRleHQgPSBlbGVtZW50KGJ5LmNzcyhoVGFnKSkuZ2V0VGV4dCgpO1xuICAgIGV4cGVjdChoVGV4dCkudG9FcXVhbChleHBlY3RlZFRleHQsIGhUYWcpO1xufTtcblxuZnVuY3Rpb24gZ2V0SGVyb0xpRWx0QnlJZChpZDogbnVtYmVyKTogRWxlbWVudEZpbmRlciB7XG4gIGxldCBzcGFuRm9ySWQgPSBlbGVtZW50KGJ5LmNzc0NvbnRhaW5pbmdUZXh0KCdsaSBzcGFuLmJhZGdlJywgaWQudG9TdHJpbmcoKSkpO1xuICByZXR1cm4gc3BhbkZvcklkLmVsZW1lbnQoYnkueHBhdGgoJy4uJykpO1xufVxuXG5hc3luYyBmdW5jdGlvbiB0b0hlcm9BcnJheShhbGxIZXJvZXM6IEVsZW1lbnRBcnJheUZpbmRlcik6IFByb21pc2U8SGVyb1tdPiB7XG4gIGxldCBwcm9taXNlZEhlcm9lcyA9IGF3YWl0IGFsbEhlcm9lcy5tYXAoSGVyby5mcm9tTGkpO1xuICAvLyBUaGUgY2FzdCBpcyBuZWNlc3NhcnkgdG8gZ2V0IGFyb3VuZCBpc3N1aW5nIHdpdGggdGhlIHNpZ25hdHVyZSBvZiBQcm9taXNlLmFsbCgpXG4gIHJldHVybiA8UHJvbWlzZTxhbnk+PiBQcm9taXNlLmFsbChwcm9taXNlZEhlcm9lcyk7XG59XG4iXX0=