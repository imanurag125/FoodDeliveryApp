function filter(searchInput, restrauntData) {
  return restrauntData.filter((restraunt) =>
    restraunt.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}

export { filter };
