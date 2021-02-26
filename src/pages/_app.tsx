import { ChallengesProvider } from '../contexts/ChallengesContext'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
        <Component {...pageProps} />
    </ChallengesProvider>
    
  )
}

export default MyApp