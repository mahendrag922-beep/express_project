const onsubmitHandler = (e)=>{
          e.preventDefault();
          console.log("product added");
          const product = e.target.productName.value;
          console.log(product);
          const obj = {
            "productName" : product
          }
          axios.post('http://localhost:3000/products',obj).then((result)=>{
                      console.log(result.data.value);
          })
}