import Link from "next/link";

interface ButtonProps {
  title: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ title, href }) => {
  return (
    <button className="bg-custom-orange py-2.5 px-6 lg:py-4 lg:px-8 text-sm sm:text-lg text-white tracking-wider font-lato font-bold rounded">
      <Link href={href}>{title}</Link>
    </button>
  );
};

export default Button;
