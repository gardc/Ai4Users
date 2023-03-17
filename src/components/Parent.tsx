import NavBar from "./NavBar";

//Parent is a container component which will include navBar and footer for each page.
const Parent = (props: any) => {
    return (
        <div className="font-sans bg-slate-50">
            <NavBar />
            {props.children}
        </div>
    );
};

export default Parent;
