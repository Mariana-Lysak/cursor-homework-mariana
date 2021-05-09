/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homeworks/main1.js":
/*!********************************!*\
  !*** ./src/homeworks/main1.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maxPrice\": () => (/* binding */ maxPrice)\n/* harmony export */ });\n//1 товар\nvar applePrice = 15.678;\nconsole.log(\"Apple price:\", applePrice); //2 товар\n\nvar pearPrice = 123.965;\nconsole.log(\"Pear price:\", pearPrice); //3 товар\n\nvar lemonPrice = 90.2345;\nconsole.log(\"Lemon price:\", lemonPrice); //Використовуючи вбудований об'єкт Math – виведіть максимальне число\n\nvar maxPrice = Math.max(applePrice, pearPrice, lemonPrice);\nconsole.log(\"Max price:\", maxPrice); //Використовуючи вбудований об'єкт Math – виведіть мінімальне число\n\nvar minPrice = Math.min(applePrice, pearPrice, lemonPrice);\nconsole.log(\"Min price:\", minPrice); //Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму\n\nvar sumOfPrices = applePrice + pearPrice + lemonPrice;\nconsole.log(\"The sum of prices:\", sumOfPrices); //Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.\n\nvar integerApplePrice = Math.floor(applePrice);\nvar integerPearPrice = Math.floor(pearPrice);\nvar integerLemonPrice = Math.floor(lemonPrice);\nvar sumIntegerPrices = integerApplePrice + integerPearPrice + integerLemonPrice;\nconsole.log(\"Sum of integer prices:\", sumIntegerPrices); //Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)\n\nvar roundedSum = Math.round(sumIntegerPrices / 100) * 100;\nconsole.log(\"The rounded sum of prices:\", roundedSum); //Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?\n\nvar isEven = sumIntegerPrices % 2;\nconsole.log(\"The sum of prices is: \".concat(isEven ? 'odd' : 'even', \" number\")); //Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.\n\nvar payment = 500;\nvar rest = payment - sumOfPrices;\nconsole.log(\"The rest:\", rest); //Виведіть середнє значення цін, округлене до другого знаку після коми\n\nvar averagePrice = +(sumOfPrices / 3).toFixed(2);\nconsole.log(\"The average price:\", averagePrice); //(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random)\n\nvar discount = Math.random() * sumOfPrices;\nconsole.log(\"Discount:\", discount); //Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми. \n\nvar totalSumForPayment = +(sumOfPrices - discount).toFixed(2);\nconsole.log(\"Price with discount:\", totalSumForPayment); //Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни? \n\nvar profit = +(sumOfPrices / 2 - discount).toFixed(2);\nconsole.log(\"Profit:\", profit); //Advanced\n\nconsole.log(\"Max price: \".concat(maxPrice, \",\\nMin price: \").concat(minPrice, \",\\nThe sum of prices: \").concat(sumOfPrices, \",\\nSum of integer prices: \").concat(sumIntegerPrices, \",\\nThe rounded sum of prices: \").concat(roundedSum, \",\\nThe sum of prices is \").concat(isEven, \",\\nThe sum of prices is \").concat(isEven, \",\\nThe rest \").concat(rest, \",\\nThe average price \").concat(averagePrice, \",\\nDiscount \").concat(discount, \",\\nPrice with discount \").concat(totalSumForPayment, \",\\nProfit \").concat(+profit));\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main1.js?");

/***/ }),

/***/ "./src/homeworks/main10.js":
/*!*********************************!*\
  !*** ./src/homeworks/main10.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateBlocksInterval\": () => (/* binding */ generateBlocksInterval)\n/* harmony export */ });\nfunction generateBlocks() {\n  document.body.insertAdjacentHTML('afterbegin', '<div style = \"width:250px;\">' + '<div class=\"square\"></div>'.repeat(25) + '</div>');\n  document.querySelectorAll('.square').forEach(function (element) {\n    element.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);\n    element.style.height = \"50px\";\n    element.style.width = \"50px\";\n    element.style.display = \"inline-block\";\n    element.style.float = \"left\";\n  });\n}\n\n; //Advanced\n\nfunction generateBlocksInterval() {\n  document.body.insertAdjacentHTML('afterbegin', '<div style = \"width:250px;\">' + '<div class=\"square\"></div>'.repeat(25) + '</div>');\n  setInterval(function () {\n    document.querySelectorAll('.square').forEach(function (element) {\n      element.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);\n      element.style.height = \"50px\";\n      element.style.width = \"50px\";\n      element.style.display = \"inline-block\";\n      element.style.float = \"left\";\n    });\n  }, 1000);\n}\n\n;\ngenerateBlocksInterval();\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main10.js?");

/***/ }),

