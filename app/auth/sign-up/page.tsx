import { SignUpForm } from "./_components/signUpForm";

interface SignUpPageProps { }

const SignUpPage: React.FC<SignUpPageProps> = ({ }) => {
    return (
        <div className="h-full flex items-center justify-center">
            <div className="flex flex-col gap-y-6">
                <div className="text-center space-y-3">
                    <p className="text-2xl font-semibold">Create an account</p>
                    <p className="text-muted-foreground text-sm">
                        Enter your email below to create your account
                    </p>
                </div>

                <SignUpForm />

                <p className="max-w-sm text-muted-foreground text-center">
                    By submitting your information, you agree to our Terms of Service and
                    Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
