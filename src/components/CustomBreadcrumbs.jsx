import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const CustomBreadcrumbs = () => {
  const routes = [
    { path: "/", breadcrumbName: "Home" },
    { path: "/students", breadcrumbName: "Students" },
    { path: "/attendance", breadcrumbName: "Attendance" },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href={route.path}>
                {route.breadcrumbName}
              </Link>
              <Typography color="text.primary">
                {route.breadcrumbName}
              </Typography>
            </Breadcrumbs>
          }
        />
      ))}
    </Routes>
  );
};

export default CustomBreadcrumbs;
