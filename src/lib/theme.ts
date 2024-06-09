import { themes, Theme } from "@/data/themes";

export function getTheme(name: string): Theme {
    const foundTheme = themes.find(theme => theme.name === name);
    return foundTheme || getDefaultTheme();
}

function getDefaultTheme(): Theme {
    return {
        name: "Default",
        foreground: "#FFFFFF",
        background: "#E5E5E5",
        text: "#000000"
    };
}
