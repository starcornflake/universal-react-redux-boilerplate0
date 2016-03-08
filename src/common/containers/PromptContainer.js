import React from 'react'
import Prompt from '../components/Prompt'

const contextTypes = {
  router: React.PropTypes.object.isRequired
}

class PromptContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }
  onSubmitUser(e) {
    e.preventDefault()
    this.setState({
      username: ''
    })

    const { playerOne } = this.props.routeParams
    if (playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`)
    }
  }
  onUpdateUser(e) {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <Prompt
        onSubmitUser={(e) => this.onSubmitUser(e)}
        onUpdateUser={(e) => this.onUpdateUser(e)}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
}

PromptContainer.contextTypes = contextTypes

export default PromptContainer
