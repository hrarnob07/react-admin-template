import AuthApi from "../api/AuthApi";

import Axios from 'axios';

export const login = async ($credential) => {
    const loginResponse = await AuthApi.login($credential);

    await loginEvent(loginResponse);
    Axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem("_token");

    if(loginResponse.data.success === true && localStorage.getItem("_token") !== undefined)
    {
        var userInformation = JSON.parse(localStorage.getItem("user"));

        if(userInformation.role !== 'admin'){

            localStorage.removeItem("_token");
            localStorage.removeItem("user");
            alert("IDまたはパスワードが正しくありません");
            window.location.href = "/admin/login";
        }
        else{
            window.location.href = "/";
        }
    }
};

export const loginMobile = async ($credential) => {
    const loginResponse = await AuthApi.login($credential);

    await loginEvent(loginResponse);
    Axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem("_token");

    if(loginResponse.data.success === true && localStorage.getItem("_token") !== undefined)
    {
        var userInformation = JSON.parse(localStorage.getItem("user"));

        if(userInformation.role !== 'admin'){

            if (navigator.platform.indexOf("iPhone") !== -1 ||
                navigator.platform.indexOf("iPad") !== -1 ||
                navigator.platform.indexOf("iPod") !== -1 ||
                navigator.userAgent.match("Android"))
            {
               window.location.href = "/";
            }
            else{
                window.location.href = "/";
            }
        }
        else{
            localStorage.removeItem("_token");
            localStorage.removeItem("user");
            window.location.href = "/login";
            // return false;
        }
    }
};

export const register = async ($credential) => await AuthApi.register($credential);

export const userIdUniqueCheck = async ($credential) => await AuthApi.userIdUniqueCheck($credential);


export const postcreate = async ($credential) => {
    const registerResponse = await AuthApi.postcreate($credential);

    console.log(registerResponse);
    return registerResponse;


};

export const logout = () => {

};

const loginEvent = loginResponse => {
    localStorage.setItem('_token', loginResponse.data.token);
    localStorage.setItem('user', JSON.stringify(loginResponse.data.data.user));
    let user=JSON.parse(localStorage.getItem('user'));
    localStorage.setItem('uid', user.uid);
    localStorage.setItem('password', user.password);

    const Cryptr = require('cryptr');
    const cryptr = new Cryptr('myTotalySecretKey');

    const encryptedString = cryptr.encrypt(JSON.stringify(loginResponse.data.data.user));
    localStorage.setItem('trendinfo.com', encryptedString);



    Axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem("_token");

}
