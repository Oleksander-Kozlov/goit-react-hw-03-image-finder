
import { fetchPictures } from "./Api/fetchPictures.js";
import { ImageGallery } from "./ImageGallery/ImageGallery.jsx";
import { SearchBar } from "./SearchBar/Searchbar.jsx";
import React, { Component } from 'react';
// import { fetchPictures } from "./Api/fetchPictures.js";
export class App extends Component {
  abortCtrl;
  state = {
    isLoading: false,
    error: null,
    searchAr: [],
    searchImg: '',
    page: 1,
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
      });
    }
    try {
      const { searchImg, page } = this.state;
      this.abortCtrl = new AbortController();
      this.setState({ isLoading: true, error: null });
      const images = await fetchPictures(searchImg, this.abortCtrl, page);
      console.log('images', images);
      this.setState(prevImages => ({
        searchAr: [...prevImages.searchAr, ...images.hits],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentWillUnmount() {
    this.abortCtrl.abort();
  }
  render() {
    const { loader, searchAr } = this.state;
    console.log('state', this.state);
    return (
      <>
        <SearchBar
          handleSabmit={this.handleSabmit}
          handleChange={this.handleChange}
        />
        {loader && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maxime corrupti, veritatis, iusto porro excepturi libero asperiores itaque, veniam beatae laudantium nam dolor. Beatae, mollitia? Repellendus ullam mollitia consequatur voluptatem.</p>}
        <ImageGallery images={searchAr} />
      </>
    );
  }
}
