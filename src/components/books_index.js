import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../actions';

class BooksIndex extends Component {
	componentDidMouth(){
		this.props.fetchBooks();
	}

	render(){
		return (
			<div>
				<h3>Books</h3>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchBooks})(BooksIndex);