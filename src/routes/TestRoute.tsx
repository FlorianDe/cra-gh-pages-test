import React from "react";
import { Link } from "react-router-dom";

export const TestRoute: React.FC = () => {
  return (
    <div>
      <p>This is another Route</p>
      <Link to="/">
        Go back to home.
      </Link>
    </div>
  );
};
