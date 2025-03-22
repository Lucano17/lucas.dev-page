import { Techs } from "./projects.interface";

export interface Certificate {
    id: number
    title: string,
    techsLearned: Techs[],
    description: string,
    image: string[],
    certificateURL: string,
    certificateNumber: string,
}