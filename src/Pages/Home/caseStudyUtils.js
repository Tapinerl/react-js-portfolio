export const getTagToneClass = (tag = "") => {
    const normalizedTag = tag.trim().toLowerCase();

    if (normalizedTag === "ux/ui" || normalizedTag === "ui") {
        return "tag-tone--green";
    }
    if (normalizedTag === "case study") {
        return "tag-tone--blue";
    }
    if (normalizedTag === "programming") {
        return "tag-tone--gray";
    }
    if (normalizedTag === "usability") {
        return "tag-tone--yellow";
    }
    if (normalizedTag === "wip") {
        return "tag-tone--red";
    }

    return "tag-tone--default";
};
