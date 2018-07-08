import React, { Component } from "react";
import { ListItem, Results, SaveBtn } from "../../components/Results";
import { Saved, SavedList } from "../../components/Saved";
import { Input, Searchbtn } from "../../components/Search";
import API from "../../utils/API";

class Articles extends Component {
    state = {
        articles: [],
        title: "",
        date: "",
        url: ""
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
            <Wrapper>
                </Wrapper>
        )
    }
}