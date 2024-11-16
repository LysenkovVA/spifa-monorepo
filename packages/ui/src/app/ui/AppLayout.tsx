/*
 * Lysenkov Viktor (c) 2024
 */

// TODO

import { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>The authorized app layout</div>
      {children}
    </div>
  );
};

export default AppLayout;
