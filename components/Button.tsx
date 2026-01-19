import Link from "next/link";

interface ButtonProps {
  title: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ title, href }) => {
  return (
    <button>
      <Link
        href={href}
        className="bg-custom-orange py-2.5 px-6 lg:py-4 lg:px-8 text-sm lg:text-lg text-white tracking-wider font-lato font-bold hover:bg-transparent hover:text-custom-orange hover:border hover:border-custom-orange transition-all duration-500 ease-in-out"
      >
        {title}
      </Link>
    </button>
  );
};

export default Button;
