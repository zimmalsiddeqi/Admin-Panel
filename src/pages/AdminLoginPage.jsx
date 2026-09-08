import { useState } from "react";
import useAuth from "@hooks/useAuth";
import LoginForm from "@components/forms/LoginForm";
import { ShieldAlert } from "lucide-react";

export default function AdminLoginPage() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      await login(data, { redirectTo: "/" });
    } catch (err) {
      // Error handled by useAuth toast
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-slate-800 p-8 text-white shadow-2xl border border-slate-700">
        <div className="text-center space-y-2">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400">
            <ShieldAlert size={28} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Aliwayz Admin Portal</h1>
          <p className="text-sm text-slate-400">Sign in with your admin credentials to access the panel</p>
        </div>

        <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}

