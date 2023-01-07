import meatLoaf from "./meatLoaf"
import burgerBoats from "./burgerBoats"
import tunaCasserole from "./tunaCasserole"

export default {
  key: "main",
  name: "Main Dishes",
  background: "CornflowerBlue",
  image: "main-dishes.svg",
  description: "Meals for any occasion",
  recipes: [
    burgerBoats,
    meatLoaf,
    tunaCasserole  
  ]
}
