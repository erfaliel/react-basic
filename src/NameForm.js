import React, {Component} from "react"

class NameForm extends Component {

    initialState = {
        value: '',
    }
    state = this.initialState
    
    handleChange = (event) => {
      this.setState({value: event.target.value})
    }
  
    handleSubmit= (event) =>{
      alert('Le nom a été soumis : ' + this.state.value)
      event.preventDefault()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  }

export default NameForm