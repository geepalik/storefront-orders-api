# Storefront and Orders API
Needs Docker installed to run

Clone repository in target path
-----

    $ git clone https://github.com/geepalik/storefront-orders-api.git

Create Docker image
-----
In the project root directory run this to create image:
-----
    $ docker build -t gil-storefront-order-api . 

And then to run the container:
    $ docker run -p80:3000 gil-storefront-order-api

Open browser and go to URL:
    http://localhost/graphql

To open the GraphQL playground

Create Storefront:
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