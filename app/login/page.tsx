import { Suspense } from "react";
import LoginInner from "./LoginInner";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginInner />
    </Suspense>
  );
}