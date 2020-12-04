import ImportedData from "./FetchRightsData.js";
import RightsCategory from "../models/rightsCategory";
import SubRight from "../models/subRight";
import Organization from "../models/organization";
import learnMore from "../models/learnMore";

test('Test empty initial state of ImportedData before calling importAllData', () => {
    expect(ImportedData.getRightsCategories()).toStrictEqual([]); // should be the empty array
    expect(ImportedData.getSubRights()).toStrictEqual([]);
    expect(ImportedData.getOraganizations()).toStrictEqual([]);
    expect(ImportedData.getLearnMores()).toStrictEqual([]);
  });

test('Test that importAllData populates data structures', () => {
    return ImportedData.importAllData().then(() => {
        expect(ImportedData.getRightsCategories().length).toBe(6);  // expecting 6 rights categories
        expect(ImportedData.getSubRights().length).toBeGreaterThan(0);      // expecting at least 1 element
        expect(ImportedData.getOraganizations().length).toBeGreaterThan(0); // expecting at least 1 element
        expect(ImportedData.getLearnMores().length).toBeGreaterThan(0);     // expecting at least 1 element
    });
  });

test('Test types of ImportedData data structure elements', () => {
    let rightsCat = ImportedData.getRightsCategories();
    let subrights = ImportedData.getSubRights();
    let orgs = ImportedData.getOraganizations();
    let learnmores = ImportedData.getLearnMores();

    containsInstancesOf(rightsCat, RightsCategory); // all elements of rightsCat should be instances of class RightsCategory
    containsInstancesOf(subrights, SubRight);
    containsInstancesOf(orgs, Organization);
    containsInstancesOf(learnmores, learnMore);
    // expect(orgs[0] instanceof Organization).toBe(true);
});

// Checks whether all elements of lst array is an instance of the specified espected class.
// For example, all elements of ImportedData.getRightsCategories() should be instances of class RightsCategory.
function containsInstancesOf(lst, expectedClass) {
    let len = lst.length;
    for(var i = 0; i < len; i++) {
        expect(lst[i] instanceof expectedClass).toBe(true);
    }
}
