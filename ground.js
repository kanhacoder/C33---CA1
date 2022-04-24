class Ground 
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() 
  {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
}


















// Constructors are functions that are called automatically and are used to initialise values to properties of a class.




// class Ground 
// {
//   contructor(x,y,w,h) // Constructor will recieve the values from the object created in sketch.js<setup . 
//   {
//     let options = {isStatic : true}
//     this.body = Bodies.rectangle(x,y,w,h,options); // Body.rectangles is getting stored in this.body(variable).
//     this.w = w; // We will save the values of width and height recieved in the constructor arguements in this.w and this.h .
//     this.h = h;
//     World.add(world, this.body)
//   }

//   display() 
//   {
//         let pos = this.body.position;
//         push();
//         rectMode(CENTER);
//         noStroke();
//         fill(148,127,146);
//         rect(pos.x,pos.y, this.w, this.h);
//         pop();
//   }
// }
























// // class Ground 
// // {
// //   constructor(x, y, w,h) 
// //   {
// //     let options = {
// //      isStatic:true
// //     };
    
// //     this.body = Bodies.rectangle(x, y, w, h, options);
// //     this.w = w;
// //     this.h = h;
// //     World.add(world, this.body);
// //   }

// //     display() {
// //     let pos = this.body.position;
// //     push();
// //     rectMode(CENTER);
// //     noStroke();
// //     fill(148,127,146);
// //     rect(pos.x,pos.y, this.w, this.h);
// //     pop();
// //   }
// // }
