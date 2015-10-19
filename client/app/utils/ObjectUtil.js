class ObjectUtil {
  reverse(o) {
    let obj = {};
    Object.keys(o).reverse().forEach(function (k) {
      obj[k] = o[k];
    });

    return obj;
  }
}

export default new ObjectUtil();
