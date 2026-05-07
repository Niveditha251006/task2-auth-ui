function showRegister(){

    document.getElementById("loginForm").style.display="none";
    document.getElementById("registerForm").style.display="block";
    document.getElementById("formTitle").innerText="Register";
}

function showLogin(){

    document.getElementById("registerForm").style.display="none";
    document.getElementById("loginForm").style.display="block";
    document.getElementById("formTitle").innerText="Login";
}

function togglePassword(inputId,icon){

    let input=document.getElementById(inputId);

    if(input.type==="password"){

        input.type="text";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");

    }

    else{

        input.type="password";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");

    }
}

document.getElementById("registerForm").addEventListener("submit",function(e){

    e.preventDefault();

    let password=document.getElementById("regPassword").value;

    let confirmPassword=document.getElementById("confirmPassword").value;

    if(password!==confirmPassword){

        alert("Passwords do not match!");
        return;
    }

    alert("Registration Successful!");
});

document.getElementById("username").addEventListener("keyup",function(){

    let username=this.value;

    let userMsg=document.getElementById("userMsg");

    userMsg.innerHTML="Checking username...";

    setTimeout(()=>{

        if(username.toLowerCase()==="admin"){

            userMsg.innerHTML="Username already exists";
            userMsg.style.color="red";
        }

        else{

            userMsg.innerHTML="Username available";
            userMsg.style.color="green";
        }

    },1000);

});