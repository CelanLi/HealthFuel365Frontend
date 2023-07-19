export function setUserCookie(cname, cvalue) {
  const expireDate = new Date();
  // expiration time for the cookie by adding 24 hours
  expireDate.setTime(expireDate.getTime() + 86400000);
  // cookie of user will be named "userLogin"
  document.cookie = `userLogin=${cvalue}; expires=${expireDate.toUTCString()}; path=/`;
};

// function to set an admin cookie with the provided value (adminID)
export function setAdminCookie(cvalue) {
  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + 86400000);
  // cookie of admin will be named "adminLogin"
  document.cookie = `adminLogin=${cvalue}; expires=${expireDate.toUTCString()}; path=/`;
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

//invalidate a specific cookie by its name, can be used to invalidate admin cookie and user cookie indendpentendly
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

