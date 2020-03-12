if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'crossplatform'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'crossplatform'.");
}var crossplatform = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var average = Kotlin.kotlin.collections.average_5yd9ji$;
  var math = Kotlin.kotlin.math;
  var max = Kotlin.kotlin.collections.max_pbinho$;
  var toString = Kotlin.toString;
  var min = Kotlin.kotlin.collections.min_pbinho$;
  var sum = Kotlin.kotlin.collections.sum_5yd9ji$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var ensureNotNull = Kotlin.ensureNotNull;
  var unboxChar = Kotlin.unboxChar;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Exception = Kotlin.kotlin.Exception;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Array_0 = Array;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_xmiyix$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  function main$lambda(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_01();
    return Unit;
  }
  function main$lambda_0(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_02();
    return Unit;
  }
  function main$lambda_1(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_02_01();
    return Unit;
  }
  function main$lambda_2(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_1_03();
    return Unit;
  }
  function main$lambda_3(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_1_04();
    return Unit;
  }
  function main$lambda_4(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_3_002();
    return Unit;
  }
  function main$lambda_5(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_3_003();
    return Unit;
  }
  function main$lambda_6(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_3_004();
    return Unit;
  }
  function main$lambda_7(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_3_005();
    return Unit;
  }
  function main$lambda_8(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_4_002();
    return Unit;
  }
  function main$lambda_9(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_4_003();
    return Unit;
  }
  function main$lambda_10(it) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = lab_4_004();
    return Unit;
  }
  function main$lambda$lambda(closure$stackList) {
    return function (it) {
      closure$stackList.v.elements.add_11rb$('');
      showList(closure$stackList.v);
      return Unit;
    };
  }
  function main$lambda$lambda_0(closure$stackList, closure$canvas) {
    return function (it) {
      var tmp$;
      closure$stackList.v.elements.removeAt_za3lpa$(0);
      tmp$ = closure$stackList.v.elements.size;
      for (var i = 0; i < tmp$; i++) {
        drawElem(closure$canvas);
      }
      return Unit;
    };
  }
  function main$lambda_11(it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    (Kotlin.isType(tmp$ = document.getElementById('text'), HTMLElement) ? tmp$ : throwCCE()).innerText = '';
    (Kotlin.isType(tmp$_0 = document.getElementById('text'), HTMLElement) ? tmp$_0 : throwCCE()).innerHTML = (Kotlin.isType(tmp$_0 = document.getElementById('text'), HTMLElement) ? tmp$_0 : throwCCE()).innerHTML + trimIndent('\n            <button id="push"\n            style = "\n            color: black;\n            background-color: darkgray;\n            padding: 15px 32px;\n            text-align: center;\n            text-decoration: none;\n            display: inline-block;\n            font-size: 16px;\n            cursor: pointer;\n            margin: 10px;\n            border: 2px solid black;\n            "\n            ">Push<\/button>\n            \n            <button id="pop"\n            style = "\n            color: black;\n            background-color: darkgray;\n            padding: 15px 32px;\n            text-align: center;\n            text-decoration: none;\n            display: inline-block;\n            font-size: 16px;\n            cursor: pointer;\n            margin: 10px 0px;\n            border: 2px solid black;\n            ">Pop<\/button>\n            \n            <canvas id="canvas"><\/canvas>\n        ');
    var pushButton = Kotlin.isType(tmp$_1 = document.getElementById('push'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    var popButton = Kotlin.isType(tmp$_2 = document.getElementById('pop'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    var canvas = Kotlin.isType(tmp$_3 = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$_3 : throwCCE();
    var stackList = {v: new Stack()};
    stackList.v.elements;
    pushButton.addEventListener('click', main$lambda$lambda(stackList));
    popButton.addEventListener('click', main$lambda$lambda_0(stackList, canvas));
    return Unit;
  }
  function main() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    var but_1_01 = Kotlin.isType(tmp$ = document.getElementById('01'), HTMLButtonElement) ? tmp$ : throwCCE();
    var but_1_02 = Kotlin.isType(tmp$_0 = document.getElementById('02'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    var but_1_02_01 = Kotlin.isType(tmp$_1 = document.getElementById('02_01'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    var but_1_03 = Kotlin.isType(tmp$_2 = document.getElementById('03'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    var but_1_04 = Kotlin.isType(tmp$_3 = document.getElementById('04'), HTMLButtonElement) ? tmp$_3 : throwCCE();
    var but_3_002 = Kotlin.isType(tmp$_4 = document.getElementById('3_002'), HTMLButtonElement) ? tmp$_4 : throwCCE();
    var but_3_003 = Kotlin.isType(tmp$_5 = document.getElementById('3_003'), HTMLButtonElement) ? tmp$_5 : throwCCE();
    var but_3_004 = Kotlin.isType(tmp$_6 = document.getElementById('3_004'), HTMLButtonElement) ? tmp$_6 : throwCCE();
    var but_3_005 = Kotlin.isType(tmp$_7 = document.getElementById('3_005'), HTMLButtonElement) ? tmp$_7 : throwCCE();
    var but_4_002 = Kotlin.isType(tmp$_8 = document.getElementById('4_002'), HTMLButtonElement) ? tmp$_8 : throwCCE();
    var but_4_003 = Kotlin.isType(tmp$_9 = document.getElementById('4_003'), HTMLButtonElement) ? tmp$_9 : throwCCE();
    var but_4_004 = Kotlin.isType(tmp$_10 = document.getElementById('4_004'), HTMLButtonElement) ? tmp$_10 : throwCCE();
    var but_6_006 = Kotlin.isType(tmp$_11 = document.getElementById('6_006'), HTMLButtonElement) ? tmp$_11 : throwCCE();
    but_1_01.addEventListener('click', main$lambda);
    but_1_02.addEventListener('click', main$lambda_0);
    but_1_02_01.addEventListener('click', main$lambda_1);
    but_1_03.addEventListener('click', main$lambda_2);
    but_1_04.addEventListener('click', main$lambda_3);
    but_3_002.addEventListener('click', main$lambda_4);
    but_3_003.addEventListener('click', main$lambda_5);
    but_3_004.addEventListener('click', main$lambda_6);
    but_3_005.addEventListener('click', main$lambda_7);
    but_4_002.addEventListener('click', main$lambda_8);
    but_4_003.addEventListener('click', main$lambda_9);
    but_4_004.addEventListener('click', main$lambda_10);
    but_6_006.addEventListener('click', main$lambda_11);
  }
  function showList(list) {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    tmp$_0 = list.size();
    for (var i = 0; i < tmp$_0; i++) {
      drawElem(canvas);
    }
  }
  function drawElem($receiver) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);
  }
  function Stack() {
    this.elements = ArrayList_init();
  }
  Stack.prototype.isEmpty = function () {
    return this.elements.isEmpty();
  };
  Stack.prototype.size = function () {
    return this.elements.size;
  };
  Stack.prototype.push_za3rmp$ = function (item) {
    return this.elements.add_11rb$(item);
  };
  Stack.prototype.pop = function () {
    var item = lastOrNull(this.elements);
    if (!this.isEmpty()) {
      this.elements.removeAt_za3lpa$(this.elements.size - 1 | 0);
    }return item;
  };
  Stack.prototype.peek = function () {
    return lastOrNull(this.elements);
  };
  Stack.prototype.toString = function () {
    return this.elements.toString();
  };
  Stack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stack',
    interfaces: []
  };
  function lab_01() {
    var prediction = trimIndent('\n/*\n\u0414\u043B\u044F \u0434\u0432\u0443\u0445 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439\n\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\n*/\n    ');
    var a = 10;
    var b = 5;
    return trimMargin('\n' + '        |' + prediction + '\n' + '\n' + '        |val a = 10' + '\n' + '        |val b = 5' + '\n' + '        ' + '\n' + '        |a + b = ' + (a + b | 0) + '\n' + '        |a - b = ' + (a - b | 0) + '\n' + '        |a * b = ' + Kotlin.imul(a, b) + '\n' + '        |a / b = ' + (a / b | 0) + '\n' + '    ');
  }
  function lab_02() {
    var prediction = trimIndent('\n        /*\n        \u0414\u043B\u044F \u0442\u0440\u0435\u0445 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445:\n                var x = 6;\n                var y = 15;\n                var z = 4; \n        \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F:\n            res = x += y - x++ * z;\n            res = z = --x - y * 5;\n            res = y /= x + 5 % z;\n            res = z = x++ + y * 5;\n            res = x = y - x++ * z;\n        \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\n        */\n    ');
    var x = 6;
    var y = 15;
    var z = 4;
    var res = kotlin_js_internal_IntCompanionObject;
    return trimIndent('\n' + '        ' + prediction + '\n' + '        ' + '\n' + '        ________________________' + '\n' + '        ' + '\n' + '        res = ' + (res = x += y - x++ * z).toString() + '\n' + '        res = ' + (res = z = --x - y * 5).toString() + '\n' + '        res = ' + (res = y /= x + 5 % z).toString() + '\n' + '        res = ' + (res = z = x++ + y * 5).toString() + '\n' + '        res = ' + (res = x = y - x++ * z).toString() + '\n' + '    ');
  }
  function lab_02_01() {
    var prediction = trimIndent('\n        /* \u0414\u043B\u044F \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445\n                var a = 8;\n                var b = 15;\n            1) \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043E\u0442 a \u0434\u043E b, \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.\n            2) \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0432\u0441\u0435 \u0447\u0435\u0442\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430, \u043B\u0435\u0436\u0430\u0449\u0438\u0435 >= a, \u043D\u043E < b.\n        */\n    ');
    var a = 8;
    var b = 15;
    var sum = 0;
    var sumOfEven = 0;
    for (var i = a; i <= b; i++) {
      sum = sum + i | 0;
      if (i % 2 === 0 && i < b)
        sumOfEven = sumOfEven + i | 0;
    }
    return trimIndent('\n' + '        ' + prediction + '\n' + '        ' + '\n' + '        ___________________' + '\n' + '        ' + '\n' + '        1) ' + sum + '\n' + '        2) ' + sumOfEven + '\n' + '    ');
  }
  function lab_1_03() {
    var prediction = trimIndent('\n        /*\n        \u0414\u043B\u044F \u0442\u0440\u0435\u0445 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445:\n                var a = 8;\n                var b = 9;\n                var c = 12;\n        \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0441\u0440\u0435\u0434\u043D\u0435\u0435 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\n        */\n    ');
    var a = 8;
    var b = 9;
    var c = 12;
    var res = average([a, b, c]);
    return trimIndent('\n' + '        ' + prediction + '\n' + '        ' + '\n' + '        _____________' + '\n' + '        ' + '\n' + '        res = ' + res + '\n' + '    ');
  }
  function lab_1_04() {
    var prediction = trimIndent('\n        /*\n        \u0414\u043B\u044F \u0442\u0440\u0435\u0445 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445:\n                var p = 3.141592653589793;\n                var r = 4;\n                var h = 8;\n        \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C:\n            \u041E\u0431\u044A\u0435\u043C \u0446\u0438\u043B\u0438\u043D\u0434\u0440\u0430\n            \u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0446\u0438\u043B\u0438\u043D\u0434\u0440\u0430;\n        \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\n        */\n    ');
    var p = math.PI;
    var r = 4.0;
    var h = 8.0;
    var vol = p * r * r * h;
    var area = vol / r * 2;
    return trimIndent('\n' + '        ' + prediction + '\n' + '        ' + '\n' + '        ______________' + '\n' + '        ' + '\n' + '        \u041E\u0431\u044A\u0435\u043C: ' + vol + '\n' + '        \u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0442\u0438: ' + area + '\n' + '    ');
  }
  function lab_3_002() {
    var prediction = trimIndent('\n        /*\n                \xA0\u0414\u043B\u044F \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0430:\n                    \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, var arr = Array(3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);\n                    \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C:\n                        1.  \u041F\u043E\u0438\u0441\u043A \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0438 \u0432\u044B\u0432\u043E\u0434 \u0435\u0433\u043E \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430  \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435:\n                            \u041D\u0430\u0439\u0431\u043E\u043B\u0448\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 = 143;\n                        2.  \u041F\u043E\u0438\u0441\u043A \u043D\u0430\u0439\u043C\u0435\u043D\u044C\u0448\u0435\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0438 \u0432\u044B\u0432\u043E\u0434 \u0435\u0433\u043E \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430  \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435:\n                            \u041D\u0430\u0439\u043C\u0435\u043D\u044C\u0448\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 = -87;\n                        3.  \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0441\u0443\u043C\u043C\u044B \u0432\u0441\u0435\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u043E\u0432 \u043C\u0430\u0441\u0438\u0432\u0430 \u0438 \u0432\u044B\u0432\u043E\u0434 \u0435\u0433\u043E \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430  \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435:\n                            \u0421\u0443\u043C\u043C\u0430 \u0432\u0441\u0435\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 = 142;\n                        4.  \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E\u0438 \u0432\u044B\u0432\u043E\u0434 \u0435\u0433\u043E \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430  \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435:\n                            \u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 = 10.923076923076923;\n                        5.  \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u043D\u0435 \u0447\u0435\u0442\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0438 \u0432\u044B\u0432\u043E\u0434 \u0438\u0445 \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435:\n                            \u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0443 0 \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 3 \u043D\u0435 \u0447\u0435\u0442\u043D\u044B\u0439\n                            ....\n                            \u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0443 12 \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 43 \u043D\u0435 \u0447\u0435\u0442\u043D\u044B\u0439\n        */\n    ');
    var arr = [3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43];
    var fifthExercise = '';
    for (var i = 0; i !== arr.length; ++i) {
      if (arr[i] % 2 !== 0) {
        fifthExercise += '\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u043F\u043E \u0438\u043D\u0434\u0435\u043A\u0441\u0443 ' + i + ' \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C ' + arr[i] + ' \u043D\u0435 \u0447\u0435\u0442\u043D\u044B\u0439' + '\n';
      }}
    return trimIndent('\n' + '        ' + prediction + '\n' + '        ' + '\n' + '        _________________' + '\n' + '        ' + '\n' + '        1. ' + toString(max(arr)) + '\n' + '        2. ' + toString(min(arr)) + '\n' + '        3. ' + sum(arr) + '\n' + '        4. ' + average(arr) + '\n' + '        5. ' + trimMargin(fifthExercise) + '\n' + '    ');
  }
  function lab_3_003() {
    var prediction = trimIndent('\n        /*\n            \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u0432\u0443\u043C\u0435\u0440\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 \u0447\u0438\u0441\u0435\u043B \u0440\u0430\u0437\u043C\u0435\u0440\u043D\u043E\u0441\u0442\u044C\u044E 5\u04255, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0448\u0438\u0439 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438 \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430.\n            \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u0434 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0432\u0441\u0435\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0438 \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0449\u0438\u0439 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u0438\u0430\u0433\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u043F\u0440\u0430\u0432\u0438\u043B\u0443:\n                \u0435\u0441\u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 0, \u0442\u043E \u0435\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0432\u043D\u044B\u043C 0,\n                \u0438\u043D\u0430\u0447\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0432\u043D\u044B\u043C 1.\n            \u0412\u044B\u0432\u0435\u0441\u0442\u0438 \u0432 \u043E\u043A\u043D\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435:\n                0 -34 32 33 64 \n                32 1 32 23 84 \n                54 73 0 -65 32 \n                43 50 21 0 76 \n                12 51 19 -54 0\n        */\n        \n        _____\n        \n\n    ');
    var array = Array_0(5);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = Array_0(5);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = 0;
      }
      array[i] = array_0;
    }
    var table = array;
    for (var row = 0; row < 5; row++) {
      for (var cell = 0; cell < 5; cell++) {
        table[row][cell] = random(new IntRange(-100, 100), Random.Default);
        if (row === cell) {
          table[row][cell] = table[row][cell] < 0 ? 0 : 1;
        }}
    }
    for (var row_0 = 0; row_0 < 5; row_0++) {
      for (var cell_0 = 0; cell_0 < 5; cell_0++) {
        prediction = prediction + (table[row_0][cell_0].toString() + ' ');
      }
      prediction = prediction + '\n';
    }
    return prediction;
  }
  function lab_3_004$Stack() {
    this.elements = ArrayList_init();
  }
  lab_3_004$Stack.prototype.isEmpty = function () {
    return this.elements.isEmpty();
  };
  lab_3_004$Stack.prototype.size = function () {
    return this.elements.size;
  };
  lab_3_004$Stack.prototype.push_za3rmp$ = function (item) {
    return this.elements.add_11rb$(item);
  };
  lab_3_004$Stack.prototype.pop = function () {
    var item = lastOrNull(this.elements);
    if (!this.isEmpty()) {
      this.elements.removeAt_za3lpa$(this.elements.size - 1 | 0);
    }return item;
  };
  lab_3_004$Stack.prototype.peek = function () {
    return lastOrNull(this.elements);
  };
  lab_3_004$Stack.prototype.toString = function () {
    return this.elements.toString();
  };
  lab_3_004$Stack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stack',
    interfaces: []
  };
  function lab_3_004() {
    var prediction = trimIndent('\n        /*\n            \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u0434 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u0441\u0442\u0435\u043A\u0430\n        */\n    ');
    return prediction + trimIndent('\n        \n        class Stack() {\n        val elements: MutableList<Any> = mutableListOf()\n\n        fun isEmpty() = elements.isEmpty()\n\n        fun size() = elements.size\n\n        fun push(item: Any) = elements.add(item)\n\n        fun pop(): Any? {\n            val item = elements.last     OrNull()\n            if (!isEmpty()) {\n                elements.removeAt(elements.size - 1)\n            }\n            return item\n        }\n\n        fun peek(): Any? = elements.lastOrNull()\n\n        override fun toString() = elements.toString()\n    }\n    ');
  }
  function lab_3_005() {
    var prediction = '\n     /*\n    \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u0434 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u0446\u0438\u043A\u043B\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u0447\u0435\u0440\u0435\u0434\u0438\n    */   \n    ';
    return prediction + trimIndent('\n        \n        class Queue (list:MutableList<Any>){\n\n            var items:MutableList<Any> = list\n\n            fun isEmpty():Boolean = items.isEmpty()\n\n            fun size():Int = items.count()\n\n            override  fun toString() = items.toString()\n\n            fun enqueue(element:Any){\n                items.add(element)\n            }\n\n            fun dequeue():Any?{\n                if (this.isEmpty()){\n                    return null\n                } else {\n                    return items.removeAt(0)\n                }\n            }\n\n            fun peek():Any?{\n                return items[0]\n            }\n        }\n    ');
  }
  function lab_4_002$sum(a, b) {
    return a + b | 0;
  }
  function lab_4_002$minus(a, b) {
    return a - b | 0;
  }
  function lab_4_002$mult(a, b) {
    return Kotlin.imul(a, b);
  }
  function lab_4_002$divide(a, b) {
    return a / b | 0;
  }
  function lab_4_002() {
    var prediction = trimIndent('\n        /*\n            \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u0432\u0443\u0445 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u0432:\n                \u0441\u043B\u043E\u0436\u0435\u043D\u0438\u044F,\n                \u0432\u044B\u0447\u0438\u0442\u0430\u043D\u0438\u044F,\n                \u0443\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u044F,\n                \u0434\u0435\u043B\u0435\u043D\u0438\u044F.\n            \u0412 \u043A\u0430\u0436\u0434\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u044B\u0432\u043E\u0434 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435:\n                a + b = 8\n                a - b = 3\n                a * b = 16\n                a / b = 2\n                \u041F\u043E\u043F\u044B\u0442\u043A\u0430 \u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043D\u0430 0.\n        */\n    ');
    try {
      var $receiver = ensureNotNull(window.prompt('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E a:'));
      var destination = StringBuilder_init();
      var tmp$;
      tmp$ = iterator($receiver);
      while (tmp$.hasNext()) {
        var element = unboxChar(tmp$.next());
        if (!(unboxChar(toBoxedChar(element)) === 32))
          destination.append_s8itvh$(element);
      }
      var a = toInt(destination.toString());
      var $receiver_0 = ensureNotNull(window.prompt('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E b:'));
      var destination_0 = StringBuilder_init();
      var tmp$_0;
      tmp$_0 = iterator($receiver_0);
      while (tmp$_0.hasNext()) {
        var element_0 = unboxChar(tmp$_0.next());
        if (!(unboxChar(toBoxedChar(element_0)) === 32))
          destination_0.append_s8itvh$(element_0);
      }
      var b = toInt(destination_0.toString());
      var sum = lab_4_002$sum;
      var minus = lab_4_002$minus;
      var mult = lab_4_002$mult;
      var divide = lab_4_002$divide;
      var resOfDivide = b === 0 ? '\u042F \u043D\u0435 \u043C\u043E\u0433\u0443 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E :(' : divide(a, b);
      return prediction + trimIndent('\n' + '        ____________________' + '\n' + '        ' + '\n' + '        a = ' + a + '\n' + '        b = ' + b + '\n' + '        ' + '\n' + '        a + b = ' + sum(a, b) + '\n' + '        a - b = ' + minus(a, b) + '\n' + '        a * b = ' + mult(a, b) + '\n' + '        a / b = ' + resOfDivide.toString() + '\n' + '    ');
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return '\u042F \u043D\u0435 \u043C\u043E\u0433\u0443 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u044D\u0442\u0438\u043C \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 :(';
      } else
        throw e;
    }
  }
  function lab_4_003$thirdResponseChecker(num) {
    var tmp$;
    var flag = 0;
    tmp$ = abs(num);
    for (var i = 2; i < tmp$; i++) {
      if (num % i === 0) {
        flag = flag + 1 | 0;
        break;
      }}
    return flag > 0;
  }
  function lab_4_003() {
    var predicition = trimIndent('\n        /*\n            \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u043E\u0434\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u043E\u0432\u043E\u0433\u043E \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430, \u0440\u0435\u0448\u0430\u044E\u0449\u0443\u044E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438:\n                1. \u0412\u044B\u0432\u043E\u0434 \u0432 \u043E\u043A\u043D\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E \u0437\u043D\u0430\u043A\u0435 \u0447\u0438\u0441\u043B\u0430;\n                2. \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0430 \u043A\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u044C 2 \u0438\u043B\u0438 3 \u0438\u043B\u0438 5 \u0438\u043B\u0438 9 \u0438 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043A\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u0438 \u0445\u043E\u0442\u044F\u0431\u044B \u043E\u0434\u043D\u043E\u043C\u0443 \u0438\u0437 \u043E\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B, \u0432\u044B\u0432\u043E\u0434 \u0432 \u043E\u043A\u043D\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F: "\u0427\u0438\u0441\u043B\u043E \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u043D\u0430 2 \u0438\u043B\u0438 5 \u0438\u043B\u0438 3 \u0438\u043B\u0438 6 \u0438\u043B\u0438 9 \u0431\u0435\u0437 \u043E\u0441\u0442\u0430\u0442\u043A\u0430";\n                3.  \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u0447\u0438\u0441\u043B\u043E\u043C \u0438 \u0432\u044B\u0432\u043E\u0434 \u0432 \u043E\u043A\u043D\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.\n        */\n    ');
    var $receiver = ensureNotNull(window.prompt('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E:'));
    var destination = StringBuilder_init();
    var tmp$;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var element = unboxChar(tmp$.next());
      if (!(unboxChar(toBoxedChar(element)) === 32))
        destination.append_s8itvh$(element);
    }
    var number = toInt(destination.toString());
    var firstResponse = number < 0 ? '\u0427\u0438\u0441\u043B\u043E \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435' : '\u0427\u0438\u0441\u043B\u043E \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435';
    var secondResponse = number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 9 === 0 ? '\u0427\u0438\u0441\u043B\u043E \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u043D\u0430 2 \u0438\u043B\u0438 5 \u0438\u043B\u0438 3 \u0438\u043B\u0438 6 \u0438\u043B\u0438 9 \u0431\u0435\u0437 \u043E\u0441\u0442\u0430\u0442\u043A\u0430' : '\u0427\u0438\u0441\u043B\u043E \u043D\u0435 \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u043D\u0430 2 \u0438\u043B\u0438 5 \u0438\u043B\u0438 3 \u0438\u043B\u0438 6 \u0438\u043B\u0438 9 \u0431\u0435\u0437 \u043E\u0441\u0442\u0430\u0442\u043A\u0430';
    var thirdResponseChecker = lab_4_003$thirdResponseChecker;
    var thirdResponse = thirdResponseChecker(number) ? '\u0427\u0438\u0441\u043B\u043E \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u043C' : '\u0427\u0438\u0441\u043B\u043E \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u043C';
    return predicition + trimIndent('\n' + '\n' + '        ________________________' + '\n' + '        ' + '\n' + '        ' + firstResponse + '\n' + '        ' + secondResponse + '\n' + '        ' + thirdResponse + '\n' + '    ');
  }
  function lab_4_004() {
    var prediction = trimIndent('\n        /*\n            \u0414\u043B\u044F \u0437\u0430\u0434\u0430\u0447 \u043F\u0440\u043E\u0433\u0430\u043C\u043C\u043D\u043E\u0433\u043E \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u0435\u043A\u0430 \u0438 \u0446\u0438\u043A\u043B\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0432 \u0432\u0438\u0434\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0439:\n                \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u0441\u0442\u0435\u043A\n                \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0437 \u0441\u0442\u0435\u043A\u0430\n                \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u043E\u0447\u0435\u0440\u0435\u0434\u044C\n                \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0437 \u043E\u0447\u0435\u0440\u0435\u0434\u0438\n        */\n    ');
    return prediction + trimIndent('\n        _____________\n        \n        \u0412 \u043F\u0440\u043E\u0448\u043B\u044B\u0445 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F\u0445 \u044D\u0442\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0443\u0436\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B.\n    ');
  }
  _.main = main;
  _.showList_1br23s$ = showList;
  _.Stack = Stack;
  _.lab_01 = lab_01;
  _.lab_02 = lab_02;
  _.lab_02_01 = lab_02_01;
  _.lab_1_03 = lab_1_03;
  _.lab_1_04 = lab_1_04;
  _.lab_3_002 = lab_3_002;
  _.lab_3_003 = lab_3_003;
  _.lab_3_004 = lab_3_004;
  _.lab_3_005 = lab_3_005;
  _.lab_4_002 = lab_4_002;
  _.lab_4_003 = lab_4_003;
  _.lab_4_004 = lab_4_004;
  main();
  Kotlin.defineModule('crossplatform', _);
  return _;
}(typeof crossplatform === 'undefined' ? {} : crossplatform, kotlin);
