// deep
//   / diːp /
// adjective
// extending far down from the top or surface.

//does it mean deep in terms of value-of-properties or parent-of-objects?
//prolly value-of-properties

function deepEqual(object1, object2, conf, areDescriptorObjects = false) {
  // object(s) at same address can't have different configs or values, duh!!
  if (object1 === object2) { //handles primitives or strings or functions too
    return true;
  }

  //only objects needs to be checked deeply, all non equating primitives filter here
  if (typeof object1 !== 'object' || typeof object2 !== 'object') {
    return false
  }

  const mergedOwnPropertiesOfObjects = new Set([
    ...Object.getOwnPropertyNames(object1),
    ...Object.getOwnPropertySymbols(object1),
    ...Object.getOwnPropertyNames(object2),
    ...Object.getOwnPropertySymbols(object2),
  ])

  for (let property of mergedOwnPropertiesOfObjects) {
    //both objects must have the property
    if (!object1.hasOwnProperty(property) || !object2.hasOwnProperty(property)) {
      return false;
    }

    let isEqual;

    if (conf && conf.matchDescriptors && !areDescriptorObjects) {
      isEqual = deepEqual(Object.getOwnPropertyDescriptor(object1, property),
        Object.getOwnPropertyDescriptor(object2, property), conf, true);
    }
    else {
      isEqual = deepEqual(object1[property], object2[property], conf);
    }

    if (!isEqual) {
      return false;
    }
  }


  return true;
}

export {
  deepEqual,
};
