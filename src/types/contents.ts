import {string} from "zod";

export interface Accordion {
    id: string;
    title: string;
    paragraph: string;
}

export interface BlockHeader {
    id: string;
    title: string;
}

export interface Bullets{
    id: string;
    bullets: string[];
}

export interface CodeSnippet {
    id: string;
    fileName: string;
    language: string;
    code: string;
}

export interface Expert {
    id: string;
    name: string;
    role: string;
    company: string;
    imageUrl: string;
}

export interface Infos {
    id: string;
    infos: string[];
}

export interface PagePoster {
    id: string;
    title: string;
    imageUrl: string;
}

export interface Paragraph {
    id: string;
    text: string;
}

export interface Points {
    id: string;
    points: string[];
}

export interface Resource {
    id: string;
    title: string;
    description: string;
    btnTitle: string;
    btnUrl: string;
}

export interface TextCard {
    id: string;
    title: string;
    paragraph: string;
    imageUrl?: string;
}

export interface Video {
    id: string;
    src: string;
}