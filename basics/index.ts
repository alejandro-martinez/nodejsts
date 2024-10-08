
interface User {
  name: string;
  email: string;
  id: number;
}

const myUser: User = {
  name: 'John',   // Corrected name value
  email: 'john@example.com',   // Corrected email value
  id: 1,
};

class UserAccount {
  name: string;
  id: number;
  email: string;

  constructor(name: string, email: string, id: number) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  deleteUser(user: User) {
    console.log(`Delete user ${user.id}`);
  }

  getUser(): User {
    return {
      name: this.name,
      email: this.email,
      id: this.id,
    };
  }

  getLength(obj: string | string[]) {
    return obj.length;
  }
}

const newUserAccount: UserAccount = new UserAccount('Alej', 'ale@', 1);   // Corrected instantiation
console.log(newUserAccount.getUser());   // Corrected method call
console.log(newUserAccount.getLength(['1', '2']));

type myArrOfUsers = Array<User>;

const users:myArrOfUsers = [];

users.push({
  name: 'Ale',
  email: 'ale@',
  id: 1,
});

interface BackPack<Type> {
  add: (obj: Type) => void,
  get: () => Type
};

const backpack: BackPack<string> = {
  add: (obj: string) => {
    console.log(`Added: ${obj}`);
  },
  get: () => {
    return "Item from backpack";
  }
};

const object = backpack.get();

backpack.add('23');

interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point: Point = { x: 12, y: 26 };
logPoint(point);

// optional parameters
function logMessage(msg: string, msg2?:string): string {
  return msg.toLowerCase() + msg2?.toLowerCase();
}
logMessage('Hola');
logMessage('Hola ale');

// union types
function printNumber(number: string | number) {
  console.log('number is', number);
}
printNumber(1);
printNumber('2');

// inheritance 
interface Human {
  type: string
}

interface Woman extends Human {
  name: string
}

interface Man extends Human {
  name: string
}
// add existing props

interface Window {
  title: string;
}

interface Window {
  ts: string;
}
// Alias
const x = "hello" as string;

// functions that only accept a certain set of known values:

function printText(s: string, alignment: "left" | "right" | "center") {
  return s + alignment;
}
printText("Hello, world", "left"); // works


const sum = (a: number, b: number) => {
  return a + b;
}
console.log(sum(2,3));

let guitars = ['fender', 'gibson', 1212];
let mixedData = ['asd', true, 12];

type Dev = {
  name: string,
  email: string,
  age?: number,
};

let me: Dev = {
  name: 'Alejandro',
  email: 'alice@gmail.com',
  age: 34,
};

let brother: Dev = {
  name: 'Ezequiel',
  email: 'ezequiel@gmail.com',
  age: 33,
};

const devsList: Dev[] = [me];
devsList.push(brother);

const showDevData = function(devsList: Dev[]) {
  devsList.forEach((dev) => {
    console.log(`${dev.name} ${dev.email} ${dev.age}`);
  })
}
showDevData(devsList);

// Type aliases
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  albums: stringOrNumberArray;
}

// Literal type
let myName: 'Alejandro';

let userName: 'Alejandro' | 'John' | 'Amy';
userName = 'Alejandro';

// functions

const add = (a:number, b:number): number => {
  return a + b;
}

const logMsg = (message:any): void => {
  console.log(message);
}

logMsg('Hello!');
logMsg(add(2, 3));

let subtract = function (c: number, d:number): number {
  return c - d;
}

type mathFunction = (a: number, b: number) => number;
// mathFunction and mathFunctionI are equivalent
interface mathFunctionI {
  (a: number, b: number): number
}

let multiply: mathFunction = function (c, d) {
  return c * d;
}

logMsg(multiply(2, 2));

// optional parameters
const addAll = (a: number, b:number, c?:number): number => {
  // type guard
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
}

// default parameters
const sumAll = (a: number, b:number, c:number = 2): number => {
  return a + b + c;
}

// Rest params
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(1,2,3,4));

// never type: special type for functions that throw Error type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
}
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
}

const isNumber = (value: any): boolean => {
  return typeof value === 'number';
}

const isString = (value: any): boolean => {
  return typeof value === 'string';
}

const numberOrString = (value: number | string): string => {
  if (isString(value)) return 'string';
  if (isNumber(value)) return 'number';
  return createError('This should never happen');
}

// Type assertions


type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>'world'; 
// o
let dd = 'world' as One;
let e = <string | number>'world';

// add or concat can return number or string
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') {
    return a + b;
  }
  return '' + a + b;
}

// myVal is defined as string so we need to use "as string" because otherwise addOrConcat could return
// a number
let myVal: string = addOrConcat(2, 2, 'concat') as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2 ,2, 'concat') as number;

