console.log("this is updated")
var bodyFormData =
    {
        client_id: "4928e1f9e40e473090ae598d6e5f0c67"
        , client_secret: "2086b160da6cd5263e462e5b6aa8173c7537480043ca1df7"
        , grant_type: "client_credentials"
    }




    const response = fetch("https://api.demo.wdesk.com"+"/iam/v1/oauth2/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(bodyFormData)

    })

    console.log(response)