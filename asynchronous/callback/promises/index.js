let myPromise = new Promise(function (resolve, reject) {
  //Code that may take some time
  const success_msg = "Order recieved successfully.";
  const reject_msg = "Failed to receive order.";
  const promise_resolved = True;
  promise_resolved ? resolve(success_msg) : reject(reject_msg);
});

console.log(myPromise, "myPromise");
myPromise
  .then((data) => console.log("Data found:", data)) //when promise os resolve
  .catch((error) => console.log("Failed to get Data", error)); //when promise is reject

  function getUser(){
    return new Promise((resolve)=>{
        resolve({id:1, name:"Ram"});
    });
  }

  function getOrders(userId){
    return new Promise((resolve)=>{
        resolve([{id: 101, item: "Laptop"}]);
    });
  }

  function getorderdetails(orderID){
    return new Promise((resolve)=>{
        resolve([{id:orderID, price:1000}]);
    });
  }

  getUser()
  .then(user=>{
    return getOrders(user.id);
  })
  .then(orders=>{
    return getorderdetails(orders[0].id);
  })
  .then(details=>{
    console.log(details);
  });