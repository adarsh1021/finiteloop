import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import MenuLinks from '../components/menuLinks'
class Header extends React.Component {
  state = {
    menu: false,
  }

  toggleMenu = () => () => {
    if (this.state.menu)
      this.setState({
        menu: false,
      })
    else
      this.setState({
        menu: true,
      })
  }

  render() {
    const { links, social } = this.props

    return (
      <div id={this.props.id}>
        <nav className="nav" role="navigation">
          <div className="sm:mt-2 sm:ml-4 lg:ml-32">
            <Link to="/">
              <div className="sm:flex md:flex justify-center mb-2">
                <img
                  className="sm:w-3/4 lg:w-auto lg:h-auto"
                  src="/img/finiteloop_logo.png"
                  alt="Logo"
                />
              </div>
              <div className="sm:flex lg:flex justify-center">
                <img
                  className="lg:w-auto"
                  src="/img/finiteloop_logo_text.png"
                  alt="Logo"
                />
              </div>
            </Link>
          </div>
          <div className="sm:max-w-4/5 md:max-w-3/4 mx-auto items-start flex flex-1 mr-24">
            <MenuLinks
              classes="menu-links xl:flex lg:flex sm:hidden md:hidden"
              social={social}
              links={links}
            />
          </div>
          <div className="sm:mx-2 md:px-5 flex lg:hidden">
            <button role="menu" aria-label="Menu" onClick={this.toggleMenu()}>
              <div className="three col">
                <div
                  className={
                    this.state.menu ? 'hamburger is-active' : 'hamburger'
                  }
                  id="hamburger-menu"
                >
                  <span className="line" />
                  <span className="line" />
                  <span className="line" />
                </div>
              </div>
            </button>
          </div>
          <MenuLinks
            classes={
              this.state.menu
                ? 'menu-items is-active flex flex-col lg:hidden'
                : 'menu-items flex-col lg:hidden'
            }
            social={social}
            links={links}
          />
        </nav>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  social: PropTypes.object.isRequired,
}

export default Header
