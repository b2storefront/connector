const slugify = (string) => {
    return string.replace(/[^A-Za-z0-9-]/g, '');
}

export default slugify