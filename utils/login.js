import fetch from 'node-fetch';

const login = async (userName, password) => {
    // get the userName and password and wait for a respons
    

    const options = {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        headers: {'Content-Type':'application/json',
        'Accept':'text'
        }
    };

    const apiResponse = await fetch( 'http://34.86.170.196/login',options);
    const loginResponse = await apiResponse.text();

    return loginResponse;
}

export {login};