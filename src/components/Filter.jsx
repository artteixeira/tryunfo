import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { nameFilter, rareFilter, onInputChange, trunfoFilter } = this.props;
    return (
      <div>
        <h1>TODAS AS CARTAS</h1>
        <div>
          <span>Filtro de busca</span>
          <input
            disabled={ trunfoFilter }
            data-testid="name-filter"
            type="text"
            name="nameFilter"
            id="nameFilter"
            placeholder="Nome da carta"
            value={ nameFilter }
            onChange={ onInputChange }
          />
          <select
            disabled={ trunfoFilter }
            data-testid="rare-filter"
            id="rareFilter"
            name="rareFilter"
            value={ rareFilter }
            onChange={ onInputChange }
          >
            <option value="todas">todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
          <label htmlFor="trunfoFilter">
            Super Trunfo
            <input
              data-testid="trunfo-filter"
              type="checkbox"
              name="trunfoFilter"
              id="trunfoFilter"
              value={ trunfoFilter }
              onChange={ onInputChange }
            />
          </label>
        </div>

      </div>
    );
  }
}

Filter.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;
