import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './FormComponents/Input';
import TextArea from './FormComponents/TextArea';
import './Form.css';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    const maxValueSum = 210;
    return (
      <form>
        <label htmlFor="name">Nome</label>
        <Input
          datatestid="name-input"
          classe="name"
          type="text"
          nameId="name"
          value={ cardName }
          onChange={ onInputChange }
        />
        <label htmlFor="description">Descrição</label>
        <TextArea value={ cardDescription } onChange={ onInputChange } />
        <label htmlFor="attr1">
          STR:
          <Input
            datatestid="attr1-input"
            classe="attr"
            type="number"
            nameId="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          AGI:
          <Input
            datatestid="attr2-input"
            classe="attr"
            type="number"
            nameId="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          DEX:
          <Input
            datatestid="attr3-input"
            classe="attr"
            type="number"
            nameId="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <p>
          Pontos restantes =
          {' '}
          <span>
            {maxValueSum
            - (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3))}
          </span>
        </p>
        <label htmlFor="image">
          Imagem
          {' '}
          <Input
            datatestid="image-input"
            type="text"
            nameId="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare">Raridade:</label>
        <select
          data-testid="rare-input"
          id="rare"
          name="rare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <div>
          { hasTrunfo
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <label htmlFor="trunfo">
                <Input
                  datatestid="trunfo-input"
                  type="checkbox"
                  nameId="trunfo"
                  value={ cardTrunfo }
                  onChange={ onInputChange }
                />
                {' '}
                Super Trybe Trunfo
              </label>) }
          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
