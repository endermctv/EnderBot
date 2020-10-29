const Sentry = require("@sentry/node")
const Tracing = require("@sentry/tracing")

Sentry.init({
    dsn: "https://3c022ebe0fa84e48bcdb97425530a91c@o377688.ingest.sentry.io/5202519",
    tracesSampleRate: 1.0,
})

const transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
})

setTimeout(() => {
    try{
        console.log(null);
    }catch(e){
        Sentry.captureException(e)
    }finally{
        transaction.finish()
    }
}, 99)

Sentry.setContext("bot", {
    name: "EnderBot",
    commands: 6
});