/***/ "./src/homeworks/main11.js":
/*!*********************************!*\
  !*** ./src/homeworks/main11.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeLetters\": () => (/* binding */ removeLetters)\n/* harmony export */ });\nvar soungA = new Audio('mp3/soungA.mp3');\nvar soungB = new Audio('mp3/soungB.mp3');\nvar soungC = new Audio('mp3/soungC.mp3');\nvar soungD = new Audio('mp3/soungD.mp3');\nvar letterA = document.getElementById('letterA');\nvar letterB = document.getElementById('letterB');\nvar letterC = document.getElementById('letterC');\nvar letterD = document.getElementById('letterD');\nvar letters = document.querySelectorAll('div');\nvar soungs = [];\nsoungs.push(soungA, soungB, soungC, soungD);\n\nfunction removeLetters() {\n  for (var i = 0; i < letters.length; i++) {\n    letters[i].classList.remove('active');\n    soungs[i].pause();\n  }\n}\n\nletterA.addEventListener('click', function (event) {\n  removeLetters();\n  letterA.classList.add('active');\n  soungA.currentTime = 0;\n  soungA.play();\n});\nletterB.addEventListener('click', function (event) {\n  removeLetters();\n  letterB.classList.add('active');\n  soungB.currentTime = 0;\n  soungB.play();\n});\nletterC.addEventListener('click', function (event) {\n  removeLetters();\n  letterC.classList.add('active');\n  soungC.currentTime = 0;\n  soungC.play();\n});\nletterD.addEventListener('click', function (event) {\n  removeLetters();\n  letterD.classList.add('active');\n  soungD.currentTime = 0;\n  soungD.play();\n});\ndocument.addEventListener('keypress', playSoung);\n\nfunction playSoung() {\n  switch (event.code) {\n    case 'KeyA':\n      removeLetters();\n      letterA.classList.add('active');\n      soungA.currentTime = 0;\n      soungA.play();\n      break;\n\n    case 'KeyB':\n      removeLetters();\n      letterB.classList.add('active');\n      soungB.currentTime = 0;\n      soungB.play();\n      break;\n\n    case 'KeyC':\n      removeLetters();\n      letterC.classList.add('active');\n      soungC.currentTime = 0;\n      soungC.play();\n      break;\n\n    case 'KeyD':\n      removeLetters();\n      letterD.classList.add('active');\n      soungD.currentTime = 0;\n      soungD.play();\n      break;\n  }\n\n  ;\n}\n\n;\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main11.js?");

/***/ }),

/***/ "./src/homeworks/main12.js":
/*!*********************************!*\
  !*** ./src/homeworks/main12.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomChinese\": () => (/* binding */ getRandomChinese)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar promise = function promise() {\n  return new Promise(function (resolve) {\n    return setTimeout(function () {\n      return resolve();\n    }, 50);\n  });\n};\n\nfunction getRandomChinese(_x) {\n  return _getRandomChinese.apply(this, arguments);\n}\n\nfunction _getRandomChinese() {\n  _getRandomChinese = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(length) {\n    var result, i, sign;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            result = '';\n            i = 0;\n\n          case 2:\n            if (!(i < length)) {\n              _context.next = 10;\n              break;\n            }\n\n            sign = Date.now().toString().slice(-5);\n            result += String.fromCharCode(sign);\n            _context.next = 7;\n            return promise();\n\n          case 7:\n            i++;\n            _context.next = 2;\n            break;\n\n          case 10:\n            console.log(result);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getRandomChinese.apply(this, arguments);\n}\n\ngetRandomChinese(4).then(function () {\n  return getRandomChinese(16);\n});\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main12.js?");

/***/ }),

