import {
    Accordion,
    BlockHeader,
    Bullets,
    CodeSnippet,
    Expert,
    Infos,
    PagePoster,
    Paragraph,
    Points,
    Resource, TextCard, Video
} from "./contents";

export type CourseComponentData =
    | { type: 'Accordion'; props: Accordion }
    | { type: 'BlockHeader'; props: BlockHeader }
    | { type: 'Bullets'; props: Bullets }
    | { type: 'CodeSnippet'; props: CodeSnippet }
    | { type: 'Expert'; props: Expert }
    | { type: 'Infos'; props: Infos }
    | { type: 'PagePoster'; props: PagePoster }
    | { type: 'Paragraph'; props: Paragraph }
    | { type: 'Points'; props: Points }
    | { type: 'Resource'; props: Resource }
    | { type: 'TextCard'; props: TextCard }
    | { type: 'Video'; props: Video }
;