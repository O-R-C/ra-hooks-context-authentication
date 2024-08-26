import AuthProvider from './components/AuthProvider/AuthProvider'
import NetoSocial from './components/NetoSocial/NetoSocial'

function App() {
  return (
    <div className='app'>
      <AuthProvider>
        <NetoSocial />
      </AuthProvider>
    </div>
  )
}

export default App
