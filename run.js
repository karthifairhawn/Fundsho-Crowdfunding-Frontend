import fetch from 'node-fetch'; 
fetch("http://google.com")

var query = "UPDATE users_request set event_image_url='"+""+"' WHERE 1=1";

var values="1	880 2	881 3	882 4	883 5	885 6	886 7	887 8	888 9	889 10	890 11	891 12	892 13	893 14	895 15	896 16	897 17	898 18	899 19	900 20	901 21	902 22	903 23	904 24	905 25	906 26	907 27	908 28	910 29	911 30	912 31	913 32	914 33	915 34	916 35	917 36	918 37	919 38	920 39	921 40	922 41	923 42	924 43	925 44	926 45	927 46	929 47	930"

values= values.split("	");

// for(let i=2;i<47;i++){      
//     var query = "UPDATE users_request set event_image_url='"+getURL()+"' WHERE request_id="+values[i].split(" ")[0];
//     console.log(query);
// }




