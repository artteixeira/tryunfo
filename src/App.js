import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: '',
    attr2: '',
    attr3: '',
    image: '',
    rare: '',
    trunfo: false,
    disableBtn: true,
  };

  disableBtn = () => {
    const maxValueAttr = 90;
    const maxValueSum = 210;
    const { name, description, attr1, attr2, attr3, image } = this.state;

    const valText = name.length > 0
    && description.length > 0
    && image.length > 0;

    const valNumber = Number(attr1) >= 0 && Number(attr1) <= maxValueAttr
    && Number(attr2) >= 0 && Number(attr2) <= maxValueAttr
    && Number(attr3) >= 0 && Number(attr3) <= maxValueAttr
    && Number(attr1) + Number(attr2) + Number(attr3) <= maxValueSum;

    console.log(Number(attr1) >= 0);
    this.setState({
      disableBtn: !(valNumber && valText),
    });
  };

  HandleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.disableBtn);
  };

  render() {
    const { name, description, attr1, attr2, attr3,
      image, rare, trunfo, disableBtn } = this.state;
    return (
      <div>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.HandleChange }
          isSaveButtonDisabled={ disableBtn }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
