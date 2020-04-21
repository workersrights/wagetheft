import RightsCategory from "../models/rightsCategory";
import SubRight from "../models/subRight";
import Event from "../models/event";

export const RIGHTSCATEGORIES = [
  new RightsCategory(
    "c1",
    "Getting Hired",
    require("../images/hiring-icon.png"),
    "Not getting paid what your employer owes you? Are you not allowed to take sick leaves?",
    "This section addresses the facts on wage and hours as well as your rights when it comes to leaves."
  ),
  new RightsCategory(
    "c2",
    "Mistreatment",
    require("../images/mistreatment-icon.png"),
    "Are you being harrassed or discriminated against at work? Is your employer being unfair or unreasonably disrespectful?",
    "This section addresses your rights to fair treatment, and other topics related to discrimination and general mistreatment."
  ),
  new RightsCategory(
    "c3",
    "Getting Paid",
    require("../images/payments-icon.png"),
    "",
    ""
  ),
  new RightsCategory(
    "c4",
    "Safety & Health",
    require("../images/health-icon.png"),
    "",
    ""
  ),
  new RightsCategory(
    "c5",
    "Unions",
    require("../images/unions-icon.png"),
    "",
    ""
  ),
  new RightsCategory(
    "c6",
    "Unemployment",
    require("../images/unemployment-icon.png"),
    "",
    ""
  ),
];

export const SUBRIGHTS = [
  new SubRight("sr1", ["c3"], "Deductions from Pay", "cat3.png", "💵"),
  new SubRight("sr2", ["c3"], "Final Paycheck Laws", "cat3.png", "💵"),
  new SubRight("sr3", ["c3"], "Meal and Rest Breaks", "cat3.png", "💵"),
  new SubRight("sr4", ["c3"], "Overtime Pay", "cat3.png", "💵"),
  new SubRight("sr5", ["c1"], "Interview / Application", "cat3.png", "🔖"),
  new SubRight("sr6", ["c1"], "Background Checks", "cat3.png", "🔖"),
  new SubRight(
    "sr7",
    ["c1"],
    "Non-Disclosure Agreements (NDAs)",
    "cat3.png",
    "🔖"
  ),
  new SubRight("sr8", ["c2"], "Race Discrimination", "cat3.png", "✋"),
  new SubRight("sr9", ["c2"], "Age Discrimination", "cat3.png", "✋"),
  new SubRight("sr10", ["c2"], "Sexual Harassment", "cat3.png", "✋"),
  new SubRight("sr11", ["c4"], "Workplace Safety Protections", "cat3.png", "⛑"),
  new SubRight(
    "sr12",
    ["c4"],
    "Infectious Diseases in Workplace",
    "cat3.png",
    "⛑"
  ),
  new SubRight("sr13", ["c4"], "Injured at Work", "cat3.png", "⛑"),
  new SubRight(
    "sr14",
    ["c5"],
    "Retaliation for Collective Action",
    "cat3.png",
    "👫"
  ),
  new SubRight("sr15", ["c5"], "Right to Work Laws", "cat3.png", "👫"),
  new SubRight(
    "sr16",
    ["c6"],
    "Unemployment Insurance Benefits",
    "cat3.png",
    "👩‍💼"
  ),
  new SubRight("sr17", ["c6"], "Fired For No Reason", "cat3.png", "👩‍💼"),
  new SubRight(
    "sr18",
    ["c6"],
    "Unemployment Compensation App",
    "cat3.png",
    "👩‍💼"
  ),
];

export const EVENTS = [
  new Event(
    "e1",
    "Know Your Rights Workshop",
    "05/20/2020",
    "https://540westmain.files.wordpress.com/2018/01/know.jpg",
    "WTC",
    "San Jose",
    0,
    "workshop",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
  new Event(
    "e2",
    "Legal Workshop",
    "06/11/2020",
    "https://previews.123rf.com/images/belchonock/belchonock1802/belchonock180286505/96155278-word-law-with-judges-gavel-and-legal-books-on-wooden-background.jpg",
    "Stanford Law Clinic",
    "Stanford",
    0,
    "workshop",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
  new Event(
    "e3",
    "PAWIS Potluck",
    "04/29/2020",
    "https://i0.wp.com/pawis-sv.com/wp-content/uploads/2014/01/pawis-logo-final.jpg?fit=584%2C438&ssl=1",
    "PAWIS",
    "San Jose",
    0,
    "social",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
  new Event(
    "e4",
    "PAWIS Church Meeting",
    "04/29/2020",
    "https://i0.wp.com/pawis-sv.com/wp-content/uploads/2014/01/pawis-logo-final.jpg?fit=584%2C438&ssl=1",
    "PAWIS",
    "San Jose",
    0,
    "social",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis. Diam volutpat commodo sed egestas egestas. Placerat vestibulum lectus mauris ultrices eros. Id consectetur purus ut faucibus pulvinar elementum. Felis eget velit aliquet sagittis id. Eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dui nunc mattis enim ut tellus elementum sagittis vitae. Id velit ut tortor pretium. Nulla facilisi nullam vehicula ipsum a. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas congue quisque egestas diam in. Arcu dictum varius duis at consectetur lorem."
  ),
];
