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
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const RegisterJobSeeker = () => {
  const [formData, setFormData] = useState({
    name: "", 
    email: "",
    password: "",
    confirmPassword: "", 

  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_USER_AUTH}/register`,
        formData,
      );
      console.log(response);
      
      if (!response.data.success) {
        toast.error(response.data.message, { id: 1 });
      }
      console.log(response);
    } catch (error) {
      toast.error(error.message, { id: 1 });
      console.log(error);
    }
  };
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Register to apply for jobs</CardTitle>
        <CardDescription>
          Enter your email below to register to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Login</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
     
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>

              <Input
                id="name"
                type="text"
                placeholder="Karan dangol"
                onChange={handleChange}
                name="name"
                value={formData.name}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                onChange={handleChange}
                name="email"
                value={formData.email}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
               
              </div>
              <Input
                id="password"
                type="password"
                onChange={handleChange}
                name="password"
                value={formData.password}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirm Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="confirmPassword"
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                value={formData.confirmPassword}
                required
              />
            </div>
          </div>

      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white"
          onClicki={handleSubmit}
        >
          Register
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterJobSeeker;
