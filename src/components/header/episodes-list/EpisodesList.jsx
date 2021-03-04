import React from 'react'
import episodesFromJSON from '../../../data/episodes.json'
import EpisodeForm from '../../episode-form/EpisodeForm';
import Episode from '../episode/Episode'

const SEASONS = [1, 2, 3, 4, 5, 6, 7, 8];

class EpisodesList extends React.Component {
  state = {
    episodes: episodesFromJSON,
    season: null,
    search: ''
  }

  switchSeason = (season) => {
    this.setState({ season })
  }

  deleteEpisode = (id) => {
    this.setState((prev) => {
      return {
        episodes: prev.episodes.filter(e => e.id !== id)
      }
    })
  }

  search = (event) => {
    this.setState({ search: event.target.value })
  }

  addEpisode = (episode) => {
    this.setState((prev) => {
      return {
        episodes: [episode, ...prev.episodes]
      }
    })
  }

  render() {
    return (
      <div className="EpisodesList">
        <div className="FilterSeason mb-4">
          <h6>Filter season</h6>

          <div className="btn-group" role="group">
            <button className="btn btn-secondary" onClick={() => this.switchSeason(null)}>Todas</button>

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

        <hr/>

        <EpisodeForm addEpisode={this.addEpisode}/>

        <div className="row">
          {/* when the component state changes, the render method is executed again, so the episodes
          filter will be applied and the result episodes will change! */}
          {this.state.episodes
            .filter(e => this.state.season === null || this.state.season === e.season)
            .filter(e => e.name.toLowerCase().includes(this.state.search.toLowerCase()))
            .map((episode, i) => (
            <div className="col-3 mb-4" key={i}>
              <Episode
                deleteEpisode={this.deleteEpisode}
                episode={episode} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default EpisodesList
