// import { fetchPictures } from 'components/Api/fetchPictures';
import {
  Formik,
   // ErrorMessage
} from 'formik';
import React, { Component } from 'react';
import {
  SearchForm,
  Header,
  BTNSubmit,
  ButtonLabel,
  InputSearch,
  
} from '../SearchBar/Searchbar.styled.js';


import { FcSearch} from 'react-icons/fc';

export class SearchBar extends Component {
  //прописую пропси
  // static Props = {
  //   handleChange,
  //   handleSabmit,
  // };
  //стейт для данних ім"я та номеру
  // state = {
  //   searchImg: 'cat ',
  //   loader: false,
  //   error: null,
  //   searchAr: [],
  //   page: 1
  // };
  // async componentDidMount() {
  //   try {
  //     this.setState({ loader: true });
  //     const fetchedPic = await fetchPictures();
  //     this.setState({ searchAr: fetchedPic });
  //   }
  //   catch(error){}
  // }
  // Слухач інпутів
//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   };
//   // Сабміт форми
//   handleSabmit = e => {
//     //   // Cкидую налаштування
//     e.preventDefault();
//     // Записую значення з імпуту до об"єкту

//     this.setState({ loader: true });
// console.log('e', e);
// console.log('state', this.state);
//     const fetchedPic =  fetchPictures(this.state.searchImg)
//    fetchedPic
//      .then(datas => {
//        const { hits } = datas.data;
//        console.log('Statehits', hits);
//        this.setState(prevState => (prevState.searchAr= hits));
//      })
//      .catch(error => error.text)
//      .finally({ loader: false });

    

//     // Оновлюю інпут
//     this.setState({ searchImg: '' });
//   };

  render() {
    
    return (
      <Header className="searchbar">
        <Formik initialValues={{ searchimg: '' }}>
          <SearchForm onSubmit={this.props.handleSabmit} className="form">
            <BTNSubmit type="submit" className="button">
              <FcSearch value={{ size: '1.5em' }} />
              <ButtonLabel className="button-label">Search</ButtonLabel>
            </BTNSubmit>

            <InputSearch
              className="input"
              name="searchImg"
              type="text"
              autoComplete="off"
              autoFocus
              onChange={this.props.handleChange}
              placeholder="Search images and photos"
            />
            {/* <ErrorMessage name="searchImg" component="div" /> */}
          </SearchForm>
        </Formik>
      </Header>
    );
  }
}
