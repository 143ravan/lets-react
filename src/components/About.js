import UserClass from './UserClass'

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our application.</p>
      <div className="flex gap-8">
        <UserClass
          name={'John Doe Class'}
          location={'Los Angeles'}
          contact={'987-654-3210'}
        />
      </div>
    </div>
  )
}

export default About
