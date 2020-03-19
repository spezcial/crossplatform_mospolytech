import kotlin.browser.*
import org.w3c.dom.*
import kotlin.math.PI
import kotlin.math.abs


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
    val but_3_004 = document.getElementById("3_004") as HTMLButtonElement
    val but_3_005 = document.getElementById("3_005") as HTMLButtonElement
    val but_4_002 = document.getElementById("4_002") as HTMLButtonElement
    val but_4_003 = document.getElementById("4_003") as HTMLButtonElement
    val but_4_004 = document.getElementById("4_004") as HTMLButtonElement
    val but_6_006 = document.getElementById("6_006") as HTMLButtonElement

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
    but_3_004.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_3_004()
    })
    but_3_005.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_3_005()
    })
    but_4_002.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_4_002()
    })
    but_4_003.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_4_003()
    })
    but_4_004.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = lab_4_004()
    })
    but_6_006.addEventListener("click", {
        (document.getElementById("text") as HTMLElement).innerText = ""
        (document.getElementById("text") as HTMLElement).innerHTML += """
            <button id="push"
            style = "
            color: black;
            background-color: darkgray;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            margin: 10px;
            border: 2px solid black;
            "
            ">Push</button>
            
            <button id="pop"
            style = "
            color: black;
            background-color: darkgray;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            margin: 10px 0px;
            border: 2px solid black;
            ">Pop</button>
            
            <canvas id="canvas"></canvas>
        """.trimIndent()

        val pushButton = document.getElementById("push") as HTMLButtonElement
        val popButton = document.getElementById("pop") as HTMLButtonElement

        val canvas = document.getElementById("canvas") as HTMLCanvasElement


        var stackList = Stack()
        stackList.elements

        pushButton.addEventListener("click", {
            stackList.elements.add("")

            showList(stackList)
        })

        popButton.addEventListener("click", {
            stackList.elements.removeAt(0)

            for (i in 0 until stackList.elements.size) {
                canvas.drawElem()
            }
        })
    })
}

fun showList(list: Stack) {
    val canvas = document.getElementById("canvas") as HTMLCanvasElement

    for (i in 0 until list.size()) {
        canvas.drawElem()
    }
}

private fun HTMLCanvasElement.drawElem() {

    js("var canvas = document.getElementById(\"canvas\");\n" +
            "var ctx = canvas.getContext(\"2d\");\n" +
            "\n" +
            "ctx.fillStyle = \"green\";\n" +
            "ctx.fillRect(10, 10, 100, 100);")

}

class Stack {
    val elements: MutableList<Any> = mutableListOf()

    fun isEmpty() = elements.isEmpty()

    fun size() = elements.size

    fun push(item: Any) = elements.add(item)

    fun pop(): Any? {
        val item = elements.lastOrNull()
        if (!isEmpty()) {
            elements.removeAt(elements.size - 1)
        }
        return item
    }

    fun peek(): Any? = elements.lastOrNull()

