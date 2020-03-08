import kotlin.browser.*
import org.w3c.dom.*
import kotlin.math.PI


fun main() {
    val but_1_01 = document.getElementById("01") as HTMLButtonElement
    val but_1_02 = document.getElementById("02") as HTMLButtonElement
    val but_1_02_01 = document.getElementById("02_01") as HTMLButtonElement
    val but_1_03 = document.getElementById("03") as HTMLButtonElement
    //Лаба 03_01
    val but_1_04 = document.getElementById("04") as HTMLButtonElement
    //Laba 04_01
    val but_3_002 = document.getElementById("3_002") as HTMLButtonElement
    val but_3_003 = document.getElementById("3_003") as HTMLButtonElement

    but_1_01.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_01()
    })
    but_1_02.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_02()
    })
    but_1_02_01.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_02_01()
    })
    but_1_03.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_1_03()
    })
    //Лаба
    but_1_04.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_1_04()
    })
    //Laba
    but_3_002.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_3_002()
    })
    but_3_003.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_3_003()
    })
}

fun lab_01(): String {

    val prediction = """
/*
Для двух переменных выполнить все виды арифметических операций
и результаты вывести в окне браузера
*/
    """.trimIndent()

    val a = 10
    val b = 5

    return """
        |$prediction

        |val a = 10
        |val b = 5
        
        |a + b = ${a + b}
        |a - b = ${a - b}
        |a * b = ${a * b}
        |a / b = ${a / b}
    """.trimMargin()
}

fun lab_02(): String {

    val prediction = """
        /*
        Для трех переменных:
                var x = 6;
                var y = 15;
                var z = 4; 
        выполнить следующие выражения:
            res = x += y - x++ * z;
            res = z = --x - y * 5;
            res = y /= x + 5 % z;
            res = z = x++ + y * 5;
            res = x = y - x++ * z;
        и результаты вывести в окне браузера
        */
    """.trimIndent()

    var x = 6
    var y = 15
    var z = 4
    var res = Int

    return """
        $prediction
        
        ________________________
        
        res = ${js("res = x+= y - x++ * z;")}
        res = ${js("res = z = --x - y * 5;")}
        res = ${js("res = y /= x + 5 % z;")}
        res = ${js("res = z = x++ + y * 5;")}
        res = ${js("res = x = y - x++ * z;")}
    """.trimIndent()
}

fun lab_02_01(): String {
    val prediction = """
        /* Для заданных значений переменных
                var a = 8;
                var b = 15;
            1) вычислить сумму всех значений от a до b, результат отобразить в окне браузера.
            2) вывести в окне браузера все четные числа, лежащие >= a, но < b.
        */
    """.trimIndent()

    val a = 8
    val b = 15
    var sum = 0
    var sumOfEven = 0

    for (i in a..b) {
        sum += i

        if (i % 2 == 0 && i < b) sumOfEven += i
    }

    return """
        $prediction
        
        ___________________
        
        1) $sum
        2) $sumOfEven
    """.trimIndent()
}

fun lab_1_03(): String {
    val prediction = """
        /*
        Для трех переменных:
                var a = 8;
                var b = 9;
                var c = 12;
        вычислить среднее арифметическое и результат вывести в окне браузера
        */
    """.trimIndent()

    var a = 8
    var b = 9
    var c = 12

    val res = arrayOf(a, b, c).average()

    return """
        $prediction
        
        _____________
        
        res = $res
    """.trimIndent()
}
//
//fun lab_1_03_01(): String {
//    val prediction = """
//        /*
//        Пусть есть 10 магазинов, между каждой парой магазинов есть путь.
//        Напишите код вычисления количества возможных маршрутов обхода всех магазинов.
//        Результать отобразить в окне браузера
//        */
//    """.trimIndent()
//
//
//}

fun lab_1_04(): String {
    val prediction = """
        /*
        Для трех переменных:
                var p = 3.141592653589793;
                var r = 4;
                var h = 8;
        вычислить:
            Объем цилиндра
            Площадь поверхности цилиндра;
        и результаты вывести в окне браузера
        */
    """.trimIndent()

    val p = PI
    val r: Double = 4.0
    val h: Double = 8.0

    val vol = p * r * r * h
    val area = vol / r * 2

    return """
        $prediction
        
        ______________
        
        Объем: $vol
        Площадь поверхноти: $area
    """.trimIndent()
}

fun lab_3_002(): String {
    val prediction = """
        /*
                 Для заданного массива:
                    например, var arr = Array(3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);
                    выполнить:
                        1.  Поиск наибольшего значения массива и вывод его в окне браузера  в формате:
                            Найболшее значение массива = 143;
                        2.  Поиск найменьшего значения массива и вывод его в окне браузера  в формате:
                            Найменьшее значение массива = -87;
                        3.  Определение суммы всех элеменов масива и вывод его в окне браузера  в формате:
                            Сумма всех элементов массива = 142;
                        4.  Определение среднего арифметическогои вывод его в окне браузера  в формате:
                            Среднее арифметическое массива = 10.923076923076923;
                        5.  Определение всех не четных значений и вывод их в окне браузера в формате:
                            Элемент по индексу 0 со значением 3 не четный
                            ....
                            Элемент по индексу 12 со значением 43 не четный
        */
    """.trimIndent()

    val arr = arrayOf(3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43)
    var fifthExercise: String = """"""

    for (i in arr.indices) {
        if (arr[i] % 2 != 0) {
            fifthExercise += ("Элемент по индексу $i со значением ${arr[i]} не четный\n")
        }
    }

    return """
        $prediction
        
        _________________
        
        1. ${arr.max()}
        2. ${arr.min()}
        3. ${arr.sum()}
        4. ${arr.average()}
        5. ${fifthExercise.trimMargin()}
    """.trimIndent()
}

fun lab_3_003(): String {
    var prediction: String = """
        /*
            Создать двумерный массив чисел размерностью 5Х5, содержаший положительные и отрицательные числа.
            Написать код просмотра всех элементов массива и изменяющий значения диагональных элементов по следующему правилу:
                если элемент содержит значение меньше 0, то его значение устанавливается равным 0,
                иначе значение устанавливается равным 1.
            Вывести в окно браузера содержимое массива в формате:
                0 -34 32 33 64 
                32 1 32 23 84 
                54 73 0 -65 32 
                43 50 21 0 76 
                12 51 19 -54 0
        */
        
        _____
        

    """.trimIndent()

    val table: Array<Array<Int>> = Array(5, { Array(5, {0}) })

    for (row in 0 until 5) {
        for (cell in 0 until 5) {
            table[row][cell] = (-100..100).random()
            if (row == cell) {
                table[row][cell] = if (table[row][cell] < 0) 0 else 1
            }
        }
    }

    for (row in 0 until 5) {
        for (cell in 0 until 5) {
        prediction = prediction.plus("${table[row][cell]} ")
        }
        prediction = prediction.plus("\n")
    }

    return prediction
}