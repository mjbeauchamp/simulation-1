module.exports = {
    get_inventory: (req, res) => {
        const dbInstance = req.app.get('db');
  
        dbInstance.get_inventory()
            .then( products => res.status(200).send( products ) )
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err)
            } );
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { product_name, product_price, image_url } = req.body;

        dbInstance.create_product([product_name, product_price, image_url])
        .then( () => {
            res.status(200).send([product_name, product_price, image_url])
        })
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    }
    // read: (req, res) => {
    //     res.send({categories: categories, idNum: idNum});
    // },
    // create: (req, res) => {
    //     let newTitle = req.body.titleInput;
    //     let newList = req.body.wordList;
    //     let id = req.body.idNum;
    //     let newCategory = {
    //         title: newTitle,
    //         list: newList,
    //         idNum: id
    //     };
    //     categories.push(newCategory);
    //     idNum++;
    //     res.send({categories: categories, idNum: idNum});
    // },
    // update: (req, res) => {
    //     let newTitle = req.body.titleInput;
    //     let newList = req.body.wordList;
    //     let id = parseInt(req.params.id);
    //     categories.forEach((val, i, arr) => {
    //         if(val.idNum===id){
    //             arr[i] = {
    //                 title: newTitle,
    //                 list: newList,
    //                 idNum: id
    //             };
    //         }
    //     });
    //     res.send({categories: categories, idNum: idNum});
    // }, 
    // delete: (req, res) => {
    //     let delId = parseInt(req.params.id);
    //     console.log(delId)
    //     let indexNum;
    //     if(delId>6){
    //         categories.forEach((val, i) => {
    //             if(val.idNum===delId){
    //                 indexNum = i;
    //             }
    //         })
    //         idNum--;
    //         categories.splice(indexNum, 1);
    //     }
    //     res.send({categories: categories, idNum: delId});
    // }
 }