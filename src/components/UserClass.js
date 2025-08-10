import React from 'react'
import UserContext from '../utils/UserContext'

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { name, location, contact } = this.props
    return (
      <div className="user-card">
        <h2 className="flex gap-2">
          Login:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <div className="font-bold">{loggedInUser}</div>
            )}
          </UserContext.Consumer>
        </h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    )
  }
}

export default UserClass
