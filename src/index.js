const express = require('express')
const React = require('react')
import { renderToString } from 'react-dom/server'

import Home from './client/components/Home'

const app = express()

app.get('/', (req, res) => {
  const content = renderToString(<Home />)
  res.send(content)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})