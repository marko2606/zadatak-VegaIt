var app = angular.module("myApp", ["ngRoute"]);
app.controller('mainDiv', function ($scope) {
    // open/close profile selector menu
    $(".profileSelector").click(function () {
        $(".profilesAvailable").fadeIn(300, function () {
            $(".profilesAvailable").focus();
        });
        $(".arrowUser").css("transform", "rotate(180deg)");
    });
    $(".profilesAvailable").on('blur', function () {
        $(this).fadeOut();
        $(".arrowUser").css("transform", "rotate(360deg)");
    });
    //open voucher div
    $(".linkVoucher").click(function () {
        $(".boxVoucher").css("display", "flex");
    });
    // open-close menuSmall sidebar
    $(".menuSmallIcon").click(function () {
        $(".smallMenuSidebar").fadeIn(0);
        $(".smallMenuSidebar").focus();
        $(".headerContentLeft").fadeOut(0);
        $("a.bell").fadeOut(0);
    });
    $(".smallMenuSidebar").on('blur', function () {
        $(this).fadeOut(0);
        $(".headerContentLeft").fadeIn(0);
        $("a.bell").fadeIn(0);
    });
});
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        controller: 'mainDiv'
        , templateUrl: "resourses/js/appointments.html"
    }).when("/prescription", {
        templateUrl: "resourses/js/prescription.html"
    }).when("/health tracking", {
        templateUrl: "resourses/js/health tracking.html"
    }).when("/uploads", {
        templateUrl: "resourses/js/uploads.html"
    }).when("/medical history", {
        templateUrl: "resourses/js/medical history.html"
    });
});