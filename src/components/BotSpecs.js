import React from "react";
import PropTypes from 'prop-types';

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({ bot, onGoBack, onEnlist }) {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt={`Avatar of ${bot.name}`}
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={onGoBack}
              aria-label="Go Back"
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() => onEnlist(bot)}
              aria-label="Enlist Bot"
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

BotSpecs.propTypes = {
  bot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    catchphrase: PropTypes.string.isRequired,
    bot_class: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    damage: PropTypes.number.isRequired,
    armor: PropTypes.number.isRequired
  }).isRequired,
  onGoBack: PropTypes.func.isRequired,
  onEnlist: PropTypes.func.isRequired
};

export default BotSpecs;


