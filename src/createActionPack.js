function createActionPack(type, promise, meta = {}) {

  const typeString = type.toString();

  const actionCreator = () => {
    const action = { type, promise, meta };
    return action;
  }

  actionCreator.toString = () => typeString;

  return actionCreator;

}

module.exports = createActionPack