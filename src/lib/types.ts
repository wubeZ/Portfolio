import { ReactNode } from "react";

export interface Project {
    title: string,
    description: string,
    techUsed: string[],
    featured:boolean
    githubLink?: string,
    siteLink?: string
    backgroundImage?:{
        alt: string,
        image: string
      }
}

export interface ProgLanguages {
    programmingLanguages: string[],
    frontend: string[],
    backend: string[],
    database: string[]
}

export interface Social {
    title: string,
    link: string,
    icon: ReactNode
}