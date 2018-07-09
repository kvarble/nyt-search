import React, { Component } from "react";
// import API from "../../utils/API";
import Title from "../../components/Title";
import Wrapper from "../../components/Wrapper";
// import Input from "../../components/Input";
import Results from "../../components/Results";

import SearchForm from "../../components/SearchForm";
// import axios from "axios";
// import Article from "../../components/Article";
const API = require("../../utils/API")


// import Saved from "../../components/Saved";
// import SavedList from "../../components/Saved";



class Articles extends Component {
    state = {
        Articles: [],
        search: "",
        results:[],     
        Date: "",
        URL: ""
    };

    componentDidMount() {
        this.loadArticles;
    }



    loadArticles = () => {
        API.getArticles()
            .then(res =>
                this.setState({ articles: res.data, title: "", date: "", url: "" })

            )
            .catch(err => console.log(err));
    };


    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err))
    };

    searchArticles = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err))
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.topic) {
            API.saveArticle({
                title: this.state.title,
                date: this.state.date,
                url: this.state.url
            })
                .then(res => {
                    if (res.data.status === "error") {
                        throw new Error(res.data.message);
                    }
                    this.setState({ results: res.data.message, error: "" });
                })
                .catch(err => this.setState({ error: err.message }));
        };
        this.loadArticles;

    };

    render() {
        return (
            <Wrapper>
                <div>
                    <Title>NYT Search</Title>
                    <div>
                        <SearchForm
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}>
                        </SearchForm>
                        {/* <SearchBtn>SEARCH</SearchBtn> */}
                    </div>
                    <div>
                        <Results
                            Title={this.state.Title}
                            Date={this.state.Date}
                            URL={this.state.URL}
                        >
                        </Results>
                    </div>
                    <div>
                        {/* <Saved>
                        <SavedList>

                        </SavedList>
                    </Saved> */}
                    </div>
                </div>
            </Wrapper>

        )
    }
}
export default Articles;