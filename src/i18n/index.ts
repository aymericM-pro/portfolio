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
            jobTitle: "Développeur Fullstack",
            description:
                "Développeur orienté produit, sensible à la qualité du code, aux architectures propres et aux projets concrets à impact.",

            badges: {
                graduate: "Diplômé EFREI",
                experience: "Expérience professionnelle",
                international: "International",
            },

            passions: {
                title: "Ce qui me motive",

                code: {
                    title: "Code",
                    description:
                        "Concevoir des applications claires, maintenables et robustes.",
                },

                craft: {
                    title: "Craft",
                    description:
                        "Amélioration continue, clean code et bonnes pratiques.",
                },

                nocode: {
                    title: "No-Code",
                    description:
                        "Prototypage rapide d’idées et validation de concepts.",
                },

                devops: {
                    title: "DevOps",
                    description:
                        "Automatisation, CI/CD et déploiement cloud.",
                },
            },
        },

        /* =======================
           SKILLS (EXISTANT)
        ======================= */
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
            subtitle:
                "Quelques projets représentatifs de mon parcours et de mes compétences",

            tags: {
                entrepreneurial: "Projet entrepreneurial",
                study: "Projet de fin d’étude",
                team5: "Équipe de 5",
                team20: "Équipe de 20",
                personal: "Projet personnel",
            },

            greencircle: {
                title: "GreenCircle",
                description:
                    "Plateforme mettant en relation les entreprises du BTP avec les centres de revalorisation afin de faciliter la gestion et la transition des déchets.",
            },

            perseus: {
                title: "Perseus",
                description:
                    "Projet CNES visant l’amélioration d’un module vidéo pour l’analyse du comportement d’une fusée lors du décollage (720p → 1080p).",
            },

            noe: {
                title: "Noé",
                description:
                    "Plateforme SaaS de digitalisation complète du processus de certification, de la demande d’audit jusqu’à l’émission du certificat.",
            },

            tmdb: {
                title: "Movie DB API Client",
                description:
                    "Client Java pour l’API TMDB permettant de récupérer films, crédits, vidéos et collections via une architecture orientée services.",
            },

            smartlanguage: {
                title: "Smart Language",
                description:
                    "Plateforme intelligente de test de langue permettant d’évaluer automatiquement les compétences orales et écrites à l’aide d’IA et de traitements audio.",
            },

            football: {
                title: "Football Results API",
                description:
                    "API permettant de récupérer les derniers résultats, classements et statistiques de football via Football API, conçue selon une architecture hexagonale.",
            },
        },
        contact: {
            title: "Contact",
            subtitle: "Disponible pour échanger ou collaborer",
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub",
        },
        footer: {
            copyright: "Tous droits réservés.",
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
            jobTitle: "Fullstack Developer",
            description:
                "Product-oriented developer focused on clean code, solid architectures and meaningful projects.",

            badges: {
                graduate: "EFREI Graduate",
                experience: "Professional experience",
                international: "International",
            },

            passions: {
                title: "What drives me",

                code: {
                    title: "Code",
                    description:
                        "Designing clean, maintainable and robust applications.",
                },

                craft: {
                    title: "Craft",
                    description:
                        "Continuous improvement, clean code and best practices.",
                },

                nocode: {
                    title: "No-Code",
                    description:
                        "Rapid prototyping and idea validation.",
                },

                devops: {
                    title: "DevOps",
                    description:
                        "Automation, CI/CD and cloud deployment.",
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
            subtitle: "Some representative projects from my journey",

            tags: {
                entrepreneurial: "Entrepreneurial project",
                study: "Final year project",
                team5: "Team of 5",
                team20: "Team of 20",
                personal: "Personal project",
            },

            greencircle: {
                title: "GreenCircle",
                description:
                    "Platform connecting construction companies with recycling centers to facilitate waste transition.",
            },

            perseus: {
                title: "Perseus",
                description:
                    "CNES project improving a rocket video module for launch behavior analysis.",
            },

            noe: {
                title: "Noé",
                description:
                    "Complete SaaS platform for audit certification digitalization.",
            },

            tmdb: {
                title: "Movie DB API Client",
                description:
                    "Java client for the TMDB API using a service-oriented architecture.",
            },

            smartlanguage: {
                title: "Smart Language",
                description:
                    "AI-powered language testing platform evaluating oral and written skills.",
            },

            football: {
                title: "Football Results API",
                description:
                    "API providing football results, standings and statistics using a hexagonal architecture.",
            },
        },
        contact: {
            title: "Contact",
            subtitle: "Open to discussion or collaboration",
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub",
        },
        footer: {
            copyright: "All rights reserved.",
        },
    },
};

export const i18n = createI18n({
    legacy: false,
    locale: "fr",
    fallbackLocale: "en",
    messages,
});
