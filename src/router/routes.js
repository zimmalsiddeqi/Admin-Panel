import { lazy } from 'react';

// ── Admin Pages ────────────────────────────────────────────────
const AdminDashboardPage     = lazy(() => import('../pages/AdminDashboardPage'));
const AdminUsersPage         = lazy(() => import('../pages/AdminUsersPage'));
const AdminStoresPage        = lazy(() => import('../pages/AdminStoresPage'));
const AdminProductsPage      = lazy(() => import('../pages/AdminProductsPage'));
const AdminReportsPage       = lazy(() => import('../pages/AdminReportsPage'));
const AdminLogsPage          = lazy(() => import('../pages/AdminLogsPage'));
const AdminBroadcastPage     = lazy(() => import('../pages/AdminBroadcastPage'));
const AdminFeedbackPage      = lazy(() => import('../pages/AdminFeedbackPage'));
const AdminVerificationsPage = lazy(() => import('../pages/AdminVerificationsPage'));
const AdminCategoriesPage    = lazy(() => import('../pages/AdminCategoriesPage'));

export {
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
};

