import { SignInForm } from "@/components/auth/signInForm";

interface SignInPageProps {
  searchParams: {
    callbackUrl?: string
  }
}

const SignInPage: React.FC<SignInPageProps> = ({ searchParams }) => {

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-y-6">
        <div className="text-center space-y-3">
          <p className="text-2xl font-semibold">Log into your account</p>
        </div>
        <SignInForm callbackUrl={searchParams.callbackUrl} />
        <p className="max-w-sm text-muted-foreground text-center">
          By submitting your information, you agree to our Terms of Service and
          Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