/***/ "./src/homeworks/main13.js":
/*!*********************************!*\
  !*** ./src/homeworks/main13.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInformation\": () => (/* binding */ getInformation)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar getInfo = document.querySelector('#info');\nvar planets = document.querySelector('#planets');\nvar btn = [getInfo, planets];\n\nfunction removeActive() {\n  for (var i = 0; i < btn.length; i++) {\n    btn[i].classList.remove('active');\n  }\n\n  var container = document.querySelector('.container');\n\n  while (container.firstChild) {\n    container.removeChild(container.firstChild);\n  }\n\n  ;\n  var nextBtn = document.querySelector('#next');\n  if (nextBtn) nextBtn.remove();\n} //People\n//Event listener\n\n\ngetInfo.addEventListener('click', getInformation);\n\nfunction getInformation(event) {\n  event.preventDefault();\n  removeActive();\n  getInfo.classList.add('active');\n  getResponse1();\n}\n\n; //\n\nfunction getResponse1() {\n  return _getResponse.apply(this, arguments);\n} //Planets\n//Event listener\n\n\nfunction _getResponse() {\n  _getResponse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            try {\n              fetch('https://swapi.dev/api/films/2/').then(function (response) {\n                return response.json();\n              }).then(function (data) {\n                console.log(data);\n                var result = data.characters;\n                console.log(result);\n\n                var _iterator = _createForOfIteratorHelper(result),\n                    _step;\n\n                try {\n                  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                    var item = _step.value;\n                    var requestURL = item.replace('http', 'https');\n                    console.log(requestURL);\n                    fetch(requestURL).then(function (response) {\n                      return response.json();\n                    }).then(function (data) {\n                      console.log(data);\n                      var name = data.name;\n                      var birthYear = data.birth_year;\n                      var gender = data.gender;\n                      console.log(name);\n                      console.log(birthYear);\n                      console.log(gender);\n                      var container = document.querySelector('.container');\n                      var person = document.createElement('div');\n                      person.classList.add('person');\n                      person.innerHTML = \"\\n                        <h4>\".concat(data.name, \"</h4>\\n                        <p>\").concat(data.birth_year, \"</p>\\n                        <p>\").concat(data.gender, \"</p>\\n                    \");\n                      container.append(person);\n                    });\n                  }\n                } catch (err) {\n                  _iterator.e(err);\n                } finally {\n                  _iterator.f();\n                }\n              });\n            } catch (error) {\n              console.error('error');\n            }\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getResponse.apply(this, arguments);\n}\n\nplanets.addEventListener('click', getPlanets);\n\nfunction getPlanets(event) {\n  event.preventDefault();\n  removeActive();\n  planets.classList.add('active');\n  getResponse2();\n}\n\n; //\n\nfunction getResponse2() {\n  return _getResponse2.apply(this, arguments);\n}\n\nfunction _getResponse2() {\n  _getResponse2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var page, container, nextBtn;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            try {\n              page = 1;\n              fetch('https://swapi.dev/api/planets/?page=1').then(function (response) {\n                return response.json();\n              }).then(function (data) {\n                console.log(data);\n                var result = data.results;\n                console.log(result);\n\n                var _iterator2 = _createForOfIteratorHelper(result),\n                    _step2;\n\n                try {\n                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n                    var item = _step2.value;\n                    var name = item.name;\n\n                    var _container = document.querySelector('.container');\n\n                    var planet = document.createElement('div');\n                    planet.classList.add('planet');\n                    planet.innerHTML = \"\\n                    <h4>\".concat(item.name, \"</h4>\\n                \");\n\n                    _container.append(planet);\n                  }\n                } catch (err) {\n                  _iterator2.e(err);\n                } finally {\n                  _iterator2.f();\n                }\n              });\n              container = document.querySelector('.container');\n              container.insertAdjacentHTML('afterend', '<button id=\"next\">Next</button>');\n              nextBtn = document.querySelector('#next'); //Event button next:\n\n              nextBtn.addEventListener('click', function (event) {\n                ++page;\n                fetch(\"https://swapi.dev/api/planets/?page=\".concat(page)).then(function (response) {\n                  return response.json();\n                }).then(function (data) {\n                  console.log(data);\n                  var result = data.results;\n                  console.log(result);\n\n                  var _iterator3 = _createForOfIteratorHelper(result),\n                      _step3;\n\n                  try {\n                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n                      var item = _step3.value;\n                      var name = item.name;\n\n                      var _container2 = document.querySelector('.container');\n\n                      var planet = document.createElement('div');\n                      planet.classList.add('planet');\n                      planet.innerHTML = \"\\n                        <h4>\".concat(item.name, \"</h4>\\n                    \");\n\n                      _container2.append(planet);\n                    }\n                  } catch (err) {\n                    _iterator3.e(err);\n                  } finally {\n                    _iterator3.f();\n                  }\n                });\n\n                while (container.firstChild) {\n                  container.removeChild(container.firstChild);\n                }\n\n                ;\n                var pages = 5;\n\n                if (page === pages) {\n                  page = 0;\n                }\n\n                ;\n              });\n            } catch (error) {\n              console.error('error');\n            }\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getResponse2.apply(this, arguments);\n}\n\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main13.js?");

/***/ }),

