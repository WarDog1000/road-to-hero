"use client";
import {SessionProvider} from "next-auth/react";
function Providers({children}: {children: React.ReactNode}) {
  return (
    <SessionProvider>
      <div>{children}</div>
    </SessionProvider>
  );
}
export default Providers;