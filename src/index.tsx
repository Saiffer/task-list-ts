import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bulma/css/bulma.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import App from './App';
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

