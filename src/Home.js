import Inferno from 'inferno'

function HomeWrapper({children}) {
  return (
    <div>
      <h1>Home</h1>
      {children}
    </div>
  )
}

export default HomeWrapper
