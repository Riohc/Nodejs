import express from 'express';
import * as CustomerService from '../services/customer-service';
import { RSA_NO_PADDING } from 'constants';

const CustomerRouter = express.Router();

CustomerRouter.post('/customer', (req, res, next)=>{
    CustomerService.createCustomer(function(response){
        console.log(JSON.stringify(response));
        res.json(response);
        res.end();
    })
});

CustomerRouter.get('/customers',(req,res, next)=>{
    CustomerService.getCustomers(function(response){
        console.log(JSON.stringify(response));
        res.json(response);
        res.end();
    })
})

export default CustomerRouter;