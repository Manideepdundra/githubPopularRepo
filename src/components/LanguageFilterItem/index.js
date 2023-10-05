import './index.css'

const LanguageFilterItem = props => {
  const {each, onChangeLanguage} = props
  const {id, language} = each
  const changeLanguage = () => {
    onChangeLanguage(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={changeLanguage}>
        <p>{language}</p>
      </button>
    </li>
  )
}

export default LanguageFilterItem
