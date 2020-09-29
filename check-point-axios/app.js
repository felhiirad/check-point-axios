const axios = require('axios')

const france = axios.get("http://api.openweathermap.org/data/2.5/weather?q=france&appid=361577c20d801051eb7378b6a621048c");
const tunis = axios.get("http://api.openweathermap.org/data/2.5/weather?q=tunis&appid=361577c20d801051eb7378b6a621048c");
const berlin = axios.get("http://api.openweathermap.org/data/2.5/weather?q=berlin&appid=361577c20d801051eb7378b6a621048c");

axios
  .all([france, tunis, berlin])
  .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
      console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
    })
  )
  .catch(errors => {
    console.error(errors);
  });