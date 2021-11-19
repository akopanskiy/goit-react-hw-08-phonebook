import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';

import Container from './component/Container';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';
import { authOperations } from './redux/auth';

const HomePage = lazy(
  () => import('./view/HomeView') /* webpackChunkName: "home-view" */,
);
const LoginPage = lazy(
  () => import('./view/LoginView') /* webpackChunkName: "login-view" */,
);
const RegisterPage = lazy(
  () => import('./view/RegisterView') /* webpackChunkName: "register-view" */,
);
const ContactsPage = lazy(
  () => import('./view/ContactsView') /* webpackChunkName: "contacts-view" */,
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route
            path="/login"
            element={<PublicRoute restricted redirectTo="/contacts" />}
          >
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route
            path="/register"
            element={<PublicRoute restricted redirectTo="/contacts" />}
          >
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route path="/contacts" element={<PrivateRoute redirectTo="/" />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
