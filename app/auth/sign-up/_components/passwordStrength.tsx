import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
    passLength: number;
    strength: number;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({
    passLength,
    strength,
}) => {
    console.log({ strength })
    return (
        <div
            className={cn(
                "absolute bottom-[1.5px] h-0.5 ",
                strength === 0 && passLength > 0 && "bg-red-500 w-1/4",
                strength === 1 && "bg-orange-500 w-1/2",
                strength === 2 && "bg-yellow-500 w-3/4",
                strength === 3 && "bg-green-500 w-[calc(100%-10px)] left-1/2 -translate-x-1/2"
            )}
        />
    );
};
