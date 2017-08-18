// Lesson 40
import React, { Component } from 'react';
import { connect } from 'react-redux'; //Glue between react and redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                        {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// Takes the needed piece of app state and maps it into inner props
// This will make that, whenever global state changes, this component will
// rerender the list of books.
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the BookList
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Connect takes a function and component and creates a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
