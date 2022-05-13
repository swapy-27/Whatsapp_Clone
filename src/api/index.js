import API_URL from '../utils/constant' 
const customFetch =async (url,config)=>{
    const token = window.localStorage.getItem("LOCALSTORAGE_TOKEN_KEY");

    var headers = {
        'content-type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',

    };

    if (token) {
        headers.Authentication = `Bearer ${token}`
    }
    // var config = {
    //     ...customConfig,
    //     headers: {
    //         ...headers,
    //         ...customConfig.headers
    //     }
    // }
    // if (body) {
    //     config.body = getFormBody(body);
    // }
    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (data.success) {
            return {
                data: data.data,
                success: true
            }
        }
        else {
            throw new Error(data.message);
        }
    }
    catch (error) {
        console.log('Error in custom Fetch =>', error);
        return {
            message: error.message,
            success: false
        }

    }

}

export const getRoomsData = ()=>{

}

export const userLogin = (email,password)=>{
    const response = customFetch(API_URL.signIn,{
        method:'POST',
        body:{
            email:email,
            password:password
        }
    })
    return response
}