if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'crossplatform'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'crossplatform'.");
}var crossplatform = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var average = Kotlin.kotlin.collections.average_5yd9ji$;
  var math = Kotlin.kotlin.math;
  var max = Kotlin.kotlin.collections.max_pbinho$;
  var toString = Kotlin.toString;
  var min = Kotlin.kotlin.collections.min_pbinho$;
  var sum = Kotlin.kotlin.collections.sum_5yd9ji$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Array_0 = Array;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_xmiyix$;
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
  function main() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var but_1_01 = Kotlin.isType(tmp$ = document.getElementById('01'), HTMLButtonElement) ? tmp$ : throwCCE();
    var but_1_02 = Kotlin.isType(tmp$_0 = document.getElementById('02'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    var but_1_02_01 = Kotlin.isType(tmp$_1 = document.getElementById('02_01'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    var but_1_03 = Kotlin.isType(tmp$_2 = document.getElementById('03'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    var but_1_04 = Kotlin.isType(tmp$_3 = document.getElementById('04'), HTMLButtonElement) ? tmp$_3 : throwCCE();
    var but_3_002 = Kotlin.isType(tmp$_4 = document.getElementById('3_002'), HTMLButtonElement) ? tmp$_4 : throwCCE();
    var but_3_003 = Kotlin.isType(tmp$_5 = document.getElementById('3_003'), HTMLButtonElement) ? tmp$_5 : throwCCE();
    but_1_01.addEventListener('click', main$lambda);
    but_1_02.addEventListener('click', main$lambda_0);
    but_1_02_01.addEventListener('click', main$lambda_1);
    but_1_03.addEventListener('click', main$lambda_2);
    but_1_04.addEventListener('click', main$lambda_3);
    but_3_002.addEventListener('click', main$lambda_4);
    but_3_003.addEventListener('click', main$lambda_5);
  }
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
  _.main = main;
  _.lab_01 = lab_01;
  _.lab_02 = lab_02;
  _.lab_02_01 = lab_02_01;
  _.lab_1_03 = lab_1_03;
  _.lab_1_04 = lab_1_04;
  _.lab_3_002 = lab_3_002;
  _.lab_3_003 = lab_3_003;
  main();
  Kotlin.defineModule('crossplatform', _);
  return _;
}(typeof crossplatform === 'undefined' ? {} : crossplatform, kotlin);
