import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const InstitutionsPage = React.lazy(() => import("pages/InstitutionsPage"));
const Buisness = React.lazy(() => import("pages/Buisness"));
const Companies = React.lazy(() => import("pages/Companies"));
const Institutions = React.lazy(() => import("pages/Institutions"));
const StudentsDataafterpayment = React.lazy(() =>
  import("pages/StudentsDataafterpayment"),
);
const Payment = React.lazy(() => import("pages/Payment"));
const AfterLogin = React.lazy(() => import("pages/AfterLogin"));
const AdmindashboardOne = React.lazy(() => import("pages/AdmindashboardOne"));
const Admindashboard = React.lazy(() => import("pages/Admindashboard"));
const Login = React.lazy(() => import("pages/Login"));
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const DesktopNine = React.lazy(() => import("pages/DesktopNine"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopnine" element={<DesktopNine />} />
          <Route path="/desktopseven" element={<DesktopSeven />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="/admindashboardone" element={<AdmindashboardOne />} />
          <Route path="/afterlogin" element={<AfterLogin />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/studentsdataafterpayment"
            element={<StudentsDataafterpayment />}
          />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/buisness" element={<Buisness />} />
          <Route path="/institutionspage" element={<InstitutionsPage />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
