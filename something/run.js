
var button = document.querySelector("#button")
var email = document.querySelector("#email")
var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


async function send(email){
    let response = await fetch('https://pushpendrahpx.herokuapp.com/api/test',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email:email,
            source:window.location.href
        })
    });
    let result = await response.json();
    if(result && result.message){
        alert(result.message)
        
        button.disabled = true

        button.style.background = "white"
        button.style.color = "black"
        button.innerHTML = "Subscribed"
    }else{
        alert("Some Error at Server")
    }
}

button.addEventListener("click",(d)=>{
    let check = regex.test(String(email.value))
    if(check === true){
        send(email.value)
    }else{
        alert("Invalid Email")
    }
    
})

document.querySelectorAll("img").forEach(each=>{
    each.setAttribute("draggable","false");
})