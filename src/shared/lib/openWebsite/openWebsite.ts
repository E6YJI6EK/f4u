export enum AccessTypes {
    BLANK = "_blank",
    SELF = "_self",
    PARENT = "_parent",
    TOP = "_top"
}

export const openWebsite = (url:string, accesType:AccessTypes) => {
    window.open(url, accesType);
  };