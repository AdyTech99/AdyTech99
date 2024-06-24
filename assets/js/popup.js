const AIEpopup = new Popup({
    id: "download",
    title: "Download Instructions",
    content: `
         {a-https://modrinth.com/mod/automatic-infinite-elytra}[Modrinth download link].
         {a-https://www.curseforge.com/minecraft/mc-mods/automatic-infinite-elytra}[Curseforge download link].
        `,
    backgroundColor: "#000",
    font: "DM Sans",
    titleColor: "#fed800",
    textColor: "#fed800",
    closeColor: "#fed800",
    borderWidth: ".2em",
    borderColor: "#fed800",
    linkColor: "#fed800",
    borderRadius: 7,
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
    loadCallback: () => {
        const button = document.getElementById("AIE")
        button.addEventListener("click", () => {
            AIEpopup.show();
        });
    },
});
const AIEEEpopup = new Popup({
    id: "download",
    title: "Download Instructions",
    content: `
         {a-https://modrinth.com/mod/automatic-infinite-elytra}[Modrinth download link].
         {a-https://www.curseforge.com/minecraft/mc-mods/automatic-infinite-elytra}[Curseforge download link].
        `,
    backgroundColor: "#000",
    font: "DM Sans",
    titleColor: "#fed800",
    textColor: "#fed800",
    closeColor: "#fed800",
    borderWidth: ".2em",
    borderColor: "#fed800",
    linkColor: "#fed800",
    borderRadius: 7,
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
    loadCallback: () => {
        const button = document.getElementById("AIEEE")
        button.addEventListener("click", () => {
            AIEpopup.show();
        });
    },
});

const HIpopup = new Popup({
    id: "download",
    title: "Download Instructions",
    content: `
         {a-https://modrinth.com/mod/playerhealthindicators}[Modrinth download link].
         {a-https://www.curseforge.com/minecraft/mc-mods/player-health-indicators}[Curseforge download link].
        `,
    backgroundColor: "#000",
    font: "DM Sans",
    titleColor: "#fed800",
    textColor: "#fed800",
    closeColor: "#fed800",
    borderWidth: ".2em",
    borderColor: "#fed800",
    linkColor: "#fed800",
    borderRadius: 7,
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
    loadCallback: () => {
        const button = document.getElementById("HI")
        button.addEventListener("click", () => {
            HIpopup.show();
        });
    },
});

const HIIIpopup = new Popup({
    id: "download",
    title: "Download Instructions",
    content: `
         {a-https://modrinth.com/mod/playerhealthindicators}[Modrinth download link].
         {a-https://www.curseforge.com/minecraft/mc-mods/player-health-indicators}[Curseforge download link].
        `,
    backgroundColor: "#000",
    font: "DM Sans",
    titleColor: "#fed800",
    textColor: "#fed800",
    closeColor: "#fed800",
    borderWidth: ".2em",
    borderColor: "#fed800",
    linkColor: "#fed800",
    borderRadius: 7,
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
    loadCallback: () => {
        const button = document.getElementById("HIII")
        button.addEventListener("click", () => {
            HIIIpopup.show();
        });
    },
});

const Fpopup = new Popup({
    id: "download",
    title: "Download Instructions",
    content: `
         {a-https://modrinth.com/mod/modern-farlands-mod}[Modrinth download link].
         {a-https://www.curseforge.com/minecraft/mc-mods/farlands-reborn}[Curseforge download link].
        `,
    backgroundColor: "#000",
    font: "DM Sans",
    titleColor: "#fed800",
    textColor: "#fed800",
    closeColor: "#fed800",
    borderWidth: ".2em",
    borderColor: "#fed800",
    linkColor: "#fed800",
    borderRadius: 7,
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
    loadCallback: () => {
        const button = document.getElementById("F")
        button.addEventListener("click", () => {
            Fpopup.show();
        });
    },
});

const FFpopup = new Popup({
    id: "download",
    title: "Download Instructions",
    content: `
         {a-https://modrinth.com/mod/modern-farlands-mod}[Modrinth download link].
         {a-https://www.curseforge.com/minecraft/mc-mods/farlands-reborn}[Curseforge download link].
        `,
    backgroundColor: "#000",
    font: "DM Sans",
    titleColor: "#fed800",
    textColor: "#fed800",
    closeColor: "#fed800",
    borderWidth: ".2em",
    borderColor: "#fed800",
    linkColor: "#fed800",
    borderRadius: 7,
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
    loadCallback: () => {
        const button = document.getElementById("FF")
        button.addEventListener("click", () => {
            FFpopup.show();
        });
    },
});

const Npopup = new Popup({
    id: "download",
    title: "Download Instructions",
    content: `
         {a-https://modrinth.com/mod/nodurability}[Modrinth download link].
         {a-https://www.curseforge.com/minecraft/mc-mods/no-durability}[Curseforge download link].
        `,
    backgroundColor: "#000",
    font: "DM Sans",
    titleColor: "#fed800",
    textColor: "#fed800",
    closeColor: "#fed800",
    borderWidth: ".2em",
    borderColor: "#fed800",
    linkColor: "#fed800",
    borderRadius: 7,
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
    loadCallback: () => {
        const button = document.getElementById("N")
        button.addEventListener("click", () => {
            Npopup.show();
        });
    },
});

const HBpopup = new Popup({
    id: "download",
    title: "Download Instructions",
    content: `
         {a-https://modrinth.com/mod/homeward-bound}[Modrinth download link].
         {a-https://www.curseforge.com/minecraft/mc-mods/homeward-bound}[Curseforge download link].
        `,
    backgroundColor: "#000",
    font: "DM Sans",
    titleColor: "#fed800",
    textColor: "#fed800",
    closeColor: "#fed800",
    borderWidth: ".2em",
    borderColor: "#fed800",
    linkColor: "#fed800",
    borderRadius: 7,
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
    loadCallback: () => {
        const button = document.getElementById("HB")
        button.addEventListener("click", () => {
            HBpopup.show();
        });
    },
});

const MCpopup = new Popup({
    id: "download",
    title: "Download Instructions",
    content: `
         {a-https://modrinth.com/mod/minecraft-manhunt-compass}[Modrinth download link].
         {a-https://www.curseforge.com/minecraft/mc-mods/minecraft-manhunt-compass}[Curseforge download link].
        `,
    backgroundColor: "#000",
    font: "DM Sans",
    titleColor: "#fed800",
    textColor: "#fed800",
    closeColor: "#fed800",
    borderWidth: ".2em",
    borderColor: "#fed800",
    linkColor: "#fed800",
    borderRadius: 7,
    fontSizeMultiplier: 1.2,
    titleMargin: "4%",
    underlineLinks: true,
    loadCallback: () => {
        const button = document.getElementById("MC")
        button.addEventListener("click", () => {
            MCpopup.show();
        });
    },
});