import Link from "next/link";

/**
 * Interface for the Page object
 *
 * @param title - The title of the page
 * @param titleCompressed - A compressed version of the title, used for smaller screen sizes to avoid collisions.
 * @param href - A link to the page. Can be empty if the link should be disabled.
 * @param currentPage - A boolean for if the page is the current one, i.e. whether this page is the same as the page where the component is used.
 */
interface Page {
    title: string;
    titleCompressed: string;
    href: string;
    currentPage: boolean;
}

/**
 * A list of objects representing the pages to be displayed in the progress bar
 *
 * @param Pages - An array containing objects representing the pages that will be displayed. Each page needs a title, a compressed title, an href link to hte page, a boolean determining if this is the current page.
 */
interface ProgressBarProps {
    pages: Page[];
}

/**
 * A component for displaying a progress bar indicating how far a user is in the process of
 * navigating through the website.
 *
 * @param pages - An array containing objects representing the pages that will be displayed. Each page needs a title, a compressed title, an href link to hte page, a boolean determining if this is the current page.
 *
 * @component
 * @example
 * pages = [
 *  {
 *      title: "Home",
 *      titleCompressed: "Home",
 *      href: "/LandingPage",
 *      currentPage: false,
 *  },
 *  {
 *      title: "Use of data",
 *      titleCompressed: "Data",
 *      href: "",
 *      currentPage: true,
 *  },
 * ]
 * Usage <ProgressBar pages={pages} />
 */
const ProgressBar = ({ pages }: ProgressBarProps) => {
    return (
        <div className="flex justify-start py-5 pl-4 sm:pl-8 text-black">
            {pages.map(
                (page, index) =>
                    (page.href.length > 0 && (
                        <div className="flex text-xs lg:text-sm" key={page.title}>
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
                        <div className="flex text-xs lg:text-sm" key={page.title}>
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
                        <div className="flex text-xs lg:text-sm" key={page.title}>
                            <p className="text-darkgray hidden sm:block px-2">{page.title}</p>
                            <p className="text-darkgray block sm:hidden px-2">
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
