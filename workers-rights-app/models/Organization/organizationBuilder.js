/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
import Organization from "./organization";

const buildOrg = (id, abbrev, addresses, description, image, name, website) => {
  if (
    id == null ||
    abbrev == null ||
    addresses == null ||
    description == null ||
    image == null ||
    name == null ||
    website == null
  ) {
    return null;
  }

  if (
    typeof id !== "string" ||
    typeof abbrev !== "string" ||
    typeof addresses !== "string" ||
    typeof description !== "string" ||
    typeof image !== "string" ||
    typeof name !== "string" ||
    typeof website !== "string"
  ) {
    return null;
  }

  const addressesParsed = JSON.parse(addresses);

  return new Organization(
    id,
    name,
    abbrev,
    image,
    description,
    addressesParsed,
    website
  );
};

export default buildOrg;
