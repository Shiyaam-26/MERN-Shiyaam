function handleLogin()
{
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const error=document.getElementById('error');
    const loginData=[
        {username:"admin",password:"admin"},
        {username:"hello",password:"123"},
        {username:"welcome",password:"123456"},
    ]
    const isValid=loginData.some((user)=>user.username===username && user.password===password)
    if(isValid)
    {
        window.location.href='flexbox.html'
        error.innerText="Login Successful"
    }
    else
    {
        error.innerHTML="Invalid credentials"
    }
}