import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Clear error for this field when user starts typing
    if (errors[e.target.id]) {
      setErrors({
        ...errors,
        [e.target.id]: "",
        general: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({
      email: "",
      password: "",
      general: "",
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_USER_AUTH}/login`,
        {
          email: formData.email,
          password: formData.password,
        },
      );

      // Handle successful login
      console.log("Login successful:", response.data);

      // Store token if provided
      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }

      // Redirect or update state as needed
      // window.location.href = "/dashboard";
      toast.success("Logged in", {id: 1});
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (err) {
      console.error("Login error:", err);

      // Handle different types of errors
      if (err.response?.data?.errors) {
        // Field-specific errors from backend
        const backendErrors = err.response.data.errors;
        setErrors({
          email: backendErrors.email || "",
          password: backendErrors.password || "",
          general: backendErrors.general || "",
        });
      } else if (err.response?.data?.field) {
        // Single field error
        const field = err.response.data.field;
        const message = err.response.data.message;
        setErrors({
          email: field === "email" ? message : "",
          password: field === "password" ? message : "",
          general: field === "general" ? message : "",
        });
      } else {
        // General error
        setErrors({
          email: "",
          password: "",
          general:
            err.response?.data?.message ||
            "Login failed. Please check your credentials and try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm my-20">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Register</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            {errors.general && (
              <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded text-sm">
                {errors.general}
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className={
                  errors.email
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : ""
                }
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={loading}
                className={
                  errors.password
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : ""
                }
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
        <Button variant="outline" className="w-full" disabled={loading}>
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;