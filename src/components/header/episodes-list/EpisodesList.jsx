import React from 'react'
import episodes from '../../../data/episodes.json'
import Episode from '../episode/Episode'

const SEASONS = [1, 2, 3, 4, 5, 6, 7, 8];

class EpisodesList extends React.Component {
  state = {
    season: null,
    search: ''
  }

  switchSeason = (season) => {
    this.setState({ season })
  }

  search = (event) => {
    // extract the input search value from the event.target
    const search = event.target.value

    this.setState({ search })
  }

  render() {
    return (
      <div className="EpisodesList">
        <div className="FilterSeason mb-4">
          <h6>Filter season</h6>

          <div className="btn-group" role="group">
            <button className="btn btn-secondary">Todas</button>

            {SEASONS.map(season => (
              <button key={season} className="btn btn-secondary" onClick={() => this.switchSeason(season)}>
                S0{season}
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          className="form-control mb-4"
          name="searchText"
          autoComplete="off"
          onChange={this.search}
          placeholder="Search"
        />

        <div className="row">
          {/* when the component state changes, the render method is executed again, so the episodes
          filter will be applied and the result episodes will change! */}
          {episodes
            .filter(e => this.state.season === null || e.season === this.state.season)
            .filter(e => e.name.toLowerCase().includes(this.state.search.toLowerCase()))
            .map((episode, i) => (
            <div className="col-3 mb-4" key={i}>
              <Episode episode={episode} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default EpisodesList
