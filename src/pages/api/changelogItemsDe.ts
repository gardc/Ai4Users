/**
 * Data for the changelog component, German translation. Gives the component a list of objects,
 * each object containing a date, title, the description of the change, and a link to another page (can
 * be left empty). These objects represent changes, for example to the AI model, that can be
 * displayed by the changelog component.
 *
 * @example
 * [
 *  {
 *      dateOfChange: "12.03.2023",
 *      titleOfChange: "Improved training data for county feature",
 *      changeDescription: "The AI model has been retrained with ...",
 *      readMoreLink: "/Changes12032023",
 *  },
 *  {
 *      dateOfChange: "22.02.2023",
 *      titleOfChange: "Increased training data",
 *      changeDescription: "The AI model now has access to a larger dataset ...",
 *      readMoreLink: "",
 *  },
 * ]
 */
export const changeLogItemsDe = [
    {
        dateOfChange: "12.03.2023",
        titleOfChange: "Verbesserte Trainingsdaten für Bezirksmerkmale",
        changeDescription:
            "Das KI-Modell wurde mit einem vielfältigeren und aktuelleren Datensatz für das Landkreismerkmal neu trainiert. Dies sollte zu genaueren Vorhersagen über die Dauer von Krankschreibungen führen, da das Modell regionale Unterschiede bei den Gesundheitsergebnissen und der medizinischen Praxis besser erfassen kann.",
        readMoreLink: "",
    },
    {
        dateOfChange: "22.02.2023",
        titleOfChange: "Erhöhte Trainingsdaten",
        changeDescription:
            "Das KI-Modell hat nun Zugang zu einem größeren Datensatz mit vielfältigeren Fällen, was seine Genauigkeit bei der Vorhersage der Krankheitsdauer verbessern dürfte.",
        readMoreLink: "",
    },
    {
        dateOfChange: "15.01.2023",
        titleOfChange: "Verbesserte Normalisierungsmethode",
        changeDescription:
            "Wir haben die im KI-Modell verwendete Normalisierungstechnik aktualisiert, um Ausreißer besser zu berücksichtigen und die Fähigkeit zur Behandlung von Nicht-Standardfällen zu verbessern.",
        readMoreLink: "",
    },
    {
        dateOfChange: "30.11.2022",
        titleOfChange: "Neue Eingabefunktion hinzugefügt",
        changeDescription:
            "Wir haben dem KI-Modell eine neue Eingabefunktion hinzugefügt, die den Beruf des Patienten berücksichtigt. Dies sollte die Genauigkeit des Modells bei der Vorhersage der Krankheitsdauer für Personen in bestimmten Berufen verbessern.",
        readMoreLink: "",
    },
];
