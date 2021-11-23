// console.log('Starting');
// setTimeout(()=> {
//     console.log('2 Sec timer');
// },2000);

// setTimeout(()=> {
//     console.log('0 Sec timer');
// },0);

// console.log('Ending');

const request= require('postman-request');
const axios=require('axios').default;
const url='http://api.weatherstack.com/current?access_key=cbdac987ad38caec593d3780faf69266&query=37.8267,-122.4233&units=f';
const accessTokenWeather='pk.eyJ1IjoidGhha3VybGFrc2hheTIiLCJhIjoiY2twZDBsOWV1MWVxMzJvdDd4c2F1YTJ6ZSJ9.iLK_Fbbh1Ri-SOxmrljG_g';
const url2=`https://api.mapbox.com/geocoding/v5/mapbox.places/Delhi.json?access_token=${accessTokenWeather}&limit=1`
// request({url:url},(err,res)=>{
//     // debugger
//     //  console.log(res);
//     const data=JSON.parse(res.body);
//     console.log(data.current);
// });

// axios.get(url).then((res)=>{
//     // debugger
//     //  console.dir(res.data);
//        const data=res.data.current;
//        console.log("Current- Temperature is " + data.temperature);
// }).catch((err)=>{
//     console.log('error damn '+ err);
// })


axios.get(url2).then((res)=>{
    // debugger
    const lat=res.data.features[0].center[0];
    const long=res.data.features[0].center[1];
     console.dir(res.data.features[0].place_name + " lat -" + lat+" long- "+long);
    //    const data=res.data.current;
    //    console.log("Current- Temperature is " + data.temperature);
}).catch((err)=>{
    console.log('error damn '+ err);
})


// data 

let data = [1,2,3,4,5];

let axios1 = new Promise((resolve, rej) => {
    ///n condition 
    // resolve // reject

    resolve(data);
});
axios1.then(data => {
    console.log(data);
})


