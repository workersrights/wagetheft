class Organization {
    constructor(id, title, image, description, link, rights) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.description = description;
        this.link = link;
        this.rights = rights; // array of rights the agency helps with
    }
}

export default Organization;