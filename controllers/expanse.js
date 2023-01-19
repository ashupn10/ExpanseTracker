const Expanse=require('../models/Expanse');
exports.showExpanses=(req,res,next)=>{
    Expanse.findAll()
    .then(result=>{
        res.render('index',{
            Expanses:result,
            edit:false
        })
    })
    .catch(err=>console.log(err));
}
exports.postExpanses=(req,res,next)=>{
    // console.log(req.body.expanse,'this is expanse');;;;
    Expanse.create({
        category:req.body.category,
        expanse:req.body.expanse,
        description:req.body.description,
    })
    .then(()=>{
        res.redirect('/');
    })
    .catch(err=>console.log(err));
}

exports.editExpanse=(req,res,next)=>{
    Expanse.findByPk(req.params.ExpanseId)
    .then(result=>{
        res.render('index',{
            Expanses:[],
            edit:true,
            expanse:result.expanse,
            category:result.category,
            description:result.description
        })
    })
    .then(()=>{
        Expanse.destroy({
            where:{
                id:req.params.ExpanseId
            }
        })
    })
    .catch(err=>console.log(err));
}

exports.deleteExpanse=(req,res,next)=>{
    // console.log(req.params.ExpanseID);
    Expanse.destroy({
        where:{
            id:req.params.ExpanseID
        }
    })
    .then(()=>{
        res.redirect('/');
    })
    .catch(err=>console.log(err));
}