import {Component} from 'react'
import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {isLoaded: true, list: [], language: languageFiltersData[0].id}

  componentDidMount() {
    this.getLanguages()
  }

  onChangeLanguage = id => {
    this.setState({language: id}, this.getLanguages)
  }

  getLanguages = async () => {
    const {language} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${language}`
    this.setState({isLoaded: true})
    const response = await fetch(url)
    const data = await response.json()

    const modifiedData = data.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))

    if (response.ok === true) {
      this.setState({list: modifiedData, isLoaded: false})
    }
    console.log(data)
    console.log(language)
  }

  render() {
    const {list, isLoaded} = this.state
    return (
      <div className="bgContainer">
        <h1>Popular</h1>
        <ul className="languages-card">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              each={each}
              key={each.id}
              onChangeLanguage={this.onChangeLanguage}
            />
          ))}
        </ul>
        {isLoaded ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="languages-list-card">
            {list.map(each => (
              <RepositoryItem each={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
