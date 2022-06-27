// * 함수 calc() 선언과 구현*

function calc() {
    var currentYear = 2022; //올해 년도 저장을 변수 currentYear에 저장함. 
    //사용자로부터 입력을 받은 값으로 변수 birthYear에 저장함.
    var birthYear = prompt("enter your birthyear","YYYY");
    var age = 0; 
    //실제 나이를 구하기 위한 코드
    age = currentYear - birthYear + 1;
    document.querySelector("#result").innerHTML = "your age is " + age + "." ;
    //document는 현재 웹브라우저의 페이지를 의미하고 
    //querySelector()는 id가 result인 웹 요소(div)를 의미한다.
}

