let ENV_VARS

if (process.env.NODE_ENV !== "production") {
    ENV_VARS = {
        API_URL: "http://192.168.99.100:4567"
    }
} else {
    ENV_VARS = {
        API_URL: "${API_URL}"
    }
}

export default ENV_VARS