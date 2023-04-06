import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <textarea
        className="description"
        data-testid="description-input"
        name="description"
        id="description"
        rows="6"
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
