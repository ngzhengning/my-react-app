import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  renderInfo () {
    let message = 'Please key in your name.'
    if (this.state.value) {
      message = `You have keyed in ${this.state.value}.`
    }

    return (
      <h4>{message}</h4>
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInfo()}
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NameForm