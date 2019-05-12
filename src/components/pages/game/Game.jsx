import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Api, { Endpoints } from '../../../lib/networking';

class Game extends Component {
  componentDidMount() {
    const { story } = this.props;
    window.addEventListener('message', (event) => {
      if (event.data.name === 'user-story-request') {
        window.frames.game.postMessage({ name: 'user-story', data: story }, '*');
      }
      if (event.data.name === 'level-done') {
        const { gameID, score, time } = event.data;
        this.addUserStory(gameID, score, time);
      }
    });
  }

  addUserStory = async (gameId, score, time) => {
    const { token } = this.props;
    const json = await Api.post(Endpoints.STORIES_ADD, {
      game_id: gameId,
      score,
      time,
    }, {
      Authorization: `Bearer ${token}`,
    });

    if (!json.status) {
      console.warn(json);
    }
  }

  render() {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden',
      }}
      >
        <iframe
          title="game"
          name="game"
          src="http://68.183.223.50:5555/static/game/index.html"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

Game.propTypes = {
  story: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
};

const mapState = ({ user: { user, token } }) => ({
  story: user.story,
  token,
});

export default connect(mapState)(Game);
