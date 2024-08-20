import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, classButton,
      cardAttr3, cardImage, cardRare, cardTrunfo, classe, onClickButton } = this.props;
    return (
      <div className={ classe }>

        <p className="name-card" data-testid="name-card">{ cardName }</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p
          className="description-card"
          data-testid="description-card"
        >
          { cardDescription }
        </p>
        <p data-testid="attr1-card">{ `STR: ${cardAttr1}` }</p>
        <p data-testid="attr2-card">{ `AGI: ${cardAttr2}` }</p>
        <p data-testid="attr3-card">{ `DEX: ${cardAttr3}` }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : true }
        { classe !== 'preview'
          ? (
            <button
              className={ classButton }
              data-testid="delete-button"
              onClick={ onClickButton }
            >
              Excluir
            </button>)
          : true}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  classe: PropTypes.string.isRequired,
  onClickButton: PropTypes.func,
  classButton: PropTypes.number,
};

Card.defaultProps = {
  classButton: undefined,
  onClickButton: undefined,
};

export default Card;
