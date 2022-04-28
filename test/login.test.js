import {login} from '../utils/login.js';

it ('Should get login token',async()=>{
        const loginRequest = {
            userName:"bal1903@byui.edu",
            password:"Ab123@"
    }
    const token = await login(loginRequest);
    console.log("Token "+ token)
})