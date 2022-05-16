const apiUrl = "http://localhost:3000/categories";

export const getCategories = () => {
    return fetch(apiUrl).then((response) => {
        return response.json();
    });
};