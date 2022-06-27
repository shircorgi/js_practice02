function showPrice() {
    var oPrice = document.querySelector("#originalPrice").value;
    var rate = document.querySelector("#rate").value; 

    //두 개의 값이 음수가 아니라면 실행하라.
    if(oPrice > 0 && rate > 0) {
        var savedPrice = oPrice * (rate/100);
        var resultPrice = oPrice - savedPrice;
    }
    document.querySelector("#showResult").innerHTML = "상품의 원래 가격은 " + oPrice + 
    "원, 할인율은 " + rate + "% 입니다." + "<br></br>" + savedPrice + " 원을 절약한 " + resultPrice + " 원에 살 수 있습니다.";
}