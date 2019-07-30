import React from 'react';
import ProtectedRoute from './ProtectedRoute'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Profile from './components/Profile'

import NavBar from './components/NavBar'

const App = () => (
        <div>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path = '/' component = {LandingPage}/>
            <ProtectedRoute exact path = '/profile' component = {Profile}/>
          </Switch>
        </Router>
  </div>
)


export default App;



// import React from 'react';
// //Rutas
// import { Route, Switch } from 'react-router-dom';
// //Componentes
// import PrimarySearchAppBar from './components/NavBar.js';
// import LandingPage from './components/LandingPage.js';

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <PrimarySearchAppBar />
//         <Switch>
//           <Route exact path='/' component={LandingPage} />
//         </Switch>
//       </div>
      
//     </div>
//   );
// }

// export default App;
