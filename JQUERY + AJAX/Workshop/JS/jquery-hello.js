(function ($) {
    $.fn.hello = function (data) {
        var employee = $.extend({
            name: 'Praveen Jainkar'
        }, data);

        return this.append('Hello '+ employee.name);
    };

    $.fn.para1Animation = function () {
        this.css("color", "blue").slideUp(1000).slideDown(1000);
        return this;
    }

    $.fn.para2Animation = function () {
        this.css("color", "green").animate({ width: "50%" }).animate({ fontSize: "46px" });
        return this;
    }


}(jQuery));
