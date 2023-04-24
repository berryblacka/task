$(document).ready(() => {
    // наведение мыши на элемент
    $(".red_circle").mouseover(function () {
        // сдвиг всех элементов кроме наведенного на 50 пикселей влево
        $(".black_circle").animate({ top: "150%" }, "slow");
        $(".red_triangle").animate({ top: "-100%" }, "slow");
        $(".bolotny_rectangle").animate({ left: "-100%" }, "slow");
        $(".green_rectangle_1").animate({ bottom: "-100%" }, "slow");
        $(".yellow_rectangle").animate({ right: "-120%" }, "slow");
        $(".red_rectangle").animate({ bottom: "-120%" }, "slow");
        $(".green_rectangle_2").animate({ bottom: "-150%" }, "slow");
        $(".gray_rectangle").animate({ top: "-100%" }, "slow");
    });
    // отведение мыши от элемента
    $(".red_circle").mouseout(function () {
        // возврат всех элементов на исходную позицию
        $(".black_circle").animate({ top: "44%" }, "slow");
        $(".red_triangle").animate({ top: "3%" }, "slow");
        $(".bolotny_rectangle").animate({ left: "23%" }, "slow");
        $(".green_rectangle_1").animate({ bottom: "8%" }, "slow");
        $(".yellow_rectangle").animate({ right: "3%" }, "slow");
        $(".green_rectangle_2").animate({ bottom: "0%" }, "slow");
        $(".red_rectangle").animate({ bottom: "0%" }, "slow");
        $(".gray_rectangle").animate({ top: "6%" }, "slow");

    });

    $(".item").click(() => {
        $(this).animate({
            'transform': 'rotate(360deg)'
        }, 1000);
    })
})