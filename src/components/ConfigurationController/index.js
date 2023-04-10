// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="layout-container">
          <h1>Layout</h1>
          <input
            id="content"
            type="checkbox"
            checked={showContent}
            onChange={onChangeContent}
          />
          <label htmlFor="content">Content</label>
          <input
            id="leftNav"
            type="checkbox"
            checked={showLeftNavbar}
            onChange={onChangeLeftNavbar}
          />
          <label htmlFor="leftNav">Left Navbar</label>
          <input
            id="rightNav"
            type="checkbox"
            checked={showRightNavbar}
            onChange={onChangeRightNavbar}
          />
          <label htmlFor="rightNav">Right Navbar</label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