/***/ "./src/homeworks/main15.js":
/*!*********************************!*\
  !*** ./src/homeworks/main15.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createIdGenerator\": () => (/* binding */ createIdGenerator)\n/* harmony export */ });\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(createIdGenerator);\n\n//1\nfunction createIdGenerator() {\n  var start,\n      end,\n      step,\n      iterationCount,\n      index,\n      _args = arguments;\n  return regeneratorRuntime.wrap(function createIdGenerator$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          start = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;\n          end = _args.length > 1 && _args[1] !== undefined ? _args[1] : Infinity;\n          step = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;\n          iterationCount = 0;\n          index = start;\n\n        case 5:\n          if (!(index <= end)) {\n            _context.next = 12;\n            break;\n          }\n\n          iterationCount++;\n          _context.next = 9;\n          return index;\n\n        case 9:\n          index += step;\n          _context.next = 5;\n          break;\n\n        case 12:\n          return _context.abrupt(\"return\", iterationCount);\n\n        case 13:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\nvar idGenerator = createIdGenerator();\nconsole.log(idGenerator.next().value);\nconsole.log(idGenerator.next().value);\nconsole.log(idGenerator.next().value);\n\n//# sourceURL=webpack://homework16/./src/homeworks/main15.js?");

/***/ }),

/***/ "./src/homeworks/main2.js":
/*!********************************!*\
  !*** ./src/homeworks/main2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sumOfNumbers\": () => (/* binding */ sumOfNumbers)\n/* harmony export */ });\nvar numberN;\nvar numberM;\n\ndo {\n  numberN = +prompt('Enter first number, please:');\n  numberN = parseInt(numberN);\n} while (isNaN(numberN));\n\ndo {\n  numberM = +prompt('Enter second number, please:');\n  numberM = parseInt(numberM);\n} while (isNaN(numberM));\n\nminNumberN = Math.min(numberN, numberM);\nmaxNumberM = Math.max(numberN, numberM);\nconsole.log(minNumberN, maxNumberM);\nvar skipEvenNumbers = confirm('Skip even numbers?');\nconsole.log('%c%s', 'color: grey; font: 0,5rem/1 Arial;', skipEvenNumbers ? 'true' : 'false');\nvar sumOfNumbers;\n/*for(sumOfNumbers=0; minNumberN<=maxNumberM;minNumberN++) {\n    if (skipEvenNumbers) {\n        if (minNumberN%2 == 0) {\n            continue;\n        } else {\n            sumOfNumbers+=minNumberN;\n        }\n    } else {\n        sumOfNumbers+=minNumberN\n    }\n};*/\n\nfor (sumOfNumbers = 0; minNumberN <= maxNumberM; minNumberN++) {\n  if (skipEvenNumbers && minNumberN % 2 == 0) {\n    continue;\n  } else {\n    sumOfNumbers += minNumberN;\n  }\n}\n\n;\nconsole.log('%c%s', 'color: red; font: 1.2rem/1 Tahoma;', sumOfNumbers);\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main2.js?");

/***/ }),

/***/ "./src/homeworks/main3.js":
/*!********************************!*\
  !*** ./src/homeworks/main3.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomPassword\": () => (/* binding */ getRandomPassword)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n//1\nvar getMaxDigit = function getMaxDigit(number) {\n  return Math.max.apply(Math, _toConsumableArray(number.toString()));\n}; //2\n\n\nfunction pow(x, n) {\n  var result = x;\n\n  for (var i = 1; i < n; i++) {\n    result *= x;\n  }\n\n  return result;\n} //3\n\n\nvar formatName = function formatName(name) {\n  return name[0].toUpperCase() + name.slice(1).toLowerCase();\n}; //4\n\n\nfunction getSalary(sum) {\n  var tax = 19.5 / 100;\n  var totalSalary = sum - sum * tax;\n  return totalSalary;\n} //5\n\n\nvar getRandomNumber = function getRandomNumber(min, max) {\n  return Math.floor(Math.random() * (max - min + 1) + min);\n}; //6\n\n\nfunction countLetter(char, word) {\n  var count = 0;\n\n  for (var i = 0; i < word.length; i++) {\n    if (word.charAt(i).toLowerCase() === char.toLowerCase()) count++;\n  }\n\n  return count;\n} //7 \n\n\nfunction calcCurrency(currency) {\n  var currencyRate = 25;\n  var upperCurrency = currency.toUpperCase();\n\n  if (upperCurrency.endsWith('$')) {\n    currency = parseInt(currency);\n    return +currency * currencyRate;\n  }\n\n  if (upperCurrency.endsWith('UAH')) {\n    currency = parseInt(currency);\n    return currency / currencyRate;\n  }\n\n  console.error('Please, input only $ or UAH');\n} //8\n\n\nfunction getRandomPassword() {\n  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;\n  var password = '';\n\n  for (var i = 0; i < len; i++) {\n    password += Math.floor(Math.random() * 10);\n  }\n\n  return password;\n}\n\nconsole.log('%c%s', 'color: white; font: 1rem/1 Tahoma;', \" \\u0424\\u0443\\u043D\\u043A\\u0446\\u0456\\u044F \\u21161: \".concat(getMaxDigit(582)));\nconsole.log('%c%s', 'color: white; font: 1rem/1 Tahoma;', \" \\u0424\\u0443\\u043D\\u043A\\u0446\\u0456\\u044F \\u21162: \".concat(pow(4, 2)));\nconsole.log('%c%s', 'color: white; font: 1rem/1 Tahoma;', \" \\u0424\\u0443\\u043D\\u043A\\u0446\\u0456\\u044F \\u21163: \".concat(formatName('maRcO')));\nconsole.log('%c%s', 'color: white; font: 1rem/1 Tahoma;', \" \\u0424\\u0443\\u043D\\u043A\\u0446\\u0456\\u044F \\u21164: \".concat(getSalary(1000)));\nconsole.log('%c%s', 'color: white; font: 1rem/1 Tahoma;', \" \\u0424\\u0443\\u043D\\u043A\\u0446\\u0456\\u044F \\u21165: \".concat(getRandomNumber(1, 8)));\nconsole.log('%c%s', 'color: white; font: 1rem/1 Tahoma;', \" \\u0424\\u0443\\u043D\\u043A\\u0446\\u0456\\u044F \\u21166: \".concat(countLetter('a', 'blablabla')));\nconsole.log('%c%s', 'color: white; font: 1rem/1 Tahoma;', \" \\u0424\\u0443\\u043D\\u043A\\u0446\\u0456\\u044F \\u21167: \".concat(calcCurrency('100UAh')));\nconsole.log('%c%s', 'color: white; font: 1rem/1 Tahoma;', \" \\u0424\\u0443\\u043D\\u043A\\u0446\\u0456\\u044F \\u21168: \".concat(getRandomPassword(4)));\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main3.js?");

