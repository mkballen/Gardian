import fetch from 'node-fetch';
import assert, { doesNotMatch } from 'assert';
//import { response } from 'express';

it ('Should get hello', async ()=>{
    const response = await fetch('http://34.86.170.196');
    const text = await response.text();
    assert.equal(text,"Hello");
})
