class quizOption {
  constructor(id, description, image, isLast, childrenQuizOptions, subRights) {
    this.id = id;
    this.description = description;
    this.image = image;
    this.isLast = isLast;
    this.childrenQuizOptions = childrenQuizOptions;
    this.subRights = subRights;
  }
}

export default quizOption;
