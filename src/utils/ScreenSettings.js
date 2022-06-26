const visibleMoviesNumbers = {
    1280: { total: 16, add: 4 },
    1200: { total: 12, add: 3 },
    768: { total: 8, add: 2 },
    480: { total: 5, add: 2 },
};

export const getScreenSettings = (width) => {
    let point = 0;
    if (width > 1200) {
        point = 1280;
    } else if (width > 768) {
        point = 1200;
    } else if (width > 520) {
        point = 768;
    } else {
        point = 480;
    };
    return visibleMoviesNumbers[point];
};