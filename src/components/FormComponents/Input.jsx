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
  classe: PropTypes.string,
  type: PropTypes.string,
  nameId: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  classe: '',
  type: '',
};

export default Input;
