const express=require('express');
const getLanding=require('../controllers/expanse');
const router=express.Router();


router.get('/delete/:ExpanseID',getLanding.deleteExpanse);
// Editing expanse
router.get('/edit/:ExpanseId',getLanding.editExpanse);
// showing all expanses
router.get('/',getLanding.showExpanses);

// adding the item
router.post('/',getLanding.postExpanses);

module.exports=router;