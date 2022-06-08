const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.length == 3) {
    geocode(process.argv[2], (error, data) => {
        if (error) {
            return console.log(error)
        }
        forecast(data.latitude,data.longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error:', error)
            }
            console.log(data.location)
            console.log('Data:', forecastData)
        })
    
    })    

} else {
    console.log('No location was provided!')
}





