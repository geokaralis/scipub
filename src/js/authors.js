class Authors {

  constructor(element) {
    this.element = element;
  }

  getChildrenByTagName(tagName) {
    let array = Array.from(this.element.children);
    let children = [];

    array.forEach((child) => {
      if (child.tagName === tagName.toUpperCase()) {
        children.push(child);
      }
    });

    return children;
  }

  titles() {
    return this.getChildrenByTagName('h5');
  }

  links() {
    return this.getChildrenByTagName('a');
  }

  authors() {
    return this.getChildrenByTagName('div');
  }

  children() {
    let array = Array.from(this.element.children);
    let children = [];

    array.forEach((child) => {
      children.push(child);
    });

    return children;
  }

  removeItems(array, item) {
    for ( var i = 0; i < item; i++ ) {
        array.pop();
    }
  }

  peek(array) {
    return array[array.length - 1];
  }
}

export default Authors;