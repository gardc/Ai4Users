/**
 * Interface for the input props for InformationDropBox component.
 *
 * Contains:
 *
 * title: string, initialInfo: string | JSX.Element, extendedInfo: string | JSX.Element
 */
export interface InformationDropdownBoxProps {
    title: string
    initialInfo: string | JSX.Element
    extendedInfo: string | JSX.Element
}

/**
 * Interface for the input props for ExpandableInformationBox component.
 *
 * Contains:
 *
 * content: string | JSX.Element, expandedContentTitle: string,
 * expandedContent: string | JSX.Element, buttonText: string
 */
export interface ExpandableInformationBoxProps {
    content: string | JSX.Element
    expandedContentTitle: string
    expandedContent: string | JSX.Element
    buttonText: string
}
