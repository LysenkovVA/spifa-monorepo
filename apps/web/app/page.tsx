"use client";
import { LoginForm } from "@spifa/ui/features";
import { loginAction } from "../actions/loginAction";
import { useSession } from "../auth";
import { redirect, RedirectType, useRouter } from "next/navigation";
import { User } from "@spifa/database/types";
import { AntDApp } from "@spifa/ui/app";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  const { notification } = AntDApp.useApp();

  if (session?.data?.user?.id) {
    redirect("/companies", RedirectType.replace);
  }

  return (
    <LoginForm
      style={{ width: "30%" }}
      onSubmit={(user: User) => {
        const response = loginAction(user).then(
          (onfulfilled) => {
            router.push("/companies");
          },
          (error) => {
            notification.error({
              message: error.message,
              duration: 3,
              closable: false,
              placement: "top",
            });
          },
        );
      }}
    />
  );
}
