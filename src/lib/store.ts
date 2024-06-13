import { atom } from "jotai";
import {ObjectId} from "mongoose";

export interface normalLinks {
    _id: ObjectId;
    userid: string;
    linkUrl: string;
    title: string;
    click?: number;
    clickThroughRate?: number;
    enabled?: boolean;
    animation?: {
      animationType?: string;
      iterationCount?: number;
    };
    avatarUrl?: string;
    section?: string;
    protection?: {
      protectionType?: string;
      code?: string;
    };
  }
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

export interface socialLinks {
    userid: string;
    platform: string;
    socialLink: string;
    clicks: number;
    clickThroughRate: number;
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
//Atom to hold a list of socialLinks
export const socialLinksAtom = atom<socialLinks[]>([]);
export const normalLinksAtom = atom<normalLinks[]>([]);





// export const newAppearanceAtom = atom<Appearance>({} as Appearance);

