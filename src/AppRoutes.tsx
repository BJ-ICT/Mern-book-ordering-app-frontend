import Layout from "./layouts/layout";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageBookStorePage from "./pages/ManageBookStorePage";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Home Page */}
            <Route
                path="/"
                element={
                    <Layout showHero>
                        <HomePage />
                    </Layout>
                }
            />

            {/* Authentication Callback */}
            <Route path="/auth-callback" element={<AuthCallbackPage />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                {/* User Profile Page */}
                <Route
                    path="/user-profile"
                    element={
                        <Layout>
                            <UserProfilePage />
                        </Layout>
                    }
                />

                {/* Manage Bookstore Page */}
                <Route
                    path="/manage-bookstore"
                    element={
                        <Layout>
                            <ManageBookStorePage />
                        </Layout>
                    }
                />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
