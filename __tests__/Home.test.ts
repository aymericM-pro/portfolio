import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import LandingPage from "../src/views/Home.vue";

const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages: {
        en: {
            nav: {
                about: "About",
                skills: "Skills",
                projects: "Projects",
                contact: "Contact",
                downloadCV: "Download CV",
            },
            footer: {
                copyright: "© 2025 Aymeric Maillot. All rights reserved.",
            },
        },
    },
});

describe("LandingPage.vue", () => {
    it("renders all nav items", () => {
        const wrapper = mount(LandingPage, {
            global: {
                plugins: [i18n],
            },
        });

        const navLinks = wrapper.findAll(".nav-link");
        expect(navLinks).toHaveLength(4);
        expect(navLinks[0].text()).toBe("About");
        expect(navLinks[3].text()).toBe("Contact");
    });

    it("renders the brand name", () => {
        const wrapper = mount(LandingPage, {
            global: {
                plugins: [i18n],
            },
        });
        expect(wrapper.find(".brand-name").text()).toContain("Aymeric Maillot");
    });
});
