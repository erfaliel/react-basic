import React, {Component} from "react"
import Table from "./Table"
import Form from "./Form"
import NameForm from "./NameForm"
import MultiForm from "./MultiForm"

class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const {characters} = this.state
    console.log("you have deleted :", characters[index].name) //just for my debug

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index  // retourne tous les indices sauf celui qui match (donc le retire)
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const {characters} = this.state

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <NameForm />
        <MultiForm />
      </div>
    )
  }
}

export default App