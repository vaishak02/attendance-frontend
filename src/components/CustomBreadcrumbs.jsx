import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";

// Styled components
const StyledBreadcrumbs = styled(Breadcrumbs)({
  padding: "10px",
  backgroundColor: "#f5f5f5",
  borderRadius: "5px",
  marginBottom: "20px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#1976d2",
  "&:hover": {
    textDecoration: "underline",
  },
});

const CustomBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const isAuth = localStorage.getItem("isAuth") === "true";

  if (!isAuth) {
    return null;
  }

  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={routeTo} color="text.primary">
            {name}
          </Typography>
        ) : (
          <StyledLink key={routeTo} component={RouterLink} to={routeTo}>
            {name}
          </StyledLink>
        );
      })}
    </StyledBreadcrumbs>
  );
};

export default CustomBreadcrumbs;
