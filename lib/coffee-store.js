

const getUrlForCoffeeStores = (latLong, query, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

export const fetchCoffeeStores = async (
    latLong = "43.653833032607096%2C-79.37896808855945",
    limit = 6
) => {

    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
        },
    };
    const response = await fetch(
        getUrlForCoffeeStores(latLong, "coffee", limit),
        options
    );
    const data = await response.json();
    return data.results.map((result, idx) => {
        const neighborhood = result.location.neighborhood;
        return {
            id: result.fsq_id,
            address: result.location.address,
            name: result.name,
            neighbourhood: neighborhood?.length > 0 ? neighborhood[0] : "",
            // imgUrl: photos.length > 0 ? photos[idx] : null,
            "imgUrl": "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",

        };
    });
};
