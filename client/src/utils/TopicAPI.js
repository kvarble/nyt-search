// const axios = require("axios");
// const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// const APIKEY = "&api-key=920b87c0829746bc88a1a507e4c2b20d";

// const NYT = {
//     queryAPI: function(topic, beginningYear, endingYear){
//         if (beginningYear) {
//             APIKEY + topic + "&begin_date" + beginningYear + "0101";
//         }
//         if (endingYear) {
//             APIKEY + topic + "&end_date" + endingYear + "2018";
//         }

//         return axios.get(BASEURL + APIKEY + topic).then(function(response){
//             if (response.data.response.docs.length > 0) {
//                 const responses = [];
//                 for (let i = 0; i < 5; i++) {
//                     const returns = response.data.response.docs[i];
//                     const ArticleID = doc._id;
//                     const article = {
//                         title: returns.headline.main,
//                         url: returns.web.url,
//                         date: returns.pub_date.split('T')[0],
//                         ArticleID: ArticleID
//                     };
//                     responses.push(article);
//                 }
//                 return responses;
//             } else {
//                 return false
//             }
//         })
//     },

//     get
// }