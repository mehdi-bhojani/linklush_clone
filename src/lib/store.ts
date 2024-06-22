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
export interface videoLinks {
    _id: ObjectId;
    userid: string;
    videoUrl: string;
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
    userid: string;
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
    enabled: boolean;
    clicks: number;
    clickThroughRate: number;
}

export interface user {
  name: string;
  username: string;
  email: string;
  image: string;
}

export interface ISetting {
  userid: string;
  seo?: {
    title?: string;
    description?: string;
  };
  userName: string;
  subscription?: {
    enabled: boolean;
    collectPhoneNumber: boolean;
    subscribe?: string;
    description?: string;
    webhookurl?: string;
  };
}

// Atom to hold a single Appearance object
export const appearanceAtom = atom<Appearance>({
    id: 0,
    userid: "",
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
export const settingAtom = atom<ISetting>({
  userid: "",
  userName: "",
  subscription: {
    enabled: false,
    collectPhoneNumber: false,
    subscribe: "",
    description: "",
    webhookurl: "",
  },
  seo: {
    title: "",
    description: "",
  },
});

export const videoLinksAtom = atom<videoLinks[]>([]);
export const userAtom = atom<user>({
  name: '',
  username: '',
  email: '',
  image: ''
});




// export const newAppearanceAtom = atom<Appearance>({} as Appearance);

