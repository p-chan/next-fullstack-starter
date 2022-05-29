const intercept = require('intercept-stdout')

intercept((text) => {
  if (text.includes('Duplicate atom key')) return ''

  return text
})
