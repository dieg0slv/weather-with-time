import React, { Component } from 'react';

// Components
import View from './components/View';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reducers
import reducers from './ducks';


// Utils Functions
import { getWeather } from './components/utils';
// Actions
import {
  setActivePlace,
  setForecast,
  toggleLoading
} from './ducks/weather';

class App extends Component {

  constructor(props) {
    super(props);

    this.store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );
  }

  componentDidMount() {
    const standardPlace = 'cassino, rio grande';

    getWeather(standardPlace)
      .then((res) => {
        res.json()
          .then((data) => {
            this.store.dispatch(setActivePlace(standardPlace));
            this.store.dispatch(setForecast(data));
          });
      });
    this.store.dispatch(toggleLoading())
  }

  render() {
    return (
      <Provider store={this.store}>
        <View />
      </Provider>
    );
  }
}


export default App;
