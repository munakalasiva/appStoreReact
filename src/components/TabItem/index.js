import './index.css'

const TabItem = props => {
  const {eachTab, onClickTabItem, key} = props
  const {tabId, displayText} = eachTab

  const onTabItem = () => {
    onClickTabItem(tabId)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
