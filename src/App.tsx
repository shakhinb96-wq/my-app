import './App.css'

function App() {
  return (
    <>
      <h1>Hello react</h1>

      <div className="bg-red">My bg</div>

      <nav className="container">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App