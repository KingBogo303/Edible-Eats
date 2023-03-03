import axios from "axios";

const getAllCategory = async () => {
  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.text())
    .then((data) => console.log(data));
};

export const getAllArea = async (searchTerm) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    .then((response) => response.text())
    .then((data) => console.log(data));
};

export const searchmealByName = async (searchTerm) => {
  await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
  )
    .then((response) => response.text())
    .then((data) => console.log(data));
};

export const getMealById = async (id) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.text())
    .then((data) => console.log(data));
};

export const filterByCategory = async (filterTerm) => {
  await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterTerm}`
  )
    .then((response) => response.text())
    .then((data) => console.log(data));
};

export const filterByArea = async (filterTerm) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${filterTerm}
  `)
    .then((response) => response.text())
    .then((data) => console.log(data));
};
