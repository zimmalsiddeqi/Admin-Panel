import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminGuard from '../guards/AdminGuard';
import AdminLayout from '../layouts/AdminLayout';

import {
  AdminDashboardPage,
  AdminUsersPage,
  AdminStoresPage,
  AdminProductsPage,
  AdminReportsPage,
  AdminLogsPage,
  AdminBroadcastPage,
  AdminFeedbackPage,
  AdminVerificationsPage,
  AdminCategoriesPage,
  AdminLoginPage,
} from './routes';

const router = createBrowserRouter(
  [
    {
      path: '/login',
      element: <AdminLoginPage />,
    },
    {
      element: (
        <AdminGuard>
          <AdminLayout />
        </AdminGuard>
      ),
      children: [
        { path: '/', element: <AdminDashboardPage /> },
        { path: '/users', element: <AdminUsersPage /> },
        { path: '/stores', element: <AdminStoresPage /> },
        { path: '/products', element: <AdminProductsPage /> },
        { path: '/reports', element: <AdminReportsPage /> },
        { path: '/logs', element: <AdminLogsPage /> },
        { path: '/broadcast', element: <AdminBroadcastPage /> },
        { path: '/feedback', element: <AdminFeedbackPage /> },
        { path: '/verifications', element: <AdminVerificationsPage /> },
        { path: '/categories', element: <AdminCategoriesPage /> },
      ],
    },
    {
      path: '*',
      element: (
        <div
          className="flex min-h-screen items-center justify-center"
          style={{ backgroundColor: 'var(--color-bg)' }}
        >
          <div className="space-y-4 text-center">
            <h1 className="text-gradient text-6xl font-bold">404</h1>
            <p style={{ color: 'var(--color-text-secondary)' }}>Admin page not found</p>
            <a href="/" className="btn-brand inline-block rounded-xl px-6 py-2.5">
              Back to Admin Dashboard
            </a>
          </div>
        </div>
      ),
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default function AppRouter() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}

