import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions';

class BooksNew extends Component {

	render(){
		return (
			<div>show the list of books here</div>
		)
	}
}

function mapStateToProps(state){
	return { books: state.books };
}

export default connect(mapStateToProps, {fetchBooks})(BooksNew)