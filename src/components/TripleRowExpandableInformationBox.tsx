import ExpandableInformationBox from "./ExpandableInformationBox";
import { TripleRowExpandableInformationBoxProps } from "./interfaces";

/**
 * Returns HTML code for a triple expandable information box component, organized in a row when
 * screen size is above 1024px. Each expandable box conatins space for initial content and a button.
 * The button opens a new box on top of all other content with additional information.
 * 
 * @param expandableInformationBox1 an Expandable information box component
 * @param expandableInformationBox2 an Expandable information box component
 * @param expandableInformationBox3 an Expandable information box component
 * @returns HTML code for a triple expandable information box organized in a row
 */
const TripleRowExpandableInformationBox: React.FC<TripleRowExpandableInformationBoxProps> = ({
    expandableInformationBox1,
    expandableInformationBox2,
    expandableInformationBox3,
}) => {

    return (
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-10 text-sm">
            <ExpandableInformationBox
                content={expandableInformationBox1.content}
                expandedContentTitle={expandableInformationBox1.expandedContentTitle}
                expandedContent={expandableInformationBox1.expandedContent}
                buttonText={expandableInformationBox1.buttonText}
            />
            <ExpandableInformationBox
                content={expandableInformationBox2.content}
                expandedContentTitle={expandableInformationBox2.expandedContentTitle}
                expandedContent={expandableInformationBox2.expandedContent}
                buttonText={expandableInformationBox2.buttonText}
            />
            <ExpandableInformationBox
                content={expandableInformationBox3.content}
                expandedContentTitle={expandableInformationBox3.expandedContentTitle}
                expandedContent={expandableInformationBox3.expandedContent}
                buttonText={expandableInformationBox3.buttonText}
            />
        </div>
    )
}

export default TripleRowExpandableInformationBox;