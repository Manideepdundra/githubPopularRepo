import './index.css'

const RepositoryItem = props => {
  const {each} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = each
  return (
    <li className="list-card">
      <img src={avatarUrl} alt={name} className="avrimg" />
      <h1>{name}</h1>
      <div className="count-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="sticker"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="count-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="sticker"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="count-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="sticker"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
