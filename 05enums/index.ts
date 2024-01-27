const enum CardinalDirection {
    NORTH ,
    EAST ,
    SOUTH,
    WEST,
}
let currentDirection = CardinalDirection.NORTH; 
console.log(currentDirection);

//  Numeric initilization
const enum Direction {
    NORTH =1,
    EAST, 
    WEST,
    SOUTH,
}
console.log(Direction.SOUTH);

// Numeric Enums -> Fully Initilized

const enum StatusCode {
    NOTFOUND = 404,
    SUCCESS = 200,
    ACCEPTED = 202,
    BAD_REQUEST = 400,
}
console.log(StatusCode.SUCCESS)

// StringEnums => Fully Initilized

const enum Role {
    ADMIN = "admin",
    USER = "user",
    TEST = "test",
}

console.log(Role.ADMIN)