export const classNames = classes => {
  return Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');
};

export const toClassName = str => str.replace(/\s+/g, '-').toLowerCase();
