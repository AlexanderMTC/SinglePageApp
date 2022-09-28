//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=CEfw88jNg10UryjKvTV133tvQhLoizOYmlcrNnmL
//https://randomuser.me/api/?page=3&results=20

const NAME = "randomuser",
  DOMAIN = `https://${NAME}.me`,
  SITE = `${DOMAIN}/api/`,
  POST = `${SITE}/?page=3&results=20`;

export default {
  NAME,
  DOMAIN,
  SITE,
  POST,
};