var domDimensions = require("dom_dimensions");


module.exports = getImageDimensions;


function getImageDimensions(node, maxWidth, maxHeight, noBiggerThanSize) {
    var width = node.naturalWidth || node.width || 0,
        height = node.naturalHeight || node.height || 0,
        ratio = width / height,
        w = 0,
        h = 0,
        t = 0,
        l = 0;

    if (noBiggerThanSize) {
        maxWidth = Math.min(width, maxWidth);
        maxHeight = Math.min(height, maxHeight);

        if (ratio < 1) {
            h = maxHeight;
            w = maxHeight * ratio;
        } else {
            w = maxWidth;
            h = maxWidth / ratio;
        }
    } else {
        if (ratio > 1) {
            h = maxHeight;
            w = maxHeight * ratio;
            l = (w - maxWidth) * 0.5;
        } else {
            w = maxWidth;
            h = maxWidth / ratio;
            t = (h - maxHeight) * 0.5;
        }
    }

    return {
        width: w,
        height: h,
        top: t,
        left: l
    };
}
