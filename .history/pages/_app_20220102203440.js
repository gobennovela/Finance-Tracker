import '../styles/globals.css';
import { GlobalProvider } from '../context/GlobalState';

function MyApp({ Component, pageProps }) {
  return <<Component {...pageProps} />
}

export default MyApp
