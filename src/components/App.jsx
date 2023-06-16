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
   
    const fetchedPic = fetchPictures(this.state.searchImg);
    fetchedPic
      .then(datas => {
        const { hits } = datas.data;
        
        this.setState(prevState => (prevState.searchAr = hits));
      })
      .catch(error => error.text)
      .finally  (this.setState({ loader: true }));

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
    const {loader, searchAr} =this.state
    console.log('state', this.state);
    return (
      <>
        <SearchBar
          handleSabmit={this.handleSabmit}
          handleChange={this.handleChange}
        />
        {loader && <p>Loading...</p>}
          <ImageGallery
            images={searchAr}

        />
      </>
    );
  }
}
