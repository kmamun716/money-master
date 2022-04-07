//calculate income and expense
document.getElementById("calculate").addEventListener("click", function(){
    const income = floatConvertion("income");
    const food = floatConvertion("food");
    const rent = floatConvertion("rent");
    const clothes = floatConvertion("clothes");
    if((income>0 && food>0)&&(rent>0 && clothes>0)){
        display("positive-input-warning", false);
        const totalExpense = food+rent+clothes;
        if(totalExpense>income){
            display("over-expense", true);
        }else{
            display("over-expense", false);
            getInnerText("total-expence", totalExpense);
            document.getElementById("balance").innerText= income-totalExpense;
        }        
    } else {
        display("positive-input-warning", true);
    }
});

//calculate percentage and savings
document.getElementById("save-btn").addEventListener("click", function(){
    const income = floatConvertion("income");
    const percentage = floatConvertion("save-input");
    if(income>0 && percentage>0){
        display("positive-savings-warning", false);
        const savings = income * percentage / 100;
        getInnerText("saving-amount", savings);

        const prevBalance = parseFloat(document.getElementById("balance").innerText);
        if(savings>prevBalance){
            display("fund-warning", true);
        } else {
            display("fund-warning", false);
            document.getElementById("remaining-balance").innerText = prevBalance - savings;
        }
        
    } else {
        display("positive-savings-warning", true);
    }
});

//text convert to float
function floatConvertion(id){
    const parseData = parseFloat(document.getElementById(id).value);
    return parseData;
};

//get text
function getInnerText(id, value){
  return document.getElementById(id).innerText = value;
};

//display item
function display(id, isShown){
    if(isShown){
        document.getElementById(id).style.display="block";
    } else {
        document.getElementById(id).style.display="none";
    }
}