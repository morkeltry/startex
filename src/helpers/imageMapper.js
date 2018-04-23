export default (baseUrl, suffixes) => {
  suffixes.forEach (suffix =>{
    if (suffix == null)
      return null
    else {
      const image = require ('../'+baseUrl+suffix);
      return image
    }
  });
}
