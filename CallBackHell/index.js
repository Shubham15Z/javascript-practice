cart = ["shoes", "shirt", "jeans"];

api.createOrder(cart, function () {

    api.proceedToPayment( function () {

        api.showOrderSummary( 

            function () {
                api.updateWallet()
            }

        )

    })

})

