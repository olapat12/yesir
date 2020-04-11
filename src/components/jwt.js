export const getJwt = ()=>{
    return localStorage.getItem('authToken')
}

export const getUser = ()=>{

    var user = JSON.parse(localStorage.getItem('user'));
    return user
}

 