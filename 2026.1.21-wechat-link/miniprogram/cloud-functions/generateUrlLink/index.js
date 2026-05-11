const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.urllink.generate({
      "path": event.path,
      "query": event.query,
      "isExpire": event.isExpire,
      "expireType": event.expireType,
      "expireInterval": event.expireInterval,
      "envVersion": event.envVersion,
      "cloudBase": {
        "env": event.cloudBase.env,
        "domain": event.cloudBase.domain,
        "path": event.cloudBase.path,
        "query": event.cloudBase.query
      }
    })
    return result
  } catch (err) {
    return err
  }
}
