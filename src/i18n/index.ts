import { createI18n } from "vue-i18n";

const messages = {
    fr: {
        nav: {
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            contact: "Contact",
            downloadCV: "Télécharger CV",
        },
        hero: {
            title: "Développeur",
            titleHighlight: "Fullstack",
            subtitle: "Spécialisé en Java & Angular",
            cta: "Voir mes projets",
        },
        about: {
            title: "À propos",
            jobTitle: "Software Engineer Fullstack",
            description:
                "Diplômé de l'EFREI, développeur passionné avec 2 ans d'expérience en Java & Angular. Deux stages d'un an chez ICPF, puis expériences chez Harvest et au Luxembourg.",
            badges: {
                graduate: "Diplômé EFREI",
                experience: "2 ans d'expérience",
                international: "Expérience internationale",
            },
            passions: {
                title: "Mes passions",
                code: {
                    title: "Code",
                    description: "Propre & performant",
                },
                craft: {
                    title: "Craft",
                    description: "Art du développement",
                },
                nocode: {
                    title: "No-Code",
                    description: "Automatisation",
                },
                devops: {
                    title: "DevOps",
                    description: "Déploiement continu",
                },
            },
        },
        skills: {
            title: "Compétences",
            frontend: {
                title: "Frontend",
                description: "Interfaces utilisateur modernes et réactives",
            },
            backend: {
                title: "Backend",
                description: "APIs robustes et architectures scalables",
            },
            devops: {
                title: "DevOps",
                description: "Déploiement et infrastructure moderne",
            },
        },
        projects: {
            title: "Projets",
            greencircle: {
                title: "GreenCircle",
                description:
                    "Plateforme mettant en relation les entreprises du BTP avec les centres de revalorisation pour faciliter la transition des déchets.",
                tags: {
                    entrepreneurial: "Projet entrepreneurial",
                },
            },
            perseus: {
                title: "Perseus",
                description:
                    "Programme CNES d'amélioration du module vidéo de fusée pour analyser le comportement au décollage (720p → 1080p).",
                tags: {
                    study: "Projet de fin d'étude",
                    team: "Équipe de 5",
                },
            },
            noe: {
                title: "Noé",
                description:
                    "Application de digitalisation complète du processus d'audit, de la demande de certification à l'émission du certificat.",
                tags: {
                    team: "Équipe de 20",
                },
            },
            actions: {
                view: "Voir",
                code: "Code",
            },
        },
        contact: {
            title: "Travaillons ensemble",
            subtitle:
                "Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider.",
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub",
        },
        footer: {
            copyright: "© 2024 Aymeric Maillot. Développeur Fullstack Java & Angular.",
        },
        aboutPage: {
            title: "Détails techniques",
            subtitle:
                "Découvrez les technologies et outils que j'utilise pour créer des applications exceptionnelles",
            backButton: "← Retour",
            technologies: {
                java: {
                    title: "Java & Spring",
                    description:
                        "Framework robuste pour le développement backend avec Spring Boot, JPA et sécurité intégrée",
                },
                angular: {
                    title: "Angular & TypeScript",
                    description:
                        "Framework frontend moderne avec TypeScript pour des applications SPA performantes et maintenables",
                },
                database: {
                    title: "Bases de données",
                    description:
                        "PostgreSQL, MySQL et Redis pour la persistance et la mise en cache des données",
                },
                docker: {
                    title: "Docker & DevOps",
                    description:
                        "Containerisation et déploiement automatisé avec Docker, Kubernetes et CI/CD",
                },
                cloud: {
                    title: "Cloud & Infrastructure",
                    description:
                        "DigitalOcean, Terraform et Helm pour l'infrastructure as code et le déploiement Kubernetes",
                },
                tools: {
                    title: "Outils & Tests",
                    description:
                        "JUnit, Jest, Git, Maven/Gradle pour un développement de qualité et collaboratif",
                },
            },
        },
    },
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            downloadCV: "Download CV",
        },
        hero: {
            title: "Fullstack",
            titleHighlight: "Developer",
            subtitle: "Specialized in Java & Angular",
            cta: "View my projects",
        },
        about: {
            title: "About",
            jobTitle: "Fullstack Software Engineer",
            description:
                "EFREI graduate, passionate developer with 2 years of experience in Java & Angular. Two one-year internships at ICPF, then experiences at Harvest and in Luxembourg.",
            badges: {
                graduate: "EFREI Graduate",
                experience: "2 years experience",
                international: "International experience",
            },
            passions: {
                title: "My passions",
                code: {
                    title: "Code",
                    description: "Clean & performant",
                },
                craft: {
                    title: "Craft",
                    description: "Art of development",
                },
                nocode: {
                    title: "No-Code",
                    description: "Automation",
                },
                devops: {
                    title: "DevOps",
                    description: "Continuous deployment",
                },
            },
        },
        skills: {
            title: "Skills",
            frontend: {
                title: "Frontend",
                description: "Modern and responsive user interfaces",
            },
            backend: {
                title: "Backend",
                description: "Robust APIs and scalable architectures",
            },
            devops: {
                title: "DevOps",
                description: "Modern deployment and infrastructure",
            },
        },
        projects: {
            title: "Projects",
            greencircle: {
                title: "GreenCircle",
                description:
                    "Platform connecting construction companies with recycling centers to facilitate waste transition.",
                tags: {
                    entrepreneurial: "Entrepreneurial project",
                },
            },
            perseus: {
                title: "Perseus",
                description:
                    "CNES program to improve rocket video module for launch behavior analysis (720p → 1080p).",
                tags: {
                    study: "Final year project",
                    team: "Team of 5",
                },
            },
            noe: {
                title: "Noé",
                description:
                    "Complete digitalization application for audit process, from certification request to certificate issuance.",
                tags: {
                    team: "Team of 20",
                },
            },
            actions: {
                view: "View",
                code: "Code",
            },
        },
        contact: {
            title: "Let's work together",
            subtitle: "Have a project in mind? Let's discuss how I can help you.",
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub",
        },
        footer: {
            copyright: "© 2024 Aymeric Maillot. Fullstack Java & Angular Developer.",
        },
        aboutPage: {
            title: "Technical details",
            subtitle:
                "Discover the technologies and tools I use to create exceptional applications",
            backButton: "← Back",
            technologies: {
                java: {
                    title: "Java & Spring",
                    description:
                        "Robust framework for backend development with Spring Boot, JPA and integrated security",
                },
                angular: {
                    title: "Angular & TypeScript",
                    description:
                        "Modern frontend framework with TypeScript for performant and maintainable SPA applications",
                },
                database: {
                    title: "Databases",
                    description: "PostgreSQL, MySQL and Redis for data persistence and caching",
                },
                docker: {
                    title: "Docker & DevOps",
                    description:
                        "Containerization and automated deployment with Docker, Kubernetes and CI/CD",
                },
                cloud: {
                    title: "Cloud & Infrastructure",
                    description:
                        "DigitalOcean, Terraform and Helm for infrastructure as code and Kubernetes deployment",
                },
                tools: {
                    title: "Tools & Testing",
                    description:
                        "JUnit, Jest, Git, Maven/Gradle for quality and collaborative development",
                },
            },
        },
    },
};

export const i18n = createI18n({
    locale: "fr",
    fallbackLocale: "en",
    messages,
    legacy: false,
});