/***/ }),

/***/ "./src/homeworks/main4.js":
/*!********************************!*\
  !*** ./src/homeworks/main4.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomMarks\": () => (/* binding */ getRandomMarks)\n/* harmony export */ });\nvar students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nvar themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\nvar marks = [4, 5, 5, 3, 4, 5]; //1\n\nvar boys = [];\nvar girls = [];\n\nfunction getPairs(studentsArray) {\n  var studentsPairs = [];\n\n  for (var _i = 0; _i < studentsArray.length; _i++) {\n    if (students[_i].slice(-1) === 'а') {\n      girls.push(studentsArray[_i]);\n    } else {\n      boys.push(studentsArray[_i]);\n    }\n  }\n\n  for (i = 0; i < boys.length; i++) {\n    studentsPairs.push([boys[i], girls[i]]);\n  }\n\n  return studentsPairs;\n}\n\nvar pairs = getPairs(students);\nconsole.log('Pairs:', pairs); //2\n\nfunction getThemes(themesArray) {\n  var studentsAndThemes = [];\n\n  for (i = 0; i < pairs.length; i++) {\n    studentsAndThemes.push([boys[i] + ' i ' + girls[i]].concat(themesArray[i]));\n  }\n\n  return studentsAndThemes;\n}\n\nvar themesForStudents = getThemes(themes);\nconsole.log('Themes for students:', themesForStudents); //3\n\nfunction getMarks(marksArray) {\n  var studentsAndMarks = [];\n\n  for (i = 0; i < marksArray.length; i++) {\n    studentsAndMarks.push([students[i], marks[i]]);\n  }\n\n  return studentsAndMarks;\n}\n\nvar marksForStudents = getMarks(marks);\nconsole.log('Marks for students:', marksForStudents); //4\n\nfunction getRandomMarks() {\n  var newMarks = [];\n\n  for (i = 0; i < themesForStudents.length; i++) {\n    randomMark = Math.ceil(Math.random() * 5);\n    newMarks.push([themesForStudents[i].concat(randomMark)]);\n  }\n\n  return newMarks;\n}\n\nvar randomMarksForStudents = getRandomMarks();\nconsole.log('Random marks for students:', randomMarksForStudents);\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main4.js?");

/***/ }),

