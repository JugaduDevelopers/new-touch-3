import { memo } from "react";
import Li from "./li";

function LgNav() {
  return (
    <nav className="hidden md:block ">
      <ul className="flex gap-12  justify-center items-center">
        <Li />
      </ul>
    </nav>
  );
}

export default memo(LgNav);
