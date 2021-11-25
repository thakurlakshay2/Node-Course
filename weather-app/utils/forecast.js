const axios=require('axios');

const key='6b576f3a1e704df2b0982552212511';
const forecast=(place,callback)=>{
    const url=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${place}&aqi=no`;
    axios.get(url).then((res)=>{
        if(res.data.length==0){
            callback("Unable to find location ",undefined);
        }
        else{
            callback(undefined,{
                location:res.data.location.region,
                weather:{
                    temp:res.data.current['temp_c']
                }
            })
        }
    }).catch(err=>{
        callback(err,undefined);
    });

}

module.exports=forecast;