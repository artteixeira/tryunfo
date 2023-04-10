import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: '0',
    attr2: '0',
    attr3: '0',
    image: '',
    rare: 'normal',
    trunfo: false,
    disableBtn: true,
    savedCards: [],
    hasTrunfo: false,
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
  };

  HasTrunfo = () => {
    const { savedCards: saveCards } = this.state;
    const result = saveCards.some((element) => element.trunfo);
    this.setState({
      hasTrunfo: result,
    });
  };

  SaveCard = () => {
    const { name, description, attr1, attr2,
      attr3, image, trunfo, rare } = this.state;

    const saved = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      trunfo,
      rare,
    };

    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, saved],
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      disableBtn: true,
    }), this.HasTrunfo);
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

  deleteCard = (index) => {
    const { savedCards: saveCards } = this.state;
    const result = saveCards;
    saveCards.splice(index, 1);
    this.setState({
      savedCards: result,
    }, this.HasTrunfo);
  };

  render() {
    const { name, description, attr1, attr2, attr3, nameFilter,
      rareFilter, image, rare, trunfo, disableBtn, hasTrunfo,
      savedCards, trunfoFilter } = this.state;
    return (
      <>
        <main>
          <div className="div-form">
            <h1>ADICIONE NOVA CARTA</h1>
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
              onSaveButtonClick={ this.SaveCard }
              hasTrunfo={ hasTrunfo }
            />
          </div>
          <div className="div-preview">
            <h1>PRÉ-VIZUALICAÇÃO</h1>
            <Card
              classe="preview"
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

        </main>
        <Filter
          nameFilter={ nameFilter }
          rareFilter={ rareFilter }
          trunfoFilter={ trunfoFilter }
          onInputChange={ this.HandleChange }
        />
        { savedCards
          .filter((element) => (element.name.toLowerCase()
            .includes(nameFilter.toLowerCase())))
          .filter((element) => (rareFilter === 'todas' || element.rare === rareFilter))
          .filter((element) => (trunfoFilter ? element.trunfo : true))
          .map((element, index) => (<Card
            key={ index }
            classe="saved"
            cardName={ element.name }
            cardDescription={ element.description }
            cardAttr1={ element.attr1 }
            cardAttr2={ element.attr2 }
            cardAttr3={ element.attr3 }
            cardImage={ element.image }
            cardRare={ element.rare }
            cardTrunfo={ element.trunfo }
            onClickButton={ () => this.deleteCard(index) }
          />)) }
      </>
    );
  }
}

export default App;
