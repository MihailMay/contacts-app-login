import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { PrivateRoute } from '../Auth/PrivateRoute'; // Без {}
import { PublicRoute } from '../Auth/PublicRoute';   // Без {}
import css from './App.module.css';

const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));

function App() {
  return (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={LoginPage} />}
        />
      </Routes>
    </div>
  );
}

export default App;