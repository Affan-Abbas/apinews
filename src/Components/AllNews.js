import React, { Component } from "react";
import SingleNews from './SingleNews';

class AllNews extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    const url = `https://newsdata.io/api/1/news?apikey=`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.results,
        });
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.news.map((item) => {
        return( 
      <SingleNews key={item.article_id} item={item} />)
    });
  }
  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default AllNews;
