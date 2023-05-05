import Content from "./Content";
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
        <div className="font-sans bg-zinc min-h-screen flex flex-col">
            <Content className="flex-grow">{props.children}</Content>
        </div>
    );
};

export default Container;
