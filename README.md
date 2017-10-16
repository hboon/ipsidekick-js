# ipsidekick

> https://ipsidekick.com wrapper


## Install

```
$ npm install --save ipsidekick
```


## Usage

```js
const resolveIP = require('ipsidekick')

// Current IP address information
resolveIP((error, json) => {
  if (error) {
    console.log('Error:')
    console.log(error)
  } else {
    console.log('Info for current IP address:\n')
    console.log(json)
  }
})

// For a given IP address
resolveIP('17.142.160.59', (error, json) => {
  if (error) {
    console.log('\nError:')
    console.log(error)
  } else {
    console.log('\nInfo for given IP address:\n')
    console.log(json)

    // Example output:
    // {
    //    "ip" : "17.142.160.59",
    //    "currency" : {
    //       "code" : "USD",
    //       "name" : "US dollar",
    //       "decimals" : 2
    //    },
    //    "country" : {
    //       "name" : "United States",
    //       "code" : "US"
    //    },
    //    "timeZone" : {
    //       "name" : "America/Los_Angeles",
    //       "gmtOffset" : "GMT-7:00"
    //    }
    // }

    console.log(`\nCountry: ${json.country.name}`)
    console.log(`Currency: ${json.currency.name}`)
    console.log(`Time zone: ${json.timeZone.name}\n`)
  }
})
```

## License

MIT Hwee-Boon Yar <hboon@motionobj.com> <http://hboon.com>
