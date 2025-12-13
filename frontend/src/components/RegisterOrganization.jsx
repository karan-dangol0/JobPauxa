import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Upload,
  Building2,
  Mail,
  Lock,
  User,
  Phone,
  Globe,
  MapPin,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function RegisterOrganization() {
  const [step, setStep] = useState(1);
  const [logoPreview, setLogoPreview] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      companyLogo: null,
      companyName: "",
      location: "",
      website: "",
      description: "",
    },
  });

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Registration Complete:", data);
    setIsSubmitted(true);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 1MB");
        return;
      }
      setValue("companyLogo", file);
      const reader = new FileReader();
      reader.onloadend = () => setLogoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
          </div>
          <h2 className="mb-4 text-green-600">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your account has been created successfully. Our team will review your KYC information and get back to you shortly.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              setLogoPreview(null);
            }}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Register Another Account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                1
              </div>
              <span className="ml-3 font-medium">Account Details</span>
            </div>
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
              <span className="ml-3 font-medium">KYC Information</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Step 1: Account Details */}
          {step === 1 && (
            <>
              <div>
                <h2 className="text-indigo-600 mb-2">Create Your Account</h2>
                <p className="text-gray-600">Enter your personal information to get started</p>
              </div>

              <div>
                <label htmlFor="fullName" className="block mb-2 text-gray-700">
                  <User className="inline w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  {...register("fullName", { required: "Full name is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Sabin Dangol"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="example@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block mb-2 text-gray-700">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  {...register("phoneNumber", { required: "Phone number is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-gray-700">
                  <Lock className="inline w-4 h-4 mr-2" />
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 8, message: "Password must be at least 8 characters" },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="••••••••"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-gray-700">
                  <Lock className="inline w-4 h-4 mr-2" />
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === password || "Passwords do not match",
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Continue to KYC
              </button>
            </>
          )}

          {/* Step 2: KYC Information */}
          {step === 2 && (
            <>
              <div>
                <h2 className="text-indigo-600 mb-2">Business Verification (KYC)</h2>
                <p className="text-gray-600">Provide your business information for verification</p>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">
                  <Upload className="inline w-4 h-4 mr-2" />
                  Company Logo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
                  <input
                    type="file"
                    id="logo-upload"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer">
                    {logoPreview ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={logoPreview}
                          alt="Logo preview"
                          className="w-32 h-32 object-contain mb-2"
                        />
                        <p className="text-sm text-gray-600">Click to change logo</p>
                      </div>
                    ) : (
                      <div>
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Click to upload company logo</p>
                        <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-700">
                  <Upload className="inline w-4 h-4 mr-2" />
                  Company Registration document
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
                  <input
                    type="file"
                    id="logo-upload"
                    accept="pdf/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer">
                    {logoPreview ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={logoPreview}
                          alt="Logo preview"
                          className="w-32 h-32 object-contain mb-2"
                        />
                        <p className="text-sm text-gray-600">Click to change logo</p>
                      </div>
                    ) : (
                      <div>
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Click to upload your company registration pdf.</p>
                        <p className="text-sm text-gray-400 mt-1">PDF up to 5MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="companyName" className="block mb-2 text-gray-700">
                  <Building2 className="inline w-4 h-4 mr-2" />
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  {...register("companyName", { required: "Company name is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Acme Corporation"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="location" className="block mb-2 text-gray-700">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Business Location
                </label>
                <input
                  id="location"
                  type="text"
                  {...register("location", { required: "Location is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Kathmandu"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="website" className="block mb-2 text-gray-700">
                  <Globe className="inline w-4 h-4 mr-2" />
                  Company Website
                </label>
                <input
                  id="website"
                  type="url"
                  {...register("website", {
                    required: "Website is required",
                    pattern: {
                      value: /^https?:\/\/.+\..+/,
                      message: "Please enter a valid URL",
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="https://www.example.com"
                />
                {errors.website && (
                  <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block mb-2 text-gray-700">
                  <FileText className="inline w-4 h-4 mr-2" />
                  Business Description
                </label>
                <textarea
                  id="description"
                  {...register("description", { required: "Description is required" })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Describe your business, industry, and services..."
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Complete Registration
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
