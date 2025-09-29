export type ValidStates =
    "En curso" |
    "Completado"


export interface Education {
    id: number,
    institutionName: string,
    careerName: string
    institutionLogo: string,
    grade: string,
    years: number,
    hours: number,
    planEstudio: object,
    planEstudioPDF: string,
    state: ValidStates,
    startedAt: string
}