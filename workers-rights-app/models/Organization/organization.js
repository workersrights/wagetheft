class Organization {
  #id;
  #name;
  #abbrev;
  #image;
  #description;
  #addresses;
  #website;

  constructor(id, name, abbrev, image, description, addresses, website) {
    this.#id = id;
    this.#name = name;
    this.#abbrev = abbrev;
    this.#image = image;
    this.#description = description;
    this.#addresses = addresses;
    this.#website = website;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get abbrev() {
    return this.#abbrev;
  }

  get image() {
    return this.#image;
  }

  get description() {
    return this.#description;
  }

  get addresses() {
    return this.#addresses;
  }

  get website() {
    return this.#website;
  }
}

export default Organization;
