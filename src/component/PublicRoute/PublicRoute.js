import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({ restricted = false, redirectTo = '/', children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};
export default PublicRoute;
