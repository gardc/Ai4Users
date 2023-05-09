/**
 * Data for the DataTable component, German translation. Gives the component a list of objects,
 * each object representing one parameter in the DataTable. Each parameter must have: a label, a value, and a an extendedInfo.
 *
 * @param label - The name of the parameter.
 * @param value - A sting showing the value of the parameter.
 * @param extendedInfo - A description of the parameter. This should give the user an explanation of why this parameter is included in the prediction.
 *
 * @example
 * [
 *     {
 *         label: "Age",
 *         value: "46",
 *         extendedInfo:
 *             "Age is relevant for the prediction because older age can lead to more health problems and slower recovery.",
 *     },
 *     {
 *         label: "Gender",
 *         value: "Male",
 *         extendedInfo:
 *             "Gender is relevant for the prediction because different genders have different risk factors, for example which diseases and disorders one is exposed to.",
 *     },
 *     {
 *         label: "Diagnosis",
 *         value: "Stroke",
 *         extendedInfo:
 *             "Diagnosis is relevant for the prediction because the diagnosis can give insight into the person's state of health and ability to work.",
 *     },
 * ]
 */
export const exampleDataDe = [
    {
        label: "Alter",
        value: "46",
        extendedInfo:
            "Ihr Alter ist für die Vorhersage wichtig, denn ein höheres Alter bedeutet in der Regel eine längere Krankheitsdauer.",
    },
    {
        label: "Geschlecht",
        value: "Männlich",
        extendedInfo:
            "Ihr Geschlecht ist ein wichtiger Faktor, wenn es mit Faktoren wie Diagnose und Beruf gepaart ist.",
    },
    {
        label: "Beruf",
        value: "Tischler",
        extendedInfo: "Ihr Beruf ist ein wichtiger Faktor in Verbindung mit der Diagnose.",
    },
    {
        label: "Diagnose",
        value: "Schlaganfall",
        extendedInfo:
            "Die Diagnose, die den Krankenstand verursacht hat, ist einer der wichtigsten Faktoren für die Vorhersage der Dauer des Krankenstands.",
    },
    {
        label: "Datum des Beginns des aktuellen Krankenstands",
        value: "01.03.2023",
        extendedInfo:
            "Das Datum des Beginns Ihres derzeitigen Krankenstands. Kann in Verbindung mit der Diagnose und dem Alter relevant sein.",
    },
    {
        label: "Anzahl früherer Krankmeldungen",
        value: "1",
        extendedInfo:
            "Die Anzahl der früheren Krankenstände ist ein wichtiger Faktor, da dies einen Hinweis auf die Dauer im Vergleich zu anderen Personen mit der gleichen Anzahl von Krankenständen geben kann",
    },
    {
        label: "Datum des Beginns des letzten Krankenstands",
        value: "05.01.2020",
        extendedInfo:
            "Das Datum des Beginns Ihres letzten Krankenstands ist in Verbindung mit dem Enddatum ein wichtiger Faktor, da die Dauer Ihres letzten Krankenstands die Dauer Ihres aktuellen Krankenstands beeinflussen kann.",
    },
    {
        label: "Enddatum des letzten Krankenstands",
        value: "25.03.2020",
        extendedInfo:
            "Das Enddatum Ihres letzten Krankenstands ist zusammen mit dem Anfangsdatum ein relevanter Faktor, da die Dauer Ihres letzten Krankenstands die Dauer Ihres aktuellen Krankenstands beeinflussen kann.",
    },
];
