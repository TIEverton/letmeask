import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContexts';
import AdminRoom from './pages/AdminRoom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import Room from './pages/Room';

import GlobalStyles from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000
          }}
        />
        <GlobalStyles />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
