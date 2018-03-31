import keys from './keys'

const clientId = keys.clientId
const secret = keys.secret
let accessToken='';
const cors = 'https://cors-anywhere.herokuapp.com/'

const Yelp = {
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    return fetch(`${cors}https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`,{
      method: 'POST'
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
        accessToken = jsonResponse.access_token;
      })
  }, // .getAccessToken

  search(term, location, sortBy) {
    return Yelp.getAccessToken().then(()=>{
      return fetch(`${cors}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc : business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.reviewCount
          })); // .map businesses
      }
    }) //.then
  } // .search

}  // . Yelp

export default Yelp
