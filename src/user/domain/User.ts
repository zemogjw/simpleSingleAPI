export class User {
  _id: string;
  name: string;
  email: string;
  active: boolean;
  points: number;

  constructor(id: string, name: string, email: string, active: boolean, points: number) {
    this._id = id;
    this.name = name;
    this.email = email;
    this.active = active;
    this.points = points;
  }
}
