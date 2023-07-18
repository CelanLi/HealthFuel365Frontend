/*
// set a cookie with cookie name, cookie value, and expire days
export function setCookie(cname, cvalue) {
    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + 86400000);
    // document.cookie = `${cname}=${cvalue}; expires=${expireDate.toUTCString()}; path=/`;
    document.cookie = `login=${cvalue}; expires=${expireDate.toUTCString()}; path=/`;
    console.log("777",document.cookie)
    console.log("888",document.expires)
};
*/

export function setUserCookie(cname, cvalue) {
  const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + 86400000);
    document.cookie = `userLogin=${cvalue}; expires=${expireDate.toUTCString()}; path=/`;
    console.log("777",document.cookie)
    console.log("888",document.expires)
};

export function setAdminCookie(cvalue) {
  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + 86400000);
  document.cookie = `adminLogin=${cvalue}; expires=${expireDate.toUTCString()}; path=/`;
  console.log("777", document.cookie);
  console.log("888", document.expires);
}

// get cookie by name
export function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
};

/*
// not used function
// check cookie
export function checkCookie()
{
  var username=getCookie("username");
  if (username!="")
  {
    alert("Welcome again " + username);
  }
  else 
  {
    username = prompt("Please enter your name:","");
    if (username!="" && username!=null)
    {
      setCookie("username",username,365);
    }
  }
};
*/

//invalidate specific cookie
export function invalidateCookie(cname)
{
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

//invalidate all cookies
export function invalidateAllCookies() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const cookieParts = cookie.split('=');
      const cookieName = cookieParts[0];
      // invalidate cookies by setting the expire time to a past time
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

