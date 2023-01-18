
import BookContainer from "./containers/BookContainer";
import WishlistContainer from "./containers/WishlistContainer";
import Search from "./components/Book/Search"
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './modules';
import './App.css';

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk))

  return (
    <Provider store = {store}>
    <div className="App">
      <section className ="search">
      <Search />
      <BookContainer />
      </section>
      <section className = "wishlist">
      <WishlistContainer />
      </section>
  
    </div>
     </Provider>
  );
}

export default App;
