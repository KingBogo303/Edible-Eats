import axios from "axios";

export const getAllCategory = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  ).then((response) => response.json());
  return response.categories;
};

export const getAllArea = async (searchTerm) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  ).then((response) => response.json());
  return response;
};

export const searchmealByName = async (searchTerm) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
  ).then((response) => response.json());
  return response;
};

export const getMealById = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  ).then((response) => response.json());
  return response;
};

export const filterByCategory = async (filterTerm) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterTerm}`
  ).then((response) => response.json());
  return response;
};

export const filterByArea = async (filterTerm) => {
  const response =
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${filterTerm}
  `).then((response) => response.json());
  return response;
};
