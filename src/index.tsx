import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs';

createServer({
  models:{
    transaction: Model,
  },
  seeds(server){
    server.db.loadData({
      transactions: [{
           id: 1,
           title: 'Freelance de website 1',
           amount: 6000,
           type: 'deposit',
           category: 'DEV',
           createdAt: new Date()
         },
         {
          id: 2,
          title: 'Aluguel',
          amount: 400,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-02-14 11:00:00')
        }
        ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions',() =>{
      return this.schema.all('transaction')
    })
    // [{
    //   id: 1,
    //   title: 'Transaction 1',
    //   amount: 400,
    //   type: 'deposit',
    //   caegory: 'Food',
    //   createdAt: new Date()
    // }]
    this.post('/transactions',(schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

