import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useTab = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab") || "features";

    if (!location.pathname.includes(savedTab)) {
      navigate(savedTab, { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleTabClick = useCallback((tab) => {
    localStorage.setItem("activeTab", tab);
  }, []);

  return { handleTabClick };
};
