import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../actions';

class CommentBox extends Component {
    state = { comment: '' }

    handleChange = event => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();


        this.props.SaveComment(this.state.comment);

        this.setState({ comment: '' })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form className="form-group p-3" onSubmit={this.handleSubmit}>
                        <h4>Add your comment :)</h4>
                        <textarea className="form-control p-3" onChange={this.handleChange} value={this.state.comment} />
                        <div>
                            <button className="btn btn-dark mt-2">Submit Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, Actions)(CommentBox);