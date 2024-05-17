export const sortedProducts = (products, index) => {
    if (!Array.isArray(products)) {
        return [];
    }

    return [...products].sort((a, b) => {
        if (index === 0) {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
};