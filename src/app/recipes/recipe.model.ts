export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(theName: string, theDesc: string, theImagePath: string) {
    this.name = theName;
    this.description = theDesc;
    this.imagePath = theImagePath;
  }
}
