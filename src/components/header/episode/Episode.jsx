function Episode(props) {
  const { episode, deleteEpisode } = props

  return (
    <div className="Episode card">
      <a href="/episodes/4952">
        <img src={episode.image.medium} className="card-img-top" alt="..."/>
      </a>
    
      <div className="card-body">
        <h5 className="card-title">
          {episode.name}
        </h5>
        <h6 className="card-title">
          S{episode.season} E{episode.number}
        </h6>
        <p className="card-text">
          {episode.summary}
        </p>

        <button
          className="btn btn-danger"
          onClick={() => deleteEpisode(episode.id)}
        >Delete</button>
      </div>
    </div>
  )
}

export default Episode
