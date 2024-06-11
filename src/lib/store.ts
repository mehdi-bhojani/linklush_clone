import { atom } from "jotai";

// Standard interface and functions
export interface Appearance {
    id: number;
    userid: number;
    name: string;
    description: string;
    avatar: string;
    infoButtonEnable: boolean;
    infoButtonText: string;
    infoButtonLink: string;
    font: string;
    theme: string;
    bgColor: string;
    bgImage: string;
    hideBranding: boolean;
    lastbackground: string,
}

// Atom to hold a single Appearance object
export const appearanceAtom = atom<Appearance>({
    id: 0,
    userid: 0,
    name: '',
    description: '',
    avatar: '',
    infoButtonEnable: false,
    infoButtonText: '',
    infoButtonLink: '',
    font: '',
    theme: '',
    bgColor: '',
    bgImage: '',
    hideBranding: false,
    lastbackground: 'theme',
});

export const newAppearanceAtom = atom<Appearance>({} as Appearance);

export const updateAppearanceAtom = atom(
    () => "",
    (get, set, updatedAppearance: Appearance) => {
        set(appearanceAtom, updatedAppearance);
    }
);

export const resetAppearanceAtom = atom(
    () => "",
    (_get, set) => {
        set(appearanceAtom, {
            id: 0,
            userid: 0,
            name: '',
            description: '',
            avatar: '',
            infoButtonEnable: false,
            infoButtonText: '',
            infoButtonLink: '',
            font: '',
            theme: '',
            bgColor: '',
            bgImage: '',
            hideBranding: false,
            lastbackground: 'theme',
        });
    }
);

