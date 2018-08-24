import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

    renderComments = () => {
        return this.props.comments.map(comment => {
            return <li className="list-group-item mb-2 p-3" key={comment}>{comment}</li>
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <ul className="list-group">
                        {this.renderComments()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)
