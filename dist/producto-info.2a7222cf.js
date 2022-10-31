// import { getProductById } from '../services/products.js'
const main = ()=>{
    const urlParams = new URLSearchParams(location.search);
    const productId = urlParams.get("id");
    console.log(productId);
    // const productInfo = getProductById(id);
    productInfo.init();
};
main();

//# sourceMappingURL=producto-info.2a7222cf.js.map
