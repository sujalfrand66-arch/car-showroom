function openLogin(){
    document.getElementById("loginModal").style.display="flex";
}

function openRegister(){
    document.getElementById("registerModal").style.display="flex";
}

function closeModal(){
    document.getElementById("loginModal").style.display="none";
    document.getElementById("registerModal").style.display="none";
}

function register(){
    const email=document.getElementById("regEmail").value;
    const pass=document.getElementById("regPassword").value;

    auth.createUserWithEmailAndPassword(email,pass)
    .then(()=>{
        alert("Account Created!");
        closeModal();
    })
    .catch(err=>alert(err.message));
}

function login(){
    const email=document.getElementById("loginEmail").value;
    const pass=document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email,pass)
    .then(()=>{
        alert("Login Successful!");
        closeModal();
    })
    .catch(err=>alert(err.message));
}

function logout(){
    auth.signOut();
}

auth.onAuthStateChanged(user=>{
    if(user){
        document.getElementById("logoutBtn").style.display="inline-block";
    }else{
        document.getElementById("logoutBtn").style.display="none";
    }
});

function buyCar(car){
    if(auth.currentUser){
        alert("Order placed for "+car);
    }else{
        alert("Login first!");
        openLogin();
    }
}
