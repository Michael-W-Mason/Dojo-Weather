function changeUnit(element){
    let hiTemp = document.querySelectorAll(".body-hi");
    let loTemp = document.querySelectorAll(".body-low");
    //F to C
    if(element.value == "C"){
        for(let i = 0; i < hiTemp.length; i++){
            let temp = hiTemp[i].innerText.slice(0, -1);
            let temp2 = loTemp[i].innerText.slice(0, -1);
            temp = Math.round((temp-32)/1.8);
            temp2 = Math.round((temp2-32)/1.8);
            hiTemp[i].innerText = temp + "°";
            loTemp[i].innerText = temp2 + "°";
        }
    }
    //C to F
    else if(element.value == "F"){
        for(let i = 0; i < hiTemp.length; i++){
            let temp = hiTemp[i].innerText.slice(0, -1);
            let temp2 = loTemp[i].innerText.slice(0, -1);
            temp = Math.round((temp * 1.8) + 32);
            temp2 = Math.round((temp2 * 1.8) + 32);
            hiTemp[i].innerText = temp + "°";
            loTemp[i].innerText = temp2 + "°";
        }
    }
}

function removeCookie(element){;
    console.log(element.parentElement);
    element.parentElement.remove();
}

function alertName(){
    alert("Loading Weather Repoort...")
}