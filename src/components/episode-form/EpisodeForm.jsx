import React from 'react'

const initial = {
  name: '',
  summary: '',
}

class EpisodeForm extends React.Component {
  state = {
    data: initial
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addEpisode({
      ...this.state.data,
      season: 1,
      number: 0,
      image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
        original: "http://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg"
      },
    })

    this.setState({
      data: initial
    })
  }

  handleChange = (event) => {
    const  { id, value } = event.target

    this.setState((prev) => {
      return {
        data: {
          ...prev.data,
          [id]: value
        }
      }
    })
  }

  render() {
    return (
      <>
      <pre>{JSON.stringify(this.state.data)}</pre>

      <form className="mb-5 mt-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={this.state.data.name}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="summary">Summary</label>
          <input
            type="text"
            className="form-control"
            id="summary"
            placeholder="Enter summary"
            value={this.state.data.summary}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </>
    )
  }
}

export default EpisodeForm
