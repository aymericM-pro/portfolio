export interface NavItem {
    id: string;
    labelKey: string;
}

export interface ProjectLink {
    type: "code" | "demo" | "deploy";
    url?: string;
}

export interface ProjectTag {
    label?: string;
    labelKey?: string;
    class: "context" | "tech";
}

export interface Project {
    id: string;
    titleKey: string;
    descKey: string;
    tags: ProjectTag[];
    links?: ProjectLink[];
}

export interface SkillTag {
    name: string;
    type: "primary" | "secondary" | "tool";
}

export interface SkillCategory {
    id: string;
    icon: string;
    titleKey: string;
    descriptionKey: string;
    tags: SkillTag[];
}

export interface ContactItem {
    id: string;
    icon: string;
    labelKey: string;
    value: string;
    href?: string;
}
