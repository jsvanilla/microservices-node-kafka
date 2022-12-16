const express = require('express');
const kafka = require('kafka-node');

const app = express();
const client = new kafka.KafkaClient();
const consumer = new kafka.Consumer(client, [{topic: 'mi-topic'}]);

consumer.on('message', (message) => {
  console.log(message.value);
});

app.listen(3000, ()=>{
  console.log("Server start on port 3000")
  resizeBy.send("funcionooo")
})