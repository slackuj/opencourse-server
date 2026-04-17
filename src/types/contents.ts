export interface Accordion {
    id: string; // ObjectId
    title: string;
    paragraph: string;
}

export interface BlockHeader {
    id: string; // ObjectId
    title: string;
}

export interface Bullets{
    id: string; // ObjectId
    bullets: string[];
}

export interface CodeSnippet {
    id: string; // ObjectId
    fileName: string;
    language: string;
    code: string;
}

export interface Expert {
    id: string; // ObjectId
    name: string;
    role: string;
    company: string;
    imageUrl: string;
}

export interface Infos {
    id: string; // ObjectId
    infos: string[];
}

export interface PagePoster {
    id: string; // ObjectId
    title: string;
    imageUrl: string;
}

export interface Paragraph {
    id: string; // ObjectId
    text: string;
}

export interface Points {
    id: string; // ObjectId
    points: string[];
}

export interface Resource {
    id: string; // ObjectId
    title: string;
    description: string;
    btnTitle: string;
    btnUrl: string;
}

export interface TextCard {
    id: string; // ObjectId
    title: string;
    paragraph: string;
    imageUrl?: string;
}

export interface Video {
    id: string; // ObjectId
    src: string;
}