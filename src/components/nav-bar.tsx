import { Link } from "react-router-dom";

import { ModeToggle } from "@/components/ui/mode-toggle";

export const NavBar = () => {
  return (
    <header className="border-b sticky top-0 backdrop-blur">
      <div className="container py-2 flex items-center justify-between">
        <div className="font-bold">
          <Link to="/">code-runner</Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
