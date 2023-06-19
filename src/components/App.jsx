import React, { Component } from 'react';

import  Loader  from './Loader/Loader.jsx';
import { Notify } from 'notiflix';
import { BTNLoadMore } from './Button/Button.jsx';
import { fetchPictures } from './Api/fetchPictures.js';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { SearchBar } from './SearchBar/Searchbar.jsx';
import { ErMessage } from './SearchBar/ErMessage.jsx';

// import { fetchPictures } from "./Api/fetchPictures.js";
export class App extends Component {
  abortCtrl;
  state = {
    isLoading: false,
    error: null,
    searchAr: [],
    searchImg: '',
    page: 1,
    isShow: false,
  };
  // Слухач інпутів
  // handleChange = ({ target }) => {
  //   this.setState({ [target.name]: target.value });
  // };
  // Сабміт форми
  handleSabmit = input => {
    console.log(input);

    this.setState({ searchImg: input });
  };
  appStyle = {
    display: 'flex',
        flexDirection: 'column',
      justifyContent: 'center',
    alignItems: "stretch",
    fontSize: 40,
    color: '#010101',
  };

  // Записую значення з імпуту до об"єкту
  // this.setState({ loader: true });

  // const fetchedPic = fetchPictures(this.state.searchImg);
  // fetchedPic
  //   .then(datas => {
  //     const { hits } = datas.data;

  //     this.setState(prevState => (prevState.searchAr = hits));
  //   })
  //   .catch(error => error.text)
  //   .finally  (this.setState({ loader: true }));

  //   try {
  //     this.setState({ loader: true });
  //     const fetchedPic = fetchPictures(this.state.searchImg);
  //     // fetchedPic();

  //     console.log('fetch', fetchedPic);
  //     fetchedPic
  //       const { hits } = fetchedPic.data;
  //       this.setState(prevState => (prevState.searchAr = hits));
  //     }
  //   } catch (error) {  }
  //   finally  {(this.setState({ loader: false }))};

  //   // Оновлюю інпут
  //   this.setState({ searchImg: '' });
  // };
  async componentDidUpdate(_, nextState) {
    if (
      this.state.searchImg === nextState.searchImg &&
      this.state.page === nextState.page
    ) {
      return;
    }
    if (this.state.searchImg !== nextState.searchImg) {
      this.setState({
        searchAr: [],
        page: 1,
        isShow: false,
      });
    }
    try {
      const { searchImg, page } = this.state;
      this.abortCtrl = new AbortController();
      this.setState({ isLoading: true, error: null });
      const images = await fetchPictures(searchImg, this.abortCtrl, page);
      console.log('images', images.hits.length);
      this.setState(prevImages => ({
        searchAr: [...prevImages.searchAr, ...images.hits],
        isShow: true,
        

      }), () => {
        if (page !== 1)
          window.scrollBy({
            top: 280 * 3,
            behavior: 'smooth',
          });
      });
      
      if (images.hits.length < 12) {
        // observer.unobserve(target);
        this.setState({
          isShow: false,
        });
        Notify.failure(
          "Sorry, that is all results."
        );
      }
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        // this.handleChangeState('error');
        this.setState({
          error: 'Somethink! Please reloading the page.',
        });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentWillUnmount() {
    this.abortCtrl.abort();
  }

  newFetchImages = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  // onChange = () => {
  //   this.state.page;
  // }
  render() {
    const { isLoading, searchAr, isShow, error } = this.state;
    console.log('loader', isLoading);
    return (
      <div style={this.appStyle}>
        <SearchBar
          handleSabmit={this.handleSabmit}
          handleChange={this.handleChange}
        />
        {
          isLoading
          // true
          && <Loader />}
        {error && <ErMessage>{error}</ErMessage>}
        <ImageGallery images={searchAr} />
        {isShow && <BTNLoadMore onChange={this.newFetchImages} />}
      </div>
    );
  }
}
