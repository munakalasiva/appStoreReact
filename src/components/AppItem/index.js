import './index.css'

const AppItem = props => {
  const {eachObject, key} = props
  const {appName, imageUrl} = eachObject

  return (
    <li className="card">
      <img src={imageUrl} alt={appName} className="img" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
