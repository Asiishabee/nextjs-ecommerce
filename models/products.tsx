import { Category } from "./category";

export class Product{
  [x: string]: any;
  id: number;
  title: string;
  price: number;
  image:string;
  category:Category;
  description: string;


  constructor(id: number, title: string, price: number, image: string,category: Category, description:string) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.image = image;
      this.category = category;
      this.description = description;
     
  
    }
 
}

