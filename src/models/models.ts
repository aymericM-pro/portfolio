export interface NavItem {
    id: string;
    labelKey: string;
}

export interface ProjectTag {
    label?: string;
    labelKey?: string;
    class: string;
}

export interface Project {
    id: string;
    emoji: string;
    titleKey: string;
    descKey: string;
    tags: ProjectTag[];
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
