(function ($) {
    var Login = function () {
        this.$RegisterBtn = $("#register-btn");
        this.$SendSmsBtn = $("#send-sms-btn");
        this.$Phone = $("#phone");
    }
    Login.prototype.init = function () {
        this.bindEvent();
    }
    Login.prototype.bindEvent = function () {
        var me = this;
        this.$RegisterBtn.bind("click",function(){
            if(Func.checkInputList(this)){
                console.log(true)
            }
        });
        this.$SendSmsBtn.bind("click",function(){
            if(Func.checkInputList(this)){
                //发送验证码
                Func.getSmsCode({
                    elem:me.$SendSmsBtn[0],
                    data:{
                        phone:me.$Phone.val()
                    }
                })
            }
        });

        $("#recommend-btn").bind("click", function (e) {
            e.preventDefault();
            if($(this).parent().hasClass("open")){
                me.$RegisterBtn.data("base","phone,password,sms-code");
            }else{
                me.$RegisterBtn.data("base","phone,password,sms-code,recommend-phone");
            }
            $(this).parent().toggleClass("open");
        });
    }
    new Login().init();
})(Zepto)