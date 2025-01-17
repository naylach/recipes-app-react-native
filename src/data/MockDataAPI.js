import { recipes, categories, detalleproducto,misproductos,especificacionProductoDATA } from './dataArrays';

export function getCategoryById(categoryId) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getProductName(productoid) {
  let name;
  detalleproducto.map(data => {
    if (data.productoid == productoid) {
      name = data.name;
    }
  });
  return name;
}

export function getProductUrl(productoid) {
  let url;
  detalleproducto.map(data => {
    if (data.productoid == productoid) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

// modifica
export function getRecipesByProduct(productoid) {
  const recipesArray = [];
  recipes.map(data => {
    data.detalleproducto.map(index => {
      if (index[0] == productoid) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId) {
  let count = 0;
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllProducts(idArray) {
  const ingredientsArray = [];
  idArray.map(index => {
    detalleproducto.map(data => {
      if (data.productoid == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByProductName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];
  detalleproducto.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const recipes = getRecipesByProduct(data.productoid);
      const unique = [...new Set(recipes)];
      unique.map(item => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipes(data.id); // return a vector of recipes
      recipes.map(item => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  recipes.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

//MIS PUBLICACIONES
export function getProductos(productosName) {
  let name;
  misproductos.map((data) => {
    if (data.id == productosName) {
      name = data.titulo;
    }
  });
  return name;
}

//Especificacion de un producto -- no implementado
export function getEspecificacionProductos(productosDetails) {
  let name;
  especificacionProductoDATA.map((data)=>{
    if (data.idProducto==productosDetails){
        name=data;
    }
  });
  return name;
}