/***/ "./src/homeworks/main5.js":
/*!********************************!*\
  !*** ./src/homeworks/main5.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAverage\": () => (/* binding */ getAverage)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n//1 \nvar getRandomArray = function getRandomArray(length, min, max) {\n  return _toConsumableArray(new Array(length)).map(function () {\n    return Math.round(Math.random() * (max - min + 1)) + min;\n  });\n};\n\nconsole.log('Random Array:', getRandomArray(15, 1, 100)); //3 \n\nvar getAverage = function getAverage() {\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n\n  return numbers.filter(function (number) {\n    return Number.isInteger(number);\n  }).reduce(function (accumulatedValue, element) {\n    return accumulatedValue + element;\n  }) / numbers.length;\n};\n\nconsole.log('Average number:', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); //5 \n\nvar filterEvenNumbers = function filterEvenNumbers() {\n  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    numbers[_key2] = arguments[_key2];\n  }\n\n  return numbers.filter(function (number) {\n    return number % 2 != 0;\n  });\n};\n\nconsole.log('Odd numbers:', filterEvenNumbers(1, 2, 3, 4, 5, 6)); //6 \n\nvar countPositiveNumbers = function countPositiveNumbers() {\n  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n    numbers[_key3] = arguments[_key3];\n  }\n\n  return numbers.filter(function (number) {\n    return number > 0;\n  });\n};\n\nconsole.log('Positive numbers:', countPositiveNumbers(1, -2, 3, -4, -5, 6)); //7 \n\nvar getDividedByFive = function getDividedByFive() {\n  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n    numbers[_key4] = arguments[_key4];\n  }\n\n  return numbers.filter(function (number) {\n    return number % 5 === 0;\n  });\n};\n\nconsole.log('Numbers divided by five:', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); //8\n\nvar replaceBadWords = function replaceBadWords(string) {\n  return string.split(' ').map(function (word) {\n    return word.replace('fuck', '****').replace('shit', '****');\n  }).join(' ');\n};\n\nconsole.log('Replace bad words:', replaceBadWords(\"Are you fucking kidding?\"));\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main5.js?");

/***/ }),

/***/ "./src/homeworks/main6.js":
/*!********************************!*\
  !*** ./src/homeworks/main6.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSubjects\": () => (/* binding */ getSubjects)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar students = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}, {\n  name: \"Victor\",\n  course: 4,\n  subjects: {\n    physics: [5, 5, 5, 3],\n    economics: [2, 3, 3, 3, 3, 5],\n    geometry: [5, 5, 2, 3, 5]\n  }\n}, {\n  name: \"Anton\",\n  course: 2,\n  subjects: {\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n    english: [5, 3],\n    cosmology: [5, 5, 5, 5]\n  }\n}]; //1\n\nvar getSubjects = function getSubjects(student) {\n  return Object.keys(student.subjects).map(function (subject) {\n    return subject[0].toUpperCase() + subject.slice(1).replace('_', ' ');\n  });\n};\n\nconsole.log('Список предметів студента:', getSubjects(students[0])); //2\n\nvar getAverageMark = function getAverageMark(student) {\n  var studentMarks = Object.values(student.subjects).flat();\n  return (studentMarks.reduce(function (a, b) {\n    return a + b;\n  }) / studentMarks.length).toFixed(2);\n};\n\nconsole.log('Середня оцінка по усім предметам:', getAverageMark(students[0])); //3\n\nvar getStudentInfo = function getStudentInfo(student) {\n  return {\n    course: student.course,\n    name: student.name,\n    averageMark: getAverageMark(student)\n  };\n};\n\nconsole.log('Інформація загального виду по переданому студенту:', getStudentInfo(students[0])); //4\n\nvar getStudentsNames = function getStudentsNames(students) {\n  return students.map(function (student) {\n    return student.name;\n  }).sort();\n};\n\nconsole.log('Iмена студентів у алфавітному порядку:', getStudentsNames(students)); //5\n\nvar getBestStudent = function getBestStudent(students) {\n  studentsMarks = students.map(function (student) {\n    return +getAverageMark(student);\n  });\n  return students[studentsMarks.indexOf(Math.max.apply(Math, _toConsumableArray(studentsMarks)))].name;\n};\n\nconsole.log('Кращий студент зі списку по показнику середньої оцінки:', getBestStudent(students)); //6\n\nvar calculateWordLetters = function calculateWordLetters(word) {\n  return word.split('').reduce(function (letter, i) {\n    return letter[i] = (letter[i] || 0) + 1, letter;\n  }, {});\n};\n\nconsole.log('Обєкт, в якому ключі це букви у слові, а значення – кількість їх повторень:', calculateWordLetters(\"тест\"));\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main6.js?");

/***/ }),

