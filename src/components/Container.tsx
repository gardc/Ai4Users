import Content from "./Content";
import Footer from "./Footer";

/**
 * A container component which includes a NavBar and Footer for each page.
 *
 * @param props The content to be displayed below the NavBar
 *
 * @returns A parent element with a NavBar as a React functional component.
 */
const Container = (props: any) => {
    return (
        <div className="font-sans bg-zinc min-h-screen flex flex-col">
            <Content className="flex-grow">{props.children}</Content>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Container;
