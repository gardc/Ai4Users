/**
 * Data for the DataTable component, Norwegian translation. Gives the component a list of objects,
 * each object representing one parameter in the DataTable. Each parameter must have: a label, a value, and a an extendedInfo.
 *
 * @param label - The name of the parameter.
 * @param value - A string showing the value of the parameter.
 * @param extendedInfo - A description of the parameter. This should give the user an explanation of why this parameter is included in the prediction.
 *
 * @example
 * [
 *     {
 *         label: "Alder",
 *         value: "46",
 *         extendedInfo:
 *             "Alder er relevant for prediksjonen fordi høyere alder kan medføre flere helseproblemer og tregere restituering.",
 *     },
 *     {
 *         label: "Kjønn",
 *         value: "Mann",
 *         extendedInfo:
 *             "Kjønn er relevant for prediksjonen fordi forskjellige kjønn har ulike risikofaktorer, eksempelvis hvilke sykdommer og lidelser man er utsatt for. ",
 *     },
 *     {
 *         label: "Diagnose",
 *         value: "Hjerneslag",
 *         extendedInfo:
 *             "Diagnose er relevant for prediksjonen fordi diagnosen kan gi innblikk i vedkommendes helsetilstand og arbeidsevne.",
 *     },
 * ]
 */

export const exampleDataNo = [
    {
        label: "Alder",
        value: "46",
        extendedInfo:
            "Alder er relevant for prediksjonen fordi høyere alder kan medføre flere helseproblemer og tregere restituering.",
    },
    {
        label: "Kjønn",
        value: "Mann",
        extendedInfo:
            "Kjønn er relevant for prediksjonen fordi forskjellige kjønn har ulike risikofaktorer, eksempelvis hvilke sykdommer og lidelser man er utsatt for. ",
    },
    {
        label: "Yrke",
        value: "Snekker",
        extendedInfo:
            "Yrke er relevant for prediksjonen fordi forskjellige yrker har ulike faktorer som påvirker risikoen for sykefravær, eksempelvis arbeidsmengde, skaderisiko, fysisk krevende arbeid eller mentalt krevende arbeid.",
    },
    {
        label: "Diagnose",
        value: "Hjerneslag",
        extendedInfo:
            "Diagnose er relevant for prediksjonen fordi diagnosen kan gi innblikk i vedkommendes helsetilstand og arbeidsevne.",
    },
    {
        label: "Startdato for nåværende sykefravær",
        value: "01.03.2023",
        extendedInfo:
            "Nåværende sykefraværs startdato er relevant for prediksjonen fordi hittil lengde på nåværende sykefravær kan gi innblikk i resterende varighet.",
    },
    {
        label: "Antall tidligere sykefravær",
        value: "1",
        extendedInfo:
            "Antall tidligere sykefravær er relevant for prediksjonen fordi det kan gi en indikasjon på sannsynligheten for at vedkommende vil ha fravær i fremtiden. ",
    },
    {
        label: "Startdato for forrige sykefravær",
        value: "05.01.2020",
        extendedInfo:
            "Startdato for forrige sykefravær er relevant for prediksjonen fordi i kombinasjon med sluttdatoen finner vi lengden på forrige sykefravær. Personer trenger gjerne et lengre fravær gangen etter.",
    },
    {
        label: "Sluttdato for forrige sykefravær",
        value: "25.03.2020",
        extendedInfo:
            "Sluttdato for forrige sykefravær er relevant for prediksjonen fordi i kombinasjon med startdatoen finner vi lengden på forrige sykefravær. Personer trenger gjerne et lengre fravær gangen etter.",
    },
];
