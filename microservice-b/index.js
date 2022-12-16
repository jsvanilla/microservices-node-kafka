const express = require('express');
const kafka = require('kafka-node');

const app = express();
const client = new kafka.KafkaClient();
const producer = new kafka.Producer(client);

app.get('/',(req, res) => {
  const payloads = [{ topic: 'mi-topic', messages: 'First message!'}];
  producer.send(payloads, (error, data)=>{
    if(error) {
      console.error(error)
    } else {
      console.log(data)
    }
  })
})