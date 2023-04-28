/**
 * Data for the changelog component, Norwegian translation. Gives the component a list of objects,
 * each object containing a date, title, the text of the change, and a link to another page (can
 * be left empty). These objects represent changes, for example to the AI model, that can be
 * displayed by the changelog component.
 *
 * @example
 * [
 *  {
 *      dateOfChange: "12.03.2023",
 *      titleOfChange: "Forbedret treningsdata for fylkes-faktor",
 *      change: "KI-modellen har blitt trent på nytt med ...",
 *      readMoreLink: "/Changes12032023",
 *  },
 *  {
 *      dateOfChange: "22.02.2023",
 *      titleOfChange: "Økt mengde treningsdata",
 *      change: "KI-modellen har nå tilgang til et større datasett ...",
 *      readMoreLink: "",
 *  },
 * ]
 */
export const changeLogItemsNo = [
    {
        dateOfChange: "12.03.2023",
        titleOfChange: "Forbedret treningsdata for fylkes-faktor",
        change: "KI-modellen har blitt trent på nytt med et mer variert og oppdatert datasett for fylke-faktoren. Dette bør resultere i mer nøyaktige prediksjoner om sykefraværets varighet, ettersom modellen bedre kan fange regionale forskjeller i helseutfall og medisinske praksiser.",
        readMoreLink: "",
    },
    {
        dateOfChange: "22.02.2023",
        titleOfChange: "Økt mengde treningsdata",
        change: "KI-modellen har nå tilgang til et større datasett med flere varierte tilfeller, noe som bør forbedre nøyaktigheten i å predikere sykefraværets varighet.",
        readMoreLink: "",
    },
    {
        dateOfChange: "15.01.2023",
        titleOfChange: "Forbedret normaliseringsteknikk",
        change: "Vi har oppdatert normaliseringsteknikken som brukes i KI-modellen for å forbedre dens evne til å håndtere uvanlige tilfeller.",
        readMoreLink: "",
    },
    {
        dateOfChange: "30.11.2022",
        titleOfChange: "Lagt til ny faktor",
        change: "Vi har lagt til en ny faktor i KI-modellen, som tar hensyn til pasientens yrke. Dette bør forbedre modellens nøyaktighet i å predikere sykefraværets varighet for enkeltpersoner i bestemte yrker.",
        readMoreLink: "",
    },
];
