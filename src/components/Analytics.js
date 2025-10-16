import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TRACKING_ID = "G-7R741YLGY4";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {

    const getDeviceType = () => {
      const ua = navigator.userAgent;
      if (/mobile/i.test(ua)) return "Mobile";
      if (/tablet/i.test(ua)) return "Tablet";
      return "Desktop";
    };

    ReactGA.initialize(TRACKING_ID);

    // Track pageview
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });

    // Track device type
    ReactGA.event({
      category: "User Info",
      action: "Device Type",
      label: getDeviceType(),
    });

    // Track approximate location
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        ReactGA.event({
          category: "User Info",
          action: "User Location",
          label: `${data.city}, ${data.country_name}`,
        });
      })
      .catch(() => {});

  }, [location]);

  return null;
}

export default AnalyticsTracker;
