import { BrowserRouter, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContexts';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import GlobalStyles from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
        <GlobalStyles />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
