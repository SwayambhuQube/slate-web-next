"use client";
import { createQueryString } from "@/utils/queryString";
import { useRouter } from "next/navigation";

const QA_CLIENT_ID = "7079f5e5754c4471aa01b09e81675335";
const QA_PRODUCT_ID = "e742fd40-86c4-4d65-9b62-9db7f75e365f";
const QA_BASE_URL = "https://account.staging.qube.in/";
export default function Login() {
  const router = useRouter();

  const login = () => {
    const url = `${QA_BASE_URL}dialog/authorize?${createQueryString({
      client_id: QA_CLIENT_ID,
      product_id: QA_PRODUCT_ID,
      redirect_uri: "http://localhost:3000/auth",
      response_type: "token",
    })}`;
    router.push(url);
  };
  return (
    <button
      className="min-h-12 min-w-[310px] text-white bg-[#052f66] p-4 rounded-lg mx-2"
      onClick={login}
    >
      Sign in
    </button>
  );
}
