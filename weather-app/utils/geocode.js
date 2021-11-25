const axios=require('axios').default;

const accessTokenWeather='pk.eyJ1IjoidGhha3VybGFrc2hheTIiLCJhIjoiY2twZDBsOWV1MWVxMzJvdDd4c2F1YTJ6ZSJ9.iLK_Fbbh1Ri-SOxmrljG_g';
const geocode= (address,callback)=>{
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${accessTokenWeather}&limit=1`;
    axios.get(url).then((res)=>{
        // console.log(res.data);
        
        if(res.data.features.length=== 0 ){
            callback('Unable to find location. Try another search.', undefined);
        }else{
            callback(undefined,{
                latitude: res.data.features[0].center[0],
                longitude: res.data.features[0].center[1],
                location:res.data.features[0].place_name
            });
        }
    }).catch((err)=>{
        callback('Unable to connect to local services '+ err,undefined);
    });
};

module.exports=geocode;