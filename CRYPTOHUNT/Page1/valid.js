function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
   alert("Login Succesful");
   window.open('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vox.com%2F2015%2F4%2F7%2F8360143%2Fdogs-intelligence-science&psig=AOvVaw18i3pg2sY4tRUmDouUn6mH&ust=1643685419396000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD58taD2_UCFQAAAAAdAAAAABAD');
   return false;

}
else
{ 
   alert("Login Fail");
}


}