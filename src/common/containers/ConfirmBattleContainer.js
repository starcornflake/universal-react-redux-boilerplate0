import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import { getPlayersInfo } from '../utils/githubHelpers'

const contextTypes = {
  router: React.PropTypes.object.isRequired
}

class ConfirmBattleContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      playersInfo: [],
    }
  }
  // async componentWillMount() {
  //   const players = await getPlayersInfo(['bumpysounds', 'bumpysounds'])
  //   console.log(players)
  // }
  async componentDidMount() {
    const { query } = this.props.location

    // TODO: if query's playerOne or playerTwo is empty, redirect to PromptContainer.
    try {
      const players = await getPlayersInfo([query.playerOne, query.playerTwo])
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    } catch (err) {
      console.log('Error in ConfirmBattleContainer:', err)
    }
  }
  onInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={() => this.onInitiateBattle()}
        playersInfo={this.state.playersInfo}
      />
    )
  }
}

ConfirmBattleContainer.contextTypes = contextTypes

export default ConfirmBattleContainer
