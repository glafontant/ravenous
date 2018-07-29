const apiKey = "ePk3XhR5nL3Xkt5gGRIWxlP0z2wkwmCXs69nHPRBlkhWE1b2lSWWgKD15Jqvohi0wxDfdEv736purKQiP8B3E6HT0ys-FBsfC1nBamOsgkkuBk8pr7R9GgNqLS1eW3Yx";

const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          });
        }
      });
  }
};

export default Yelp;