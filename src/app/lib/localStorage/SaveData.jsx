"use client";
const SaveData = (keyname, keyValue) => {
  localStorage.setItem(keyname, JSON.stringify(keyValue));
};

export default SaveData;
