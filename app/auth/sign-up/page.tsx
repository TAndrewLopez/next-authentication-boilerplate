import { Button, Input } from "@/components/ui";

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
                <div className="space-y-3">
                    <Input placeholder="name@email.com" />
                    <Button className="w-full">Sign In with Email</Button>
                </div>
                <div className="flex items-center">
                    <div className="bg-neutral-700 h-[1px] w-full" />
                    <p className="flex-1 text-nowrap px-2 uppercase text-muted-foreground text-xs">
                        or continue with
                    </p>
                    <div className="bg-neutral-700 h-[1px] w-full" />
                </div>
                <Button variant="outline">GitHub</Button>
                <p className="max-w-sm text-muted-foreground text-center">
                    By clicking continue, you agree to our Terms of Service and Privacy
                    Policy.
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
