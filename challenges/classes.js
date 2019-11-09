// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height){
//     this.length = length;
//     this.width = width;
//     this.height = height;
// }

// CuboidMaker.prototype.volume = function(){
//     return (length * width * height);
// }

// CuboidMaker.prototype.surface = function(){
//     return (length * width + length * height + width * height) * 2;
// }
class CuboidMaker {
    constructor(length, width, height){
        this.length;
        this.width;
        this.height;
    }

    volume extends CuboidMaker{
        constructor(length, width, height){
            super(length, width, height);
            return (length * width * height);
        }
    }

    surface extends CuboidMaker{
        constructor(length, width, height){
            super(length, width, height);
            return (length * width + length * height + width * height)* 2;
        }
    }
}


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.