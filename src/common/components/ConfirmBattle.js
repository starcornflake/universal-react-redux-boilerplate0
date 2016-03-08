import React from 'react'
import { Link } from 'react-router'

const propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  onInitiateBattle: React.PropTypes.func.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
}

function ConfirmBattle({isLoading, playersInfo, onInitiateBattle}) {
  return isLoading === true
    ? <div>loading..</div>
    : <div>
        <h1>Confirm players</h1>
        <p>{playersInfo[0].blog}</p>
        <p>{playersInfo[1].blog}</p>
      </div>
}

ConfirmBattle.propTypes = propTypes

export default ConfirmBattle