// Forecasting
// 10 as string "Throws error"
(10 as unknown) as string;

// The DOM
// const img = document.querySelector('img');
// const myImg = document.getElementById('#img') as HTMLImageElement;

// Classes

class Coder {
  secondLang!: string; // Definite Assignment Assertion. Tell TS that this prop will be set at some point

  constructor(
    public readonly name: string,
    public music: string,
    private age:number,
    protected lang: string = 'Typescript' // Only accessible within Code and subclasses
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge(): string {
    return `Hello, I am ${this.age}`;
  }
}

const Ale = new Coder('Ale', 'Rock', 34);
console.log(Ale.getAge())
// console.log(Ale.age); // Fails. age is a private member

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const webAleDev = new WebDev('PC', 'Ale', 'Rock', 34);
console.log(webAleDev.getLang());
// console.log(webAleDev.lang); Fails. lang is a protected member

interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class GuitarPlayer implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const guitarPlayer1 = new GuitarPlayer('PEPE', 'Guitar');
console.log(guitarPlayer1.play('plays'));

////////////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; // Modifies the count member of the class and assigns it to id member
  }
}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

console.log('Peeps.count', Peeps.count);
console.log('Steve id', Steve.id);
console.log('Amy', Amy.id);

////////////////////////////////////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // a get without a setter makes the member read only
  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(i => isString(i))) {
      this.dataState = value;
      return;
    }
    throw new Error('Param is not an array of strings');
  }
}

const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);

/////////////////////////////////////////////////////////////////////////////////////////
// Index signatures
// When you create an object and you don't know the exact names of the object keys
// but you know the shape of the object

interface TransactionObj {
  readonly [index: string]: number, // Avoid reassigning the property
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

console.log(todaysTransactions.Pizza); // -10
console.log(todaysTransactions['Pizza']); // -10

let prop: string = 'Pizza';

// console.log(todaysTransactions[prop]); Fails because there is no index signature

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
}

console.log(todaysNet(todaysTransactions));

interface Student {
  name: string,
  GPA: number,
  classes?: number[],
}

const student: Student = {
  name: "John",
  GPA: 3.5,
  classes: [100, 200]
}

// console.log(student.test); // FAILS if test doesn't exist on Student 
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}

// Same as above: List object properties without knowing it's type
Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student])
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA');

////////////////////////////////////////////////////////////////
// Utility types

// interface Incomes {
//   [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
  salary: 400,
  bonus: 100,
  sidehustle: 200
}

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes])
}

////////////////////////////////////////////////////////////////
// Generics
// When we don't know the types

// const stringEcho = (arg: string): string => arg; // Only works with strings

const echo = <T>(arg: T): T => arg;
 
console.log(echo(1));
console.log(echo('Hello'));

const isObject = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
}
console.log(isObject({}));

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg }
}

console.log(isTrue(false)); // false
console.log(isTrue(1)); // true
console.log(isTrue({})); // false

interface BoolCheck<T> {
  value: T,
  is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg }
}

interface HasId {
  id: number
}

// Tell processUser to accept an argument that must have an id property
const processUser = <T extends HasId>(user: T): T => {
  return user;
}

processUser({ id: 1 });

const getUsersProperty = <T extends HasId, 
    K extends keyof T>(users: T[], 
    key: K): T[K][] => {
  return users.map(user => user[key])
}
const userList = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];

console.log(getUsersProperty(userList, 'name'));

class StateObject<T> {
  private data: T

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");
console.log(store.state);

const myState = new StateObject<(string|number|boolean)[]>([15])

myState.state = ['Dave', 42, true];
console.log(myState.state);

////////////////////////////////////////////////////////////////
// Utility types
interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

const updateAssignment = (assignment: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return { ...assignment, ...propsToUpdate };
}

const assignment1: Assignment = {
  studentId: 'compsci123',
  title: 'Final project',
  grade: 0
}

console.log(updateAssignment(assignment1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assignment1, { grade: 95 });

// Required and ReadOnly

const recordAssignment = (assign: Required<Assignment>):Assignment => {
  return assign;
}

const assignVerified: Readonly<Assignment> = {
  ...assignGraded, verified: true,
}

// assignVerified.grade = 88; // Fails. assignVerified is a readonly property

recordAssignment({ ...assignGraded, verified: true });

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF"
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U"
}

interface Grades {
  assign1: number,
  assign2: number
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 90 },
  Kelly: { assign1: 19, assign2: 22 }
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
  studentId: "k123",
  grade: 55
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project"
}

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades> // Dave | John

// ReturnType
// Allows to set types dinamically based on the return of a function call

// type newAssign = { title: string, points: number } //

const createNewAssign = (title: string, points: number) => {
  return { title, points };
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);

// Parameters
// Derives types from parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
