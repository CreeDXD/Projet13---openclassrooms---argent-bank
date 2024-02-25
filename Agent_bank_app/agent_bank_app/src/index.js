import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './pages/App';
import SignIn from './pages/SignIn';
import User from './pages/User';
import { Provider } from 'react-redux';
import store from './redux/store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <React.StrictMode>
      <Provider store={store}>
        <Router basename="/">      
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/user" element={<User />} />
            <Route path="*" element={<SignIn />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