/***/ "./src/homeworks/main7.js":
/*!********************************!*\
  !*** ./src/homeworks/main7.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMySalary\": () => (/* binding */ getMySalary)\n/* harmony export */ });\nvar ukraine = {\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n};\nvar latvia = {\n  tax: 0.25,\n  middleSalary: 1586,\n  vacancies: 3921\n};\nvar litva = {\n  tax: 0.15,\n  middleSalary: 1509,\n  vacancies: 1114\n}; //1\n\nfunction getMyTaxes(salary) {\n  return this.tax * salary;\n}\n\nconsole.log('The payroll tax in Ukraine will be:', getMyTaxes.call(ukraine, 10000)); //2\n\nfunction getMiddleTaxes(country) {\n  return this.tax * this.middleSalary;\n}\n\nconsole.log('The payroll tax on the middle salary in Ukraine is:', getMiddleTaxes.call(ukraine));\nconsole.log('The payroll tax on the middle salary in Latvia is:', getMiddleTaxes.call(latvia));\nconsole.log('The payroll tax on the middle salary in Litva is:', getMiddleTaxes.call(litva)); //3\n\nfunction getTotalTaxes() {\n  return this.tax * this.middleSalary * this.vacancies;\n}\n\nconsole.log('The total payroll tax in Ukraine is:', getTotalTaxes.call(ukraine));\nconsole.log('The total payroll tax in Latvia is:', getTotalTaxes.call(latvia));\nconsole.log('The total payroll tax in Litva is:', getTotalTaxes.call(litva)); //4\n\nfunction getMySalary() {\n  var minSalary = 1500;\n  var maxSalary = 2000;\n  var salary = Math.round(Math.random() * (maxSalary - minSalary + 1)) + minSalary;\n  var taxes = +(this.tax * salary).toFixed(2);\n  var profit = salary - taxes;\n  setInterval(function () {\n    console.log({\n      salary: salary,\n      taxes: taxes,\n      profit: profit\n    });\n  }, 10000);\n}\n\ngetMySalary.call(ukraine);\ngetMySalary.call(latvia);\ngetMySalary.call(litva);\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main7.js?");

/***/ }),

