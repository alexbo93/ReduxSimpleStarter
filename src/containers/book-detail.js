import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        // The initial state of the application won't have any book selected.
        // This is to avoid empty object breaking app
        if(!this.props.book) {
            return <div>Select a book to get started</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

// With this method we are mapping the global state to the current containers
// Now we can access to the active book object inside the global state
function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail)
