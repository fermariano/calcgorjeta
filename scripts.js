function calculateTip(event ) {
    event.preventDefault();
    var bill = document.getElementById('bill').value;
    var serviceQual = document.getElementById('serviceQual').value;
    var numOfpeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0) {
    alert('Por favor, preencha os valores.')
    return;
    }

    if(numOfpeople == '' | numOfpeople <= 1) {
        numOfpeople = 1
        document.getElementById('each').style.display = "none"  
    } else {
    document.getElementById('each').style.display = "block"
    }
    

    let result = (bill * serviceQual / numOfpeople)
    result = result.toFixed(2);
    document.getElementById('tip').innerHTML = result;
    document.getElementById('totalTip').style.display = "block";

}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none"; 

document.getElementById('tipsForm').addEventListener('submit', calculateTip);