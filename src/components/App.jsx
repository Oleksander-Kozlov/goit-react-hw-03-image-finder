import { fetchPictures } from "./Api/fetchPictures.js";
import { ImageGallery } from "./ImageGallery/ImageGallery.jsx";
import { SearchBar } from "./SearchBar/Searchbar.jsx";
import React, { Component } from 'react';
// import { fetchPictures } from "./Api/fetchPictures.js";
export class App extends Component {
  state = {
    isLoading: false,
    error: null,
    searchAr: [],
    searchImg: '',
  };
  // Слухач інпутів
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  // Сабміт форми
  handleSabmit = e => {
    //   // Cкидую налаштування
    e.preventDefault();
    // Записую значення з імпуту до об"єкту

    this.setState({ loader: true });
    console.log('e', e);
    console.log('state', this.state);
    const fetchedPic = fetchPictures(this.state.searchImg);
    fetchedPic
      .then(datas => {
        const { hits } = datas.data;
        console.log('Statehits', hits);
        this.setState(prevState => (prevState.searchAr = hits));
      })
      .catch(error => error.text)
      .finally({ loader: false });

    // Оновлюю інпут
    this.setState({ searchImg: '' });
  };
  // async componentDidMount() {
  //   this.setState({ isLoading: true });

  //   try {
  //     const images = fetchPictures();
  //     this.setState({ images });
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }
  render() {
    console.log('state', this.state);
    return (
      <>
        <SearchBar
          handleSabmit={this.handleSabmit}
          handleChange={this.handleChange}
        />
        <ImageGallery
          images={this.state.searchAr}
        />
      </>
    );
  }
}
