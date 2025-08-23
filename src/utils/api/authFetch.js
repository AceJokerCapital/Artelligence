export async function authFetch(url, options) {
  const response = await fetch(url, {
    ...options,
    credentials: "include",
  });

  if (response.status === 401) {
    //unauthorized user
    window.location.href = "/login";
    console.log("Authentication failure, rerouting to log in");
    return;
  }

  return response;
}



/* class AuthFetch {
   constructor(baseUrl) {
      this.baseUrl = baseUrl;
   }
   
   async request(endpoint, options = {  }){
      
   }
   
} */