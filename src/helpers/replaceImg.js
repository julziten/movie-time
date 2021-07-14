export const replaceImgWithError = e => {
    e.target.onerror = null;
    e.target.src = 'https://via.placeholder.com/300x435?text=No+Image+Found';
};