/***/ "./src/homeworks/main8.js":
/*!********************************!*\
  !*** ./src/homeworks/main8.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Student\": () => (/* binding */ Student)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Student = /*#__PURE__*/function () {\n  function Student(university, course, fullName) {\n    var marks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [5, 4, 4, 5];\n    var isActiveStudent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;\n\n    _classCallCheck(this, Student);\n\n    this.university = university;\n    this.course = course;\n    this.fullName = fullName;\n    this.marks = _toConsumableArray(marks);\n    this.isActiveStudent = isActiveStudent;\n  }\n\n  _createClass(Student, [{\n    key: \"getInfo\",\n    get: function get() {\n      if (!this.isActiveStudent) {\n        return null;\n      }\n\n      return \"\\\"\\u0421\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442 \".concat(this.course, \"\\u0433\\u043E \\u043A\\u0443\\u0440\\u0441\\u0443 \").concat(this.university, \", \").concat(this.fullName, \"\\\"\");\n    }\n  }, {\n    key: \"getMarks\",\n    get: function get() {\n      return this.isActiveStudent ? this.marks : null;\n    }\n  }, {\n    key: \"setMarks\",\n    set: function set(mark) {\n      if (!this.isActiveStudent) {\n        return null;\n      }\n\n      return this.marks = [].concat(_toConsumableArray(this.marks), [mark]);\n    }\n  }, {\n    key: \"getAverageMark\",\n    value: function getAverageMark() {\n      if (!this.isActiveStudent) {\n        return null;\n      }\n\n      var allMarks = this.marks.reduce(function (sum, mark) {\n        return sum + mark;\n      }, 0);\n      return +(allMarks / this.marks.length).toFixed(1);\n    }\n  }, {\n    key: \"dismiss\",\n    value: function dismiss() {\n      return this.isActiveStudent = false;\n    }\n  }, {\n    key: \"recover\",\n    value: function recover() {\n      return this.isActiveStudent = true;\n    }\n  }]);\n\n  return Student;\n}(); //1\n\n\nvar ostap = new Student(\"\\u0412\\u0438\\u0449\\u043E\\u0457 \\u0428\\u043A\\u043E\\u043B\\u0438 \\u041F\\u0441\\u0438\\u0445\\u043E\\u0442\\u0435\\u0440\\u0430\\u043F\\u0456\\u0457 \\u043C. \\u041E\\u0434\\u0435\\u0441\\u0430\", 1, 'Остап Родоманський Бендер'); //2 Інформація про студента:\n\nconsole.log(ostap.getInfo); //3 Масив оцінок студента:\n\nconsole.log(ostap.getMarks); //4 Поставити оцінку студенту та повернути масив оцінок:\n\nconsole.log(ostap.setMarks = 5);\nconsole.log(ostap.getMarks); //5 Середній бал:\n\nconsole.log(ostap.getAverageMark()); //6 Виключення студента:\n\nconsole.log(ostap.dismiss());\nconsole.log(ostap.getMarks); //7 Зарахувати студента:\n\nconsole.log(ostap.recover());\nconsole.log(ostap.getMarks); //Advanced\n\nvar BudgetStudent = /*#__PURE__*/function (_Student) {\n  _inherits(BudgetStudent, _Student);\n\n  var _super = _createSuper(BudgetStudent);\n\n  function BudgetStudent(university, course, fullName) {\n    var _this;\n\n    var marks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [5, 4, 4, 5];\n    var isActiveStudent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;\n\n    _classCallCheck(this, BudgetStudent);\n\n    _this = _super.call(this, university, course, fullName, marks = [5, 4, 4, 5], isActiveStudent = true);\n    setInterval(function () {\n      return _this.getScholarship();\n    }, 30000);\n    return _this;\n  }\n\n  _createClass(BudgetStudent, [{\n    key: \"getScholarship\",\n    value: function getScholarship() {\n      var lowestAverageMark = 4;\n\n      if (this.getAverageMark() >= lowestAverageMark && this.isActiveStudent) {\n        console.log(\"\".concat(this.fullName, \", \\u0412\\u0438 \\u043E\\u0442\\u0440\\u0438\\u043C\\u0430\\u043B\\u0438 1400 \\u0433\\u0440\\u043D. \\u0441\\u0442\\u0438\\u043F\\u0435\\u043D\\u0434\\u0456\\u0457\"));\n      }\n\n      ;\n    }\n  }]);\n\n  return BudgetStudent;\n}(Student);\n\nvar ostap2 = new BudgetStudent(\"\\u0412\\u0438\\u0449\\u043E\\u0457 \\u0428\\u043A\\u043E\\u043B\\u0438 \\u041F\\u0441\\u0438\\u0445\\u043E\\u0442\\u0435\\u0440\\u0430\\u043F\\u0456\\u0457 \\u043C. \\u041E\\u0434\\u0435\\u0441\\u0430\", 1, 'Остап Родоманський Бендер');\n\n\n//# sourceURL=webpack://homework16/./src/homeworks/main8.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeworks_style13_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeworks/style13.css */ \"./src/homeworks/style13.css\");\n/* harmony import */ var _homeworks_main1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeworks/main1 */ \"./src/homeworks/main1.js\");\n/* harmony import */ var _homeworks_main2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeworks/main2 */ \"./src/homeworks/main2.js\");\n/* harmony import */ var _homeworks_main3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeworks/main3 */ \"./src/homeworks/main3.js\");\n/* harmony import */ var _homeworks_main4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeworks/main4 */ \"./src/homeworks/main4.js\");\n/* harmony import */ var _homeworks_main5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeworks/main5 */ \"./src/homeworks/main5.js\");\n/* harmony import */ var _homeworks_main6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeworks/main6 */ \"./src/homeworks/main6.js\");\n/* harmony import */ var _homeworks_main7__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homeworks/main7 */ \"./src/homeworks/main7.js\");\n/* harmony import */ var _homeworks_main8__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homeworks/main8 */ \"./src/homeworks/main8.js\");\n/* harmony import */ var _homeworks_main10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homeworks/main10 */ \"./src/homeworks/main10.js\");\n/* harmony import */ var _homeworks_main11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homeworks/main11 */ \"./src/homeworks/main11.js\");\n/* harmony import */ var _homeworks_main12__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homeworks/main12 */ \"./src/homeworks/main12.js\");\n/* harmony import */ var _homeworks_main13__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homeworks/main13 */ \"./src/homeworks/main13.js\");\n/* harmony import */ var _homeworks_main15__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homeworks/main15 */ \"./src/homeworks/main15.js\");\nconsole.log('hello');\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://homework16/./src/index.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === 'undefined';\nvar forEach = Array.prototype.forEach;\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src = document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName('script');\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace('.js', '.css')];\n    }\n\n    if (!fileMap) {\n      return [src.replace('.js', '.css')];\n    }\n\n    return fileMap.split(',').map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), 'g');\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split('?')[0];\n  }\n\n  if (!isUrlRequest(url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf('.css') > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener('load', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener('error', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href, {\n    stripWWW: false\n  }); // eslint-disable-next-line array-callback-return\n\n  src.some(function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll('link');\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll('link');\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^https?:/i.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log('no window.document found, will not HMR CSS');\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log('[HMR] Detected local css modules. Reload all css');\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log('[HMR] css reload %s', src.join(' '));\n    } else {\n      console.log('[HMR] Reload all css');\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://homework16/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\n/* eslint-disable */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case '..':\n        accumulator.pop();\n        break;\n\n      case '.':\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  }, []).join('/');\n}\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf('//') !== -1 ? urlString.split('//')[0] + '//' : '';\n  var components = urlString.replace(new RegExp(protocol, 'i'), '').split('/');\n  var host = components[0].toLowerCase().replace(/\\.$/, '');\n  components[0] = '';\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://homework16/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./src/homeworks/style13.css":
/*!***********************************!*\
  !*** ./src/homeworks/style13.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1620603519506\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://homework16/./src/homeworks/style13.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6b953768b658342cfb3e")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "homework16:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatehomework16"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;