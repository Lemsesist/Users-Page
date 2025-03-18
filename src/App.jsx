import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import UsersList from './pages/UsersList';
import UserDetails from './pages/UserDetails';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Header />
    <div className="container mx-auto px-4 py-8">
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
