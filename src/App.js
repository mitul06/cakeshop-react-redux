import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store';
import CakeContainer from './components/Cake/CakeContainer';
import IceCreamContainer from './components/IceCream/IceCreamContainer';
import PizzaContainer from './components/Pizza/PizzaContainer';
import Navbar from './components/Navbar/Navbar';
import TotalItems from './components/TotalItem/TotalItems';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <p></p>
        <table>
          <thead>
            <td>
              Cake <hr />
            </td>
            <td>
              IceCream <hr />
            </td>
            <td>
              Pizza <hr />
            </td>
          </thead>

          <tbody>
            <tr>
              <td>
                <CakeContainer />
              </td>
              <td>
                <IceCreamContainer />
              </td>
              <td>
                <PizzaContainer />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <TotalItems />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Provider>
  );
}

export default App;
