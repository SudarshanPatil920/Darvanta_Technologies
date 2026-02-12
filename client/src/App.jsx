import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { ContactPage } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { AboutPage } from "./pages/About";

// ============ SERVICES PAGES ============
import { WebDevelopmentPage } from "./pages/WebDevelopment";
import { MobileApplicationsPage } from "./pages/MobileApplications";
import { CloudSolutionsPage } from "./pages/CloudSolutions";
import { AIMLPage } from "./pages/AIML";
import { DevOpsPage } from "./pages/DevOps";
import { UIUXPage } from "./pages/UIUX";
import { SaaSProductsPage } from "./pages/SaaSProducts";
import { EnterpriseSoftwarePage } from "./pages/EnterpriseSoftware";

// ============ COMPANY PAGES ============
import { CareersPage } from "./pages/Careers";
import { NewsroomPage } from "./pages/Newsroom";
import { PartnersPage } from "./pages/Partners";
import { BlogPage } from "./pages/Blog";

// ============ LEGAL PAGES ============
import { PrivacyPage } from "./pages/Privacy";
import { TermsPage } from "./pages/Terms";
import { SecurityPage } from "./pages/Security";
import { CompliancePage } from "./pages/Compliance";
import { SitemapPage } from "./pages/Sitemap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      // Main Pages
      { index: true, element: <Home /> },
      { path: "services", element: <ServicesPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      
      // ============ SERVICES ROUTES ============
      { path: "web-development", element: <WebDevelopmentPage /> },
      { path: "mobile-applications", element: <MobileApplicationsPage /> },
      { path: "cloud-solutions", element: <CloudSolutionsPage /> },
      { path: "ai-ml", element: <AIMLPage /> },
      { path: "devops", element: <DevOpsPage /> },
      { path: "ui-ux", element: <UIUXPage /> },
      { path: "saas-products", element: <SaaSProductsPage /> },
      { path: "enterprise-software", element: <EnterpriseSoftwarePage /> },
      
      // ============ COMPANY ROUTES ============
      { path: "careers", element: <CareersPage /> },
      { path: "newsroom", element: <NewsroomPage /> },
      { path: "partners", element: <PartnersPage /> },
      { path: "blog", element: <BlogPage /> },
      
      // ============ LEGAL ROUTES ============
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "security", element: <SecurityPage /> },
      { path: "compliance", element: <CompliancePage /> },
      { path: "sitemap", element: <SitemapPage /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 5000,
            style: {
              background: '#0A5C4E',
            },
            icon: '✅',
          },
          error: {
            duration: 5000,
            style: {
              background: '#DC2626',
            },
            icon: '❌',
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}