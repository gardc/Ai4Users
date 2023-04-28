import Link from "next/link";

interface ProgressBarProps {
    pages: {
        title: string;
        titleCompressed: string;
        href: string;
        currentPage: boolean;
    }[];
}

const ProgressBar = ({ pages }: ProgressBarProps) => {
    return (
        <div className="flex justify-start py-5 pl-4 sm:pl-8 text-black">
            {pages.map(
                (page, index) =>
                    (page.href.length > 0 && (
                        <div className="flex text-xs lg:text-sm">
                            <Link className="hover:font-bold hidden sm:block px-2" href={page.href}>
                                {page.title}
                            </Link>
                            <Link className="hover:font-bold block sm:hidden px-2" href={page.href}>
                                {page.titleCompressed}
                            </Link>
                            {index != pages.length - 1 && ">"}
                        </div>
                    )) ||
                    (page.currentPage && (
                        <div className="flex text-xs lg:text-sm">
                            <p className="font-bold hidden sm:block underline underline-offset-4 text-black px-2">
                                {page.title}
                            </p>
                            <p className="font-bold block sm:hidden underline underline-offset-4 text-black px-2">
                                {page.titleCompressed}
                            </p>
                            {index != pages.length - 1 && ">"}
                        </div>
                    )) ||
                    (!page.currentPage && page.href.length === 0 && (
                        <div className="flex text-xs lg:text-sm">
                            <p className="text-gray-500 hidden sm:block px-2">{page.title}</p>
                            <p className="text-gray-500 block sm:hidden px-2">
                                {page.titleCompressed}
                            </p>
                            {index != pages.length - 1 && ">"}
                        </div>
                    ))
            )}
        </div>
    );
};

export default ProgressBar;
