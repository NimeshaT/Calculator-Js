function login(){
    // console.log("Hellooooooooooooooooooooo");
    // alert("hiiiiii");

    // create variable(let/var/const)
    const userName="Saman";
    const password="12345";

    let txtUserNameValue=document.getElementById("txtUserName").value;
    let txtPasswordValue=document.getElementById("txtPassword").value;

    console.log(txtUserNameValue,txtPasswordValue);
    alert(txtUserNameValue+"|"+txtPasswordValue);

    if(txtUserNameValue==userName && txtPasswordValue==password){
        alert("Login success...");
    }else{
        alert("Login failed...");
    }

    let numbers=[10,20,30,40,50,60,70,80,90,100];
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        console.log(numbers[i]);
        sum+=numbers[i];
    }
    console.log("sum of array"+sum);
    console.log(numbers);

    // foreach loop
    let numbersArray=[10,20,30,40,50,60,70,80,90];
    for(let number of numbersArray){
        console.log(number);
    }

    numbersArray.forEach((number) =>{
        console.log(number);
    });
    
    //print something on UI-html code
    //${}
    numbersArray.forEach((number)=>{
        document.write(`<h1>${number}</h1>`);
    });

    let isTrue=10 ==="10";
    //let isTrue=10 =="10";
    console.log(isTrue);
    
    
}
function calc(){
    let number01=Number(document.getElementById("txtNumber01").value);
    let number02=Number(document.getElementById("txtNumber02").value);
    let operator=document.getElementById("operator").value;
    let lblOutput=document.getElementById("lblOutput");

    console.log(number01+","+number02+","+operator);
    lblOutput.innerHTML="| Number01: "+number01+" | Number02: "+number02+" | operator: "+operator;
    
    let result=0;
    if(operator == "+"){
        result=number01+number02;
    }
    if(operator=="-"){
        result=number01-number02;
    }
    if(operator=="/"){
        result=number01/number02;
    }
    if(operator=="*"){
        result=number01*number02;
    }
    alert(result);
}

function calc(){
    let displayText=document.getElementById("displayText").value;
    let lblOutput=document.getElementById("lblOutput");

    let sum=eval(displayText);
    lblOutput.innerHTML(sum);
    alert(sum);
}