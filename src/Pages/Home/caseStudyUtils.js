export const getTagToneClass = (tag) => {
    return tag.trim().toUpperCase() === "WIP" ? "tag-tone--green" : "tag-tone--gray";
};
