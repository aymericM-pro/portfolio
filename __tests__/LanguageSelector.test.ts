import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import LanguageSelector from "../src/components/LanguageSelector.vue";

const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages: {
        en: {},
        fr: {},
    },
});

describe("LanguageSelector.vue", () => {
    it("affiche la langue actuelle (EN)", () => {
        const wrapper = mount(LanguageSelector, {
            global: {
                plugins: [i18n],
            },
        });

        expect(wrapper.text()).toContain("🇬🇧");
        expect(wrapper.text()).toContain("EN");
    });

    it("toggleDropdown modifie l'état open", () => {
        const wrapper = mount(LanguageSelector, {
            global: {
                plugins: [i18n],
            },
        });
        const vm = wrapper.vm as any;

        expect(vm.isOpen).toBe(false);
        vm.toggleDropdown();
        expect(vm.isOpen).toBe(true);
    });

    it("selectLanguage change la langue et ferme le menu", () => {
        const wrapper = mount(LanguageSelector, {
            global: {
                plugins: [i18n],
            },
        });

        const vm = wrapper.vm as any;

        expect(vm.currentLocale).toBe("en");
        expect(vm.isOpen).toBe(false);

        vm.isOpen = true;

        vm.selectLanguage({ value: "fr", flag: "🇫🇷", code: "FR" });

        expect(vm.currentLocale).toBe("fr");
        expect(vm.isOpen).toBe(false);
    });
});