    override fun toString(): String = elements.toString()
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

fun lab_3_004(): String {
    val prediction = """
        /*
            Написать код программной модели стека
        */
    """.trimIndent()

    class Stack() {
        val elements: MutableList<Any> = mutableListOf()

        fun isEmpty() = elements.isEmpty()

        fun size() = elements.size

        fun push(item: Any) = elements.add(item)

        fun pop(): Any? {
            val item = elements.lastOrNull()
            if (!isEmpty()) {
                elements.removeAt(elements.size - 1)
            }
            return item
        }

        fun peek(): Any? = elements.lastOrNull()

        override fun toString() = elements.toString()
    }

    return prediction.plus("""
        
        class Stack() {
        val elements: MutableList<Any> = mutableListOf()

        fun isEmpty() = elements.isEmpty()

        fun size() = elements.size

        fun push(item: Any) = elements.add(item)

        fun pop(): Any? {
            val item = elements.last     OrNull()
            if (!isEmpty()) {
                elements.removeAt(elements.size - 1)
            }
            return item
        }

        fun peek(): Any? = elements.lastOrNull()

        override fun toString() = elements.toString()
    }
    """.trimIndent())
}

fun lab_3_005(): String {
    val prediction = """
     /*
    Написать код программной модели циклической очереди
    */   
    """

    return prediction.plus("""
        
        class Queue (list:MutableList<Any>){

            var items:MutableList<Any> = list

            fun isEmpty():Boolean = items.isEmpty()

            fun size():Int = items.count()

            override  fun toString() = items.toString()

            fun enqueue(element:Any){
                items.add(element)
            }

            fun dequeue():Any?{
                if (this.isEmpty()){
                    return null
                } else {
                    return items.removeAt(0)
                }
            }

            fun peek():Any?{
                return items[0]
            }
        }
    """.trimIndent())
}

fun lab_4_002(): String {
    val prediction = """
        /*
            Создать функции двух аргументов:
                сложения,
                вычитания,
                умножения,
                деления.
            В каждой функции предусмотреть вывод результата в окне браузера в формате:
                a + b = 8
                a - b = 3
                a * b = 16
                a / b = 2
                Попытка деления на 0.
        */
    """.trimIndent()

    try {
        val a: Int = window.prompt("Введите число a:")!!.filterNot { it == ' ' }.toInt()
        val b: Int = window.prompt("Введите число b:")!!.filterNot { it == ' ' }.toInt()

        fun sum(a: Int, b: Int) = a + b
        fun minus(a: Int, b: Int) = a - b
        fun mult(a: Int, b: Int) = a * b
        fun divide(a: Int, b: Int) = a / b

        val resOfDivide = if (b == 0) "Я не могу сделать это :(" else divide(a, b)

        return prediction.plus("""
        ____________________
        
        a = $a
        b = $b
        
        a + b = ${sum(a, b)}
        a - b = ${minus(a, b)}
        a * b = ${mult(a, b)}
        a / b = $resOfDivide
    """.trimIndent())
    }
    catch (e: Exception) {
        return "Я не могу сделать с этим арифметические операции :("
    }
}

fun lab_4_003(): String {
    val predicition = """
        /*
            Создать функцию одного числового аргумента, решающую следующие задачи:
                1. Вывод в окно браузера сообщения о знаке числа;
                2. Проверка на кратность 2 или 3 или 5 или 9 и в случае кратности хотябы одному из означенных чисел, вывод в окно браузера сообщения: "Число делится на 2 или 5 или 3 или 6 или 9 без остатка";
                3.  Проверка является ли параметр функции простым числом и вывод в окне браузера соответствующей информации.
        */
    """.trimIndent()

    val number = window.prompt("Введите ваше число:")!!.filterNot { it == ' ' }.toInt()

    val firstResponse = if (number < 0) "Число отрицательное" else "Число положительное"

    val secondResponse = if (number % 2 == 0 || number % 3 == 0 || number % 5 == 0 || number % 9 == 0) "Число делится на 2 или 5 или 3 или 6 или 9 без остатка" else "Число не делится на 2 или 5 или 3 или 6 или 9 без остатка"

    fun thirdResponseChecker(num: Int): Boolean {
        var flag = 0
        for (i in 2 until abs(num)) {
            if (num % i == 0) {
                flag++
                break
            }
        }
        return flag > 0
    }
        val thirdResponse = if (thirdResponseChecker(number)) "Число не является простым" else "Число является простым"

    return predicition.plus("""

        ________________________
        
        $firstResponse
        $secondResponse
        $thirdResponse
    """.trimIndent())
}
<<<<<<< HEAD

fun lab_4_004(): String {
    val prediction = """
        /*
            Для задач прогаммного моделирования стека и циклической очереди оформить в виде функций:
                добавление элемента в стек
                извлечение элемента из стека
                добавление элемента в очередь
                извлечение элемента из очереди
        */
    """.trimIndent()

    return prediction.plus("""
        _____________
        
        В прошлых реализациях эти функции уже выполнены.
    """.trimIndent())
}

//fun lab_6_006() {
//    document.getElementById()
//}
=======
>>>>>>> cd7f4162db51e51a2b6d6ce0f89114e0fa547ac0
