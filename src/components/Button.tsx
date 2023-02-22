import Link from "next/link";

interface ButtonProps {
    title: string;
    path: string;
}
const Button: React.FC<ButtonProps> = ({ title, path }) => {
    return (
        <div className="m-2 py-3 bg-black hover:bg-neutral-800 w-32 rounded-lg">
            <button className="text-center text-white font-normal Sans">
                <Link className="text-center" href={path}>
                    {title}
                </Link>
            </button>
        </div>
    );
};

export default Button;
