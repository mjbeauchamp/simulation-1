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
        const { name, price, image } = req.body;

        dbInstance.create_product([name, price, image])
        .then( () => {
            res.status(200).send([name, price, image])
        })
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const delId = parseInt(req.params.id);
        console.log(delId)
        dbInstance.delete_product(delId)
            .then( () => res.sendStatus(200))
            .catch(err => {
                console.log(err);
                res.status(500).send({errorMessage: 'Oops! Something went wrong.'});
            });
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const delId = parseInt(req.params.id);
        dbInstance.update_product(delId)
            .then( () => res.sendStatus(200))
            .catch(err => {
                console.log(err);
                res.status(500).send({errorMessage: 'Oops! Something went wrong.'});
            })
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
    // }
    // 
 }