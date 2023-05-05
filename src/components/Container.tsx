import Content from "./Content";
import Footer from "./Footer";
import NavBar from "./NavBar";

/**
 * A container component which includes a NavBar for each page.
 *
 * @param props The content to be displayed below the NavBar
 *
 * @returns A parent element with a NavBar as a React functional component.
 */
const Container = (props: any) => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-zinc">
            <Content className="flex-grow">{props.children}</Content>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Container;
