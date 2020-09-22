

function chunkArrayInGroups(array, chunkSize, chunkedArrayGroups=[]) {
  
  const chunkedArrayGroup = array.slice(0,chunkSize);
  
  if(chunkedArrayGroup.length !== 0){
    chunkedArrayGroups.push(chunkedArrayGroup);
    chunkArrayInGroups(array.slice(chunkSize), chunkSize, chunkedArrayGroups);
  }

  return chunkedArrayGroups;
}

export {
  chunkArrayInGroups,
};
