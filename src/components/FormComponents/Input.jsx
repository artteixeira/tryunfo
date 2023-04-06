import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { classe, type, nameId, datatestid, value, onChange } = this.props;
    if (type === 'checkbox') {
      return (
        <input
          data-testid={ datatestid }
          className={ classe }
          type={ type }
          name={ nameId }
          id={ nameId }
          checked={ value }
          onChange={ onChange }
        />
      );
    }
    return (
      <input
        data-testid={ datatestid }
        className={ classe }
        type={ type }
        name={ nameId }
        id={ nameId }
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

Input.propTypes = {
  classe: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nameId: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
