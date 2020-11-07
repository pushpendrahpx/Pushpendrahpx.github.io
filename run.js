async function send(email){
    let response = await fetch('https://pushpendrahpx.herokuapp.com/api/test',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email:'pushujd@fmksiofd',
            source:window.location.href
        })
    });
    let result = await response.json();
    if(result && result.message){
        alert(result.message)
        window.location.reload()
    }
}
var button = document.querySelector("#button")
var email = document.querySelector("#email")
var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
button.addEventListener("click",(d)=>{
    let check = regex.test(String(email.value))
    if(check === true){
        send(email.value)
    }else{
        alert("Invalid Email")
    }
    
})
