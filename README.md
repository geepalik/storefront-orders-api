# Storefront and Orders API
Needs Docker installed to run

Clone repository in target path
-----

    git clone https://github.com/geepalik/storefront-orders-api.git

Create Docker image
-----
In the project root directory run this to create image:
-----
    docker build -t gil-storefront-order-api . 

And then to run the container:
-----
    docker run -p81:3000 gil-storefront-order-api

Open browser and go to URL:
-----
    http://localhost/graphql

To open the GraphQL playground

Queries and Mutations:
-----

Create Storefront:
```graphql
mutation createStorefront {
  createStorefront(
    input: {menuId: "1", address: "Address 2", name: "Name 2", imageUrl: "https://you.tube/vid2", zipCodes: ["15236", "14752"], supportedCouponCodes: ["1","2"] }
  ) {
    id
    menu {
        id
      	items {
          id
          name
          price
        }
      }
    address
    name
  	imageUrl
  	zipCodes
    couponCodes
  }
}
```

Get All Storefronts:
```graphql
query storefronts {
 storefronts {    
    id
    address
    name
  	imageUrl
  	zipCodes
  	couponCodes
  	menu {
        id
      	items {
          id
          name
          price
        }
      }
  }
}
```

Get Storefront By Area:
```graphql
query storefronts {
 getStorefrontByArea(
    input: { zipCode: "15236"}
  ) {    
    id
    address
    name
  	imageUrl
  	zipCodes
    menu {
        id
      	items {
          id
          name
          price
        }
      }
  }
}
```

Get Storefront Menu:
```graphql
query storefronts {
 getStorefrontMenu(
    input: { id: "1"}
  ) {    
    menu {
        id
      	items {
          id
          name
          price
        }
      }
  }
}
```

Create Order:
```graphql
mutation createOrder {
  createOrder(
    input: { customerInfoName: "Gil", customerInfoAdress: "Jabotinsky 2", associatedStorefront: "1", couponCodes: ["1", "2"] }
  ) {
    id
    customerInformation {
      name
      address
    }
    associatedStorefront {
      id
      address
      name
      imageUrl
      zipCodes
      couponCodes
      menu {
        id
      	items {
          id
          name
          price
        }
      }
    }
  	couponCodes
  }
}
```

Calculate Order Totals:
```graphql
query orders {
 calculateOrderTotals(
    input: { orderId: "1"}
  )
}
```