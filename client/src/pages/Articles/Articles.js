import React, { Component } from "react";
// import API from "../../utils/API";
import Title from "../../components/Title";
// import { Wrapper } from "../../components/Wrapper";
import Input from "../../components/Input";
import SearchBtn from "../../components/SearchBtn";
import Article from "../../components/Article";
const API = require ("../../utils/API")


// import Results  from "../../components/Results";
// import Saved from "../../components/Saved";
// import SavedList from "../../components/Saved";



class Articles extends Component {
    state = {
        results: [],
        search: "",
    };

    componentDidMount() {
        this.loadArticles();
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
        if (this.state.topic && this.state.date) {
            API.saveArticle({
                title: this.state.title,
                date: this.state.date,
                url: this.state.url
            })
                .then(res => this.loadArticles())
                .catch(err => console.log(err))
        }
    };

    render() {
        return (
            <div>
                <Title>NYT Search</Title>
                <div>
                        <Input
                            topic={this.state.Topic}
                            beginningYear={this.state.beginningYear}
                            endingYear={this.state.endingYear}>
                            </Input>
                        <SearchBtn>SEARCH</SearchBtn>
                </div>
                <div>
                    <Article></Article>
                    {/* <Results
                        Title={this.Title}
                        Date={this.Date}
                        URL={this.URL}
                    >
                    </Results> */}
                </div>
                <div>
                    {/* <Saved>
                        <SavedList>

                        </SavedList>
                    </Saved> */}
                </div>
            </div>
        )
    }
}
export default Articles;