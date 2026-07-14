import { Navigate } from 'react-router-dom';
import { useAdminAuth } from './AdminAuthContext.jsx';

export default function RequireAdminAuth({ children }) {
  const { authenticated, loading } = useAdminAuth();

  if (loading) {
    return <div className="admin-loading">Yükleniyor…</div>;
  }

  if (!authenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
