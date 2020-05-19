class Organization {
    constructor(id, title, image, description, rights) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.description = description;
        this.rights = rights; // array of rights the agency helps with
    }
}

export default Organization;