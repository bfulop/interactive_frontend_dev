import Inferno from 'inferno'

const runat = new Date().toLocaleString()

function HomeWrapper ({children}) {
  return (
    <div>
      <h1>Homes11</h1>
      <h3>{runat}</h3>
      {children}
    </div>
  )
}

export default HomeWrapper
