import React, { Component } from 'react'
import Comment from './Comment'
import _ from 'lodash'

class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }
    render() {
        const {isOpen} = this.state
        return (
            <div>
                <button onClick={this.toggleOpen}>
                  { isOpen ? 'close list comments' : 'open list comments' }
                </button>
                {this.getBody()}
            </div>
        )
    }
    getBody() {
      if (!this.state.isOpen) return null
      const {comments} = this.props
      return (
        <ul>
            {_.map(comments, comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
      )
    }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
export default CommentList