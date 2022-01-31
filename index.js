// class Shape2D {
//     constructor(side1, side2) {
//       this.area = side1 * side2;
//     }
//   }
  class Rectangle {
    constructor(side1, side2) {
     this.area = side1*side2;
     this.perimeter=2*(side1+side2)
    }
  }
  
  class Square extends Rectangle {
    constructor(side) {
      super(side, side);
    }
  }

  class perimeter extends Rectangle {
      constructor(side) {
          super(2,side+side)
      }
  }
  

  console.log(new Square(2).area);
  console.log(new Square(2).perimeter)