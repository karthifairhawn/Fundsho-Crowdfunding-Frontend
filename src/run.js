import fetch from 'node-fetch';



var query = "UPDATE users_request set event_image_url='"+""+"' WHERE 1=1";

var arr= [880,881,882,883,885,886,887,889,890,891,892,893,895,896,897,898,899,900,901,902,903,904,905,906,907,908,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,929,930]



for(let i=0;i<arr.length;i++){          
    fetch("https://picsum.photos/550/300",{
        method:'Get',
        headers: {
            'Content-Type': 'application/json',
          },
    }).then(response=>console.log("UPDATE users_request set event_image_url='"+response.url+"' WHERE request_id="+arr[i]+";"))
}




