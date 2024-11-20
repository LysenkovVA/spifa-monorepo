"use client";
import { LoginForm } from "@spifa/ui/features";
import { loginAction } from "../actions/loginAction";
import { useSession } from "../auth";
import { redirect, RedirectType, useRouter } from "next/navigation";
import { User } from "@spifa/database/types";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  if (session?.data?.user?.id) {
    redirect("/companies", RedirectType.replace);
  }

  return (
    <LoginForm
      style={{ width: "30%" }}
      onSubmit={(user: User) => {
        loginAction(user).then(() => {
          router.push("/companies");
        });
      }}
    />
  );
}
