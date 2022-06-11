import React, {Component} from "react"

class MultiForm extends Component {

    initialState = {
        isGoing: true,
        numberOfGuests : 2,
    }

    state = this.initialState

    handleInputChange = (event) => {
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = target.name
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Participe :
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Nombre d'invités :
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

  export default MultiForm