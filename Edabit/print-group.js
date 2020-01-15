const printAllGroups = () => {
  let groups = ["a", "b", "c", "d", "e"];
  let result = [];
  for (let year = 1; year < 7; year++) {
    for (let index = 0; index < groups.length; index++) {
      result.push(year + groups[index]);
    }
  }
  return result.join(', ');
}
