import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin") === "success"; // 로그인 여부 확인

  useEffect(() => {
    if (!isLogin) {
      navigate("/login"); // 로그인 안 되어 있으면 로그인 페이지로 이동
    }
  }, [isLogin, navigate]);

  return <Outlet />; // 자식 라우트 렌더링
}
