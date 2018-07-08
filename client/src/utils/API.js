import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "&api-key=920b87c0829746bc88a1a507e4c2b20d";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    },
    getArticles: function () {
        return axios.get("/api/articles");
    },
    getArticle: function (id) {
        return axios.get("/api/articles/" + id);
    },
    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },
    saveArticle: function (articleData) {
        return axios.post("/api/articles", articleData);
    }
};